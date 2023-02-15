import React, { useState } from "react";

import Card from "../ui/Card";
import Alert from "../ui/Alert";
import Modal from "../ui/Modal";

const DemoUI = () => {
  const [showModal, setShowModal] = useState(false);

  // Open the modal
  const modalOpenHandler = () => {
    setShowModal(true);
  };

  // Close the modal
  const modalCloseHandler = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      <h1>Demo UI</h1>
      <hr />
      <h2>Card </h2>
      <Card body={true}>I am a simple Card</Card>
      <Card body={true} className="bg-primary">
        I am a Card with Primary Background
      </Card>
      <Card body={true} className="bg-success">
        I am a Card with Success Background
      </Card>
      <Card body={true} className="bg-info">
        I am a Card with Info Background
      </Card>
      <Card body={true} className="bg-warning">
        I am a Card with Warning Background
      </Card>
      <Card body={true} className="bg-danger">
        I am a Card with Danger Background
      </Card>

      <br />
      <hr />
      <h2>Alert</h2>
      <Alert>I am a simple Alert</Alert>
      <Alert close={false}>I am a simple Alert with no close button</Alert>
      <Alert theme="primary">I am a primary Alert</Alert>
      <Alert theme="info">I am a info Alert</Alert>
      <Alert theme="warning">I am a warning Alert</Alert>
      <Alert theme="danger">I am a danger Alert</Alert>

      <br />
      <hr />
      <h2>Modal</h2>
      <button className="btn" onClick={modalOpenHandler}>
        Fire Modal
      </button>
      {showModal && (
        <Modal overlayClick={modalCloseHandler}>
          I am the modal!
        </Modal>
      )}


      {/* Ignore anything beyond this part */}
      <div style={ { height: '100px' } }></div>
    </React.Fragment>
  );
};

export default DemoUI;
