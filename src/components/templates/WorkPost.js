import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from 'react-markdown'

const WorkPost = ({ data }) => {
  console.log("data,", data)
  return (
    <div>
      <div id="work-header">
        <div class="container">
          <div class="row">
            <div class="text col-12 col-lg-6 col-xl-5 d-flex align-items-center justify-content-center">
            <div class="content">
            <div class="sub">{data.markdownRemark.frontmatter.description}</div>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <p class="regular-text"><ReactMarkdown>{data.markdownRemark.frontmatter.summary}</ReactMarkdown></p>
            {data.markdownRemark.frontmatter.summary_buttons.map((button, i) => [
            <a id={"btn-" + i} href={button.btnlink}>{button.btntext}
          {i < data.markdownRemark.frontmatter.summary_buttons.length - 1 ? ', ' : ''}
          </a>
          ])}
            </div>
          </div>
        </div>
        </div>
        <div class="image"><Img
  fixed={data.markdownRemark.frontmatter.image.childImageSharp.fixed}
/></div>

      </div>
      <div id="work-main">
      <div class="container">
        <div class="row text-center">
          <div class="col-12"><h2>At a Glance</h2></div>
        </div>
        <div class="row glance">
        {data.markdownRemark.frontmatter.glance.map((glance, i) => [
          <div class="col-12 col-md-4">
          <a class="glance-link" key={i} href={"#" + glance.btnlink}>
          <div class="image"><Img
  fixed={glance.image.childImageSharp.fixed}
/></div>
          <div class="text">
          <h3>{glance.title}</h3>
          <p>{glance.description}</p>
          <span class="arrow-btn">{glance.btntext}</span>
          </div>
          {i < data.markdownRemark.frontmatter.glance.length - 1 ? ', ' : ''}
          </a>
          </div>
          ])}
        </div>
          <div class="row">
            <div class="col-12 col-md-3 col-lg-2 sidebar">
            {data.markdownRemark.frontmatter.workContent.map((section, i) => [
            <a key={i} href={"#" + section.sectionTitle}>{section.sectionTitle}
          {i < data.markdownRemark.frontmatter.workContent.length - 1 ? ', ' : ''}
          </a>
          ])}
            </div>
            <div class="col-12 col-md-9 col-lg-10 work-body">
          {data.markdownRemark.frontmatter.workContent.map((section, i) => [
            <div class="work-section" key={i} id={section.sectionTitle}>
          <h2>{section.sectionTitle}</h2>
          <div class="regular-text"><ReactMarkdown>{section.sectionText}</ReactMarkdown></div>
          {i < data.markdownRemark.frontmatter.workContent.length - 1 ? ', ' : ''}
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
              fixed(width: 300) {
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