import React from "react";

export const ImageGalleryItem = ({url, title, id, onImgClick}) => {
    return (
        <li onClick={() => {
            onImgClick(id);
            }}>
            <img src={url} alt={title} width={400} />
        </li>
    )
}