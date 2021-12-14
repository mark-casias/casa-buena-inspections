import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import './style.scss';

const Footer = () => (
  <footer>
    <div className="footer__container">
      <div>
        <h4>Karl Wulffraat<span>Certified home inspector</span></h4>
        <p><a href="tel:505-363-7526">505.363.7526</a></p>
        <p><a href="mailto:casa.buena.inspection@gmail.com">casa.buena.inspection@gmail.com</a></p>
      </div>
      <div class="footer__logo">
        <StaticImage
          src="../../images/logo.png"
          width={100}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Casa Logo"
        />
        <h5>Casa Buena<span>Property Inspection LLC</span></h5>
      </div>
    </div>
  </footer>
);

export default Footer;
