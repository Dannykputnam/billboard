import React from 'react';

const Song = ({ artist, song }) => {

  const { } = artist
  const { id , name, album } = song
  return (
    <>
      <h1>Song: {name}</h1>
      <h1>Album</h1>
      <p>
        {album}
      </p>
      
      <a href='/'>Back</a>
    </>
  )
}

export default Song;