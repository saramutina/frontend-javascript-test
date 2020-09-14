import React from 'react';
import './App.css';
import ChooseData from '../ChooseData/ChooseData';
import SearchBar from '../SearchBar/SearchBar';
import AddLine from '../AddLine/AddLine';
import Table from '../Table/Table';
import Pagination from '../Pagination/Pagination';
import SelectedLine from '../SelectedLine/SelectedLine';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const URL_SMALL = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
export const URL_BIG = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
export const PAGE_SIZE = 50;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: null,
      selectedRow: null,
      selectedData: null,
      url: URL_SMALL,
      currentPage: 1,
      currentPageData: null,
      isDataLoading: false,
      sortOrder: null,
      sortByColumn: null,
      searchInfo: ''
    }
  }

  chooseDataSize = (url) => {
    this.setState({ url });
  }

  loadData = async () => {
    try {
      this.setState({ isDataLoading: true });
      const response = await fetch(this.state.url);
      if (response.ok) {
        let jsonResponse = await response.json();
        this.setState({
          selectedData: jsonResponse,
          allData: jsonResponse,
          currentPageData: jsonResponse.slice(0, PAGE_SIZE),
          isDataLoading: false,
          searchInfo: '',
        });
      }
    }
    catch (error) {
      console.log(error);
      this.setState({ isDataLoading: false });
    }
  }

  changePage = (newPageNumber) => {
    const dataToShow = this.state.selectedData;
    this.setState({
      currentPage: newPageNumber,
      currentPageData: dataToShow.slice(PAGE_SIZE * (newPageNumber - 1), PAGE_SIZE * newPageNumber)
    });
  }

  sortTable = (column, order) => {
    const dataToSort = this.state.selectedData;
    const compareFunc = (a, b) => {
      if (order === 'ascending') {
        if (column === "id") {
          return a.id - b.id;
        }
        if (a[column] < b[column]) {
          return -1;
        }
        if (a[column] > b[column]) {
          return 1;
        }
        return 0;
      }
      if (order === 'descending') {
        if (column === "id") {
          return b.id - a.id;
        }
        if (a[column] < b[column]) {
          return 1;
        }
        if (a[column] > b[column]) {
          return -1;
        }
        return 0;
      }
    }
    const sortedData = dataToSort.sort(compareFunc);
    this.setState({
      selectedData: sortedData,
      currentPageData: sortedData.slice(0, PAGE_SIZE),
      currentPage: 1,
      sortOrder: order,
      sortByColumn: column
    });
  }

  changeSelectedRow = (row) => {
    this.setState({ selectedRow: row });
  }

  filter = () => {
    const { searchInfo, allData } = this.state;
    if (!allData) {
      return;
    };

    const filterFunc = (element) => {
      return (element.id.toString().toLowerCase().indexOf(searchInfo.toLowerCase()) !== -1) ||
        (element.firstName.toLowerCase().indexOf(searchInfo.toLowerCase()) !== -1) ||
        (element.lastName.toLowerCase().indexOf(searchInfo.toLowerCase()) !== -1) ||
        (element.email.toLowerCase().indexOf(searchInfo.toLowerCase()) !== -1) ||
        (element.phone.toLowerCase().indexOf(searchInfo.toLowerCase()) !== -1)
    }
    const filteredData = allData.filter(filterFunc);
    this.setState({
      selectedData: filteredData,
      currentPageData: filteredData.slice(0, PAGE_SIZE),
      currentPage: 1
    });
  }

  changeSearchInfo = (newSearchInfo) => {
    this.setState({ searchInfo: newSearchInfo });
  }

  render() {
    const totalSize = (this.state.selectedData ? this.state.selectedData.length : 0);

    return (
      <div>
        <div>
          <ChooseData
            url={this.state.url}
            changeUrl={this.chooseDataSize}
            loadData={this.loadData}
          />
          <Loader
            type="Oval"
            color="#00BFFF"
            height={100}
            width={100}
            visible={this.state.isDataLoading}
          />
        </div>
        <div>
          <SearchBar
            filter={this.filter}
            searchInfo={this.state.searchInfo}
            changeSearchInfo={this.changeSearchInfo}
          />
          <AddLine />
        </div>
        <div>
          <Table
            data={this.state.currentPageData}
            selectRow={this.changeSelectedRow}
            sortTable={this.sortTable}
            sortOrder={this.state.sortOrder}
            chosenColumn={this.state.sortByColumn}
          />
          <Pagination
            changePage={this.changePage}
            totalSize={totalSize}
            currentPage={this.state.currentPage}
          />
          <SelectedLine
            row={this.state.selectedRow}
          />
        </div>
      </div>
    );
  }
}

export default App;
