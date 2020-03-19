import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: '',
    };
  }
  render() {
    return (
      <div>
        <input id="api-url" onChange={(e) => {
          this.setState({ api: e.target.value })
        }}></input>
      </div>
    );
  }
}

export default Input;
