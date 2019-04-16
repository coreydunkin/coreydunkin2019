//import anim from "../init/index.js";
//import { createAssignment } from "typescript";

class GLCommander {    
    

    newNumber = `289.0`;
    
    colorA = `vec3(247.0/255.0,178.0/255.0,103.0/255.0);`;
    colorB = `vec3(247.0/255.0,157.0/255.0,101.0/255.0);`;
    colorC = `vec3(244.0/255.0,132.0/255.0,95.0/255.0);`;
    colorD = `vec3(242.0/255.0,112.0/255.0,89.0/255.0);`;
    colorE = `vec3(242.0/255.0,92.0/255.0,84.0/255.0);`;
    colorF = `vec3(199.0/255.0,76.0/255.0,69.0/255.0);`;
/*
    colorR = [0,75,227,245,73,172,255];
    colorG = [0,0,99,204,198,237,255];
    colorB = [0,130,151,232,229,255];
*/
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

    init(gl, program, assign, anim) {

     this.gl = gl;
     this.program = program;

     this.assign = assign;

     this.anim = anim;


     console.log(gl);

     console.log(this.colorA);

     
    };


    changeNumbersIceCream() {
      let colorR = [0,  75,227,245,73,172,    255];
      let colorG = [0,  0,99,204,198,237,     255];
      let colorB = [0,  130,151,232,229,255,  255];

      this.assign(colorR, colorG, colorB);
      
    };

    changeNumbersPumpkin() {
      let colorR = [0,  247,247,244,242,242,  255];
      let colorG = [0,  178,157,132,112,92,   255];
      let colorB = [0,  103,101,95,89,84,     255];

      this.assign(colorR, colorG, colorB);

    }

    changeNumbersSpooky() {
      let colorR = [0,  190,159,148,248,244,  255];
      let colorG = [0,  175,136,124,246,182,  255];
      let colorB = [0,  211,190,183,190,188,  255];

      this.assign(colorR, colorG, colorB);

    }

    changeNumbersAnim() {
      let newColorR = [0,  252,165,89,37,243,  255];
      let newColorG = [0,  186,1,0,0,243,  255];
      let newColorB = [0,  4,4,4,1,243,  255];

      this.anim(newColorR, newColorG, newColorB);

    }    



    clear = (r, g, b, a) => {
        this.gl.clearColor(r, g, b, a);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
}










const GLC = new GLCommander();

export default GLC;