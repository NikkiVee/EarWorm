import React from 'react'
import '../css/genres.css';

export default function GenresDisplay(props) {
  if(!props.genreInfo) return null
  let allGenres = props.genreInfo.map((genre, i) => {
    return(
      <div>
        <div className='wholePop'>

          <div className='imgPopCont'>
            <img src={genre.song_url} alt='' className='imagePop'/>
          </div>

          <div className='infoPopCont'>
            <div className='artistTitlePop'>
              <li className='artistPop'>{genre.artist}</li>
              <li>{genre.title}</li>
            </div>

            <div className='countPopCont'>
              <li className='countPop'>{genre.count} Favorites</li>
              <div className='heartPopCont'>
                <input id="toggle-pop-heart" type="checkbox" />
                <label for="heart">❤</label>
              </div>
            </div>

            <div className='commentPopCont'>
              <li>"{genre.comment_body}"</li>
            </div>
          </div>

        </div>
      </div>
    )
  })

  let genreList = props.genres.map(genre => {
    return(
      <option name="selectedGenre" value={genre.id}>{genre.genre_name}</option>
    )
  })


  return(
    <>
      <h1 className='genreHeader'> Check Out Your Favorite Genres </h1>

      <form onSubmit={props.handleGenreSubmit}>
        <select name="selectedGenre"
                className="selectBar"
                onChange={props.handleChange}>
          <option key='0'
                  value=''
                  className="optionBar"></option>
          {genreList}
        </select>
        <br/>
        <button type='submit' className="button">CHOOSE GENRE</button>
      </form>

      {allGenres}
    </>
  )
}
