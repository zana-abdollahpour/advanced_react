import { useEffect, useState } from "react";

export const useUser = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const rawRes = await fetch(`/users/${userId}`);
      const res = await rawRes.json();
      setUser(res.data);
    })();
  }, [userId]);

  return user;
};
