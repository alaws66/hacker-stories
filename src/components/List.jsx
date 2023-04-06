function getWelcome(title) {
  const greeting = ['Hey', 'Hello', 'Welcome', 'Howdy', 'Greetings'];
  const welcome = greeting[Math.floor(Math.random() * greeting.length)];

  return `${welcome} ${title}`;
}

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{getWelcome(item.title)}</a>
        </span>
        <span><b>Author:</b> {item.author}</span>
        <span><b>Comments:</b> {item.num_comments}</span>
        <span><b>Points:</b> {item.points}</span>
      </li>
    ))}
  </ul>
);

export default List