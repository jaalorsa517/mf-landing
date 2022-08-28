import { createPinia } from "pinia";
import { router } from "./router";
import "./style.css";
import App from "./App.ce.vue";
import { vueDefineCustomElement } from "./utils/VueDefineCustomElement";

const pinia = createPinia();

const plugins = [pinia, router];

const wcLanding = vueDefineCustomElement(App, { plugins });

customElements.define("wc-landing", wcLanding);
