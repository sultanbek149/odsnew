import { S as b, i as v, s as h, e as p, f as u, a as c, b as E, h as r, n as m, d as S, o as x, j as N, k as R, l as f } from "./index-1Pn5dwr9.js";
function w(i) {
    let e, t, s, o, d, a;
    return {
        c() {
            e = p("div"),
                t = p("video"),
                t.innerHTML = '<source data-desktop-src="assets/videos/loops/brain-loop.mov" data-mobile-src="assets/videos/loops/brain-loop-mobile.mov" type="video/mp4; codecs=&quot;hvc1&quot;"/><source data-desktop-src="assets/videos/loops/brain-loop.webm" data-mobile-src="assets/videos/loops/brain-loop.webm" type="video/webm"/>',
                s = u(),
                o = p("h2"),
                o.textContent = "THE HUMAN BRAIN",
                d = u(),
                a = p("div"),
                a.innerHTML = '<p class="mb-1">IS THE HARDWARE INTERFACE BETWEEN</p> <p>YOUR CONSCIOUSNESS AND THE UNIVERSE</p>',
                t.playsInline = !0,
                t.autoplay = !0,
                t.muted = !0,
                t.loop = !0,
                c(t, "class", "flex-none max-h-auto max-w-[80%] md:h-[150rem] md:mb-[-50rem] md:mt-[-50rem] z-10"),
                c(o, "class", "section-title text-in mt-80 md:mt-0 mb-40 md:mb-0"),
                c(a, "class", "section-content text-in"),
                c(e, "class", "w-full h-full flex flex-center flex-col items-center justify-center")
        },
        m(l, n) {
            E(l, e, n),
                r(e, t),
                i[2](t),
                r(e, s),
                r(e, o),
                r(e, d),
                r(e, a),
                i[3](e)
        },
        p: m,
        i: m,
        o: m,
        d(l) {
            l && S(e),
                i[2](null),
                i[3](null)
        }
    }
}
function y(i, e, t) {
    let s, o;
    x(d);
    function d() {
        N(o, 1),
            R(s),
            window.innerWidth > 640 && t(0, s.playbackRate = .8, s)
    }
    function a(n) {
        f[n ? "unshift" : "push"](() => {
            s = n,
                t(0, s)
        }
        )
    }
    function l(n) {
        f[n ? "unshift" : "push"](() => {
            o = n,
                t(1, o)
        }
        )
    }
    return [s, o, a, l]
}
class H extends b {
    constructor(e) {
        super(),
            v(this, e, y, w, h, {})
    }
}
export { H as default };
