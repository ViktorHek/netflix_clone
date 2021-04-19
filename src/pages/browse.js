import React from 'react'
import {useContent} from '../hooks'

const Browse = () => {

  const {series } = useContent('series')
  console.log(series)

  return (
    <>
      <p>Browse</p>
    </>
  )
}

export default Browse
