import React from "react"
import {Route} from "react-router-dom"
import { DeckList } from "./deck/DeckList"
import { MyDecks } from "./deck/MyDecks"
import {Home} from "./home/home"
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
    </main>
    </>
}