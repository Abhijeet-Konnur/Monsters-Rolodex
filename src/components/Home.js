import React, { Component } from 'react';
import Card from './Card/Card'
import SearchBox from './SearchBox/SearchBox';

class Home extends Component {

  constructor() {
    super()
    this.state = {
      lastArray: [],
      searchFeild: ''
    }
  }

  componentDidMount() {
    var url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
      .then(resp => resp.json())
      .then(result => {
        this.setState({ lastArray: result },
        )
      })
  }

  handleChange = (e) => {
    // console.log('>>', e.target.value )
    this.setState({ searchFeild: e.target.value })
  }


  render() {

    const { lastArray, searchFeild } = this.state;
    const filteredMonsters = lastArray.filter(lastArray => lastArray.name.toLowerCase().includes(searchFeild.toLowerCase()))
    return (
      <>
        <h1 className='monster'> Monsters Rolodex </h1>
        <SearchBox placeholder='search monster' handleChange={this.handleChange} />
        <div className='card-list'>
          {filteredMonsters.map((data) => (

            <Card monsters={data} />
          ))}
        </div>
      </>
    )

  }
}

export default Home