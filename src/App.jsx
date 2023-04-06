import './App.css'

function getWelcome(title) {
  const greeting = ['Hey', 'Hello', 'Welcome', 'Howdy', 'Greetings'];
  const welcome = greeting[Math.floor(Math.random() * greeting.length)];

  return `${welcome} ${title}`;
}


function App() {
  return (
    <div className="App">
      <h1>{getWelcome('React')}</h1>

      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />
    </div>
  );
}

export default App
