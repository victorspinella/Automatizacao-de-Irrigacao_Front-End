import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import axios from "axios";
const header_vue_vue_type_style_index_0_scoped_939424d7_lang = "";
const _sfc_main = {
  data() {
    return {
      showHeader: true
    };
  },
  name: "Header",
  methods: {
    redirectToStatus() {
      this.$router.push("/status");
    },
    redirectToControle() {
      this.$router.push("/controle");
    },
    redirectToRelatorios() {
      this.$router.push("/relatorios");
    },
    signOut() {
      if (localStorage.getItem("token")) {
        window.alert("Usuário deslogado com sucesso");
      }
      localStorage.setItem("token", "");
      this.$router.push("/");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($data.showHeader) {
    _push(`<header${ssrRenderAttrs(_attrs)} data-v-939424d7><div class="left-buttons" data-v-939424d7><button data-v-939424d7>Status</button><button data-v-939424d7>Controle</button><button data-v-939424d7>Relatórios</button></div><div class="right-buttons" data-v-939424d7><button data-v-939424d7>Deslogar</button></div></header>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-939424d7"]]);
const api = axios.create({
  baseURL: "http://localhost:4000/"
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (!!token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=axios-config-b2bebade.js.map
