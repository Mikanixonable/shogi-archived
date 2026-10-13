// ヘッダーの全体設定: 駒の表示方法、守りの利きの表示と数える範囲
window.Kakoi = window.Kakoi || {};
(() => {
  'use strict';

  class ToolbarView {
    /**
     * @param {{ mode:HTMLElement, heat:HTMLInputElement, skeleton:HTMLInputElement, heatScope:HTMLElement, heatScopeWrap:HTMLElement, reset?:HTMLButtonElement }} els
     * @param {(patch:object) => void} onChange
     * @param {object} defaults リセットボタンで戻す表示設定の初期値
     */
    constructor(els, onChange, defaults = {}) {
      this.els = els;
      this.mode = new Kakoi.Segmented(els.mode, v => onChange({ mode: v }));
      this.heatScope = new Kakoi.Segmented(els.heatScope, v => onChange({ heatScope: v }));
      els.heat.addEventListener('change', () => onChange({ heat: els.heat.checked }));
      els.skeleton.addEventListener('change', () => onChange({ skeleton: els.skeleton.checked }));
      if (els.reset) els.reset.addEventListener('click', () => onChange({ ...defaults }));
    }

    render(state) {
      this.mode.setValue(state.mode);
      this.els.heat.checked = state.heat;
      this.els.skeleton.checked = state.skeleton;
      this.els.heatScopeWrap.classList.toggle('disabled', !state.heat);
      this.heatScope.setValue(state.heatScope);
    }
  }

  Kakoi.ToolbarView = ToolbarView;
})();
