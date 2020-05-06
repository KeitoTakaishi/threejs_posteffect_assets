THREE.rgbShift = {
    uniforms:{
        "rshift":{type: "f", value:0.0},
        "gshift":{type: "f", value:0.0},
        "bshift":{type: "f", value:0.0},
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
        "uniform float rshift;",
        "uniform float gshift;",
        "uniform float bshift;",
        "varying vec2 vUv;",

        "void main(){",
            "vec2 uv = vUv;",
            "vec4 col = texture2D(tDiffuse, uv);",
            "col.r = texture2D(tDiffuse, uv-vec2(rshift, 0.0)).r;",
            "col.g = texture2D(tDiffuse, uv-vec2(gshift, 0.0)).g;",
            "col.b = texture2D(tDiffuse, uv-vec2(bshift, 0.0)).b;",
            "gl_FragColor = col;",
        "}"
    ].join('\n')
};