type ListProps = {
  list: Array<string>;
};

export function List({ list }: ListProps) {
  return (
    <ul>
      {list.map((val, index) => (
        <li key={index}>{val}</li>
      ))}
    </ul>
  );
}
