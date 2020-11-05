<template>
  <div id="sobre">
    <h2 class="display-3 mt-3 mb-3">{{ title }}</h2>
    <h4 class="display-1" style="color:rgb(235, 235, 21)">
      Série de webapps utilitários feitos usando
      <a
        :href="vueUrl"
        target="new"
        title="Link para o site do Vue.Js"
      >Vue.JS</a>
    </h4>
    <v-parallax height="300" src="../assets/logo.png" title="Vue.JS logo no Wikipedia"></v-parallax>
    <!-- SOBRE O SITE -->
    <div class="p-div mx-auto mt-12">
      <p>
        Sobre esse
        <strong>site</strong>: foi idealizado por
        <a :href="diegoUrl" target="new">Diego Luiz</a> para que eu colocasse em prática tudo o que venho aprendendo sobre front-end development, principalmente em relação ao Vue.js (o Framework JavaScript progressivo) nos cursos da
        <a
          :href="hcodeUrl"
          target="new"
        >HCode</a> e da
        <a :href="cod3rUrl" target="new">Cod3r</a>.
      </p>
      <p>
        Então, resolvi reunir todos os projetos (Operações Matemáticas, Cotação do Dólar, etc.) que eu tinha isolados no
        <a
          :href="netlifyUrl"
          target="new"
        >Netlify</a> em um único site: meu primeiro com domínio pago.
      </p>
      <p>
        O que utilizei para a criação desse projeto foi Vue.js, obviamente,
        <a
          :href="vuetifyUrl"
          target="new"
        >Vuetify</a> e animações do
        <a :href="animateUrl" target="new">Animate</a>.
      </p>
      <p>Meu objetivo é que esse site cresça à medida que eu aprenda novas funcionalidades, crie novos projetos e que, de fato, possa ter alguma utilidade para quem quer que seja.</p>
    </div>
    <v-parallax height="300" src="../assets/logo.svg" title="Vue.JS logo no Wikipedia"></v-parallax>
    <!-- SOBRE O AUTOR -->
    <div class="p-div_sobre mx-auto mt-4">
      <p>
        Sobre o
        <strong>autor</strong>: Pernambucano do Recife, Alvirrubro. Tradutor (Ing-Port), Professor de Inglês. Desenvolvedor Web. Aprendendo Vue.js desde maio de 2020 depois de ter terminado o curso de JavaScript do
        <a
          :href="luizURL"
        >Luiz Otávio</a>.
      </p>
      <hr />
      <!-- CONTATOS -->
      <h4 class="display-1 mt-12 mb-6" style="color:rgb(235, 235, 21)">Contatos</h4>
      <section class="contatos">
        <a :href="joGithub" target="new" title="Github de Jovane">
          <v-icon style="color:rgb(235, 235, 21)" title="Github de Jovane">mdi-github</v-icon>
        </a>
        <a :href="joLinkedin" target="new" title="Linkedin de Jovane">
          <v-icon style="color:rgb(235, 235, 21)" title="Linkedin de Jovane">mdi-linkedin</v-icon>
        </a>
        <a :href="joTwitter" target="new" title="Twitter de Jovane">
          <v-icon style="color:rgb(235, 235, 21)" title="Twitter de Jovane">mdi-twitter</v-icon>
        </a>
        <a :href="joWhatsapp" target="new" title="Whatsapp de Jovane">
          <v-icon style="color:rgb(235, 235, 21)" title="Whatsapp de Jovane">mdi-whatsapp</v-icon>
        </a>
        <a :href="joFB" target="new" title="Facebook de Jovane">
          <v-icon style="color:rgb(235, 235, 21)" title="Facebook de Jovane">mdi-facebook</v-icon>
        </a>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cambio",
  data: () => ({
    title: "Info",
    vueUrl: "https://vuejs.org/",
    diegoUrl: "http://www.diegoluiz.com.br/",
    hcodeUrl: "https://www.udemy.com/course/curso-vue-js-completo/",
    cod3rUrl: "https://www.udemy.com/course/vue-js-completo/",
    netlifyUrl: "https://www.netlify.com/",
    vuetifyUrl: "https://vuetifyjs.com/en/",
    animateUrl: "https://animate.style/",   
    luizURL:
      "https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/",
    joGithub: "https://github.com/jcgsr",
    joLinkedin:
      "https://www.linkedin.com/in/cabralguerra/?trk=profile-badge&originalSubdomain=br",
    joTwitter: "https://twitter.com/teufel8?ref_src=twsrc%5Etfw",
    joWhatsapp:
      "https://api.whatsapp.com/send?phone=5579988284730&text=Entrar em contato",
    joFB: "https://facebook.com/cabral8guerra",
  }),
};
</script>

<style lang="css">
hr {
  height: 1px;
  background-color: rgba(235, 235, 21, 0.479);
  border: none;
}
#sobre h4 {
  color: rgba(235, 235, 21, 0.479);
}

.contatos .v-icon.v-icon {
  font-size: 3.5rem;
  margin: 0 1rem;
  opacity: 0.6;
  transition: 0.8s;
  margin-top: 1rem;
}

.contatos .v-icon.v-icon:hover {
  opacity: 1;
}

.v-application a {
  text-decoration: none;
}

@media only screen and (max-width: 425px) {
  .p-div {
    font-size: 1rem;
    max-width: 85%;
  }
  .p-div_sobre {
    height: 33rem;
    font-size: 1rem;
    max-width: 85%;
  }
  .contatos .v-icon.v-icon {
    font-size: 1.3rem;
    margin: 0 1rem;
  }
}

.contatos {
  display: flex;
  justify-content: center;
}

@media only screen and (min-width: 768px) {
  .p-div {
    height: 40rem;
    font-size: 1.3rem;
    max-width: 75%;
  }
  .p-div_sobre {
    height: 30rem;
    font-size: 1.3rem;
    max-width: 75%;
  }
}
</style>