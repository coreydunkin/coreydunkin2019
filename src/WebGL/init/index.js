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

	let startTime = new Date().getTime(); // Get start time for animating
	let currentTime = 0;

	let newNewNumber;

	
	let positionLocation;
	let program;




	const render = () => {

		let now = new Date().getTime();
		currentTime = (now - startTime) / 1000; // update the current time for animations
		newNewNumber = 49.0;

		gl.uniform1f(locationOfTime, currentTime); // update the time uniform in our shader
		//gl.uniform1f(locationOfNum, newNewNumber);

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
	
	locationOfNum = gl.getAttribLocation(program, "newNumber");

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
	



    GLC.init(gl, program);

}

