export default function SmallBookListItem({ book: { name, price } }) {
  return (
    <h2>
      {name} / {price}
    </h2>
  );
}
