angular
  .module('gameLibrary')
  .factory('Library', libraryFactory);

libraryFactory.$inject = ['API', '$resource'];
function libraryFactory(API, $resource){
  return $resource(`${API}/libraries/:id`, { id: '@_id'});
}
