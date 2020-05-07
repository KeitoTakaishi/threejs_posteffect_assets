THREE.colorTemperature = {
    uniforms: {
        "tDiffuse": {type: "t", value: null},
        "temperatureTex": {type: "t", value: null},
        "temperature" : {type:"f", value:null}
    },
    vertexShader : [
        "varying vec2 vUv;",
        "void main() {",
		"vUv = uv;",
		"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
		"}"
    ].join('\n'),

    fragmentShader : [
        "uniform sampler2D tDiffuse;",
        "uniform sampler2D temperatureTex;",
        "uniform float temperature;",
        "varying vec2 vUv;",
        "void main() {",
        "vec2 uv = vUv;",
        "vec4 col =  texture2D(tDiffuse,  uv);",
        "vec3 t =  texture2D(temperatureTex,  vec2(temperature, uv.y)).rgb;",
        "col.rgb *= t;",
        "gl_FragColor = col;",
        "}"

    ].join('\n')
};