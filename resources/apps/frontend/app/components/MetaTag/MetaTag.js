import React from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import { Helmet } from 'react-helmet';

export default () => [
  <CssBaseline key="css" />,
  <Helmet
    key="helmet"
    titleTemplate="%s - Gym System"
    defaultTitle="Gym System"
  >
    <meta
      name="description"
      content="A React.js gym management application"
    />
  </Helmet>,
];
