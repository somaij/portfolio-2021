import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Header from '../header'
import ReactAnime from 'react-animejs'

const {Anime, stagger} = ReactAnime

const random = (min, max) => {
  return Math.random() * (max - min) + min;
};



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
            <div class="col-12 col-lg-6 offset-lg-1">
            <div class="content">
            <div class="blob">
            <Anime
      initial={[
        {
          targets: ".blob-svg path",
					duration: 12000,
          easing: "easeInOutSine(0.25, 1)",
					loop: true,
          
          direction: 'alternate',
          keyframes: [
            {
              d: "M421,292Q395,334,374,381.5Q353,429,301.5,454.5Q250,480,216,424Q182,368,123.5,362.5Q65,357,62.5,303.5Q60,250,60.5,195.5Q61,141,99,97.5Q137,54,193.5,76Q250,98,289,106.5Q328,115,396.5,120.5Q465,126,456,188Q447,250,421,292Z"
            },
            {
              d: "M394,296.5Q411,343,365,356Q319,369,284.5,416Q250,463,195,451.5Q140,440,120.5,388Q101,336,112.5,293Q124,250,84,190.5Q44,131,96.5,103Q149,75,199.5,38.5Q250,2,303.5,33.5Q357,65,382.5,112Q408,159,392.5,204.5Q377,250,394,296.5Z"
            },
            {
              d: "M426,306Q443,362,394.5,389.5Q346,417,298,447Q250,477,196,456.5Q142,436,101.5,397.5Q61,359,36.5,304.5Q12,250,65,212Q118,174,126.5,112.5Q135,51,192.5,77Q250,103,295,98.5Q340,94,395.5,114Q451,134,430,192Q409,250,426,306Z"
            }
          ]
          
        }
      ]}
      >
            <svg class="blob-svg" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M448.5,301Q426,352,375,365.5Q324,379,287,419.5Q250,460,201.5,439Q153,418,119,381.5Q85,345,43,297.5Q1,250,20.5,189.5Q40,129,94.5,102.5Q149,76,199.5,99Q250,122,309,84Q368,46,392,100Q416,154,443.5,202Q471,250,448.5,301Z" fill="#4800ff" fill-opacity="0.25"/>
</svg>
<svg class="blob-svg" viewBox="0 0 550 550" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M448.5,301Q426,352,375,365.5Q324,379,287,419.5Q250,460,201.5,439Q153,418,119,381.5Q85,345,43,297.5Q1,250,20.5,189.5Q40,129,94.5,102.5Q149,76,199.5,99Q250,122,309,84Q368,46,392,100Q416,154,443.5,202Q471,250,448.5,301Z" fill="#533EF1" fill-opacity="0.5"/>
</svg>
<svg class="blob-svg" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M448.5,301Q426,352,375,365.5Q324,379,287,419.5Q250,460,201.5,439Q153,418,119,381.5Q85,345,43,297.5Q1,250,20.5,189.5Q40,129,94.5,102.5Q149,76,199.5,99Q250,122,309,84Q368,46,392,100Q416,154,443.5,202Q471,250,448.5,301Z" fill="#5E7CE2" fill-opacity="0.75"/>
</svg>
</Anime>
            </div>
            <a href="/blog/" class="arrow-btn white reverse">All Blogs</a>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div class="sub">{data.markdownRemark.frontmatter.date}</div>
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
        date(formatString: "MMMM DD, YYYY")
        image {
          publicURL
          childImageSharp {
            fixed(width: 1920) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        seo{
          seoTitle
          seoDescription
        }
        cta{
          ctaTitle
          ctaText
          ctaBtn
        }
      }
    }
  }
`