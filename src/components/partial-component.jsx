import { Button } from "./composition";

export default function PartialComponent(Component, partialProps) {
  return (props) => <Component {...partialProps} {...props} />;
}

/* EXAMPLE */
export const BlueButton = PartialComponent(Button, { color: "blue" });
export const SmallBlueButton = PartialComponent(BlueButton, { size: "small" });
