import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm  
          <img src={LogoTitle} alt="Developer" />
          hreyash
          <br />
          Web Developer
        </h1>
        <h2>Frontend Developer / React / CyberSecurity</h2>
        <Link to="/contact" className="falt-button" />
        CONTACT ME
      </div>
    </div>
  )
}

export default Home
