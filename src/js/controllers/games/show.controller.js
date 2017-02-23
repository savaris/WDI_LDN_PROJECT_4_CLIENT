angular
.module('gameLibrary')
.controller('GamesShowCtrl', GamesShowCtrl);

GamesShowCtrl.$inject = ['$scope', '$sce', '$state','User', 'Game', 'Library', '$stateParams', 'CurrentUserService', 'Comment'];
function GamesShowCtrl($scope, $sce, $state, User, Game, Library, $stateParams, CurrentUserService, Comment){
  const vm = this;

  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  };
  $(document).ready(function(){
    $('.carousel').carousel();
  });

  $('#modal1').modal();
  $('#modal2').modal();

  vm.user = User.get({id: CurrentUserService.currentUser.id});

  setTimeout(function(){
    let count = 1;
    console.log(vm.user.libraries);
    if(vm.user.libraries.length === 0) {
      console.log('this one')
      saveNewGame();
    } else {
      vm.user.libraries.forEach(game => {
        count++;
        if ($stateParams.id == game.game.id && !vm.library) {
          vm.library = game;
          console.log(vm.library, 'library found');
        } else if (count > vm.user.libraries.length && !vm.library){
          saveNewGame();
        }
      });
    }
    $scope.$apply();
  }, 500);


  vm.game = Game.get($stateParams);

  vm.submitComment = () => {
    if (vm.newComment && vm.newComment.body && vm.newComment.body.length){
      vm.newComment.game_id = $stateParams.id;
      Comment
      .save({comment: vm.newComment})
      .$promise
      .then(data => {
        vm.game.comments.unshift(data);
        vm.newComment = {};
      });
    }
  };

  function saveNewGame(){
    const object = {
      played: false,
      owned: false,
      user_id: CurrentUserService.currentUser.id,
      game_id: parseInt($stateParams.id)
    };
    Library
    .save({ library : object })
    .$promise
    .then(data => {
      console.log('we now have this new game');
      vm.library = data;
    });

  }
  vm.updateLibrary = function(){
    Library
    .update( {id: vm.library.id}, { library: vm.library })
    .$promise
    .then(data => {
      vm.library = data;
      console.log('success', data);
      $state.go('gamesIndex');
    });
  };
}
