const ngToDo = angular.module('ngToDo', ['toDoFilters', 'toDoDirectives'])
  .config(() => {

  })
  .run(['$rootScope', '$window', ($rootScope, $window) => {
  	console.log('App running.!')
  }]);