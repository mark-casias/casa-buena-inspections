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
      <div className="header__sub">
        <div className="header__sub--container">
          <p><a href="tel:505-363-7526">505.363.7526</a></p>
          <p><a href="mailto:casa.buena.inspection@gmail.com">casa.buena.inspection@gmail.com</a></p>
        </div>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
