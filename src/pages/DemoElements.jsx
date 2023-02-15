import React from "react";

const DemoElements = () => {
  return (
    <React.Fragment>
      <h1>Demo Elements</h1>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      <hr />
      <h1>Text</h1>
      <p>I am a regular text</p>
      <p className="text-primary">I am a text with primary color</p>
      <p className="text-info">I am a text with info color</p>
      <p className="text-warning">I am a text with warning color</p>
      <p className="text-success">I am a text with success color</p>
      <p className="text-danger">I am a text with danger color</p>
      <p className="text-white">Si Jeremy ang pinakamagaling sa buong kalawakan boy!!!</p>
      
      <hr />
      <h2>Button Sizes</h2>
      <button className="btn">Button</button> <br /><br />
      <button className="btn btn-xs">Button Extra Small</button> <br /><br />
      <button className="btn btn-sm">Button Small</button> <br /><br />
      <button className="btn btn-md">Button Medium</button> <br /><br />
      <button className="btn btn-lg">Button Large</button> <br /><br />
      <button className="btn btn-xl">Button Extra Large</button> <br /><br />
      <button className="btn btn-block">Button (Blocked)</button> <br />

      <hr />
      <h2>Button Theme</h2>
      <button className="btn btn-primary">Button Primary</button> <br /><br />
      <button className="btn btn-success">Button Success</button> <br /><br />
      <button className="btn btn-info">Button Info</button> <br /><br />
      <button className="btn btn-warning">Button Warning</button> <br /><br />
      <button className="btn btn-danger">Button Danger</button> <br /><br />


      {/* Ignore anything beyond this part */}
      <div style={ { height: '100px' } }></div>
    </React.Fragment>
  );
};

export default DemoElements;
