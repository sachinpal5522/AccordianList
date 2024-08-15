import { useReducer } from "react";
import ListItem from "./components/ListItem";
import { FaSearch } from "react-icons/fa";
import "./App.css";
import data from "./assets/celebrities.json";
import reducer from "./reducers/ListViewReducer";

const initialState = {
  searchedCelebrities: data,
  allCelebrities: data,
  opendAccordian: null,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  let { searchedCelebrities, opendAccordian } = state;

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  function onSearch(e) {
    dispatch({ type: "search", payload: { value: e.target.value } });
  }

  return (
    <main>
      <h1>list view</h1>
      <section className="serach-section">
        <FaSearch className="search-icon" />
        <input
          type="search"
          className="search-input"
          name="search"
          placeholder="Search User"
          onChange={debounce(onSearch)}
        />
      </section>
      <section className="listing-section">
        {searchedCelebrities.map((celebrity) => {
          return (
            <ListItem
              key={celebrity.id}
              {...celebrity}
              open={opendAccordian == celebrity.id}
              dispatch={dispatch}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
