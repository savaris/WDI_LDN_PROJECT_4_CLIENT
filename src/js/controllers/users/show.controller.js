angular
  .module('gameLibrary')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams'];
function UsersShowCtrl(User, $stateParams){
  const vm = this;
  User
  .get($stateParams)
  .$promise
  .then(data => {
    console.log(data);
    vm.user = data;
    vm.gamesOwned = vm.user.libraries.filter(a => {
      return a.owned;
    });
    vm.gamesPlayed = vm.user.libraries.filter(a => {
      return a.played;
    });
    console.log(vm.gamesOwned, vm.gamesPlayed);
  });

}
