import { useContext } from "react";
import SearchBar, { SearchContext } from "./SearchBar";
import { SearchDataContext } from "./DataContext";

export function SearchResults() {
  const value = useContext(SearchDataContext);
  console.log("datos en search result", value.results);
  return (
    <>
      {value && value.results && value.results.map((result) => (
        <li key={result.id}>
          {result.title ? result.title : result.name}
        </li>
      ))}
    </>
  );
}
