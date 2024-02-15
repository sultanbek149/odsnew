import { S as u, i as p, s as v, e as d, f as L, a as l, b as N, h as c, n as m, d as f, o as S, j as A, k as O, l as E } from "./index-1Pn5dwr9.js";
function b(i) {
    let e, s, o, t;
    return {
        c() {
            e = d("div"),
                s = d("video"),
                s.innerHTML = '<source data-desktop-src="assets/videos/sections-desctop/video-6.mov" data-mobile-src="assets/videos/sections-mobile/video-6.mov" type="video/mp4; codecs=&quot;hvc1&quot;"/><source data-desktop-src="assets/videos/sections-desctop/video-6.webm" data-mobile-src="assets/videos/sections-mobile/video-6.webm" type="video/webm"/>',
                o = L(),
                t = d("div"),
                t.innerHTML = `<h2 class="section-title left text-in text-h-2 svelte-rdnc1j">FOUNDERS REWARDS</h2> <div class="section-content left text-in svelte-rdnc1j">333 FOUNDERS HOLDING AN FNIC CAN MINT UP TO 5 LULU’S <br/>
            FOR A TOTAL OF 1665 LULU’S. <br/>
            DURING EACH MINT THE FOUNDER WILL PASS <br/>
            AN ACCESS TOKEN TO TWO NEW WALLETS. <br/>
            EACH WALLET WITH THE NEWLY ACQUIRED ACCESS TOKEN <br/>
            WILL NOW BE ABLE TO MINT UP TO 2 LULU’S OF THEIR OWN. <br/>
            IF AND WHEN THESE ACCESS TOKENS ARE USED TO MINT NEW LULU’S <br/>
            THE FOUNDERS WALLET THAT DISTRIBUTED THEM WILL EARN 50% OF THE MINT COST BACK.</div>`,
                s.playsInline = !0,
                s.muted = !0,
                s.loop = !0,
                l(s, "class", "flex-none max-h-auto md:max-h-[50rem] md:mb-[-3.5rem] md:mt-[-10rem]"),
                l(t, "class", "mx-auto px-28 md:px-0 relative md:left-[-10rem]"),
                l(e, "class", "w-full h-full flex flex-center flex-col items-center justify-center mt-[-36rem] lg:mt-0")
        },
        m(n, r) {
            N(n, e, r),
                c(e, s),
                i[2](s),
                c(e, o),
                c(e, t),
                i[3](e)
        },
        p: m,
        i: m,
        o: m,
        d(n) {
            n && f(e),
                i[2](null),
                i[3](null)
        }
    }
}
function I(i, e, s) {
    let o, t;
    S(n);
    function n() {
        A(t, 7),
            O(o)
    }
    function r(a) {
        E[a ? "unshift" : "push"](() => {
            o = a,
                s(0, o)
        }
        )
    }
    function T(a) {
        E[a ? "unshift" : "push"](() => {
            t = a,
                s(1, t)
        }
        )
    }
    return [o, t, r, T]
}
class H extends u {
    constructor(e) {
        super(),
            p(this, e, I, b, v, {})
    }
}
export { H as default };
