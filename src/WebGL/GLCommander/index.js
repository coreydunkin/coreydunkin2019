import ToggleButton from '../../buttons/main';

class GLCommander {    
    newNumber = `289.0`;
    colorA = `234.0/255.0,242.0/255.0,227.0/255.0`;
    fragmentShaderTemplate = ``;

    vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0, 1);
      }
    `;

    changeNumbers() {
      console.log('link clicked');
    }

    init(gl) {
        this.gl = gl;
    };

    clear = (r, g, b, a) => {
        this.gl.clearColor(r, g, b, a);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
}










const GLC = new GLCommander();

export default GLC;