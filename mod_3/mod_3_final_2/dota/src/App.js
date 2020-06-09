import React, { Component } from 'react';
import { HeroContainer } from './HeroContainer/HeroContainer.js';
import { WelcomePage } from './WelcomePage/WelcomePage.js';
import { HeroInfoContainer } from './HeroInfoContainer/HeroInfoContainer.js';
import { FavoriteContainer } from './FavoritesContainer/FavoriteContainer.js'
import { NavBar } from './NavBar/NavBar.js';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      heroInfo: {},
      favorites: [],
      favoriteObjects: []
    }
  }

  componentDidMount() {
    return fetch('http://ddragon.leagueoflegends.com/cdn/10.9.1/data/en_US/champion.json')
    .then(res => res.json())
    .then(heroInfo => {
      this.setState({heroInfo})
    })
    .catch(err => console.log(err))
  }

  addToFavorites = (id) => {
    this.setState({favorites:[...this.state.favorites,id]})
    
}

removeFromFavorites = (id) => {
  let favorites = this.state.favorites.filter(favoriteId => favoriteId !== id )
  this.setState({favorites})
}

findFavorites = () => {
  return this.state.heroInfo.data[Object.keys(this.state.heroInfo.data).filter(hero => {
    return this.state.favorites.find(id => {
      if(this.state.heroInfo.data[hero].key === id && !this.state.favoriteObjects.includes(this.state.heroInfo.data[hero])) {
        console.log(this.state.heroInfo.data[hero])
        return this.state.favoriteObjects.push(this.state.heroInfo.data[hero])
      }
    })
})]
}

  render() {
    let champions;
    let championInfo;
    let favoriteRoute;
    const ObjectCheck = Object.keys(this.state.heroInfo)

    if(ObjectCheck.length === 0) {
      champions = <p>...LOADING</p>
      championInfo = <p>...LOADING</p>
      favoriteRoute= <p>...LOADING</p>
    } else {
      champions=<Route path='/champions' 
      render={() => <HeroContainer 
      allHeroInfo={this.state.heroInfo.data} 
      addToFavorites={this.addToFavorites}
      removeFromFavorites={this.removeFromFavorites}
      favorites={this.state.favorites}
      fetchImage={this.fetchImage}/>}
      />
      championInfo=<Route path='/champions/champion/:id' 
      render={({ match }) => <HeroInfoContainer
      foundHero={this.state.heroInfo.data[Object.keys(this.state.heroInfo.data).find(champion => {
          if(this.state.heroInfo.data[champion].key === match.params.id) {
            return this.state.heroInfo.data[champion]
          }
        }
      )]}
      addToFavorites={this.addToFavorites}
      removeFromFavorites={this.removeFromFavorites}
      favorites={this.state.favorites}
      match={ match }/
      >}
      />
      favoriteRoute=<Route path = '/favorites' render={ ({ match }) => <FavoriteContainer
      addToFavorites = {this.addToFavorites} 
      removeFromFavorites = {this.removeFromFavorites}
      favorites = {this.state.favorites}
      match={ match }
      allFavorites= {this.findFavorites()}
      favoriteObjects={this.state.favoriteObjects}
      />} 
      />
    }
    return (
      <section>
        <NavBar favorites={this.state.favorites}/>
        <Switch>
          {championInfo}
          {champions}
          <Route path='/' exact render={ () => <WelcomePage/>} />
          {favoriteRoute}
        </Switch>
      </section>
    )
  }
}

export default App;
