import React from 'react';
import blockTypeComponentMap from '../../libs/blockTypeComponentMap';

import { PageEditorContext } from '../../contexts/pageEditor';

const Blocks = ({ _blocks, builderMode = false }: BlocksProps ): React.ReactElement => {
  const { selectComponent } = React.useContext(PageEditorContext);
  const { dispatchSelectComponent } = React.useContext(PageEditorContext);
  const { locale } = React.useContext(PageEditorContext);
  const { resource } = React.useContext(PageEditorContext);
  const { preview } = React.useContext(PageEditorContext);

  const getValue = (o, s) => {
    // convert indexes to properties
    s = s.replace(/\[(\w+)\]/g, '.$1');
    // strip a leading dot
    s = s.replace(/^\./, '');
    const a = s.split('.');
    for (let i = 0, n = a.length; i < n; ++i) {
        const k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
  }

  const getProps = (object) => {
    return object.reduce((r, o) => {
      r[o.name] = o.value;
      if (preview) {
        switch (o.type) {
          case 'selector': {
            try {
              r[o.name] = getValue(resource.edges, o.value);
            } catch (error) {
              r[o.name] = o.value;
            }
            break;
          }
          case 'edges': {
            try {
              r[o.name] = resource.edges[o.value];
            } catch (error) {
              r[o.name] = o.value;
            }
            break;
          }
          case 'collection': {
            try {
              r[o.name] = resource[o.value];
            } catch (error) {
              r[o.name] = o.value;
            }
            break;
          }
          default: {
            break;
          }
        }
      }
      return r;
    }, Object.create(null));
  }

  const stopPropagation = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  const selectBlockComponent = (block) => {
    dispatchSelectComponent({ block: block });
  }

  return (
    <>
      {
        _blocks.map((block, idx) => {
          try {
            const { componentName, children, contents } = block;
            const { Component } = blockTypeComponentMap[componentName];
            const props = getProps(contents);
            return (
              <Component
                key={`${idx}-${locale}-${componentName}`}
                locale={locale}
                _children={ children }
                preview={ preview }
                resource={ resource }
                { ...props }
                builderMode={builderMode}
                isSelected={selectComponent?.id === block.id}
                selectBlockFun={(e) => {
                  if (builderMode) {
                    stopPropagation(e);
                    selectBlockComponent(block);
                  }
                }}
              />
            )
          } catch (error) {
            const { componentName } = block;
            console.log('error', componentName);
            return (

              <h1>{ componentName }</h1>
            )
          }
        })
      }
    </>
  );
}

interface BlocksProps {
  _blocks: any
  builderMode: boolean
}

export default Blocks;
