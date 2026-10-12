import "./MediaQueriesDemo.css";

export default function MediaQueriesDemo() {
  return (
    <div className="wd-media-queries-demo">
      <h2>Media Query Demo</h2>
      <p>
        This demo uses CSS media queries to change colors based on screen width:
      </p>
      <ul>
        <li className="wd-mq-rule-default">
          Base style: White text on Green background
        </li>
        <li className="wd-mq-rule-500">
          500px to 749px: Orange rule, overridden by the max-width sample
        </li>
        <li className="wd-mq-rule-ai">
          749px and below: White text on Purple background (wins by source order)
        </li>
        <li className="wd-mq-rule-750">
          750px to 999px: Black text on Yellow background
        </li>
        <li className="wd-mq-rule-1000">
          1000px to 1249px: White text on Blue background
        </li>
        <li className="wd-mq-rule-1250">
          1250px and wider: White text on Red background
        </li>
      </ul>
    </div>
  );
}