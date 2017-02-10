(function() {

angular.module('public')
.controller('InfoController', InfoController)

InfoController.$inject = ['RegService'];
function InfoController(RegService) {
    var info = this;
    info.firstname = RegService.firstname;
    info.lastname = RegService.lastname;
    info.email = RegService.email;
    info.phone = RegService.phone;
    info.favdish = RegService.favdish;
    info.name = RegService.name;
    info.description = RegService.description;
    info.showContent = info.firstname? true : false;
    info.showError = info.firstname? false : true;
}

})();
