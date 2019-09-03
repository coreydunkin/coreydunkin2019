//import anim from "../init/index.js";
//import { createAssignment } from "typescript";
import ImagePalette from 'react-image-palette';
const reqJpgs = require.context ('../../images', true, /\.jpg$/);
const pathsJpgs = reqJpgs.keys ();
const jpgs = pathsJpgs.map( path => reqJpgs ( path ) );


class GLCommander {    
    

    newNumber = `289.0`;
    
    colorA = `vec3(247.0/255.0,178.0/255.0,103.0/255.0);`;
    colorB = `vec3(247.0/255.0,157.0/255.0,101.0/255.0);`;
    colorC = `vec3(244.0/255.0,132.0/255.0,95.0/255.0);`;
    colorD = `vec3(242.0/255.0,112.0/255.0,89.0/255.0);`;
    colorE = `vec3(242.0/255.0,92.0/255.0,84.0/255.0);`;
    colorF = `vec3(199.0/255.0,76.0/255.0,69.0/255.0);`;

    newShape = 20;
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
      let newColorR = [0,  252,165,89,243,37,  255];
      let newColorG = [0,  186,1,0,243,0,  255];
      let newColorB = [0,  4,4,4,243,1,  255];

      this.animColor(newColorR, newColorG, newColorB);

    }    

    changeNumbersAnimHome() {
      let newColorR = [0,  109,181,229,255,255,  255];
      let newColorG = [0,  104,131,152,180,205,  255];
      let newColorB = [0,  117,141,155,162,178,  255];

      let newShape = 'Home';

      this.anim(newColorR, newColorG, newColorB, newShape);


    }       

    changeNumbersAnimAbout() {
      let newColorR = [0,  247,247,244,242,242,  255];
      let newColorG = [0,  178,157,132,112,92,   255];
      let newColorB = [0,  103,101,95,89,84,     255];
// saving for later 0.85373472095314
      let newShape = 'About';

      this.anim(newColorR, newColorG, newColorB, newShape);


    }    

    changeNumbersAnimWork() {
      let newColorR = [0,  41,95,70,139,209,  255];
      let newColorG = [0,  80,144,194,219,222,   255];
      let newColorB = [0,  96,169,239,255,232,     255];
// saving for later 0.85373472095314
      let newShape = 'Work';

      this.anim(newColorR, newColorG, newColorB, newShape);


    }
    
    changeNumbersAnimContact() {
      let newColorR = [0,  171,  2,  0,     2,   5,    255];
      let newColorG = [0,  220,128,168,  195,  102,     255];
      let newColorB = [0,  201,144,150,  154,  141,  255];
      // saving for later 0.85373472095314
      let newShape = 'Work';

      this.anim(newColorR, newColorG, newColorB, newShape);

    }
    
    changeNumbersAnimMac() {
      let newColorR = [0,  122,31,105,187,48,  255];
      let newColorG = [0,  124,17,123,187,62,  255];
      let newColorB = [0,  123,30,123,188,66,  255];
      // saving for later 0.85373472095314
      let newShape = 'Work';

      this.anim(newColorR, newColorG, newColorB, newShape);

    }
    
    changeNumbersAnimNbn() {
      let newColorR = [0,  56,255,238,172,54,  255];
      let newColorG = [0,  86,200,229,188,164,  255];
      let newColorB = [0,  96,65,221,198,200,  255];
      // saving for later 0.85373472095314
      let newShape = 'Work';

      this.anim(newColorR, newColorG, newColorB, newShape);

    }
    
    changeNumbersAnimAdf() {
      let newColorR = [0,  193,186,128,2,6,  255];
      let newColorG = [0,  119,186,129,34,72,  255];
      let newColorB = [0,  46,186,131,63,133,  255];
      // saving for later 0.85373472095314
      let newShape = 'Work';

      this.anim(newColorR, newColorG, newColorB, newShape);

    }
    
    changeNumbersAnimMcd() {
      let newColorR = [0,   59,190,158,255,91,  255];
      let newColorG = [0,   31,0,68,187,51,     255];
      let newColorB = [0,   20,21,60,16,27,     255];
      // saving for later 0.85373472095314
      let newShape = 'Work';

      this.anim(newColorR, newColorG, newColorB, newShape);

    }
    
    changeNumbersAnimVw() {
      let newColorR = [0,  51,114,184,235,65,  255];
      let newColorG = [0,  71,111,184,242,63,  255];
      let newColorB = [0,  91,110,187,242,62,  255];
      // saving for later 0.85373472095314
      let newShape = 'Work';

      this.anim(newColorR, newColorG, newColorB, newShape);

    }





    clear = (r, g, b, a) => {
        this.gl.clearColor(r, g, b, a);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
}










const GLC = new GLCommander();

export default GLC;