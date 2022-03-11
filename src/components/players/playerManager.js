export const getThisPlayer = (playerId) => {
	return fetch(`http://localhost:8000/players/${playerId}`, {
    headers: {
        Authorization: `Token ${localStorage.getItem("ss_token")}`,
    },
}).then((res) => res.json())
}


export const getPlayers= () => {
	return fetch("http://localhost:8000/players", {
		headers: {
			Authorization: `Token ${localStorage.getItem("ss_token")}`,
		},
	}).then((res) => res.json())
}

export const getPlayerById = (playerId) => {
	return fetch(`http://localhost:8000/players/${playerId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("ss_token")}`,
		},
	}).then((res) => res.json())
}