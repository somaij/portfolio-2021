import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Header from '../header'

const BlogPost = ({ data }) => {
  console.log("data,", data)
  return (
    <div>
      <Header/>
      <div id="post-header">
        <div class="background">
      <Img
          fluid={data.markdownRemark.frontmatter.image.childImageSharp.fixed}
        />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-6">
            <div class="content">
              <div class="line-wrapper">
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div class="sub"></div>
            </div>
            </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="blog-content">
        <div class="container">
          <div class="row justify-content-center">
          <div class="col-11 col-md-10">
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}} class="regular-text"></div>
          </div>
          </div>
      </div>  
      </div>
    </div>
  )
}

export default BlogPost

export const BlogPostTemplateQuery = graphql`
  query BlogPostTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fixed(width: 1920) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`