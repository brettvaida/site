module.exports = {
	entry: {
		App: "./app/assets/scripts/App.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: {
		path: "./app/temp/scripts",
		filename: "[name].js"
	},
};