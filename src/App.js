import Search from './components/Search';
import SearchResults from './components/SearchResults';
import Header from './components/Header';
import MyTeam from './components/MyTeam';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <SearchResults />
      <MyTeam />
    </div>
  );
}

export default App;
