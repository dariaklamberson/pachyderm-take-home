import React from 'react';
import Directory from '../components/Main';
import { readDir } from '../helpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      fileTree: undefined,
    }
  }

  componentDidMount() {
    // set initial state to top-level directory
    readDir('')
      .then(dir => {
        console.log(dir)
        this.setState({
          fileTree: dir
        })
      })
  }

  render() {
    // Note: level prop would be used for indentation from left in styling
    return (
        <Directory
          fileTree={this.state.fileTree}
          level={0}  
        />
    );
  }
}

export default App;