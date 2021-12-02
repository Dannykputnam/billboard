import React from 'react';

const DashboardEdit = ({ dashboard }) => {

  // attr that your obj 
  const { id, name, description} = dashboard
  // in case there are error it saves the user input
  // one per attr
  const defaultName = name ? name : ""
  const defaultDescription = description ? description : ""
  return (
    <>
      <h1>Update Billboard</h1>
      <form action={`/dashboards/${id}`} method="post">
        <input type='hidden' name='_method' value="patch"/>
       <input
          type="text"
          placeholder="Billboard Name"
          required
          // these next ones are a must
          defaultValue={defaultName}
          name="dashboard[name]"
        />
        <input
          type="text"
          placeholder="Billboard Description"
          required
          // these next ones are a must
          defaultValue={defaultDescription}
          name="dashboard[description]"
        />
        <button type="submit">Update Billboard</button>
      </form>
      <a href="/dashboards">Back to Billboards</a>
    </>
  )
}

export default DashboardEdit