export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let secondString = "Northeastern";
  let secondNumber = 9;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let isSecondString = typeof secondString;
  let isSecondNumber = typeof secondNumber;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let isSampleCount = typeof sampleCount;
  let isSampleLabel = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}                       <br />
      secondString = {secondString}                 <br />
      isSecondString = {isSecondString}             <br />
      secondNumber = {secondNumber}                 <br />
      isSecondNumber = {isSecondNumber}             <br />
      sampleCount = {sampleCount}                   <br />
      isSampleCount = {isSampleCount}               <br />
      sampleLabel = {sampleLabel}                   <br />
      isSampleLabel = {isSampleLabel}
      <hr />
    </div>
  );
}