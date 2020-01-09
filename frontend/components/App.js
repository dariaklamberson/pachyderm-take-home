import React from 'react';
import Main from '../components/Main';
// import Modal from '../components/Modal';
import { readDir } from '../helpers';

// TODO: call gen file tree on application startup

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

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.words != nextState.words ||
  //          this.state.toggle != nextState.toggle
  // }

  // onWordsFetch = words => {
  //   this.setState({
  //     words: words
  //   });
  // };

  // onToggleList = () => {
  //   fetchWords()
  //     .then(words => {
  //       console.log(words)
  //       this.setState({
  //         words: words,
  //       });
  //       // debugger;
  //     });
  //   this.setState(prevState => ({ toggle: !prevState.toggle }));
  //   // debugger;
  // };

  // {/* <Toggle
    // toggle={this.state.toggle}
    // onToggleList={this.onToggleList}
  // /> */}
  // {/* {this.state.toggle && ( */}
    // {/* <WordsView
      // words={this.state.words}
      // onWordsFetch={this.onWordsFetch} /> */}
  // {/* )} */}

  render() {
    return (
      // <React.Fragment>
        
        <Main
          fileTree={this.state.fileTree}
          level={0}  
        />
        // {/* <Modal /> */}
      // {/* </React.Fragment> */}
    );
  }
}

// const Toggle = ({ toggle, onToggleList }) => (
//   <button type="button" onClick={onToggleList}>
//     {toggle ? 'Hide' : 'Show'}
//   </button>
// );

export default App;