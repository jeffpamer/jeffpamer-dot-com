import React from 'react';
import Technology from './technology';

export default () => (
  <div className="tl bt b--black-10 pa3 pa5-ns bg-white">
    <div className="mw9 center">
      <div className="f5 ttu tracked fw6">Currently Learning</div>
      <section className="lh-copy">
        <div className="cf w-100">
          <Technology topic="ThreeJS / GLSL">
            I have always enjoyed exploring the more-experimental browser APIs
            such as the WebAudio API. I have some experience with 3D programming
            in general, but the widespread availability of WebGL has made me
            realize I need to explore it further.
          </Technology>
          <Technology topic="Elm">
            I'm intrigued by functional compile-to-JS languages. I explored
            Clojure/ClojureScript last year, and am diving into Elm this year. I
            think there is a lot to learn from these languages in regards to
            building elegant interfaces.
          </Technology>
        </div>
      </section>
    </div>
  </div>
);
