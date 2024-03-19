import { reactive, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "h3";
import "ufo";
const index_vue_vue_type_style_index_0_scoped_5c9241cf_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const data = reactive({
      loginUser: "",
      senha: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-5c9241cf><div class="login-container" data-v-5c9241cf><h2 class="titulo" data-v-5c9241cf>Login</h2><hr data-v-5c9241cf><br data-v-5c9241cf><form class="form" data-v-5c9241cf><label class="label" for="user" data-v-5c9241cf>Usuário:</label><input class="input" type="text" id="loginUser"${ssrRenderAttr("value", data.loginUser)} required data-v-5c9241cf><label class="label" for="pass" data-v-5c9241cf>Senha:</label><input class="input" type="password" id="senha"${ssrRenderAttr("value", data.senha)} required data-v-5c9241cf><button class="button" type="submit" data-v-5c9241cf>Entrar</button><label style="${ssrRenderStyle({ "align-self": "center" })}" data-v-5c9241cf>ou</label></form><button class="button" data-v-5c9241cf>Cadastre-se</button></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5c9241cf"]]);
export {
  index as default
};
//# sourceMappingURL=index-7d0b74a9.js.map
