import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Search from './Search.jsx'
import SearchResults from './SearchResults.jsx'
import VisitedLocations from './SavedShoots.jsx'
import ajax from '../helpers/ajaxAdapter.js'
// import GoogleMap from './Map.jsx'
import dbAjax from '../helpers/dbAjaxAdapter.js'
import util from '../helpers/util.js'

export class App extends React.Component {
  constructor(){
    super()
    this.state = {
      shoots: {},
      list: {}
    }
  }

  componentDidMount() {
    dbAjax.getLocations().then( visited => {
      this.setState({list: visited})
      console.log('component did mount', this.state.list)
    })
  }

  addLocation( newLocation ) {
    // console.log(newLocation)
    dbAjax.createLocation(newLocation).then( data => {
      this.state.list[data[0].visit_id] = data[0];
      this.setState({list: this.state.list})
      console.log(data[0])
      console.log('the new state is', this.state.list)
    })
  }

  deleteLocation( id ) {
    dbAjax.deleteLocation(id).then( data => {
      delete this.state.data.visit_id;
      this.setState({list: this.state.list})
    })
  }

  searchShoots(query){
    ajax.searchShoots(query).then(data=>{
      // console.log('searchShoots, App.jsx', data)
      this.setState({shoots: data})
      // console.log(this.state.shoots)
    })
  }

  render() {
    return (
      <container>
        <header className="header">
          <Nav />
        </header><br/>
        <div className="container">
          <div>
            <article className="nav">
              <Search searchShoots={this.searchShoots.bind(this)}/>
            </article>
            <hr className="featurette-divider"/>
            <article className="col-md-6 results">
              <SearchResults shoot={this.state.shoots} addLocation={this.addLocation.bind(this)}/>
            </article>
            <article className="col-md-6 visited">
              <VisitedLocations visited={this.state.list} deleteLocation={this.deleteLocation.bind(this)}/>
            </article>
          </div>
        </div>
        <hr className="featurette-divider"/>
        <footer className="footer">
          <br/>
          <Footer />
        </footer>
        </container>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#container'))

