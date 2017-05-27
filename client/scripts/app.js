//App.js
var app = {}; 

app.init = function () {
  var URL = 'http://parse.sfm6.hackreactor.com/';
  // $.jQuery.ajax(URL, {
  //   accepts: String, 
  //   }
};

app.send = function(message) {
  $.ajax({
    url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
    type: 'POST',
    data: JSON.stringify(message), 
    contentType: 'application/json',
    success: function(data) {
      console.log('chatterbox: Messages Sent' + data);
    },
    error: function(data) {
      console.log('chatterbox: Didnt Send Message');
    }
  });
};

//app.send('Hoy');

app.fetch = function() {
  $.ajax({
    type: 'GET',
    data: JSON.stringify(message), 
    contentType: 'application/json',
    success: function(data) {
      console.log('chatterbox: Messages Fetched' + data);
    },
    error: function(data) {
      console.log('chatterbox: Didnt Fetch Message');
    }
  });
};

app.clearMessages = function() {
  $('#chats').empty();
};

app.renderMessage = function(message) {
  $('#chats').prepend(`<li>  ${message.text}  </li>`);
};

app.renderRoom = function(roomSelect) {
  $('#roomSelect').prepend(`<li>  ${roomSelect.text}  </li>`);
};

app.handleUsernameClick = function() {

};

app.handleSubmit = function() {

};


//Display messages retrieved from the parse server.


// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request

  
// Set another completion function for the request above


//Setup a way to refresh the displayed messages (either automatically or with a button)

//Allow users to select a user name for themself and to be able to send messages

//protect your app against cross-site scripting (XSS)