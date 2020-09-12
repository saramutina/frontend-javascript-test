import React from 'react';
import { PAGE_SIZE } from '../App/App';

class Pagination extends React.Component {
    changePage = pageNum => (event) => {
        console.log(event);
        this.props.changePage(pageNum);
    }

    renderPages = () => {
        const pagesCount = Math.ceil(this.props.totalSize / PAGE_SIZE);
        let pageButtons = [];
        for (let i = 0; i < pagesCount; i++) {
            pageButtons.push(<button key={i + 1} onClick={this.changePage(i + 1)} >{i + 1}</button>);
        };
        return pageButtons;
    }

    render() {
        return (
            <div>
                {this.renderPages()}
            </div>
        )
    }
}

export default Pagination;