/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// 参考 https://qiita.com/atomyah/items/5eb8b0019665254876da
import "./layout.css"
import '../utils/global.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={"KateSawada's Portfolio" || `Title`} />
      <div>
        <main>{children}</main>
        <footer
          class="p-2 bg-green-500 text-white text-center"
        >
          © {new Date().getFullYear()}, KateSawada
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
