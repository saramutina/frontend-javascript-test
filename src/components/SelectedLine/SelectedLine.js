import React from 'react';

class SelectedLine extends React.Component {
    render() {
        if (!this.props.row) {
            return null;
        }
        const { id, firstName, lastName, email, phone } = this.props.row;
        return (
            <div>
                <h1>Selected info:</h1>
                <table>
                    <thead>
                        <th>id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                    </thead>
                    <tr>
                        <td>{id}</td>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{email}</td>
                        <td>{phone}</td>
                    </tr>
                </table>
            </div>

        )
    }
}

export default SelectedLine;