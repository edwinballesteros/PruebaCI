/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/View1"
], function (opaTest) {
	"use strict";

	QUnit.module("Navigation");

	opaTest("Aca la primera prueba", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// Assertions
		Then.onTheAppPage.iShouldSeeTheApp();

		//Cleanup
		Then.iTeardownMyApp();
    });
    	opaTest("Aca la prueba de click button", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// Assertions
		Then.onTheClickPage.iPressOnButton({controlType: "sap.m.Button", id: {value: "bEdit",isRegex: false}});

		//Cleanup
		Then.iTeardownMyApp();
	});
});
