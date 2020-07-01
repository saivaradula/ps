import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor () {
    super();
    this.state = {
      ps: [],
      searchText: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json() )
    .then(users => this.setState({ps: users}))
  }
 
  handleSearch = e => {
    this.setState({ searchText: e.target.value })
  }

  render () {
    const {ps, searchText} = this.state;
    const filteredPS = ps.filter(ps => ps.name.toLowerCase().includes(searchText.toLowerCase()) );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" />          
        </header>
        <div>&nbsp;</div>
        <div>
            <SearchBox placeholder="Search Stars" handleChange={this.handleSearch} />
            <CardList postars = {filteredPS} />
          </div>
      </div>
    );
  }   
}
 
export default App;
