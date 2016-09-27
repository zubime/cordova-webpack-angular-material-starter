import bottom   from "ngtemplate?prefix=service/!./bottom-sheet/bottom-sheet.html";

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
      controller:  'serviceTabBottomSheetCtrl',
      controllerAs: 'vm',
      locals: {categories:['Bike','Canoe','Boat'],services:['Workshop','Rental','Free']}
    }).then(function(clickedItem) {

    });
  };
}
export default ServiceTabDirectiveController;
