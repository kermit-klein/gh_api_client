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
      if (response.data.total_count === 0) {
        this.setState({ message: "No Result Found" });
      }
      this.setState({ searchResult: response.data.items });
    } catch (error) {
      debugger;
      let errorMessage;
      if (error.response.data.total_count === 0) {
        errorMessage = "No Result Found";
        this.setState({ message: errorMessage });
      } else {
        errorMessage = error.response.data.message;
        this.setState({ message: errorMessage });
      }
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
          <p id="message">{this.state.message}</p>
        </section>
      </Container>
    );
  }
}

export default App;
