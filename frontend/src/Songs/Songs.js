import React, { Component } from 'react';
import axios from 'axios'

import Navbar from '../Navbar'
import { AllSongs } from './AllSongs'

export default class Songs extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      songInput: ''
    };
  }

  componentDidMount() {
    this.getAllSongs();
  }

  getAllSongs = () => {
    axios.get('/songs')
    .then(res => {
      this.setState({ songs: res.data.songs });
    });
  };

  handleChange = e => {
    this.setState({
      songInput: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let song = this.state.songs.find(song => {
      return song.artist.toLowerCase().indexOf(this.state.songInput.toLowerCase()) === 0
    })
    // this.state.history.push(`/songs/{song.id}`)
  }

  // I think the search should actually be by title rather than by artist here. Also, the instructions ask for a "submit" button. This might be why your "handleSubmit" function was never firing - you don't have a button to trigger the submit functionality for the form

  // Also, your songs are going to look the same between your Songs, Pop, and Gen folders -- is there a way we can modularize this to reuse the code you're using in the AllSongs component?

  render() {
    return (
      <>

        <Navbar/>

        <AllSongs songs={this.state.songs}
                  songInput={this.state.songInput}
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}/>

      </>
    );
  }
}
