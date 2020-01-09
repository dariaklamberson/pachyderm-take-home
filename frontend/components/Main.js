import React from 'react';
import Directory from './Directory';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pending: false,

        };
    }

    // componentDidMount() {
        // TODO: set up pending state
    //     pass
    // }

    render() {
        const { fileTree, level } = this.props;

        return (
            <Directory
                tree={fileTree}
                level={level}
            />
        )

        // if (pending)
        //     return (
        //         <i class="fas fa-cog fa-spin"></i>
        //     )

        return (
            <div>
                Main
                {/* {words && words.map(word => <WordDisplay word={word} />)} */}
            </div>
        )
    }
}

export default Main;