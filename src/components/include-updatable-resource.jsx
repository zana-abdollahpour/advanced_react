import { useState, useEffect } from "react";

const toCapital = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default function includeUpdatableResource(
  Component,
  resourceUrl,
  resourceName
) {
  (props) => {
    const [initResource, setInitResource] = useState(null);
    const [resource, setResource] = useState(null);

    useEffect(() => {
      (async () => {
        const rawRes = await fetch(resourceUrl);
        const res = rawRes.json();
        setInitResource(res.data);
        setResource(res.data);
      })();
    }, []);

    const onChange = (updates) => setResource({ ...resource, ...updates });

    const onPost = async () => {
      const rawRes = await fetch(resourceUrl, {
        method: "POST",
        body: { [resourceName]: resource },
      });
      const res = rawRes.json();
      setInitResource(res.data);
      setResource(res.data);
    };

    const onReset = async () => {
      setResource(initResource);
    };

    const resourceProps = {
      [resourceName]: resource,
      [`onChange${toCapital(resourceName)}`]: onChange,
      [`onPost${toCapital(resourceName)}`]: onPost,
      [`onReset${toCapital(resourceName)}`]: onReset,
    };

    return <Component {...props} {...resourceProps} />;
  };
}
