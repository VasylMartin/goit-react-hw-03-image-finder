import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Loader } from "components/Loader/Loader";
import React from "react";

class ImageGallery extends React.Component {

    state = {
        query: [],
        loading: false,
    }

    componentDidUpdate(prevProps, prevState) {

        if(prevProps.input !== this.props.input || prevProps.page !== this.props.page) {
            this.setState({loading: true})

            fetch(`https://pixabay.com/api/?q=${this.props.input}&page=${this.props.page}&key=29632801-66d18c979cc1b04cff9f90142&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => response.json())
            .then(query => {
                if(prevProps.input !== this.props.input) {
                    this.setState({
                        query: query.hits,
                        loading: false,
                    })
                }
                
                if(prevProps.input === this.props.input) {
                    this.setState(prevState => ({
                        query: [...prevState.query, ...query.hits],
                        loading: false,
                    }))
                }
            })
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
                {this.state.loading && <Loader />}
            </ul>
        )
    }

}

export {ImageGallery}