import React from 'react';
import componentTemplate from '../libs/componentTemplate';
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-hot-toast";

interface Content {
  name: string
  type: string
  value: string
}

interface Component {
  id: string
  componentName: string
  content: Content[]
  children: Component[]
}

interface PageEditorProviderProps {
  children: React.ReactNode
  _blocks: Component[]
  _editedComponents?: Component[]
  _resource: any
  _locale: string
  typenamePrefix?: string
  isPage?: boolean
}

const addBlock = (blocks, insertBlock, newBlock) => {
  return blocks.map((block) => {
    if (block.id === insertBlock.id) {
      if (insertBlock.componentName === 'Container') {
        const newChildren = [...block.children, newBlock];
        return {...block, children: newChildren};
      }
    }
    const insertBlockIndex = block.children.findIndex((block) => {
      return block.id === insertBlock.id;
    });

    if (insertBlockIndex !== -1) {
      if (insertBlock.componentName === 'Container') {
        const containerNewChildren = [
          ...block.children[insertBlockIndex].children,
          newBlock
        ];
        const newChildren = [
          ...block.children.slice(0, insertBlockIndex),
          {...block.children[insertBlockIndex], children: containerNewChildren},
          ...block.children.slice(insertBlockIndex + 1),
        ];

        return {...block, children: newChildren};
      } else {
        const newChildren = [
          ...block.children.slice(0, insertBlockIndex + 1),
          newBlock,
          ...block.children.slice(insertBlockIndex + 1),
        ];
        return {...block, children: newChildren};
      }
    } else {
      const newChildren = addBlock(block.children, insertBlock, newBlock);
      return {...block, children: newChildren};
    }

    return block;
  });
}

const removeBlock = (blocks, needRemoveId) => {
  return [...blocks].filter((block) => {
    return block.id !== needRemoveId;
  }).map(block => {
    block.children = removeBlock(block.children, needRemoveId);

    return block;
  })
}

const updateBlockContent = (blocks, selectComponentId, updateContent) => {
  return blocks.map((block) => {
    block.contents.map((content) => {
      if ((block.id === selectComponentId) && (content.id === updateContent.contentId)) {
        content['value'] = updateContent.contentValue;
      }
      return content;
    });

    if (block.children === undefined) {
      block.children = [];
    }

    block.children = updateBlockContent(block.children, selectComponentId, updateContent);

    return block;
  });
}

const blocksReducer = (blocks, action) => {
  switch (action.type) {
    case 'ADD_BLOCK': {
      try {
        const selectComponent = action.selectComponent ? action.selectComponent : blocks[0];

        const componentName = action.component.componentName;

        const newBlock = {...componentTemplate[componentName]};
        newBlock.id = uuidv4();

        newBlock.contents = newBlock.contents.map(content => {
          return {...content, id: uuidv4()};
        });

        return addBlock([...blocks], selectComponent, newBlock);
      } catch (error) {
        toast.error("This didn't work.")
        console.error(error);
      }
      return blocks;
    }
    case 'REMOVE_BLOCK': {
      const selectComponentId = action.component.id;

      return removeBlock([...blocks], selectComponentId);
    }
    case 'UPDATE_BLOCK_CONTENT': {
      const selectComponentId = action.component.id;
      const updateContent = action.updateContent;

      return updateBlockContent([...blocks], selectComponentId, updateContent);
    }
    case 'UPDATE_BLOCKS': {
      return action.blocks;
    }
    default: {
      return blocks;
    }
  }
}

const editedComponentsReducer = (components, action) => {
  switch (action.type) {
    case 'UPDATE_EDITED_CONTENT': {
      const selectComponent = action.component;
      const updateContent = action.updateContent;

      const newContents = selectComponent.contents.map((content) => {
        if (content.id === updateContent.contentId) {
          return {
            ...content,
            value: updateContent.contentValue
          }
        }
        return content;
      })
      const newComponent = {...selectComponent, contents: newContents};

      return mergeComponents(components, newComponent);
    }
    case 'UPDATE_EDIT_CONTENT': {
      return components;
    }
    default: {
      return components;
    }
  }
}

const mergeComponents = (components, element) => {
  const findIndex = components.findIndex(component => {
    return component.id === element.id;
  });

  if (findIndex === -1) {
    return components.concat([element]);
  }

  return components.map((component) => {
    if (component.id === element.id) {
      return element;
    }
    return component;
  });
}

const localeReducer = (_, action) => {
  return action.locale;
}


const selectComponentReducer = (_, action) => {
  return action.block;
}

const previewReducer = (_, action) => {
  return action;
}

const getResourceNode = (edges, typename) => {
  const node = edges.find(edge => edge.node.__typename === typename)?.node;
  return node ? node : [];
}

const getResourceNodes = (edges, typename) => {
  const nodes = edges.filter(edge => edge.node.__typename === typename).map(edge => edge.node);
  return nodes ? nodes : [];
}


export const PageEditorContext = React.createContext({
  blocks: [] as Component[],
  editedComponents: [] as Component[],
  selectComponent: {} as Component,
  resource: {} as any,
  locale: 'zh-HK' as string,
  preview: true as boolean,
} as any);

export function PageEditorProvider({
  children,
  _blocks = [],
  _editedComponents = [],
  _resource,
  _locale,
  typenamePrefix = '',
  isPage = false
}: PageEditorProviderProps): React.ReactElement {
  const [preview, dispatchPreview] = React.useReducer(previewReducer, true);
  const [blocks, dispatchBlocks] = React.useReducer(blocksReducer, _blocks);
  const [editedComponents, dispatchEditedComponents] = React.useReducer(editedComponentsReducer, _editedComponents);
  const [locale, dispatchLocale] = React.useReducer(localeReducer, _locale);
  const [selectComponent, dispatchSelectComponent] = React.useReducer(selectComponentReducer, null);
  const [resource, setResource] = React.useState({
    ..._resource,
    edges: {
      articles: isPage ? getResourceNodes(_resource.page.edges, `${typenamePrefix}Article`) : [_resource.article[0]],
      branches: isPage ? getResourceNodes(_resource.page.edges, `${typenamePrefix}Branch`) : [_resource.branch[0]],
      clinics: isPage ? getResourceNodes(_resource.page.edges, `${typenamePrefix}Clinic`) : [_resource.clinic[0]],
      people: isPage ? getResourceNodes(_resource.page.edges, `${typenamePrefix}Person`) : [_resource.person[0]],
      landingpages: isPage ? getResourceNodes(_resource.page.edges, `${typenamePrefix}LandingPage`) : [_resource.landingpage[0]],
      events: isPage ? getResourceNodes(_resource.page.edges, `${typenamePrefix}Event`) : [_resource.event[0]],
      socialResponsibilities: isPage ? getResourceNodes(_resource.page.edges, `${typenamePrefix}SocialResponsibility`) : [_resource.socialResponsibility[0]],
      promotions: isPage ? getResourceNodes(_resource.page.edges, `${typenamePrefix}Promotion`) : [_resource.promotion[0]],

      article: isPage ? getResourceNode(_resource.page.edges, `${typenamePrefix}Article`) : _resource.article[0],
      branch: isPage ? getResourceNode(_resource.page.edges, `${typenamePrefix}Branch`) : _resource.branch[0],
      clinic: isPage ? getResourceNode(_resource.page.edges, `${typenamePrefix}Clinic`) : _resource.clinic[0],
      person: isPage ? getResourceNode(_resource.page.edges, `${typenamePrefix}Person`) : _resource.person[0],
      landingpage: isPage ? getResourceNode(_resource.page.edges, `${typenamePrefix}LandingPage`) : _resource.landingpage[0],
      event: isPage ? getResourceNode(_resource.page.edges, `${typenamePrefix}Event`) : _resource.event[0],
      socialResponsibility: isPage ? getResourceNode(_resource.page.edges, `${typenamePrefix}SocialResponsibility`) : _resource.socialResponsibility[0],
      promotion: isPage ? getResourceNode(_resource.page.edges, `${typenamePrefix}Promotion`) : _resource.promotion[0],
    }
  });

  React.useEffect(() => {
    dispatchBlocks({
      type: 'UPDATE_BLOCKS',
      blocks: _blocks
    });
  }, [_blocks]);

  React.useEffect(() => {
    dispatchEditedComponents({
      type: 'UPDATE_EDIT_CONTENT',
      components: _editedComponents
    });
  }, [_editedComponents]);

  React.useEffect(() => {
    dispatchLocale({
      locale: _locale
    });
  }, [_locale]);

  React.useEffect(() => {
    setResource({
      ..._resource,
      edges: {
        articles: isPage ? getResourceNodes(_resource.page.edges, `${typenamePrefix}Article`) : [_resource.article[0]],
        branches: isPage ? getResourceNodes(_resource.page.edges, `${typenamePrefix}Branch`) : [_resource.branch[0]],
        clinics: isPage ? getResourceNodes(_resource.page.edges, `${typenamePrefix}Clinic`) : [_resource.clinic[0]],
        people: isPage ? getResourceNodes(_resource.page.edges, `${typenamePrefix}Person`) : [_resource.person[0]],
        landingpages: isPage ? getResourceNodes(_resource.page.edges, `${typenamePrefix}LandingPage`) : [_resource.landingpage[0]],
        events: isPage ? getResourceNodes(_resource.page.edges, `${typenamePrefix}Event`) : [_resource.event[0]],
        socialResponsibilities: isPage ? getResourceNodes(_resource.page.edges, `${typenamePrefix}SocialResponsibility`) : [_resource.socialResponsibility[0]],
        promotions: isPage ? getResourceNodes(_resource.page.edges, `${typenamePrefix}Promotion`) : [_resource.promotion[0]],

        article: isPage ? getResourceNode(_resource.page.edges, `${typenamePrefix}Article`) : _resource.article[0],
        branch: isPage ? getResourceNode(_resource.page.edges, `${typenamePrefix}Branch`) : _resource.branch[0],
        clinic: isPage ? getResourceNode(_resource.page.edges, `${typenamePrefix}Clinic`) : _resource.clinic[0],
        person: isPage ? getResourceNode(_resource.page.edges, `${typenamePrefix}Person`) : _resource.person[0],
        landingpage: isPage ? getResourceNode(_resource.page.edges, `${typenamePrefix}LandingPage`) : _resource.landingpage[0],
        event: isPage ? getResourceNode(_resource.page.edges, `${typenamePrefix}Event`) : _resource.event[0],
        socialResponsibility: isPage ? getResourceNode(_resource.page.edges, `${typenamePrefix}SocialResponsibility`) : _resource.socialResponsibility[0],
        promotion: isPage ? getResourceNode(_resource.page.edges, `${typenamePrefix}Promotion`) : _resource.promotion[0],
      }
    });
  }, [_resource, isPage, typenamePrefix]);

  return (
    <PageEditorContext.Provider
      value={{
        blocks,
        dispatchBlocks,

        editedComponents,
        dispatchEditedComponents,

        selectComponent,
        dispatchSelectComponent,

        resource,

        locale,
        dispatchLocale,

        preview,
        dispatchPreview,

      }}
    >
      { children }
    </PageEditorContext.Provider>
  )
}
