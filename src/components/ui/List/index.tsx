type ListProps = {
  list: Array<string>;
};

export function List({ list }: ListProps) {
  return (
    <ul>
      {list.map((val) => (
        <li key={val}>{val}</li>
      ))}
    </ul>
  );
}
