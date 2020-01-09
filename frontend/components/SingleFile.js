import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    padding-left: ${props => props.level * 20}px;
    display: block;
    height: 20px;
`;

const FileDisplay = styled.div`
    display: inline-block;
`;

const ButtonSpan = styled.button`
    margin-left: 5px;
    cursor: pointer;
`;

class SingleFile extends React.Component {
    constructor(props) {
        super(props);
        this.toggleDetailButton = this.toggleDetailButton.bind(this);
        this.onShowDetails = this.onShowDetails.bind(this);
        this.state = {
            showDetailButton: false,
        }
    }

    toggleDetailButton() {
        this.setState(prevState => ({
            showDetailButton: !prevState.showDetailButton,
        }))
    }

    onShowDetails(data) {
        // this is where we'd show details on the right
        console.log(data);

    }

    render() {
        const { data, level, showDocument, path } = this.props;
        const { showDetailButton } = this.state;

        return (
            <Container
                level={level}
                onMouseEnter={this.toggleDetailButton}
                onMouseLeave={this.toggleDetailButton}
                onClick={() => showDocument(`${path}/${data.name}`)}
            >
                <FileDisplay>{data.name}</FileDisplay>
                {showDetailButton && (
                    <ButtonSpan onClick={() => this.onShowDetails(data)}>
                        Show details
                    </ButtonSpan>
                )}
            </Container>
        )
    }
}

export default SingleFile;