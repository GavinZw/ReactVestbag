var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Splash: {
        Loading: "Loading ...",
        LogoLine1: "Some text here",
        LogoLine2: "powered by MarketJS",
        LogoLine3: "none"
    },
    Menu: {
        EarnTime: "Earn chips in ",
        Earn: ["Congratulations, you earned $", ""]
    },
    Play: {
        OOC: ["Out", "of", "Chips"],
        EarnTime: "Earn chips in",
        MaxBet: "Maximum Bet is $",
        PlaceBet: "Place your bet",
        Win: "You Win",
        Lose: "You Lose",
        Bust: "Bust! You Lose",
        Push: "Push",
        Push2: "Sorry, it's a push"
    },
    Settings: {
        FinishRound: "Please finish current round first."
    }
};
var _SETTINGS = {
    API: {
        Enabled: !1,
        Log: {
            Events: {
                InitializeGame: !0,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !1,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://marketjs.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !0,
            NewWindow: !0,
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: !1,
        Link: "http://www.marketjs.com/game/links/mobile",
        NewWindow: !0
    },
    Gamecenter: {
        Enabled: !1
    }
};
var MobileAdInGamePreroll = {
     
};
var MobileAdInGameHeader = {
     
};
var MobileAdInGameFooter = {
     
};
var MobileAdInGameEnd = {
     
};
(function(b, c) {
    function d(b, j, z) {
        if (z === c && 1 === b.nodeType)
            if (z = "data-" + j.replace(tc, "-$1").toLowerCase(), z = b.getAttribute(z), "string" == typeof z) {
                try {
                    z = "true" === z ? !0 : "false" === z ? !1 : "null" === z ? null : +z + "" === z ? +z : uc.test(z) ? f.parseJSON(z) : z
                } catch (d) {}
                f.data(b, j, z)
            } else z = c;
        return z
    }

    function e(b) {
        for (var j in b)
            if (!("data" === j && f.isEmptyObject(b[j])) && "toJSON" !== j) return !1;
        return !0
    }

    function g() {
        return !1
    }

    function n() {
        return !0
    }

    function x(b) {
        return !b || !b.parentNode || 11 === b.parentNode.nodeType
    }

    function m(b,
        j) {
        do b = b[j]; while (b && 1 !== b.nodeType);
        return b
    }

    function r(b, j, c) {
        j = j || 0;
        if (f.isFunction(j)) return f.grep(b, function(b, u) {
            return !!j.call(b, u, b) === c
        });
        if (j.nodeType) return f.grep(b, function(b) {
            return b === j === c
        });
        if ("string" == typeof j) {
            var d = f.grep(b, function(b) {
                return 1 === b.nodeType
            });
            if (vc.test(j)) return f.filter(j, d, !c);
            j = f.filter(j, d)
        }
        return f.grep(b, function(b) {
            return 0 <= f.inArray(b, j) === c
        })
    }

    function y(b) {
        var j = yb.split("|");
        b = b.createDocumentFragment();
        if (b.createElement)
            for (; j.length;) b.createElement(j.pop());
        return b
    }

    function A(b, j) {
        if (1 === j.nodeType && f.hasData(b)) {
            var c, d, v;
            d = f._data(b);
            var e = f._data(j, d),
                l = d.events;
            if (l)
                for (c in delete e.handle, e.events = {}, l) {
                    d = 0;
                    for (v = l[c].length; d < v; d++) f.event.add(j, c, l[c][d])
                }
            e.data && (e.data = f.extend({}, e.data))
        }
    }

    function s(b, j) {
        var c;
        1 === j.nodeType && (j.clearAttributes && j.clearAttributes(), j.mergeAttributes && j.mergeAttributes(b), c = j.nodeName.toLowerCase(), "object" === c ? (j.parentNode && (j.outerHTML = b.outerHTML), f.support.html5Clone && b.innerHTML && !f.trim(j.innerHTML) &&
            (j.innerHTML = b.innerHTML)) : "input" === c && zb.test(b.type) ? (j.defaultChecked = j.checked = b.checked, j.value !== b.value && (j.value = b.value)) : "option" === c ? j.selected = b.defaultSelected : "input" === c || "textarea" === c ? j.defaultValue = b.defaultValue : "script" === c && j.text !== b.text && (j.text = b.text), j.removeAttribute(f.expando))
    }

    function B(b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : []
    }

    function E(b) {
        zb.test(b.type) && (b.defaultChecked =
            b.checked)
    }

    function p(b, j) {
        if (j in b) return j;
        for (var c = j.charAt(0).toUpperCase() + j.slice(1), f = j, d = Ab.length; d--;)
            if (j = Ab[d] + c, j in b) return j;
        return f
    }

    function q(b, j) {
        return b = j || b, "none" === f.css(b, "display") || !f.contains(b.ownerDocument, b)
    }

    function t(b, j) {
        for (var c, d, v = [], e = 0, l = b.length; e < l; e++) c = b[e], c.style && (v[e] = f._data(c, "olddisplay"), j ? (!v[e] && "none" === c.style.display && (c.style.display = ""), "" === c.style.display && q(c) && (v[e] = f._data(c, "olddisplay", xa(c.nodeName)))) : (d = P(c, "display"), !v[e] &&
            "none" !== d && f._data(c, "olddisplay", d)));
        for (e = 0; e < l; e++)
            if (c = b[e], c.style && (!j || "none" === c.style.display || "" === c.style.display)) c.style.display = j ? v[e] || "" : "none";
        return b
    }

    function L(b, j, c) {
        return (b = wc.exec(j)) ? Math.max(0, b[1] - (c || 0)) + (b[2] || "px") : j
    }

    function Q(b, j, c, d) {
        j = c === (d ? "border" : "content") ? 4 : "width" === j ? 1 : 0;
        for (var v = 0; 4 > j; j += 2) "margin" === c && (v += f.css(b, c + ea[j], !0)), d ? ("content" === c && (v -= parseFloat(P(b, "padding" + ea[j])) || 0), "margin" !== c && (v -= parseFloat(P(b, "border" + ea[j] + "Width")) || 0)) : (v +=
            parseFloat(P(b, "padding" + ea[j])) || 0, "padding" !== c && (v += parseFloat(P(b, "border" + ea[j] + "Width")) || 0));
        return v
    }

    function M(b, j, c) {
        var d = "width" === j ? b.offsetWidth : b.offsetHeight,
            v = !0,
            e = f.support.boxSizing && "border-box" === f.css(b, "boxSizing");
        if (0 >= d || null == d) {
            d = P(b, j);
            if (0 > d || null == d) d = b.style[j];
            if (ya.test(d)) return d;
            v = e && (f.support.boxSizingReliable || d === b.style[j]);
            d = parseFloat(d) || 0
        }
        return d + Q(b, j, c || (e ? "border" : "content"), v) + "px"
    }

    function xa(b) {
        if (Ya[b]) return Ya[b];
        var j = f("<" + b + ">").appendTo(C.body),
            c = j.css("display");
        j.remove();
        if ("none" === c || "" === c) {
            la = C.body.appendChild(la || f.extend(C.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!ma || !la.createElement) ma = (la.contentWindow || la.contentDocument).document, ma.write("<!doctype html><html><body>"), ma.close();
            j = ma.body.appendChild(ma.createElement(b));
            c = P(j, "display");
            C.body.removeChild(la)
        }
        return Ya[b] = c, c
    }

    function za(b, j, c, d) {
        var v;
        if (f.isArray(j)) f.each(j, function(j, f) {
            c || xc.test(b) ? d(b, f) : za(b + "[" + ("object" == typeof f ? j : "") + "]",
                f, c, d)
        });
        else if (!c && "object" === f.type(j))
            for (v in j) za(b + "[" + v + "]", j[v], c, d);
        else d(b, j)
    }

    function I(b) {
        return function(j, c) {
            "string" != typeof j && (c = j, j = "*");
            var d, v, e = j.toLowerCase().split(fa),
                l = 0,
                aa = e.length;
            if (f.isFunction(c))
                for (; l < aa; l++) d = e[l], (v = /^\+/.test(d)) && (d = d.substr(1) || "*"), d = b[d] = b[d] || [], d[v ? "unshift" : "push"](c)
        }
    }

    function U(b, j, z, f, d, e) {
        d = d || j.dataTypes[0];
        e = e || {};
        e[d] = !0;
        var l;
        d = b[d];
        for (var aa = 0, g = d ? d.length : 0, p = b === $a; aa < g && (p || !l); aa++) l = d[aa](j, z, f), "string" == typeof l && (!p || e[l] ?
            l = c : (j.dataTypes.unshift(l), l = U(b, j, z, f, l, e)));
        return (p || !l) && !e["*"] && (l = U(b, j, z, f, "*", e)), l
    }

    function Bb(b, j) {
        var z, d, v = f.ajaxSettings.flatOptions || {};
        for (z in j) j[z] !== c && ((v[z] ? b : d || (d = {}))[z] = j[z]);
        d && f.extend(!0, b, d)
    }

    function Aa() {
        try {
            return new b.XMLHttpRequest
        } catch (u) {}
    }

    function ra() {
        return setTimeout(function() {
            Ba = c
        }, 0), Ba = f.now()
    }

    function Cb(b, j, c) {
        var d, v = 0,
            e = Ca.length,
            l = f.Deferred().always(function() {
                delete aa.elem
            }),
            aa = function() {
                for (var j = Ba || ra(), j = Math.max(0, g.startTime + g.duration -
                    j), c = 1 - (j / g.duration || 0), z = 0, f = g.tweens.length; z < f; z++) g.tweens[z].run(c);
                return l.notifyWith(b, [g, c, j]), 1 > c && f ? j : (l.resolveWith(b, [g]), !1)
            },
            g = l.promise({
                elem: b,
                props: f.extend({}, j),
                opts: f.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: j,
                originalOptions: c,
                startTime: Ba || ra(),
                duration: c.duration,
                tweens: [],
                createTween: function(j, c) {
                    var z = f.Tween(b, g.opts, j, c, g.opts.specialEasing[j] || g.opts.easing);
                    return g.tweens.push(z), z
                },
                stop: function(j) {
                    for (var c = 0, z = j ? g.tweens.length : 0; c < z; c++) g.tweens[c].run(1);
                    return j ? l.resolveWith(b, [g, j]) : l.rejectWith(b, [g, j]), this
                }
            });
        j = g.props;
        c = g.opts.specialEasing;
        var p, m, q, n;
        for (d in j)
            if (p = f.camelCase(d), m = c[p], q = j[d], f.isArray(q) && (m = q[1], q = j[d] = q[0]), d !== p && (j[p] = q, delete j[d]), (n = f.cssHooks[p]) && "expand" in n)
                for (d in q = n.expand(q), delete j[p], q) d in j || (j[d] = q[d], c[d] = m);
            else c[p] = m;
        for (; v < e; v++)
            if (d = Ca[v].call(g, b, j, g.opts)) return d;
        var t = g;
        f.each(j, function(b, u) {
            for (var j = (sa[b] || []).concat(sa["*"]), c = 0, z = j.length; c < z && !j[c].call(t, b, u); c++);
        });
        return f.isFunction(g.opts.start) &&
            g.opts.start.call(b, g), f.fx.timer(f.extend(aa, {
                anim: g,
                queue: g.opts.queue,
                elem: b
            })), g.progress(g.opts.progress).done(g.opts.done, g.opts.complete).fail(g.opts.fail).always(g.opts.always)
    }

    function R(b, j, c, f, d) {
        return new R.prototype.init(b, j, c, f, d)
    }

    function Da(b, j) {
        var c, f = {
                height: b
            },
            d = 0;
        for (j = j ? 1 : 0; 4 > d; d += 2 - j) c = ea[d], f["margin" + c] = f["padding" + c] = b;
        return j && (f.opacity = f.width = b), f
    }

    function Db(b) {
        return f.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
    }
    var Eb, Ea, C = b.document,
        zc = b.location,
        Ac = b.navigator,
        Bc = b.jQuery,
        Cc = b.$,
        Fb = Array.prototype.push,
        Z = Array.prototype.slice,
        Gb = Array.prototype.indexOf,
        Dc = Object.prototype.toString,
        bb = Object.prototype.hasOwnProperty,
        cb = String.prototype.trim,
        f = function(b, j) {
            return new f.fn.init(b, j, Eb)
        },
        Fa = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Ec = /\S/,
        fa = /\s+/,
        Fc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Gc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Hb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Hc = /^[\],:{}\s]*$/,
        Ic = /(?:^|:|,)(?:\s*\[)+/g,
        Jc = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Kc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Lc = /^-ms-/,
        Mc = /-([\da-z])/gi,
        Nc = function(b, j) {
            return (j + "").toUpperCase()
        },
        Ga = function() {
            C.addEventListener ? (C.removeEventListener("DOMContentLoaded", Ga, !1), f.ready()) : "complete" === C.readyState && (C.detachEvent("onreadystatechange", Ga), f.ready())
        },
        Ib = {};
    f.fn = f.prototype = {
        constructor: f,
        init: function(b, j, z) {
            var d, v;
            if (!b) return this;
            if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
            if ("string" == typeof b) {
                "<" === b.charAt(0) &&
                    ">" === b.charAt(b.length - 1) && 3 <= b.length ? d = [null, b, null] : d = Gc.exec(b);
                if (d && (d[1] || !j)) {
                    if (d[1]) return j = j instanceof f ? j[0] : j, v = j && j.nodeType ? j.ownerDocument || j : C, b = f.parseHTML(d[1], v, !0), Hb.test(d[1]) && f.isPlainObject(j) && this.attr.call(b, j, !0), f.merge(this, b);
                    if ((j = C.getElementById(d[2])) && j.parentNode) {
                        if (j.id !== d[2]) return z.find(b);
                        this.length = 1;
                        this[0] = j
                    }
                    return this.context = C, this.selector = b, this
                }
                return !j || j.jquery ? (j || z).find(b) : this.constructor(j).find(b)
            }
            return f.isFunction(b) ? z.ready(b) :
                (b.selector !== c && (this.selector = b.selector, this.context = b.context), f.makeArray(b, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return Z.call(this)
        },
        get: function(b) {
            return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
        },
        pushStack: function(b, j, c) {
            b = f.merge(this.constructor(), b);
            return b.prevObject = this, b.context = this.context, "find" === j ? b.selector = this.selector + (this.selector ? " " : "") + c : j && (b.selector = this.selector + "." + j + "(" + c + ")"), b
        },
        each: function(b,
            j) {
            return f.each(this, b, j)
        },
        ready: function(b) {
            return f.ready.promise().done(b), this
        },
        eq: function(b) {
            return b = +b, -1 === b ? this.slice(b) : this.slice(b, b + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(Z.apply(this, arguments), "slice", Z.call(arguments).join(","))
        },
        map: function(b) {
            return this.pushStack(f.map(this, function(j, c) {
                return b.call(j, c, j)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Fb,
        sort: [].sort,
        splice: [].splice
    };
    f.fn.init.prototype = f.fn;
    f.extend = f.fn.extend = function() {
        var b, j, z, d, v, e, l = arguments[0] || {},
            g = 1,
            p = arguments.length,
            m = !1;
        "boolean" == typeof l && (m = l, l = arguments[1] || {}, g = 2);
        "object" != typeof l && !f.isFunction(l) && (l = {});
        for (p === g && (l = this, --g); g < p; g++)
            if (null != (b = arguments[g]))
                for (j in b) z = l[j], d = b[j], l !== d && (m && d && (f.isPlainObject(d) || (v = f.isArray(d))) ? (v ? (v = !1, e = z && f.isArray(z) ? z : []) : e = z && f.isPlainObject(z) ? z : {}, l[j] = f.extend(m, e, d)) : d !== c && (l[j] = d));
        return l
    };
    f.extend({
        noConflict: function(u) {
            return b.$ ===
                f && (b.$ = Cc), u && b.jQuery === f && (b.jQuery = Bc), f
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) {
            b ? f.readyWait++ : f.ready(!0)
        },
        ready: function(b) {
            if (!(!0 === b ? --f.readyWait : f.isReady)) {
                if (!C.body) return setTimeout(f.ready, 1);
                f.isReady = !0;
                !0 !== b && 0 < --f.readyWait || (Ea.resolveWith(C, [f]), f.fn.trigger && f(C).trigger("ready").off("ready"))
            }
        },
        isFunction: function(b) {
            return "function" === f.type(b)
        },
        isArray: Array.isArray || function(b) {
            return "array" === f.type(b)
        },
        isWindow: function(b) {
            return null != b && b == b.window
        },
        isNumeric: function(b) {
            return !isNaN(parseFloat(b)) &&
                isFinite(b)
        },
        type: function(b) {
            return null == b ? String(b) : Ib[Dc.call(b)] || "object"
        },
        isPlainObject: function(b) {
            if (!b || "object" !== f.type(b) || b.nodeType || f.isWindow(b)) return !1;
            try {
                if (b.constructor && !bb.call(b, "constructor") && !bb.call(b.constructor.prototype, "isPrototypeOf")) return !1
            } catch (j) {
                return !1
            }
            for (var z in b);
            return z === c || bb.call(b, z)
        },
        isEmptyObject: function(b) {
            for (var j in b) return !1;
            return !0
        },
        error: function(b) {
            throw Error(b);
        },
        parseHTML: function(b, j, c) {
            var d;
            return !b || "string" != typeof b ? null :
                ("boolean" == typeof j && (c = j, j = 0), j = j || C, (d = Hb.exec(b)) ? [j.createElement(d[1])] : (d = f.buildFragment([b], j, c ? null : []), f.merge([], (d.cacheable ? f.clone(d.fragment) : d.fragment).childNodes)))
        },
        parseJSON: function(u) {
            if (!u || "string" != typeof u) return null;
            u = f.trim(u);
            if (b.JSON && b.JSON.parse) return b.JSON.parse(u);
            if (Hc.test(u.replace(Jc, "@").replace(Kc, "]").replace(Ic, ""))) return (new Function("return " + u))();
            f.error("Invalid JSON: " + u)
        },
        parseXML: function(u) {
            var j, z;
            if (!u || "string" != typeof u) return null;
            try {
                b.DOMParser ?
                    (z = new DOMParser, j = z.parseFromString(u, "text/xml")) : (j = new ActiveXObject("Microsoft.XMLDOM"), j.async = "false", j.loadXML(u))
            } catch (d) {
                j = c
            }
            return (!j || !j.documentElement || j.getElementsByTagName("parsererror").length) && f.error("Invalid XML: " + u), j
        },
        noop: function() {},
        globalEval: function(u) {
            u && Ec.test(u) && (b.execScript || function(u) {
                b.eval.call(b, u)
            })(u)
        },
        camelCase: function(b) {
            return b.replace(Lc, "ms-").replace(Mc, Nc)
        },
        nodeName: function(b, j) {
            return b.nodeName && b.nodeName.toLowerCase() === j.toLowerCase()
        },
        each: function(b, j, z) {
            var d, v = 0,
                e = b.length,
                l = e === c || f.isFunction(b);
            if (z)
                if (l)
                    for (d in b) {
                        if (!1 === j.apply(b[d], z)) break
                    } else
                        for (; v < e && !1 !== j.apply(b[v++], z););
                else if (l)
                for (d in b) {
                    if (!1 === j.call(b[d], d, b[d])) break
                } else
                    for (; v < e && !1 !== j.call(b[v], v, b[v++]););
            return b
        },
        trim: cb && !cb.call("\ufeff\u00a0") ? function(b) {
            return null == b ? "" : cb.call(b)
        } : function(b) {
            return null == b ? "" : (b + "").replace(Fc, "")
        },
        makeArray: function(b, j) {
            var c, d = j || [];
            return null != b && (c = f.type(b), null == b.length || "string" === c || "function" ===
                c || "regexp" === c || f.isWindow(b) ? Fb.call(d, b) : f.merge(d, b)), d
        },
        inArray: function(b, j, c) {
            var d;
            if (j) {
                if (Gb) return Gb.call(j, b, c);
                d = j.length;
                for (c = c ? 0 > c ? Math.max(0, d + c) : c : 0; c < d; c++)
                    if (c in j && j[c] === b) return c
            }
            return -1
        },
        merge: function(b, j) {
            var d = j.length,
                f = b.length,
                v = 0;
            if ("number" == typeof d)
                for (; v < d; v++) b[f++] = j[v];
            else
                for (; j[v] !== c;) b[f++] = j[v++];
            return b.length = f, b
        },
        grep: function(b, j, c) {
            var d, f = [],
                e = 0,
                l = b.length;
            for (c = !!c; e < l; e++) d = !!j(b[e], e), c !== d && f.push(b[e]);
            return f
        },
        map: function(b, j, d) {
            var J,
                v, e = [],
                l = 0,
                g = b.length;
            if (b instanceof f || g !== c && "number" == typeof g && (0 < g && b[0] && b[g - 1] || 0 === g || f.isArray(b)))
                for (; l < g; l++) J = j(b[l], l, d), null != J && (e[e.length] = J);
            else
                for (v in b) J = j(b[v], v, d), null != J && (e[e.length] = J);
            return e.concat.apply([], e)
        },
        guid: 1,
        proxy: function(b, j) {
            var d, J, v;
            return "string" == typeof j && (d = b[j], j = b, b = d), f.isFunction(b) ? (J = Z.call(arguments, 2), v = function() {
                return b.apply(j, J.concat(Z.call(arguments)))
            }, v.guid = b.guid = b.guid || f.guid++, v) : c
        },
        access: function(b, j, d, J, v, e, l) {
            var g, p = null ==
                d,
                m = 0,
                q = b.length;
            if (d && "object" == typeof d) {
                for (m in d) f.access(b, j, m, d[m], 1, e, J);
                v = 1
            } else if (J !== c) {
                g = l === c && f.isFunction(J);
                p && (g ? (g = j, j = function(b, u, j) {
                    return g.call(f(b), j)
                }) : (j.call(b, J), j = null));
                if (j)
                    for (; m < q; m++) j(b[m], d, g ? J.call(b[m], m, j(b[m], d)) : J, l);
                v = 1
            }
            return v ? b : p ? j.call(b) : q ? j(b[0], d) : e
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    f.ready.promise = function(u) {
        if (!Ea)
            if (Ea = f.Deferred(), "complete" === C.readyState) setTimeout(f.ready, 1);
            else if (C.addEventListener) C.addEventListener("DOMContentLoaded",
            Ga, !1), b.addEventListener("load", f.ready, !1);
        else {
            C.attachEvent("onreadystatechange", Ga);
            b.attachEvent("onload", f.ready);
            var j = !1;
            try {
                j = null == b.frameElement && C.documentElement
            } catch (c) {}
            j && j.doScroll && function v() {
                if (!f.isReady) {
                    try {
                        j.doScroll("left")
                    } catch (b) {
                        return setTimeout(v, 50)
                    }
                    f.ready()
                }
            }()
        }
        return Ea.promise(u)
    };
    f.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, j) {
        Ib["[object " + j + "]"] = j.toLowerCase()
    });
    Eb = f(C);
    var Jb = {};
    f.Callbacks = function(b) {
        var j;
        if ("string" ==
            typeof b) {
            if (!(j = Jb[b])) {
                j = b;
                var d = Jb[j] = {};
                j = (f.each(j.split(fa), function(b, u) {
                    d[u] = !0
                }), d)
            }
        } else j = f.extend({}, b);
        b = j;
        var J, v, e, l, g, p, m = [],
            q = !b.once && [],
            n = function(j) {
                J = b.memory && j;
                v = !0;
                p = l || 0;
                l = 0;
                g = m.length;
                for (e = !0; m && p < g; p++)
                    if (!1 === m[p].apply(j[0], j[1]) && b.stopOnFalse) {
                        J = !1;
                        break
                    }
                e = !1;
                m && (q ? q.length && n(q.shift()) : J ? m = [] : t.disable())
            },
            t = {
                add: function() {
                    if (m) {
                        var j = m.length;
                        (function yc(j) {
                            f.each(j, function(j, c) {
                                var d = f.type(c);
                                "function" === d && (!b.unique || !t.has(c)) ? m.push(c) : c && c.length && "string" !==
                                    d && yc(c)
                            })
                        })(arguments);
                        e ? g = m.length : J && (l = j, n(J))
                    }
                    return this
                },
                remove: function() {
                    return m && f.each(arguments, function(b, u) {
                        for (var j; - 1 < (j = f.inArray(u, m, j));) m.splice(j, 1), e && (j <= g && g--, j <= p && p--)
                    }), this
                },
                has: function(b) {
                    return -1 < f.inArray(b, m)
                },
                empty: function() {
                    return m = [], this
                },
                disable: function() {
                    return m = q = J = c, this
                },
                disabled: function() {
                    return !m
                },
                lock: function() {
                    return q = c, J || t.disable(), this
                },
                locked: function() {
                    return !q
                },
                fireWith: function(b, u) {
                    return u = u || [], u = [b, u.slice ? u.slice() : u], m && (!v || q) &&
                        (e ? q.push(u) : n(u)), this
                },
                fire: function() {
                    return t.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!v
                }
            };
        return t
    };
    f.extend({
        Deferred: function(b) {
            var j = [
                    ["resolve", "done", f.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", f.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", f.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var b = arguments;
                        return f.Deferred(function(u) {
                            f.each(j, function(j,
                                c) {
                                var d = c[0],
                                    z = b[j];
                                e[c[1]](f.isFunction(z) ? function() {
                                    var b = z.apply(this, arguments);
                                    b && f.isFunction(b.promise) ? b.promise().done(u.resolve).fail(u.reject).progress(u.notify) : u[d + "With"](this === e ? u : this, [b])
                                } : u[d])
                            });
                            b = null
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? f.extend(b, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, f.each(j, function(b, u) {
                var f = u[2],
                    g = u[3];
                d[u[1]] = f.add;
                g && f.add(function() {
                    c = g
                }, j[b ^ 1][2].disable, j[2][2].lock);
                e[u[0]] = f.fire;
                e[u[0] + "With"] = f.fireWith
            }), d.promise(e), b && b.call(e, e), e
        },
        when: function(b) {
            var j = 0,
                c = Z.call(arguments),
                d = c.length,
                e = 1 !== d || b && f.isFunction(b.promise) ? d : 0,
                D = 1 === e ? b : f.Deferred(),
                l = function(b, u, j) {
                    return function(c) {
                        u[b] = this;
                        j[b] = 1 < arguments.length ? Z.call(arguments) : c;
                        j === g ? D.notifyWith(u, j) : --e || D.resolveWith(u, j)
                    }
                },
                g, p, m;
            if (1 < d) {
                g = Array(d);
                p = Array(d);
                for (m = Array(d); j < d; j++) c[j] && f.isFunction(c[j].promise) ? c[j].promise().done(l(j, m, c)).fail(D.reject).progress(l(j, p, g)) : --e
            }
            return e || D.resolveWith(m, c), D.promise()
        }
    });
    var Oc = f,
        db, O, Ha, ga, Ia, Ja, S, ha, Ka, eb,
        ta, Kb, K = C.createElement("div");
    K.setAttribute("className", "t");
    K.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ha = K.getElementsByTagName("*");
    ga = K.getElementsByTagName("a")[0];
    ga.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Ha || !Ha.length) db = {};
    else {
        Ia = C.createElement("select");
        Ja = Ia.appendChild(C.createElement("option"));
        S = K.getElementsByTagName("input")[0];
        O = {
            leadingWhitespace: 3 === K.firstChild.nodeType,
            tbody: !K.getElementsByTagName("tbody").length,
            htmlSerialize: !!K.getElementsByTagName("link").length,
            style: /top/.test(ga.getAttribute("style")),
            hrefNormalized: "/a" === ga.getAttribute("href"),
            opacity: /^0.5/.test(ga.style.opacity),
            cssFloat: !!ga.style.cssFloat,
            checkOn: "on" === S.value,
            optSelected: Ja.selected,
            getSetAttribute: "t" !== K.className,
            enctype: !!C.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === C.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        S.checked = !0;
        O.noCloneChecked = S.cloneNode(!0).checked;
        Ia.disabled = !0;
        O.optDisabled = !Ja.disabled;
        try {
            delete K.test
        } catch (Qd) {
            O.deleteExpando = !1
        }!K.addEventListener && K.attachEvent && K.fireEvent && (K.attachEvent("onclick", Kb = function() {
            O.noCloneEvent = !1
        }), K.cloneNode(!0).fireEvent("onclick"), K.detachEvent("onclick", Kb));
        S = C.createElement("input");
        S.value = "t";
        S.setAttribute("type", "radio");
        O.radioValue = "t" === S.value;
        S.setAttribute("checked",
            "checked");
        S.setAttribute("name", "t");
        K.appendChild(S);
        ha = C.createDocumentFragment();
        ha.appendChild(K.lastChild);
        O.checkClone = ha.cloneNode(!0).cloneNode(!0).lastChild.checked;
        O.appendChecked = S.checked;
        ha.removeChild(S);
        ha.appendChild(K);
        if (K.attachEvent)
            for (eb in {
                submit: !0,
                change: !0,
                focusin: !0
            }) Ka = "on" + eb, (ta = Ka in K) || (K.setAttribute(Ka, "return;"), ta = "function" == typeof K[Ka]), O[eb + "Bubbles"] = ta;
        db = (f(function() {
            var u, j, c, d, f = C.getElementsByTagName("body")[0];
            f && (u = C.createElement("div"), u.style.cssText =
                "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", f.insertBefore(u, f.firstChild), j = C.createElement("div"), u.appendChild(j), j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c = j.getElementsByTagName("td"), c[0].style.cssText = "padding:0;margin:0;border:0;display:none", ta = 0 === c[0].offsetHeight, c[0].style.display = "", c[1].style.display = "none", O.reliableHiddenOffsets = ta && 0 === c[0].offsetHeight, j.innerHTML = "", j.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                O.boxSizing = 4 === j.offsetWidth, O.doesNotIncludeMarginInBodyOffset = 1 !== f.offsetTop, b.getComputedStyle && (O.pixelPosition = "1%" !== (b.getComputedStyle(j, null) || {}).top, O.boxSizingReliable = "4px" === (b.getComputedStyle(j, null) || {
                    width: "4px"
                }).width, d = C.createElement("div"), d.style.cssText = j.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", d.style.marginRight = d.style.width = "0", j.style.width = "1px", j.appendChild(d), O.reliableMarginRight = !parseFloat((b.getComputedStyle(d, null) || {}).marginRight)),
                "undefined" != typeof j.style.zoom && (j.innerHTML = "", j.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", O.inlineBlockNeedsLayout = 3 === j.offsetWidth, j.style.display = "block", j.style.overflow = "visible", j.innerHTML = "<div></div>", j.firstChild.style.width = "5px", O.shrinkWrapBlocks = 3 !== j.offsetWidth, u.style.zoom = 1), f.removeChild(u))
        }), ha.removeChild(K), Ha = ga = Ia = Ja = S = ha = K = null, O)
    }
    Oc.support = db;
    var uc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        tc = /([A-Z])/g;
    f.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            return b = b.nodeType ? f.cache[b[f.expando]] : b[f.expando], !!b && !e(b)
        },
        data: function(b, j, d, J) {
            if (f.acceptData(b)) {
                var e, D, l = f.expando,
                    g = "string" == typeof j,
                    p = b.nodeType,
                    m = p ? f.cache : b,
                    q = p ? b[l] : b[l] && l;
                if (q && m[q] && (J || m[q].data) || !(g && d === c)) {
                    q || (p ? b[l] = q = f.deletedIds.pop() || f.guid++ : q = l);
                    m[q] || (m[q] = {},
                        p || (m[q].toJSON = f.noop));
                    if ("object" == typeof j || "function" == typeof j) J ? m[q] = f.extend(m[q], j) : m[q].data = f.extend(m[q].data, j);
                    return e = m[q], J || (e.data || (e.data = {}), e = e.data), d !== c && (e[f.camelCase(j)] = d), g ? (D = e[j], null == D && (D = e[f.camelCase(j)])) : D = e, D
                }
            }
        },
        removeData: function(b, j, c) {
            if (f.acceptData(b)) {
                var d, v, D, l = b.nodeType,
                    g = l ? f.cache : b,
                    p = l ? b[f.expando] : f.expando;
                if (g[p]) {
                    if (j && (d = c ? g[p] : g[p].data)) {
                        f.isArray(j) || (j in d ? j = [j] : (j = f.camelCase(j), j in d ? j = [j] : j = j.split(" ")));
                        v = 0;
                        for (D = j.length; v < D; v++) delete d[j[v]];
                        if (!(c ? e : f.isEmptyObject)(d)) return
                    }
                    if (c || !(delete g[p].data, !e(g[p]))) l ? f.cleanData([b], !0) : f.support.deleteExpando || g != g.window ? delete g[p] : g[p] = null
                }
            }
        },
        _data: function(b, j, c) {
            return f.data(b, j, c, !0)
        },
        acceptData: function(b) {
            var j = b.nodeName && f.noData[b.nodeName.toLowerCase()];
            return !j || !0 !== j && b.getAttribute("classid") === j
        }
    });
    f.fn.extend({
        data: function(b, j) {
            var z, e, v, D, l, g = this[0],
                p = 0,
                m = null;
            if (b === c) {
                if (this.length && (m = f.data(g), 1 === g.nodeType && !f._data(g, "parsedAttrs"))) {
                    v = g.attributes;
                    for (l = v.length; p <
                        l; p++) D = v[p].name, D.indexOf("data-") || (D = f.camelCase(D.substring(5)), d(g, D, m[D]));
                    f._data(g, "parsedAttrs", !0)
                }
                return m
            }
            return "object" == typeof b ? this.each(function() {
                f.data(this, b)
            }) : (z = b.split(".", 2), z[1] = z[1] ? "." + z[1] : "", e = z[1] + "!", f.access(this, function(j) {
                if (j === c) return m = this.triggerHandler("getData" + e, [z[0]]), m === c && g && (m = f.data(g, b), m = d(g, b, m)), m === c && z[1] ? this.data(z[0]) : m;
                z[1] = j;
                this.each(function() {
                    var c = f(this);
                    c.triggerHandler("setData" + e, z);
                    f.data(this, b, j);
                    c.triggerHandler("changeData" +
                        e, z)
                })
            }, null, j, 1 < arguments.length, null, !1))
        },
        removeData: function(b) {
            return this.each(function() {
                f.removeData(this, b)
            })
        }
    });
    f.extend({
        queue: function(b, j, c) {
            var d;
            if (b) return j = (j || "fx") + "queue", d = f._data(b, j), c && (!d || f.isArray(c) ? d = f._data(b, j, f.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(b, j) {
            j = j || "fx";
            var c = f.queue(b, j),
                d = c.length,
                e = c.shift(),
                D = f._queueHooks(b, j),
                l = function() {
                    f.dequeue(b, j)
                };
            "inprogress" === e && (e = c.shift(), d--);
            e && ("fx" === j && c.unshift("inprogress"), delete D.stop, e.call(b, l, D));
            !d && D && D.empty.fire()
        },
        _queueHooks: function(b, j) {
            var c = j + "queueHooks";
            return f._data(b, c) || f._data(b, c, {
                empty: f.Callbacks("once memory").add(function() {
                    f.removeData(b, j + "queue", !0);
                    f.removeData(b, c, !0)
                })
            })
        }
    });
    f.fn.extend({
        queue: function(b, j) {
            var d = 2;
            return "string" != typeof b && (j = b, b = "fx", d--), arguments.length < d ? f.queue(this[0], b) : j === c ? this : this.each(function() {
                var c = f.queue(this, b, j);
                f._queueHooks(this, b);
                "fx" === b && "inprogress" !== c[0] && f.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                f.dequeue(this,
                    b)
            })
        },
        delay: function(b, j) {
            return b = f.fx ? f.fx.speeds[b] || b : b, j = j || "fx", this.queue(j, function(j, c) {
                var d = setTimeout(j, b);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, j) {
            var d, e = 1,
                v = f.Deferred(),
                D = this,
                l = this.length,
                g = function() {
                    --e || v.resolveWith(D, [D])
                };
            "string" != typeof b && (j = b, b = c);
            for (b = b || "fx"; l--;)(d = f._data(D[l], b + "queueHooks")) && d.empty && (e++, d.empty.add(g));
            return g(), v.promise(j)
        }
    });
    var ba, Lb, Mb, Nb = /[\t\r\n]/g,
        Pc = /\r/g,
        Qc = /^(?:button|input)$/i,
        Rc = /^(?:button|input|object|select|textarea)$/i,
        Sc = /^a(?:rea|)$/i,
        Ob = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Pb = f.support.getSetAttribute;
    f.fn.extend({
        attr: function(b, j) {
            return f.access(this, f.attr, b, j, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                f.removeAttr(this, b)
            })
        },
        prop: function(b, j) {
            return f.access(this, f.prop, b, j, 1 < arguments.length)
        },
        removeProp: function(b) {
            return b = f.propFix[b] ||
                b, this.each(function() {
                    try {
                        this[b] = c, delete this[b]
                    } catch (j) {}
                })
        },
        addClass: function(b) {
            var j, c, d, e, D, l, g;
            if (f.isFunction(b)) return this.each(function(j) {
                f(this).addClass(b.call(this, j, this.className))
            });
            if (b && "string" == typeof b) {
                j = b.split(fa);
                c = 0;
                for (d = this.length; c < d; c++)
                    if (e = this[c], 1 === e.nodeType)
                        if (!e.className && 1 === j.length) e.className = b;
                        else {
                            D = " " + e.className + " ";
                            l = 0;
                            for (g = j.length; l < g; l++) 0 > D.indexOf(" " + j[l] + " ") && (D += j[l] + " ");
                            e.className = f.trim(D)
                        }
            }
            return this
        },
        removeClass: function(b) {
            var j,
                d, e, v, D, l, g;
            if (f.isFunction(b)) return this.each(function(j) {
                f(this).removeClass(b.call(this, j, this.className))
            });
            if (b && "string" == typeof b || b === c) {
                j = (b || "").split(fa);
                l = 0;
                for (g = this.length; l < g; l++)
                    if (e = this[l], 1 === e.nodeType && e.className) {
                        d = (" " + e.className + " ").replace(Nb, " ");
                        v = 0;
                        for (D = j.length; v < D; v++)
                            for (; 0 <= d.indexOf(" " + j[v] + " ");) d = d.replace(" " + j[v] + " ", " ");
                        e.className = b ? f.trim(d) : ""
                    }
            }
            return this
        },
        toggleClass: function(b, j) {
            var c = typeof b,
                d = "boolean" == typeof j;
            return f.isFunction(b) ? this.each(function(c) {
                f(this).toggleClass(b.call(this,
                    c, this.className, j), j)
            }) : this.each(function() {
                if ("string" === c)
                    for (var e, g = 0, l = f(this), p = j, m = b.split(fa); e = m[g++];) p = d ? p : !l.hasClass(e), l[p ? "addClass" : "removeClass"](e);
                else if ("undefined" === c || "boolean" === c) this.className && f._data(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var j = 0, c = this.length; j < c; j++)
                if (1 === this[j].nodeType && 0 <= (" " + this[j].className + " ").replace(Nb, " ").indexOf(b)) return !0;
            return !1
        },
        val: function(b) {
            var j, d, e, v = this[0];
            if (arguments.length) return e = f.isFunction(b), this.each(function(d) {
                var z, v = f(this);
                if (1 === this.nodeType && (e ? z = b.call(this, d, v.val()) : z = b, null == z ? z = "" : "number" == typeof z ? z += "" : f.isArray(z) && (z = f.map(z, function(b) {
                    return null == b ? "" : b + ""
                })), j = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], !j || !("set" in j) || j.set(this, z, "value") === c)) this.value = z
            });
            if (v) return j = f.valHooks[v.type] || f.valHooks[v.nodeName.toLowerCase()], j && "get" in j && (d = j.get(v,
                "value")) !== c ? d : (d = v.value, "string" == typeof d ? d.replace(Pc, "") : null == d ? "" : d)
        }
    });
    f.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var j = b.attributes.value;
                    return !j || j.specified ? b.value : b.text
                }
            },
            select: {
                get: function(b) {
                    var j, c, d = b.selectedIndex,
                        e = [],
                        g = b.options,
                        l = "select-one" === b.type;
                    if (0 > d) return null;
                    b = l ? d : 0;
                    for (c = l ? d + 1 : g.length; b < c; b++)
                        if (j = g[b], j.selected && (f.support.optDisabled ? !j.disabled : null === j.getAttribute("disabled")) && (!j.parentNode.disabled || !f.nodeName(j.parentNode, "optgroup"))) {
                            j = f(j).val();
                            if (l) return j;
                            e.push(j)
                        }
                    return l && !e.length && g.length ? f(g[d]).val() : e
                },
                set: function(b, j) {
                    var c = f.makeArray(j);
                    return f(b).find("option").each(function() {
                        this.selected = 0 <= f.inArray(f(this).val(), c)
                    }), c.length || (b.selectedIndex = -1), c
                }
            }
        },
        attrFn: {},
        attr: function(b, j, d, e) {
            var v, g, l = b.nodeType;
            if (b && !(3 === l || 8 === l || 2 === l)) {
                if (e && f.isFunction(f.fn[j])) return f(b)[j](d);
                if ("undefined" == typeof b.getAttribute) return f.prop(b, j, d);
                (e = 1 !== l || !f.isXMLDoc(b)) && (j = j.toLowerCase(), g = f.attrHooks[j] || (Ob.test(j) ? Lb :
                    ba));
                if (d !== c) {
                    if (null === d) {
                        f.removeAttr(b, j);
                        return
                    }
                    return g && "set" in g && e && (v = g.set(b, d, j)) !== c ? v : (b.setAttribute(j, d + ""), d)
                }
                return g && "get" in g && e && null !== (v = g.get(b, j)) ? v : (v = b.getAttribute(j), null === v ? c : v)
            }
        },
        removeAttr: function(b, j) {
            var c, d, e, g, l = 0;
            if (j && 1 === b.nodeType)
                for (d = j.split(fa); l < d.length; l++)(e = d[l]) && (c = f.propFix[e] || e, g = Ob.test(e), g || f.attr(b, e, ""), b.removeAttribute(Pb ? e : c), g && c in b && (b[c] = !1))
        },
        attrHooks: {
            type: {
                set: function(b, j) {
                    if (Qc.test(b.nodeName) && b.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && "radio" === j && f.nodeName(b, "input")) {
                        var c = b.value;
                        return b.setAttribute("type", j), c && (b.value = c), j
                    }
                }
            },
            value: {
                get: function(b, j) {
                    return ba && f.nodeName(b, "button") ? ba.get(b, j) : j in b ? b.value : null
                },
                set: function(b, j, c) {
                    if (ba && f.nodeName(b, "button")) return ba.set(b, j, c);
                    b.value = j
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(b, j, d) {
            var e, v, g, l = b.nodeType;
            if (b && !(3 === l || 8 === l || 2 === l)) return g = 1 !== l || !f.isXMLDoc(b), g && (j = f.propFix[j] || j, v = f.propHooks[j]), d !== c ? v && "set" in v && (e = v.set(b, d, j)) !== c ? e : b[j] = d : v && "get" in v && null !== (e = v.get(b, j)) ? e : b[j]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var j = b.getAttributeNode("tabindex");
                    return j && j.specified ? parseInt(j.value, 10) : Rc.test(b.nodeName) || Sc.test(b.nodeName) && b.href ? 0 : c
                }
            }
        }
    });
    Lb = {
        get: function(b,
            j) {
            var d, e = f.prop(b, j);
            return !0 === e || "boolean" != typeof e && (d = b.getAttributeNode(j)) && !1 !== d.nodeValue ? j.toLowerCase() : c
        },
        set: function(b, j, c) {
            var d;
            return !1 === j ? f.removeAttr(b, c) : (d = f.propFix[c] || c, d in b && (b[d] = !0), b.setAttribute(c, c.toLowerCase())), c
        }
    };
    Pb || (Mb = {
        name: !0,
        id: !0,
        coords: !0
    }, ba = f.valHooks.button = {
        get: function(b, j) {
            var d;
            return d = b.getAttributeNode(j), d && (Mb[j] ? "" !== d.value : d.specified) ? d.value : c
        },
        set: function(b, c, d) {
            var f = b.getAttributeNode(d);
            return f || (f = C.createAttribute(d), b.setAttributeNode(f)),
                f.value = c + ""
        }
    }, f.each(["width", "height"], function(b, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            set: function(b, u) {
                if ("" === u) return b.setAttribute(c, "auto"), u
            }
        })
    }), f.attrHooks.contenteditable = {
        get: ba.get,
        set: function(b, c, d) {
            "" === c && (c = "false");
            ba.set(b, c, d)
        }
    });
    f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(b, j) {
        f.attrHooks[j] = f.extend(f.attrHooks[j], {
            get: function(b) {
                b = b.getAttribute(j, 2);
                return null === b ? c : b
            }
        })
    });
    f.support.style || (f.attrHooks.style = {
        get: function(b) {
            return b.style.cssText.toLowerCase() ||
                c
        },
        set: function(b, c) {
            return b.style.cssText = c + ""
        }
    });
    f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function(b) {
            b = b.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }));
    f.support.enctype || (f.propFix.enctype = "encoding");
    f.support.checkOn || f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            get: function(b) {
                return null === b.getAttribute("value") ? "on" : b.value
            }
        }
    });
    f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function(b, c) {
                if (f.isArray(c)) return b.checked = 0 <= f.inArray(f(b).val(), c)
            }
        })
    });
    var fb = /^(?:textarea|input|select)$/i,
        Qb = /^([^\.]*|)(?:\.(.+)|)$/,
        Tc = /(?:^|\s)hover(\.\S+|)\b/,
        Uc = /^key/,
        Vc = /^(?:mouse|contextmenu)|click/,
        Rb = /^(?:focusinfocus|focusoutblur)$/,
        Sb = function(b) {
            return f.event.special.hover ? b : b.replace(Tc, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function(b, j, d, e, v) {
            var g, l, p, m, q, n, t, r, s;
            if (!(3 === b.nodeType || 8 === b.nodeType || !j || !d || !(g = f._data(b)))) {
                d.handler && (t = d, d = t.handler, v = t.selector);
                d.guid || (d.guid = f.guid++);
                (p = g.events) || (g.events = p = {});
                (l = g.handle) || (g.handle = l = function(b) {
                    return "undefined" != typeof f && (!b || f.event.triggered !== b.type) ? f.event.dispatch.apply(l.elem, arguments) : c
                }, l.elem = b);
                j = f.trim(Sb(j)).split(" ");
                for (g = 0; g < j.length; g++) {
                    m = Qb.exec(j[g]) || [];
                    q = m[1];
                    n = (m[2] || "").split(".").sort();
                    s = f.event.special[q] || {};
                    q = (v ? s.delegateType : s.bindType) || q;
                    s = f.event.special[q] || {};
                    m = f.extend({
                        type: q,
                        origType: m[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: v,
                        needsContext: v && f.expr.match.needsContext.test(v),
                        namespace: n.join(".")
                    }, t);
                    r = p[q];
                    if (!r && (r = p[q] = [], r.delegateCount = 0, !s.setup || !1 === s.setup.call(b, e, n, l))) b.addEventListener ? b.addEventListener(q, l, !1) : b.attachEvent && b.attachEvent("on" + q, l);
                    s.add && (s.add.call(b, m), m.handler.guid || (m.handler.guid = d.guid));
                    v ? r.splice(r.delegateCount++, 0, m) : r.push(m);
                    f.event.global[q] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function(b, c, d, e, v) {
            var g, l, p, m, q, n, t, r, s, A, y = f.hasData(b) && f._data(b);
            if (y && (t = y.events)) {
                c = f.trim(Sb(c || "")).split(" ");
                for (g = 0; g < c.length; g++)
                    if (l = Qb.exec(c[g]) || [], p = m = l[1], l = l[2], p) {
                        r = f.event.special[p] || {};
                        p = (e ? r.delegateType : r.bindType) || p;
                        s = t[p] || [];
                        q = s.length;
                        l = l ? RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (n = 0; n < s.length; n++) A = s[n], (v || m === A.origType) && (!d || d.guid === A.guid) && (!l || l.test(A.namespace)) && (!e || e === A.selector || "**" === e && A.selector) && (s.splice(n--, 1), A.selector && s.delegateCount--, r.remove && r.remove.call(b, A));
                        0 === s.length && q !== s.length && ((!r.teardown || !1 === r.teardown.call(b, l, y.handle)) && f.removeEvent(b,
                            p, y.handle), delete t[p])
                    } else
                        for (p in t) f.event.remove(b, p + c[g], d, e, !0);
                f.isEmptyObject(t) && (delete y.handle, f.removeData(b, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(u, j, d, e) {
            if (!d || 3 !== d.nodeType && 8 !== d.nodeType) {
                var v, g, l, p, m, q, n, t = u.type || u;
                p = [];
                if (!Rb.test(t + f.event.triggered) && (0 <= t.indexOf("!") && (t = t.slice(0, -1), v = !0), 0 <= t.indexOf(".") && (p = t.split("."), t = p.shift(), p.sort()), d && !f.event.customEvent[t] || f.event.global[t]))
                    if (u = "object" == typeof u ? u[f.expando] ?
                        u : new f.Event(t, u) : new f.Event(t), u.type = t, u.isTrigger = !0, u.exclusive = v, u.namespace = p.join("."), u.namespace_re = u.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, p = 0 > t.indexOf(":") ? "on" + t : "", d) {
                        if (u.result = c, u.target || (u.target = d), j = null != j ? f.makeArray(j) : [], j.unshift(u), m = f.event.special[t] || {}, !(m.trigger && !1 === m.trigger.apply(d, j))) {
                            n = [
                                [d, m.bindType || t]
                            ];
                            if (!e && !m.noBubble && !f.isWindow(d)) {
                                g = m.delegateType || t;
                                v = Rb.test(g + t) ? d : d.parentNode;
                                for (l = d; v; v = v.parentNode) n.push([v, g]),
                                    l = v;
                                l === (d.ownerDocument || C) && n.push([l.defaultView || l.parentWindow || b, g])
                            }
                            for (g = 0; g < n.length && !u.isPropagationStopped(); g++) v = n[g][0], u.type = n[g][1], (q = (f._data(v, "events") || {})[u.type] && f._data(v, "handle")) && q.apply(v, j), (q = p && v[p]) && f.acceptData(v) && q.apply && !1 === q.apply(v, j) && u.preventDefault();
                            return u.type = t, !e && !u.isDefaultPrevented() && (!m._default || !1 === m._default.apply(d.ownerDocument, j)) && ("click" !== t || !f.nodeName(d, "a")) && f.acceptData(d) && p && d[t] && ("focus" !== t && "blur" !== t || 0 !== u.target.offsetWidth) &&
                                !f.isWindow(d) && (l = d[p], l && (d[p] = null), f.event.triggered = t, d[t](), f.event.triggered = c, l && (d[p] = l)), u.result
                        }
                    } else
                        for (g in d = f.cache, d) d[g].events && d[g].events[t] && f.event.trigger(u, j, d[g].handle.elem, !0)
            }
        },
        dispatch: function(u) {
            u = f.event.fix(u || b.event);
            var j, d, e, v, g, l, p = (f._data(this, "events") || {})[u.type] || [],
                m = p.delegateCount,
                q = Z.call(arguments),
                n = !u.exclusive && !u.namespace,
                t = f.event.special[u.type] || {},
                r = [];
            q[0] = u;
            u.delegateTarget = this;
            if (!(t.preDispatch && !1 === t.preDispatch.call(this, u))) {
                if (m &&
                    (!u.button || "click" !== u.type))
                    for (d = u.target; d != this; d = d.parentNode || this)
                        if (!0 !== d.disabled || "click" !== u.type) {
                            v = {};
                            g = [];
                            for (j = 0; j < m; j++) e = p[j], l = e.selector, v[l] === c && (v[l] = e.needsContext ? 0 <= f(l, this).index(d) : f.find(l, this, null, [d]).length), v[l] && g.push(e);
                            g.length && r.push({
                                elem: d,
                                matches: g
                            })
                        }
                p.length > m && r.push({
                    elem: this,
                    matches: p.slice(m)
                });
                for (j = 0; j < r.length && !u.isPropagationStopped(); j++) {
                    v = r[j];
                    u.currentTarget = v.elem;
                    for (d = 0; d < v.matches.length && !u.isImmediatePropagationStopped(); d++)
                        if (e = v.matches[d],
                            n || !u.namespace && !e.namespace || u.namespace_re && u.namespace_re.test(e.namespace)) u.data = e.data, u.handleObj = e, e = ((f.event.special[e.origType] || {}).handle || e.handler).apply(v.elem, q), e !== c && (u.result = e, !1 === e && (u.preventDefault(), u.stopPropagation()))
                }
                return t.postDispatch && t.postDispatch.call(this, u), u.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(b, c) {
                return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode), b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, j) {
                var d, f, e, g = j.button,
                    l = j.fromElement;
                return null == b.pageX && null != j.clientX && (d = b.target.ownerDocument || C, f = d.documentElement, e = d.body, b.pageX = j.clientX + (f && f.scrollLeft || e && e.scrollLeft || 0) - (f && f.clientLeft ||
                    e && e.clientLeft || 0), b.pageY = j.clientY + (f && f.scrollTop || e && e.scrollTop || 0) - (f && f.clientTop || e && e.clientTop || 0)), !b.relatedTarget && l && (b.relatedTarget = l === b.target ? j.toElement : l), !b.which && g !== c && (b.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0), b
            }
        },
        fix: function(b) {
            if (b[f.expando]) return b;
            var c, d, e = b,
                v = f.event.fixHooks[b.type] || {},
                g = v.props ? this.props.concat(v.props) : this.props;
            b = f.Event(e);
            for (c = g.length; c;) d = g[--c], b[d] = e[d];
            return b.target || (b.target = e.srcElement || C), 3 === b.target.nodeType && (b.target = b.target.parentNode),
                b.metaKey = !!b.metaKey, v.filter ? v.filter(b, e) : b
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(b, c, d) {
                    f.isWindow(this) && (this.onbeforeunload = d)
                },
                teardown: function(b, c) {
                    this.onbeforeunload === c && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(b, c, d, e) {
            b = f.extend(new f.Event, d, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            e ? f.event.trigger(b, null, c) : f.event.dispatch.call(c, b);
            b.isDefaultPrevented() && d.preventDefault()
        }
    };
    f.event.handle =
        f.event.dispatch;
    f.removeEvent = C.removeEventListener ? function(b, c, d) {
        b.removeEventListener && b.removeEventListener(c, d, !1)
    } : function(b, c, d) {
        c = "on" + c;
        b.detachEvent && ("undefined" == typeof b[c] && (b[c] = null), b.detachEvent(c, d))
    };
    f.Event = function(b, c) {
        if (this instanceof f.Event) b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? n : g) : this.type = b, c && f.extend(this, c), this.timeStamp = b && b.timeStamp || f.now(),
            this[f.expando] = !0;
        else return new f.Event(b, c)
    };
    f.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = n;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = n;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = n;
            this.stopPropagation()
        },
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g
    };
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(b, c) {
        f.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var u, d = b.relatedTarget,
                    e = b.handleObj;
                if (!d || d !== this && !f.contains(this, d)) b.type = e.origType, u = e.handler.apply(this, arguments), b.type = c;
                return u
            }
        }
    });
    f.support.submitBubbles || (f.event.special.submit = {
        setup: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function(b) {
                b = b.target;
                (b = f.nodeName(b, "input") || f.nodeName(b, "button") ?
                    b.form : c) && !f._data(b, "_submit_attached") && (f.event.add(b, "submit._submit", function(b) {
                    b._submit_bubble = !0
                }), f._data(b, "_submit_attached", !0))
            })
        },
        postDispatch: function(b) {
            b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && f.event.simulate("submit", this.parentNode, b, !0))
        },
        teardown: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    });
    f.support.changeBubbles || (f.event.special.change = {
        setup: function() {
            if (fb.test(this.nodeName)) {
                if ("checkbox" === this.type ||
                    "radio" === this.type) f.event.add(this, "propertychange._change", function(b) {
                    "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function(b) {
                    this._just_changed && !b.isTrigger && (this._just_changed = !1);
                    f.event.simulate("change", this, b, !0)
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function(b) {
                b = b.target;
                fb.test(b.nodeName) && !f._data(b, "_change_attached") && (f.event.add(b, "change._change", function(b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger &&
                        f.event.simulate("change", this.parentNode, b, !0)
                }), f._data(b, "_change_attached", !0))
            })
        },
        handle: function(b) {
            var c = b.target;
            if (this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type) return b.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return f.event.remove(this, "._change"), !fb.test(this.nodeName)
        }
    });
    f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        var d = 0,
            e = function(b) {
                f.event.simulate(c, b.target, f.event.fix(b), !0)
            };
        f.event.special[c] = {
            setup: function() {
                0 === d++ && C.addEventListener(b, e, !0)
            },
            teardown: function() {
                0 === --d && C.removeEventListener(b, e, !0)
            }
        }
    });
    f.fn.extend({
        on: function(b, j, d, e, v) {
            var p, l;
            if ("object" == typeof b) {
                "string" != typeof j && (d = d || j, j = c);
                for (l in b) this.on(l, j, d, b[l], v);
                return this
            }
            null == d && null == e ? (e = j, d = j = c) : null == e && ("string" == typeof j ? (e = d, d = c) : (e = d, d = j, j = c));
            if (!1 === e) e = g;
            else if (!e) return this;
            return 1 === v && (p = e, e = function(b) {
                return f().off(b), p.apply(this, arguments)
            }, e.guid = p.guid || (p.guid = f.guid++)), this.each(function() {
                f.event.add(this,
                    b, e, d, j)
            })
        },
        one: function(b, c, d, f) {
            return this.on(b, c, d, f, 1)
        },
        off: function(b, j, d) {
            var e, v;
            if (b && b.preventDefault && b.handleObj) return e = b.handleObj, f(b.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof b) {
                for (v in b) this.off(v, j, b[v]);
                return this
            }
            if (!1 === j || "function" == typeof j) d = j, j = c;
            return !1 === d && (d = g), this.each(function() {
                f.event.remove(this, b, d, j)
            })
        },
        bind: function(b, c, d) {
            return this.on(b, null, c, d)
        },
        unbind: function(b, c) {
            return this.off(b,
                null, c)
        },
        live: function(b, c, d) {
            return f(this.context).on(b, this.selector, c, d), this
        },
        die: function(b, c) {
            return f(this.context).off(b, this.selector || "**", c), this
        },
        delegate: function(b, c, d, f) {
            return this.on(c, b, d, f)
        },
        undelegate: function(b, c, d) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
        },
        trigger: function(b, c) {
            return this.each(function() {
                f.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(b, c) {
            if (this[0]) return f.event.trigger(b, c, this[0], !0)
        },
        toggle: function(b) {
            var c = arguments,
                d =
                b.guid || f.guid++,
                e = 0,
                g = function(d) {
                    var z = (f._data(this, "lastToggle" + b.guid) || 0) % e;
                    return f._data(this, "lastToggle" + b.guid, z + 1), d.preventDefault(), c[z].apply(this, arguments) || !1
                };
            for (g.guid = d; e < c.length;) c[e++].guid = d;
            return this.click(g)
        },
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(b, c) {
            f.fn[c] = function(b, d) {
                return null == d && (d = b, b = null), 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
            };
            Uc.test(c) && (f.event.fixHooks[c] = f.event.keyHooks);
            Vc.test(c) && (f.event.fixHooks[c] = f.event.mouseHooks)
        });
    var Wc = b,
        F = function(b, c, d, f) {
            d = d || [];
            c = c || W;
            var e, g, l, p, m = c.nodeType;
            if (!b || "string" != typeof b) return d;
            if (1 !== m && 9 !== m) return [];
            l = La(c);
            if (!l && !f && (e = Xc.exec(b)))
                if (p = e[1])
                    if (9 === m) {
                        g = c.getElementById(p);
                        if (!g || !g.parentNode) return d;
                        if (g.id === p) return d.push(g), d
                    } else {
                        if (c.ownerDocument &&
                            (g = c.ownerDocument.getElementById(p)) && Tb(c, g) && g.id === p) return d.push(g), d
                    } else {
                if (e[2]) return na.apply(d, oa.call(c.getElementsByTagName(b), 0)), d;
                if ((p = e[3]) && Ub && c.getElementsByClassName) return na.apply(d, oa.call(c.getElementsByClassName(p), 0)), d
            }
            return gb(b.replace(Ma, "$1"), c, d, f, l)
        },
        ua = function(b) {
            return function(c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        },
        Vb = function(b) {
            return function(c) {
                var d = c.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && c.type === b
            }
        },
        ia = function(b) {
            return X(function(c) {
                return c = +c, X(function(d, f) {
                    for (var e, g = b([], d.length, c), l = g.length; l--;) d[e = g[l]] && (d[e] = !(f[e] = d[e]))
                })
            })
        },
        Na = function(b, c, d) {
            if (b === c) return d;
            for (b = b.nextSibling; b;) {
                if (b === c) return -1;
                b = b.nextSibling
            }
            return 1
        },
        Pa = function(b, c) {
            var d, f, e, g, l, p, m;
            if (l = Wb[N][b]) return c ? 0 : l.slice(0);
            l = b;
            p = [];
            for (m = G.preFilter; l;) {
                if (!d || (f = Yc.exec(l))) f && (l = l.slice(f[0].length)), p.push(e = []);
                d = !1;
                if (f = Zc.exec(l)) e.push(d = new Xb(f.shift())), l = l.slice(d.length), d.type = f[0].replace(Ma, " ");
                for (g in G.filter)(f = Oa[g].exec(l)) &&
                    (!m[g] || (f = m[g](f, W, !0))) && (e.push(d = new Xb(f.shift())), l = l.slice(d.length), d.type = g, d.matches = f);
                if (!d) break
            }
            return c ? l.length : l ? F.error(b) : Wb(b, p).slice(0)
        },
        ib = function(b, c, d) {
            var f = c.dir,
                e = d && "parentNode" === c.dir,
                g = $c++;
            return c.first ? function(c, d, j) {
                for (; c = c[f];)
                    if (e || 1 === c.nodeType) return b(c, d, j)
            } : function(c, d, j) {
                if (j)
                    for (; c = c[f];) {
                        if ((e || 1 === c.nodeType) && b(c, d, j)) return c
                    } else
                        for (var z, p = va + " " + g + " ", m = p + hb; c = c[f];)
                            if (e || 1 === c.nodeType) {
                                if ((z = c[N]) === m) return c.sizset;
                                if ("string" == typeof z &&
                                    0 === z.indexOf(p)) {
                                    if (c.sizset) return c
                                } else {
                                    c[N] = m;
                                    if (b(c, d, j)) return c.sizset = !0, c;
                                    c.sizset = !1
                                }
                            }
            }
        },
        jb = function(b) {
            return 1 < b.length ? function(c, d, f) {
                for (var e = b.length; e--;)
                    if (!b[e](c, d, f)) return !1;
                return !0
            } : b[0]
        },
        Qa = function(b, c, d, f, e) {
            for (var g, l = [], p = 0, m = b.length, q = null != c; p < m; p++)
                if (g = b[p])
                    if (!d || d(g, f, e)) l.push(g), q && c.push(p);
            return l
        },
        kb = function(b, c, d, f, e, g) {
            return f && !f[N] && (f = kb(f)), e && !e[N] && (e = kb(e, g)), X(function(g, p, m, D) {
                if (!g || !e) {
                    var q, t, n = [],
                        r = [],
                        s = p.length;
                    if (!(t = g)) {
                        t = c || "*";
                        var A =
                            m.nodeType ? [m] : m,
                            y = [];
                        q = 0;
                        for (var L = A.length; q < L; q++) F(t, A[q], y, g);
                        t = y
                    }
                    A = b && (g || !c) ? Qa(t, n, b, m, D) : t;
                    y = d ? e || (g ? b : s || f) ? [] : p : A;
                    d && d(A, y, m, D);
                    if (f) {
                        t = Qa(y, r);
                        f(t, [], m, D);
                        for (m = t.length; m--;)
                            if (q = t[m]) y[r[m]] = !(A[r[m]] = q)
                    }
                    if (g)
                        for (m = b && y.length; m--;) {
                            if (q = y[m]) g[n[m]] = !(p[n[m]] = q)
                        } else y = Qa(y === p ? y.splice(s, y.length) : y), e ? e(null, p, y, D) : na.apply(p, y)
                }
            })
        },
        lb = function(b) {
            var c, d, f, e = b.length,
                g = G.relative[b[0].type];
            d = g || G.relative[" "];
            for (var l = g ? 1 : 0, p = ib(function(b) {
                return b === c
            }, d, !0), m = ib(function(b) {
                return -1 <
                    Yb.call(c, b)
            }, d, !0), q = [
                function(b, d, u) {
                    return !g && (u || d !== Ra) || ((c = d).nodeType ? p(b, d, u) : m(b, d, u))
                }
            ]; l < e; l++)
                if (d = G.relative[b[l].type]) q = [ib(jb(q), d)];
                else {
                    d = G.filter[b[l].type].apply(null, b[l].matches);
                    if (d[N]) {
                        for (f = ++l; f < e && !G.relative[b[f].type]; f++);
                        return kb(1 < l && jb(q), 1 < l && b.slice(0, l - 1).join("").replace(Ma, "$1"), d, l < f && lb(b.slice(l, f)), f < e && lb(b = b.slice(f)), f < e && b.join(""))
                    }
                    q.push(d)
                }
            return jb(q)
        },
        gb = function(b, c, d, f, e) {
            var g, l, p, m, q = Pa(b);
            if (!f && 1 === q.length) {
                l = q[0] = q[0].slice(0);
                if (2 < l.length &&
                    "ID" === (p = l[0]).type && 9 === c.nodeType && !e && G.relative[l[1].type]) {
                    c = G.find.ID(p.matches[0].replace(ja, ""), c, e)[0];
                    if (!c) return d;
                    b = b.slice(l.shift().length)
                }
                for (g = Oa.POS.test(b) ? -1 : l.length - 1; 0 <= g; g--) {
                    p = l[g];
                    if (G.relative[m = p.type]) break;
                    if (m = G.find[m])
                        if (f = m(p.matches[0].replace(ja, ""), mb.test(l[0].type) && c.parentNode || c, e)) {
                            l.splice(g, 1);
                            b = f.length && l.join("");
                            if (!b) return na.apply(d, oa.call(f, 0)), d;
                            break
                        }
                }
            }
            return nb(b, q)(f, c, e, d, mb.test(b)), d
        },
        Zb = function() {},
        hb, ob, G, Sa, La, Tb, nb, pb, wa, Ra, $b = !0,
        N = ("sizcache" + Math.random()).replace(".", ""),
        Xb = String,
        W = Wc.document,
        V = W.documentElement,
        va = 0,
        $c = 0,
        ad = [].pop,
        na = [].push,
        oa = [].slice,
        Yb = [].indexOf || function(b) {
            for (var c = 0, d = this.length; c < d; c++)
                if (this[c] === b) return c;
            return -1
        },
        X = function(b, c) {
            return b[N] = null == c || c, b
        },
        qb = function() {
            var b = {},
                c = [];
            return X(function(d, f) {
                return c.push(d) > G.cacheLength && delete b[c.shift()], b[d] = f
            }, b)
        },
        ac = qb(),
        Wb = qb(),
        bc = qb(),
        cc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
        "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        rb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + cc + ")|[^:]|\\\\.)*|.*))\\)|)",
        Ma = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Yc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Zc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        bd = RegExp(rb),
        Xc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        mb = /[\x20\t\r\n\f]*[+~]/,
        cd = /h\d/i,
        dd = /input|select|textarea|button/i,
        ja = /\\(?!\\)/g,
        Oa = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + cc),
            PSEUDO: RegExp("^" + rb),
            POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        ca = function(b) {
            var c = W.createElement("div");
            try {
                return b(c)
            } catch (d) {
                return !1
            } finally {}
        },
        ed = ca(function(b) {
            return b.appendChild(W.createComment("")), !b.getElementsByTagName("*").length
        }),
        fd = ca(function(b) {
            return b.innerHTML = "<a href='#'></a>", b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
        }),
        gd = ca(function(b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }),
        Ub = ca(function(b) {
            return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length)
        }),
        hd = ca(function(b) {
            b.id = N + 0;
            b.innerHTML = "<a name='" + N + "'></a><div name='" + N + "'></div>";
            V.insertBefore(b, V.firstChild);
            var c = W.getElementsByName &&
                W.getElementsByName(N).length === 2 + W.getElementsByName(N + 0).length;
            return ob = !W.getElementById(N), V.removeChild(b), c
        });
    try {
        oa.call(V.childNodes, 0)[0].nodeType
    } catch (Rd) {
        oa = function(b) {
            for (var c, d = []; c = this[b]; b++) d.push(c);
            return d
        }
    }
    F.matches = function(b, c) {
        return F(b, null, null, c)
    };
    F.matchesSelector = function(b, c) {
        return 0 < F(c, null, null, [b]).length
    };
    Sa = F.getText = function(b) {
        var c, d = "",
            f = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent) return b.textContent;
                for (b = b.firstChild; b; b =
                    b.nextSibling) d += Sa(b)
            } else {
                if (3 === c || 4 === c) return b.nodeValue
            } else
            for (; c = b[f]; f++) d += Sa(c);
        return d
    };
    La = F.isXML = function(b) {
        return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
    };
    Tb = F.contains = V.contains ? function(b, c) {
        var d = 9 === b.nodeType ? b.documentElement : b,
            f = c && c.parentNode;
        return b === f || !(!f || !(1 === f.nodeType && d.contains && d.contains(f)))
    } : V.compareDocumentPosition ? function(b, c) {
        return c && !!(b.compareDocumentPosition(c) & 16)
    } : function(b, c) {
        for (; c = c.parentNode;)
            if (c === b) return !0;
        return !1
    };
    F.attr = function(b, c) {
        var d, f = La(b);
        return f || (c = c.toLowerCase()), (d = G.attrHandle[c]) ? d(b) : f || gd ? b.getAttribute(c) : (d = b.getAttributeNode(c), d ? "boolean" == typeof b[c] ? b[c] ? c : null : d.specified ? d.value : null : null)
    };
    G = F.selectors = {
        cacheLength: 50,
        createPseudo: X,
        match: Oa,
        attrHandle: fd ? {} : {
            href: function(b) {
                return b.getAttribute("href", 2)
            },
            type: function(b) {
                return b.getAttribute("type")
            }
        },
        find: {
            ID: ob ? function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (b = c.getElementById(b)) && b.parentNode ? [b] : []
            } : function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : []
            },
            TAG: ed ? function(b, c) {
                if ("undefined" !== typeof c.getElementsByTagName) return c.getElementsByTagName(b)
            } : function(b, c) {
                var d = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (var f, e = [], g = 0; f = d[g]; g++) 1 === f.nodeType && e.push(f);
                    return e
                }
                return d
            },
            NAME: hd && function(b, c) {
                if ("undefined" !== typeof c.getElementsByName) return c.getElementsByName(name)
            },
            CLASS: Ub && function(b, c, d) {
                if ("undefined" !== typeof c.getElementsByClassName && !d) return c.getElementsByClassName(b)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(b) {
                return b[1] = b[1].replace(ja, ""), b[3] = (b[4] || b[5] || "").replace(ja, ""), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1] ? (b[2] || F.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) :
                    2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && F.error(b[0]), b
            },
            PSEUDO: function(b) {
                var c, d;
                if (Oa.CHILD.test(b[0])) return null;
                if (b[3]) b[2] = b[3];
                else if (c = b[4]) bd.test(c) && (d = Pa(c, !0)) && (d = c.indexOf(")", c.length - d) - c.length) && (c = c.slice(0, d), b[0] = b[0].slice(0, d)), b[2] = c;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: ob ? function(b) {
                return b = b.replace(ja, ""),
                    function(c) {
                        return c.getAttribute("id") === b
                    }
            } : function(b) {
                return b = b.replace(ja, ""),
                    function(c) {
                        return (c = "undefined" !== typeof c.getAttributeNode &&
                            c.getAttributeNode("id")) && c.value === b
                    }
            },
            TAG: function(b) {
                return "*" === b ? function() {
                    return !0
                } : (b = b.replace(ja, "").toLowerCase(), function(c) {
                    return c.nodeName && c.nodeName.toLowerCase() === b
                })
            },
            CLASS: function(b) {
                var c = ac[N][b];
                return c || (c = ac(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))),
                    function(b) {
                        return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                    }
            },
            ATTR: function(b, c, d) {
                return function(f) {
                    f = F.attr(f, b);
                    return null == f ? "!=" === c : c ? (f += "", "=" ===
                        c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && -1 < f.indexOf(d) : "$=" === c ? d && f.substr(f.length - d.length) === d : "~=" === c ? -1 < (" " + f + " ").indexOf(d) : "|=" === c ? f === d || f.substr(0, d.length + 1) === d + "-" : !1) : !0
                }
            },
            CHILD: function(b, c, d, f) {
                return "nth" === b ? function(b) {
                    var c, j;
                    c = b.parentNode;
                    if (1 === d && 0 === f) return !0;
                    if (c) {
                        j = 0;
                        for (c = c.firstChild; c && !(1 === c.nodeType && (j++, b === c)); c = c.nextSibling);
                    }
                    return j -= f, j === d || 0 === j % d && 0 <= j / d
                } : function(c) {
                    var d = c;
                    switch (b) {
                        case "only":
                        case "first":
                            for (; d = d.previousSibling;)
                                if (1 ===
                                    d.nodeType) return !1;
                            if ("first" === b) return !0;
                            d = c;
                        case "last":
                            for (; d = d.nextSibling;)
                                if (1 === d.nodeType) return !1;
                            return !0
                    }
                }
            },
            PSEUDO: function(b, c) {
                var d, f = G.pseudos[b] || G.setFilters[b.toLowerCase()] || F.error("unsupported pseudo: " + b);
                return f[N] ? f(c) : 1 < f.length ? (d = [b, b, "", c], G.setFilters.hasOwnProperty(b.toLowerCase()) ? X(function(b, d) {
                    for (var u, e = f(b, c), g = e.length; g--;) u = Yb.call(b, e[g]), b[u] = !(d[u] = e[g])
                }) : function(b) {
                    return f(b, 0, d)
                }) : f
            }
        },
        pseudos: {
            not: X(function(b) {
                var c = [],
                    d = [],
                    f = nb(b.replace(Ma, "$1"));
                return f[N] ? X(function(b, c, d, j) {
                    j = f(b, null, j, []);
                    for (var u = b.length; u--;)
                        if (d = j[u]) b[u] = !(c[u] = d)
                }) : function(b, u, e) {
                    return c[0] = b, f(c, null, e, d), !d.pop()
                }
            }),
            has: X(function(b) {
                return function(c) {
                    return 0 < F(b, c).length
                }
            }),
            contains: X(function(b) {
                return function(c) {
                    return -1 < (c.textContent || c.innerText || Sa(c)).indexOf(b)
                }
            }),
            enabled: function(b) {
                return !1 === b.disabled
            },
            disabled: function(b) {
                return !0 === b.disabled
            },
            checked: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" ===
                    c && !!b.selected
            },
            selected: function(b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            parent: function(b) {
                return !G.pseudos.empty(b)
            },
            empty: function(b) {
                var c;
                for (b = b.firstChild; b;) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c) return !1;
                    b = b.nextSibling
                }
                return !0
            },
            header: function(b) {
                return cd.test(b.nodeName)
            },
            text: function(b) {
                var c, d;
                return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (d = b.getAttribute("type")) || d.toLowerCase() === c)
            },
            radio: ua("radio"),
            checkbox: ua("checkbox"),
            file: ua("file"),
            password: ua("password"),
            image: ua("image"),
            submit: Vb("submit"),
            reset: Vb("reset"),
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            input: function(b) {
                return dd.test(b.nodeName)
            },
            focus: function(b) {
                var c = b.ownerDocument;
                return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href)
            },
            active: function(b) {
                return b === b.ownerDocument.activeElement
            },
            first: ia(function() {
                return [0]
            }),
            last: ia(function(b, c) {
                return [c - 1]
            }),
            eq: ia(function(b,
                c, d) {
                return [0 > d ? d + c : d]
            }),
            even: ia(function(b, c) {
                for (var d = 0; d < c; d += 2) b.push(d);
                return b
            }),
            odd: ia(function(b, c) {
                for (var d = 1; d < c; d += 2) b.push(d);
                return b
            }),
            lt: ia(function(b, c, d) {
                for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
                return b
            }),
            gt: ia(function(b, c, d) {
                for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
                return b
            })
        }
    };
    pb = V.compareDocumentPosition ? function(b, c) {
        return b === c ? (wa = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1
    } : function(b, c) {
        if (b === c) return wa = !0, 0;
        if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
        var d, f, e = [],
            g = [];
        d = b.parentNode;
        f = c.parentNode;
        var l = d;
        if (d === f) return Na(b, c);
        if (!d) return -1;
        if (!f) return 1;
        for (; l;) e.unshift(l), l = l.parentNode;
        for (l = f; l;) g.unshift(l), l = l.parentNode;
        d = e.length;
        f = g.length;
        for (l = 0; l < d && l < f; l++)
            if (e[l] !== g[l]) return Na(e[l], g[l]);
        return l === d ? Na(b, g[l], -1) : Na(e[l], c, 1)
    };
    [0, 0].sort(pb);
    $b = !wa;
    F.uniqueSort = function(b) {
        var c, d = 1;
        wa = $b;
        b.sort(pb);
        if (wa)
            for (; c = b[d]; d++) c === b[d - 1] && b.splice(d--, 1);
        return b
    };
    F.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    nb = F.compile = function(b, c) {
        var d, f = [],
            e = [],
            g = bc[N][b];
        if (!g) {
            c || (c = Pa(b));
            for (d = c.length; d--;) g = lb(c[d]), g[N] ? f.push(g) : e.push(g);
            var l = 0 < f.length,
                p = 0 < e.length,
                m = function(b, c, d, j, u) {
                    var g, z, q = [],
                        t = 0,
                        n = "0",
                        D = b && [],
                        r = null != u,
                        s = Ra,
                        y = b || p && G.find.TAG("*", u && c.parentNode || c),
                        A = va += null == s ? 1 : Math.E;
                    for (r && (Ra = c !== W && c, hb = m.el); null != (u = y[n]); n++) {
                        if (p && u) {
                            for (g = 0; z = e[g]; g++)
                                if (z(u, c, d)) {
                                    j.push(u);
                                    break
                                }
                            r && (va = A, hb =
                                ++m.el)
                        }
                        l && ((u = !z && u) && t--, b && D.push(u))
                    }
                    t += n;
                    if (l && n !== t) {
                        for (g = 0; z = f[g]; g++) z(D, q, c, d);
                        if (b) {
                            if (0 < t)
                                for (; n--;)!D[n] && !q[n] && (q[n] = ad.call(j));
                            q = Qa(q)
                        }
                        na.apply(j, q);
                        r && !b && 0 < q.length && 1 < t + f.length && F.uniqueSort(j)
                    }
                    return r && (va = A, Ra = s), D
                };
            d = (m.el = 0, l ? X(m) : m);
            g = bc(b, d)
        }
        return g
    };
    if (W.querySelectorAll) {
        var dc, id = gb,
            jd = /'|\\/g,
            kd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            Y = [":focus"],
            Ta = [":active", ":focus"],
            Ua = V.matchesSelector || V.mozMatchesSelector || V.webkitMatchesSelector || V.oMatchesSelector ||
            V.msMatchesSelector;
        ca(function(b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || Y.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || Y.push(":checked")
        });
        ca(function(b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && Y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || Y.push(":enabled",
                ":disabled")
        });
        Y = RegExp(Y.join("|"));
        gb = function(b, c, d, f, e) {
            if (!f && !e && (!Y || !Y.test(b))) {
                var g, l, p = !0,
                    m = N;
                l = c;
                g = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    g = Pa(b);
                    (p = c.getAttribute("id")) ? m = p.replace(jd, "\\$&"): c.setAttribute("id", m);
                    m = "[id='" + m + "'] ";
                    for (l = g.length; l--;) g[l] = m + g[l].join("");
                    l = mb.test(b) && c.parentNode || c;
                    g = g.join(",")
                }
                if (g) try {
                    return na.apply(d, oa.call(l.querySelectorAll(g), 0)), d
                } catch (q) {} finally {
                    p || c.removeAttribute("id")
                }
            }
            return id(b, c, d, f, e)
        };
        Ua &&
            (ca(function(b) {
                dc = Ua.call(b, "div");
                try {
                    Ua.call(b, "[test!='']:sizzle"), Ta.push("!=", rb)
                } catch (c) {}
            }), Ta = RegExp(Ta.join("|")), F.matchesSelector = function(b, c) {
                c = c.replace(kd, "='$1']");
                if (!La(b) && !Ta.test(c) && (!Y || !Y.test(c))) try {
                    var d = Ua.call(b, c);
                    if (d || dc || b.document && 11 !== b.document.nodeType) return d
                } catch (f) {}
                return 0 < F(c, null, null, [b]).length
            })
    }
    G.pseudos.nth = G.pseudos.eq;
    G.filters = Zb.prototype = G.pseudos;
    G.setFilters = new Zb;
    F.attr = f.attr;
    f.find = F;
    f.expr = F.selectors;
    f.expr[":"] = f.expr.pseudos;
    f.unique =
        F.uniqueSort;
    f.text = F.getText;
    f.isXMLDoc = F.isXML;
    f.contains = F.contains;
    var ld = /Until$/,
        md = /^(?:parents|prev(?:Until|All))/,
        vc = /^.[^:#\[\.,]*$/,
        ec = f.expr.match.needsContext,
        nd = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function(b) {
            var c, d, e, g, p, l, m = this;
            if ("string" != typeof b) return f(b).filter(function() {
                c = 0;
                for (d = m.length; c < d; c++)
                    if (f.contains(m[c], this)) return !0
            });
            l = this.pushStack("", "find", b);
            c = 0;
            for (d = this.length; c < d; c++)
                if (e = l.length, f.find(b, this[c], l), 0 < c)
                    for (g = e; g < l.length; g++)
                        for (p =
                            0; p < e; p++)
                            if (l[p] === l[g]) {
                                l.splice(g--, 1);
                                break
                            }
            return l
        },
        has: function(b) {
            var c, d = f(b, this),
                e = d.length;
            return this.filter(function() {
                for (c = 0; c < e; c++)
                    if (f.contains(this, d[c])) return !0
            })
        },
        not: function(b) {
            return this.pushStack(r(this, b, !1), "not", b)
        },
        filter: function(b) {
            return this.pushStack(r(this, b, !0), "filter", b)
        },
        is: function(b) {
            return !!b && ("string" == typeof b ? ec.test(b) ? 0 <= f(b, this.context).index(this[0]) : 0 < f.filter(b, this).length : 0 < this.filter(b).length)
        },
        closest: function(b, c) {
            for (var d, e = 0, g = this.length,
                p = [], l = ec.test(b) || "string" != typeof b ? f(b, c || this.context) : 0; e < g; e++)
                for (d = this[e]; d && d.ownerDocument && d !== c && 11 !== d.nodeType;) {
                    if (l ? -1 < l.index(d) : f.find.matchesSelector(d, b)) {
                        p.push(d);
                        break
                    }
                    d = d.parentNode
                }
            return p = 1 < p.length ? f.unique(p) : p, this.pushStack(p, "closest", b)
        },
        index: function(b) {
            return b ? "string" == typeof b ? f.inArray(this[0], f(b)) : f.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(b, c) {
            var d = "string" == typeof b ? f(b, c) : f.makeArray(b && b.nodeType ? [b] : b),
                e = f.merge(this.get(), d);
            return this.pushStack(x(d[0]) || x(e[0]) ? e : f.unique(e))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    f.fn.andSelf = f.fn.addBack;
    f.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return f.dir(b, "parentNode")
        },
        parentsUntil: function(b, c, d) {
            return f.dir(b, "parentNode", d)
        },
        next: function(b) {
            return m(b, "nextSibling")
        },
        prev: function(b) {
            return m(b, "previousSibling")
        },
        nextAll: function(b) {
            return f.dir(b,
                "nextSibling")
        },
        prevAll: function(b) {
            return f.dir(b, "previousSibling")
        },
        nextUntil: function(b, c, d) {
            return f.dir(b, "nextSibling", d)
        },
        prevUntil: function(b, c, d) {
            return f.dir(b, "previousSibling", d)
        },
        siblings: function(b) {
            return f.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return f.sibling(b.firstChild)
        },
        contents: function(b) {
            return f.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : f.merge([], b.childNodes)
        }
    }, function(b, c) {
        f.fn[b] = function(d, e) {
            var g = f.map(this, c, d);
            return ld.test(b) ||
                (e = d), e && "string" == typeof e && (g = f.filter(e, g)), g = 1 < this.length && !nd[b] ? f.unique(g) : g, 1 < this.length && md.test(b) && (g = g.reverse()), this.pushStack(g, b, Z.call(arguments).join(","))
        }
    });
    f.extend({
        filter: function(b, c, d) {
            return d && (b = ":not(" + b + ")"), 1 === c.length ? f.find.matchesSelector(c[0], b) ? [c[0]] : [] : f.find.matches(b, c)
        },
        dir: function(b, d, e) {
            var g = [];
            for (b = b[d]; b && 9 !== b.nodeType && (e === c || 1 !== b.nodeType || !f(b).is(e));) 1 === b.nodeType && g.push(b), b = b[d];
            return g
        },
        sibling: function(b, c) {
            for (var d = []; b; b = b.nextSibling) 1 ===
                b.nodeType && b !== c && d.push(b);
            return d
        }
    });
    var yb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        od = / jQuery\d+="(?:null|\d+)"/g,
        sb = /^\s+/,
        fc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        gc = /<([\w:]+)/,
        pd = /<tbody/i,
        qd = /<|&#?\w+;/,
        rd = /<(?:script|style|link)/i,
        sd = /<(?:script|object|embed|option|style)/i,
        tb = RegExp("<(?:" + yb + ")[\\s/>]", "i"),
        zb = /^(?:checkbox|radio)$/,
        hc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        td = /\/(java|ecma)script/i,
        ud = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        T = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        ic = y(C),
        ub = ic.appendChild(C.createElement("div"));
    T.optgroup =
        T.option;
    T.tbody = T.tfoot = T.colgroup = T.caption = T.thead;
    T.th = T.td;
    f.support.htmlSerialize || (T._default = [1, "X<div>", "</div>"]);
    f.fn.extend({
        text: function(b) {
            return f.access(this, function(b) {
                return b === c ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(b))
            }, null, b, arguments.length)
        },
        wrapAll: function(b) {
            if (f.isFunction(b)) return this.each(function(c) {
                f(this).wrapAll(b.call(this, c))
            });
            if (this[0]) {
                var c = f(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return f.isFunction(b) ? this.each(function(c) {
                f(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = f(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = f.isFunction(b);
            return this.each(function(d) {
                f(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") ||
                    f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
            })
        },
        before: function() {
            if (!x(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = f.clean(arguments);
                return this.pushStack(f.merge(b,
                    this), "before", this.selector)
            }
        },
        after: function() {
            if (!x(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = f.clean(arguments);
                return this.pushStack(f.merge(this, b), "after", this.selector)
            }
        },
        remove: function(b, c) {
            for (var d, e = 0; null != (d = this[e]); e++)
                if (!b || f.filter(b, [d]).length)!c && 1 === d.nodeType && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var b,
                c = 0; null != (b = this[c]); c++)
                for (1 === b.nodeType && f.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function(b, c) {
            return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function() {
                return f.clone(this, b, c)
            })
        },
        html: function(b) {
            return f.access(this, function(b) {
                var d = this[0] || {},
                    e = 0,
                    u = this.length;
                if (b === c) return 1 === d.nodeType ? d.innerHTML.replace(od, "") : c;
                if ("string" == typeof b && !rd.test(b) && (f.support.htmlSerialize || !tb.test(b)) && (f.support.leadingWhitespace || !sb.test(b)) &&
                    !T[(gc.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(fc, "<$1></$2>");
                    try {
                        for (; e < u; e++) d = this[e] || {}, 1 === d.nodeType && (f.cleanData(d.getElementsByTagName("*")), d.innerHTML = b);
                        d = 0
                    } catch (g) {}
                }
                d && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function(b) {
            return x(this[0]) ? this.length ? this.pushStack(f(f.isFunction(b) ? b() : b), "replaceWith", b) : this : f.isFunction(b) ? this.each(function(c) {
                var d = f(this),
                    e = d.html();
                d.replaceWith(b.call(this, c, e))
            }) : ("string" != typeof b && (b = f(b).detach()), this.each(function() {
                var c =
                    this.nextSibling,
                    d = this.parentNode;
                f(this).remove();
                c ? f(c).before(b) : f(d).append(b)
            }))
        },
        detach: function(b) {
            return this.remove(b, !0)
        },
        domManip: function(b, d, e) {
            b = [].concat.apply([], b);
            var g, p, m, l = 0,
                q = b[0],
                t = [],
                n = this.length;
            if (!f.support.checkClone && 1 < n && "string" == typeof q && hc.test(q)) return this.each(function() {
                f(this).domManip(b, d, e)
            });
            if (f.isFunction(q)) return this.each(function(g) {
                var l = f(this);
                b[0] = q.call(this, g, d ? l.html() : c);
                l.domManip(b, d, e)
            });
            if (this[0]) {
                g = f.buildFragment(b, this, t);
                m = g.fragment;
                p = m.firstChild;
                1 === m.childNodes.length && (m = p);
                if (p) {
                    d = d && f.nodeName(p, "tr");
                    for (g = g.cacheable || n - 1; l < n; l++) e.call(d && f.nodeName(this[l], "table") ? this[l].getElementsByTagName("tbody")[0] || this[l].appendChild(this[l].ownerDocument.createElement("tbody")) : this[l], l === g ? m : f.clone(m, !0, !0))
                }
                m = p = null;
                t.length && f.each(t, function(b, c) {
                    c.src ? f.ajax ? f.ajax({
                        url: c.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : f.error("no ajax") : f.globalEval((c.text || c.textContent || c.innerHTML || "").replace(ud,
                        ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    f.buildFragment = function(b, d, e) {
        var g, p, m, l = b[0];
        return d = d || C, d = !d.nodeType && d[0] || d, d = d.ownerDocument || d, 1 === b.length && "string" == typeof l && 512 > l.length && d === C && "<" === l.charAt(0) && !sd.test(l) && (f.support.checkClone || !hc.test(l)) && (f.support.html5Clone || !tb.test(l)) && (p = !0, g = f.fragments[l], m = g !== c), g || (g = d.createDocumentFragment(), f.clean(b, d, g, e), p && (f.fragments[l] = m && g)), {
            fragment: g,
            cacheable: p
        }
    };
    f.fragments = {};
    f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        f.fn[b] = function(d) {
            var e, g = 0,
                p = [];
            d = f(d);
            var l = d.length;
            e = 1 === this.length && this[0].parentNode;
            if ((null == e || e && 11 === e.nodeType && 1 === e.childNodes.length) && 1 === l) return d[c](this[0]), this;
            for (; g < l; g++) e = (0 < g ? this.clone(!0) : this).get(), f(d[g])[c](e), p = p.concat(e);
            return this.pushStack(p, b, d.selector)
        }
    });
    f.extend({
        clone: function(b, c, d) {
            var e, g, p, l;
            f.support.html5Clone || f.isXMLDoc(b) || !tb.test("<" + b.nodeName +
                ">") ? l = b.cloneNode(!0) : (ub.innerHTML = b.outerHTML, ub.removeChild(l = ub.firstChild));
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !f.isXMLDoc(b)) {
                s(b, l);
                e = B(b);
                g = B(l);
                for (p = 0; e[p]; ++p) g[p] && s(e[p], g[p])
            }
            if (c && (A(b, l), d)) {
                e = B(b);
                g = B(l);
                for (p = 0; e[p]; ++p) A(e[p], g[p])
            }
            return l
        },
        clean: function(b, c, d, e) {
            var g, p, l, m, q, t, n, r = c === C && ic,
                s = [];
            if (!c || "undefined" == typeof c.createDocumentFragment) c = C;
            for (g = 0; null != (l = b[g]); g++)
                if ("number" == typeof l && (l += ""), l) {
                    if ("string" ==
                        typeof l)
                        if (qd.test(l)) {
                            r = r || y(c);
                            t = c.createElement("div");
                            r.appendChild(t);
                            l = l.replace(fc, "<$1></$2>");
                            p = (gc.exec(l) || ["", ""])[1].toLowerCase();
                            m = T[p] || T._default;
                            q = m[0];
                            for (t.innerHTML = m[1] + l + m[2]; q--;) t = t.lastChild;
                            if (!f.support.tbody) {
                                q = pd.test(l);
                                m = "table" === p && !q ? t.firstChild && t.firstChild.childNodes : "<table>" === m[1] && !q ? t.childNodes : [];
                                for (p = m.length - 1; 0 <= p; --p) f.nodeName(m[p], "tbody") && !m[p].childNodes.length && m[p].parentNode.removeChild(m[p])
                            }!f.support.leadingWhitespace && sb.test(l) && t.insertBefore(c.createTextNode(sb.exec(l)[0]),
                                t.firstChild);
                            l = t.childNodes;
                            t.parentNode.removeChild(t)
                        } else l = c.createTextNode(l);
                    l.nodeType ? s.push(l) : f.merge(s, l)
                }
            t && (l = t = r = null);
            if (!f.support.appendChecked)
                for (g = 0; null != (l = s[g]); g++) f.nodeName(l, "input") ? E(l) : "undefined" != typeof l.getElementsByTagName && f.grep(l.getElementsByTagName("input"), E);
            if (d) {
                b = function(b) {
                    if (!b.type || td.test(b.type)) return e ? e.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b)
                };
                for (g = 0; null != (l = s[g]); g++)
                    if (!f.nodeName(l, "script") || !b(l)) d.appendChild(l),
                        "undefined" != typeof l.getElementsByTagName && (n = f.grep(f.merge([], l.getElementsByTagName("script")), b), s.splice.apply(s, [g + 1, 0].concat(n)), g += n.length)
            }
            return s
        },
        cleanData: function(b, c) {
            for (var d, e, g, p, l = 0, m = f.expando, q = f.cache, t = f.support.deleteExpando, n = f.event.special; null != (g = b[l]); l++)
                if (c || f.acceptData(g))
                    if (d = (e = g[m]) && q[e]) {
                        if (d.events)
                            for (p in d.events) n[p] ? f.event.remove(g, p) : f.removeEvent(g, p, d.handle);
                        q[e] && (delete q[e], t ? delete g[m] : g.removeAttribute ? g.removeAttribute(m) : g[m] = null, f.deletedIds.push(e))
                    }
        }
    });
    var Va, da;
    f.uaMatch = function(b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    };
    Va = f.uaMatch(Ac.userAgent);
    da = {};
    Va.browser && (da[Va.browser] = !0, da.version = Va.version);
    da.chrome ? da.webkit = !0 : da.webkit && (da.safari = !0);
    f.browser = da;
    f.sub = function() {
        function b(c, d) {
            return new b.fn.init(c,
                d)
        }
        f.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function(d, e) {
            return e && e instanceof f && !(e instanceof b) && (e = b(e)), f.fn.init.call(this, d, e, c)
        };
        b.fn.init.prototype = b.fn;
        var c = b(C);
        return b
    };
    var P, la, ma, vb = /alpha\([^)]*\)/i,
        vd = /opacity=([^)]*)/,
        wd = /^(top|right|bottom|left)$/,
        xd = /^(none|table(?!-c[ea]).+)/,
        jc = /^margin/,
        wc = RegExp("^(" + Fa + ")(.*)$", "i"),
        ya = RegExp("^(" + Fa + ")(?!px)[a-z%]+$", "i"),
        yd = RegExp("^([-+])=(" + Fa + ")", "i"),
        Ya = {},
        zd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        kc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ea = ["Top", "Right", "Bottom", "Left"],
        Ab = ["Webkit", "O", "Moz", "ms"],
        Ad = f.fn.toggle;
    f.fn.extend({
        css: function(b, d) {
            return f.access(this, function(b, d, e) {
                return e !== c ? f.style(b, d, e) : f.css(b, d)
            }, b, d, 1 < arguments.length)
        },
        show: function() {
            return t(this, !0)
        },
        hide: function() {
            return t(this)
        },
        toggle: function(b, c) {
            var d = "boolean" == typeof b;
            return f.isFunction(b) && f.isFunction(c) ? Ad.apply(this, arguments) : this.each(function() {
                (d ? b : q(this)) ? f(this).show():
                    f(this).hide()
            })
        }
    });
    f.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var d = P(b, "opacity");
                        return "" === d ? "1" : d
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(b, d, e, g) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var m, q, l, t = f.camelCase(d),
                    n = b.style;
                d = f.cssProps[t] || (f.cssProps[t] = p(n, t));
                l = f.cssHooks[d] || f.cssHooks[t];
                if (e === c) return l && "get" in l && (m = l.get(b, !1, g)) !== c ? m : n[d];
                q = typeof e;
                "string" === q && (m = yd.exec(e)) && (e = (m[1] + 1) * m[2] + parseFloat(f.css(b, d)), q = "number");
                if (!(null == e || "number" === q && isNaN(e)))
                    if ("number" === q && !f.cssNumber[t] && (e += "px"), !l || !("set" in l) || (e = l.set(b, e, g)) !== c) try {
                        n[d] = e
                    } catch (r) {}
            }
        },
        css: function(b, d, e, g) {
            var m, q, l, t = f.camelCase(d);
            return d = f.cssProps[t] || (f.cssProps[t] = p(b.style, t)), l = f.cssHooks[d] || f.cssHooks[t], l && "get" in l && (m = l.get(b, !0, g)), m === c && (m = P(b, d)), "normal" === m && d in kc && (m = kc[d]), e || g !== c ? (q = parseFloat(m), e ||
                f.isNumeric(q) ? q || 0 : m) : m
        },
        swap: function(b, c, d) {
            var f, e = {};
            for (f in c) e[f] = b.style[f], b.style[f] = c[f];
            d = d.call(b);
            for (f in c) b.style[f] = e[f];
            return d
        }
    });
    b.getComputedStyle ? P = function(c, d) {
        var e, g, p, m, l = b.getComputedStyle(c, null),
            q = c.style;
        return l && (e = l[d], "" === e && !f.contains(c.ownerDocument, c) && (e = f.style(c, d)), ya.test(e) && jc.test(d) && (g = q.width, p = q.minWidth, m = q.maxWidth, q.minWidth = q.maxWidth = q.width = e, e = l.width, q.width = g, q.minWidth = p, q.maxWidth = m)), e
    } : C.documentElement.currentStyle && (P = function(b,
        c) {
        var d, f, e = b.currentStyle && b.currentStyle[c],
            g = b.style;
        return null == e && g && g[c] && (e = g[c]), ya.test(e) && !wd.test(c) && (d = g.left, f = b.runtimeStyle && b.runtimeStyle.left, f && (b.runtimeStyle.left = b.currentStyle.left), g.left = "fontSize" === c ? "1em" : e, e = g.pixelLeft + "px", g.left = d, f && (b.runtimeStyle.left = f)), "" === e ? "auto" : e
    });
    f.each(["height", "width"], function(b, c) {
        f.cssHooks[c] = {
            get: function(b, d, e) {
                if (d) return 0 === b.offsetWidth && xd.test(P(b, "display")) ? f.swap(b, zd, function() {
                    return M(b, c, e)
                }) : M(b, c, e)
            },
            set: function(b,
                d, e) {
                return L(b, d, e ? Q(b, c, e, f.support.boxSizing && "border-box" === f.css(b, "boxSizing")) : 0)
            }
        }
    });
    f.support.opacity || (f.cssHooks.opacity = {
        get: function(b, c) {
            return vd.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
        },
        set: function(b, c) {
            var d = b.style,
                e = b.currentStyle,
                g = f.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                p = e && e.filter || d.filter || "";
            d.zoom = 1;
            if (!(1 <= c && "" === f.trim(p.replace(vb, "")) && d.removeAttribute && (d.removeAttribute("filter"), e && !e.filter))) d.filter =
                vb.test(p) ? p.replace(vb, g) : p + " " + g
        }
    });
    f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function(b, c) {
                return f.swap(b, {
                    display: "inline-block"
                }, function() {
                    if (c) return P(b, "marginRight")
                })
            }
        });
        !f.support.pixelPosition && f.fn.position && f.each(["top", "left"], function(b, c) {
            f.cssHooks[c] = {
                get: function(b, d) {
                    if (d) {
                        var e = P(b, c);
                        return ya.test(e) ? f(b).position()[c] + "px" : e
                    }
                }
            }
        })
    });
    f.expr && f.expr.filters && (f.expr.filters.hidden = function(b) {
        return 0 === b.offsetWidth && 0 === b.offsetHeight || !f.support.reliableHiddenOffsets &&
            "none" === (b.style && b.style.display || P(b, "display"))
    }, f.expr.filters.visible = function(b) {
        return !f.expr.filters.hidden(b)
    });
    f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        f.cssHooks[b + c] = {
            expand: function(d) {
                var f = "string" == typeof d ? d.split(" ") : [d],
                    e = {};
                for (d = 0; 4 > d; d++) e[b + ea[d] + c] = f[d] || f[d - 2] || f[0];
                return e
            }
        };
        jc.test(b) || (f.cssHooks[b + c].set = L)
    });
    var Bd = /%20/g,
        xc = /\[\]$/,
        lc = /\r?\n/g,
        Cd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Dd = /^(?:select|textarea)/i;
    f.fn.extend({
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Dd.test(this.nodeName) || Cd.test(this.type))
            }).map(function(b, c) {
                var d = f(this).val();
                return null == d ? null : f.isArray(d) ? f.map(d, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(lc, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(lc, "\r\n")
                }
            }).get()
        }
    });
    f.param = function(b, d) {
        var e, g = [],
            p = function(b, c) {
                c = f.isFunction(c) ? c() : null == c ? "" : c;
                g[g.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
            };
        d === c && (d = f.ajaxSettings && f.ajaxSettings.traditional);
        if (f.isArray(b) || b.jquery && !f.isPlainObject(b)) f.each(b, function() {
            p(this.name, this.value)
        });
        else
            for (e in b) za(e, b[e], d, p);
        return g.join("&").replace(Bd, "+")
    };
    var pa, ka, Ed = /#.*$/,
        Fd = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Gd = /^(?:GET|HEAD)$/,
        Hd = /^\/\//,
        mc = /\?/,
        Id = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Jd = /([?&])_=[^&]*/,
        nc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        oc = f.fn.load,
        $a = {},
        pc = {},
        qc = ["*/"] + ["*"];
    try {
        ka = zc.href
    } catch (Sd) {
        ka = C.createElement("a"), ka.href = "", ka = ka.href
    }
    pa = nc.exec(ka.toLowerCase()) || [];
    f.fn.load = function(b, d, e) {
        if ("string" != typeof b && oc) return oc.apply(this, arguments);
        if (!this.length) return this;
        var g, p, m, l = this,
            q = b.indexOf(" ");
        return 0 <= q && (g = b.slice(q, b.length), b = b.slice(0, q)), f.isFunction(d) ? (e = d, d = c) : d && "object" == typeof d && (p = "POST"), f.ajax({
            url: b,
            type: p,
            dataType: "html",
            data: d,
            complete: function(b, c) {
                e && l.each(e, m || [b.responseText, c, b])
            }
        }).done(function(b) {
            m = arguments;
            l.html(g ? f("<div>").append(b.replace(Id, "")).find(g) : b)
        }), this
    };
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        f.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    f.each(["get", "post"], function(b, d) {
        f[d] = function(b, e, g, p) {
            return f.isFunction(e) && (p = p || g, g = e, e = c), f.ajax({
                type: d,
                url: b,
                data: e,
                success: g,
                dataType: p
            })
        }
    });
    f.extend({
        getScript: function(b, d) {
            return f.get(b,
                c, d, "script")
        },
        getJSON: function(b, c, d) {
            return f.get(b, c, d, "json")
        },
        ajaxSetup: function(b, c) {
            return c ? Bb(b, f.ajaxSettings) : (c = b, b = f.ajaxSettings), Bb(b, c), b
        },
        ajaxSettings: {
            url: ka,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(pa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": qc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": b.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: I($a),
        ajaxTransport: I(pc),
        ajax: function(b, d) {
            function e(b, d, j, m) {
                var u, t, r, z, D, E = d;
                if (2 !== Q) {
                    Q = 2;
                    q && clearTimeout(q);
                    l = c;
                    p = m || "";
                    H.readyState = 0 < b ? 4 : 0;
                    if (j) {
                        z = s;
                        m = H;
                        var C, M, I, Za, ab = z.contents,
                            F = z.dataTypes,
                            K = z.responseFields;
                        for (M in K) M in j && (m[K[M]] = j[M]);
                        for (;
                            "*" === F[0];) F.shift(),
                            C === c && (C = z.mimeType || m.getResponseHeader("content-type"));
                        if (C)
                            for (M in ab)
                                if (ab[M] && ab[M].test(C)) {
                                    F.unshift(M);
                                    break
                                }
                        if (F[0] in j) I = F[0];
                        else {
                            for (M in j) {
                                if (!F[0] || z.converters[M + " " + F[0]]) {
                                    I = M;
                                    break
                                }
                                Za || (Za = M)
                            }
                            I = I || Za
                        }
                        z = j = I ? (I !== F[0] && F.unshift(I), j[I]) : void 0
                    }
                    if (200 <= b && 300 > b || 304 === b)
                        if (s.ifModified && (D = H.getResponseHeader("Last-Modified"), D && (f.lastModified[g] = D), D = H.getResponseHeader("Etag"), D && (f.etag[g] = D)), 304 === b) E = "notmodified", u = !0;
                        else {
                            var G;
                            a: {
                                u = s;
                                t = z;
                                var U, E = u.dataTypes.slice();
                                j =
                                    E[0];
                                C = {};
                                M = 0;
                                u.dataFilter && (t = u.dataFilter(t, u.dataType));
                                if (E[1])
                                    for (G in u.converters) C[G.toLowerCase()] = u.converters[G];
                                for (; r = E[++M];)
                                    if ("*" !== r) {
                                        if ("*" !== j && j !== r) {
                                            G = C[j + " " + r] || C["* " + r];
                                            if (!G)
                                                for (U in C)
                                                    if (D = U.split(" "), D[1] === r && (G = C[j + " " + D[0]] || C["* " + D[0]])) {
                                                        !0 === G ? G = C[U] : !0 !== C[U] && (r = D[0], E.splice(M--, 0, r));
                                                        break
                                                    }
                                            if (!0 !== G)
                                                if (G && u["throws"]) t = G(t);
                                                else try {
                                                    t = G(t)
                                                } catch (xa) {
                                                    G = {
                                                        state: "parsererror",
                                                        error: G ? xa : "No conversion from " + j + " to " + r
                                                    };
                                                    break a
                                                }
                                        }
                                        j = r
                                    }
                                G = {
                                    state: "success",
                                    data: t
                                }
                            }
                            u =
                                G;
                            E = u.state;
                            t = u.data;
                            r = u.error;
                            u = !r
                        } else if (r = E, !E || b) E = "error", 0 > b && (b = 0);
                    H.status = b;
                    H.statusText = (d || E) + "";
                    u ? L.resolveWith(y, [t, E, H]) : L.rejectWith(y, [H, E, r]);
                    H.statusCode(B);
                    B = c;
                    n && A.trigger("ajax" + (u ? "Success" : "Error"), [H, s, u ? t : r]);
                    x.fireWith(y, [H, E]);
                    n && (A.trigger("ajaxComplete", [H, s]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (d = b, b = c);
            d = d || {};
            var g, p, m, l, q, t, n, r, s = f.ajaxSetup({}, d),
                y = s.context || s,
                A = y !== s && (y.nodeType || y instanceof f) ? f(y) : f.event,
                L = f.Deferred(),
                x = f.Callbacks("once memory"),
                B = s.statusCode || {},
                E = {},
                C = {},
                Q = 0,
                M = "canceled",
                H = {
                    readyState: 0,
                    setRequestHeader: function(b, c) {
                        if (!Q) {
                            var d = b.toLowerCase();
                            b = C[d] = C[d] || b;
                            E[b] = c
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === Q ? p : null
                    },
                    getResponseHeader: function(b) {
                        var d;
                        if (2 === Q) {
                            if (!m)
                                for (m = {}; d = Fd.exec(p);) m[d[1].toLowerCase()] = d[2];
                            d = m[b.toLowerCase()]
                        }
                        return d === c ? null : d
                    },
                    overrideMimeType: function(b) {
                        return Q || (s.mimeType = b), this
                    },
                    abort: function(b) {
                        return b = b || M, l && l.abort(b), e(0, b), this
                    }
                };
            L.promise(H);
            H.success = H.done;
            H.error = H.fail;
            H.complete = x.add;
            H.statusCode = function(b) {
                if (b) {
                    var c;
                    if (2 > Q)
                        for (c in b) B[c] = [B[c], b[c]];
                    else c = b[H.status], H.always(c)
                }
                return this
            };
            s.url = ((b || s.url) + "").replace(Ed, "").replace(Hd, pa[1] + "//");
            s.dataTypes = f.trim(s.dataType || "*").toLowerCase().split(fa);
            null == s.crossDomain && (t = nc.exec(s.url.toLowerCase()) || !1, s.crossDomain = t && t.join(":") + (t[3] ? "" : "http:" === t[1] ? 80 : 443) !== pa.join(":") + (pa[3] ? "" : "http:" === pa[1] ? 80 : 443));
            s.data && s.processData && "string" != typeof s.data && (s.data = f.param(s.data,
                s.traditional));
            U($a, s, d, H);
            if (2 === Q) return H;
            n = s.global;
            s.type = s.type.toUpperCase();
            s.hasContent = !Gd.test(s.type);
            n && 0 === f.active++ && f.event.trigger("ajaxStart");
            if (!s.hasContent && (s.data && (s.url += (mc.test(s.url) ? "&" : "?") + s.data, delete s.data), g = s.url, !1 === s.cache)) {
                t = f.now();
                var I = s.url.replace(Jd, "$1_=" + t);
                s.url = I + (I === s.url ? (mc.test(s.url) ? "&" : "?") + "_=" + t : "")
            }(s.data && s.hasContent && !1 !== s.contentType || d.contentType) && H.setRequestHeader("Content-Type", s.contentType);
            s.ifModified && (g = g || s.url, f.lastModified[g] &&
                H.setRequestHeader("If-Modified-Since", f.lastModified[g]), f.etag[g] && H.setRequestHeader("If-None-Match", f.etag[g]));
            H.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + qc + "; q=0.01" : "") : s.accepts["*"]);
            for (r in s.headers) H.setRequestHeader(r, s.headers[r]);
            if (!s.beforeSend || !1 !== s.beforeSend.call(y, H, s) && 2 !== Q) {
                M = "abort";
                for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) H[r](s[r]);
                if (l = U(pc, s, d, H)) {
                    H.readyState = 1;
                    n && A.trigger("ajaxSend", [H,
                        s
                    ]);
                    s.async && 0 < s.timeout && (q = setTimeout(function() {
                        H.abort("timeout")
                    }, s.timeout));
                    try {
                        Q = 1, l.send(E, e)
                    } catch (F) {
                        if (2 > Q) e(-1, F);
                        else throw F;
                    }
                } else e(-1, "No Transport");
                return H
            }
            return H.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var rc = [],
        Kd = /\?/,
        Wa = /(=)\?(?=&|$)|\?\?/,
        Ld = f.now();
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = rc.pop() || f.expando + "_" + Ld++;
            return this[b] = !0, b
        }
    });
    f.ajaxPrefilter("json jsonp", function(d, e, g) {
        var p, m, q, l = d.data,
            t = d.url,
            n = !1 !== d.jsonp,
            s = n && Wa.test(t),
            r = n &&
            !s && "string" == typeof l && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Wa.test(l);
        if ("jsonp" === d.dataTypes[0] || s || r) return p = d.jsonpCallback = f.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, m = b[p], s ? d.url = t.replace(Wa, "$1" + p) : r ? d.data = l.replace(Wa, "$1" + p) : n && (d.url += (Kd.test(t) ? "&" : "?") + d.jsonp + "=" + p), d.converters["script json"] = function() {
            return q || f.error(p + " was not called"), q[0]
        }, d.dataTypes[0] = "json", b[p] = function() {
            q = arguments
        }, g.always(function() {
            b[p] = m;
            d[p] &&
                (d.jsonpCallback = e.jsonpCallback, rc.push(p));
            q && f.isFunction(m) && m(q[0]);
            q = m = c
        }), "script"
    });
    f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                return f.globalEval(b), b
            }
        }
    });
    f.ajaxPrefilter("script", function(b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    f.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var d, f = C.head ||
                C.getElementsByTagName("head")[0] || C.documentElement;
            return {
                send: function(e, g) {
                    d = C.createElement("script");
                    d.async = "async";
                    b.scriptCharset && (d.charset = b.scriptCharset);
                    d.src = b.url;
                    d.onload = d.onreadystatechange = function(b, e) {
                        if (e || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, f && d.parentNode && f.removeChild(d), d = c, e || g(200, "success")
                    };
                    f.insertBefore(d, f.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var qa, wb = b.ActiveXObject ? function() {
            for (var b in qa) qa[b](0,
                1)
        } : !1,
        Md = 0;
    f.ajaxSettings.xhr = b.ActiveXObject ? function() {
        var c;
        if (!(c = !this.isLocal && Aa())) a: {
            try {
                c = new b.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (d) {}
            c = void 0
        }
        return c
    } : Aa;
    var xb = f.ajaxSettings.xhr();
    f.extend(f.support, {
        ajax: !!xb,
        cors: !!xb && "withCredentials" in xb
    });
    f.support.ajax && f.ajaxTransport(function(d) {
        if (!d.crossDomain || f.support.cors) {
            var e;
            return {
                send: function(g, p) {
                    var m, q, l = d.xhr();
                    d.username ? l.open(d.type, d.url, d.async, d.username, d.password) : l.open(d.type, d.url, d.async);
                    if (d.xhrFields)
                        for (q in d.xhrFields) l[q] =
                            d.xhrFields[q];
                    d.mimeType && l.overrideMimeType && l.overrideMimeType(d.mimeType);
                    !d.crossDomain && !g["X-Requested-With"] && (g["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (q in g) l.setRequestHeader(q, g[q])
                    } catch (t) {}
                    l.send(d.hasContent && d.data || null);
                    e = function(b, g) {
                        var q, t, n, s, r;
                        try {
                            if (e && (g || 4 === l.readyState))
                                if (e = c, m && (l.onreadystatechange = f.noop, wb && delete qa[m]), g) 4 !== l.readyState && l.abort();
                                else {
                                    q = l.status;
                                    n = l.getAllResponseHeaders();
                                    s = {};
                                    (r = l.responseXML) && r.documentElement && (s.xml = r);
                                    try {
                                        s.text =
                                            l.responseText
                                    } catch (z) {}
                                    try {
                                        t = l.statusText
                                    } catch (y) {
                                        t = ""
                                    }!q && d.isLocal && !d.crossDomain ? q = s.text ? 200 : 404 : 1223 === q && (q = 204)
                                }
                        } catch (A) {
                            g || p(-1, A)
                        }
                        s && p(q, t, s, n)
                    };
                    d.async ? 4 === l.readyState ? setTimeout(e, 0) : (m = ++Md, wb && (qa || (qa = {}, f(b).unload(wb)), qa[m] = e), l.onreadystatechange = e) : e()
                },
                abort: function() {
                    e && e(0, 1)
                }
            }
        }
    });
    var Ba, Xa, Nd = /^(?:toggle|show|hide)$/,
        Od = RegExp("^(?:([-+])=|)(" + Fa + ")([a-z%]*)$", "i"),
        Pd = /queueHooks$/,
        Ca = [
            function(b, c, d) {
                var e, g, p, m, t, n, s = this,
                    r = b.style,
                    y = {},
                    A = [],
                    L = b.nodeType && q(b);
                d.queue ||
                    (t = f._queueHooks(b, "fx"), null == t.unqueued && (t.unqueued = 0, n = t.empty.fire, t.empty.fire = function() {
                        t.unqueued || n()
                    }), t.unqueued++, s.always(function() {
                        s.always(function() {
                            t.unqueued--;
                            f.queue(b, "fx").length || t.empty.fire()
                        })
                    }));
                1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [r.overflow, r.overflowX, r.overflowY], "inline" === f.css(b, "display") && "none" === f.css(b, "float") && (!f.support.inlineBlockNeedsLayout || "inline" === xa(b.nodeName) ? r.display = "inline-block" : r.zoom = 1));
                d.overflow && (r.overflow = "hidden",
                    f.support.shrinkWrapBlocks || s.done(function() {
                        r.overflow = d.overflow[0];
                        r.overflowX = d.overflow[1];
                        r.overflowY = d.overflow[2]
                    }));
                for (e in c) g = c[e], Nd.exec(g) && (delete c[e], g !== (L ? "hide" : "show") && A.push(e));
                if (g = A.length) {
                    p = f._data(b, "fxshow") || f._data(b, "fxshow", {});
                    L ? f(b).show() : s.done(function() {
                        f(b).hide()
                    });
                    s.done(function() {
                        var c;
                        f.removeData(b, "fxshow", !0);
                        for (c in y) f.style(b, c, y[c])
                    });
                    for (e = 0; e < g; e++) c = A[e], m = s.createTween(c, L ? p[c] : 0), y[c] = p[c] || f.style(b, c), c in p || (p[c] = m.start, L && (m.end = m.start,
                        m.start = "width" === c || "height" === c ? 1 : 0))
                }
            }
        ],
        sa = {
            "*": [
                function(b, c) {
                    var d, e, g = this.createTween(b, c),
                        p = Od.exec(c),
                        m = g.cur(),
                        q = +m || 0,
                        t = 1,
                        n = 20;
                    if (p) {
                        d = +p[2];
                        e = p[3] || (f.cssNumber[b] ? "" : "px");
                        if ("px" !== e && q) {
                            q = f.css(g.elem, b, !0) || d || 1;
                            do t = t || ".5", q /= t, f.style(g.elem, b, q + e); while (t !== (t = g.cur() / m) && 1 !== t && --n)
                        }
                        g.unit = e;
                        g.start = q;
                        g.end = p[1] ? q + (p[1] + 1) * d : d
                    }
                    return g
                }
            ]
        };
    f.Animation = f.extend(Cb, {
        tweener: function(b, c) {
            f.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
            for (var d, e = 0, g = b.length; e < g; e++) d = b[e], sa[d] = sa[d] || [], sa[d].unshift(c)
        },
        prefilter: function(b, c) {
            c ? Ca.unshift(b) : Ca.push(b)
        }
    });
    f.Tween = R;
    R.prototype = {
        constructor: R,
        init: function(b, c, d, e, g, p) {
            this.elem = b;
            this.prop = d;
            this.easing = g || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = p || (f.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = R.propHooks[this.prop];
            return b && b.get ? b.get(this) : R.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = R.propHooks[this.prop];
            return this.options.duration ? this.pos = c = f.easing[this.easing](b, this.options.duration *
                b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : R.propHooks._default.set(this), this
        }
    };
    R.prototype.init.prototype = R.prototype;
    R.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = f.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop]
            },
            set: function(b) {
                f.fx.step[b.prop] ? f.fx.step[b.prop](b) : b.elem.style &&
                    (null != b.elem.style[f.cssProps[b.prop]] || f.cssHooks[b.prop]) ? f.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    f.each(["toggle", "show", "hide"], function(b, c) {
        var d = f.fn[c];
        f.fn[c] = function(e, g, p) {
            return null == e || "boolean" == typeof e || !b && f.isFunction(e) && f.isFunction(g) ? d.apply(this, arguments) : this.animate(Da(c, !0), e, g, p)
        }
    });
    f.fn.extend({
        fadeTo: function(b, c, d, f) {
            return this.filter(q).css("opacity",
                0).show().end().animate({
                opacity: c
            }, b, d, f)
        },
        animate: function(b, c, d, e) {
            var g = f.isEmptyObject(b),
                p = f.speed(c, d, e);
            c = function() {
                var c = Cb(this, f.extend({}, b), p);
                g && c.stop(!0)
            };
            return g || !1 === p.queue ? this.each(c) : this.queue(p.queue, c)
        },
        stop: function(b, d, e) {
            var g = function(b) {
                var c = b.stop;
                delete b.stop;
                c(e)
            };
            return "string" != typeof b && (e = d, d = b, b = c), d && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var c = !0,
                    d = null != b && b + "queueHooks",
                    j = f.timers,
                    p = f._data(this);
                if (d) p[d] && p[d].stop && g(p[d]);
                else
                    for (d in p) p[d] &&
                        p[d].stop && Pd.test(d) && g(p[d]);
                for (d = j.length; d--;) j[d].elem === this && (null == b || j[d].queue === b) && (j[d].anim.stop(e), c = !1, j.splice(d, 1));
                (c || !e) && f.dequeue(this, b)
            })
        }
    });
    f.each({
        slideDown: Da("show"),
        slideUp: Da("hide"),
        slideToggle: Da("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        f.fn[b] = function(b, d, f) {
            return this.animate(c, b, d, f)
        }
    });
    f.speed = function(b, c, d) {
        var e = b && "object" == typeof b ? f.extend({}, b) : {
            complete: d || !d && c || f.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !f.isFunction(c) && c
        };
        e.duration = f.fx.off ? 0 : "number" == typeof e.duration ? e.duration : e.duration in f.fx.speeds ? f.fx.speeds[e.duration] : f.fx.speeds._default;
        if (null == e.queue || !0 === e.queue) e.queue = "fx";
        return e.old = e.complete, e.complete = function() {
            f.isFunction(e.old) && e.old.call(this);
            e.queue && f.dequeue(this, e.queue)
        }, e
    };
    f.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    f.timers = [];
    f.fx = R.prototype.init;
    f.fx.tick = function() {
        for (var b, c = f.timers,
            d = 0; d < c.length; d++) b = c[d], !b() && c[d] === b && c.splice(d--, 1);
        c.length || f.fx.stop()
    };
    f.fx.timer = function(b) {
        b() && f.timers.push(b) && !Xa && (Xa = setInterval(f.fx.tick, f.fx.interval))
    };
    f.fx.interval = 13;
    f.fx.stop = function() {
        clearInterval(Xa);
        Xa = null
    };
    f.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    f.fx.step = {};
    f.expr && f.expr.filters && (f.expr.filters.animated = function(b) {
        return f.grep(f.timers, function(c) {
            return b === c.elem
        }).length
    });
    var sc = /^(?:body|html)$/i;
    f.fn.offset = function(b) {
        if (arguments.length) return b ===
            c ? this : this.each(function(c) {
                f.offset.setOffset(this, b, c)
            });
        var d, e, g, p, m, l, q, t = {
                top: 0,
                left: 0
            },
            n = this[0],
            s = n && n.ownerDocument;
        if (s) return (e = s.body) === n ? f.offset.bodyOffset(n) : (d = s.documentElement, f.contains(d, n) ? ("undefined" != typeof n.getBoundingClientRect && (t = n.getBoundingClientRect()), g = Db(s), p = d.clientTop || e.clientTop || 0, m = d.clientLeft || e.clientLeft || 0, l = g.pageYOffset || d.scrollTop, q = g.pageXOffset || d.scrollLeft, {
            top: t.top + l - p,
            left: t.left + q - m
        }) : t)
    };
    f.offset = {
        bodyOffset: function(b) {
            var c = b.offsetTop,
                d = b.offsetLeft;
            return f.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(f.css(b, "marginTop")) || 0, d += parseFloat(f.css(b, "marginLeft")) || 0), {
                top: c,
                left: d
            }
        },
        setOffset: function(b, c, d) {
            var e = f.css(b, "position");
            "static" === e && (b.style.position = "relative");
            var g = f(b),
                p = g.offset(),
                m = f.css(b, "top"),
                q = f.css(b, "left"),
                t = {},
                n = {},
                s, r;
            ("absolute" === e || "fixed" === e) && -1 < f.inArray("auto", [m, q]) ? (n = g.position(), s = n.top, r = n.left) : (s = parseFloat(m) || 0, r = parseFloat(q) || 0);
            f.isFunction(c) && (c = c.call(b, d, p));
            null !=
                c.top && (t.top = c.top - p.top + s);
            null != c.left && (t.left = c.left - p.left + r);
            "using" in c ? c.using.call(b, t) : g.css(t)
        }
    };
    f.fn.extend({
        position: function() {
            if (this[0]) {
                var b = this[0],
                    c = this.offsetParent(),
                    d = this.offset(),
                    e = sc.test(c[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : c.offset();
                return d.top -= parseFloat(f.css(b, "marginTop")) || 0, d.left -= parseFloat(f.css(b, "marginLeft")) || 0, e.top += parseFloat(f.css(c[0], "borderTopWidth")) || 0, e.left += parseFloat(f.css(c[0], "borderLeftWidth")) || 0, {
                    top: d.top - e.top,
                    left: d.left - e.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b =
                    this.offsetParent || C.body; b && !sc.test(b.nodeName) && "static" === f.css(b, "position");) b = b.offsetParent;
                return b || C.body
            })
        }
    });
    f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, d) {
        var e = /Y/.test(d);
        f.fn[b] = function(g) {
            return f.access(this, function(b, g, p) {
                var m = Db(b);
                if (p === c) return m ? d in m ? m[d] : m.document.documentElement[g] : b[g];
                m ? m.scrollTo(e ? f(m).scrollLeft() : p, e ? p : f(m).scrollTop()) : b[g] = p
            }, b, g, arguments.length, null)
        }
    });
    f.each({
        Height: "height",
        Width: "width"
    }, function(b, d) {
        f.each({
            padding: "inner" +
                b,
            content: d,
            "": "outer" + b
        }, function(e, g) {
            f.fn[g] = function(g, p) {
                var m = arguments.length && (e || "boolean" != typeof g),
                    q = e || (!0 === g || !0 === p ? "margin" : "border");
                return f.access(this, function(d, e, g) {
                    var j;
                    return f.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (j = d.documentElement, Math.max(d.body["scroll" + b], j["scroll" + b], d.body["offset" + b], j["offset" + b], j["client" + b])) : g === c ? f.css(d, e, g, q) : f.style(d, e, g, q)
                }, d, m ? g : c, m, null)
            }
        })
    });
    b.jQuery = b.$ = f;
    "function" == typeof define && define.amd && define.amd.jQuery &&
        define("jquery", [], function() {
            return f
        })
})(window);

function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}
var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var e = c[d].split("=");
        if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
    }
}
this.jukebox = {};
jukebox.Player = function(b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var e in b) this.settings[e] = b[e];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) :
        this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function() {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var b = this,
            c = this.settings,
            d = {},
            e;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var g = function(c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", g, !0);
                window.setTimeout(function() {
                    b.context.removeEventListener("canplaythrough", g, !0);
                    g("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (e in this.HTML5API) this[e] = this.HTML5API[e];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ?
                Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function() {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (e in this.FLASHAPI) this[e] = this.FLASHAPI[e];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(b) {
        var c, d = this.settings.flashMediaElement,
            e, g = {
                flashvars: b.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var n = document.createElement("object");
            n.id = "jukebox-flashstream-" + this.id;
            n.setAttribute("type", "application/x-shockwave-flash");
            n.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            n.setAttribute("width", "0");
            n.setAttribute("height", "0");
            g.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            g.flashvars = b.join("&amp;");
            for (e in g) b = document.createElement("param"), b.setAttribute("name", e), b.setAttribute("value", g[e]), n.appendChild(b);
            c.outerHTML = n.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c =
                document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            g.play = !1;
            g.loop = !1;
            g.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (e in g) c.setAttribute(e, g[e]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started =
                b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(b, c) {
        if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap,
                e;
            if (void 0 !== d[b]) e = d[b].start;
            else if ("number" === typeof b) {
                e = b;
                for (var g in d)
                    if (e >= d[g].start && e <=
                        d[g].end) {
                        b = g;
                        break
                    }
            }
            void 0 !== e && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(e))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(b) {
        b = "number" ===
            typeof b ? b : this.__lastPosition;
        if (null !== b) return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(b) {
            try {
                return this.context.currentTime = b, !0
            } catch (c) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ?
                this.context.getVolume() : 1
        },
        setVolume: function(b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                    e: "3gp",
                    m: ["audio/3gpp", "audio/amr"]
                }, {
                    e: "aac",
                    m: ["audio/aac", "audio/aacp"]
                }, {
                    e: "amr",
                    m: ["audio/amr", "audio/3gpp"]
                }, {
                    e: "caf",
                    m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
                }, {
                    e: "m4a",
                    m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
                }, {
                    e: "mp3",
                    m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
                }, {
                    e: "mpga",
                    m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
                }, {
                    e: "mp4",
                    m: ["audio/mp4", "video/mp4"]
                }, {
                    e: "ogg",
                    m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
                }, {
                    e: "wav",
                    m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
                }, {
                    e: "webm",
                    m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
                }],
                d, e, g = 0, n = c.length; g < n; g++)
                if (e = c[g].e, c[g].m.length && "object" === typeof c[g].m)
                    for (var x = 0, m = c[g].m.length; x < m; x++)
                        if (d = c[g].m[x], "" !== b.canPlayType(d)) {
                            this.codecs[e] = d;
                            break
                        } else this.codecs[e] || (this.codecs[e] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (r) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr",
            this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function(b, c) {
        for (var d in this.__clones) {
            var e = this.__clones[d];
            if (null === e.isPlaying && e.origin === b) return e
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var g in c) d[g] = c[g];
            d.autoplay = !1;
            g = new jukebox.Player(d, b);
            g.isClone = !0;
            g.wasReady = !1;
            return this.__clones[g.id] = g
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length &&
                this.__playersLength < this.features.channels) {
                var b = this.__queue[0],
                    c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d],
                    c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var e = b[c],
                g = e.match(/\.([^\.]*)$/)[1];
            if (g && this.codecs[g]) return e
        }
        return null
    },
    add: function(b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function(b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function(b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
(function() {
    var b = {},
        c = null,
        d = !0,
        e = !1;
    try {
        "undefined" !== typeof AudioContext ? c = new AudioContext : "undefined" !== typeof webkitAudioContext ? c = new webkitAudioContext : d = !1
    } catch (g) {
        d = !1
    }
    if (!d)
        if ("undefined" !== typeof Audio) try {
            new Audio
        } catch (n) {
            e = !0
        } else e = !0;
    if (d) {
        var x = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
        x.gain.value = 1;
        x.connect(c.destination)
    }
    var m = function(b) {
        this._volume = 1;
        this._muted = !1;
        this.usingWebAudio = d;
        this.ctx = c;
        this.noAudio = e;
        this._howls = [];
        this._codecs = b;
        this.iOSAutoEnable = !0
    };
    m.prototype = {
        volume: function(b) {
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                this._volume = b;
                d && (x.gain.value = b);
                for (var c in this._howls)
                    if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                        for (b = 0; b < this._howls[c]._audioNode.length; b++) this._howls[c]._audioNode[b].volume = this._howls[c]._volume * this._volume;
                return this
            }
            return d ? x.gain.value : this._volume
        },
        mute: function() {
            this._setMuted(!0);
            return this
        },
        unmute: function() {
            this._setMuted(!1);
            return this
        },
        _setMuted: function(b) {
            this._muted = b;
            d && (x.gain.value =
                b ? 0 : this._volume);
            for (var c in this._howls)
                if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                    for (var e = 0; e < this._howls[c]._audioNode.length; e++) this._howls[c]._audioNode[e].muted = b
        },
        codecs: function(b) {
            return this._codecs[b]
        },
        _enableiOSAudio: function() {
            var b = this;
            if (!c || !b._iOSEnabled && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                b._iOSEnabled = !1;
                var d = function() {
                    var e = c.createBuffer(1, 1, 22050),
                        g = c.createBufferSource();
                    g.buffer = e;
                    g.connect(c.destination);
                    "undefined" === typeof g.start ?
                        g.noteOn(0) : g.start(0);
                    setTimeout(function() {
                        if (g.playbackState === g.PLAYING_STATE || g.playbackState === g.FINISHED_STATE) b._iOSEnabled = !0, b.iOSAutoEnable = !1, window.removeEventListener("touchend", d, !1)
                    }, 0)
                };
                window.addEventListener("touchend", d, !1);
                return b
            }
        }
    };
    var r = null,
        y = {};
    e || (r = new Audio, y = {
        mp3: !!r.canPlayType("audio/mpeg;").replace(/^no$/, ""),
        opus: !!r.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
        ogg: !!r.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
        wav: !!r.canPlayType('audio/wav; codecs="1"').replace(/^no$/,
            ""),
        aac: !!r.canPlayType("audio/aac;").replace(/^no$/, ""),
        m4a: !!(r.canPlayType("audio/x-m4a;") || r.canPlayType("audio/m4a;") || r.canPlayType("audio/aac;")).replace(/^no$/, ""),
        mp4: !!(r.canPlayType("audio/x-mp4;") || r.canPlayType("audio/mp4;") || r.canPlayType("audio/aac;")).replace(/^no$/, ""),
        weba: !!r.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
    });
    var A = new m(y),
        s = function(b) {
            this._autoplay = b.autoplay || !1;
            this._buffer = b.buffer || !1;
            this._duration = b.duration || 0;
            this._format = b.format || null;
            this._loop = b.loop || !1;
            this._loaded = !1;
            this._sprite = b.sprite || {};
            this._src = b.src || "";
            this._pos3d = b.pos3d || [0, 0, -0.5];
            this._volume = void 0 !== b.volume ? b.volume : 1;
            this._urls = b.urls || [];
            this._rate = b.rate || 1;
            this._model = b.model || null;
            this._onload = [b.onload || function() {}];
            this._onloaderror = [b.onloaderror || function() {}];
            this._onend = [b.onend || function() {}];
            this._onpause = [b.onpause || function() {}];
            this._onplay = [b.onplay || function() {}];
            this._onendTimer = [];
            this._webAudio = d && !this._buffer;
            this._audioNode = [];
            this._webAudio &&
                this._setupAudioNode();
            "undefined" !== typeof c && c && A.iOSAutoEnable && A._enableiOSAudio();
            A._howls.push(this);
            this.load()
        };
    s.prototype = {
        load: function() {
            var c = this,
                d = null;
            if (e) c.on("loaderror", Error("No audio support."));
            else {
                for (var g = 0; g < c._urls.length; g++) {
                    var n, s;
                    if (c._format) n = c._format;
                    else if (s = c._urls[g], (n = /^data:audio\/([^;,]+);/i.exec(s)) || (n = /\.([^.]+)$/.exec(s.split("?", 1)[0])), n) n = n[1].toLowerCase();
                    else {
                        c.on("loaderror", Error("Could not extract format from passed URLs, please add format parameter."));
                        return
                    } if (y[n]) {
                        d = c._urls[g];
                        break
                    }
                }
                if (d) {
                    c._src = d;
                    if (c._webAudio) {
                        var r = d;
                        if (r in b) c._duration = b[r].duration, E(c);
                        else if (/^data:[^;]+;base64,/.test(r)) {
                            d = atob(r.split(",")[1]);
                            g = new Uint8Array(d.length);
                            for (n = 0; n < d.length; ++n) g[n] = d.charCodeAt(n);
                            B(g.buffer, c, r)
                        } else {
                            var x = new XMLHttpRequest;
                            x.open("GET", r, !0);
                            x.responseType = "arraybuffer";
                            x.onload = function() {
                                B(x.response, c, r)
                            };
                            x.onerror = function() {
                                c._webAudio && (c._buffer = !0, c._webAudio = !1, c._audioNode = [], delete c._gainNode, delete b[r], c.load())
                            };
                            try {
                                x.send()
                            } catch (za) {
                                x.onerror()
                            }
                        }
                    } else {
                        var I = new Audio;
                        I.addEventListener("error", function() {
                            I.error && 4 === I.error.code && (m.noAudio = !0);
                            c.on("loaderror", {
                                type: I.error ? I.error.code : 0
                            })
                        }, !1);
                        c._audioNode.push(I);
                        I.src = d;
                        I._pos = 0;
                        I.preload = "auto";
                        I.volume = A._muted ? 0 : c._volume * A.volume();
                        var U = function() {
                            c._duration = Math.ceil(10 * I.duration) / 10;
                            0 === Object.getOwnPropertyNames(c._sprite).length && (c._sprite = {
                                _default: [0, 1E3 * c._duration]
                            });
                            c._loaded || (c._loaded = !0, c.on("load"));
                            c._autoplay && c.play();
                            I.removeEventListener("canplaythrough",
                                U, !1)
                        };
                        I.addEventListener("canplaythrough", U, !1);
                        I.load()
                    }
                    return c
                }
                c.on("loaderror", Error("No codec support for selected audio sources."))
            }
        },
        urls: function(b) {
            return b ? (this.stop(), this._urls = "string" === typeof b ? [b] : b, this._loaded = !1, this.load(), this) : this._urls
        },
        play: function(d, e) {
            var g = this;
            "function" === typeof d && (e = d);
            if (!d || "function" === typeof d) d = "_default";
            if (!g._loaded) return g.on("load", function() {
                g.play(d, e)
            }), g;
            if (!g._sprite[d]) return "function" === typeof e && e(), g;
            g._inactiveNode(function(m) {
                m._sprite =
                    d;
                var n = 0 < m._pos ? m._pos : g._sprite[d][0] / 1E3,
                    s = 0;
                g._webAudio ? (s = g._sprite[d][1] / 1E3 - m._pos, 0 < m._pos && (n = g._sprite[d][0] / 1E3 + n)) : s = g._sprite[d][1] / 1E3 - (n - g._sprite[d][0] / 1E3);
                var r = !(!g._loop && !g._sprite[d][2]),
                    y = "string" === typeof e ? e : Math.round(Date.now() * Math.random()) + "",
                    x;
                x = setTimeout(function() {
                    !g._webAudio && r && g.stop(y).play(d, y);
                    g._webAudio && !r && (g._nodeById(y).paused = !0, g._nodeById(y)._pos = 0, g._clearEndTimer(y));
                    !g._webAudio && !r && g.stop(y);
                    g.on("end", y)
                }, 1E3 * (s / g._rate));
                g._onendTimer.push({
                    timer: x,
                    id: y
                });
                if (g._webAudio) {
                    x = g._sprite[d][0] / 1E3;
                    var B = g._sprite[d][1] / 1E3;
                    m.id = y;
                    m.paused = !1;
                    x = [r, x, B];
                    B = g._nodeById(y);
                    B.bufferSource = c.createBufferSource();
                    B.bufferSource.buffer = b[g._src];
                    B.bufferSource.connect(B.panner);
                    B.bufferSource.loop = x[0];
                    x[0] && (B.bufferSource.loopStart = x[1], B.bufferSource.loopEnd = x[1] + x[2]);
                    B.bufferSource.playbackRate.value = g._rate;
                    g._playStart = c.currentTime;
                    m.gain.value = g._volume;
                    "undefined" === typeof m.bufferSource.start ? r ? m.bufferSource.noteGrainOn(0, n, 86400) : m.bufferSource.noteGrainOn(0,
                        n, s) : r ? m.bufferSource.start(0, n, 86400) : m.bufferSource.start(0, n, s)
                } else if (4 === m.readyState || !m.readyState && navigator.isCocoonJS) m.readyState = 4, m.id = y, m.currentTime = n, m.muted = A._muted || m.muted, m.volume = g._volume * A.volume(), setTimeout(function() {
                    m.play()
                }, 0);
                else {
                    g._clearEndTimer(y);
                    var E = d,
                        Aa = e,
                        ra = function() {
                            g.play(E, Aa);
                            m.removeEventListener("canplaythrough", ra, !1)
                        };
                    m.addEventListener("canplaythrough", ra, !1);
                    return g
                }
                g.on("play");
                "function" === typeof e && e(y);
                return g
            });
            return g
        },
        pause: function(b) {
            var c =
                this;
            if (!c._loaded) return c.on("play", function() {
                c.pause(b)
            }), c;
            c._clearEndTimer(b);
            var d = b ? c._nodeById(b) : c._activeNode();
            if (d)
                if (d._pos = c.pos(null, b), c._webAudio) {
                    if (!d.bufferSource || d.paused) return c;
                    d.paused = !0;
                    "undefined" === typeof d.bufferSource.stop ? d.bufferSource.noteOff(0) : d.bufferSource.stop(0)
                } else d.pause();
            c.on("pause");
            return c
        },
        stop: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() {
                c.stop(b)
            }), c;
            c._clearEndTimer(b);
            var d = b ? c._nodeById(b) : c._activeNode();
            if (d)
                if (d._pos =
                    0, c._webAudio) {
                    if (!d.bufferSource || d.paused) return c;
                    d.paused = !0;
                    "undefined" === typeof d.bufferSource.stop ? d.bufferSource.noteOff(0) : d.bufferSource.stop(0)
                } else isNaN(d.duration) || (d.pause(), d.currentTime = 0);
            return c
        },
        mute: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() {
                c.mute(b)
            }), c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = 0 : d.muted = !0);
            return c
        },
        unmute: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() {
                c.unmute(b)
            }), c;
            var d = b ? c._nodeById(b) :
                c._activeNode();
            d && (c._webAudio ? d.gain.value = c._volume : d.muted = !1);
            return c
        },
        volume: function(b, c) {
            var d = this;
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                d._volume = b;
                if (!d._loaded) return d.on("play", function() {
                    d.volume(b, c)
                }), d;
                var e = c ? d._nodeById(c) : d._activeNode();
                e && (d._webAudio ? e.gain.value = b : e.volume = b * A.volume());
                return d
            }
            return d._volume
        },
        loop: function(b) {
            return "boolean" === typeof b ? (this._loop = b, this) : this._loop
        },
        sprite: function(b) {
            return "object" === typeof b ? (this._sprite = b, this) : this._sprite
        },
        pos: function(b,
            d) {
            var e = this;
            if (!e._loaded) return e.on("load", function() {
                e.pos(b)
            }), "number" === typeof b ? e : e._pos || 0;
            b = parseFloat(b);
            var g = d ? e._nodeById(d) : e._activeNode();
            if (g) return 0 <= b ? (e.pause(d), g._pos = b, e.play(g._sprite, d), e) : e._webAudio ? g._pos + (c.currentTime - e._playStart) : g.currentTime;
            if (0 <= b) return e;
            for (g = 0; g < e._audioNode.length; g++)
                if (e._audioNode[g].paused && 4 === e._audioNode[g].readyState) return e._webAudio ? e._audioNode[g]._pos : e._audioNode[g].currentTime
        },
        pos3d: function(b, c, d, e) {
            var g = this;
            c = "undefined" ===
                typeof c || !c ? 0 : c;
            d = "undefined" === typeof d || !d ? -0.5 : d;
            if (!g._loaded) return g.on("play", function() {
                g.pos3d(b, c, d, e)
            }), g;
            if (0 <= b || 0 > b) {
                if (g._webAudio) {
                    var m = e ? g._nodeById(e) : g._activeNode();
                    m && (g._pos3d = [b, c, d], m.panner.setPosition(b, c, d), m.panner.panningModel = g._model || "HRTF")
                }
            } else return g._pos3d;
            return g
        },
        fade: function(b, c, d, e, g) {
            var m = this,
                n = Math.abs(b - c),
                s = b > c ? "down" : "up",
                n = n / 0.01,
                r = d / n;
            if (!m._loaded) return m.on("load", function() {
                m.fade(b, c, d, e, g)
            }), m;
            m.volume(b, g);
            for (var y = 1; y <= n; y++)(function() {
                var b =
                    Math.round(1E3 * (m._volume + ("up" === s ? 0.01 : -0.01) * y)) / 1E3;
                setTimeout(function() {
                    m.volume(b, g);
                    b === c && e && e()
                }, r * y)
            })()
        },
        fadeIn: function(b, c, d) {
            return this.volume(0).play().fade(0, b, c, d)
        },
        fadeOut: function(b, c, d, e) {
            var g = this;
            return g.fade(g._volume, b, c, function() {
                d && d();
                g.pause(e);
                g.on("end")
            }, e)
        },
        _nodeById: function(b) {
            for (var c = this._audioNode[0], d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].id === b) {
                    c = this._audioNode[d];
                    break
                }
            return c
        },
        _activeNode: function() {
            for (var b = null, c = 0; c < this._audioNode.length; c++)
                if (!this._audioNode[c].paused) {
                    b =
                        this._audioNode[c];
                    break
                }
            this._drainPool();
            return b
        },
        _inactiveNode: function(b) {
            for (var c = null, d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].paused && 4 === this._audioNode[d].readyState) {
                    b(this._audioNode[d]);
                    c = !0;
                    break
                }
            this._drainPool();
            if (!c) {
                var e;
                if (this._webAudio) e = this._setupAudioNode(), b(e);
                else {
                    this.load();
                    e = this._audioNode[this._audioNode.length - 1];
                    var g = navigator.isCocoonJS ? "canplaythrough" : "loadedmetadata",
                        m = function() {
                            e.removeEventListener(g, m, !1);
                            b(e)
                        };
                    e.addEventListener(g, m, !1)
                }
            }
        },
        _drainPool: function() {
            var b = 0,
                c;
            for (c = 0; c < this._audioNode.length; c++) this._audioNode[c].paused && b++;
            for (c = this._audioNode.length - 1; 0 <= c && !(5 >= b); c--) this._audioNode[c].paused && (this._webAudio && this._audioNode[c].disconnect(0), b--, this._audioNode.splice(c, 1))
        },
        _clearEndTimer: function(b) {
            for (var c = -1, d = 0; d < this._onendTimer.length; d++)
                if (this._onendTimer[d].id === b) {
                    c = d;
                    break
                }
            if (b = this._onendTimer[c]) clearTimeout(b.timer), this._onendTimer.splice(c, 1)
        },
        _setupAudioNode: function() {
            var b = this._audioNode,
                d = this._audioNode.length;
            b[d] = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
            b[d].gain.value = this._volume;
            b[d].paused = !0;
            b[d]._pos = 0;
            b[d].readyState = 4;
            b[d].connect(x);
            b[d].panner = c.createPanner();
            b[d].panner.panningModel = this._model || "equalpower";
            b[d].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]);
            b[d].panner.connect(b[d]);
            return b[d]
        },
        on: function(b, c) {
            var d = this["_on" + b];
            if ("function" === typeof c) d.push(c);
            else
                for (var e = 0; e < d.length; e++) c ? d[e].call(this, c) :
                    d[e].call(this);
            return this
        },
        off: function(b, c) {
            var d = this["_on" + b];
            if (c)
                for (var e = 0; e < d.length; e++) {
                    if (c === d[e]) {
                        d.splice(e, 1);
                        break
                    }
                } else this["_on" + b] = [];
            return this
        },
        unload: function() {
            for (var c = this._audioNode, d = 0; d < this._audioNode.length; d++) c[d].paused || (this.stop(c[d].id), this.on("end", c[d].id)), this._webAudio ? c[d].disconnect(0) : c[d].src = "";
            for (d = 0; d < this._onendTimer.length; d++) clearTimeout(this._onendTimer[d].timer);
            c = A._howls.indexOf(this);
            null !== c && 0 <= c && A._howls.splice(c, 1);
            delete b[this._src]
        }
    };
    if (d) var B = function(d, e, g) {
            c.decodeAudioData(d, function(c) {
                c && (b[g] = c, E(e, c))
            }, function(b) {
                e.on("loaderror", b)
            })
        },
        E = function(b, c) {
            b._duration = c ? c.duration : b._duration;
            0 === Object.getOwnPropertyNames(b._sprite).length && (b._sprite = {
                _default: [0, 1E3 * b._duration]
            });
            b._loaded || (b._loaded = !0, b.on("load"));
            b._autoplay && b.play()
        };
    "function" === typeof define && define.amd && define(function() {
        return {
            Howler: A,
            Howl: s
        }
    });
    "undefined" !== typeof exports && (exports.Howler = A, exports.Howl = s);
    "undefined" !== typeof window && (window.Howler =
        A, window.Howl = s)
})();
(function(b) {
    Number.prototype.map = function(b, c, d, e) {
        return d + (e - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function(b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function(b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function(b) {
        for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function(b) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1),
            d = this,
            e = function() {},
            g = function() {
                return d.apply(this instanceof e && b ?
                    this : b, c.concat(Array.prototype.slice.call(arguments)))
            };
        e.prototype = this.prototype;
        g.prototype = new e;
        return g
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function(b) {
            return document.createElement(b)
        },
        copy: function(b) {
            if (!b || "object" != typeof b ||
                b instanceof HTMLElement || b instanceof ig.Class) return b;
            if (b instanceof Array)
                for (var c = [], d = 0, e = b.length; d < e; d++) c[d] = ig.copy(b[d]);
            else
                for (d in c = {}, b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var e = c[d];
                if ("object" != typeof e || e instanceof HTMLElement || e instanceof ig.Class || null === e) b[d] = e;
                else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = e instanceof Array ? [] : {};
                    ig.merge(b[d], e)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b) return [];
            var c = [],
                d = [],
                e;
            for (e in b) c.push(e);
            c.sort();
            for (e = 0; e < c.length; e++) d.push(b[c[e]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var e = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + e] = b["moz" + e] = b["o" + e] = d : b["ms" + e] = b["moz" + e] = b["webkit" + e] = b["o" + e] = d
        },
        getVendorAttribute: function(b, c) {
            var d = c.charAt(0).toUpperCase() + c.substr(1);
            return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function(b,
            c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function(b, c, d, e, g) {
            var n = ig.$new("canvas");
            n.width = b.width;
            n.height = b.height;
            var x = n.getContext("2d");
            ig.System.SCALE.CRISP(n, x);
            var p = ig.getVendorAttribute(x, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(x, "getImageDataHD");
            var q = b.width / p,
                t = b.height / p;
            n.width = Math.ceil(q);
            n.height = Math.ceil(t);
            x.drawImage(b, 0, 0, q, t);
            return 1 === p ? x.getImageData(c, d, e, g) : x.getImageDataHD(c, d, e, g)
        },
        module: function(b) {
            if (ig._current) throw "Module '" +
                ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) {
            ig.resources.push(b)
        },
        setNocache: function(b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
                e = ig.$new("script");
            e.type = "text/javascript";
            e.src = d;
            e.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            e.onerror = function() {
                throw "Failed to load module " + b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(e)
        },
        _execModules: function() {
            for (var b = !1, c =
                0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], e = !0, g = 0; g < d.requires.length; g++) {
                    var n = d.requires[g];
                    ig.modules[n] ? ig.modules[n].loaded || (e = !1) : (e = !1, ig._loadScript(n, d.name))
                }
                e && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    e = [];
                    n = ig._loadQueue[c].requires;
                    for (g = 0; g < n.length; g++) d = ig.modules[n[g]], (!d || !d.loaded) && e.push(n[g]);
                    b.push(ig._loadQueue[c].name +
                        " (requires: " + e.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio =
                b.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: b.innerWidth,
                height: b.innerHeight
            };
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in
                b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(b, "requestAnimationFrame");
    if (b.requestAnimationFrame) {
        var c = 1,
            d = {};
        b.ig.setAnimation = function(e, g) {
            var n = c++;
            d[n] = !0;
            var x = function() {
                d[n] && (b.requestAnimationFrame(x, g), e())
            };
            b.requestAnimationFrame(x, g);
            return n
        };
        b.ig.clearAnimation = function(b) {
            delete d[b]
        }
    } else b.ig.setAnimation = function(c) {
        return b.setInterval(c, 1E3 / 60)
    }, b.ig.clearAnimation = function(c) {
        b.clearInterval(c)
    };
    var e = !1,
        g = /xyz/.test(function() {
            xyz
        }) ? /\bparent\b/ : /.*/,
        n = 0;
    b.ig.Class = function() {};
    var x = function(b) {
        var c = this.prototype,
            d = {},
            e;
        for (e in b) "function" ==
            typeof b[e] && "function" == typeof c[e] && g.test(b[e]) ? (d[e] = c[e], c[e] = function(b, c) {
                return function() {
                    var e = this.parent;
                    this.parent = d[b];
                    var g = c.apply(this, arguments);
                    this.parent = e;
                    return g
                }
            }(e, b[e])) : c[e] = b[e]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!e) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b) return b
                }
                for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var y = this.prototype;
        e = !0;
        var A = new this;
        e = !1;
        for (var s in c) A[s] = "function" == typeof c[s] && "function" == typeof y[s] && g.test(c[s]) ? function(b, c) {
            return function() {
                var d = this.parent;
                this.parent = y[b];
                var e = c.apply(this, arguments);
                this.parent = d;
                return e
            }
        }(s, c[s]) : c[s];
        d.prototype = A;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = x;
        d.classId = A.classId = ++n;
        return d
    };
    b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(b) {
            return ig.Image.cache[b] || null
        },
        init: function(b) {
            this.path = b;
            this.load()
        },
        load: function(b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this),
                ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(b) {
            var c = ig.getImagePixels(this.data, 0, 0, this.width,
                    this.height),
                d = this.width * b,
                e = this.height * b,
                g = ig.$new("canvas");
            g.width = d;
            g.height = e;
            for (var n = g.getContext("2d"), x = n.getImageData(0, 0, d, e), m = 0; m < e; m++)
                for (var r = 0; r < d; r++) {
                    var y = 4 * (Math.floor(m / b) * this.width + Math.floor(r / b)),
                        A = 4 * (m * d + r);
                    x.data[A] = c.data[y];
                    x.data[A + 1] = c.data[y + 1];
                    x.data[A + 2] = c.data[y + 2];
                    x.data[A + 3] = c.data[y + 3]
                }
            n.putImageData(x, 0, 0);
            this.data = g
        },
        draw: function(b, c, d, e, g, n) {
            if (this.loaded) {
                var x = ig.system.scale;
                g = (g ? g : this.width) * x;
                n = (n ? n : this.height) * x;
                ig.system.context.drawImage(this.data,
                    d ? d * x : 0, e ? e * x : 0, g, n, ig.system.getDrawPos(b), ig.system.getDrawPos(c), g, n);
                ig.Image.drawCount++
            }
        },
        drawTile: function(b, c, d, e, g, n, x) {
            g = g ? g : e;
            if (this.loaded && !(e > this.width || g > this.height)) {
                var m = ig.system.scale,
                    r = Math.floor(e * m),
                    y = Math.floor(g * m),
                    A = n ? -1 : 1,
                    s = x ? -1 : 1;
                if (n || x) ig.system.context.save(), ig.system.context.scale(A, s);
                ig.system.context.drawImage(this.data, Math.floor(d * e) % this.width * m, Math.floor(d * e / this.width) * g * m, r, y, ig.system.getDrawPos(b) * A - (n ? r : 0), ig.system.getDrawPos(c) * s - (x ? y : 0), r, y);
                (n ||
                    x) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var b in ig.Image.cache) ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function(b) {
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        },
        _widthForLine: function(b) {
            for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
                this.letterSpacing;
            return c
        },
        heightForString: function(b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(b, c, d, e) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var g = this.height + this.lineSpacing, n = 0; n < b.length; n++) this.draw(b[n], c, d + n * g, e)
            } else {
                if (e == ig.Font.ALIGN.RIGHT || e == ig.Font.ALIGN.CENTER) n = this._widthForLine(b), c -= e == ig.Font.ALIGN.CENTER ? n / 2 : n;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (n = 0; n < b.length; n++) e = b.charCodeAt(n),
                    c += this._drawChar(e - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function(b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
            var e = ig.system.scale,
                g = this.widthMap[b] * e,
                n = (this.height - 2) * e;
            ig.system.context.drawImage(this.data, this.indices[b] * e, 0, g, n, ig.system.getDrawPos(c), ig.system.getDrawPos(d), g, n);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function(b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, e = 0, g = 0; g < b.width; g++) {
                var n = 4 * g + 3;
                127 < c.data[n] ? e++ : 128 > c.data[n] && e && (this.widthMap.push(e), this.indices.push(g - e), d++, e = 0)
            }
            this.widthMap.push(e);
            this.indices.push(g - e)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
            else {
                for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
                    var d = ig.Sound.use[c];
                    if (b.canPlayType(d.mime)) {
                        this.format = d;
                        break
                    }
                }
                this.format || (ig.Sound.enabled = !1)
            }
        },
        load: function(b, c, d) {
            var e = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels)
                    for (c = this.clips[b].length; c <
                        ig.Sound.channels; c++) {
                        var g = new Audio(e);
                        g.load();
                        this.clips[b].push(g)
                    }
                return this.clips[b][0]
            }
            var n = new Audio(e);
            d && (n.addEventListener("canplaythrough", function m(c) {
                n.removeEventListener("canplaythrough", m, !1);
                d(b, !0, c)
            }, !1), n.addEventListener("error", function(c) {
                d(b, !1, c)
            }, !1));
            n.preload = "auto";
            n.load();
            this.clips[b] = [n];
            if (c)
                for (c = 1; c < ig.Sound.channels; c++) g = new Audio(e), g.load(), this.clips[b].push(g);
            return n
        },
        get: function(b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];)
                if (d.paused || d.ended) return d.ended &&
                    (d.currentTime = 0), d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                    get: this.getVolume.bind(this),
                    set: this.setVolume.bind(this)
                }), Object.defineProperty(this, "loop", {
                    get: this.getLooping.bind(this),
                    set: this.setLooping.bind(this)
                })) :
                this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack ||
                    (this.currentTrack = d)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
        },
        play: function(b) {
            if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(),
                this.currentTrack = b);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(b) {
            this._loop = b;
            for (var c in this.tracks) this.tracks[c].loop = b
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks) this.tracks[c].volume = this._volume
        },
        fadeOut: function(b) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this),
                50))
        },
        _fadeStep: function() {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function(b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path,
                this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b =
                    0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function(b) {
            b.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(b, c) {
            if (c) this._unloaded.erase(b);
            else throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function(b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt =
                ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(b, c, d, e, g) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, e, g);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function(b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(b) {
            this.running ? this.newGameClass = b : this.setGameNow(b)
        },
        setGameNow: function(b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(b) {
            if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(b) {
            return Math.round(b) * this.scale
        },
        SMOOTH: function(b) {
            return Math.round(b * this.scale)
        },
        SUBPIXEL: function(b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart",
                    this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function(b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            ig.ua.mobile && (c = ig.system.realWidth);
            var c = ig.system.scale * (c / ig.system.realWidth),
                d = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            b = b.touches ? b.touches[0] : b;
            this.mouse.x = (b.clientX - d.left) / c;
            this.mouse.y = (b.clientY - d.top) / c
        },
        contextmenu: function(b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
        },
        keydown: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" ==
                c))
                if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
        },
        keyup: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
        },
        devicemotion: function(b) {
            this.accel =
                b.accelerationIncludingGravity
        },
        bind: function(b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function(b, c) {
            var d = ig.$(b),
                e = this;
            d.addEventListener("touchstart", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("touchend", function(b) {
                e.touchEnd(b, c)
            }, !1);
            d.addEventListener("MSPointerDown", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("MSPointerUp", function(b) {
                e.touchEnd(b, c)
            }, !1)
        },
        unbind: function(b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] =
                null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(b) {
            return this.actions[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return !!this.delayedKeyup[b]
        },
        clearPressed: function() {
            for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function(b,
            c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function() {
    ig.main = function(b, c, d, e, g, n, x) {
        ig.system = new ig.System(b, d, e, g, n || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        (new(x || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(b, c, d, e) {
            this.sheet = b;
            this.pivot = {
                x: b.width / 2,
                y: b.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!e;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(b) {
            this.timer.set(this.frameTime * -b - 1E-4);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || c > ig.system.height || (0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle),
                this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(b,
            c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = b;
            this.pos.y = this.last.y = c;
            ig.merge(this, d)
        },
        reset: function(b, c, d) {
            var e = this.constructor.prototype;
            this.pos.x = b;
            this.pos.y = c;
            this.last.x = b;
            this.last.y = c;
            this.vel.x = e.vel.x;
            this.vel.y = e.vel.y;
            this.accel.x = e.accel.x;
            this.accel.y = e.accel.y;
            this.health = e.health;
            this._killed = e._killed;
            this.standing = e.standing;
            this.type = e.type;
            this.checkAgainst = e.checkAgainst;
            this.collides = e.collides;
            ig.merge(this, d)
        },
        addAnim: function(b, c, d, e) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                b + " to.";
            c = new ig.Animation(this.animSheet, c, d, e);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y *
                ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(b, c, d, e) {
            return c ? (b + c * ig.system.tick).limit(-e, e) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-e, e)
        },
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) >
                this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function(b) {
            return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function(b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function(b) {
            return Math.atan2(b.pos.y +
                b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {},
        erase: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision =
        function(b, c) {
            var d = null;
            if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
            else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
            b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c,
                b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
        };
    ig.Entity.seperateOnXAxis = function(b, c, d) {
        var e = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -e : e, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -e / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(b, c, d) {
        var e = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var g = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, g = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, g, d == b ? -e : e, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness &&
            b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, g = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, g, -e / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, e / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function(b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        },
        getTile: function(b, c) {
            var d = Math.floor(b / this.tilesize),
                e = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= e && e < this.height ? this.data[e][d] : 0
        },
        setTile: function(b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c /
                this.tilesize);
            0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(b, c, g) {
            this.parent(b, c);
            this.tiledef = g || ig.CollisionMap.defaultTileDef;
            for (var n in this.tiledef) n | 0 > this.lastSlope && (this.lastSlope = n | 0)
        },
        trace: function(b, c, g, n, x, m) {
            var r = {
                    collision: {
                        x: !1,
                        y: !1,
                        slope: !1
                    },
                    pos: {
                        x: b,
                        y: c
                    },
                    tile: {
                        x: 0,
                        y: 0
                    }
                },
                y = Math.ceil(Math.max(Math.abs(g), Math.abs(n)) / this.tilesize);
            if (1 < y)
                for (var A = g / y, s = n / y, B = 0; B < y && (A || s) && !(this._traceStep(r,
                    b, c, A, s, x, m, g, n, B), b = r.pos.x, c = r.pos.y, r.collision.x && (g = A = 0), r.collision.y && (n = s = 0), r.collision.slope); B++);
            else this._traceStep(r, b, c, g, n, x, m, g, n, 0);
            return r
        },
        _traceStep: function(b, c, g, n, x, m, r, y, A, s) {
            b.pos.x += n;
            b.pos.y += x;
            var B = 0;
            if (n) {
                var E = 0 < n ? m : 0,
                    p = 0 > n ? this.tilesize : 0,
                    B = Math.max(Math.floor(g / this.tilesize), 0),
                    q = Math.min(Math.ceil((g + r) / this.tilesize), this.height);
                n = Math.floor((b.pos.x + E) / this.tilesize);
                var t = Math.floor((c + E) / this.tilesize);
                if (0 < s || n == t || 0 > t || t >= this.width) t = -1;
                if (0 <= n && n < this.width)
                    for (var L =
                        B; L < q && !(-1 != t && (B = this.data[L][t], 1 < B && B <= this.lastSlope && this._checkTileDef(b, B, c, g, y, A, m, r, t, L))); L++)
                        if (B = this.data[L][n], 1 == B || B > this.lastSlope || 1 < B && this._checkTileDef(b, B, c, g, y, A, m, r, n, L)) {
                            if (1 < B && B <= this.lastSlope && b.collision.slope) break;
                            b.collision.x = !0;
                            b.tile.x = B;
                            c = b.pos.x = n * this.tilesize - E + p;
                            y = 0;
                            break
                        }
            }
            if (x) {
                E = 0 < x ? r : 0;
                x = 0 > x ? this.tilesize : 0;
                B = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                p = Math.min(Math.ceil((b.pos.x + m) / this.tilesize), this.width);
                L = Math.floor((b.pos.y + E) / this.tilesize);
                q = Math.floor((g + E) / this.tilesize);
                if (0 < s || L == q || 0 > q || q >= this.height) q = -1;
                if (0 <= L && L < this.height)
                    for (n = B; n < p && !(-1 != q && (B = this.data[q][n], 1 < B && B <= this.lastSlope && this._checkTileDef(b, B, c, g, y, A, m, r, n, q))); n++)
                        if (B = this.data[L][n], 1 == B || B > this.lastSlope || 1 < B && this._checkTileDef(b, B, c, g, y, A, m, r, n, L)) {
                            if (1 < B && B <= this.lastSlope && b.collision.slope) break;
                            b.collision.y = !0;
                            b.tile.y = B;
                            b.pos.y = L * this.tilesize - E + x;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, g, n, x, m, r, y, A, s) {
            var B = this.tiledef[c];
            if (!B) return !1;
            c = (B[2] -
                B[0]) * this.tilesize;
            var E = (B[3] - B[1]) * this.tilesize,
                p = B[4];
            r = g + x + (0 > E ? r : 0) - (A + B[0]) * this.tilesize;
            y = n + m + (0 < c ? y : 0) - (s + B[1]) * this.tilesize;
            if (0 < c * y - E * r) {
                if (0 > x * -E + m * c) return p;
                A = Math.sqrt(c * c + E * E);
                s = E / A;
                A = -c / A;
                var q = r * s + y * A,
                    B = s * q,
                    q = A * q;
                if (B * B + q * q >= x * x + m * m) return p || 0.5 > c * (y - m) - E * (r - x);
                b.pos.x = g + x - B;
                b.pos.y = n + m - q;
                b.collision.slope = {
                    x: c,
                    y: E,
                    nx: s,
                    ny: A
                };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3,
        c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, c, !0],
        6: [0, c, 1, b, !0],
        7: [0, b, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0,
            1, 1, 0, !0
        ],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [c, 1, 1, 0, !0],
        43: [b, 1, c, 0, !0],
        54: [0, 1, b, 0, !0],
        27: [0, 0, 1, b, !0],
        28: [0, b, 1, c, !0],
        29: [0, c, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, b, 1, !0],
        44: [b, 0, c, 1, !0],
        55: [c, 0, 1, 1, !0],
        16: [1, b, 0, 0, !0],
        17: [1, c, 0, b, !0],
        18: [1, 1, 0, c, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [b, 1, 0, 0, !0],
        41: [c, 1, b, 0, !0],
        52: [1, 1, c, 0, !0],
        38: [1, c, 0, 1, !0],
        39: [1, b, 0, c, !0],
        40: [1, 0,
            0, b, !0
        ],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, c, 1, !0],
        42: [c, 0, b, 1, !0],
        53: [b, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(b, c, g, n) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + g,
                    y: c + n
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function(b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(b,
            c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function() {
            var b = this.width * this.tilesize * ig.system.scale,
                c = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
            var d = Math.ceil(b / this.chunkSize),
                e = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var g = 0; g < e; g++) {
                this.preRenderedChunks[g] = [];
                for (var n = 0; n < d; n++) this.preRenderedChunks[g][n] = this.preRenderChunk(n, g, n == d - 1 ? b - n * this.chunkSize : this.chunkSize, g == e - 1 ?
                    c - g * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function(b, c, d, e) {
            var g = d / this.tilesize / ig.system.scale + 1,
                n = e / this.tilesize / ig.system.scale + 1,
                x = b * this.chunkSize / ig.system.scale % this.tilesize,
                m = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var r = ig.$new("canvas");
            r.width = d;
            r.height = e;
            r.retinaResolutionEnabled = !1;
            e = r.getContext("2d");
            ig.System.scaleMode(r, e);
            d = ig.system.context;
            ig.system.context = e;
            for (e = 0; e < g; e++)
                for (var y = 0; y < n; y++)
                    if (e + b < this.width && y + c < this.height) {
                        var A = this.data[y + c][e + b];
                        A && this.tiles.drawTile(e * this.tilesize - x, y * this.tilesize - m, A - 1, this.tilesize)
                    }
            ig.system.context = d;
            return r
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x),
                c = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var d =
                this.width * this.tilesize * ig.system.scale,
                b = (b % d + d) % d,
                d = this.height * this.tilesize * ig.system.scale,
                c = (c % d + d) % d;
            var d = Math.max(Math.floor(b / this.chunkSize), 0),
                e = Math.max(Math.floor(c / this.chunkSize), 0),
                g = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                n = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
                x = this.preRenderedChunks[0].length,
                m = this.preRenderedChunks.length;
            this.repeat || (g = Math.min(g, x), n = Math.min(n, m));
            for (var r = 0; e < n; e++) {
                for (var y = 0, A = d; A < g; A++) {
                    var s = this.preRenderedChunks[e % m][A % x],
                        B = -b + A * this.chunkSize - y,
                        E = -c + e * this.chunkSize - r;
                    ig.system.context.drawImage(s, B, E);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(B, E, this.chunkSize, this.chunkSize));
                    this.repeat && s.width < this.chunkSize && B + s.width < ig.system.realWidth && (y += this.chunkSize - s.width, g++)
                }
                this.repeat && s.height < this.chunkSize && E + s.height < ig.system.realHeight && (r += this.chunkSize - s.height, n++)
            }
        },
        drawTiled: function() {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(),
                e = (this.scroll.y / this.tilesize).toInt(), g = this.scroll.x % this.tilesize, n = this.scroll.y % this.tilesize, x = -g - this.tilesize, g = ig.system.width + this.tilesize - g, m = ig.system.height + this.tilesize - n, r = -1, n = -n - this.tilesize; n < m; r++, n += this.tilesize) {
                var y = r + e;
                if (y >= this.height || 0 > y) {
                    if (!this.repeat) continue;
                    y = (y % this.height + this.height) % this.height
                }
                for (var A = -1, s = x; s < g; A++, s += this.tilesize) {
                    b = A + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = (b % this.width + this.width) % this.width
                    }
                    if (b = this.data[y][b])(c = this.anims[b -
                        1]) ? c.draw(s, n) : this.tiles.drawTile(s, n, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++)
                if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    e.anims = this.backgroundAnims[d.tilesetName] || {};
                    e.repeat = d.repeat;
                    e.distance = d.distance;
                    e.foreground = !!d.foreground;
                    e.preRender = !!d.preRender;
                    e.name = d.name;
                    this.backgroundMaps.push(e)
                }
            for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
        },
        loadLevelDeferred: function(b) {
            this._levelToLoad = b
        },
        getMapByName: function(b) {
            if ("collision" == b) return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++)
                if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function(b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function(b) {
            b =
                "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var e = this.entities[d];
                e instanceof b && !e._killed && c.push(e)
            }
            return c
        },
        spawnEntity: function(b, c, d, e) {
            var g = "string" === typeof b ? ig.global[b] : b;
            if (!g) throw "Can't spawn entity of type " + b;
            b = new g(c, d, e || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(b) {
            b.name &&
                delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            if (this._doSortEntities ||
                this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c],
                    d;
                for (d in b) b[d].update()
            }
        },
        updateEntities: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c =
                    this.backgroundMaps[b];
                if (c.foreground) break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
        },
        drawEntities: function() {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
        },
        checkEntities: function() {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var e = {}, g = Math.floor(d.pos.y / this.cellSize), n = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, x = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, m = Math.floor(d.pos.x / this.cellSize); m < n; m++)
                        for (var r = g; r < x; r++)
                            if (b[m])
                                if (b[m][r]) {
                                    for (var y = b[m][r], A = 0; A < y.length; A++) d.touches(y[A]) && !e[y[A].id] && (e[y[A].id] = !0, ig.Entity.checkPair(d, y[A]));
                                    y.push(d)
                                } else b[m][r] = [d];
                else b[m] = {}, b[m][r] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(b, c) {
            return b.zIndex - c.zIndex
        },
        POS_X: function(b, c) {
            return b.pos.x + b.size.x - (c.pos.x +
                c.size.x)
        },
        POS_Y: function(b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("plugins.handlers.dom-handler").defines(function() {
    ig.DomHandler = ig.Class.extend({
        JQUERYAVAILABLE: !1,
        init: function() {
            this.JQUERYAVAILABLE = this._jqueryAvailable()
        },
        _jqueryAvailable: function() {
            return "undefined" !== typeof jQuery
        },
        addEvent: function(b, c, d, e) {
            if (this.JQUERYAVAILABLE) b.on(c, d);
            else b.addEventListener(c, d, e)
        },
        create: function(b) {
            return this.JQUERYAVAILABLE ? $("<" + b + ">") : ig.$new(b)
        },
        getElementByClass: function(b) {
            return this.JQUERYAVAILABLE ? $("." + b) : document.getElementsByClassName(b)
        },
        getElementById: function(b) {
            return this.JQUERYAVAILABLE ? 0 < $(b).length ? $(b) : null : ig.$(b)
        },
        appendChild: function(b, c) {
            this.JQUERYAVAILABLE ? b.append(c) : b.appendChild(c)
        },
        appendToBody: function(b) {
            this.JQUERYAVAILABLE ? $("body").append(b) : document.body.appendChild(b)
        },
        resize: function(b, c, d) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2));
            else {
                var e = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = e
            }
        },
        resizeOffsetLeft: function(b,
            c, d, e) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", e);
            else {
                var g = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + e.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = g
            }
        },
        css: function(b, c) {
            if (this.JQUERYAVAILABLE) b.css(c);
            else {
                var d = "",
                    e;
                for (e in c) d += e + ":" + c[e] + ";";
                this.attr(b, "style", d)
            }
        },
        getOffsets: function(b) {
            return this.JQUERYAVAILABLE ? (b = b.offset(), {
                left: b.left,
                top: b.top
            }) : {
                left: b.offsetLeft,
                top: b.offsetTop
            }
        },
        attr: function(b,
            c, d) {
            if ("undefined" === typeof d) return this.JQUERYAVAILABLE ? b.attr(c) : b.getAttribute(c);
            this.JQUERYAVAILABLE ? b.attr(c, d) : b.setAttribute(c, d)
        },
        show: function(b) {
            this.JQUERYAVAILABLE ? (b.show(), b.css("visibility", "visible")) : b && (b.style ? b.style.visibility = "visible" : b[0] && (b[0].style.visibility = "visible"))
        },
        hide: function(b) {
            this.JQUERYAVAILABLE ? (b.hide(), b.css("visibility", "hidden")) : b && (b.style ? b.style.visibility = "hidden" : b[0] && (b[0].style.visibility = "hidden"))
        },
        getQueryVariable: function(b) {
            for (var c =
                window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
                var e = c[d].split("=");
                if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
            }
        },
        forcedDeviceDetection: function() {
            var b = this.getQueryVariable("device");
            if (b) switch (b) {
                case "mobile":
                    console.log("serving mobile version ...");
                    ig.ua.mobile = !0;
                    break;
                case "desktop":
                    console.log("serving desktop version ...");
                    ig.ua.mobile = !1;
                    break;
                default:
                    console.log("serving universal version ...")
            } else console.log("serving universal version ...")
        },
        forcedDeviceRotation: function() {
            var b = this.getQueryVariable("force-rotate");
            if (b) switch (b) {
                case "portrait":
                    console.log("force rotate to portrait");
                    window.orientation = 0;
                    break;
                case "landscape":
                    console.log("force rotate to horizontal");
                    window.orientation = 90;
                    break;
                default:
                    alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.data.vector").defines(function() {
    Vector2 = ig.Class.extend({
        x: null,
        y: null,
        valType: "number",
        init: function(b, c) {
            typeof b === this.valType && typeof c === this.valType && (this.x = b, this.y = c)
        },
        row: function(b) {
            typeof b === this.valType && (this.y = b);
            return this.y
        },
        col: function(b) {
            typeof b === this.valType && (this.x = b);
            return this.x
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.size-handler").requires("plugins.data.vector").defines(function() {
    ig.SizeHandler = ig.Class.extend({
        portraitMode: !1,
        desktop: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(640, 480)
        },
        mobile: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(640, 480)
        },
        windowSize: new Vector2(window.innerWidth, window.innerHeight),
        scaleRatioMultiplier: new Vector2(1, 1),
        sizeRatio: new Vector2(1, 1),
        scale: 1,
        domHandler: null,
        dynamicClickableEntityDivs: {},
        coreDivsToResize: ["#canvas", "#play", "#orientate"],
        adsToResize: {
             
        },
        init: function(b) {
            this.domHandler = b;
            if ("undefined" === typeof b) throw "undefined Dom Handler for Size Handler";
            this.sizeCalcs();
            this.eventListenerSetup();
            this.samsungFix()
        },
        sizeCalcs: function() {
            this.windowSize = new Vector2(window.innerWidth,
                window.innerHeight);
            if (ig.ua.mobile) {
                this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
                var b = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
                this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / b.x, this.mobile.actualSize.y / b.y);
                var c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
                this.mobile.actualSize.x = b.x * this.scaleRatioMultiplier.x;
                this.mobile.actualSize.y = b.y * this.scaleRatioMultiplier.y
            } else this.desktop.actualSize =
                new Vector2(window.innerWidth, window.innerHeight), b = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / b.x, this.desktop.actualSize.y / b.y), c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.desktop.actualSize.x = b.x * c, this.desktop.actualSize.y = b.y * c;
            this.sizeRatio.x = window.innerWidth / this.mobile.actualResolution.x;
            this.sizeRatio.y = window.innerHeight / this.mobile.actualResolution.y
        },
        resizeLayers: function() {
            for (var b =
                0; b < this.coreDivsToResize.length; b++) {
                var c = ig.domHandler.getElementById(this.coreDivsToResize[b]);
                ig.ua.mobile ? ig.domHandler.resize(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y)) : ig.domHandler.resizeOffsetLeft(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2))
            }
            for (var d in this.adsToResize) {
                var b = ig.domHandler.getElementById("#" +
                        d),
                    c = ig.domHandler.getElementById("#" + d + "-Box"),
                    e = (window.innerWidth - this.adsToResize[d]["box-width"]) / 2 + "px",
                    g = (window.innerHeight - this.adsToResize[d]["box-height"]) / 2 + "px";
                b && ig.domHandler.css(b, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                c && ig.domHandler.css(c, {
                    left: e,
                    top: g
                })
            }
            for (d in this.dynamicClickableEntityDivs) {
                c = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
                b = ig.domHandler.getElementById("#" + d);
                if (ig.ua.mobile) var n = this.dynamicClickableEntityDivs[d].entity_pos_x,
                    x = this.dynamicClickableEntityDivs[d].entity_pos_y,
                    g = this.dynamicClickableEntityDivs[d].width,
                    e = this.dynamicClickableEntityDivs[d].height,
                    m = Math.floor(n * this.scaleRatioMultiplier.x) + "px",
                    x = Math.floor(x * this.scaleRatioMultiplier.y) + "px",
                    g = Math.floor(g * this.scaleRatioMultiplier.x) + "px",
                    c = Math.floor(e * this.scaleRatioMultiplier.y) + "px";
                else var e = ig.domHandler.getElementById("#canvas"),
                    e = ig.domHandler.getOffsets(e),
                    m = e.left,
                    r = e.top,
                    n = this.dynamicClickableEntityDivs[d].entity_pos_x,
                    x = this.dynamicClickableEntityDivs[d].entity_pos_y,
                    g = this.dynamicClickableEntityDivs[d].width,
                    e = this.dynamicClickableEntityDivs[d].height,
                    m = Math.floor(m + n * c) + "px",
                    x = Math.floor(r + x * c) + "px",
                    g = Math.floor(g * c) + "px",
                    c = Math.floor(e * c) + "px";
                ig.domHandler.css(b, {
                    "float": "left",
                    position: "absolute",
                    left: m,
                    top: x,
                    width: g,
                    height: c,
                    "z-index": 3
                })
            }
        },
        resize: function() {
            this.sizeCalcs();
            this.resizeLayers()
        },
        reorient: function() {
            if (ig.ua.mobile) {
                var b = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
                    c = this.domHandler.getElementById("#orientate"),
                    d = this.domHandler.getElementById("#game");
                b ? (this.domHandler.show(c), this.domHandler.hide(d)) : (this.domHandler.show(d), this.domHandler.hide(c))
            }
            ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize()
        },
        resizeAds: function() {
            for (var b in this.adsToResize) {
                var c = ig.domHandler.getElementById("#" + b),
                    d = ig.domHandler.getElementById("#" + b + "-Box"),
                    e = (window.innerWidth - this.adsToResize[b]["box-width"]) / 2 + "px",
                    g = (window.innerHeight - this.adsToResize[b]["box-height"]) / 2 + "px";
                c && ig.domHandler.css(c, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                d && ig.domHandler.css(d, {
                    left: e,
                    top: g
                })
            }
        },
        samsungFix: function() {
            ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchmove", function(b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchend", function(b) {
                b.preventDefault();
                return !1
            }, !1))
        },
        eventListenerSetup: function() {
            window.addEventListener("resize", function() {
                this.reorient();
                window.scrollTo(0, 1)
            }.bind(this), !1);
            window.addEventListener("orientationchange", function() {
                this.reorient();
                window.scrollTo(0, 1)
            }.bind(this), !1);
            document.ontouchmove = function(b) {
                window.scrollTo(0, 1);
                b.preventDefault()
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.api-handler").defines(function() {
    ig.ApiHandler = ig.Class.extend({
        apiAvailable: {
            MJSPreroll: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
            },
            MJSHeader: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize()
            },
            MJSFooter: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize()
            },
            MJSEnd: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize()
            }
        },
        run: function(b, c) {
            if (this.apiAvailable[b]) this.apiAvailable[b](c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-player").defines(function() {
    SoundPlayer = ig.Class.extend({
        tagName: "SoundPlayer",
        stayMuteFlag: !1,
        debug: !1,
        init: function() {
            this.debug && console.log(this.tagName)
        },
        play: function(b) {
            this.debug && console.log("play sound ", b)
        },
        stop: function() {
            this.debug && console.log("stop sound ")
        },
        volume: function() {
            this.debug && console.log("set volume")
        },
        mute: function(b) {
            this.debug && console.log("mute");
            "undefined" === typeof b ? this.stayMuteFlag = !0 : b && (this.stayMuteFlag = !0)
        },
        unmute: function(b) {
            this.debug &&
                console.log("unmute");
            "undefined" === typeof b ? this.stayMuteFlag = !1 : b && (this.stayMuteFlag = !1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-music-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactMusicPlayer = SoundPlayer.extend({
        tagName: "ImpactMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) this.soundList[d] = d, ig.music.add(b[d].path + ".*", d);
            c && c.loop && (ig.music.loop = c.loop)
        },
        play: function(b) {
            this.stayMuteFlag || (this.bgmPlaying = !0, "undefined" === typeof b ? ig.music.play(b) : ig.music.play())
        },
        stop: function() {
            this.bgmPlaying = !1;
            ig.music.pause()
        },
        volume: function(b) {
            console.log("impactmusic:", b);
            ig.music.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        },
        getVolume: function() {
            return ig.music.volume
        },
        mute: function(b) {
            this.parent(b);
            this.bgmPlaying && this.stop()
        },
        unmute: function(b) {
            this.parent(b);
            this.play()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-sound-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactSoundPlayer = SoundPlayer.extend({
        tagName: "ImpactSoundPlayer",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = new ig.Sound(b[d].path + ".*");
                this.soundList[d] = e
            }
        },
        play: function(b) {
            this.stayMuteFlag || ("object" === typeof b ? (console.log(b + " exists"), b.play()) : "string" === typeof b && this.soundList[b].play())
        },
        stop: function(b) {
            this.parent(b);
            b.stop()
        },
        volume: function(b) {
            ig.soundManager.volume =
                0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        },
        getVolume: function() {
            return ig.soundManager.volume
        },
        mute: function(b) {
            this.parent(b);
            ig.Sound.enabled = !1
        },
        unmute: function(b) {
            this.parent(b);
            ig.Sound.enabled = !0
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerPlayer = SoundPlayer.extend({
        tagName: "HowlerPlayer",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = b[d].path,
                    e = new Howl({
                        urls: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext]
                    });
                this.soundList[d] = e
            }
        },
        play: function(b) {
            this.stayMuteFlag || ("object" === typeof b ? b.play() : "string" === typeof b && this.soundList[b].play())
        },
        stop: function(b) {
            this.parent(b);
            b.stop()
        },
        volume: function(b) {
            for (var c in this.soundList) {
                if (0 >
                    b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        },
        getVolume: function() {
            for (var b in this.soundList) return this.soundList[b].volume()
        },
        mute: function(b) {
            this.parent(b);
            Howler.mute()
        },
        unmute: function(b) {
            this.parent(b);
            Howler.unmute()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-music-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerMusicPlayer = SoundPlayer.extend({
        tagName: "HowlerMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = b[d].path,
                    e = new Howl({
                        urls: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
                        loop: !0,
                        autoplay: !1,
                        onend: function() {}.bind(this)
                    });
                this.soundList[d] = e
            }
        },
        play: function(b) {
            if (!this.stayMuteFlag && !this.bgmPlaying)
                if ("object" === typeof b) this.bgmPlaying = !0, b.play();
                else if ("string" === typeof b) this.bgmPlaying = !0, this.soundList[b].play();
            else
                for (var c in this.soundList) {
                    this.soundList[c].play();
                    this.bgmPlaying = !0;
                    break
                }
        },
        stop: function(b) {
            this.parent(b);
            if (this.bgmPlaying) {
                for (var c in this.soundList) this.soundList[c].stop();
                this.bgmPlaying = !1
            }
        },
        volume: function(b) {
            for (var c in this.soundList) {
                if (0 > b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        },
        getVolume: function() {
            for (var b in this.soundList) return this.soundList[b].volume()
        },
        mute: function(b) {
            this.parent(b);
            Howler.mute()
        },
        unmute: function(b) {
            this.parent(b);
            Howler.unmute()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.jukebox-player").requires("plugins.audio.sound-player").defines(function() {
    JukeboxPlayer = SoundPlayer.extend({
        tagName: "JukeboxPlayer",
        bgmPlaying: !1,
        soundList: {},
        jukeboxPlayer: null,
        pausePosition: 0,
        premuteVolume: 0,
        minVolume: 0.0010,
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                this.soundList[d] = d;
                var e = b[d].path;
                this.jukeboxPlayer = new jukebox.Player({
                    resources: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
                    autoplay: !1,
                    spritemap: {
                        music: {
                            start: b[d].startMp3,
                            end: b[d].endMp3,
                            loop: !0
                        }
                    }
                })
            }
        },
        play: function() {
            this.stayMuteFlag || (this.bgmPlaying = !0, this.pausePosition ? (console.log("resume"), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log("play"), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0)), this.premuteVolume = this.getVolume())
        },
        stop: function() {
            this.bgmPlaying = !1;
            this.pausePosition = this.jukeboxPlayer.pause()
        },
        volume: function(b) {
            console.log("jukebox:", b);
            0 >= b ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(b) ? this.jukeboxPlayer.setVolume(1) :
                1 < b ? this.jukeboxPlayer.setVolume(1) : this.jukeboxPlayer.setVolume(b)
        },
        getVolume: function() {
            return this.jukeboxPlayer.getVolume()
        },
        mute: function(b) {
            this.parent(b);
            this.bgmPlaying && (console.log("jukebox", this.premuteVolume), this.stayMuteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume))
        },
        unmute: function(b) {
            this.parent(b);
            this.stayMuteFlag || (console.log("jukebox", this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.webaudio-music-player").requires("plugins.audio.sound-player").defines(function() {
    WebaudioMusicPlayer = SoundPlayer.extend({
        tagName: "WebaudioMusicPlayer",
        bgmPlaying: !1,
        isSupported: !1,
        muteFlag: !1,
        pausedTime: 0,
        webaudio: null,
        useHTML5Audio: !1,
        audio: null,
        inactiveAudio: null,
        codecs: null,
        _volume: 1,
        soundList: {},
        init: function(b) {
            this.webaudio = {
                compatibility: {},
                gainNode: null,
                buffer: null,
                source_loop: {},
                source_once: {}
            };
            try {
                this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context =
                    new this.AudioContext, this.isSupported = !0
            } catch (c) {
                console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0
            }
            if (this.useHTML5Audio)
                if ("undefined" !== typeof Audio) try {
                    new Audio
                } catch (d) {
                    this.useHTML5Audio = !1
                } else this.useHTML5Audio = !1;
            this.useHTML5Audio && (this.audio = new Audio, this.isSupported = !0, this.initHTML5Audio(b));
            if (!this.isSupported) return null;
            this.webaudio && this.initWebAudio(b)
        },
        initWebAudio: function(b) {
            ig.ua.iOS && this.initIOSWebAudioUnlock();
            this.webaudio.gainNode =
                this.webaudio.context.createGain();
            this.webaudio.gainNode.connect(this.webaudio.context.destination);
            this.webaudio.gainNode.gain.value = this._volume;
            var c = "start",
                d = "stop",
                e = this.webaudio.context.createBufferSource();
            "function" !== typeof e.start && (c = "noteOn");
            this.webaudio.compatibility.start = c;
            "function" !== typeof e.stop && (d = "noteOff");
            this.webaudio.compatibility.stop = d;
            for (var g in b) {
                this.soundList[g] = g;
                c = b[g].path;
                b = c + "." + ig.Sound.FORMAT.MP3.ext;
                var n = c + "." + ig.Sound.FORMAT.OGG.ext;
                ig.ua.mobile ? ig.ua.iOS &&
                    (n = b) : (c = navigator.userAgent.toLowerCase(), -1 != c.indexOf("safari") && -1 >= c.indexOf("chrome") && (n = b));
                var x = new XMLHttpRequest;
                x.open("GET", n, !0);
                x.responseType = "arraybuffer";
                x.onload = function() {
                    this.webaudio.context.decodeAudioData(x.response, function(b) {
                        this.webaudio.buffer = b;
                        this.webaudio.source_loop = {};
                        this.bgmPlaying ? this.play() : this.stop()
                    }.bind(this), function() {
                        console.log('Error decoding audio "' + n + '".')
                    })
                }.bind(this);
                x.send();
                break
            }
        },
        initIOSWebAudioUnlock: function() {
            if (this.webaudio) {
                webaudio =
                    this.webaudio;
                var b = function() {
                    var c = webaudio.context,
                        d = c.createBuffer(1, 1, 22050),
                        e = c.createBufferSource();
                    e.buffer = d;
                    e.connect(c.destination);
                    "undefined" === typeof e.start ? e.noteOn(0) : e.start(0);
                    setTimeout(function() {
                        (e.playbackState === e.PLAYING_STATE || e.playbackState === e.FINISHED_STATE) && window.removeEventListener("touchend", b, !1)
                    }, 0)
                };
                window.addEventListener("touchend", b, !1)
            }
        },
        initHTML5Audio: function(b) {
            if (this.useHTML5Audio && this.audio) {
                var c = this.audio;
                this.codecs = {};
                this.codecs = {
                    mp3: !!c.canPlayType("audio/mpeg;").replace(/^no$/,
                        ""),
                    opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
                    m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,
                        "")
                };
                this.is = {
                    ff: Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
                    ie: Boolean(document.all && !window.opera),
                    opera: Boolean(window.opera),
                    chrome: Boolean(window.chrome),
                    safari: Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera)
                };
                this.playDelay = -60;
                this.stopDelay = 30;
                this.is.chrome && (this.playDelay = -25);
                this.is.chrome && (this.stopDelay = 25);
                this.is.ff && (this.playDelay = -25);
                this.is.ff &&
                    (this.stopDelay = 85);
                this.is.opera && (this.playDelay = 5);
                this.is.opera && (this.stopDelay = 0);
                for (var d in b) {
                    this.soundList[d] = d;
                    var e = b[d].path,
                        c = e + "." + ig.Sound.FORMAT.OGG.ext,
                        e = e + "." + ig.Sound.FORMAT.MP3.ext,
                        g = null;
                    this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? g = c : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (g = e);
                    if (g) {
                        ig.ua.mobile ? ig.ua.iOS && (g = e) : (b = navigator.userAgent.toLowerCase(), -1 != b.indexOf("safari") && -1 >= b.indexOf("chrome") && (g = e));
                        this.audio.addEventListener("error", function() {
                            this.audio.error &&
                                4 === this.audio.error.code && (this.isSupported = !1)
                        }, !1);
                        this.audio.src = g;
                        this.audio._pos = 0;
                        this.audio.preload = "auto";
                        this.audio.volume = this._volume;
                        this.inactiveAudio = new Audio;
                        this.inactiveAudio.src = g;
                        this.inactiveAudio._pos = 0;
                        this.inactiveAudio.preload = "auto";
                        this.inactiveAudio.volume = this._volume;
                        this.inactiveAudio.load();
                        var n = function() {
                            this._duration = this.audio.duration;
                            this._loaded || (this._loaded = !0);
                            this.bgmPlaying ? this.play() : this.stop();
                            this.audio.removeEventListener("canplaythrough", n, !1)
                        }.bind(this);
                        this.audio.addEventListener("canplaythrough", n, !1);
                        this.audio.load();
                        break
                    }
                }
            }
        },
        play: function(b) {
            if (this.isSupported)
                if (this.bgmPlaying = !0, this.webaudio)
                    if (this.webaudio.buffer) {
                        if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
                            this.webaudio.source_loop = this.webaudio.context.createBufferSource();
                            this.webaudio.source_loop.buffer = this.webaudio.buffer;
                            this.webaudio.source_loop.loop = !0;
                            this.webaudio.source_loop.connect(this.webaudio.gainNode);
                            isNaN(b) && (b = 0, this.pausedTime &&
                                (b = this.pausedTime));
                            this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
                            if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0, b, this.webaudio.buffer.duration - b), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime + (this.webaudio.buffer.duration -
                                b));
                            else this.webaudio.source_loop[this.webaudio.compatibility.start](0, b);
                            this.webaudio.source_loop._playing = !0
                        }
                    } else this.bgmPlaying = !0;
            else if (this.audio) {
                var c = this.audio;
                if (!this.muteFlag) {
                    this.bgmPlaying = !0;
                    isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime));
                    var d = this._duration - b;
                    this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null);
                    this._onEndTimer = setTimeout(function() {
                        this.audio.currentTime = 0;
                        this.audio.pause();
                        this.pausedTime = 0;
                        if (this.inactiveAudio) {
                            var b = this.audio;
                            this.audio = this.inactiveAudio;
                            this.inactiveAudio = b
                        }
                        this.play()
                    }.bind(this), 1E3 * d + this.playDelay);
                    4 === c.readyState || !c.readyState && navigator.isCocoonJS ? (c.readyState = 4, c.currentTime = b, c.muted = this.muteFlag || c.muted, c.volume = this._volume, setTimeout(function() {
                        c.play()
                    }, 0)) : (clearTimeout(this._onEndTimer), this._onEndTimer = null, function() {
                        var b = function() {
                            this.play();
                            c.removeEventListener("canplaythrough", b, !1)
                        }.bind(this);
                        c.addEventListener("canplaythrough", b, !1)
                    }())
                }
            }
        },
        stop: function() {
            this.bgmPlaying = !1;
            if (this.isSupported)
                if (this.webaudio) {
                    if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0)
                } else if (this.audio) {
                var b =
                    this.audio;
                this.pausedTime = b.currentTime;
                b.currentTime = 0;
                b.pause();
                clearTimeout(this._onEndTimer);
                this._onEndTimer = null
            }
        },
        volume: function(b) {
            this.isSupported && (this._volume = b, 0 > this._volume ? this._volume = 0 : 1 < this._volume && (this._volume = 1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)))
        },
        getVolume: function() {
            return !this.isSupported ? 0 : this.webaudio ? !this.webaudio.gainNode ?
                0 : this.webaudio.gainNode.gain.value : this.audio ? this.audio.volume : this._volume
        },
        mute: function(b) {
            this.parent(b);
            !1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0))
        },
        unmute: function(b) {
            this.parent(b);
            !this.stayMuteFlag && !0 == this.muteFlag && (this.muteFlag = !1, this.bgmPlaying && this.play())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-info").defines(function() {
    SoundInfo = ig.Class.extend({
        FORMATS: {
            OGG: ".ogg",
            MP3: ".mp3"
        },
        sfx: {
            kittyopeningSound: {
                path: "media/audio/opening/kittyopening"
            },
            staticSound: {
                path: "media/audio/play/static"
            },
            openingSound: {
                path: "media/audio/opening/opening"
            },
            click: {
                path: "media/audio/click"
            },
            slide: {
                path: "media/audio/slide"
            },
            slideOut: {
                path: "media/audio/slide-out"
            },
            coin: {
                path: "media/audio/coin"
            },
            win: {
                path: "media/audio/win"
            }
        },
        bgm: {
            background: {
                path: "media/audio/bgm",
                startOgg: 0,
                endOgg: 23.989,
                startMp3: 0,
                endMp3: 23.989
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-handler").requires("plugins.audio.impact-music-player", "plugins.audio.impact-sound-player", "plugins.audio.howler-player", "plugins.audio.howler-music-player", "plugins.audio.jukebox-player", "plugins.audio.webaudio-music-player", "plugins.audio.sound-info").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        bgmPlayer: null,
        sfxPlayer: null,
        focusBlurMute: !1,
        soundInfo: new SoundInfo,
        init: function() {
            console.log("Initiating sound handler");
            this.initWindowHandler();
            ig.ua.mobile ?
                (this.initPowerButtonFix(), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                    loop: !0
                }), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {
                    loop: !0
                }))) : (this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                    loop: !0
                }), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {
                    loop: !0
                })));
            this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx)
        },
        checkBGM: function() {
            return this.bgmPlayer.stayMuteFlag
        },
        checkSFX: function() {
            return this.sfxPlayer.stayMuteFlag
        },
        muteSFX: function(b) {
            this.sfxPlayer && this.sfxPlayer.mute(b)
        },
        muteBGM: function(b) {
            this.bgmPlayer && this.bgmPlayer.mute(b)
        },
        unmuteSFX: function(b) {
            this.sfxPlayer && this.sfxPlayer.unmute(b)
        },
        unmuteBGM: function(b) {
            this.bgmPlayer && this.bgmPlayer.unmute(b)
        },
        muteAll: function(b) {
            this.muteSFX(b);
            this.muteBGM(b)
        },
        unmuteAll: function(b) {
            this.unmuteSFX(b);
            this.unmuteBGM(b)
        },
        forceMuteAll: function() {
            this.focusBlurMute || this.muteAll(!1);
            this.focusBlurMute = !0
        },
        forceUnMuteAll: function() {
            this.focusBlurMute && (this.unmuteAll(!1),
                this.focusBlurMute = !1)
        },
        initWindowHandler: function() {
            "true" === ig.domHandler.getQueryVariable("webview") ? ($(window).focus(function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }), $(window).blur(function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })) : (window.onfocus = function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, window.onblur = function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })
        },
        initPowerButtonFix: function() {
            var b = this.getHiddenProp();
            b && (b = b.replace(/[H|h]idden/,
                "") + "visibilitychange", document.addEventListener(b, this.visChange));
            window.addEventListener("pagehide", function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            }, !1);
            window.addEventListener("pageshow", function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, !1)
        },
        getHiddenProp: function() {
            var b = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var c = 0; c < b.length; c++)
                if (b[c] + "Hidden" in document) return b[c] + "Hidden";
            return null
        },
        isHidden: function() {
            var b = this.getHiddenProp();
            return !b ?
                !1 : document[b]
        },
        visChange: function() {
            ig.soundHandler.isHidden() ? ig.soundHandler && ig.soundHandler.forceMuteAll() : ig.soundHandler && ig.soundHandler.forceUnMuteAll()
        },
        saveVolume: function() {
            this.sfxPlayer && ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume());
            this.bgmPlayer && ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume())
        },
        forceLoopBGM: function() {
            var b;
            if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
                var c = this.bgmPlayer.jukeboxPlayer;
                if (c) {
                    null != window.mozInnerScreenX &&
                        /firefox/.test(navigator.userAgent.toLowerCase());
                    b = Boolean(window.chrome);
                    !window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
                    var d = 0.1;
                    ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3)));
                    c.settings.spritemap.music && (b = c.settings.spritemap.music.end - d, c.getCurrentTime() >= b && (b = c.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (c.play(b, !0), this.forcelooped = !0, setTimeout(function() {
                        ig.soundHandler.forcelooped = !1
                    }, d)) : c.setCurrentTime(b)))
                } else "ImpactMusicPlayer" ==
                    this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), b = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase()), d = 0.1, ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3))), c = 0, "mp3" == ig.soundManager.format.ext && (c = 0.05), ig.music.currentTrack && (b = ig.music.currentTrack.duration - d, ig.music.currentTrack.currentTime >= b && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(), ig.music.currentTrack.currentTime =
                        c, ig.music.currentTrack.play(), this.forcelooped = !0, setTimeout(function() {
                            ig.soundHandler.forcelooped = !1
                        }, d)) : ig.music.currentTrack.currentTime = c)))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.storage").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.mouse").defines(function() {
    Mouse = ig.Class.extend({
        bindings: {
            click: [ig.KEY.MOUSE1]
        },
        init: function() {
            ig.input.initMouse();
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        },
        getPos: function() {
            if (ig.ua.mobile) var b = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x,
                c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
            else b = ig.input.mouse.x, c = ig.input.mouse.y;
            return new Vector2(b, c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.keyboard").defines(function() {
    Keyboard = ig.Class.extend({
        bindings: {
            jump: [ig.KEY.W, ig.KEY.UP_ARROW],
            moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
            moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW],
            shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE]
        },
        init: function() {
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad-input").defines(function() {
    ig.PADKEY = {
        BUTTON_0: 0,
        PADBUTTON_1: 1,
        BUTTON_2: 2,
        BUTTON_3: 3,
        BUTTON_LEFT_BUMPER: 4,
        BUTTON_RIGHT_BUMPER: 5,
        BUTTON_LEFT_TRIGGER: 6,
        BUTTON_RIGHT_TRIGGER: 7,
        BUTTON_LEFT_JOYSTICK: 10,
        BUTTON_RIGHT_JOYSTICK: 11,
        BUTTON_DPAD_UP: 12,
        BUTTON_DPAD_DOWN: 13,
        BUTTON_DPAD_LEFT: 14,
        BUTTON_DPAD_RIGHT: 15,
        BUTTON_MENU: 16,
        AXIS_LEFT_JOYSTICK_X: 0,
        AXIS_LEFT_JOYSTICK_Y: 1,
        AXIS_RIGHT_JOYSTICK_X: 2,
        AXIS_RIGHT_JOYSTICK_Y: 3
    };
    ig.GamepadInput = ig.Class.extend({
        isInit: !1,
        isSupported: !1,
        list: [],
        bindings: {},
        states: {},
        presses: {},
        releases: {},
        downLocks: {},
        upLocks: {},
        leftStick: {
            x: 0,
            y: 0
        },
        rightStick: {
            x: 0,
            y: 0
        },
        start: function() {
            if (!this.isInit) {
                this.isInit = !0;
                var b = navigator.getGamepads || navigator.webkitGetGamepads;
                b && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads());
                this.isSupported = b
            }
        },
        isAvailable: function() {
            return this.isInit && this.isSupported
        },
        buttonPressed: function(b) {
            return "object" == typeof b ? b.pressed :
                1 == b
        },
        buttonDown: function(b) {
            if (b = this.bindings[b]) this.states[b] = !0, this.downLocks[b] || (this.presses[b] = !0, this.downLocks[b] = !0)
        },
        buttonUp: function(b) {
            if ((b = this.bindings[b]) && this.downLocks[b] && !this.upLocks[b]) this.states[b] = !1, this.releases[b] = !0, this.upLocks[b] = !0
        },
        clearPressed: function() {
            for (var b in this.releases) this.states[b] = !1, this.downLocks[b] = !1;
            this.releases = {};
            this.presses = {};
            this.upLocks = {}
        },
        bind: function(b, c) {
            this.bindings[b] = c
        },
        unbind: function(b) {
            this.releases[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.states = {};
            this.presses = {};
            this.releases = {};
            this.downLocks = {};
            this.upLocks = {}
        },
        state: function(b) {
            return this.states[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return this.releases[b]
        },
        clamp: function(b, c, d) {
            return b < c ? c : b > d ? d : b
        },
        pollGamepads: function() {
            if (this.isSupported) {
                this.leftStick.x = 0;
                this.leftStick.y = 0;
                this.rightStick.x = 0;
                this.rightStick.y = 0;
                this.list = navigator.getGamepads();
                for (var b in this.bindings) {
                    for (var c = !1, d = 0; d < this.list.length; d++) {
                        var e = this.list[d];
                        if (e && e.buttons && this.buttonPressed(e.buttons[b])) {
                            c = !0;
                            break
                        }
                    }
                    c ? this.buttonDown(b) : this.buttonUp(b)
                }
                for (d = 0; d < this.list.length; d++)
                    if ((e = this.list[d]) && e.axes) {
                        b = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
                        var c = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
                            g = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
                            e = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
                        this.leftStick.x += isNaN(b) ? 0 : b;
                        this.leftStick.y += isNaN(c) ? 0 : c;
                        this.rightStick.x += isNaN(g) ? 0 : g;
                        this.rightStick.y +=
                            isNaN(e) ? 0 : e
                    }
                0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -1, 1), this.leftStick.y = this.clamp(this.leftStick.y, -1, 1), this.rightStick.x = this.clamp(this.rightStick.x, -1, 1), this.rightStick.y = this.clamp(this.rightStick.y, -1, 1))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad").requires("plugins.io.gamepad-input").defines(function() {
    Gamepad = ig.Class.extend({
        bindings: {
            padJump: [ig.PADKEY.BUTTON_0]
        },
        init: function() {
            ig.gamepadInput.start();
            for (var b in this.bindings)
                for (var c = 0; c < this.bindings[b].length; c++) ig.gamepadInput.bind(this.bindings[b][c], b)
        },
        press: function() {},
        held: function() {},
        release: function() {}
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch").defines(function() {
    Multitouch = ig.Class.extend({
        init: function() {
            ig.multitouchInput.start()
        },
        getTouchesPos: function() {
            if (ig.ua.mobile) {
                if (0 < ig.multitouchInput.touches.length) {
                    for (var b = [], c = 0; c < ig.multitouchInput.touches.length; c++) {
                        var d = ig.multitouchInput.touches[c];
                        b.push({
                            x: d.x,
                            y: d.y
                        })
                    }
                    return b
                }
                return null
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch-input").defines(function() {
    ig.MultitouchInput = ig.Class.extend({
        isStart: !1,
        touches: [],
        multitouchCapable: !1,
        lastEventUp: null,
        start: function() {
            this.isStart || (this.isStart = !0, navigator.maxTouchPoints && 1 < navigator.maxTouchPoints && (this.multitouchCapable = !0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener("MSPointerDown", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove",
                this.touchmove.bind(this), !1), ig.system.canvas.style.msContentZooming = "none", ig.system.canvas.style.msTouchAction = "none"), ig.system.canvas.addEventListener("touchstart", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.touchmove.bind(this), !1)))
        },
        touchmove: function(b) {
            if (ig.ua.touchDevice) {
                var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                    d = parseInt(ig.system.canvas.offsetHeight) ||
                    ig.system.realHeight,
                    c = ig.system.scale * (c / ig.system.realWidth),
                    d = ig.system.scale * (d / ig.system.realHeight);
                if (b.touches) {
                    for (; 0 < this.touches.length;) this.touches.pop();
                    !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                    var e = {
                        left: 0,
                        top: 0
                    };
                    ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                    for (var g = 0; g < b.touches.length; g++) {
                        var n = b.touches[g];
                        n && this.touches.push({
                            x: (n.clientX - e.left) / c,
                            y: (n.clientY - e.top) / d
                        })
                    }
                } else this.windowMove(b)
            }
        },
        touchdown: function(b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) this.windowKeyDown(b);
            else if (ig.ua.touchDevice && b.touches) {
                for (; 0 < this.touches.length;) this.touches.pop();
                !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                var e = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                for (var g = 0; g < b.touches.length; g++) {
                    var n = b.touches[g];
                    n && this.touches.push({
                        x: (n.clientX - e.left) / c,
                        y: (n.clientY - e.top) / d
                    })
                }
            }
        },
        touchup: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            parseInt(ig.system.canvas.offsetHeight);
            c = ig.system.scale * (c / ig.system.realWidth);
            if (window.navigator.msPointerEnabled) this.windowKeyUp(b);
            else {
                this.lastEventUp = b;
                var d = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
                if (ig.ua.touchDevice) {
                    b =
                        (b.changedTouches[0].clientX - d.left) / c;
                    for (c = 0; c < this.touches.length; c++) this.touches[c].x >= b - 40 && this.touches[c].x <= b + 40 && this.touches.splice(c, 1)
                }
            }
        },
        windowKeyDown: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) {
                var e = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                b = b.changedTouches ? b.changedTouches : [b];
                for (var g = 0; g < b.length; ++g) {
                    for (var n = b[g], x = "undefined" != typeof n.identifier ? n.identifier : "undefined" != typeof n.pointerId ? n.pointerId : 1, m = (n.clientX - e.left) / c, n = (n.clientY - e.top) / d, r = 0; r < this.touches.length; ++r) this.touches[r].identifier == x && this.touches.splice(r, 1);
                    this.touches.push({
                        x: m,
                        y: n,
                        identifier: x
                    })
                }
                for (c = 0; c < this.touches.length; c++);
            }
        },
        windowKeyUp: function(b) {
            b = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId :
                1;
            for (var c = 0; c < this.touches.length; ++c) this.touches[c].identifier == b && this.touches.splice(c, 1);
            for (; 0 < this.touches.length;) this.touches.pop()
        },
        windowMove: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight),
                e = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
            if (window.navigator.msPointerEnabled)
                for (var g =
                    "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId : 1, n = 0; n < this.touches.length; ++n)
                    if (this.touches[n].identifier == g) {
                        var x = (b.clientY - e.top) / d;
                        this.touches[n].x = (b.clientX - e.left) / c;
                        this.touches[n].y = x
                    }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.io-manager").requires("plugins.io.storage", "plugins.io.mouse", "plugins.io.keyboard", "plugins.io.gamepad", "plugins.io.multitouch", "plugins.io.multitouch-input", "plugins.io.gamepad-input").defines(function() {
    IoManager = ig.Class.extend({
        storage: null,
        localStorageSupport: !1,
        gamekey: "TeamKaboom",
        mouse: null,
        keyboard: null,
        multitouch: null,
        gamepad: null,
        init: function() {
            ig.multitouchInput = new ig.MultitouchInput;
            ig.gamepadInput = new ig.GamepadInput;
            this.unbindAll();
            this.initStorage();
            this.initMouse();
            this.initKeyboard()
        },
        unbindAll: function() {
            ig.input.unbindAll();
            ig.gamepadInput.unbindAll()
        },
        initStorage: function() {
            this._supportsLocalStorage() && (this.storage = new ig.Storage)
        },
        initMouse: function() {
            this.mouse = new Mouse
        },
        initKeyboard: function() {
            this.keyboard = new Keyboard
        },
        initMultitouch: function() {
            this.multitouch = new Multitouch
        },
        initGamepad: function() {
            this.gamepad = new Gamepad
        },
        press: function(b) {
            return ig.input.pressed(b) || this.gamepad.press(b) ? !0 : !1
        },
        held: function(b) {
            return ig.input.state(b) || this.gamepad.state(b) ?
                !0 : !1
        },
        release: function(b) {
            return ig.input.released(b) || this.gamepad.released(b) ? !0 : !1
        },
        getClickPos: function() {
            return this.mouse.getPos()
        },
        getTouchesPos: function() {
            return this.multitouch.getTouchesPos()
        },
        checkOverlap: function(b, c, d, e, g) {
            return b.x > c + e || b.x < c || b.y > d + g || b.y < d ? !1 : !0
        },
        _supportsLocalStorage: function() {
            try {
                return localStorage.setItem("test", "test"), localStorage.removeItem("test"), this.localStorageSupport = "localStorage" in window && null !== window.localStorage
            } catch (b) {
                return this.localStorageSupport
            }
        },
        storageIsSet: function(b) {
            return !this.localStorageSupport ? null : this.storage.isSet(b)
        },
        storageGet: function(b) {
            return !this.localStorageSupport ? null : this.storage.get(b)
        },
        storageSet: function(b, c) {
            if (!this.localStorageSupport) return null;
            this.storage.set(b, c)
        },
        assert: function(b, c, d) {
            if (c !== d) throw "actualValue:" + c + " not equal to testValue:" + d + " at " + b;
        }
    })
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        backgroundImage: new ig.Image("media/graphics/splash/background.png"),
        coinImage: new ig.Image("media/graphics/game/buttons/coin-1.png"),
        resources: [new ig.Sound("media/audio/bgm.mp3"), new ig.Sound("media/audio/bgm.ogg"), new ig.Sound("media/audio/branding/splash/opening.mp3"), new ig.Sound("media/audio/branding/splash/opening.ogg"), new ig.Sound("media/audio/click.mp3"), new ig.Sound("media/audio/click.ogg"),
            new ig.Sound("media/audio/coin.mp3"), new ig.Sound("media/audio/coin.ogg"), new ig.Sound("media/audio/opening/ching.mp3"), new ig.Sound("media/audio/opening/ching.ogg"), new ig.Sound("media/audio/opening/kittyopening.mp3"), new ig.Sound("media/audio/opening/kittyopening.ogg"), new ig.Sound("media/audio/opening/opening.mp3"), new ig.Sound("media/audio/opening/opening.ogg"), new ig.Sound("media/audio/play/static.mp3"), new ig.Sound("media/audio/play/static.ogg"), new ig.Sound("media/audio/slide.mp3"), new ig.Sound("media/audio/slide.ogg"),
            new ig.Sound("media/audio/start.mp3"), new ig.Sound("media/audio/start.ogg"), new ig.Image("media/graphics/game/backgrounds/mask.png"), new ig.Image("media/graphics/game/backgrounds/menu.png"), new ig.Image("media/graphics/game/backgrounds/notification.png"), new ig.Image("media/graphics/game/backgrounds/play.png"), new ig.Image("media/graphics/game/backgrounds/settings.png"), new ig.Image("media/graphics/game/backgrounds/stat-bet.png"), new ig.Image("media/graphics/game/backgrounds/stat-player.png"), new ig.Image("media/graphics/game/buttons/close.png"),
            new ig.Image("media/graphics/game/buttons/coin-1.png"), new ig.Image("media/graphics/game/buttons/coin-100.png"), new ig.Image("media/graphics/game/buttons/coin-25.png"), new ig.Image("media/graphics/game/buttons/coin-5.png"), new ig.Image("media/graphics/game/buttons/double.png"), new ig.Image("media/graphics/game/buttons/hit.png"), new ig.Image("media/graphics/game/buttons/knob.png"), new ig.Image("media/graphics/game/buttons/menu.png"), new ig.Image("media/graphics/game/buttons/more-games.png"), new ig.Image("media/graphics/game/buttons/play.png"),
            new ig.Image("media/graphics/game/buttons/resume.png"), new ig.Image("media/graphics/game/buttons/settings-main.png"), new ig.Image("media/graphics/game/buttons/settings-play.png"), new ig.Image("media/graphics/game/buttons/stand.png"), new ig.Image("media/graphics/game/buttons/switch.png"), new ig.Image("media/graphics/game/cards/1-1.png"), new ig.Image("media/graphics/game/cards/1-2.png"), new ig.Image("media/graphics/game/cards/1-3.png"), new ig.Image("media/graphics/game/cards/1-4.png"), new ig.Image("media/graphics/game/cards/10-1.png"),
            new ig.Image("media/graphics/game/cards/10-2.png"), new ig.Image("media/graphics/game/cards/10-3.png"), new ig.Image("media/graphics/game/cards/10-4.png"), new ig.Image("media/graphics/game/cards/11-1.png"), new ig.Image("media/graphics/game/cards/11-2.png"), new ig.Image("media/graphics/game/cards/11-3.png"), new ig.Image("media/graphics/game/cards/11-4.png"), new ig.Image("media/graphics/game/cards/12-1.png"), new ig.Image("media/graphics/game/cards/12-2.png"), new ig.Image("media/graphics/game/cards/12-3.png"),
            new ig.Image("media/graphics/game/cards/12-4.png"), new ig.Image("media/graphics/game/cards/13-1.png"), new ig.Image("media/graphics/game/cards/13-2.png"), new ig.Image("media/graphics/game/cards/13-3.png"), new ig.Image("media/graphics/game/cards/13-4.png"), new ig.Image("media/graphics/game/cards/2-1.png"), new ig.Image("media/graphics/game/cards/2-2.png"), new ig.Image("media/graphics/game/cards/2-3.png"), new ig.Image("media/graphics/game/cards/2-4.png"), new ig.Image("media/graphics/game/cards/3-1.png"),
            new ig.Image("media/graphics/game/cards/3-2.png"), new ig.Image("media/graphics/game/cards/3-3.png"), new ig.Image("media/graphics/game/cards/3-4.png"), new ig.Image("media/graphics/game/cards/4-1.png"), new ig.Image("media/graphics/game/cards/4-2.png"), new ig.Image("media/graphics/game/cards/4-3.png"), new ig.Image("media/graphics/game/cards/4-4.png"), new ig.Image("media/graphics/game/cards/5-1.png"), new ig.Image("media/graphics/game/cards/5-2.png"), new ig.Image("media/graphics/game/cards/5-3.png"), new ig.Image("media/graphics/game/cards/5-4.png"),
            new ig.Image("media/graphics/game/cards/6-1.png"), new ig.Image("media/graphics/game/cards/6-2.png"), new ig.Image("media/graphics/game/cards/6-3.png"), new ig.Image("media/graphics/game/cards/6-4.png"), new ig.Image("media/graphics/game/cards/7-1.png"), new ig.Image("media/graphics/game/cards/7-2.png"), new ig.Image("media/graphics/game/cards/7-3.png"), new ig.Image("media/graphics/game/cards/7-4.png"), new ig.Image("media/graphics/game/cards/8-1.png"), new ig.Image("media/graphics/game/cards/8-2.png"), new ig.Image("media/graphics/game/cards/8-3.png"),
            new ig.Image("media/graphics/game/cards/8-4.png"), new ig.Image("media/graphics/game/cards/9-1.png"), new ig.Image("media/graphics/game/cards/9-2.png"), new ig.Image("media/graphics/game/cards/9-3.png"), new ig.Image("media/graphics/game/cards/9-4.png"), new ig.Image("media/graphics/game/cards/back.png"), new ig.Image("media/graphics/game/chip.png"), new ig.Image("media/graphics/game/girl.png"), new ig.Image("media/graphics/game/title.png"), new ig.Image("media/graphics/generic-ad/dark/close-button.png"),
            new ig.Image("media/graphics/generic-ad/light/close-button.png"), new ig.Image("media/graphics/misc/invisible.png"), new ig.Image("media/graphics/opening/kitty.png"), new ig.Image("media/graphics/opening/kittytitle.png"), new ig.Image("media/graphics/opening/m_icon.png"), new ig.Image("media/graphics/opening/shield.png"), new ig.Image("media/graphics/opening/title.png"), new ig.Image("media/graphics/orientate/landscape.jpg"), new ig.Image("media/graphics/orientate/portrait.jpg"), new ig.Image("media/graphics/orientate/scroll_down.png"),
            new ig.Image("media/graphics/overlays/close-button.png"), new ig.Image("media/graphics/overlays/close-button2.png"), new ig.Image("media/graphics/splash/background.png"), new ig.Image("media/graphics/splash/bar-loaded.png"), new ig.Image("media/graphics/splash/bar-loading.png"), new ig.Image("media/graphics/splash/cover-start.jpg")
        ],
        init: function(b, c) {
            this.parent(b, c);
            ig.apiHandler.run("MJSPreroll");
            this.context = ig.system.context
        },
        end: function() {
            this.parent();
            if (ig.ua.mobile) {
                var b = ig.domHandler.getElementById("#play");
                ig.domHandler.show(b)
            }
            b = 0 <= document.URL.indexOf("localhost") ? 500 : 3E3;
            window.setTimeout("ig.system.setGame(MyGame)", b)
        },
        setupCustomAnimation: function() {
            this.customAnim = new ig.Animation(this.customAnim, 0.05, [0, 1, 2, 3, 4, 5]);
            this.customAnim.currentFrame = 0;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function() {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++ : this.customAnim.currentFrame = 0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        draw: function() {
            this.context.clearRect(0, 0, ig.system.width, ig.system.height);
            this.context.font = "50px gadugi";
            this.context.fillText("LOADING", -100, -100);
            this.context.font = "50px georgiai";
            this.context.fillText("LOADING", -100, -100);
            new ig.Image("media/graphics/game/buttons/coin-100.png");
            new ig.Image("media/graphics/game/buttons/coin-25.png");
            new ig.Image("media/graphics/game/buttons/coin-5.png");
            var b = new ig.Image("media/graphics/game/backgrounds/notification.png");
            this.context.drawImage(b.data, ig.system.width, ig.system.height, 201, 59);
            this.backgroundImage.draw(0, 0);
            b = Math.floor(100 * this.status);
            99 <= b ? this.coinImage = new ig.Image("media/graphics/game/buttons/coin-100.png") : 49 <= b ? this.coinImage = new ig.Image("media/graphics/game/buttons/coin-25.png") : 24 <= b && (this.coinImage = new ig.Image("media/graphics/game/buttons/coin-5.png"));
            var b = -this.coinImage.width / 2 + ig.system.width * this.status,
                c = 405 + this.coinImage.height / 2,
                d = 1440 * this.status;
            this.context.save();
            this.context.translate(b,
                c);
            this.context.rotate(d * Math.PI / 180);
            this.context.drawImage(this.coinImage.data, -this.coinImage.width / 2, -this.coinImage.height / 2);
            this.context.restore()
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var c = 0; c < this.length; ++c)
            if (this[c] === b) return c;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens =
                b
        }
    };
    ig.Entity.prototype.tween = function(b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
    };
    ig.Entity.prototype.stopTweens = function(b) {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
    };
    ig.Tween = function(b, c, d, e) {
        var g = {},
            n = {},
            x = {},
            m = 0,
            r = !1,
            y = !1,
            A = !1;
        this.duration = d;
        this.paused =
            this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, e);
        this.loopNum = this.loopCount;
        this.chain = function(b) {
            A = b
        };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, e) {
            if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (e[b] = d[b]);
            else
                for (subprop in d[b]) e[b] || (e[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop,
                    c[b], d[b], e[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            m = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
            y = !0;
            r = new ig.Timer;
            for (var d in c) this.initEnd(d, c, n);
            for (d in n) this.initStart(d, n, b, g), this.initDelta(d, x, b, n)
        };
        this.initDelta = function(b, c, d, e) {
            if ("object" !== typeof e[b]) c[b] = e[b] - d[b];
            else
                for (subprop in e[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], e[b])
        };
        this.propUpdate = function(b, c, d, e, g) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ?
                d[b] + e[b] * g : c[b];
            else
                for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], g)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!y) return !1;
            if (this.delay) {
                if (r.delta() < this.delay) return;
                this.delay = 0;
                r.reset()
            }
            if (this.paused || this.complete) return !1;
            var c = (r.delta() + m) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in x) this.propUpdate(property, b, g, x, d);
            if (1 <= c) {
                if (0 == this.loopNum ||
                    !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    A && A.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in g) this.propSet(property, g, b);
                    m = 0;
                    r.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, n);
                    ig.merge(d, g);
                    ig.merge(g, c);
                    ig.merge(n, d);
                    for (property in n) this.initDelta(property, x, b, n);
                    m = 0;
                    r.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            m += r.delta()
        };
        this.resume = function() {
            this.paused = !1;
            r.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, m += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(b) {
        return b
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(b) {
        return b * b
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(b) {
        return -b * (b - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut =
        function(b) {
            return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
        };
    ig.Tween.Easing.Cubic.EaseIn = function(b) {
        return b * b * b
    };
    ig.Tween.Easing.Cubic.EaseOut = function(b) {
        return --b * b * b + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(b) {
        return b * b * b * b
    };
    ig.Tween.Easing.Quartic.EaseOut = function(b) {
        return -(--b * b * b * b - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn =
        function(b) {
            return b * b * b * b * b
        };
    ig.Tween.Easing.Quintic.EaseOut = function(b) {
        return (b -= 1) * b * b * b * b + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
        return -Math.cos(b * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
        return Math.sin(b * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
        return -0.5 * (Math.cos(Math.PI * b) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(b) {
        return 0 == b ? 0 : Math.pow(2,
            10 * (b - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(b) {
        return -(Math.sqrt(1 - b * b) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(b) {
        return Math.sqrt(1 - --b * b)
    };
    ig.Tween.Easing.Circular.EaseInOut = function(b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn =
        function(b) {
            var c, d = 0.1,
                e = 0.4;
            if (0 == b) return 0;
            if (1 == b) return 1;
            e || (e = 0.3);
            !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
            return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e))
        };
    ig.Tween.Easing.Elastic.EaseOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / e) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(b) {
        return b * b * (2.70158 * b - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn =
        function(b) {
            return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
        };
    ig.Tween.Easing.Bounce.EaseOut = function(b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b) switch (b) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (b = getQueryVariable("debug")) switch (b) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function(b) {
            for (var c in ig.sizeHandler.dynamicClickableEntityDivs) {
                var d = ig.domHandler.getElementById("#" + c);
                ig.domHandler.hide(d)
            }
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        },
        loadLevelWithoutEntities: function(b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function(b) {
            newLevels = [];
            return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length - 1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.fake-storage").requires("impact.game").defines(function() {
    ig.FakeStorage = ig.Class.extend({
        tempData: {},
        init: function() {
            ig.FakeStorage.instance = this
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        set: function(b, c) {
            this.tempData[b] = c
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        get: function(b) {
            return this.tempData[b]
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        isSet: function(b) {
            return null !==
                this.get(b)
        },
        remove: function() {
            delete this.tempData.key
        },
        clear: function() {
            this.tempData = {}
        }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0);
            console.log("spawn branding")
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash: new ig.Image("branding/splash1.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240);
            this.pos.x = (ig.system.width - this.size.x) /
                2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            c = this.tween({}, 2.5, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function() {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k ==
                    b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            g = $("#" + g.id);
            g.css("float", "left");
            g.css("position", "absolute");
            if (ig.ua.mobile) {
                var n = window.innerHeight / mobileHeight,
                    x = window.innerWidth /
                    mobileWidth;
                g.css("left", this.pos.x * x);
                g.css("top", this.pos.y * n);
                g.css("width", this.size.x * x);
                g.css("height", this.size.y * n)
            } else n = w / 2 - destW / 2, x = h / 2 - destH / 2, console.log(n, x), g.css("left", n + this.pos.x * multiplier), g.css("top", x + this.pos.y * multiplier), g.css("width", this.size.x * multiplier), g.css("height", this.size.y * multiplier);
            e ? g.html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : g.html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        draw: function() {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.fillStyle = "#000";
            ig.system.context.font = "12px Arial";
            ig.system.context.textAlign = "left";
            320 >= ig.system.width ?
                ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
            this.parent();
            this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.buttons.button").requires("impact.entity", "plugins.data.vector").defines(function() {
    EntityButton = ig.Entity.extend({
        data: {
            play: {
                sheet: {
                    x: 247,
                    y: 74
                },
                size: {
                    x: 226,
                    y: 40
                },
                offset: {
                    x: 10,
                    y: 6
                }
            },
            "more-games": {
                sheet: {
                    x: 247,
                    y: 74
                },
                size: {
                    x: 226,
                    y: 40
                },
                offset: {
                    x: 10,
                    y: 6
                }
            },
            "settings-main": {
                sheet: {
                    x: 247,
                    y: 74
                },
                size: {
                    x: 226,
                    y: 40
                },
                offset: {
                    x: 10,
                    y: 6
                }
            },
            "settings-play": {
                sheet: {
                    x: 35,
                    y: 34
                },
                size: {
                    x: 35,
                    y: 34
                },
                offset: {
                    x: 0,
                    y: 0
                }
            },
            "double": {
                sheet: {
                    x: 114,
                    y: 47
                },
                size: {
                    x: 104,
                    y: 27
                },
                offset: {
                    x: 4,
                    y: 3
                }
            },
            hit: {
                sheet: {
                    x: 114,
                    y: 47
                },
                size: {
                    x: 104,
                    y: 27
                },
                offset: {
                    x: 4,
                    y: 3
                }
            },
            stand: {
                sheet: {
                    x: 114,
                    y: 47
                },
                size: {
                    x: 104,
                    y: 27
                },
                offset: {
                    x: 4,
                    y: 3
                }
            },
            menu: {
                sheet: {
                    x: 136,
                    y: 49
                },
                size: {
                    x: 136,
                    y: 49
                },
                offset: {
                    x: 0,
                    y: 0
                }
            },
            resume: {
                sheet: {
                    x: 136,
                    y: 49
                },
                size: {
                    x: 136,
                    y: 49
                },
                offset: {
                    x: 0,
                    y: 0
                }
            },
            close: {
                sheet: {
                    x: 17,
                    y: 17
                },
                size: {
                    x: 17,
                    y: 17
                },
                offset: {
                    x: 0,
                    y: 0
                }
            },
            knob: {
                sheet: {
                    x: 29,
                    y: 23
                },
                size: {
                    x: 29,
                    y: 23
                },
                offset: {
                    x: 0,
                    y: 0
                }
            },
            "switch": {
                sheet: {
                    x: 61,
                    y: 23
                },
                size: {
                    x: 61,
                    y: 23
                },
                offset: {
                    x: 0,
                    y: 0
                }
            }
        },
        map: {
            right: {
                play: {
                    position: {
                        x: 312,
                        y: 260
                    }
                },
                "more-games": {
                    position: {
                        x: 312,
                        y: 380
                    }
                },
                "settings-main": {
                    position: {
                        x: 312,
                        y: 320
                    }
                },
                "settings-play": {
                    position: {
                        x: 7,
                        y: 5
                    }
                },
                "double": {
                    position: {
                        x: 466,
                        y: 300
                    }
                },
                hit: {
                    position: {
                        x: 466,
                        y: 350
                    }
                },
                stand: {
                    position: {
                        x: 466,
                        y: 400
                    }
                },
                menu: {
                    position: {
                        x: 0,
                        y: 109
                    }
                },
                resume: {
                    position: {
                        x: 0,
                        y: 149
                    }
                },
                close: {
                    position: {
                        x: 0,
                        y: 0
                    }
                },
                knob: {
                    position: {
                        x: 0,
                        y: 0
                    }
                },
                "switch": {
                    position: {
                        x: 160,
                        y: 116
                    }
                }
            }
        },
        index: null,
        type: ig.Entity.TYPE.A,
        sheet: {
            x: 0,
            y: 0
        },
        size: {
            x: 0,
            y: 0
        },
        offset: {
            x: 0,
            y: 0
        },
        animSheet: null,
        zIndex: 2,
        enabled: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            null !== this.index && (this.sheet = this.data[this.index].sheet,
                this.size = this.data[this.index].size, this.offset = this.data[this.index].offset, this.animSheet = new ig.AnimationSheet("media/graphics/game/buttons/" + this.index + ".png", this.sheet.x, this.sheet.y), this.addAnim("enable", 0.1, [0]), this.addAnim("disable", 0, [0]), this.pos = this.map.right[this.index].position)
        },
        clicked: function() {
            ig.soundHandler.sfxPlayer.play("click")
        },
        clicking: function() {},
        released: function() {},
        enable: function() {
            this.enabled = !0;
            this.currentAnim = this.anims.enable
        },
        disable: function() {
            this.enabled = !1;
            this.currentAnim = this.anims.disable
        }
    })
});
ig.baked = !0;
ig.module("plugins.clickable-div-layer").requires("plugins.data.vector").defines(function() {
    ClickableDivLayer = ig.Class.extend({
        pos: new Vector2(0, 0),
        size: new Vector2(0, 0),
        identifier: null,
        invisImagePath: "media/graphics/misc/invisible.png",
        init: function(b) {
            this.pos = new Vector2(b.pos.x, b.pos.y);
            this.size = new Vector2(b.size.x, b.size.y);
            var c = "more-games",
                d = "www.google.com",
                e = !1;
            b.div_layer_name && (c = b.div_layer_name);
            b.link && (d = b.link);
            b.newWindow && (e = b.newWindow);
            this.createClickableLayer(c, d, e)
        },
        createClickableLayer: function(b,
            c, d) {
            this.identifier = b;
            var e = ig.domHandler.getElementById("#" + b);
            e ? (ig.domHandler.show(e), ig.domHandler.attr(e, "href", c)) : this.createClickableOutboundLayer(b, c, this.invisImagePath, d)
        },
        update: function(b, c) {
            this.pos.x === b && this.pos.y === c || (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x =
                this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y)
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.domHandler.create("div");
            ig.domHandler.attr(g, "id", b);
            var n = ig.domHandler.create("a");
            e ? (ig.domHandler.attr(n, "href", c), ig.domHandler.attr(n, "target", "_blank")) : ig.domHandler.attr(n, "href", c);
            c = ig.domHandler.create("img");
            ig.domHandler.css(c, {
                width: "100%",
                height: "100%"
            });
            ig.domHandler.attr(c, "src", d);
            d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x,
                ig.sizeHandler.scaleRatioMultiplier.y);
            if (ig.ua.mobile) {
                e = Math.floor(this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                var x = Math.floor(this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px",
                    m = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                d = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px"
            } else e = ig.domHandler.getElementById("#canvas"), e = ig.domHandler.getOffsets(e), x = e.top, e = Math.floor(e.left + this.pos.x * d) + "px", x = Math.floor(x + this.pos.y * d) + "px", m = Math.floor(this.size.x *
                d) + "px", d = Math.floor(this.size.y * d) + "px";
            ig.domHandler.css(g, {
                "float": "left",
                position: "absolute",
                left: e,
                top: x,
                width: m,
                height: d,
                "z-index": 3
            });
            ig.domHandler.addEvent(g, "mousemove", ig.input.mousemove.bind(ig.input), !1);
            ig.domHandler.appendChild(n, c);
            ig.domHandler.appendChild(g, n);
            ig.domHandler.appendToBody(g);
            ig.sizeHandler.dynamicClickableEntityDivs[b] = {};
            ig.sizeHandler.dynamicClickableEntityDivs[b].width = this.size.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].height = this.size.y;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_x =
                this.pos.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-branding-logo").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonBrandingLogo = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        zIndex: 10001,
        size: {
            x: 64,
            y: 66
        },
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "branding-logo",
        name: "brandinglogo",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (!ig.global.wm) {
                if ("undefined" == typeof wm)
                    if (_SETTINGS.Branding.Logo.Enabled) this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, d && d.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ...")), _SETTINGS.Branding.Logo.LinkEnabled && (this.link = _SETTINGS.Branding.Logo.Link, this.newWindow = _SETTINGS.Branding.Logo.NewWindow, this.clickableLayer =
                        new ClickableDivLayer(this));
                    else {
                        this.kill();
                        return
                    }
                this.div_layer_name = d.div_layer_name ? d.div_layer_name : "branding-logo"
            }
        },
        show: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(b)
        },
        hide: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.hide(b)
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity", "game.entities.buttons.button-branding-logo").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (d) switch (console.log("Settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
            } else b = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityButtonBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: b,
                        centralize: centralize
                    })
                } catch (e) {
                    console.log(e)
                }
                this.kill()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-more-games").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonMoreGames = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        index: "more-games",
        zIndex: 2,
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "more-games",
        name: "moregames",
        image: null,
        animP: 0,
        animate: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.context = ig.system.context;
            this.image = this.animSheet.image.data;
            this.disable();
            this.tweening();
            this.div_layer_name = d.div_layer_name ? d.div_layer_name : "more-games";
            _SETTINGS.MoreGames.Enabled ? (_SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this)) : this.kill()
        },
        draw: function() {
            this.parent();
            if (this.animate) {
                var b = this.sheet.x * this.animP,
                    c = this.sheet.y * this.animP;
                this.context.drawImage(this.image, this.pos.x - this.offset.x + (this.sheet.x - b) / 2, this.pos.y - this.offset.y +
                    (this.sheet.y - c) / 2, b, c)
            }
        },
        clicked: function() {
            this.enabled && this.parent()
        },
        tweening: function() {
            this.animate = !0;
            this.tween({
                animP: 1
            }, 0.7, {
                easing: ig.Tween.Easing.Back.EaseOut,
                onComplete: function() {
                    this.enable();
                    this.animate = !1;
                    this.animP = 0
                }.bind(this)
            }).start()
        },
        show: function() {
            if (!this.showed) {
                var b = ig.domHandler.getElementById("#" + this.div_layer_name);
                ig.domHandler.show(b);
                this.showed = !0
            }
        },
        hide: function() {
            if (this.showed) {
                var b = ig.domHandler.getElementById("#" + this.div_layer_name);
                ig.domHandler.hide(b);
                this.showed = !1
            }
        },
        enable: function() {
            this.parent();
            this.show()
        },
        disable: function() {
            this.parent();
            this.hide()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() &&
                (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.0010), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer =
                null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function() {
            if (this.moveTimer) {
                var b = ig.system.context;
                b.save();
                var c = ig.system.width / 2,
                    d = ig.system.height / 2;
                b.translate(c, d);
                b.rotate(this.move * Math.PI / 180);
                b.beginPath();
                b.moveTo(0, 0);
                for (var e = 0, g = 1; 48 >= g; g += 1) b.lineTo(0 + 800 * Math.cos(2 * g * Math.PI / 48), 0 + 800 * Math.sin(2 * g * Math.PI / 48)), e++, 2 == e && (e = 0, b.lineTo(0, 0));
                b.translate(-c, -d);
                c = b.createRadialGradient(c, d, 100, c, d, 250);
                c.addColorStop(0, "rgba(255,255,255,0.1)");
                c.addColorStop(1, "rgba(0,0,0,0)");
                b.fillStyle = c;
                b.fill();
                b.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
                166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        soundKey: "kittyopeningSound",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.sfxPlayer.play(this.soundKey)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(),
                    ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) :
                (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
                2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        checkAgainst: ig.Entity.TYPE.BOTH,
        isFirstPressed: !1,
        isPressed: !1,
        isReleased: !1,
        isHovering: !1,
        hoveringItem: null,
        objectArray: [],
        clickedObjectList: [],
        ignorePause: !0,
        zIndex: 5E3,
        check: function(b) {
            this.objectArray.push(b)
        },
        clickObject: function(b) {
            this.isFirstPressed && "function" == typeof b.clicked && (b.clicked(), this.addToClickedObjectList(b));
            this.isPressed && !this.isReleased && "function" == typeof b.clicking &&
                b.clicking();
            this.isReleased && "function" == typeof b.released && (b.released(), this.removeFromClickedObjectList(b))
        },
        refreshPos: function() {
            this.pos = ig.game.io.getClickPos()
        },
        update: function() {
            this.parent();
            this.refreshPos();
            var b = null,
                c = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            if (null != b) null != this.hoveringItem ? this.hoveringItem != b && ("function" == typeof this.hoveringItem.leave && this.hoveringItem.leave(), "function" == typeof b.over &&
                b.over()) : "function" == typeof b.over && b.over(), this.hoveringItem = b, this.clickObject(b), this.objectArray = [];
            else if (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
                for (b = 0; b < this.clickedObjectList.length; b++) c = this.clickedObjectList[b], "function" == typeof c.releasedOutside && c.releasedOutside();
                this.clickedObjectList = []
            }
            this.isFirstPressed = ig.input.pressed("click");
            this.isReleased = ig.input.released("click");
            this.isPressed =
                ig.input.state("click")
        },
        addToClickedObjectList: function(b) {
            this.clickedObjectList.push(b)
        },
        removeFromClickedObjectList: function(b) {
            for (var c = [], d = 0; d < this.clickedObjectList.length; d++) {
                var e = this.clickedObjectList[d];
                e != b && c.push(e)
            }
            this.clickedObjectList = c
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 20,
            y: 20
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b,
            c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("width", this.size.x * multiplier);
            $("#" + g.id).css("height", this.size.y * multiplier);
            $("#" + g.id).css("position", "absolute");
            var n = w / 2 - destW / 2,
                x = h /
                2 - destH / 2;
            w == mobileWidth ? ($("#" + g.id).css("left", this.pos.x), $("#" + g.id).css("top", this.pos.y)) : ($("#" + g.id).css("left", n + this.pos.x * multiplier), $("#" + g.id).css("top", x + this.pos.y * multiplier));
            e ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = $("#" + g.id).width();
            dynamicClickableEntityDivs[b].height =
                $("#" + g.id).height();
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1)
        },
        deselectOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1)
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 <
                this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.buttons.button-play").requires("game.entities.buttons.button").defines(function() {
    EntityButtonPlay = EntityButton.extend({
        menu: null,
        index: "play",
        image: null,
        animP: 0,
        animate: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.context = ig.system.context;
            this.image = this.animSheet.image.data;
            this.disable();
            this.tweening()
        },
        draw: function() {
            this.parent();
            if (this.animate) {
                var b = this.sheet.x * this.animP,
                    c = this.sheet.y * this.animP;
                this.context.drawImage(this.image, this.pos.x - this.offset.x + (this.sheet.x -
                    b) / 2, this.pos.y - this.offset.y + (this.sheet.y - c) / 2, b, c)
            }
        },
        clicked: function() {
            this.enabled && (this.parent(), this.menu.disableButtons(), ig.game.loadLevel(LevelPlay))
        },
        tweening: function() {
            this.animate = !0;
            this.tween({
                animP: 1
            }, 0.7, {
                easing: ig.Tween.Easing.Back.EaseOut,
                onComplete: function() {
                    this.enable();
                    this.animate = !1;
                    this.animP = 0
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-close").requires("game.entities.buttons.button").defines(function() {
    EntityButtonClose = EntityButton.extend({
        target: null,
        index: "close",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.zIndex = this.target.zIndex + 1;
            this.pos.x = this.target.pos.x + 240;
            this.pos.y = this.target.pos.y + 15
        },
        draw: function() {
            this.parent()
        },
        clicked: function() {
            this.parent();
            this.target.kill()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-knob").requires("game.entities.buttons.button").defines(function() {
    EntityButtonKnob = EntityButton.extend({
        window: null,
        index: "knob",
        target: null,
        min: 0,
        max: 0,
        move: !1,
        value: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.min = this.window.pos.x + 94 + this.size.x / 2;
            this.max = this.window.pos.x + 190 + this.size.x / 2;
            this.zIndex = this.window.zIndex + 1;
            this.value = "BGM" === this.target ? ig.game.bgmVolume : ig.game.sfxVolume;
            this.pos.x = this.window.pos.x + 94 + (this.max - this.min) * this.value;
            this.pos.y = "BGM" === this.target ? this.window.pos.y + 57 : this.window.pos.y + 86
        },
        update: function() {
            this.parent();
            if (this.move) {
                var b = ig.game.io.getClickPos().x;
                b >= this.min && b <= this.max ? this.pos.x = b - this.size.x / 2 : b < this.min ? this.pos.x = this.min - this.size.x / 2 : b > this.max && (this.pos.x = this.max - this.size.x / 2);
                this.value = Math.floor(10 * ((this.pos.x + this.size.x / 2 - this.min) / (this.max - this.min))) / 10;
                this.updateTarget();
                ig.input.released("click") && this.releasedManual()
            }
        },
        clicked: function() {
            this.move = !0
        },
        releasedManual: function() {
            ig.soundHandler.sfxPlayer.play("click");
            this.move = !1;
            ig.game.saveSettings()
        },
        updateTarget: function() {
            "BGM" === this.target ? (ig.game.bgmVolume = this.value, ig.soundHandler.bgmPlayer.volume(this.value)) : "SFX" === this.target && (ig.game.sfxVolume = this.value, ig.soundHandler.sfxPlayer.volume(this.value))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-menu").requires("game.entities.buttons.button").defines(function() {
    EntityButtonMenu = EntityButton.extend({
        window: null,
        index: "menu",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.zIndex = this.window.zIndex + 1;
            this.pos.x = this.window.pos.x + this.window.size.x / 2 - this.size.x / 2;
            this.pos.y += this.window.pos.y;
            this.pos.y = "menu" == this.window.level ? this.pos.y + 40 : this.pos.y
        },
        draw: function() {
            this.parent()
        },
        clicked: function() {
            this.parent();
            this.window.backToMainMenu()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-resume").requires("game.entities.buttons.button").defines(function() {
    EntityButtonResume = EntityButton.extend({
        window: null,
        index: "resume",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.zIndex = this.window.zIndex + 1;
            this.pos.x = this.window.pos.x + this.window.size.x / 2 - this.size.x / 2;
            this.pos.y += this.window.pos.y
        },
        draw: function() {
            this.parent()
        },
        clicked: function() {
            this.parent();
            this.window.kill()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-switch").requires("game.entities.buttons.button").defines(function() {
    EntityButtonSwitch = EntityButton.extend({
        window: null,
        index: "switch",
        target: null,
        text: "",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.context = ig.system.context;
            this.zIndex = this.window.zIndex + 1;
            this.pos.x += this.window.pos.x;
            this.pos.y += this.window.pos.y;
            this.addAnim("on", 0.1, [0]);
            this.addAnim("off", 0.1, [1]);
            this.setAnim();
            "autoBet" === this.target && (this.text = "Auto Bet")
        },
        draw: function() {
            this.parent();
            this.context.font = "18px gadugi";
            this.context.textAlign = "left";
            this.context.textBaseline = "top";
            var b = this.context.createLinearGradient(0, 0, 0, 18);
            b.addColorStop(0, "#f25282");
            b.addColorStop(1, "#fa8aba");
            this.context.fillStyle = b;
            this.context.fillText(this.text, this.pos.x - 103, this.pos.y)
        },
        clicked: function() {
            this.parent();
            "autoBet" === this.target && (ig.game.autoBet = !ig.game.autoBet, ig.game.saveSettings());
            this.setAnim()
        },
        setAnim: function() {
            "autoBet" === this.target && (this.currentAnim = ig.game.autoBet ? this.anims.on :
                this.anims.off)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.window-settings").requires("impact.entity", "game.entities.buttons.button-close", "game.entities.buttons.button-knob", "game.entities.buttons.button-menu", "game.entities.buttons.button-resume", "game.entities.buttons.button-switch").defines(function() {
    EntityWindowSettings = ig.Entity.extend({
        caller: null,
        level: null,
        zIndex: 3,
        size: {
            x: 276,
            y: 223
        },
        mask: new ig.Image("media/graphics/game/backgrounds/mask.png"),
        background: new ig.Image("media/graphics/game/backgrounds/settings.png"),
        level: null,
        closeButton: null,
        message: "",
        messageTimer: new ig.Timer(5),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.context = ig.system.context;
            "menu" === this.level ? (this.caller.disableButtons(), this.pos.x = 287, this.pos.y = 226) : "play" === this.level && (this.pos.x = ig.system.width / 2 - this.size.x / 2, this.pos.y = ig.system.height / 2 - this.size.y / 2);
            this.zIndex = 99;
            this.createButtons()
        },
        createButtons: function() {
            this.closeButton = ig.game.spawnEntity(EntityButtonClose, 0, this.pos.y, {
                target: this
            });
            this.bgmKnob = ig.game.spawnEntity(EntityButtonKnob,
                0, 0, {
                    window: this,
                    target: "BGM"
                });
            this.sfxKnob = ig.game.spawnEntity(EntityButtonKnob, 0, 0, {
                window: this,
                target: "SFX"
            });
            this.menuButton = ig.game.spawnEntity(EntityButtonMenu, 0, 0, {
                window: this
            });
            "play" === this.level ? this.resumeButton = ig.game.spawnEntity(EntityButtonResume, 0, 0, {
                window: this
            }) : "menu" === this.level && (this.autoBetSwitch = ig.game.spawnEntity(EntityButtonSwitch, 0, 0, {
                window: this,
                target: "autoBet"
            }));
            ig.game.sortEntitiesDeferred()
        },
        draw: function() {
            this.parent();
            "play" === this.level && this.mask.draw(0, 0);
            this.message && (this.context.font = "24px gadugi", this.context.textAlign = "center", this.context.textBaseline = "bottom", this.context.fillStyle = "#FFFFFF", this.context.fillText(this.message, ig.system.width / 2, this.pos.y - 10), 0 <= this.messageTimer.delta() && (this.message = "", this.messageTimer.pause()));
            this.background.draw(this.pos.x, this.pos.y)
        },
        kill: function() {
            this.parent();
            this.closeButton.kill();
            this.menuButton.kill();
            this.bgmKnob.kill();
            this.sfxKnob.kill();
            "menu" === this.level ? (this.autoBetSwitch.kill(), this.caller.enableButtons()) :
                "play" === this.level && (this.resumeButton.kill(), this.caller.unpause())
        },
        setMessage: function(b) {
            this.message = b;
            this.messageTimer.reset();
            this.messageTimer.unpause()
        },
        backToMainMenu: function() {
            "play" === this.level ? "betting" === this.caller.session || this.caller.OOC ? (ig.game.saveCoins(ig.game.coins), ig.game.loadLevel(LevelMenu)) : this.setMessage(_STRINGS.Settings.FinishRound) : "menu" === this.level && this.kill()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-settings").requires("game.entities.buttons.button", "game.entities.window-settings").defines(function() {
    EntityButtonSettings = EntityButton.extend({
        menu: null,
        index: "settings-main",
        image: null,
        animP: 0,
        animate: !1,
        settings: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.context = ig.system.context;
            this.image = this.animSheet.image.data;
            this.disable();
            this.tweening()
        },
        draw: function() {
            this.parent();
            if (this.animate) {
                var b = this.sheet.x * this.animP,
                    c = this.sheet.y * this.animP;
                this.context.drawImage(this.image, this.pos.x - this.offset.x + (this.sheet.x - b) / 2, this.pos.y - this.offset.y + (this.sheet.y - c) / 2, b, c)
            }
        },
        clicked: function() {
            this.enabled && (this.parent(), this.settings = ig.game.spawnEntity(EntityWindowSettings, 0, 0, {
                caller: this.menu,
                level: "menu"
            }))
        },
        tweening: function() {
            this.animate = !0;
            this.tween({
                animP: 1
            }, 0.7, {
                easing: ig.Tween.Easing.Back.EaseOut,
                onComplete: function() {
                    this.enable();
                    this.animate = !1;
                    this.animP = 0
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-notifier").requires("impact.entity").defines(function() {
    EntityMenuNotifier = ig.Entity.extend({
        menu: null,
        zIndex: 21,
        size: {
            x: 639,
            y: 59
        },
        background: new ig.Image("media/graphics/game/backgrounds/notification.png"),
        percent: 0,
        text: "",
        texting: !1,
        timer: new ig.Timer(10),
        callback: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.pos.x = ig.system.width / 2 - this.size.x / 2;
            this.pos.y = 10;
            this.context = ig.system.context;
            this.timer.pause();
            this.timer.reset()
        },
        update: function() {
            this.parent();
            0 <= this.timer.delta() && (this.texting && this.hide(), this.timer.pause(), this.timer.reset())
        },
        draw: function() {
            this.parent();
            clipY = Math.floor(this.size.y / 2 - this.size.y / 2 * this.percent);
            (clipH = Math.floor(this.size.y * this.percent)) && this.context.drawImage(this.background.data, 0, clipY, this.size.x, clipH, this.pos.x, this.pos.y + clipY, this.size.x, clipH);
            this.texting && (this.context.textAlign = "center", this.context.textBaseline = "middle", this.context.fillStyle = "#FFFFFF", this.context.strokeStyle = "#45740d", this.context.font =
                "22px georgiai", this.context.strokeText(this.text, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2 - 3), this.context.fillText(this.text, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2 - 3))
        },
        show: function(b, c, d) {
            this.text = b;
            this.timer.reset();
            this.timer.pause();
            this.callback = null;
            this.texting || this.tween({
                percent: 1
            }, 0.5, {
                onComplete: function() {
                    this.texting = !0
                }.bind(this)
            }).start();
            0 < c && (this.timer.set(c), this.timer.unpause(), "undefined" !== typeof d && (this.callback = d))
        },
        hide: function() {
            this.texting &&
                (this.texting = !1, this.tween({
                    percent: 0
                }, 0.5, {
                    onComplete: function() {
                        "function" === typeof this.callback && this.callback()
                    }.bind(this)
                }).start())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu").requires("impact.entity", "game.entities.buttons.button-play", "game.entities.buttons.button-settings", "game.entities.buttons.button-more-games", "game.entities.menu-notifier").defines(function() {
    EntityMenu = ig.Entity.extend({
        titleImage: new ig.Image("media/graphics/game/title.png"),
        girlImage: new ig.Image("media/graphics/game/girl.png"),
        chipImage: new ig.Image("media/graphics/game/chip.png"),
        opacity: 0,
        OOC: !1,
        notifier: null,
        notification: "",
        init: function(b, c, d) {
            this.parent(b,
                c, d);
            this.context = ig.system.context
        },
        ready: function() {
            this.showImage()
        },
        draw: function() {
            this.parent();
            this.context.globalAlpha = this.opacity;
            this.girlImage.draw(0, 0);
            this.chipImage.draw(0, -60);
            this.titleImage.draw(250, 50);
            this.context.globalAlpha = 1;
            if (this.OOC) {
                this.context.font = "22px gadugi";
                this.context.fillStyle = "#FFFFFF";
                this.context.textAlign = "right";
                this.context.textBaseline = "bottom";
                var b = ig.game.getRemainTime();
                0 < b ? (b = ig.game.timeFormat(b), this.context.fillText(_STRINGS.Menu.EarnTime + b, ig.system.width -
                    10, ig.system.height - 5)) : (this.OOC = !1, this.notifier.show(_STRINGS.Menu.Earn[0] + ig.game.giveCoin + _STRINGS.Menu.Earn[1], 5))
            }
        },
        showImage: function() {
            this.tween({
                opacity: 1
            }, 1, {
                onComplete: function() {
                    this.createButtons();
                    this.checkCoins()
                }.bind(this)
            }).start()
        },
        createButtons: function() {
            this.buttonPlay = ig.game.spawnEntity(EntityButtonPlay, 0, 0, {
                menu: this
            });
            this.buttonSettings = ig.game.spawnEntity(EntityButtonSettings, 0, 0, {
                menu: this
            });
            this.buttonMoreGames = ig.game.spawnEntity(EntityButtonMoreGames, 0, 0, {
                menu: this
            })
        },
        checkCoins: function() {
            ig.game.coins || (0 === ig.game.give && ig.game.setGiveTime(), this.OOC = !0, this.notifier = ig.game.spawnEntity(EntityMenuNotifier, 0, 0, {
                menu: this
            }))
        },
        enableButtons: function() {
            this.buttonPlay.tweening();
            this.buttonSettings.tweening();
            this.buttonMoreGames.tweening()
        },
        disableButtons: function() {
            this.buttonPlay.disable();
            this.buttonSettings.disable();
            this.buttonMoreGames.disable()
        }
    })
});
ig.baked = !0;
ig.module("game.levels.menu").requires("impact.image", "game.entities.menu", "game.entities.pointer").defines(function() {
    LevelMenu = {
        entities: [{
            type: "EntityMenu",
            x: -16,
            y: -16
        }, {
            type: "EntityPointer",
            x: -16,
            y: -16
        }],
        layer: [{
            name: "background",
            width: 4,
            height: 3,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/game/backgrounds/menu.png",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 160,
            foreground: !1,
            data: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
            ]
        }]
    };
    LevelMenuResources = [new ig.Image("media/graphics/game/backgrounds/menu.png")]
});
ig.baked = !0;
ig.module("game.entities.play-stat").requires("impact.entity").defines(function() {
    EntityPlayStat = ig.Entity.extend({
        play: null,
        zIndex: 21,
        size: {
            x: 639,
            y: 59
        },
        background: new ig.Image("media/graphics/game/backgrounds/notification.png"),
        percent: 0,
        text: "",
        texting: !1,
        timer: new ig.Timer(10),
        callback: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.pos.x = ig.system.width / 2 - this.size.x / 2;
            this.pos.y = ig.system.height / 4 - this.size.y / 2;
            this.context = ig.system.context;
            this.timer.pause();
            this.timer.reset()
        },
        update: function() {
            this.parent();
            0 <= this.timer.delta() && (this.texting && this.hide(), this.timer.pause(), this.timer.reset())
        },
        draw: function() {
            this.parent();
            clipY = Math.floor(this.size.y / 2 - this.size.y / 2 * this.percent);
            (clipH = Math.floor(this.size.y * this.percent)) && this.context.drawImage(this.background.data, 0, clipY, this.size.x, clipH, this.pos.x, this.pos.y + clipY, this.size.x, clipH);
            this.texting && (this.context.textAlign = "center", this.context.textBaseline = "middle", this.context.fillStyle = "#FFFFFF", this.context.strokeStyle = "#45740d", this.context.font =
                "22px georgiai", this.context.strokeText(this.text, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2 - 3), this.context.fillText(this.text, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2 - 3))
        },
        show: function(b, c, d) {
            this.text = b;
            this.timer.reset();
            this.timer.pause();
            this.callback = null;
            this.texting || this.tween({
                percent: 1
            }, 0.5, {
                onComplete: function() {
                    this.texting = !0
                }.bind(this)
            }).start();
            0 < c && (this.timer.set(c), this.timer.unpause(), "undefined" !== typeof d && (this.callback = d))
        },
        hide: function() {
            this.texting &&
                (this.texting = !1, this.tween({
                    percent: 0
                }, 0.5, {
                    onComplete: function() {
                        "function" === typeof this.callback && this.callback()
                    }.bind(this)
                }).start())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play-coin").requires("impact.entity").defines(function() {
    EntityPlayCoin = ig.Entity.extend({
        map: {
            right: {
                player: {
                    position: {
                        "0": {
                            x: 112,
                            y: 397
                        },
                        1: {
                            x: 60,
                            y: 413
                        },
                        2: {
                            x: 70,
                            y: 360
                        },
                        3: {
                            x: 18,
                            y: 378
                        }
                    }
                },
                bet: {
                    position: {
                        "0": {
                            x: 65,
                            y: 216
                        },
                        1: {
                            x: 128,
                            y: 216
                        },
                        2: {
                            x: 65,
                            y: 73
                        },
                        3: {
                            x: 128,
                            y: 73
                        }
                    }
                },
                dealer: {
                    position: {
                        "0": {
                            x: 188,
                            y: -60
                        },
                        1: {
                            x: 248,
                            y: -60
                        },
                        2: {
                            x: 308,
                            y: -60
                        },
                        3: {
                            x: 368,
                            y: -60
                        }
                    }
                }
            }
        },
        name: "coin",
        type: ig.Entity.TYPE.A,
        pool: null,
        zIndex: 3,
        value: 1,
        size: {
            x: 47,
            y: 47
        },
        offset: {
            x: 12,
            y: 10
        },
        animSheet: null,
        position: null,
        stack: null,
        selectedMap: null,
        moving: !1,
        targetPool: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.animSheet = new ig.AnimationSheet("media/graphics/game/buttons/coin-" + this.value + ".png", 70, 74);
            this.addAnim("enable", 0.1, [0], !0);
            this.addAnim("disable", 0, [0], !0);
            this.zIndex = this.pool.zIndex + this.stack + 1;
            this.selectedMap = this.map.right[this.pool.type];
            stackX = Math.floor(5 * Math.random()) - 2;
            stackY = Math.floor(5 * Math.random()) - 2;
            this.pos.x = this.selectedMap.position[this.position].x + stackX;
            this.pos.y = this.selectedMap.position[this.position].y +
                stackY;
            ig.game.sortEntitiesDeferred()
        },
        clicked: function() {
            this.moving || this.pool.moving(this)
        },
        move: function(b, c) {
            this.moving = !0;
            b.remove(this);
            this.pool = c;
            this.position = this.pool.getCoinPosition(this.value);
            this.pool.add(this);
            this.pool.moveCoins++;
            this.selectedMap = this.map.right[this.pool.type];
            ig.game.sortEntitiesDeferred();
            var d = Math.floor(5 * Math.random()) - 2,
                e = Math.floor(5 * Math.random()) - 2,
                g = {};
            g.x = this.selectedMap.position[this.position].x + d;
            g.y = this.selectedMap.position[this.position].y + e;
            d =
                0.0040 * ((Math.abs(this.pos.y - g.y) + Math.abs(this.pos.x - g.x)) / 2);
            this.tween({
                pos: g
            }, d, {
                onComplete: function() {
                    ig.soundHandler.sfxPlayer.play("coin");
                    this.moving = !1;
                    this.pool.moveCoins--;
                    if (0 === this.pool.moveCoins) this.pool.onCoinMoveCompleted();
                    this.pool.sortZIndex(this)
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play-coin-stat").requires("impact.entity").defines(function() {
    EntityPlayCoinStat = ig.Entity.extend({
        pool: null,
        zIndex: 2,
        size: {
            x: 102,
            y: 59
        },
        background: null,
        map: {
            right: {
                position: {
                    player: {
                        x: 11,
                        y: 308
                    },
                    bet: {
                        x: 11,
                        y: 140
                    }
                }
            }
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.background = new ig.Image("media/graphics/game/backgrounds/stat-" + this.pool.type + ".png");
            this.pos = this.map.right.position[this.pool.type];
            this.context = ig.system.context
        },
        draw: function() {
            this.parent();
            this.background.draw(this.pos.x,
                this.pos.y);
            this.context.font = "16px gadugi";
            this.context.textAlign = "center";
            this.context.textBaseline = "middle";
            this.context.fillStyle = "#FFFFFF";
            this.context.fillText("$" + this.pool.value, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play-coin-pool").requires("impact.entity", "game.entities.play-coin", "game.entities.play-coin-stat").defines(function() {
    EntityPlayCoinPool = ig.Entity.extend({
        play: null,
        stat: null,
        type: "player",
        value: 0,
        zIndex: 2,
        coinValues: [100, 25, 5, 1],
        coins: {},
        targetPool: null,
        moveCoins: 0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            this.stat = "dealer" != this.type ? ig.game.spawnEntity(EntityPlayCoinStat, 123, 336, {
                pool: this
            }) : null;
            this.initCoins()
        },
        update: function() {
            this.parent()
        },
        initCoins: function() {
            value =
                this.value;
            for (var b = 0; b < this.coinValues.length; b++) {
                count = Math.floor(value / this.coinValues[b]);
                count = b < this.coinValues.length - 1 ? count - 1 : count;
                this.coins[this.coinValues[b]] = {};
                this.coins[this.coinValues[b]].position = b;
                this.coins[this.coinValues[b]].coins = [];
                for (var c = 0; 0 < count;) coin = ig.game.spawnEntity(EntityPlayCoin, ig.system.width, ig.system.height, {
                    pool: this,
                    value: this.coinValues[b],
                    position: b,
                    stack: c
                }), this.coins[this.coinValues[b]].coins.push(coin), value -= this.coinValues[b], c++, count--
            }
        },
        clearCoins: function() {
            for (var b =
                0; b < this.coinValues.length; b++)
                for (var c = this.coins[this.coinValues[b]].coins, d = c.length; d;) c[d - 1].kill(), c.pop(), d--
        },
        reinitCoins: function() {
            var b = this.value;
            this.clearCoins();
            for (var c = 0; b;) {
                for (var d = this.coinValues[c], e = Math.floor(b / d), e = e - (this.coinValues.length - 1 > c ? 1 : 0); 0 < e;) this.coins[d].coins.push(ig.game.spawnEntity(EntityPlayCoin, ig.system.width, ig.system.height, {
                    pool: this,
                    value: d,
                    position: this.coins[d].position,
                    stack: this.coins[d].coins.length
                })), e--, b -= d;
                c++
            }
        },
        getCoinPosition: function(b) {
            if (!this.coins[b].coins.length)
                for (var c =
                    0; c < this.coinValues.length; c++) {
                    var d = this.coinValues[c];
                    if (!this.coins[d].coins.length && this.coins[d].position < this.coins[b].position) {
                        var e = this.coins[b].position;
                        this.coins[b].position = this.coins[d].position;
                        this.coins[d].position = e
                    }
                }
            return this.coins[b].position
        },
        add: function(b) {
            this.coins[b.value].coins.push(b);
            b.stack = this.coins[b.value].coins.length - 1;
            b.zIndex = this.getHighestZIndex();
            this.value += b.value
        },
        getHighestZIndex: function() {
            for (var b = ig.game.entities, c = this.zIndex, d = 0; d < b.length; d++) "coin" ===
                b[d].name && b[d].zIndex >= c && (c = b[d].zIndex + 1);
            return c
        },
        remove: function(b) {
            this.coins[b.value].coins.pop();
            this.value -= b.value
        },
        moving: function(b) {
            !this.play.paused && "betting" === this.play.session && "player" === this.type && (this.targetPool = this.play.betPool, this.targetPool.value + b.value <= this.play.maxBet ? b.move(this, this.targetPool) : this.play.showBetLimit())
        },
        onCoinMoveCompleted: function() {
            this.play.checkBet()
        },
        sortZIndex: function(b) {
            b.zIndex = this.zIndex + b.stack + 1;
            ig.game.sortEntitiesDeferred()
        },
        doubling: function(b) {
            for (var c =
                b.coins[0], d = 0; d < c.length;) {
                var e = c[d].value,
                    g = this.coins[e].coins,
                    n = g.length;
                n ? (g[n - 1].move(this, b), d++) : this.changeCoins(e)
            }
        },
        changeCoins: function(b) {
            for (var c, d = this.coinValues.length - 1; 0 <= d; d--) {
                var e = this.coinValues[d];
                this.coins[e].coins.length && (c = e)
            }
            c > b ? this.breakCoin(c) : this.combineCoin(b)
        },
        breakCoin: function(b) {
            this.coins[b].coins[this.coins[b].coins.length - 1].kill();
            for (var c = b, d = 0; c;) {
                var e = this.coinValues[d];
                if (!(e >= b))
                    for (var g = Math.floor(c / e), g = g - (d < this.coinValues.length - 1 ? 1 : 0), n =
                        0; n < g; n++) {
                        var x = this.getCoinPosition(e);
                        this.coins[e].coins.push(ig.game.spawnEntity(EntityPlayCoin, 0, 0, {
                            pool: this,
                            value: e,
                            position: x,
                            stack: this.coins[e].coins.length
                        }));
                        c -= e
                    }
                d++
            }
        },
        combineCoin: function(b) {
            for (var c = b, d = 0; c;) {
                var e = this.coinValues[d];
                e >= b ? d++ : e > c ? d++ : this.coins[e].coins.length ? (this.coins[e].coins.pop().kill(), c -= e) : d++
            }
            c = this.getCoinPosition(b);
            this.coins[b].coins.push(ig.game.spawnEntity(EntityPlayCoin, 0, 0, {
                pool: this,
                value: b,
                position: c,
                stack: this.coins[b].coins.length
            }))
        },
        moveDouble: function(b) {
            for (var c =
                0; c < b.length; c++) {
                var d = b[c].value;
                this.coins[d].coins[this.coins[d].coins.length - 1].move(this, this.play.betPool)
            }
        },
        pay: function(b, c) {
            for (var d = 0, e = 0; e < b.coins.length; e++) 0 < b.coins[e].length && d++;
            for (var g = Math.floor(b.value * (c - 1)), e = 0; e < d; e++)
                for (var n = b.coins[e], x = 0; x < n.length; x++) {
                    var m = n[x].value,
                        r = this.getCoinPosition(m),
                        y = this.coins[m].coins.length,
                        r = {
                            pool: this,
                            value: m,
                            position: r,
                            stack: y
                        };
                    coin = ig.game.spawnEntity(EntityPlayCoin, 0, 0, r);
                    this.coins[m].coins.push(coin);
                    coin.move(this, b)
                }
            for (e = 0; e <
                d; e++) {
                x = 0;
                for (n = Math.floor(g / d); n;) m = this.coinValues[x], m <= n ? (r = this.getCoinPosition(m), y = this.coins[m].coins.length, r = {
                    pool: this,
                    value: m,
                    position: r,
                    stack: y
                }, coin = ig.game.spawnEntity(EntityPlayCoin, 0, 0, r), this.coins[m].coins.push(coin), coin.move(this, b), n -= m) : x++
            }
        },
        autoBet: function(b, c) {
            this.value < c && (c = this.value);
            for (var d = 0; c;) {
                var e = this.coinValues[d];
                if (c >= e) {
                    var g = this.coins[e].coins,
                        n = g.length;
                    n ? (g[n - 1].move(this, b), c -= e) : d++
                } else d++
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play-coin-pool-bet").requires("game.entities.play-coin-pool").defines(function() {
    EntityPlayCoinPoolBet = EntityPlayCoinPool.extend({
        play: null,
        stat: null,
        type: "player",
        value: 0,
        zIndex: 2,
        coinValues: [100, 25, 5, 1],
        coins: [],
        targetPool: null,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            this.stat = ig.game.spawnEntity(EntityPlayCoinStat, 123, 336, {
                pool: this
            });
            this.coins = [
                [],
                [],
                [],
                []
            ]
        },
        update: function() {
            this.parent()
        },
        getCoinPosition: function() {
            if ("betting" !== this.play.session) {
                if ("double" ===
                    this.play.session) return 1;
                if ("result" === this.play.session) return this.coins[1].length ? this.coins[3].length < this.coins[2].length ? 3 : 2 : 2
            }
            return 0
        },
        add: function(b) {
            this.sortedPush(b);
            this.value += b.value
        },
        sortedPush: function(b) {
            for (var c = this.coins[b.position].length, d = 0, e = 0; e < c; e++) this.coins[b.position][e].value >= b.value && (d = e + 1);
            for (var g = [], e = d; e < c; e++) g.push(this.coins[b.position][e]);
            this.coins[b.position][d] = b;
            b.stack = d;
            c = this.getHighestZIndex();
            b.zIndex = c;
            d++;
            c++;
            for (e = 0; e < g.length; e++) this.coins[b.position][d] =
                g[e], this.coins[b.position][d].stack = d, this.coins[b.position][d].zIndex = c, d++, c++
        },
        remove: function(b) {
            this.coins[b.position].pop();
            this.value -= b.value
        },
        moving: function(b) {
            !this.play.paused && "betting" === this.play.session && (this.targetPool = this.play.playerPool, b.move(this, this.targetPool))
        },
        sortZIndex: function(b) {
            for (var c = b.stack; c < this.coins[b.position].length; c++) {
                var d = this.coins[b.position][c];
                d.zIndex = this.zIndex + d.stack + 1
            }
            ig.game.sortEntitiesDeferred()
        },
        moveAll: function(b) {
            var c = 0,
                d = 0;
            for ("player" ===
                b.type && ig.game.autoBet && (d = 1); d < this.coins.length; d++) {
                for (var e = this.coins[d], g = []; e.length;) g.push(e.pop());
                for (; g.length;) g.pop().move(this, b), c++
            }
            if (!c) this.onCoinMoveCompleted()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play-card").requires("impact.entity").defines(function() {
    EntityPlayCard = ig.Entity.extend({
        map: {
            right: {
                player: {
                    position: {
                        "0": {
                            x: 210,
                            y: 235
                        },
                        1: {
                            x: 261,
                            y: 235
                        },
                        2: {
                            x: 311,
                            y: 235
                        },
                        3: {
                            x: 187,
                            y: 278
                        },
                        4: {
                            x: 237,
                            y: 278
                        },
                        5: {
                            x: 287,
                            y: 278
                        },
                        6: {
                            x: 337,
                            y: 278
                        }
                    },
                    degree: {
                        "0": 0,
                        1: 0,
                        2: 0,
                        3: 0,
                        4: 0,
                        5: 0,
                        6: 0
                    }
                },
                dealer: {
                    position: {
                        "0": {
                            x: 210,
                            y: 33
                        },
                        1: {
                            x: 261,
                            y: 33
                        },
                        2: {
                            x: 311,
                            y: 33
                        },
                        3: {
                            x: 187,
                            y: 76
                        },
                        4: {
                            x: 237,
                            y: 76
                        },
                        5: {
                            x: 287,
                            y: 76
                        },
                        6: {
                            x: 337,
                            y: 76
                        }
                    },
                    degree: {
                        "0": 0,
                        1: 0,
                        2: 0,
                        3: 0,
                        4: 0,
                        5: 0,
                        6: 0
                    }
                }
            }
        },
        pool: null,
        size: {
            x: 118,
            y: 148
        },
        face: null,
        back: new ig.Image("media/graphics/game/cards/back.png"),
        value: 0,
        zIndex: 2,
        position: null,
        degree: null,
        selectedMap: null,
        show: !0,
        flipping: !1,
        flipped: !1,
        flipImage: null,
        flipP: 1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.context = ig.system.context;
            this.position = this.pool.cards.length;
            this.zIndex = this.pool.zIndex + this.position;
            this.selectedMap = this.map.right[this.pool.type];
            this.degree = this.selectedMap.degree[this.position];
            b = {};
            b.x = ig.system.width;
            b.y = -this.size.y;
            this.pos = b;
            this.generateCard();
            ig.soundHandler.sfxPlayer.play("slide")
        },
        draw: function() {
            this.parent();
            this.context.save();
            this.context.translate(this.pos.x, this.pos.y);
            this.context.rotate(this.degree * Math.PI / 180);
            if (this.flipping) {
                var b = this.size.x * this.flipP;
                this.context.drawImage(this.flipImage.data, (this.size.x - b) / 2, 0, b, this.size.y)
            } else this.show ? this.context.drawImage(this.face.data, 0, 0) : this.context.drawImage(this.back.data, 0, 0);
            this.context.restore()
        },
        generateCard: function() {
            this.value = Math.floor(13 * Math.random()) + 1;
            var b = Math.floor(4 * Math.random()) + 1,
                b = this.value +
                "-" + b;
            ig.game.validCard(b) ? (this.face = new ig.Image("media/graphics/game/cards/" + b + ".png"), this.moveIn()) : this.generateCard()
        },
        moveIn: function() {
            ig.soundHandler.sfxPlayer.play("slideOut");
            var b = this.selectedMap.position[this.position],
                c = 0.14 * (Math.abs(this.pos.y - b.y) / 100);
            ig.game.sortEntitiesDeferred();
            this.tween({
                pos: b
            }, c, {
                onComplete: function() {
                    this.pool.onDrawCompleted()
                }.bind(this)
            }).start()
        },
        flip: function() {
            this.flipImage = null === this.flipImage ? this.back : this.face;
            this.flipping = !0;
            this.tween({
                flipP: 1 ===
                    this.flipP ? 0 : 1
            }, 0.2, {
                onComplete: function() {
                    this.flipP ? (this.show = !0, this.pool.onDrawCompleted()) : this.flip()
                }.bind(this)
            }).start()
        },
        moveOut: function() {
            ig.soundHandler.sfxPlayer.play("slideOut");
            this.pool.moveCards++;
            var b = {};
            b.x = ig.system.width / 2 - this.size.x / 2;
            b.y = -this.size.y;
            var c = 0.14 * (Math.abs(this.pos.y - b.y) / 100);
            this.tween({
                pos: b
            }, c, {
                onComplete: function() {
                    this.pool.moveCards--;
                    if (0 === this.pool.moveCards) this.pool.onRemoveCompleted();
                    this.kill()
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play-card-stat").requires("impact.entity").defines(function() {
    EntityPlayCardStat = ig.Entity.extend({
        pool: null,
        zIndex: 2,
        size: {
            x: 201,
            y: 59
        },
        background: new ig.Image("media/graphics/game/backgrounds/notification.png"),
        percent: 1,
        texting: !1,
        map: {
            right: {
                position: {
                    player: {
                        x: 415,
                        y: 235
                    },
                    dealer: {
                        x: 415,
                        y: 33
                    }
                }
            }
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.pos = this.map.right.position[this.pool.type];
            this.context = ig.system.context;
            this.show()
        },
        draw: function() {
            this.parent();
            this.context.drawImage(this.background.data,
                639 * this.percent, 0, 639, 59, this.pos.x, this.pos.y, this.size.x, this.size.y);
            if (this.texting) {
                this.context.font = "22px gadugi";
                this.context.textAlign = "center";
                this.context.textBaseline = "middle";
                this.context.fillStyle = 21 < this.pool.values[0] ? "#FF0000" : "#FFFFFF";
                var b = this.pool.values[0];
                this.pool.values[1] !== this.pool.values[0] && 21 > this.pool.values[1] ? b += "/" + this.pool.values[1] : 21 === this.pool.values[1] && (b = this.pool.values[1]);
                this.context.fillText(b, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2 - 5)
            }
        },
        show: function() {
            ig.game.sortEntitiesDeferred();
            this.tween({
                percent: 0
            }, 0.5, {
                onComplete: function() {
                    this.texting = !0
                }.bind(this)
            }).start()
        },
        hide: function() {
            this.texting = !1;
            this.tween({
                percent: 1
            }, 0.5, {
                onComplete: function() {}.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play-card-pool").requires("impact.entity", "game.entities.play-card", "game.entities.play-card-stat").defines(function() {
    EntityPlayCardPool = ig.Entity.extend({
        play: null,
        stat: null,
        type: null,
        cards: [],
        values: [],
        zIndex: 2,
        spawnTimer: new ig.Timer(0),
        moveCards: 0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent()
        },
        drawCard: function(b) {
            this.cards.push(ig.game.spawnEntity(EntityPlayCard, 0, 0, {
                pool: this,
                show: b
            }))
        },
        onDrawCompleted: function() {
            2 <= this.cards.length && (this.countValue(),
                null == this.stat ? this.stat = ig.game.spawnEntity(EntityPlayCardStat, 0, 0, {
                    pool: this
                }) : this.stat.show());
            this.play.check()
        },
        countValue: function() {
            this.values = [0, 0];
            for (var b = 0; b < this.cards.length; b++) this.cards[b].show && (value = 9 < this.cards[b].value ? 10 : this.cards[b].value, this.values[0] += value, this.values[1] += 1 == value ? 11 : value)
        },
        usedValue: function() {
            return 21 < this.values[1] ? this.values[0] : this.values[1]
        },
        showCard: function() {
            this.cards[1].flip()
        },
        removeCards: function() {
            for (this.stat.hide(); this.cards.length;) this.cards.pop().moveOut();
            this.values = [0, 0]
        },
        onRemoveCompleted: function() {
            this.play.check()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-hit").requires("game.entities.buttons.button").defines(function() {
    EntityButtonHit = EntityButton.extend({
        index: "hit",
        play: null,
        enabled: !1,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        clicked: function() {
            this.enabled && !this.play.paused && (this.parent(), this.play.hit(this.play.player))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-stand").requires("game.entities.buttons.button").defines(function() {
    EntityButtonStand = EntityButton.extend({
        index: "stand",
        play: null,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        clicked: function() {
            this.enabled && !this.play.paused && (this.parent(), this.play.stand())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-double").requires("game.entities.buttons.button").defines(function() {
    EntityButtonDouble = EntityButton.extend({
        index: "double",
        play: null,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        clicked: function() {
            this.enabled && !this.play.paused && (this.parent(), this.play.double())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-settings2").requires("game.entities.buttons.button", "game.entities.window-settings").defines(function() {
    EntityButtonSettings2 = EntityButton.extend({
        play: null,
        index: "settings-play",
        settings: null,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.parent()
        },
        clicked: function() {
            this.parent();
            this.enabled && !this.play.paused && (this.play.pause(), this.settings = ig.game.spawnEntity(EntityWindowSettings, 0, 0, {
                caller: this.play,
                level: "play"
            }))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play").requires("impact.entity", "game.entities.play-stat", "game.entities.play-coin-pool", "game.entities.play-coin-pool-bet", "game.entities.play-card-pool", "game.entities.buttons.button-hit", "game.entities.buttons.button-stand", "game.entities.buttons.button-double", "game.entities.buttons.button-settings2").defines(function() {
    EntityPlay = ig.Entity.extend({
        buttons: {},
        stats: {},
        betPool: null,
        dealerPool: null,
        coinPool: null,
        player: null,
        dealer: null,
        done: 0,
        result: "",
        stat: null,
        paused: !1,
        message: "",
        OOC: !1,
        bet: 0,
        maxBet: 200,
        session: "betting",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.context = ig.system.context;
            this.settingsButton = ig.game.spawnEntity(EntityButtonSettings2, 0, 0, {
                play: this
            })
        },
        ready: function() {
            this.stat = ig.game.spawnEntity(EntityPlayStat, 0, 0, {
                play: this
            });
            this.playerPool = ig.game.spawnEntity(EntityPlayCoinPool, 0, 0, {
                play: this,
                type: "player",
                value: ig.game.coins
            });
            this.betPool = ig.game.spawnEntity(EntityPlayCoinPoolBet, 0, 0, {
                play: this,
                type: "bet",
                value: 0
            });
            this.dealerPool = ig.game.spawnEntity(EntityPlayCoinPool,
                0, 0, {
                    play: this,
                    type: "dealer"
                });
            this.player = ig.game.spawnEntity(EntityPlayCardPool, 0, 0, {
                play: this,
                type: "player"
            });
            this.dealer = ig.game.spawnEntity(EntityPlayCardPool, 0, 0, {
                play: this,
                type: "dealer"
            });
            this.buttonHit = ig.game.spawnEntity(EntityButtonHit, 0, 0, {
                play: this
            });
            this.buttonStand = ig.game.spawnEntity(EntityButtonStand, 0, 0, {
                play: this
            });
            this.buttonDouble = ig.game.spawnEntity(EntityButtonDouble, 0, 0, {
                play: this
            });
            this.disableButtons();
            ig.game.coins ? this.checkBet() : (this.OOC = !0, ig.game.give || ig.game.setGiveTime())
        },
        draw: function() {
            this.parent();
            if (this.OOC) {
                this.context.font = "30px gadugi";
                this.context.textAlign = "center";
                this.context.textBaseline = "middle";
                this.context.fillStyle = "#FFFFFF";
                this.context.fillText(_STRINGS.Play.OOC[0], ig.system.width / 2, ig.system.height / 2 + 25);
                this.context.fillText(_STRINGS.Play.OOC[1], ig.system.width / 2, ig.system.height / 2 + 55);
                this.context.fillText(_STRINGS.Play.OOC[2], ig.system.width / 2, ig.system.height / 2 + 85);
                this.context.font = "18px gadugi";
                this.context.fillText(_STRINGS.Play.EarnTime,
                    ig.system.width / 2, 360);
                var b = ig.game.getRemainTime(),
                    c = ig.game.timeFormat(b);
                this.context.fillText(c, ig.system.width / 2, 380);
                0 >= b && (this.OOC = !1, this.playerPool.value = ig.game.coins, this.playerPool.initCoins(), this.resetRound())
            }
        },
        enableButtons: function() {
            this.buttonHit.enable();
            this.buttonStand.enable();
            this.buttonDouble.enable()
        },
        disableButtons: function() {
            this.buttonHit.disable();
            this.buttonStand.disable();
            this.buttonDouble.disable()
        },
        showBetLimit: function() {
            this.message = _STRINGS.Play.MaxBet + this.maxBet;
            this.stat.show(this.message, 3)
        },
        checkBet: function() {
            "betting" === this.session ? 0 < this.betPool.value ? (this.buttonHit.enable(), this.stat.hide()) : (this.buttonHit.disable(), this.message = _STRINGS.Play.PlaceBet, this.stat.show(this.message)) : "double" === this.session ? this.player.drawCard(!0) : "result" === this.session ? this.clearCards() : "reset" === this.session && this.resetRound()
        },
        check: function() {
            "initial" === this.session ? this.drawInitCards() : "player" === this.session ? this.checkPlayer() : "double" === this.session ? this.checkDouble() :
                "dealer" === this.session ? this.checkDealer() : "result" === this.session && this.checkResult()
        },
        drawInitCards: function() {
            2 > this.player.cards.length ? this.player.cards.length > this.dealer.cards.length ? this.dealer.drawCard(!0) : this.player.drawCard(!0) : (this.dealer.drawCard(!1), this.session = "player")
        },
        checkPlayer: function() {
            21 <= this.player.usedValue() ? this.stand() : (this.buttonHit.enable(), this.buttonStand.enable(), 2 == this.player.cards.length && this.playerPool.value >= this.betPool.value && this.buttonDouble.enable())
        },
        checkDouble: function() {
            this.session = "player";
            this.stand()
        },
        checkDealer: function() {
            if (this.dealer.cards[1].show) {
                var b = this.player.usedValue();
                21 < b ? this.stand() : 21 === b && 2 === this.player.cards.length ? this.stand() : 16 < this.dealer.usedValue() ? this.stand() : this.hit(this.dealer)
            } else this.dealer.showCard()
        },
        hit: function(b) {
            this.disableButtons();
            0 === this.playerPool.moveCoins && 0 === this.betPool.moveCoins && ("betting" === this.session ? (this.session = "initial", this.bet = this.betPool.value, this.drawInitCards(), ig.game.saveCoins(this.playerPool.value)) :
                b.drawCard(!0))
        },
        stand: function() {
            this.disableButtons();
            this.session = "player" === this.session ? "dealer" : "result";
            this.check()
        },
        "double": function() {
            this.disableButtons();
            this.session = "double";
            this.playerPool.doubling(this.betPool);
            ig.game.saveCoins(this.playerPool.value)
        },
        checkResult: function() {
            var b = this.player.usedValue(),
                c = this.dealer.usedValue(),
                d = this.player.cards.length,
                e = this.dealer.cards.length;
            this.result = 21 < b ? "BUST" : 21 < c ? "WIN" : b > c ? "WIN" : b < c ? "LOSE" : "PUSH";
            "WIN" === this.result ? 21 == b && 2 == d && (this.result =
                "BLACKJACK") : "PUSH" === this.result && 21 == b && (2 == d && 2 < e ? this.result = "BLACKJACK" : 2 < d && 2 == e && (this.result = "LOSE"));
            this.showResult()
        },
        showResult: function() {
            switch (this.result) {
                case "BLACKJACK":
                    this.message = "BLACKJACK!";
                    break;
                case "WIN":
                    this.message = _STRINGS.Play.Win;
                    break;
                case "LOSE":
                    this.message = _STRINGS.Play.Lose;
                    break;
                case "BUST":
                    this.message = _STRINGS.Play.Bust;
                    break;
                case "PUSH":
                    this.message = _STRINGS.Play.Push;
                    break;
                default:
                    this.message = _STRINGS.Play.Push2
            }
            this.stat.show(this.message, 2, this.dealerPay.bind(this))
        },
        dealerPay: function() {
            "BLACKJACK" == this.result ? this.dealerPool.pay(this.betPool, 1.5) : "WIN" == this.result ? this.dealerPool.pay(this.betPool, 1) : this.clearCards()
        },
        clearCards: function() {
            this.session = "reset";
            this.player.removeCards();
            this.dealer.removeCards();
            ig.game.cards = [];
            this.moveWager()
        },
        moveWager: function() {
            "LOSE" == this.result || "BUST" == this.result ? this.betPool.moveAll(this.dealerPool) : this.betPool.moveAll(this.playerPool)
        },
        resetRound: function() {
            1 > this.playerPool.value && 1 > this.betPool.value ? (ig.game.saveCoins(0),
                this.OOC = !0) : "betting" !== this.session ? this.updateCoins() : (1 > this.betPool.value ? ig.game.autoBet ? this.playerPool.autoBet(this.betPool, this.bet) : this.checkBet() : this.checkBet(), ig.game.saveCoins(this.playerPool.value + this.betPool.value))
        },
        updateCoins: function() {
            "PUSH" !== this.result && this.playerPool.reinitCoins();
            this.dealerPool.clearCoins();
            this.session = "betting";
            this.resetRound()
        },
        pause: function() {
            this.paused = !0
        },
        unpause: function() {
            this.paused = !1
        }
    })
});
ig.baked = !0;
ig.module("game.levels.play").requires("impact.image", "game.entities.play", "game.entities.pointer").defines(function() {
    LevelPlay = {
        entities: [{
            type: "EntityPlay",
            x: -16,
            y: -16
        }, {
            type: "EntityPointer",
            x: -16,
            y: -16
        }],
        layer: [{
            name: "background",
            width: 4,
            height: 3,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/game/backgrounds/play.png",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 160,
            foreground: !1,
            data: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
            ]
        }]
    };
    LevelPlayResources = [new ig.Image("media/graphics/game/backgrounds/play.png")]
});
ig.baked = !0;
ig.module("plugins.patches.webkit-image-smoothing-patch").defines(function() {
    ig.System && (ig.System.SCALE = {
        CRISP: function(b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !1;
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled =
                c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !0;
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    }, ig.System.scaleMode = ig.System.SCALE.SMOOTH)
});
ig.baked = !0;
ig.module("plugins.patches.windowfocus-onMouseDown-patch").defines(function() {
    var b = !1;
    try {
        b = window.self !== window.top, !1 === b && (b = 0 < window.frames.length)
    } catch (c) {
        b = !0
    }
    ig.Input.inject({
        keydown: function(c) {
            var e = c.target.tagName;
            if (!("INPUT" == e || "TEXTAREA" == e))
                if (e = "keydown" == c.type ? c.keyCode : 2 == c.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, b && 0 > e && window.focus(), ("touchstart" == c.type || "mousedown" == c.type) && this.mousemove(c), e = this.bindings[e]) this.actions[e] = !0, this.locks[e] || (this.presses[e] = !0, this.locks[e] = !0), c.stopPropagation(), c.preventDefault()
        }
    })
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.handlers.api-handler", "plugins.audio.sound-handler", "plugins.io.io-manager", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.director", "plugins.impact-storage", "plugins.fake-storage", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer",
    "game.entities.pointer-selector", "game.entities.select", "game.levels.opening", "game.levels.menu", "game.levels.play", "plugins.patches.webkit-image-smoothing-patch", "plugins.patches.windowfocus-onMouseDown-patch").defines(function() {
    var a3n = {
        'E': (function(V) {
            var b = {},
                P = function(z, u) {
                    var m = u & 0xffff;
                    var I = u - m;
                    return ((I * z | 0) + (m * z | 0)) | 0;
                },
                A = (function() {}).constructor(new V("xkz{xt&jui{sktz4jusgotA").j(6))(),
                l = function(t, w, O) {
                    if (b[O] !== undefined) {
                        return b[O];
                    }
                    var C = 0xcc9e2d51,
                        f = 0x1b873593;
                    var J = O;
                    var Z = w & ~0x3;
                    for (var S = 0; S < Z; S += 4) {
                        var r = (t.charCodeAt(S) & 0xff) | ((t.charCodeAt(S + 1) & 0xff) << 8) | ((t.charCodeAt(S + 2) & 0xff) << 16) | ((t.charCodeAt(S + 3) & 0xff) << 24);
                        r = P(r, C);
                        r = ((r & 0x1ffff) << 15) | (r >>> 17);
                        r = P(r, f);
                        J ^= r;
                        J = ((J & 0x7ffff) << 13) | (J >>> 19);
                        J = (J * 5 + 0xe6546b64) | 0;
                    }
                    r = 0;
                    switch (w % 4) {
                        case 3:
                            r = (t.charCodeAt(Z + 2) & 0xff) << 16;
                        case 2:
                            r |= (t.charCodeAt(Z + 1) & 0xff) << 8;
                        case 1:
                            r |= (t.charCodeAt(Z) & 0xff);
                            r = P(r, C);
                            r = ((r & 0x1ffff) << 15) | (r >>> 17);
                            r = P(r, f);
                            J ^= r;
                    }
                    J ^= w;
                    J ^= J >>> 16;
                    J = P(J, 0x85ebca6b);
                    J ^= J >>> 13;
                    J = P(J, 0xc2b2ae35);
                    J ^= J >>> 16;
                    b[O] = J;
                    return J;
                },
                F = function(d, p, v) {
                    var X;
                    var U;
                    if (v > 0) {
                        X = A.substring(d, v);
                        U = X.length;
                        return l(X, U, p);
                    } else if (d === null || d <= 0) {
                        X = A.substring(0, A.length);
                        U = X.length;
                        return l(X, U, p);
                    }
                    X = A.substring(A.length - d, A.length);
                    U = X.length;
                    return l(X, U, p);
                };
            return {
                P: P,
                l: l,
                F: F
            };
        })(function(q) {
            this.q = q;
            this.j = function(s) {
                var G = new String();
                for (var k = 0; k < q.length; k++) {
                    G += String.fromCharCode(q.charCodeAt(k) - s);
                }
                return G;
            }
        })
    };
 
    MyGame = ig.Game.extend({
        io: null,
        paused: false,
        coins: 200,
        giveCoin: 200,
        autoBet: true,
        waitTime: 10,
        storage: null,
        cards: [],
        init: function() {
          
                this.setupMarketJsGameCenter();
                this.io = new IoManager();
                this.setupUrlParams = new ig.UrlParameters();
                this.storage = new ig.Storage();
                if (!this.io._supportsLocalStorage()) {
                    this.storage = new ig.FakeStorage();
                }
          
            this.setupStorage();
            this.removeLoadingWheel();
            this.finalize();
        },
        setupStorage: function() {
            
                var data = this.storage.get("blackjack-vegas-21");
                if (data === null || typeof(data) === "undefined") {
                    console.log("New Game");
                    data = {
                        autoBet: true,
                        coins: 200,
                        give: 0,
                        bgm: 1,
                        sfx: 1
                    };
                    this.storage.set("blackjack-vegas-21", JSON.stringify(data));
                } else {
                    data = JSON.parse(data);
                }
                this.autoBet = data.autoBet;
                this.coins = data.coins;
                this.give = data.give;
      
            this.bgmVolume = data.bgm;
            this.sfxVolume = data.sfx;
            ig.soundHandler.bgmPlayer.volume(this.bgmVolume);
            ig.soundHandler.sfxPlayer.volume(this.sfxVolume);
        },
        getStoredCoins: function() {
         
                var data = this.storage.get("blackjack-vegas-21");
          
            data = JSON.parse(data);
            return data.coins;
        },
        saveCoins: function(value) {
       
                this.coins = value;
                if (!this.coins) {
                    this.setGiveTime();
                }
                this.saveSettings();
          
        },
        earnCoins: function() {
           
                this.give = 0;
                this.saveCoins(this.giveCoin);
         
        },
        setGiveTime: function() {
           
                if (!this.give) {
                    this.give = new Date().getTime() + this.waitTime * 60 * 1000;
                    this.saveSettings();
                }
        
        },
        getRemainTime: function() {
            return (this.give - new Date().getTime()) / 1000;
        },
        timeFormat: function(seconds) {
            seconds = Math.abs(seconds);
            minutes = Math.floor(seconds / 60);
            seconds = Math.floor(seconds % 60);
            seconds = ("0" + seconds).slice(-2);
            minutes = ("0" + minutes).slice(-2);
            return minutes + ":" + seconds;
        },
        saveSettings: function() {
            var data = this.storage.get("blackjack-vegas-21");
            data = JSON.parse(data);
            data.coins = this.coins;
            data.give = this.give;
            data.bgm = this.bgmVolume;
            data.sfx = this.sfxVolume;
            data.autoBet = this.autoBet;
            this.storage.set("blackjack-vegas-21", JSON.stringify(data));
        },
        validCard: function(card) {
           
                var newCard = true;
                for (var i = 0; i < this.cards.length; i++) {
                    if (this.cards[i] === card) {
                        newCard = false;
                    }
                }
                if (newCard) this.cards.push(card);
       
            return newCard;
        },
        setupMarketJsGameCenter: function() {
            if (_SETTINGS) {
                if (_SETTINGS['MarketJSGameCenter']) {
                    var el = ig.domHandler.getElementByClass('gamecenter-activator');
                    if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                            console.log('MarketJSGameCenter activator settings present ....');
                            ig.domHandler.css(el, {
                                position: "absolute",
                                left: _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left'],
                                top: _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top'],
                                "z-index": 3
                            });
                        }
                    }
                    ig.domHandler.show(el);
                } else {
                    console.log('MarketJSGameCenter settings not defined in game settings');
                }
            }
        },
        finalize: function() {
            if (ig.ua.mobile) {
                var elem = ig.domHandler.getElementById("#play");
                ig.domHandler.attr(elem, 'onclick', 'ig.soundHandler.sfxPlayer.play("staticSound");ig.game.splashClick();');
                ig.domHandler.show(elem);
            } else {
                this.start();
            }
            ig.sizeHandler.reorient();
        },
        removeLoadingWheel: function() {
            try {
                $('#ajaxbar').css('background', 'none');
            } catch (err) {
                console.log(err);
            }
        },
        showDebugMenu: function() {
            console.log('showing debug menu ...');
            ig.Entity._debugShowBoxes = true;
            $('.ig_debug').show();
        },
        start: function() {
            this.resetPlayerStats();
            this.director = new ig.Director(this, [LevelOpening, LevelMenu, LevelPlay]);
            if (_SETTINGS['Branding']['Splash']['Enabled']) {
                try {
                    this.branding = new ig.BrandingSplash();
                } catch (err) {
                    console.log(err);
                    console.log('Loading original levels ...');
                    this.director.loadLevel(this.director.currentLevel);
                }
            } else {
                this.director.loadLevel(this.director.currentLevel);
            }
            ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background);
        },
        fpsCount: function() {
        
                if (!this.fpsTimer) {
                    this.fpsTimer = new ig.Timer(1);
                }
                if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                    if (this.fpsCounter != null) {
                        this.fpsCounter++;
                    } else {
                        this.fpsCounter = 0;
                    }
                } else {
                    ig.game.fps = this.fpsCounter;
                    this.fpsCounter = 0;
                    this.fpsTimer.reset();
                }
           
        },
        endGame: function() {
            console.log('End game');
            ig.soundHandler.bgmPlayer.stop();
            ig.apiHandler.run("MJSEnd");
        },
        resetPlayerStats: function() {
            ig.log('resetting player stats ...');
            this.playerStats = {
                id: this.playerStats ? this.playerStats.id : null,
            };
        },
        splashClick: function() {
            var elem = ig.domHandler.getElementById("#play");
            ig.domHandler.hide(elem);
            ig.apiHandler.run("MJSFooter");
            ig.apiHandler.run("MJSHeader");
            ig.game.start();
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
        },
        resumeGame: function() {
          
                ig.sizeHandler.reorient();
                ig.game.start();
                ig.sizeHandler.reorient();
           
        },
        showOverlay: function(divList) {
        
                for (i = 0; i < divList.length; i++) {
                    if ($('#' + divList[i])) $('#' + divList[i]).show();
                    if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "visible";
                }
            
        },
        hideOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).hide();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden";
            }
        },
        update: function() {
            if (this.give) {
                if (this.getRemainTime() <= 0) {
                    this.earnCoins();
                }
            }
            if (this.paused) {
                this.updateWhilePaused();
            } else {
                this.parent();
                if (ig.ua.mobile && ig.soundHandler) {
                    ig.soundHandler.forceLoopBGM();
                }
            }
        },
        updateWhilePaused: function() {
            for (var i = 0; i < this.entities.length; i++) {
                if (this.entities[i].ignorePause) {
                    this.entities[i].update();
                }
            }
        },
        draw: function() {
            this.parent();
        },
        clearCanvas: function(ctx, width, height) {
            var canvas = ctx.canvas;
            ctx.clearRect(0, 0, width, height);
            canvas.style.display = "none";
            canvas.offsetHeight;
            canvas.style.display = "inherit";
        },
        drawDebug: function() {
           
                if (!ig.global.wm) {
                    this.debugEnable();
                    if (this.viewDebug) {
                        ig.system.context.fillStyle = '#000000';
                        ig.system.context.globalAlpha = 0.35;
                        ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                        ig.system.context.globalAlpha = 1;
                        if (this.debug && this.debug.length > 0) {
                            for (i = 0; i < this.debug.length; i++) {
                                ig.system.context.font = "10px Arial";
                                ig.system.context.fillStyle = '#ffffff';
                                ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                            }
                        }
                    }
                }
        
        },
        debugCL: function(consoleLog) {
            if (!this.debug) {
                this.debug = [];
                this.debugLine = 1;
                this.debug.push(consoleLog);
            } else {
                if (this.debug.length < 50) {
                    this.debug.push(consoleLog);
                } else {
                    this.debug.splice(0, 1);
                    this.debug.push(consoleLog);
                }
                this.debugLine++;
            }
            console.log(consoleLog);
        },
        debugEnable: function() {
            if (ig.input.pressed('click')) {
                this.debugEnableTimer = new ig.Timer(2);
            }
            if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                if (ig.input.released('click')) {
                    this.debugEnableTimer = null;
                }
            } else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                this.debugEnableTimer = null;
                if (this.viewDebug) {
                    this.viewDebug = false;
                } else {
                    this.viewDebug = true;
                }
            }
        }
    });
    ig.domHandler = null;
    ig.domHandler = new ig.DomHandler();
    ig.domHandler.forcedDeviceDetection();
    ig.domHandler.forcedDeviceRotation();
    ig.apiHandler = new ig.ApiHandler();
    ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
    var fps = 60;
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
        ig.sizeHandler.resize();
    } else {
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
    }
    ig.soundHandler = null;
    ig.soundHandler = new ig.SoundHandler();
    ig.sizeHandler.reorient();
    Array
});