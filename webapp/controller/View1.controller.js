sap.ui.define([
    'sap/m/MessageToast',
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (MessageToast,Controller) {
		"use strict";

		return Controller.extend("project1.controller.View1", {
			onInit: function () {

            },
            onPress: function (evt) {
            MessageToast.show(evt.getSource().getId() + " Pressed");
            //this.byId("pressMeButton").setText("I got pressed");
            }
            ,
            onFormat: function (iVal){
                return iVal * 1000;
            }
		});
	});
