angular
  .module('gameLibrary')
  .factory('Game', gameFactory);

gameFactory.$inject = ['API', '$resource'];
function gameFactory(API, $resource){
  return $resource(`${API}/games/:id`, { id: '@_id'});
}
