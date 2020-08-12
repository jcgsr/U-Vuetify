<template>
  <div id="afinador">
    <h2 class="display-3 mb-3">Afinador</h2>
    <v-card class="mx-auto animate__animated animate__backInRight" max-width="544" outlined>
      <h2 style="color: blueviolet;">Mi (E)</h2>
      <audio controls>
        <source src="./tons/Mi82.mp3" type="audio/mp3" />
      </audio>

      <h2 style="color: orange;">Lá (A)</h2>
      <audio controls>
        <source src="./tons/La110.mp3" type="audio/mp3" />
      </audio>

      <h2 style="color: blue;">Ré (D)</h2>
      <audio controls>
        <source src="./tons/Re146.mp3" type="audio/mp3" />
      </audio>

      <h2 style="color: red;">Sol (G)</h2>
      <audio controls>
        <source src="./tons/Sol196.mp3" type="audio/mp3" />
      </audio>

      <h2 style="color: rgba(136, 241, 15, 0.932);">Si (B)</h2>
      <audio controls>
        <source src="./tons/Si247.mp3" type="audio/mp3" />
      </audio>

      <h2 style="color: blueviolet;">Mi (E)</h2>
      <audio controls>
        <source src="./tons/Mi330.mp3" type="audio/mp3" />
      </audio>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Afinador",
  data() {
    return {};
  },
  mounted() {
    document.addEventListener(
      "play",
      function (e) {
        var audios = document.getElementsByTagName("audio");
        for (var i = 0, len = audios.length; i < len; i++) {
          if (audios[i] != e.target) {
            audios[i].pause();
          }
        }
      },
      true
    );
  },
};
</script>
