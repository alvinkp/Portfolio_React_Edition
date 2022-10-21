import Card from "./Card";
import RigMatchMeLogo from "../imgs/RigMatchMe.PNG";

const portfolioCards = [
  {
    id: 1,
    imgLink: RigMatchMeLogo,
    imgAltText:
      "Screenshot of RigMatchMe site showing an over the shoulder picture of a drummer at a concert.",
    cardTitle: "Rig Match Me",
    cardText:
      '"Rig Match Me", is where budding musicians go to find the best gear!',
    cardLink: "https://www.rigmatchme.com",
  },
];

export function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      {portfolioCards.map((portfolioCard) => (
        <Card data={portfolioCard} key={portfolioCard.id} />
      ))}
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
    <div>
      <h1>Contact Me</h1>
    </div>
  );
}
