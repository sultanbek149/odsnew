import { S as m, i as v, s as I, e as c, f as T, a as r, b as N, h as d, n as p, d as E, o as S, j as O, k as b, l as u } from "./index-1Pn5dwr9.js";
function A(i) {
    let e, s, o, t;
    return {
        c() {
            e = c("div"),
                s = c("video"),
                s.innerHTML = '<source data-desktop-src="assets/videos/loops/card-fnic-loop.mov" data-mobile-src="assets/videos/loops/card-fnic-loop.mov" type="video/mp4; codecs=hvc1"/><source data-desktop-src="assets/videos/loops/card-fnic.webm" data-mobile-src="assets/videos/loops/card-fnic.webm" type="video/webm"/>',
                o = T(),
                t = c("div"),
                t.innerHTML = `<h2 class="section-title left text-in svelte-4te7q7">F.N.I.C</h2> <div class="section-content left text-in svelte-4te7q7"><div class="mb-3">“REVOLUTIONARY MINT THROUGH COMMUNITY DRIVEN DISTRIBUTION”</div> <div class="lg:w-[80vw]">F.N.I.C IS A TRADABLE ERC-721 TOKEN WITH A TOTAL SUPPLY OF 333. <br/>
                IT ENABLES OUR ON-CHAIN COMMUNITY DRIVEN DISTRIBUTION SYSTEM. <br/>
                THE F.N.I.C GIVES YOU ACCESS TO MINT, ALLOWLIST NEW WALLETS, AND EARN REWARDS IN THE PROCESS.</div></div>`,
                s.playsInline = !0,
                s.muted = !0,
                s.loop = !0,
                r(s, "class", "flex-none w-[90%] lg:w-auto lg:h-[75rem] mb-[1rem] lg:mb-[-20rem] lg:mt-[-18rem] z-20 mx-auto svelte-4te7q7"),
                r(t, "class", "mx-auto px-32 lg:px-72"),
                r(e, "class", "w-full h-full flex flex-center flex-col items-center lg:items-start justify-center")
        },
        m(n, a) {
            N(n, e, a),
                d(e, s),
                i[2](s),
                d(e, o),
                d(e, t),
                i[3](e)
        },
        p,
        i: p,
        o: p,
        d(n) {
            n && E(e),
                i[2](null),
                i[3](null)
        }
    }
}
function R(i, e, s) {
    let o, t;
    S(n);
    function n() {
        O(t, 6),
            b(o)
    }
    function a(l) {
        u[l ? "unshift" : "push"](() => {
            o = l,
                s(0, o)
        }
        )
    }
    function f(l) {
        u[l ? "unshift" : "push"](() => {
            t = l,
                s(1, t)
        }
        )
    }
    return [o, t, a, f]
}
class L extends m {
    constructor(e) {
        super(),
            v(this, e, R, A, I, {})
    }
}
export { L as default };
