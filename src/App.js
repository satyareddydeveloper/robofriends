import React, { Component } from 'react';
import './App.css';
import CardTwo from './components/cardtwo';
import 'tachyons'
import CardList from './components/CardList';
import { robots } from './components/robots';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';

class App extends Component {
  constructor(){
    super()
    this.state={
      robots:[],
      searchfield:''
    }
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => {this.setState({ robots: users})});
  }
 render(){
   
   const filteredRobots = this.state.robots.filter(robots =>{
     return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
   })
  return (
    <div className='tc '>
    <h1>Robo Friends</h1>
    
    <SearchBox 
    searchChange = {this.onSearchChange}
    ></SearchBox>
      <Scroll>
      <CardList robots = {filteredRobots}></CardList>
      </Scroll>
    </div>
   );
 }

}
export default App
