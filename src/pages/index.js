import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BlogRoll from '../components/BlogRoll'
import WorkRoll from '../components/WorkRoll'
import Header from '../components/header'
import ReactAnime from 'react-animejs'

const {Anime, stagger} = ReactAnime

const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

const IndexPage = ({ data }) => {
  console.log("data,", data)
  return (
    
    <div>
      <Header/>
      <div id="masthead">
      <Anime
      initial={[
        {
          targets: ".layer-1 path",
					duration: () => {
            return random(3000,4000);
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
          targets: ".layer-2 path",
					duration: () => {
            return random(3000,4000);
          },
          easing: "easeInOutSine(0.25, 1)",
					loop: true,
          d: "M 665.2,-83.08 C 413.7,-81.89 162.2,-82.43 -89.29,-81.61 -90.35,164.3 -85.06,410.2 -84.09,656.1 -83.37,733.7 -82.64,811.3 -81.92,888.9 442.4,889.8 966.7,890.7 1491,891.6 1253,747.5 1349,460.4 1243,260.6 1199,176.6 1145,96.92 1083,24.95 1050,-12.63 973,-76.01 973,-76.01 973,-76.01 706.6,-83.67 665.2,-83.08 Z",
					direction: 'alternate'
        }
      ]}
      >
      <svg class="bg layer-2"xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
              
        <path d="M 665.2,-83.08 C 413.7,-81.89 162.2,-82.43 -89.29,-81.61 -90.35,164.3 -85.06,410.2 -84.09,656.1 -83.37,733.7 -82.64,811.3 -81.92,888.9 442.4,889.8 966.7,890.7 1491,891.6 1253,747.5 1417,429.4 1286,245.4 1227,163.2 1107,142.1 1043,64.54 1009,24.41 973,-76.01 973,-76.01 973,-76.01 706.6,-83.67 665.2,-83.08 Z"  />
      </svg>
      </Anime>
      <Anime
      initial={[
        {
          targets: ".layer-3 path",
					duration: () => {
            return random(3000,4000);
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
          targets: ".layer-4 path",
					duration: () => {
            return random(3000,4000);
          },
          easing: "easeInOutSine(0.25, 1)",
					loop: true,
          d: "M -92.42,-79.11 C -89.97,243.8 -87.52,566.7 -85.07,889.6 201.8,889.9 488.7,889.9 775.5,895.6 880.4,896.9 1063,889.5 1063,889.5 1063,889.5 1081,768.2 997.4,608.7 958.5,534.8 969.9,436.8 918.5,370.8 848.4,280.8 717,260.3 629.9,186.5 552.6,121.2 491.5,38.73 426.3,-38.61 412.9,-54.44 387.9,-87.47 387.9,-87.47 387.9,-87.47 9.82,-84.94 -92.42,-79.11 Z",
					direction: 'alternate'
        }
      ]}
      >
      <svg class="bg layer-4"xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
              
        <path d="M -92.42,-79.11 C -89.97,243.8 -87.52,566.7 -85.07,889.6 201.8,889.9 488.7,889.9 775.5,895.6 880.4,896.9 985.2,894 1090,892.5 1064,773.3 1037,651.6 976.1,544.8 946.7,495.8 914.6,448.3 882,401.3 820.9,314.4 742.3,252 666.4,177.4 583.2,98.01 496.5,12.18 386.7,-23.38 328.4,-45.64 232.6,-81.38 232.6,-81.38 232.6,-81.38 9.82,-84.94 -92.42,-79.11 Z"  />
      </svg>
      </Anime>
      <Anime
      initial={[
        {
          targets: ".layer-5 path",
					duration: () => {
            return random(3000,4000);
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
            return random(3000,4000);
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
      <Anime
      initial={[
        {
          targets: ".layer-7 path",
					duration: () => {
            return random(3000,4000);
          },
          easing: "easeInOutSine(0.25, 1)",
					loop: true,
          d: "M -85.59,444.4 -85.59,890.6 546.9,895.6 C 546.9,895.6 517.4,695.4 339.9,593.4 187.7,505.9 57.98,629.2 -85.59,444.4 Z",
          direction: 'alternate',
          
        }
      ]}
      >
      <svg class="bg layer-7"xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
              
        <path d="M -85.59,444.4 -85.59,890.6 489,895.6 C 489,895.6 436.8,745.3 382.5,690.8 258.1,565.8 57.98,629.2 -85.59,444.4 Z"  />
      </svg>
      </Anime>
      
        <div class="container content">
          <div class="row justify-content-center align-items-center">
          <div class="col-8 col-lg-7 text-center">
        <div class="sub">{data.markdownRemark.frontmatter.subtitle}</div>
        <Anime
        initial={[
          {
            targets: "h1",
            opacity: 1,
            easing: "linear",
            duration: 800
          }
        ]}
        >
        <h1 dangerouslySetInnerHTML={{ __html: data.markdownRemark.frontmatter.title}}></h1>
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
					duration: 5000,
          easing: "easeInOutSine(0.5, 1)",
					loop: true,
          d: "M457.5,294Q449,338,410.5,362Q372,386,346,425.5Q320,465,272,481Q224,497,178.5,474.5Q133,452,104,414.5Q75,377,80.5,331Q86,285,51.5,242.5Q17,200,68.5,178Q120,156,127,102Q134,48,181,44.5Q228,41,274.5,35.5Q321,30,364.5,52.5Q408,75,412.5,125Q417,175,441.5,212.5Q466,250,457.5,294Z",
          direction: 'alternate',
          
        }
      ]}
      >
            <svg width="1438" height="990" id="blob-svg" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M440.5,296Q456,342,429.5,381Q403,420,362.5,445Q322,470,277.5,441.5Q233,413,202,399.5Q171,386,149,363Q127,340,89.5,316Q52,292,61.5,252Q71,212,95.5,183.5Q120,155,131.5,109.5Q143,64,186,58.5Q229,53,277,36.5Q325,20,356.5,58.5Q388,97,425.5,126Q463,155,444,202.5Q425,250,440.5,296Z" fill="#5E7CE2" fill-opacity="0.1"/>
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
      <div id="home-blog" style={{
        backgroundImage: `url(${data.markdownRemark.frontmatter.blog_background.publicURL})`
      }}>

      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2>Blog</h2>
          </div>
        </div>
        <div class="row">
        <BlogRoll />
        </div>
      </div>
      </div>
      <div id="contact">
      <div class="container">
        <div class="about" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}></div>
      </div>
      </div>
    </div>
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
          publicURL
        }
      }
      html
    }
  }
`
