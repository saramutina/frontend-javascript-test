import React from 'react';
import './Table.css';
import TableRow from '../TableRow/TableRow';

class Table extends React.Component {
    render() {
        return (
            <table style={{width: '100%'}}>
                <thead>
                    <th>id</th>
                    <th>First name</th> 
                    <th>Last name</th>
                    <th>E-mail</th>
                    <th>Phone</th>
                </thead>
                <tbody>
                    {this.props.data.map(row => <TableRow row={row} onClick={this.props.selectRow} />)}
                </tbody>
                
            </table>
        )
    }
}

export default Table;