import React from 'react';
import Photo from "./photo"

const PhotoContainer = () => {
    const displayPhotos = () => {
    
        return <Photo url='https://api.scryfall.com/cards/random?q=is%3Acommander;format=image' />;
    ;
    }

    return (
        <>
        <section>{displayPhotos()}</section>
        </>
    )
}

export default PhotoContainer