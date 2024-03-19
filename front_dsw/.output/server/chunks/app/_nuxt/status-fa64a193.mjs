import { _ as __nuxt_component_0 } from './axios-config-b2bebade.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'axios';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "status",
  __ssrInlineRender: true,
  setup(__props) {
    const listaEstufas = ref([]);
    const exibirFormulario = ref(false);
    const novaEstufa = ref({
      nome: "",
      localizacao: "",
      capacidade: 0
    });
    const capacidadeInvalida = ref(true);
    let attAuto = ref();
    attAuto.value = false;
    let botaoIncluirDesabilitado = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="page-container" data-v-3d0ef288><div data-v-3d0ef288><button class="button" data-v-3d0ef288>Listar Estufas</button><button style="${ssrRenderStyle([{ "width": "125px" }, { backgroundColor: unref(attAuto) ? "Green" : "Red" }])}" class="button" data-v-3d0ef288>Tempo Real</button></div><br data-v-3d0ef288><div class="botoesIncluiExclui" data-v-3d0ef288><button class="button_include" style="${ssrRenderStyle({ backgroundColor: unref(botaoIncluirDesabilitado) ? "gray" : "#007BFF", cursor: unref(botaoIncluirDesabilitado) ? "not-allowed" : "pointer" })}"${ssrIncludeBooleanAttr(unref(botaoIncluirDesabilitado)) ? " disabled" : ""} data-v-3d0ef288>Incluir Estufa</button>`);
      if (exibirFormulario.value) {
        _push(`<button class="button_include" data-v-3d0ef288>Cancelar</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (exibirFormulario.value) {
        _push(`<form class="form-incluirEstufa" data-v-3d0ef288><label for="nome" data-v-3d0ef288>Nome: </label><input class="inputsForm" type="text"${ssrRenderAttr("value", novaEstufa.value.nome)} required data-v-3d0ef288><label for="localizacao" data-v-3d0ef288>Localiza\xE7\xE3o: </label><input class="inputsForm" type="text"${ssrRenderAttr("value", novaEstufa.value.localizacao)} required data-v-3d0ef288><label for="capacidade" data-v-3d0ef288>Capacidade: </label><input class="inputsForm" style="${ssrRenderStyle({ "width": "75px" })}" type="number" id="capacidadeEstufa"${ssrRenderAttr("value", novaEstufa.value.capacidade)} required data-v-3d0ef288><button class="button" type="submit" style="${ssrRenderStyle({ backgroundColor: capacidadeInvalida.value ? "gray" : "#007BFF", cursor: capacidadeInvalida.value ? "not-allowed" : "pointer" })}"${ssrIncludeBooleanAttr(capacidadeInvalida.value) ? " disabled" : ""} data-v-3d0ef288>Adicionar Estufa</button></form>`);
      } else {
        _push(`<!---->`);
      }
      if (listaEstufas.value.length !== 0) {
        _push(`<div class="table-container" data-v-3d0ef288><table class="custom-table" data-v-3d0ef288><thead data-v-3d0ef288><tr data-v-3d0ef288><th data-v-3d0ef288><input type="checkbox" data-v-3d0ef288></th><th data-v-3d0ef288>ID estufa</th><th data-v-3d0ef288>Nome</th><th data-v-3d0ef288>Localiza\xE7\xE3o</th><th data-v-3d0ef288>Capacidade</th><th data-v-3d0ef288>Temperatura</th><th data-v-3d0ef288>Umidade</th><th data-v-3d0ef288>Consumo</th><th data-v-3d0ef288>Data Inclus\xE3o</th></tr></thead><tbody data-v-3d0ef288><!--[-->`);
        ssrRenderList(listaEstufas.value, (estufas) => {
          _push(`<tr data-v-3d0ef288><td data-v-3d0ef288><input type="checkbox" data-v-3d0ef288></td><td data-v-3d0ef288>${ssrInterpolate(estufas.id)}</td><td data-v-3d0ef288>${ssrInterpolate(estufas.nome)}</td><td data-v-3d0ef288>${ssrInterpolate(estufas.localizacao)}</td><td data-v-3d0ef288>${ssrInterpolate(estufas.capacidade)}</td><td data-v-3d0ef288>${ssrInterpolate(estufas.dadosEstufa.temperatura)} C\xBA</td><td data-v-3d0ef288>${ssrInterpolate(estufas.dadosEstufa.umidade)}%</td><td data-v-3d0ef288>${ssrInterpolate(estufas.dadosEstufa.consumo_agua)}L/h</td><td data-v-3d0ef288>${ssrInterpolate(estufas.dadosEstufa.timestamp)}</td><td data-v-3d0ef288><button class="button_delete" data-v-3d0ef288>Deletar</button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<br data-v-3d0ef288><br data-v-3d0ef288></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/status.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const status = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3d0ef288"]]);

export { status as default };
//# sourceMappingURL=status-fa64a193.mjs.map
