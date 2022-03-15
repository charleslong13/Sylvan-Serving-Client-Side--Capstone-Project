import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { createEvent, getEventById, updateEvent } from "./EventManager"



export const EventForm = ({ editEvent }) => {
    // const [player, setCurrentPlayer] = useState()
    const history = useHistory()
    const { eventId } = useParams()
    const [currentEvent, setCurrentEvent] = useState({
        name: "",
        date: "",
        time: "",
        venue: "",
        address: "",
        description: ""
    })


    useEffect(() => {
        if (eventId) {
            getEventById(eventId).then((res) => {
                const eventEdit = {
                    name: res.name,
                    date: res.date,
                    time: res.time,
                    venue: res.venue,
                    address: res.address,
                    description: res.description
                }
                setCurrentEvent(eventEdit)
            })
        }
    }, [eventId])



    const changeEventState = (event) => {
        const copy = { ...currentEvent }
        copy[event.target.name] = event.target.value

        setCurrentEvent(copy)
    }

    return (
        <form className="eventForm">
            <h2 className="eventFormTitle">Register New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name" >Event Name: </label>
                    <input
                        value={currentEvent.name}
                        onChange={changeEventState}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name your Event!"
                        name="name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date" >Date: </label>
                    <input
                        value={currentEvent.date}
                        onChange={changeEventState}
                        required autoFocus
                        type="date"
                        className="form-control"
                        placeholder="Input the date of the event!"
                        name="date"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time" >Time: </label>
                    <input
                        value={currentEvent.time}
                        onChange={changeEventState}
                        required autoFocus
                        type="time"
                        className="form-control"
                        placeholder="Input the time of the event!"
                        name="time"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="venue" >Venue: </label>
                    <input
                        value={currentEvent.venue}
                        onChange={changeEventState}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Input the name of the venue!"
                        name="venue"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address" >Address: </label>
                    <input
                        value={currentEvent.address}
                        onChange={changeEventState}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Input the address of the venue/location"
                        name="address"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description" >Description: </label>
                    <textarea
                        value={currentEvent.description}
                        onChange={changeEventState}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Tell us about your event!"
                        name="description"
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const event = {
                        name: currentEvent.name,
                        date: currentEvent.date,
                        time: currentEvent.time,
                        venue: currentEvent.venue,
                        address: currentEvent.address,
                        description: currentEvent.description
                    }
                    editEvent
                        ? updateEvent(eventId, event)
                            .then(() => history.push("/events"))
                        : createEvent(event)
                            .then(() => history.push("/events"))
                }}
                className="btn btn-primary">{editEvent ? "Update Event" : "Create Event"} </button>
        </form>
    )
}