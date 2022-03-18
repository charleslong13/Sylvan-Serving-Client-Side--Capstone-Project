export const getPlayStyles = () => {
	return fetch("http://localhost:8000/playStyle", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('ss_token')}`
	  }
	}).then(res => res.json())
  }

  export const getPlayStyle = (playStyleId) => {
    return fetch(`http://localhost:8000/playStyle/${playStyleId}`, {
      headers: {
        'Authorization': `Token ${localStorage.getItem('ss_token')}`
      }
    }).then(res => res.json())
  }  
  export const getDecksByPlayStyle = (deckId) => {
	return fetch(`http://localhost:8000/decks?playStyle=${deckId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem('ss_token')}`,
		}	
	}).then((res) => res.json())	
  }  