import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()
    return (

        <nav className="pure-menu pure-menu-horizontal" >
            
    <ul className="pure-menu-list">
        <li className="pure-menu-item pure-menu-selected">
            <a href="/" className="pure-menu-link">Sylvan Serving</a>
        </li>
        <li className="pure-menu-item pure-menu-selected">
            <a href="/deckfeed" className="pure-menu-link">Deck List Feed</a>
        </li>
        <li className="pure-menu-item pure-menu-selected">
            <a href="/events" className="pure-menu-link">Events</a>
        </li>
        <li className="pure-menu-item pure-menu-selected">
            <a href="/MyDeckList" className="pure-menu-link">My Decks</a>
        </li>
        <li className="pure-menu-item pure-menu-selected">
            <a href="/decks/new" className="pure-menu-link">Create New Deck</a>
        </li>
        <li className="pure-menu-item pure-menu-selected">
            <a href="/info" className="pure-menu-link">Rules and Info</a>
        </li>
        {
                (localStorage.getItem("ss_token") !== null) ?
                    
                        <button  type="button" className="button-active"
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
                             } </ul>
</nav>
        // <nav className="navbar navbar-expand-lg" style={{
        //     backgroundColor:`#90e0b9`}}>
        //     <a className="navbar-brand" href="/">SylvanServing</a>
        //    <ul className="navbar-item"></ul>
            
        //     <li className="navbar__item">
        //         <Link className="navbar_item" to="/deckfeed">Deck List Feed</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Link className="navbar_item" to="/events">Events</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Link className="navbar_item" to="/MyDeckList">My Decks</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Link className="navbar_item" to="/decks/new">Create New Deck</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Link className="navbar_item" to="/info">Rules And Info</Link>
        //     </li>
            
        //     {
        //         (localStorage.getItem("ss_token") !== null) ?
                    
        //                 <button  type="button" className="pure-button"
        //                     onClick={() => {
        //                         localStorage.removeItem("ss_token")
        //                         history.push({ pathname: "/" })
        //                     }}
        //                 >Logout</button>
        //              :
        //             <>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/login">Login</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/register">Register</Link>
        //                 </li>
        //             </>
        //     }        </nav>
    )
}
