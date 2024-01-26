async function getDataSongs() {
  // let a = await fetch("http://127.0.0.1:3000/songs/");
  let a = await fetch("/songs/");
  // let a = await fetch("/songs/");
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let allSongs = [];
  let as = div.getElementsByTagName("a");
  for (let i = 1; i < as.length; i++) {
    let element = as[i];
    if (element.href.endsWith(".mp3")) {
      allSongs.push(element.href);
    }
  }
  return allSongs;
}
// 
document.querySelector('.start').addEventListener('click', playAllSongs);

async function playAllSongs() {
  let songs = await getDataSongs();
  let loopCheckbox = document.querySelector('#gg');
  let loopAll = loopCheckbox && loopCheckbox.checked;

  let currentIndex = 0;
  let audio;

  // Function to play a song
  function playSong() {
    if (currentIndex < songs.length) {
      audio = new Audio(songs[currentIndex]);
      audio.play();

      // Wait for the song to finish before playing the next one
      audio.addEventListener('ended', function () {
        if (loopAll || currentIndex + 1 < songs.length) {
          currentIndex = (currentIndex + 1) % songs.length;
          playSong();
        }
      });
    }
  }

  // Start playing the songs
  playSong();

  // Pause button click event
  let stopButton = document.querySelector('.stop');
  if (stopButton) {
    stopButton.addEventListener('click', function () {
      if (audio) {
        audio.pause();
      }
    });
  }
}


// 
let audio = new Audio();
let main = async () => {
  let songs = await getDataSongs();
  let i = 0;
  songs.forEach((e) => {
    i++;
    let card = document.createElement("div");
    let Name;
    Name = e.split("/songs/")[1].replace("%", " ").replace(".mp3", " ");
    card.classList.add("card");
    card.innerHTML = `<h1><b>${Name}</b></h1>
        <button class="play">Play</button>
        <input type = 'range' min='0'value='0'>
        <button class="pause">Pause</button>`;
    document.querySelector(".allSongs").appendChild(card);
    card.querySelector(".pause").disabled = `true`;
    card.querySelector(".play").addEventListener("click", () => {
      audio = new Audio(e);
      card.querySelector(".play").disabled = true;
      card.querySelector(".pause").disabled = false;
      audio.play();
      audio.addEventListener("loadedmetadata", () => {
        card.querySelector("input").setAttribute("max", audio.duration);
      });
      audio.addEventListener("timeupdate", () => {
        card.querySelector("input").value = audio.currentTime;
        let boxch = document.querySelector("input[id='ggg']")
        if(boxch && boxch.checked) {
          audio.loop = true;
        }
      });
    });

    card.querySelector("input").addEventListener("input", () => {
      audio.currentTime = card.querySelector("input").value;
    });

    card.querySelector(".pause").addEventListener("click", () => {
      card.querySelector(".play").disabled = false;
      card.querySelector(".pause").disabled = true;
      audio.pause();
    });
  });
};
main();
console.log(audio.duration);
