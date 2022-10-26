import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

class App extends React.Component {
  state = {
    input: '',
    page: 1,
  }

  handleFormSubmit = (input, page) => {
    this.setState({input, page})
  }

  render() {

    return(
      <>
      <Searchbar onSubmit={this.handleFormSubmit}/>
      <ImageGallery input={this.state.input} page={this.state.page}/>
      </>
    )
  }
}

export {App}
