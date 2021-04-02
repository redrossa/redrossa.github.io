import '../css/Navbar.css'

export default function Navbar(props) {
  return (
      <ul className='navbar'>
        {props.children}
      </ul>
  );
}
