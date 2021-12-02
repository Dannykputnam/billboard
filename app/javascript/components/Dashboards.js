import React from 'react'

const Dashboards = ({ dashboards }) => {
  return (
    <>
    <h1>Billboards</h1>
    <a href="/dashboards/new">
      <button>Add Billboard</button>
    </a>
    {dashboards.map( (dashboard) => (
      <>
      <h3>{dashboard.name}</h3>
      <div>
      <a href={`/dashboards/${dashboard.id}`}>Show</a>
      </div>
      <div>
          <a href={`/dashboards/${dashboard.id}/edit`}>Edit</a>
          </div>
          <div>
          <a href={`/dashboards/${dashboard.id}`} data-method='delete'>
            Delete
            </a>
            </div>
            
            </>
    ))}
    </>
  )
}


// SOOOOOOOO IMPORTANT!!!
export default Dashboards