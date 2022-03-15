import React, { useEffect, useState } from "react"
import { getDecks } from "./DeckManager"
import { Link } from "react-router-dom"

export const DeckList = () => {
    const [decks, setDecks] = useState([])
  
    useEffect(() => {
        getDecks().then(data => setDecks(data))
    }, [])

    return (
        <>
            <i><b><center><h2>Deck List Feed</h2></center></b></i>
            <article className="decks">
                {
                    decks.map(deck => {
                        return <section key={`deck--${deck.id}`} className="deck">
                            <ol>
                            <Link to={`/decks/${deck.id}`}>{deck.title} </Link>
                            <p></p>
                            <Link to={`/players/${deck.player?.id}`}> By {deck.player?.user.username}</Link> 
                            {/* <div className="deckAuthor">Created by: {deck.player?.user.username}</div> */}
                            <div className="playStyle">Play style: {deck.playStyle.label}</div>
                            <img className="commander_image" src={deck.commander} alt="commander_image" />
                            </ol>
                        </section>
                    })
                }
            </article>
        </>
    )
}