export const getDecks = () => {
    return fetch("http://localhost:8000/decks", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ss_token")}`
        }
    })
        .then(response => response.json())
}

export const getDeck= (id) => {
    return fetch(`http://localhost:8000/decks/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("ss_token")}`
        }
    })
        .then(response => response.json())
}

export const createDeck = (deck) => {
    return fetch("http://localhost:8000/decks", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("ss_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(deck)

    })
        .then(getDecks)
}

export const getPlayStyle = () => {
    return fetch("http://localhost:8000/playStyle", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ss_token")}`
        }
     })
        .then(response => response.json())
}

export const updateDeck = (id, deck) => {
    return fetch(`http://localhost:8000/decks/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("ss_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(deck)

    })
        .then(getDecks)
}

export const deleteDeck = (id) => {
    return fetch(`http://localhost:8000/decks/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("ss_token")}`
        }
    })
        .then(getDecks)
}

export const getDeckById = (deckId) => {
	return fetch(`http://localhost:8000/decks/${deckId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("ss_token")}`,
		},
	}).then((res) => res.json())
}

export const getDeckByCurrentPlayer = (playerId) => {
	return fetch(`http://localhost:8000/decks?playerId=${playerId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem('ss_token')}`,
		}
	}).then((res) => res.json())
  }