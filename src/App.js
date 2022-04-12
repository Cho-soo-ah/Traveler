import "./App.css";
import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import Map from "./components/map";
import Event from "./components/event";
import News from "./components/news";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  const [menu, setMenu] = useState("Map");

  let mainComp = {
    Map: <Map />,
    Event: <Event />,
    News: <News />,
  };

  function NavMenus() {
    return ["Map", "News", "Event"].map((_menu, key) => {
      return (
        <li
          key={key}
          className={menu === _menu ? "on" : ""}
          onClick={() => {
            setMenu(_menu);
          }}
        >
          {_menu}
        </li>
      );
    });
  }

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <header className="App-header">
          <h1>Traveler</h1>
          <nav>
            <ul>{NavMenus()}</ul>
          </nav>
        </header>
        <main>{mainComp[menu]}</main>
      </ApolloProvider>
    </div>
  );
}

export default App;
