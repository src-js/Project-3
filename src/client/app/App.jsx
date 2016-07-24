import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Search from './Search.jsx'
import SearchResults from './SearchResults.jsx'
import ajax from '../helpers/ajaxAdapter.js'
<<<<<<< HEAD
// import GoogleMap from './Map.jsx'
=======
import dbAjax from '../helpers/dbAjaxAdapter.js'
>>>>>>> 6a13537961c3b032a6e4ee3d5b9443757c956d1a

export class App extends React.Component {
  constructor(){
    super()
    this.state = {
      shoots: {},
      list: {}
    }
  }

  componentDidMount() {
    dbAjax.getLocations().then( data => {
      this.setState({list: data})
      console.log(this.state.list)
    })
  }

  addLocation( newLocation ) {
    console.log(newLocation)
    dbAjax.createLocation(newLocation).then( data => {
      this.state.list[data.visit_id] = data
      this.setState({list: this.state.list})
      console.log(this.state.list)
    })
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
          <SearchResults shoot={this.state.shoots} addLocation={this.addLocation.bind(this)}/>
        </section>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#container'))

