import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Search from './Search.jsx'

import SearchResults from './SearchResults.jsx'
import ajax from '../helpers/ajaxAdapter.js'

export class App extends React.Component {
  constructor(){
    super()
    this.state = {shoots: {}, borough: {}}
  }

  searchShoots(query){
    ajax.searchShoots(query).then(data=>{
      // console.log('searcShoots, App.jsx', data)
      this.setState({shoots: data})
      console.log(this.state.shoots)
    })
  }

  addToDb(query){
    ajax.addToDb(query).then(data=>{
      this.setState({borough: data})
      console.log(this.state.borough)
    })
  }

  render() {
    return (
      <div>
        <header>
          <Nav />
        </header>
        <section>
          <Search searchShoots={this.searchShoots.bind(this)}/>
        </section>
        <section>
          <SearchResults shoot={this.state.shoots}
            addToDb={this.addToDb.bind(this)}/>
        </section>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#container'))

