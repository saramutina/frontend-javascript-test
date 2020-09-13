import React from 'react';
import { PAGE_SIZE } from '../App/App';

class Pagination extends React.Component {
    changePage = event => {
        this.props.changePage(event.target.value);
    }

    renderPages = () => {
        const pagesCount = Math.ceil(this.props.totalSize / PAGE_SIZE);
        let pageButtons = [];
        for (let i = 0; i < pagesCount; i++) {
            pageButtons.push(<button key={i + 1} value={i+1} onClick={this.changePage} >{i + 1}</button>);
        };
        return pageButtons;
    }

    render() {
        return (
            <div>
                {this.renderPages()}
                {!!this.props.totalSize && <p>
                    Page number: {this.props.currentPage}
                </p>}
            </div>
        )
    }
}

export default Pagination;