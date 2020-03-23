import React from 'react';

import './styles.css';

import Header from "./components/header/header";
// import Input from './components/input.js';
// import Buttons from './components/buttons.js';
import Message from './components/message.js';
import Footer from "./components/footer/footer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <Input/>
        <Buttons/> */}
        <Message/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
