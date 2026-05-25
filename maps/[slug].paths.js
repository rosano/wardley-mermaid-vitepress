import { readFileSync } from 'fs'
import { globSync } from 'glob'

export default {
  paths() {
    return globSync('wardley-maps-mermaid/**/*.mmd', { ignore: ['.git/**'] }).map(path => {
      const slug = path.replace('wardley-maps-mermaid/', '').replace('.mmd', '')
      return {
        params: {
          slug: slug.toLowerCase(),
          title: slug.split('/').pop(),
          link: 'https://github.com/swardley/WARDLEY-MAP-REPOSITORY/blob/main/' + slug
        },
        content: readFileSync(path, 'utf8'),
      }
    })
  }
}
