module.exports = {
  styleguideDir: 'build/styleguide',
  skipComponentsWithoutExample: true,
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
      components: 'src/ui/components/**/[A-Z]*.js',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    }
  ]
};