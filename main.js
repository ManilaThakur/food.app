			//$('#user-email').on('input',function() {
       // var email = $('#user-email').val()
       // var message = 'Welcome Back, ' + email;
       // $('.welcome-message').text(message);
   // });
// giving route to our app
   var foodieApp = angular.module('foodieApp',['ngRoute']);
   foodieApp.config(function ($routeProvider) {
 	$routeProvider
 	.when('/',{
 		templateUrl: 'pages/login.html',
 		controller: 'loginController'
 	})
 	.when('/home',{
 		templateUrl: 'pages/main.html',
 		controller: 'mainController'
 	})
  .when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
 })
// making controller for our aap
//main page controller
   foodieApp.controller('mainController',function($scope) {
	$scope.restaurants = [
	{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
  id: 1,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
	name: 'Oozo',
	address: 'Floor 1, Jalaram Commercial Centre, Near Ansa Industrial Estate, Saki Vihar Road, Sakinaka, Mumbai',
	location: 'Mumbai',
	category: 'Casual Dining, Bar',
	vote: '4.6',
	cuisines: 'Continental, Mexican, Korean, Japanese, Greek, Finger Food',
	cost: '1200',
  id: 2,
	hours: ' 12:30 PM to 1:30 AM',
	image: 'https://images.pexels.com/photos/280018/pexels-photo-280018.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
},
{
	name: 'Bombay AddA',
	address: '8th Floor, Nike Showroom Showroom Linking Road, Santacruz West, Mumbai',
	location: 'Mumbai',
	category: 'Casual Dining, Bar',
	vote: '4.3',
	cuisines: 'Healthy Food, Continental, Italian, North Indian',
	cost: '1800',
  id: 3,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'http://i.ndtvimg.com/i/2016-04/pasta-625_625x350_81461826302.jpg'
},
{
	name: 'Fusion Fantasea',
	address: '14B, Anil Roy Road, Southern Avenue, Kolkata',
	location: 'Kolkata',
	category: 'Casual Dining',
	vote: '4.3',
	cuisines: 'Goan, Cafe, Kerala, Mughlai, Seafood',
	cost: '700',
   id: 4,
	hours: ' 12 Noon to 4 PM, 6 PM to 11 PM',
	image: 'https://media-cdn.tripadvisor.com/media/photo-s/04/1e/c5/46/gazebo-spice-twist-restaurant.jpg'
},
{
	name: 'Joeys Pizza',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '3.9',
	cuisines: 'Modern Indian',
	cost: '2200',
  id: 5,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?w=940&h=650&auto=compress&cs=tinysrgb'
},
{
	name: 'Happy Hakka',
	address: 'Sector 6, Dwarka',
	location: 'Dwarka',
	category: 'Casual Dining',
	vote: '4.1',
	cuisines: 'Chinese, Asian, Thai',
	cost: '650',
  id: 6,
	hours: '12 Noon to 11 PM',
	image: 'http://i.ndtvimg.com/i/2016-04/thai-noodle-soup-625_625x350_51460529187.jpg'
},
{
	name: 'Big Chill',
	address: '68-A, Khan Market, New Delhi',
	location: 'New Delhi',
	category: 'Casual Dining, Bar',
	vote: '4.5',
	cuisines: 'Modern Indian',
	cost: '1500',
  id: 7,
	hours: ' 12 Noon to 11:30 PM',
	image: 'https://images.pexels.com/photos/357809/pexels-photo-357809.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
},
{
	name: 'Dragons Den',
	address: 'New 8/2, Old 5/2, MG Road, Adyar, Chennai',
	location: 'Chennai',
	category: 'Casual Dining, Bar',
	vote: '4.7',
	cuisines: 'Chinese, Asian',
	cost: '450',
  id: 8,
	hours: 'Today  11:45 AM to 4 PM, 7 PM to 11 PM',
	image: 'https://images.pexels.com/photos/464229/food-noodles-soup-pho-464229.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
}
]
})
//login page controller
  foodieApp.controller('loginController',function($scope,$location) {
  	$scope.goToHome = function() {
  		// console.log('Do Something')
  		$location.url('home')
  	}
  })
//restaurant page controller
  foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
    $scope.ingredients = [];
  	$scope.restaurantId = $routeParams.id;
  	var restaurants = [
  	{
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
    bestDish: {
            name: 'Diwan-mixed-grill',
            image: 'http://blog.bebuzzd.com/wp-content/uploads/2017/03/Diwan-mixed-grill.jpg'
          },
    id: 1,
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
  	name: 'Oozo',
  	address: 'Floor 1, Jalaram Commercial Centre, Near Ansa Industrial Estate, Saki Vihar Road, Sakinaka, Mumbai',
  	location: 'Mumbai',
  	category: 'Casual Dining, Bar',
  	vote: '4.6',
  	cuisines: 'Continental, Mexican, Korean, Japanese, Greek, Finger Food',
  	cost: '1200',
    id: 2,
  	hours: ' 12:30 PM to 1:30 AM',
  	image: 'https://images.pexels.com/photos/280018/pexels-photo-280018.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
  },
  {
  	name: 'Bombay AddA',
  	address: '8th Floor, Nike Showroom Showroom Linking Road, Santacruz West, Mumbai',
  	location: 'Mumbai',
  	category: 'Casual Dining, Bar',
  	vote: '4.3',
  	cuisines: 'Healthy Food, Continental, Italian, North Indian',
  	cost: '1800',
    id: 3,
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'http://i.ndtvimg.com/i/2016-04/pasta-625_625x350_81461826302.jpg'
  },
  {
  	name: 'Fusion Fantasea',
  	address: '14B, Anil Roy Road, Southern Avenue, Kolkata',
  	location: 'Kolkata',
  	category: 'Casual Dining, Bar',
  	vote: '4.3',
  	cuisines: 'Goan,Cafe, Kerala, Mughlai, Seafood',
  	cost: '700',
     id: 4,
  	hours: '12 Noon to 4 PM (Mon-Sun)',
  	image: 'https://media-cdn.tripadvisor.com/media/photo-s/04/1e/c5/46/gazebo-spice-twist-restaurant.jpg'
  },
  {
  	name: 'Joeys Pizza',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '3.9',
  	cuisines: 'Modern Indian',
  	cost: '2200',
    id: 5,
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?w=940&h=650&auto=compress&cs=tinysrgb'
  },
  {
    name: 'Happy Hakka',
  	address: 'Sector 6, Dwarka',
  	location: 'Dwarka',
  	category: 'Casual Dining',
  	vote: '4.1',
  	cuisines: 'Chinese, Asian, Thai',
  	cost: '650',
    bestDish: {
          	name: 'Three-Bean-Salad',
          	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
          },
    id: 6,
    hours: '12 Noon to 11 PM',
    image: 'http://i.ndtvimg.com/i/2016-04/thai-noodle-soup-625_625x350_51460529187.jpg'
  },
  {
  	name: 'Big Chill',
  	address: '68-A, Khan Market, New Delhi',
  	location: 'New Delhi',
  	category: 'Casual Dining, Bar',
  	vote: '4.5',
  	cuisines: 'Modern Indian',
  	cost: '1500',
    id: 7,
  	hours: ' 12 Noon to 11:30 PM',
  	image: 'https://images.pexels.com/photos/357809/pexels-photo-357809.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
  },
  {
  	name: 'Dragons Den',
  	address: 'New 8/2, Old 5/2, MG Road, Adyar, Chennai',
  	location: 'Chennai',
  	category: 'Casual Dining, Bar',
  	vote: '4.7',
  	cuisines: 'Chinese, Asian',
  	cost: '450',
    id: 8,
  	hours: 'Today  11:45 AM to 4 PM, 7 PM to 11 PM',
  	image: 'https://images.pexels.com/photos/464229/food-noodles-soup-pho-464229.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
  }
  ]
  //method for identification of food (veg or nonveg)
  	$scope.restaurant = restaurants[$routeParams.id - 1];
    console.log($scope.restaurant);
    $scope.getIngredients = function(url)  {
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key e3894b0b02784675bd3f9c68ff5cb799',
			'Content-Type': 'application/json'
		},
		'data': data
	}).then(function (response) {
    var ingredients = response.data.outputs[0].data.concepts;
    	for (var i =0;i < ingredients.length;i++) {
    	$scope.ingredients.push(ingredients[i].name);
    $scope.probabilityvalue.push(ingredients[i].value);
    	}
        }, function (xhr) {
        	console.log(xhr);
        })
	}
  $scope.ingredients = [];
  		$scope.probabilityvalue=[];

  		$scope.checkVegorNonVeg = function() {
  			var flag_quit =0;
  			ing_list = $scope.ingredients; //hard copy
  			prob_value= $scope.probabilityvalue;
  			var elements = prob_value.filter(function(a){return a > 0.75;});
  			ing_list.splice(elements.length,20)
  			var nonveg = ["egg","meat","bacon","chicken","sushi","pork","steak"];

  			for(j=0;j<ing_list.length;j++){
  				for(i=0;i<nonveg.length;i++){
  					if(ing_list[j] == nonveg[i]){
  						flag_quit=1;
  						break;
  					}
  				}
  			if(flag_quit==1){
  				$(".rest-extra").css("background-color", "red");
  				break;
  			}

  		}
  		if(flag_quit==0){$(".rest-extra").css("background-color", "green");}
  	}
});
