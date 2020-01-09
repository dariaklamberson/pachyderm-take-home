/* @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
// import styled from '@emotion/styled';

// const Container = styled.div`
//     padding-left: ${props => props.level * 20}px;
//     display: block;
//     height: 20px;
// `;

// const DirectoryDisplay = styled.div`
//     display: inline-block;
// `;

// const ButtonSpan = styled.span`
//     margin-right: 5px;
//     cursor: pointer;
// `;

class DocWindow extends React.Component {
    render() {
        const { doc } = this.props;

        return (
            <React.Fragment>
                <div>{doc}</div>
            </React.Fragment>
        )
    }
}

export default DocWindow;