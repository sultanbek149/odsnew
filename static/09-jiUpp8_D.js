import {S as L, i as O, s as B, e as g, t as v, a as p, u as $, b as I, h as n, v as b, n as D, d as S, o as C, l as z, B as A, w as x, f as k, x as y, y as T, z as M, A as j, j as q} from "./index-1Pn5dwr9.js";
function E(a) {
    let t, e, s, o, l, f, c, w, d, m, i, h;
    return {
        c() {
            t = g("p"),
            e = g("span"),
            s = v(a[1]),
            o = v(":"),
            l = g("span"),
            f = v(a[2]),
            c = v(":"),
            w = g("span"),
            d = v(a[3]),
            m = v(":"),
            i = g("span"),
            h = v(a[4]),
            p(e, "id", "days"),
            p(l, "id", "hours"),
            p(w, "id", "mins"),
            p(i, "id", "secs"),
            p(t, "class", "timer font-chakra-regular md:text-9xl svelte-14blv8z"),
            p(t, "data-date", "2024-01-24T15:30:00-05:00"),
            $(t, "invisible", a[1] === "")
        },
        m(u, r) {
            I(u, t, r),
            n(t, e),
            n(e, s),
            n(t, o),
            n(t, l),
            n(l, f),
            n(t, c),
            n(t, w),
            n(w, d),
            n(t, m),
            n(t, i),
            n(i, h),
            a[5](t)
        },
        p(u, [r]) {
            r & 2 && b(s, u[1]),
            r & 4 && b(f, u[2]),
            r & 8 && b(d, u[3]),
            r & 16 && b(h, u[4]),
            r & 2 && $(t, "invisible", u[1] === "")
        },
        i: D,
        o: D,
        d(u) {
            u && S(t),
            a[5](null)
        }
    }
}
function _(a) {
    return a.toString().padStart(2, "0")
}
function F(a, t, e) {
    let s, o = "0", l = "0", f = "0", c = "0";
    function w() {
        let m = s.dataset.date;
        const i = new Date(`${m}`).getTime();
        let h = setInterval(function() {
            const u = new Date().getTime()
              , r = i - u;
            r >= 0 && (e(1, o = _(Math.floor(r / (1e3 * 60 * 60 * 24)))),
            e(2, l = _(Math.floor(r % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)))),
            e(3, f = _(Math.floor(r % (1e3 * 60 * 60) / (1e3 * 60)))),
            e(4, c = _(Math.floor(r % (1e3 * 60) / 1e3)))),
            r <= 0 && clearInterval(h)
        }, 1e3)
    }
    C(w);
    function d(m) {
        z[m ? "unshift" : "push"](()=>{
            s = m,
            e(0, s)
        }
        )
    }
    return [s, o, l, f, c, d]
}
class H extends L {
    constructor(t) {
        super(),
        O(this, t, F, E, B, {})
    }
}
function N(a) {
    let t, e, s, o, l, f, c, w, d, m;
    return l = new H({}),
    c = new A({
        props: {
            content: "BUY F.N.I.C",
            target: "_blank",
            onClick: P
        }
    }),
    {
        c() {
            t = g("div"),
            e = g("div"),
            s = g("div"),
            o = g("div"),
            x(l.$$.fragment),
            f = k(),
            x(c.$$.fragment),
            w = k(),
            d = g("footer"),
            d.innerHTML = '<div class="flex justify-between md:justify-end items-end px-24 md:px-10"><img class="footer-logo-always svelte-mksfai" src="./assets/images/footer-logo.svg" alt="Powered By ODLabs"/> <div class="links flex gap-48 md:gap-16"><a href="https://www.x.com/ODLabs" target="_blank"><img src="./assets/images/twitter.svg" alt="X (former Twitter)" class="w-52 md:w-14"/></a> <a href="https://discord.gg/ODLabs" target="_blank"><img src="./assets/images/discord.svg" alt="Discord" class="w-52 md:w-14"/></a> <a href="https://www.instagram.com/ODLabs.io" target="_blank"><img src="./assets/images/instagram.svg" alt="Instagram" class="w-52 md:w-14"/></a></div></div>',
            p(o, "class", "timer-wrapper text-center mb-16"),
            p(s, "class", "content-cta grow justify-center items-center flex flex-col"),
            p(d, "class", "flex-none relative pb-28 md:pb-10 font-type-medium"),
            p(e, "class", "flex flex-col w-full h-full"),
            p(t, "class", "w-full h-full flex flex-center flex-col items-center justify-center")
        },
        m(i, h) {
            I(i, t, h),
            n(t, e),
            n(e, s),
            n(s, o),
            y(l, o, null),
            n(s, f),
            y(c, s, null),
            n(e, w),
            n(e, d),
            a[1](t),
            m = !0
        },
        p: D,
        i(i) {
            m || (T(l.$$.fragment, i),
            T(c.$$.fragment, i),
            m = !0)
        },
        o(i) {
            M(l.$$.fragment, i),
            M(c.$$.fragment, i),
            m = !1
        },
        d(i) {
            i && S(t),
            j(l),
            j(c),
            a[1](null)
        }
    }
}
const P = ()=>{}
;
function U(a, t, e) {
    let s;
    C(o);
    function o() {
        q(null, 9)
    }
    function l(f) {
        z[f ? "unshift" : "push"](()=>{
            s = f,
            e(0, s)
        }
        )
    }
    return [s, l]
}
class Y extends L {
    constructor(t) {
        super(),
        O(this, t, U, N, B, {})
    }
}
export {Y as default};
