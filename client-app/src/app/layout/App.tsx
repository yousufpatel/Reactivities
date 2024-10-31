import { useEffect, useState } from 'react'
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../Models/activity';
import NavBar from './NavBar';
import ActivityDashbord from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/Activities')
      .then(response => {
        setActivities(response.data)
      })
  }, [])

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashbord activities={activities} />
      </Container>
    </>
  )
}

export default App
