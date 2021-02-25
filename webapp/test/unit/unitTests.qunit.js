/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comlearnui5.sample.ExpandableText./expandabletext/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
