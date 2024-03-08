import React, { Component } from 'react';
import './App.css'; 
import ImageUpload from './ImageUpload'; 
class App extends Component {
  handleFileUpload = (image) => {
    console.log('Uploaded image:', image);
  };

  render() {
    return (
      <div className="App">
        <div className="content">
          <h1>Image Upload App</h1>
          <ImageUpload onFileUpload={this.handleFileUpload} />
        </div>
      </div>
    );
  }
}

export default App;
