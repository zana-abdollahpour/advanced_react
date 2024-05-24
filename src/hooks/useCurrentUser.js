import { useEffect, useState } from "react";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const rawRes = await fetch("/current-user");
      const res = await rawRes.json();
      setUser(res.data);
    })();
  }, []);

  return user;
};
