import React from 'react';
import './Table.css';
import TableRow from '../TableRow/TableRow';

class Table extends React.Component {
    render() {
        if (this.props.data === null) {
            return null;
        }

        return (
            <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {/* В качестве key использован index так как id с сервера не уникальны */}
                    {this.props.data.map((row, index) => <TableRow key={index} row={row} onClick={this.props.selectRow} />)}
                </tbody>

            </table>
        )
    }
}

export default Table;