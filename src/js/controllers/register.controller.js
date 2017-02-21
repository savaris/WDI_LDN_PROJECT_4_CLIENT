angular
  .module('gameLibrary')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', '$state', 'CurrentUserService'];
function RegisterCtrl(User, $state, CurrentUserService){
  const vm = this;

  vm.register = () => {
    User.register(vm.user)
    .$promise
    .then(() => {
      CurrentUserService.getUser();
      $state.go('usersIndex');
    }, err => {
      console.log(err);
    });
  };
}
