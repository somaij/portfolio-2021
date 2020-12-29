import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default class BlogList extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
        <div class="row justify-content-center">
      
        {posts &&
          posts.map(({ node: post }) => (
            <div className="col-10 col-lg-4">
              <Link to={"/blog" + post.fields.slug} className="post-preview">
                  {post.frontmatter.image ? (
                    <div className="image">
                      <Img
                        fixed={post.frontmatter.image.childImageSharp.fixed}
                        />
                    </div>
                  ) : null}
                <div className="text">
                <h3>
                      {post.frontmatter.title}
                </h3>
                <p>
                  {post.frontmatter.description}
                </p>
                <span className="btn outline white">Read</span>
                </div>
                </Link>
                </div>
          ))}
      
      </div>
    )
  }
}
export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`