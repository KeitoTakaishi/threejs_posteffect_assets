THREE.noise = {
    uniforms: {
        "tDiffuse" : {type: "t", value: null},
        "exposure" : {type: "f", value: 0.0},
        "time" : {type: "f", value: 0.0},
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
        "uniform float exposure;",
        "uniform float time;",
        "varying vec2 vUv;",

        "float random (vec2 st) {",
            "return fract(sin(dot(st.xy, vec2(12.9898,78.233)))*43758.5453123);",
        "}",

        "void main() {",
        "vec2 uv = vUv;",
        "vec4 col = texture2D(tDiffuse,  uv);",
        "col.rgb = col.rgb * random(vec2(uv) + vec2(time, time)) * exposure;",
        "gl_FragColor = col;",
        "}"

    ].join('\n')
};