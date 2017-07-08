(function (){
  function UsernameModalCtrl($uibModalInstance){

    this.ok = function (username) {
      if(username==''){alert("username cannot be white space")}
      else{$uibModalInstance.close(username);}
    };
  }


  angular
  .module('blocChat')
  .controller('UsernameModalCtrl',['$uibModalInstance', UsernameModalCtrl]);
})();
