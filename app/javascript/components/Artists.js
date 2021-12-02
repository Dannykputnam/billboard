import React from 'react';



const Artists = ({ dashboard, artists,  }) => {

  const { id, name } = dashboard
  // const id = sub.id
  // const name = sub.name
  const url = `/dashboards/${id}/artists/`
  return(
    <>
      <h1>All Artists from {name}</h1>
      <a href={`/dashboards/${id}/artists/new`}>Add new artist</a>
      {/* topics = [{ title: 'adfadf', body: 'dasfasdf', id: 1}, { title: 'adfadf', body: 'dasfasdf', id: 2}] */}
      { artists.map( (artist) => (
        <>
          <h3>{artist.name}</h3>
          <a href={`${url}${artist.id}`}>Show</a>
          <a href={`${url}${artist.id}/edit`}>Edit</a>
          <a href={`${url}${artist.id}`} data-method="delete">
            Delete
          </a>
        </>
      ))}
    </>
  )
}

export default Artists;