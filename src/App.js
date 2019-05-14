import React, { Component } from 'react'
import './App.css'
import monkey from './images/monkey.jpeg'
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
    //prevents page reload
    event.preventDefault()
    //make http request
    axios
      .get(
        `https://api.lyrics.ovh/v1/${this.state.artist}/${this.state.songName}`
      )
      .then(response => {
        //sets state to results
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
    // if state is true, display lyrics
    if (this.state.result) {
      return (
        <div>
          <h2>
            {this.state.resultArtist} - {this.state.resultSong}
          </h2>
          <p>{this.state.result}</p>
        </div>
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
          <input
            type="text"
            placeholder="Title of Song"
            value={this.state.songName}
            onChange={this.changeSongName}
          />
          <button type="submit">Submit</button>
        </form>
        <div className="details">{this.details()}</div>
        <div className="image">
          <img src={monkey} alt="monkey" />
        </div>

        <div className="smoke">
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
        </div>
      </div>
    )
  }
}

export default App
