import React from "react";
import { Button, Input, List } from "semantic-ui-react";

const GHSearch = () => {
  let resultTable;

  resultTable = this.props.searchResult.map((result) => {
    let imgPath = result.avatar_url;

    return (
      <>
        <List.Item
          id={"result-item-" + (1 + this.props.searchResult.indexOf(result))}
        >
          <List.Icon name="marker" />
          <List.Content>
            <List.Header>{result.login}</List.Header>
            <List.Description>
              <a href={result.html_url}>{result.html.url}</a>
              <img src={imgPath} height="35" alt={result.login} />
            </List.Description>
          </List.Content>
        </List.Item>
      </>
    );
  });

  return (
    <>
      <form onSubmit={this.props.searchReq}>
        <Input
          type="text"
          id="search"
          name="searchText"
          placeholder="Input GH username"
        />
        <Button type="submit" name="search">
          Search
        </Button>
      </form>
      <List>{resultTable}</List>
    </>
  );
};

export default GHSearch;
