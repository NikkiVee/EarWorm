import React, { Component } from 'react';
import axios from 'axios'

import Navbar from '../Navbar'
import GenresDisplay from './GenresDisplay'

export default class Genres extends Component {
  constructor() {
    super();
    this.state = {
      genres: [],
      genreInfo: [],
      selectedGenre: ''
    };
  }

  componentDidMount() {
    this.getAllInfo()
    this.getAllGenres();
  }

  getAllInfo = () => {
    axios.get('/genres/genreInfo')
    .then(res => {
      this.setState({ genreInfo: res.data.genres });
    });
  };

  getAllGenres = () => {
    axios.get('/genres')
    .then(res => {
      this.setState({ genres: res.data.genres });
    });
  };

  handleChange = e => {
    this.setState({
      genreInput: e.target.value
    })
  }


  render() {
    console.log("Fuck", this.state.oneGenre)
    return (
      <>

        <Navbar/>

        <GenresDisplay genres={this.state.genres}
                       genreInfo={this.state.genreInfo}
                       selectedGenre={this.state.selectedGenre}
                       handleGenreSubmit={this.handleGenreSubmit}
                       handleChange={this.handleChange}
                       />

      </>
    );
  }
}
