(function () {
  'use strict';

  angular.module('data')
  .component('items',{
    templateUrl:'src/Templates/items.template.html',
    bindings: {
      mItems:'<'
    }
  });
})();
