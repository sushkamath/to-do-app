const ngToDo = angular.module('ngToDo', ['toDoFilters', 'toDoDirectives'])
  .config(() => {

  })
  .run(['$rootScope', '$window', ($rootScope, $window) => {
  	console.log('App running.!')
  }]);
angular.module('toDoFilters', []).filter('altCaps', () => {
	return (input) => {
		var charArray = input.split('');
		charArray = charArray.map((char, index) => {
			return index % 2 === 0 ? char.toUpperCase(char) : char.toLowerCase(char);
		});
		return charArray.join('');
	}
});
angular.module('toDoDirectives', []).directive('completeColor', () => {
  return {
    restrict: 'A',
    link(scope, element, attrs) {
      scope.$watch(attrs.completeColor, (value) => {
        element.css('color', (value ? 'blue' : 'limegreen'));
      });
    }
  }
});

	ngToDo.controller('toDoCtrl', ['$rootScope','$scope', 'altCapsFilter', ($rootScope, $scope, altCapsFilter) => {

		$scope.todos = [
			{ isComplete: false, val: 'My first todo.'},
			{ isComplete: true, val: 'My other todo.'},
			{ isComplete: false, val: 'Make your todo.'},
			{ isComplete: true, val: 'Try this todo.'},
			{ isComplete: false, val: 'Hello ToDo.'}
		];

		$scope.isDisabled = false;

		$scope.checkCompleteState = () => {
			$scope.isDisabled = !$scope.isDisabled;
		};

		$scope.addNewTask = () => {
			console.log("Adding new task - ", $scope.newTask);
			if($scope.newTask !== undefined) {
				$scope.todos.unshift( {isComplete: false, val: altCapsFilter($scope.newTask)} );
				$scope.newTask = '';
			}
		};

		$scope.clearCompleted = () => {
			console.log("Clearing completed tasks.");
			$scope.todos = $scope.todos.filter((todo) => {
				return !todo.isComplete;
			});
			$scope.isDisabled = true;
		};

		$scope.deleteToDo = (index) => {
			console.log("Deleting this task.");
			$scope.todos.splice(index, 1);
		};
	}]);
//# sourceMappingURL=app.js.map