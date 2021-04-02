import '../css/Toolkit.css'

export default function Toolkit(props) {
  return (
      <ul className='toolkit'>
        {props.children}
      </ul>
  );
}
