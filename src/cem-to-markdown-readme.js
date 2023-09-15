import { writeFileSync } from 'node:fs';
import { customElementsManifestToMarkdown } from '@blockquote/to-markdown';
import { readonlyPlugin } from './cem-plugin-readonly.js';

const generateReadme = (options) => {
  const {
    filename = './README.md',
    private: privateOption = 'details',
    headingOffset = 2,
    omitDeclarations = [],
    omitSections = ['super-class'],
    classNameFilter = '.*',
  } = options ?? {};
  return {
    name: 'cem-to-markdown-readme',
    async packageLinkPhase({ customElementsManifest }) {
      const content = customElementsManifestToMarkdown(customElementsManifest, {
        headingOffset,
        classNameFilter,
        omitSections,
        omitDeclarations,
        private: privateOption,
      });

      writeFileSync(filename, content);
    },
  };
};

export const cemToMarkdownReadme = (options) => [generateReadme(options), readonlyPlugin()];
