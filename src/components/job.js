import React from 'react';

export default ({ company, title, from, to, location, children }) => {
  return (
    <article className="fl pv2 w-100 w-third-l pr4-l">
      <h2 className="f5 f4-ns fw6 mb0">{company}</h2>
      <h3 className="f6 f5-ns mb0">{title}</h3>
      <p className="f6 f5-ns measure lh-copy mt0">
        {from} → {to}
      </p>
      <p className="f6 f5-ns measure lh-copy i">{location}</p>
      <p className="f6 f5-ns measure lh-copy mt0">{children}</p>
    </article>
  );
};
