angular
  .module('gameLibrary')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/js/views/register.html',
      controller: 'RegisterCtrl',
      controllerAs: 'register'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/js/views/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: '/js/views/users/show.html',
      controller: 'UsersShowCtrl',
      controllerAs: 'usersShow'
    })
    .state('gamesIndex', {
      url: '/games',
      templateUrl: '/js/views/games/index.html',
      controller: 'GamesIndexCtrl',
      controllerAs: 'gamesIndex'
    })
    .state('gamesShow', {
      url: '/games/:id',
      templateUrl: '/js/views/games/show.html',
      controller: 'GamesShowCtrl',
      controllerAs: 'gamesShow'
    });

  $urlRouterProvider.otherwise('/');
}
