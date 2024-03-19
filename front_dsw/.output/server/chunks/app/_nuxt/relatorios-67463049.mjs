import { _ as __nuxt_component_0 } from './axios-config-b2bebade.mjs';
import { ref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "relatorios",
  __ssrInlineRender: true,
  setup(__props) {
    const listaRelatorios = ref([]);
    ref();
    const dataInicio = ref(null);
    const dataFinal = ref(null);
    const formatDate = (input) => {
      var datePart = input.match(/\d+/g), year = datePart[0], month = datePart[1], day = datePart[2];
      return day + "/" + month + "/" + year;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="table-pesquisa" data-v-921669f7><table class="custom-table-pesquisa" data-v-921669f7><thead data-v-921669f7><tr data-v-921669f7><th data-v-921669f7>Data Incial</th><th data-v-921669f7>Data Final</th></tr></thead><tbody data-v-921669f7><tr data-v-921669f7><td class="table-pesquisa-datas" data-v-921669f7><input${ssrRenderAttr("value", dataInicio.value)} class="datas" type="date" id="dataInicio" data-v-921669f7></td><td class="table-pesquisa-datas" data-v-921669f7><input${ssrRenderAttr("value", dataFinal.value)} class="datas" type="date" id="dataFinal" data-v-921669f7></td><td data-v-921669f7><button class="button" data-v-921669f7>Listar Relat\xF3rios</button></td></tr></tbody></table></div><div class="page-container" data-v-921669f7><br data-v-921669f7>`);
      if (listaRelatorios.value.length !== 0) {
        _push(`<div class="table-container" data-v-921669f7><table class="custom-table" data-v-921669f7><thead data-v-921669f7><tr data-v-921669f7><th data-v-921669f7>ID Estufa</th><th data-v-921669f7>Nome Estufa</th><th data-v-921669f7>Localiza\xE7\xE3o</th><th data-v-921669f7>Capacidade</th><th data-v-921669f7>Umidade (%)</th><th data-v-921669f7>Temperatura (\xB0C)</th><th data-v-921669f7>Data</th><th data-v-921669f7>Hora</th></tr></thead><tbody data-v-921669f7><!--[-->`);
        ssrRenderList(listaRelatorios.value, (relatorio) => {
          _push(`<tr data-v-921669f7><td data-v-921669f7>${ssrInterpolate(relatorio.estufa.id)}</td><td data-v-921669f7>${ssrInterpolate(relatorio.estufa.nome)}</td><td data-v-921669f7>${ssrInterpolate(relatorio.estufa.localizacao)}</td><td data-v-921669f7>${ssrInterpolate(relatorio.estufa.capacidade)}</td><td data-v-921669f7>${ssrInterpolate(relatorio.umidade)}%</td><td data-v-921669f7>${ssrInterpolate(relatorio.temperatura)}\xB0C</td><td data-v-921669f7>${ssrInterpolate(formatDate(relatorio.data))}</td><td data-v-921669f7>${ssrInterpolate(relatorio.hora)}</td><td data-v-921669f7><button class="button-delete" data-v-921669f7> Excluir</button></td></tr>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/relatorios.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const relatorios = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-921669f7"]]);

export { relatorios as default };
//# sourceMappingURL=relatorios-67463049.mjs.map
