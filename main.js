			//$('#user-email').on('input',function() {
       // var email = $('#user-email').val()
       // var message = 'Welcome Back, ' + email;
       // $('.welcome-message').text(message);
   // });
   
   var foodieApp = angular.module('foodieApp',[]);
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
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
	name: 'Oozo',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.6',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/496970/pexels-photo-496970.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
},
{
	name: 'Bombay AddA',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
},
{
	name: 'Fusion Fantasea',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.4',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/511679/pexels-photo-511679.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
},
{
	name: 'Joeys Pizza',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '3.9',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
},
{
	name: 'Happy Hakka',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/22420/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb'
},
{
	name: 'Fort 001',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '3.9',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/357809/pexels-photo-357809.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
},
{
	name: 'Burma Burma',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.7',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/464229/food-noodles-soup-pho-464229.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
}
]
})