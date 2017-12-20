import React from 'react';
import Technology from './technology';

export default () => (
  <div className="tl bt b--black-10 pa3 pa5-ns bg-washed-blue">
    <div className="mw9 center">
      <div className="f5 ttu tracked fw6">Expertise</div>
      <section className="lh-copy">
        <div className="cf w-100">
          <Technology topic="JavaScript">
            I have deep experience working on large-scale JavaScript
            applications from the early days of jQuery and MooTools to the
            modern landscape of module/bundler systems and single-page-app
            frameworks. I particularly have a fondness for React these days.
            Javascript libraries will always fall in and out of fashion, but
            React's concept of treating UI as a function of state fundamentally
            altered the way I view UI architecture and I'll always appreciate it
            for that.
          </Technology>
          <Technology topic="CSS">
            Often overlooked and underappreciated, building scalable and robust
            CSS is a surprisingly complex endeavor. I have experience with many
            CSS tools and strategies such as LESS, SCSS, PostCSS, and
            more-recent OOCSS techniques such as Tachyons and Basscss. I have a
            passion for constructing CSS systems that provide users with a
            refined, responsive, and accessible experience.
          </Technology>
          <Technology topic="Web Services">
            I have a breadth of experience in building and consuming web
            services from SOAP/XML in C# apps to REST/JSON in JavaScript
            single-page-apps. Recently I've been gaining experience with GraphQL
            services and have been enjoying it immensely.
          </Technology>
        </div>
      </section>
    </div>
  </div>
);
