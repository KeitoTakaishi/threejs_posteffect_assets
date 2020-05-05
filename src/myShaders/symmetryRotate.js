THREE.symmetryRotate = {
    uniforms:{
        "time": { type: "f", value: 0.0 },
        "tDiffuse": { type: "t", value: null },
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
        "uniform float time;",
        "varying vec2 vUv;",

        "mat2 rotate(float a) {",
            "float s = sin(a), c = cos(a);",
            "return mat2(c, s, -s, c);",
        "}",


        "void main(){",
            "vec2 uv = vUv;",
            "uv = abs(vec2(0.5, 0.5) - uv);",
            "uv = rotate(time*0.1) * uv;",
            "uv = abs(uv + vec2(0.5, 0.5));",
            "vec4 col = texture2D(tDiffuse, uv);",
            "gl_FragColor = col;",
        "}"
    ].join('\n')
};