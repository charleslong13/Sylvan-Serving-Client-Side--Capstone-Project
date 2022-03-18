import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getDeckByCurrentPlayer } from "../deck/DeckManager"
import { getPlayerById } from "./playerManager"
import "./player.css"
export const PlayerDetails = () => {
    const [playerDetails, setPlayerDetails] = useState([])
    const { playerId } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [foundDeck, setFoundDeck] = useState([])

    useEffect(
        () => {
            getPlayerById(playerId)
                .then(setPlayerDetails)
        }, [playerId])

    useEffect(() => {
        // Query string parameter
        if (playerDetails.id) {
            const playerId = playerDetails.id
            getDeckByCurrentPlayer(playerId).then((deck) => {
                // setDeck(deck)
                setIsLoading(false)
                setFoundDeck(deck.filter(deck1 => deck1["player"]["id"] === parseInt(playerId)))
            })
        }
    }, [playerDetails])

    if (isLoading) return <>Loading data...</>
    return (
        <>
        <center><h2>Player Details</h2></center>
            <div className="playerDetail"></div>
            <div key={`playerDetails.id-${playerDetails.id}`} className="player">
                <center><b><div>Username: </div></b>
                    <div>{playerDetails.user?.username}</div>
                    <b><div>Bio: </div></b>
                    <div>{playerDetails.bio}</div></center>
                <p></p><p></p><p></p>
                <div></div>
                <center><h3>{playerDetails.user?.username}'s decks</h3></center>
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
                        })}
            </div>


        </>

    )
}