import Card from "./Card";
import RigMatchMeLogo from "../imgs/RigMatchMe.PNG";
import CodeMonstersLogo from "../imgs/CodeMonsters.png";
import EpicBrickBattleLogo from "../imgs/EpicBrickBattle.png";
import TheConcourseLogo from "../imgs/TheConcourse.jpg";
import WIDSLogo from "../imgs/WIDS_Game.png";

export function About() {
  return (
    <div>
      <h1>About Me</h1>
    </div>
  );
}

const portfolioCards = [
  {
    id: 1,
    imgLink: RigMatchMeLogo,
    imgAltText:
      "Screenshot of RigMatchMe site showing an over the shoulder picture of a drummer at a concert.",
    cardTitle: "~ Rig Match Me ~",
    cardText:
      '"Rig Match Me", is where budding musicians go to find the best gear!',
    cardLink: "https://www.rigmatchme.com",
  },
  {
    id: 2,
    imgLink: CodeMonstersLogo,
    imgAltText:
      "Code Monsters Logo featuring a one eyed monster with yellow fur a green eye and two horns, with a smile on its face",
    cardTitle: "~ Code Monsters ~",
    cardText:
      '"Code Monsters", is a website for new developers to find a plethora of video tutorials easily!',
    cardLink: "https://jdanleano.github.io/Code-Monsters/",
  },
  {
    id: 3,
    imgLink: EpicBrickBattleLogo,
    imgAltText:
      "Screenshot of Epic Brick Battle Game showing the arena where you will do battle!",
    cardTitle: "~ Epic Brick Battle Game ~",
    cardText:
      '"Epic Brick Battle", is a free local single / multiplayer game where you pilot bricks and crash them into one another to see who will be the last brick standing!',
    cardLink: "https://alvinkpollard.itch.io/epic-brick-battle",
  },
  {
    id: 4,
    imgLink: TheConcourseLogo,
    imgAltText:
      "The Concourse logo showing a stylized person running to the right.",
    cardTitle: "~ The Concourse ~",
    cardText:
      '"The Concourse", is a highly competitive racing game that forces players to literally think on their feet. Use your wits and reflexes to conquer randomly generated courses while staying ahead of your opponents. Win and influence the future races by choosing a modifier, increasing the challenge!',
    cardLink: "https://store.steampowered.com/app/468780/The_Concourse/",
  },
  {
    id: 5,
    imgLink: WIDSLogo,
    imgAltText:
      "West Indian Dominoes Simulator logo showing player avatars playing dominoes.",
    cardTitle: "~ W.I.D.S ~",
    cardText:
      '"West Indian Dominoes Simulator", puts you in control of a robot that is learning how to play Dominoes like West Indians do. This game contains profanity from West Indian Countries. If you are not from the West Indies, the words you hear may not make sense because I had a particular audience in mind. Regardless, you can still play dominoes against 3 computer players.',
    cardLink: "https://alvinkpollard.itch.io/wids",
  },
];

export function Portfolio() {
  return (
    <div>
      <div className="portfolio-container d-flex">
        {portfolioCards.map((portfolioCard) => (
          <Card data={portfolioCard} key={portfolioCard.id} />
        ))}
      </div>
    </div>
  );
}

export function Resume() {
  return (
    <div>
      <h1>Resume</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div className="contact-parent">
      <div className="contact-container">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" id="nameField" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emailField"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            id="messageField"
            rows="7"
          ></textarea>
        </div>
        <button type="button" className="btn btn-secondary">
          Submit
        </button>
      </div>
    </div>
  );
}
