import { useEffect, useState } from "react";

export const useCurrentUser = (resourceURL) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const rawRes = await fetch("/current-user");
      const res = await rawRes.json();
      setResource(res.data);
    })();
  }, [resourceURL]);

  return resource;
};
