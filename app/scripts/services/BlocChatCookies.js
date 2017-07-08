(function() {
  function BlocChatCookies($cookies, $uibModal, $log) {



    var currentUser = $cookies.get('blocChatCurrentUser');

    if (!currentUser || currentUser === '') {

      this.animationsEnabled = true;

    var modalInstance= $uibModal.open({
        animation: this.animationsEnabled,
        templateUrl: '/templates/usernameModal.html',
        controller: 'UsernameModalCtrl as usernameModal',
      });
        modalInstance.result.then(function (username) {

          $cookies.put('blocChatCurrentUser',username);

        });


      }

}



  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal','$log', BlocChatCookies]);
})();
