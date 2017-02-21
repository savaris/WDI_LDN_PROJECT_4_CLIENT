angular
  .module('gameLibrary')
  .controller('GamesIndexCtrl', GamesIndexCtrl);

GamesIndexCtrl.$inject = ['Game'];
function GamesIndexCtrl(Game){
  const vm = this;
  vm.games = Game.query();
}
