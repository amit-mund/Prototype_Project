//https://github.com/SAP/openui5/tree/master/src/sap.m
//All the Std Source Code
//https://blogs.sap.com/2016/07/19/how-to-extend-a-standard-ui5-control/

sap.ui.define([
	"sap/m/Input",
	"sap/m/InputRenderer"],
	function(Input,InputRenderer){
		"use strict";
		
		var CInput=Input.extend("Custom_control.Custom_control.control.CInput",{
			metadata:{
				properties:{
					numberOnly:{
						type:"boolean",
						defaultValue:false
					}
				},
				events:{
					cSubmit:{
						value:{ 
							type:"string" 
							
						}
					}
					
				}
				
			},
			init:function(){
				this.callSuper(Input,"init",this,arguments);
				this._oNonEditableText= new sap.m.Text({
					maxLines:2
				});
			},
			
			callSuper:function(funcParent,sMethod,oScope,aArgs){
				if(funcParent && funcParent.prototype[sMethod]){
				  return funcParent.prototype[sMethod].apply(oScope,aArgs);	
				}
				return null;
				
			},
			render:{
				render:function(oRm,oControl){
					return InputRenderer.render(oRm,oControl);
					
				}
			}
			
			
			
		});
		
	return CInput;	
	});
