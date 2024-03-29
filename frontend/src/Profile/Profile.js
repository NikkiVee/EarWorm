import React, { Component } from 'react';
import axios from 'axios'

import Navbar from '../Navbar'
import { ProfileInfo } from './ProfileInfo'

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      singleUser: [],
      singleSongs: []
    };
  }

  componentDidMount() {
    this.getSingleUser();
    this.getSongsFromUser();
  }

  getSingleUser = () => {
    axios.get('/users/1')
    .then(res => {
      this.setState({ singleUser: res.data.users });
    });
  };

  getSongsFromUser = () => {
    axios.get('/songs/users/1')
    .then(res => {
      this.setState({ singleSongs: res.data.data });
    });
  };


  render() {
    return (
      <>

        <Navbar/>

        <ProfileInfo singleUser={this.state.singleUser}
        singleSongs={this.state.singleSongs}/>

      </>
    );
  }
}
