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
                    duration: 8000,
                    easing: "easeInOutSine(0.25, 1)",
                    loop: true,
                    
                    direction: 'alternate',
                    keyframes: [
                      {
                        d: "M1649.5 1995.5C1649.5 1995.5 1240 2361 803.001 1995.5C366 1630 668 1616.5 431 1176.5C194 736.5 76.5001 768.499 15.5 537.5C-45.5001 306.501 105 139.5 53.4997 -49.5002C1.99984 -238.5 1649.5 10.4999 1649.5 10.4999V1995.5Z"
                      }
                    ]
                    
                  }
                ]}
              >
              

              <svg class="mast-blob-svg blob-1" viewBox="-300 0 1649 2000" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1649.5 1995.5C1649.5 1995.5 1240 2361 803.001 1995.5C366 1630 476 1658.5 239 1218.5C2 778.5 76.5003 768.499 15.5002 537.5C-45.4998 306.501 105 139.5 53.4999 -49.5002C2.00009 -238.5 1649.5 10.4999 1649.5 10.4999V1995.5Z" fill="#000" fill-opacity="0.1"/>
              </svg>
              

            </Anime>
            <Anime
                initial={[
                  {
                    targets: ".mast-blob-svg.blob-2 path",
                    duration: 8000,
                    easing: "easeInOutSine(0.25, 1)",
                    loop: true,
                    
                    direction: 'alternate',
                    keyframes: [
                      {
                        
                        d: "M1708.81 1995.5C1708.81 1995.5 1182.62 2464 862.311 1995.5C542 1527 679.5 1314 415 1128.5C150.5 943 281 723 74.81 537.5C-131.38 352 164.31 139.5 112.81 -49.5002C61.3098 -238.5 1708.81 10.4999 1708.81 10.4999V1995.5Z",
                      }
                    ]
                    
                  }
                ]}
              >
                
                

              <svg class="mast-blob-svg blob-2" viewBox="-300 0 1322 2000" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1641.81 1995.5C1641.81 1995.5 1115.62 2464 795.311 1995.5C475 1527 398 1448.5 247 1197.5C96.0001 946.5 45.8094 762 7.80986 537.5C-30.1897 313 97.3094 139.5 45.8095 -49.5002C-5.69032 -238.5 1641.81 10.4999 1641.81 10.4999V1995.5Z" fill="#000" fill-opacity="0.1"/>
              </svg>
            </Anime>
            <Anime
                initial={[
                  {
                    targets: ".mast-blob-svg.blob-3 path",
                    duration: 8000,
                    easing: "easeInOutSine(0.25, 1)",
                    loop: true,
                    
                    direction: 'alternate',
                    keyframes: [
                      {
                        d: "M1895.99 1995.5C1895.99 1995.5 1530.98 2313 1049.49 1995.5C568 1678 677.488 1279.5 677.488 1176.5C677.488 1073.5 698.5 833 261.989 537.5C-174.523 242 5.00027 105 299.988 -49.5002C594.976 -204.001 1895.99 10.4998 1895.99 10.4998V1995.5Z"
                      }
                    ]
                    
                  }
                ]}
              >
                


              <svg class="mast-blob-svg blob-3" viewBox="-300 0 1016 2000" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1678.99 1995.5C1678.99 1995.5 1313.98 2313 832.49 1995.5C351 1678 442.5 1444 279.5 1214C116.5 984 82.9886 645 44.9886 537.5C6.98853 430 -86.488 96.5003 208.5 -58C503.488 -212.5 1678.99 10.4998 1678.99 10.4998V1995.5Z" fill="#000" fill-opacity="0.1"/>
              </svg>
            </Anime>
            <Anime
                initial={[
                  {
                    targets: ".mast-blob-svg.blob-4 path",
                    duration: 8000,
                    easing: "easeInOutSine(0.25, 1)",
                    loop: true,
                    
                    direction: 'alternate',
                    keyframes: [
                      {
                        d: "M1623.18 1995.5C1623.18 1995.5 900 2564 776.686 1995.5C653.371 1427 465.869 1578.5 404.685 1176.5C343.5 774.5 663.815 857 213 530.5C-237.815 204 295.5 170 27.1844 -49.5002C-241.131 -269.001 1623.18 10.4998 1623.18 10.4998V1995.5Z"
                      }
                    ]
                    
                  }
                ]}
              >
              


              <svg class="mast-blob-svg blob-4" viewBox="-300 0 610 2000" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1616.18 1995.5C1616.18 1995.5 893 2564 769.686 1995.5C646.371 1427 475.684 1611.5 284 1268.5C92.3154 925.5 131 948 65.9999 532C0.999886 116 -17.5 147 20.1843 -49.5002C57.8687 -246 1616.18 10.4999 1616.18 10.4999V1995.5Z" fill="#000" fill-opacity="0.1"/>
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
