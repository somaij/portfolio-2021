import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogRoll from '../components/BlogRoll'

const NotFoundPage = () => (
  <Layout>
    <Helmet>
    <title>404 Page Not Found | Jason Somai</title>
  </Helmet>
    <div className="page-404">
    <div className="container">
    <div className="row">
      <div className='col-12 text-center'>
      <h1>404: Not Found</h1>
    <p>Try returning to my <a href="/">homepage</a> to get to where you were trying to go to.</p>
    <p>Or, check out one of these blogs!</p>
      </div>
      <BlogRoll/>
    </div>
    </div>
    </div>
  </Layout>
)

export default NotFoundPage
