import React from 'react';
import { Link } from 'react-router';
import { Search } from 'components';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Header extends React.Component {
  constructor(props) {
    super(props);

    // IMPLEMENT: CREATE A SEARCH STATUS

    this.state = {
      search: false,
    };

    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch() {
    this.setState({
      search: !this.state.search,
    });
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    const loginButton = (
      <li>
        <Link to="/login">
          <i className="material-icons">vpn_key</i>
        </Link>
      </li>
    );

    const logoutButton = (
      <li>
        <a onClick={this.props.onLogout}>
          <i className="material-icons">lock_open</i>
        </a>
      </li>
    );

    return (
      <div>
        {' '}
        <nav>
          <div className="nav-wrapper blue darken-1">
            <div className="le">
              <ul>{this.props.isLoggedIn ? logoutButton : loginButton}</ul>
            </div>
            <Link to="/" className="brand-logo right center">
              나 혼자 산다
            </Link>
            <ul>
              <li>
                <a onClick={this.toggleSearch}>
                  <i className="material-icons">search</i>
                </a>
              </li>
              <li>
                <Link to="/home">낙서장</Link>
              </li>
              <li>
                <Link to="/mission">도전혼밥!</Link>
              </li>
              <li>
                <Link to="/FreeBoard">게시판</Link>
              </li>
            </ul>
          </div>
          <ReactCSSTransitionGroup
            transitionName="search"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            {/* IMPLEMENT: SHOW SEARCH WHEN SEARCH STATUS IS TRUE */}
            {this.state.search ? (
              <Search
                onClose={this.toggleSearch}
                onSearch={this.props.onSearch}
                usernames={this.props.usernames}
              />
            ) : (
              undefined
            )}
          </ReactCSSTransitionGroup>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  isLoggedIn: React.PropTypes.bool,
  onLogout: React.PropTypes.func,
  usernames: React.PropTypes.array,
};

Header.defaultProps = {
  isLoggedIn: false,
  onLogout: () => {
    console.error('logout function not defined');
  },
  usernames: [],
};

export default Header;
