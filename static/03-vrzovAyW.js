import { S as f, i as b, s as h, e as u, f as p, a as c, b as w, h as r, n as m, d as y, o as g, j as x, k as _, l as v } from "./index-1Pn5dwr9.js";
function q(i) {
    let e, s, o, t, d, l;
    return {
        c() {
            e = u("div"),
                s = u("video"),
                s.innerHTML = '<source data-desktop-src="assets/videos/sections-desctop/video-3.mov" data-mobile-src="assets/videos/sections-mobile/video-3.mov" type="video/mp4; codecs=&quot;hvc1&quot;"/><source data-desktop-src="assets/videos/sections-desctop/video-3.webm" data-mobile-src="assets/videos/sections-mobile/video-3.webm" type="video/webm"/>',
                o = p(),
                t = u("h2"),
                t.textContent = "The souls journey",
                d = p(),
                l = u("div"),
                l.innerHTML = `as the world evolves so does our understanding of the multiverse.<br/>
        lulu will be your companion on this soul journey.<br/>
        we&#39;ll show you a whole new world<br/>
        of possibilities as we build on a new layer of reality`,
                s.playsInline = !0,
                s.muted = !0,
                s.loop = !0,
                c(s, "class", "flex-none w-[90%] lg:w-auto lg:h-[60rem] mb-[-5rem] lg:mb-[-11rem] lg:mt-[-15rem] z-20 svelte-1q221lx"),
                c(t, "class", "section-title text-in svelte-1q221lx"),
                c(l, "class", "section-content text-in lg:mt-12 svelte-1q221lx"),
                c(e, "class", "w-full h-full flex flex-center flex-col items-center justify-center")
        },
        m(a, n) {
            w(a, e, n),
                r(e, s),
                i[2](s),
                r(e, o),
                r(e, t),
                r(e, d),
                r(e, l),
                i[3](e)
        },
        p: m,
        i: m,
        o: m,
        d(a) {
            a && y(e),
                i[2](null),
                i[3](null)
        }
    }
}
function j(i, e, s) {
    let o, t;
    g(d);
    function d() {
        x(t, 3),
            _(o)
    }
    function l(n) {
        v[n ? "unshift" : "push"](() => {
            o = n,
                s(0, o)
        }
        )
    }
    function a(n) {
        v[n ? "unshift" : "push"](() => {
            t = n,
                s(1, t)
        }
        )
    }
    return [o, t, l, a]
}
class M extends f {
    constructor(e) {
        super(),
            b(this, e, j, q, h, {})
    }
}
export { M as default };
