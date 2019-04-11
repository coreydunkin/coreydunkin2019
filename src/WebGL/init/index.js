import GLC from '../GLCommander/index.js';
import {fragmentShaderTemplate} from '../constants';

//export const canvas = document.getElementById('webgl');
//export const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

export const render = () => {


}

export const init = () => {

}


export default () => {
 
	// set up global javascript variables
	let canvas; 
	let gl; // canvas and webgl context

	let shaderSource;
	let buffer;

	/* Variables holding the location of uniform variables in the WebGL. We use this to send info to the WebGL script. */
	let locationOfTime;
	let locationOfResolution;
	let locationOfNum;

	let locOfColorR = [];
	let locOfColorG = [];
	let locOfColorB = [];

	let locOfc1r;
	let locOfc1g;
	let locOfc1b;
	let locOfc2r;
	let locOfc2g;
	let locOfc2b;
	let locOfc3r;
	let locOfc3g;
	let locOfc3b;
	let locOfc4r;
	let locOfc4g;
	let locOfc4b;
	let locOfc5r;
	let locOfc5g;
	let locOfc5b;
	let locOfc6r;
	let locOfc6g;
	let locOfc6b;

	let startTime = new Date().getTime(); // Get start time for animating
	let currentTime = 0;

	let newNewNumber = `vec3(147.0/255.0,178.0/255.0,103.0/255.0)`;



	let color1r;
	let color1g;
	let color1b;

	let color2r;
	let color2g;
	let color2b;

	let color3r;
	let color3g;
	let color3b;

	let color4r;
	let color4g;
	let color4b;

	let color5r;
	let color5g;
	let color5b;

	let color6r;
	let color6g;
	let color6b;

	let positionLocation;
	let program; 

	//below is all the colors so they're available for editing and playing with
	//in rgb values 


	/*
	let color1 = vec3(color1r/255.0,color1g/255.0,color1b/255.0);
	let color2 = vec3(color2r/255.0,color2g/255.0,color2b/255.0);
	let color3 = vec3(color3r/255.0,color3g/255.0,color3b/255.0);
	let color4 = vec3(color4r/255.0,color4g/255.0,color4b/255.0);
	let color5 = vec3(color5r/255.0,color5g/255.0,color5b/255.0);
	let color6 = vec3(color6r/255.0,color6g/255.0,color6b/255.0);
	*/

	// ^^ wip

	color1r = 247.0; color1g = 178.0; color1b = 103.0;
	color2r = 247.0; color2g = 157.0; color2b = 101.0;
	color3r = 244.0; color3g = 132.0; color3b = 95.0;
	color4r = 242.0; color4g = 112.0; color4b = 89.0;
	color5r = 242.0; color5g = 92.0;  color5b = 84.0;
	color6r = 199.0; color6g = 76.0;  color6b = 69.0;

	const render = () => {

		

		let now = new Date().getTime();
		currentTime = (now - startTime) / 1000; // update the current time for animations

		gl.uniform1f(locationOfTime, currentTime); // update the time uniform in our shader

		window.requestAnimationFrame(render, canvas); // request the next frame
	
		positionLocation = gl.getAttribLocation(program, "a_position"); // do stuff for those vertex's
		gl.enableVertexAttribArray(positionLocation);
		gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
		gl.drawArrays(gl.TRIANGLES, 0, 6);


	}


	// standard canvas setup here, except get webgl context
	let vertexShader = GLC.vertexShaderSource;
	let fragmentShader = fragmentShaderTemplate;

	
	// standard canvas setup here, except get webgl context
	canvas = document.getElementById('webgl');
	gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;
	

	// give WebGL it's viewport
	gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

	// kind of back-end stuff
	buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(
		gl.ARRAY_BUFFER, 
		new Float32Array([
			-1.0, -1.0, 
			1.0, -1.0, 
			-1.0,  1.0, 
			-1.0,  1.0, 
			1.0, -1.0, 
			1.0,  1.0]), 
		gl.STATIC_DRAW
	); // ^^ That up there sets up the vertex's used to draw onto. I think at least, I haven't payed much attention to vertex's yet, for all I know I'm wrong.



	shaderSource = GLC.vertexShaderSource;
	vertexShader = gl.createShader(gl.VERTEX_SHADER); //create the vertex shader from script
	gl.shaderSource(vertexShader, shaderSource);
	gl.compileShader(vertexShader);

	shaderSource   = fragmentShaderTemplate;
	fragmentShader = gl.createShader(gl.FRAGMENT_SHADER); //create the fragment from script
	gl.shaderSource(fragmentShader, shaderSource);
	gl.compileShader(fragmentShader);

	


	program = gl.createProgram(); // create the WebGL program.  This variable will be used to inject our javascript variables into the program.
	gl.attachShader(program, vertexShader); // add the shaders to the program
	gl.attachShader(program, fragmentShader); // ^^
	gl.linkProgram(program);	 // Tell our WebGL application to use the program
	gl.useProgram(program); // ^^ yep, but now literally use it.
	
	
	/* 
	
	Alright, so here we're attatching javascript variables to the WebGL code.  First we get the location of the uniform variable inside the program. 
	
	We use the gl.getUniformLocation function to do this, and pass thru the program variable we created above, as well as the name of the uniform variable in our shader.
	
	*/
	locationOfResolution = gl.getUniformLocation(program, "u_resolution");
	locationOfTime = gl.getUniformLocation(program, "u_time");
	
	locationOfNum = gl.getUniformLocation(program, "numNumber");
	
	// assign all R values
	/*
	for (let i = 0; i < 6; ++i) {
		locOfColorR[i] = gl.getUniformLocation(program, "color"i"r");
		gl.uniform1f(locOfc1r, color1r);
	}
*/
	locOfc1r = gl.getUniformLocation(program, "color1r");
	locOfc1g = gl.getUniformLocation(program, "color1g");
	locOfc1b = gl.getUniformLocation(program, "color1b");
	locOfc2r = gl.getUniformLocation(program, "color2r");
	locOfc2g = gl.getUniformLocation(program, "color2g");
	locOfc2b = gl.getUniformLocation(program, "color2b");
	locOfc3r = gl.getUniformLocation(program, "color3r");
	locOfc3g = gl.getUniformLocation(program, "color3g");
	locOfc3b = gl.getUniformLocation(program, "color3b");
	locOfc4r = gl.getUniformLocation(program, "color4r");
	locOfc4g = gl.getUniformLocation(program, "color4g");
	locOfc4b = gl.getUniformLocation(program, "color4b");
	locOfc5r = gl.getUniformLocation(program, "color5r");
	locOfc5g = gl.getUniformLocation(program, "color5g");
	locOfc5b = gl.getUniformLocation(program, "color5b");
	locOfc6r = gl.getUniformLocation(program, "color6r");
	locOfc6g = gl.getUniformLocation(program, "color6g");
	locOfc6b = gl.getUniformLocation(program, "color6b");

	gl.uniform1f(locOfc1r, color1r);
	gl.uniform1f(locOfc1g, color1g);
	gl.uniform1f(locOfc1b, color1b);
	gl.uniform1f(locOfc2r, color2r);
	gl.uniform1f(locOfc2g, color2g);
	gl.uniform1f(locOfc2b, color2b);
	gl.uniform1f(locOfc3r, color3r);
	gl.uniform1f(locOfc3g, color3g);
	gl.uniform1f(locOfc3b, color3b);
	gl.uniform1f(locOfc4r, color4r);
	gl.uniform1f(locOfc4g, color4g);
	gl.uniform1f(locOfc4b, color4b);
	gl.uniform1f(locOfc5r, color5r);
	gl.uniform1f(locOfc5g, color5g);
	gl.uniform1f(locOfc5b, color5b);
	gl.uniform1f(locOfc6r, color6r);
	gl.uniform1f(locOfc6g, color6g);
	gl.uniform1f(locOfc6b, color6b);

	console.log(locationOfNum);

	/*
	
	Then we simply apply our javascript variables to the program. 
	Notice, it gets a bit tricky doing this.  If you're editing a float value, gl.uniformf works. 
	
	But if we want to send over an array of floats, for example, we'd use gl.uniform2f.  We're specifying that we are sending 2 floats at the end.  
	
	You can also send it over to the program as a vector, by using gl.uniform2fv.
	To read up on all of the different gl.uniform** stuff, to send any variable you want, I'd recommend using the table (found on this site, but you need to scroll down about 300px) 
	
	https://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html#uniforms
	
	*/
	gl.uniform2f(locationOfResolution, canvas.width, canvas.height);
	gl.uniform1f(locationOfTime, currentTime);
	gl.uniform1f(locationOfNum, newNewNumber);


	render();
	
    window.addEventListener('load', function(event){
        init();
    });

    window.addEventListener('resize', function(event){
        // just re-doing some stuff in the init here, to enable resizing.
        
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, window.innerWidth, window.innerHeight);
        locationOfResolution = gl.getUniformLocation(program, "u_resolution");
    });
	


    GLC.init(gl, program, newNewNumber);

}

