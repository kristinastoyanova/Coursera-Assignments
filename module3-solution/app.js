(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .factory('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItem.html',
      scope: {
        items: '<',
        message: '<',
        onRemove: '&'
      }
    };

    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrow = this;

    narrow.found = [];
    narrow.removeMenuItem = removeMenuItem;
    narrow.searchMenuItem = searchMenuItem;
    narrow.searchTerm = '';

    function searchMenuItem(){
      narrow.loading = true;
      narrow.message = '';

      return MenuSearchService.getMatchedMenuItems(narrow.searchTerm)
          .then(function(data) {
            narrow.found = data;

            narrow.loading = false;
            if (narrow.found.length == 0) {
              narrow.message = 'Nothing found!';
            }
          })
          .catch(function(error) {

            narrow.loading = false;
            narrow.message = 'Error loading information';
          });
    }

    function removeMenuItem(index){
      narrow.found.splice(index, 1);
    }

  }

  MenuSearchService.$inject = ['$http', '$q']
  function MenuSearchService($http, $q) {
    var service = {
      getMatchedMenuItems: getMatchedMenuItems
    };

    return service;


    function getMatchedMenuItems(searchTerm) {

      if (searchTerm == '') {
        return $q.when([]);
      }

      return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json")
          .then(getMenuItemsComplete);

      function getMenuItemsComplete(data) {
        var foundItems = data.data.menu_items;

        foundItems = foundItems.filter(function(item) {
          return item.description.indexOf(searchTerm) !== -1;
        });
        return foundItems || [];
      }

    }

  }
})();
