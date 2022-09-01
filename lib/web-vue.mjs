import { defineComponent as c, openBlock as l, createElementBlock as r, normalizeClass as d, renderSlot as i } from "vue";
const u = {
  type: {
    type: String,
    default: "default"
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, p = c({
  name: "WeButton",
  props: u,
  setup(t) {
    return {
      classString: [
        "we-button",
        `we-button-type-${t.type}`,
        t.disabled ? "we-button-disabled" : ""
      ]
    };
  }
}), f = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [s, a] of e)
    o[s] = a;
  return o;
}, b = ["disabled"];
function m(t, e, o, s, a, y) {
  return l(), r("button", {
    class: d([t.classString]),
    disabled: t.disabled
  }, [
    i(t.$slots, "default")
  ], 10, b);
}
const n = /* @__PURE__ */ f(p, [["render", m]]);
n.install = function(t) {
  return t.component(n.name, n), t;
};
const _ = [n], $ = function(t) {
  _.forEach((e) => {
    t.use(e);
  });
}, B = {
  install: $
};
export {
  n as Button,
  B as default
};
