import { S as r, i as c, s as f, e as u, a as d, b as p, n as i, d as m, o as b, j as h, l as x } from "./index-1Pn5dwr9.js";
function v(n) {
    let e;
    return {
        c() {
            e = u("div"),
                e.innerHTML = '<h2 class="section-title brand text-in svelte-1fqm3qs">Odlabs</h2> <p class="section-title slogan text-in svelte-1fqm3qs">Project mixed reality</p>',
                d(e, "class", "w-full h-full flex flex-center flex-col items-center justify-center")
        },
        m(s, t) {
            p(s, e, t),
                n[1](e)
        },
        p: i,
        i,
        o: i,
        d(s) {
            s && m(e),
                n[1](null)
        }
    }
}
function _(n, e, s) {
    let t;
    b(l);
    function l() {
        h(t, 4)
    }
    function o(a) {
        x[a ? "unshift" : "push"](() => {
            t = a,
                s(0, t)
        }
        )
    }
    return [t, o]
}
class g extends r {
    constructor(e) {
        super(),
            c(this, e, _, v, f, {})
    }
}
export { g as default };
