<!DOCTYPE html>
<html lang="en" ng-app="planner">
  <head>
    <title> Financial Planner for Indians </title>
	<meta charset="UTF-8">
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
    <script>
	var myapp = angular.module('planner', []);
	myapp.controller('plancontrol', function($scope) {
	  $scope.name = 'Saravanakumar'
	  $scope.monthly_salary = 60000;
	  $scope.home_loan = 'have';
	  $scope.hra = 'own';
	  $scope.annual_salary = function(){
	    return $scope.monthly_salary * 12;
	  };
	  $scope.salary_wish = function(){
	    if (($scope.annual_salary() < 500000)){
		  return "Good";
		}
		else if (($scope.annual_salary() > 500000 && $scope.annual_salary() < 1500000)){
		  return "Great";
		}
		else if (($scope.annual_salary() > 1500000)){
		  return "Fantastic";
		} 
		else{
	    return 'Nice';
		}
	  };
	  $scope.home_loan_wish = function(){
	    if(($scope.home_loan == 'have')){
		  return 'Okay';
		}
		else {
		  return 'Awesome';
		}
	  };
	  $scope.hra_wish = function(){
	    if(($scope.hra == 'own')){
		  return 'Nice';
		}
		else {
		  return 'Good';
		}
	  };
	});
	</script>
  </head>
  <body>
    <h1>Your Financial Planner</h1>
    <div ng-controller="plancontrol">
      <p>My name is: <input type="text" ng-model="name" ng-init="name='Saravanakumar'">. And I earn <input type="text" ng-model="monthly_salary" ng-init="monthly_salary='60000'"> per month. I do <select ng-model="home_loan" ng-init="home_loan='have'"> <option selected="selected" value="have">have</option> <option value="do not have">do not have</option></select> a home loan. Further, I live in <select ng-model="hra"> <option selected="selected" value="own" ng-init="hra='own'"> my own house</option> <option value="rented" ng-int="hra='rented'"> a rental house</option></select> </p>
      <h1>Hello {{name}}.</h1> 
	  <h3>Wow! You earn {{annual_salary()}} per annum. That's {{salary_wish()}}!!</h3>
	  <h3>And you {{home_loan}} home loan. That's {{home_loan_wish()}}!!</h3>
	  <h3>Also you live in {{hra}} house. That's sounds {{hra_wish()}}!!</h3>
    </div>	
  </body>
</html>
