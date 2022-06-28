import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { compose } from 'recompose';

import withAuthentication from 'hoc/withAuthentication';

import AppRight from 'components/Layouts/AppRight';
import AppWrapper from 'components/Layouts/AppWrapper';
import MetaTag from 'components/MetaTag/MetaTag';
import Sidebar from 'containers/Sidebar/Sidebar';
import Snackbars from 'containers/AppNotification/Snackbars';
import Page from 'components/Layouts/Page';

class Authenticated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen:
        localStorage.getItem('isSidebarOpen') === 'true',
    };
  }

  onToggleSidebar = () => {
    localStorage.setItem('isSidebarOpen', !this.state.isSidebarOpen);
    this.setState({
      isSidebarOpen: !this.state.isSidebarOpen,
    });
  };

  render() {
    return (
      <AppWrapper>
        <MetaTag />
        <Sidebar
          isSidebarOpen={this.state.isSidebarOpen}
          onToggleSidebar={this.onToggleSidebar}
        />
        <AppRight isSidebarOpen={this.state.isSidebarOpen}>
          <Page
            onToggleSidebar={this.onToggleSidebar}
            title={this.props.title}
            onLogout={this.props.logout}
          >
            <Route {...this.props} />
          </Page>
        </AppRight>
        <Snackbars />
      </AppWrapper>
    );
  }
}

export default compose(withAuthentication)(Authenticated);
