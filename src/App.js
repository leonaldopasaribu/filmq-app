import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { Provider } from "react-redux";

import { useStore } from "./redux/store";

import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";

import "./App.css";

function App() {
  const store = useStore();

  return (
    <Provider store={store}>
      <AppProvider>
        <Router>
          <div className="app-content">
            <header className="header-search">
              <h1 className="title">Film Q</h1>
            </header>

            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:imdbID" component={Details} />
          </div>
        </Router>
      </AppProvider>
    </Provider>
  );
}

export default App;
