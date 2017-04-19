
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