/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require("gatsby-source-filesystem")
const path = require(`path`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
  exports.createPages = async ({ graphql, actions }) => {
    const { data } = await getPageData(graphql)
    data.pages.edges.forEach(({ node }) => {
      const { slug } = node.fields
      const { templateKey } = node.frontmatter
      if(templateKey == "blog-post"){
      actions.createPage({
        path: `/blog${slug}`,
        component: path.resolve("./src/components/templates/BlogPost.js"),
        context: { slug: slug },
      })
      }
      if(templateKey == "work-post"){
        actions.createPage({
          path: `/work${slug}`,
          component: path.resolve("./src/components/templates/WorkPost.js"),
          context: { slug: slug },
        })
        }
    })
  }
  async function getPageData(graphql) {
    return await graphql(`
      {
        pages: allMarkdownRemark {
          edges {
            node {
              frontmatter {
                templateKey
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  }