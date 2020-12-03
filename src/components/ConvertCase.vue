 <template>
  <div class="convert-case">
    <v-card
      class="mx-auto mb-3 animate__animated animate__backInRight"
      width="544"
      outlined
    >
      <v-card-title>MAIÚSCULAS</v-card-title>
      <v-input>
        <v-textarea
          @focus="$event.target.select()"
          type="text"
          name="text1"
          v-model="text1"
        ></v-textarea>
      </v-input>
      <v-btn class="animate__animated animate__tada mb-4" @click="zerar"
        >limpar</v-btn
      >
      <h2 class="display-3">{{ result1 }}</h2>
    </v-card>

    <v-card
      class="mx-auto mb-3 animate__animated animate__backInRight"
      width="544"
      outlined
    >
      <v-card-title>minúsculas</v-card-title>
      <v-input>
        <v-textarea
          @focus="$event.target.select()"
          type="text"
          name="text2"
          v-model="text2"
        ></v-textarea>
      </v-input>
      <v-btn class="animate__animated animate__tada mb-4" @click="zerar"
        >limpar</v-btn
      >
      <h2 class="display-3">{{ result2 }}</h2>
    </v-card>

    <v-card
      class="mx-auto mb-3 animate__animated animate__backInRight"
      width="544"
      outlined
    >
      <v-card-title>Primeira Letra De Cada Palavra Maiúscula</v-card-title>
      <v-input>
        <v-textarea
          @focus="$event.target.select()"
          type="text"
          name="text3"
          v-model="text3"
        ></v-textarea>
      </v-input>
      <v-btn class="animate__animated animate__tada mb-4" @click="zerar"
        >limpar</v-btn
      >
      <h2 class="display-3">{{ result3 }}</h2>
    </v-card>

    <v-card
      class="mx-auto mb-3 animate__animated animate__backInRight"
      width="544"
      outlined
    >
      <v-card-title>aditrevnI arvalaP</v-card-title>
      <v-input>
        <v-textarea
          @focus="$event.target.select()"
          type="text"
          name="text4"
          v-model="text4"
        ></v-textarea>
      </v-input>
      <v-btn class="animate__animated animate__tada mb-4" @click="zerar"
        >limpar</v-btn
      >
      <h2 class="display-3">{{ result4 }}</h2>
    </v-card>

    <v-card
      class="mx-auto mb-3 animate__animated animate__backInRight"
      width="544"
      outlined
    >
      <v-card-title>AlTeRnAdO</v-card-title>
      <v-input>
        <v-textarea
          @focus="$event.target.select()"
          type="text"
          name="text5"
          v-model="text5"
        ></v-textarea>
      </v-input>
      <v-btn class="animate__animated animate__tada mb-4" @click="zerar"
        >limpar</v-btn
      >
      <h2 class="display-3">{{ result5 }}</h2>
    </v-card>

    <v-card
      class="mx-auto mb-3 animate__animated animate__backInRight"
      width="544"
      outlined
    >
      <v-card-title>Primeira palavra da frase</v-card-title>
      <v-input>
        <v-textarea
          @focus="$event.target.select()"
          type="text"
          name="text6"
          v-model="text6"
        ></v-textarea>
      </v-input>
      <v-btn class="animate__animated animate__tada mb-4" @click="zerar"
        >limpar</v-btn
      >
      <h2 class="display-3">{{ result6 }}</h2>
    </v-card>

    <v-card
      class="mx-auto mb-3 animate__animated animate__backInRight"
      width="544"
      outlined
    >
      <v-card-title>l337</v-card-title>
      <v-input>
        <v-textarea
          @focus="$event.target.select()"
          type="text"
          name="text7"
          v-model="text7"
        ></v-textarea>
      </v-input>
      <v-btn class="animate__animated animate__tada mb-4" @click="zerar"
        >limpar</v-btn
      >
      <h2 class="display-3">{{ result7 }}</h2>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
    };
  },
  computed: {
    result1() {
      return this.text1.toUpperCase();
    },
    result2() {
      return this.text2.toLowerCase();
    },
    result3() {
      return this.text3
        .toLowerCase()
        .replace(/^(.)|\s+(.)/g, (chr) => chr.toUpperCase());
    },
    result4() {
      return this.text4.split("").reverse().join("");
    },
    result5() {
      let text = this.text5.toLowerCase();
      text = text.split("");
      for (let i = 0; i < text.length; i += 2) {
        text[i] = text[i].toUpperCase();
      }
      text = text.join("");
      return text;
    },
    result6() {
      return this.text6
        .toLowerCase()
        .replace(/^./g, (chr) => chr.toUpperCase());
    },
    result7() {
      let chars = { a: "4", e: "3", i: "1", o: "0", t: "7" };
      let text = this.text7.toLowerCase();
      return text.replace(/([aeiot])/gi, (m) => chars[m]);
    },
  },
  methods: {
    zerar: function () {
      this.text1 = "";
      this.text2 = "";
      this.text3 = "";
      this.text4 = "";
      this.text5 = "";
      this.text6 = "";
      this.text7 = "";
    },
  },
};
</script>

