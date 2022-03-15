import React, { useEffect, useState } from "react"
import { deleteDeck, getDeckByCurrentPlayer } from "./DeckManager"
import { Link } from "react-router-dom"
import { getThisPlayer } from "../players/playerManager"
import "./decks.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"



export const MyDecks = () => {
//declaring useState for decks and currentPlayer 
	const [currentPlayer, setCurrentPlayer] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [foundDeck, setFoundDeck] = useState([])
    const history = useHistory()


	useEffect(() => {
        
		const playerId = localStorage["playerId"]
        
		getThisPlayer(playerId).then((player) => {
            setIsLoading(false)
			setCurrentPlayer(player)
		})
	}, [])

	useEffect(() => {
		// Query string parameter
        if (currentPlayer.id) {
		const playerId = currentPlayer.id
		getDeckByCurrentPlayer(playerId).then((deck) => {
            // setDeck(deck)
            setIsLoading(false)
			setFoundDeck(deck.filter(deck1 => deck1["player"]["id"] === parseInt(playerId)))
		})}
	}, [currentPlayer])
	
if(isLoading) return <>Loading data...</>

    return (
        //  <> Fragment puts all return elements into one JXS element 
        <>

            <div className="decks"></div>
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
                            <button type="button" className="button" onClick={() => {
                               let text
                               if (window.confirm("Are you sure you want to delete this deck?") === true) {
                                   deleteDeck(completedDecks.id).then(() => history.push("/deckfeed"));}
                                   else {text = "You canceled!"}
                                   
                               }}>Delete</button>
                            <button type="button" className="button" onClick={() => {
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
            }
        </>
    )
}
