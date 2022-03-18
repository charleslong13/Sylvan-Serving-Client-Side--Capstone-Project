import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()
    return (
        <nav className="navbar navbar-expand-lg" style={{
            backgroundColor:`#90e0b9`}}>
            <a className="navbar-brand" href="/">SylvanServing</a>
           <ul className="navbar-item"></ul>
            
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
                    
                        <button  type="button" className="btn btn-primary"
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
            }        </nav>
    )
}
