import "./App.css";

import Modal from "./components/modal/Modal";
import { books } from "./data/books";
import LargeBookListItem from "./components/books/LargeListItems";

function App() {
  return (
    <Modal>
      <LargeBookListItem book={books[0]} />
    </Modal>
  );
}

export default App;
