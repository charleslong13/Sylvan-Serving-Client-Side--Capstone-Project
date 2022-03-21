import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { deleteEvent, getEvents, joinEvent, leaveEvent } from "./EventManager"


export const EventList = () => {
    const [events, setEvents] = useState([])
    
    const history = useHistory()
    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

    

    function refreshPage() {
        window.location.reload(false);
      }

    return (
        <>
            <i><b><center><h1>Events</h1></center></b></i>
            <center><button type="button" className="pure-button" onClick={() => {
                history.push(`/events/newEvent`)
            }
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
                                <div className="event">Organizer: {event.organizer?.user.username}</div>
                                <div className="event">Attendees: </div>
                                <div>{
                                    event.attendees?.map((player) => {
                                        return(
                                            <div key={player.user.id}>
                                                {player.user?.username}
                                                </div>
                                        )
                                    }
                                    )
                                }
                                </div>
                                <div className="pure-button-group" role="group">
                                {event.organizer?.id === parseInt(localStorage.getItem("playerId")) ?
                                    <button  type="button" className="pure-button"onClick={() => history.push(`/events/edit/${event.id}`)}>Edit</button>
                                    : ""}
                                {event.organizer?.id === parseInt(localStorage.getItem("playerId")) ?
                                    <button type="button" className="pure-button" onClick={() => { deleteEvent(event.id).then(setEvents) }}>Delete</button>
                                    : ""}
                                {
                                    event.joined
                                        ?
                                        // Leave button
                                        <button type="button" className="pure-button" onClick={() => {
                                            leaveEvent(event.id).then((window.confirm("Are you sure you want to cancel your RSVP?")? refreshPage() : "")
                                            // .then(refreshPage())
                                            )}}>
                                            Leave Event
                                        </button>
                                        :
                                        // join button
                                        <button type="button" className="pure-button" onClick={() => {
                                            joinEvent(event.id).then((window.confirm("Are you sure you want to RSVP?")? refreshPage() : "")
                                            // .then(refreshPage())
                                            )}}>
                                            Join Event
                                        </button>
                                }
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p></div>
                            </ol>
                        </section>
                    })
                }
            </article>
        </>
    )
}