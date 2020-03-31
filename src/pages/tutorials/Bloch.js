import "aframe";
import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const Layout = styled.div`
  width: 1040px;
  max-width: 100%;
  min-height: 75vh;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.div`
  padding: 0 1rem;
  margin: 3rem 0;

  a {
    padding: 0;
  }
`;

const codeStyle = {
  backgroundColor: "#F0F0F0",
  borderRadius: "3px",
  fontFamily: "courier, monospace",
  padding: "0 3px"
};

const myButton = {
  backgroundColor: "#f81ce6",
  borderRadius: "16px",
  border: "1px solid #c223b5",
  display: "inline-block",
  cursor: "pointer",
  color: "#ffffff",
  fontFamily: "Verdana",
  fontSize: "17px",
  padding: "16px 31px",
  textDecoration: "none",
  textShadow: "0px 0px 0px #822a7b",

  ":hover": {
    background: "#d11ec2"
  },
  ":active": {
    position: "relative",
    top: "1px"
  }
};

const variableStyle = {
  color: "blue",
  backgroundColor: "#F4F4F4",
  borderRadius: "3px",
  fontFamily: "courier, monospace",
  padding: "0 3px"
};

var addX = 1;
var addY = 1;
var addZ = 1;

var initialX = 0;
var initialY = 0;
var initialZ = 0;

var intervalIdX, intervalIdY, intervalIdZ, intervalIdH, intervalIdM;

function moveY() {
  var def = document.querySelector("#arrow");
  var defRotation = def.getAttribute("rotation");
  var x = defRotation.x;
  console.log(initialX);
  console.log(Math.round(x));
  var endval = initialX + 180;
  if (endval >= 360) {
    endval -= 360;
  }
  if (Math.round(x) === 360) {
    x = 0;
  }
  if (Math.round(x) === endval) {
    clearInterval(intervalIdY);
    return;
  }

  var newX = x + addX;

  defRotation.x = Math.round(newX);
  def.setAttribute("rotation", defRotation);
}

function Y() {
  var def = document.querySelector("#arrow");
  var defRotation = def.getAttribute("rotation");
  var x = defRotation.x;
  initialX = Math.round(x);
  if (initialX >= 360) {
    initialX -= 360;
  }
  intervalIdY = setInterval(moveY, 10);
}

function moveX() {
  var def = document.querySelector("#arrow");
  var defRotation = def.getAttribute("rotation");
  var z = defRotation.z;
  console.log(initialZ);
  console.log(Math.round(z));
  var endval = initialZ - 180;
  if (endval <= -360) {
    endval += 360;
  }
  if (Math.round(z) === -360) {
    z = 0;
  }
  if (Math.round(z) === endval) {
    clearInterval(intervalIdX);
    return;
  }

  var newZ = z - addZ;

  defRotation.z = Math.round(newZ);
  def.setAttribute("rotation", defRotation);
}

function X() {
  var def = document.querySelector("#arrow");
  var defRotation = def.getAttribute("rotation");
  var z = defRotation.z;
  initialZ = Math.round(z);
  if (initialZ >= 360) {
    initialZ -= 360;
  }
  intervalIdX = setInterval(moveX, 10);
}

function moveZ() {
  var def = document.querySelector("#arrow");
  var defRotation = def.getAttribute("rotation");
  var y = defRotation.y;
  console.log(initialY);
  console.log(Math.round(y));
  var endval = initialY - 180;
  if (endval <= -360) {
    endval += 360;
  }
  if (Math.round(y) === -360) {
    y = 0;
  }
  if (Math.round(y) === endval) {
    clearInterval(intervalIdZ);
    return;
  }

  var newY = y - addY;

  defRotation.y = Math.round(newY);
  def.setAttribute("rotation", defRotation);
}

function Z() {
  var def = document.querySelector("#arrow");
  var defRotation = def.getAttribute("rotation");
  var y = defRotation.y;
  initialY = Math.round(y);
  if (initialY >= 360) {
    initialY -= 360;
  }
  intervalIdZ = setInterval(moveZ, 10);
}

function moveH() {
  var def = document.querySelector("#arrow");
  var defRotation = def.getAttribute("rotation");
  var z = defRotation.z;
  console.log(Math.round(z));
  if (Math.round(z) === -90 || Math.round(z) === -270) {
    clearInterval(intervalIdH);
    return;
  }
  if (Math.round(z) === -360) {
    z = 0;
  }
  if (Math.round(z) === 360) {
    z = 0;
  }

  var newZ = z - addZ;

  defRotation.z = Math.round(newZ);
  def.setAttribute("rotation", defRotation);
}

function Hadamard() {
  intervalIdH = setInterval(moveH, 10);
}

function moveM() {
  var def = document.querySelector("#arrow");
  var defRotation = def.getAttribute("rotation");

  var random = Math.random();

  var z = defRotation.z;

  console.log(Math.round(z));
  if (Math.round(z) === -90 || Math.round(z) === -270) {
    if (random > 0.5) {
      defRotation.x = 0;
      defRotation.y = 0;
      defRotation.z = 0;
      def.setAttribute("rotation", defRotation);
    } else {
      defRotation.x = 0;
      defRotation.y = 0;
      defRotation.z = -180;
      def.setAttribute("rotation", defRotation);
    }
  } else {
    clearInterval(intervalIdM);
    return;
  }
}

function Measure() {
  intervalIdM = setInterval(moveM, 10);
}

export default () => (
  <>
    <Layout>
      <Header />
      <Content>
        <div>
          <div className="cell border-box-sizing text_cell rendered">
            <div className="prompt input_prompt" />
            <div className="inner_cell">
              <div className="text_cell_render border-box-sizing rendered_html">
                <h1 id="Bloch-Sphere-VR">
                  Bloch Sphere VR
                  <a className="anchor-link" href="#Bloch" />
                </h1>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "400",
                    lineHeight: "1.6",
                    letterSpacing: "1px",
                    marginBottom: "3rem"
                  }}
                >
                  Written by{" "}
                  <a
                    style={{ fontSize: "16px" }}
                    href="https://twitter.com/quantum_traps"
                    alt="author Victor Marino"
                  >
                    Victor Marino
                  </a>
                </p>
                <p>
                  The Bloch sphere is a useful tool for visualization of basic
                  quantum computing operations on qubits. Say we have a quantum
                  superposition of states{" "}
                  <code style={codeStyle}>|ψ> = α|0> + β|1></code>. The state{" "}
                  <code style={codeStyle}>|0></code> when we take a measurement
                  is represented by the arrow pointing upwards on the sphere,
                  and <code style={codeStyle}>|1></code> pointing downwards.
                </p>
                <p>
                  When we use a Pauli gate X, we rotate the state about the X
                  axis. gate Y about Y, and gate Z about Z. For X, this flips
                  our state between pure state{" "}
                  <code style={codeStyle}>|0></code> to pure state{" "}
                  <code style={codeStyle}>|1></code>. This means either we have{" "}
                  <code style={codeStyle}>α=1,β=0</code> or{" "}
                  <code style={codeStyle}>α=0,β=1</code>. However, for the Y
                  gate, this actually flips to either{" "}
                  <code style={codeStyle}>α=i,β=0</code> or{" "}
                  <code style={codeStyle}>α=0,β=i</code>.
                </p>
                <p>
                  The Hadamard gate will bring us to a state that is a quantum
                  superposition,{" "}
                  <code style={codeStyle}>|ψ> = 1/√2|0> ± 1/√2|1></code>. Taking
                  a measurement gives us either of the pure states, with a 50%
                  probability of the wavefunction collapsing to either state.
                </p>
                <p>
                  Check out the VR demo below to see it in action. If you don't
                  have a VR device, you can simply view it on your browser as a
                  3D applet.
                </p>
                <br />
                <div>
                  <center>
                    <img
                      crossOrigin="https://i.imgur.com/8fSacOa.png"
                      src="https://i.imgur.com/8fSacOa.png"
                      alt="bloch"
                    />
                  </center>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <center>
          <button style={myButton} onClick={X}>
            Pauli gate X
          </button>{" "}
          <button style={myButton} onClick={Y}>
            Pauli gate Y
          </button>{" "}
          <button style={myButton} onClick={Z}>
            Pauli gate Z
          </button>
          <br />
          <br />
          <button style={myButton} onClick={Hadamard}>
            Hadamard
          </button>{" "}
          <button style={myButton} onClick={Measure}>
            Measure
          </button>
        </center>
        <p />
        <script src="https://unpkg.com/aframe-lerp-component/dist/aframe-lerp-component.min.js" />

        <div style={{ height: "500px", width: "500px", margin: "0 auto" }}>
          <a-scene background="color: #f8f8f8" embedded>
            <a-assets>
              <img
                id="sky"
                crossOrigin="https://cdn.eso.org/images/screen/eso0932a.jpg"
                src="https://cdn.eso.org/images/screen/eso0932a.jpg"
                alt="sky stars"
              />
            </a-assets>
            <a-sky src="#sky" />
            <a-camera position="0 0 1" />
            <a-sphere
              position="0 0 0"
              radius="0.5"
              color="#F8F8F8"
              material="envMap: #sky; metalness:0.1; roughness: 0"
              opacity="0.2"
            />
            <a-torus
              material="side: double"
              id="yz"
              color="black"
              radius="0.51"
              radius-tubular="0.001"
              opacity="0.5"
              position="0 0 0"
            />
            <a-torus
              material="side: double"
              id=""
              color="black"
              radius="0.51"
              radius-tubular="0.001"
              opacity="0.5"
              position="0 0 0"
              rotation="90 90 0"
            />
            <a-torus
              material="side: double"
              id=""
              color="black"
              radius="0.51"
              radius-tubular="0.001"
              opacity="0.5"
              position="0 0 0"
              rotation="1 90 90"
            />
            <a-entity
              id="arrow"
              lerp="duration: 5000; properties: position, rotation, scale"
            >
              <a-cylinder
                material="envMap: #sky; metalness:0.1; roughness: 1"
                id="arrowcyl"
                color="crimson"
                position="0 0.0 0"
                height="1"
                radius="0.027"
              />
              <a-cone
                material="envMap: #sky; metalness:0.1; roughness: 0"
                id="arrowcone"
                color="crimson"
                position="0 0.5 0"
                height="0.1"
                radius-bottom="0.05"
                radius-top="0.005"
              />
            </a-entity>
            <a-text
              value="[1/√2, i/√2]"
              font="../../assets/custom-msdf.json"
              font-image="../../assets/custom-msdf.png"
              negate="false"
              width="2"
              position="0.55 0 0"
            />
            <a-text
              value="[1/√2, -i/√2]"
              font="../../assets/custom-msdf.json"
              font-image="../../assets/custom-msdf.png"
              negate="false"
              width="2"
              position="-1.05 0 0"
            />
            <a-text
              value="[1/√2, 1/√2]"
              font="../../assets/custom-msdf.json"
              font-image="../../assets/custom-msdf.png"
              negate="false"
              width="2"
              position="-0.2 0 0.6"
            />
            <a-text
              value="[1/√2, -1/√2]"
              font="../../assets/custom-msdf.json"
              font-image="../../assets/custom-msdf.png"
              negate="false"
              width="2"
              position="-0.2 0 -0.6"
            />
            <a-text value="[1, 0]" width="2" position="-0.1 0.6 0" />
            <a-text value="[0, 1]" width="2" position="-0.1 -0.6 0" />
            <a-cylinder
              material="envMap: #sky; metalness:0.1; roughness: 0"
              id="xcyl"
              color="black"
              position="0 0 0"
              height="1.1"
              radius="0.003"
              rotation="0 0 90"
            />
            <a-cylinder
              material="envMap: #sky; metalness:0.1; roughness: 0"
              id="ycyl"
              color="black"
              position="0 0 0"
              height="1.1"
              radius="0.003"
              rotation="90 0 0"
            />
            <a-cylinder
              material="envMap: #sky; metalness:0.1; roughness: 0"
              id="zcyl"
              color="black"
              position="0 0 0"
              height="1.1"
              radius="0.003"
            />
          </a-scene>
        </div>
      </Content>
    </Layout>
    <Footer />
  </>
);
