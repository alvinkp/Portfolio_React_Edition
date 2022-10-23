function Footer(props) {
  return (
    <footer>
      <a href="https://github.com/alvinkp">GitHub</a>
      <a href="https://www.linkedin.com/in/alvinpollard/">LinkedIn</a>
      <a href="https://twitter.com/AlvinKPollard">Twitter</a>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

export default Footer;
