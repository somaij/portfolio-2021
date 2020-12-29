import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BlogRoll from '../components/BlogRoll'
import Header from '../components/header'
import SplitText from '../components/splitText'
import ReactAnime from 'react-animejs'
import Img from "gatsby-image"

const {Anime, stagger} = ReactAnime

const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

const BlogPage = ({ data }) => {
    console.log("data,", data)
    const { edges: posts } = data.allMarkdownRemark
    return (
        <div>
          <Header/>
            <div id="blog-header">
            <div class="blog-blob">
            <Anime
      initial={[
        {
          targets: ".blog-svg path",
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
      ><svg class="blog-svg" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M448.5,301Q426,352,375,365.5Q324,379,287,419.5Q250,460,201.5,439Q153,418,119,381.5Q85,345,43,297.5Q1,250,20.5,189.5Q40,129,94.5,102.5Q149,76,199.5,99Q250,122,309,84Q368,46,392,100Q416,154,443.5,202Q471,250,448.5,301Z" stroke="#5E7CE2" fill-opacity="1"/>
</svg>
<svg class="blog-svg" viewBox="0 0 750 750" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M448.5,301Q426,352,375,365.5Q324,379,287,419.5Q250,460,201.5,439Q153,418,119,381.5Q85,345,43,297.5Q1,250,20.5,189.5Q40,129,94.5,102.5Q149,76,199.5,99Q250,122,309,84Q368,46,392,100Q416,154,443.5,202Q471,250,448.5,301Z" stroke="#533EF1" fill-opacity="1"/>
</svg>
<svg class="blog-svg" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M448.5,301Q426,352,375,365.5Q324,379,287,419.5Q250,460,201.5,439Q153,418,119,381.5Q85,345,43,297.5Q1,250,20.5,189.5Q40,129,94.5,102.5Q149,76,199.5,99Q250,122,309,84Q368,46,392,100Q416,154,443.5,202Q471,250,448.5,301Z" stroke="#4800ff" fill-opacity="1"/>
</svg></Anime>
            </div>
              <div class="container">
              <div class="row justify-content-center">
                <div class="col-10 col-md-8 col-lg-7">
                <div class="sub">Blog</div>
                <Anime
        initial={[
          {
            targets: "h1 span",
            scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
          }
        ]}
        >
            <h1><SplitText copy="My Personal Collection of Tips and Tricks" role="heading" /></h1>
            </Anime>
                </div>
              </div>
            </div>
            
            </div>
            <div id="blog-posts">
              <div class="container">
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
              </div>
            
            </div>
        </div>
        )
      }
      
      export default BlogPage
      
      export const pageQuery = graphql`
      query BlogAllQuery {
        allMarkdownRemark(
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
    `