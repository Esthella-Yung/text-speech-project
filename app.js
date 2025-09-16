function convertText() {
  const text = document.getElementById("textInput").value;
  const status = document.getElementById("status");
  const audioPlayer = document.getElementById("audioPlayer");

  if (!text.trim()) {
    alert("Please enter some text!");
    return;
  }

  // Placeholder (Backend not ready yet)
  status.innerText = "🔄 Sending request to backend...";
  
  // Simulate backend response
  setTimeout(() => {
    status.innerText = "Backend will process this text soon!";
    audioPlayer.src = ""; // Later this will be your audio file link
  }, 1000);
}
