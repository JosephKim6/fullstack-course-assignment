(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/main-categories.template.html',
    controller: 'CategoriesController as categoriesList',
    resolve: {
      categories: ['MenuDataService', function(MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('menu', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/templates/main-menu.template.html',
      controller: 'ItemsController as itemList',
      resolve: {
        items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }],
        title: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
          return MenuDataService.getTitleForCategory($stateParams.categoryShortName);
        }] 
      }
  });
}

})();