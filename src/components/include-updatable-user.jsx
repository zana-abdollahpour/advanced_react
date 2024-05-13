import { useState, useEffect } from "react";

export default function includeUpdatableUser(Component, userId) {
  (props) => {
    const [initUser, setInitUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const rawRes = await fetch(`/users/${userId}`);
        const res = rawRes.json();
        setInitUser(res.data);
        setUser(res.data);
      })();
    }, []);

    const onChangeUSer = (updates) => setUser({ ...user, ...updates });

    const onPostUser = async () => {
      const rawRes = await fetch(`/users/${userId}`, {
        method: "POST",
        body: { user },
      });
      const res = rawRes.json();
      setInitUser(res.data);
      setUser(res.data);
    };

    const onResetUser = () => {
      setUser(initUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUSer}
        onPostUser={onPostUser}
        onResetUser={onResetUser}
      />
    );
  };
}
