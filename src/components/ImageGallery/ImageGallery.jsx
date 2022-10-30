import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import React from "react";

class ImageGallery extends React.Component {

    state ={
        query: [],
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.input !== this.props.input) {
            fetch(`https://pixabay.com/api/?q=${this.props.input}&page=${this.props.page}&key=29632801-66d18c979cc1b04cff9f90142&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => response.json())
            .then(query => this.setState({query: query.hits}))
        }
    }

    render() {
        return(
            <ul>
                {this.state.query.map(({id, webformatURL, tags}) => (
                    <ImageGalleryItem
                    key={id}
                    id={id}
                    url={webformatURL}
                    title={tags}
                    />
                ))}
            </ul>
        )
    }

}

export {ImageGallery}