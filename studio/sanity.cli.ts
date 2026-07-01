import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'nvhc1tge',
    dataset: 'production',
  },
  // Sottodominio dello Studio ospitato: https://sacrelia.sanity.studio
  studioHost: 'sacrelia',
  deployment: {
    appId: 'h7o0tebgnc4gppuf8f6unj1g',
  },
});
