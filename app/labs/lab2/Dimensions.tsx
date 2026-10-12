export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension-box">
          This long sentence demonstrates that the yellow sample keeps its declared width and height even as the text wraps across multiple lines.
        </div>
        <div className="wd-dimension-landscape wd-bg-color-blue">
          This longer text wraps inside the fixed 100 by 75 pixel landscape box.
        </div>
      </div>
    </div>
  );
}