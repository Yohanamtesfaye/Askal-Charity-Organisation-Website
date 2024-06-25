import React from 'react'
import { useParams } from 'react-router-dom'
import Events from '../../Events'
import EventsCard from './EventsCard';
const EventDescription = () => {
  const {id} = useParams();
  return (
    <div className='h-screen'>
      <div >
        {Events.map((event) => (
          event.id.toString() === id ? <EventsCard key={event.id} events={event} showdescription={true}/> : null
        ))}
      </div>
    </div>
  )
}

export default EventDescription