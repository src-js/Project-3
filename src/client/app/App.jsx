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
    this.state = {shoots: {}}
  }

  searchShoots(query){
    ajax.searchShoots(query).then(data=>{
      console.log('searchShoots, App.jsx', data)
      this.setState({shoots: data})
      console.log(this.state.shoots)
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
          <SearchResults shoot={this.state.shoots}/>
        </section>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#container'))

