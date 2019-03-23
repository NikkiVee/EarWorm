import React, { Component } from 'react';
import axios from 'axios'

import Navbar from '../Navbar'
import PopDisplay from './PopDisplay'

export default class ByPop extends Component {
  constructor() {
    super();
    this.state = {
      pop: [],
    };
  }

  componentDidMount() {
    this.getAllFavorites();
  }

  getAllFavorites = () => {
    axios.get('/favorites')
    .then(res => {
      this.setState({ pop: res.data.favorites });
    });
  };
  render() {
    return (
      <>

        <Navbar/>

        <PopDisplay pop={this.state.pop}/>

      </>
    );
  }
}
