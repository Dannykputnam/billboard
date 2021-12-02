import React from 'react'

const DashboardNew = ({ dashboard }) => {

  const { name, description } = dashboard

  const defaultName = name ? name : ""
  const defaultDescription = description ? description : ""
  return (
    <>
    <h1>Create a new Billboard</h1>
    <form action="/dashboards" method="post">
      <input
      type="text"
      placeholder="Name of the Billboard"
      required
      defaultValue={defaultName}
      name="dashboard[name]"
      />
      <input
      type="text"
      placeholder="Description of the Billboard"
      required
      defaultValue={defaultDescription}
      name="dashboard[description]"
      />
      <button type='submit'>Add Billboard</button>
    </form>
    <a href="/dashboards">Back to Billboard</a>
    </>
  )
}

export default DashboardNew