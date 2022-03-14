import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { createDeck, getDeckById, getPlayStyle, updateDeck } from "./DeckManager"



export const DeckForm = ({ editDeck }) => {
    // const [player, setCurrentPlayer] = useState()
    const history = useHistory()
    const [playStyle, setPlayStyle] = useState([])
    const { deckId } = useParams()
    const [currentDeck, setDeck] = useState({
        player: "",
        playStyle: "",
        title: "",
        commander: "",
        creatures: "",
        artifacts: "",
        enchantments: "",
        instants: "",
        sorceries: "",
        lands: "",
        wins: "",
        losses: "",
        powerLevel: "",
        primer: ""
    })


    useEffect(() => {
        if (deckId) {
            getDeckById(deckId).then((res) => {
                const deckEdit = {
                    playStyle: res.playStyle,
                    title: res.title,
                    commander: res.commander,
                    creatures: res.creatures,
                    artifacts: res.artifacts,
                    enchantments: res.enchantments,
                    instants: res.instants,
                    sorceries: res.sorceries,
                    lands: res.lands,
                    wins: res.wins,
                    losses: res.losses,
                    powerLevel: res.powerLevel,
                    primer: res.primer
                }
                setDeck(deckEdit)
            })
        }
    }, [deckId])
    
    useEffect(() => {
        getPlayStyle().then(setPlayStyle)
    }, [])

    const changeDeckState = (event) => {
        const copy = { ...currentDeck }
        copy[event.target.name] = event.target.value

        setDeck(copy)
    }

    return (
        <form className="deckForm">
            <h2 className="deckFormTitle">New Deck List</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title" >Deck Title: </label>
                    <input
                        value={currentDeck.title}
                        onChange={changeDeckState}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name your deck!"
                        name="title"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="playStyle">Play Style: </label>
                    <select type="number" name="playStyle" required autoFocus className="form-control"
                        value={currentDeck.playStyle}
                        onChange={changeDeckState}>
                        <option value="">Select a Play Style</option>
                        {
                            playStyle.map((playStyle) => {
                                return <option key={playStyle.id} value={playStyle.id}>{playStyle.label}</option>
                            })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="commander" >Who is your Commander?: </label>
                    <input
                        value={currentDeck.commander}
                        onChange={changeDeckState}
                        required autoFocus
                        type="url"
                        className="form-control"
                        placeholder="Input an image url!"
                        name="commander"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="creatures" >Creatures: </label>
                    <textarea
                        value={currentDeck.creatures}
                        onChange={changeDeckState}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Input your list of creatures"
                        name="creatures"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="artifacts" >Artifacts: </label>
                    <textarea
                        value={currentDeck.artifacts}
                        onChange={changeDeckState}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Input your list of artifacts"
                        name="artifacts"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="enchantments" >Enchantments: </label>
                    <textarea
                        value={currentDeck.enchantments}
                        onChange={changeDeckState}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Input your list of enchantments"
                        name="enchantments"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="instants" >Instants: </label>
                    <textarea
                        value={currentDeck.instants}
                        onChange={changeDeckState}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Input your list of instants"
                        name="instants"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="sorceries" >Sorceries: </label>
                    <textarea
                        value={currentDeck.sorceries}
                        onChange={changeDeckState}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Input your list of sorceries"
                        name="sorceries"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="lands" >Lands: </label>
                    <textarea
                        value={currentDeck.lands}
                        onChange={changeDeckState}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Input your list of lands"
                        name="lands"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="powerLevel" max="10">Power Level: </label>
                    <input name="powerLevel"
                        value={currentDeck.powerLevel}
                        onChange={changeDeckState}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="What would you rank the power level of this deck?"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="wins" >Wins: </label>
                    <input name="wins"
                        value={currentDeck.wins}
                        onChange={changeDeckState}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="How many games has this deck won?"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="losses" >Losses: </label>
                    <input
                        name="losses"
                        value={currentDeck.losses}
                        onChange={changeDeckState}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="How many games has this deck lost?"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="primer" >Primer: </label>
                    <textarea
                        value={currentDeck.primer}
                        onChange={changeDeckState}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Describe your deck's general game plan, wincons, and synergies"
                        name="primer"
                        
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const deck = {
                        playStyle: parseInt(currentDeck.playStyle),
                        title: currentDeck.title,
                        commander: currentDeck.commander,
                        creatures: currentDeck.creatures,
                        artifacts: currentDeck.artifacts,
                        enchantments: currentDeck.enchantments,
                        instants: currentDeck.instants,
                        sorceries: currentDeck.sorceries,
                        lands: currentDeck.lands,
                        wins: parseInt(currentDeck.wins),
                        losses: parseInt(currentDeck.losses),
                        powerLevel: parseInt(currentDeck.powerLevel),
                        primer: currentDeck.primer
                    }
                    editDeck
                        ? updateDeck(deckId, deck)
                            .then(() => history.push("/MyDeckList"))
                        : createDeck(deck)
                            .then(() => history.push("/MyDeckList"))
                }}
                className="btn btn-primary">{editDeck ? "Update Deck" : "Create Deck"} </button>
        </form>
    )
}