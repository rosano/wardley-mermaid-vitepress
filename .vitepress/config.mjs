import { withMermaid } from 'vitepress-plugin-mermaid'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
import { globSync } from 'glob'

const tidy = e => e.replace('wardley-maps-mermaid/', '')

export default withMermaid({
  title: 'wardley-mermaid-vitepress',
  description: 'site of maps',

  base: '/wardley-mermaid-vitepress/',
  cleanUrls: true,
  
  srcExclude: ['**/*README.md', '**/vendor/*'],

  head: [['link', { rel: 'icon', href: 'data:;base64,=' }]],

  themeConfig: {
    sidebar: globSync('wardley-maps-mermaid/*/', { ignore: ['.git/**'] }).filter(e => ![
    'personal',
    'tools',
  ].includes(e.split('/').pop())).sort().map(path => {
      const slug = tidy(path)
      return {
        text: slug,
        items: globSync(`${ path }/**/*.mmd`).sort().map(path => {
          const slug = tidy(path).replace('.mmd', '');
          return {
            text: slug.split('/').pop(),
            link: '/maps/' + slug.toLowerCase(),
          }
        }),
      }
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rosano/wardley-mermaid-vitepress' }
    ],

    aside: false,
  },

  mermaid:{
    theme: 'base',
    themeVariables: {
      fontSize: '12px',
      fontFamily: 'Arial',
    },
  },

  vite:{
    plugins:[
      pagefindPlugin(),
    ],
  }

});
