import React, { Component } from 'react';
import { HeroContainer } from '/Users/trondmakonese/mod_3/mod_3_final_2/dota/src/HeroContainer/HeroContainer.js';
import { WelcomePage } from '/Users/trondmakonese/mod_3/mod_3_final_2/dota/src/WelcomePage/WelcomePage.js';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      heroInfo: {}
    }
  }

  fetchImage(image) {
    return fetch()
    .then(`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${image}`)
    .then(res => res.json())
    .then(image => console.log(image))
  }

  componentDidMount() {
    return fetch('http://ddragon.leagueoflegends.com/cdn/10.9.1/data/en_US/champion.json')
    .then(res => res.json())
    .then(heroInfo => {
      this.setState({heroInfo})
    })
    .catch(err => console.log(err))
  }

  render() {
    let heros;

    const ObjectCheck = Object.keys(this.state.heroInfo)

    if(ObjectCheck.length === 0) {
      heros = <p>LOADING</p>
    } else {
      heros = <Route path='/heros' render={() => <HeroContainer allHeroInfo={this.state.heroInfo.data} fetchImage={this.fetchImage}/>}/>
    }
    return (
      <section>
        <Switch>
          {heros}
          <Route path='/' exact render={ () => <WelcomePage/>} />
        </Switch>
      </section>
    )
  }
}

export default App;
