const isObject = (data) => typeof data === "object" && data !== null;

export default function RecursiveComponent({ data }) {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([objKey, val]) => (
        <li key={objKey}>
          {objKey}:
          <ul>
            <RecursiveComponent data={val} />
          </ul>
        </li>
      ))}
    </>
  );
}
