import React, { Component } from "react";
import { Button, Input, List } from "semantic-ui-react";

export class GHSearch extends Component {
  render() {
    let resultTable;
    if (this.props.searchResult) {
      resultTable = this.props.searchResult.map((result) => {
        let imgPath = result.avatar_url;

        return (
          <>
            <List.Item
              id={
                "result-item-" + (1 + this.props.searchResult.indexOf(result))
              }
            >
              <List.Icon name="marker" />
              <List.Content>
                <List.Header>{result.login}</List.Header>
                <List.Description>
                  <img src={imgPath} height="35" alt={result.login} />
                  ---
                  <a href={result.html_url}>{result.html_url}</a>
                </List.Description>
              </List.Content>
            </List.Item>
          </>
        );
      });
    }

    return (
      <>
        <form onSubmit={this.props.searchReq}>
          <input type="text" id="search" name="searchText" />
          <Button type="submit" name="search">
            Search
          </Button>
        </form>
        <List>{resultTable}</List>
      </>
    );
  }
}

export default GHSearch;
