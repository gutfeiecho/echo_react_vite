import { useState, useEffect } from "react";
import { Button, Modal } from "antd";

const VerySlowlyComponent = () => {
  useEffect(() => {
    console.log("Mount!!");
  }, []);
  console.log("Re-render!!");
  return <div>Very Slowly Component.</div>;
};

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Open the Modal</Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

const ModalDemoContainer = () => {
  return (
    <>
      <ModalComponent />
      <VerySlowlyComponent />
    </>
  );
};

export default ModalDemoContainer;
