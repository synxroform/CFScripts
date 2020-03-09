// Write fragment code here...
#define providesInit
#include "DE-Raytracer.frag"
#include "MathUtils.frag"

mat3 rz;

void init() {
	rz = rotationMatrix3(vec3(0, 0, 1), 20);
}

float rnum(vec2 v) {
	return fract(sin(dot(v, vec2(12.9898, 78.233))) * 43758.5453);
}

float DE(vec3 pos) {
	float acc = 1000;
	vec3 p0 = vec3(0, 4, 0);

	for(int n = 0; n < 10;  n++) {
	 	acc = min(acc, distance(p0, pos) - (1 + rnum(p0)));
		p0 *= rz;
	}
	return acc;
}