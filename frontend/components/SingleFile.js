import React from 'react';
import styled from '@emotion/styled';

const FileDisplay = styled.div`
  padding-left: ${props => props.level * 15}px;
  display: block;
`;

class SingleFile extends React.Component {
    onShowDetails(data) {
        // this is where we'd show details on the right
        console.log(data);
    }

    render() {
        const { data, level } = this.props;

        return (
            <FileDisplay level={level}>
                <div>{data.name}</div>
                <button onClick={() => this.onShowDetails(data)}>Details</button>
            </FileDisplay>
        )
    }
}

export default SingleFile;