export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      
      <br />
      The website I visit very often 
      <a href="https://www.youtube.com/" id="wd-your-link">
         Youtube.
      </a>
      
      <br />
      My linkedin profile is 
      <a href="https://www.linkedin.com/in/shriya-mandala-838b68281/" id="wd-your-link" target="_blank"
        rel="noreferrer">
         ShriyaMandala.
      </a>
      <br />
      Reference:{" "}
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
    </>
  );
}