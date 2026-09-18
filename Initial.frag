#version 330 core

out vec4 FragColor;

uniform float time;
uniform vec2 resolution;

void main()
{
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    uv = uv * 2.0 - 1.0;

    float aspect = resolution.x / resolution.y;
    uv.x *= aspect;

    float distanceFromCenter = length(uv);
    float wave = sin(distanceFromCenter * 12.0 - time * 3.0);

    float intensity = 0.5 + 0.5 * wave;
    intensity *= 1.0 - smoothstep(0.2, 1.2, distanceFromCenter);

    vec3 color = vec3(
        intensity,
        intensity * 0.5,
        1.0 - intensity
    );

    FragColor = vec4(color, 1.0);
}