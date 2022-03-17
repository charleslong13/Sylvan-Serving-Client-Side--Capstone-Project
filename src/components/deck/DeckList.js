import React, { useEffect, useState } from "react"
import { getDecks } from "./DeckManager"
import { Link } from "react-router-dom"
import "./decks.css"
export const DeckList = () => {
    const [decks, setDecks] = useState([])

    useEffect(() => {
        getDecks().then(data => setDecks(data))
    }, [])

    return (
        <>
            <i><b><center><h1>Deck List Feed</h1></center></b></i>
            <div class="container">
                <div className="row align-items-start ">
                    <div className="col col-sm-1 p-1 "style={{backgroundColor:'#79d9ab'}}>
                        Click on a deck title or a username to view deck details
                    </div>

                    {/* <div className="col bg-light p-2 border"> */}

                        <div className="card col-xl"style={{backgroundColor:'#184D47'}}>
                            <div className="card-body" style={{backgroundColor:'#79d9ab'}}>
                                {
                                    decks.map(deck => {
                                        return <section key={`deck--${deck.id}`} className="deck">
                                           <center> 
                                                <Link to={`/decks/${deck.id}`}>{deck.title} </Link>
                                                <Link to={`/players/${deck.player?.id}`}> by {deck.player?.user.username}</Link>
                                                <div className="playStyle">Play style: {deck.playStyle.label}</div>
                                                <img className="card-img-top" className="commander_image" src={deck.commander} alt="commander_image" />
                                                </center> 
                                        </section>
                                    })
                                }
                            </div>
                            </div>
                            <div className="col col-sm-1 p-2"style={{backgroundColor:'#79d9ab'}}>
                                View the Current Meta!
                            </div>
                            </div>
                            </div>

        </>
    )
}

{/* <div class="container">
  <div class="row align-items-start">
    <div class="col">
      One of three columns
    </div> */}