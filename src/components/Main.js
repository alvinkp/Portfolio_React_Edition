import { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import Card from './Card';
import ArrayTheGame from '../imgs/ArrayTheGame.PNG';
import RigMatchMeLogo from '../imgs/RigMatchMe.PNG';
import CodeMonstersLogo from '../imgs/CodeMonsters.png';
import Javascript_Code_Quiz from '../imgs/Challenge04_shot07.PNG';
import WeatherApp from '../imgs/Challenge06_shot02.PNG';
import BitsAndBytesLogo from '../imgs/Challenge12_shot02.PNG';
import EpicBrickBattleLogo from '../imgs/EpicBrickBattle.png';
import TheConcourseLogo from '../imgs/TheConcourse.jpg';
import WIDSLogo from '../imgs/WIDS_Game.png';
import HoriseonLogo from '../imgs/challenge01Screenshot.PNG';
import Avatar from '../imgs/AvatarForSite.png';
import resumeFile from '../files/AlvinPollardResume.pdf';

export function About() {
  return (
    <div>
      <div className='about-container'>
        <img
          src={Avatar}
          alt='A caricature of me, Alvin Pollard! I have tan skin, I wear glasses and have salt and pepper hair on my head and in my beard.'
        />
        <div className='about-text'>
          <p>
            My name is Alvin Pollard and I'm a Full Stack Web Developer /
            Digital Artist and Independant Game Developer!
          </p>
          <br />
          <p>
            Please browse my site a while and feel free to reach me via my
            Contact page.
          </p>
          <br />
          <p>Thanks and have a wonderful day!</p>
        </div>
      </div>
    </div>
  );
}

const portfolioCards = [
  {
    id: 1,
    imgLink: ArrayTheGame,
    imgAltText:
      'View of a Gameboard on a website for the game, ARRAY that you can play with family from anywhere with a computer.',
    cardTitle: '~ [ ARRAY ] ~',
    cardText: '"[ ARRAY ]", is a fun and simple game for all ages!',
    cardLink: 'https://array-the-game-production.up.railway.app/',
    gitLink: 'https://github.com/mmelan000/Array-the-Game',
  },
  {
    id: 2,
    imgLink: RigMatchMeLogo,
    imgAltText:
      'Screenshot of RigMatchMe site showing an over the shoulder picture of a drummer at a concert.',
    cardTitle: '~ Rig Match Me ~',
    cardText:
      '"Rig Match Me", is where budding musicians go to find the best gear!',
    cardLink: 'https://www.rigmatchme.com',
    gitLink: 'https://github.com/avni0000patel/Rig-Match-Me',
  },
  {
    id: 3,
    imgLink: CodeMonstersLogo,
    imgAltText:
      'Code Monsters Logo featuring a one eyed monster with yellow fur a green eye and two horns, with a smile on its face',
    cardTitle: '~ Code Monsters ~',
    cardText:
      '"Code Monsters", is a website for new developers to find a plethora of video tutorials easily!',
    cardLink: 'https://jdanleano.github.io/Code-Monsters/',
    gitLink: 'https://github.com/jdanleano/Code-Monsters',
  },
  {
    id: 4,
    imgLink: Javascript_Code_Quiz,
    imgAltText:
      'Screenshot of the Javascript_Code_Quiz in action, shows timer, high score and question in center of the screen.',
    cardTitle: '~ Javascript Code Quiz ~',
    cardText:
      '"Javascript_Code_Quiz", Test your Javascript knowledge with this timed quiz featuring css animations, javascript driven transitions and highscores stored and retrieved via local storage',
    cardLink: 'https://alvinkp.github.io/Javascript_Code_Quiz/',
    gitLink: 'https://github.com/alvinkp/Javascript_Code_Quiz',
  },
  {
    id: 5,
    imgLink: BitsAndBytesLogo,
    imgAltText:
      'Screenshot of the create a post section of the Bits and Bytes Tech Blog interface.',
    cardTitle: '~ Bits and Bytes Tech Blog ~',
    cardText:
      '"Bits and Bytes Tech Blog", is an node application with the ability to perform CRUD operations directly through the browser. It is a full stack web application.',
    cardLink: 'https://thawing-headland-69288.herokuapp.com/',
    gitLink: 'https://github.com/alvinkp/BitsAndBytesTechBlogCMS',
  },
  {
    id: 6,
    imgLink: HoriseonLogo,
    imgAltText:
      'Screenshot of the horiseon SEO website that specializes in Search engine optimization',
    cardTitle: '~ Horiseon SEO Accessibility optimization ~',
    cardText:
      '"Horiseon SEO", specializes in Accessibility on the web. Their site needed to be updated to the latest Accessibility standards and I happily obliged.',
    cardLink:
      'https://alvinkp.github.io/Horiseon_Social_Solutions_Inc_Refactor/',
    gitLink:
      'https://github.com/alvinkp/Horiseon_Social_Solutions_Inc_Refactor',
  },
  {
    id: 7,
    imgLink: WeatherApp,
    imgAltText:
      'The Super Trip planner in action, showing the 5-day forecast from the currently searched city but also showing previous searches.',
    cardTitle: '~ The Super Trip Planner ~',
    cardText:
      'The "Super Trip Planner", is the only weather app you need when you travel. Check the weather 5 days in advance and never be caught by surprise showers again!',
    cardLink: 'https://alvinkp.github.io/Super_Trip_Planner/',
    gitLink: 'https://github.com/alvinkp/Super_Trip_Planner',
  },
  {
    id: 8,
    imgLink: WIDSLogo,
    imgAltText:
      'West Indian Dominoes Simulator logo showing player avatars playing dominoes.',
    cardTitle: '~ W.I.D.S ~',
    cardText:
      '"West Indian Dominoes Simulator", puts you in control of a robot that is learning how to play Dominoes like West Indians do. This game contains profanity from West Indian Countries. If you are not from the West Indies, the words you hear may not make sense because I had a particular audience in mind. Regardless, you can still play dominoes against 3 computer players.',
    cardLink: 'https://alvinkpollard.itch.io/wids',
  },
  {
    id: 9,
    imgLink: EpicBrickBattleLogo,
    imgAltText:
      'Screenshot of Epic Brick Battle Game showing the arena where you will do battle!',
    cardTitle: '~ Epic Brick Battle Game ~',
    cardText:
      '"Epic Brick Battle", is a free local single / multiplayer game where you pilot bricks and crash them into one another to see who will be the last brick standing!',
    cardLink: 'https://alvinkpollard.itch.io/epic-brick-battle',
  },
  {
    id: 10,
    imgLink: TheConcourseLogo,
    imgAltText:
      'The Concourse logo showing a stylized person running to the right.',
    cardTitle: '~ The Concourse ~',
    cardText:
      '"The Concourse", is a highly competitive racing game that forces players to literally think on their feet. Use your wits and reflexes to conquer randomly generated courses while staying ahead of your opponents. Win and influence the future races by choosing a modifier, increasing the challenge!',
    cardLink: 'https://store.steampowered.com/app/468780/The_Concourse/',
  },
];

export function Portfolio() {
  return (
    <div>
      <div className='portfolio-container d-flex'>
        {portfolioCards.map((portfolioCard) => (
          <Card data={portfolioCard} key={portfolioCard.id} />
        ))}
      </div>
    </div>
  );
}

export function Resume() {
  return (
    <div className='resume-container'>
      <div className='proficiencies'>
        <ul>
          <li>~ Proficiencies ~</li>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>React.js</li>
          <li>Express.js</li>
          <li>CSS</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <iframe view='FitH' title='resume' src={resumeFile} />
    </div>
  );
}

export function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleBlur = (e) => {
    if (e.target.name === 'email') {
      if (!validateEmail(e.target.value)) {
        setErrorMessage('Please enter a valid email address.');
        return;
      }
    }
    if (e.target.name === 'name' && e.target.value.length === 0) {
      setErrorMessage('Please enter a name.');
      return;
    }
    if (e.target.name === 'message' && e.target.value.length === 0) {
      setErrorMessage('Please enter a message.');
      return;
    }
  };

  const handleFormSubmit = (e) => {
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (name.length === 0) {
      setErrorMessage('Please enter a name.');
      return;
    }
    if (message.length === 0) {
      setErrorMessage('Please enter a message.');
      return;
    }
    alert(`Thanks for reaching out to me! I'll be in touch soon!`);

    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
    e.preventDefault();
  };

  return (
    <div className='contact-parent'>
      <form className='form contact-container'>
        <div className='mb-3'>
          <label className='form-label'>Name</label>
          <input
            value={name}
            name='name'
            onChange={handleInputChange}
            onBlur={handleBlur}
            type='text'
            className='form-control'
            id='nameField'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Email address</label>
          <input
            value={email}
            name='email'
            onChange={handleInputChange}
            onBlur={handleBlur}
            type='email'
            className='form-control'
            id='emailField'
            placeholder='name@example.com'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Message</label>
          <textarea
            value={message}
            name='message'
            className='form-control'
            onChange={handleInputChange}
            onBlur={handleBlur}
            id='messageField'
            rows='7'
          />
        </div>
        <button
          type='button'
          onClick={handleFormSubmit}
          className='btn btn-secondary'
        >
          Submit
        </button>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
}
