import React, { Component } from 'react';

export default class TagCard extends Component {
    render() {
        console.log(this.props.data)
        if (this.props.data != 'N/A') {
            return (
                <div style={{
                    color: '#ee4d2d',
                    fontSize: '14px',
                    borderRadius: '2px',
                    padding: '3px 6px',
                    border: '1px solid #ee4d2d',
                    width: 'fit-content'
                }}>
                    {this.props.data}
                </div>
            );
        } else {
            return (
                <div>
                    <label style={{
                        color: "#757575",
                        fontSize: "0.875rem"
                    }}>
                        ไม่มี
                    </label>
                </div>
            )
        }

    }
}
