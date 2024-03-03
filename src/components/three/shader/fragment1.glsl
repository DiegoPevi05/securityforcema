uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.144159;
varying float  traveled;

void main() {
  if(length(gl_PointCoord.xy - vec2(0.5)) > 0.5) discard;
  gl_FragColor = vec4(1.,1.,1.,0.4);
}
