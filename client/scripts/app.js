
var app = {
  server: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
  data: '',
}; 

app.init = function () {
  app.clearMessages();
  app.fetch();
  app.handleDropDownChange();
  app.handleSubmit();

};

//sends object to the server
app.send = function(message) {
  $.ajax({
    url: app.server,
    type: 'POST',
    data: JSON.stringify(message), 
    contentType: 'application/json',
    success: function(data) {
      console.log('chatterbox: Message Sent ' + data);
      
    },
    error: function(data) {
      console.log('chatterbox: Didnt Send Message');
    }
  });
};

//gets the data from the server
app.fetch = function() {
  $.ajax({
    url: app.server,
    type: 'GET',
    _data: '', 
    contentType: 'application/json',
    success: function(_data) {
      app.callRenderMessage(_data.results);
      app.callRenderRoom(_data.results);

      console.log('chatterbox: Messages Fetched' + _data);
      app.data = _data.results;
    },
    error: function(_data) {
      console.log('chatterbox: Didnt Fetch Message');
    }
  });
};

//removes all the children of chats
app.clearMessages = function() {
  $('#chats').empty();
};

//helper fildering the name and the messege 
app.callRenderMessage = function(arr, r) {
  app.clearMessages();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].roomname === r) {
      app.renderName(arr[i].username);
      app.renderMessage(arr[i].text);  
    }
  }
};

//displays to text screen
app.renderMessage = function(message) {
  $('#chats').prepend(`<li>  ${message}  </li>`);
};
// displays name to the screen 
app.renderName = function(message) {
  $('#chats').prepend(`<li> <strong> ${message} </strong> </li>`);
};

//getting the roomnames for the data and filtering it
app.callRenderRoom = function(arr) {
  var rooms = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].roomname) {
      rooms.push(arr[i].roomname);
    }
  }
  var r = _.uniq(rooms);
  for (var i = 0; i < r.length; i++) {
    app.renderRoom(r[i]);
  }
};

//display roomname
app.renderRoom = function(room) {  
  $('#roomSelect').append(`<option> ${room} </option>`);
};

//Submit user message & click button; creates object
app.handleSubmit = function() {
  var m = {
    username: 'Sara',
    text: '',
    roomname: 'Dance'
  };
  $('#mit').on( 'click', function() {
    m.text = $('#msgInput').val();
    app.send(m);
  });
};

app.handleDropDownChange = function() {
//   $('#roomSelect').on('change', function() {
//     app.clearMessages();
//     //app.fetch();
//     //app.callRenderMessage(_.filter(arr, function)
//     //app.init();
//     // if ($(this).val() === 'selectionKey') {
//     //   app.callRenderMessage();
//     // } 
//     //app.send(m);
//   });
};

app.handleUsernameClick = function() {
  $('mit').on('click', username, _data, function(username) {
    event.preventDefault();
    friendList.push(object[key][i]['username']);
  });
};
