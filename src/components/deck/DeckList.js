import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { getDecks } from "./DeckManager"

export const DeckList = (props) => {
    const [decks, setDecks] = useState([])
  

    const history = useHistory()
    useEffect(() => {
        getDecks().then(data => setDecks(data))
    }, [])

    return (
        <>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/decks/new" })
                }}
            >Create New Deck List</button>
            <article className="decks">
                {
                    decks.map(deck => {
                        return <section key={`deck--${deck.id}`} className="deck">
                            <div className="deck__title">{deck.title} by {deck.player?.user.username}</div>
                            <div className="playStyle">Play style: {deck.playStyle.label}</div>
                            <img className="commander_image" src={deck.commander} alt="commander_image" />
                            
                        </section>
                    })
                }
            </article>
        </>
    )
}