import React from 'react';
import { withRouter } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import Timeline from './components/Timeline';
import Grids from './components/Grids';
import globe from './assets/img/passport.png';
import plane from './assets/img/boot.png';

export var app = null;

export const App = withRouter(
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ready: false,
        pageTitle: '',
        page: ''
      };

      // expose app instance
      app = this;
    }

    componentDidMount() {}

    componentWillUnmount() {}

    componentDidUpdate(prevProps, prevState) {}

    componentWillReceiveProps(newProps) {
      const { pathname: oldPathname } = this.props.location;
      const { pathname: newPathname, search } = newProps.location;
    }

    render() {
      return (
        <div id="app-root">
          <div id="app-main" className="app-main">
            <div className="wrapper">
              <div className="top-wrapper">
                <div className="top-icon">
                  <div className="top-icon__rotating-globe">
                    <img src={globe} />
                  </div>
                  <div className="top-icon__plane">
                    <img src={plane} />
                  </div>
                </div>
                <h1 className="center highlight main-top-title">福岡・長崎</h1>
              </div>

              <Grids />
              <Timeline />
            </div>
          </div>
        </div>
      );
    }

    redirect(path) {
      this.props.history.push(path);
    }

    setPageTitle(pageTitle) {
      this.setState({ pageTitle });
      document.title = pageTitle;
    }
  }
);
