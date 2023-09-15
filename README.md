## Custom Element Manifest Plugin:

### Generating README from custom-elements.json

`cem-to-markdown-readme` combines the functionality of two community plugins:

- A variant of the [to-markdown plugin](https://github.com/open-wc/custom-elements-manifest/tree/master/packages/to-markdown), with added support for the 'description' section in classes and mixins.

- The [cem-plugin-readonly plugin](https://github.com/bennypowers/cem-plugins/tree/main/plugins/cem-plugin-readonly).

All configuration options are as described in this [document - README-to-markdown](https://github.com/oscarmarina/to-markdown/blob/main/README.md), and it also utilizes an additional option, 'filename,' which corresponds to the 'file' option in the [fs.writeFileSync(file, data[, options])](https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options) method.

## Usage

### Installation:

```bash
npm install --save-dev @blockquote/cem-to-markdown-readme
```

### Import

Add the following code to your [_custom-elements-manifest.config.js_](https://custom-elements-manifest.open-wc.org/analyzer/config/#config-file):

```js
import { cemToMarkdownReadme } from '@blockquote/cem-to-markdown-readme';

export default {
  plugins: [...cemToMarkdownReadme()],
};
```

<hr>

Configuration options required to use the original `to-markdown` plugin by default.

```js
// @override: {private:'details', headingOffset = 2, omitSections = ['super-class']}

export default {
  plugins: [
    ...cemToMarkdownReadme({
      private: 'all',
      headingOffset: 0,
      omitSections: [],
    }),
  ],
};
```

<hr>

Configuration filename option.

```js
export default {
  plugins: [
    ...cemToMarkdownReadme({
      filename: 'internal-readme.md',
    }),
  ],
};
```
