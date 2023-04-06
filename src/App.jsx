import Search from "./components/Search";
import List from "./components/List";

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const App = () => {
  return (
    <div className="App">
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List list={list} />
    </div>
  );
}

export default App
