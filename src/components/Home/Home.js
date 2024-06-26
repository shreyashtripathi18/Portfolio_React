import { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './index.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  const[letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['h','r','e','y','a','s','h']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  
    // Cleanup function to clear the timeout
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br /> 
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="Developer" />
          <AnimatedLetters letterClass={letterClass}
          strArray={nameArray}
          idx={15}
          />
        </h1>
        <h2>Frontend Developer (Mern) / CyberSecurity / Ethical Hacking</h2>
        <Link to="/contact" className="flat-button" >CONTACT ME</Link>
      </div>
      {/* <Logo/> */}
    </div>
    </>
  )
}

export default Home;
