import { S as m, i as v, s as g, e as r, f as x, a as u, b, h as c, n as p, d as h, o as y, j as w, k, l as d } from "./index-1Pn5dwr9.js";
function _(o) {
    let e, t, l, s;
    return {
        c() {
            e = r("div"),
                t = r("video"),
                t.innerHTML = '<source data-desktop-src="assets/videos/loops/lulu-10k-loop.mov" data-mobile-src="assets/videos/loops/lulu-10k-loop-mobile.mov" type="video/mp4; codecs=hvc1"/><source data-desktop-src="assets/videos/loops/lulu-10k.webm" data-mobile-src="assets/videos/loops/lulu-10k.webm" type="video/webm"/>',
                l = x(),
                s = r("div"),
                s.innerHTML = `<p class="section-title left numbers text-in svelte-vyugrs">10,000</p> <h2 class="section-title left text text-in svelte-vyugrs">companions</h2> <div class="section-content left text-in lg:text-lg px-8 lg:px-0 svelte-vyugrs">10,000 lulu’s made up of 10 neural components &amp; 9 colors of
            matter.<br/>coming together to create the first generative on-chain mixed reality companion</div>`,
                t.playsInline = !0,
                t.muted = !0,
                t.loop = !0,
                u(t, "class", "flex-none max-w-[80%] lg:w-[50vw] relative lg:left-[4vw] z-20 svelte-vyugrs"),
                u(s, "class", "flex flex-col items-start justify-center lg:ml-[-4vw] lg:w-[50%] lg:mt-[-10rem] px-20"),
                u(e, "class", "w-full h-full flex flex-center flex-col lg:flex-row items-center justify-center lg:justify-start lg:ml-[-20rem]")
        },
        m(n, a) {
            b(n, e, a),
                c(e, t),
                o[2](t),
                c(e, l),
                c(e, s),
                o[3](e)
        },
        p,
        i: p,
        o: p,
        d(n) {
            n && h(e),
                o[2](null),
                o[3](null)
        }
    }
}
function j(o, e, t) {
    let l, s;
    y(n);
    function n() {
        w(s, 5),
            k(l)
    }
    function a(i) {
        d[i ? "unshift" : "push"](() => {
            l = i,
                t(0, l)
        }
        )
    }
    function f(i) {
        d[i ? "unshift" : "push"](() => {
            s = i,
                t(1, s)
        }
        )
    }
    return [l, s, a, f]
}
class S extends m {
    constructor(e) {
        super(),
            v(this, e, j, _, g, {})
    }
}
export { S as default };
