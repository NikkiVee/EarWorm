import React from 'react'
import '../css/songs.css';

export const AllSongs = (props) => {
  if(!props.songs) return null
  let allSongs = props.songs.map((song, i) => {
    if(song.artist.toLowerCase().indexOf(props.songInput.toLowerCase()) === 0){
    return(
        <div>
          <div className='wholeSong'>

            <div className='imgCont'>
              <img src={song.song_url} alt='' className='image'/>
            </div>

            
            <div className='artistTitleCont'>
              <li className='artist'>{song.artist}</li>
              <li className='songTitle'>{song.title}</li>
            </div>

            <div className='countCont'>
              <li className='count'>{song.count} Favorites</li>
            </div>

            <div className='commentCont'>
              <li>"{song.comment_body}"</li>
            </div>

          </div>
        </div>
      )
    } else {
      return null
    }
  })
  return(
    <>

        <form onSubmit={props.handleSubmit}
              className='formCont'>
          <input type='text'
                 value={props.songInput}
                 onChange={props.handleChange}
                 placeholder='Search By Artist'
                 className='inputCont'/>
        </form>

        {allSongs}

    </>
  )
}
