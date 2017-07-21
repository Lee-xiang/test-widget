const propsSchema = [
  {
    key: 'text',
    label: 'Text',
    type: 'TEXT'
  },
  {
    key: 'subtitle',
    label: 'Sub Title',
    type: 'TEXT'
  }
];

const defaultProps = {
  text: 'Page Title',
  subtitle: 'Optional Subtitle'
};

module.exports = {
  title: 'Widget Mock',
  id: 'WidgetMock',
  propsSchema,
  defaultProps
};
