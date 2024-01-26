const audio = new Audio();

async function getDataSongs() {
  const folderPath = "E:/Rehan_Faryad/Checking project/songs"; // Specify the actual path to your songs directory

  try {
    const response = await fetch('songs.json'); // Update this with the actual JSON file path
    const files = await response.json();
    return files.map(file => `${folderPath}/${file}`);
  } catch (err) {
    console.error("Error fetching songs:", err);
    throw err;
  }
}

async function main() {
  try {
    const songs = await getDataSongs();

    songs.forEach((e) => {
      let card = document.createElement("div");
      let Name;
      Name = e.split("/songs/")[1].replace("%", " ").replace(".mp3", " ");
      card.classList.add("card");
      card.innerHTML = `<h1><b>${Name}</b></h1>
        <button class="play">Play</button>
        <input type='range' min='0' value='0'>
        <button class="pause" disabled="true">Pause</button>`;
      document.querySelector(".allSongs").appendChild(card);
      
      card.querySelector(".play").addEventListener("click", () => {
        audio.src = e;
        card.querySelector(".play").disabled = true;
        card.querySelector(".pause").disabled = false;
        audio.play();
        audio.addEventListener("loadedmetadata", () => {
          card.querySelector("input").setAttribute("max", audio.duration);
        });
        audio.addEventListener("timeupdate", () => {
          card.querySelector("input").value = audio.currentTime;
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
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
