import React from 'react'
import '../css/profile.css';

export const ProfileInfo = (props) => {

  let userInfo = props.singleUser.map((user, i) => {
    return(
      <div>
        <h1 className='greeting'>Good Day and Good Vibes {user.username}</h1>
      </div>
    )
  })

  let songInfo = props.singleSongs.map((song, i) => {
    return(
      <div>

      <div className='wholeSong'>

        <div className='imgCont'>
          <img src={song.song_url} alt='' className='image'/>
        </div>

        <div className='profileCont'>
          <div className='artistTitleCont'>
            <li className='artist'>{song.artist}</li>
            <li>{song.title}</li>
          </div>

          <div className='countCont'>
            <li className='count'>{song.count} Favorites</li>
            <div className='heartProf'>
              <input id="toggle-heart" type="checkbox" />
              <label for="toggle-heart">❤</label>
            </div>
          </div>
        </div>

      </div>

      </div>
    )
  })



  return(
    <>
      <div>
        {userInfo}

        <button className='postedTab'>YOUR POSTED SONGS</button> <button className='favoritesTab'>YOUR FAVES</button>
          <div className="whole">
            <div className='addSong'>
              <h3 className="postAnother">Post Another Song</h3>
                <input placeholder='Enter Song Name' className='songName'/>
              <br/>
                <input placeholder='Enter Song URL'className='songURL'/>
              <br/>
              <button className='addButton'>Add Song</button>
            </div>

           {songInfo}
           </div>
      </div>
    </>
  )
}
