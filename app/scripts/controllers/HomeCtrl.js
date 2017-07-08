(function() {
    function HomeCtrl(Room, Message) {
      this.title="Bloc Chat";
      this.rooms= Room.all;

      this.setCurrentRoom =function(room){
        this.currentRoom= room;
        this.messages=Message.getByRoomId(room.$id);
      };

      this.send=function (message){
        var messageObject={
          content: message,
          roomId:this.currentRoom.$id,
          sentAt: "today",
          username: "joe"
        }
        Message.send(messageObject);
      }

    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
