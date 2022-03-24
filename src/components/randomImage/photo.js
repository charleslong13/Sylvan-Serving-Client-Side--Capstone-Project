import React from 'react';

const Photo = (props) => {

    return (
        <section>
            <img src={props.url} alt="card" className="photo" />
        </section>
    )
}

export default Photo