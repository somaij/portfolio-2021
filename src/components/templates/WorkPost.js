import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from 'react-markdown'

const convertToKebabCase = (string) => {
  return string.replace(/\s+/g, '-').toLowerCase();
}

const WorkPost = ({ data }) => {
  console.log("data,", data)
  return (
    <div>
      <div id="work-header">
        <div className="container">
          <div className="row">
            <div className="text col-12 col-lg-6 col-xl-5 d-flex align-items-center justify-content-center">
            <div className="content">
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
          <div className="regular-text"><ReactMarkdown allowDangerousHtml >{section.sectionText}</ReactMarkdown></div>
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