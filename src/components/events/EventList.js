import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getEvents } from "./EventManager"


export const EventList = () => {
    const [events, setEvents] = useState([])
    const history = useHistory()
    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

    return (
        <>
            <i><b><center><h2>Events</h2></center></b></i>
                <center><button type="button" className="btt" onClick={() => {
                    history.push(`/events/newEvent`)}
                }>Create New Event</button></center>
            <article className="events">
                {
                    events.map(event => {
                        return <section key={`event--${event.id}`} className="event">
                            <ol>
                            <div className="event">{event.name}</div>
                            <div className="event">Address: {event.address}</div>
                            <div className="event">Date: {event.date}</div>
                            <div className="event">Time: {event.time}</div>
                            <div className="event">Description: {event.description}</div>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            </ol>
                        </section>
                    })
                }
            </article>
        </>
    )
}