/* @jsx jsx */
import React from 'react';
import { readDir } from '../helpers';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import SingleFile from './SingleFile';

const DirectoryDisplay = styled.div`
  padding-left: ${props => props.level * 15}px;
  display: block;
`;

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.onExpandDir = this.onExpandDir.bind(this);
        this.state = {
            expandedDirs: {},
            expanded: {},
        }
    }

    renderEntry(dir) {
        return (
            <Directory
                tree={this.state.expandedDirs[dir.name]}
                level={this.props.level + 1}
            />
        )
    }

    renderButton(dir) {
        if (this.state.expanded[dir.name]) {
            return (
                <button onClick={() => this.onCollapseDir(dir)}>Collapse</button>
            )
        } else {
            return (
                <button onClick={() => this.onExpandDir(dir)}>Expand</button>
            )
        }
    }

    renderDir(dir) {
        const dirDisplay = (
            <DirectoryDisplay level={this.props.level}>
                <div>{dir.name}</div>
                {this.renderButton(dir)}
            </DirectoryDisplay>
        )
        let entries;
        if (this.state.expandedDirs[dir.name] && this.state.expanded[dir.name]) {
            entries = this.renderEntry(dir);
        }
        return (
            <React.Fragment>
                {dirDisplay}
                {entries}
            </React.Fragment>
        )
    }

    onExpandDir(dir) {
        // see if we already have the information
        const dirName = dir.name;
        const fullPath = `${this.props.tree.path}/${dirName}`;
        Promise.resolve(readDir(fullPath)
            .then(contents => {
                const { expandedDirs } = this.state;
                expandedDirs[dirName] = contents;
                this.setState({
                    expandedDirs,
                })
            })
        )
        const { expanded } = this.state;
        expanded[dirName] = true
        this.setState({
            expanded,
        })
    }

    onCollapseDir(dir) {
        const { expanded } = this.state;
        expanded[dir.name] = false
        this.setState({
            expanded,
        })
    }

    render() {
        const { tree, level } = this.props;
        const { expanded } = this.state;

        if (!tree) {
            return null;
        }

        return (
            <React.Fragment>
                {/* Leaving a note here -- we should render the dir either way, so would break that out */}
                {/* {tree.entries && this.renderDir(tree)} */}
                {tree.entries ? tree.entries.map(contents => {
                    if (contents.type == 'dir') {
                        return this.renderDir(contents);
                    } else {
                        return (
                            <SingleFile
                                data={contents}
                                level={level + 1}
                            />
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