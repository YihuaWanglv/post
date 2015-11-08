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
          //deps: ["jquery", 'css!../lib/bootstrap/dist/css/bootstrap.min.css'],
          exports: "$.fn.popover"
        }
    }
});
require(['jquery', 'bootstrap'], function($) {　　　　
	//alert($('#test-input').val());　　
});