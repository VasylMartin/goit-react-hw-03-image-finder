import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";

class App extends React.Component {
  state = {
    input: '',
    page: 1,
  }

  handleFormSubmit = (input, page) => {
    this.setState({input, page})
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1.
    }))
  }

//   componentDidUpdate(prevProps, prevState) {
//     if(prevState.page !== this.state.page || prevState.input !== this.state.input) {
//       console.log("Fetch")
//     }
// }

  render() {

    return(
      <>
      <Searchbar onSubmit={this.handleFormSubmit}/>
      <ImageGallery input={this.state.input} page={this.state.page}/>
      <Button onClick={this.loadMore}/>
      </>
    )
  }
}

export {App}
