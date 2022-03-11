import React, { useEffect, useState } from "react"
import { getDeckByCurrentPlayer } from "./DeckManager"
import { Link } from "react-router-dom"
import { getThisPlayer } from "../players/playerManager"




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
                            <div className="deckList">Creatures: {completedDecks.creatures}</div>
                            <div className="deckList">Artifacts: {completedDecks.artifacts}</div>
                            <div className="deckList">Enchantments: {completedDecks.enchantments}</div>
                            <div className="deckList">Instants: {completedDecks.instants}</div>
                            <div className="deckList">Sorceries: {completedDecks.sorceries}</div>
                            <div className="deckList">Lands: {completedDecks.lands}</div>
                            <div className="deckList">Wins: {completedDecks.wins}</div>
                            <div className="deckList">Losses: {completedDecks.losses}</div>
                            <div className="deckList">Power Level: {completedDecks.powerLevel}</div>
                            <div className="deckList">Primer: {completedDecks.primer}</div>
                            </div>
                            </div>
                        </center>
                        : <div> none </div>
                    } 
                )
            }
        </>
    )
}
