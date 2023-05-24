!(function (t, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define("mitchTree", [], n)
    : "object" == typeof exports
    ? (exports.mitchTree = n())
    : ((t.d3 = t.d3 || {}), (t.d3.mitchTree = n()));
})(this, function () {
  return (function (t) {
    var n = {};
    function e(i) {
      if (n[i]) return n[i].exports;
      var r = (n[i] = { i: i, l: !1, exports: {} });
      return t[i].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
    }
    return (
      (e.m = t),
      (e.c = n),
      (e.d = function (t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: i });
      }),
      (e.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (e.t = function (t, n) {
        if ((1 & n && (t = e(t)), 8 & n)) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (
          (e.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var r in t)
            e.d(
              i,
              r,
              function (n) {
                return t[n];
              }.bind(null, r)
            );
        return i;
      }),
      (e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(n, "a", n), n;
      }),
      (e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (e.p = "./dist"),
      e((e.s = 0))
    );
  })([
    function (t, n, e) {
      "use strict";
      e.r(n);
      var i = {};
      e.r(i),
        e.d(i, "cluster", function () {
          return it;
        }),
        e.d(i, "hierarchy", function () {
          return ut;
        }),
        e.d(i, "pack", function () {
          return Ft;
        }),
        e.d(i, "packSiblings", function () {
          return Et;
        }),
        e.d(i, "packEnclose", function () {
          return lt;
        }),
        e.d(i, "partition", function () {
          return zt;
        }),
        e.d(i, "stratify", function () {
          return qt;
        }),
        e.d(i, "tree", function () {
          return Yt;
        }),
        e.d(i, "treemap", function () {
          return Kt;
        }),
        e.d(i, "treemapBinary", function () {
          return tn;
        }),
        e.d(i, "treemapDice", function () {
          return Nt;
        }),
        e.d(i, "treemapSlice", function () {
          return Gt;
        }),
        e.d(i, "treemapSliceDice", function () {
          return nn;
        }),
        e.d(i, "treemapSquarify", function () {
          return Jt;
        }),
        e.d(i, "treemapResquarify", function () {
          return en;
        });
      var r = {};
      e.r(r),
        e.d(r, "zoom", function () {
          return $i;
        }),
        e.d(r, "zoomTransform", function () {
          return Pi;
        }),
        e.d(r, "zoomIdentity", function () {
          return zi;
        });
      var u = "http://www.w3.org/1999/xhtml",
        o = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: u,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        s = function (t) {
          var n = (t += ""),
            e = n.indexOf(":");
          return (
            e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
            o.hasOwnProperty(n) ? { space: o[n], local: t } : t
          );
        };
      var a = function (t) {
        var n = s(t);
        return (n.local
          ? function (t) {
              return function () {
                return this.ownerDocument.createElementNS(t.space, t.local);
              };
            }
          : function (t) {
              return function () {
                var n = this.ownerDocument,
                  e = this.namespaceURI;
                return e === u && n.documentElement.namespaceURI === u
                  ? n.createElement(t)
                  : n.createElementNS(e, t);
              };
            })(n);
      };
      function h() {}
      var c = function (t) {
        return null == t
          ? h
          : function () {
              return this.querySelector(t);
            };
      };
      function l() {
        return [];
      }
      var f = function (t) {
          return null == t
            ? l
            : function () {
                return this.querySelectorAll(t);
              };
        },
        p = function (t) {
          return function () {
            return this.matches(t);
          };
        },
        _ = function (t) {
          return new Array(t.length);
        };
      function d(t, n) {
        (this.ownerDocument = t.ownerDocument),
          (this.namespaceURI = t.namespaceURI),
          (this._next = null),
          (this._parent = t),
          (this.__data__ = n);
      }
      d.prototype = {
        constructor: d,
        appendChild: function (t) {
          return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function (t, n) {
          return this._parent.insertBefore(t, n);
        },
        querySelector: function (t) {
          return this._parent.querySelector(t);
        },
        querySelectorAll: function (t) {
          return this._parent.querySelectorAll(t);
        },
      };
      var y = "$";
      function g(t, n, e, i, r, u) {
        for (var o, s = 0, a = n.length, h = u.length; s < h; ++s)
          (o = n[s])
            ? ((o.__data__ = u[s]), (i[s] = o))
            : (e[s] = new d(t, u[s]));
        for (; s < a; ++s) (o = n[s]) && (r[s] = o);
      }
      function v(t, n, e, i, r, u, o) {
        var s,
          a,
          h,
          c = {},
          l = n.length,
          f = u.length,
          p = new Array(l);
        for (s = 0; s < l; ++s)
          (a = n[s]) &&
            ((p[s] = h = y + o.call(a, a.__data__, s, n)),
            h in c ? (r[s] = a) : (c[h] = a));
        for (s = 0; s < f; ++s)
          (a = c[(h = y + o.call(t, u[s], s, u))])
            ? ((i[s] = a), (a.__data__ = u[s]), (c[h] = null))
            : (e[s] = new d(t, u[s]));
        for (s = 0; s < l; ++s) (a = n[s]) && c[p[s]] === a && (r[s] = a);
      }
      function m(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      }
      var x = function (t) {
        return (
          (t.ownerDocument && t.ownerDocument.defaultView) ||
          (t.document && t) ||
          t.defaultView
        );
      };
      function A(t, n) {
        return (
          t.style.getPropertyValue(n) ||
          x(t).getComputedStyle(t, null).getPropertyValue(n)
        );
      }
      function w(t) {
        return t.trim().split(/^|\s+/);
      }
      function b(t) {
        return t.classList || new E(t);
      }
      function E(t) {
        (this._node = t), (this._names = w(t.getAttribute("class") || ""));
      }
      function B(t, n) {
        for (var e = b(t), i = -1, r = n.length; ++i < r; ) e.add(n[i]);
      }
      function C(t, n) {
        for (var e = b(t), i = -1, r = n.length; ++i < r; ) e.remove(n[i]);
      }
      E.prototype = {
        add: function (t) {
          this._names.indexOf(t) < 0 &&
            (this._names.push(t),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function (t) {
          var n = this._names.indexOf(t);
          n >= 0 &&
            (this._names.splice(n, 1),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function (t) {
          return this._names.indexOf(t) >= 0;
        },
      };
      function D() {
        this.textContent = "";
      }
      function k() {
        this.innerHTML = "";
      }
      function F() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function S() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function M() {
        return null;
      }
      function T() {
        var t = this.parentNode;
        t && t.removeChild(this);
      }
      function O() {
        return this.parentNode.insertBefore(
          this.cloneNode(!1),
          this.nextSibling
        );
      }
      function N() {
        return this.parentNode.insertBefore(
          this.cloneNode(!0),
          this.nextSibling
        );
      }
      var z = {},
        P = null;
      "undefined" != typeof document &&
        ("onmouseenter" in document.documentElement ||
          (z = { mouseenter: "mouseover", mouseleave: "mouseout" }));
      function j(t, n, e) {
        return (
          (t = W(t, n, e)),
          function (n) {
            var e = n.relatedTarget;
            (e && (e === this || 8 & e.compareDocumentPosition(this))) ||
              t.call(this, n);
          }
        );
      }
      function W(t, n, e) {
        return function (i) {
          var r = P;
          P = i;
          try {
            t.call(this, this.__data__, n, e);
          } finally {
            P = r;
          }
        };
      }
      function H(t) {
        return function () {
          var n = this.__on;
          if (n) {
            for (var e, i = 0, r = -1, u = n.length; i < u; ++i)
              (e = n[i]),
                (t.type && e.type !== t.type) || e.name !== t.name
                  ? (n[++r] = e)
                  : this.removeEventListener(e.type, e.listener, e.capture);
            ++r ? (n.length = r) : delete this.__on;
          }
        };
      }
      function R(t, n, e) {
        var i = z.hasOwnProperty(t.type) ? j : W;
        return function (r, u, o) {
          var s,
            a = this.__on,
            h = i(n, u, o);
          if (a)
            for (var c = 0, l = a.length; c < l; ++c)
              if ((s = a[c]).type === t.type && s.name === t.name)
                return (
                  this.removeEventListener(s.type, s.listener, s.capture),
                  this.addEventListener(
                    s.type,
                    (s.listener = h),
                    (s.capture = e)
                  ),
                  void (s.value = n)
                );
          this.addEventListener(t.type, h, e),
            (s = {
              type: t.type,
              name: t.name,
              value: n,
              listener: h,
              capture: e,
            }),
            a ? a.push(s) : (this.__on = [s]);
        };
      }
      function q(t, n, e, i) {
        var r = P;
        (t.sourceEvent = P), (P = t);
        try {
          return n.apply(e, i);
        } finally {
          P = r;
        }
      }
      function I(t, n, e) {
        var i = x(t),
          r = i.CustomEvent;
        "function" == typeof r
          ? (r = new r(n, e))
          : ((r = i.document.createEvent("Event")),
            e
              ? (r.initEvent(n, e.bubbles, e.cancelable), (r.detail = e.detail))
              : r.initEvent(n, !1, !1)),
          t.dispatchEvent(r);
      }
      var L = [null];
      function V(t, n) {
        (this._groups = t), (this._parents = n);
      }
      function $() {
        return new V([[document.documentElement]], L);
      }
      V.prototype = $.prototype = {
        constructor: V,
        select: function (t) {
          "function" != typeof t && (t = c(t));
          for (
            var n = this._groups, e = n.length, i = new Array(e), r = 0;
            r < e;
            ++r
          )
            for (
              var u,
                o,
                s = n[r],
                a = s.length,
                h = (i[r] = new Array(a)),
                l = 0;
              l < a;
              ++l
            )
              (u = s[l]) &&
                (o = t.call(u, u.__data__, l, s)) &&
                ("__data__" in u && (o.__data__ = u.__data__), (h[l] = o));
          return new V(i, this._parents);
        },
        selectAll: function (t) {
          "function" != typeof t && (t = f(t));
          for (
            var n = this._groups, e = n.length, i = [], r = [], u = 0;
            u < e;
            ++u
          )
            for (var o, s = n[u], a = s.length, h = 0; h < a; ++h)
              (o = s[h]) && (i.push(t.call(o, o.__data__, h, s)), r.push(o));
          return new V(i, r);
        },
        filter: function (t) {
          "function" != typeof t && (t = p(t));
          for (
            var n = this._groups, e = n.length, i = new Array(e), r = 0;
            r < e;
            ++r
          )
            for (
              var u, o = n[r], s = o.length, a = (i[r] = []), h = 0;
              h < s;
              ++h
            )
              (u = o[h]) && t.call(u, u.__data__, h, o) && a.push(u);
          return new V(i, this._parents);
        },
        data: function (t, n) {
          if (!t)
            return (
              (_ = new Array(this.size())),
              (c = -1),
              this.each(function (t) {
                _[++c] = t;
              }),
              _
            );
          var e,
            i = n ? v : g,
            r = this._parents,
            u = this._groups;
          "function" != typeof t &&
            ((e = t),
            (t = function () {
              return e;
            }));
          for (
            var o = u.length,
              s = new Array(o),
              a = new Array(o),
              h = new Array(o),
              c = 0;
            c < o;
            ++c
          ) {
            var l = r[c],
              f = u[c],
              p = f.length,
              _ = t.call(l, l && l.__data__, c, r),
              d = _.length,
              y = (a[c] = new Array(d)),
              m = (s[c] = new Array(d));
            i(l, f, y, m, (h[c] = new Array(p)), _, n);
            for (var x, A, w = 0, b = 0; w < d; ++w)
              if ((x = y[w])) {
                for (w >= b && (b = w + 1); !(A = m[b]) && ++b < d; );
                x._next = A || null;
              }
          }
          return ((s = new V(s, r))._enter = a), (s._exit = h), s;
        },
        enter: function () {
          return new V(this._enter || this._groups.map(_), this._parents);
        },
        exit: function () {
          return new V(this._exit || this._groups.map(_), this._parents);
        },
        join: function (t, n, e) {
          var i = this.enter(),
            r = this,
            u = this.exit();
          return (
            (i = "function" == typeof t ? t(i) : i.append(t + "")),
            null != n && (r = n(r)),
            null == e ? u.remove() : e(u),
            i && r ? i.merge(r).order() : r
          );
        },
        merge: function (t) {
          for (
            var n = this._groups,
              e = t._groups,
              i = n.length,
              r = e.length,
              u = Math.min(i, r),
              o = new Array(i),
              s = 0;
            s < u;
            ++s
          )
            for (
              var a,
                h = n[s],
                c = e[s],
                l = h.length,
                f = (o[s] = new Array(l)),
                p = 0;
              p < l;
              ++p
            )
              (a = h[p] || c[p]) && (f[p] = a);
          for (; s < i; ++s) o[s] = n[s];
          return new V(o, this._parents);
        },
        order: function () {
          for (var t = this._groups, n = -1, e = t.length; ++n < e; )
            for (var i, r = t[n], u = r.length - 1, o = r[u]; --u >= 0; )
              (i = r[u]) &&
                (o &&
                  4 ^ i.compareDocumentPosition(o) &&
                  o.parentNode.insertBefore(i, o),
                (o = i));
          return this;
        },
        sort: function (t) {
          function n(n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e;
          }
          t || (t = m);
          for (
            var e = this._groups, i = e.length, r = new Array(i), u = 0;
            u < i;
            ++u
          ) {
            for (
              var o, s = e[u], a = s.length, h = (r[u] = new Array(a)), c = 0;
              c < a;
              ++c
            )
              (o = s[c]) && (h[c] = o);
            h.sort(n);
          }
          return new V(r, this._parents).order();
        },
        call: function () {
          var t = arguments[0];
          return (arguments[0] = this), t.apply(null, arguments), this;
        },
        nodes: function () {
          var t = new Array(this.size()),
            n = -1;
          return (
            this.each(function () {
              t[++n] = this;
            }),
            t
          );
        },
        node: function () {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var i = t[n], r = 0, u = i.length; r < u; ++r) {
              var o = i[r];
              if (o) return o;
            }
          return null;
        },
        size: function () {
          var t = 0;
          return (
            this.each(function () {
              ++t;
            }),
            t
          );
        },
        empty: function () {
          return !this.node();
        },
        each: function (t) {
          for (var n = this._groups, e = 0, i = n.length; e < i; ++e)
            for (var r, u = n[e], o = 0, s = u.length; o < s; ++o)
              (r = u[o]) && t.call(r, r.__data__, o, u);
          return this;
        },
        attr: function (t, n) {
          var e = s(t);
          if (arguments.length < 2) {
            var i = this.node();
            return e.local
              ? i.getAttributeNS(e.space, e.local)
              : i.getAttribute(e);
          }
          return this.each(
            (null == n
              ? e.local
                ? function (t) {
                    return function () {
                      this.removeAttributeNS(t.space, t.local);
                    };
                  }
                : function (t) {
                    return function () {
                      this.removeAttribute(t);
                    };
                  }
              : "function" == typeof n
              ? e.local
                ? function (t, n) {
                    return function () {
                      var e = n.apply(this, arguments);
                      null == e
                        ? this.removeAttributeNS(t.space, t.local)
                        : this.setAttributeNS(t.space, t.local, e);
                    };
                  }
                : function (t, n) {
                    return function () {
                      var e = n.apply(this, arguments);
                      null == e
                        ? this.removeAttribute(t)
                        : this.setAttribute(t, e);
                    };
                  }
              : e.local
              ? function (t, n) {
                  return function () {
                    this.setAttributeNS(t.space, t.local, n);
                  };
                }
              : function (t, n) {
                  return function () {
                    this.setAttribute(t, n);
                  };
                })(e, n)
          );
        },
        style: function (t, n, e) {
          return arguments.length > 1
            ? this.each(
                (null == n
                  ? function (t) {
                      return function () {
                        this.style.removeProperty(t);
                      };
                    }
                  : "function" == typeof n
                  ? function (t, n, e) {
                      return function () {
                        var i = n.apply(this, arguments);
                        null == i
                          ? this.style.removeProperty(t)
                          : this.style.setProperty(t, i, e);
                      };
                    }
                  : function (t, n, e) {
                      return function () {
                        this.style.setProperty(t, n, e);
                      };
                    })(t, n, null == e ? "" : e)
              )
            : A(this.node(), t);
        },
        property: function (t, n) {
          return arguments.length > 1
            ? this.each(
                (null == n
                  ? function (t) {
                      return function () {
                        delete this[t];
                      };
                    }
                  : "function" == typeof n
                  ? function (t, n) {
                      return function () {
                        var e = n.apply(this, arguments);
                        null == e ? delete this[t] : (this[t] = e);
                      };
                    }
                  : function (t, n) {
                      return function () {
                        this[t] = n;
                      };
                    })(t, n)
              )
            : this.node()[t];
        },
        classed: function (t, n) {
          var e = w(t + "");
          if (arguments.length < 2) {
            for (var i = b(this.node()), r = -1, u = e.length; ++r < u; )
              if (!i.contains(e[r])) return !1;
            return !0;
          }
          return this.each(
            ("function" == typeof n
              ? function (t, n) {
                  return function () {
                    (n.apply(this, arguments) ? B : C)(this, t);
                  };
                }
              : n
              ? function (t) {
                  return function () {
                    B(this, t);
                  };
                }
              : function (t) {
                  return function () {
                    C(this, t);
                  };
                })(e, n)
          );
        },
        text: function (t) {
          return arguments.length
            ? this.each(
                null == t
                  ? D
                  : ("function" == typeof t
                      ? function (t) {
                          return function () {
                            var n = t.apply(this, arguments);
                            this.textContent = null == n ? "" : n;
                          };
                        }
                      : function (t) {
                          return function () {
                            this.textContent = t;
                          };
                        })(t)
              )
            : this.node().textContent;
        },
        html: function (t) {
          return arguments.length
            ? this.each(
                null == t
                  ? k
                  : ("function" == typeof t
                      ? function (t) {
                          return function () {
                            var n = t.apply(this, arguments);
                            this.innerHTML = null == n ? "" : n;
                          };
                        }
                      : function (t) {
                          return function () {
                            this.innerHTML = t;
                          };
                        })(t)
              )
            : this.node().innerHTML;
        },
        raise: function () {
          return this.each(F);
        },
        lower: function () {
          return this.each(S);
        },
        append: function (t) {
          var n = "function" == typeof t ? t : a(t);
          return this.select(function () {
            return this.appendChild(n.apply(this, arguments));
          });
        },
        insert: function (t, n) {
          var e = "function" == typeof t ? t : a(t),
            i = null == n ? M : "function" == typeof n ? n : c(n);
          return this.select(function () {
            return this.insertBefore(
              e.apply(this, arguments),
              i.apply(this, arguments) || null
            );
          });
        },
        remove: function () {
          return this.each(T);
        },
        clone: function (t) {
          return this.select(t ? N : O);
        },
        datum: function (t) {
          return arguments.length
            ? this.property("__data__", t)
            : this.node().__data__;
        },
        on: function (t, n, e) {
          var i,
            r,
            u = (function (t) {
              return t
                .trim()
                .split(/^|\s+/)
                .map(function (t) {
                  var n = "",
                    e = t.indexOf(".");
                  return (
                    e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
                    { type: t, name: n }
                  );
                });
            })(t + ""),
            o = u.length;
          if (!(arguments.length < 2)) {
            for (s = n ? R : H, null == e && (e = !1), i = 0; i < o; ++i)
              this.each(s(u[i], n, e));
            return this;
          }
          var s = this.node().__on;
          if (s)
            for (var a, h = 0, c = s.length; h < c; ++h)
              for (i = 0, a = s[h]; i < o; ++i)
                if ((r = u[i]).type === a.type && r.name === a.name)
                  return a.value;
        },
        dispatch: function (t, n) {
          return this.each(
            ("function" == typeof n
              ? function (t, n) {
                  return function () {
                    return I(this, t, n.apply(this, arguments));
                  };
                }
              : function (t, n) {
                  return function () {
                    return I(this, t, n);
                  };
                })(t, n)
          );
        },
      };
      var U = $,
        X = function (t) {
          return "string" == typeof t
            ? new V([[document.querySelector(t)]], [document.documentElement])
            : new V([[t]], L);
        },
        Y = 0;
      function G() {
        this._ = "@" + (++Y).toString(36);
      }
      G.prototype = function () {
        return new G();
      }.prototype = {
        constructor: G,
        get: function (t) {
          for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return;
          return t[n];
        },
        set: function (t, n) {
          return (t[this._] = n);
        },
        remove: function (t) {
          return this._ in t && delete t[this._];
        },
        toString: function () {
          return this._;
        },
      };
      var Z = function () {
          for (var t, n = P; (t = n.sourceEvent); ) n = t;
          return n;
        },
        Q = function (t, n) {
          var e = t.ownerSVGElement || t;
          if (e.createSVGPoint) {
            var i = e.createSVGPoint();
            return (
              (i.x = n.clientX),
              (i.y = n.clientY),
              [(i = i.matrixTransform(t.getScreenCTM().inverse())).x, i.y]
            );
          }
          var r = t.getBoundingClientRect();
          return [
            n.clientX - r.left - t.clientLeft,
            n.clientY - r.top - t.clientTop,
          ];
        },
        J = function (t) {
          var n = Z();
          return n.changedTouches && (n = n.changedTouches[0]), Q(t, n);
        },
        K = function (t, n, e) {
          arguments.length < 3 && ((e = n), (n = Z().changedTouches));
          for (var i, r = 0, u = n ? n.length : 0; r < u; ++r)
            if ((i = n[r]).identifier === e) return Q(t, i);
          return null;
        };
      function tt(t, n) {
        return t.parent === n.parent ? 1 : 2;
      }
      function nt(t, n) {
        return t + n.x;
      }
      function et(t, n) {
        return Math.max(t, n.y);
      }
      var it = function () {
        var t = tt,
          n = 1,
          e = 1,
          i = !1;
        function r(r) {
          var u,
            o = 0;
          r.eachAfter(function (n) {
            var e = n.children;
            e
              ? ((n.x = (function (t) {
                  return t.reduce(nt, 0) / t.length;
                })(e)),
                (n.y = (function (t) {
                  return 1 + t.reduce(et, 0);
                })(e)))
              : ((n.x = u ? (o += t(n, u)) : 0), (n.y = 0), (u = n));
          });
          var s = (function (t) {
              for (var n; (n = t.children); ) t = n[0];
              return t;
            })(r),
            a = (function (t) {
              for (var n; (n = t.children); ) t = n[n.length - 1];
              return t;
            })(r),
            h = s.x - t(s, a) / 2,
            c = a.x + t(a, s) / 2;
          return r.eachAfter(
            i
              ? function (t) {
                  (t.x = (t.x - r.x) * n), (t.y = (r.y - t.y) * e);
                }
              : function (t) {
                  (t.x = ((t.x - h) / (c - h)) * n),
                    (t.y = (1 - (r.y ? t.y / r.y : 1)) * e);
                }
          );
        }
        return (
          (r.separation = function (n) {
            return arguments.length ? ((t = n), r) : t;
          }),
          (r.size = function (t) {
            return arguments.length
              ? ((i = !1), (n = +t[0]), (e = +t[1]), r)
              : i
              ? null
              : [n, e];
          }),
          (r.nodeSize = function (t) {
            return arguments.length
              ? ((i = !0), (n = +t[0]), (e = +t[1]), r)
              : i
              ? [n, e]
              : null;
          }),
          r
        );
      };
      function rt(t) {
        var n = 0,
          e = t.children,
          i = e && e.length;
        if (i) for (; --i >= 0; ) n += e[i].value;
        else n = 1;
        t.value = n;
      }
      function ut(t, n) {
        var e,
          i,
          r,
          u,
          o,
          s = new ht(t),
          a = +t.value && (s.value = t.value),
          h = [s];
        for (null == n && (n = ot); (e = h.pop()); )
          if (
            (a && (e.value = +e.data.value), (r = n(e.data)) && (o = r.length))
          )
            for (e.children = new Array(o), u = o - 1; u >= 0; --u)
              h.push((i = e.children[u] = new ht(r[u]))),
                (i.parent = e),
                (i.depth = e.depth + 1);
        return s.eachBefore(at);
      }
      function ot(t) {
        return t.children;
      }
      function st(t) {
        t.data = t.data.data;
      }
      function at(t) {
        var n = 0;
        do {
          t.height = n;
        } while ((t = t.parent) && t.height < ++n);
      }
      function ht(t) {
        (this.data = t), (this.depth = this.height = 0), (this.parent = null);
      }
      ht.prototype = ut.prototype = {
        constructor: ht,
        count: function () {
          return this.eachAfter(rt);
        },
        each: function (t) {
          var n,
            e,
            i,
            r,
            u = this,
            o = [u];
          do {
            for (n = o.reverse(), o = []; (u = n.pop()); )
              if ((t(u), (e = u.children)))
                for (i = 0, r = e.length; i < r; ++i) o.push(e[i]);
          } while (o.length);
          return this;
        },
        eachAfter: function (t) {
          for (var n, e, i, r = this, u = [r], o = []; (r = u.pop()); )
            if ((o.push(r), (n = r.children)))
              for (e = 0, i = n.length; e < i; ++e) u.push(n[e]);
          for (; (r = o.pop()); ) t(r);
          return this;
        },
        eachBefore: function (t) {
          for (var n, e, i = this, r = [i]; (i = r.pop()); )
            if ((t(i), (n = i.children)))
              for (e = n.length - 1; e >= 0; --e) r.push(n[e]);
          return this;
        },
        sum: function (t) {
          return this.eachAfter(function (n) {
            for (
              var e = +t(n.data) || 0, i = n.children, r = i && i.length;
              --r >= 0;

            )
              e += i[r].value;
            n.value = e;
          });
        },
        sort: function (t) {
          return this.eachBefore(function (n) {
            n.children && n.children.sort(t);
          });
        },
        path: function (t) {
          for (
            var n = this,
              e = (function (t, n) {
                if (t === n) return t;
                var e = t.ancestors(),
                  i = n.ancestors(),
                  r = null;
                for (t = e.pop(), n = i.pop(); t === n; )
                  (r = t), (t = e.pop()), (n = i.pop());
                return r;
              })(n, t),
              i = [n];
            n !== e;

          )
            (n = n.parent), i.push(n);
          for (var r = i.length; t !== e; ) i.splice(r, 0, t), (t = t.parent);
          return i;
        },
        ancestors: function () {
          for (var t = this, n = [t]; (t = t.parent); ) n.push(t);
          return n;
        },
        descendants: function () {
          var t = [];
          return (
            this.each(function (n) {
              t.push(n);
            }),
            t
          );
        },
        leaves: function () {
          var t = [];
          return (
            this.eachBefore(function (n) {
              n.children || t.push(n);
            }),
            t
          );
        },
        links: function () {
          var t = this,
            n = [];
          return (
            t.each(function (e) {
              e !== t && n.push({ source: e.parent, target: e });
            }),
            n
          );
        },
        copy: function () {
          return ut(this).eachBefore(st);
        },
      };
      var ct = Array.prototype.slice;
      var lt = function (t) {
        for (
          var n,
            e,
            i = 0,
            r = (t = (function (t) {
              for (var n, e, i = t.length; i; )
                (e = (Math.random() * i--) | 0),
                  (n = t[i]),
                  (t[i] = t[e]),
                  (t[e] = n);
              return t;
            })(ct.call(t))).length,
            u = [];
          i < r;

        )
          (n = t[i]), e && _t(e, n) ? ++i : ((e = yt((u = ft(u, n)))), (i = 0));
        return e;
      };
      function ft(t, n) {
        var e, i;
        if (dt(n, t)) return [n];
        for (e = 0; e < t.length; ++e)
          if (pt(n, t[e]) && dt(gt(t[e], n), t)) return [t[e], n];
        for (e = 0; e < t.length - 1; ++e)
          for (i = e + 1; i < t.length; ++i)
            if (
              pt(gt(t[e], t[i]), n) &&
              pt(gt(t[e], n), t[i]) &&
              pt(gt(t[i], n), t[e]) &&
              dt(vt(t[e], t[i], n), t)
            )
              return [t[e], t[i], n];
        throw new Error();
      }
      function pt(t, n) {
        var e = t.r - n.r,
          i = n.x - t.x,
          r = n.y - t.y;
        return e < 0 || e * e < i * i + r * r;
      }
      function _t(t, n) {
        var e = t.r - n.r + 1e-6,
          i = n.x - t.x,
          r = n.y - t.y;
        return e > 0 && e * e > i * i + r * r;
      }
      function dt(t, n) {
        for (var e = 0; e < n.length; ++e) if (!_t(t, n[e])) return !1;
        return !0;
      }
      function yt(t) {
        switch (t.length) {
          case 1:
            return { x: (n = t[0]).x, y: n.y, r: n.r };
          case 2:
            return gt(t[0], t[1]);
          case 3:
            return vt(t[0], t[1], t[2]);
        }
        var n;
      }
      function gt(t, n) {
        var e = t.x,
          i = t.y,
          r = t.r,
          u = n.x,
          o = n.y,
          s = n.r,
          a = u - e,
          h = o - i,
          c = s - r,
          l = Math.sqrt(a * a + h * h);
        return {
          x: (e + u + (a / l) * c) / 2,
          y: (i + o + (h / l) * c) / 2,
          r: (l + r + s) / 2,
        };
      }
      function vt(t, n, e) {
        var i = t.x,
          r = t.y,
          u = t.r,
          o = n.x,
          s = n.y,
          a = n.r,
          h = e.x,
          c = e.y,
          l = e.r,
          f = i - o,
          p = i - h,
          _ = r - s,
          d = r - c,
          y = a - u,
          g = l - u,
          v = i * i + r * r - u * u,
          m = v - o * o - s * s + a * a,
          x = v - h * h - c * c + l * l,
          A = p * _ - f * d,
          w = (_ * x - d * m) / (2 * A) - i,
          b = (d * y - _ * g) / A,
          E = (p * m - f * x) / (2 * A) - r,
          B = (f * g - p * y) / A,
          C = b * b + B * B - 1,
          D = 2 * (u + w * b + E * B),
          k = w * w + E * E - u * u,
          F = -(C ? (D + Math.sqrt(D * D - 4 * C * k)) / (2 * C) : k / D);
        return { x: i + w + b * F, y: r + E + B * F, r: F };
      }
      function mt(t, n, e) {
        var i,
          r,
          u,
          o,
          s = t.x - n.x,
          a = t.y - n.y,
          h = s * s + a * a;
        h
          ? ((r = n.r + e.r),
            (r *= r),
            (o = t.r + e.r),
            r > (o *= o)
              ? ((i = (h + o - r) / (2 * h)),
                (u = Math.sqrt(Math.max(0, o / h - i * i))),
                (e.x = t.x - i * s - u * a),
                (e.y = t.y - i * a + u * s))
              : ((i = (h + r - o) / (2 * h)),
                (u = Math.sqrt(Math.max(0, r / h - i * i))),
                (e.x = n.x + i * s - u * a),
                (e.y = n.y + i * a + u * s)))
          : ((e.x = n.x + e.r), (e.y = n.y));
      }
      function xt(t, n) {
        var e = t.r + n.r - 1e-6,
          i = n.x - t.x,
          r = n.y - t.y;
        return e > 0 && e * e > i * i + r * r;
      }
      function At(t) {
        var n = t._,
          e = t.next._,
          i = n.r + e.r,
          r = (n.x * e.r + e.x * n.r) / i,
          u = (n.y * e.r + e.y * n.r) / i;
        return r * r + u * u;
      }
      function wt(t) {
        (this._ = t), (this.next = null), (this.previous = null);
      }
      function bt(t) {
        if (!(r = t.length)) return 0;
        var n, e, i, r, u, o, s, a, h, c, l;
        if ((((n = t[0]).x = 0), (n.y = 0), !(r > 1))) return n.r;
        if (((e = t[1]), (n.x = -e.r), (e.x = n.r), (e.y = 0), !(r > 2)))
          return n.r + e.r;
        mt(e, n, (i = t[2])),
          (n = new wt(n)),
          (e = new wt(e)),
          (i = new wt(i)),
          (n.next = i.previous = e),
          (e.next = n.previous = i),
          (i.next = e.previous = n);
        t: for (s = 3; s < r; ++s) {
          mt(n._, e._, (i = t[s])),
            (i = new wt(i)),
            (a = e.next),
            (h = n.previous),
            (c = e._.r),
            (l = n._.r);
          do {
            if (c <= l) {
              if (xt(a._, i._)) {
                (e = a), (n.next = e), (e.previous = n), --s;
                continue t;
              }
              (c += a._.r), (a = a.next);
            } else {
              if (xt(h._, i._)) {
                ((n = h).next = e), (e.previous = n), --s;
                continue t;
              }
              (l += h._.r), (h = h.previous);
            }
          } while (a !== h.next);
          for (
            i.previous = n, i.next = e, n.next = e.previous = e = i, u = At(n);
            (i = i.next) !== e;

          )
            (o = At(i)) < u && ((n = i), (u = o));
          e = n.next;
        }
        for (n = [e._], i = e; (i = i.next) !== e; ) n.push(i._);
        for (i = lt(n), s = 0; s < r; ++s) ((n = t[s]).x -= i.x), (n.y -= i.y);
        return i.r;
      }
      var Et = function (t) {
        return bt(t), t;
      };
      function Bt(t) {
        if ("function" != typeof t) throw new Error();
        return t;
      }
      function Ct() {
        return 0;
      }
      var Dt = function (t) {
        return function () {
          return t;
        };
      };
      function kt(t) {
        return Math.sqrt(t.value);
      }
      var Ft = function () {
        var t = null,
          n = 1,
          e = 1,
          i = Ct;
        function r(r) {
          return (
            (r.x = n / 2),
            (r.y = e / 2),
            t
              ? r.eachBefore(St(t)).eachAfter(Mt(i, 0.5)).eachBefore(Tt(1))
              : r
                  .eachBefore(St(kt))
                  .eachAfter(Mt(Ct, 1))
                  .eachAfter(Mt(i, r.r / Math.min(n, e)))
                  .eachBefore(Tt(Math.min(n, e) / (2 * r.r))),
            r
          );
        }
        return (
          (r.radius = function (n) {
            return arguments.length
              ? ((t = null == (e = n) ? null : Bt(e)), r)
              : t;
            var e;
          }),
          (r.size = function (t) {
            return arguments.length ? ((n = +t[0]), (e = +t[1]), r) : [n, e];
          }),
          (r.padding = function (t) {
            return arguments.length
              ? ((i = "function" == typeof t ? t : Dt(+t)), r)
              : i;
          }),
          r
        );
      };
      function St(t) {
        return function (n) {
          n.children || (n.r = Math.max(0, +t(n) || 0));
        };
      }
      function Mt(t, n) {
        return function (e) {
          if ((i = e.children)) {
            var i,
              r,
              u,
              o = i.length,
              s = t(e) * n || 0;
            if (s) for (r = 0; r < o; ++r) i[r].r += s;
            if (((u = bt(i)), s)) for (r = 0; r < o; ++r) i[r].r -= s;
            e.r = u + s;
          }
        };
      }
      function Tt(t) {
        return function (n) {
          var e = n.parent;
          (n.r *= t), e && ((n.x = e.x + t * n.x), (n.y = e.y + t * n.y));
        };
      }
      var Ot = function (t) {
          (t.x0 = Math.round(t.x0)),
            (t.y0 = Math.round(t.y0)),
            (t.x1 = Math.round(t.x1)),
            (t.y1 = Math.round(t.y1));
        },
        Nt = function (t, n, e, i, r) {
          for (
            var u,
              o = t.children,
              s = -1,
              a = o.length,
              h = t.value && (i - n) / t.value;
            ++s < a;

          )
            ((u = o[s]).y0 = e),
              (u.y1 = r),
              (u.x0 = n),
              (u.x1 = n += u.value * h);
        },
        zt = function () {
          var t = 1,
            n = 1,
            e = 0,
            i = !1;
          function r(r) {
            var u = r.height + 1;
            return (
              (r.x0 = r.y0 = e),
              (r.x1 = t),
              (r.y1 = n / u),
              r.eachBefore(
                (function (t, n) {
                  return function (i) {
                    i.children &&
                      Nt(
                        i,
                        i.x0,
                        (t * (i.depth + 1)) / n,
                        i.x1,
                        (t * (i.depth + 2)) / n
                      );
                    var r = i.x0,
                      u = i.y0,
                      o = i.x1 - e,
                      s = i.y1 - e;
                    o < r && (r = o = (r + o) / 2),
                      s < u && (u = s = (u + s) / 2),
                      (i.x0 = r),
                      (i.y0 = u),
                      (i.x1 = o),
                      (i.y1 = s);
                  };
                })(n, u)
              ),
              i && r.eachBefore(Ot),
              r
            );
          }
          return (
            (r.round = function (t) {
              return arguments.length ? ((i = !!t), r) : i;
            }),
            (r.size = function (e) {
              return arguments.length ? ((t = +e[0]), (n = +e[1]), r) : [t, n];
            }),
            (r.padding = function (t) {
              return arguments.length ? ((e = +t), r) : e;
            }),
            r
          );
        },
        Pt = "$",
        jt = { depth: -1 },
        Wt = {};
      function Ht(t) {
        return t.id;
      }
      function Rt(t) {
        return t.parentId;
      }
      var qt = function () {
        var t = Ht,
          n = Rt;
        function e(e) {
          var i,
            r,
            u,
            o,
            s,
            a,
            h,
            c = e.length,
            l = new Array(c),
            f = {};
          for (r = 0; r < c; ++r)
            (i = e[r]),
              (s = l[r] = new ht(i)),
              null != (a = t(i, r, e)) &&
                (a += "") &&
                (f[(h = Pt + (s.id = a))] = h in f ? Wt : s);
          for (r = 0; r < c; ++r)
            if (((s = l[r]), null != (a = n(e[r], r, e)) && (a += ""))) {
              if (!(o = f[Pt + a])) throw new Error("missing: " + a);
              if (o === Wt) throw new Error("ambiguous: " + a);
              o.children ? o.children.push(s) : (o.children = [s]),
                (s.parent = o);
            } else {
              if (u) throw new Error("multiple roots");
              u = s;
            }
          if (!u) throw new Error("no root");
          if (
            ((u.parent = jt),
            u
              .eachBefore(function (t) {
                (t.depth = t.parent.depth + 1), --c;
              })
              .eachBefore(at),
            (u.parent = null),
            c > 0)
          )
            throw new Error("cycle");
          return u;
        }
        return (
          (e.id = function (n) {
            return arguments.length ? ((t = Bt(n)), e) : t;
          }),
          (e.parentId = function (t) {
            return arguments.length ? ((n = Bt(t)), e) : n;
          }),
          e
        );
      };
      function It(t, n) {
        return t.parent === n.parent ? 1 : 2;
      }
      function Lt(t) {
        var n = t.children;
        return n ? n[0] : t.t;
      }
      function Vt(t) {
        var n = t.children;
        return n ? n[n.length - 1] : t.t;
      }
      function $t(t, n, e) {
        var i = e / (n.i - t.i);
        (n.c -= i), (n.s += e), (t.c += i), (n.z += e), (n.m += e);
      }
      function Ut(t, n, e) {
        return t.a.parent === n.parent ? t.a : e;
      }
      function Xt(t, n) {
        (this._ = t),
          (this.parent = null),
          (this.children = null),
          (this.A = null),
          (this.a = this),
          (this.z = 0),
          (this.m = 0),
          (this.c = 0),
          (this.s = 0),
          (this.t = null),
          (this.i = n);
      }
      Xt.prototype = Object.create(ht.prototype);
      var Yt = function () {
          var t = It,
            n = 1,
            e = 1,
            i = null;
          function r(r) {
            var a = (function (t) {
              for (
                var n, e, i, r, u, o = new Xt(t, 0), s = [o];
                (n = s.pop());

              )
                if ((i = n._.children))
                  for (
                    n.children = new Array((u = i.length)), r = u - 1;
                    r >= 0;
                    --r
                  )
                    s.push((e = n.children[r] = new Xt(i[r], r))),
                      (e.parent = n);
              return ((o.parent = new Xt(null, 0)).children = [o]), o;
            })(r);
            if ((a.eachAfter(u), (a.parent.m = -a.z), a.eachBefore(o), i))
              r.eachBefore(s);
            else {
              var h = r,
                c = r,
                l = r;
              r.eachBefore(function (t) {
                t.x < h.x && (h = t),
                  t.x > c.x && (c = t),
                  t.depth > l.depth && (l = t);
              });
              var f = h === c ? 1 : t(h, c) / 2,
                p = f - h.x,
                _ = n / (c.x + f + p),
                d = e / (l.depth || 1);
              r.eachBefore(function (t) {
                (t.x = (t.x + p) * _), (t.y = t.depth * d);
              });
            }
            return r;
          }
          function u(n) {
            var e = n.children,
              i = n.parent.children,
              r = n.i ? i[n.i - 1] : null;
            if (e) {
              !(function (t) {
                for (
                  var n, e = 0, i = 0, r = t.children, u = r.length;
                  --u >= 0;

                )
                  ((n = r[u]).z += e), (n.m += e), (e += n.s + (i += n.c));
              })(n);
              var u = (e[0].z + e[e.length - 1].z) / 2;
              r ? ((n.z = r.z + t(n._, r._)), (n.m = n.z - u)) : (n.z = u);
            } else r && (n.z = r.z + t(n._, r._));
            n.parent.A = (function (n, e, i) {
              if (e) {
                for (
                  var r,
                    u = n,
                    o = n,
                    s = e,
                    a = u.parent.children[0],
                    h = u.m,
                    c = o.m,
                    l = s.m,
                    f = a.m;
                  (s = Vt(s)), (u = Lt(u)), s && u;

                )
                  (a = Lt(a)),
                    ((o = Vt(o)).a = n),
                    (r = s.z + l - u.z - h + t(s._, u._)) > 0 &&
                      ($t(Ut(s, n, i), n, r), (h += r), (c += r)),
                    (l += s.m),
                    (h += u.m),
                    (f += a.m),
                    (c += o.m);
                s && !Vt(o) && ((o.t = s), (o.m += l - c)),
                  u && !Lt(a) && ((a.t = u), (a.m += h - f), (i = n));
              }
              return i;
            })(n, r, n.parent.A || i[0]);
          }
          function o(t) {
            (t._.x = t.z + t.parent.m), (t.m += t.parent.m);
          }
          function s(t) {
            (t.x *= n), (t.y = t.depth * e);
          }
          return (
            (r.separation = function (n) {
              return arguments.length ? ((t = n), r) : t;
            }),
            (r.size = function (t) {
              return arguments.length
                ? ((i = !1), (n = +t[0]), (e = +t[1]), r)
                : i
                ? null
                : [n, e];
            }),
            (r.nodeSize = function (t) {
              return arguments.length
                ? ((i = !0), (n = +t[0]), (e = +t[1]), r)
                : i
                ? [n, e]
                : null;
            }),
            r
          );
        },
        Gt = function (t, n, e, i, r) {
          for (
            var u,
              o = t.children,
              s = -1,
              a = o.length,
              h = t.value && (r - e) / t.value;
            ++s < a;

          )
            ((u = o[s]).x0 = n),
              (u.x1 = i),
              (u.y0 = e),
              (u.y1 = e += u.value * h);
        },
        Zt = (1 + Math.sqrt(5)) / 2;
      function Qt(t, n, e, i, r, u) {
        for (
          var o,
            s,
            a,
            h,
            c,
            l,
            f,
            p,
            _,
            d,
            y,
            g = [],
            v = n.children,
            m = 0,
            x = 0,
            A = v.length,
            w = n.value;
          m < A;

        ) {
          (a = r - e), (h = u - i);
          do {
            c = v[x++].value;
          } while (!c && x < A);
          for (
            l = f = c,
              y = c * c * (d = Math.max(h / a, a / h) / (w * t)),
              _ = Math.max(f / y, y / l);
            x < A;
            ++x
          ) {
            if (
              ((c += s = v[x].value),
              s < l && (l = s),
              s > f && (f = s),
              (y = c * c * d),
              (p = Math.max(f / y, y / l)) > _)
            ) {
              c -= s;
              break;
            }
            _ = p;
          }
          g.push((o = { value: c, dice: a < h, children: v.slice(m, x) })),
            o.dice
              ? Nt(o, e, i, r, w ? (i += (h * c) / w) : u)
              : Gt(o, e, i, w ? (e += (a * c) / w) : r, u),
            (w -= c),
            (m = x);
        }
        return g;
      }
      var Jt = (function t(n) {
          function e(t, e, i, r, u) {
            Qt(n, t, e, i, r, u);
          }
          return (
            (e.ratio = function (n) {
              return t((n = +n) > 1 ? n : 1);
            }),
            e
          );
        })(Zt),
        Kt = function () {
          var t = Jt,
            n = !1,
            e = 1,
            i = 1,
            r = [0],
            u = Ct,
            o = Ct,
            s = Ct,
            a = Ct,
            h = Ct;
          function c(t) {
            return (
              (t.x0 = t.y0 = 0),
              (t.x1 = e),
              (t.y1 = i),
              t.eachBefore(l),
              (r = [0]),
              n && t.eachBefore(Ot),
              t
            );
          }
          function l(n) {
            var e = r[n.depth],
              i = n.x0 + e,
              c = n.y0 + e,
              l = n.x1 - e,
              f = n.y1 - e;
            l < i && (i = l = (i + l) / 2),
              f < c && (c = f = (c + f) / 2),
              (n.x0 = i),
              (n.y0 = c),
              (n.x1 = l),
              (n.y1 = f),
              n.children &&
                ((e = r[n.depth + 1] = u(n) / 2),
                (i += h(n) - e),
                (c += o(n) - e),
                (l -= s(n) - e) < i && (i = l = (i + l) / 2),
                (f -= a(n) - e) < c && (c = f = (c + f) / 2),
                t(n, i, c, l, f));
          }
          return (
            (c.round = function (t) {
              return arguments.length ? ((n = !!t), c) : n;
            }),
            (c.size = function (t) {
              return arguments.length ? ((e = +t[0]), (i = +t[1]), c) : [e, i];
            }),
            (c.tile = function (n) {
              return arguments.length ? ((t = Bt(n)), c) : t;
            }),
            (c.padding = function (t) {
              return arguments.length
                ? c.paddingInner(t).paddingOuter(t)
                : c.paddingInner();
            }),
            (c.paddingInner = function (t) {
              return arguments.length
                ? ((u = "function" == typeof t ? t : Dt(+t)), c)
                : u;
            }),
            (c.paddingOuter = function (t) {
              return arguments.length
                ? c
                    .paddingTop(t)
                    .paddingRight(t)
                    .paddingBottom(t)
                    .paddingLeft(t)
                : c.paddingTop();
            }),
            (c.paddingTop = function (t) {
              return arguments.length
                ? ((o = "function" == typeof t ? t : Dt(+t)), c)
                : o;
            }),
            (c.paddingRight = function (t) {
              return arguments.length
                ? ((s = "function" == typeof t ? t : Dt(+t)), c)
                : s;
            }),
            (c.paddingBottom = function (t) {
              return arguments.length
                ? ((a = "function" == typeof t ? t : Dt(+t)), c)
                : a;
            }),
            (c.paddingLeft = function (t) {
              return arguments.length
                ? ((h = "function" == typeof t ? t : Dt(+t)), c)
                : h;
            }),
            c
          );
        },
        tn = function (t, n, e, i, r) {
          var u,
            o,
            s = t.children,
            a = s.length,
            h = new Array(a + 1);
          for (h[0] = o = u = 0; u < a; ++u) h[u + 1] = o += s[u].value;
          !(function t(n, e, i, r, u, o, a) {
            if (n >= e - 1) {
              var c = s[n];
              return (c.x0 = r), (c.y0 = u), (c.x1 = o), void (c.y1 = a);
            }
            var l = h[n],
              f = i / 2 + l,
              p = n + 1,
              _ = e - 1;
            for (; p < _; ) {
              var d = (p + _) >>> 1;
              h[d] < f ? (p = d + 1) : (_ = d);
            }
            f - h[p - 1] < h[p] - f && n + 1 < p && --p;
            var y = h[p] - l,
              g = i - y;
            if (o - r > a - u) {
              var v = (r * g + o * y) / i;
              t(n, p, y, r, u, v, a), t(p, e, g, v, u, o, a);
            } else {
              var m = (u * g + a * y) / i;
              t(n, p, y, r, u, o, m), t(p, e, g, r, m, o, a);
            }
          })(0, a, t.value, n, e, i, r);
        },
        nn = function (t, n, e, i, r) {
          (1 & t.depth ? Gt : Nt)(t, n, e, i, r);
        },
        en = (function t(n) {
          function e(t, e, i, r, u) {
            if ((o = t._squarify) && o.ratio === n)
              for (
                var o, s, a, h, c, l = -1, f = o.length, p = t.value;
                ++l < f;

              ) {
                for (
                  a = (s = o[l]).children, h = s.value = 0, c = a.length;
                  h < c;
                  ++h
                )
                  s.value += a[h].value;
                s.dice
                  ? Nt(s, e, i, r, (i += ((u - i) * s.value) / p))
                  : Gt(s, e, i, (e += ((r - e) * s.value) / p), u),
                  (p -= s.value);
              }
            else (t._squarify = o = Qt(n, t, e, i, r, u)), (o.ratio = n);
          }
          return (
            (e.ratio = function (n) {
              return t((n = +n) > 1 ? n : 1);
            }),
            e
          );
        })(Zt),
        rn = { value: function () {} };
      function un() {
        for (var t, n = 0, e = arguments.length, i = {}; n < e; ++n) {
          if (!(t = arguments[n] + "") || t in i)
            throw new Error("illegal type: " + t);
          i[t] = [];
        }
        return new on(i);
      }
      function on(t) {
        this._ = t;
      }
      function sn(t, n) {
        for (var e, i = 0, r = t.length; i < r; ++i)
          if ((e = t[i]).name === n) return e.value;
      }
      function an(t, n, e) {
        for (var i = 0, r = t.length; i < r; ++i)
          if (t[i].name === n) {
            (t[i] = rn), (t = t.slice(0, i).concat(t.slice(i + 1)));
            break;
          }
        return null != e && t.push({ name: n, value: e }), t;
      }
      on.prototype = un.prototype = {
        constructor: on,
        on: function (t, n) {
          var e,
            i,
            r = this._,
            u =
              ((i = r),
              (t + "")
                .trim()
                .split(/^|\s+/)
                .map(function (t) {
                  var n = "",
                    e = t.indexOf(".");
                  if (
                    (e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
                    t && !i.hasOwnProperty(t))
                  )
                    throw new Error("unknown type: " + t);
                  return { type: t, name: n };
                })),
            o = -1,
            s = u.length;
          if (!(arguments.length < 2)) {
            if (null != n && "function" != typeof n)
              throw new Error("invalid callback: " + n);
            for (; ++o < s; )
              if ((e = (t = u[o]).type)) r[e] = an(r[e], t.name, n);
              else if (null == n) for (e in r) r[e] = an(r[e], t.name, null);
            return this;
          }
          for (; ++o < s; )
            if ((e = (t = u[o]).type) && (e = sn(r[e], t.name))) return e;
        },
        copy: function () {
          var t = {},
            n = this._;
          for (var e in n) t[e] = n[e].slice();
          return new on(t);
        },
        call: function (t, n) {
          if ((e = arguments.length - 2) > 0)
            for (var e, i, r = new Array(e), u = 0; u < e; ++u)
              r[u] = arguments[u + 2];
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
          for (u = 0, e = (i = this._[t]).length; u < e; ++u)
            i[u].value.apply(n, r);
        },
        apply: function (t, n, e) {
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
          for (var i = this._[t], r = 0, u = i.length; r < u; ++r)
            i[r].value.apply(n, e);
        },
      };
      var hn = un;
      var cn = function () {
          P.preventDefault(), P.stopImmediatePropagation();
        },
        ln = function (t) {
          var n = t.document.documentElement,
            e = X(t).on("dragstart.drag", cn, !0);
          "onselectstart" in n
            ? e.on("selectstart.drag", cn, !0)
            : ((n.__noselect = n.style.MozUserSelect),
              (n.style.MozUserSelect = "none"));
        };
      function fn(t, n) {
        var e = t.document.documentElement,
          i = X(t).on("dragstart.drag", null);
        n &&
          (i.on("click.drag", cn, !0),
          setTimeout(function () {
            i.on("click.drag", null);
          }, 0)),
          "onselectstart" in e
            ? i.on("selectstart.drag", null)
            : ((e.style.MozUserSelect = e.__noselect), delete e.__noselect);
      }
      function pn(t, n, e, i, r, u, o, s, a, h) {
        (this.target = t),
          (this.type = n),
          (this.subject = e),
          (this.identifier = i),
          (this.active = r),
          (this.x = u),
          (this.y = o),
          (this.dx = s),
          (this.dy = a),
          (this._ = h);
      }
      pn.prototype.on = function () {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this : t;
      };
      var _n = function (t, n, e) {
        (t.prototype = n.prototype = e), (e.constructor = t);
      };
      function dn(t, n) {
        var e = Object.create(t.prototype);
        for (var i in n) e[i] = n[i];
        return e;
      }
      function yn() {}
      var gn = "\\s*([+-]?\\d+)\\s*",
        vn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        mn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        xn = /^#([0-9a-f]{3})$/,
        An = /^#([0-9a-f]{6})$/,
        wn = new RegExp("^rgb\\(" + [gn, gn, gn] + "\\)$"),
        bn = new RegExp("^rgb\\(" + [mn, mn, mn] + "\\)$"),
        En = new RegExp("^rgba\\(" + [gn, gn, gn, vn] + "\\)$"),
        Bn = new RegExp("^rgba\\(" + [mn, mn, mn, vn] + "\\)$"),
        Cn = new RegExp("^hsl\\(" + [vn, mn, mn] + "\\)$"),
        Dn = new RegExp("^hsla\\(" + [vn, mn, mn, vn] + "\\)$"),
        kn = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function Fn(t) {
        var n;
        return (
          (t = (t + "").trim().toLowerCase()),
          (n = xn.exec(t))
            ? new Nn(
                (((n = parseInt(n[1], 16)) >> 8) & 15) | ((n >> 4) & 240),
                ((n >> 4) & 15) | (240 & n),
                ((15 & n) << 4) | (15 & n),
                1
              )
            : (n = An.exec(t))
            ? Sn(parseInt(n[1], 16))
            : (n = wn.exec(t))
            ? new Nn(n[1], n[2], n[3], 1)
            : (n = bn.exec(t))
            ? new Nn(
                (255 * n[1]) / 100,
                (255 * n[2]) / 100,
                (255 * n[3]) / 100,
                1
              )
            : (n = En.exec(t))
            ? Mn(n[1], n[2], n[3], n[4])
            : (n = Bn.exec(t))
            ? Mn(
                (255 * n[1]) / 100,
                (255 * n[2]) / 100,
                (255 * n[3]) / 100,
                n[4]
              )
            : (n = Cn.exec(t))
            ? Pn(n[1], n[2] / 100, n[3] / 100, 1)
            : (n = Dn.exec(t))
            ? Pn(n[1], n[2] / 100, n[3] / 100, n[4])
            : kn.hasOwnProperty(t)
            ? Sn(kn[t])
            : "transparent" === t
            ? new Nn(NaN, NaN, NaN, 0)
            : null
        );
      }
      function Sn(t) {
        return new Nn((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function Mn(t, n, e, i) {
        return i <= 0 && (t = n = e = NaN), new Nn(t, n, e, i);
      }
      function Tn(t) {
        return (
          t instanceof yn || (t = Fn(t)),
          t ? new Nn((t = t.rgb()).r, t.g, t.b, t.opacity) : new Nn()
        );
      }
      function On(t, n, e, i) {
        return 1 === arguments.length
          ? Tn(t)
          : new Nn(t, n, e, null == i ? 1 : i);
      }
      function Nn(t, n, e, i) {
        (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +i);
      }
      function zn(t) {
        return (
          ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16
            ? "0"
            : "") + t.toString(16)
        );
      }
      function Pn(t, n, e, i) {
        return (
          i <= 0
            ? (t = n = e = NaN)
            : e <= 0 || e >= 1
            ? (t = n = NaN)
            : n <= 0 && (t = NaN),
          new Wn(t, n, e, i)
        );
      }
      function jn(t, n, e, i) {
        return 1 === arguments.length
          ? (function (t) {
              if (t instanceof Wn) return new Wn(t.h, t.s, t.l, t.opacity);
              if ((t instanceof yn || (t = Fn(t)), !t)) return new Wn();
              if (t instanceof Wn) return t;
              var n = (t = t.rgb()).r / 255,
                e = t.g / 255,
                i = t.b / 255,
                r = Math.min(n, e, i),
                u = Math.max(n, e, i),
                o = NaN,
                s = u - r,
                a = (u + r) / 2;
              return (
                s
                  ? ((o =
                      n === u
                        ? (e - i) / s + 6 * (e < i)
                        : e === u
                        ? (i - n) / s + 2
                        : (n - e) / s + 4),
                    (s /= a < 0.5 ? u + r : 2 - u - r),
                    (o *= 60))
                  : (s = a > 0 && a < 1 ? 0 : o),
                new Wn(o, s, a, t.opacity)
              );
            })(t)
          : new Wn(t, n, e, null == i ? 1 : i);
      }
      function Wn(t, n, e, i) {
        (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +i);
      }
      function Hn(t, n, e) {
        return (
          255 *
          (t < 60
            ? n + ((e - n) * t) / 60
            : t < 180
            ? e
            : t < 240
            ? n + ((e - n) * (240 - t)) / 60
            : n)
        );
      }
      _n(yn, Fn, {
        displayable: function () {
          return this.rgb().displayable();
        },
        hex: function () {
          return this.rgb().hex();
        },
        toString: function () {
          return this.rgb() + "";
        },
      }),
        _n(
          Nn,
          On,
          dn(yn, {
            brighter: function (t) {
              return (
                (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                new Nn(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new Nn(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb: function () {
              return this;
            },
            displayable: function () {
              return (
                0 <= this.r &&
                this.r <= 255 &&
                0 <= this.g &&
                this.g <= 255 &&
                0 <= this.b &&
                this.b <= 255 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: function () {
              return "#" + zn(this.r) + zn(this.g) + zn(this.b);
            },
            toString: function () {
              var t = this.opacity;
              return (
                (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
                  ? "rgb("
                  : "rgba(") +
                Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
                ", " +
                Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
                ", " +
                Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
                (1 === t ? ")" : ", " + t + ")")
              );
            },
          })
        ),
        _n(
          Wn,
          jn,
          dn(yn, {
            brighter: function (t) {
              return (
                (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                new Wn(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new Wn(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb: function () {
              var t = (this.h % 360) + 360 * (this.h < 0),
                n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                e = this.l,
                i = e + (e < 0.5 ? e : 1 - e) * n,
                r = 2 * e - i;
              return new Nn(
                Hn(t >= 240 ? t - 240 : t + 120, r, i),
                Hn(t, r, i),
                Hn(t < 120 ? t + 240 : t - 120, r, i),
                this.opacity
              );
            },
            displayable: function () {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
          })
        );
      var Rn = Math.PI / 180,
        qn = 180 / Math.PI,
        In = 0.96422,
        Ln = 1,
        Vn = 0.82521,
        $n = 4 / 29,
        Un = 6 / 29,
        Xn = 3 * Un * Un,
        Yn = Un * Un * Un;
      function Gn(t) {
        if (t instanceof Qn) return new Qn(t.l, t.a, t.b, t.opacity);
        if (t instanceof re) {
          if (isNaN(t.h)) return new Qn(t.l, 0, 0, t.opacity);
          var n = t.h * Rn;
          return new Qn(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
        }
        t instanceof Nn || (t = Tn(t));
        var e,
          i,
          r = ne(t.r),
          u = ne(t.g),
          o = ne(t.b),
          s = Jn((0.2225045 * r + 0.7168786 * u + 0.0606169 * o) / Ln);
        return (
          r === u && u === o
            ? (e = i = s)
            : ((e = Jn((0.4360747 * r + 0.3850649 * u + 0.1430804 * o) / In)),
              (i = Jn((0.0139322 * r + 0.0971045 * u + 0.7141733 * o) / Vn))),
          new Qn(116 * s - 16, 500 * (e - s), 200 * (s - i), t.opacity)
        );
      }
      function Zn(t, n, e, i) {
        return 1 === arguments.length
          ? Gn(t)
          : new Qn(t, n, e, null == i ? 1 : i);
      }
      function Qn(t, n, e, i) {
        (this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +i);
      }
      function Jn(t) {
        return t > Yn ? Math.pow(t, 1 / 3) : t / Xn + $n;
      }
      function Kn(t) {
        return t > Un ? t * t * t : Xn * (t - $n);
      }
      function te(t) {
        return (
          255 *
          (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
        );
      }
      function ne(t) {
        return (t /= 255) <= 0.04045
          ? t / 12.92
          : Math.pow((t + 0.055) / 1.055, 2.4);
      }
      function ee(t) {
        if (t instanceof re) return new re(t.h, t.c, t.l, t.opacity);
        if ((t instanceof Qn || (t = Gn(t)), 0 === t.a && 0 === t.b))
          return new re(NaN, 0, t.l, t.opacity);
        var n = Math.atan2(t.b, t.a) * qn;
        return new re(
          n < 0 ? n + 360 : n,
          Math.sqrt(t.a * t.a + t.b * t.b),
          t.l,
          t.opacity
        );
      }
      function ie(t, n, e, i) {
        return 1 === arguments.length
          ? ee(t)
          : new re(t, n, e, null == i ? 1 : i);
      }
      function re(t, n, e, i) {
        (this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +i);
      }
      _n(
        Qn,
        Zn,
        dn(yn, {
          brighter: function (t) {
            return new Qn(
              this.l + 18 * (null == t ? 1 : t),
              this.a,
              this.b,
              this.opacity
            );
          },
          darker: function (t) {
            return new Qn(
              this.l - 18 * (null == t ? 1 : t),
              this.a,
              this.b,
              this.opacity
            );
          },
          rgb: function () {
            var t = (this.l + 16) / 116,
              n = isNaN(this.a) ? t : t + this.a / 500,
              e = isNaN(this.b) ? t : t - this.b / 200;
            return new Nn(
              te(
                3.1338561 * (n = In * Kn(n)) -
                  1.6168667 * (t = Ln * Kn(t)) -
                  0.4906146 * (e = Vn * Kn(e))
              ),
              te(-0.9787684 * n + 1.9161415 * t + 0.033454 * e),
              te(0.0719453 * n - 0.2289914 * t + 1.4052427 * e),
              this.opacity
            );
          },
        })
      ),
        _n(
          re,
          ie,
          dn(yn, {
            brighter: function (t) {
              return new re(
                this.h,
                this.c,
                this.l + 18 * (null == t ? 1 : t),
                this.opacity
              );
            },
            darker: function (t) {
              return new re(
                this.h,
                this.c,
                this.l - 18 * (null == t ? 1 : t),
                this.opacity
              );
            },
            rgb: function () {
              return Gn(this).rgb();
            },
          })
        );
      var ue = -0.14861,
        oe = -0.29227,
        se = -0.90649,
        ae = 1.97294,
        he = ae * se,
        ce = 1.78277 * ae,
        le = 1.78277 * oe - se * ue;
      function fe(t, n, e, i) {
        return 1 === arguments.length
          ? (function (t) {
              if (t instanceof pe) return new pe(t.h, t.s, t.l, t.opacity);
              t instanceof Nn || (t = Tn(t));
              var n = t.r / 255,
                e = t.g / 255,
                i = t.b / 255,
                r = (le * i + he * n - ce * e) / (le + he - ce),
                u = i - r,
                o = (ae * (e - r) - oe * u) / se,
                s = Math.sqrt(o * o + u * u) / (ae * r * (1 - r)),
                a = s ? Math.atan2(o, u) * qn - 120 : NaN;
              return new pe(a < 0 ? a + 360 : a, s, r, t.opacity);
            })(t)
          : new pe(t, n, e, null == i ? 1 : i);
      }
      function pe(t, n, e, i) {
        (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +i);
      }
      function _e(t, n, e, i, r) {
        var u = t * t,
          o = u * t;
        return (
          ((1 - 3 * t + 3 * u - o) * n +
            (4 - 6 * u + 3 * o) * e +
            (1 + 3 * t + 3 * u - 3 * o) * i +
            o * r) /
          6
        );
      }
      _n(
        pe,
        fe,
        dn(yn, {
          brighter: function (t) {
            return (
              (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
              new pe(this.h, this.s, this.l * t, this.opacity)
            );
          },
          darker: function (t) {
            return (
              (t = null == t ? 0.7 : Math.pow(0.7, t)),
              new pe(this.h, this.s, this.l * t, this.opacity)
            );
          },
          rgb: function () {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * Rn,
              n = +this.l,
              e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
              i = Math.cos(t),
              r = Math.sin(t);
            return new Nn(
              255 * (n + e * (ue * i + 1.78277 * r)),
              255 * (n + e * (oe * i + se * r)),
              255 * (n + e * (ae * i)),
              this.opacity
            );
          },
        })
      );
      var de = function (t) {
        return function () {
          return t;
        };
      };
      function ye(t, n) {
        return function (e) {
          return t + e * n;
        };
      }
      function ge(t, n) {
        var e = n - t;
        return e
          ? ye(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e)
          : de(isNaN(t) ? n : t);
      }
      function ve(t) {
        return 1 == (t = +t)
          ? me
          : function (n, e) {
              return e - n
                ? (function (t, n, e) {
                    return (
                      (t = Math.pow(t, e)),
                      (n = Math.pow(n, e) - t),
                      (e = 1 / e),
                      function (i) {
                        return Math.pow(t + i * n, e);
                      }
                    );
                  })(n, e, t)
                : de(isNaN(n) ? e : n);
            };
      }
      function me(t, n) {
        var e = n - t;
        return e ? ye(t, e) : de(isNaN(t) ? n : t);
      }
      var xe = (function t(n) {
        var e = ve(n);
        function i(t, n) {
          var i = e((t = On(t)).r, (n = On(n)).r),
            r = e(t.g, n.g),
            u = e(t.b, n.b),
            o = me(t.opacity, n.opacity);
          return function (n) {
            return (
              (t.r = i(n)),
              (t.g = r(n)),
              (t.b = u(n)),
              (t.opacity = o(n)),
              t + ""
            );
          };
        }
        return (i.gamma = t), i;
      })(1);
      function Ae(t) {
        return function (n) {
          var e,
            i,
            r = n.length,
            u = new Array(r),
            o = new Array(r),
            s = new Array(r);
          for (e = 0; e < r; ++e)
            (i = On(n[e])),
              (u[e] = i.r || 0),
              (o[e] = i.g || 0),
              (s[e] = i.b || 0);
          return (
            (u = t(u)),
            (o = t(o)),
            (s = t(s)),
            (i.opacity = 1),
            function (t) {
              return (i.r = u(t)), (i.g = o(t)), (i.b = s(t)), i + "";
            }
          );
        };
      }
      Ae(function (t) {
        var n = t.length - 1;
        return function (e) {
          var i =
              e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), n - 1) : Math.floor(e * n),
            r = t[i],
            u = t[i + 1],
            o = i > 0 ? t[i - 1] : 2 * r - u,
            s = i < n - 1 ? t[i + 2] : 2 * u - r;
          return _e((e - i / n) * n, o, r, u, s);
        };
      }),
        Ae(function (t) {
          var n = t.length;
          return function (e) {
            var i = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
              r = t[(i + n - 1) % n],
              u = t[i % n],
              o = t[(i + 1) % n],
              s = t[(i + 2) % n];
            return _e((e - i / n) * n, r, u, o, s);
          };
        });
      var we = function (t, n) {
          return (
            (n -= t = +t),
            function (e) {
              return t + n * e;
            }
          );
        },
        be = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        Ee = new RegExp(be.source, "g");
      var Be,
        Ce,
        De,
        ke,
        Fe = function (t, n) {
          var e,
            i,
            r,
            u = (be.lastIndex = Ee.lastIndex = 0),
            o = -1,
            s = [],
            a = [];
          for (t += "", n += ""; (e = be.exec(t)) && (i = Ee.exec(n)); )
            (r = i.index) > u &&
              ((r = n.slice(u, r)), s[o] ? (s[o] += r) : (s[++o] = r)),
              (e = e[0]) === (i = i[0])
                ? s[o]
                  ? (s[o] += i)
                  : (s[++o] = i)
                : ((s[++o] = null), a.push({ i: o, x: we(e, i) })),
              (u = Ee.lastIndex);
          return (
            u < n.length &&
              ((r = n.slice(u)), s[o] ? (s[o] += r) : (s[++o] = r)),
            s.length < 2
              ? a[0]
                ? (function (t) {
                    return function (n) {
                      return t(n) + "";
                    };
                  })(a[0].x)
                : (function (t) {
                    return function () {
                      return t;
                    };
                  })(n)
              : ((n = a.length),
                function (t) {
                  for (var e, i = 0; i < n; ++i) s[(e = a[i]).i] = e.x(t);
                  return s.join("");
                })
          );
        },
        Se = 180 / Math.PI,
        Me = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        },
        Te = function (t, n, e, i, r, u) {
          var o, s, a;
          return (
            (o = Math.sqrt(t * t + n * n)) && ((t /= o), (n /= o)),
            (a = t * e + n * i) && ((e -= t * a), (i -= n * a)),
            (s = Math.sqrt(e * e + i * i)) && ((e /= s), (i /= s), (a /= s)),
            t * i < n * e && ((t = -t), (n = -n), (a = -a), (o = -o)),
            {
              translateX: r,
              translateY: u,
              rotate: Math.atan2(n, t) * Se,
              skewX: Math.atan(a) * Se,
              scaleX: o,
              scaleY: s,
            }
          );
        };
      function Oe(t, n, e, i) {
        function r(t) {
          return t.length ? t.pop() + " " : "";
        }
        return function (u, o) {
          var s = [],
            a = [];
          return (
            (u = t(u)),
            (o = t(o)),
            (function (t, i, r, u, o, s) {
              if (t !== r || i !== u) {
                var a = o.push("translate(", null, n, null, e);
                s.push({ i: a - 4, x: we(t, r) }, { i: a - 2, x: we(i, u) });
              } else (r || u) && o.push("translate(" + r + n + u + e);
            })(u.translateX, u.translateY, o.translateX, o.translateY, s, a),
            (function (t, n, e, u) {
              t !== n
                ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
                  u.push({
                    i: e.push(r(e) + "rotate(", null, i) - 2,
                    x: we(t, n),
                  }))
                : n && e.push(r(e) + "rotate(" + n + i);
            })(u.rotate, o.rotate, s, a),
            (function (t, n, e, u) {
              t !== n
                ? u.push({
                    i: e.push(r(e) + "skewX(", null, i) - 2,
                    x: we(t, n),
                  })
                : n && e.push(r(e) + "skewX(" + n + i);
            })(u.skewX, o.skewX, s, a),
            (function (t, n, e, i, u, o) {
              if (t !== e || n !== i) {
                var s = u.push(r(u) + "scale(", null, ",", null, ")");
                o.push({ i: s - 4, x: we(t, e) }, { i: s - 2, x: we(n, i) });
              } else
                (1 === e && 1 === i) ||
                  u.push(r(u) + "scale(" + e + "," + i + ")");
            })(u.scaleX, u.scaleY, o.scaleX, o.scaleY, s, a),
            (u = o = null),
            function (t) {
              for (var n, e = -1, i = a.length; ++e < i; )
                s[(n = a[e]).i] = n.x(t);
              return s.join("");
            }
          );
        };
      }
      var Ne = Oe(
          function (t) {
            return "none" === t
              ? Me
              : (Be ||
                  ((Be = document.createElement("DIV")),
                  (Ce = document.documentElement),
                  (De = document.defaultView)),
                (Be.style.transform = t),
                (t = De.getComputedStyle(
                  Ce.appendChild(Be),
                  null
                ).getPropertyValue("transform")),
                Ce.removeChild(Be),
                (t = t.slice(7, -1).split(",")),
                Te(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
          },
          "px, ",
          "px)",
          "deg)"
        ),
        ze = Oe(
          function (t) {
            return null == t
              ? Me
              : (ke ||
                  (ke = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "g"
                  )),
                ke.setAttribute("transform", t),
                (t = ke.transform.baseVal.consolidate())
                  ? ((t = t.matrix), Te(t.a, t.b, t.c, t.d, t.e, t.f))
                  : Me);
          },
          ", ",
          ")",
          ")"
        ),
        Pe = Math.SQRT2;
      function je(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2;
      }
      var We = function (t, n) {
        var e,
          i,
          r = t[0],
          u = t[1],
          o = t[2],
          s = n[0],
          a = n[1],
          h = n[2],
          c = s - r,
          l = a - u,
          f = c * c + l * l;
        if (f < 1e-12)
          (i = Math.log(h / o) / Pe),
            (e = function (t) {
              return [r + t * c, u + t * l, o * Math.exp(Pe * t * i)];
            });
        else {
          var p = Math.sqrt(f),
            _ = (h * h - o * o + 4 * f) / (2 * o * 2 * p),
            d = (h * h - o * o - 4 * f) / (2 * h * 2 * p),
            y = Math.log(Math.sqrt(_ * _ + 1) - _),
            g = Math.log(Math.sqrt(d * d + 1) - d);
          (i = (g - y) / Pe),
            (e = function (t) {
              var n,
                e = t * i,
                s = je(y),
                a =
                  (o / (2 * p)) *
                  (s *
                    ((n = Pe * e + y), ((n = Math.exp(2 * n)) - 1) / (n + 1)) -
                    (function (t) {
                      return ((t = Math.exp(t)) - 1 / t) / 2;
                    })(y));
              return [r + a * c, u + a * l, (o * s) / je(Pe * e + y)];
            });
        }
        return (e.duration = 1e3 * i), e;
      };
      function He(t) {
        return function (n, e) {
          var i = t((n = jn(n)).h, (e = jn(e)).h),
            r = me(n.s, e.s),
            u = me(n.l, e.l),
            o = me(n.opacity, e.opacity);
          return function (t) {
            return (
              (n.h = i(t)),
              (n.s = r(t)),
              (n.l = u(t)),
              (n.opacity = o(t)),
              n + ""
            );
          };
        };
      }
      He(ge), He(me);
      function Re(t) {
        return function (n, e) {
          var i = t((n = ie(n)).h, (e = ie(e)).h),
            r = me(n.c, e.c),
            u = me(n.l, e.l),
            o = me(n.opacity, e.opacity);
          return function (t) {
            return (
              (n.h = i(t)),
              (n.c = r(t)),
              (n.l = u(t)),
              (n.opacity = o(t)),
              n + ""
            );
          };
        };
      }
      Re(ge), Re(me);
      function qe(t) {
        return (function n(e) {
          function i(n, i) {
            var r = t((n = fe(n)).h, (i = fe(i)).h),
              u = me(n.s, i.s),
              o = me(n.l, i.l),
              s = me(n.opacity, i.opacity);
            return function (t) {
              return (
                (n.h = r(t)),
                (n.s = u(t)),
                (n.l = o(Math.pow(t, e))),
                (n.opacity = s(t)),
                n + ""
              );
            };
          }
          return (e = +e), (i.gamma = n), i;
        })(1);
      }
      qe(ge), qe(me);
      var Ie,
        Le,
        Ve = 0,
        $e = 0,
        Ue = 0,
        Xe = 1e3,
        Ye = 0,
        Ge = 0,
        Ze = 0,
        Qe =
          "object" == typeof performance && performance.now
            ? performance
            : Date,
        Je =
          "object" == typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (t) {
                setTimeout(t, 17);
              };
      function Ke() {
        return Ge || (Je(ti), (Ge = Qe.now() + Ze));
      }
      function ti() {
        Ge = 0;
      }
      function ni() {
        this._call = this._time = this._next = null;
      }
      function ei(t, n, e) {
        var i = new ni();
        return i.restart(t, n, e), i;
      }
      function ii() {
        (Ge = (Ye = Qe.now()) + Ze), (Ve = $e = 0);
        try {
          !(function () {
            Ke(), ++Ve;
            for (var t, n = Ie; n; )
              (t = Ge - n._time) >= 0 && n._call.call(null, t), (n = n._next);
            --Ve;
          })();
        } finally {
          (Ve = 0),
            (function () {
              var t,
                n,
                e = Ie,
                i = 1 / 0;
              for (; e; )
                e._call
                  ? (i > e._time && (i = e._time), (t = e), (e = e._next))
                  : ((n = e._next),
                    (e._next = null),
                    (e = t ? (t._next = n) : (Ie = n)));
              (Le = t), ui(i);
            })(),
            (Ge = 0);
        }
      }
      function ri() {
        var t = Qe.now(),
          n = t - Ye;
        n > Xe && ((Ze -= n), (Ye = t));
      }
      function ui(t) {
        Ve ||
          ($e && ($e = clearTimeout($e)),
          t - Ge > 24
            ? (t < 1 / 0 && ($e = setTimeout(ii, t - Qe.now() - Ze)),
              Ue && (Ue = clearInterval(Ue)))
            : (Ue || ((Ye = Qe.now()), (Ue = setInterval(ri, Xe))),
              (Ve = 1),
              Je(ii)));
      }
      ni.prototype = ei.prototype = {
        constructor: ni,
        restart: function (t, n, e) {
          if ("function" != typeof t)
            throw new TypeError("callback is not a function");
          (e = (null == e ? Ke() : +e) + (null == n ? 0 : +n)),
            this._next ||
              Le === this ||
              (Le ? (Le._next = this) : (Ie = this), (Le = this)),
            (this._call = t),
            (this._time = e),
            ui();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), ui());
        },
      };
      var oi = function (t, n, e) {
          var i = new ni();
          return (
            (n = null == n ? 0 : +n),
            i.restart(
              function (e) {
                i.stop(), t(e + n);
              },
              n,
              e
            ),
            i
          );
        },
        si = hn("start", "end", "interrupt"),
        ai = [],
        hi = 0,
        ci = 1,
        li = 2,
        fi = 3,
        pi = 4,
        _i = 5,
        di = 6,
        yi = function (t, n, e, i, r, u) {
          var o = t.__transition;
          if (o) {
            if (e in o) return;
          } else t.__transition = {};
          !(function (t, n, e) {
            var i,
              r = t.__transition;
            function u(a) {
              var h, c, l, f;
              if (e.state !== ci) return s();
              for (h in r)
                if ((f = r[h]).name === e.name) {
                  if (f.state === fi) return oi(u);
                  f.state === pi
                    ? ((f.state = di),
                      f.timer.stop(),
                      f.on.call("interrupt", t, t.__data__, f.index, f.group),
                      delete r[h])
                    : +h < n && ((f.state = di), f.timer.stop(), delete r[h]);
                }
              if (
                (oi(function () {
                  e.state === fi &&
                    ((e.state = pi), e.timer.restart(o, e.delay, e.time), o(a));
                }),
                (e.state = li),
                e.on.call("start", t, t.__data__, e.index, e.group),
                e.state === li)
              ) {
                for (
                  e.state = fi,
                    i = new Array((l = e.tween.length)),
                    h = 0,
                    c = -1;
                  h < l;
                  ++h
                )
                  (f = e.tween[h].value.call(
                    t,
                    t.__data__,
                    e.index,
                    e.group
                  )) && (i[++c] = f);
                i.length = c + 1;
              }
            }
            function o(n) {
              for (
                var r =
                    n < e.duration
                      ? e.ease.call(null, n / e.duration)
                      : (e.timer.restart(s), (e.state = _i), 1),
                  u = -1,
                  o = i.length;
                ++u < o;

              )
                i[u].call(null, r);
              e.state === _i &&
                (e.on.call("end", t, t.__data__, e.index, e.group), s());
            }
            function s() {
              for (var i in ((e.state = di), e.timer.stop(), delete r[n], r))
                return;
              delete t.__transition;
            }
            (r[n] = e),
              (e.timer = ei(
                function (t) {
                  (e.state = ci),
                    e.timer.restart(u, e.delay, e.time),
                    e.delay <= t && u(t - e.delay);
                },
                0,
                e.time
              ));
          })(t, e, {
            name: n,
            index: i,
            group: r,
            on: si,
            tween: ai,
            time: u.time,
            delay: u.delay,
            duration: u.duration,
            ease: u.ease,
            timer: null,
            state: hi,
          });
        };
      function gi(t, n) {
        var e = mi(t, n);
        if (e.state > hi) throw new Error("too late; already scheduled");
        return e;
      }
      function vi(t, n) {
        var e = mi(t, n);
        if (e.state > li) throw new Error("too late; already started");
        return e;
      }
      function mi(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n])) throw new Error("transition not found");
        return e;
      }
      var xi = function (t, n) {
        var e,
          i,
          r,
          u = t.__transition,
          o = !0;
        if (u) {
          for (r in ((n = null == n ? null : n + ""), u))
            (e = u[r]).name === n
              ? ((i = e.state > li && e.state < _i),
                (e.state = di),
                e.timer.stop(),
                i && e.on.call("interrupt", t, t.__data__, e.index, e.group),
                delete u[r])
              : (o = !1);
          o && delete t.__transition;
        }
      };
      function Ai(t, n, e) {
        var i = t._id;
        return (
          t.each(function () {
            var t = vi(this, i);
            (t.value || (t.value = {}))[n] = e.apply(this, arguments);
          }),
          function (t) {
            return mi(t, i).value[n];
          }
        );
      }
      var wi = function (t, n) {
        var e;
        return ("number" == typeof n
          ? we
          : n instanceof Fn
          ? xe
          : (e = Fn(n))
          ? ((n = e), xe)
          : Fe)(t, n);
      };
      var bi = U.prototype.constructor;
      var Ei = 0;
      function Bi(t, n, e, i) {
        (this._groups = t),
          (this._parents = n),
          (this._name = e),
          (this._id = i);
      }
      function Ci(t) {
        return U().transition(t);
      }
      function Di() {
        return ++Ei;
      }
      var ki = U.prototype;
      Bi.prototype = Ci.prototype = {
        constructor: Bi,
        select: function (t) {
          var n = this._name,
            e = this._id;
          "function" != typeof t && (t = c(t));
          for (
            var i = this._groups, r = i.length, u = new Array(r), o = 0;
            o < r;
            ++o
          )
            for (
              var s,
                a,
                h = i[o],
                l = h.length,
                f = (u[o] = new Array(l)),
                p = 0;
              p < l;
              ++p
            )
              (s = h[p]) &&
                (a = t.call(s, s.__data__, p, h)) &&
                ("__data__" in s && (a.__data__ = s.__data__),
                (f[p] = a),
                yi(f[p], n, e, p, f, mi(s, e)));
          return new Bi(u, this._parents, n, e);
        },
        selectAll: function (t) {
          var n = this._name,
            e = this._id;
          "function" != typeof t && (t = f(t));
          for (
            var i = this._groups, r = i.length, u = [], o = [], s = 0;
            s < r;
            ++s
          )
            for (var a, h = i[s], c = h.length, l = 0; l < c; ++l)
              if ((a = h[l])) {
                for (
                  var p,
                    _ = t.call(a, a.__data__, l, h),
                    d = mi(a, e),
                    y = 0,
                    g = _.length;
                  y < g;
                  ++y
                )
                  (p = _[y]) && yi(p, n, e, y, _, d);
                u.push(_), o.push(a);
              }
          return new Bi(u, o, n, e);
        },
        filter: function (t) {
          "function" != typeof t && (t = p(t));
          for (
            var n = this._groups, e = n.length, i = new Array(e), r = 0;
            r < e;
            ++r
          )
            for (
              var u, o = n[r], s = o.length, a = (i[r] = []), h = 0;
              h < s;
              ++h
            )
              (u = o[h]) && t.call(u, u.__data__, h, o) && a.push(u);
          return new Bi(i, this._parents, this._name, this._id);
        },
        merge: function (t) {
          if (t._id !== this._id) throw new Error();
          for (
            var n = this._groups,
              e = t._groups,
              i = n.length,
              r = e.length,
              u = Math.min(i, r),
              o = new Array(i),
              s = 0;
            s < u;
            ++s
          )
            for (
              var a,
                h = n[s],
                c = e[s],
                l = h.length,
                f = (o[s] = new Array(l)),
                p = 0;
              p < l;
              ++p
            )
              (a = h[p] || c[p]) && (f[p] = a);
          for (; s < i; ++s) o[s] = n[s];
          return new Bi(o, this._parents, this._name, this._id);
        },
        selection: function () {
          return new bi(this._groups, this._parents);
        },
        transition: function () {
          for (
            var t = this._name,
              n = this._id,
              e = Di(),
              i = this._groups,
              r = i.length,
              u = 0;
            u < r;
            ++u
          )
            for (var o, s = i[u], a = s.length, h = 0; h < a; ++h)
              if ((o = s[h])) {
                var c = mi(o, n);
                yi(o, t, e, h, s, {
                  time: c.time + c.delay + c.duration,
                  delay: 0,
                  duration: c.duration,
                  ease: c.ease,
                });
              }
          return new Bi(i, this._parents, t, e);
        },
        call: ki.call,
        nodes: ki.nodes,
        node: ki.node,
        size: ki.size,
        empty: ki.empty,
        each: ki.each,
        on: function (t, n) {
          var e = this._id;
          return arguments.length < 2
            ? mi(this.node(), e).on.on(t)
            : this.each(
                (function (t, n, e) {
                  var i,
                    r,
                    u = (function (t) {
                      return (t + "")
                        .trim()
                        .split(/^|\s+/)
                        .every(function (t) {
                          var n = t.indexOf(".");
                          return (
                            n >= 0 && (t = t.slice(0, n)), !t || "start" === t
                          );
                        });
                    })(n)
                      ? gi
                      : vi;
                  return function () {
                    var o = u(this, t),
                      s = o.on;
                    s !== i && (r = (i = s).copy()).on(n, e), (o.on = r);
                  };
                })(e, t, n)
              );
        },
        attr: function (t, n) {
          var e = s(t),
            i = "transform" === e ? ze : wi;
          return this.attrTween(
            t,
            "function" == typeof n
              ? (e.local
                  ? function (t, n, e) {
                      var i, r, u;
                      return function () {
                        var o,
                          s = e(this);
                        if (null != s)
                          return (o = this.getAttributeNS(t.space, t.local)) ===
                            s
                            ? null
                            : o === i && s === r
                            ? u
                            : (u = n((i = o), (r = s)));
                        this.removeAttributeNS(t.space, t.local);
                      };
                    }
                  : function (t, n, e) {
                      var i, r, u;
                      return function () {
                        var o,
                          s = e(this);
                        if (null != s)
                          return (o = this.getAttribute(t)) === s
                            ? null
                            : o === i && s === r
                            ? u
                            : (u = n((i = o), (r = s)));
                        this.removeAttribute(t);
                      };
                    })(e, i, Ai(this, "attr." + t, n))
              : null == n
              ? (e.local
                  ? function (t) {
                      return function () {
                        this.removeAttributeNS(t.space, t.local);
                      };
                    }
                  : function (t) {
                      return function () {
                        this.removeAttribute(t);
                      };
                    })(e)
              : (e.local
                  ? function (t, n, e) {
                      var i, r;
                      return function () {
                        var u = this.getAttributeNS(t.space, t.local);
                        return u === e
                          ? null
                          : u === i
                          ? r
                          : (r = n((i = u), e));
                      };
                    }
                  : function (t, n, e) {
                      var i, r;
                      return function () {
                        var u = this.getAttribute(t);
                        return u === e
                          ? null
                          : u === i
                          ? r
                          : (r = n((i = u), e));
                      };
                    })(e, i, n + "")
          );
        },
        attrTween: function (t, n) {
          var e = "attr." + t;
          if (arguments.length < 2) return (e = this.tween(e)) && e._value;
          if (null == n) return this.tween(e, null);
          if ("function" != typeof n) throw new Error();
          var i = s(t);
          return this.tween(
            e,
            (i.local
              ? function (t, n) {
                  function e() {
                    var e = this,
                      i = n.apply(e, arguments);
                    return (
                      i &&
                      function (n) {
                        e.setAttributeNS(t.space, t.local, i(n));
                      }
                    );
                  }
                  return (e._value = n), e;
                }
              : function (t, n) {
                  function e() {
                    var e = this,
                      i = n.apply(e, arguments);
                    return (
                      i &&
                      function (n) {
                        e.setAttribute(t, i(n));
                      }
                    );
                  }
                  return (e._value = n), e;
                })(i, n)
          );
        },
        style: function (t, n, e) {
          var i = "transform" == (t += "") ? Ne : wi;
          return null == n
            ? this.styleTween(
                t,
                (function (t, n) {
                  var e, i, r;
                  return function () {
                    var u = A(this, t),
                      o = (this.style.removeProperty(t), A(this, t));
                    return u === o
                      ? null
                      : u === e && o === i
                      ? r
                      : (r = n((e = u), (i = o)));
                  };
                })(t, i)
              ).on(
                "end.style." + t,
                (function (t) {
                  return function () {
                    this.style.removeProperty(t);
                  };
                })(t)
              )
            : this.styleTween(
                t,
                "function" == typeof n
                  ? (function (t, n, e) {
                      var i, r, u;
                      return function () {
                        var o = A(this, t),
                          s = e(this);
                        return (
                          null == s &&
                            (this.style.removeProperty(t), (s = A(this, t))),
                          o === s
                            ? null
                            : o === i && s === r
                            ? u
                            : (u = n((i = o), (r = s)))
                        );
                      };
                    })(t, i, Ai(this, "style." + t, n))
                  : (function (t, n, e) {
                      var i, r;
                      return function () {
                        var u = A(this, t);
                        return u === e
                          ? null
                          : u === i
                          ? r
                          : (r = n((i = u), e));
                      };
                    })(t, i, n + ""),
                e
              );
        },
        styleTween: function (t, n, e) {
          var i = "style." + (t += "");
          if (arguments.length < 2) return (i = this.tween(i)) && i._value;
          if (null == n) return this.tween(i, null);
          if ("function" != typeof n) throw new Error();
          return this.tween(
            i,
            (function (t, n, e) {
              function i() {
                var i = this,
                  r = n.apply(i, arguments);
                return (
                  r &&
                  function (n) {
                    i.style.setProperty(t, r(n), e);
                  }
                );
              }
              return (i._value = n), i;
            })(t, n, null == e ? "" : e)
          );
        },
        text: function (t) {
          return this.tween(
            "text",
            "function" == typeof t
              ? (function (t) {
                  return function () {
                    var n = t(this);
                    this.textContent = null == n ? "" : n;
                  };
                })(Ai(this, "text", t))
              : (function (t) {
                  return function () {
                    this.textContent = t;
                  };
                })(null == t ? "" : t + "")
          );
        },
        remove: function () {
          return this.on(
            "end.remove",
            ((t = this._id),
            function () {
              var n = this.parentNode;
              for (var e in this.__transition) if (+e !== t) return;
              n && n.removeChild(this);
            })
          );
          var t;
        },
        tween: function (t, n) {
          var e = this._id;
          if (((t += ""), arguments.length < 2)) {
            for (
              var i, r = mi(this.node(), e).tween, u = 0, o = r.length;
              u < o;
              ++u
            )
              if ((i = r[u]).name === t) return i.value;
            return null;
          }
          return this.each(
            (null == n
              ? function (t, n) {
                  var e, i;
                  return function () {
                    var r = vi(this, t),
                      u = r.tween;
                    if (u !== e)
                      for (var o = 0, s = (i = e = u).length; o < s; ++o)
                        if (i[o].name === n) {
                          (i = i.slice()).splice(o, 1);
                          break;
                        }
                    r.tween = i;
                  };
                }
              : function (t, n, e) {
                  var i, r;
                  if ("function" != typeof e) throw new Error();
                  return function () {
                    var u = vi(this, t),
                      o = u.tween;
                    if (o !== i) {
                      r = (i = o).slice();
                      for (
                        var s = { name: n, value: e }, a = 0, h = r.length;
                        a < h;
                        ++a
                      )
                        if (r[a].name === n) {
                          r[a] = s;
                          break;
                        }
                      a === h && r.push(s);
                    }
                    u.tween = r;
                  };
                })(e, t, n)
          );
        },
        delay: function (t) {
          var n = this._id;
          return arguments.length
            ? this.each(
                ("function" == typeof t
                  ? function (t, n) {
                      return function () {
                        gi(this, t).delay = +n.apply(this, arguments);
                      };
                    }
                  : function (t, n) {
                      return (
                        (n = +n),
                        function () {
                          gi(this, t).delay = n;
                        }
                      );
                    })(n, t)
              )
            : mi(this.node(), n).delay;
        },
        duration: function (t) {
          var n = this._id;
          return arguments.length
            ? this.each(
                ("function" == typeof t
                  ? function (t, n) {
                      return function () {
                        vi(this, t).duration = +n.apply(this, arguments);
                      };
                    }
                  : function (t, n) {
                      return (
                        (n = +n),
                        function () {
                          vi(this, t).duration = n;
                        }
                      );
                    })(n, t)
              )
            : mi(this.node(), n).duration;
        },
        ease: function (t) {
          var n = this._id;
          return arguments.length
            ? this.each(
                (function (t, n) {
                  if ("function" != typeof n) throw new Error();
                  return function () {
                    vi(this, t).ease = n;
                  };
                })(n, t)
              )
            : mi(this.node(), n).ease;
        },
      };
      (function t(n) {
        function e(t) {
          return Math.pow(t, n);
        }
        return (n = +n), (e.exponent = t), e;
      })(3),
        (function t(n) {
          function e(t) {
            return 1 - Math.pow(1 - t, n);
          }
          return (n = +n), (e.exponent = t), e;
        })(3),
        (function t(n) {
          function e(t) {
            return (
              ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
            );
          }
          return (n = +n), (e.exponent = t), e;
        })(3),
        Math.PI;
      (function t(n) {
        function e(t) {
          return t * t * ((n + 1) * t - n);
        }
        return (n = +n), (e.overshoot = t), e;
      })(1.70158),
        (function t(n) {
          function e(t) {
            return --t * t * ((n + 1) * t + n) + 1;
          }
          return (n = +n), (e.overshoot = t), e;
        })(1.70158),
        (function t(n) {
          function e(t) {
            return (
              ((t *= 2) < 1
                ? t * t * ((n + 1) * t - n)
                : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
            );
          }
          return (n = +n), (e.overshoot = t), e;
        })(1.70158);
      var Fi = 2 * Math.PI,
        Si =
          ((function t(n, e) {
            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Fi);
            function r(t) {
              return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e);
            }
            return (
              (r.amplitude = function (n) {
                return t(n, e * Fi);
              }),
              (r.period = function (e) {
                return t(n, e);
              }),
              r
            );
          })(1, 0.3),
          (function t(n, e) {
            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Fi);
            function r(t) {
              return (
                1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e)
              );
            }
            return (
              (r.amplitude = function (n) {
                return t(n, e * Fi);
              }),
              (r.period = function (e) {
                return t(n, e);
              }),
              r
            );
          })(1, 0.3),
          (function t(n, e) {
            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Fi);
            function r(t) {
              return (
                ((t = 2 * t - 1) < 0
                  ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e)
                  : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2
              );
            }
            return (
              (r.amplitude = function (n) {
                return t(n, e * Fi);
              }),
              (r.period = function (e) {
                return t(n, e);
              }),
              r
            );
          })(1, 0.3),
          {
            time: null,
            delay: 0,
            duration: 250,
            ease: function (t) {
              return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
            },
          });
      function Mi(t, n) {
        for (var e; !(e = t.__transition) || !(e = e[n]); )
          if (!(t = t.parentNode)) return (Si.time = Ke()), Si;
        return e;
      }
      (U.prototype.interrupt = function (t) {
        return this.each(function () {
          xi(this, t);
        });
      }),
        (U.prototype.transition = function (t) {
          var n, e;
          t instanceof Bi
            ? ((n = t._id), (t = t._name))
            : ((n = Di()),
              ((e = Si).time = Ke()),
              (t = null == t ? null : t + ""));
          for (var i = this._groups, r = i.length, u = 0; u < r; ++u)
            for (var o, s = i[u], a = s.length, h = 0; h < a; ++h)
              (o = s[h]) && yi(o, t, n, h, s, e || Mi(o, n));
          return new Bi(i, this._parents, t, n);
        });
      var Ti = function (t) {
        return function () {
          return t;
        };
      };
      function Oi(t, n, e) {
        (this.target = t), (this.type = n), (this.transform = e);
      }
      function Ni(t, n, e) {
        (this.k = t), (this.x = n), (this.y = e);
      }
      Ni.prototype = {
        constructor: Ni,
        scale: function (t) {
          return 1 === t ? this : new Ni(this.k * t, this.x, this.y);
        },
        translate: function (t, n) {
          return (0 === t) & (0 === n)
            ? this
            : new Ni(this.k, this.x + this.k * t, this.y + this.k * n);
        },
        apply: function (t) {
          return [t[0] * this.k + this.x, t[1] * this.k + this.y];
        },
        applyX: function (t) {
          return t * this.k + this.x;
        },
        applyY: function (t) {
          return t * this.k + this.y;
        },
        invert: function (t) {
          return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
        },
        invertX: function (t) {
          return (t - this.x) / this.k;
        },
        invertY: function (t) {
          return (t - this.y) / this.k;
        },
        rescaleX: function (t) {
          return t
            .copy()
            .domain(t.range().map(this.invertX, this).map(t.invert, t));
        },
        rescaleY: function (t) {
          return t
            .copy()
            .domain(t.range().map(this.invertY, this).map(t.invert, t));
        },
        toString: function () {
          return (
            "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
          );
        },
      };
      var zi = new Ni(1, 0, 0);
      function Pi(t) {
        return t.__zoom || zi;
      }
      function ji() {
        P.stopImmediatePropagation();
      }
      Pi.prototype = Ni.prototype;
      var Wi = function () {
        P.preventDefault(), P.stopImmediatePropagation();
      };
      function Hi() {
        return !P.button;
      }
      function Ri() {
        var t,
          n,
          e = this;
        return (
          e instanceof SVGElement
            ? ((t = (e = e.ownerSVGElement || e).width.baseVal.value),
              (n = e.height.baseVal.value))
            : ((t = e.clientWidth), (n = e.clientHeight)),
          [
            [0, 0],
            [t, n],
          ]
        );
      }
      function qi() {
        return this.__zoom || zi;
      }
      function Ii() {
        return (-P.deltaY * (P.deltaMode ? 120 : 1)) / 500;
      }
      function Li() {
        return "ontouchstart" in this;
      }
      function Vi(t, n, e) {
        var i = t.invertX(n[0][0]) - e[0][0],
          r = t.invertX(n[1][0]) - e[1][0],
          u = t.invertY(n[0][1]) - e[0][1],
          o = t.invertY(n[1][1]) - e[1][1];
        return t.translate(
          r > i ? (i + r) / 2 : Math.min(0, i) || Math.max(0, r),
          o > u ? (u + o) / 2 : Math.min(0, u) || Math.max(0, o)
        );
      }
      var $i = function () {
          var t,
            n,
            e = Hi,
            i = Ri,
            r = Vi,
            u = Ii,
            o = Li,
            s = [0, 1 / 0],
            a = [
              [-1 / 0, -1 / 0],
              [1 / 0, 1 / 0],
            ],
            h = 250,
            c = We,
            l = [],
            f = hn("start", "zoom", "end"),
            p = 500,
            _ = 150,
            d = 0;
          function y(t) {
            t.property("__zoom", qi)
              .on("wheel.zoom", b)
              .on("mousedown.zoom", E)
              .on("dblclick.zoom", B)
              .filter(o)
              .on("touchstart.zoom", C)
              .on("touchmove.zoom", D)
              .on("touchend.zoom touchcancel.zoom", k)
              .style("touch-action", "none")
              .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
          }
          function g(t, n) {
            return (n = Math.max(s[0], Math.min(s[1], n))) === t.k
              ? t
              : new Ni(n, t.x, t.y);
          }
          function v(t, n, e) {
            var i = n[0] - e[0] * t.k,
              r = n[1] - e[1] * t.k;
            return i === t.x && r === t.y ? t : new Ni(t.k, i, r);
          }
          function m(t) {
            return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
          }
          function x(t, n, e) {
            t.on("start.zoom", function () {
              A(this, arguments).start();
            })
              .on("interrupt.zoom end.zoom", function () {
                A(this, arguments).end();
              })
              .tween("zoom", function () {
                var t = arguments,
                  r = A(this, t),
                  u = i.apply(this, t),
                  o = e || m(u),
                  s = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
                  a = this.__zoom,
                  h = "function" == typeof n ? n.apply(this, t) : n,
                  l = c(
                    a.invert(o).concat(s / a.k),
                    h.invert(o).concat(s / h.k)
                  );
                return function (t) {
                  if (1 === t) t = h;
                  else {
                    var n = l(t),
                      e = s / n[2];
                    t = new Ni(e, o[0] - n[0] * e, o[1] - n[1] * e);
                  }
                  r.zoom(null, t);
                };
              });
          }
          function A(t, n) {
            for (var e, i = 0, r = l.length; i < r; ++i)
              if ((e = l[i]).that === t) return e;
            return new w(t, n);
          }
          function w(t, n) {
            (this.that = t),
              (this.args = n),
              (this.index = -1),
              (this.active = 0),
              (this.extent = i.apply(t, n));
          }
          function b() {
            if (e.apply(this, arguments)) {
              var t = A(this, arguments),
                n = this.__zoom,
                i = Math.max(
                  s[0],
                  Math.min(s[1], n.k * Math.pow(2, u.apply(this, arguments)))
                ),
                o = J(this);
              if (t.wheel)
                (t.mouse[0][0] === o[0] && t.mouse[0][1] === o[1]) ||
                  (t.mouse[1] = n.invert((t.mouse[0] = o))),
                  clearTimeout(t.wheel);
              else {
                if (n.k === i) return;
                (t.mouse = [o, n.invert(o)]), xi(this), t.start();
              }
              Wi(),
                (t.wheel = setTimeout(function () {
                  (t.wheel = null), t.end();
                }, _)),
                t.zoom(
                  "mouse",
                  r(v(g(n, i), t.mouse[0], t.mouse[1]), t.extent, a)
                );
            }
          }
          function E() {
            if (!n && e.apply(this, arguments)) {
              var t = A(this, arguments),
                i = X(P.view)
                  .on(
                    "mousemove.zoom",
                    function () {
                      if ((Wi(), !t.moved)) {
                        var n = P.clientX - o,
                          e = P.clientY - s;
                        t.moved = n * n + e * e > d;
                      }
                      t.zoom(
                        "mouse",
                        r(
                          v(
                            t.that.__zoom,
                            (t.mouse[0] = J(t.that)),
                            t.mouse[1]
                          ),
                          t.extent,
                          a
                        )
                      );
                    },
                    !0
                  )
                  .on(
                    "mouseup.zoom",
                    function () {
                      i.on("mousemove.zoom mouseup.zoom", null),
                        fn(P.view, t.moved),
                        Wi(),
                        t.end();
                    },
                    !0
                  ),
                u = J(this),
                o = P.clientX,
                s = P.clientY;
              ln(P.view),
                ji(),
                (t.mouse = [u, this.__zoom.invert(u)]),
                xi(this),
                t.start();
            }
          }
          function B() {
            if (e.apply(this, arguments)) {
              var t = this.__zoom,
                n = J(this),
                u = t.invert(n),
                o = t.k * (P.shiftKey ? 0.5 : 2),
                s = r(v(g(t, o), n, u), i.apply(this, arguments), a);
              Wi(),
                h > 0
                  ? X(this).transition().duration(h).call(x, s, n)
                  : X(this).call(y.transform, s);
            }
          }
          function C() {
            if (e.apply(this, arguments)) {
              var n,
                i,
                r,
                u,
                o = A(this, arguments),
                s = P.changedTouches,
                a = s.length;
              for (ji(), i = 0; i < a; ++i)
                (r = s[i]),
                  (u = [
                    (u = K(this, s, r.identifier)),
                    this.__zoom.invert(u),
                    r.identifier,
                  ]),
                  o.touch0
                    ? o.touch1 || (o.touch1 = u)
                    : ((o.touch0 = u), (n = !0));
              if (t && ((t = clearTimeout(t)), !o.touch1))
                return (
                  o.end(),
                  void (
                    (u = X(this).on("dblclick.zoom")) &&
                    u.apply(this, arguments)
                  )
                );
              n &&
                ((t = setTimeout(function () {
                  t = null;
                }, p)),
                xi(this),
                o.start());
            }
          }
          function D() {
            var n,
              e,
              i,
              u,
              o = A(this, arguments),
              s = P.changedTouches,
              h = s.length;
            for (Wi(), t && (t = clearTimeout(t)), n = 0; n < h; ++n)
              (e = s[n]),
                (i = K(this, s, e.identifier)),
                o.touch0 && o.touch0[2] === e.identifier
                  ? (o.touch0[0] = i)
                  : o.touch1 &&
                    o.touch1[2] === e.identifier &&
                    (o.touch1[0] = i);
            if (((e = o.that.__zoom), o.touch1)) {
              var c = o.touch0[0],
                l = o.touch0[1],
                f = o.touch1[0],
                p = o.touch1[1],
                _ = (_ = f[0] - c[0]) * _ + (_ = f[1] - c[1]) * _,
                d = (d = p[0] - l[0]) * d + (d = p[1] - l[1]) * d;
              (e = g(e, Math.sqrt(_ / d))),
                (i = [(c[0] + f[0]) / 2, (c[1] + f[1]) / 2]),
                (u = [(l[0] + p[0]) / 2, (l[1] + p[1]) / 2]);
            } else {
              if (!o.touch0) return;
              (i = o.touch0[0]), (u = o.touch0[1]);
            }
            o.zoom("touch", r(v(e, i, u), o.extent, a));
          }
          function k() {
            var t,
              e,
              i = A(this, arguments),
              r = P.changedTouches,
              u = r.length;
            for (
              ji(),
                n && clearTimeout(n),
                n = setTimeout(function () {
                  n = null;
                }, p),
                t = 0;
              t < u;
              ++t
            )
              (e = r[t]),
                i.touch0 && i.touch0[2] === e.identifier
                  ? delete i.touch0
                  : i.touch1 && i.touch1[2] === e.identifier && delete i.touch1;
            i.touch1 && !i.touch0 && ((i.touch0 = i.touch1), delete i.touch1),
              i.touch0
                ? (i.touch0[1] = this.__zoom.invert(i.touch0[0]))
                : i.end();
          }
          return (
            (y.transform = function (t, n) {
              var e = t.selection ? t.selection() : t;
              e.property("__zoom", qi),
                t !== e
                  ? x(t, n)
                  : e.interrupt().each(function () {
                      A(this, arguments)
                        .start()
                        .zoom(
                          null,
                          "function" == typeof n ? n.apply(this, arguments) : n
                        )
                        .end();
                    });
            }),
            (y.scaleBy = function (t, n) {
              y.scaleTo(t, function () {
                return (
                  this.__zoom.k *
                  ("function" == typeof n ? n.apply(this, arguments) : n)
                );
              });
            }),
            (y.scaleTo = function (t, n) {
              y.transform(t, function () {
                var t = i.apply(this, arguments),
                  e = this.__zoom,
                  u = m(t),
                  o = e.invert(u),
                  s = "function" == typeof n ? n.apply(this, arguments) : n;
                return r(v(g(e, s), u, o), t, a);
              });
            }),
            (y.translateBy = function (t, n, e) {
              y.transform(t, function () {
                return r(
                  this.__zoom.translate(
                    "function" == typeof n ? n.apply(this, arguments) : n,
                    "function" == typeof e ? e.apply(this, arguments) : e
                  ),
                  i.apply(this, arguments),
                  a
                );
              });
            }),
            (y.translateTo = function (t, n, e) {
              y.transform(t, function () {
                var t = i.apply(this, arguments),
                  u = this.__zoom,
                  o = m(t);
                return r(
                  zi
                    .translate(o[0], o[1])
                    .scale(u.k)
                    .translate(
                      "function" == typeof n ? -n.apply(this, arguments) : -n,
                      "function" == typeof e ? -e.apply(this, arguments) : -e
                    ),
                  t,
                  a
                );
              });
            }),
            (w.prototype = {
              start: function () {
                return (
                  1 == ++this.active &&
                    ((this.index = l.push(this) - 1), this.emit("start")),
                  this
                );
              },
              zoom: function (t, n) {
                return (
                  this.mouse &&
                    "mouse" !== t &&
                    (this.mouse[1] = n.invert(this.mouse[0])),
                  this.touch0 &&
                    "touch" !== t &&
                    (this.touch0[1] = n.invert(this.touch0[0])),
                  this.touch1 &&
                    "touch" !== t &&
                    (this.touch1[1] = n.invert(this.touch1[0])),
                  (this.that.__zoom = n),
                  this.emit("zoom"),
                  this
                );
              },
              end: function () {
                return (
                  0 == --this.active &&
                    (l.splice(this.index, 1),
                    (this.index = -1),
                    this.emit("end")),
                  this
                );
              },
              emit: function (t) {
                q(new Oi(y, t, this.that.__zoom), f.apply, f, [
                  t,
                  this.that,
                  this.args,
                ]);
              },
            }),
            (y.wheelDelta = function (t) {
              return arguments.length
                ? ((u = "function" == typeof t ? t : Ti(+t)), y)
                : u;
            }),
            (y.filter = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : Ti(!!t)), y)
                : e;
            }),
            (y.touchable = function (t) {
              return arguments.length
                ? ((o = "function" == typeof t ? t : Ti(!!t)), y)
                : o;
            }),
            (y.extent = function (t) {
              return arguments.length
                ? ((i =
                    "function" == typeof t
                      ? t
                      : Ti([
                          [+t[0][0], +t[0][1]],
                          [+t[1][0], +t[1][1]],
                        ])),
                  y)
                : i;
            }),
            (y.scaleExtent = function (t) {
              return arguments.length
                ? ((s[0] = +t[0]), (s[1] = +t[1]), y)
                : [s[0], s[1]];
            }),
            (y.translateExtent = function (t) {
              return arguments.length
                ? ((a[0][0] = +t[0][0]),
                  (a[1][0] = +t[1][0]),
                  (a[0][1] = +t[0][1]),
                  (a[1][1] = +t[1][1]),
                  y)
                : [
                    [a[0][0], a[0][1]],
                    [a[1][0], a[1][1]],
                  ];
            }),
            (y.constrain = function (t) {
              return arguments.length ? ((r = t), y) : r;
            }),
            (y.duration = function (t) {
              return arguments.length ? ((h = +t), y) : h;
            }),
            (y.interpolate = function (t) {
              return arguments.length ? ((c = t), y) : c;
            }),
            (y.on = function () {
              var t = f.on.apply(f, arguments);
              return t === f ? y : t;
            }),
            (y.clickDistance = function (t) {
              return arguments.length ? ((d = (t = +t) * t), y) : Math.sqrt(d);
            }),
            y
          );
        },
        Ui = Math.PI,
        Xi = 2 * Ui,
        Yi = Xi - 1e-6;
      function Gi() {
        (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
      }
      function Zi() {
        return new Gi();
      }
      Gi.prototype = Zi.prototype = {
        constructor: Gi,
        moveTo: function (t, n) {
          this._ +=
            "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
        },
        closePath: function () {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
        },
        lineTo: function (t, n) {
          this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
        },
        quadraticCurveTo: function (t, n, e, i) {
          this._ +=
            "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +i);
        },
        bezierCurveTo: function (t, n, e, i, r, u) {
          this._ +=
            "C" +
            +t +
            "," +
            +n +
            "," +
            +e +
            "," +
            +i +
            "," +
            (this._x1 = +r) +
            "," +
            (this._y1 = +u);
        },
        arcTo: function (t, n, e, i, r) {
          (t = +t), (n = +n), (e = +e), (i = +i), (r = +r);
          var u = this._x1,
            o = this._y1,
            s = e - t,
            a = i - n,
            h = u - t,
            c = o - n,
            l = h * h + c * c;
          if (r < 0) throw new Error("negative radius: " + r);
          if (null === this._x1)
            this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
          else if (l > 1e-6)
            if (Math.abs(c * s - a * h) > 1e-6 && r) {
              var f = e - u,
                p = i - o,
                _ = s * s + a * a,
                d = f * f + p * p,
                y = Math.sqrt(_),
                g = Math.sqrt(l),
                v =
                  r * Math.tan((Ui - Math.acos((_ + l - d) / (2 * y * g))) / 2),
                m = v / g,
                x = v / y;
              Math.abs(m - 1) > 1e-6 &&
                (this._ += "L" + (t + m * h) + "," + (n + m * c)),
                (this._ +=
                  "A" +
                  r +
                  "," +
                  r +
                  ",0,0," +
                  +(c * f > h * p) +
                  "," +
                  (this._x1 = t + x * s) +
                  "," +
                  (this._y1 = n + x * a));
            } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
          else;
        },
        arc: function (t, n, e, i, r, u) {
          (t = +t), (n = +n);
          var o = (e = +e) * Math.cos(i),
            s = e * Math.sin(i),
            a = t + o,
            h = n + s,
            c = 1 ^ u,
            l = u ? i - r : r - i;
          if (e < 0) throw new Error("negative radius: " + e);
          null === this._x1
            ? (this._ += "M" + a + "," + h)
            : (Math.abs(this._x1 - a) > 1e-6 ||
                Math.abs(this._y1 - h) > 1e-6) &&
              (this._ += "L" + a + "," + h),
            e &&
              (l < 0 && (l = (l % Xi) + Xi),
              l > Yi
                ? (this._ +=
                    "A" +
                    e +
                    "," +
                    e +
                    ",0,1," +
                    c +
                    "," +
                    (t - o) +
                    "," +
                    (n - s) +
                    "A" +
                    e +
                    "," +
                    e +
                    ",0,1," +
                    c +
                    "," +
                    (this._x1 = a) +
                    "," +
                    (this._y1 = h))
                : l > 1e-6 &&
                  (this._ +=
                    "A" +
                    e +
                    "," +
                    e +
                    ",0," +
                    +(l >= Ui) +
                    "," +
                    c +
                    "," +
                    (this._x1 = t + e * Math.cos(r)) +
                    "," +
                    (this._y1 = n + e * Math.sin(r))));
        },
        rect: function (t, n, e, i) {
          this._ +=
            "M" +
            (this._x0 = this._x1 = +t) +
            "," +
            (this._y0 = this._y1 = +n) +
            "h" +
            +e +
            "v" +
            +i +
            "h" +
            -e +
            "Z";
        },
        toString: function () {
          return this._;
        },
      };
      var Qi = Zi,
        Ji = function (t) {
          return function () {
            return t;
          };
        },
        Ki =
          (Math.abs,
          Math.atan2,
          Math.cos,
          Math.max,
          Math.min,
          Math.sin,
          Math.sqrt,
          1e-12),
        tr = Math.PI,
        nr = 2 * tr;
      function er(t) {
        this._context = t;
      }
      er.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
            default:
              this._context.lineTo(t, n);
          }
        },
      };
      var ir = function (t) {
        return new er(t);
      };
      function rr(t) {
        return t[0];
      }
      function ur(t) {
        return t[1];
      }
      sr(ir);
      function or(t) {
        this._curve = t;
      }
      function sr(t) {
        function n(n) {
          return new or(t(n));
        }
        return (n._curve = t), n;
      }
      or.prototype = {
        areaStart: function () {
          this._curve.areaStart();
        },
        areaEnd: function () {
          this._curve.areaEnd();
        },
        lineStart: function () {
          this._curve.lineStart();
        },
        lineEnd: function () {
          this._curve.lineEnd();
        },
        point: function (t, n) {
          this._curve.point(n * Math.sin(t), n * -Math.cos(t));
        },
      };
      var ar = Array.prototype.slice;
      function hr(t) {
        return t.source;
      }
      function cr(t) {
        return t.target;
      }
      function lr(t) {
        var n = hr,
          e = cr,
          i = rr,
          r = ur,
          u = null;
        function o() {
          var o,
            s = ar.call(arguments),
            a = n.apply(this, s),
            h = e.apply(this, s);
          if (
            (u || (u = o = Qi()),
            t(
              u,
              +i.apply(this, ((s[0] = a), s)),
              +r.apply(this, s),
              +i.apply(this, ((s[0] = h), s)),
              +r.apply(this, s)
            ),
            o)
          )
            return (u = null), o + "" || null;
        }
        return (
          (o.source = function (t) {
            return arguments.length ? ((n = t), o) : n;
          }),
          (o.target = function (t) {
            return arguments.length ? ((e = t), o) : e;
          }),
          (o.x = function (t) {
            return arguments.length
              ? ((i = "function" == typeof t ? t : Ji(+t)), o)
              : i;
          }),
          (o.y = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : Ji(+t)), o)
              : r;
          }),
          (o.context = function (t) {
            return arguments.length ? ((u = null == t ? null : t), o) : u;
          }),
          o
        );
      }
      function fr(t, n, e, i, r) {
        t.moveTo(n, e), t.bezierCurveTo((n = (n + i) / 2), e, n, r, i, r);
      }
      Math.sqrt(1 / 3);
      var pr = Math.sin(tr / 10) / Math.sin((7 * tr) / 10),
        _r =
          (Math.sin(nr / 10),
          Math.cos(nr / 10),
          Math.sqrt(3),
          Math.sqrt(3),
          Math.sqrt(12),
          function () {});
      function dr(t, n, e) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + n) / 6,
          (t._y0 + 4 * t._y1 + e) / 6
        );
      }
      function yr(t) {
        this._context = t;
      }
      yr.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              dr(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6
                );
            default:
              dr(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = n);
        },
      };
      function gr(t) {
        this._context = t;
      }
      gr.prototype = {
        areaStart: _r,
        areaEnd: _r,
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x2, this._y2),
                this._context.closePath();
              break;
            case 2:
              this._context.moveTo(
                (this._x2 + 2 * this._x3) / 3,
                (this._y2 + 2 * this._y3) / 3
              ),
                this._context.lineTo(
                  (this._x3 + 2 * this._x2) / 3,
                  (this._y3 + 2 * this._y2) / 3
                ),
                this._context.closePath();
              break;
            case 3:
              this.point(this._x2, this._y2),
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4);
          }
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1), (this._x2 = t), (this._y2 = n);
              break;
            case 1:
              (this._point = 2), (this._x3 = t), (this._y3 = n);
              break;
            case 2:
              (this._point = 3),
                (this._x4 = t),
                (this._y4 = n),
                this._context.moveTo(
                  (this._x0 + 4 * this._x1 + t) / 6,
                  (this._y0 + 4 * this._y1 + n) / 6
                );
              break;
            default:
              dr(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = n);
        },
      };
      function vr(t) {
        this._context = t;
      }
      vr.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              var e = (this._x0 + 4 * this._x1 + t) / 6,
                i = (this._y0 + 4 * this._y1 + n) / 6;
              this._line
                ? this._context.lineTo(e, i)
                : this._context.moveTo(e, i);
              break;
            case 3:
              this._point = 4;
            default:
              dr(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = n);
        },
      };
      function mr(t, n) {
        (this._basis = new yr(t)), (this._beta = n);
      }
      mr.prototype = {
        lineStart: function () {
          (this._x = []), (this._y = []), this._basis.lineStart();
        },
        lineEnd: function () {
          var t = this._x,
            n = this._y,
            e = t.length - 1;
          if (e > 0)
            for (
              var i, r = t[0], u = n[0], o = t[e] - r, s = n[e] - u, a = -1;
              ++a <= e;

            )
              (i = a / e),
                this._basis.point(
                  this._beta * t[a] + (1 - this._beta) * (r + i * o),
                  this._beta * n[a] + (1 - this._beta) * (u + i * s)
                );
          (this._x = this._y = null), this._basis.lineEnd();
        },
        point: function (t, n) {
          this._x.push(+t), this._y.push(+n);
        },
      };
      (function t(n) {
        function e(t) {
          return 1 === n ? new yr(t) : new mr(t, n);
        }
        return (
          (e.beta = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.85);
      function xr(t, n, e) {
        t._context.bezierCurveTo(
          t._x1 + t._k * (t._x2 - t._x0),
          t._y1 + t._k * (t._y2 - t._y0),
          t._x2 + t._k * (t._x1 - n),
          t._y2 + t._k * (t._y1 - e),
          t._x2,
          t._y2
        );
      }
      function Ar(t, n) {
        (this._context = t), (this._k = (1 - n) / 6);
      }
      Ar.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              xr(this, this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              (this._point = 2), (this._x1 = t), (this._y1 = n);
              break;
            case 2:
              this._point = 3;
            default:
              xr(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      (function t(n) {
        function e(t) {
          return new Ar(t, n);
        }
        return (
          (e.tension = function (n) {
            return t(+n);
          }),
          e
        );
      })(0);
      function wr(t, n) {
        (this._context = t), (this._k = (1 - n) / 6);
      }
      wr.prototype = {
        areaStart: _r,
        areaEnd: _r,
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
              break;
            case 2:
              this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
              break;
            case 3:
              this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5);
          }
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1), (this._x3 = t), (this._y3 = n);
              break;
            case 1:
              (this._point = 2),
                this._context.moveTo((this._x4 = t), (this._y4 = n));
              break;
            case 2:
              (this._point = 3), (this._x5 = t), (this._y5 = n);
              break;
            default:
              xr(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      (function t(n) {
        function e(t) {
          return new wr(t, n);
        }
        return (
          (e.tension = function (n) {
            return t(+n);
          }),
          e
        );
      })(0);
      function br(t, n) {
        (this._context = t), (this._k = (1 - n) / 6);
      }
      br.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._line
                  ? this._context.lineTo(this._x2, this._y2)
                  : this._context.moveTo(this._x2, this._y2);
              break;
            case 3:
              this._point = 4;
            default:
              xr(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      (function t(n) {
        function e(t) {
          return new br(t, n);
        }
        return (
          (e.tension = function (n) {
            return t(+n);
          }),
          e
        );
      })(0);
      function Er(t, n, e) {
        var i = t._x1,
          r = t._y1,
          u = t._x2,
          o = t._y2;
        if (t._l01_a > Ki) {
          var s = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
            a = 3 * t._l01_a * (t._l01_a + t._l12_a);
          (i = (i * s - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / a),
            (r = (r * s - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / a);
        }
        if (t._l23_a > Ki) {
          var h = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
            c = 3 * t._l23_a * (t._l23_a + t._l12_a);
          (u = (u * h + t._x1 * t._l23_2a - n * t._l12_2a) / c),
            (o = (o * h + t._y1 * t._l23_2a - e * t._l12_2a) / c);
        }
        t._context.bezierCurveTo(i, r, u, o, t._x2, t._y2);
      }
      function Br(t, n) {
        (this._context = t), (this._alpha = n);
      }
      Br.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
            (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              this.point(this._x2, this._y2);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          if (((t = +t), (n = +n), this._point)) {
            var e = this._x2 - t,
              i = this._y2 - n;
            this._l23_a = Math.sqrt(
              (this._l23_2a = Math.pow(e * e + i * i, this._alpha))
            );
          }
          switch (this._point) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
            default:
              Er(this, t, n);
          }
          (this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      (function t(n) {
        function e(t) {
          return n ? new Br(t, n) : new Ar(t, 0);
        }
        return (
          (e.alpha = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.5);
      function Cr(t, n) {
        (this._context = t), (this._alpha = n);
      }
      Cr.prototype = {
        areaStart: _r,
        areaEnd: _r,
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
            (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
              break;
            case 2:
              this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
              break;
            case 3:
              this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5);
          }
        },
        point: function (t, n) {
          if (((t = +t), (n = +n), this._point)) {
            var e = this._x2 - t,
              i = this._y2 - n;
            this._l23_a = Math.sqrt(
              (this._l23_2a = Math.pow(e * e + i * i, this._alpha))
            );
          }
          switch (this._point) {
            case 0:
              (this._point = 1), (this._x3 = t), (this._y3 = n);
              break;
            case 1:
              (this._point = 2),
                this._context.moveTo((this._x4 = t), (this._y4 = n));
              break;
            case 2:
              (this._point = 3), (this._x5 = t), (this._y5 = n);
              break;
            default:
              Er(this, t, n);
          }
          (this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      (function t(n) {
        function e(t) {
          return n ? new Cr(t, n) : new wr(t, 0);
        }
        return (
          (e.alpha = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.5);
      function Dr(t, n) {
        (this._context = t), (this._alpha = n);
      }
      Dr.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
            (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          if (((t = +t), (n = +n), this._point)) {
            var e = this._x2 - t,
              i = this._y2 - n;
            this._l23_a = Math.sqrt(
              (this._l23_2a = Math.pow(e * e + i * i, this._alpha))
            );
          }
          switch (this._point) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._line
                  ? this._context.lineTo(this._x2, this._y2)
                  : this._context.moveTo(this._x2, this._y2);
              break;
            case 3:
              this._point = 4;
            default:
              Er(this, t, n);
          }
          (this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      (function t(n) {
        function e(t) {
          return n ? new Dr(t, n) : new br(t, 0);
        }
        return (
          (e.alpha = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.5);
      function kr(t) {
        this._context = t;
      }
      kr.prototype = {
        areaStart: _r,
        areaEnd: _r,
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          this._point && this._context.closePath();
        },
        point: function (t, n) {
          (t = +t),
            (n = +n),
            this._point
              ? this._context.lineTo(t, n)
              : ((this._point = 1), this._context.moveTo(t, n));
        },
      };
      function Fr(t) {
        return t < 0 ? -1 : 1;
      }
      function Sr(t, n, e) {
        var i = t._x1 - t._x0,
          r = n - t._x1,
          u = (t._y1 - t._y0) / (i || (r < 0 && -0)),
          o = (e - t._y1) / (r || (i < 0 && -0)),
          s = (u * r + o * i) / (i + r);
        return (
          (Fr(u) + Fr(o)) *
            Math.min(Math.abs(u), Math.abs(o), 0.5 * Math.abs(s)) || 0
        );
      }
      function Mr(t, n) {
        var e = t._x1 - t._x0;
        return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
      }
      function Tr(t, n, e) {
        var i = t._x0,
          r = t._y0,
          u = t._x1,
          o = t._y1,
          s = (u - i) / 3;
        t._context.bezierCurveTo(i + s, r + s * n, u - s, o - s * e, u, o);
      }
      function Or(t) {
        this._context = t;
      }
      function Nr(t) {
        this._context = new zr(t);
      }
      function zr(t) {
        this._context = t;
      }
      function Pr(t) {
        this._context = t;
      }
      function jr(t) {
        var n,
          e,
          i = t.length - 1,
          r = new Array(i),
          u = new Array(i),
          o = new Array(i);
        for (r[0] = 0, u[0] = 2, o[0] = t[0] + 2 * t[1], n = 1; n < i - 1; ++n)
          (r[n] = 1), (u[n] = 4), (o[n] = 4 * t[n] + 2 * t[n + 1]);
        for (
          r[i - 1] = 2, u[i - 1] = 7, o[i - 1] = 8 * t[i - 1] + t[i], n = 1;
          n < i;
          ++n
        )
          (e = r[n] / u[n - 1]), (u[n] -= e), (o[n] -= e * o[n - 1]);
        for (r[i - 1] = o[i - 1] / u[i - 1], n = i - 2; n >= 0; --n)
          r[n] = (o[n] - r[n + 1]) / u[n];
        for (u[i - 1] = (t[i] + r[i - 1]) / 2, n = 0; n < i - 1; ++n)
          u[n] = 2 * t[n + 1] - r[n + 1];
        return [r, u];
      }
      (Or.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x1, this._y1);
              break;
            case 3:
              Tr(this, this._t0, Mr(this, this._t0));
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          var e = NaN;
          if (((n = +n), (t = +t) !== this._x1 || n !== this._y1)) {
            switch (this._point) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, n)
                    : this._context.moveTo(t, n);
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                (this._point = 3), Tr(this, Mr(this, (e = Sr(this, t, n))), e);
                break;
              default:
                Tr(this, this._t0, (e = Sr(this, t, n)));
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = n),
              (this._t0 = e);
          }
        },
      }),
        ((Nr.prototype = Object.create(Or.prototype)).point = function (t, n) {
          Or.prototype.point.call(this, n, t);
        }),
        (zr.prototype = {
          moveTo: function (t, n) {
            this._context.moveTo(n, t);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (t, n) {
            this._context.lineTo(n, t);
          },
          bezierCurveTo: function (t, n, e, i, r, u) {
            this._context.bezierCurveTo(n, t, i, e, u, r);
          },
        }),
        (Pr.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = []), (this._y = []);
          },
          lineEnd: function () {
            var t = this._x,
              n = this._y,
              e = t.length;
            if (e)
              if (
                (this._line
                  ? this._context.lineTo(t[0], n[0])
                  : this._context.moveTo(t[0], n[0]),
                2 === e)
              )
                this._context.lineTo(t[1], n[1]);
              else
                for (var i = jr(t), r = jr(n), u = 0, o = 1; o < e; ++u, ++o)
                  this._context.bezierCurveTo(
                    i[0][u],
                    r[0][u],
                    i[1][u],
                    r[1][u],
                    t[o],
                    n[o]
                  );
            (this._line || (0 !== this._line && 1 === e)) &&
              this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null);
          },
          point: function (t, n) {
            this._x.push(+t), this._y.push(+n);
          },
        });
      function Wr(t, n) {
        (this._context = t), (this._t = n);
      }
      Wr.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x = this._y = NaN), (this._point = 0);
        },
        lineEnd: function () {
          0 < this._t &&
            this._t < 1 &&
            2 === this._point &&
            this._context.lineTo(this._x, this._y),
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
            this._line >= 0 &&
              ((this._t = 1 - this._t), (this._line = 1 - this._line));
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
            default:
              if (this._t <= 0)
                this._context.lineTo(this._x, n), this._context.lineTo(t, n);
              else {
                var e = this._x * (1 - this._t) + t * this._t;
                this._context.lineTo(e, this._y), this._context.lineTo(e, n);
              }
          }
          (this._x = t), (this._y = n);
        },
      };
      function Hr(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      var Rr = (function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var e = null != arguments[n] ? arguments[n] : {},
              i = Object.keys(e);
            "function" == typeof Object.getOwnPropertySymbols &&
              (i = i.concat(
                Object.getOwnPropertySymbols(e).filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })
              )),
              i.forEach(function (n) {
                Hr(t, n, e[n]);
              });
          }
          return t;
        })(
          {
            select: X,
            selectAll: function (t) {
              return "string" == typeof t
                ? new V(
                    [document.querySelectorAll(t)],
                    [document.documentElement]
                  )
                : new V([null == t ? [] : t], L);
            },
            get event() {
              return P;
            },
            linkHorizontal: function () {
              return lr(fr);
            },
          },
          i,
          r
        ),
        qr = function (t, n) {
          n = Object.assign(
            {
              "font-size": 10,
              "font-family": "sans-serif",
              "font-style": "normal",
              "font-weight": 400,
              "font-variant": "normal",
            },
            n
          );
          var e = document.createElement("canvas").getContext("2d"),
            i = [];
          return (
            i.push(n["font-style"]),
            i.push(n["font-variant"]),
            i.push(n["font-weight"]),
            i.push(
              "string" == typeof n["font-size"]
                ? n["font-size"]
                : n["font-size"] + "px"
            ),
            i.push(n["font-family"]),
            (e.font = i.join(" ")),
            t instanceof Array
              ? t.map(function (t) {
                  return e.measureText(t).width;
                })
              : e.measureText(t).width
          );
        };
      function Ir(t) {
        return t.replace(/\s+$/, "");
      }
      var Lr,
        Vr,
        $r,
        Ur,
        Xr = "abcdefghiABCDEFGHI_!@#$%^&*()_+1234567890",
        Yr = {},
        Gr = function (t) {
          Lr ||
            ((Lr = qr(Xr, { "font-family": "DejaVuSans", "font-size": 32 })),
            (Vr = qr(Xr, { "font-family": "-apple-system", "font-size": 32 })),
            ($r = qr(Xr, { "font-family": "monospace", "font-size": 32 })),
            (Ur = qr(Xr, { "font-family": "sans-serif", "font-size": 32 }))),
            t instanceof Array || (t = t.split(",")),
            (t = t.map(function (t) {
              return t.replace(/^\s+|\s+$/g, "");
            }));
          for (var n = 0; n < t.length; n++) {
            var e = t[n];
            if (
              Yr[e] ||
              [
                "-apple-system",
                "monospace",
                "sans-serif",
                "DejaVuSans",
              ].includes(e)
            )
              return e;
            if (!1 !== Yr[e]) {
              var i = qr(Xr, { "font-family": e, "font-size": 32 });
              if (
                ((Yr[e] = i !== $r),
                Yr[e] && (Yr[e] = i !== Ur),
                Vr && Yr[e] && (Yr[e] = i !== Vr),
                Lr && Yr[e] && (Yr[e] = i !== Lr),
                Yr[e])
              )
                return e;
            }
          }
          return !1;
        },
        Zr = function (t) {
          return (
            void 0 === t
              ? (t = "undefined")
              : "string" == typeof t ||
                t instanceof String ||
                (t = JSON.stringify(t)),
            t
          );
        },
        Qr = [
          [/[\300-\305]/g, "A"],
          [/[\340-\345]/g, "a"],
          [/[\306]/g, "AE"],
          [/[\346]/g, "ae"],
          [/[\337]/g, "B"],
          [/[\307]/g, "C"],
          [/[\347]/g, "c"],
          [/[\320\336\376]/g, "D"],
          [/[\360]/g, "d"],
          [/[\310-\313]/g, "E"],
          [/[\350-\353]/g, "e"],
          [/[\314-\317]/g, "I"],
          [/[\354-\357]/g, "i"],
          [/[\321]/g, "N"],
          [/[\361]/g, "n"],
          [/[\322-\326\330]/g, "O"],
          [/[\362-\366\370]/g, "o"],
          [/[\331-\334]/g, "U"],
          [/[\371-\374]/g, "u"],
          [/[\327]/g, "x"],
          [/[\335]/g, "Y"],
          [/[\375\377]/g, "y"],
        ],
        Jr = function (t, n) {
          return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
        };
      var Kr, tu;
      1 === (Kr = Jr).length &&
        ((tu = Kr),
        (Kr = function (t, n) {
          return Jr(tu(t), n);
        }));
      var nu = Array.prototype;
      nu.slice, nu.map, Math.sqrt(50), Math.sqrt(10), Math.sqrt(2);
      var eu = function (t, n) {
          var e,
            i,
            r = t.length,
            u = -1;
          if (null == n) {
            for (; ++u < r; )
              if (null != (e = t[u]) && e >= e)
                for (i = e; ++u < r; ) null != (e = t[u]) && e > i && (i = e);
          } else
            for (; ++u < r; )
              if (null != (e = n(t[u], u, t)) && e >= e)
                for (i = e; ++u < r; )
                  null != (e = n(t[u], u, t)) && e > i && (i = e);
          return i;
        },
        iu = function (t) {
          for (var n, e, i, r = t.length, u = -1, o = 0; ++u < r; )
            o += t[u].length;
          for (e = new Array(o); --r >= 0; )
            for (n = (i = t[r]).length; --n >= 0; ) e[--o] = i[n];
          return e;
        },
        ru = function (t, n) {
          var e,
            i,
            r = t.length,
            u = -1;
          if (null == n) {
            for (; ++u < r; )
              if (null != (e = t[u]) && e >= e)
                for (i = e; ++u < r; ) null != (e = t[u]) && i > e && (i = e);
          } else
            for (; ++u < r; )
              if (null != (e = n(t[u], u, t)) && e >= e)
                for (i = e; ++u < r; )
                  null != (e = n(t[u], u, t)) && i > e && (i = e);
          return i;
        },
        uu = function (t, n) {
          var e,
            i = t.length,
            r = -1,
            u = 0;
          if (null == n) for (; ++r < i; ) (e = +t[r]) && (u += e);
          else for (; ++r < i; ) (e = +n(t[r], r, t)) && (u += e);
          return u;
        };
      var ou = function (t, n) {
          return void 0 === n
            ? function (n) {
                return n[t];
              }
            : function (e) {
                return void 0 === e[t] ? n : e[t];
              };
        },
        su = function (t) {
          return !(
            !t ||
            "object" != typeof t ||
            ("undefined" != typeof window &&
              (t === window ||
                t === window.document ||
                t instanceof Element)) ||
            Array.isArray(t)
          );
        };
      var au = function t() {
        for (var n = [], e = arguments.length; e--; ) n[e] = arguments[e];
        for (
          var i = n[0],
            r = function (e) {
              var r = n[e];
              Object.keys(r).forEach(function (n) {
                var e,
                  u = r[n];
                su(u) &&
                ((e = u),
                "undefined" == typeof window ||
                  (e !== window && e !== document))
                  ? i.hasOwnProperty(n) && su(i[n])
                    ? (i[n] = t({}, i[n], u))
                    : (i[n] = t({}, u))
                  : Array.isArray(u)
                  ? (i[n] = u.slice())
                  : (i[n] = u);
              });
            },
            u = 1;
          u < n.length;
          u++
        )
          r(u);
        return i;
      };
      function hu() {
        return Math.floor(65536 * (1 + Math.random()))
          .toString(16)
          .substring(1);
      }
      var cu = "D3PLUS-COMMON-RESET";
      function lu(t, n) {
        if (su(t))
          for (var e in t)
            if ({}.hasOwnProperty.call(t, e) && !e.startsWith("_")) {
              var i = n && su(n) ? n[e] : void 0;
              t[e] === cu ? (t[e] = i) : su(t[e]) && lu(t[e], i);
            }
      }
      var fu = function () {
        (this._on = {}),
          (this._uuid =
            "" +
            hu() +
            hu() +
            "-" +
            hu() +
            "-" +
            hu() +
            "-" +
            hu() +
            "-" +
            hu() +
            hu() +
            hu());
      };
      (fu.prototype.config = function (t) {
        if (!this._configDefault) {
          var n = {};
          for (var e in this.__proto__)
            if (
              0 !== e.indexOf("_") &&
              !["config", "constructor", "render"].includes(e)
            ) {
              var i = this[e]();
              n[e] = su(i) ? au({}, i) : i;
            }
          this._configDefault = n;
        }
        if (arguments.length) {
          for (var r in t)
            if ({}.hasOwnProperty.call(t, r) && r in this) {
              var u = t[r];
              u === cu
                ? "on" === r
                  ? (this._on = this._configDefault[r])
                  : this[r](this._configDefault[r])
                : (lu(u, this._configDefault[r]), this[r](u));
            }
          return this;
        }
        var o = {};
        for (var s in this.__proto__)
          0 === s.indexOf("_") ||
            ["config", "constructor", "render"].includes(s) ||
            (o[s] = this[s]());
        return o;
      }),
        (fu.prototype.on = function (t, n) {
          return 2 === arguments.length
            ? ((this._on[t] = n), this)
            : arguments.length
            ? "string" == typeof t
              ? this._on[t]
              : ((this._on = Object.assign({}, this._on, t)), this)
            : this._on;
        });
      var pu = fu;
      var _u = function (t) {
        return function () {
          return t;
        };
      };
      function du() {}
      function yu(t, n) {
        var e = new du();
        if (t instanceof du)
          t.each(function (t, n) {
            e.set(n, t);
          });
        else if (Array.isArray(t)) {
          var i,
            r = -1,
            u = t.length;
          if (null == n) for (; ++r < u; ) e.set(r, t[r]);
          else for (; ++r < u; ) e.set(n((i = t[r]), r, t), i);
        } else if (t) for (var o in t) e.set(o, t[o]);
        return e;
      }
      du.prototype = yu.prototype = {
        constructor: du,
        has: function (t) {
          return "$" + t in this;
        },
        get: function (t) {
          return this["$" + t];
        },
        set: function (t, n) {
          return (this["$" + t] = n), this;
        },
        remove: function (t) {
          var n = "$" + t;
          return n in this && delete this[n];
        },
        clear: function () {
          for (var t in this) "$" === t[0] && delete this[t];
        },
        keys: function () {
          var t = [];
          for (var n in this) "$" === n[0] && t.push(n.slice(1));
          return t;
        },
        values: function () {
          var t = [];
          for (var n in this) "$" === n[0] && t.push(this[n]);
          return t;
        },
        entries: function () {
          var t = [];
          for (var n in this)
            "$" === n[0] && t.push({ key: n.slice(1), value: this[n] });
          return t;
        },
        size: function () {
          var t = 0;
          for (var n in this) "$" === n[0] && ++t;
          return t;
        },
        empty: function () {
          for (var t in this) if ("$" === t[0]) return !1;
          return !0;
        },
        each: function (t) {
          for (var n in this) "$" === n[0] && t(this[n], n.slice(1), this);
        },
      };
      var gu = yu;
      function vu() {}
      var mu = gu.prototype;
      function xu(t, n) {
        var e = new vu();
        if (t instanceof vu)
          t.each(function (t) {
            e.add(t);
          });
        else if (t) {
          var i = -1,
            r = t.length;
          if (null == n) for (; ++i < r; ) e.add(t[i]);
          else for (; ++i < r; ) e.add(n(t[i], i, t));
        }
        return e;
      }
      vu.prototype = xu.prototype = {
        constructor: vu,
        has: mu.has,
        add: function (t) {
          return (this["$" + (t += "")] = t), this;
        },
        remove: mu.remove,
        clear: mu.clear,
        values: mu.keys,
        size: mu.size,
        empty: mu.empty,
        each: mu.each,
      };
      var Au = [
          "u0903",
          "u093B",
          "u093E",
          "u093F",
          "u0940",
          "u0949",
          "u094A",
          "u094B",
          "u094C",
          "u094E",
          "u094F",
          "u0982",
          "u0983",
          "u09BE",
          "u09BF",
          "u09C0",
          "u09C7",
          "u09C8",
          "u09CB",
          "u09CC",
          "u09D7",
          "u0A03",
          "u0A3E",
          "u0A3F",
          "u0A40",
          "u0A83",
          "u0ABE",
          "u0ABF",
          "u0AC0",
          "u0AC9",
          "u0ACB",
          "u0ACC",
          "u0B02",
          "u0B03",
          "u0B3E",
          "u0B40",
          "u0B47",
          "u0B48",
          "u0B4B",
          "u0B4C",
          "u0B57",
          "u0BBE",
          "u0BBF",
          "u0BC1",
          "u0BC2",
          "u0BC6",
          "u0BC7",
          "u0BC8",
          "u0BCA",
          "u0BCB",
          "u0BCC",
          "u0BD7",
          "u0C01",
          "u0C02",
          "u0C03",
          "u0C41",
          "u0C42",
          "u0C43",
          "u0C44",
          "u0C82",
          "u0C83",
          "u0CBE",
          "u0CC0",
          "u0CC1",
          "u0CC2",
          "u0CC3",
          "u0CC4",
          "u0CC7",
          "u0CC8",
          "u0CCA",
          "u0CCB",
          "u0CD5",
          "u0CD6",
          "u0D02",
          "u0D03",
          "u0D3E",
          "u0D3F",
          "u0D40",
          "u0D46",
          "u0D47",
          "u0D48",
          "u0D4A",
          "u0D4B",
          "u0D4C",
          "u0D57",
          "u0D82",
          "u0D83",
          "u0DCF",
          "u0DD0",
          "u0DD1",
          "u0DD8",
          "u0DD9",
          "u0DDA",
          "u0DDB",
          "u0DDC",
          "u0DDD",
          "u0DDE",
          "u0DDF",
          "u0DF2",
          "u0DF3",
          "u0F3E",
          "u0F3F",
          "u0F7F",
          "u102B",
          "u102C",
          "u1031",
          "u1038",
          "u103B",
          "u103C",
          "u1056",
          "u1057",
          "u1062",
          "u1063",
          "u1064",
          "u1067",
          "u1068",
          "u1069",
          "u106A",
          "u106B",
          "u106C",
          "u106D",
          "u1083",
          "u1084",
          "u1087",
          "u1088",
          "u1089",
          "u108A",
          "u108B",
          "u108C",
          "u108F",
          "u109A",
          "u109B",
          "u109C",
          "u17B6",
          "u17BE",
          "u17BF",
          "u17C0",
          "u17C1",
          "u17C2",
          "u17C3",
          "u17C4",
          "u17C5",
          "u17C7",
          "u17C8",
          "u1923",
          "u1924",
          "u1925",
          "u1926",
          "u1929",
          "u192A",
          "u192B",
          "u1930",
          "u1931",
          "u1933",
          "u1934",
          "u1935",
          "u1936",
          "u1937",
          "u1938",
          "u1A19",
          "u1A1A",
          "u1A55",
          "u1A57",
          "u1A61",
          "u1A63",
          "u1A64",
          "u1A6D",
          "u1A6E",
          "u1A6F",
          "u1A70",
          "u1A71",
          "u1A72",
          "u1B04",
          "u1B35",
          "u1B3B",
          "u1B3D",
          "u1B3E",
          "u1B3F",
          "u1B40",
          "u1B41",
          "u1B43",
          "u1B44",
          "u1B82",
          "u1BA1",
          "u1BA6",
          "u1BA7",
          "u1BAA",
          "u1BE7",
          "u1BEA",
          "u1BEB",
          "u1BEC",
          "u1BEE",
          "u1BF2",
          "u1BF3",
          "u1C24",
          "u1C25",
          "u1C26",
          "u1C27",
          "u1C28",
          "u1C29",
          "u1C2A",
          "u1C2B",
          "u1C34",
          "u1C35",
          "u1CE1",
          "u1CF2",
          "u1CF3",
          "u302E",
          "u302F",
          "uA823",
          "uA824",
          "uA827",
          "uA880",
          "uA881",
          "uA8B4",
          "uA8B5",
          "uA8B6",
          "uA8B7",
          "uA8B8",
          "uA8B9",
          "uA8BA",
          "uA8BB",
          "uA8BC",
          "uA8BD",
          "uA8BE",
          "uA8BF",
          "uA8C0",
          "uA8C1",
          "uA8C2",
          "uA8C3",
          "uA952",
          "uA953",
          "uA983",
          "uA9B4",
          "uA9B5",
          "uA9BA",
          "uA9BB",
          "uA9BD",
          "uA9BE",
          "uA9BF",
          "uA9C0",
          "uAA2F",
          "uAA30",
          "uAA33",
          "uAA34",
          "uAA4D",
          "uAA7B",
          "uAA7D",
          "uAAEB",
          "uAAEE",
          "uAAEF",
          "uAAF5",
          "uABE3",
          "uABE4",
          "uABE6",
          "uABE7",
          "uABE9",
          "uABEA",
          "uABEC",
        ].concat([
          "u0300",
          "u0301",
          "u0302",
          "u0303",
          "u0304",
          "u0305",
          "u0306",
          "u0307",
          "u0308",
          "u0309",
          "u030A",
          "u030B",
          "u030C",
          "u030D",
          "u030E",
          "u030F",
          "u0310",
          "u0311",
          "u0312",
          "u0313",
          "u0314",
          "u0315",
          "u0316",
          "u0317",
          "u0318",
          "u0319",
          "u031A",
          "u031B",
          "u031C",
          "u031D",
          "u031E",
          "u031F",
          "u0320",
          "u0321",
          "u0322",
          "u0323",
          "u0324",
          "u0325",
          "u0326",
          "u0327",
          "u0328",
          "u0329",
          "u032A",
          "u032B",
          "u032C",
          "u032D",
          "u032E",
          "u032F",
          "u0330",
          "u0331",
          "u0332",
          "u0333",
          "u0334",
          "u0335",
          "u0336",
          "u0337",
          "u0338",
          "u0339",
          "u033A",
          "u033B",
          "u033C",
          "u033D",
          "u033E",
          "u033F",
          "u0340",
          "u0341",
          "u0342",
          "u0343",
          "u0344",
          "u0345",
          "u0346",
          "u0347",
          "u0348",
          "u0349",
          "u034A",
          "u034B",
          "u034C",
          "u034D",
          "u034E",
          "u034F",
          "u0350",
          "u0351",
          "u0352",
          "u0353",
          "u0354",
          "u0355",
          "u0356",
          "u0357",
          "u0358",
          "u0359",
          "u035A",
          "u035B",
          "u035C",
          "u035D",
          "u035E",
          "u035F",
          "u0360",
          "u0361",
          "u0362",
          "u0363",
          "u0364",
          "u0365",
          "u0366",
          "u0367",
          "u0368",
          "u0369",
          "u036A",
          "u036B",
          "u036C",
          "u036D",
          "u036E",
          "u036F",
          "u0483",
          "u0484",
          "u0485",
          "u0486",
          "u0487",
          "u0591",
          "u0592",
          "u0593",
          "u0594",
          "u0595",
          "u0596",
          "u0597",
          "u0598",
          "u0599",
          "u059A",
          "u059B",
          "u059C",
          "u059D",
          "u059E",
          "u059F",
          "u05A0",
          "u05A1",
          "u05A2",
          "u05A3",
          "u05A4",
          "u05A5",
          "u05A6",
          "u05A7",
          "u05A8",
          "u05A9",
          "u05AA",
          "u05AB",
          "u05AC",
          "u05AD",
          "u05AE",
          "u05AF",
          "u05B0",
          "u05B1",
          "u05B2",
          "u05B3",
          "u05B4",
          "u05B5",
          "u05B6",
          "u05B7",
          "u05B8",
          "u05B9",
          "u05BA",
          "u05BB",
          "u05BC",
          "u05BD",
          "u05BF",
          "u05C1",
          "u05C2",
          "u05C4",
          "u05C5",
          "u05C7",
          "u0610",
          "u0611",
          "u0612",
          "u0613",
          "u0614",
          "u0615",
          "u0616",
          "u0617",
          "u0618",
          "u0619",
          "u061A",
          "u064B",
          "u064C",
          "u064D",
          "u064E",
          "u064F",
          "u0650",
          "u0651",
          "u0652",
          "u0653",
          "u0654",
          "u0655",
          "u0656",
          "u0657",
          "u0658",
          "u0659",
          "u065A",
          "u065B",
          "u065C",
          "u065D",
          "u065E",
          "u065F",
          "u0670",
          "u06D6",
          "u06D7",
          "u06D8",
          "u06D9",
          "u06DA",
          "u06DB",
          "u06DC",
          "u06DF",
          "u06E0",
          "u06E1",
          "u06E2",
          "u06E3",
          "u06E4",
          "u06E7",
          "u06E8",
          "u06EA",
          "u06EB",
          "u06EC",
          "u06ED",
          "u0711",
          "u0730",
          "u0731",
          "u0732",
          "u0733",
          "u0734",
          "u0735",
          "u0736",
          "u0737",
          "u0738",
          "u0739",
          "u073A",
          "u073B",
          "u073C",
          "u073D",
          "u073E",
          "u073F",
          "u0740",
          "u0741",
          "u0742",
          "u0743",
          "u0744",
          "u0745",
          "u0746",
          "u0747",
          "u0748",
          "u0749",
          "u074A",
          "u07A6",
          "u07A7",
          "u07A8",
          "u07A9",
          "u07AA",
          "u07AB",
          "u07AC",
          "u07AD",
          "u07AE",
          "u07AF",
          "u07B0",
          "u07EB",
          "u07EC",
          "u07ED",
          "u07EE",
          "u07EF",
          "u07F0",
          "u07F1",
          "u07F2",
          "u07F3",
          "u0816",
          "u0817",
          "u0818",
          "u0819",
          "u081B",
          "u081C",
          "u081D",
          "u081E",
          "u081F",
          "u0820",
          "u0821",
          "u0822",
          "u0823",
          "u0825",
          "u0826",
          "u0827",
          "u0829",
          "u082A",
          "u082B",
          "u082C",
          "u082D",
          "u0859",
          "u085A",
          "u085B",
          "u08E3",
          "u08E4",
          "u08E5",
          "u08E6",
          "u08E7",
          "u08E8",
          "u08E9",
          "u08EA",
          "u08EB",
          "u08EC",
          "u08ED",
          "u08EE",
          "u08EF",
          "u08F0",
          "u08F1",
          "u08F2",
          "u08F3",
          "u08F4",
          "u08F5",
          "u08F6",
          "u08F7",
          "u08F8",
          "u08F9",
          "u08FA",
          "u08FB",
          "u08FC",
          "u08FD",
          "u08FE",
          "u08FF",
          "u0900",
          "u0901",
          "u0902",
          "u093A",
          "u093C",
          "u0941",
          "u0942",
          "u0943",
          "u0944",
          "u0945",
          "u0946",
          "u0947",
          "u0948",
          "u094D",
          "u0951",
          "u0952",
          "u0953",
          "u0954",
          "u0955",
          "u0956",
          "u0957",
          "u0962",
          "u0963",
          "u0981",
          "u09BC",
          "u09C1",
          "u09C2",
          "u09C3",
          "u09C4",
          "u09CD",
          "u09E2",
          "u09E3",
          "u0A01",
          "u0A02",
          "u0A3C",
          "u0A41",
          "u0A42",
          "u0A47",
          "u0A48",
          "u0A4B",
          "u0A4C",
          "u0A4D",
          "u0A51",
          "u0A70",
          "u0A71",
          "u0A75",
          "u0A81",
          "u0A82",
          "u0ABC",
          "u0AC1",
          "u0AC2",
          "u0AC3",
          "u0AC4",
          "u0AC5",
          "u0AC7",
          "u0AC8",
          "u0ACD",
          "u0AE2",
          "u0AE3",
          "u0B01",
          "u0B3C",
          "u0B3F",
          "u0B41",
          "u0B42",
          "u0B43",
          "u0B44",
          "u0B4D",
          "u0B56",
          "u0B62",
          "u0B63",
          "u0B82",
          "u0BC0",
          "u0BCD",
          "u0C00",
          "u0C3E",
          "u0C3F",
          "u0C40",
          "u0C46",
          "u0C47",
          "u0C48",
          "u0C4A",
          "u0C4B",
          "u0C4C",
          "u0C4D",
          "u0C55",
          "u0C56",
          "u0C62",
          "u0C63",
          "u0C81",
          "u0CBC",
          "u0CBF",
          "u0CC6",
          "u0CCC",
          "u0CCD",
          "u0CE2",
          "u0CE3",
          "u0D01",
          "u0D41",
          "u0D42",
          "u0D43",
          "u0D44",
          "u0D4D",
          "u0D62",
          "u0D63",
          "u0DCA",
          "u0DD2",
          "u0DD3",
          "u0DD4",
          "u0DD6",
          "u0E31",
          "u0E34",
          "u0E35",
          "u0E36",
          "u0E37",
          "u0E38",
          "u0E39",
          "u0E3A",
          "u0E47",
          "u0E48",
          "u0E49",
          "u0E4A",
          "u0E4B",
          "u0E4C",
          "u0E4D",
          "u0E4E",
          "u0EB1",
          "u0EB4",
          "u0EB5",
          "u0EB6",
          "u0EB7",
          "u0EB8",
          "u0EB9",
          "u0EBB",
          "u0EBC",
          "u0EC8",
          "u0EC9",
          "u0ECA",
          "u0ECB",
          "u0ECC",
          "u0ECD",
          "u0F18",
          "u0F19",
          "u0F35",
          "u0F37",
          "u0F39",
          "u0F71",
          "u0F72",
          "u0F73",
          "u0F74",
          "u0F75",
          "u0F76",
          "u0F77",
          "u0F78",
          "u0F79",
          "u0F7A",
          "u0F7B",
          "u0F7C",
          "u0F7D",
          "u0F7E",
          "u0F80",
          "u0F81",
          "u0F82",
          "u0F83",
          "u0F84",
          "u0F86",
          "u0F87",
          "u0F8D",
          "u0F8E",
          "u0F8F",
          "u0F90",
          "u0F91",
          "u0F92",
          "u0F93",
          "u0F94",
          "u0F95",
          "u0F96",
          "u0F97",
          "u0F99",
          "u0F9A",
          "u0F9B",
          "u0F9C",
          "u0F9D",
          "u0F9E",
          "u0F9F",
          "u0FA0",
          "u0FA1",
          "u0FA2",
          "u0FA3",
          "u0FA4",
          "u0FA5",
          "u0FA6",
          "u0FA7",
          "u0FA8",
          "u0FA9",
          "u0FAA",
          "u0FAB",
          "u0FAC",
          "u0FAD",
          "u0FAE",
          "u0FAF",
          "u0FB0",
          "u0FB1",
          "u0FB2",
          "u0FB3",
          "u0FB4",
          "u0FB5",
          "u0FB6",
          "u0FB7",
          "u0FB8",
          "u0FB9",
          "u0FBA",
          "u0FBB",
          "u0FBC",
          "u0FC6",
          "u102D",
          "u102E",
          "u102F",
          "u1030",
          "u1032",
          "u1033",
          "u1034",
          "u1035",
          "u1036",
          "u1037",
          "u1039",
          "u103A",
          "u103D",
          "u103E",
          "u1058",
          "u1059",
          "u105E",
          "u105F",
          "u1060",
          "u1071",
          "u1072",
          "u1073",
          "u1074",
          "u1082",
          "u1085",
          "u1086",
          "u108D",
          "u109D",
          "u135D",
          "u135E",
          "u135F",
          "u1712",
          "u1713",
          "u1714",
          "u1732",
          "u1733",
          "u1734",
          "u1752",
          "u1753",
          "u1772",
          "u1773",
          "u17B4",
          "u17B5",
          "u17B7",
          "u17B8",
          "u17B9",
          "u17BA",
          "u17BB",
          "u17BC",
          "u17BD",
          "u17C6",
          "u17C9",
          "u17CA",
          "u17CB",
          "u17CC",
          "u17CD",
          "u17CE",
          "u17CF",
          "u17D0",
          "u17D1",
          "u17D2",
          "u17D3",
          "u17DD",
          "u180B",
          "u180C",
          "u180D",
          "u18A9",
          "u1920",
          "u1921",
          "u1922",
          "u1927",
          "u1928",
          "u1932",
          "u1939",
          "u193A",
          "u193B",
          "u1A17",
          "u1A18",
          "u1A1B",
          "u1A56",
          "u1A58",
          "u1A59",
          "u1A5A",
          "u1A5B",
          "u1A5C",
          "u1A5D",
          "u1A5E",
          "u1A60",
          "u1A62",
          "u1A65",
          "u1A66",
          "u1A67",
          "u1A68",
          "u1A69",
          "u1A6A",
          "u1A6B",
          "u1A6C",
          "u1A73",
          "u1A74",
          "u1A75",
          "u1A76",
          "u1A77",
          "u1A78",
          "u1A79",
          "u1A7A",
          "u1A7B",
          "u1A7C",
          "u1A7F",
          "u1AB0",
          "u1AB1",
          "u1AB2",
          "u1AB3",
          "u1AB4",
          "u1AB5",
          "u1AB6",
          "u1AB7",
          "u1AB8",
          "u1AB9",
          "u1ABA",
          "u1ABB",
          "u1ABC",
          "u1ABD",
          "u1B00",
          "u1B01",
          "u1B02",
          "u1B03",
          "u1B34",
          "u1B36",
          "u1B37",
          "u1B38",
          "u1B39",
          "u1B3A",
          "u1B3C",
          "u1B42",
          "u1B6B",
          "u1B6C",
          "u1B6D",
          "u1B6E",
          "u1B6F",
          "u1B70",
          "u1B71",
          "u1B72",
          "u1B73",
          "u1B80",
          "u1B81",
          "u1BA2",
          "u1BA3",
          "u1BA4",
          "u1BA5",
          "u1BA8",
          "u1BA9",
          "u1BAB",
          "u1BAC",
          "u1BAD",
          "u1BE6",
          "u1BE8",
          "u1BE9",
          "u1BED",
          "u1BEF",
          "u1BF0",
          "u1BF1",
          "u1C2C",
          "u1C2D",
          "u1C2E",
          "u1C2F",
          "u1C30",
          "u1C31",
          "u1C32",
          "u1C33",
          "u1C36",
          "u1C37",
          "u1CD0",
          "u1CD1",
          "u1CD2",
          "u1CD4",
          "u1CD5",
          "u1CD6",
          "u1CD7",
          "u1CD8",
          "u1CD9",
          "u1CDA",
          "u1CDB",
          "u1CDC",
          "u1CDD",
          "u1CDE",
          "u1CDF",
          "u1CE0",
          "u1CE2",
          "u1CE3",
          "u1CE4",
          "u1CE5",
          "u1CE6",
          "u1CE7",
          "u1CE8",
          "u1CED",
          "u1CF4",
          "u1CF8",
          "u1CF9",
          "u1DC0",
          "u1DC1",
          "u1DC2",
          "u1DC3",
          "u1DC4",
          "u1DC5",
          "u1DC6",
          "u1DC7",
          "u1DC8",
          "u1DC9",
          "u1DCA",
          "u1DCB",
          "u1DCC",
          "u1DCD",
          "u1DCE",
          "u1DCF",
          "u1DD0",
          "u1DD1",
          "u1DD2",
          "u1DD3",
          "u1DD4",
          "u1DD5",
          "u1DD6",
          "u1DD7",
          "u1DD8",
          "u1DD9",
          "u1DDA",
          "u1DDB",
          "u1DDC",
          "u1DDD",
          "u1DDE",
          "u1DDF",
          "u1DE0",
          "u1DE1",
          "u1DE2",
          "u1DE3",
          "u1DE4",
          "u1DE5",
          "u1DE6",
          "u1DE7",
          "u1DE8",
          "u1DE9",
          "u1DEA",
          "u1DEB",
          "u1DEC",
          "u1DED",
          "u1DEE",
          "u1DEF",
          "u1DF0",
          "u1DF1",
          "u1DF2",
          "u1DF3",
          "u1DF4",
          "u1DF5",
          "u1DFC",
          "u1DFD",
          "u1DFE",
          "u1DFF",
          "u20D0",
          "u20D1",
          "u20D2",
          "u20D3",
          "u20D4",
          "u20D5",
          "u20D6",
          "u20D7",
          "u20D8",
          "u20D9",
          "u20DA",
          "u20DB",
          "u20DC",
          "u20E1",
          "u20E5",
          "u20E6",
          "u20E7",
          "u20E8",
          "u20E9",
          "u20EA",
          "u20EB",
          "u20EC",
          "u20ED",
          "u20EE",
          "u20EF",
          "u20F0",
          "u2CEF",
          "u2CF0",
          "u2CF1",
          "u2D7F",
          "u2DE0",
          "u2DE1",
          "u2DE2",
          "u2DE3",
          "u2DE4",
          "u2DE5",
          "u2DE6",
          "u2DE7",
          "u2DE8",
          "u2DE9",
          "u2DEA",
          "u2DEB",
          "u2DEC",
          "u2DED",
          "u2DEE",
          "u2DEF",
          "u2DF0",
          "u2DF1",
          "u2DF2",
          "u2DF3",
          "u2DF4",
          "u2DF5",
          "u2DF6",
          "u2DF7",
          "u2DF8",
          "u2DF9",
          "u2DFA",
          "u2DFB",
          "u2DFC",
          "u2DFD",
          "u2DFE",
          "u2DFF",
          "u302A",
          "u302B",
          "u302C",
          "u302D",
          "u3099",
          "u309A",
          "uA66F",
          "uA674",
          "uA675",
          "uA676",
          "uA677",
          "uA678",
          "uA679",
          "uA67A",
          "uA67B",
          "uA67C",
          "uA67D",
          "uA69E",
          "uA69F",
          "uA6F0",
          "uA6F1",
          "uA802",
          "uA806",
          "uA80B",
          "uA825",
          "uA826",
          "uA8C4",
          "uA8E0",
          "uA8E1",
          "uA8E2",
          "uA8E3",
          "uA8E4",
          "uA8E5",
          "uA8E6",
          "uA8E7",
          "uA8E8",
          "uA8E9",
          "uA8EA",
          "uA8EB",
          "uA8EC",
          "uA8ED",
          "uA8EE",
          "uA8EF",
          "uA8F0",
          "uA8F1",
          "uA926",
          "uA927",
          "uA928",
          "uA929",
          "uA92A",
          "uA92B",
          "uA92C",
          "uA92D",
          "uA947",
          "uA948",
          "uA949",
          "uA94A",
          "uA94B",
          "uA94C",
          "uA94D",
          "uA94E",
          "uA94F",
          "uA950",
          "uA951",
          "uA980",
          "uA981",
          "uA982",
          "uA9B3",
          "uA9B6",
          "uA9B7",
          "uA9B8",
          "uA9B9",
          "uA9BC",
          "uA9E5",
          "uAA29",
          "uAA2A",
          "uAA2B",
          "uAA2C",
          "uAA2D",
          "uAA2E",
          "uAA31",
          "uAA32",
          "uAA35",
          "uAA36",
          "uAA43",
          "uAA4C",
          "uAA7C",
          "uAAB0",
          "uAAB2",
          "uAAB3",
          "uAAB4",
          "uAAB7",
          "uAAB8",
          "uAABE",
          "uAABF",
          "uAAC1",
          "uAAEC",
          "uAAED",
          "uAAF6",
          "uABE5",
          "uABE8",
          "uABED",
          "uFB1E",
          "uFE00",
          "uFE01",
          "uFE02",
          "uFE03",
          "uFE04",
          "uFE05",
          "uFE06",
          "uFE07",
          "uFE08",
          "uFE09",
          "uFE0A",
          "uFE0B",
          "uFE0C",
          "uFE0D",
          "uFE0E",
          "uFE0F",
          "uFE20",
          "uFE21",
          "uFE22",
          "uFE23",
          "uFE24",
          "uFE25",
          "uFE26",
          "uFE27",
          "uFE28",
          "uFE29",
          "uFE2A",
          "uFE2B",
          "uFE2C",
          "uFE2D",
          "uFE2E",
          "uFE2F",
        ]),
        wu = [
          "-",
          "/",
          ";",
          ":",
          "&",
          "u0E2F",
          "u0EAF",
          "u0EC6",
          "u0ECC",
          "u104A",
          "u104B",
          "u104C",
          "u104D",
          "u104E",
          "u104F",
          "u2013",
          "u2014",
          "u2027",
          "u3000",
          "u3001",
          "u3002",
          "uFF0C",
          "uFF5E",
        ],
        bu = [
          "'",
          ">",
          ")",
          "}",
          "]",
          ".",
          "!",
          "?",
          "u00BB",
          "u300B",
          "u3009",
        ].concat(wu),
        Eu = "က-ဪဿ-၉ၐ-ၕ㐀-龿぀-ゟ゠-ヿ＀-＋－-｝｟-ﾟ㐀-䶿ກ-ຮະ-ໄ່-໋ໍ-ໝ",
        Bu = new RegExp(
          "(\\" +
            wu.join("|\\") +
            ")*[^\\s|\\" +
            wu.join("|\\") +
            "]*(\\" +
            wu.join("|\\") +
            ")*",
          "g"
        ),
        Cu = new RegExp("[" + Eu + "]"),
        Du = new RegExp(
          "(\\" +
            ["'", "<", "(", "{", "[", "u00AB", "u300A", "u3008"].join("|\\") +
            ")*[" +
            Eu +
            "](\\" +
            bu.join("|\\") +
            "|\\" +
            Au.join("|\\") +
            ")*|[a-z0-9]+",
          "gi"
        ),
        ku = function (t) {
          return Cu.test(t)
            ? iu(
                Zr(t)
                  .match(Bu)
                  .map(function (t) {
                    return Cu.test(t) ? t.match(Du) : [t];
                  })
              )
            : Zr(t)
                .match(Bu)
                .filter(function (t) {
                  return t.length;
                });
        },
        Fu = (function (t) {
          function n() {
            var n = this;
            t.call(this),
              (this._ariaHidden = _u("false")),
              (this._delay = 0),
              (this._duration = 0),
              (this._ellipsis = function (t, n) {
                // return n ? t.replace(/\.|,$/g, "") + "..." : "";
                return n ? t.replace(/\.|,$/g, "") + "" : "";
              }),
              (this._fontColor = _u("black")),
              (this._fontFamily = _u([
                "Roboto",
                "Helvetica Neue",
                "HelveticaNeue",
                "Helvetica",
                "Arial",
                "sans-serif",
              ])),
              (this._fontMax = _u(50)),
              (this._fontMin = _u(8)),
              (this._fontOpacity = _u(1)),
              (this._fontResize = _u(!1)),
              (this._fontSize = _u(10)),
              (this._fontWeight = _u(400)),
              (this._height = ou("height", 200)),
              (this._id = function (t, n) {
                return t.id || "" + n;
              }),
              (this._lineHeight = function (t, e) {
                return 1.2 * n._fontSize(t, e);
              }),
              (this._maxLines = _u(null)),
              (this._on = {}),
              (this._overflow = _u(!1)),
              (this._padding = _u(0)),
              (this._pointerEvents = _u("auto")),
              (this._rotate = _u(0)),
              (this._rotateAnchor = function (t) {
                return [t.w / 2, t.h / 2];
              }),
              (this._split = ku),
              (this._text = ou("text")),
              (this._textAnchor = _u("start")),
              (this._verticalAlign = _u("top")),
              (this._width = ou("width", 200)),
              (this._x = ou("x", 0)),
              (this._y = ou("y", 0));
          }
          return (
            t && (n.__proto__ = t),
            (n.prototype = Object.create(t && t.prototype)),
            (n.prototype.constructor = n),
            (n.prototype.render = function (t) {
              var n = this;
              void 0 === this._select &&
                this.select(
                  X("body")
                    .append("svg")
                    .style("width", window.innerWidth + "px")
                    .style("height", window.innerHeight + "px")
                    .node()
                );
              var e = this,
                i = this._select.selectAll(".d3plus-textBox").data(
                  this._data.reduce(function (t, i, r) {
                    var u = n._text(i, r);
                    if (void 0 === u) return t;
                    var o,
                      s,
                      a,
                      h,
                      c = n._fontResize(i, r),
                      l = n._lineHeight(i, r) / n._fontSize(i, r),
                      f = c ? n._fontMax(i, r) : n._fontSize(i, r),
                      p = c ? f * l : n._lineHeight(i, r),
                      _ = 1,
                      d = [],
                      y = {
                        "font-family": Gr(n._fontFamily(i, r)),
                        "font-size": f,
                        "font-weight": n._fontWeight(i, r),
                        "line-height": p,
                      },
                      g =
                        ((a = n._padding(i, r)),
                        1 ===
                        (h = "number" == typeof a ? [a] : a.split(/\s+/)).length
                          ? (h = [h[0], h[0], h[0], h[0]])
                          : 2 === h.length
                          ? (h = h.concat(h))
                          : 3 === h.length && h.push(h[1]),
                        ["top", "right", "bottom", "left"].reduce(function (
                          t,
                          n,
                          e
                        ) {
                          var i = parseFloat(h[e]);
                          return (t[n] = i || 0), t;
                        },
                        {})),
                      v = n._height(i, r) - (g.top + g.bottom),
                      m = n._width(i, r) - (g.left + g.right),
                      x = (function () {
                        var t,
                          n = "sans-serif",
                          e = 10,
                          i = 400,
                          r = 200,
                          u = null,
                          o = !1,
                          s = ku,
                          a = 200;
                        function h(h) {
                          (h = Zr(h)), void 0 === t && (t = Math.ceil(1.4 * e));
                          for (
                            var c = s(h),
                              l = {
                                "font-family": n,
                                "font-size": e,
                                "font-weight": i,
                                "line-height": t,
                              },
                              f = 1,
                              p = "",
                              _ = !1,
                              d = 0,
                              y = [],
                              g = qr(c, l),
                              v = qr(" ", l),
                              m = 0;
                            m < c.length;
                            m++
                          ) {
                            var x = c[m],
                              A = g[c.indexOf(x)];
                            if (
                              ((x += h
                                .slice(p.length + x.length)
                                .match("^( |\n)*", "g")[0]),
                              "\n" === p.slice(-1) || d + A > a)
                            ) {
                              if (!m && !o) {
                                _ = !0;
                                break;
                              }
                              if (
                                ((y[f - 1] = Ir(y[f - 1])),
                                t * ++f > r || (A > a && !o) || (u && f > u))
                              ) {
                                _ = !0;
                                break;
                              }
                              (d = 0), y.push(x);
                            } else m ? (y[f - 1] += x) : (y[0] = x);
                            (p += x),
                              (d += A),
                              (d += x.match(/[\s]*$/g)[0].length * v);
                          }
                          return {
                            lines: y,
                            sentence: h,
                            truncated: _,
                            widths: qr(y, l),
                            words: c,
                          };
                        }
                        return (
                          (h.fontFamily = function (t) {
                            return arguments.length ? ((n = t), h) : n;
                          }),
                          (h.fontSize = function (t) {
                            return arguments.length ? ((e = t), h) : e;
                          }),
                          (h.fontWeight = function (t) {
                            return arguments.length ? ((i = t), h) : i;
                          }),
                          (h.height = function (t) {
                            return arguments.length ? ((r = t), h) : r;
                          }),
                          (h.lineHeight = function (n) {
                            return arguments.length ? ((t = n), h) : t;
                          }),
                          (h.maxLines = function (t) {
                            return arguments.length ? ((u = t), h) : u;
                          }),
                          (h.overflow = function (t) {
                            return arguments.length ? ((o = t), h) : o;
                          }),
                          (h.split = function (t) {
                            return arguments.length ? ((s = t), h) : s;
                          }),
                          (h.width = function (t) {
                            return arguments.length ? ((a = t), h) : a;
                          }),
                          h
                        );
                      })()
                        .fontFamily(y["font-family"])
                        .fontSize(f)
                        .fontWeight(y["font-weight"])
                        .lineHeight(p)
                        .maxLines(n._maxLines(i, r))
                        .height(v)
                        .overflow(n._overflow(i, r))
                        .width(m),
                      A = n._fontMax(i, r),
                      w = n._fontMin(i, r),
                      b = n._verticalAlign(i, r),
                      E = n._split(u, r);
                    if (m > w && (v > p || (c && v > w * l))) {
                      if (c) {
                        o = qr(E, y);
                        var B = 1.165 + (m / v) * 0.1,
                          C = m * v,
                          D = eu(o),
                          k =
                            uu(o, function (t) {
                              return t * p;
                            }) * B;
                        if (D > m || k > C) {
                          var F = Math.sqrt(C / k),
                            S = ru([F, m / D]);
                          f = Math.floor(f * S);
                        }
                        var M = Math.floor(0.8 * v);
                        f > M && (f = M);
                      }
                      !(function t() {
                        var n = function () {
                          _ < 1
                            ? (d = [e._ellipsis("", _)])
                            : (d[_ - 1] = e._ellipsis(d[_ - 1], _));
                        };
                        if (
                          ((f = eu([f, w])),
                          (f = ru([f, A])),
                          c &&
                            ((p = f * l),
                            x.fontSize(f).lineHeight(p),
                            (y["font-size"] = f),
                            (y["line-height"] = p)),
                          (s = x(u)),
                          (d = s.lines.filter(function (t) {
                            return "" !== t;
                          })),
                          (_ = d.length),
                          s.truncated)
                        )
                          if (c) {
                            if (--f < w) return (f = w), void n();
                            t();
                          } else n();
                      })();
                    }
                    if (d.length) {
                      var T = _ * p,
                        O = n._rotate(i, r),
                        N =
                          0 === O
                            ? "top" === b
                              ? 0
                              : "middle" === b
                              ? v / 2 - T / 2
                              : v - T
                            : 0;
                      (N -= 0.1 * p),
                        t.push({
                          aH: n._ariaHidden(i, r),
                          data: i,
                          i: r,
                          lines: d,
                          fC: n._fontColor(i, r),
                          fF: y["font-family"],
                          fO: n._fontOpacity(i, r),
                          fW: y["font-weight"],
                          id: n._id(i, r),
                          tA: n._textAnchor(i, r),
                          vA: n._verticalAlign(i, r),
                          widths: s.widths,
                          fS: f,
                          lH: p,
                          w: m,
                          h: v,
                          r: O,
                          x: n._x(i, r) + g.left,
                          y: n._y(i, r) + N + g.top,
                        });
                    }
                    return t;
                  }, []),
                  function (t) {
                    return n._id(t.data, t.i);
                  }
                ),
                r = Ci().duration(this._duration);
              function u(t) {
                t.attr("transform", function (t, n) {
                  var i = e._rotateAnchor(t, n);
                  return (
                    "translate(" +
                    t.x +
                    ", " +
                    t.y +
                    ") rotate(" +
                    t.r +
                    ", " +
                    i[0] +
                    ", " +
                    i[1] +
                    ")"
                  );
                });
              }
              0 === this._duration
                ? i.exit().remove()
                : (i.exit().transition().delay(this._duration).remove(),
                  i
                    .exit()
                    .selectAll("text")
                    .transition(r)
                    .attr("opacity", 0)
                    .style("opacity", 0));
              var o = i
                  .enter()
                  .append("g")
                  .attr("class", "d3plus-textBox")
                  .attr("id", function (t) {
                    return (
                      "d3plus-textBox-" +
                      ("" + t.id).replace(/[^A-Za-z0-9\-_]/g, function (t) {
                        if (" " === t) return "-";
                        for (var n = !1, e = 0; e < Qr.length; e++)
                          if (new RegExp(Qr[e][0]).test(t)) {
                            n = Qr[e][1];
                            break;
                          }
                        return n || "";
                      })
                    );
                  })
                  .call(u)
                  .merge(i),
                s =
                  "rtl" === X("html").attr("dir") ||
                  "rtl" === X("body").attr("dir") ||
                  "rtl" === X("html").style("direction") ||
                  "rtl" === X("body").style("direction");
              o.style("pointer-events", function (t) {
                return n._pointerEvents(t.data, t.i);
              })
                .each(function (t) {
                  function n(n) {
                    n.text(function (t) {
                      return Ir(t);
                    })
                      .attr("aria-hidden", t.aH)
                      .attr("dir", s ? "rtl" : "ltr")
                      .attr("fill", t.fC)
                      .attr("text-anchor", t.tA)
                      .attr("font-family", t.fF)
                      .style("font-family", t.fF)
                      .attr("font-size", t.fS + "px")
                      .style("font-size", t.fS + "px")
                      .attr("font-weight", t.fW)
                      .style("font-weight", t.fW)
                      .attr(
                        "x",
                        ("middle" === t.tA
                          ? t.w / 2
                          : s
                          ? "start" === t.tA
                            ? t.w
                            : 0
                          : "end" === t.tA
                          ? t.w
                          : 2 * Math.sin((Math.PI * t.r) / 180)) + "px"
                      )
                      .attr("y", function (n, e) {
                        return 0 === t.r || "top" === t.vA
                          ? (e + 1) * t.lH - (t.lH - t.fS) + "px"
                          : "middle" === t.vA
                          ? (t.h + t.fS) / 2 -
                            (t.lH - t.fS) +
                            (e - t.lines.length / 2 + 0.5) * t.lH +
                            "px"
                          : t.h -
                            2 * (t.lH - t.fS) -
                            (t.lines.length - (e + 1)) * t.lH +
                            2 * Math.cos((Math.PI * t.r) / 180) +
                            "px";
                      });
                  }
                  var i = X(this).selectAll("text").data(t.lines);
                  0 === e._duration
                    ? (i.call(n),
                      i.exit().remove(),
                      i
                        .enter()
                        .append("text")
                        .attr("dominant-baseline", "alphabetic")
                        .style("baseline-shift", "0%")
                        .attr("unicode-bidi", "bidi-override")
                        .call(n)
                        .attr("opacity", t.fO)
                        .style("opacity", t.fO))
                    : (i.transition(r).call(n),
                      i.exit().transition(r).attr("opacity", 0).remove(),
                      i
                        .enter()
                        .append("text")
                        .attr("dominant-baseline", "alphabetic")
                        .style("baseline-shift", "0%")
                        .attr("opacity", 0)
                        .style("opacity", 0)
                        .call(n)
                        .merge(i)
                        .transition(r)
                        .delay(e._delay)
                        .call(n)
                        .attr("opacity", t.fO)
                        .style("opacity", t.fO));
                })
                .transition(r)
                .call(u);
              for (
                var a = Object.keys(this._on),
                  h = a.reduce(function (t, e) {
                    return (
                      (t[e] = function (t, i) {
                        return n._on[e](t.data, i);
                      }),
                      t
                    );
                  }, {}),
                  c = 0;
                c < a.length;
                c++
              )
                o.on(a[c], h[a[c]]);
              return t && setTimeout(t, this._duration + 100), this;
            }),
            (n.prototype.ariaHidden = function (t) {
              return void 0 !== t
                ? ((this._ariaHidden = "function" == typeof t ? t : _u(t)),
                  this)
                : this._ariaHidden;
            }),
            (n.prototype.data = function (t) {
              return arguments.length ? ((this._data = t), this) : this._data;
            }),
            (n.prototype.delay = function (t) {
              return arguments.length ? ((this._delay = t), this) : this._delay;
            }),
            (n.prototype.duration = function (t) {
              return arguments.length
                ? ((this._duration = t), this)
                : this._duration;
            }),
            (n.prototype.ellipsis = function (t) {
              return arguments.length
                ? ((this._ellipsis = "function" == typeof t ? t : _u(t)), this)
                : this._ellipsis;
            }),
            (n.prototype.fontColor = function (t) {
              return arguments.length
                ? ((this._fontColor = "function" == typeof t ? t : _u(t)), this)
                : this._fontColor;
            }),
            (n.prototype.fontFamily = function (t) {
              return arguments.length
                ? ((this._fontFamily = "function" == typeof t ? t : _u(t)),
                  this)
                : this._fontFamily;
            }),
            (n.prototype.fontMax = function (t) {
              return arguments.length
                ? ((this._fontMax = "function" == typeof t ? t : _u(t)), this)
                : this._fontMax;
            }),
            (n.prototype.fontMin = function (t) {
              return arguments.length
                ? ((this._fontMin = "function" == typeof t ? t : _u(t)), this)
                : this._fontMin;
            }),
            (n.prototype.fontOpacity = function (t) {
              return arguments.length
                ? ((this._fontOpacity = "function" == typeof t ? t : _u(t)),
                  this)
                : this._fontOpacity;
            }),
            (n.prototype.fontResize = function (t) {
              return arguments.length
                ? ((this._fontResize = "function" == typeof t ? t : _u(t)),
                  this)
                : this._fontResize;
            }),
            (n.prototype.fontSize = function (t) {
              return arguments.length
                ? ((this._fontSize = "function" == typeof t ? t : _u(t)), this)
                : this._fontSize;
            }),
            (n.prototype.fontWeight = function (t) {
              return arguments.length
                ? ((this._fontWeight = "function" == typeof t ? t : _u(t)),
                  this)
                : this._fontWeight;
            }),
            (n.prototype.height = function (t) {
              return arguments.length
                ? ((this._height = "function" == typeof t ? t : _u(t)), this)
                : this._height;
            }),
            (n.prototype.id = function (t) {
              return arguments.length
                ? ((this._id = "function" == typeof t ? t : _u(t)), this)
                : this._id;
            }),
            (n.prototype.lineHeight = function (t) {
              return arguments.length
                ? ((this._lineHeight = "function" == typeof t ? t : _u(t)),
                  this)
                : this._lineHeight;
            }),
            (n.prototype.maxLines = function (t) {
              return arguments.length
                ? ((this._maxLines = "function" == typeof t ? t : _u(t)), this)
                : this._maxLines;
            }),
            (n.prototype.overflow = function (t) {
              return arguments.length
                ? ((this._overflow = "function" == typeof t ? t : _u(t)), this)
                : this._overflow;
            }),
            (n.prototype.padding = function (t) {
              return arguments.length
                ? ((this._padding = "function" == typeof t ? t : _u(t)), this)
                : this._padding;
            }),
            (n.prototype.pointerEvents = function (t) {
              return arguments.length
                ? ((this._pointerEvents = "function" == typeof t ? t : _u(t)),
                  this)
                : this._pointerEvents;
            }),
            (n.prototype.rotate = function (t) {
              return arguments.length
                ? ((this._rotate = "function" == typeof t ? t : _u(t)), this)
                : this._rotate;
            }),
            (n.prototype.rotateAnchor = function (t) {
              return arguments.length
                ? ((this._rotateAnchor = "function" == typeof t ? t : _u(t)),
                  this)
                : this._rotateAnchor;
            }),
            (n.prototype.select = function (t) {
              return arguments.length
                ? ((this._select = X(t)), this)
                : this._select;
            }),
            (n.prototype.split = function (t) {
              return arguments.length ? ((this._split = t), this) : this._split;
            }),
            (n.prototype.text = function (t) {
              return arguments.length
                ? ((this._text = "function" == typeof t ? t : _u(t)), this)
                : this._text;
            }),
            (n.prototype.textAnchor = function (t) {
              return arguments.length
                ? ((this._textAnchor = "function" == typeof t ? t : _u(t)),
                  this)
                : this._textAnchor;
            }),
            (n.prototype.verticalAlign = function (t) {
              return arguments.length
                ? ((this._verticalAlign = "function" == typeof t ? t : _u(t)),
                  this)
                : this._verticalAlign;
            }),
            (n.prototype.width = function (t) {
              return arguments.length
                ? ((this._width = "function" == typeof t ? t : _u(t)), this)
                : this._width;
            }),
            (n.prototype.x = function (t) {
              return arguments.length
                ? ((this._x = "function" == typeof t ? t : _u(t)), this)
                : this._x;
            }),
            (n.prototype.y = function (t) {
              return arguments.length
                ? ((this._y = "function" == typeof t ? t : _u(t)), this)
                : this._y;
            }),
            n
          );
        })(pu);
      function Su(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      function Mu(t, n) {
        for (var e = 0; e < n.length; e++) {
          var i = n[e];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var Tu = (function () {
        function t(n, e) {
          !(function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var i = (function (t) {
            for (var n = 1; n < arguments.length; n++) {
              var e = null != arguments[n] ? arguments[n] : {},
                i = Object.keys(e);
              "function" == typeof Object.getOwnPropertySymbols &&
                (i = i.concat(
                  Object.getOwnPropertySymbols(e).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })
                )),
                i.forEach(function (n) {
                  Su(t, n, e[n]);
                });
            }
            return t;
          })({}, t.defaults, e);
          (this._ownerObject = n),
            (this._sizingMode = i.sizingMode),
            (this._horizontalSpacing = i.horizontalSpacing),
            (this._verticalSpacing = i.verticalSpacing);
        }
        var n, e, i;
        return (
          (n = t),
          (e = [
            {
              key: "back",
              value: function () {
                return this._ownerObject;
              },
            },
            {
              key: "getHorizontalSpacing",
              value: function () {
                return this._horizontalSpacing;
              },
            },
            {
              key: "setHorizontalSpacing",
              value: function (t) {
                return (this._horizontalSpacing = t), this;
              },
            },
            {
              key: "getVerticalSpacing",
              value: function () {
                return this._verticalSpacing;
              },
            },
            {
              key: "setVerticalSpacing",
              value: function (t) {
                return (this._verticalSpacing = t), this;
              },
            },
            {
              key: "getSizingMode",
              value: function () {
                return this._sizingMode;
              },
            },
            {
              key: "setSizingMode",
              value: function (t) {
                return (this._sizingMode = t), this;
              },
            },
          ]) && Mu(n.prototype, e),
          i && Mu(n, i),
          t
        );
      })();
      Tu.defaults = {
        sizingMode: "size",
        horizontalSpacing: 25,
        verticalSpacing: 25,
      };
      var Ou = Tu;
      function Nu(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      function zu(t, n) {
        for (var e = 0; e < n.length; e++) {
          var i = n[e];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var Pu = (function () {
        function t(n, e) {
          !(function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var i = (function (t) {
            for (var n = 1; n < arguments.length; n++) {
              var e = null != arguments[n] ? arguments[n] : {},
                i = Object.keys(e);
              "function" == typeof Object.getOwnPropertySymbols &&
                (i = i.concat(
                  Object.getOwnPropertySymbols(e).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })
                )),
                i.forEach(function (n) {
                  Nu(t, n, e[n]);
                });
            }
            return t;
          })({}, t.defaults, e);
          (this._ownerObject = n),
            (this._hasChildren = i.hasChildren),
            (this._loadChildren = i.loadChildren);
        }
        var n, e, i;
        return (
          (n = t),
          (e = [
            {
              key: "back",
              value: function () {
                return this._ownerObject;
              },
            },
            {
              key: "validateSettings",
              value: function () {
                if (!this.hasChildren && this.loadChildren)
                  throw "With load on demand enabled, you need to define hasChildren as part of the options";
                if (!this.loadChildren && this.hasChildren)
                  throw "With load on demand enabled, you need to define loadChildren as part of the options";
                return this;
              },
            },
            {
              key: "loadChildren",
              value: function (t, n) {
                return this._loadChildren.call(this._ownerObject, t, n);
              },
            },
            {
              key: "hasChildren",
              value: function (t) {
                return this._hasChildren.call(this._ownerObject, t);
              },
            },
            {
              key: "setLoadChildrenMethod",
              value: function (t) {
                return (this._loadChildren = t), this;
              },
            },
            {
              key: "setHasChildrenMethod",
              value: function (t) {
                return (this._hasChildren = t), this;
              },
            },
            {
              key: "isEnabled",
              value: function () {
                return this._hasChildren || this._loadChildren;
              },
            },
          ]) && zu(n.prototype, e),
          i && zu(n, i),
          t
        );
      })();
      Pu.defaults = { hasChildren: null, loadChildren: null };
      var ju = Pu;
      function Wu(t) {
        return (Wu =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Hu(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      function Ru(t, n) {
        for (var e = 0; e < n.length; e++) {
          var i = n[e];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function qu(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) {
              for (var n = 0, e = new Array(t.length); n < t.length; n++)
                e[n] = t[n];
              return e;
            }
          })(t) ||
          (function (t) {
            if (
              Symbol.iterator in Object(t) ||
              "[object Arguments]" === Object.prototype.toString.call(t)
            )
              return Array.from(t);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      var Iu = (function () {
        function t(n) {
          !(function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (n = n || {});
          var e = (function (t) {
            for (var n = 1; n < arguments.length; n++) {
              var e = null != arguments[n] ? arguments[n] : {},
                i = Object.keys(e);
              "function" == typeof Object.getOwnPropertySymbols &&
                (i = i.concat(
                  Object.getOwnPropertySymbols(e).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })
                )),
                i.forEach(function (n) {
                  Hu(t, n, e[n]);
                });
            }
            return t;
          })({}, t.defaults, n);
          (this._root = null),
            (this._svg = null),
            (this._panningContainer = null),
            (this._view = null),
            (this._treeGenerator = null),
            (this._linkPathGenerator = null),
            (this._visibleNodes = null),
            (this._links = null),
            (this._zoomListener = null),
            this.setTheme(e.theme),
            this.setData(e.data),
            this.setElement(e.element),
            this.setWidthWithoutMargin(e.widthWithoutMargin),
            this.setHeightWithoutMargin(e.heightWithoutMargin),
            this.setMargin(e.margin),
            this.setDuration(e.duration),
            this.setAllowPan(e.allowPan),
            this.setAllowZoom(e.allowZoom),
            this.setAllowFocus(e.allowFocus),
            this.setAllowNodeCentering(e.allowNodeCentering),
            this.setMinScale(e.minScale),
            this.setMaxScale(e.maxScale),
            this.setIsFlatData(e.isFlatData),
            this.setNodeDepthMultiplier(e.nodeDepthMultiplier),
            e.events.nodeClick && (this.onNodeClick = e.events.nodeClick),
            (this.loadOnDemandSettings = new ju(this, e.loadOnDemandSettings)),
            (this.nodeSettings = new Ou(this, e.nodeSettings)),
            (this._getId = e.getId),
            (this._getChildren = e.getChildren),
            (this._getParentId = e.getParentId);
        }
        var n, e, i;
        return (
          (n = t),
          (e = [
            {
              key: "_nodeEnter",
              value: function (t, n) {
                throw "The function _nodeEnter must be implemented";
              },
            },
            {
              key: "_nodeUpdate",
              value: function (t, n, e) {
                throw "The function _nodeUpdate must be implemented";
              },
            },
            {
              key: "_nodeExit",
              value: function (t, n, e) {
                throw "The function _nodeExit must be implemented";
              },
            },
            {
              key: "_getLinkPathGenerator",
              value: function () {
                throw "The function _getLinkPathGenerator must be implemented";
              },
            },
            {
              key: "_linkEnter",
              value: function (t, n, e, i) {
                throw "The function _linkEnter must be implemented";
              },
            },
            {
              key: "_linkUpdate",
              value: function (t, n, e, i, r) {
                throw "The function _linkUpdate must be implemented";
              },
            },
            {
              key: "_linkExit",
              value: function (t, n, e, i, r) {
                throw "The function _linkExit must be implemented";
              },
            },
            {
              key: "_getNodeSize",
              value: function () {
                throw "The function _getNodeSize must be implemented";
              },
            },
            {
              key: "focusToNode",
              value: function (t) {
                this.removeSelection(this.getRoot());
                var n = t;
                "object" !== Wu(n) && null !== n && (n = this.getNode(n));
                var e = null;
                for (e = n.parent; e; )
                  e._children && this.expand(e), (e = e.parent);
                if (this.getAllowFocus()) {
                  for (e = n.parent; e; ) this.hideSiblings(e), (e = e.parent);
                  this.updateTreeWithFocusOnNode(n), (n.selected = !0);
                }
                return this.update(this.getRoot()), this.centerNode(n), this;
              },
            },
            {
              key: "on",
              value: function (t, n) {
                return (
                  0 == t.indexOf("on") && t.slice(2),
                  (this["on" + (t.charAt(0).toUpperCase() + t.slice(1))] = n),
                  this
                );
              },
            },
            {
              key: "emit",
              value: function (t) {
                0 == t.indexOf("on") && t.slice(2);
                for (
                  var n = this["on" + (t.charAt(0).toUpperCase() + t.slice(1))],
                    e = arguments.length,
                    i = new Array(e > 1 ? e - 1 : 0),
                    r = 1;
                  r < e;
                  r++
                )
                  i[r - 1] = arguments[r];
                if (n) return n.apply(this, i);
              },
            },
            {
              key: "getIsFlatData",
              value: function () {
                return this._isFlatData;
              },
            },
            {
              key: "setIsFlatData",
              value: function (t) {
                return (this._isFlatData = t), this;
              },
            },
            {
              key: "regenerateNodeData",
              value: function () {
                var t = this;
                if (this.getIsFlatData()) {
                  if (!this._getParentId)
                    throw "If you are providing flat structured data, then you must set the getParentId accessor property.";
                  var n = Rr.stratify()
                    .id(function (n, e, i) {
                      return t.getId.call(t, n);
                    })
                    .parentId(function (n, e, i) {
                      return t.getParentId.call(t, n);
                    });
                  this._root = n(this.getData());
                } else {
                  if (!this._getChildren)
                    throw "If you are providing hierarchical structured data, then you must set the getChildren accessor property.";
                  this._root = Rr.hierarchy(this.getData(), function (n) {
                    return t.getChildren.call(t, n);
                  });
                }
                return this;
              },
            },
            {
              key: "getTheme",
              value: function () {
                return this._theme;
              },
            },
            {
              key: "setTheme",
              value: function (t) {
                return (this._theme = t), this;
              },
            },
            {
              key: "getData",
              value: function () {
                return this._data;
              },
            },
            {
              key: "setData",
              value: function (t) {
                return (this._data = t), this;
              },
            },
            {
              key: "getNodeDepthMultiplier",
              value: function () {
                return this._nodeDepthMultiplier;
              },
            },
            {
              key: "setNodeDepthMultiplier",
              value: function (t) {
                return (this._nodeDepthMultiplier = t), this;
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this._duration;
              },
            },
            {
              key: "setDuration",
              value: function (t) {
                return (this._duration = t), this;
              },
            },
            {
              key: "getAllowPan",
              value: function () {
                return this._allowPan;
              },
            },
            {
              key: "setAllowPan",
              value: function (t) {
                return (this._allowPan = t), this;
              },
            },
            {
              key: "getAllowZoom",
              value: function () {
                return this._allowZoom;
              },
            },
            {
              key: "setAllowZoom",
              value: function (t) {
                return (this._allowZoom = t), this;
              },
            },
            {
              key: "getAllowFocus",
              value: function () {
                return this._allowFocus;
              },
            },
            {
              key: "setAllowFocus",
              value: function (t) {
                return (this._allowFocus = t), this;
              },
            },
            {
              key: "getAllowNodeCentering",
              value: function () {
                return this._allowNodeCentering;
              },
            },
            {
              key: "setAllowNodeCentering",
              value: function (t) {
                return (this._allowNodeCentering = t), this;
              },
            },
            {
              key: "getMinScale",
              value: function () {
                return this._minScale;
              },
            },
            {
              key: "setMinScale",
              value: function (t) {
                return (this._minScale = t), this;
              },
            },
            {
              key: "getMaxScale",
              value: function () {
                return this._maxScale;
              },
            },
            {
              key: "setMaxScale",
              value: function (t) {
                return (this._maxScale = t), this;
              },
            },
            {
              key: "getLoadOnDemandSettings",
              value: function () {
                return this.loadOnDemandSettings;
              },
            },
            {
              key: "getNodeSettings",
              value: function () {
                return this.nodeSettings;
              },
            },
            {
              key: "getElement",
              value: function () {
                return this._element;
              },
            },
            {
              key: "setElement",
              value: function (t) {
                return (this._element = t), this;
              },
            },
            {
              key: "getRoot",
              value: function () {
                return this._root;
              },
            },
            {
              key: "getSvg",
              value: function () {
                return this._svg;
              },
            },
            {
              key: "getView",
              value: function () {
                return this._view;
              },
            },
            {
              key: "getPanningContainer",
              value: function () {
                return this._panningContainer;
              },
            },
            {
              key: "getTreeGenerator",
              value: function () {
                return this._treeGenerator;
              },
            },
            {
              key: "getNode",
              value: function (t) {
                var n = this,
                  e = t;
                "object" === Wu(e) && null !== e && (e = this.getId(e));
                return (function t(n, e, i) {
                  if (i(n)) return n;
                  var r = e(n),
                    u = r.find(i);
                  if (!u) {
                    var o = !0,
                      s = !1,
                      a = void 0;
                    try {
                      for (
                        var h, c = r[Symbol.iterator]();
                        !(o = (h = c.next()).done) && !(u = t(h.value, e, i));
                        o = !0
                      );
                    } catch (t) {
                      (s = !0), (a = t);
                    } finally {
                      try {
                        o || null == c.return || c.return();
                      } finally {
                        if (s) throw a;
                      }
                    }
                  }
                  return u;
                })(
                  this.getRoot(),
                  function (t) {
                    return t._children ? t._children : [];
                  },
                  function (t) {
                    return n.getId(t.data) == e;
                  }
                );
              },
            },
            {
              key: "getDataItem",
              value: function (t) {
                return this.getNode(t).data;
              },
            },
            {
              key: "getNodes",
              value: function () {
                return this._nodes;
              },
            },
            {
              key: "getVisibleNodes",
              value: function () {
                return this._visibleNodes;
              },
            },
            {
              key: "getLinks",
              value: function () {
                return this._links;
              },
            },
            {
              key: "getZoomListener",
              value: function () {
                return this._zoomListener;
              },
            },
            {
              key: "getId",
              value: function (t) {
                return this._getId(t);
              },
            },
            {
              key: "getChildren",
              value: function (t) {
                return this._getChildren(t);
              },
            },
            {
              key: "getParentId",
              value: function (t) {
                return this._getParentId(t);
              },
            },
            {
              key: "setIdAccessor",
              value: function (t) {
                return (this._getId = t), this;
              },
            },
            {
              key: "setChildrenAccessor",
              value: function (t) {
                return (this._getChildren = t), this;
              },
            },
            {
              key: "setParentIdAccessor",
              value: function (t) {
                return (this._getParentId = t), this;
              },
            },
            {
              key: "getWidth",
              value: function () {
                return (
                  this.getWidthWithoutMargin() -
                  this.getMargin().left -
                  this.getMargin().right
                );
              },
            },
            {
              key: "getHeight",
              value: function () {
                return (
                  this.getHeightWithoutMargin() -
                  this.getMargin().top -
                  this.getMargin().bottom
                );
              },
            },
            {
              key: "setMargin",
              value: function (t) {
                return (this._margin = t), this;
              },
            },
            {
              key: "getMargin",
              value: function () {
                return this._margin;
              },
            },
            {
              key: "setWidthWithoutMargin",
              value: function (t) {
                return (this._widthWithoutMargin = t), this;
              },
            },
            {
              key: "getWidthWithoutMargin",
              value: function () {
                return this._widthWithoutMargin;
              },
            },
            {
              key: "setHeightWithoutMargin",
              value: function (t) {
                return (this._heightWithoutMargin = t), this;
              },
            },
            {
              key: "getHeightWithoutMargin",
              value: function () {
                return this._heightWithoutMargin;
              },
            },
            {
              key: "updateDimensions",
              value: function () {
                this.getSvg().attr(
                  "viewBox",
                  "0 0 " +
                    this.getWidthWithoutMargin() +
                    " " +
                    this.getHeightWithoutMargin()
                );
                var t = this.getMargin(),
                  n = !1,
                  e = this.nodeSettings.getSizingMode();
                return (
                  "string" == typeof e && (e = e.trim().toLowerCase()),
                  "nodesize" === e
                    ? (this.getTreeGenerator().nodeSize(this._getNodeSize()),
                      !1 === this.getAllowFocus() && (n = !0))
                    : this.getTreeGenerator().size([
                        this.getHeight(),
                        this.getWidth(),
                      ]),
                  !1 === n
                    ? (this.getView().attr(
                        "transform",
                        "translate(" + t.left + "," + t.top + ")"
                      ),
                      (this.getRoot().x0 = this.getHeight() / 2))
                    : (this.getView().attr(
                        "transform",
                        "translate(" +
                          t.left +
                          ", " +
                          (this.getHeight() / 2 + this.getMargin().top) +
                          ")"
                      ),
                      (this.getRoot().x0 = 0)),
                  this.getZoomListener() &&
                    this.getZoomListener().extent([
                      [0, 0],
                      [
                        this.getWidthWithoutMargin(),
                        this.getHeightWithoutMargin(),
                      ],
                    ]),
                  (this.getRoot().y0 = 0),
                  this
                );
              },
            },
            {
              key: "validateSettings",
              value: function () {
                if (!this.getElement())
                  throw "Need to pass in an element as part of the options";
                if (!this.getData())
                  throw "Need to pass in data as part of the options";
                if (!this._getId)
                  throw "Need to define the getId function as part of the options";
                return this.loadOnDemandSettings.validateSettings(), this;
              },
            },
            {
              key: "initialize",
              value: function () {
                var t = this;
                for (
                  this.validateSettings(), this.regenerateNodeData();
                  this.getElement().firstChild;

                )
                  this.getElement().removeChild(this.getElement().firstChild);
                return (
                  (this._svg = Rr.select(this.getElement())
                    .append("svg")
                    .classed("mitch-d3-tree", !0)
                    .classed(this.getTheme(), !0)
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .style("width", "100%")
                    .style("height", "100%")),
                  (this._view = this.getSvg().append("g").classed("view", !0)),
                  (this._treeGenerator = Rr.tree()),
                  (this._panningContainer = this.getView()
                    .append("g")
                    .classed("panningContainer", !0)),
                  (this._zoomListener = Rr.zoom()
                    .scaleExtent([this.getMinScale(), this.getMaxScale()])
                    .on("zoom", function () {
                      var n = Rr.event.transform;
                      t.getPanningContainer().attr("transform", n);
                    })),
                  this.getSvg().call(this.getZoomListener()),
                  !1 === this.getAllowPan() &&
                    this.getSvg()
                      .on("mousedown.zoom", null)
                      .on("touchstart.zoom", null)
                      .on("touchmove.zoom", null)
                      .on("touchend.zoom", null),
                  !1 === this.getAllowZoom() &&
                    this.getSvg()
                      .on("dblclick.zoom", null)
                      .on("wheel.zoom", null),
                  this.updateDimensions(),
                  this._populateUnderlyingChildren(this.getRoot()),
                  this.getRoot().children &&
                    this.getRoot().children.forEach(this.collapseRecursively),
                  this.removeSelection(this.getRoot()),
                  this.update(this.getRoot()),
                  this.centerNode(this.getRoot()),
                  this
                );
              },
            },
            {
              key: "expand",
              value: function (t) {
                return (t.children = t._children), this;
              },
            },
            {
              key: "expandRecursively",
              value: function (t) {
                return (
                  (function t(n) {
                    n.children &&
                      (n.children.forEach(t), (n.children = n._children));
                  })(t),
                  this
                );
              },
            },
            {
              key: "collapse",
              value: function (t) {
                return (t.children = null), this;
              },
            },
            {
              key: "collapseRecursively",
              value: function (t) {
                return (
                  (function t(n) {
                    n.children && (n.children.forEach(t), (n.children = null));
                  })(t),
                  this
                );
              },
            },
            {
              key: "_populateUnderlyingChildren",
              value: function (t) {
                return (
                  (function t(n) {
                    n.children &&
                      ((n._children = n.children), n._children.forEach(t));
                  })(t),
                  this
                );
              },
            },
            {
              key: "removeSelection",
              value: function (t) {
                return (
                  (function t(n) {
                    (n.selected = !1), n.children && n.children.forEach(t);
                  })(t),
                  this
                );
              },
            },
            {
              key: "centerNode",
              value: function (t) {
                var n = Rr.zoomTransform(this.getSvg().node()).k,
                  e = -t.y0,
                  i = -t.x0,
                  r = e * n + this.getWidth() / 4,
                  u = i * n + this.getHeight() / 2;
                return (
                  this.getSvg()
                    .transition()
                    .duration(this.getDuration())
                    .call(
                      this.getZoomListener().transform,
                      Rr.zoomIdentity.translate(r, u).scale(n)
                    ),
                  this
                );
              },
            },
            {
              key: "_onNodeClick",
              value: function (t, n, e) {
                return (
                  !1 !== this.emit("nodeClick", t, n, e) &&
                  (this.getAllowFocus()
                    ? this.nodeFocus.call(this, t)
                    : this.nodeToggle.call(this, t),
                  !0)
                );
              },
            },
            {
              key: "_createNode",
              value: function (t, n) {
                var e = Rr.hierarchy(n);
                return (
                  (e.depth = t.depth + 1),
                  (e.height = t.height - 1),
                  (e.parent = t),
                  (e.id = this.getId.call(this, n)),
                  e
                );
              },
            },
            {
              key: "_addUnderlyingChildNode",
              value: function (t, n) {
                var e = this._createNode(t, n);
                return t._children.push(e), e;
              },
            },
            {
              key: "_processLoadedDataForNodeFocus",
              value: function (t, n) {
                var e = this;
                (t._children = []),
                  n.forEach(function (n) {
                    return e._addUnderlyingChildNode(t, n);
                  }),
                  this._populateUnderlyingChildren(t),
                  this.updateTreeWithFocusOnNode(t);
                var i = t.selected;
                return (
                  this.removeSelection(this.getRoot()),
                  (t.selected = !0),
                  this.update(t),
                  !0 !== this.getAllowNodeCentering() ||
                    (!1 !== i && void 0 !== i) ||
                    this.centerNode(t),
                  this
                );
              },
            },
            {
              key: "nodeFocus",
              value: function (t) {
                var n = this;
                if (
                  !t.children &&
                  !t._children &&
                  this.loadOnDemandSettings.isEnabled() &&
                  this.loadOnDemandSettings.hasChildren(t.data)
                ) {
                  this.loadOnDemandSettings.loadChildren(t.data, function (e) {
                    return n._processLoadedDataForNodeFocus(t, e);
                  });
                } else {
                  this.updateTreeWithFocusOnNode(t);
                  var e = t.selected;
                  this.removeSelection(this.getRoot()),
                    (t.selected = !0),
                    this.update(t),
                    !0 !== this.getAllowNodeCentering() ||
                      (!1 !== e && void 0 !== e) ||
                      this.centerNode(t);
                }
                return this;
              },
            },
            {
              key: "_processLoadedDataForNodeToggle",
              value: function (t, n) {
                var e = this;
                return (
                  (t._children = []),
                  n.forEach(function (n) {
                    return e._addUnderlyingChildNode(t, n);
                  }),
                  this.expand(t),
                  this.update(t),
                  !0 === this.getAllowNodeCentering() && this.centerNode(t),
                  this
                );
              },
            },
            {
              key: "nodeToggle",
              value: function (t) {
                var n = this;
                if (
                  !t.children &&
                  !t._children &&
                  this.loadOnDemandSettings.isEnabled() &&
                  this.loadOnDemandSettings.hasChildren(t.data)
                ) {
                  this.loadOnDemandSettings.loadChildren(t.data, function (e) {
                    return n._processLoadedDataForNodeToggle(t, e);
                  });
                } else
                  t.children ? this.collapse(t) : this.expand(t),
                    this.update(t),
                    !0 === this.getAllowNodeCentering() && this.centerNode(t);
                return this;
              },
            },
            {
              key: "hideSiblings",
              value: function (t) {
                var n = this,
                  e = t.parent;
                if (e) {
                  var i = this.getId(t.data);
                  e.children
                    .filter(function (t) {
                      return n.getId(t.data) != i;
                    })
                    .forEach(this.collapseRecursively),
                    (e.children = []),
                    e.children.push(t);
                }
                return this;
              },
            },
            {
              key: "updateTreeWithFocusOnNode",
              value: function (t) {
                if (!t.children && t._children)
                  this.hideSiblings(t),
                    this.expand(t),
                    t.children.forEach(this.collapseRecursively);
                else if (t.children) {
                  !1 ===
                    !t.children.some(function (t, n, e) {
                      return t.children;
                    }) && (this.collapseRecursively(t), this.expand(t));
                }
                return this;
              },
            },
            {
              key: "_updateNodes",
              value: function (t, n) {
                var e = this;
                n.forEach(function (t) {
                  return (t.y = t.depth * e.getNodeDepthMultiplier());
                });
                var i = (n = this.getPanningContainer()
                  .selectAll("g.node")
                  .data(n, function (t) {
                    return e.getId.call(e, t.data);
                  }))
                  .enter()
                  .append("g")
                  .classed("node", !0)
                  .attr("transform", function (n, e, i) {
                    return "translate(" + t.y0 + "," + t.x0 + ")";
                  })
                  .on("click", function (t, n, i) {
                    return e._onNodeClick.call(e, t, n, i);
                  });
                this._nodeEnter(i, n);
                var r = i.merge(n),
                  u = r.transition().duration(this.getDuration());
                r
                  .classed("collapsed", function (t, n, i) {
                    return (
                      !(t.children || !t._children) ||
                      !(
                        !e.loadOnDemandSettings.isEnabled() ||
                        !e.loadOnDemandSettings.hasChildren(t.data) ||
                        t.children ||
                        t._children
                      )
                    );
                  })
                  .classed("expanded", function (t, n, e) {
                    return t.children;
                  })
                  .classed("childless", function (t, n, e) {
                    return !t.children && !t._children;
                  })
                  .classed("selected", function (t, n, e) {
                    return t.selected;
                  }),
                  this._nodeUpdate(r, u, n);
                var o = n.exit(),
                  s = o.transition().duration(this.getDuration());
                return this._nodeExit(o, s, n), this;
              },
            },
            {
              key: "_updateLinks",
              value: function (t, n) {
                var e = this,
                  i = this._getLinkPathGenerator(),
                  r = this.getPanningContainer()
                    .selectAll("path.link")
                    .data(n, function (t) {
                      return e.getId.call(e, t.data);
                    }),
                  u = r.enter().insert("path", "g").classed("link", !0);
                this._linkEnter(t, u, r, i);
                var o = u.merge(r),
                  s = o.transition().duration(this.getDuration());
                this._linkUpdate(t, o, s, r, i);
                var a = r.exit(),
                  h = a.transition().duration(this.getDuration());
                return (
                  this._linkExit(t, a, h, r, i),
                  this.getVisibleNodes().forEach(function (t) {
                    (t.x0 = t.x), (t.y0 = t.y);
                  }),
                  this
                );
              },
            },
            {
              key: "update",
              value: function (t) {
                var n = this.getTreeGenerator()(this.getRoot());
                return (
                  (this._visibleNodes = n.descendants()),
                  (this._nodes = [this.getRoot()].concat(
                    qu(
                      (function t(n, e) {
                        var i = [],
                          r = e(n);
                        if (r) {
                          var u = !0,
                            o = !1,
                            s = void 0;
                          try {
                            for (
                              var a, h = r[Symbol.iterator]();
                              !(u = (a = h.next()).done);
                              u = !0
                            ) {
                              var c = a.value;
                              i.push(c);
                              var l = t(c, e);
                              l && (i = [].concat(qu(i), qu(l)));
                            }
                          } catch (t) {
                            (o = !0), (s = t);
                          } finally {
                            try {
                              u || null == h.return || h.return();
                            } finally {
                              if (o) throw s;
                            }
                          }
                        }
                        return i;
                      })(this.getRoot(), function (t) {
                        return t._children;
                      })
                    )
                  )),
                  (this._links = n.descendants().slice(1)),
                  this._updateNodes(t, this.getVisibleNodes())._updateLinks(
                    t,
                    this.getLinks()
                  ),
                  this
                );
              },
            },
          ]) && Ru(n.prototype, e),
          i && Ru(n, i),
          t
        );
      })();
      Iu.defaults = {
        theme: "default",
        allowPan: !0,
        allowZoom: !0,
        allowFocus: !0,
        allowNodeCentering: !0,
        minScale: 1,
        maxScale: 2,
        nodeDepthMultiplier: 300,
        isFlatData: !1,
        getId: null,
        getParentId: null,
        getChildren: null,
        widthWithoutMargin: 960,
        heightWithoutMargin: 800,
        margin: { top: 40, right: 20, bottom: 40, left: 100 },
        duration: 750,
        events: { nodeClick: null },
        loadOnDemandSettings: {},
        nodeSettings: {},
      };
      var Lu = Iu;
      function Vu(t) {
        return (Vu =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function $u(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      function Uu(t, n) {
        for (var e = 0; e < n.length; e++) {
          var i = n[e];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function Xu(t, n) {
        return !n || ("object" !== Vu(n) && "function" != typeof n)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : n;
      }
      function Yu(t) {
        return (Yu = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Gu(t, n) {
        return (Gu =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      var Zu = (function (t) {
        function n(t, e) {
          var i;
          !(function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            (i = Xu(this, Yu(n).call(this, t, e)));
          var r = (function (t) {
            for (var n = 1; n < arguments.length; n++) {
              var e = null != arguments[n] ? arguments[n] : {},
                i = Object.keys(e);
              "function" == typeof Object.getOwnPropertySymbols &&
                (i = i.concat(
                  Object.getOwnPropertySymbols(e).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })
                )),
                i.forEach(function (n) {
                  $u(t, n, e[n]);
                });
            }
            return t;
          })({}, n.defaults, e);
          return (
            (i._bodyBoxWidth = r.bodyBoxWidth),
            (i._bodyBoxHeight = r.bodyBoxHeight),
            (i._bodyBoxPadding = r.bodyBoxPadding),
            (i._titleBoxWidth = r.titleBoxWidth),
            (i._titleBoxHeight = r.titleBoxHeight),
            (i._titleBoxPadding = r.titleBoxPadding),
            i
          );
        }
        var e, i, r;
        return (
          (function (t, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(n && n.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              n && Gu(t, n);
          })(n, Ou),
          (e = n),
          (i = [
            {
              key: "getBodyBoxWidth",
              value: function () {
                return this._bodyBoxWidth;
              },
            },
            {
              key: "setBodyBoxWidth",
              value: function (t) {
                return (this._bodyBoxWidth = t), this;
              },
            },
            {
              key: "getBodyBoxHeight",
              value: function () {
                return this._bodyBoxHeight;
              },
            },
            {
              key: "setBodyBoxHeight",
              value: function (t) {
                return (this._bodyBoxHeight = t), this;
              },
            },
            {
              key: "setBodyBoxPadding",
              value: function (t) {
                return (this._bodyBoxPadding = t), this;
              },
            },
            {
              key: "getBodyBoxPadding",
              value: function () {
                return this._bodyBoxPadding;
              },
            },
            {
              key: "getTitleBoxWidth",
              value: function () {
                return this._titleBoxWidth
                  ? this._titleBoxWidth
                  : this.getBodyBoxWidth() / 2;
              },
            },
            {
              key: "setTitleBoxWidth",
              value: function (t) {
                return (this._titleBoxWidth = t), this;
              },
            },
            {
              key: "getTitleBoxHeight",
              value: function () {
                return this._titleBoxHeight;
              },
            },
            {
              key: "setTitleBoxHeight",
              value: function (t) {
                return (this._titleBoxHeight = t), this;
              },
            },
            {
              key: "getTitleBoxPadding",
              value: function () {
                return this._titleBoxPadding;
              },
            },
            {
              key: "setTitleBoxPadding",
              value: function (t) {
                return (this._titleBoxPadding = t), this;
              },
            },
          ]) && Uu(e.prototype, i),
          r && Uu(e, r),
          n
        );
      })();
      Zu.defaults = {
        bodyBoxWidth: 200,
        bodyBoxHeight: 75,
        bodyBoxPadding: { top: 5, right: 10, bottom: 5, left: 10 },
        titleBoxWidth: null,
        titleBoxHeight: 40,
        titleBoxPadding: { top: 2, right: 5, bottom: 2, left: 5 },
      };
      var Qu = Zu;
      function Ju(t) {
        return (Ju =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Ku(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      function to(t, n) {
        for (var e = 0; e < n.length; e++) {
          var i = n[e];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function no(t, n, e) {
        return (no =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, n, e) {
                var i = (function (t, n) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, n) &&
                    null !== (t = eo(t));

                  );
                  return t;
                })(t, n);
                if (i) {
                  var r = Object.getOwnPropertyDescriptor(i, n);
                  return r.get ? r.get.call(e) : r.value;
                }
              })(t, n, e || t);
      }
      function eo(t) {
        return (eo = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function io(t, n) {
        return (io =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      function ro(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      var uo = (function (t) {
        function n(t) {
          var e, i, r;
          !(function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            (i = this),
            (e =
              !(r = eo(n).call(this, t)) ||
              ("object" !== Ju(r) && "function" != typeof r)
                ? ro(i)
                : r);
          var u = (function (t) {
            for (var n = 1; n < arguments.length; n++) {
              var e = null != arguments[n] ? arguments[n] : {},
                i = Object.keys(e);
              "function" == typeof Object.getOwnPropertySymbols &&
                (i = i.concat(
                  Object.getOwnPropertySymbols(e).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })
                )),
                i.forEach(function (n) {
                  Ku(t, n, e[n]);
                });
            }
            return t;
          })({}, Lu.defaults, n.defaults, t);
          return (
            (e._getBodyDisplayText = u.getBodyDisplayText),
            (e._getTitleDisplayText = u.getTitleDisplayText),
            (e.nodeSettings = new Qu(ro(ro(e)), u.nodeSettings)),
            e
          );
        }
        var e, i, r;
        return (
          (function (t, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(n && n.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              n && io(t, n);
          })(n, Lu),
          (e = n),
          (i = [
            {
              key: "initialize",
              value: function () {
                return (
                  no(eo(n.prototype), "initialize", this).call(this),
                  this.getSvg().classed("boxed-tree", !0),
                  this
                );
              },
            },
            {
              key: "_nodeEnter",
              value: function (t, n) {
                var e = this,
                  i = e.nodeSettings.getBodyBoxWidth(),
                  r = e.nodeSettings.getBodyBoxHeight(),
                  u = e.nodeSettings.getBodyBoxPadding(),
                  o = e.nodeSettings.getTitleBoxWidth(),
                  s = e.nodeSettings.getTitleBoxHeight(),
                  a = e.nodeSettings.getTitleBoxPadding(),
                  h = t.append("g").classed("body-group", !0);
                return (
                  h
                    .append("rect")
                    .classed("body-box", !0)
                    .attr("width", 1e-6)
                    .attr("height", 1e-6),
                  h.each(function (t, n, o) {
                    var a = Rr.select(this),
                      h = [];
                    h.push(t);
                    var c = u.top;
                    e.getTitleDisplayText.call(e, t) && (c += s / 2);
                    new Fu()
                      .select(this)
                      .data(h)
                      .text(function (t, n, i) {
                        return e.getBodyDisplayText.call(e, t);
                      })
                      .textAnchor("middle")
                      .verticalAlign("middle")
                      .fontSize(28)
                      .x(u.left)
                      .y(c - r / 2)
                      .width(i - u.left - u.right)
                      .height(r - c - u.bottom)
                      .ellipsis(function (n, i) {
                        // Fix cutted font
                        return e.getBodyDisplayText(t);
                      })
                      .render();
                  }),
                  t
                    .append("g")
                    .classed("title-group", !0)
                    .attr(
                      "transform",
                      "translate(" + -o / 3 + ", " + (-s / 2 - r / 2) + ")"
                    )
                    .each(function (t, n, i) {
                      if (e.getTitleDisplayText.call(e, t)) {
                        var r = Rr.select(this),
                          u = [];
                        u.push(t),
                          r
                            .append("rect")
                            .classed("title-box", !0)
                            .attr("width", o)
                            .attr("height", s);
                        new Fu()
                          .select(this)
                          .data(u)
                          .text(function (t, n, i) {
                            return e.getTitleDisplayText.call(e, t);
                          })
                          .textAnchor("middle")
                          .verticalAlign("middle")
                          .x(a.left)
                          .y(a.top)
                          .fontWeight(700)
                          .fontMin(6)
                          .fontMax(16)
                          .fontResize(!0)
                          .width(o - a.left - a.right)
                          .height(s - a.top - a.bottom)
                          .render();
                      }
                    }),
                  e
                );
              },
            },
            {
              key: "_nodeUpdate",
              value: function (t, n, e) {
                n.attr("transform", function (t, n, e) {
                  return "translate(" + t.y + "," + t.x + ")";
                });
                var i = this.nodeSettings.getBodyBoxWidth(),
                  r = this.nodeSettings.getBodyBoxHeight();
                return (
                  t
                    .select(".node .body-group .body-box")
                    .attr("y", -r / 2)
                    .attr("width", i)
                    .attr("height", r),
                  t.select(".d3plus-textBox").style("fill-opacity", 1),
                  this
                );
              },
            },
            {
              key: "_nodeExit",
              value: function (t, n, e) {
                var i = this.nodeSettings.getBodyBoxWidth(),
                  r = this.nodeSettings.getBodyBoxHeight();
                return (
                  n
                    .attr("transform", function (t, n, e) {
                      for (var u = t.parent; u.parent && !u.parent.children; )
                        u = u.parent;
                      return (
                        "translate(" + (u.y + i) + "," + (u.x + r / 2) + ")"
                      );
                    })
                    .remove(),
                  n
                    .select(".node .body-group rect")
                    .attr("width", 1e-6)
                    .attr("height", 1e-6),
                  n
                    .select(".node .body-group .d3plus-textBox")
                    .style("fill-opacity", 1e-6)
                    .attr("transform", function (t, n, e) {
                      return "translate(0," + -r / 2 + ")";
                    })
                    .selectAll("text")
                    .style("font-size", 0)
                    .attr("y", 0)
                    .attr("x", 0),
                  n
                    .select(".node .title-group")
                    .attr("transform", "translate(0, " + -r / 2 + ")"),
                  n
                    .select(".node .title-group rect")
                    .attr("width", 1e-6)
                    .attr("height", 1e-6),
                  n
                    .select(".node .title-group .d3plus-textBox")
                    .style("fill-opacity", 1e-6)
                    .attr("transform", "translate(0,0)")
                    .selectAll("text")
                    .style("font-size", 0)
                    .attr("y", 0)
                    .attr("x", 0),
                  n.select(".d3plus-textBox").style("fill-opacity", 1e-6),
                  this
                );
              },
            },
            {
              key: "_getNodeSize",
              value: function () {
                return [
                  this.nodeSettings.getBodyBoxHeight() +
                    this.nodeSettings.getVerticalSpacing(),
                  this.nodeSettings.getBodyBoxWidth() +
                    this.nodeSettings.getHorizontalSpacing(),
                ];
              },
            },
            {
              key: "_linkEnter",
              value: function (t, n, e, i) {
                return (
                  n.attr("d", function (n, e, r) {
                    var u = { x: t.x0, y: t.y0 };
                    return i({ source: u, target: u });
                  }),
                  this
                );
              },
            },
            {
              key: "_linkUpdate",
              value: function (t, n, e, i, r) {
                return (
                  e.attr("d", function (t, n, e) {
                    var i = t,
                      u = t.parent;
                    return r({ source: i, target: u });
                  }),
                  this
                );
              },
            },
            {
              key: "_linkExit",
              value: function (t, n, e, i, r) {
                var u = this.nodeSettings.getBodyBoxWidth();
                return (
                  e.attr("d", function (t, n, e) {
                    for (var i = t.parent; i.parent && !i.parent.children; )
                      i = i.parent;
                    var o = { x: i.x, y: i.y + u },
                      s = { x: i.x, y: i.y };
                    return r({ source: o, target: s });
                  }),
                  this
                );
              },
            },
            {
              key: "_getLinkPathGenerator",
              value: function () {
                var t = this.nodeSettings.getBodyBoxWidth();
                return Rr.linkHorizontal()
                  .source(function (t) {
                    return [t.source.y, t.source.x];
                  })
                  .target(function (n) {
                    return [n.target.y + t, n.target.x];
                  });
              },
            },
            {
              key: "validateSettings",
              value: function () {
                if (
                  (no(eo(n.prototype), "validateSettings", this).call(this),
                  !this._getBodyDisplayText)
                )
                  throw "Need to define the getBodyDisplayText function as part of the options";
                return this;
              },
            },
            {
              key: "setBodyDisplayTextAccessor",
              value: function (t) {
                return (this._getBodyDisplayText = t), this;
              },
            },
            {
              key: "getBodyDisplayText",
              value: function (t) {
                return this._getBodyDisplayText(t.data);
              },
            },
            {
              key: "setTitleDisplayTextAccessor",
              value: function (t) {
                return (this._getTitleDisplayText = t), this;
              },
            },
            {
              key: "getTitleDisplayText",
              value: function (t) {
                return this._getTitleDisplayText(t.data);
              },
            },
          ]) && to(e.prototype, i),
          r && to(e, r),
          n
        );
      })();
      uo.defaults = {
        getBodyDisplayText: null,
        getTitleDisplayText: function (t) {
          return null;
        },
      };
      var oo = uo;
      function so(t) {
        return (so =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function ao(t, n) {
        return !n || ("object" !== so(n) && "function" != typeof n)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : n;
      }
      function ho(t) {
        return (ho = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function co(t, n) {
        return (co =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      var lo = (function (t) {
        function n() {
          return (
            (function (t, n) {
              if (!(t instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
            ao(this, ho(n).apply(this, arguments))
          );
        }
        return (
          (function (t, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(n && n.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              n && co(t, n);
          })(n, Ou),
          n
        );
      })();
      function fo(t) {
        return (fo =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function po(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      function _o(t, n) {
        for (var e = 0; e < n.length; e++) {
          var i = n[e];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function yo(t, n, e) {
        return (yo =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, n, e) {
                var i = (function (t, n) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, n) &&
                    null !== (t = go(t));

                  );
                  return t;
                })(t, n);
                if (i) {
                  var r = Object.getOwnPropertyDescriptor(i, n);
                  return r.get ? r.get.call(e) : r.value;
                }
              })(t, n, e || t);
      }
      function go(t) {
        return (go = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function vo(t, n) {
        return (vo =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      function mo(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      var xo = (function (t) {
        function n(t) {
          var e, i, r;
          !(function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            (i = this),
            (e =
              !(r = go(n).call(this, t)) ||
              ("object" !== fo(r) && "function" != typeof r)
                ? mo(i)
                : r);
          var u = (function (t) {
            for (var n = 1; n < arguments.length; n++) {
              var e = null != arguments[n] ? arguments[n] : {},
                i = Object.keys(e);
              "function" == typeof Object.getOwnPropertySymbols &&
                (i = i.concat(
                  Object.getOwnPropertySymbols(e).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })
                )),
                i.forEach(function (n) {
                  po(t, n, e[n]);
                });
            }
            return t;
          })({}, Lu.defaults, n.defaults, t);
          return (
            (e._getDisplayText = u.getDisplayText),
            (e.nodeSettings = new lo(mo(mo(e)), u.nodeSettings)),
            e
          );
        }
        var e, i, r;
        return (
          (function (t, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(n && n.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              n && vo(t, n);
          })(n, Lu),
          (e = n),
          (i = [
            {
              key: "initialize",
              value: function () {
                return (
                  yo(go(n.prototype), "initialize", this).call(this),
                  this.getSvg().classed("circle-tree", !0),
                  this
                );
              },
            },
            {
              key: "_nodeEnter",
              value: function (t, n) {
                var e = this;
                return (
                  t.append("circle").attr("r", 1e-6),
                  t.append("text").text(function (t, n, i) {
                    return e.getDisplayText.call(e, t);
                  }),
                  this
                );
              },
            },
            {
              key: "_nodeUpdate",
              value: function (t, n, e) {
                return (
                  t.classed("middle", function (t, n, e) {
                    var i = !1;
                    if (t.parent && t.parent.children.length % 2 != 0) {
                      var r = t.parent.children;
                      r.indexOf(t) === Math.floor(r.length / 2) && (i = !0);
                    }
                    return i;
                  }),
                  t
                    .transition()
                    .duration(this.getDuration())
                    .attr("transform", function (t, n, e) {
                      return "translate(" + t.y + "," + t.x + ")";
                    }),
                  t.select("text").style("fill-opacity", 1),
                  this
                );
              },
            },
            {
              key: "_nodeExit",
              value: function (t, n, e) {
                return (
                  n
                    .attr("transform", function (t, n, e) {
                      for (var i = t.parent; i.parent && !i.parent.children; )
                        i = i.parent;
                      return "translate(" + i.y + "," + i.x + ")";
                    })
                    .remove(),
                  n.select("circle").attr("r", 1e-6),
                  n.select("text").style("fill-opacity", 1e-6),
                  this
                );
              },
            },
            {
              key: "_getNodeSize",
              value: function () {
                return [
                  this.nodeSettings.getVerticalSpacing(),
                  this.nodeSettings.getHorizontalSpacing(),
                ];
              },
            },
            {
              key: "_linkEnter",
              value: function (t, n, e, i) {
                return (
                  n.attr("d", function (n, e, r) {
                    var u = { x: t.x0, y: t.y0 };
                    return i({ source: u, target: u });
                  }),
                  this
                );
              },
            },
            {
              key: "_linkUpdate",
              value: function (t, n, e, i, r) {
                return (
                  e.attr("d", function (t, n, e) {
                    var i = t,
                      u = t.parent;
                    return r({ source: i, target: u });
                  }),
                  this
                );
              },
            },
            {
              key: "_linkExit",
              value: function (t, n, e, i, r) {
                return (
                  e.attr("d", function (t, n, e) {
                    for (var i = t.parent; i.parent && !i.parent.children; )
                      i = i.parent;
                    var u = { x: i.x, y: i.y },
                      o = { x: i.x, y: i.y };
                    return r({ source: u, target: o });
                  }),
                  this
                );
              },
            },
            {
              key: "_getLinkPathGenerator",
              value: function () {
                return Rr.linkHorizontal()
                  .source(function (t) {
                    return [t.source.y, t.source.x];
                  })
                  .target(function (t) {
                    return [t.target.y, t.target.x];
                  });
              },
            },
            {
              key: "validateSettings",
              value: function () {
                if (
                  (yo(go(n.prototype), "validateSettings", this).call(this),
                  !this.getDisplayText)
                )
                  throw "Need to define the getDisplayText function as part of the options";
                return this;
              },
            },
            {
              key: "setDisplayTextAccessor",
              value: function (t) {
                return (this._getDisplayText = t), this;
              },
            },
            {
              key: "getDisplayText",
              value: function (t) {
                return this._getDisplayText(t.data);
              },
            },
          ]) && _o(e.prototype, i),
          r && _o(e, r),
          n
        );
      })();
      xo.defaults = {
        getDisplayText: function (t) {
          return null;
        },
      };
      var Ao = xo;
      n.default = { boxedTree: oo, circleTree: Ao };
    },
  ]).default;
});
