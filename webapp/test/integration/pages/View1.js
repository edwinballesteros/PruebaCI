sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press"
], function (Opa5,Press) {
    "use strict";
    var sViewName = "View1";
    Opa5.createPageObjects({
        onTheAppPage: {

            actions: {},

            assertions: {

                iShouldSeeTheApp: function () {
                    return this.waitFor({
                        id: "app",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "La vista " + sViewName + " Se está mostrando");
                        },
                        errorMessage: "Did not find the " + sViewName + " view"
                    });
                }
            }
        },
        onTheClickPage: {

            actions: {},
            assertions: {
                iPressOnButton: function (oActionProperties) {
                    var actionObject = {};
                    if (oActionProperties.id) { actionObject.id = oActionProperties.id.isRegex ? oActionProperties.id.value : new RegExp(oActionProperties.id.value); }
                    if (oActionProperties.controlType) { actionObject.controlType = oActionProperties.controlType; }
                    actionObject.visible = true;
                    actionObject.actions = [new Press()];
                    actionObject.success = function () { Opa5.assert.ok(true, "Press successful."); };
                    actionObject.errorMessage = "Failed to click";
                    actionObject.matchers =
                        oActionProperties.attributes ?
                            oActionProperties.attributes.map(function (el) {
                                return new PropertyStrictEquals({ name: Object.keys(el)[0], value: Object.values(el)[0] });
                            }) : [];
                    return this.waitFor(actionObject);
                }
            }
        }
    });

});
