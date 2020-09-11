import React from 'react';
import './App.css';
import ChooseData from '../ChooseData/ChooseData';
import SearchBar from '../SearchBar/SearchBar';
import AddLine from '../AddLine/AddLine';
import Table from '../Table/Table';
import Pagination from '../Pagination/Pagination';
import SelectedLine from '../SelectedLine/SelectedLine';
import data from '../../util/Small_data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: null
    }
  }

  changeSelectedRow = (row) => {
    this.setState({selectedRow: row});
  }

  render() {
    return(
      <div>
        <div>
          <ChooseData />
        </div>
        <div>
          <SearchBar />
          <AddLine />
        </div>
        <div>
          <Table data={data} selectRow={this.changeSelectedRow} />
          <Pagination />
          <SelectedLine row={this.state.selectedRow} />
        </div>
      </div>
    );
  }
}

export default App;
