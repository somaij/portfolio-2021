import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from 'react-markdown'
import Header from '../header.js'
import ReactAnime from 'react-animejs'
const ReactMarkdownWithHtml = require('react-markdown/with-html')

const {Anime, stagger} = ReactAnime

const random = (min, max) => {
  return Math.random() * (max - min) + min;
};


const convertToKebabCase = (string) => {
  return string.replace(/\s+/g, '-').toLowerCase();
}

const WorkPost = ({ data }) => {
  console.log("data,", data)
  return (
    <div>
      <Header/>
      <div id="work-header">
      <div class="blob">
            <Anime
      initial={[
        {
          targets: "#blob-svg path",
					duration: 20000,
          easing: "easeInOutSine(0.25, 1)",
					loop: true,
          
          direction: 'alternate',
          keyframes: [
            {
              d: "M426.5,293.5Q401,337,381,389Q361,441,305.5,461Q250,481,197,457Q144,433,119.5,386Q95,339,65,294.5Q35,250,78,212.5Q121,175,157,163.5Q193,152,221.5,102.5Q250,53,293.5,76Q337,99,339.5,148Q342,197,397,223.5Q452,250,426.5,293.5Z"
            },
            {
              d: "M421.5,290.5Q390,331,345.5,335Q301,339,275.5,385Q250,431,215.5,400Q181,369,168,337Q155,305,146,277.5Q137,250,133,215Q129,180,129,110.5Q129,41,189.5,86Q250,131,291,119.5Q332,108,346.5,147Q361,186,407,218Q453,250,421.5,290.5Z"
            },
            {
              d: "M399.5,287Q378,324,349.5,349Q321,374,285.5,381Q250,388,205,397.5Q160,407,103.5,387Q47,367,75.5,308.5Q104,250,113,213Q122,176,159.5,167.5Q197,159,223.5,97Q250,35,294.5,66Q339,97,378.5,125Q418,153,419.5,201.5Q421,250,399.5,287Z"
            }
          ]
          
        }
      ]}
      >
            <svg id="blob-svg" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M393.5,295.5Q408,341,389.5,400Q371,459,310.5,432Q250,405,208.5,399.5Q167,394,117.5,374.5Q68,355,53,302.5Q38,250,55,198.5Q72,147,130.5,145.5Q189,144,219.5,98.5Q250,53,297.5,69Q345,85,388.5,115Q432,145,405.5,197.5Q379,250,393.5,295.5Z" fill="#5E7CE2" fill-opacity="0.15"/>
</svg>
</Anime>
            </div>
        <div className="container">
          <div className="row">
            <div className="text col-12 col-lg-6 d-flex align-items-center justify-content-center">
            <div className="content">
              <a href="/#work" class="arrow-btn white reverse">All Work</a>
            <div className="sub">{data.markdownRemark.frontmatter.description}</div>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div className="regular-text"><ReactMarkdown>{data.markdownRemark.frontmatter.summary}</ReactMarkdown></div>
            {data.markdownRemark.frontmatter.summary_buttons.map((button, i) => [
            <a key={i} id={"btn-" + i} href={convertToKebabCase(button.btnlink)}>{button.btntext}
          </a>
          ])}
            </div>
          </div>
        </div>
        </div>
        <div className="image"><Img
  fixed={data.markdownRemark.frontmatter.image.childImageSharp.fixed}
/></div>

      </div>
      <div id="work-main">
      <div className="container">
        <div className="row text-center">
          <div className="col-12"><h2>At a Glance</h2></div>
        </div>
        <div className="row glance">
        {data.markdownRemark.frontmatter.glance.map((glance, i) => [
          <div className="col-12 col-md-4" key={i}>
          <a className="glance-link" href={"#" + glance.btnlink}>
          <div className="image"><Img
  fixed={glance.image.childImageSharp.fixed}
/></div>
          <div className="text">
          <h3>{glance.title}</h3>
          <p>{glance.description}</p>
          <span className="arrow-btn">{glance.btntext}</span>
          </div>
          </a>
          </div>
          ])}
        </div>
          <div className="row">
            <div className="col-12 col-md-3 col-lg-2 sidebar">
            {data.markdownRemark.frontmatter.workContent.map((section, i) => [
            <a key={i} href={"#" + convertToKebabCase(section.sectionTitle)}>{section.sectionTitle}</a>
          ])}
            </div>
            <div className="col-12 col-md-9 col-lg-10 work-body">
          {data.markdownRemark.frontmatter.workContent.map((section, i) => [
            <div className="work-section" key={i} id={convertToKebabCase(section.sectionTitle)}>
          <h2>{section.sectionTitle}</h2>
          <div className="regular-text">
          <ReactMarkdownWithHtml allowDangerousHtml>{section.sectionText}</ReactMarkdownWithHtml></div>
          </div>
          ])}
          </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default WorkPost

export const WorkPostTemplateQuery = graphql`
  query WorkPostTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        summary
        summary_buttons{
          btntext
          btnlink
        }
        glance{
          title
          description
          image {
            childImageSharp {
              fixed(width: 400) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          btntext
          btnlink
        }
        workContent{
          sectionText
          sectionTitle
        }
        image {
          childImageSharp {
            fixed(width: 960) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`