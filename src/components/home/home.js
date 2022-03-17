

export const Home = () => {
    return (
        <>
            <div className="home" style={{color: `#05386B`}}>
                <center>
                <h1 className="homeTitle">
                    <i>Welcome to Sylvan Serving</i>
                </h1>
                <div className="aboutUsBody">
                    <h5 className="aboutUsTitle">
                        <div>An MTG Commander Companion App</div>
                    </h5>
                    <div className="card w-50 h-50" style={{backgroundColor:'#5CDB95'}} >
                        <img className="card-img-top" src="https://images.unsplash.com/photo-1593814681464-eef5af2b0628?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Card image cap"></img>
                        <div className="card-body">
                            <h5 className="card-title">The place to...</h5>
                            <div>Create and manage Deck Lists,</div>
                            <div>View what decks other users are playing,</div>
                            <div>Create or RSVP to new Game Night events,</div>
                            <div>And more!</div>

                        </div>
                    </div>
                    
                </div></center>
            </div>
        </>
    )
}