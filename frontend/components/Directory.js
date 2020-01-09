/* @jsx jsx */
import React from 'react';
import { readDir } from '../helpers';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import SingleFile from './SingleFile';

const Container = styled.div`
    padding-left: ${props => props.level * 20}px;
    display: block;
    height: 20px;
`;

const DirectoryDisplay = styled.div`
    display: inline-block;
`;

const ButtonSpan = styled.span`
    margin-right: 5px;
    cursor: pointer;
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
        const { level, showDocument } = this.props;
        return (
            <Directory
                tree={this.state.expandedDirs[dir.name]}
                level={level + 1}
                showDocument={showDocument} 
            />
        )
    }

    renderButton(dir) {
        if (this.state.expanded[dir.name]) {
            return (
                <ButtonSpan
                    className="fas fa-minus-square"
                    onClick={() => this.onCollapseDir(dir)}
                />
            )
        } else {
            return (
                <ButtonSpan
                    className="fas fa-plus-square"
                    onClick={() => this.onExpandDir(dir)}
                />
            )
        }
    }

    renderDir(dir) {
        const dirDisplay = (
            <Container level={this.props.level}>
                {this.renderButton(dir)}
                <DirectoryDisplay>
                    <div>{dir.name}</div>
                </DirectoryDisplay>
            </Container>
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
        const { tree, level, showDocument } = this.props;

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
                                level={level}
                                path={tree.path}
                                showDocument={showDocument}
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