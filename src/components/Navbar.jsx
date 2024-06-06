import reactLogo from '../assets/react.svg';

export default function Navbar() {
    return (
      <nav className='nav'>
        <div className='nav-logo'>
          <img src={reactLogo} alt='react logo' />
          <h1>ReactFacts</h1>
        </div>
        <p>React Course - Project 1</p>
      </nav>
    )
}