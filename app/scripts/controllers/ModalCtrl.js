(function(){
function ModalCtrl ($uibModal, $log, Room) {

  this.animationsEnabled = true;

  this.open = function () {

    var modalInstance = $uibModal.open({
      animation: this.animationsEnabled,
      templateUrl: '/templates/modal.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',

    });

    modalInstance.result.then(function (name) {
      //console.log(name);
      var room={
        name:name

      };
      Room.add(room)
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    this.toggleAnimation = function () {
      this.animationsEnabled = !this.animationsEnabled;
    };
  }
  angular
    .module('blocChat')
    .controller('ModalCtrl',['$uibModal','$log','Room', ModalCtrl])
})();
