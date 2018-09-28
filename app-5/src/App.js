import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  constructor (){
    super ();
  }


  render() {
    return (
      <div className="App">
        <Image myImage={"https://www.revolvermag.com/sites/default/files/styles/image_954_x_537/public/media/images/article/zakk.jpg?itok=IMYi7b58&timestamp=1502207187"}/>
      </div>
    );
  }
}

export default App;
