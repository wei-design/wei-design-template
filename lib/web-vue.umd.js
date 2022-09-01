(function (n, t) {
    typeof exports == "object" && typeof module < "u"
        ? t(exports, require("vue"))
        : typeof define == "function" && define.amd
        ? define(["exports", "vue"], t)
        : ((n = typeof globalThis < "u" ? globalThis : n || self),
          t((n.WebVue = {}), n.Vue));
})(this, function (n, t) {
    "use strict";
    const m = "",
        u = {
            type: { type: String, default: "default" },
            disabled: { type: Boolean, default: !1 },
        },
        c = t.defineComponent({
            name: "WeButton",
            props: u,
            setup(e) {
                return {
                    classString: [
                        "we-button",
                        `we-button-type-${e.type}`,
                        e.disabled ? "we-button-disabled" : "",
                    ],
                };
            },
        }),
        a = (e, s) => {
            const i = e.__vccOpts || e;
            for (const [d, l] of s) i[d] = l;
            return i;
        },
        r = ["disabled"];
    function f(e, s, i, d, l, y) {
        return (
            t.openBlock(),
            t.createElementBlock(
                "button",
                {
                    class: t.normalizeClass([e.classString]),
                    disabled: e.disabled,
                },
                [t.renderSlot(e.$slots, "default")],
                10,
                r
            )
        );
    }
    const o = a(c, [["render", f]]);
    o.install = function (e) {
        return e.component(o.name, o), e;
    };
    const p = [o],
        b = {
            install: function (e) {
                p.forEach((s) => {
                    e.use(s);
                });
            },
        };
    (n.Button = o),
        (n.default = b),
        Object.defineProperties(n, {
            __esModule: { value: !0 },
            [Symbol.toStringTag]: { value: "Module" },
        });
});
