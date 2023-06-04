import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import { render } from '@fullcalendar/core/preact';
import { Calendar,formatDate } from '@fullcalendar/core';
import { useState ,useEffect } from 'react';
import timeGridPlugin from '@fullcalendar/timegrid'
function Calendar1({ workoutData, setWorkoutData }) {
  const [events, setEvents] = useState([])
  useEffect(() => {
    if (workoutData) {
      if (localStorage.getItem('loggeduser')) {
        let amen = JSON.parse(localStorage.getItem('loggeduser'))
        let name = amen.myworkout
        const found = workoutData?.find(obj => obj.name = name)
        let x
        if (found.name == 'Advanced Bodyweight Workout' || found.name == "Advanced Cable Workout" || found.name == "Advanced Dumbbell Workout" || found.name == "Advanced Band Workout" || found.name == "Advanced Barbell Workout") {
          x = 5
        } else if (found.name == 'Intermediate Dumbbell Workout' || found.name == "Intermediate Bodyweight Workout") {
          x = 6
        } else {
          x = 3
        }
        let output = [];
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;

        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0);

        const dates = [];
        let iterationDate = startDate;
        let i = 0
        while (iterationDate<=endDate) {
          // let event = events[i]; 
          const year = iterationDate.getFullYear();
          const month = ('0' + (iterationDate.getMonth() + 1)).slice(-2);
          const day = ('0' + iterationDate.getDate()).slice(-2);
          const formattedDate = `${year}-${month}-${day}`;
          if (i % x == 0) {
            let dynamicEvent = {
              title: 'rest',
              start: formattedDate,
              color: 'red'
            };
            output.push(dynamicEvent);
            i++
            iterationDate.setDate(iterationDate.getDate() + 1);
          } else {
            let dynamicEvent = {
              title: 'yes',
              start: formattedDate,
              color: 'green'
            };
            output.push(dynamicEvent);
            i++
            iterationDate.setDate(iterationDate.getDate() + 1);
          }
        }
        setEvents(output)
      }
    }
  }, [workoutData])





  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        //       // end: selectInfo.endStr,
        //       // allDay: selectInfo.allDay
      })
    }
  }

  const handleEventClick = (clickInfo) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        // dateClick={handleDatelick}
        editable={true}
        selectable={true}
        select={handleDateSelect}
        eventClick={handleEventClick}
        // eventsSet={handleEvents}
        events={events} // Pass the events array to the events prop
      />
    </div>
  )



}

export default Calendar1