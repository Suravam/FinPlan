	var myapp = angular.module('planner', []);
	myapp.controller('plancontrol', [ "$scope", function($scope) {
	  $scope.monthly_salary = 60000;
	  $scope.home_loan = 'have';
	  $scope.hra = 'own';
	  $scope.data = {
		home_emi: 26000,
		house_tax: 15000,
		rent: 27000,
	  }
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
	  $scope.getAnnualNetIncome = function(){
		  var income = parseFloat($scope.annual_salary());
		  var expense_monthly = parseFloat($scope.other_emi);
		  var expense_yearly = parseFloat($scope.life_insurance) + parseFloat($scope.health_insurance);
		  if(($scope.home_loan == 'have')){
			  expense_monthly = expense_monthly + parseFloat($scope.data.home_emi);
		  }
		  if(($scope.hra == 'own')){
			  expense_yearly = expense_yearly + parseFloat($scope.data.house_tax);
		  }
		  else{
			  expense_monthly = expense_monthly + parseFloat($scope.data.rent);
		  }
		  var annualised_expense = expense_monthly * 12;
		  return income - annualised_expense - expense_yearly;
	  };
	  $scope.getEmergencyFund = function(){
		  var three_month_salary = $scope.monthly_salary * 3;
		  return three_month_salary;
	  };
	  $scope.getEmergencyReadiness = function(){
		  if(($scope.emergency == 0)){
			  return 'For your family sake. Start saving for emergencies!!!';
		  }
		  if(($scope.getEmergencyFund() > $scope.emergency)){
			  return 'But you have less';
		  }
		  else{
		  	  return 'And you are ready for it. Great going.!';
		  }
	  };
	}]);
