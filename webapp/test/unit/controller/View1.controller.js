/*global QUnit*/

sap.ui.define([
    "project1/controller/View1.controller", "sap/m/Button", "sap/ui/qunit/QUnitUtils", "sap/ui/qunit/utils/createAndAppendDiv",
	"sap/ui/thirdparty/sinon",
	"sap/ui/thirdparty/sinon-qunit"], function (Controller, Button, QUnitUtils, createAndAppendDiv) {
    "use strict";

    QUnit.module("Grupo 1 de pruebas funcionales");

    QUnit.test("Prueba de Funciones 1", function (assert) {
        //Arrange
        var oAppController = new Controller();
        
        //action
        oAppController.onInit();
        var x = oAppController.onFormat(20);
        
        //Assertions
        assert.strictEqual(2000, x, "el valor es adecuado");
        assert.ok(oAppController);

    });


});
