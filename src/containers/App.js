import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      source: [],
      searchField: "",
    };
  }

  componentDidMount() {
    const authURL = "https://api.petfinder.com/v2/oauth2/token";
    const apiURL = "https://api.petfinder.com/v2/animals?type=cat&limit=100";
    let fetchDataFromApi = async (authURL, apiURL) => {
      let authResponse = await fetch(authURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body:
          "grant_type=client_credentials&client_id=IvN9mFnzK1XfsbCb1Pw1ID3586m0nqNwgSnm4q3cDezVau2wfW&client_secret=MRl5a0VCZLrsiKb04fjnS4Vbh37Z7zlMZnx9oup8",
      });
      let authResult = await authResponse.json();
      let { access_token } = authResult;
      let queryResponse = await fetch(apiURL, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      let getResult = await queryResponse.json();
      console.log(getResult);
      this.setState({ source: getResult.animals });
    };
    fetchDataFromApi(authURL, apiURL);
  }

  render() {
    const { source, searchField } = this.state;
    const filteredSource = source.filter((item) => {
      return item.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !source.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="flexbox-wrapper">
        <header className="flexbox-row flexbox-row-fixed">
          <h1 className="f1">Catsylum</h1>
          <SearchBox searchChanged={this.onSearchChange} />
        </header>
        <main className="flexbox-row flexbox-row-fill">
          <div>
            <div>
              <Scroll>
            <CardList source={filteredSource} />
          </Scroll>
            </div>
          </div>
          
        </main>
      </div>
    );
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
}

export default App;
