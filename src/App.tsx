import NoteListItem from "./components/NoteListItem";
import ShownNote from "./components/ShownNote";

const App = () => {
  return (
    <div className="app">
      <div id="sideBar"></div>
      <header id="searchArea"></header>
      <main id="noteArea">
        <section className="noteList">
          <button>+ Create New Note</button>
          <NoteListItem></NoteListItem>
        </section>
        <ShownNote></ShownNote>
        <section className="noteHandler"></section>
      </main>
    </div>
  );
};

export default App;
