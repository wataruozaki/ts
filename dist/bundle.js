!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var c = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(c.exports, c, c.exports, n), (c.l = !0), c.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var c in e)
          n.d(
            r,
            c,
            function (t) {
              return e[t];
            }.bind(null, c)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/dist/"),
    n((n.s = 0));
})([
  function (e, t, n) {
    "use strict";
    n.r(t);
    class r {
      constructor() {}
      get totalScore() {
        return s.getInstance().activeElementsScore.reduce((e, t) => e + t, 0);
      }
      render() {
        document.querySelector(".score__number").textContent = String(
          this.totalScore
        );
      }
      static getInstance() {
        return r.instance || (r.instance = new r()), r.instance;
      }
    }
    class c {
      constructor(e) {
        (this.element = e),
          e.addEventListener("click", this.clickEventHandler.bind(this));
      }
      clickEventHandler() {
        this.element.classList.toggle("food--active");
        r.getInstance().render();
      }
    }
    class s {
      constructor() {
        (this.elements = document.querySelectorAll(".food")),
          (this._activeElements = []),
          (this._activeElementsScore = []),
          this.elements.forEach((e) => {
            new c(e);
          });
      }
      get activeElements() {
        return (
          (this._activeElements = []),
          this.elements.forEach((e) => {
            e.classList.contains("food--active") &&
              this._activeElements.push(e);
          }),
          this._activeElements
        );
      }
      get activeElementsScore() {
        return (
          (this._activeElementsScore = []),
          this.activeElements.forEach((e) => {
            const t = e.querySelector(".food__score");
            t && this._activeElementsScore.push(Number(t.textContent));
          }),
          this._activeElementsScore
        );
      }
      static getInstance() {
        return s.instance || (s.instance = new s()), s.instance;
      }
    }
    s.getInstance();
  },
]);
