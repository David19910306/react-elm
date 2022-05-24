import React from 'react';
import {BallSpinFadeLoader} from "@alex_xu/react-loading";
import './Loading.scss'

export default function Loading(){
  return (
    <div className='loading'>
      <BallSpinFadeLoader />
    </div>
  )
}
