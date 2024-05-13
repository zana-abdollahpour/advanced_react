import { useEffect, useState } from "react";

export default function includeUser(Component, userId) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const rawRes = await fetch(`/users/${userId}`);
        const res = rawRes.json();
        setUser(res.data);
      })();
    }, []);

    return <Component {...props} user={user} />;
  };
}
