
var app = {
  server: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
  data: '',
}; 

app.init = function () {
  app.clearMessages();
  app.fetch();
  
  app.handleDropDownChange();
  app.handleSubmit();
  setInterval(app.callRenderMessage(this.data, 'All'), 3000);

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
    _data: 'order=-createdAt', 
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
      app.renderMessage(arr[i].text);  
      app.renderName(arr[i].username);
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
  //$('#msgInput').val("");
};

app.handleDropDownChange = function() {
  $('#roomSelect').on('change', function() {
    console.log($('#roomSelect').val());
    app.clearMessages();
    var arr = app.data;
    app.callRenderMessage(arr, $('#roomSelect').val());
  });
};

app.handleUsernameClick = function() {
  $('#mit').on('click', object[i].username, app, function(username) {
    //event.preventDefault();
    friendList.push(object[i].username);
  });
};

app.init();
