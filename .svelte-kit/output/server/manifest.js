export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CT3nliek.js",app:"_app/immutable/entry/app.DSU9VqgR.js",imports:["_app/immutable/entry/start.CT3nliek.js","_app/immutable/chunks/QtecJMpC.js","_app/immutable/chunks/qYnHO52x.js","_app/immutable/chunks/DIDEaxb-.js","_app/immutable/entry/app.DSU9VqgR.js","_app/immutable/chunks/qYnHO52x.js","_app/immutable/chunks/DiPtDTfY.js","_app/immutable/chunks/B4_PBko3.js","_app/immutable/chunks/DIDEaxb-.js","_app/immutable/chunks/BmULBgEw.js","_app/immutable/chunks/ELsUpCs9.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
