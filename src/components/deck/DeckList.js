import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { getDecks } from "./DeckManager"
import { Link } from "react-router-dom"

export const DeckList = () => {
    const [decks, setDecks] = useState([])
  

    const history = useHistory()
    useEffect(() => {
        getDecks().then(data => setDecks(data))
    }, [])

    return (
        <>
            <center><button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/decks/new" })
                }}
            >Create New Deck List</button></center>
            <article className="decks">
                {
                    decks.map(deck => {
                        return <section key={`deck--${deck.id}`} className="deck">
                            <ol>
                            <Link to={`/decks/${deck.id}`}>{deck.title} </Link>
                            <div className="deckAuthor">Created by: {deck.player?.user.username}</div>
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