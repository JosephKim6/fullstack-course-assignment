(function() {

angular.module('public')
.controller('RegController', RegController)
.service('RegService', RegService);

RegController.$inject = ['$http', 'RegService']
function RegController($http, RegService) {
    var reg = this;
    reg.invalidShortName = false;
    reg.valid = false;

    reg.submit = function(){
        var response = $http({
            method: "GET",
            url: ("https://jin-ngcourse.herokuapp.com/menu_items/" + reg.user.favdish + ".json"),
        });
        response.then(function(response) {
            reg.invalidShortName = false;
            reg.valid = true;
            reg.name = response.data.name;
            reg.description = response.data.description;
            reg.style = {
                'border' : '2px green solid'
            };
            RegService.saveInfo(reg.user.firstname, reg.user.lastname, reg.user.email, reg.user.phone, reg.user.favdish, reg.name, reg.description);
        })
        .catch(function(error){
            reg.valid = false;
            reg.invalidShortName = true;
            reg.style = {
                'border' : '2px red solid'
            };
        })
    };
}

function RegService() {
    var service = this;

    service.saveInfo = function(firstname, lastname, email, phone, favdish, name, description) {
        service.firstname = firstname;
        service.lastname = lastname;
        service.email = email;
        service.phone = phone;
        service.favdish = favdish;
        service.name = name;
        service.description = description;
    }
}

})();