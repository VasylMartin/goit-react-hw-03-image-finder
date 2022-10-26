import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

class App extends React.Component {
  state = {
    input: ''
  }

  handleFormSubmit = input => {
    this.setState({input})
  }

  render() {

    return(
      <>
      <Searchbar onSubmit={this.handleFormSubmit}/>
      <ImageGallery input={this.state.input}/>
      </>
    )
  }
}

export {App}
