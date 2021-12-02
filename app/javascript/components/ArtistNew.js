import React from 'react';

const ArtistNew = ({ dashboard, artist }) => {

  const { id,  } = dashboard 
  const { name,  description } = artist
  const defaultName = name ? name : ""
  const defaultDescription = description ? description : ""
  return (
    <>
      <h1>New Artist from the Billboard </h1>
      <form action={`/dashboards/${id}/artists`} method="post">
        <label>Name</label>
        <input 
          type="text"
          required 
          defaultValue={defaultName}
          name="artist[name]"
        />
        <label>Description</label>
        <input 
          type="text"
          required 
          defaultValue={defaultDescription}
          name="artist[description]"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ArtistNew;