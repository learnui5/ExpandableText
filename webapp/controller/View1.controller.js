sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel'
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("com.learnui5.sample.ExpandableText.expandabletext.controller.View1", {
			onInit: function () {
				var oData = {
					name: "Product 1",
					attribute1: "The full text is displayed in place. Lorem ipsum dolor sit amet, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
					attribute2: "Attribute related to label",
					status: "Some status",
					overflowMode: sap.m.ExpandableTextOverflowMode.InPlace
				};
	
				// create a Model with this data
				var oModel = new JSONModel(oData);
				this.getView().setModel(oModel);
			}
		});
	});
