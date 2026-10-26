export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  const sampleSum = functionScoped + blockScoped;
  let myName = "Shriya"; 
  const greeting = `Hello, my name is ${myName}`;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped}       <br />
      constant1 = {constant1} <br />
      myName = {myName} <br />
      greeting = {greeting} <br />
      sampleSum = {sampleSum} <br />
      <hr />
    </div>
  );
}