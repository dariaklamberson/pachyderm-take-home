import React from 'react';
import Directory from '../components/Directory';
import DocWindow from '../components/DocWindow';
import { readDir } from '../helpers';
// const fs = require('fs');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.showDocument = this.showDocument.bind(this);
    this.state = {
      fileTree: undefined,
      docShown: undefined,
    }
  }

  showDocument(path) {
    // debugger;
    Promise.resolve(fetch(path)
      .then(data => {
        this.setState({
          docShown: data,
        })
      }))
    // fs.readFile(path, (err, data) => { 
    //   if (err) throw err; 
    
    //   this.setState({
    //     docShown: fetch(path),
    //   })
    // })
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
    const { fileTree, docShown } = this.state;
    // Note: level prop would be used for indentation from left in styling
    return (
      <React.Fragment>
        <Directory
          tree={fileTree}
          level={0}
          showDocument={this.showDocument} 
        />
        <DocWindow
          doc={docShown}
        />
      </React.Fragment>
    );
  }
}

export default App;