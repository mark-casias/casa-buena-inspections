import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import './style.scss';

const Footer = () => (
  <footer>
    <div className="footer__container">
      <div>
        <p>Karl Wulffraat<span>Certified home inspector</span></p>
        <p>505.363.7526</p>
        <p><a href="mailto:casa.buena.inspection@gmail.com">casa.buena.inspection@gmail.com</a></p>
      </div>
      <div class="footer__logo">
        <StaticImage
          src="../../images/logo.png"
          width={100}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Casa Logo"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
    </div>
  </footer>
);

export default Footer;
