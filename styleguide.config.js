const path = require('path');

module.exports = {
  styleguideDir: 'build/styleguide',
  skipComponentsWithoutExample: true,
  getComponentPathLine(componentPath) {
    const dir = path.dirname(componentPath);
    const dirArray = dir.split("/");
    const name = dirArray[dirArray.length -1];

    return `import { ${name} } from '${dir.replace('src/', '')}';`
  },
  sections: [
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          description: 'The description for the installation section'
        },
        {
          name: 'Live Demo',
          external: true,
          href: 'http://example.com'
        }
      ]
    },
    {
      name: 'UI Components',
      components: 'src/ui/components/*/index.js',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
    {
      name: 'UI Form Components',
      components: 'src/ui/components/formComponents/*/[A-Z]*.js',
      exampleMode: 'collapse',
      usageMode: 'expand',
    }
  ]
};