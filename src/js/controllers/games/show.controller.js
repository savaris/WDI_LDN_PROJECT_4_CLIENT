angular
.module('gameLibrary')
.controller('GamesShowCtrl', GamesShowCtrl);

GamesShowCtrl.$inject = ['Game', 'Library', '$stateParams', 'CurrentUserService'];
function GamesShowCtrl(Game, Library, $stateParams, CurrentUserService){
  const vm = this;

   CurrentUserService.currentUser.library.forEach((game) => {
    if ($stateParams.id == game.game_id) {
      vm.library = game;
    } else {
      vm.library = { played: false, owned: false };
    }
  })
  console.log(vm.library);

  vm.game = Game.get($stateParams);
}
