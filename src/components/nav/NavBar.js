import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar_item" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar_item" to="/deckfeed">Deck List Feed</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar_item" to="/events">Events</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar_item" to="/MyDeckList">My Decks</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar_item" to="/decks/new">Create New Deck</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar_item" to="/info">Rules And Info</Link>
            </li>
            
            {
                (localStorage.getItem("ss_token") !== null) ?
                    
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("ss_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                     :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
