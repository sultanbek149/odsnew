import { S as N, i as E, s as L, e as c, f as O, a, b as R, h as u, n as m, d as I, o as b, j as v, k as A, l as p } from "./index-1Pn5dwr9.js";
function h(i) {
    let t, s, e, o;
    return {
        c() {
            t = c("div"),
                s = c("video"),
                s.innerHTML = '<source data-desktop-src="assets/videos/loops/computer-full.mov" data-mobile-src="assets/videos/loops/computer-full-mobile.mov" type="video/mp4; codecs=hvc1"/><source data-desktop-src="assets/videos/loops/computer-full.webm" data-mobile-src="assets/videos/loops/computer-full.webm" type="video/webm"/>',
                e = O(),
                o = c("div"),
                o.innerHTML = `<h2 class="section-title left text-in svelte-tnxg53">BURN PORTAL</h2> <div class="section-content left text-in svelte-tnxg53">PRIOR TO THE MINT A BURN PORTAL WILL OPEN ALLOWING EACH F.N.I.C HOLDER <br/>
            TO BURN AND SECURE THEIR 5 LULU ALLOCATION. <br/>
            BY POWERING THE BURN PORTAL YOU ENABLE THE OPENING OF A DIMENSIONAL RIFT. <br/>
            USING THIS RIFT THE LULU’S WILL ENTER OUR WORLD. <br/>
            THE BURN PORTAL SERVES AS THE FINAL <br/>
            DESTINATION FOR EACH F.N.I.C AND THE BEGINNING OF A NEW JOURNEY.</div>`,
                s.playsInline = !0,
                s.muted = !0,
                a(s, "class", "flex-none max-h-auto max-w-[80%] lg:h-[60rem] mt-0 lg:mb-[-4rem] lg:mt-[-9rem] z-10"),
                a(o, "class", "px-32 xl:px-0 lg:ml-[-17rem]"),
                a(t, "class", "w-full h-full flex flex-center flex-col items-center justify-center")
        },
        m(l, r) {
            R(l, t, r),
                u(t, s),
                i[2](s),
                u(t, e),
                u(t, o),
                i[3](t)
        },
        p: m,
        i: m,
        o: m,
        d(l) {
            l && I(t),
                i[2](null),
                i[3](null)
        }
    }
}
function H(i, t, s) {
    let e, o, l = !1;
    b(r);
    function r() {
        v(o, 8, f),
            A(e),
            s(0, e.ontimeupdate = () => {
                !l || !e || (e.canPlayType("video/mp4; codecs=hvc1") ? e.currentTime > 8.8 && s(0, e.currentTime = 4.5, e) : e.canPlayType("video/webm") && e.currentTime > 7.3 && s(0, e.currentTime = 3.9, e))
            }
                , e)
    }
    async function f(n) {
        l = n,
            s(0, e.currentTime = 0, e)
    }
    function d(n) {
        p[n ? "unshift" : "push"](() => {
            e = n,
                s(0, e)
        }
        )
    }
    function T(n) {
        p[n ? "unshift" : "push"](() => {
            o = n,
                s(1, o)
        }
        )
    }
    return [e, o, d, T]
}
class x extends N {
    constructor(t) {
        super(),
            E(this, t, H, h, L, {})
    }
}
export { x as default };
