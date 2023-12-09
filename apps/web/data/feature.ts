export const FEATURE_COLLECTION = JSON.parse(
  import.meta.env.VITE_FEATURE_COLLECTIONS
) as boolean;

export const FEATURE_SYNC = JSON.parse(
  import.meta.env.VITE_FEATURE_SYNC
) as boolean;

export const FEATURE_TEMPLATE = JSON.parse(
  import.meta.env.VITE_FEATURE_TEMPLATE
) as boolean;

export const FEATURE_HOME = JSON.parse(
  import.meta.env.VITE_FEATURE_HOME
) as boolean;

export const FEATURE_SETTINGS = JSON.parse(
  import.meta.env.VITE_FEATURE_SETTINGS
) as boolean;
