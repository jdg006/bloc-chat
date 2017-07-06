(function() {
    function HomeCtrl(Room, Message) {
      this.title="Bloc Chat";
      this.rooms= Room.all;

      this.setCurrentRoom =function(room){
        this.currentRoom= room;
        this.messages=Message.getByRoomId(room.$id);
      };

    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
