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
