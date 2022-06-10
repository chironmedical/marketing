import "../src/index.css";
import { PageEditorProvider } from "../src/contexts/pageEditor";

import type { GlobalProvider } from "@ladle/react";

export const Provider: GlobalProvider = ({ children, globalState }) => (
  <>
    <PageEditorProvider
      _blocks={[]}
      _editedComponents={[]}
      _resource={{
        articles: [{}],
        branches: [{}],
        clinics: [{}],
        people: [{}],
        landingpages: [{}],
        events: [{}],
        socialResponsibilities: [{}],
        promotions: [{}],
        article: [{}],
        branch: [{}],
        clinic: [{}],
        person: [{}],
        landingpage: [{}],
        event: [{}],
        socialResponsibility: [{}],
        promotion: [{}],
      }}
      _locale="zh-HK"
      typenamePrefix="Chiron_"
      isPage={false}
    >
      {children}
    </PageEditorProvider>
  </>
);
