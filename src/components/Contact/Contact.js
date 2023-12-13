import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect,useRef,useState } from 'react'
import { Form } from 'react-router-dom'
import emailjs  from '@emailjs/browser'
import {MapContainer, TileLayer, Popup, Marker} from 'react-leaflet'


const Contact = () => {
    const[letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 4000);
      }, []);


      const sendEmail = (e) =>{
        e.preventDefault()

        emailjs
            .sendForm(
                'service_jsal7ob',
                'template_sfd1uea',
                refForm.current,
                'bruzmZPQGn5r1Z97c'
            )
            .then(
                () => {
                    alert("Email sent Successfully");
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message , Try again')
                }
            )
      }

    return(
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','m','e']} 
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am intresterd in freelance opportunities - especially ambitious or
                        large projects. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={Form} onSubmit={sendEmail} >
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="email" required />
                                </li>
                                <li>
                                   <input type="text" placeholder="Subject" name="subject" required/>
                                </li>
                                <li>
                                   <textarea placeholder="Message" name="message" required/>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Shreyash Tripathi
                    <br />
                    India
                    <br />
                    Orai, Jalaun<br />
                    Uttar Pradesh <br />
                    <span>shreyasht2002@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[25.981634230182483, 79.45058911227402]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[25.981634230182483, 79.45058911227402]}>
                            <Popup>Shreyash lives here, come over for a cup of coffee :D</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>      
            <Loader type="pacman"/>
        </>
    )
}

export default Contact