import React from "react";

export const ImageGalleryItem = ({url, title}) => {
    return (
        <li>
            <img src={url} alt={title} width={400} />
        </li>
    )
}