import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types"

import './style.scss';

const Header = () => (
  <header>
    <StaticImage
      src="../../images/logo.png"
      width={200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Casa Logo"
    />
      <h1>
        Casa Buena <span>Property Inspection LLC</span>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
