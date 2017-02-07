import React, { Component } from 'react';
import './App.css';
import profilePicture from './ProfilePic.JPG';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="white-patch">
        </div>
          <div className="green-patch">
              <div className="description">
                  <h2 className="nameText"> Hi, I'm Muskein.</h2>
                  <h3 className="workText"> I work for the React Native team at Flipkart, Bangalore.</h3>
              </div>
          </div>
          <div className="circle">
            <img src={profilePicture} className="profilePicture"/>
          </div>
      </div>
    );
  }
}

export default App;
