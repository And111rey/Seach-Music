import React, { Component } from 'react';
import "./app.css";
import { FormGroup, FormControl, InputGroup, Button,Glyphicon } from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: ""
    }
  }

  search() {
    console.log("This state - ", this.state);
  }

  render () {
    return(
      <div className="app">
        <div className="app-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl 
              type="text" 
              placeholder="Search Artist"
              query={this.state.query}
              onChange={ event => {this.setState({query: event.target.value})} }
            />
             <InputGroup.Append>
                <Button onClick={() => this.search()} variant="outline-secondary">Search</Button>
              </InputGroup.Append>     
          </InputGroup>
          

        </FormGroup>
        <div className="propfile">
          <div>Artist Picture</div>
          <div>Artist name</div>
        </div>
        <div className="gallery">
          Gallery
        </div>
      </div>
    );
  }
}

// lesson 23

export { App }