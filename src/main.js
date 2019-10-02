import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import DefaultLayout from "~/layouts/Default.vue";

import "~/assets/styles/main.css";

config.autoAddCss = false;
library.add(faGithub, faTwitter, faExternalLinkAlt, faFileCode);

console.log(library);

export default function(Vue, { router, head, isClient }) {
  Vue.component("font-awesome-icon", FontAwesomeIcon);
  Vue.component("Layout", DefaultLayout);
}
