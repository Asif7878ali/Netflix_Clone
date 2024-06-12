import React from 'react'
import request from '../Request'
import Row from '../Components/Row'

import Imageback from '../Components/Imageback'
const AllRaw = () => {
  return (
    <>
     <Imageback/>
        <Row rowID='1'  title='UpComing' fetchURL={request.requestUpcoming}  />
        <Row rowID='2' title='NowPlaying' fetchURL={request.requestNowPlaying}  />
        <Row rowID='3' title='TopRated' fetchURL={request.requestTopRated}  />
        <Row rowID='4' title='Popular' fetchURL={request.requestPopular}  />
    </> 
  )
}

export default AllRaw