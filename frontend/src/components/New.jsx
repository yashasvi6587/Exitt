import React, { useEffect, useState } from 'react';
import '../Styles/New.css';
import { Link } from 'react-router-dom';
import display from '../assets/display.jpg';
import display2 from '../assets/display2.jpg';
import display6 from '../assets/display6.jpg';
import display4 from '../assets/display4.jpg';
import display5 from '../assets/display5.jpg';

const slides = [
  {
    image: display,
    title: 'DUST & FREEDOM',
    content: [
      'Silence when you leave everything behind.',
      'Open land and wild hum beneath you.',
      'Road is a question, not direction.',
      'Sun cracked across your shoulders.',
      'Freedom that waits — not screams.',
      'For those who’ve ever wanted out.',
      'Silence when you leave everything behind.',
      'For those who’ve ever wanted out.',

    ],
  },
  {
    image: display2,
    title: 'MIDNIGHT RUN',
    content: [
      'The terrain of the insomniac dreamer.',
      'Cities exhale, night makes room.',
      'Low-frequency engines, memory in light.',
      'Unspoken roads and ancient rhythm.',
      'Not about being seen — about feeling real.',
      'Vanishing with purpose and pulse.',
      'The terrain of the insomniac dreamer.',
      'Vanishing with purpose and pulse.',
    ],
  },
  {
    image: display6,
    title: 'BROTHERHOOD / SISTERHOOD',
    content: [
      'Not born into it — you choose it.',
      'Loyalty earned, not spoken.',
      'Quiet bonds that outlast noise.',
      'Stand together without speaking.',
      'No initiation — only invitation.',
      'For the ones who keep their promises.',
    ],
  },
  {
    image: display4,
    title: 'LAP RAGE',
    content: [
      'Not aggression — clarity at speed.',
      'Racing as ritual and release.',
      'Focus narrows to a single now.',
      'No finish line — only push.',
      'Balance at the edge of break.',
      'You move, and the world disappears.',
      'Not aggression — clarity at speed.',
      'You move, and the world disappears.',
    ],
  },
];

const New = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="hero-container">
      <div
        className="background-slideshow"
        style={{
          backgroundImage: `url(${currentSlide.image})`,
        }}
      ></div>

      <div className="dark-overlay"></div>

      <div className="hero-overlay">
        <h1>{currentSlide.title}</h1>
        <ul>
          {currentSlide.content.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
        <Link to="/collection">
          <button className="hero-btn">Shop Collection</button>
        </Link>
      </div>
    </div>
  );
};

export default New;
