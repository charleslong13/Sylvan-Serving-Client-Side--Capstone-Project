

export const Rules = () => {
    return (
        <>
            <div className="rules" style={{color: `#05386B`}}>
                <center>
                <h1 className="homeTitle">
                    <i>Commander Rules and General Information</i>
                </h1>
                <div className="aboutUsBody">
                    <div className="card w-50 h-50" style={{backgroundColor:'#5CDB95'}} >
                        <img className="card-img-top" src="https://images.unsplash.com/photo-1529651795107-e5a141e34843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Card image cap"></img>
                        <div className="card-body">
                            <i><h4 className="card-title">Your home for rules and information</h4></i>
                            <p></p>
                            <div></div>
                            <u><h5>Deck Construction</h5></u>
                            <p></p>
                            <ol style={{ textAlign: "left"}}>
                                1. Players choose a legendary creature as the commander for their deck. 
                            <p></p>
                                2. A card's color identity is its color plus the color of any mana symbols in the card's rules text. A card's color identity is established before the game begins, and cannot be changed by game effects. The cards in a deck may not have any colors in their color identity which are not in the color identity of the deck's commander.
                                <p></p>
                                3. A Commander deck must contain exactly 100 cards, including the commander. If you're playing a companion, it must adhere to color identity and singleton rules. While it is not part of the deck, it is effectively a 101st card.
                                <p></p>
                                4. With the exception of basic lands, no two cards in the deck may have the same English name. Some cards (e.g. Relentless Rats) may have rules text that overrides this restriction.
                            </ol>
                            <p></p>
                            <div></div>
                            <u><h5>Play Rules</h5></u>
                            <p></p>
                            <ol style={{ textAlign: "left"}}>
                                1. Players begin the game with 40 life.
                                <p></p>
                                2. Commanders begin the game in the Command Zone. While a commander is in the command zone, it may be cast, subject to the normal timing restrictions for casting creatures. Its owner must pay 2(colorless) for each time it was previously cast from the command zone; this is an additional cost.
                                <p></p>
                                3. If a commander is in a graveyard or in exile and that card was put into that zone since the last time state-based actions were checked, its owner may put it into the command zone. If a commander would be put into its owner's hand or library from anywhere, its owner may put it into the command zone instead. This replacement effect may apply more than once to the same event.
                                <p></p>
                                4. If a player has been dealt 21 points of combat damage by a particular Commander during the game, that player loses a game.
                                <p></p>
                                5. Parts of abilities which bring other traditional card(s) you own from outside the game into the game (such as Living Wish; Spawnsire of Ulamog; Karn, the Great Creator; Wish) do not function in Commander.
                            </ol>
                            <div></div>
                            <u><h5>Philosophy of Commander</h5></u>
                            <p></p>
                            <div style={{ textAlign: "left"}}>
                            Commander is for fun. It’s a socially interactive, multiplayer Magic: the Gathering format full of wild interactions and epic plays, specifically designed as an alternative to tournament Magic. As is fitting for a format in which you choose an avatar to lead your forces into battle, Commander focuses on a resonant experience. Each game is a journey the players share, relying on a social contract in which each player is considerate of the experiences of everyone involved–this promotes player interaction, inter-game variance, a variety of play styles, and a positive communal atmosphere. At the end of an ideal Commander game, someone will have won, but all participants will have had the opportunity to express themselves through their deck building and game play.
                            </div>

                            

                        </div>
                    </div>
                    
                </div></center>
            </div>
        </>
    )
}