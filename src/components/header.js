import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-5">
        <Link
          to="/"
        >
          Jason Somai
        </Link>
        </div>
        <div class="col-7 menu text-right d-flex justify-content-end">
        <Link
          to="/blog"
        >
          Blog
        </Link>
        <Link
          to="/#work"
        >
          Work
        </Link>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Jason Somai`,
}

export default Header
