import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        esModuleInterop: true,
        strict: true,
      },
      propFilter: prop => {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          const hasPropAdditionalDescription = prop.declarations.find(
            declaration => {
              return !declaration.fileName.includes('node_modules');
            },
          );
          if (!Boolean(hasPropAdditionalDescription)) {
            return false;
          }
        }
        return !['as', 'ref'].includes(prop.name);
      },
      savePropValueAsString: false,
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: false,
      shouldRemoveUndefinedFromOptional: true,
      skipChildrenPropWithoutDoc: true,
    },
  },
};

export default config;
