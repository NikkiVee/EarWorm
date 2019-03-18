import React from 'react'
import '../css/pop.css';

export default function PopDisplay(props) {
  if(!props.pop) return null
  let allPop = props.pop.map((p, i) => {
    return(
      <div>
        <div className='wholePop'>

          <div className='imgPopCont'>
            <img src={p.song_url} alt='' className='imagePop'/>
          </div>

          <div className='infoPopCont'>
            <div className='artistTitlePop'>
              <li className='artistPop'>{p.artist}</li>
              <li>{p.title}</li>
            </div>

            <div className='countPopCont'>
              <li className='countPop'>{p.count} Favorites</li>
              <div className='heartPopCont'>
                <input id="toggle-pop-heart" type="checkbox" />
                <label for="heart">❤</label>
              </div>
            </div>

            <div className='commentPopCont'>
              <li>"{p.comment_body}"</li>
            </div>
          </div>

        </div>
      </div>
    )
  })
  return(
    <>
      <h1 className='popHeader'> Check Out Everyones Favorites </h1>
      {allPop}
    </>
  )
}
