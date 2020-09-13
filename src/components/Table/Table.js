import React from 'react';
import './Table.css';
import TableRow from '../TableRow/TableRow';
import TableHeader from '../TableHeader/TableHeader';

class Table extends React.Component {
    render() {
        if (this.props.data === null) {
            return null;
        }

        return (
            <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <TableHeader
                            value="id"
                            sortTable={this.props.sortTable}
                            sortOrder={this.props.sortOrder}
                            chosenColumn={this.props.chosenColumn}
                        />
                        <TableHeader
                            value="firstName"
                            sortTable={this.props.sortTable}
                            sortOrder={this.props.sortOrder}
                            chosenColumn={this.props.chosenColumn}
                        />
                        <TableHeader
                            value="lastName"
                            sortTable={this.props.sortTable}
                            sortOrder={this.props.sortOrder}
                            chosenColumn={this.props.chosenColumn}
                        />
                        <TableHeader
                            value="email"
                            sortTable={this.props.sortTable}
                            sortOrder={this.props.sortOrder}
                            chosenColumn={this.props.chosenColumn}
                        />
                        <TableHeader
                            value="phone"
                            sortTable={this.props.sortTable}
                            sortOrder={this.props.sortOrder}
                            chosenColumn={this.props.chosenColumn}
                        />
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