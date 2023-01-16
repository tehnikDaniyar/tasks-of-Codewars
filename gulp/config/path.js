const srcFolder = "./src";
const buildFolder = "./dist";

export const path = {
	build: {
		js: `${buildFolder}/`,
		html: `${buildFolder}/*.html`,
	},
	src: {
		js: `${srcFolder}/**/*.js`,
	},
	watch: {
		js: `${srcFolder}/**/*.js`,
	},
	server: {
		html: `${buildFolder}/`,
	}
}