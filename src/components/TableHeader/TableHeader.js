import React from 'react';

class TableHeader extends React.Component {
    handleClick = () => {
        if (this.props.chosenColumn === this.props.value && this.props.sortOrder === 'ascending') {
            this.props.sortTable(this.props.value, 'descending');
        } else {
            this.props.sortTable(this.props.value, 'ascending');
        }
    }

    getArrow = () => {
        if (this.props.chosenColumn !== this.props.value) {
            return null;
        } else if (this.props.sortOrder === 'ascending') {
            return '▼';
        } else {
            return '▲';
        }

    }

    render() {
        return (
            <th onClick={this.handleClick}>
                {this.props.value}
                {this.getArrow()}
            </th>)
    }
}

export default TableHeader;