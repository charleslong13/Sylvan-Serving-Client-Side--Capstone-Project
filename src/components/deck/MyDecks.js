import React, { useEffect, useState } from "react"
import { getDeckByCurrentPlayer } from "./DeckManager"
import { Link } from "react-router-dom"
import { getThisPlayer } from "../players/playerManager"
import "./decks.css"



export const MyDecks = () => {
//declaring useState for decks and currentPlayer 
	const [currentPlayer, setCurrentPlayer] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [foundDeck, setFoundDeck] = useState([])



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
                            <b><div className="deckList">Creatures:</div></b>
                            <div className="deckList1" > {completedDecks.creatures}</div>
                            <p></p>
                            <b><div className="deckList">Artifacts:</div></b>
                            <div className="deckList1">{completedDecks.artifacts}</div>
                            <p></p>
                            <b><div className="deckList">Enchantments:</div></b>
                            <div className="deckList1">{completedDecks.enchantments}</div>
                            <p></p>
                            <b><div className="deckList">Instants:</div></b>
                            <div className="deckList1">{completedDecks.instants}</div>
                            <p></p>
                            <b><div className="deckList">Sorceries:</div></b>
                            <div className="deckList1">{completedDecks.sorceries}</div>
                            <p></p>
                            <b><div className="deckList">Lands:</div></b>
                            <div className="deckList1">{completedDecks.lands}</div>
                            <p></p>
                            <b><div className="deckList">Wins:</div></b>
                            <div className="deckList">{completedDecks.wins}</div>
                            <p></p>
                            <b><div className="deckList">Losses:</div></b>
                            <div className="deckList">{completedDecks.losses}</div>
                            <p></p>
                            <b><div className="deckList">Power Level:</div></b>
                            <div className="deckList">{completedDecks.powerLevel}</div>
                            <p></p>
                            <b><div className="deckList">Primer:</div></b>
                            <div className="deckList">{completedDecks.primer}</div>
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
