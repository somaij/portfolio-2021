
import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMdx

    return (
      <div className="col-6 col-lg-4">
        {posts &&
          posts.map(({ node: post }) => (
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
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMdx(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                description
                image {
                    childImageSharp {
                      fixed(width: 320) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)