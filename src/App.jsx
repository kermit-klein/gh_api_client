import React, { Component } from "react";
import Header from "./components/Title";
import GHSearch from "./components/GHSearch";
import { Container } from "semantic-ui-react";
import axios from "axios";

export class App extends Component {
  state = {
    searchResult: [],
    message: "",
  };

  searchReq = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://api.github.com/search/users", {
        params: { q: e.target.children.search.value },
      });
      this.setState({ searchResult: response.data.items });
    } catch (error) {
      let errorMessage = error.response.data.error_message || error.message;
      this.setState({ message: errorMessage });
    }
  };

  render() {
    return (
      <Container>
        <section name="title">
          <Header />
        </section>
        <section name="main">
          <GHSearch
            searchReq={this.searchReq}
            searchResult={this.state.searchResult}
          />
        </section>
      </Container>
    );
  }
}

export default App;
