import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: '',
      results: ''
    };
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          fetchRequest(this.state.api, 'GET').then((results) => {
            this.setState({ results })
          })
        }}>GET</button>
        <button onClick={() => {
          fetchRequest(this.state.api, 'POST').then((results) => {
            this.setState({ results })
          })
        }}>POST</button>
        <button onClick={() => {
          fetchRequest(this.state.api, 'PUT').then((results) => {
            this.setState({ results })
          })
        }}>PUT</button>
        <button onClick={() => {
          fetchRequest(this.state.api, 'PATCH').then((results) => {
            this.setState({ results })
          })
        }}>PATCH</button>
        <button onClick={() => {
          fetchRequest(this.state.api, 'DELETE').then((results) => {
            this.setState({ results })
          })
        }}>DELETE</button>
      </div>
    );
  }
}

export default Buttons;

class Message extends React.Component {


  render() {
    return (
      <div>
        <input id="api-url" onChange={(e) => {
          this.setState({ api: e.target.value })
        }}></input>
        <button onClick={() => {
          fetchRequest(this.state.api, this.state.method).then((results) => {
            this.setState({ results })
          })
        }}>GET</button>

        <p>{this.state.results}</p>
      </div>
    );
  }
}

export default Message;