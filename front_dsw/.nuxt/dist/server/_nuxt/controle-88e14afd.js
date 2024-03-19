import { _ as __nuxt_component_0 } from "./axios-config-b2bebade.js";
import { ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "axios";
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
import "vue-router";
import "h3";
import "ufo";
const controle_vue_vue_type_style_index_0_scoped_c44c623e_lang = "";
const mensagemPadrao = "";
const _sfc_main = {
  __name: "controle",
  __ssrInlineRender: true,
  setup(__props) {
    const listaControles = ref([]);
    let attAuto = ref();
    attAuto.value = false;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="page-container" data-v-c44c623e><div data-v-c44c623e><button class="button" data-v-c44c623e>Listar Controles</button><button style="${ssrRenderStyle([{ "width": "125px" }, { backgroundColor: unref(attAuto) ? "Green" : "Red" }])}" class="button" data-v-c44c623e>Tempo Real</button></div><br data-v-c44c623e><div data-v-c44c623e>${ssrInterpolate(mensagemPadrao)}</div>`);
      if (listaControles.value.length !== 0) {
        _push(`<div class="table-container" data-v-c44c623e><table class="custom-table" data-v-c44c623e><thead data-v-c44c623e><tr data-v-c44c623e><th data-v-c44c623e>Estufa</th><th data-v-c44c623e>Bomba</th><th data-v-c44c623e>Válvula</th></tr></thead><tbody data-v-c44c623e><!--[-->`);
        ssrRenderList(listaControles.value, (controle2) => {
          _push(`<tr data-v-c44c623e><td data-v-c44c623e>${ssrInterpolate(controle2.estufa_id)}</td><td class="${ssrRenderClass({ "ativo": controle2.comando_bomba, "inativo": !controle2.comando_bomba })}" data-v-c44c623e>${ssrInterpolate(controle2.comando_bomba ? "Ativa" : "Inativa")}</td><td class="${ssrRenderClass({ "ativo": controle2.comando_valvula, "inativo": !controle2.comando_valvula })}" data-v-c44c623e>${ssrInterpolate(controle2.comando_valvula ? "Ativa" : "Inativa")}</td><td data-v-c44c623e><button class="button" style="${ssrRenderStyle({ backgroundColor: controle2.comando_bomba && controle2.comando_valvula ? "Green" : "Red" })}" data-v-c44c623e>${ssrInterpolate(controle2.comando_bomba && controle2.comando_valvula ? "Ativo" : "Inativo")}</button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/controle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const controle = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c44c623e"]]);
export {
  controle as default
};
//# sourceMappingURL=controle-88e14afd.js.map
