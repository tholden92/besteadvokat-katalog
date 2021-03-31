/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const getData = async () => {
    await fetch('')
}

exports.createPages = async ({ actions }) => {
  createPage({
    path: slugify(chain.alias),
    component: path.resolve(`./src/layouts/chain.tsx`),
    context: {
      ...chain,
    },
  })
}
