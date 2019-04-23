import React from "react";
import List from "./List";
import Article from "../model/Article";

class App extends React.Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Articles</h2>
          <List />
        </div>
      </div>
    )
  }
}
export default App;