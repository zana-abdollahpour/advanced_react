export default function SmallAuthorListItem({ author: { name, age } }) {
  return (
    <p>
      Name: {name} , age:{age}
    </p>
  );
}
