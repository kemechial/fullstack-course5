(function () {
  'use strict';

  angular.module('data')
  .component('categories',{
    templateUrl:'src/Templates/categories.template.html',
    bindings: {
      cItems:'<'
    }
  });
})();
