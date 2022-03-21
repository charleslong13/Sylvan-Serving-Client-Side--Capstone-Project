import React, { useEffect, useState } from "react"
import { getDecks } from "./DeckManager"
import { Link } from "react-router-dom"
import "./decks.css"
import { getPlayStyles, getDecksByPlayStyle } from "../playstyle.js/playStyleManager"
export const DeckList = () => {
    const [decks, setDecks] = useState([])
    const [playStyle, setPlayStyle] = useState([])
    useEffect(() => {
        getDecks().then(data => setDecks(data))
        getPlayStyles().then(data => setPlayStyle(data))
    }, [])


    const deckFilter = (event) => {
        if (event.target.value === '0'){
            getDecks()
            .then((data) => {
                setDecks(data)
            })
        } else {
            getDecksByPlayStyle(event.target.value)
            .then((data) => {
                setDecks(data)
            })
        }
    }

    return (
        <>
            <i><b><center><h1>Deck List Feed</h1></center></b></i>
            <div className="pure-g">
                
                    <div className="pure-u-1-4 "style={{backgroundColor:'#79d9ab'}}>
                        Click on a title or username for deck details
                    </div> 

                        <div className="pure-u-1-2"style={{backgroundColor:'#79d9ab'}}>
                            <div className="card" style={{backgroundColor:'#2e8b57'}}>
                    <center><div className="deckFilter">
                        <select id="playStyle" onChange={(event) => {
                            deckFilter(event)
                        }}
                        defaultValue=""
                        name="playStyle"
                        className="filter">
                            <option value='0'>Filter by Play Style</option>
                            {playStyle.map((playStyle) => (
                            <option key={playStyle?.id} value={playStyle?.id}>{playStyle?.label}</option>))}
                        </select> 
                    </div></center>
                                {
                                    decks.map(deck => {
                                        return <section key={`deck--${deck.id}`} className="deck">
                                           <center> 
                                               <pre>
                                                <Link to={`/decks/${deck.id}`}>{deck.title}</Link>
                                                <Link to={`/players/${deck.player?.id}`}> by {deck.player?.user.username}</Link>
                                                <div className="playStyle">Play style:{deck.playStyle.label}</div>
                                                <img className="card-img-top" className="commander_image" src={deck.commander} alt="commander_image" />
                                                </pre></center> 
                                        </section>
                                    })
                                }
                            </div>
                            </div>
                            <div className="pure-u-1-4"style={{backgroundColor:'#79d9ab'}}>
                                View what decks other players are making!              
                            </div>
                            </div>
                            

        </>
    )
}

