export default function logProps(Component) {
  (props) => {
    console.log(props);
    return <Component {...props}>Log</Component>;
  };
}
