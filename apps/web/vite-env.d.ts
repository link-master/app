/// <reference types="vite/client" />

// eslint-disable-next-line unicorn/prevent-abbreviations
interface ImportMetaEnv {
  readonly VITE_FEATURE_COLLECTIONS: string;
  readonly VITE_FEATURE_SYNC: string;
  readonly VITE_FEATURE_TEMPLATE: string;
  readonly VITE_FEATURE_HOME: string;
  readonly VITE_FEATURE_SETTINGS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
