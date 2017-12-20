import React from 'react';
import Job from './job';

export default () => (
  <div className="tl bt b--black-10 pa3 pa5-ns bg-lightest-blue">
    <div className="mw9 center">
      <div className="f5 ttu tracked fw6">Work History</div>
      <section className="lh-copy">
        <div className="cf w-100">
          <Job
            company="Edenspiekermann LA"
            title="Director of Development"
            from="October 2016"
            to="Present"
            location="Los Angeles, CA"
          >
            Working along-side a world-class design team to deliver impeccable
            web experiences for clients ranging from local startups to global
            financial institutions. Directly responsible for the implementation
            and delivery of all development projects. Utilizing a variety of
            stacks and technologies including modern JavaScript frameworks like
            React and progressive content-delivery services like Contentful.
          </Job>
          <Job
            company="WillowTree, Inc"
            title="Senior Software Engineer"
            from="December 2013"
            to="September 2016"
            location="Charlottesville, VA and Durham, NC"
          >
            Developed a wide variety of client applications ranging anywhere
            from mobile games, media delivery, content management, and more.
            Utilized a combination of in-house developed utilities and
            JavaScript frameworks such as React and Backbone. Was part of the
            small core team that moved to Durham, NC to open and lead
            WillowTree's first satellite office.
          </Job>
          <Job
            company="SNL Financial"
            title="Software Developer III"
            from="June 2006"
            to="November 2013"
            location="Charlottesville, VA"
          >
            Used agile methodologies to develop mostly-web-based applications
            serving large amounts of data to a wide client base. Responsible for
            the full stack of application development, from SQL data design and
            access to HTML/CSS/JS presentation layer.
          </Job>
        </div>
      </section>
    </div>
  </div>
);
