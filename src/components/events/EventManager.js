export const getEvents = () => {
    return fetch("http://localhost:8000/events", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ss_token")}`
        }
    })
        .then(response => response.json())
}

export const getDeck= (id) => {
    return fetch(`http://localhost:8000/events/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("ss_token")}`
        }
    })
        .then(response => response.json())
}

export const createEvent = (event) => {
    return fetch("http://localhost:8000/events", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("ss_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)

    })
        .then(getEvents)
}

export const getEventById = (eventId) => {
	return fetch(`http://localhost:8000/events/${eventId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("ss_token")}`,
		},
	}).then((res) => res.json())
}


export const deleteEvent = (id) => {
    return fetch(`http://localhost:8000/events/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("ss_token")}`
        }
    })
        .then(getEvents)
}

export const updateEvent = (id, event) => {
    return fetch(`http://localhost:8000/events/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("ss_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)

    })
        .then(getEvents)
}
export const joinEvent = (eventId) => {
    return fetch(`http://localhost:8000/events/${eventId}/signup`, {
      method: "POST",
      headers: {
        "Authorization": `Token ${localStorage.getItem("ss_token")}`,
      },
    }).then(res => res.json())
  }
  
  export const leaveEvent = (eventId) => {
    return fetch(`http://localhost:8000/events/${eventId}/leave`, {
      method: "Delete",
      headers: {
        "Authorization": `Token ${localStorage.getItem("ss_token")}`,
      },
    })
  }
  