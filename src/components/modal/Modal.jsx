import { useState } from "react";
import { styled } from "styled-components";

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: #00000070;
  width: 100dvw;
  height: 100dvh;
  cursor: pointer;
`;

const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 50%;
`;

export default function Modal({ children }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Show Modal</button>
      {show ? (
        <ModalBackground onClick={() => setShow(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShow(false)}>Close Modal</button>
            {children}
          </ModalContent>
        </ModalBackground>
      ) : null}
    </>
  );
}
