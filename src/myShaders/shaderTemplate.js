THREE.Invert = {
    uniforms: {
        "tDiffuse": {type: "t", value: null},
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
        "varying vec2 vUv;",
        "void main() {",
        "vec2 uv = vUv;",
        "vec4 col = texture2D(tDiffuse,  uv);",
        "gl_FragColor = col;",
        "}"

    ].join('\n')
};