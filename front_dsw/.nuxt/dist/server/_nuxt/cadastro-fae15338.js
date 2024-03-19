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
const cadastro_vue_vue_type_style_index_0_scoped_b41a439e_lang = "";
const _sfc_main = {
  __name: "cadastro",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const data = reactive({
      loginUser: "",
      senha: "",
      senhaConfirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-b41a439e><div class="login-container" data-v-b41a439e><h2 class="titulo" data-v-b41a439e>Cadastre-se</h2><hr data-v-b41a439e><br data-v-b41a439e><form class="form" data-v-b41a439e><label class="label" for="user" data-v-b41a439e>Novo usuário:</label><input class="input" type="text" id="loginUser"${ssrRenderAttr("value", data.loginUser)} required data-v-b41a439e><label class="label" for="pass" data-v-b41a439e>Nova senha:</label><input class="input" type="password" id="senha"${ssrRenderAttr("value", data.senha)} required data-v-b41a439e><label class="label" for="pass" data-v-b41a439e>Confirmação de senha:</label><input class="input" type="password" id="senhaConfirmatiom"${ssrRenderAttr("value", data.senhaConfirmation)} required data-v-b41a439e><button class="button" type="submit" data-v-b41a439e>Cadastrar</button><br data-v-b41a439e></form><hr data-v-b41a439e><label style="${ssrRenderStyle({ "align-self": "center" })}" data-v-b41a439e>Já possui conta?</label><button class="button" data-v-b41a439e>Fazer login</button></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cadastro.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cadastro = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b41a439e"]]);
export {
  cadastro as default
};
//# sourceMappingURL=cadastro-fae15338.js.map
