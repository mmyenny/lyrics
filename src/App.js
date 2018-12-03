import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      artist: '',
      songName: ''
    }
  }

  changeArtistName = event => {
    this.setState({
      artist: event.target.value
    })
  }

  changeSongName = event => {
    this.setState({
      songName: event.target.value
    })
  }

  getSongLyrics = event => {
    event.preventDefault()
    console.log(this.state.songName)
    console.log(this.state.artist)
  }

  render() {
    return (
      <div className="App">
        <h1>Lyrics</h1>
        <form onSubmit={this.getSongLyrics}>
          <input
            type="text"
            placeholder="Artist"
            onChange={this.changeArtistName}
          />
        </form>
        <form onSubmit={this.getSongLyrics}>
          <input
            type="text"
            placeholder="Title of Song"
            onChange={this.changeSongName}
          />
        </form>
      </div>
    )
  }
}

export default App
