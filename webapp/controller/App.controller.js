sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.vesacons.testproject.controller.controller.App", {
        onInit() {
          this.oMainService = this.getOwnerComponent().getModel();
          this.oDataModel = this.getOwnerComponent().getModel("dataModel");
          // var aasd = new JSONModel({

          // });
          // this.getOwnerComponent().setModel(aasd, "/asd");
          this.getPersDatas();
        },

        getPersDatas(){
          var that = this;
          this.oMainService.read("/EmployeeSet", {
            success :  function (oData) {
              that.oDataModel.setProperty("/employees", oData.results);
              console.log(oData);
            },
            error : function (oResponse) {
              
            }
          });
        }

      });
    }
  );
  