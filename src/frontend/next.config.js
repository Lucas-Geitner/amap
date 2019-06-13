// @ts-ignore
// @ts-nocheck
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(
	withSass({
		target: 'serverless'
	})
);
// Module.exports = withTypescript({
// /* config options here */

//   withSass()
// })
