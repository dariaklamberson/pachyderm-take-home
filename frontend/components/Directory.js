import React from 'react';
import { readDir } from '../helpers';

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.onExpandDir = this.onExpandDir.bind(this);
        this.state = {
            expandedDirs: {},
        }
    }

    renderEntry(dir) {
        debugger;
        return (
            <Directory
                tree={this.state.expandedDirs[dir.name]}
                level={this.props.level + 1} />
        )
    }

    renderDir(dir) {
        debugger;
        if (this.state.expandedDirs[dir.name]) {
            return this.renderEntry(dir)
        } else {
            return (
                <React.Fragment>
                    <div>{dir.name}</div>
                    <button onClick={this.onExpandDir.bind(dir)}>Expand</button>
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
                console.log(contents)
                this.setState(prevState => {
                    expandedDirs: update(prevState.expandedDirs, {dirName: contents})
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
                {tree.entries ? tree.entries.map(contents => {
                    if (contents.type == 'dir') {
                        return this.renderDir(contents);
                    } else {
                        return (
                            <File data={file} />
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