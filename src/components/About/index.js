import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Joshua Cross is an aspiring tech enthusiast, digital marketer, and content producer in Nashville, TN. He has assisted in building two 7-figure eCommerce companies (The SalesMentor, LLC, The Cash-Flow Specialist) from the ground up, edited and filmed winning ad-creatives that generated hundreds of thousands of dollars in monthly gross revenue, and helped over 10,000+ people get jobs in one of the most significant economic downturns in history.
          </p>
          <p align="LEFT">
          Throughout Joshua's professional career, he has worked with industry leading companies all over the U.S., including Music Business Association, NSAI, Brainfarm Cinema, Wolvvs Entertainment, Red Bull Media House, Highmark Health, S.C. Johnson, Starkist, H.G. Heinz, Music Business Association, USA Today, and Microsoft. He received a Bachelors of Business Administration from Belmont University’s Massey School of Business, Full-Stack Javascript Web Development Certificate from Vanderbilt Owen's Graduate School of Business and Computer Engineering, and won numerous awards for entrepreneurship and academic excellence.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
