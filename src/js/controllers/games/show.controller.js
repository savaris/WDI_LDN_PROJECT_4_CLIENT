angular
  .module('gameLibrary')
  .controller('GamesShowCtrl', GamesShowCtrl);

GamesShowCtrl.$inject = ['Game', '$stateParams'];
function GamesShowCtrl(Game, $stateParams){
  const vm = this;
  vm.game = Game.get($stateParams);
}
