import React from 'react'
import { BrowseContainer } from '../containers/browse'
import { useContent } from '../hooks'
import selectionMap from '../utils/selection-map'

const Browse = () => {
  const { series } = useContent('series')
  // console.log(series)
  const { films } = useContent('films')
  // console.log(films)
  const slides = selectionMap({ series, films })
  // console.log(slides)

  return (
    <>
      <BrowseContainer slides={slides} />
    </>
  )
}

export default Browse
