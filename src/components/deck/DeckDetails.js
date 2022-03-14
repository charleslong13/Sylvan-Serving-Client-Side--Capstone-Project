import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getDeckById } from "./DeckManager"
import "./decks.css"

export const DeckDetails = () => {
	const [deckDetails, setDeckDetails] = useState([])
	const { deckId } = useParams() // Variable storing the route parameter
    

	useEffect(
		() => {
			getDeckById(deckId)
				.then(setDeckDetails)
           
		},
		[deckId] // Above function runs when the value of deckId changes
	)

    return (
        //  <> Fragment puts all return elements into one JXS element 
        <>

            <div className="decks"></div>
                            <div className="completedDeckList"><div key={`deckDetails.id-${deckDetails.id}`}>
                            <Link to={`/decks/${deckDetails.id}`}>{deckDetails.title} </Link>
                            <div className="deckAuthor">by {deckDetails.player?.user.username}</div> 
                            <div className="playStyle">Play style: {deckDetails.playStyle?.label}</div>
                            <img className="commander_image" src={deckDetails.commander} alt="commander_image" />
                            <b><div className="deckList">Creatures:</div></b>
                            <div className="deckList1" > {deckDetails.creatures}</div>
                            <p></p>
                            <b><div className="deckList">Artifacts:</div></b>
                            <div className="deckList1">{deckDetails.artifacts}</div>
                            <p></p>
                            <b><div className="deckList">Enchantments:</div></b>
                            <div className="deckList1">{deckDetails.enchantments}</div>
                            <p></p>
                            <b><div className="deckList">Instants:</div></b>
                            <div className="deckList1">{deckDetails.instants}</div>
                            <p></p>
                            <b><div className="deckList">Sorceries:</div></b>
                            <div className="deckList1">{deckDetails.sorceries}</div>
                            <p></p>
                            <b><div className="deckList">Lands:</div></b>
                            <div className="deckList1">{deckDetails.lands}</div>
                            <p></p>
                            <b><div className="deckList">Wins:</div></b>
                            <div className="deckList">{deckDetails.wins}</div>
                            <p></p>
                            <b><div className="deckList">Losses:</div></b>
                            <div className="deckList">{deckDetails.losses}</div>
                            <p></p>
                            <b><div className="deckList">Power Level:</div></b>
                            <div className="deckList">{deckDetails.powerLevel}</div>
                            <p></p>
                            <b><div className="deckList">Primer:</div></b>
                            <div className="deckList">{deckDetails.primer}</div>
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
        </>
    )
}
