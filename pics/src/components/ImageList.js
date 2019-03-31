import React from 'react';
import './ImageList.css';
import ImageCare from './ImageCard';

const ImageList = (props) =>{
    const images = props.images.map((image) => {
        return (
            <ImageCare key = {image.id} image = {image}/>
    );
    });
    return (
        <div className = "image-list">{images}</div>
    );

};

export default ImageList;