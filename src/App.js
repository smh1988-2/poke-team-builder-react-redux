import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import Header from "./components/Header";
import MyTeam from "./components/MyTeam";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />

      <div className="container">
        <div className="row">
          <div className="col-lg">
            <SearchResults />
          </div>
          <div className="col-lg">
            <MyTeam />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
