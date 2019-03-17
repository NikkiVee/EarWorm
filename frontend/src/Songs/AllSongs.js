import React from 'react'

export const AllSongs = (props) => {
  if(!props.songs) return null
  let allSongs = props.songs.map((song, i) => {
    if(song.artist.toLowerCase().indexOf(props.songInput.toLowerCase()) === 0){
    return(
        <div className='wholeSong'>

          <div className='imgCont'>
          <img src={song.song_url} alt='' className='image'/>
          </div>

          <div className='artistCont'>
          <li className='artist'>{song.artist}</li>
          </div>

          <div className='titleCont'>
          <li className='title'>{song.title}</li>
          </div>

        </div>
      )
    } else {
      return null
    }
  })
  return(
    <>
      <form onSubmit={props.handleSubmit}>
        <input type='text'
               value={props.songInput}
               onChange={props.handleChange}
               placeholder='Search By Artist'/>
      </form>

      {allSongs}
    </>
  )
}
