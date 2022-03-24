import React, { useEffect, useState } from "react"
import { deleteDeck, getDeckByCurrentPlayer, getMyDecks } from "./DeckManager"
import { Link } from "react-router-dom"
import "./decks.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"



export const MyDecks = () => {
//declaring useState for decks and currentPlayer 
	const [currentPlayer, setCurrentPlayer] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [foundDeck, setFoundDeck] = useState([])
    const history = useHistory()


	useEffect(() => {
		// Query string parameter
        
		getDeckByCurrentPlayer(parseInt(localStorage["playerId"])).then((deck) => {
            setIsLoading(false)
			setFoundDeck(deck)
        })
	}, [currentPlayer])
	
if(isLoading) return <>Loading data...</>



    return (
        //  <> Fragment puts all return elements into one JXS element 
        <>
<i><center><h1>My Deck Lists</h1></center></i>
<div className="card-body"style={{backgroundColor:'#79d9ab'}}>
            {
                foundDeck.map(
                    (completedDecks) => {

                        return foundDeck ? <center>

                            <div className="completedDeckList"><div key={`completedDecks.id-${completedDecks.id}`}>
                            <Link to={`/decks/${completedDecks.id}`}>{completedDecks.title} </Link>
                            <div className="deckAuthor">by {completedDecks.player?.user.username}</div> 
                            <div className="playStyle">Play style: {completedDecks.playStyle.label}</div>
                            <img className="commander_image" src={completedDecks.commander} alt="commander_image" />
                            <b><div className="deckList">Power Level:</div></b>
                            <div className="deckList">{completedDecks.powerLevel}</div>
                            <p></p>
                            <b><div className="deckList">Primer:</div></b>
                            <div className="deckList">{completedDecks.primer}</div>
                            <button type="button" className="pure-button" onClick={() => {
                               let text
                               if (window.confirm("Are you sure you want to delete this deck?") === true) {
                                   deleteDeck(completedDecks.id).then(() => getDeckByCurrentPlayer(parseInt(localStorage.getItem("playerId"))).then(setFoundDeck));}
                                   else {text = "You canceled!"}
                                
                               }}>Delete</button>
                            <button type="button" className="pure-button" onClick={() => {
                                history.push(`/decks/edit/${completedDecks.id}`)}
                            }>Edit</button>
                            </div>
                            </div>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </center>
                        : <div> none </div>
                    } 
                )
            } </div>
        </>
    )
}
