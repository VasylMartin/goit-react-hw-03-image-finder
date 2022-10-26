import React from "react";

class  Searchbar extends React.Component {
    state = {
        input: ''
    }

    handleInputChange = event => {
        this.setState({input: event.currentTarget.value.toLowerCase()})
    }

    handleSubmit = event => {
        event.preventDefault()

        if(this.state.input.trim() === '') {
            return
        }
        this.props.onSubmit(this.state.input)

        this.setState({input: ''})
    }
    
    render() {
        return (
            <header>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">
                    <span>Search</span>
                    </button>
    
                    <input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleInputChange}
                        value={this.state.input}
                    />
                </form>
            </header>
        )
    }
}

export {Searchbar}