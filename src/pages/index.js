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
      <Anime
      initial={[
        {
          targets: ".layer-1 path",
					duration: () => {
            return random(2000,4000);
          },
          easing: "easeInOutSine(0.25, 1)",
					loop: true,
          d: "M -84.52,-81.13 C -94.62,-73.4 -88.88,-59.55 -90.33,-48.91 -89.29,27.31 -89.61,103.5 -88.33,179.8 -85.99,416.1 -81.32,888.9 -81.32,888.9 -81.32,888.9 974.5,888.7 1587,891.9 1576,704.7 1517,625.7 1459,514.7 1418,419.4 1430,288.5 1382,187 1349,116.3 1296,54.47 1240,0.3429 1205,-33.51 1120,-83.59 1120,-83.59 1120,-83.59 914.5,-77.77 848.2,-80.17 537.6,-80.84 227,-81.38 -83.6,-81.6 -83.91,-81.44 -84.21,-81.29 -84.52,-81.13 Z",
					direction: 'alternate'
        }
      ]}
      >
      <svg class="bg layer-1"xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
              
        <path d="M -84.52,-81.13 C -94.62,-73.4 -88.88,-59.55 -90.33,-48.91 -89.29,27.31 -89.61,103.5 -88.33,179.8 -85.99,416.1 -81.32,888.9 -81.32,888.9 -81.32,888.9 974.5,888.7 1587,891.9 1518,719.9 1487,644 1429,533 1388,437.7 1447,259.7 1400,187 1362,132 1270,90.53 1207,39.93 1161,2.932 1071,-74.45 1071,-74.45 1071,-74.45 914.5,-77.77 848.2,-80.17 537.6,-80.84 227,-81.38 -83.6,-81.6 -83.91,-81.44 -84.21,-81.29 -84.52,-81.13 Z"  />
      </svg>
      
      </Anime>
   
      <Anime
      initial={[
        {
          targets: ".layer-3 path",
					duration: () => {
            return random(2000,4000);
          },
          easing: "easeInOutSine(0.25, 1)",
					loop: true,
          d: "M -85.01,-74.02 C -92.39,-66.64 -85.37,-55.79 -87.81,-46.91 -86.65,265.1 -84.66,577.2 -83.18,889.2 317.2,888.3 717.5,885.8 1118,890.4 1152,890.6 1187,890.9 1221,890 1219,768.3 1175,659.3 1150,544.3 1128,438.4 1143,312.6 1081,227.1 1004,121.1 925.8,114.8 851.3,54.73 762,-17.34 772.2,-78.96 772.2,-78.96 772.2,-78.96 222.1,-81.07 -85.01,-74.02 Z",
					direction: 'alternate'
        }
      ]}
      >
      <svg class="bg layer-3"xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
              
        <path d="M -85.01,-74.02 C -92.39,-66.64 -85.37,-55.79 -87.81,-46.91 -86.65,265.1 -84.66,577.2 -83.18,889.2 317.2,888.3 717.5,885.8 1118,890.4 1152,890.6 1187,890.9 1221,890 1219,768.3 1224,643.6 1187,526 1153,417 1091,319.3 1029,224.1 998.8,178.5 968.8,132.6 936.6,88.23 891.7,27.39 772.2,-78.96 772.2,-78.96 772.2,-78.96 222.1,-81.07 -85.01,-74.02 Z"  />
      </svg>
      </Anime>

      <Anime
      initial={[
        {
          targets: ".layer-5 path",
					duration: () => {
            return random(2000,4000);
          },
          easing: "easeInOutSine(0.25, 1)",
					loop: true,
          d: "M -88.6,95.54 C -90.38,166.1 -88.23,236.7 -88.68,307.4 L -86.19,890 C 229.7,890.2 939.8,892.4 939.8,892.4 906.9,734.7 779.3,676 721.4,519.4 676.8,398.8 566.5,307.1 458.9,236.6 355.2,168.7 220.3,165.7 107.8,113.5 40.05,82.12 -24.82,24.2 -85.28,0.03 Z",
					direction: 'alternate'
        }
      ]}
      >
      <svg class="bg layer-5"xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
              
        <path d="M -88.6,95.54 C -90.38,166.1 -88.23,236.7 -88.68,307.4 L -86.19,890 C 229.7,890.2 939.8,892.4 939.8,892.4 855.2,767 831,639.4 721.4,519.4 634.7,424.5 526.4,360.9 428.8,281.8 332.7,204 251.6,102.3 140.1,48.9 70.75,15.73 -24.82,24.2 -85.28,0.03 Z"  />
      </svg>
      </Anime>
      <Anime
      initial={[
        {
          targets: ".layer-6 path",
					duration: () => {
            return random(2000,4000);
          },
          easing: "easeInOutSine(0.25, 1)",
					loop: true,
          d: "M -95.69,252.3 -87.65,890.4 698.1,892 C 698.1,892 569.8,587.1 448.9,482.7 299.7,353.9 131.4,466.5 -95.69,252.3 Z",
					direction: 'alternate'
        }
      ]}
      >
      <svg class="bg layer-6"xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
              
        <path d="M -95.69,252.3 -87.65,890.4 698.1,892 C 698.1,892 599.1,687.7 518.9,610.6 348,446.2 131.4,466.5 -95.69,252.3 Z"  />
      </svg>
      </Anime>

      
        <div class="container content">
          <div class="row justify-content-center align-items-center">
          <div class="col-10 col-md-8 col-lg-6 text-center">
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
        
      </div>
      <div id="home-work">
        <div class="home-work-container">
          <div class="blob-container">
            <Anime
            initial={[
              {
                targets: ".blob",
                keyframes: [
                  {
                    translateX: 0,
                    translateY: 0
                  },
                  {
                    translateX: () => {
                      return random(25,400);
                    },
                    translateY: () => {
                      return random(25,400);
                    }
                  },
                  {
                    translateX:  () => {
                      return random(-25,-400);
                    },
                    translateY:  () => {
                      return random(-25,-400);
                    }
                  },
                  {
                    translateX: 0,
                    translateY: 0
                  }           
                ],
                easing: "easeInOutSine(1, 1)",
                duration: 30000,
                loop: true
              }
            ]}
            >
            <div class="blob">
            <Anime
      initial={[
        {
          targets: "#blob-svg path",
					duration: 12000,
          easing: "easeInOutSine(0.25, 1)",
          loop: true,
          direction: 'alternate',
          keyframes:[
            {
              d: "M469,297.5Q480,345,411,343.5Q342,342,328,373.5Q314,405,282,400.5Q250,396,229,374Q208,352,145,385Q82,418,85,367.5Q88,317,100.5,283.5Q113,250,86,210.5Q59,171,95,151Q131,131,152,97.5Q173,64,211.5,52.5Q250,41,292.5,42.5Q335,44,347,92.5Q359,141,364.5,170.5Q370,200,414,225Q458,250,469,297.5Z"
            },
            {
              d: "M380,275.5Q373,301,378.5,342.5Q384,384,352.5,403Q321,422,285.5,439Q250,456,204.5,463Q159,470,163,401.5Q167,333,153,314.5Q139,296,90,273Q41,250,90,227Q139,204,126.5,159Q114,114,138.5,76.5Q163,39,206.5,20Q250,1,275,65.5Q300,130,329,136Q358,142,370,168.5Q382,195,384.5,222.5Q387,250,380,275.5Z"
            },
            {
              d: "M475,295Q467,340,434,370.5Q401,401,369.5,432Q338,463,294,441Q250,419,212,426.5Q174,434,169.5,384.5Q165,335,143,319.5Q121,304,76.5,277Q32,250,77,223.5Q122,197,148,185.5Q174,174,189.5,157.5Q205,141,227.5,118.5Q250,96,294.5,66Q339,36,351.5,86Q364,136,360,171Q356,206,419.5,228Q483,250,475,295Z"
            }
          ]
        }
      ]}
      >
            <svg width="1438" height="990" id="blob-svg" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M451.5,291.5Q450,333,417,358.5Q384,384,359.5,419Q335,454,292.5,412Q250,370,213.5,398Q177,426,147.5,404Q118,382,136.5,335.5Q155,289,97.5,269.5Q40,250,69,218.5Q98,187,113,157.5Q128,128,153.5,104Q179,80,214.5,99.5Q250,119,295,76Q340,33,383,53.5Q426,74,398,137Q370,200,411.5,225Q453,250,451.5,291.5Z" fill="#5E7CE2" fill-opacity="0.1"/>
</svg>
</Anime>
            </div>
            </Anime>
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
