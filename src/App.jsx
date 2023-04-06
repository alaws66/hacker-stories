function getWelcome(title) {
  const greeting = ['Hey', 'Hello', 'Welcome', 'Howdy', 'Greetings'];
  const welcome = greeting[Math.floor(Math.random() * greeting.length)];

  return `${welcome} ${title}`;
}

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


function App() {
  return (
    <div className="App">
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />

      <hr />

      <ul>
        {list.map((item) => {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{getWelcome(item.title)}</a>
              </span>
              <span><b>Author:</b> {item.author}</span>
              <span><b>Comments:</b> {item.num_comments}</span>
              <span><b>Points:</b> {item.points}</span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App
