var gridApp = angular.module("gridApp", []);
gridApp.controller('appController', function ($scope) {
    $scope.clicked = true;
    $scope.descriptionClicked = false;
    $scope.titleClicked = false;

    $scope.times = [
        { i: { d: "Add Description", t: "Add Title", clicked: false }, j: { d: "Add Description", t: "Add Title", clicked: false }, k: { d: "Add Description", t: "Add Title", clicked: false } },
        { i: { d: "Add Description", t: "Add Title", clicked: false }, j: { d: "Add Description", t: "Add Title", clicked: false }, k: { d: "Add Description", t: "Add Title", clicked: false } },
        { i: { d: "Add Description", t: "Add Title", clicked: false }, j: { d: "Add Description", t: "Add Title", clicked: false }, k: { d: "Add Description", t: "Add Title", clicked: false } }
    ]
    $scope.linkClicked = function (column, linkType) {
        column.clicked = true;
        $scope.descriptionClicked = linkType === 'd' ? true : false;
        $scope.titleClicked = linkType === 't' ? true : false;
    }
});