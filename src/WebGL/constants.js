//import GLC from './GLCommander/index.js';

export const fragmentShaderTemplate = `
      #ifdef GL_ES
      precision mediump float;
      #endif
    
      #define PI 3.14159265359;
    
      uniform vec2 color7New;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;
      uniform float u_xpos;
      uniform float u_ypos;

      uniform float color1;
      uniform float color2;
      uniform float color3;
      uniform float color4;
      uniform float color5;
      uniform float color6;

      uniform float colorR1;
      uniform float colorG1;
      uniform float colorB1;

      uniform float colorR2;
      uniform float colorG2;
      uniform float colorB2;

      uniform float colorR3;
      uniform float colorG3;
      uniform float colorB3;

      uniform float colorR4;
      uniform float colorG4;
      uniform float colorB4;
      
      uniform float colorR5;
      uniform float colorG5;
      uniform float colorB5;
      
      uniform float colorR6;
      uniform float colorG6;
      uniform float colorB6;
    
    vec3 mod289(vec3 x) {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 mod289(vec4 x) {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 permute(vec4 x) {
         return mod289(((x*34.0)+1.0)*x);
    }
    
    vec4 taylorInvSqrt(vec4 r)
    {
      return 1.79284291400159 - 0.85373472095314 * r;
    }
    
    float snoise(vec3 v)
      { 
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
    
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 =   v - i + dot(i, C.xxx) ;
    
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
    
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
    
      i = mod289(i); 
      vec4 p = permute( permute( permute( 
                 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
               + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
    
      float n_ = 0.142857142857;
      vec3  ns = n_ * D.wyz - D.xzx;
    
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );
    
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
    
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
    
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
    
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
    
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
    
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
    
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                    dot(p2,x2), dot(p3,x3) ) );
      }
    
      void main() {

        vec3 color1 = vec3(colorR1/255.0,colorG1/255.0,colorB1/255.0);
        vec3 color2 = vec3(colorR2/255.0,colorG2/255.0,colorB2/255.0);
        vec3 color3 = vec3(colorR3/255.0,colorG3/255.0,colorB3/255.0);
        vec3 color4 = vec3(colorR4/255.0,colorG4/255.0,colorB4/255.0);
        vec3 color5 = vec3(colorR5/255.0,colorG5/255.0,colorB5/255.0);
        vec3 color6 = vec3(colorR6/255.0,colorG6/255.0,colorB6/255.0);
        vec2 lt = vec2(gl_FragCoord.x + u_xpos, gl_FragCoord.y + u_ypos);
        vec2 st = lt.xy/u_resolution.xy;
        st.x *= u_resolution.x/u_resolution.y;
        vec3 color = vec3(0.0);
        vec2 pos = vec2(st*0.6);
        float DF = 0.0;
        float a = 0.0;
        vec2 vel = vec2(u_time*.1);
        st.xy *= 0.4;
        float r = snoise(vec3(st.x,st.y,u_time * 0.1));
        if(r >= -1.0 && r < -0.6){
          color = color1;
        } else if(r >= -0.6 && r < -0.2){
       color = color2;
        } else if(r >= -0.2 && r < 0.2){
          color = color3;
        } else if(r >= 0.2 && r < 0.6){
           color = color4;
        } else {
          color = color5;
        }
        gl_FragColor = vec4(color,1.0);
      }
    `;