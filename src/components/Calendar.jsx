import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import { render } from '@fullcalendar/core/preact';
import { Calendar,formatDate } from '@fullcalendar/core';
import { useState } from 'react';
import timeGridPlugin from '@fullcalendar/timegrid'
//    const handleDateClick = (arg) => { // bind with an arrow function
//     alert('Clicked on: ' + arg.dateStr);
//       // change the day's background color just for fun
//       arg.dayEl.style.backgroundColor = 'red';
// }
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

const  handleEventClick = (clickInfo) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }
  //  const handleEvents = (events) => {
  //   this.setState({
  //     currentEvents: events
  //   })
  // }
  export default class Calendar1 extends React.Component {
    // let calendar = new Calendar(calendarEl, {
    //     plugins: [ interactionPlugin ],
    //     dateClick: function(info) {
    //       alert('Clicked on: ' + info.dateStr);
    //       alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
    //       alert('Current view: ' + info.view.type);
    //       // change the day's background color just for fun
    //       info.dayEl.style.backgroundColor = 'red';
    //     }
    //   });
    render(){
        return (
            <div>
                <FullCalendar
                    plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                    initialView='dayGridMonth'
                    // dateClick={handleDatelick}
                    editable={true}
                    selectable={true}
                    select={handleDateSelect}
                    eventClick={handleEventClick}
                    // eventsSet={handleEvents}
                />
            </div>
        )
    }
       
        

}

