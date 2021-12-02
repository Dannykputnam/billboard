import React from 'react';

const ArtistEdit = ({ dashboard , artist }) => {

  const { id  } = dashboard
  const { name, description } = artist
  const defaultName = name ? name : ""
  const defaultDescription = description ? description : ""
  return (
    <>
      <h1>New Artist from the Billboard </h1>
      <form action={`/dashboards/${id}/artists/${artist.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <label>Name</label>
        <input 
          type="text"
          required 
          defaultValue={defaultName}
          name="artist[name]"
        />
        <label>Description</label>
        <textarea
          required 
          defaultValue={defaultDescription}
          name="artist[description]"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ArtistEdit;