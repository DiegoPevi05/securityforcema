uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
uniform sampler2D texture1;
attribute float aDistance;
attribute float aVelocity;
attribute float aRandom;
attribute float aSize;
varying float  traveled;
float PI = 3.144159;


void main() {
  vUv = uv;
  vec3 pos = position;
  pos.x = mod(0.1*aVelocity*time-aRandom, 1.);
  traveled = pos.x;
  pos.x = (pos.x - 0.5) * 5.0;
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.);
  gl_PointSize = 0.6*aSize * (1. / - mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
