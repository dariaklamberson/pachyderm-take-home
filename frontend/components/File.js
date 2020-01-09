import React from 'react';

class Directory extends React.Component {
    onShowDetails() {
        // this is where we'd show details on the right
    }

    render() {
        const { data } = this.props;

        if (data) {
            debugger;
        }

        return (
            <React.Fragment>
                <div>{data.name}</div>
            </React.Fragment>
        )
    }
}

export default File;