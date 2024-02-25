import React, { useContext } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/searchContext";
function SearchResult() {
  const { searchQuery, search } = useContext(SearchContext);

  const { filteredMenu } = search();

  return (
    <section id="search">
      <h2>Search Results for "{searchQuery}"</h2>
      {filteredMenu.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ul>
          {filteredMenu.map((menu) => (
            <li key={menu._id}>
              <Link to={"/shopDetail/" + menu._id}>{`${menu.name}`}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default SearchResult;
