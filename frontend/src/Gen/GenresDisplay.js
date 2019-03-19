import React from 'react'
// import '../css/genres.css';

export default function GenresDisplay(props) {
  if(!props.genres) return null
  let allGenres = props.genres.map((genre, i) => {
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
  return(
    <>
      <h1 className='popHeader'> Check Out Your Favorite Geners </h1>
      {allGenres}
    </>
  )
}
