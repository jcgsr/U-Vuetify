import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home";
import MathVue from "./components/MathVue";
import Calculadora from "./components/Calculadora";
import MediaEscolar from "./components/MediaEscolar";
import Conversor from "./components/Conversor";
import Cambio from "./components/Cambio";
import Afinador from "./components/Afinador";
import IMC from "./components/IMC";
import CEP from "./components/CEP";
import Info from "./components/Info";
import ConvertCase from "./components/ConvertCase";
import HeartRates from "./components/HeartRates";

import Api from "./api/filmes.json";

Vue.use(Router);

export default new Router({
   mode: "history",
   linkExactActiveClass: "link-active",
   routes: [
      {
         path: "/",
         name: "home",
         component: Home,
         meta: {
            auth: false,
            title: "U-Vue",
         },
      },
      {
         path: "/math",
         name: "math",
         component: MathVue,
         meta: {
            auth: false,
            title: "Matemática",
         },
      },
      {
         path: "/info",
         name: "info",
         component: Info,
         meta: {
            auth: false,
            title: "Informações",
         },
      },
      {
         path: "/media",
         name: "media",
         component: MediaEscolar,
         meta: {
            auth: false,
            title: "Média Escolar",
         },
      },
      {
         path: "/conversor",
         name: "conversor",
         component: Conversor,
         meta: {
            auth: false,
            title: "Conversor",
         },
      },
      {
         path: "/cambio",
         name: "cambio",
         component: Cambio,
         meta: {
            auth: false,
            title: "Câmbio",
         },
      },
      {
         path: "/afinador",
         name: "afinador",
         component: Afinador,
         meta: {
            auth: false,
            title: "Afinador",
         },
      },
      {
         path: "/imc",
         name: "imc",
         component: IMC,
         meta: {
            auth: false,
            title: "IMC",
         },
      },
      {
         path: "/cep",
         name: "cep",
         component: CEP,
         meta: {
            auth: false,
            title: "CEP",
         },
      },
      {
         path: "/calculadora",
         name: "calculadora",
         component: Calculadora,
         meta: {
            auth: false,
            title: "Calculadora",
         },
      },
      {
         path: "/convertcase",
         name: "convertcase",
         component: ConvertCase,
         meta: {
            auth: false,
            title: "Editor de Textos",
         },
      },
      {
         path: "/heartrates",
         name: "heartrates",
         component: HeartRates,
         meta: {
            auth: false,
            title: "Frequência Cardíaca",
         },
      },
      {
         path: "/api",
         name: "api",
         component: Api,
         meta: {
            auth: false,
            title: "Api Filmes",
         },
      },
   ],
});
