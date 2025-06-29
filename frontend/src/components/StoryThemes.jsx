import React from 'react';
import '../Styles/StoryThemes.css';
import dustandfredom from '../assets/dustandfredom.jpg';
import midnightrun from '../assets/midnightrun.jpg';

const themes = [
  {
    title: 'DUST & FREEDOM',
    content: [
      'Silence when you leave everything behind.',
      'Open land and wild hum beneath you.',
      'Road is a question, not direction.',
      'Sun cracked across your shoulders.',
      'Freedom that waits — not screams.',
      'For those who’ve ever wanted out.',
    ],
    bg: dustandfredom,
  },
  {
    title: 'MIDNIGHT RUN',
    content: [
      'The terrain of the insomniac dreamer.',
      'Cities exhale, night makes room.',
      'Low-frequency engines, memory in light.',
      'Unspoken roads and ancient rhythm.',
      'Not about being seen — about feeling real.',
      'Vanishing with purpose and pulse.',
    ],
    bg: midnightrun,
  },
  {
    title: 'BROTHERHOOD / SISTERHOOD',
    content: [
      'Not born into it — you choose it.',
      'Loyalty earned, not spoken.',
      'Quiet bonds that outlast noise.',
      'Stand together without speaking.',
      'No initiation — only invitation.',
      'For the ones who keep their promises.',
    ],
    bg: dustandfredom,
  },
  {
    title: 'LAP RAGE',
    content: [
      'Not aggression — clarity at speed.',
      'Racing as ritual and release.',
      'Focus narrows to a single now.',
      'No finish line — only push.',
      'Balance at the edge of break.',
      'You move, and the world disappears.',
    ],
    bg: midnightrun,
  },
];

const StoryThemes = () => {
  return (
    <div className="themes-wrapper">
      {themes.map((theme, index) => (
        <div
          className={`theme-block ${index % 2 === 0 ? 'left' : 'right'}`}
          key={index}
        >
          <div className="theme-bg" style={{ backgroundImage: `url(${theme.bg})` }} />
          <div className="theme-box">
            <h2>{theme.title}</h2>
            <ul>
              {theme.content.map((point, i) => (
                <li key={i}>✓ {point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryThemes;
