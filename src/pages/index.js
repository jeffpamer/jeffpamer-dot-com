import React from "react";
import Link from "gatsby-link";

const job = (company, title, from, to, description, location) => (
  <article className="fl pv2 w-100 w-third-l pr4-l">
    <h2 className="f5 f4-ns fw6 mb0">{company}</h2>
    <h3 className="f6 f5-ns mb0">{title}</h3>
    <p className="f6 f5-ns measure lh-copy mt0">
      {from} → {to}
    </p>
    <p className="f6 f5-ns measure lh-copy i">{location}</p>
    <p className="f6 f5-ns measure lh-copy mt0">{description}</p>
  </article>
);

const expertise = (topic, description) => (
  <article className="fl pv2 w-100 w-third-l pr4-l">
    <h2 className="f5 f4-ns fw6 mb0">{topic}</h2>
    <p className="f6 f5-ns measure lh-copy mt0">{description}</p>
  </article>
);

const IndexPage = () => (
  <div>
    <div className="tl bt b--black-10 pa3 pa5-ns bg-lightest-blue">
      <div className="mw9 center">
        <div className="f5 ttu tracked fw6">Work History</div>
        <section className="lh-copy">
          <div className="cf w-100">
            {job(
              "Edenspiekermann LA",
              "Director of Development",
              "October 2016",
              "Present",
              "Working along-side a world-class design team to deliver impeccable web experiences for clients ranging from local startups to global financial institutions. Directly responsible for the implementation and delivery of all development projects. Utilizing a variety of stacks and technologies including modern JavaScript frameworks like React and progressive content-delivery services like Contentful.",
              "Los Angeles, CA"
            )}
            {job(
              "WillowTree, Inc",
              "Senior Software Engineer",
              "December 2013",
              "September 2016",
              "Developed a wide variety of client applications ranging anywhere from mobile games, media delivery, content management, and more. Utilized a combination of in-house developed utilities and JavaScript frameworks such as React and Backbone. Was part of the small core team that moved to Durham, NC to open and lead WillowTree's first satellite office.",
              "Charlottesville, VA and Durham, NC"
            )}
            {job(
              "SNL Financial",
              "Software Developer III",
              "June 2006",
              "November 2013",
              "Used agile methodologies to develop mostly-web-based applications serving large amounts of data to a wide client base. Responsible for the full stack of application development, from SQL data design and access to HTML/CSS/JS presentation layer.",
              "Charlottesville, VA"
            )}
          </div>
        </section>
      </div>
    </div>
    <div className="tl bt b--black-10 pa3 pa5-ns bg-washed-blue">
      <div className="mw9 center">
        <div className="f5 ttu tracked fw6">Expertise</div>
        <section className="lh-copy">
          <div className="cf w-100">
            {expertise(
              "JavaScript",
              "I have deep experience working on large-scale JavaScript applications from the early days of jQuery and MooTools to the modern landscape of module/bundler systems and single-page-app frameworks. I particularly have a fondness for React these days. Javascript libraries will always fall in and out of fashion, but React's concept of treating UI as a function of state fundamentally altered the way I view UI architecture and I'll always appreciate it for that."
            )}
            {expertise(
              "CSS",
              "Often overlooked and underappreciated, building scalable and robust CSS is a surprisingly complex endeavor. I have experience with many CSS tools and strategies such as LESS, SCSS, PostCSS, and more-recent OOCSS techniques such as Tachyons and Basscss. I have a passion for constructing CSS systems that provide users with a refined, responsive, and accessible experience."
            )}
            {expertise(
              "Web Services",
              "I have a breadth of experience in building and consuming web services from SOAP/XML in C# apps to REST/JSON in JavaScript single-page-apps. Recently I've been gaining experience with GraphQL services and have been enjoying it immensely."
            )}
          </div>
        </section>
      </div>
    </div>
    <div className="tl bt b--black-10 pa3 pa5-ns bg-white">
      <div className="mw9 center">
        <div className="f5 ttu tracked fw6">Currently Learning</div>
        <section className="lh-copy">
          <div className="cf w-100">
            {expertise(
              "ThreeJS / GLSL",
              "I have always enjoyed exploring the more-experimental browser APIs such as the WebAudio API. I have some experience with 3D programming in general, but the widespread availability of WebGL has made me realize I need to explore it further."
            )}
            {expertise(
              "Elm",
              "I'm intrigued by functional compile-to-JS languages. I explored Clojure/ClojureScript last year, and am diving into Elm this year. I think there is a lot to learn from these languages in regards to building elegant interfaces."
            )}
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default IndexPage;
