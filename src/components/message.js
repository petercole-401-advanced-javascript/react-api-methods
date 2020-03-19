import React from 'react';
import { fetchRequest } from '../utils/util.js';

// https://pokeapi.co/api/v2/pokemon/ditto/

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: '',
      method: 'GET',
      results: ''  
    };
  }
  
  render() {
    return (
      <div>
        <input id="api-url" onChange={ (e) => {
          this.setState({ api: e.target.value })
        }}></input>
        <button onClick={ () => { fetchRequest(this.state.api, this.state.method).then( (results) => {
          this.setState( { results } )
        }) } }>GET</button>

        <p>{ this.state.results }</p>
      </div>
    );
  }
}

export default Message;
