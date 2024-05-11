export default function LargeBookListItem({
  book: { name, price, title, pages },
}) {
  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <h2>Title:</h2>
      <p>{title}</p>
      <p># of pages: {pages}</p>
    </>
  );
}
