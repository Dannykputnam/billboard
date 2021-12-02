import React from 'react';

const Dashboard = ({  dashboard  }) => {
  const {id, name, description, image } = dashboard
  return (
    <>
    <h3>{name}</h3>
    <p>
      {description}
    </p>
    <a href='/'>Back</a>
    <br />
    <a href={`/dashboards/${id}/artists`}>Go to Artists</a>
    </>
  )
}

export default Dashboard;