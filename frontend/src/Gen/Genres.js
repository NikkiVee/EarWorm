import React, { Component } from 'react';
import axios from 'axios'

import Navbar from '../Navbar'
import GenresDisplay from './GenresDisplay'

export default class Genres extends Component {
  constructor() {
    super();
    this.state = {
      genres: [],
    };
  }

  componentDidMount() {
    this.getAllGenres();
  }

  getAllGenres = () => {
    axios.get('/genres')
    .then(res => {
      this.setState({ genres: res.data.genres });
    });
  };
  render() {
    console.log("Fuck", this.state.genres)
    return (
      <>

        <Navbar/>

        <GenresDisplay genres={this.state.genres}/>

      </>
    );
  }
}
