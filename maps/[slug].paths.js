import { readFileSync } from 'fs'
import { globSync } from 'glob'

export default {
  paths() {
    return globSync('wardley-maps-mermaid/**/*.mmd', { ignore: ['.git/**'] }).map(path => {
      const slug = path.replace('wardley-maps-mermaid/', '').replace('.mmd', '')
      return {
        params: {
          slug: slug.toLowerCase(),
        },
        content: `
# ${ slug.split('/').pop() }

\`\`\`mermaid
${ readFileSync(path, 'utf8') }
\`\`\`

[source](https://github.com/swardley/WARDLEY-MAP-REPOSITORY/blob/main/${ encodeURIComponent(slug) })
`,
      }
    })
  },
}
