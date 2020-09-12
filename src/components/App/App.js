import React from 'react';
import './App.css';
import ChooseData from '../ChooseData/ChooseData';
import SearchBar from '../SearchBar/SearchBar';
import AddLine from '../AddLine/AddLine';
import Table from '../Table/Table';
import Pagination from '../Pagination/Pagination';
import SelectedLine from '../SelectedLine/SelectedLine';

export const URL_SMALL = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
export const URL_BIG = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: null,
      selectedData: null,
      url: URL_SMALL
    }
  }

  chooseDataSize = (url) => {
    this.setState({url});
  }

  loadData = async () => {
    try{
      const response = await fetch(this.state.url);
      if (response.ok) {
        let jsonResponse = await response.json();
        this.setState({selectedData: jsonResponse});
      }  
    }
    catch(error){
      console.log(error);
    }
  }

  changeSelectedRow = (row) => {
    this.setState({selectedRow: row});
  }

  render() {
    return(
      <div>
        <div>
          <ChooseData url={this.state.url} changeUrl={this.chooseDataSize} loadData={this.loadData} />
        </div>
        <div>
          <SearchBar />
          <AddLine />
        </div>
        <div>
          <Table data={this.state.selectedData} selectRow={this.changeSelectedRow} />
          <Pagination />
          <SelectedLine row={this.state.selectedRow} />
        </div>
      </div>
    );
  }
}

export default App;
