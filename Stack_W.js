function post() {
  var inputID = document.getElementById("primerInput");
  getInfo(inputID.value)
  inputID.value = null;
}

// async function getName() {
//   var response = await fetch("https://jsonplaceholder.typicode.com/users")
//     var data = await response.json();
//     return data; 
// }

var getInfo = async (id) => {
  var response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  var data = await response.json()
  var info = document.createTextNode(JSON.stringify(`User ID:${data.id}`));
  var title = document.createTextNode(JSON.stringify("Title: " + data.title));
  var body = document.createTextNode(JSON.stringify("Body: " + data.body));
  addResult(info,title,body);
};


function addResult(receivedId, receivedTitle, receivedBody) {
  var list = document.getElementById("blogList");
  var itemId = document.createElement("li");
  list.appendChild(itemId);
  itemId.appendChild(receivedId); //Insert ID
  itemId.appendChild(receivedTitle); //Insert Title
  var myDiv = document.createElement("div");
  itemId.appendChild(myDiv);     //Insert breakline
  itemId.appendChild(receivedBody); //Insert body

};


