/* eslint-disable */
var React = require('react');

function TestWidget({ text, subtitle }) {
  return (
    <h1>
      {text}
      {subtitle && subtitle || null}
    </h1>
  );
}

export default TestWidget;
