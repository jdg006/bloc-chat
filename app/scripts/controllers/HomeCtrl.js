(function() {
    function HomeCtrl(Room, Message, $cookies) {
      this.title="Bloc Chat";
      this.rooms= Room.all;
      var date=new Date(new Date().getTime()).toLocaleString();
      this.setCurrentRoom =function(room){
        this.currentRoom= room;
        this.messages=Message.getByRoomId(room.$id);
      };

      this.send=function (message){
        var messageObject={
          content: message,
          roomId:this.currentRoom.$id,
          sentAt: date,
          username: $cookies.get('blocChatCurrentUser')
        }
        Message.send(messageObject);
      }

    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();
