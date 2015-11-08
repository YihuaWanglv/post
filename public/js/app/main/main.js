// main.js
require.config({
	baseUrl: 'js/lib',　　　
	paths: {　　　　　　
		"jquery": "jquery.min",
		"bootstrap": "bootstrap/dist/js/bootstrap"　
	},
	map: {
        '*': {
            'css': 'require-css/css'
        }
    },
    shim : {
        "bootstrap": {
          deps: ["jquery"],
          exports: "$.fn.popover"
        }
    }
});
require(['jquery', 'bootstrap'], function($) {　　　　
	　
});