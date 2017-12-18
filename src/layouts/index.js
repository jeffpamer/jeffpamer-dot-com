import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "tachyons/css/tachyons.min.css";

const Header = () => (
  <header className="bt bw3 b--navy black-80 pv5">
    <div className="ph3 ph5-ns">
      <div className="cf w-100 center mw9">
        <div className="f1 fw6 ttu tracked f-subheadline-l lh-copy lh-title-l">
          Jeff Pamer
        </div>
        <div className="f4 lh-copy measure">
          An experienced full-stack software developer with a love for UX/UI in
          an unending pursuit of becoming a better craftsman and human.
        </div>
        <p className="mb0">jeff@mediumdivision.com</p>
        <p className="mt0">434-386-7427</p>
      </div>
    </div>
  </header>
);

const TemplateWrapper = ({ children }) => (
  <div className="w-100 sans-serif black-80 border-box bg-white">
    <Helmet
      title="Jeff Pamer"
      meta={[
        {
          name: "description",
          content:
            "Jeff Pamer is a creative full-stack software developer with a love for User Interfaces and a champion for the value of aesthetics."
        },
        {
          name: "keywords",
          content:
            "pamer, los angeles, software developer, resume, react, javascript, threejs"
        }
      ]}
      link={[
        {
          rel: "stylesheet",
          type: "text/css",
          href: "//cloud.typography.com/6718032/7737392/css/fonts.css"
        }
      ]}
    />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
