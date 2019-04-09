import ToggleButton from '../../buttons/main';

class GLCommander {    
    
    newNumber = `289.0`;
    
    colorA = `247.0/255.0,178.0/255.0,103.0/255.0`;
    colorB = `247.0/255.0,157.0/255.0,101.0/255.0`;
    colorC = `244.0/255.0,132.0/255.0,95.0/255.0`;
    colorD = `242.0/255.0,112.0/255.0,89.0/255.0`;
    colorE = `242.0/255.0,92.0/255.0,84.0/255.0`;
    colorF = `199.0/255.0,76.0/255.0,69.0/255.0`;

    //vec3 color2 = vec3(234.0/255.0,242.0/255.0,227.0/255.0);
    //vec3 color2 = vec3(97.0/255.0,232.0/255.0,225.0/255.0);
    //vec3 color3 = vec3(242.0/255.0,87.0/255.0,87.0/255.0);
    //vec3 color4 = vec3(242.0/255.0,232.0/255.0,99.0/255.0);
    //vec3 color5 = vec3(242.0/255.0,205.0/255.0,96.0/255.0);
    //vec3 color6 = vec3(255.0/255.0,255.0/255.0,255.0/255.0);


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