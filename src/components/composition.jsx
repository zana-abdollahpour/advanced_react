export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "32px",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const RedButton = (props) => <Button {...props} color="crimson" />;

export const GreenButton = (props) => (
  <Button {...props} color="green" size="small" />
);
