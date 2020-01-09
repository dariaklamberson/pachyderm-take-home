import React from 'react';
import { readDir } from '../helpers';

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.onExpandDir = this.onExpandDir.bind(this);
        this.state = {
            expandedDirs: {},
            // this should also have an expanded bool
        }
    }

    renderEntry(dir) {
        return (
            <Directory
                tree={this.state.expandedDirs[dir.name]}
                level={this.props.level + 1} />
        )
    }

    renderDir(dir) {
        if (this.state.expandedDirs[dir.name]) {
            return this.renderEntry(dir)
        } else {
            return (
                <React.Fragment>
                    <div>{dir.name}</div>
                    <button onClick={() => this.onExpandDir(dir)}>Expand</button>
                </React.Fragment>
            )
        }
    }

    onExpandDir(dir) {
        const dirName = dir.name;
        const fullPath = `${this.props.tree.path}/${dirName}`;
        debugger;
        const expanded = Promise.resolve(readDir(fullPath)
            .then(contents => {
                const { expandedDirs } = this.state;
                expandedDirs[dirName] = contents;
                console.log(expandedDirs)
                this.setState({
                    expandedDirs,
                })
            })
        )
    }

    render() {
        const { tree, level } = this.props;

        if (!tree) {
            return null;
        }

        return (
            <React.Fragment>
                {/* Leaving a note here -- we should render the dir either way, so would break that out */}
                {tree.entries ? tree.entries.map(contents => {
                    if (contents.type == 'dir') {
                        return this.renderDir(contents);
                    } else {
                        debugger;
                        return (
                            <React.Fragment>
                                <div>{contents.name}</div>
                                {/* // <File data={contents} /> */}
                            </React.Fragment>
                        )
                    }
                }) : this.renderDir()}
            </React.Fragment>
        )

        // if (pending)
        //     return (
        //         <i class="fas fa-cog fa-spin"></i>
        //     )
    }
}

export default Directory;