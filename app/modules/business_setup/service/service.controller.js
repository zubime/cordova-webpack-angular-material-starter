import bottom   from "ngtemplate?prefix=service/!./bottomMenu/bottom-sheet.html";

class ServiceTabDirectiveController{
  constructor($scope,$mdBottomSheet){
      'ngInject';
      $scope.alert = '';
      this.$scope = $scope;
      this.$mdBottomSheet = $mdBottomSheet;
  }
  doSecondaryAction (){
    alert('hello');
  }

  showListBottomSheet () {
    this.$mdBottomSheet.show({
      templateUrl: bottom,
      controller:  'serviceTabBottomSheetCtrl'
    }).then(function(clickedItem) {

    });
  };
}
export default ServiceTabDirectiveController;
