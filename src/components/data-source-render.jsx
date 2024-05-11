import { useEffect, useState } from "react";

export default function DataSourceRender({ getData = () => {}, render }) {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

  return render(resource);
}
