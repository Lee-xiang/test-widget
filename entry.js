import React from 'react';
import ReactDOM from 'react-dom';
import TestWidget from './TestWidget.jsx';
import schema from './props-schema.js';

TestWidget.schema = schema;

TestWidget._render = (el, props) => {
  console.log(el);
  ReactDOM.render(
    React.createElement(TestWidget, props),
    el
  );
}

TestWidget.render = (widgetData, slotId, i) => `
  <div id="widget-mock-${slotId}-${i}"></div>
  <script>
    var el = document.getElementById('widget-mock-${slotId}-${i}');
    var props = ${JSON.stringify(widgetData)};

    TestWidget._render(el, props);
  </script>
`;

module.exports = TestWidget;
