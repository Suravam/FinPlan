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

	myapp.controller('taxcontroller', [ "$scope", function($scope) {
		$scope.user = {
			age : function(newage){ return arguments.length ? newage : "27"; },
			gross_salary : 900000,
			basic_pay : 40000,
			city : metro,
			rent_paid : 28000,
			gorss_hra : 336000,
			conveyance : 1600,
			other_allowance : 0,
			prof_tax : 2500,
			applicable_hra : 0,
			salary_head : 0
		};
		$scope.master = {};
		$scope.update = function(user) {
                  $scope.master = angular.copy(user);
                };

		$scope.reset = function(form) {
                if (form) {
                  form.$setPristine();
                  form.$setUntouched();
                }
                $scope.user = angular.copy($scope.master);
                };
		$scope.calculate_hra = function() {
			var hra_list = [];
			var hra = 9999999;
			var ten_per_of_basic = $scope.user.basic_pay / 10;
			hra_list[0] = ($scope.user.rent_paid - ten_per_of_basic) * 12;
			hra_list[1] = ($scope.user.basic_pay / 2) * 12;
			hra_list[2] = $scope.user.gross_hra;
			for(i=0;i<hra_list.length;i++){
				if(hra > hra_list[i]){
					hra = hra_list[i];
				}
			}
			$scope.user.applicable_hra = hra;
			return hra;
		};

		$scope.calculate_sec10_salary = function(){
			$scope.user.salary_head = $scope.user.gross_salary - $scope.user.applicable_hra - $scope.user.prof_tax - $scope.user.other_allowance - $scope.user.conveyance * 12;
			return $scope.user.salary_head;
		};
            
                $scope.reset();
	}]);
