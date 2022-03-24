import "./home.css"


export const Home = () => {
    return (
        <>
            <div className="home"
            >
                <h1 className="homeTitle">
                    <center><i>Welcome to Sylvan Serving</i>
                        <p></p>
                        <img className="image" src="https://res.cloudinary.com/dh0gsmquh/image/upload/v1648141220/tree_icon_sd2ria.png" alt=""></img></center>
                </h1>
                <center>
                    <div className="aboutUsBody">
                        <h5 className="aboutUsTitle">
                            <div>An MTG Commander Companion App</div>
                        </h5>
                        <div className="card" style={{ backgroundColor: '#2e8b57' }} >
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1593814681464-eef5af2b0628?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Card image cap"></img>
                            <div className="card-body" >
                                <div style={{ fontSize: '20px' }}>Create and manage Deck Lists,</div>
                                <div style={{ fontSize: '20px' }}>View what decks other users are playing,</div>
                                <div style={{ fontSize: '20px' }}>Create or RSVP to new Game Night events,</div>
                                <div style={{ fontSize: '20px' }}>And more!</div>
                                <p></p><p></p>
                            </div>
                        </div>

                    </div></center>
            </div>
        </>
    )
}