import React from 'react';

export default ({ topic, children }) => (
  <article className="fl pv2 w-100 w-third-l pr4-l">
    <h2 className="f5 f4-ns fw6 mb0">{topic}</h2>
    <p className="f6 f5-ns measure lh-copy mt0">{children}</p>
  </article>
);
