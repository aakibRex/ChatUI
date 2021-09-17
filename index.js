var data = [

  { message: "hi user", sender: "agent", createdAt: "2021-09-14T13:23:02.298Z", _id:1 },
  { message: "How are you doing today", sender: "user", createdAt: "2021-09-14T13:23:02.298Z", _id:2 },
  { message: "I am good, how about you", sender: "agent", createdAt: "2021-09-14T13:23:02.298Z" , _id:3 },
  { message: "I am good, thanks for asking", sender: "user", createdAt: "2021-09-14T13:23:02.298Z", _id:4  },
  { message: "How can i help you today?", sender: "agent", createdAt: "2021-09-14T13:23:02.298Z", _id:5  },

]

function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

window.onload = function getDataFromServer() {
  var parentDiv = document.getElementById("message-area");
  for (let i = 0; i < data.length; i++) {

    if (data[i].sender == "agent") {
      data[i].createdAt = new Date(data[i].createdAt);
      let time_ago = timeSince(data[i].createdAt);
      let html = '<div class="agent-msg-container"><img src="https://via.placeholder.com/15 "><div class="agent-msg" id="agent-msg">' + data[i].message + '</div><br><br><div class="agent-time-ago"><p>' + time_ago + ' ago</p></div></div>';
      parentDiv.innerHTML += html;

    }
    if (data[i].sender == "user") {
      data[i].createdAt = new Date(data[i].createdAt);
      let time_ago = timeSince(data[i].createdAt);
      let html = '<div class="user-msg-container"><img src="https://via.placeholder.com/15 "><div class="user-msg-box"><div class="user-msg" id="user-msg">' + data[i].message + '</div><br><br><div class="user-time-ago"><p>' + time_ago + ' ago</p></div></div>';
      parentDiv.innerHTML += html;
    }
  }
}
function send() {
  let id = data[data.length-1]._id;
  id +=1;
  let msg = { message: document.getElementById("msg").value, sender: "user", createdAt: new Date() , _id:id};
  data.push(msg);
  let time_ago = timeSince(msg.createdAt);
  let parentDiv = document.getElementById("message-area");
  let html = '<div class="user-msg-container"><img src="https://via.placeholder.com/15 "><div class="user-msg-box"><div class="user-msg" id="user-msg">' + data[data.length - 1].message + '</div><br><br><div class="user-time-ago"><p>' + time_ago + ' ago</p></div></div>';
  parentDiv.innerHTML += html;
  document.getElementById("msg").value = "";
}

