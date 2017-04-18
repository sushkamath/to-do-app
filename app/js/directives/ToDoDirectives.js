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