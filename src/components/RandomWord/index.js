import React from 'react'

/**
 * MIT License
 * Copyright (c) 2016 Sabrican Ozan
 * https://github.com/ozansabrican/react-random-word
 *
 * Ported for compatibility with React 16.6x
 */
export class RandomWord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      round: 0,
      letters: this.props.word
        .split('')
        .map((char, i) => this.randomSequenceFor(this.props.word[i])),
    }
  }

  componentDidMount() {
    this.animation = window.setTimeout(this.animate, this.props.speed)
  }

  componentWillUnmount() {
    window.clearTimeout(this.animation)
  }

  randomSequenceFor(letter) {
    const min = Math.floor(this.props.rounds / 3)
    const max = this.props.rounds
    const rounds = Math.floor(Math.random() * this.props.rounds)
    const length = Math.min(Math.max(rounds, min), max)

    return Array.from({ length })
      .map(() => {
        let randomLetter = this.randomLetter()
        while (randomLetter === letter) {
          randomLetter = this.randomLetter()
        }
        return randomLetter
      })
      .concat(letter)
  }

  randomLetter() {
    const position = Math.floor(Math.random() * this.props.letters.length)
    return this.props.letters[position]
  }

  animate = () => {
    const nextRound = this.state.round + 1
    if (nextRound >= this.props.rounds) {
      return
    }
    this.setState({
      round: nextRound,
    })
    window.setTimeout(this.animate, this.props.speed)
  }

  render() {
    return (
      <span>
        {this.state.letters.map(letters => {
          const index = Math.min(this.state.round, letters.length - 1)
          return letters[index]
        })}
      </span>
    )
  }
}

RandomWord.defaultProps = {
  speed: 150,
  rounds: 20,
  letters: 'abcdef0123456789',
}
