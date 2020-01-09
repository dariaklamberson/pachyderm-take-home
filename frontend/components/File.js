import React from 'react';

class Directory extends React.Component {
    onShowDetails() {

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
        
        // interface Entry {
        //     name: String,
        //     type: 'dir' | 'file',
        //     size: Number,
        //     created: Date,
        //     modified: Date,
        // }
    }
}

export default File;