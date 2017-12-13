import React, { Component } from 'react';

class MainMenu extends Component {
  render () {
    return (
      <nav className="teal">
        <div>
          <ul>
            <li><a href="/feeds">Feeds</a></li>
              
              { !this.props.isConnected ?
              <div>
                <li><a href="/login">Log In</a></li>
                <li><a href="/signup">Signup</a></li>
              </div>: 
              <div>
                <li><a href="/login">Log Off</a></li>
              </div>
              }
          </ul> 
        </div>
      </nav>
    );
  }
};

export default MainMenu;


               