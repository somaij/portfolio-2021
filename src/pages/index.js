import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import BlogRoll from '../components/BlogRoll'
import WorkRoll from '../components/WorkRoll'
import SplitText from '../components/splitText'
import ReactAnime from 'react-animejs'
import { Helmet } from "react-helmet"

const {Anime, stagger} = ReactAnime

const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

const IndexPage = ({ data }) => {
  console.log("data,", data)
  return (
    
    <Layout>
        <Helmet>
    <title>{data.markdownRemark.frontmatter.seo.seoTitle}</title>
    <meta name="description" content={data.markdownRemark.frontmatter.seo.seoDescription} />
    <meta name="og:image" content={data.markdownRemark.frontmatter.about_image.publicURL} />
  </Helmet>
      <div id="masthead">
      <div id="header-background">
      <Anime
                initial={[
                  {
                    targets: ".mast-blob-svg.blob-1 path",
                    duration: () => {
                      return random(8000,12000);
                    },
                    easing: "easeInOutSine(0.25, 1)",
                    loop: true,
                    
                    direction: 'alternate',
                    keyframes: [
                      {
                        d: "M39.4,-68.3C53.3,-60.2,68.4,-54.2,73.2,-43.2C78,-32.1,72.5,-16.1,72.6,0.1C72.8,16.2,78.6,32.5,75.5,46.5C72.5,60.6,60.6,72.4,46.5,75C32.4,77.6,16.2,70.9,3.2,65.4C-9.8,59.8,-19.7,55.5,-32.5,52.2C-45.4,48.9,-61.3,46.7,-68.5,38.2C-75.7,29.7,-74.1,14.9,-69.9,2.4C-65.7,-10,-58.9,-20.1,-52.3,-29.4C-45.6,-38.8,-39,-47.5,-30.3,-58.6C-21.7,-69.7,-10.8,-83.1,1,-84.8C12.7,-86.4,25.5,-76.3,39.4,-68.3Z"
                      }
                    ]
                    
                  }
                ]}
              >
              
              <svg class="mast-blob-svg blob-1" viewBox="-100 -50 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40,-68C51.9,-62.4,61.8,-51.9,63.7,-39.7C65.5,-27.6,59.4,-13.8,56.5,-1.7C53.6,10.4,53.9,20.9,50.6,30.5C47.3,40.1,40.3,48.9,31.3,54C22.2,59,11.1,60.3,-1.2,62.3C-13.5,64.4,-27,67.3,-39.2,64.1C-51.4,60.9,-62.2,51.5,-68.9,39.8C-75.6,28.1,-78.3,14,-80,-1C-81.7,-16,-82.5,-32.1,-74.7,-41.8C-66.8,-51.5,-50.2,-54.9,-36.3,-59.4C-22.4,-64,-11.2,-69.6,1.4,-72C14,-74.5,28.1,-73.7,40,-68Z" fill="#000" fill-opacity="0.2"/>
              </svg>
            </Anime>
            <Anime
                initial={[
                  {
                    targets: ".mast-blob-svg.blob-2 path",
                    duration: () => {
                      return random(8000,12000);
                    },
                    easing: "easeInOutSine(0.25, 1)",
                    loop: true,
                    
                    direction: 'alternate',
                    keyframes: [
                      {
                        
                        d: "M33,-55.1C44.1,-50.7,55.3,-44.6,58.9,-35.1C62.6,-25.6,58.6,-12.8,60.2,0.9C61.8,14.7,69.1,29.4,65.8,39.4C62.5,49.4,48.6,54.8,35.9,63.7C23.2,72.7,11.6,85.3,-0.4,86C-12.4,86.7,-24.8,75.6,-35.9,65.7C-46.9,55.7,-56.7,47.1,-59.9,36.3C-63.2,25.6,-59.9,12.8,-56.5,2C-53,-8.8,-49.4,-17.6,-45.8,-27.7C-42.1,-37.7,-38.5,-49.1,-30.9,-55.5C-23.2,-61.8,-11.6,-63.3,-0.3,-62.7C10.9,-62.1,21.9,-59.5,33,-55.1Z",
                      }
                    ]
                    
                  }
                ]}
              >
              <svg class="mast-blob-svg blob-2" viewBox="-100 -50 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40,-68C51.9,-62.4,61.8,-51.9,63.7,-39.7C65.5,-27.6,59.4,-13.8,56.5,-1.7C53.6,10.4,53.9,20.9,50.6,30.5C47.3,40.1,40.3,48.9,31.3,54C22.2,59,11.1,60.3,-1.2,62.3C-13.5,64.4,-27,67.3,-39.2,64.1C-51.4,60.9,-62.2,51.5,-68.9,39.8C-75.6,28.1,-78.3,14,-80,-1C-81.7,-16,-82.5,-32.1,-74.7,-41.8C-66.8,-51.5,-50.2,-54.9,-36.3,-59.4C-22.4,-64,-11.2,-69.6,1.4,-72C14,-74.5,28.1,-73.7,40,-68Z" fill="#000" fill-opacity="0.15"/>
              </svg>
            </Anime>
            <Anime
                initial={[
                  {
                    targets: ".mast-blob-svg.blob-3 path",
                    duration: () => {
                      return random(8000,12000);
                    },
                    easing: "easeInOutSine(0.25, 1)",
                    loop: true,
                    
                    direction: 'alternate',
                    keyframes: [
                      {
                        d: "M27,-47.3C35.9,-41.6,44.8,-36.3,51.7,-28.5C58.6,-20.7,63.5,-10.3,68.4,2.8C73.3,16,78.1,31.9,74,44.6C69.9,57.2,56.9,66.6,43.1,68.6C29.2,70.6,14.6,65.3,2.4,61.2C-9.9,57.2,-19.8,54.3,-32.2,51.5C-44.7,48.7,-59.6,45.9,-70.8,37.3C-82,28.7,-89.3,14.4,-89.2,0.1C-89.1,-14.2,-81.6,-28.5,-70.6,-37.4C-59.7,-46.4,-45.3,-50,-33,-53.8C-20.7,-57.6,-10.3,-61.6,-0.7,-60.5C9,-59.3,18,-53.1,27,-47.3Z"
                      }
                    ]
                    
                  }
                ]}
              >
              <svg class="mast-blob-svg blob-3" viewBox="-100 -50 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40,-68C51.9,-62.4,61.8,-51.9,63.7,-39.7C65.5,-27.6,59.4,-13.8,56.5,-1.7C53.6,10.4,53.9,20.9,50.6,30.5C47.3,40.1,40.3,48.9,31.3,54C22.2,59,11.1,60.3,-1.2,62.3C-13.5,64.4,-27,67.3,-39.2,64.1C-51.4,60.9,-62.2,51.5,-68.9,39.8C-75.6,28.1,-78.3,14,-80,-1C-81.7,-16,-82.5,-32.1,-74.7,-41.8C-66.8,-51.5,-50.2,-54.9,-36.3,-59.4C-22.4,-64,-11.2,-69.6,1.4,-72C14,-74.5,28.1,-73.7,40,-68Z" fill="#000" fill-opacity="0.1"/>
              </svg>
            </Anime>
            <Anime
                initial={[
                  {
                    targets: ".mast-blob-svg.blob-4 path",
                    duration: () => {
                      return random(8000,12000);
                    },
                    easing: "easeInOutSine(0.25, 1)",
                    loop: true,
                    
                    direction: 'alternate',
                    keyframes: [
                      {
                        d: "M30.5,-53.5C40.4,-47.2,49.6,-40.6,55.4,-31.6C61.1,-22.7,63.4,-11.3,67.7,2.5C72.1,16.4,78.5,32.7,72.7,41.5C66.8,50.3,48.7,51.5,34.5,58.7C20.3,65.8,10.2,78.8,0.2,78.5C-9.8,78.2,-19.7,64.7,-33.7,57.5C-47.8,50.3,-66.1,49.5,-75.7,41C-85.4,32.5,-86.4,16.2,-84.6,1C-82.8,-14.1,-78.1,-28.3,-71.2,-41.5C-64.2,-54.7,-55,-67,-42.8,-71.8C-30.5,-76.6,-15.3,-74,-2.4,-69.7C10.4,-65.5,20.7,-59.7,30.5,-53.5Z"
                      }
                    ]
                    
                  }
                ]}
              >
              <svg class="mast-blob-svg blob-4" viewBox="-100 -50 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40,-68C51.9,-62.4,61.8,-51.9,63.7,-39.7C65.5,-27.6,59.4,-13.8,56.5,-1.7C53.6,10.4,53.9,20.9,50.6,30.5C47.3,40.1,40.3,48.9,31.3,54C22.2,59,11.1,60.3,-1.2,62.3C-13.5,64.4,-27,67.3,-39.2,64.1C-51.4,60.9,-62.2,51.5,-68.9,39.8C-75.6,28.1,-78.3,14,-80,-1C-81.7,-16,-82.5,-32.1,-74.7,-41.8C-66.8,-51.5,-50.2,-54.9,-36.3,-59.4C-22.4,-64,-11.2,-69.6,1.4,-72C14,-74.5,28.1,-73.7,40,-68Z" fill="#000" fill-opacity="0.05"/>
              </svg>
            </Anime>
      </div>
      
        <div class="container content">
          <div class="row justify-content-center align-items-center">
          <div class="col-12 col-md-8 col-lg-7 text-center">
        <div class="sub">{data.markdownRemark.frontmatter.subtitle}</div>
        <Anime
        initial={[
          {
            targets: "h1 span",
            translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 300 + 30 * i
          }
        ]}
        >
        <h1><SplitText copy={data.markdownRemark.frontmatter.title} role="heading" /></h1>
        </Anime>
        </div>
          </div>
        </div>
        <div id="home-work">
        <div class="home-work-container">
          <div class="blob-container">
            <div class="container">
              <div class="row">
                <div class="col-12 text-center">
                  <h2>Work</h2>
                </div>
              </div>
                <WorkRoll />
            </div>
            
          </div>
          <div class="underlay"></div>
        </div>
        </div>
      </div>
      
      <div id="home-blog">
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
        <div class="row">
          <div class="col-12 text-center">
            <h2>Blog</h2>
          </div>
        </div>
        <BlogRoll/>
      </div>
      </div>
      <div id="contact">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h2>Connect</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-7 d-flex justify-content-lg-end">
              <div id="about">
                <div class="image">
                <Img
  fixed={data.markdownRemark.frontmatter.about_image.childImageSharp.fixed}
/>
                </div>
                <div class="text">
                <h4>About Me</h4>
                <div class="regular-text" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}></div>
                <div class="socials">
                  <a href="https://www.linkedin.com/in/jason-somai-40a29252/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"/></svg>
                  </a>
                  <a href="https://github.com/somaij" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/></svg>
                  </a>
                </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-5">
            <form name="contactForm" method="post" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contactForm" />
    <div class="input-wrapper"><input type="text" name="name" placeholder="Johnny Appleseed" required/><label>Name</label></div>
    <div class="input-wrapper"><input type="email" name="email" placeholder="johnny.appleseed@gmail.com" required/><label>Email</label></div>
    <div class="input-wrapper"><textarea name="message" placeholder="Your stuff is cool. I have a question about..." required></textarea><label>Message</label></div>
    <button type="submit" class="btn solid">Send</button>
</form>
            </div>
          </div>  
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "home" } }) {
      frontmatter {
        title
        subtitle
        blog_background{
          publicURL
        }
        about_image{
          childImageSharp {
            fixed(width: 960) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        seo{
          seoTitle
          seoDescription
        }
      }
      html
    }
  }
`
