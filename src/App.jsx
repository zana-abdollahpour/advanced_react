import "./App.css";

import RegularList from "./components/list/RegularList";
import NumberedList from "./components/list/Numbered";

import { authors } from "./data/authors";
import { books } from "./data/books";
import SmallAuthorListItem from "./components/authors/SmallListItem";
import LargeAuthorListItem from "./components/authors/LargeListItem";
import SmallBookListItem from "./components/books/SmallListItem";
import LargeBookListItem from "./components/books/LargeListItems";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName="author"
        ItemComponent={SmallAuthorListItem}
      />
      <NumberedList
        items={authors}
        sourceName="author"
        ItemComponent={LargeAuthorListItem}
      />
      <RegularList
        items={books}
        sourceName="book"
        ItemComponent={SmallBookListItem}
      />
      <NumberedList
        items={books}
        sourceName="book"
        ItemComponent={LargeBookListItem}
      />
    </>
  );
}

export default App;
