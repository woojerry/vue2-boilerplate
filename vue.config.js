module.exports = {
	devServer: {
		overlay: false, // 개발할 때 화면 lint error 안보이게 하기
	},
	css: {
		loaderOptions: {
			scss: {
				additionalData: `
					@import "~@/assets/scss/_variables.scss";
				`,
			},
		},
	},
};
