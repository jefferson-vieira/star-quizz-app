import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './Game.scss'

import Header from './GameHeader'

import { getPeople } from './gameAction'

class Game extends Component {
  componentWillMount() {
    this.props.getPeople()
  }

  componentDidCatch() {
    alert('aff')
  }

  render() {
    console.log(this.props.people)
    return (
      <section id="game">
        <Header />
      </section>
    )
  }
}


const mapStateToProps = state => ({
  people: state.game.people
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getPeople
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Game)
