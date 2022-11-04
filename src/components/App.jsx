import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";


class App extends React.Component {
  state = {
    input: '',
    page: 0,
  }

  handleFormSubmit = (input, page) => {
    this.setState({input, page})
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1.
    }))
  }

  render() {

    return(
      <div>
      <Searchbar onSubmit={this.handleFormSubmit}/>
      <ImageGallery input={this.state.input} page={this.state.page}/>
      {this.state.page >= 1 && (
        <Button onClick={this.loadMore}/>
      )}
      </div>
    )
  }
}

export {App}
