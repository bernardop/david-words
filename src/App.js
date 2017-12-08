import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const words = [
  {
    text: "kick",
    imageUrl: "http://weclipart.com/gimg/6D93567D4699DF52/kicking-someone-clipart-1.jpg"
  },
  {
    text: "kitten",
    imageUrl: "http://www.clker.com/cliparts/F/Z/4/w/c/L/kitten-md.png"
  },
  {
    text: "kite",
    imageUrl: "https://openclipart.org/download/239399/Colorful-Anthropomorphic-Kite-3.svg"
  },
  {
    text: "key",
    imageUrl: "http://clipartix.com/wp-content/uploads/2016/08/Key-clip-art-templates-free-clipart-images.jpg"
  },
  {
    text: "kitchen",
    imageUrl: "http://clipartix.com/wp-content/uploads/2016/06/Free-kitchen-clipart-clip-art-pictures-graphics-illustrations.jpg"
  }
]

const Word = ({ text, imageUrl }) => (
  <div class="word">
    <img src={imageUrl} />
    <h1>{text}</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        {words.map(word => <Word text={word.text} imageUrl={word.imageUrl} />)}
      </div>
    );
  }
}

export default App
