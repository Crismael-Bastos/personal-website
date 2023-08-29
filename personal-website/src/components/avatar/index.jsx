import './index.css';


export default function Avatar(props) {
  return (
    <div {...props}>
      <img
        className="avatar-img"
        src="https://avatars.githubusercontent.com/u/84541512?v=4"
      />
    </div>
  );
}
