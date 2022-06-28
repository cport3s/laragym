import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

import styles from './Layouts.css';

export default class PublicPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
  };

  render() {
    return [
      <Header key="title" title={this.props.title} showMenu={false} />,
      <main key="content" className={styles.appMain}>
        {this.props.children}
      </main>,
    ];
  }
}
