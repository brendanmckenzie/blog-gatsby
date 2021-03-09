import React from "react";
import PropTypes from "prop-types";

const HTML = (props) => {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script
          src="https://kit.fontawesome.com/cf8e377f62.js"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Rubik|IBM+Plex+Serif"
        />
        <link rel="icon" type="image/jpeg" href="/assets/images/photo.jpg" />
        <script
          async
          defer
          data-domain="brendanmckenzie.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
};

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

export default HTML;
