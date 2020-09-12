import React from 'react';

class TableRow extends React.Component {
    handleClick = event => {
        this.props.onClick(this.props.row);
    }

    render() {
        const { id, firstName, lastName, email, phone } = this.props.row;
        return (
            <tr onClick={this.handleClick}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{phone}</td>
            </tr>
        );
    }
}

export default TableRow;