import GLC from '../GLCommander/index.js';
import {fragmentShaderTemplate} from '../constants';
//import {changeNumbers} from '../../buttons/main.js'
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

	let colorR = [];
	let colorG = [];
	let colorB = [];

	let locOfShapeNum = [];

	let newShapeNum = 20;

	let startTime = new Date().getTime(); // Get start time for animating
	let currentTime = 0;

	let newNewNumber = `vec3(147.0/255.0,178.0/255.0,103.0/255.0)`;

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
/*
	color1r = 247.0; color1g = 178.0; color1b = 103.0;
	color2r = 247.0; color2g = 157.0; color2b = 101.0;
	color3r = 244.0; color3g = 132.0; color3b = 95.0;
	color4r = 242.0; color4g = 112.0; color4b = 89.0;
	color5r = 242.0; color5g = 92.0;  color5b = 84.0;
	color6r = 199.0; color6g = 76.0;  color6b = 69.0;
*/

	// This is written this way purely for sanity's sake, easier to read.
	
	colorR[1] = 109.0; colorG[1] = 104.0; colorB[1] = 117.0;
	colorR[2] = 181.0; colorG[2] = 131.0; colorB[2] = 141.0;
	colorR[3] = 229.0; colorG[3] = 152.0; colorB[3] = 155.0;
	colorR[4] = 255.0; colorG[4] = 180.0; colorB[4] = 162.0;
	colorR[5] = 255.0; colorG[5] = 205.0;  colorB[5] = 178.0;
	colorR[6] = 199.0; colorG[6] = 76.0;  colorB[6] = 69.0;
	
	const render = () => {

		
		let speed = 2000;
		let now = new Date().getTime();
		currentTime = (now - startTime) / speed; // update the current time for animations

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
	
	const assign = (colorR, colorG, colorB) => {

		locOfShapeNum = gl.getUniformLocation(program, "shapeNum");
		gl.uniform1f(locOfShapeNum, newShapeNum);
		
		// assign all R values
		for (let i = 1; i < 7; i++) {
			
			locOfColorR[i] = gl.getUniformLocation(program, "colorR"+i);
			gl.uniform1f(locOfColorR[i], colorR[i]); 
		}

		// assign all G values
		for (let i = 1; i < 7; i++) {
			locOfColorG[i] = gl.getUniformLocation(program, "colorG"+i);
			gl.uniform1f(locOfColorG[i], colorG[i]);
		}
		
		// assign all B values
		for (let i = 1; i < 7; i++) {
			locOfColorB[i] = gl.getUniformLocation(program, "colorB"+i);
			gl.uniform1f(locOfColorB[i], colorB[i]);
		}
	};

	const anim = (newColorR, newColorG, newColorB) => {
		console.log(newShapeNum);




			const stepNum = () => {
				
				if (newShapeNum > 0.85373472095314) {
					newShapeNum--;
					console.log(newShapeNum);
					locOfShapeNum = gl.getUniformLocation(program, "shapeNum");
					gl.uniform1f(locOfShapeNum, newShapeNum);
					window.requestAnimationFrame(stepNum);
				} else {

				}


			}
			requestAnimationFrame(stepNum);

		


		for (let i = 1; i < 7; i++) {
			locOfColorR[i] = gl.getUniformLocation(program, "colorR"+i);
			locOfColorG[i] = gl.getUniformLocation(program, "colorG"+i);
			locOfColorB[i] = gl.getUniformLocation(program, "colorB"+i);


			const step = () => {
		

				if(colorR[i] > newColorR[i]) {
						colorR[i]--; 
						gl.uniform1f(locOfColorR[i], colorR[i]);
						//colorR[i] = newColorR[i];
						window.requestAnimationFrame(step);
					} else if (colorR[i] < newColorR[i]) {
						colorR[i]++;	
						gl.uniform1f(locOfColorR[i], colorR[i]);
						//colorR[i] = newColorR[i];
						window.requestAnimationFrame(step);
					} else {
						stepTwo();
					}
	
						
			};
	
	
			const stepTwo = () => {
	

					if(colorG[i] > newColorG[i]) {
						colorG[i]--;
						gl.uniform1f(locOfColorG[i], colorG[i]);
						//colorG[i] = newColorG[i];
						window.requestAnimationFrame(stepTwo);
					} else if (colorG[i] < newColorG[i]) {
						colorG[i]++;
						gl.uniform1f(locOfColorG[i], colorG[i]);
						//colorG[i] = newColorG[i];
						window.requestAnimationFrame(stepTwo);
					} else {
						stepThree();
					}
	
					
			}
	
			const stepThree = () => {
	

					if(colorB[i] > newColorB[i]) {
						colorB[i]--;
						gl.uniform1f(locOfColorB[i], colorB[i]);
						//colorB[i] = newColorB[i];
						window.requestAnimationFrame(stepThree);
					} else if (colorB[i] < newColorB[i]) {
						colorB[i]++;
						gl.uniform1f(locOfColorB[i], colorB[i]);
						//colorB[i] = newColorB[i];
						window.requestAnimationFrame(stepThree);
					} else {


					}
	
					
			}

		requestAnimationFrame(step);
		}
 
	}
	
	const animHome = (newColorR, newColorG, newColorB) => {
		console.log(newShapeNum);




			const stepNum = () => {
				
				if (newShapeNum < 20) {
					newShapeNum++;
					console.log(newShapeNum);
					locOfShapeNum = gl.getUniformLocation(program, "shapeNum");
					gl.uniform1f(locOfShapeNum, newShapeNum);
					window.requestAnimationFrame(stepNum);
				} else {

				}


			}
			requestAnimationFrame(stepNum);

		


		for (let i = 1; i < 7; i++) {
			locOfColorR[i] = gl.getUniformLocation(program, "colorR"+i);
			locOfColorG[i] = gl.getUniformLocation(program, "colorG"+i);
			locOfColorB[i] = gl.getUniformLocation(program, "colorB"+i);


			const step = () => {
		

				if(colorR[i] > newColorR[i]) {
						colorR[i]--; 
						gl.uniform1f(locOfColorR[i], colorR[i]);
						//colorR[i] = newColorR[i];
						window.requestAnimationFrame(step);
					} else if (colorR[i] < newColorR[i]) {
						colorR[i]++;	
						gl.uniform1f(locOfColorR[i], colorR[i]);
						//colorR[i] = newColorR[i];
						window.requestAnimationFrame(step);
					} else {
						stepTwo();
					}
	
						
			};
	
	
			const stepTwo = () => {
	

					if(colorG[i] > newColorG[i]) {
						colorG[i]--;
						gl.uniform1f(locOfColorG[i], colorG[i]);
						//colorG[i] = newColorG[i];
						window.requestAnimationFrame(stepTwo);
					} else if (colorG[i] < newColorG[i]) {
						colorG[i]++;
						gl.uniform1f(locOfColorG[i], colorG[i]);
						//colorG[i] = newColorG[i];
						window.requestAnimationFrame(stepTwo);
					} else {
						stepThree();
					}
	
					
			}
	
			const stepThree = () => {
	

					if(colorB[i] > newColorB[i]) {
						colorB[i]--;
						gl.uniform1f(locOfColorB[i], colorB[i]);
						//colorB[i] = newColorB[i];
						window.requestAnimationFrame(stepThree);
					} else if (colorB[i] < newColorB[i]) {
						colorB[i]++;
						gl.uniform1f(locOfColorB[i], colorB[i]);
						//colorB[i] = newColorB[i];
						window.requestAnimationFrame(stepThree);
					} else {


					}
	
					
			}

		requestAnimationFrame(step);
		}
 
	}

	assign(colorR, colorG, colorB);


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
	


    GLC.init(gl, program, assign, anim, animHome);

}




