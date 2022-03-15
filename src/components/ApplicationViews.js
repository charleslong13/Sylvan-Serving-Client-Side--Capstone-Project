import React from "react"
import {Route} from "react-router-dom"
import { DeckDetails } from "./deck/DeckDetails"
import { DeckForm } from "./deck/DeckForm"
import { DeckList } from "./deck/DeckList"
import { MyDecks } from "./deck/MyDecks"
import {Home} from "./home/home"
import { PlayerDetails } from "./players/PlayerDetails"
export const ApplicationViews = () => {
    return <>
    <main style={{
        margin: "5rem 2rem",
        lineHeight: "1.75rem"
    }}>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/deckfeed">
            <DeckList />
        </Route>
        <Route exact path="/MyDeckList">
            <MyDecks />
        </Route>
        <Route exact path="/decks/new">
            <DeckForm />
        </Route>
        <Route exact path="/decks/edit/:deckId(\d+)">
            <DeckForm editDeck = {true}/>
        </Route>
        <Route exact path='/decks/:deckId(\d+)'>
				<DeckDetails />
			</Route>
        <Route exact path='/players/:playerId(\d+)'>
				<PlayerDetails />
			</Route>
    </main>
    </>
}