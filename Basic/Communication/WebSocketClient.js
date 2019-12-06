// ws://echo.websocket.org provides Echo Test, sending back the message it received 
const socket = new WebSocket("ws://echo.websocket.org");

socket.onopen = event => console.log("opened", event);
socket.onerror = error => console.log("Error:", error);
socket.onmessage = event => console.log("received: ", event.data);
socket.onclose = event => console.log("closed", event);


socket.send("test1");
// why receive?

socket.close();