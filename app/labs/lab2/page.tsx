import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <br />
      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>
      <br />
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p id="wd-ai-style-attr" style={{ backgroundColor: "purple", color: "white" }}>
        This paragraph demonstrates a purple background with white text.
      </p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        I'm Shriya, a master's student. Currently pursuing web development and
        machine learning this semester. It's going great so far!!
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the
          elements of the same name, e.g., P, we can refer to a
          specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a
          different look and feel
        </p>
        <p id="wd-ai-id-selector">
          This paragraph demonstrates styling an element by its ID.
        </p>
        <p id="wd-id-selector-3">
          This is a third paragraph with a unique ID and styling.
        </p>
      </div>
      <br />
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-ai-class-selector">
          This paragraph demonstrates a reusable class selector.
        </p>
        <h4 className="wd-ai-class-selector">
          This heading shares the reusable class style.
        </h4>
        <p className="wd-your-class">
          I'm from Hyderabad, India. Moved to the US for my master's degree.
        </p>
        <h4 className="wd-your-class">
          A h4 heading tag with a class selector.
        </h4>
      </div>
      <br />
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular
            places in the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .wd-selector-1 .wd-selector-3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
                <strong className="wd-selector-5">
                  This strong element is nested inside the span.
                </strong>
              </span>
              <br />
              You can combine these relationships to create specific
              styles depending on the document structure
              <br />
              <span className="wd-ai-selector-5">
                This sample span is styled by a descendant selector.
              </span>
            </p>
          </div>
        </div>
      </div>
      <br />
      <div id="wd-css-specificity">
        <h3>Specificity and source order</h3>
        <p id="wd-specificity-test" className="wd-specificity-test">
          This paragraph demonstrates the CSS cascade.
        </p>
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          This paragraph demonstrates tag, class, and ID specificity.
        </p>
      </div>
      <br />
      <ForegroundColors />
      <br />
      <BackgroundColors />
      <br />
      <Borders />
      <br />
      <Padding />
      <br />
      <Margins />
      <br />
      <BoxModel />
      <br />
      <Corners />
      <br />
      <Dimensions />
      <br />
      <Display />
      <br />
      <Positions />
      <br />  
      <Zindex />
      <br />
      <Float />
      <br />
      <GridLayout />
      <br />
      <Flex />
      <br />
      <MediaQueriesDemo />
      <br />
      <ReactIconsSampler />
      <br />
    </div>
  );
}