import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      artist: '',
      songName: '',

      resultArist: '',
      resultSong: '',

      result: ''
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

    axios
      .get(
        `https://api.lyrics.ovh/v1/${this.state.artist}/${this.state.songName}`
      )
      .then(response => {
        console.log(response.data)
        this.setState({
          result: response.data.lyrics,
          resultArtist: this.state.artist,
          resultSong: this.state.songName,
          artist: '',
          songName: ''
        })
      })
  }

  details = () => {
    if (this.state.result) {
      return (
        <>
          <h2>{this.state.resultArtist}</h2>
          <h2>{this.state.resultSong}</h2>
          <p>{this.state.result}</p>
        </>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Search for Lyrics</h1>
        <form onSubmit={this.getSongLyrics}>
          <input
            type="text"
            placeholder="Artist"
            value={this.state.artist}
            onChange={this.changeArtistName}
          />
        </form>
        <form onSubmit={this.getSongLyrics}>
          <input
            type="text"
            placeholder="Title of Song"
            value={this.state.songName}
            onChange={this.changeSongName}
          />
        </form>
        {this.details()}
      </div>
    )
  }
}

export default App
