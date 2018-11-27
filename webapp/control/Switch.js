sap.ui.define(
    ['sap/m/Switch'],
    function(Switch) {
        return Switch.extend("dalrae.ui.controls.Switch",{
            metadata: {
                properties: {
                    editable: {
                        type: "boolean",
                        defaultValue: true
                    }
                }
            },
            renderer: function(oRm,oControl){
                sap.m.SwitchRenderer.render(oRm,oControl); //use supercass renderer routine
    
            }
        });
    }
);
