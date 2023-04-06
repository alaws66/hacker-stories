function getWelcome(title) {
  const greeting = ['Hey', 'Hello', 'Welcome', 'Howdy', 'Greetings'];
  const welcome = greeting[Math.floor(Math.random() * greeting.length)];

  return `${welcome} ${title}`;
}

const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map(( item ) => (
      <Item 
        key={item.objectID}
        item={item}
        onRemoveItem={onRemoveItem}
      />
    ))}
  </ul>
);

const Item = ({ item, onRemoveItem }) => (
  <li>
    <span>
      <a href={item.url}>{getWelcome(item.title)}</a>
    </span>
    <span><b>Author:</b> {item.author}</span>
    <span><b>Comments:</b> {item.num_comments}</span>
    <span><b>Points:</b> {item.points}</span>
    <button type="button" onClick={() => onRemoveItem(item)}>Delete</button>
  </li>
);

export default List