// ==========
// jQuery v3.1.1
// http://jquery.com/
// ==========
! function(a, b) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};

    function p(a, b) { b = b || d; var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c) }
    var q = "3.1.1",
        r = function(a, b) { return new r.fn.init(a, b) },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function(a, b) { return b.toUpperCase() };
    r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function() { return f.call(this) }, get: function(a) { return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a] }, pushStack: function(a) { var b = r.merge(this.constructor(), a); return b.prevObject = this, b }, each: function(a) { return r.each(this, a) }, map: function(a) { return this.pushStack(r.map(this, function(b, c) { return a.call(b, c, b) })) }, slice: function() { return this.pushStack(f.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(a) { var b = this.length,
                c = +a + (a < 0 ? b : 0); return this.pushStack(c >= 0 && c < b ? [this[c]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function() { var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(a) { throw new Error(a) }, noop: function() {}, isFunction: function(a) { return "function" === r.type(a) }, isArray: Array.isArray, isWindow: function(a) { return null != a && a === a.window }, isNumeric: function(a) { var b = r.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)) }, isPlainObject: function(a) { var b, c; return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n)) }, isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 }, type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a }, globalEval: function(a) { p(a) }, camelCase: function(a) { return a.replace(t, "ms-").replace(u, v) }, nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function(a, b) { var c, d = 0; if (w(a)) { for (c = a.length; d < c; d++)
                    if (b.call(a[d], d, a[d]) === !1) break } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a }, trim: function(a) { return null == a ? "" : (a + "").replace(s, "") }, makeArray: function(a, b) { var c = b || []; return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c }, inArray: function(a, b, c) { return null == b ? -1 : i.call(b, a, c) }, merge: function(a, b) { for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d]; return a.length = e, a }, grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function(a, b, c) { var d, e, f = 0,
                h = []; if (w(a))
                for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
            else
                for (f in a) e = b(a[f], f, c), null != e && h.push(e); return g.apply([], h) }, guid: 1, proxy: function(a, b) { var c, d, e; if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function() { return a.apply(b || this, d.concat(f.call(arguments))) }, e.guid = a.guid = a.guid || r.guid++, e }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { j["[object " + b + "]"] = b.toLowerCase() });

    function w(a) { var b = !!a && "length" in a && a.length,
            c = r.type(a); return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a) }
    var x = function(a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) { return a === b && (l = !0), 0 },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function(a, b) { for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1 },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function(a, b) { return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a },
            da = function() { m() },
            ea = ta(function(a) { return a.disabled === !0 && ("form" in a || "label" in a) }, { dir: "parentNode", next: "legend" }); try { G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType } catch (fa) { G = { apply: D.length ? function(a, b) { F.apply(a, H.call(b)) } : function(a, b) { var c = a.length,
                        d = 0; while (a[c++] = b[d++]);
                    a.length = c - 1 } } }

        function ga(a, b, d, e) { var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9; if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d; if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) { if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) { if (9 === w) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d; if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) { if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length; while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b } if (r) try { return G.apply(d, s.querySelectorAll(r)), d } catch (x) {} finally { k === u && b.removeAttribute("id") } } } return i(a.replace(P, "$1"), b, d, e) }

        function ha() { var a = [];

            function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b }

        function ia(a) { return a[u] = !0, a }

        function ja(a) { var b = n.createElement("fieldset"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function ka(a, b) { var c = a.split("|"),
                e = c.length; while (e--) d.attrHandle[c[e]] = b }

        function la(a, b) { var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex; if (d) return d; if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1 }

        function ma(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function na(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function oa(a) { return function(b) { return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a } }

        function pa(a) { return ia(function(b) { return b = +b, ia(function(c, d) { var e, f = a([], c.length, b),
                        g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

        function qa(a) { return a && "undefined" != typeof a.getElementsByTagName && a }
        c = ga.support = {}, f = ga.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return !!b && "HTML" !== b.nodeName }, m = ga.setDocument = function(a) { var b, e, g = a ? a.ownerDocument || a : v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ja(function(a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.filter.ID = function(a) { var b = a.replace(_, aa); return function(a) { return a.getAttribute("id") === b } }, d.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }) : (d.filter.ID = function(a) { var b = a.replace(_, aa); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }, d.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && p) { var c, d, e, f = b.getElementById(a); if (f) { if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        e = b.getElementsByName(a), d = 0; while (f = e[d++])
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f] } return [] } }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) { var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function(a, b) { if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a) }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ja(function(a) { a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) { c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) { var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function(a, b) { if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1 }, B = b ? function(a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) { if (a === b) return l = !0, 0; var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b]; if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0; if (e === f) return la(a, b);
                c = a; while (c = c.parentNode) g.unshift(c);
                c = b; while (c = c.parentNode) h.unshift(c); while (g[d] === h[d]) d++; return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0 }, n) : n }, ga.matches = function(a, b) { return ga(a, null, null, b) }, ga.matchesSelector = function(a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return ga(b, n, null, [a]).length > 0 }, ga.contains = function(a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, ga.escape = function(a) { return (a + "").replace(ba, ca) }, ga.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, ga.uniqueSort = function(a) { var b, d = [],
                e = 0,
                f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = ga.getText = function(a) { var b, c = "",
                d = 0,
                f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b); return c }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a) { return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function(a) { var b = a.replace(_, aa).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function(a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function(a, b, c) { return function(d) { var e = ga.attr(d, a); return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-")) } }, CHILD: function(a, b, c, d, e) { var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b; return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1; if (q) { if (f) { while (p) { m = b; while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break } } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0 } } }, PSEUDO: function(a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) { var d, f = e(a, b),
                            g = f.length; while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g]) }) : function(a) { return e(a, 0, c) }) : e } }, pseudos: { not: ia(function(a) { var b = [],
                        c = [],
                        d = h(a.replace(P, "$1")); return d[u] ? ia(function(a, b, c, e) { var f, g = d(a, null, e, []),
                            h = a.length; while (h--)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() } }), has: ia(function(a) { return function(b) { return ga(a, b).length > 0 } }), contains: ia(function(a) { return a = a.replace(_, aa),
                        function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: ia(function(a) { return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                        function(b) { var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1 } }), target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function(a) { return a === o }, focus: function(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: oa(!1), disabled: oa(!0), checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function(a) { for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0 }, parent: function(a) { return !d.pseudos.empty(a) }, header: function(a) { return X.test(a.nodeName) }, input: function(a) { return W.test(a.nodeName) }, button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: pa(function() { return [0] }), last: pa(function(a, b) { return [b - 1] }), eq: pa(function(a, b, c) { return [c < 0 ? c + b : c] }), even: pa(function(a, b) { for (var c = 0; c < b; c += 2) a.push(c); return a }), odd: pa(function(a, b) { for (var c = 1; c < b; c += 2) a.push(c); return a }), lt: pa(function(a, b, c) { for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d); return a }), gt: pa(function(a, b, c) { for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);

        function ra() {}
        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter; while (h) { c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? ga.error(a) : z(a, i).slice(0) };

        function sa(a) { for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value; return d }

        function ta(a, b, c) { var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++; return b.first ? function(b, c, e) { while (b = b[d])
                    if (1 === b.nodeType || g) return a(b, c, e);
                return !1 } : function(b, c, i) { var j, k, l, m = [w, h]; if (i) { while (b = b[d])
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0 } else
                    while (b = b[d])
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else { if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2]; if (k[f] = m, m[2] = a(b, c, i)) return !0 } return !1 } }

        function ua(a) { return a.length > 1 ? function(b, c, d) { var e = a.length; while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0 } : a[0] }

        function va(a, b, c) { for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c); return c }

        function wa(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g }

        function xa(a, b, c, d, e, f) { return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) { var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = wa(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i) }
                        k = r.length; while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r) }) }

        function ya(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) { return a === b }, h, !0), l = ta(function(a) { return I(b, a) > -1 }, h, !0), m = [function(a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a)) }
                    m.push(c) }
            return ua(m) }

        function za(a, b) { var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) { var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length; for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) { if (e && l) { o = 0, g || l.ownerDocument === n || (m(l), h = !p); while (q = a[o++])
                                if (q(l, g || n, h)) { i.push(l); break }
                            k && (w = y) }
                        c && ((l = !q && l) && r--, f && t.push(l)) } if (r += s, c && s !== r) { o = 0; while (q = b[o++]) q(t, u, g, h); if (f) { if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u) }
                        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i) } return k && (w = y, j = v), t }; return c ? ia(f) : f } return h = ga.compile = function(a, b) { var c, d = [],
                e = [],
                f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a } return f }, i = ga.select = function(a, b, c, e) { var f, i, j, k, l, m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a); if (c = c || [], 1 === n.length) { if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) { if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length) }
                f = V.needsContext.test(a) ? 0 : i.length; while (f--) { if (j = i[f], d.relative[k = j.type]) break; if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) { if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c; break } } } return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) { return 1 & a.compareDocumentPosition(n.createElement("fieldset")) }), ja(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ka("type|href|height|width", function(a, b, c) { if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ja(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ka("value", function(a, b, c) { if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue }), ja(function(a) { return null == a.getAttribute("disabled") }) || ka(J, function(a, b, c) { var d; if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), ga }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function(a, b, c) { var d = [],
                e = void 0 !== c; while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) { if (e && r(a).is(c)) break;
                    d.push(a) }
            return d },
        z = function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c },
        A = r.expr.match.needsContext,
        B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        C = /^.[^:#\[\.,]*$/;

    function D(a, b, c) { return r.isFunction(b) ? r.grep(a, function(a, d) { return !!b.call(a, d, a) !== c }) : b.nodeType ? r.grep(a, function(a) { return a === b !== c }) : "string" != typeof b ? r.grep(a, function(a) { return i.call(b, a) > -1 !== c }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) { return i.call(b, a) > -1 !== c && 1 === a.nodeType })) }
    r.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) { return 1 === a.nodeType })) }, r.fn.extend({ find: function(a) { var b, c, d = this.length,
                e = this; if ("string" != typeof a) return this.pushStack(r(a).filter(function() { for (b = 0; b < d; b++)
                    if (r.contains(e[b], this)) return !0 })); for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c); return d > 1 ? r.uniqueSort(c) : c }, filter: function(a) { return this.pushStack(D(this, a || [], !1)) }, not: function(a) { return this.pushStack(D(this, a || [], !0)) }, is: function(a) { return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length } });
    var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        G = r.fn.init = function(a, b, c) { var e, f; if (!a) return this; if (c = c || E, "string" == typeof a) { if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a); if (e[1]) { if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b))
                        for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]); return this } return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this } return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this) };
    G.prototype = r.fn, E = r(d);
    var H = /^(?:parents|prev(?:Until|All))/,
        I = { children: !0, contents: !0, next: !0, prev: !0 };
    r.fn.extend({ has: function(a) { var b = r(a, this),
                c = b.length; return this.filter(function() { for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a])) return !0 }) }, closest: function(a, b) { var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a); if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f) }, index: function(a) { return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(a, b) { return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b)))) }, addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } });

    function J(a, b) { while ((a = a[b]) && 1 !== a.nodeType); return a }
    r.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return y(a, "parentNode") }, parentsUntil: function(a, b, c) { return y(a, "parentNode", c) }, next: function(a) { return J(a, "nextSibling") }, prev: function(a) { return J(a, "previousSibling") }, nextAll: function(a) { return y(a, "nextSibling") }, prevAll: function(a) { return y(a, "previousSibling") }, nextUntil: function(a, b, c) { return y(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return y(a, "previousSibling", c) }, siblings: function(a) { return z((a.parentNode || {}).firstChild, a) }, children: function(a) { return z(a.firstChild) }, contents: function(a) { return a.contentDocument || r.merge([], a.childNodes) } }, function(a, b) { r.fn[a] = function(c, d) { var e = r.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e) } });
    var K = /[^\x20\t\r\n\f]+/g;

    function L(a) { var b = {}; return r.each(a.match(K) || [], function(a, c) { b[c] = !0 }), b }
    r.Callbacks = function(a) { a = "string" == typeof a ? L(a) : r.extend({}, a); var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() { for (e = a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "") },
            j = { add: function() { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { r.each(b, function(b, c) { r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function() { return r.each(arguments, function(a, b) { var c; while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h-- }), this }, has: function(a) { return a ? r.inArray(a, f) > -1 : f.length > 0 }, empty: function() { return f && (f = []), this }, disable: function() { return e = g = [], f = c = "", this }, disabled: function() { return !f }, lock: function() { return e = g = [], c || b || (f = c = ""), this }, locked: function() { return !!e }, fireWith: function(a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function() { return j.fireWith(this, arguments), this }, fired: function() { return !!d } }; return j };

    function M(a) { return a }

    function N(a) { throw a }

    function O(a, b, c) { var d; try { a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a) } catch (a) { c.call(void 0, a) } }
    r.extend({ Deferred: function(b) { var c = [
                    ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                    ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = { state: function() { return d }, always: function() { return f.done(arguments).fail(arguments), this }, "catch": function(a) { return e.then(null, a) }, pipe: function() { var a = arguments; return r.Deferred(function(b) { r.each(c, function(c, d) { var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function() { var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments) }) }), a = null }).promise() }, then: function(b, d, e) { var f = 0;

                        function g(b, c, d, e) { return function() { var h = this,
                                    i = arguments,
                                    j = function() { var a, j; if (!(b < f)) { if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i)) } },
                                    k = e ? j : function() { try { j() } catch (a) { r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i)) } };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k)) } } return r.Deferred(function(a) { c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N)) }).promise() }, promise: function(a) { return null != a ? r.extend(a, e) : e } },
                f = {}; return r.each(c, function(a, b) { var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function() { d = h }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() { return f[b[0] + "With"](this === f ? void 0 : this, arguments), this }, f[b[0] + "With"] = g.fireWith }), e.promise(f), b && b.call(f, f), f }, when: function(a) { var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function(a) { return function(c) { d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e) } }; if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then(); while (c--) O(e[c], h(c), g.reject); return g.promise() } });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) { a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c) }, r.readyException = function(b) { a.setTimeout(function() { throw b }) };
    var Q = r.Deferred();
    r.fn.ready = function(a) { return Q.then(a)["catch"](function(a) { r.readyException(a) }), this }, r.extend({ isReady: !1, readyWait: 1, holdReady: function(a) { a ? r.readyWait++ : r.ready(!0) }, ready: function(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r])) } }), r.ready.then = Q.then;

    function R() {
        d.removeEventListener("DOMContentLoaded", R),
            a.removeEventListener("load", R), r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));
    var S = function(a, b, c, d, e, f, g) { var h = 0,
                i = a.length,
                j = null == c; if ("object" === r.type(c)) { e = !0; for (h in c) S(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(r(a), c) })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f },
        T = function(a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType };

    function U() { this.expando = r.expando + U.uid++ }
    U.uid = 1, U.prototype = { cache: function(a) { var b = a[this.expando]; return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b }, set: function(a, b, c) { var d, e = this.cache(a); if ("string" == typeof b) e[r.camelCase(b)] = c;
            else
                for (d in b) e[r.camelCase(d)] = b[d]; return e }, get: function(a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)] }, access: function(a, b, c) { return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b) }, remove: function(a, b) { var c, d = a[this.expando]; if (void 0 !== d) { if (void 0 !== b) { r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length; while (c--) delete d[b[c]] }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } }, hasData: function(a) { var b = a[this.expando]; return void 0 !== b && !r.isEmptyObject(b) } };
    var V = new U,
        W = new U,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;

    function Z(a) { return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a) }

    function $(a, b, c) { var d; if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) { try { c = Z(c) } catch (e) {}
                W.set(a, b, c) } else c = void 0;
        return c }
    r.extend({ hasData: function(a) { return W.hasData(a) || V.hasData(a) }, data: function(a, b, c) { return W.access(a, b, c) }, removeData: function(a, b) { W.remove(a, b) }, _data: function(a, b, c) { return V.access(a, b, c) }, _removeData: function(a, b) { V.remove(a, b) } }), r.fn.extend({ data: function(a, b) { var c, d, e, f = this[0],
                g = f && f.attributes; if (void 0 === a) { if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d])));
                    V.set(f, "hasDataAttrs", !0) } return e } return "object" == typeof a ? this.each(function() { W.set(this, a) }) : S(this, function(b) { var c; if (f && void 0 === b) { if (c = W.get(f, a), void 0 !== c) return c; if (c = $(f, a), void 0 !== c) return c } else this.each(function() { W.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0) }, removeData: function(a) { return this.each(function() { W.remove(this, a) }) } }), r.extend({ queue: function(a, b, c) { var d; if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || [] }, dequeue: function(a, b) { b = b || "fx"; var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function() { r.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function(a, b) { var c = b + "queueHooks"; return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function() { V.remove(a, [b + "queue", c]) }) }) } }), r.fn.extend({ queue: function(a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() { var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a) }) }, dequeue: function(a) { return this.each(function() { r.dequeue(this, a) }) }, clearQueue: function(a) { return this.queue(a || "fx", []) }, promise: function(a, b) { var c, d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function() {--d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } });
    var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
        ba = ["Top", "Right", "Bottom", "Left"],
        ca = function(a, b) { return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display") },
        da = function(a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e };

    function ea(a, b, c, d) { var e, f = 1,
            g = 20,
            h = d ? function() { return d.cur() } : function() { return r.css(a, b, "") },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b)); if (k && k[3] !== j) { j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g) } return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e }
    var fa = {};

    function ga(a) { var b, c = a.ownerDocument,
            d = a.nodeName,
            e = fa[d]; return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e) }

    function ha(a, b) { for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c))); for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]); return a }
    r.fn.extend({ show: function() { return ha(this, !0) }, hide: function() { return ha(this) }, toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { ca(this) ? r(this).show() : r(this).hide() }) } });
    var ia = /^(?:checkbox|radio)$/i,
        ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ka = /^$|\/(?:java|ecma)script/i,
        la = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    la.optgroup = la.option, la.tbody = la.tfoot = la.colgroup = la.caption = la.thead, la.th = la.td;

    function ma(a, b) { var c; return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c }

    function na(a, b) { for (var c = 0, d = a.length; c < d; c++) V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval")) }
    var oa = /<|&#?\w+;/;

    function pa(a, b, c, d, e) { for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if (f = a[n], f || 0 === f)
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (oa.test(f)) { g = g || l.appendChild(b.createElement("div")), h = (ja.exec(f) || ["", ""])[1].toLowerCase(), i = la[h] || la._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0]; while (k--) g = g.lastChild;
            r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "" } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0; while (f = m[n++])
            if (d && r.inArray(f, d) > -1) e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c) { k = 0; while (f = g[k++]) ka.test(f.type || "") && c.push(f) } return l }! function() { var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue }();
    var qa = d.documentElement,
        ra = /^key/,
        sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ta = /^([^.]*)(?:\.(.+)|)/;

    function ua() { return !0 }

    function va() { return !1 }

    function wa() { try { return d.activeElement } catch (a) {} }

    function xa(a, b, c, d, e, f) { var g, h; if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) xa(a, h, c, d, b[h], f); return a } if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = va;
        else if (!e) return a; return 1 === f && (g = e, e = function(a) { return r().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() { r.event.add(this, b, e, d, c) }) }
    r.event = { global: {}, add: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a); if (q) { c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) { return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(K) || [""], j = b.length; while (j--) h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0) } }, remove: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a); if (q && (i = q.events)) { b = (b || "").match(K) || [""], j = b.length; while (j--)
                    if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) { l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]) } else
                        for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && V.remove(a, "handle events") } }, dispatch: function(a) { var b = r.event.fix(a),
                c, d, e, f, g, h, i = new Array(arguments.length),
                j = (V.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {}; for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c]; if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) { h = r.event.handlers.call(this, b, j), c = 0; while ((f = h[c++]) && !b.isPropagationStopped()) { b.currentTarget = f.elem, d = 0; while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, b), b.result } }, handlers: function(a, b) { var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target; if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) { for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({ elem: j, handlers: f }) }
            return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h }, addProp: function(a, b) { Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function() { if (this.originalEvent) return b(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[a] }, set: function(b) { Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b }) } }) }, fix: function(a) { return a[r.expando] ? a : new r.Event(a) }, special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== wa() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === wa() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1 }, _default: function(a) { return r.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } } }, r.removeEvent = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, r.Event = function(a, b) { return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b) }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: va, isPropagationStopped: va, isImmediatePropagationStopped: va, isSimulated: !1, preventDefault: function() { var a = this.originalEvent;
            this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault() }, stopPropagation: function() { var a = this.originalEvent;
            this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation() }, stopImmediatePropagation: function() { var a = this.originalEvent;
            this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation() } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(a) { var b = a.button; return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) { r.event.special[a] = { delegateType: b, bindType: b, handle: function(a) { var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj; return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), r.fn.extend({ on: function(a, b, c, d) { return xa(this, a, b, c, d) }, one: function(a, b, c, d) { return xa(this, a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function() { r.event.remove(this, a, c, b) }) } });
    var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        za = /<script|<style|<link/i,
        Aa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ba = /^true\/(.*)/,
        Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Da(a, b) { return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a }

    function Ea(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a }

    function Fa(a) { var b = Ba.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function Ga(a, b) { var c, d, e, f, g, h, i, j; if (1 === b.nodeType) { if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) { delete g.handle, g.events = {}; for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]) }
            W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i)) } }

    function Ha(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) }

    function Ia(a, b, c, d) { b = g.apply([], b); var e, f, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q); if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q)) return a.each(function(e) { var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d) }); if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) { for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l); if (i)
                for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++) j = h[l], ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k)) } return a }

    function Ja(a, b, c) { for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d)); return a }
    r.extend({ htmlPrefilter: function(a) { return a.replace(ya, "<$1></$2>") }, clone: function(a, b, c) { var d, e, f, g, h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a); if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]); if (b)
                if (c)
                    for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++) Ga(f[d], g[d]);
                else Ga(a, h);
            return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h }, cleanData: function(a) { for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (T(c)) { if (b = c[V.expando]) { if (b.events)
                            for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[V.expando] = void 0 }
                    c[W.expando] && (c[W.expando] = void 0) } } }), r.fn.extend({ detach: function(a) { return Ja(this, a, !0) }, remove: function(a) { return Ja(this, a) }, text: function(a) { return S(this, function(a) { return void 0 === a ? r.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) }, append: function() { return Ia(this, arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Da(this, a);
                    b.appendChild(a) } }) }, prepend: function() { return Ia(this, arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Da(this, a);
                    b.insertBefore(a, b.firstChild) } }) }, before: function() { return Ia(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function() { return Ia(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function() { for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = ""); return this }, clone: function(a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function() { return r.clone(this, a, b) }) }, html: function(a) { return S(this, function(a) { var b = this[0] || {},
                    c = 0,
                    d = this.length; if (void 0 === a && 1 === b.nodeType) return b.innerHTML; if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) { a = r.htmlPrefilter(a); try { for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);
                        b = 0 } catch (e) {} }
                b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function() { var a = []; return Ia(this, arguments, function(b) { var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this)) }, a) } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { r.fn[a] = function(a) { for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get()); return this.pushStack(d) } });
    var Ka = /^margin/,
        La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
        Ma = function(b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) };
    ! function() {
        function b() { if (i) { i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h); var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null } } var c, e, f, g, h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function() { return b(), c }, boxSizingReliable: function() { return b(), e }, pixelMarginRight: function() { return b(), f }, reliableMarginLeft: function() { return b(), g } })) }();

    function Na(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g }

    function Oa(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }
    var Pa = /^(none|table(?!-c[ea]).+)/,
        Qa = { position: "absolute", visibility: "hidden", display: "block" },
        Ra = { letterSpacing: "0", fontWeight: "400" },
        Sa = ["Webkit", "Moz", "ms"],
        Ta = d.createElement("div").style;

    function Ua(a) { if (a in Ta) return a; var b = a[0].toUpperCase() + a.slice(1),
            c = Sa.length; while (c--)
            if (a = Sa[c] + b, a in Ta) return a }

    function Va(a, b, c) { var d = aa.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b }

    function Wa(a, b, c, d, e) { var f, g = 0; for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e))); return g }

    function Xa(a, b, c) { var d, e = !0,
            f = Ma(a),
            g = "border-box" === r.css(a, "boxSizing", !1, f); if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) { if (d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d)) return d;
            e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0 } return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px" }
    r.extend({ cssHooks: { opacity: { get: function(a, b) { if (b) { var c = Na(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function(a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = r.camelCase(b),
                    i = a.style; return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0) } }, css: function(a, b, c, d) { var e, f, g, h = r.camelCase(b); return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e } }), r.each(["height", "width"], function(a, b) { r.cssHooks[b] = { get: function(a, c, d) { if (c) return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function() { return Xa(a, b, d) }) }, set: function(a, c, d) { var e, f = d && Ma(a),
                    g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f); return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g) } } }), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function(a, b) { if (b) return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left })) + "px" }), r.each({ margin: "", padding: "", border: "Width" }, function(a, b) { r.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ba[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Ka.test(a) || (r.cssHooks[a + b].set = Va) }), r.fn.extend({ css: function(a, b) { return S(this, function(a, b, c) { var d, e, f = {},
                    g = 0; if (r.isArray(b)) { for (d = Ma(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d); return f } return void 0 !== c ? r.style(a, b, c) : r.css(a, b) }, a, b, arguments.length > 1) } });

    function Ya(a, b, c, d, e) { return new Ya.prototype.init(a, b, c, d, e) }
    r.Tween = Ya, Ya.prototype = { constructor: Ya, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px") }, cur: function() { var a = Ya.propHooks[this.prop]; return a && a.get ? a.get(this) : Ya.propHooks._default.get(this) }, run: function(a) { var b, c = Ya.propHooks[this.prop]; return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this } }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = { _default: { get: function(a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function(a) { r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit) } } }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, r.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, r.fx = Ya.prototype.init, r.fx.step = {};
    var Za, $a, _a = /^(?:toggle|show|hide)$/,
        ab = /queueHooks$/;

    function bb() { $a && (a.requestAnimationFrame(bb), r.fx.tick()) }

    function cb() { return a.setTimeout(function() { Za = void 0 }), Za = r.now() }

    function db(a, b) { var c, d = 0,
            e = { height: a }; for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ba[d], e["margin" + c] = e["padding" + c] = a; return b && (e.opacity = e.width = a), e }

    function eb(a, b, c) { for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d }

    function fb(a, b, c) { var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && ca(a),
            q = V.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() { g.unqueued || h() }), g.unqueued++, m.always(function() { m.always(function() { g.unqueued--, r.queue(a, "fx").length || g.empty.fire() }) })); for (d in b)
            if (e = b[d], _a.test(e)) { if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) { if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0 }
                n[d] = q && q[d] || r.style(a, d) }
        if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) { l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() { o.display = j }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })), i = !1; for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ha([a], !0), m.done(function() { p || ha([a]), V.remove(a, "fxshow"); for (d in n) r.style(a, d, n[d]) })), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0)) } }

    function gb(a, b) { var c, d, e, f, g; for (c in a)
            if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e }

    function hb(a, b, c) { var d, e, f = 0,
            g = hb.prefilters.length,
            h = r.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Za || cb(), duration: c.duration, tweens: [], createTween: function(b, c) { var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function(b) { var c = 0,
                        d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; c < d; c++) j.tweens[c].run(1); return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this } }),
            k = j.props; for (gb(k, j.opts.specialEasing); f < g; f++)
            if (d = hb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) }
    r.Animation = r.extend(hb, { tweeners: { "*": [function(a, b) { var c = this.createTween(a, b); return ea(c.elem, a, aa.exec(b), c), c }] }, tweener: function(a, b) { r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K); for (var c, d = 0, e = a.length; d < e; d++) c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b) }, prefilters: [fb], prefilter: function(a, b) { b ? hb.prefilters.unshift(a) : hb.prefilters.push(a) } }), r.speed = function(a, b, c) { var e = a && "object" == typeof a ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b }; return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function() { r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue) }, e }, r.fn.extend({ fadeTo: function(a, b, c, d) { return this.filter(ca).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function(a, b, c, d) { var e = r.isEmptyObject(a),
                    f = r.speed(b, c, d),
                    g = function() { var b = hb(this, r.extend({}, a), f);
                        (e || V.get(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function(a, b, c) { var d = function(a) { var b = a.stop;
                    delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() { var b = !0,
                        e = null != a && a + "queueHooks",
                        f = r.timers,
                        g = V.get(this); if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]); for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));!b && c || r.dequeue(this, a) }) }, finish: function(a) { return a !== !1 && (a = a || "fx"), this.each(function() { var b, c = V.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = r.timers,
                        g = d ? d.length : 0; for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish }) } }), r.each(["toggle", "show", "hide"], function(a, b) { var c = r.fn[b];
            r.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e) } }), r.each({ slideDown: db("show"), slideUp: db("hide"), slideToggle: db("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { r.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), r.timers = [], r.fx.tick = function() { var a, b = 0,
                c = r.timers; for (Za = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(), Za = void 0 }, r.fx.timer = function(a) { r.timers.push(a), a() ? r.fx.start() : r.timers.pop() }, r.fx.interval = 13, r.fx.start = function() { $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval)) }, r.fx.stop = function() { a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function(b, c) { return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) { var e = a.setTimeout(c, b);
                d.stop = function() { a.clearTimeout(e) } }) },
        function() { var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value }();
    var ib, jb = r.expr.attrHandle;
    r.fn.extend({ attr: function(a, b) { return S(this, r.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { r.removeAttr(this, a) }) } }), r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)),
                void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: { type: { set: function(a, b) { if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } },
        removeAttr: function(a, b) { var c, d = 0,
                e = b && b.match(K); if (e && 1 === a.nodeType)
                while (c = e[d++]) a.removeAttribute(c) }
    }), ib = { set: function(a, b, c) { return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c } }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) { var c = jb[b] || r.find.attr;
        jb[b] = function(a, b, d) { var e, f, g = b.toLowerCase(); return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e } });
    var kb = /^(?:input|select|textarea|button)$/i,
        lb = /^(?:a|area)$/i;
    r.fn.extend({ prop: function(a, b) { return S(this, r.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return this.each(function() { delete this[r.propFix[a] || a] }) } }), r.extend({ prop: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) { var b = r.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function(a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null }, set: function(a) { var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex) } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { r.propFix[this.toLowerCase()] = this });

    function mb(a) { var b = a.match(K) || []; return b.join(" ") }

    function nb(a) { return a.getAttribute && a.getAttribute("class") || "" }
    r.fn.extend({ addClass: function(a) { var b, c, d, e, f, g, h, i = 0; if (r.isFunction(a)) return this.each(function(b) { r(this).addClass(a.call(this, b, nb(this))) }); if ("string" == typeof a && a) { b = a.match(K) || []; while (c = this[i++])
                    if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") { g = 0; while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = mb(d), e !== h && c.setAttribute("class", h) } } return this }, removeClass: function(a) { var b, c, d, e, f, g, h, i = 0; if (r.isFunction(a)) return this.each(function(b) { r(this).removeClass(a.call(this, b, nb(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof a && a) { b = a.match(K) || []; while (c = this[i++])
                    if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") { g = 0; while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = mb(d), e !== h && c.setAttribute("class", h) } } return this }, toggleClass: function(a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) { r(this).toggleClass(a.call(this, c, nb(this), b), b) }) : this.each(function() { var b, d, e, f; if ("string" === c) { d = 0, e = r(this), f = a.match(K) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || "")) }) }, hasClass: function(a) { var b, c, d = 0;
            b = " " + a + " "; while (c = this[d++])
                if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return !0;
            return !1 } });
    var ob = /\r/g;
    r.fn.extend({ val: function(a) { var b, c, d, e = this[0]; { if (arguments.length) return d = r.isFunction(a), this.each(function(c) { var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function(a) { return null == a ? "" : a + "" })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c) } } }), r.extend({ valHooks: { option: { get: function(a) { var b = r.find.attr(a, "value"); return null != b ? b : mb(r.text(a)) } }, select: { get: function(a) { var b, c, d, e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length; for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                        if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) { if (b = r(c).val(), g) return b;
                            h.push(b) }
                    return h }, set: function(a, b) { var c, d, e = a.options,
                        f = r.makeArray(b),
                        g = e.length; while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0); return c || (a.selectedIndex = -1), f } } } }), r.each(["radio", "checkbox"], function() { r.valHooks[this] = { set: function(a, b) { if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1 } }, o.checkOn || (r.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, { trigger: function(b, c, e, f) { var g, h, i, j, k, m, n, o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : []; if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) { if (!f && !n.noBubble && !r.isWindow(e)) { for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a) }
                g = 0; while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault()); return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result } }, simulate: function(a, b, c) { var d = r.extend(new r.Event, c, { type: a, isSimulated: !0 });
            r.event.trigger(d, null, b) } }), r.fn.extend({ trigger: function(a, b) { return this.each(function() { r.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; if (c) return r.event.trigger(a, b, c, !0) } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) { r.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), r.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function(a, b) { var c = function(a) { r.event.simulate(b, a.target, r.event.fix(a)) };
        r.event.special[b] = { setup: function() { var d = this.ownerDocument || this,
                    e = V.access(d, b);
                e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1) }, teardown: function() { var d = this.ownerDocument || this,
                    e = V.access(d, b) - 1;
                e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b)) } } });
    var qb = a.location,
        rb = r.now(),
        sb = /\?/;
    r.parseXML = function(b) { var c; if (!b || "string" != typeof b) return null; try { c = (new a.DOMParser).parseFromString(b, "text/xml") } catch (d) { c = void 0 } return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c };
    var tb = /\[\]$/,
        ub = /\r?\n/g,
        vb = /^(?:submit|button|image|reset|file)$/i,
        wb = /^(?:input|select|textarea|keygen)/i;

    function xb(a, b, c, d) { var e; if (r.isArray(b)) r.each(b, function(b, e) { c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== r.type(b)) d(a, b);
        else
            for (e in b) xb(a + "[" + e + "]", b[e], c, d) }
    r.param = function(a, b) { var c, d = [],
            e = function(a, b) { var c = r.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c) }; if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) xb(c, a[c], b, e); return d.join("&") }, r.fn.extend({ serialize: function() { return r.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = r.prop(this, "elements"); return a ? r.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a)) }).map(function(a, b) { var c = r(this).val(); return null == c ? null : r.isArray(c) ? r.map(c, function(a) { return { name: b.name, value: a.replace(ub, "\r\n") } }) : { name: b.name, value: c.replace(ub, "\r\n") } }).get() } });
    var yb = /%20/g,
        zb = /#.*$/,
        Ab = /([?&])_=[^&]*/,
        Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Db = /^(?:GET|HEAD)$/,
        Eb = /^\/\//,
        Fb = {},
        Gb = {},
        Hb = "*/".concat("*"),
        Ib = d.createElement("a");
    Ib.href = qb.href;

    function Jb(a) { return function(b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0,
                f = b.toLowerCase().match(K) || []; if (r.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } }

    function Kb(a, b, c, d) { var e = {},
            f = a === Gb;

        function g(h) { var i; return e[h] = !0, r.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") }

    function Lb(a, b) { var c, d, e = r.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && r.extend(!0, a, d), a }

    function Mb(a, b, c) { var d, e, f, g, h = a.contents,
            i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type")); if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) { i.unshift(e); break }
        if (i[0] in c) f = i[0];
        else { for (e in c) { if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break }
                g || (g = e) }
            f = f || g } if (f) return f !== i[0] && i.unshift(f), c[f] }

    function Nb(a, b, c, d) { var e, f, g, h, i, j = {},
            k = a.dataTypes.slice(); if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift(); while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } }
    r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(a, b) { return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a) }, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function(b, c) { "object" == typeof b && (c = b, b = void 0), c = c || {}; var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = { readyState: 0, getResponseHeader: function(a) { var b; if (k) { if (!h) { h = {}; while (b = Bb.exec(g)) h[b[1].toLowerCase()] = b[2] }
                            b = h[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function() { return k ? g : null }, setRequestHeader: function(a, b) { return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this }, overrideMimeType: function(a) { return null == k && (o.mimeType = a), this }, statusCode: function(a) { var b; if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) u[b] = [u[b], a[b]];
                        return this }, abort: function(a) { var b = a || x; return e && e.abort(b), A(0, b), this } }; if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) { j = d.createElement("a"); try { j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host } catch (z) { o.crossDomain = !0 } } if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]); for (m in o.headers) y.setRequestHeader(m, o.headers[m]); if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort(); if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) { if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() { y.abort("timeout") }, o.timeout)); try { k = !1, e.send(v, A) } catch (z) { if (k) throw z;
                    A(-1, z) } } else A(-1, "No Transport");

            function A(b, c, d, h) { var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop"))) } return y }, getJSON: function(a, b, c) { return r.get(a, b, c, "json") }, getScript: function(a, b) { return r.get(a, void 0, b, "script") } }), r.each(["get", "post"], function(a, b) { r[b] = function(a, c, d, e) { return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a)) } }), r._evalUrl = function(a) { return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, r.fn.extend({ wrapAll: function(a) { var b; return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var a = this; while (a.firstElementChild) a = a.firstElementChild; return a }).append(this)), this }, wrapInner: function(a) { return r.isFunction(a) ? this.each(function(b) { r(this).wrapInner(a.call(this, b)) }) : this.each(function() { var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function(a) { var b = r.isFunction(a); return this.each(function(c) { r(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function(a) { return this.parent(a).not("body").each(function() { r(this).replaceWith(this.childNodes) }), this } }), r.expr.pseudos.hidden = function(a) { return !r.expr.pseudos.visible(a) }, r.expr.pseudos.visible = function(a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }, r.ajaxSettings.xhr = function() { try { return new a.XMLHttpRequest } catch (b) {} };
    var Ob = { 0: 200, 1223: 204 },
        Pb = r.ajaxSettings.xhr();
    o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function(b) { var c, d; if (o.cors || Pb && !b.crossDomain) return { send: function(e, f) { var g, h = b.xhr(); if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"); for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) { return function() { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())) } }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() { 4 === h.readyState && a.setTimeout(function() { c && d() }) }, c = c("abort"); try { h.send(b.hasContent && b.data || null) } catch (i) { if (c) throw i } }, abort: function() { c && c() } } }), r.ajaxPrefilter(function(a) { a.crossDomain && (a.contents.script = !1) }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { return r.globalEval(a), a } } }), r.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), r.ajaxTransport("script", function(a) { if (a.crossDomain) { var b, c; return { send: function(e, f) { b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function(a) { b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type) }), d.head.appendChild(b[0]) }, abort: function() { c && c() } } } });
    var Qb = [],
        Rb = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = Qb.pop() || r.expando + "_" + rb++; return this[a] = !0, a } }), r.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data"); if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || r.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0 }), "script" }), o.createHTMLDocument = function() { var a = d.implementation.createHTMLDocument("").body; return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length }(), r.parseHTML = function(a, b, c) { if ("string" != typeof a) return []; "boolean" == typeof b && (c = b, b = !1); var e, f, g; return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes)) }, r.fn.load = function(a, b, c) { var d, e, f, g = this,
            h = a.indexOf(" "); return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a) }).always(c && function(a, b) { g.each(function() { c.apply(this, f || [a.responseText, b, a]) }) }), this }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { r.fn[b] = function(a) { return this.on(b, a) } }), r.expr.pseudos.animated = function(a) { return r.grep(r.timers, function(b) { return a === b.elem }).length };

    function Sb(a) { return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView }
    r.offset = { setOffset: function(a, b, c) { var d, e, f, g, h, i, j, k = r.css(a, "position"),
                l = r(a),
                m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, r.fn.extend({ offset: function(a) { if (arguments.length) return void 0 === a ? this : this.each(function(b) { r.offset.setOffset(this, a, b) }); var b, c, d, e, f = this[0]; if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 } }, position: function() { if (this[0]) { var a, b, c = this[0],
                    d = { top: 0, left: 0 }; return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { var a = this.offsetParent; while (a && "static" === r.css(a, "position")) a = a.offsetParent; return a || qa }) } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) { var c = "pageYOffset" === b;
        r.fn[a] = function(d) { return S(this, function(a, d, e) { var f = Sb(a); return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e) }, a, d, arguments.length) } }), r.each(["top", "left"], function(a, b) { r.cssHooks[b] = Oa(o.pixelPosition, function(a, c) { if (c) return c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c }) }), r.each({ Height: "height", Width: "width" }, function(a, b) { r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) { r.fn[d] = function(e, f) { var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border"); return S(this, function(b, c, e) { var f; return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h) }, b, g ? e : void 0, g) } }) }), r.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() { return r });
    var Tb = a.jQuery,
        Ub = a.$;
    return r.noConflict = function(b) { return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r }, b || (a.jQuery = a.$ = r), r
});
// ==========
// jQuery Migrate
// https://github.com/jquery/jquery-migrate
// ==========
! function(e, t, n) {
    function r(n) { var r = t.console;
        o[n] || (o[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (e.migrateTrace && r.trace)) }

    function a(t, n, a, o) { if (Object.defineProperty) try { return void Object.defineProperty(t, n, { configurable: !0, enumerable: !0, get: function() { return r(o), a }, set: function(e) { r(o), a = e } }) } catch (i) {}
        e._definePropertyBroken = !0, t[n] = a } var o = {};
    e.migrateWarnings = [], !e.migrateMute && t.console, e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() { o = {}, e.migrateWarnings.length = 0 }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode"); var i = e("<input/>", { size: 1 }).attr("size") && e.attrFn,
        s = e.attr,
        u = e.attrHooks.value && e.attrHooks.value.get || function() { return null },
        c = e.attrHooks.value && e.attrHooks.value.set || function() { return n },
        d = /^(?:input|button)$/i,
        l = /^[238]$/,
        p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        f = /^(?:checked|selected)$/i;
    a(e, "attrFn", i || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, a, o, u) { var c = a.toLowerCase(),
            g = t && t.nodeType; return u && (s.length < 4 && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !l.test(g) && (i ? a in i : e.isFunction(e.fn[a]))) ? e(t)[a](o) : ("type" === a && o !== n && d.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = { get: function(t, r) { var a, o = e.prop(t, r); return o === !0 || "boolean" != typeof o && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n }, set: function(t, n, r) { var a; return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r } }, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, o)) }, e.attrHooks.value = { get: function(e, t) { var n = (e.nodeName || "").toLowerCase(); return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null) }, set: function(e, t) { var n = (e.nodeName || "").toLowerCase(); return "button" === n ? c.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value', val) no longer sets properties"), void(e.value = t)) } }; var g, h, v = e.fn.init,
        m = e.parseJSON,
        y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    e.fn.init = function(t, n, a) { var o; return t && "string" == typeof t && !e.isPlainObject(n) && (o = y.exec(e.trim(t))) && o[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), o[3] && r("$(html) HTML text after last tag is ignored"), "#" === o[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(o[2], n, !0), n, a) : v.apply(this, arguments) }, e.fn.init.prototype = e.fn, e.parseJSON = function(e) { return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null) }, e.uaMatch = function(e) { e = e.toLowerCase(); var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || []; return { browser: t[1] || "", version: t[2] || "0" } }, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
        function t(e, n) { return new t.fn.init(e, n) }
        e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, a) { return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n) }, t.fn.init.prototype = t.fn; var n = t(document); return r("jQuery.sub() is deprecated"), t }, e.ajaxSetup({ converters: { "text json": e.parseJSON } }); var b = e.fn.data;
    e.fn.data = function(t) { var a, o, i = this[0]; return !i || "events" !== t || 1 !== arguments.length || (a = e.data(i, t), o = e._data(i, t), a !== n && a !== o || o === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), o) }; var w = /\/(java|ecma)script/i,
        j = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function() { return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), j.apply(this, arguments) }, e.clean || (e.clean = function(t, n, a, o) { n = n || document, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, r("jQuery.clean() is deprecated"); var i, s, u, c, d = []; if (e.merge(d, e.buildFragment(t, n).childNodes), a)
            for (u = function(e) { return !e.type || w.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : a.appendChild(e) : void 0 }, i = 0; null != (s = d[i]); i++) e.nodeName(s, "script") && u(s) || (a.appendChild(s), "undefined" != typeof s.getElementsByTagName && (c = e.grep(e.merge([], s.getElementsByTagName("script")), u), d.splice.apply(d, [i + 1, 0].concat(c)), i += c.length)); return d }); var x = e.event.add,
        Q = e.event.remove,
        k = e.event.trigger,
        N = e.fn.toggle,
        T = e.fn.live,
        S = e.fn.die,
        C = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        M = new RegExp("\\b(?:" + C + ")\\b"),
        H = /(?:^|\s)hover(\.\S+|)\b/,
        A = function(t) { return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1")) };
    e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, a, o) { e !== document && M.test(t) && r("AJAX events should be attached to document: " + t), x.call(this, e, A(t || ""), n, a, o) }, e.event.remove = function(e, t, n, r, a) { Q.call(this, e, A(t) || "", n, r, a) }, e.fn.error = function() { var e = Array.prototype.slice.call(arguments, 0); return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this) }, e.fn.toggle = function(t, n) { if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
        r("jQuery.fn.toggle(handler, handler...) is deprecated"); var a = arguments,
            o = t.guid || e.guid++,
            i = 0,
            s = function(n) { var r = (e._data(this, "lastToggle" + t.guid) || 0) % i; return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1 }; for (s.guid = o; i < a.length;) a[i++].guid = o; return this.click(s) }, e.fn.live = function(t, n, a) { return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this) }, e.fn.die = function(t, n) { return r("jQuery.fn.die() is deprecated"), S ? S.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this) }, e.event.trigger = function(e, t, n, a) { return n || M.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a) }, e.each(C.split("|"), function(t, n) { e.event.special[n] = { setup: function() { var t = this; return t !== document && (e.event.add(document, n + "." + e.guid, function() { e.event.trigger(n, null, t, !0) }), e._data(this, n, e.guid++)), !1 }, teardown: function() { return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1 } } }) }(jQuery, window);

// ==========
// jQuery resize event
// @see          http://benalman.com/projects/jquery-resize-plugin/
// ==========
(function($, h, c) { var a = $([]),
        e = $.resize = $.extend($.resize, {}),
        i, k = "setTimeout",
        j = "resize",
        d = j + "-special-event",
        b = "delay",
        f = "throttleWindow";
    e[b] = 250;
    e[f] = true;
    $.event.special[j] = { setup: function() { if (!e[f] && this[k]) { return false } var l = $(this);
            a = a.add(l);
            $.data(this, d, { w: l.width(), h: l.height() }); if (a.length === 1) { g() } }, teardown: function() { if (!e[f] && this[k]) { return false } var l = $(this);
            a = a.not(l);
            l.removeData(d); if (!a.length) { clearTimeout(i) } }, add: function(l) { if (!e[f] && this[k]) { return false } var n;

            function m(s, o, p) { var q = $(this),
                    r = $.data(this, d);
                r.w = o !== c ? o : q.width();
                r.h = p !== c ? p : q.height();
                n.apply(this, arguments) } if ($.isFunction(l)) { n = l; return m } else { n = l.handler;
                l.handler = m } } };

    function g() { i = h[k](function() { a.each(function() { var n = $(this),
                    m = n.width(),
                    l = n.height(),
                    o = $.data(this, d); if (m !== o.w || l !== o.h) { n.trigger(j, [o.w = m, o.h = l]) } });
            g() }, e[b]) } })(jQuery, this);

// ==========
// jQuery easing
// ==========
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function(n, e, t, u, a) { return jQuery.easing[jQuery.easing.def](n, e, t, u, a) }, easeInQuad: function(n, e, t, u, a) { return u * (e /= a) * e + t }, easeOutQuad: function(n, e, t, u, a) { return -u * (e /= a) * (e - 2) + t }, easeInOutQuad: function(n, e, t, u, a) { return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t }, easeInCubic: function(n, e, t, u, a) { return u * (e /= a) * e * e + t }, easeOutCubic: function(n, e, t, u, a) { return u * ((e = e / a - 1) * e * e + 1) + t }, easeInOutCubic: function(n, e, t, u, a) { return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t }, easeInQuart: function(n, e, t, u, a) { return u * (e /= a) * e * e * e + t }, easeOutQuart: function(n, e, t, u, a) { return -u * ((e = e / a - 1) * e * e * e - 1) + t }, easeInOutQuart: function(n, e, t, u, a) { return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t }, easeInQuint: function(n, e, t, u, a) { return u * (e /= a) * e * e * e * e + t }, easeOutQuint: function(n, e, t, u, a) { return u * ((e = e / a - 1) * e * e * e * e + 1) + t }, easeInOutQuint: function(n, e, t, u, a) { return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t }, easeInSine: function(n, e, t, u, a) { return -u * Math.cos(e / a * (Math.PI / 2)) + u + t }, easeOutSine: function(n, e, t, u, a) { return u * Math.sin(e / a * (Math.PI / 2)) + t }, easeInOutSine: function(n, e, t, u, a) { return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t }, easeInExpo: function(n, e, t, u, a) { return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t }, easeOutExpo: function(n, e, t, u, a) { return e == a ? t + u : u * (-Math.pow(2, -10 * e / a) + 1) + t }, easeInOutExpo: function(n, e, t, u, a) { return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (-Math.pow(2, -10 * --e) + 2) + t }, easeInCirc: function(n, e, t, u, a) { return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t }, easeOutCirc: function(n, e, t, u, a) { return u * Math.sqrt(1 - (e = e / a - 1) * e) + t }, easeInOutCirc: function(n, e, t, u, a) { return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t }, easeInElastic: function(n, e, t, u, a) { var r = 1.70158,
            i = 0,
            s = u; if (0 == e) return t; if (1 == (e /= a)) return t + u; if (i || (i = .3 * a), s < Math.abs(u)) { s = u; var r = i / 4 } else var r = i / (2 * Math.PI) * Math.asin(u / s); return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t }, easeOutElastic: function(n, e, t, u, a) { var r = 1.70158,
            i = 0,
            s = u; if (0 == e) return t; if (1 == (e /= a)) return t + u; if (i || (i = .3 * a), s < Math.abs(u)) { s = u; var r = i / 4 } else var r = i / (2 * Math.PI) * Math.asin(u / s); return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / i) + u + t }, easeInOutElastic: function(n, e, t, u, a) { var r = 1.70158,
            i = 0,
            s = u; if (0 == e) return t; if (2 == (e /= a / 2)) return t + u; if (i || (i = a * (.3 * 1.5)), s < Math.abs(u)) { s = u; var r = i / 4 } else var r = i / (2 * Math.PI) * Math.asin(u / s); return 1 > e ? -.5 * (s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * .5 + u + t }, easeInBack: function(n, e, t, u, a, r) { return void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t }, easeOutBack: function(n, e, t, u, a, r) { return void 0 == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t }, easeInOutBack: function(n, e, t, u, a, r) { return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * (e * e * (((r *= 1.525) + 1) * e - r)) + t : u / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t }, easeInBounce: function(n, e, t, u, a) { return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t }, easeOutBounce: function(n, e, t, u, a) { return (e /= a) < 1 / 2.75 ? u * (7.5625 * e * e) + t : 2 / 2.75 > e ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t }, easeInOutBounce: function(n, e, t, u, a) { return a / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t } });

// ==========
// Bootstrap v3.3.7
// ==========
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) { "use strict"; var b = a.fn.jquery.split(" ")[0].split("."); if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(jQuery), + function(a) { "use strict";

    function b() { var a = document.createElement("bootstrap"),
            b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var c in b)
            if (void 0 !== a.style[c]) return { end: b[c] };
        return !1 }
    a.fn.emulateTransitionEnd = function(b) { var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() { c = !0 }); var e = function() { c || a(d).trigger(a.support.transition.end) }; return setTimeout(e, b), this }, a(function() { a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function(b) { if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments) } }) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c) }) } var c = '[data-dismiss="alert"]',
        d = function(b) { a(b).on("click", c, this.close) };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() { g.detach().trigger("closed.bs.alert").remove() } var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")); var g = a("#" === f ? [] : f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c()) }; var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() { return a.fn.alert = e, this }, a(document).on("click.bs.alert.data-api", c, d.prototype.close) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b) }) } var c = function(b, d) { this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1 };
    c.VERSION = "3.3.7", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function(b) { var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() { d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1)) }, this), 0) }, c.prototype.toggle = function() { var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]'); if (b.length) { var c = this.$element.find("input"); "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active") }; var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() { return a.fn.button = d, this }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) { var d = a(c.target).closest(".btn");
        b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus")) }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) { a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type)) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle() }) } var c = function(b, c) { this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this)) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function(a) { if (!/input|textarea/i.test(a.target.tagName)) { switch (a.which) {
                case 37:
                    this.prev(); break;
                case 39:
                    this.next(); break;
                default:
                    return }
            a.preventDefault() } }, c.prototype.cycle = function(b) { return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this }, c.prototype.getItemIndex = function(a) { return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active) }, c.prototype.getItemForDirection = function(a, b) { var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1; if (d && !this.options.wrap) return b; var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length; return this.$items.eq(f) }, c.prototype.to = function(a) { var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active")); if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() { b.to(a) }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a)) }, c.prototype.pause = function(b) { return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, c.prototype.next = function() { if (!this.sliding) return this.slide("next") }, c.prototype.prev = function() { if (!this.sliding) return this.slide("prev") }, c.prototype.slide = function(b, d) { var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this; if (f.hasClass("active")) return this.sliding = !1; var j = f[0],
            k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h }); if (this.$element.trigger(k), !k.isDefaultPrevented()) { if (this.sliding = !0, g && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active"); var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active") } var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h }); return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() { f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() { i.$element.trigger(m) }, 0) }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this } }; var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() { return a.fn.carousel = d, this }; var e = function(c) { var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")); if (f.hasClass("carousel")) { var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault() } };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() { a('[data-ride="carousel"]').each(function() { var c = a(this);
            b.call(c, c.data()) }) }) }(jQuery), + function(a) { "use strict";

    function b(b) { var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""); return a(d) }

    function c(b) { return this.each(function() { var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]() }) } var d = function(b, c) { this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function() { var a = this.$element.hasClass("width"); return a ? "width" : "height" }, d.prototype.show = function() { if (!this.transitioning && !this.$element.hasClass("in")) { var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) { var f = a.Event("show.bs.collapse"); if (this.$element.trigger(f), !f.isDefaultPrevented()) { e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null)); var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var h = function() { this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!a.support.transition) return h.call(this); var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]) } } } }, d.prototype.hide = function() { if (!this.transitioning && this.$element.hasClass("in")) { var b = a.Event("hide.bs.collapse"); if (this.$element.trigger(b), !b.isDefaultPrevented()) { var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var e = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this) } } }, d.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, d.prototype.getParent = function() { return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) { var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e) }, this)).end() }, d.prototype.addAriaAndCollapsedClass = function(a, b) { var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c) }; var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() { return a.fn.collapse = e, this }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) { var e = a(this);
        e.attr("data-target") || d.preventDefault(); var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h) }) }(jQuery), + function(a) { "use strict";

    function b(b) { var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")); var d = c && a(c); return d && d.length ? d : b.parent() }

    function c(c) { c && 3 === c.which || (a(e).remove(), a(f).each(function() { var d = a(this),
                e = b(d),
                f = { relatedTarget: this };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f))))) })) }

    function d(b) { return this.each(function() { var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c) }) } var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) { a(b).on("click.bs.dropdown", this.toggle) };
    g.VERSION = "3.3.7", g.prototype.toggle = function(d) { var e = a(this); if (!e.is(".disabled, :disabled")) { var f = b(e),
                g = f.hasClass("open"); if (c(), !g) { "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c); var h = { relatedTarget: this }; if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h)) } return !1 } }, g.prototype.keydown = function(c) { if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) { var d = a(this); if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) { var e = b(d),
                    g = e.hasClass("open"); if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click"); var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h); if (i.length) { var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus") } } } }; var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() { return a.fn.dropdown = h, this }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) { a.stopPropagation() }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown) }(jQuery), + function(a) { "use strict";

    function b(b, d) { return this.each(function() { var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d) }) } var c = function(b, c) { this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function(a) { return this.isShown ? this.hide() : this.show(a) }, c.prototype.show = function(b) { var d = this,
            e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { d.$element.one("mouseup.dismiss.bs.modal", function(b) { a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0) }) }), this.backdrop(function() { var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus(); var f = a.Event("shown.bs.modal", { relatedTarget: b });
            e ? d.$dialog.one("bsTransitionEnd", function() { d.$element.trigger("focus").trigger(f) }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f) })) }, c.prototype.hide = function(b) { b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal()) }, c.prototype.enforceFocus = function() { a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) { document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus") }, this)) }, c.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) { 27 == a.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, c.prototype.resize = function() { this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal") }, c.prototype.hideModal = function() { var a = this;
        this.$element.hide(), this.backdrop(function() { a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal") }) }, c.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, c.prototype.backdrop = function(b) { var d = this,
            e = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var f = a.support.transition && e; if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) { return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var g = function() { d.removeBackdrop(), b && b() };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g() } else b && b() }, c.prototype.handleUpdate = function() { this.adjustDialog() }, c.prototype.adjustDialog = function() { var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" }) }, c.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, c.prototype.checkScrollbar = function() { var a = window.innerWidth; if (!a) { var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left) }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar() }, c.prototype.setScrollbar = function() { var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth) }, c.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, c.prototype.measureScrollbar = function() { var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a); var b = a.offsetWidth - a.clientWidth; return this.$body[0].removeChild(a), b }; var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() { return a.fn.modal = d, this }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) { var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) { a.isDefaultPrevented() || f.one("hidden.bs.modal", function() { d.is(":visible") && d.trigger("focus") }) }), b.call(f, g, this) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function(a, b) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function(b, c, d) { if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!"); for (var e = this.options.trigger.split(" "), f = e.length; f--;) { var g = e[f]; if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) { var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this)) } }
        this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.getOptions = function(b) { return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b }, c.prototype.getDelegateOptions = function() { var b = {},
            c = this.getDefaults(); return this._options && a.each(this._options, function(a, d) { c[a] != d && (b[a] = d) }), b }, c.prototype.enter = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() { "in" == c.hoverState && c.show() }, c.options.delay.show)) : c.show()) }, c.prototype.isInStateTrue = function() { for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1 }, c.prototype.leave = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() { "out" == c.hoverState && c.hide() }, c.options.delay.hide)) : c.hide() }, c.prototype.show = function() { var b = a.Event("show.bs." + this.type); if (this.hasContent() && this.enabled) { this.$element.trigger(b); var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]); if (b.isDefaultPrevented() || !d) return; var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade"); var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type); var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight; if (j) { var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h) } var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h); var q = function() { var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e) };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q() } }, c.prototype.applyPlacement = function(b, c) { var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function(a) { d.css({ top: Math.round(a.top), left: Math.round(a.left) }) } }, b), 0), d.addClass("in"); var i = d[0].offsetWidth,
            j = d[0].offsetHeight; "top" == c && j != f && (b.top = b.top + f - j); var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top; var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l) }, c.prototype.replaceArrow = function(a, b, c) { this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "") }, c.prototype.setContent = function() { var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right") }, c.prototype.hide = function(b) {
        function d() { "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b() } var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type); if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this }, c.prototype.fixTitle = function() { var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "") }, c.prototype.hasContent = function() { return this.getTitle() }, c.prototype.getPosition = function(b) { b = b || this.$element; var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top })); var f = window.SVGElement && c instanceof window.SVGElement,
            g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
            h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
            i = d ? { width: a(window).width(), height: a(window).height() } : null; return a.extend({}, e, h, i, g) }, c.prototype.getCalculatedOffset = function(a, b, c, d) { return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width } }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) { var e = { top: 0, left: 0 }; if (!this.$viewport) return e; var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport); if (/right|left/.test(a)) { var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i) } else { var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k) } return e }, c.prototype.getTitle = function() { var a, b = this.$element,
            c = this.options; return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title) }, c.prototype.getUID = function(a) { do a += ~~(1e6 * Math.random()); while (document.getElementById(a)); return a }, c.prototype.tip = function() { if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, c.prototype.enable = function() { this.enabled = !0 }, c.prototype.disable = function() { this.enabled = !1 }, c.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, c.prototype.toggle = function(b) { var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c) }, c.prototype.destroy = function() { var a = this;
        clearTimeout(this.timeout), this.hide(function() { a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null }) }; var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() { return a.fn.tooltip = d, this } }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function(a, b) { this.init("popover", a, b) }; if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.setContent = function() { var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide() }, c.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, c.prototype.getContent = function() { var a = this.$element,
            b = this.options; return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content) }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") }; var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() { return a.fn.popover = d, this } }(jQuery), + function(a) {
    "use strict";

    function b(c, d) { this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process() }

    function c(c) { return this.each(function() { var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]() }) }
    b.VERSION = "3.3.7", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, b.prototype.refresh = function() { var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() { var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e); return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null }).sort(function(a, b) { return a[0] - b[0] }).each(function() { b.offsets.push(this[0]), b.targets.push(this[1]) }) }, b.prototype.process = function() { var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget; if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a); if (g && b < e[0]) return this.activeTarget = null, this.clear(); for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]) }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() { a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() { return a.fn.scrollspy = d, this }, a(window).on("load.bs.scrollspy.data-api", function() { a('[data-spy="scroll"]').each(function() { var b = a(this);
            c.call(b, b.data()) }) })
}(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]() }) } var c = function(b) { this.element = a(b) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() { var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target"); if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) { var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                g = a.Event("show.bs.tab", { relatedTarget: e[0] }); if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) { var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() { e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] }) }) } } }, c.prototype.activate = function(b, d, e) {
        function f() { g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e() } var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in") }; var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() { return a.fn.tab = d, this }; var e = function(c) { c.preventDefault(), b.call(a(this), "show") };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]() }) } var c = function(b, d) { this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
    c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function(a, b, c, d) { var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height(); if (null != c && "top" == this.affixed) return e < c && "top"; if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom"; var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b; return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom" }, c.prototype.getPinnedOffset = function() { if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix"); var a = this.$target.scrollTop(),
            b = this.$element.offset(); return this.pinnedOffset = b.top - a }, c.prototype.checkPositionWithEventLoop = function() { setTimeout(a.proxy(this.checkPosition, this), 1) }, c.prototype.checkPosition = function() { if (this.$element.is(":visible")) { var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height()); "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element)); var h = this.getState(g, b, e, f); if (this.affixed != h) { null != this.unpin && this.$element.css("top", ""); var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix"); if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix") } "bottom" == h && this.$element.offset({ top: g - b - f }) } }; var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() { return a.fn.affix = d, this }, a(window).on("load", function() { a('[data-spy="affix"]').each(function() { var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d) }) }) }(jQuery);

// ==========
// jQuery Cookie Plugin
// ==========
! function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery) }(function(e) {
    function n(e) { return u.raw ? e : encodeURIComponent(e) }

    function o(e) { return u.raw ? e : decodeURIComponent(e) }

    function i(e) { return n(u.json ? JSON.stringify(e) : String(e)) }

    function t(e) { 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e } catch (n) {} }

    function r(n, o) { var i = u.raw ? n : t(n); return e.isFunction(o) ? o(i) : i } var c = /\+/g,
        u = e.cookie = function(t, c, s) { if (arguments.length > 1 && !e.isFunction(c)) { if (s = e.extend({}, u.defaults, s), "number" == typeof s.expires) { var a = s.expires,
                        d = s.expires = new Date;
                    d.setMilliseconds(d.getMilliseconds() + 864e5 * a) } return document.cookie = [n(t), "=", i(c), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("") } for (var f = t ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], l = 0, m = p.length; m > l; l++) { var x = p[l].split("="),
                    g = o(x.shift()),
                    j = x.join("="); if (t === g) { f = r(j, c); break }
                t || void 0 === (j = r(j)) || (f[g] = j) } return f };
    u.defaults = {}, e.removeCookie = function(n, o) { return e.cookie(n, "", e.extend({}, o, { expires: -1 })), !e.cookie(n) } });

// ==========
// UIToTop
// http://www.mattvarone.com/web-design/uitotop-jquery-plugin/
// ==========
(function($) {
    $.fn.UItoTop = function(options) {
        var defaults = { text: '', min: 200, inDelay: 600, outDelay: 400, containerID: 'toTop', containerHoverID: 'toTopHover', scrollSpeed: 600, easingType: 'linear' },
            settings = $.extend(defaults, options),
            containerIDhash = '#' + settings.containerID,
            containerHoverIDHash = '#' + settings.containerHoverID;
        $('body').append('<a href="#" id="' + settings.containerID + '" class="toTopButton">' + settings.text + '</a>');
        $(containerIDhash).on('click.UItoTop', function() { $('html, body').animate({ scrollTop: 0 }, settings.scrollSpeed, settings.easingType);
            $('#' + settings.containerHoverID, this).stop().animate({ 'opacity': 0 }, settings.inDelay, settings.easingType); return false; });
        $(window).scroll(function() {
            var sd = $(window).scrollTop();
            if (typeof document.body.style.maxHeight === "undefined") { $(containerIDhash).css({ 'position': 'absolute', 'top': sd + $(window).height() - 50 }); }
            if (sd > settings.min)
                $(containerIDhash).addClass("toTopButton--active");
            else
                $(containerIDhash).removeClass("toTopButton--active");
        });
    };
})(jQuery);

// ==========
// Navigation
// ==========
var Navigation = function(params) { var nav = $(".k-nav"); var navOutside = nav.find(".k-nav-outside"); var navToggle = nav.find(".k-nav-toggle"); var menu = $(".k-nav-links"); var menuItems = $(".k-nav-links > li > a"); if (params.init) { nav.css({ "display": "block" }) };

    function ql_closeMenu() { navToggle.removeClass("active");
        navOutside.removeClass("show");
        $("body").removeClass("overflow-hid");
        $(".main-container").removeClass("overlay") }

    function ql_toggleMenu() { $(this).toggleClass("active");
        navOutside.toggleClass("show");
        $("body").toggleClass("overflow-hid");
        $(".main-container").toggleClass("overlay") };

    function ql_resizeFunc() { var windowSize = window.innerWidth; if (params.responsive) { if (windowSize >= params.breakpoint) { ql_closeMenu() } else { nav.removeClass("k-nav-fixed") } } }

    function ql_fixedNav() { var windowSize = window.innerWidth; var scroll = $(window).scrollTop(); if (params.responsive) { if (windowSize >= params.breakpoint) { if (scroll > 1) { nav.addClass("k-nav-fixed") } else { nav.removeClass("k-nav-fixed") } } } }

    function ql_clickAnchor(e) { var target = $(this).attr("data-nav-to"); if ($(this).attr("href") == "#") { e.preventDefault() }
        $("html, body").stop().animate({ scrollTop: $(target).offset().top - 50 }, 600) };

    function ql_scrollToggle() { var scrollPos = $(document).scrollTop();
        menuItems.each(function() { var currentLink = $(this); var refSection = $(currentLink.attr("data-nav-to")); if (currentLink.attr("href") == "#" && refSection.offset() != undefined) { var topOffset = refSection.offset().top - 60; var bottomOffset = topOffset + refSection.height(); if (topOffset <= scrollPos) { menuItems.parent().removeClass("active");
                    currentLink.parent().addClass("active") } else { currentLink.parent().removeClass("active") } } }) };
    navToggle.on("click", ql_toggleMenu);
    $(".main-container").on("click", ql_closeMenu);
    menuItems.on("click", ql_closeMenu);
    ql_resizeFunc();
    $(window).on("resize", ql_resizeFunc); if (params.stuck) { ql_fixedNav();
        $(window).on("scroll", ql_fixedNav);
        $(window).on("resize", ql_fixedNav) }
    $(window).on("scroll", ql_scrollToggle);
    menuItems.on("click", ql_clickAnchor) };

// ==========
// TouchSwipe
// https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
// ==========
(function(a) { if (typeof define === "function" && define.amd && define.amd.jQuery) { define(["jquery"], a) } else { a(jQuery) } }(function(f) { var y = "1.6.12",
        p = "left",
        o = "right",
        e = "up",
        x = "down",
        c = "in",
        A = "out",
        m = "none",
        s = "auto",
        l = "swipe",
        t = "pinch",
        B = "tap",
        j = "doubletap",
        b = "longtap",
        z = "hold",
        E = "horizontal",
        u = "vertical",
        i = "all",
        r = 10,
        g = "start",
        k = "move",
        h = "end",
        q = "cancel",
        a = "ontouchstart" in window,
        v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        C = "TouchSwipe"; var n = { fingers: 1, threshold: 75, cancelThreshold: null, pinchThreshold: 20, maxTimeThreshold: null, fingerReleaseThreshold: 250, longTapThreshold: 500, doubleTapThreshold: 200, swipe: null, swipeLeft: null, swipeRight: null, swipeUp: null, swipeDown: null, swipeStatus: null, pinchIn: null, pinchOut: null, pinchStatus: null, click: null, tap: null, doubleTap: null, longTap: null, hold: null, triggerOnTouchEnd: true, triggerOnTouchLeave: false, allowPageScroll: "auto", fallbackToMouseEvents: true, excludedElements: "label, button, input, select, textarea, a, .noSwipe", preventDefaultEvents: true };
    f.fn.swipe = function(H) { var G = f(this),
            F = G.data(C); if (F && typeof H === "string") { if (F[H]) { return F[H].apply(this, Array.prototype.slice.call(arguments, 1)) } else { f.error("Method " + H + " does not exist on jQuery.swipe") } } else { if (F && typeof H === "object") { F.option.apply(this, arguments) } else { if (!F && (typeof H === "object" || !H)) { return w.apply(this, arguments) } } } return G };
    f.fn.swipe.version = y;
    f.fn.swipe.defaults = n;
    f.fn.swipe.phases = { PHASE_START: g, PHASE_MOVE: k, PHASE_END: h, PHASE_CANCEL: q };
    f.fn.swipe.directions = { LEFT: p, RIGHT: o, UP: e, DOWN: x, IN: c, OUT: A };
    f.fn.swipe.pageScroll = { NONE: m, HORIZONTAL: E, VERTICAL: u, AUTO: s };
    f.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, ALL: i };

    function w(F) { if (F && (F.allowPageScroll === undefined && (F.swipe !== undefined || F.swipeStatus !== undefined))) { F.allowPageScroll = m } if (F.click !== undefined && F.tap === undefined) { F.tap = F.click } if (!F) { F = {} }
        F = f.extend({}, f.fn.swipe.defaults, F); return this.each(function() { var H = f(this); var G = H.data(C); if (!G) { G = new D(this, F);
                H.data(C, G) } }) }

    function D(a4, au) { var au = f.extend({}, au); var az = (a || d || !au.fallbackToMouseEvents),
            K = az ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
            ax = az ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
            V = az ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
            T = az ? null : "mouseleave",
            aD = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel"); var ag = 0,
            aP = null,
            ac = 0,
            a1 = 0,
            aZ = 0,
            H = 1,
            ap = 0,
            aJ = 0,
            N = null; var aR = f(a4); var aa = "start"; var X = 0; var aQ = {}; var U = 0,
            a2 = 0,
            a5 = 0,
            ay = 0,
            O = 0; var aW = null,
            af = null; try { aR.bind(K, aN);
            aR.bind(aD, a9) } catch (aj) { f.error("events not supported " + K + "," + aD + " on jQuery.swipe") }
        this.enable = function() { aR.bind(K, aN);
            aR.bind(aD, a9); return aR };
        this.disable = function() { aK(); return aR };
        this.destroy = function() { aK();
            aR.data(C, null);
            aR = null };
        this.option = function(bc, bb) { if (typeof bc === "object") { au = f.extend(au, bc) } else { if (au[bc] !== undefined) { if (bb === undefined) { return au[bc] } else { au[bc] = bb } } else { if (!bc) { return au } else { f.error("Option " + bc + " does not exist on jQuery.swipe.options") } } } return null };

        function aN(bd) { if (aB()) { return } if (f(bd.target).closest(au.excludedElements, aR).length > 0) { return } var be = bd.originalEvent ? bd.originalEvent : bd; var bc, bf = be.touches,
                bb = bf ? bf[0] : be;
            aa = g; if (bf) { X = bf.length } else { if (au.preventDefaultEvents !== false) { bd.preventDefault() } }
            ag = 0;
            aP = null;
            aJ = null;
            ac = 0;
            a1 = 0;
            aZ = 0;
            H = 1;
            ap = 0;
            N = ab();
            S();
            ai(0, bb); if (!bf || (X === au.fingers || au.fingers === i) || aX()) { U = ar(); if (X == 2) { ai(1, bf[1]);
                    a1 = aZ = at(aQ[0].start, aQ[1].start) } if (au.swipeStatus || au.pinchStatus) { bc = P(be, aa) } } else { bc = false } if (bc === false) { aa = q;
                P(be, aa); return bc } else { if (au.hold) { af = setTimeout(f.proxy(function() { aR.trigger("hold", [be.target]); if (au.hold) { bc = au.hold.call(aR, be, be.target) } }, this), au.longTapThreshold) }
                an(true) } return null }

        function a3(be) { var bh = be.originalEvent ? be.originalEvent : be; if (aa === h || aa === q || al()) { return } var bd, bi = bh.touches,
                bc = bi ? bi[0] : bh; var bf = aH(bc);
            a2 = ar(); if (bi) { X = bi.length } if (au.hold) { clearTimeout(af) }
            aa = k; if (X == 2) { if (a1 == 0) { ai(1, bi[1]);
                    a1 = aZ = at(aQ[0].start, aQ[1].start) } else { aH(bi[1]);
                    aZ = at(aQ[0].end, aQ[1].end);
                    aJ = aq(aQ[0].end, aQ[1].end) }
                H = a7(a1, aZ);
                ap = Math.abs(a1 - aZ) } if ((X === au.fingers || au.fingers === i) || !bi || aX()) { aP = aL(bf.start, bf.end);
                ak(be, aP);
                ag = aS(bf.start, bf.end);
                ac = aM();
                aI(aP, ag); if (au.swipeStatus || au.pinchStatus) { bd = P(bh, aa) } if (!au.triggerOnTouchEnd || au.triggerOnTouchLeave) { var bb = true; if (au.triggerOnTouchLeave) { var bg = aY(this);
                        bb = F(bf.end, bg) } if (!au.triggerOnTouchEnd && bb) { aa = aC(k) } else { if (au.triggerOnTouchLeave && !bb) { aa = aC(h) } } if (aa == q || aa == h) { P(bh, aa) } } } else { aa = q;
                P(bh, aa) } if (bd === false) { aa = q;
                P(bh, aa) } }

        function M(bb) { var bc = bb.originalEvent ? bb.originalEvent : bb,
                bd = bc.touches; if (bd) { if (bd.length && !al()) { G(); return true } else { if (bd.length && al()) { return true } } } if (al()) { X = ay }
            a2 = ar();
            ac = aM(); if (ba() || !am()) { aa = q;
                P(bc, aa) } else { if (au.triggerOnTouchEnd || (au.triggerOnTouchEnd == false && aa === k)) { if (au.preventDefaultEvents !== false) { bb.preventDefault() }
                    aa = h;
                    P(bc, aa) } else { if (!au.triggerOnTouchEnd && a6()) { aa = h;
                        aF(bc, aa, B) } else { if (aa === k) { aa = q;
                            P(bc, aa) } } } }
            an(false); return null }

        function a9() { X = 0;
            a2 = 0;
            U = 0;
            a1 = 0;
            aZ = 0;
            H = 1;
            S();
            an(false) }

        function L(bb) { var bc = bb.originalEvent ? bb.originalEvent : bb; if (au.triggerOnTouchLeave) { aa = aC(h);
                P(bc, aa) } }

        function aK() { aR.unbind(K, aN);
            aR.unbind(aD, a9);
            aR.unbind(ax, a3);
            aR.unbind(V, M); if (T) { aR.unbind(T, L) }
            an(false) }

        function aC(bf) { var be = bf; var bd = aA(); var bc = am(); var bb = ba(); if (!bd || bb) { be = q } else { if (bc && bf == k && (!au.triggerOnTouchEnd || au.triggerOnTouchLeave)) { be = h } else { if (!bc && bf == h && au.triggerOnTouchLeave) { be = q } } } return be }

        function P(bd, bb) { var bc, be = bd.touches; if ((J() && W()) || (Q() && aX())) { if (J() && W()) { bc = aF(bd, bb, l) } if ((Q() && aX()) && bc !== false) { bc = aF(bd, bb, t) } } else { if (aG() && bc !== false) { bc = aF(bd, bb, j) } else { if (ao() && bc !== false) { bc = aF(bd, bb, b) } else { if (ah() && bc !== false) { bc = aF(bd, bb, B) } } } } if (bb === q) { if (W()) { bc = aF(bd, bb, l) } if (aX()) { bc = aF(bd, bb, t) }
                a9(bd) } if (bb === h) { if (be) { if (!be.length) { a9(bd) } } else { a9(bd) } } return bc }

        function aF(be, bb, bd) { var bc; if (bd == l) { aR.trigger("swipeStatus", [bb, aP || null, ag || 0, ac || 0, X, aQ]); if (au.swipeStatus) { bc = au.swipeStatus.call(aR, be, bb, aP || null, ag || 0, ac || 0, X, aQ); if (bc === false) { return false } } if (bb == h && aV()) { aR.trigger("swipe", [aP, ag, ac, X, aQ]); if (au.swipe) { bc = au.swipe.call(aR, be, aP, ag, ac, X, aQ); if (bc === false) { return false } } switch (aP) {
                        case p:
                            aR.trigger("swipeLeft", [aP, ag, ac, X, aQ]); if (au.swipeLeft) { bc = au.swipeLeft.call(aR, be, aP, ag, ac, X, aQ) } break;
                        case o:
                            aR.trigger("swipeRight", [aP, ag, ac, X, aQ]); if (au.swipeRight) { bc = au.swipeRight.call(aR, be, aP, ag, ac, X, aQ) } break;
                        case e:
                            aR.trigger("swipeUp", [aP, ag, ac, X, aQ]); if (au.swipeUp) { bc = au.swipeUp.call(aR, be, aP, ag, ac, X, aQ) } break;
                        case x:
                            aR.trigger("swipeDown", [aP, ag, ac, X, aQ]); if (au.swipeDown) { bc = au.swipeDown.call(aR, be, aP, ag, ac, X, aQ) } break } } } if (bd == t) { aR.trigger("pinchStatus", [bb, aJ || null, ap || 0, ac || 0, X, H, aQ]); if (au.pinchStatus) { bc = au.pinchStatus.call(aR, be, bb, aJ || null, ap || 0, ac || 0, X, H, aQ); if (bc === false) { return false } } if (bb == h && a8()) { switch (aJ) {
                        case c:
                            aR.trigger("pinchIn", [aJ || null, ap || 0, ac || 0, X, H, aQ]); if (au.pinchIn) { bc = au.pinchIn.call(aR, be, aJ || null, ap || 0, ac || 0, X, H, aQ) } break;
                        case A:
                            aR.trigger("pinchOut", [aJ || null, ap || 0, ac || 0, X, H, aQ]); if (au.pinchOut) { bc = au.pinchOut.call(aR, be, aJ || null, ap || 0, ac || 0, X, H, aQ) } break } } } if (bd == B) { if (bb === q || bb === h) { clearTimeout(aW);
                    clearTimeout(af); if (Z() && !I()) { O = ar();
                        aW = setTimeout(f.proxy(function() { O = null;
                            aR.trigger("tap", [be.target]); if (au.tap) { bc = au.tap.call(aR, be, be.target) } }, this), au.doubleTapThreshold) } else { O = null;
                        aR.trigger("tap", [be.target]); if (au.tap) { bc = au.tap.call(aR, be, be.target) } } } } else { if (bd == j) { if (bb === q || bb === h) { clearTimeout(aW);
                        O = null;
                        aR.trigger("doubletap", [be.target]); if (au.doubleTap) { bc = au.doubleTap.call(aR, be, be.target) } } } else { if (bd == b) { if (bb === q || bb === h) { clearTimeout(aW);
                            O = null;
                            aR.trigger("longtap", [be.target]); if (au.longTap) { bc = au.longTap.call(aR, be, be.target) } } } } } return bc }

        function am() { var bb = true; if (au.threshold !== null) { bb = ag >= au.threshold } return bb }

        function ba() { var bb = false; if (au.cancelThreshold !== null && aP !== null) { bb = (aT(aP) - ag) >= au.cancelThreshold } return bb }

        function ae() { if (au.pinchThreshold !== null) { return ap >= au.pinchThreshold } return true }

        function aA() { var bb; if (au.maxTimeThreshold) { if (ac >= au.maxTimeThreshold) { bb = false } else { bb = true } } else { bb = true } return bb }

        function ak(bb, bc) { if (au.preventDefaultEvents === false) { return } if (au.allowPageScroll === m) { bb.preventDefault() } else { var bd = au.allowPageScroll === s; switch (bc) {
                    case p:
                        if ((au.swipeLeft && bd) || (!bd && au.allowPageScroll != E)) { bb.preventDefault() } break;
                    case o:
                        if ((au.swipeRight && bd) || (!bd && au.allowPageScroll != E)) { bb.preventDefault() } break;
                    case e:
                        if ((au.swipeUp && bd) || (!bd && au.allowPageScroll != u)) { bb.preventDefault() } break;
                    case x:
                        if ((au.swipeDown && bd) || (!bd && au.allowPageScroll != u)) { bb.preventDefault() } break } } }

        function a8() { var bc = aO(); var bb = Y(); var bd = ae(); return bc && bb && bd }

        function aX() { return !!(au.pinchStatus || au.pinchIn || au.pinchOut) }

        function Q() { return !!(a8() && aX()) }

        function aV() { var be = aA(); var bg = am(); var bd = aO(); var bb = Y(); var bc = ba(); var bf = !bc && bb && bd && bg && be; return bf }

        function W() { return !!(au.swipe || au.swipeStatus || au.swipeLeft || au.swipeRight || au.swipeUp || au.swipeDown) }

        function J() { return !!(aV() && W()) }

        function aO() { return ((X === au.fingers || au.fingers === i) || !a) }

        function Y() { return aQ[0].end.x !== 0 }

        function a6() { return !!(au.tap) }

        function Z() { return !!(au.doubleTap) }

        function aU() { return !!(au.longTap) }

        function R() { if (O == null) { return false } var bb = ar(); return (Z() && ((bb - O) <= au.doubleTapThreshold)) }

        function I() { return R() }

        function aw() { return ((X === 1 || !a) && (isNaN(ag) || ag < au.threshold)) }

        function a0() { return ((ac > au.longTapThreshold) && (ag < r)) }

        function ah() { return !!(aw() && a6()) }

        function aG() { return !!(R() && Z()) }

        function ao() { return !!(a0() && aU()) }

        function G() { a5 = ar();
            ay = event.touches.length + 1 }

        function S() { a5 = 0;
            ay = 0 }

        function al() { var bb = false; if (a5) { var bc = ar() - a5; if (bc <= au.fingerReleaseThreshold) { bb = true } } return bb }

        function aB() { return !!(aR.data(C + "_intouch") === true) }

        function an(bb) { if (bb === true) { aR.bind(ax, a3);
                aR.bind(V, M); if (T) { aR.bind(T, L) } } else { aR.unbind(ax, a3, false);
                aR.unbind(V, M, false); if (T) { aR.unbind(T, L, false) } }
            aR.data(C + "_intouch", bb === true) }

        function ai(bd, bb) { var bc = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } };
            bc.start.x = bc.end.x = bb.pageX || bb.clientX;
            bc.start.y = bc.end.y = bb.pageY || bb.clientY;
            aQ[bd] = bc; return bc }

        function aH(bb) { var bd = bb.identifier !== undefined ? bb.identifier : 0; var bc = ad(bd); if (bc === null) { bc = ai(bd, bb) }
            bc.end.x = bb.pageX || bb.clientX;
            bc.end.y = bb.pageY || bb.clientY; return bc }

        function ad(bb) { return aQ[bb] || null }

        function aI(bb, bc) { bc = Math.max(bc, aT(bb));
            N[bb].distance = bc }

        function aT(bb) { if (N[bb]) { return N[bb].distance } return undefined }

        function ab() { var bb = {};
            bb[p] = av(p);
            bb[o] = av(o);
            bb[e] = av(e);
            bb[x] = av(x); return bb }

        function av(bb) { return { direction: bb, distance: 0 } }

        function aM() { return a2 - U }

        function at(be, bd) { var bc = Math.abs(be.x - bd.x); var bb = Math.abs(be.y - bd.y); return Math.round(Math.sqrt(bc * bc + bb * bb)) }

        function a7(bb, bc) { var bd = (bc / bb) * 1; return bd.toFixed(2) }

        function aq() { if (H < 1) { return A } else { return c } }

        function aS(bc, bb) { return Math.round(Math.sqrt(Math.pow(bb.x - bc.x, 2) + Math.pow(bb.y - bc.y, 2))) }

        function aE(be, bc) { var bb = be.x - bc.x; var bg = bc.y - be.y; var bd = Math.atan2(bg, bb); var bf = Math.round(bd * 180 / Math.PI); if (bf < 0) { bf = 360 - Math.abs(bf) } return bf }

        function aL(bc, bb) { var bd = aE(bc, bb); if ((bd <= 45) && (bd >= 0)) { return p } else { if ((bd <= 360) && (bd >= 315)) { return p } else { if ((bd >= 135) && (bd <= 225)) { return o } else { if ((bd > 45) && (bd < 135)) { return x } else { return e } } } } }

        function ar() { var bb = new Date(); return bb.getTime() }

        function aY(bb) { bb = f(bb); var bd = bb.offset(); var bc = { left: bd.left, right: bd.left + bb.outerWidth(), top: bd.top, bottom: bd.top + bb.outerHeight() }; return bc }

        function F(bb, bc) { return (bb.x > bc.left && bb.x < bc.right && bb.y > bc.top && bb.y < bc.bottom) } } }));

// ==========
// jQuery Form Plugin 3.51
// http://malsup.com/jquery/form/
// ==========
! function(e) { "use strict"; "function" == typeof define && define.amd ? define(["../jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto) }(function(e) { "use strict";

    function t(t) { var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r)) }

    function r(t) { var r = t.target,
            a = e(r); if (!a.is("[type=submit],[type=image]")) { var n = a.closest("[type=submit]"); if (0 === n.length) return;
            r = n[0] } var i = this; if (i.clk = r, "image" == r.type)
            if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) { var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function() { i.clk = i.clk_x = i.clk_y = null }, 100) }

    function a() { if (e.fn.ajaxSubmit.debug) { var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t) } } var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData; var i = !!e.fn.prop;
    e.fn.attr2 = function() { if (!i) return this.attr.apply(this, arguments); var e = this.prop.apply(this, arguments); return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments) }, e.fn.ajaxSubmit = function(t) {
        function r(r) { var a, n, i = e.param(r, t.traditional).split("&"),
                o = i.length,
                s = []; for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]); return s }

        function o(a) { for (var n = new FormData, i = 0; i < a.length; i++) n.append(a[i].name, a[i].value); if (t.extraData) { var o = r(t.extraData); for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1]) }
            t.data = null; var s = e.extend(!0, {}, e.ajaxSettings, t, { contentType: !1, processData: !1, cache: !1, type: u || "POST" });
            t.uploadProgress && (s.xhr = function() { var r = e.ajaxSettings.xhr(); return r.upload && r.upload.addEventListener("progress", function(e) { var r = 0,
                        a = e.loaded || e.position,
                        n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r) }, !1), r }), s.data = null; var c = s.beforeSend; return s.beforeSend = function(e, r) { r.data = t.formData ? t.formData : n, c && c.call(this, e, r) }, e.ajax(s) }

        function s(r) {
            function n(e) { var t = null; try { e.contentWindow && (t = e.contentWindow.document) } catch (r) { a("cannot get iframe.contentWindow document: " + r) } if (t) return t; try { t = e.contentDocument ? e.contentDocument : e.document } catch (r) { a("cannot get iframe.contentDocument: " + r), t = e.document } return t }

            function o() {
                function t() { try { var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50) } catch (r) { a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0 } } var r = f.attr2("target"),
                    i = f.attr2("action"),
                    o = "multipart/form-data",
                    c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({ encoding: "multipart/form-data", enctype: "multipart/form-data" }), m.timeout && (j = setTimeout(function() { T = !0, s(D) }, m.timeout)); var l = []; try { if (m.extraData)
                        for (var d in m.extraData) m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15); try { w.submit() } catch (h) { var x = document.createElement("form").submit;
                        x.apply(w) } } finally { w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove() } }

            function s(t) { if (!x.aborted && !F) { if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout"); if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort"); if (M && M.location.href != m.iframeSrc || T) { g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1); var r, i = "success"; try { if (T) throw "timeout"; var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M); if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250); var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function(e) { var t = { "content-type": m.dataType }; return t[e.toLowerCase()] }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText); var c = (m.dataType || "").toLowerCase(),
                                l = /(json|script|text)/.test(c); if (l || m.textarea) { var f = M.getElementsByTagName("textarea")[0]; if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;
                                else if (l) { var p = M.getElementsByTagName("pre")[0],
                                        h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText) } } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText)); try { E = _(x, c, m) } catch (y) { i = "parsererror", x.error = r = y || i } } catch (y) { a("error caught: ", y), i = "error", x.error = r = y || i }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function() { m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null }, 100) } } } var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0],
                S = e.Deferred(); if (S.abort = function(e) { x.abort(e) }, r)
                for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled"); if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({ position: "absolute", top: "-1000px", left: "-1000px" })), g = v[0], x = { aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function() {}, getResponseHeader: function() {}, setRequestHeader: function() {}, abort: function(t) { var r = "timeout" === t ? "timeout" : "aborted";
                        a("aborting upload... " + r), this.aborted = 1; try { g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop") } catch (n) {}
                        v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r) } }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S; if (x.aborted) return S.reject(), S;
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y))); var D = 1,
                k = 2,
                A = e("meta[name=csrf-token]").attr("content"),
                L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10); var E, M, F, O = 50,
                X = e.parseXML || function(e, t) { return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null },
                C = e.parseJSON || function(e) { return window.eval("(" + e + ")") },
                _ = function(t, r, a) { var n = t.getResponseHeader("content-type") || "",
                        i = "xml" === r || !r && n.indexOf("xml") >= 0,
                        o = i ? t.responseXML : t.responseText; return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o }; return S } if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this; var u, c, l, f = this; "function" == typeof t ? t = { success: t } : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, { url: l, success: e.ajaxSettings.success, type: u || e.ajaxSettings.type, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank" }, t); var m = {}; if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this; if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this; var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional); var p, h = [],
            v = this.formToArray(t.semantic, h); if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this; if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this; var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g; var x = []; if (t.resetForm && x.push(function() { f.resetForm() }), t.clearForm && x.push(function() { f.clearForm(t.includeHidden) }), !t.dataType && t.target) { var y = t.success || function() {};
            x.push(function(r) { var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments) }) } else t.success && x.push(t.success); if (t.success = function(e, r, a) { for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f]) }, t.error) { var b = t.error;
            t.error = function(e, r, a) { var n = t.context || this;
                b.apply(n, [e, r, a, f]) } } if (t.complete) { var T = t.complete;
            t.complete = function(e, r) { var a = t.context || this;
                T.apply(a, [e, r, f]) } } var j = e("input[type=file]:enabled", this).filter(function() { return "" !== e(this).val() }),
            w = j.length > 0,
            S = "multipart/form-data",
            D = f.attr("enctype") == S || f.attr("encoding") == S,
            k = n.fileapi && n.formdata;
        a("fileAPI :" + k); var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() { A = s(v) }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A); for (var E = 0; E < h.length; E++) h[E] = null; return this.trigger("form-submit-notify", [this, t]), this }, e.fn.ajaxForm = function(n) { if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) { var i = { s: this.selector, c: this.context }; return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function() { e(i.s, i.c).ajaxForm(n) }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this) } return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r) }, e.fn.ajaxFormUnbind = function() { return this.unbind("submit.form-plugin click.form-plugin") }, e.fn.formToArray = function(t, r) { var a = []; if (0 === this.length) return a; var i, o = this[0],
            s = this.attr("id"),
            u = t ? o.getElementsByTagName("*") : o.elements; if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a; var c, l, f, m, d, p, h; for (c = 0, p = u.length; p > c; c++)
            if (d = u[c], f = d.name, f && !d.disabled)
                if (t && o.clk && "image" == d.type) o.clk == d && (a.push({ name: f, value: e(d).val(), type: d.type }), a.push({ name: f + ".x", value: o.clk_x }, { name: f + ".y", value: o.clk_y }));
                else if (m = e.fieldValue(d, !0), m && m.constructor == Array)
            for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({ name: f, value: m[l] });
        else if (n.fileapi && "file" == d.type) { r && r.push(d); var v = d.files; if (v.length)
                for (l = 0; l < v.length; l++) a.push({ name: f, value: v[l], type: d.type });
            else a.push({ name: f, value: "", type: d.type }) } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({ name: f, value: m, type: d.type, required: d.required })); if (!t && o.clk) { var g = e(o.clk),
                x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({ name: f, value: g.val() }), a.push({ name: f + ".x", value: o.clk_x }, { name: f + ".y", value: o.clk_y })) } return a }, e.fn.formSerialize = function(t) { return e.param(this.formToArray(t)) }, e.fn.fieldSerialize = function(t) { var r = []; return this.each(function() { var a = this.name; if (a) { var n = e.fieldValue(this, t); if (n && n.constructor == Array)
                    for (var i = 0, o = n.length; o > i; i++) r.push({ name: a, value: n[i] });
                else null !== n && "undefined" != typeof n && r.push({ name: this.name, value: n }) } }), e.param(r) }, e.fn.fieldValue = function(t) { for (var r = [], a = 0, n = this.length; n > a; a++) { var i = this[a],
                o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o)) } return r }, e.fieldValue = function(t, r) { var a = t.name,
            n = t.type,
            i = t.tagName.toLowerCase(); if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null; if ("select" == i) { var o = t.selectedIndex; if (0 > o) return null; for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) { var m = u[f]; if (m.selected) { var d = m.value; if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
                    s.push(d) } } return s } return e(t).val() }, e.fn.clearForm = function(t) { return this.each(function() { e("input,select,textarea", this).clearFields(t) }) }, e.fn.clearFields = e.fn.clearInputs = function(t) { var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; return this.each(function() { var a = this.type,
                n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "") }) }, e.fn.resetForm = function() { return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset() }) }, e.fn.enable = function(e) { return void 0 === e && (e = !0), this.each(function() { this.disabled = !e }) }, e.fn.selected = function(t) { return void 0 === t && (t = !0), this.each(function() { var r = this.type; if ("checkbox" == r || "radio" == r) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) { var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t } }) }, e.fn.ajaxSubmit.debug = !1 });

// ==========
// Vide 
// http://vodkabears.github.io/vide/
// ==========
! function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], b) : b("object" == typeof exports ? require("jquery") : a.jQuery) }(this, function(a) { "use strict";

    function b(a) { var b, c, d, e, f, g, h, i = {}; for (f = a.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(","), h = 0, g = f.length; h < g && (c = f[h], c.search(/^(http|https|ftp):\/\//) === -1 && c.search(":") !== -1); h++) b = c.indexOf(":"), d = c.substring(0, b), e = c.substring(b + 1), e || (e = void 0), "string" == typeof e && (e = "true" === e || "false" !== e && e), "string" == typeof e && (e = isNaN(e) ? e : +e), i[d] = e; return null == d && null == e ? a : i }

    function c(a) { a = "" + a; var b, c, d, e = a.split(/\s+/),
            f = "50%",
            g = "50%"; for (d = 0, b = e.length; d < b; d++) c = e[d], "left" === c ? f = "0%" : "right" === c ? f = "100%" : "top" === c ? g = "0%" : "bottom" === c ? g = "100%" : "center" === c ? 0 === d ? f = "50%" : g = "50%" : 0 === d ? f = c : g = c; return { x: f, y: g } }

    function d(b, c) { var d = function() { c(this.src) };
        a('<img src="' + b + '.gif">').on("load", d), a('<img src="' + b + '.jpg">').on("load", d), a('<img src="' + b + '.jpeg">').on("load", d), a('<img src="' + b + '.png">').on("load", d) }

    function e(c, d, e) { if (this.$element = a(c), "string" == typeof d && (d = b(d)), e ? "string" == typeof e && (e = b(e)) : e = {}, "string" == typeof d) d = d.replace(/\.\w*$/, "");
        else if ("object" == typeof d)
            for (var f in d) d.hasOwnProperty(f) && (d[f] = d[f].replace(/\.\w*$/, ""));
        this.settings = a.extend({}, g, e), this.path = d; try { this.init() } catch (i) { if (i.message !== h) throw i } } var f = "vide",
        g = { volume: 1, playbackRate: 1, muted: !0, loop: !0, autoplay: !0, position: "50% 50%", posterType: "detect", resizing: !0, bgColor: "transparent", className: "" },
        h = "Not implemented";
    e.prototype.init = function() { var b, e, f = this,
            g = f.path,
            i = g,
            j = "",
            k = f.$element,
            l = f.settings,
            m = c(l.position),
            n = l.posterType;
        e = f.$wrapper = a("<div>").addClass(l.className).css({ position: "absolute", "z-index": -1, top: 0, left: 0, bottom: 0, right: 0, overflow: "hidden", "-webkit-background-size": "cover", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "background-color": l.bgColor, "background-repeat": "no-repeat", "background-position": m.x + " " + m.y }), "object" == typeof g && (g.poster ? i = g.poster : g.mp4 ? i = g.mp4 : g.webm ? i = g.webm : g.ogv && (i = g.ogv)), "detect" === n ? d(i, function(a) { e.css("background-image", "url(" + a + ")") }) : "none" !== n && e.css("background-image", "url(" + i + "." + n + ")"), "static" === k.css("position") && k.css("position", "relative"), k.prepend(e), "object" == typeof g ? (g.mp4 && (j += '<source src="' + g.mp4 + '.mp4" type="video/mp4">'), g.webm && (j += '<source src="' + g.webm + '.webm" type="video/webm">'), g.ogv && (j += '<source src="' + g.ogv + '.ogv" type="video/ogg">'), b = f.$video = a("<video>" + j + "</video>")) : b = f.$video = a('<video><source src="' + g + '.mp4" type="video/mp4"><source src="' + g + '.webm" type="video/webm"><source src="' + g + '.ogv" type="video/ogg"></video>'); try { b.prop({ autoplay: l.autoplay, loop: l.loop, volume: l.volume, muted: l.muted, defaultMuted: l.muted, playbackRate: l.playbackRate, defaultPlaybackRate: l.playbackRate }) } catch (o) { throw new Error(h) }
        b.css({ margin: "auto", position: "absolute", "z-index": -1, top: m.y, left: m.x, "-webkit-transform": "translate(-" + m.x + ", -" + m.y + ")", "-ms-transform": "translate(-" + m.x + ", -" + m.y + ")", "-moz-transform": "translate(-" + m.x + ", -" + m.y + ")", transform: "translate(-" + m.x + ", -" + m.y + ")", visibility: "hidden", opacity: 0 }).one("canplaythrough.vide", function() { f.resize() }).one("playing.vide", function() { b.css({ visibility: "visible", opacity: 1 }), e.css("background-image", "none") }), k.on("resize.vide", function() { l.resizing && f.resize() }), e.append(b) }, e.prototype.getVideoObject = function() { return this.$video[0] }, e.prototype.resize = function() { if (this.$video) { var a = this.$wrapper,
                b = this.$video,
                c = b[0],
                d = c.videoHeight,
                e = c.videoWidth,
                f = a.height(),
                g = a.width();
            g / e > f / d ? b.css({ width: g + 2, height: "auto" }) : b.css({ width: "auto", height: f + 2 }) } }, e.prototype.destroy = function() { delete a[f].lookup[this.index], this.$video && this.$video.off(f), this.$element.off(f).removeData(f), this.$wrapper.remove() }, a[f] = { lookup: [] }, a.fn[f] = function(b, c) { var d; return this.each(function() { d = a.data(this, f), d && d.destroy(), d = new e(this, b, c), d.index = a[f].lookup.push(d) - 1, a.data(this, f, d) }), this }, a(document).ready(function() { var b = a(window);
        b.on("resize.vide", function() { for (var b, c = a[f].lookup.length, d = 0; d < c; d++) b = a[f].lookup[d], b && b.settings.resizing && b.resize() }), b.on("unload.vide", function() { return !1 }), a(document).find("[data-vide-bg]").each(function(b, c) { var d = a(c),
                e = d.data("vide-options"),
                g = d.data("vide-bg");
            d[f](g, e) }) }) });

// ==========
// Jquery Counter 1.0.0
// ==========
(function(b) { b.fn.counter = function(a) {
        function d(b, e, c) { var f = parseInt(b.html(), 10) + e;
            f >= c ? (b.html(Math.round(c)), a.callback()) : (b.html(Math.round(f)), setTimeout(function() { d(b, e, c) }, a.step)) }
        a = b.extend({ start: 0, end: 10, time: 10, step: 1E3, callback: function() {} }, a); var g = b(this);
        b(this).html(Math.round(a.start)); var h = (a.end - a.start) / (1E3 / a.step * a.time);
        setTimeout(function() { d(g, h, a.end) }, a.step) } })(jQuery);

// ==========
//  Abstract base class for collection plugins v1.0.1.
// ==========
(function() { var j = false;
    window.JQClass = function() {};
    JQClass.classes = {};
    JQClass.extend = function extender(f) { var g = this.prototype;
        j = true; var h = new this();
        j = false; for (var i in f) { h[i] = typeof f[i] == 'function' && typeof g[i] == 'function' ? (function(d, e) { return function() { var b = this._super;
                    this._super = function(a) { return g[d].apply(this, a || []) }; var c = e.apply(this, arguments);
                    this._super = b; return c } })(i, f[i]) : f[i] }

        function JQClass() { if (!j && this._init) { this._init.apply(this, arguments) } }
        JQClass.prototype = h;
        JQClass.prototype.constructor = JQClass;
        JQClass.extend = extender; return JQClass } })();
(function($) { JQClass.classes.JQPlugin = JQClass.extend({ name: 'plugin', defaultOptions: {}, regionalOptions: {}, _getters: [], _getMarker: function() { return 'is-' + this.name }, _init: function() { $.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions['']) || {}); var c = camelCase(this.name);
            $[c] = this;
            $.fn[c] = function(a) { var b = Array.prototype.slice.call(arguments, 1); if ($[c]._isNotChained(a, b)) { return $[c][a].apply($[c], [this[0]].concat(b)) } return this.each(function() { if (typeof a === 'string') { if (a[0] === '_' || !$[c][a]) { throw 'Unknown method: ' + a; }
                        $[c][a].apply($[c], [this].concat(b)) } else { $[c]._attach(this, a) } }) } }, setDefaults: function(a) { $.extend(this.defaultOptions, a || {}) }, _isNotChained: function(a, b) { if (a === 'option' && (b.length === 0 || (b.length === 1 && typeof b[0] === 'string'))) { return true } return $.inArray(a, this._getters) > -1 }, _attach: function(a, b) { a = $(a); if (a.hasClass(this._getMarker())) { return }
            a.addClass(this._getMarker());
            b = $.extend({}, this.defaultOptions, this._getMetadata(a), b || {}); var c = $.extend({ name: this.name, elem: a, options: b }, this._instSettings(a, b));
            a.data(this.name, c);
            this._postAttach(a, c);
            this.option(a, b) }, _instSettings: function(a, b) { return {} }, _postAttach: function(a, b) {}, _getMetadata: function(d) { try { var f = d.data(this.name.toLowerCase()) || '';
                f = f.replace(/'/g, '"');
                f = f.replace(/([a-zA-Z0-9]+):/g, function(a, b, i) { var c = f.substring(0, i).match(/"/g); return (!c || c.length % 2 === 0 ? '"' + b + '":' : b + ':') });
                f = $.parseJSON('{' + f + '}'); for (var g in f) { var h = f[g]; if (typeof h === 'string' && h.match(/^new Date\((.*)\)$/)) { f[g] = eval(h) } } return f } catch (e) { return {} } }, _getInst: function(a) { return $(a).data(this.name) || {} }, option: function(a, b, c) { a = $(a); var d = a.data(this.name); if (!b || (typeof b === 'string' && c == null)) { var e = (d || {}).options; return (e && b ? e[b] : e) } if (!a.hasClass(this._getMarker())) { return } var e = b || {}; if (typeof b === 'string') { e = {};
                e[b] = c }
            this._optionsChanged(a, d, e);
            $.extend(d.options, e) }, _optionsChanged: function(a, b, c) {}, destroy: function(a) { a = $(a); if (!a.hasClass(this._getMarker())) { return }
            this._preDestroy(a, this._getInst(a));
            a.removeData(this.name).removeClass(this._getMarker()) }, _preDestroy: function(a, b) {} });

    function camelCase(c) { return c.replace(/-([a-z])/g, function(a, b) { return b.toUpperCase() }) }
    $.JQPlugin = { createPlugin: function(a, b) { if (typeof a === 'object') { b = a;
                a = 'JQPlugin' }
            a = camelCase(a); var c = camelCase(b.name);
            JQClass.classes[c] = JQClass.classes[a].extend(b);
            new JQClass.classes[c]() } } })(jQuery);

// ==========
// jQuery Count To
// https://github.com/mhuggins/jquery-countTo
// ==========
! function(t) {
    function e(t, e) { return t.toFixed(e.decimals) } var o = function(e, i) { this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, this.dataOptions(), i), this.init() };
    o.DEFAULTS = { from: 0, to: 0, speed: 1e3, refreshInterval: 100, decimals: 0, formatter: e, onUpdate: null, onComplete: null }, o.prototype.init = function() { this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops }, o.prototype.dataOptions = function() { var t = { from: this.$element.data("from"), to: this.$element.data("to"), speed: this.$element.data("speed"), refreshInterval: this.$element.data("refresh-interval"), decimals: this.$element.data("decimals") },
            e = Object.keys(t); for (var o in e) { var i = e[o]; "undefined" == typeof t[i] && delete t[i] } return t }, o.prototype.update = function() { this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value)) }, o.prototype.render = function() { var t = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(t) }, o.prototype.restart = function() { this.stop(), this.init(), this.start() }, o.prototype.start = function() { this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval) }, o.prototype.stop = function() { this.interval && clearInterval(this.interval) }, o.prototype.toggle = function() { this.interval ? this.stop() : this.start() }, t.fn.countTo = function(e) { return this.each(function() { var i = t(this),
                n = i.data("countTo"),
                s = !n || "object" == typeof e,
                r = "object" == typeof e ? e : {},
                a = "string" == typeof e ? e : "start";
            s && (n && n.stop(), i.data("countTo", n = new o(this, r))), n[a].call(n) }) } }(jQuery);

// ==========
// WOW 1.1.2
// https://github.com/matthieua/WOW
// ==========
(function() { var t, e, n, i, o, r = function(t, e) { return function() { return t.apply(e, arguments) } },
        s = [].indexOf || function(t) { for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1 };
    e = function() {
        function t() {} return t.prototype.extend = function(t, e) { var n, i; for (n in e) i = e[n], null == t[n] && (t[n] = i); return t }, t.prototype.isMobile = function(t) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t) }, t.prototype.createEvent = function(t, e, n, i) { var o; return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, e, n, i)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = t) : o.eventName = t, o }, t.prototype.emitEvent = function(t, e) { return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0 }, t.prototype.addEvent = function(t, e, n) { return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n }, t.prototype.removeEvent = function(t, e, n) { return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e] }, t.prototype.innerHeight = function() { return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight }, t }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
        function t() { this.keys = [], this.values = [] } return t.prototype.get = function(t) { var e, n, i, o, r; for (r = this.keys, e = i = 0, o = r.length; o > i; e = ++i)
                if (n = r[e], n === t) return this.values[e] }, t.prototype.set = function(t, e) { var n, i, o, r, s; for (s = this.keys, n = o = 0, r = s.length; r > o; n = ++o)
                if (i = s[n], i === t) return void(this.values[n] = e);
            return this.keys.push(t), this.values.push(e) }, t }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
        function t() { "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.") } return t.notSupported = !0, t.prototype.observe = function() {}, t }()), i = this.getComputedStyle || function(t) { return this.getPropertyValue = function(e) { var n; return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function(t, e) { return e.toUpperCase() }), (null != (n = t.currentStyle) ? n[e] : void 0) || null }, this }, o = /(\-([a-z]){1})/g, this.WOW = function() {
        function o(t) { null == t && (t = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.resetAnimation = r(this.resetAnimation, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass) } return o.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null }, o.prototype.init = function() { var t; return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [] }, o.prototype.start = function() { var e, n, i, o; if (this.stopped = !1, this.boxes = function() { var t, n, i, o; for (i = this.element.querySelectorAll("." + this.config.boxClass), o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e); return o }.call(this), this.all = function() { var t, n, i, o; for (i = this.boxes, o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e); return o }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (o = this.boxes, n = 0, i = o.length; i > n; n++) e = o[n], this.applyStyle(e, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) { return function(e) { var n, i, o, r, s; for (s = [], n = 0, i = e.length; i > n; n++) r = e[n], s.push(function() { var t, e, n, i; for (n = r.addedNodes || [], i = [], t = 0, e = n.length; e > t; t++) o = n[t], i.push(this.doSync(o)); return i }.call(t)); return s } }(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0 }, o.prototype.stop = function() { return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0 }, o.prototype.sync = function() { return t.notSupported ? this.doSync(this.element) : void 0 }, o.prototype.doSync = function(t) { var e, n, i, o, r; if (null == t && (t = this.element), 1 === t.nodeType) { for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), r = [], n = 0, i = o.length; i > n; n++) e = o[n], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), r.push(this.scrolled = !0)) : r.push(void 0); return r } }, o.prototype.show = function(t) { return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t }, o.prototype.applyStyle = function(t, e) { var n, i, o; return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(r) { return function() { return r.customStyle(t, e, i, n, o) } }(this)) }, o.prototype.animate = function() { return "requestAnimationFrame" in window ? function(t) { return window.requestAnimationFrame(t) } : function(t) { return t() } }(), o.prototype.resetStyle = function() { var t, e, n, i, o; for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++) t = i[e], o.push(t.style.visibility = "visible"); return o }, o.prototype.resetAnimation = function(t) { var e; return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0 }, o.prototype.customStyle = function(t, e, n, i, o) { return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, { animationDuration: n }), i && this.vendorSet(t.style, { animationDelay: i }), o && this.vendorSet(t.style, { animationIterationCount: o }), this.vendorSet(t.style, { animationName: e ? "none" : this.cachedAnimationName(t) }), t }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) { var n, i, o, r;
            i = []; for (n in e) o = e[n], t["" + n] = o, i.push(function() { var e, i, s, l; for (s = this.vendors, l = [], e = 0, i = s.length; i > e; e++) r = s[e], l.push(t["" + r + n.charAt(0).toUpperCase() + n.substr(1)] = o); return l }.call(this)); return i }, o.prototype.vendorCSS = function(t, e) { var n, o, r, s, l, a; for (l = i(t), s = l.getPropertyCSSValue(e), r = this.vendors, n = 0, o = r.length; o > n; n++) a = r[n], s = s || l.getPropertyCSSValue("-" + a + "-" + e); return s }, o.prototype.animationName = function(t) { var e; try { e = this.vendorCSS(t, "animation-name").cssText } catch (n) { e = i(t).getPropertyValue("animation-name") } return "none" === e ? "" : e }, o.prototype.cacheAnimationName = function(t) { return this.animationNameCache.set(t, this.animationName(t)) }, o.prototype.cachedAnimationName = function(t) { return this.animationNameCache.get(t) }, o.prototype.scrollHandler = function() { return this.scrolled = !0 }, o.prototype.scrollCallback = function() { var t; return !this.scrolled || (this.scrolled = !1, this.boxes = function() { var e, n, i, o; for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++) t = i[e], t && (this.isVisible(t) ? this.show(t) : o.push(t)); return o }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop() }, o.prototype.offsetTop = function(t) { for (var e; void 0 === t.offsetTop;) t = t.parentNode; for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop; return e }, o.prototype.isVisible = function(t) { var e, n, i, o, r; return n = t.getAttribute("data-wow-offset") || this.config.offset, r = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, o = r + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(t), e = i + t.clientHeight, o >= i && e >= r }, o.prototype.util = function() { return null != this._util ? this._util : this._util = new e }, o.prototype.disabled = function() { return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, o }() }).call(this);

// ==========
// Owl carousel 2
// Bartosz Wojciechowski
// ==========
! function(a, b, c, d) {
    function e(b, c) { this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function(a, b) { this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this) }, this)), a.each(e.Pipe, a.proxy(function(b, c) { this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) }) }, this)), this.setup(), this.initialize() }

    function f(a) { if (a.touches !== d) return { x: a.touches[0].pageX, y: a.touches[0].pageY }; if (a.touches === d) { if (a.pageX !== d) return { x: a.pageX, y: a.pageY }; if (a.pageX === d) return { x: a.clientX, y: a.clientY } } }

    function g(a) { var b, d, e = c.createElement("div"),
            f = a; for (b in f)
            if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
        return [!1] }

    function h() { return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1] }

    function i() { return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0] }

    function j() { return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0] }

    function k() { return "ontouchstart" in b || !!navigator.msMaxTouchPoints }

    function l() { return b.navigator.msPointerEnabled } var m, n, o;
    m = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }, n = { isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1 }, o = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }, e.Defaults = { items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 500, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Plugins = {}, e.Pipe = [{ filter: ["width", "items", "settings"], run: function(a) { a.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { var a = this._clones,
                b = this.$stage.children(".cloned");
            (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = []) } }, { filter: ["items", "settings"], run: function() { var a, b, c = this._clones,
                d = this._items,
                e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0; for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned"))) } }, { filter: ["width", "items", "settings"], run: function() { var a, b, c, d = this.settings.rtl ? 1 : -1,
                e = (this.width() / this.settings.items).toFixed(3),
                f = 0; for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f) } }, { filter: ["width", "items", "settings"], run: function() { var b, c, d = (this.width() / this.settings.items).toFixed(3),
                e = { width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding, "padding-left": this.settings.stagePadding || "", "padding-right": this.settings.stagePadding || "" }; if (this.$stage.css(e), e = { width: this.settings.autoWidth ? "auto" : d - this.settings.margin }, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a) { return a > 1 }).length > 0)
                for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
            else this.$stage.children().css(e) } }, { filter: ["width", "items", "settings"], run: function(a) { a.current && this.reset(this.$stage.children().index(a.current)) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, { filter: ["width", "position", "items", "settings"], run: function() { var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = []; for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass)) } }], e.prototype.initialize = function() { if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) { var b, c, e; if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1 }
        this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized") }, e.prototype.setup = function() { var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) { b >= a && a > d && (d = Number(a)) }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function(a, b) { return b.replace(/\b owl-responsive-\S+/g, "") }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } })) }, e.prototype.optionsLogic = function() { this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, e.prototype.prepare = function(b) { var c = this.trigger("prepare", { content: b }); return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data }, e.prototype.update = function() { for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) { return this[a] }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {} }, e.prototype.width = function(a) { switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin } }, e.prototype.refresh = function() { if (0 === this._items.length) return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed") }, e.prototype.eventsCall = function() { this.e._onDragStart = a.proxy(function(a) { this.onDragStart(a) }, this), this.e._onDragMove = a.proxy(function(a) { this.onDragMove(a) }, this), this.e._onDragEnd = a.proxy(function(a) { this.onDragEnd(a) }, this), this.e._onResize = a.proxy(function(a) { this.onResize(a) }, this), this.e._transitionEnd = a.proxy(function(a) { this.transitionEnd(a) }, this), this.e._preventClick = a.proxy(function(a) { this.preventClick(a) }, this) }, e.prototype.onThrottledResize = function() { b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate) }, e.prototype.onResize = function() { return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1 }, e.prototype.eventsRouter = function(a) { var b = a.type; "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a) }, e.prototype.internalEvents = function() { var c = (k(), l());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) { this.eventsRouter(a) }, this)), this.$stage.on("dragstart", function() { return !1 }), this.$stage.get(0).onselectstart = function() { return !1 }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) { this.eventsRouter(a) }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this)) }, e.prototype.onDragStart = function(d) { var e, g, h, i; if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1; if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) { this.eventsRouter(a) }, this)) }, e.prototype.onDragMove = function(a) { var c, e, g, h, i, j;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX))) }, e.prototype.onDragEnd = function(b) { var d, e, f; if (this.state.isTouch) { if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents") } }, e.prototype.removeClick = function(c) { this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function() { a(c).off("click.preventClick") }, 300) }, e.prototype.preventClick = function(b) { b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick") }, e.prototype.getTransformProperty = function() { var a, c; return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12] }, e.prototype.closest = function(b) { var c = -1,
            d = 30,
            e = this.width(),
            f = this.coordinates(); return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) { return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c }, e.prototype.animate = function(b) { this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({ transform: "translate3d(" + b + "px,0px, 0px)", transition: this.speed() / 1e3 + "s" }) : this.state.isTouch ? this.$stage.css({ left: b + "px" }) : this.$stage.animate({ left: b }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() { this.state.inMotion && this.transitionEnd() }, this)) }, e.prototype.current = function(a) { if (a === d) return this._current; if (0 === this._items.length) return d; if (a = this.normalize(a), this._current !== a) { var b = this.trigger("change", { property: { name: "position", value: a } });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } }) } return this._current }, e.prototype.invalidate = function(a) { this._invalidated[a] = !0 }, e.prototype.reset = function(a) { a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"])) }, e.prototype.normalize = function(b, c) { var e = c ? this._items.length : this._items.length + this._clones.length; return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b)) }, e.prototype.relative = function(a) { return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0) }, e.prototype.maximum = function(a) { var b, c, d, e = 0,
            f = this.settings; if (a) return this._items.length - 1; if (!f.loop && f.center) b = this._items.length - 1;
        else if (f.loop || f.center)
            if (f.loop || f.center) b = this._items.length + f.items;
            else { if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position."; for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width();
                    (d = this.coordinates(e)) && !(d * revert >= c);) b = ++e }
        else b = this._items.length - f.items; return b }, e.prototype.minimum = function(a) { return a ? 0 : this._clones.length / 2 }, e.prototype.items = function(a) { return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]) }, e.prototype.mergers = function(a) { return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]) }, e.prototype.clones = function(b) { var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) { return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2 }; return b === d ? a.map(this._clones, function(a, b) { return f(b) }) : a.map(this._clones, function(a, c) { return a === b ? f(c) : null }) }, e.prototype.speed = function(a) { return a !== d && (this._speed = a), this._speed }, e.prototype.coordinates = function(b) { var c = null; return b === d ? a.map(this._coordinates, a.proxy(function(a, b) { return this.coordinates(b) }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c) }, e.prototype.duration = function(a, b, c) { return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed) }, e.prototype.to = function(c, d) { if (this.settings.loop) { var e = c - this.relative(this.current()),
                f = this.current(),
                g = this.current(),
                h = this.current() + e,
                i = 0 > g - h ? !0 : !1,
                j = this._clones.length + this._items.length;
            h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function() { this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update() }, this), 30) } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update() }, e.prototype.next = function(a) { a = a || !1, this.to(this.relative(this.current()) + 1, a) }, e.prototype.prev = function(a) { a = a || !1, this.to(this.relative(this.current()) - 1, a) }, e.prototype.transitionEnd = function(a) { return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated")) }, e.prototype.viewport = function() { var d; if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth) d = b.innerWidth;
        else { if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
            d = c.documentElement.clientWidth } return d }, e.prototype.replace = function(b) { this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() { return 1 === this.nodeType }).each(a.proxy(function(a, b) { b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, e.prototype.add = function(a, b) { b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", { content: a, position: b }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", { content: a, position: b }) }, e.prototype.remove = function(a) { a = this.normalize(a, !0), a !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a })) }, e.prototype.addTriggerableEvents = function() { var b = a.proxy(function(b, c) { return a.proxy(function(a) { a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c])) }, this) }, this);
        a.each({ next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.replace, add: this.add, remove: this.remove }, a.proxy(function(a, c) { this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel")) }, this)) }, e.prototype.watchVisibility = function() {
        function c(a) { return a.offsetWidth > 0 && a.offsetHeight > 0 }

        function d() { c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile)) }
        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500)) }, e.prototype.preloadAutoWidthImages = function(b) { var c, d, e, f;
        c = 0, d = this, b.each(function(g, h) { e = a(h), f = new Image, f.onload = function() { c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize()) }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina") }) }, e.prototype.destroy = function() { this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd); for (var d in this._plugins) this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() { return !1 })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap() }, e.prototype.op = function(a, b, c) { var d = this.settings.rtl; switch (b) {
            case "<":
                return d ? a > c : c > a;
            case ">":
                return d ? c > a : a > c;
            case ">=":
                return d ? c >= a : a >= c;
            case "<=":
                return d ? a >= c : c >= a } }, e.prototype.on = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c) }, e.prototype.off = function(a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c) }, e.prototype.trigger = function(b, c, d) { var e = { item: { count: this._items.length, index: this.current() } },
            f = a.camelCase(a.grep(["on", b, d], function(a) { return a }).join("-").toLowerCase()),
            g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, e, c)); return this._supress[b] || (a.each(this._plugins, function(a, b) { b.onTrigger && b.onTrigger(g) }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g }, e.prototype.suppress = function(b) { a.each(b, a.proxy(function(a, b) { this._supress[b] = !0 }, this)) }, e.prototype.release = function(b) { a.each(b, a.proxy(function(a, b) { delete this._supress[b] }, this)) }, e.prototype.browserSupport = function() { if (this.support3d = j(), this.support3d) { this.transformVendor = i(); var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : "" }
        this.state.orientation = b.orientation }, a.fn.owlCarousel = function(b) { return this.each(function() { a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b)) }) }, a.fn.owlCarousel.Constructor = e }(window.Zepto || window.jQuery, window, document),
function(a, b) { var c = function(b) { this._core = b, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) { if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) { this.load(b) }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h) }, this) }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    c.Defaults = { lazyLoad: !1 }, c.prototype.load = function(c) { var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) { var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() { f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() { f.css({ "background-image": "url(" + g + ")", opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this), e.src = g) }, this)), this._loaded.push(d.get(0))) }, c.prototype.destroy = function() { var a, b; for (a in this.handlers) this._core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c }(window.Zepto || window.jQuery, window, document),
function(a) { var b = function(c) { this._core = c, this._handlers = { "initialized.owl.carousel": a.proxy(function() { this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": a.proxy(function(a) { this._core.settings.autoHeight && "position" == a.property.name && this.update() }, this), "loaded.owl.lazy": a.proxy(function(a) { this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update() }, this) }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    b.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, b.prototype.update = function() { this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass) }, b.prototype.destroy = function() { var a, b; for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b }(window.Zepto || window.jQuery, window, document),
function(a, b, c) { var d = function(b) { this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = { "resize.owl.carousel": a.proxy(function(a) { this._core.settings.video && !this.isInFullScreen() && a.preventDefault() }, this), "refresh.owl.carousel changed.owl.carousel": a.proxy(function() { this._playing && this.stop() }, this), "prepared.owl.carousel": a.proxy(function(b) { var c = a(b.content).find(".owl-video");
                c.length && (c.css("display", "none"), this.fetch(c, a(b.content))) }, this) }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) { this.play(a) }, this)) };
    d.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, d.prototype.fetch = function(a, b) { var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href"); if (!g) throw new Error("Missing video URL."); if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else { if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            c = "vimeo" }
        d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]) }, d.prototype.thumbnail = function(b, c) { var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) { e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e) }; return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({ type: "GET", url: "http://vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a[0].thumbnail_large, l(f) } })) }, d.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null }, d.prototype.play = function(b) { this._core.trigger("play", null, "video"), this._playing && this.stop(); var c, d, e = a(b.target || b.srcElement),
            f = e.closest("." + this._core.settings.itemClass),
            g = this._videos[f.attr("data-video")],
            h = g.width || "100%",
            i = g.height || this._core.$stage.height(); "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d) }, d.prototype.isInFullScreen = function() { var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement; return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0 }, d.prototype.destroy = function() { var a, b;
        this._core.$element.off("click.owl.video"); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Video = d }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function(a) { "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) { this.swapping = "translated" == a.type }, this), "translate.owl.carousel": a.proxy(function() { this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
    e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function() { if (1 === this.core.settings.items && this.core.support3d) { this.core.speed(0); var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)) } }, e.prototype.clear = function(b) { a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd() }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Animate = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) { this.play(b, c) }, this),
            "stop.owl.autoplay": a.proxy(function() { this.stop() }, this),
            "mouseover.owl.autoplay": a.proxy(function() { this.core.settings.autoplayHoverPause && this.pause() }, this),
            "mouseleave.owl.autoplay": a.proxy(function() { this.core.settings.autoplayHoverPause && this.autoplay() }, this)
        }, this.core.$element.on(this.handlers)
    };
    d.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, d.prototype.autoplay = function() { this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() { this.play() }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval) }, d.prototype.play = function() { return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed) }, d.prototype.stop = function() { b.clearInterval(this.interval) }, d.prototype.pause = function() { b.clearInterval(this.interval) }, d.prototype.destroy = function() { var a, c;
        b.clearInterval(this.interval); for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document),
function(a) { "use strict"; var b = function(c) { this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function(b) { this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this), "add.owl.carousel": a.proxy(function(b) { this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this), "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) { this._core.settings.dotsData && this._templates.splice(a.position, 1) }, this), "change.owl.carousel": a.proxy(function(a) { if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) { var b = this._core.current(),
                        c = this._core.maximum(),
                        d = this._core.minimum();
                    a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value } }, this), "changed.owl.carousel": a.proxy(function(a) { "position" == a.property.name && this.draw() }, this), "refreshed.owl.carousel": a.proxy(function() { this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation") }, this) }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers) };
    b.Defaults = { nav: !1, navRewind: !0, navText: ["", ""], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "owl-controls" }, b.prototype.initialize = function() { var b, c, d = this._core.settings;
        d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function(b) { var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(c, d.dotsSpeed) }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() { this.prev(d.navSpeed) }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() { this.next(d.navSpeed) }, this)); for (c in this._overrides) this._core[c] = a.proxy(this[c], this) }, b.prototype.destroy = function() { var a, b, c, d; for (a in this._handlers) this.$element.off(a, this._handlers[a]); for (b in this._controls) this._controls[b].remove(); for (d in this.overides) this._core[d] = this._overrides[d]; for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, b.prototype.update = function() { var a, b, c, d = this._core.settings,
            e = this._core.clones().length / 2,
            f = e + this._core.items().length,
            g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items; if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
            for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({ start: a - e, end: a - e + g - 1 }), b = 0, ++c), b += this._core.mergers(this._core.relative(a)) }, b.prototype.draw = function() { var b, c, d = "",
            e = this._core.settings,
            f = (this._core.$stage.children(), this._core.relative(this._core.current())); if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) { if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) { for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
                this._controls.$indicators.html(d) } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active") }
        this._controls.$indicators.toggle(e.dots) }, b.prototype.onTrigger = function(b) { var c = this._core.settings;
        b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items) } }, b.prototype.current = function() { var b = this._core.relative(this._core.current()); return a.grep(this._pages, function(a) { return a.start <= b && a.end >= b }).pop() }, b.prototype.getPosition = function(b) { var c, d, e = this._core.settings; return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c }, b.prototype.next = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b) }, b.prototype.prev = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b) }, b.prototype.to = function(b, c, d) { var e;
        d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b }(window.Zepto || window.jQuery, window, document),
function(a, b) { "use strict"; var c = function(d) { this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function() { "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation") }, this), "prepared.owl.carousel": a.proxy(function(b) { var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[c] = b.content }, this) }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() { var a = b.location.hash.substring(1),
                c = this._core.$stage.children(),
                d = this._hashes[a] && c.index(this._hashes[a]) || 0; return a ? void this._core.to(d, !1, !0) : !1 }, this)) };
    c.Defaults = { URLhashListener: !1 }, c.prototype.destroy = function() { var c, d;
        a(b).off("hashchange.owl.navigation"); for (c in this._handlers) this._core.$element.off(c, this._handlers[c]); for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null) }, a.fn.owlCarousel.Constructor.Plugins.Hash = c }(window.Zepto || window.jQuery, window, document);

// ==========
// Isotope PACKAGED v2.2.2
// http://isotope.metafizzy.co
// ==========
(function(window) { var slice = Array.prototype.slice;

    function noop() {}

    function defineBridget($) { if (!$) return;

        function addOptionMethod(PluginClass) { if (PluginClass.prototype.option) return;
            PluginClass.prototype.option = function(opts) { if (!$.isPlainObject(opts)) return;
                this.options = $.extend(true, this.options, opts); }; } var logError = typeof console === 'undefined' ? noop : function(message) { console.error(message); };

        function bridge(namespace, PluginClass) { $.fn[namespace] = function(options) { if (typeof options === 'string') { var args = slice.call(arguments, 1); for (var i = 0, len = this.length; i < len; i++) { var elem = this[i]; var instance = $.data(elem, namespace); if (!instance) { logError("cannot call methods on " + namespace + " prior to initialization; " + "attempted to call '" + options + "'"); continue; } if (!$.isFunction(instance[options]) || options.charAt(0) === '_') { logError("no such method '" + options + "' for " + namespace + " instance"); continue; } var returnValue = instance[options].apply(instance, args); if (returnValue !== undefined) return returnValue; } return this; } else return this.each(function() { var instance = $.data(this, namespace); if (instance) { instance.option(options);
                        instance._init(); } else { instance = new PluginClass(this, options);
                        $.data(this, namespace, instance); } }); }; }
        $.bridget = function(namespace, PluginClass) { addOptionMethod(PluginClass);
            bridge(namespace, PluginClass); }; return $.bridget; } if (typeof define === 'function' && define.amd) define('jquery-bridget/jquery.bridget', ['jquery'], defineBridget);
    else if (typeof exports === 'object') defineBridget(require('jquery'));
    else defineBridget(window.jQuery); })(window);
(function(window) { var docElem = document.documentElement; var bind = function() {};

    function getIEEvent(obj) { var event = window.event;
        event.target = event.target || event.srcElement || obj; return event; } if (docElem.addEventListener) bind = function(obj, type, fn) { obj.addEventListener(type, fn, false); };
    else if (docElem.attachEvent) bind = function(obj, type, fn) { obj[type + fn] = fn.handleEvent ? function() { var event = getIEEvent(obj);
            fn.handleEvent.call(fn, event); } : function() { var event = getIEEvent(obj);
            fn.call(obj, event); };
        obj.attachEvent("on" + type, obj[type + fn]); }; var unbind = function() {}; if (docElem.removeEventListener) unbind = function(obj, type, fn) { obj.removeEventListener(type, fn, false); };
    else if (docElem.detachEvent) unbind = function(obj, type, fn) { obj.detachEvent("on" + type, obj[type + fn]); try { delete obj[type + fn]; } catch (err) { obj[type + fn] = undefined; } }; var eventie = { bind: bind, unbind: unbind }; if (typeof define === 'function' && define.amd) define('eventie/eventie', eventie);
    else if (typeof exports === 'object') module.exports = eventie;
    else window.eventie = eventie; })(window);;
(function() { 'use strict';

    function EventEmitter() {} var proto = EventEmitter.prototype; var exports = this; var originalGlobalValue = exports.EventEmitter;

    function indexOfListener(listeners, listener) { var i = listeners.length; while (i--)
            if (listeners[i].listener === listener) return i;
        return -1; }

    function alias(name) { return function aliasClosure() { return this[name].apply(this, arguments); }; }
    proto.getListeners = function getListeners(evt) { var events = this._getEvents(); var response; var key; if (evt instanceof RegExp) { response = {}; for (key in events)
                if (events.hasOwnProperty(key) && evt.test(key)) response[key] = events[key]; } else response = events[evt] || (events[evt] = []); return response; };
    proto.flattenListeners = function flattenListeners(listeners) { var flatListeners = []; var i; for (i = 0; i < listeners.length; i += 1) flatListeners.push(listeners[i].listener); return flatListeners; };
    proto.getListenersAsObject = function getListenersAsObject(evt) { var listeners = this.getListeners(evt); var response; if (listeners instanceof Array) { response = {};
            response[evt] = listeners; } return response || listeners; };
    proto.addListener = function addListener(evt, listener) { var listeners = this.getListenersAsObject(evt); var listenerIsWrapped = typeof listener === 'object'; var key; for (key in listeners)
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) listeners[key].push(listenerIsWrapped ? listener : { listener: listener, once: false });
        return this; };
    proto.on = alias('addListener');
    proto.addOnceListener = function addOnceListener(evt, listener) { return this.addListener(evt, { listener: listener, once: true }); };
    proto.once = alias('addOnceListener');
    proto.defineEvent = function defineEvent(evt) { this.getListeners(evt); return this; };
    proto.defineEvents = function defineEvents(evts) { for (var i = 0; i < evts.length; i += 1) this.defineEvent(evts[i]); return this; };
    proto.removeListener = function removeListener(evt, listener) { var listeners = this.getListenersAsObject(evt); var index; var key; for (key in listeners)
            if (listeners.hasOwnProperty(key)) { index = indexOfListener(listeners[key], listener); if (index !== -1) listeners[key].splice(index, 1); }
        return this; };
    proto.off = alias('removeListener');
    proto.addListeners = function addListeners(evt, listeners) { return this.manipulateListeners(false, evt, listeners); };
    proto.removeListeners = function removeListeners(evt, listeners) { return this.manipulateListeners(true, evt, listeners); };
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) { var i; var value; var single = remove ? this.removeListener : this.addListener; var multiple = remove ? this.removeListeners : this.addListeners; if (typeof evt === 'object' && !(evt instanceof RegExp)) { for (i in evt)
                if (evt.hasOwnProperty(i) && (value = evt[i]))
                    if (typeof value === 'function') single.call(this, i, value);
                    else multiple.call(this, i, value); } else { i = listeners.length; while (i--) single.call(this, evt, listeners[i]); } return this; };
    proto.removeEvent = function removeEvent(evt) { var type = typeof evt; var events = this._getEvents(); var key; if (type === 'string') delete events[evt];
        else if (evt instanceof RegExp) { for (key in events)
                if (events.hasOwnProperty(key) && evt.test(key)) delete events[key]; } else delete this._events; return this; };
    proto.removeAllListeners = alias('removeEvent');
    proto.emitEvent = function emitEvent(evt, args) { var listeners = this.getListenersAsObject(evt); var listener; var i; var key; var response; for (key in listeners)
            if (listeners.hasOwnProperty(key)) { i = listeners[key].length; while (i--) { listener = listeners[key][i]; if (listener.once === true) this.removeListener(evt, listener.listener);
                    response = listener.listener.apply(this, args || []); if (response === this._getOnceReturnValue()) this.removeListener(evt, listener.listener); } }
        return this; };
    proto.trigger = alias('emitEvent');
    proto.emit = function emit(evt) { var args = Array.prototype.slice.call(arguments, 1); return this.emitEvent(evt, args); };
    proto.setOnceReturnValue = function setOnceReturnValue(value) { this._onceReturnValue = value; return this; };
    proto._getOnceReturnValue = function _getOnceReturnValue() { if (this.hasOwnProperty('_onceReturnValue')) return this._onceReturnValue;
        else return true; };
    proto._getEvents = function _getEvents() { return this._events || (this._events = {}); };
    EventEmitter.noConflict = function noConflict() { exports.EventEmitter = originalGlobalValue; return EventEmitter; }; if (typeof define === 'function' && define.amd) define('eventEmitter/EventEmitter', [], function() { return EventEmitter; });
    else if (typeof module === 'object' && module.exports) module.exports = EventEmitter;
    else exports.EventEmitter = EventEmitter; }.call(this));
(function(window) { var prefixes = 'Webkit Moz ms Ms O'.split(' '); var docElemStyle = document.documentElement.style;

    function getStyleProperty(propName) { if (!propName) return; if (typeof docElemStyle[propName] === 'string') return propName;
        propName = propName.charAt(0).toUpperCase() + propName.slice(1); var prefixed; for (var i = 0, len = prefixes.length; i < len; i++) { prefixed = prefixes[i] + propName; if (typeof docElemStyle[prefixed] === 'string') return prefixed; } } if (typeof define === 'function' && define.amd) define('get-style-property/get-style-property', [], function() { return getStyleProperty; });
    else if (typeof exports === 'object') module.exports = getStyleProperty;
    else window.getStyleProperty = getStyleProperty; })(window);
(function(window, undefined) {
    function getStyleSize(value) { var num = parseFloat(value); var isValid = value.indexOf('%') === -1 && !isNaN(num); return isValid && num; }

    function noop() {} var logError = typeof console === 'undefined' ? noop : function(message) { console.error(message); }; var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];

    function getZeroSize() { var size = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }; for (var i = 0, len = measurements.length; i < len; i++) { var measurement = measurements[i];
            size[measurement] = 0; } return size; }

    function defineGetSize(getStyleProperty) { var isSetup = false; var getStyle, boxSizingProp, isBoxSizeOuter;

        function setup() { if (isSetup) return;
            isSetup = true; var getComputedStyle = window.getComputedStyle;
            getStyle = (function() { var getStyleFn = getComputedStyle ? function(elem) { return getComputedStyle(elem, null); } : function(elem) { return elem.currentStyle; }; return function getStyle(elem) { var style = getStyleFn(elem); if (!style) logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See http://bit.ly/getsizebug1'); return style; }; })();
            boxSizingProp = getStyleProperty('boxSizing'); if (boxSizingProp) { var div = document.createElement('div');
                div.style.width = '200px';
                div.style.padding = '1px 2px 3px 4px';
                div.style.borderStyle = 'solid';
                div.style.borderWidth = '1px 2px 3px 4px';
                div.style[boxSizingProp] = 'border-box'; var body = document.body || document.documentElement;
                body.appendChild(div); var style = getStyle(div);
                isBoxSizeOuter = getStyleSize(style.width) === 200;
                body.removeChild(div); } }

        function getSize(elem) { setup(); if (typeof elem === 'string') elem = document.querySelector(elem); if (!elem || typeof elem !== 'object' || !elem.nodeType) return; var style = getStyle(elem); if (style.display === 'none') return getZeroSize(); var size = {};
            size.width = elem.offsetWidth;
            size.height = elem.offsetHeight; var isBorderBox = size.isBorderBox = !!(boxSizingProp && style[boxSizingProp] && style[boxSizingProp] === 'border-box'); for (var i = 0, len = measurements.length; i < len; i++) { var measurement = measurements[i]; var value = style[measurement];
                value = mungeNonPixel(elem, value); var num = parseFloat(value);
                size[measurement] = !isNaN(num) ? num : 0; } var paddingWidth = size.paddingLeft + size.paddingRight; var paddingHeight = size.paddingTop + size.paddingBottom; var marginWidth = size.marginLeft + size.marginRight; var marginHeight = size.marginTop + size.marginBottom; var borderWidth = size.borderLeftWidth + size.borderRightWidth; var borderHeight = size.borderTopWidth + size.borderBottomWidth; var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter; var styleWidth = getStyleSize(style.width); if (styleWidth !== false) size.width = styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth); var styleHeight = getStyleSize(style.height); if (styleHeight !== false) size.height = styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
            size.innerWidth = size.width - (paddingWidth + borderWidth);
            size.innerHeight = size.height - (paddingHeight + borderHeight);
            size.outerWidth = size.width + marginWidth;
            size.outerHeight = size.height + marginHeight; return size; }

        function mungeNonPixel(elem, value) { if (window.getComputedStyle || value.indexOf('%') === -1) return value; var style = elem.style; var left = style.left; var rs = elem.runtimeStyle; var rsLeft = rs && rs.left; if (rsLeft) rs.left = elem.currentStyle.left;
            style.left = value;
            value = style.pixelLeft;
            style.left = left; if (rsLeft) rs.left = rsLeft; return value; } return getSize; } if (typeof define === 'function' && define.amd) define('get-size/get-size', ['get-style-property/get-style-property'], defineGetSize);
    else if (typeof exports === 'object') module.exports = defineGetSize(require('desandro-get-style-property'));
    else window.getSize = defineGetSize(window.getStyleProperty); })(window);
(function(window) { var document = window.document; var queue = [];

    function docReady(fn) { if (typeof fn !== 'function') return; if (docReady.isReady) fn();
        else queue.push(fn); }
    docReady.isReady = false;

    function onReady(event) { var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete'; if (docReady.isReady || isIE8NotReady) return;
        trigger(); }

    function trigger() { docReady.isReady = true; for (var i = 0, len = queue.length; i < len; i++) { var fn = queue[i];
            fn(); } }

    function defineDocReady(eventie) { if (document.readyState === 'complete') trigger();
        else { eventie.bind(document, 'DOMContentLoaded', onReady);
            eventie.bind(document, 'readystatechange', onReady);
            eventie.bind(window, 'load', onReady); } return docReady; } if (typeof define === 'function' && define.amd) define('doc-ready/doc-ready', ['eventie/eventie'], defineDocReady);
    else if (typeof exports === 'object') module.exports = defineDocReady(require('eventie'));
    else window.docReady = defineDocReady(window.eventie); })(window);
(function(ElemProto) { 'use strict'; var matchesMethod = (function() { if (ElemProto.matches) return 'matches'; if (ElemProto.matchesSelector) return 'matchesSelector'; var prefixes = ['webkit', 'moz', 'ms', 'o']; for (var i = 0, len = prefixes.length; i < len; i++) { var prefix = prefixes[i]; var method = prefix + 'MatchesSelector'; if (ElemProto[method]) return method; } })();

    function match(elem, selector) { return elem[matchesMethod](selector); }

    function checkParent(elem) { if (elem.parentNode) return; var fragment = document.createDocumentFragment();
        fragment.appendChild(elem); }

    function query(elem, selector) { checkParent(elem); var elems = elem.parentNode.querySelectorAll(selector); for (var i = 0, len = elems.length; i < len; i++)
            if (elems[i] === elem) return true;
        return false; }

    function matchChild(elem, selector) { checkParent(elem); return match(elem, selector); } var matchesSelector; if (matchesMethod) { var div = document.createElement('div'); var supportsOrphans = match(div, 'div');
        matchesSelector = supportsOrphans ? match : matchChild; } else matchesSelector = query; if (typeof define === 'function' && define.amd) define('matches-selector/matches-selector', [], function() { return matchesSelector; });
    else if (typeof exports === 'object') module.exports = matchesSelector;
    else window.matchesSelector = matchesSelector; })(Element.prototype);
(function(window, factory) { 'use strict'; if (typeof define == 'function' && define.amd) define('fizzy-ui-utils/utils', ['doc-ready/doc-ready', 'matches-selector/matches-selector'], function(docReady, matchesSelector) { return factory(window, docReady, matchesSelector); });
    else if (typeof exports == 'object') module.exports = factory(window, require('doc-ready'), require('desandro-matches-selector'));
    else window.fizzyUIUtils = factory(window, window.docReady, window.matchesSelector); }(window, function factory(window, docReady, matchesSelector) { var utils = {};
    utils.extend = function(a, b) { for (var prop in b) a[prop] = b[prop]; return a; };
    utils.modulo = function(num, div) { return ((num % div) + div) % div; }; var objToString = Object.prototype.toString;
    utils.isArray = function(obj) { return objToString.call(obj) == '[object Array]'; };
    utils.makeArray = function(obj) { var ary = []; if (utils.isArray(obj)) ary = obj;
        else if (obj && typeof obj.length == 'number')
            for (var i = 0, len = obj.length; i < len; i++) ary.push(obj[i]);
        else ary.push(obj); return ary; };
    utils.indexOf = Array.prototype.indexOf ? function(ary, obj) { return ary.indexOf(obj); } : function(ary, obj) { for (var i = 0, len = ary.length; i < len; i++)
            if (ary[i] === obj) return i;
        return -1; };
    utils.removeFrom = function(ary, obj) { var index = utils.indexOf(ary, obj); if (index != -1) ary.splice(index, 1); };
    utils.isElement = (typeof HTMLElement == 'function' || typeof HTMLElement == 'object') ? function isElementDOM2(obj) { return obj instanceof HTMLElement; } : function isElementQuirky(obj) { return obj && typeof obj == 'object' && obj.nodeType == 1 && typeof obj.nodeName == 'string'; };
    utils.setText = (function() { var setTextProperty;

        function setText(elem, text) { setTextProperty = setTextProperty || (document.documentElement.textContent !== undefined ? 'textContent' : 'innerText');
            elem[setTextProperty] = text; } return setText; })();
    utils.getParent = function(elem, selector) { while (elem != document.body) { elem = elem.parentNode; if (matchesSelector(elem, selector)) return elem; } };
    utils.getQueryElement = function(elem) { if (typeof elem == 'string') return document.querySelector(elem); return elem; };
    utils.handleEvent = function(event) { var method = 'on' + event.type; if (this[method]) this[method](event); };
    utils.filterFindElements = function(elems, selector) { elems = utils.makeArray(elems); var ffElems = []; for (var i = 0, len = elems.length; i < len; i++) { var elem = elems[i]; if (!utils.isElement(elem)) continue; if (selector) { if (matchesSelector(elem, selector)) ffElems.push(elem); var childElems = elem.querySelectorAll(selector); for (var j = 0, jLen = childElems.length; j < jLen; j++) ffElems.push(childElems[j]); } else ffElems.push(elem); } return ffElems; };
    utils.debounceMethod = function(_class, methodName, threshold) { var method = _class.prototype[methodName]; var timeoutName = methodName + 'Timeout';
        _class.prototype[methodName] = function() { var timeout = this[timeoutName]; if (timeout) clearTimeout(timeout); var args = arguments; var _this = this;
            this[timeoutName] = setTimeout(function() { method.apply(_this, args);
                delete _this[timeoutName]; }, threshold || 100); }; };
    utils.toDashed = function(str) { return str.replace(/(.)([A-Z])/g, function(match, $1, $2) { return $1 + '-' + $2; }).toLowerCase(); }; var console = window.console;
    utils.htmlInit = function(WidgetClass, namespace) { docReady(function() { var dashedNamespace = utils.toDashed(namespace); var elems = document.querySelectorAll('.js-' + dashedNamespace); var dataAttr = 'data-' + dashedNamespace + '-options'; for (var i = 0, len = elems.length; i < len; i++) { var elem = elems[i]; var attr = elem.getAttribute(dataAttr); var options; try { options = attr && JSON.parse(attr); } catch (error) { if (console) console.error('Error parsing ' + dataAttr + ' on ' + elem.nodeName.toLowerCase() + (elem.id ? '#' + elem.id : '') + ': ' + error); continue; } var instance = new WidgetClass(elem, options); var jQuery = window.jQuery; if (jQuery) jQuery.data(elem, namespace, instance); } }); }; return utils; }));
(function(window, factory) { 'use strict'; if (typeof define === 'function' && define.amd) define('outlayer/item', ['eventEmitter/EventEmitter', 'get-size/get-size', 'get-style-property/get-style-property', 'fizzy-ui-utils/utils'], function(EventEmitter, getSize, getStyleProperty, utils) { return factory(window, EventEmitter, getSize, getStyleProperty, utils); });
    else if (typeof exports === 'object') module.exports = factory(window, require('wolfy87-eventemitter'), require('get-size'), require('desandro-get-style-property'), require('fizzy-ui-utils'));
    else { window.Outlayer = {};
        window.Outlayer.Item = factory(window, window.EventEmitter, window.getSize, window.getStyleProperty, window.fizzyUIUtils); } }(window, function factory(window, EventEmitter, getSize, getStyleProperty, utils) { 'use strict'; var getComputedStyle = window.getComputedStyle; var getStyle = getComputedStyle ? function(elem) { return getComputedStyle(elem, null); } : function(elem) { return elem.currentStyle; };

    function isEmptyObj(obj) { for (var prop in obj) return false;
        prop = null; return true; } var transitionProperty = getStyleProperty('transition'); var transformProperty = getStyleProperty('transform'); var supportsCSS3 = transitionProperty && transformProperty; var is3d = !!getStyleProperty('perspective'); var transitionEndEvent = { WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend', OTransition: 'otransitionend', transition: 'transitionend' }[transitionProperty]; var prefixableProperties = ['transform', 'transition', 'transitionDuration', 'transitionProperty']; var vendorProperties = (function() { var cache = {}; for (var i = 0, len = prefixableProperties.length; i < len; i++) { var prop = prefixableProperties[i]; var supportedProp = getStyleProperty(prop); if (supportedProp && supportedProp !== prop) cache[prop] = supportedProp; } return cache; })();

    function Item(element, layout) { if (!element) return;
        this.element = element;
        this.layout = layout;
        this.position = { x: 0, y: 0 };
        this._create(); }
    utils.extend(Item.prototype, EventEmitter.prototype);
    Item.prototype._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} };
        this.css({ position: 'absolute' }); };
    Item.prototype.handleEvent = function(event) { var method = 'on' + event.type; if (this[method]) this[method](event); };
    Item.prototype.getSize = function() { this.size = getSize(this.element); };
    Item.prototype.css = function(style) { var elemStyle = this.element.style; for (var prop in style) { var supportedProp = vendorProperties[prop] || prop;
            elemStyle[supportedProp] = style[prop]; } };
    Item.prototype.getPosition = function() { var style = getStyle(this.element); var layoutOptions = this.layout.options; var isOriginLeft = layoutOptions.isOriginLeft; var isOriginTop = layoutOptions.isOriginTop; var xValue = style[isOriginLeft ? 'left' : 'right']; var yValue = style[isOriginTop ? 'top' : 'bottom']; var x = parseInt(xValue, 10); var y = parseInt(yValue, 10); var layoutSize = this.layout.size;
        x = xValue.indexOf('%') != -1 ? (x / 100) * layoutSize.width : x;
        y = yValue.indexOf('%') != -1 ? (y / 100) * layoutSize.height : y;
        x = isNaN(x) ? 0 : x;
        y = isNaN(y) ? 0 : y;
        x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
        y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
        this.position.x = x;
        this.position.y = y; };
    Item.prototype.layoutPosition = function() { var layoutSize = this.layout.size; var layoutOptions = this.layout.options; var style = {}; var xPadding = layoutOptions.isOriginLeft ? 'paddingLeft' : 'paddingRight'; var xProperty = layoutOptions.isOriginLeft ? 'left' : 'right'; var xResetProperty = layoutOptions.isOriginLeft ? 'right' : 'left'; var x = this.position.x + layoutSize[xPadding];
        style[xProperty] = this.getXValue(x);
        style[xResetProperty] = ''; var yPadding = layoutOptions.isOriginTop ? 'paddingTop' : 'paddingBottom'; var yProperty = layoutOptions.isOriginTop ? 'top' : 'bottom'; var yResetProperty = layoutOptions.isOriginTop ? 'bottom' : 'top'; var y = this.position.y + layoutSize[yPadding];
        style[yProperty] = this.getYValue(y);
        style[yResetProperty] = '';
        this.css(style);
        this.emitEvent('layout', [this]); };
    Item.prototype.getXValue = function(x) { var layoutOptions = this.layout.options; return layoutOptions.percentPosition && !layoutOptions.isHorizontal ? ((x / this.layout.size.width) * 100) + '%' : x + 'px'; };
    Item.prototype.getYValue = function(y) { var layoutOptions = this.layout.options; return layoutOptions.percentPosition && layoutOptions.isHorizontal ? ((y / this.layout.size.height) * 100) + '%' : y + 'px'; };
    Item.prototype._transitionTo = function(x, y) { this.getPosition(); var curX = this.position.x; var curY = this.position.y; var compareX = parseInt(x, 10); var compareY = parseInt(y, 10); var didNotMove = compareX === this.position.x && compareY === this.position.y;
        this.setPosition(x, y); if (didNotMove && !this.isTransitioning) { this.layoutPosition(); return; } var transX = x - curX; var transY = y - curY; var transitionStyle = {};
        transitionStyle.transform = this.getTranslate(transX, transY);
        this.transition({ to: transitionStyle, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: true }); };
    Item.prototype.getTranslate = function(x, y) { var layoutOptions = this.layout.options;
        x = layoutOptions.isOriginLeft ? x : -x;
        y = layoutOptions.isOriginTop ? y : -y;
        x = this.getXValue(x);
        y = this.getYValue(y); if (is3d) return 'translate3d(' + x + ', ' + y + ', 0)'; return 'translate(' + x + ', ' + y + ')'; };
    Item.prototype.goTo = function(x, y) { this.setPosition(x, y);
        this.layoutPosition(); };
    Item.prototype.moveTo = supportsCSS3 ? Item.prototype._transitionTo : Item.prototype.goTo;
    Item.prototype.setPosition = function(x, y) { this.position.x = parseInt(x, 10);
        this.position.y = parseInt(y, 10); };
    Item.prototype._nonTransition = function(args) { this.css(args.to); if (args.isCleaning) this._removeStyles(args.to); for (var prop in args.onTransitionEnd) args.onTransitionEnd[prop].call(this); };
    Item.prototype._transition = function(args) { if (!parseFloat(this.layout.options.transitionDuration)) { this._nonTransition(args); return; } var _transition = this._transn; for (var prop in args.onTransitionEnd) _transition.onEnd[prop] = args.onTransitionEnd[prop]; for (prop in args.to) { _transition.ingProperties[prop] = true; if (args.isCleaning) _transition.clean[prop] = true; } if (args.from) { this.css(args.from); var h = this.element.offsetHeight;
            h = null; }
        this.enableTransition(args.to);
        this.css(args.to);
        this.isTransitioning = true; };

    function toDashedAll(str) { return str.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); }); } var transitionProps = 'opacity,' + toDashedAll(vendorProperties.transform || 'transform');
    Item.prototype.enableTransition = function() { if (this.isTransitioning) return;
        this.css({ transitionProperty: transitionProps, transitionDuration: this.layout.options.transitionDuration });
        this.element.addEventListener(transitionEndEvent, this, false); };
    Item.prototype.transition = Item.prototype[transitionProperty ? '_transition' : '_nonTransition'];
    Item.prototype.onwebkitTransitionEnd = function(event) { this.ontransitionend(event); };
    Item.prototype.onotransitionend = function(event) { this.ontransitionend(event); }; var dashedVendorProperties = { '-webkit-transform': 'transform', '-moz-transform': 'transform', '-o-transform': 'transform' };
    Item.prototype.ontransitionend = function(event) { if (event.target !== this.element) return; var _transition = this._transn; var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
        delete _transition.ingProperties[propertyName]; if (isEmptyObj(_transition.ingProperties)) this.disableTransition(); if (propertyName in _transition.clean) { this.element.style[event.propertyName] = '';
            delete _transition.clean[propertyName]; } if (propertyName in _transition.onEnd) { var onTransitionEnd = _transition.onEnd[propertyName];
            onTransitionEnd.call(this);
            delete _transition.onEnd[propertyName]; }
        this.emitEvent('transitionEnd', [this]); };
    Item.prototype.disableTransition = function() { this.removeTransitionStyles();
        this.element.removeEventListener(transitionEndEvent, this, false);
        this.isTransitioning = false; };
    Item.prototype._removeStyles = function(style) { var cleanStyle = {}; for (var prop in style) cleanStyle[prop] = '';
        this.css(cleanStyle); }; var cleanTransitionStyle = { transitionProperty: '', transitionDuration: '' };
    Item.prototype.removeTransitionStyles = function() { this.css(cleanTransitionStyle); };
    Item.prototype.removeElem = function() { this.element.parentNode.removeChild(this.element);
        this.css({ display: '' });
        this.emitEvent('remove', [this]); };
    Item.prototype.remove = function() { if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) { this.removeElem(); return; } var _this = this;
        this.once('transitionEnd', function() { _this.removeElem(); });
        this.hide(); };
    Item.prototype.reveal = function() { delete this.isHidden;
        this.css({ display: '' }); var options = this.layout.options; var onTransitionEnd = {}; var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
        onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
        this.transition({ from: options.hiddenStyle, to: options.visibleStyle, isCleaning: true, onTransitionEnd: onTransitionEnd }); };
    Item.prototype.onRevealTransitionEnd = function() { if (!this.isHidden) this.emitEvent('reveal'); };
    Item.prototype.getHideRevealTransitionEndProperty = function(styleProperty) { var optionStyle = this.layout.options[styleProperty]; if (optionStyle.opacity) return 'opacity'; for (var prop in optionStyle) return prop; };
    Item.prototype.hide = function() { this.isHidden = true;
        this.css({ display: '' }); var options = this.layout.options; var onTransitionEnd = {}; var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
        onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
        this.transition({ from: options.visibleStyle, to: options.hiddenStyle, isCleaning: true, onTransitionEnd: onTransitionEnd }); };
    Item.prototype.onHideTransitionEnd = function() { if (this.isHidden) { this.css({ display: 'none' });
            this.emitEvent('hide'); } };
    Item.prototype.destroy = function() { this.css({ position: '', left: '', right: '', top: '', bottom: '', transition: '', transform: '' }); }; return Item; }));
(function(window, factory) { 'use strict'; if (typeof define == 'function' && define.amd) define('outlayer/outlayer', ['eventie/eventie', 'eventEmitter/EventEmitter', 'get-size/get-size', 'fizzy-ui-utils/utils', './item'], function(eventie, EventEmitter, getSize, utils, Item) { return factory(window, eventie, EventEmitter, getSize, utils, Item); });
    else if (typeof exports == 'object') module.exports = factory(window, require('eventie'), require('wolfy87-eventemitter'), require('get-size'), require('fizzy-ui-utils'), require('./item'));
    else window.Outlayer = factory(window, window.eventie, window.EventEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item); }(window, function factory(window, eventie, EventEmitter, getSize, utils, Item) { 'use strict'; var console = window.console; var jQuery = window.jQuery; var noop = function() {}; var GUID = 0; var instances = {};

    function Outlayer(element, options) { var queryElement = utils.getQueryElement(element); if (!queryElement) { if (console) console.error('Bad element for ' + this.constructor.namespace + ': ' + (queryElement || element)); return; }
        this.element = queryElement; if (jQuery) this.$element = jQuery(this.element);
        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options); var id = ++GUID;
        this.element.outlayerGUID = id;
        instances[id] = this;
        this._create(); if (this.options.isInitLayout) this.layout(); }
    Outlayer.namespace = 'outlayer';
    Outlayer.Item = Item;
    Outlayer.defaults = { containerStyle: { position: 'relative' }, isInitLayout: true, isOriginLeft: true, isOriginTop: true, isResizeBound: true, isResizingContainer: true, transitionDuration: '0.4s', hiddenStyle: { opacity: 0, transform: 'scale(0.001)' }, visibleStyle: { opacity: 1, transform: 'scale(1)' } };
    utils.extend(Outlayer.prototype, EventEmitter.prototype);
    Outlayer.prototype.option = function(opts) { utils.extend(this.options, opts); };
    Outlayer.prototype._create = function() { this.reloadItems();
        this.stamps = [];
        this.stamp(this.options.stamp);
        utils.extend(this.element.style, this.options.containerStyle); if (this.options.isResizeBound) this.bindResize(); };
    Outlayer.prototype.reloadItems = function() { this.items = this._itemize(this.element.children); };
    Outlayer.prototype._itemize = function(elems) { var itemElems = this._filterFindItemElements(elems); var Item = this.constructor.Item; var items = []; for (var i = 0, len = itemElems.length; i < len; i++) { var elem = itemElems[i]; var item = new Item(elem, this);
            items.push(item); } return items; };
    Outlayer.prototype._filterFindItemElements = function(elems) { return utils.filterFindElements(elems, this.options.itemSelector); };
    Outlayer.prototype.getItemElements = function() { var elems = []; for (var i = 0, len = this.items.length; i < len; i++) elems.push(this.items[i].element); return elems; };
    Outlayer.prototype.layout = function() { this._resetLayout();
        this._manageStamps(); var isInstant = this.options.isLayoutInstant !== undefined ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, isInstant);
        this._isLayoutInited = true; };
    Outlayer.prototype._init = Outlayer.prototype.layout;
    Outlayer.prototype._resetLayout = function() { this.getSize(); };
    Outlayer.prototype.getSize = function() { this.size = getSize(this.element); };
    Outlayer.prototype._getMeasurement = function(measurement, size) { var option = this.options[measurement]; var elem; if (!option) this[measurement] = 0;
        else { if (typeof option === 'string') elem = this.element.querySelector(option);
            else if (utils.isElement(option)) elem = option;
            this[measurement] = elem ? getSize(elem)[size] : option; } };
    Outlayer.prototype.layoutItems = function(items, isInstant) { items = this._getItemsForLayout(items);
        this._layoutItems(items, isInstant);
        this._postLayout(); };
    Outlayer.prototype._getItemsForLayout = function(items) { var layoutItems = []; for (var i = 0, len = items.length; i < len; i++) { var item = items[i]; if (!item.isIgnored) layoutItems.push(item); } return layoutItems; };
    Outlayer.prototype._layoutItems = function(items, isInstant) { this._emitCompleteOnItems('layout', items); if (!items || !items.length) return; var queue = []; for (var i = 0, len = items.length; i < len; i++) { var item = items[i]; var position = this._getItemLayoutPosition(item);
            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push(position); }
        this._processLayoutQueue(queue); };
    Outlayer.prototype._getItemLayoutPosition = function() { return { x: 0, y: 0 }; };
    Outlayer.prototype._processLayoutQueue = function(queue) { for (var i = 0, len = queue.length; i < len; i++) { var obj = queue[i];
            this._positionItem(obj.item, obj.x, obj.y, obj.isInstant); } };
    Outlayer.prototype._positionItem = function(item, x, y, isInstant) { if (isInstant) item.goTo(x, y);
        else item.moveTo(x, y); };
    Outlayer.prototype._postLayout = function() { this.resizeContainer(); };
    Outlayer.prototype.resizeContainer = function() { if (!this.options.isResizingContainer) return; var size = this._getContainerSize(); if (size) { this._setContainerMeasure(size.width, true);
            this._setContainerMeasure(size.height, false); } };
    Outlayer.prototype._getContainerSize = noop;
    Outlayer.prototype._setContainerMeasure = function(measure, isWidth) { if (measure === undefined) return; var elemSize = this.size; if (elemSize.isBorderBox) measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
        measure = Math.max(measure, 0);
        this.element.style[isWidth ? 'width' : 'height'] = measure + 'px'; };
    Outlayer.prototype._emitCompleteOnItems = function(eventName, items) { var _this = this;

        function onComplete() { _this.dispatchEvent(eventName + 'Complete', null, [items]); } var count = items.length; if (!items || !count) { onComplete(); return; } var doneCount = 0;

        function tick() { doneCount++; if (doneCount === count) onComplete(); } for (var i = 0, len = items.length; i < len; i++) { var item = items[i];
            item.once(eventName, tick); } };
    Outlayer.prototype.dispatchEvent = function(type, event, args) { var emitArgs = event ? [event].concat(args) : args;
        this.emitEvent(type, emitArgs); if (jQuery) { this.$element = this.$element || jQuery(this.element); if (event) { var $event = jQuery.Event(event);
                $event.type = type;
                this.$element.trigger($event, args); } else this.$element.trigger(type, args); } };
    Outlayer.prototype.ignore = function(elem) { var item = this.getItem(elem); if (item) item.isIgnored = true; };
    Outlayer.prototype.unignore = function(elem) { var item = this.getItem(elem); if (item) delete item.isIgnored; };
    Outlayer.prototype.stamp = function(elems) { elems = this._find(elems); if (!elems) return;
        this.stamps = this.stamps.concat(elems); for (var i = 0, len = elems.length; i < len; i++) { var elem = elems[i];
            this.ignore(elem); } };
    Outlayer.prototype.unstamp = function(elems) { elems = this._find(elems); if (!elems) return; for (var i = 0, len = elems.length; i < len; i++) { var elem = elems[i];
            utils.removeFrom(this.stamps, elem);
            this.unignore(elem); } };
    Outlayer.prototype._find = function(elems) { if (!elems) return; if (typeof elems === 'string') elems = this.element.querySelectorAll(elems);
        elems = utils.makeArray(elems); return elems; };
    Outlayer.prototype._manageStamps = function() { if (!this.stamps || !this.stamps.length) return;
        this._getBoundingRect(); for (var i = 0, len = this.stamps.length; i < len; i++) { var stamp = this.stamps[i];
            this._manageStamp(stamp); } };
    Outlayer.prototype._getBoundingRect = function() { var boundingRect = this.element.getBoundingClientRect(); var size = this.size;
        this._boundingRect = { left: boundingRect.left + size.paddingLeft + size.borderLeftWidth, top: boundingRect.top + size.paddingTop + size.borderTopWidth, right: boundingRect.right - (size.paddingRight + size.borderRightWidth), bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth) }; };
    Outlayer.prototype._manageStamp = noop;
    Outlayer.prototype._getElementOffset = function(elem) { var boundingRect = elem.getBoundingClientRect(); var thisRect = this._boundingRect; var size = getSize(elem); var offset = { left: boundingRect.left - thisRect.left - size.marginLeft, top: boundingRect.top - thisRect.top - size.marginTop, right: thisRect.right - boundingRect.right - size.marginRight, bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom }; return offset; };
    Outlayer.prototype.handleEvent = function(event) { var method = 'on' + event.type; if (this[method]) this[method](event); };
    Outlayer.prototype.bindResize = function() { if (this.isResizeBound) return;
        eventie.bind(window, 'resize', this);
        this.isResizeBound = true; };
    Outlayer.prototype.unbindResize = function() { if (this.isResizeBound) eventie.unbind(window, 'resize', this);
        this.isResizeBound = false; };
    Outlayer.prototype.onresize = function() { if (this.resizeTimeout) clearTimeout(this.resizeTimeout); var _this = this;

        function delayed() { _this.resize();
            delete _this.resizeTimeout; }
        this.resizeTimeout = setTimeout(delayed, 100); };
    Outlayer.prototype.resize = function() { if (!this.isResizeBound || !this.needsResizeLayout()) return;
        this.layout(); };
    Outlayer.prototype.needsResizeLayout = function() { var size = getSize(this.element); var hasSizes = this.size && size; return hasSizes && size.innerWidth !== this.size.innerWidth; };
    Outlayer.prototype.addItems = function(elems) { var items = this._itemize(elems); if (items.length) this.items = this.items.concat(items); return items; };
    Outlayer.prototype.appended = function(elems) { var items = this.addItems(elems); if (!items.length) return;
        this.layoutItems(items, true);
        this.reveal(items); };
    Outlayer.prototype.prepended = function(elems) { var items = this._itemize(elems); if (!items.length) return; var previousItems = this.items.slice(0);
        this.items = items.concat(previousItems);
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(items, true);
        this.reveal(items);
        this.layoutItems(previousItems); };
    Outlayer.prototype.reveal = function(items) { this._emitCompleteOnItems('reveal', items); var len = items && items.length; for (var i = 0; len && i < len; i++) { var item = items[i];
            item.reveal(); } };
    Outlayer.prototype.hide = function(items) { this._emitCompleteOnItems('hide', items); var len = items && items.length; for (var i = 0; len && i < len; i++) { var item = items[i];
            item.hide(); } };
    Outlayer.prototype.revealItemElements = function(elems) { var items = this.getItems(elems);
        this.reveal(items); };
    Outlayer.prototype.hideItemElements = function(elems) { var items = this.getItems(elems);
        this.hide(items); };
    Outlayer.prototype.getItem = function(elem) { for (var i = 0, len = this.items.length; i < len; i++) { var item = this.items[i]; if (item.element === elem) return item; } };
    Outlayer.prototype.getItems = function(elems) { elems = utils.makeArray(elems); var items = []; for (var i = 0, len = elems.length; i < len; i++) { var elem = elems[i]; var item = this.getItem(elem); if (item) items.push(item); } return items; };
    Outlayer.prototype.remove = function(elems) { var removeItems = this.getItems(elems);
        this._emitCompleteOnItems('remove', removeItems); if (!removeItems || !removeItems.length) return; for (var i = 0, len = removeItems.length; i < len; i++) { var item = removeItems[i];
            item.remove();
            utils.removeFrom(this.items, item); } };
    Outlayer.prototype.destroy = function() { var style = this.element.style;
        style.height = '';
        style.position = '';
        style.width = ''; for (var i = 0, len = this.items.length; i < len; i++) { var item = this.items[i];
            item.destroy(); }
        this.unbindResize(); var id = this.element.outlayerGUID;
        delete instances[id];
        delete this.element.outlayerGUID; if (jQuery) jQuery.removeData(this.element, this.constructor.namespace); };
    Outlayer.data = function(elem) { elem = utils.getQueryElement(elem); var id = elem && elem.outlayerGUID; return id && instances[id]; };
    Outlayer.create = function(namespace, options) {
        function Layout() { Outlayer.apply(this, arguments); } if (Object.create) Layout.prototype = Object.create(Outlayer.prototype);
        else utils.extend(Layout.prototype, Outlayer.prototype);
        Layout.prototype.constructor = Layout;
        Layout.defaults = utils.extend({}, Outlayer.defaults);
        utils.extend(Layout.defaults, options);
        Layout.prototype.settings = {};
        Layout.namespace = namespace;
        Layout.data = Outlayer.data;
        Layout.Item = function LayoutItem() { Item.apply(this, arguments); };
        Layout.Item.prototype = new Item();
        utils.htmlInit(Layout, namespace); if (jQuery && jQuery.bridget) jQuery.bridget(namespace, Layout); return Layout; };
    Outlayer.Item = Item; return Outlayer; }));
(function(window, factory) { 'use strict'; if (typeof define == 'function' && define.amd) define('isotope/js/item', ['outlayer/outlayer'], factory);
    else if (typeof exports == 'object') module.exports = factory(require('outlayer'));
    else { window.Isotope = window.Isotope || {};
        window.Isotope.Item = factory(window.Outlayer); } }(window, function factory(Outlayer) { 'use strict';

    function Item() { Outlayer.Item.apply(this, arguments); }
    Item.prototype = new Outlayer.Item();
    Item.prototype._create = function() { this.id = this.layout.itemGUID++;
        Outlayer.Item.prototype._create.call(this);
        this.sortData = {}; };
    Item.prototype.updateSortData = function() { if (this.isIgnored) return;
        this.sortData.id = this.id;
        this.sortData['original-order'] = this.id;
        this.sortData.random = Math.random(); var getSortData = this.layout.options.getSortData; var sorters = this.layout._sorters; for (var key in getSortData) { var sorter = sorters[key];
            this.sortData[key] = sorter(this.element, this); } }; var _destroy = Item.prototype.destroy;
    Item.prototype.destroy = function() { _destroy.apply(this, arguments);
        this.css({ display: '' }); }; return Item; }));
(function(window, factory) { 'use strict'; if (typeof define == 'function' && define.amd) define('isotope/js/layout-mode', ['get-size/get-size', 'outlayer/outlayer'], factory);
    else if (typeof exports == 'object') module.exports = factory(require('get-size'), require('outlayer'));
    else { window.Isotope = window.Isotope || {};
        window.Isotope.LayoutMode = factory(window.getSize, window.Outlayer); } }(window, function factory(getSize, Outlayer) { 'use strict';

    function LayoutMode(isotope) { this.isotope = isotope; if (isotope) { this.options = isotope.options[this.namespace];
            this.element = isotope.element;
            this.items = isotope.filteredItems;
            this.size = isotope.size; } }(function() { var facadeMethods = ['_resetLayout', '_getItemLayoutPosition', '_manageStamp', '_getContainerSize', '_getElementOffset', 'needsResizeLayout']; for (var i = 0, len = facadeMethods.length; i < len; i++) { var methodName = facadeMethods[i];
            LayoutMode.prototype[methodName] = getOutlayerMethod(methodName); }

        function getOutlayerMethod(methodName) { return function() { return Outlayer.prototype[methodName].apply(this.isotope, arguments); }; } })();
    LayoutMode.prototype.needsVerticalResizeLayout = function() { var size = getSize(this.isotope.element); var hasSizes = this.isotope.size && size; return hasSizes && size.innerHeight != this.isotope.size.innerHeight; };
    LayoutMode.prototype._getMeasurement = function() { this.isotope._getMeasurement.apply(this, arguments); };
    LayoutMode.prototype.getColumnWidth = function() { this.getSegmentSize('column', 'Width'); };
    LayoutMode.prototype.getRowHeight = function() { this.getSegmentSize('row', 'Height'); };
    LayoutMode.prototype.getSegmentSize = function(segment, size) { var segmentName = segment + size; var outerSize = 'outer' + size;
        this._getMeasurement(segmentName, outerSize); if (this[segmentName]) return; var firstItemSize = this.getFirstItemSize();
        this[segmentName] = firstItemSize && firstItemSize[outerSize] || this.isotope.size['inner' + size]; };
    LayoutMode.prototype.getFirstItemSize = function() { var firstItem = this.isotope.filteredItems[0]; return firstItem && firstItem.element && getSize(firstItem.element); };
    LayoutMode.prototype.layout = function() { this.isotope.layout.apply(this.isotope, arguments); };
    LayoutMode.prototype.getSize = function() { this.isotope.getSize();
        this.size = this.isotope.size; };
    LayoutMode.modes = {};
    LayoutMode.create = function(namespace, options) {
        function Mode() { LayoutMode.apply(this, arguments); }
        Mode.prototype = new LayoutMode(); if (options) Mode.options = options;
        Mode.prototype.namespace = namespace;
        LayoutMode.modes[namespace] = Mode; return Mode; }; return LayoutMode; }));
(function(window, factory) { 'use strict'; if (typeof define === 'function' && define.amd) define('masonry/masonry', ['outlayer/outlayer', 'get-size/get-size', 'fizzy-ui-utils/utils'], factory);
    else if (typeof exports === 'object') module.exports = factory(require('outlayer'), require('get-size'), require('fizzy-ui-utils'));
    else window.Masonry = factory(window.Outlayer, window.getSize, window.fizzyUIUtils); }(window, function factory(Outlayer, getSize, utils) { var Masonry = Outlayer.create('masonry');
    Masonry.prototype._resetLayout = function() { this.getSize();
        this._getMeasurement('columnWidth', 'outerWidth');
        this._getMeasurement('gutter', 'outerWidth');
        this.measureColumns(); var i = this.cols;
        this.colYs = []; while (i--) this.colYs.push(0);
        this.maxY = 0; };
    Masonry.prototype.measureColumns = function() { this.getContainerWidth(); if (!this.columnWidth) { var firstItem = this.items[0]; var firstItemElem = firstItem && firstItem.element;
            this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || this.containerWidth; } var columnWidth = this.columnWidth += this.gutter; var containerWidth = this.containerWidth + this.gutter; var cols = containerWidth / columnWidth; var excess = columnWidth - containerWidth % columnWidth; var mathMethod = excess && excess < 1 ? 'round' : 'floor';
        cols = Math[mathMethod](cols);
        this.cols = Math.max(cols, 1); };
    Masonry.prototype.getContainerWidth = function() { var container = this.options.isFitWidth ? this.element.parentNode : this.element; var size = getSize(container);
        this.containerWidth = size && size.innerWidth; };
    Masonry.prototype._getItemLayoutPosition = function(item) { item.getSize(); var remainder = item.size.outerWidth % this.columnWidth; var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil'; var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
        colSpan = Math.min(colSpan, this.cols); var colGroup = this._getColGroup(colSpan); var minimumY = Math.min.apply(Math, colGroup); var shortColIndex = utils.indexOf(colGroup, minimumY); var position = { x: this.columnWidth * shortColIndex, y: minimumY }; var setHeight = minimumY + item.size.outerHeight; var setSpan = this.cols + 1 - colGroup.length; for (var i = 0; i < setSpan; i++) this.colYs[shortColIndex + i] = setHeight; return position; };
    Masonry.prototype._getColGroup = function(colSpan) { if (colSpan < 2) return this.colYs; var colGroup = []; var groupCount = this.cols + 1 - colSpan; for (var i = 0; i < groupCount; i++) { var groupColYs = this.colYs.slice(i, i + colSpan);
            colGroup[i] = Math.max.apply(Math, groupColYs); } return colGroup; };
    Masonry.prototype._manageStamp = function(stamp) { var stampSize = getSize(stamp); var offset = this._getElementOffset(stamp); var firstX = this.options.isOriginLeft ? offset.left : offset.right; var lastX = firstX + stampSize.outerWidth; var firstCol = Math.floor(firstX / this.columnWidth);
        firstCol = Math.max(0, firstCol); var lastCol = Math.floor(lastX / this.columnWidth);
        lastCol -= lastX % this.columnWidth ? 0 : 1;
        lastCol = Math.min(this.cols - 1, lastCol); var stampMaxY = (this.options.isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight; for (var i = firstCol; i <= lastCol; i++) this.colYs[i] = Math.max(stampMaxY, this.colYs[i]); };
    Masonry.prototype._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs); var size = { height: this.maxY }; if (this.options.isFitWidth) size.width = this._getContainerFitWidth(); return size; };
    Masonry.prototype._getContainerFitWidth = function() { var unusedCols = 0; var i = this.cols; while (--i) { if (this.colYs[i] !== 0) break;
            unusedCols++; } return (this.cols - unusedCols) * this.columnWidth - this.gutter; };
    Masonry.prototype.needsResizeLayout = function() { var previousWidth = this.containerWidth;
        this.getContainerWidth(); return previousWidth !== this.containerWidth; }; return Masonry; }));
(function(window, factory) { 'use strict'; if (typeof define == 'function' && define.amd) define('isotope/js/layout-modes/masonry', ['../layout-mode', 'masonry/masonry'], factory);
    else if (typeof exports == 'object') module.exports = factory(require('../layout-mode'), require('masonry-layout'));
    else factory(window.Isotope.LayoutMode, window.Masonry); }(window, function factory(LayoutMode, Masonry) { 'use strict';

    function extend(a, b) { for (var prop in b) a[prop] = b[prop]; return a; } var MasonryMode = LayoutMode.create('masonry'); var _getElementOffset = MasonryMode.prototype._getElementOffset; var layout = MasonryMode.prototype.layout; var _getMeasurement = MasonryMode.prototype._getMeasurement;
    extend(MasonryMode.prototype, Masonry.prototype);
    MasonryMode.prototype._getElementOffset = _getElementOffset;
    MasonryMode.prototype.layout = layout;
    MasonryMode.prototype._getMeasurement = _getMeasurement; var measureColumns = MasonryMode.prototype.measureColumns;
    MasonryMode.prototype.measureColumns = function() { this.items = this.isotope.filteredItems;
        measureColumns.call(this); }; var _manageStamp = MasonryMode.prototype._manageStamp;
    MasonryMode.prototype._manageStamp = function() { this.options.isOriginLeft = this.isotope.options.isOriginLeft;
        this.options.isOriginTop = this.isotope.options.isOriginTop;
        _manageStamp.apply(this, arguments); }; return MasonryMode; }));
(function(window, factory) { 'use strict'; if (typeof define == 'function' && define.amd) define('isotope/js/layout-modes/fit-rows', ['../layout-mode'], factory);
    else if (typeof exports == 'object') module.exports = factory(require('../layout-mode'));
    else factory(window.Isotope.LayoutMode); }(window, function factory(LayoutMode) { 'use strict'; var FitRows = LayoutMode.create('fitRows');
    FitRows.prototype._resetLayout = function() { this.x = 0;
        this.y = 0;
        this.maxY = 0;
        this._getMeasurement('gutter', 'outerWidth'); };
    FitRows.prototype._getItemLayoutPosition = function(item) { item.getSize(); var itemWidth = item.size.outerWidth + this.gutter; var containerWidth = this.isotope.size.innerWidth + this.gutter; if (this.x !== 0 && itemWidth + this.x > containerWidth) { this.x = 0;
            this.y = this.maxY; } var position = { x: this.x, y: this.y };
        this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
        this.x += itemWidth; return position; };
    FitRows.prototype._getContainerSize = function() { return { height: this.maxY }; }; return FitRows; }));
(function(window, factory) { 'use strict'; if (typeof define == 'function' && define.amd) define('isotope/js/layout-modes/vertical', ['../layout-mode'], factory);
    else if (typeof exports == 'object') module.exports = factory(require('../layout-mode'));
    else factory(window.Isotope.LayoutMode); }(window, function factory(LayoutMode) { 'use strict'; var Vertical = LayoutMode.create('vertical', { horizontalAlignment: 0 });
    Vertical.prototype._resetLayout = function() { this.y = 0; };
    Vertical.prototype._getItemLayoutPosition = function(item) { item.getSize(); var x = (this.isotope.size.innerWidth - item.size.outerWidth) * this.options.horizontalAlignment; var y = this.y;
        this.y += item.size.outerHeight; return { x: x, y: y }; };
    Vertical.prototype._getContainerSize = function() { return { height: this.y }; }; return Vertical; }));
(function(window, factory) { 'use strict'; if (typeof define == 'function' && define.amd) define(['outlayer/outlayer', 'get-size/get-size', 'matches-selector/matches-selector', 'fizzy-ui-utils/utils', 'isotope/js/item', 'isotope/js/layout-mode', 'isotope/js/layout-modes/masonry', 'isotope/js/layout-modes/fit-rows', 'isotope/js/layout-modes/vertical'], function(Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) { return factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode); });
    else if (typeof exports == 'object') module.exports = factory(window, require('outlayer'), require('get-size'), require('desandro-matches-selector'), require('fizzy-ui-utils'), require('./item'), require('./layout-mode'), require('./layout-modes/masonry'), require('./layout-modes/fit-rows'), require('./layout-modes/vertical'));
    else window.Isotope = factory(window, window.Outlayer, window.getSize, window.matchesSelector, window.fizzyUIUtils, window.Isotope.Item, window.Isotope.LayoutMode); }(window, function factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) { var jQuery = window.jQuery; var trim = String.prototype.trim ? function(str) { return str.trim(); } : function(str) { return str.replace(/^\s+|\s+$/g, ''); }; var docElem = document.documentElement; var getText = docElem.textContent ? function(elem) { return elem.textContent; } : function(elem) { return elem.innerText; }; var Isotope = Outlayer.create('isotope', { layoutMode: "masonry", isJQueryFiltering: true, sortAscending: true });
    Isotope.Item = Item;
    Isotope.LayoutMode = LayoutMode;
    Isotope.prototype._create = function() { this.itemGUID = 0;
        this._sorters = {};
        this._getSorters();
        Outlayer.prototype._create.call(this);
        this.modes = {};
        this.filteredItems = this.items;
        this.sortHistory = ['original-order']; for (var name in LayoutMode.modes) this._initLayoutMode(name); };
    Isotope.prototype.reloadItems = function() { this.itemGUID = 0;
        Outlayer.prototype.reloadItems.call(this); };
    Isotope.prototype._itemize = function() { var items = Outlayer.prototype._itemize.apply(this, arguments); for (var i = 0, len = items.length; i < len; i++) { var item = items[i];
            item.id = this.itemGUID++; }
        this._updateItemsSortData(items); return items; };
    Isotope.prototype._initLayoutMode = function(name) { var Mode = LayoutMode.modes[name]; var initialOpts = this.options[name] || {};
        this.options[name] = Mode.options ? utils.extend(Mode.options, initialOpts) : initialOpts;
        this.modes[name] = new Mode(this); };
    Isotope.prototype.layout = function() { if (!this._isLayoutInited && this.options.isInitLayout) { this.arrange(); return; }
        this._layout(); };
    Isotope.prototype._layout = function() { var isInstant = this._getIsInstant();
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(this.filteredItems, isInstant);
        this._isLayoutInited = true; };
    Isotope.prototype.arrange = function(opts) { this.option(opts);
        this._getIsInstant(); var filtered = this._filter(this.items);
        this.filteredItems = filtered.matches; var _this = this;

        function hideReveal() { _this.reveal(filtered.needReveal);
            _this.hide(filtered.needHide); }
        this._bindArrangeComplete(); if (this._isInstant) this._noTransition(hideReveal);
        else hideReveal();
        this._sort();
        this._layout(); };
    Isotope.prototype._init = Isotope.prototype.arrange;
    Isotope.prototype._getIsInstant = function() { var isInstant = this.options.isLayoutInstant !== undefined ? this.options.isLayoutInstant : !this._isLayoutInited;
        this._isInstant = isInstant; return isInstant; };
    Isotope.prototype._bindArrangeComplete = function() { var isLayoutComplete, isHideComplete, isRevealComplete; var _this = this;

        function arrangeParallelCallback() { if (isLayoutComplete && isHideComplete && isRevealComplete) _this.dispatchEvent('arrangeComplete', null, [_this.filteredItems]); }
        this.once('layoutComplete', function() { isLayoutComplete = true;
            arrangeParallelCallback(); });
        this.once('hideComplete', function() { isHideComplete = true;
            arrangeParallelCallback(); });
        this.once('revealComplete', function() { isRevealComplete = true;
            arrangeParallelCallback(); }); };
    Isotope.prototype._filter = function(items) { var filter = this.options.filter;
        filter = filter || '*'; var matches = []; var hiddenMatched = []; var visibleUnmatched = []; var test = this._getFilterTest(filter); for (var i = 0, len = items.length; i < len; i++) { var item = items[i]; if (item.isIgnored) continue; var isMatched = test(item); if (isMatched) matches.push(item); if (isMatched && item.isHidden) hiddenMatched.push(item);
            else if (!isMatched && !item.isHidden) visibleUnmatched.push(item); } return { matches: matches, needReveal: hiddenMatched, needHide: visibleUnmatched }; };
    Isotope.prototype._getFilterTest = function(filter) { if (jQuery && this.options.isJQueryFiltering) return function(item) { return jQuery(item.element).is(filter); }; if (typeof filter == 'function') return function(item) { return filter(item.element); }; return function(item) { return matchesSelector(item.element, filter); }; };
    Isotope.prototype.updateSortData = function(elems) { var items; if (elems) { elems = utils.makeArray(elems);
            items = this.getItems(elems); } else items = this.items;
        this._getSorters();
        this._updateItemsSortData(items); };
    Isotope.prototype._getSorters = function() { var getSortData = this.options.getSortData; for (var key in getSortData) { var sorter = getSortData[key];
            this._sorters[key] = mungeSorter(sorter); } };
    Isotope.prototype._updateItemsSortData = function(items) { var len = items && items.length; for (var i = 0; len && i < len; i++) { var item = items[i];
            item.updateSortData(); } }; var mungeSorter = (function() {
        function mungeSorter(sorter) { if (typeof sorter != 'string') return sorter; var args = trim(sorter).split(' '); var query = args[0]; var attrMatch = query.match(/^\[(.+)\]$/); var attr = attrMatch && attrMatch[1]; var getValue = getValueGetter(attr, query); var parser = Isotope.sortDataParsers[args[1]];
            sorter = parser ? function(elem) { return elem && parser(getValue(elem)); } : function(elem) { return elem && getValue(elem); }; return sorter; }

        function getValueGetter(attr, query) { var getValue; if (attr) getValue = function(elem) { return elem.getAttribute(attr); };
            else getValue = function(elem) { var child = elem.querySelector(query); return child && getText(child); }; return getValue; } return mungeSorter; })();
    Isotope.sortDataParsers = { 'parseInt': function(val) { return parseInt(val, 10); }, 'parseFloat': function(val) { return parseFloat(val); } };
    Isotope.prototype._sort = function() { var sortByOpt = this.options.sortBy; if (!sortByOpt) return; var sortBys = [].concat.apply(sortByOpt, this.sortHistory); var itemSorter = getItemSorter(sortBys, this.options.sortAscending);
        this.filteredItems.sort(itemSorter); if (sortByOpt != this.sortHistory[0]) this.sortHistory.unshift(sortByOpt); };

    function getItemSorter(sortBys, sortAsc) { return function sorter(itemA, itemB) { for (var i = 0, len = sortBys.length; i < len; i++) { var sortBy = sortBys[i]; var a = itemA.sortData[sortBy]; var b = itemB.sortData[sortBy]; if (a > b || a < b) { var isAscending = sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc; var direction = isAscending ? 1 : -1; return (a > b ? 1 : -1) * direction; } } return 0; }; }
    Isotope.prototype._mode = function() { var layoutMode = this.options.layoutMode; var mode = this.modes[layoutMode]; if (!mode) throw new Error('No layout mode: ' + layoutMode);
        mode.options = this.options[layoutMode]; return mode; };
    Isotope.prototype._resetLayout = function() { Outlayer.prototype._resetLayout.call(this);
        this._mode()._resetLayout(); };
    Isotope.prototype._getItemLayoutPosition = function(item) { return this._mode()._getItemLayoutPosition(item); };
    Isotope.prototype._manageStamp = function(stamp) { this._mode()._manageStamp(stamp); };
    Isotope.prototype._getContainerSize = function() { return this._mode()._getContainerSize(); };
    Isotope.prototype.needsResizeLayout = function() { return this._mode().needsResizeLayout(); };
    Isotope.prototype.appended = function(elems) { var items = this.addItems(elems); if (!items.length) return; var filteredItems = this._filterRevealAdded(items);
        this.filteredItems = this.filteredItems.concat(filteredItems); };
    Isotope.prototype.prepended = function(elems) { var items = this._itemize(elems); if (!items.length) return;
        this._resetLayout();
        this._manageStamps(); var filteredItems = this._filterRevealAdded(items);
        this.layoutItems(this.filteredItems);
        this.filteredItems = filteredItems.concat(this.filteredItems);
        this.items = items.concat(this.items); };
    Isotope.prototype._filterRevealAdded = function(items) { var filtered = this._filter(items);
        this.hide(filtered.needHide);
        this.reveal(filtered.matches);
        this.layoutItems(filtered.matches, true); return filtered.matches; };
    Isotope.prototype.insert = function(elems) { var items = this.addItems(elems); if (!items.length) return; var i, item; var len = items.length; for (i = 0; i < len; i++) { item = items[i];
            this.element.appendChild(item.element); } var filteredInsertItems = this._filter(items).matches; for (i = 0; i < len; i++) items[i].isLayoutInstant = true;
        this.arrange(); for (i = 0; i < len; i++) delete items[i].isLayoutInstant;
        this.reveal(filteredInsertItems); }; var _remove = Isotope.prototype.remove;
    Isotope.prototype.remove = function(elems) { elems = utils.makeArray(elems); var removeItems = this.getItems(elems);
        _remove.call(this, elems); var len = removeItems && removeItems.length; if (!len) return; for (var i = 0; i < len; i++) { var item = removeItems[i];
            utils.removeFrom(this.filteredItems, item); } };
    Isotope.prototype.shuffle = function() { for (var i = 0, len = this.items.length; i < len; i++) { var item = this.items[i];
            item.sortData.random = Math.random(); }
        this.options.sortBy = 'random';
        this._sort();
        this._layout(); };
    Isotope.prototype._noTransition = function(fn) { var transitionDuration = this.options.transitionDuration;
        this.options.transitionDuration = 0; var returnValue = fn.call(this);
        this.options.transitionDuration = transitionDuration; return returnValue; };
    Isotope.prototype.getFilteredItemElements = function() { var elems = []; for (var i = 0, len = this.filteredItems.length; i < len; i++) elems.push(this.filteredItems[i].element); return elems; }; return Isotope; }));

// ==========
// SmoothScroll for websites
// Licensed under the terms of the MIT license.
// ==========
function ssc_init() { if (document.body) { var a = document.body,
            b = document.documentElement,
            c = window.innerHeight,
            d = a.scrollHeight;
        (ssc_root = 0 <= document.compatMode.indexOf("CSS") ? b : a, ssc_activeElement = a, ssc_initdone = !0, top != self) ? ssc_frame = !0: d > c && (a.offsetHeight <= c || b.offsetHeight <= c) && (ssc_root.style.height = "auto", ssc_root.offsetHeight <= c) && (c = document.createElement("div"), c.style.clear = "both", a.appendChild(c));
        ssc_fixedback || (a.style.backgroundAttachment = "scroll", b.style.backgroundAttachment = "scroll");
        ssc_keyboardsupport && ssc_addEvent("keydown", ssc_keydown) } }

function ssc_scrollArray(a, b, c, d) { if (d || (d = 1E3), ssc_directionCheck(b, c), ssc_que.push({ x: b, y: c, lastX: 0 > b ? .99 : -.99, lastY: 0 > c ? .99 : -.99, start: +new Date }), !ssc_pending) { var e = function() { for (var n = +new Date, h = 0, m = 0, k = 0; k < ssc_que.length; k++) { var f = ssc_que[k],
                    l = n - f.start,
                    p = l >= ssc_animtime,
                    g = p ? 1 : l / ssc_animtime;
                ssc_pulseAlgorithm && (g = ssc_pulse(g));
                l = f.x * g - f.lastX >> 0;
                g = f.y * g - f.lastY >> 0;
                h += l;
                m += g;
                f.lastX += l;
                f.lastY += g;
                p && (ssc_que.splice(k, 1), k--) }
            b && (n = a.scrollLeft, a.scrollLeft += h, h && a.scrollLeft === n && (b = 0));
            c && (h = a.scrollTop, a.scrollTop += m, m && a.scrollTop === h && (c = 0));
            b || c || (ssc_que = []);
            ssc_que.length ? setTimeout(e, d / ssc_framerate + 1) : ssc_pending = !1 };
        setTimeout(e, 0);
        ssc_pending = !0 } }

function ssc_wheel(a) { ssc_initdone || ssc_init(); var b = a.target,
        c = ssc_overflowingAncestor(b); if (!c || a.defaultPrevented || ssc_isNodeName(ssc_activeElement, "embed") || ssc_isNodeName(b, "embed") && /\.pdf/i.test(b.src)) return !0; var b = a.wheelDeltaX || 0,
        d = a.wheelDeltaY || 0;
    b || d || (d = a.wheelDelta || 0);
    1.2 < Math.abs(b) && (b *= ssc_stepsize / 120);
    1.2 < Math.abs(d) && (d *= ssc_stepsize / 120);
    ssc_scrollArray(c, -b, -d);
    a.preventDefault() }

function ssc_keydown(a) { var b = a.target,
        c = a.ctrlKey || a.altKey || a.metaKey; if (/input|textarea|embed/i.test(b.nodeName) || b.isContentEditable || a.defaultPrevented || c || ssc_isNodeName(b, "button") && a.keyCode === ssc_key.spacebar) return !0; var d;
    d = b = 0; var c = ssc_overflowingAncestor(ssc_activeElement),
        e = c.clientHeight; switch (c == document.body && (e = window.innerHeight), a.keyCode) {
        case ssc_key.up:
            d = -ssc_arrowscroll; break;
        case ssc_key.down:
            d = ssc_arrowscroll; break;
        case ssc_key.spacebar:
            d = a.shiftKey ? 1 : -1;
            d = -d * e * .9; break;
        case ssc_key.pageup:
            d = .9 * -e; break;
        case ssc_key.pagedown:
            d = .9 * e; break;
        case ssc_key.home:
            d = -c.scrollTop; break;
        case ssc_key.end:
            e = c.scrollHeight - c.scrollTop - e;
            d = 0 < e ? e + 10 : 0; break;
        case ssc_key.left:
            b = -ssc_arrowscroll; break;
        case ssc_key.right:
            b = ssc_arrowscroll; break;
        default:
            return !0 }
    ssc_scrollArray(c, b, d);
    a.preventDefault() }

function ssc_mousedown(a) { ssc_activeElement = a.target }

function ssc_setCache(a, b) { for (var c = a.length; c--;) ssc_cache[ssc_uniqueID(a[c])] = b; return b }

function ssc_overflowingAncestor(a) { var b = [],
        c = ssc_root.scrollHeight;
    do { var d = ssc_cache[ssc_uniqueID(a)]; if (d) return ssc_setCache(b, d); if (b.push(a), c === a.scrollHeight) { if (!ssc_frame || ssc_root.clientHeight + 10 < c) return ssc_setCache(b, document.body) } else if (a.clientHeight + 10 < a.scrollHeight && (overflow = getComputedStyle(a, "").getPropertyValue("overflow"), "scroll" === overflow || "auto" === overflow)) return ssc_setCache(b, a) } while (a = a.parentNode) }

function ssc_addEvent(a, b, c) { window.addEventListener(a, b, c || !1) }

function ssc_removeEvent(a, b, c) { window.removeEventListener(a, b, c || !1) }

function ssc_isNodeName(a, b) { return a.nodeName.toLowerCase() === b.toLowerCase() }

function ssc_directionCheck(a, b) { a = 0 < a ? 1 : -1;
    b = 0 < b ? 1 : -1;
    (ssc_direction.x !== a || ssc_direction.y !== b) && (ssc_direction.x = a, ssc_direction.y = b, ssc_que = []) }

function ssc_pulse_(a) { var b, c, d; return a *= ssc_pulseScale, 1 > a ? b = a - (1 - Math.exp(-a)) : (c = Math.exp(-1), --a, d = 1 - Math.exp(-a), b = c + d * (1 - c)), b * ssc_pulseNormalize }

function ssc_pulse(a) { return 1 <= a ? 1 : 0 >= a ? 0 : (1 == ssc_pulseNormalize && (ssc_pulseNormalize /= ssc_pulse_(1)), ssc_pulse_(a)) }
if (-1 === navigator.platform.toUpperCase().indexOf("MAC") && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini|BlackBerry)/)) { var ssc_framerate = 150,
        ssc_animtime = 700,
        ssc_stepsize = 100,
        ssc_pulseAlgorithm = !0,
        ssc_pulseScale = 8,
        ssc_pulseNormalize = 1,
        ssc_keyboardsupport = !0,
        ssc_arrowscroll = 50,
        ssc_frame = !1,
        ssc_direction = { x: 0, y: 0 },
        ssc_initdone = !1,
        ssc_fixedback = !0,
        ssc_root = document.documentElement,
        ssc_activeElement, ssc_key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36 },
        ssc_que = [],
        ssc_pending = !1,
        ssc_cache = {};
    setInterval(function() { ssc_cache = {} }, 1E4); var ssc_uniqueID = function() { var a = 0; return function(b) { return b.ssc_uniqueID || (b.ssc_uniqueID = a++) } }(),
        ischrome = /chrome/.test(navigator.userAgent.toLowerCase());
    ischrome && (ssc_addEvent("mousedown", ssc_mousedown), ssc_addEvent("mousewheel", ssc_wheel), ssc_addEvent("load", ssc_init)) };

// ==========
// Scroll to Id
// Licensed under the terms of the MIT license.
// ==========
! function(t) { var o = t("[data-scroll-to]");
    o.length && t(document).ready(function() { o.each(function() { var o = t(this);
            o.on("click", function(n) { n.preventDefault(), t("body, html").stop().animate({ scrollTop: t(o.attr("data-scroll-to")).offset().top }, 800) }) }) }) }(jQuery);

// ==========
// Circular ProgressBar.js 1.0.1
// https://kimmobrunfeldt.github.io/progressbar.js
// ==========
! function(a) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else { var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.ProgressBar = a() } }(function() { var a; return function b(a, c, d) {
        function e(g, h) { if (!c[g]) { if (!a[g]) { var i = "function" == typeof require && require; if (!h && i) return i(g, !0); if (f) return f(g, !0); var j = new Error("Cannot find module '" + g + "'"); throw j.code = "MODULE_NOT_FOUND", j } var k = c[g] = { exports: {} };
                a[g][0].call(k.exports, function(b) { var c = a[g][1][b]; return e(c ? c : b) }, k, k.exports, b, a, c, d) } return c[g].exports } for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]); return e }({ 1: [function(b, c, d) {
            (function() { var b = this || Function("return this")(),
                    e = function() { "use strict";

                        function e() {}

                        function f(a, b) { var c; for (c in a) Object.hasOwnProperty.call(a, c) && b(c) }

                        function g(a, b) { return f(b, function(c) { a[c] = b[c] }), a }

                        function h(a, b) { f(b, function(c) { "undefined" == typeof a[c] && (a[c] = b[c]) }) }

                        function i(a, b, c, d, e, f, g) { var h, i, k, l = f > a ? 0 : (a - f) / e; for (h in b) b.hasOwnProperty(h) && (i = g[h], k = "function" == typeof i ? i : o[i], b[h] = j(c[h], d[h], k, l)); return b }

                        function j(a, b, c, d) { return a + (b - a) * c(d) }

                        function k(a, b) { var c = n.prototype.filter,
                                d = a._filterArgs;
                            f(c, function(e) { "undefined" != typeof c[e][b] && c[e][b].apply(a, d) }) }

                        function l(a, b, c, d, e, f, g, h, j, l, m) { v = b + c + d, w = Math.min(m || u(), v), x = w >= v, y = d - (v - w), a.isPlaying() && (x ? (j(g, a._attachment, y), a.stop(!0)) : (a._scheduleId = l(a._timeoutHandler, s), k(a, "beforeTween"), b + c > w ? i(1, e, f, g, 1, 1, h) : i(w, e, f, g, d, b + c, h), k(a, "afterTween"), j(e, a._attachment, y))) }

                        function m(a, b) { var c = {},
                                d = typeof b; return "string" === d || "function" === d ? f(a, function(a) { c[a] = b }) : f(a, function(a) { c[a] || (c[a] = b[a] || q) }), c }

                        function n(a, b) { this._currentState = a || {}, this._configured = !1, this._scheduleFunction = p, "undefined" != typeof b && this.setConfig(b) } var o, p, q = "linear",
                            r = 500,
                            s = 1e3 / 60,
                            t = Date.now ? Date.now : function() { return +new Date },
                            u = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : t;
                        p = "undefined" != typeof window ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame || setTimeout : setTimeout; var v, w, x, y; return n.prototype.tween = function(a) { return this._isTweening ? this : (void 0 === a && this._configured || this.setConfig(a), this._timestamp = u(), this._start(this.get(), this._attachment), this.resume()) }, n.prototype.setConfig = function(a) { a = a || {}, this._configured = !0, this._attachment = a.attachment, this._pausedAtTime = null, this._scheduleId = null, this._delay = a.delay || 0, this._start = a.start || e, this._step = a.step || e, this._finish = a.finish || e, this._duration = a.duration || r, this._currentState = g({}, a.from) || this.get(), this._originalState = this.get(), this._targetState = g({}, a.to) || this.get(); var b = this;
                            this._timeoutHandler = function() { l(b, b._timestamp, b._delay, b._duration, b._currentState, b._originalState, b._targetState, b._easing, b._step, b._scheduleFunction) }; var c = this._currentState,
                                d = this._targetState; return h(d, c), this._easing = m(c, a.easing || q), this._filterArgs = [c, this._originalState, d, this._easing], k(this, "tweenCreated"), this }, n.prototype.get = function() { return g({}, this._currentState) }, n.prototype.set = function(a) { this._currentState = a }, n.prototype.pause = function() { return this._pausedAtTime = u(), this._isPaused = !0, this }, n.prototype.resume = function() { return this._isPaused && (this._timestamp += u() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0, this._timeoutHandler(), this }, n.prototype.seek = function(a) { a = Math.max(a, 0); var b = u(); return this._timestamp + a === 0 ? this : (this._timestamp = b - a, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, l(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, b), this.pause()), this) }, n.prototype.stop = function(a) { return this._isTweening = !1, this._isPaused = !1, this._timeoutHandler = e, (b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.oCancelAnimationFrame || b.msCancelAnimationFrame || b.mozCancelRequestAnimationFrame || b.clearTimeout)(this._scheduleId), a && (k(this, "beforeTween"), i(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), k(this, "afterTween"), k(this, "afterTweenEnd"), this._finish.call(this, this._currentState, this._attachment)), this }, n.prototype.isPlaying = function() { return this._isTweening && !this._isPaused }, n.prototype.setScheduleFunction = function(a) { this._scheduleFunction = a }, n.prototype.dispose = function() { var a; for (a in this) this.hasOwnProperty(a) && delete this[a] }, n.prototype.filter = {}, n.prototype.formula = { linear: function(a) { return a } }, o = n.prototype.formula, g(n, { now: u, each: f, tweenProps: i, tweenProp: j, applyFilter: k, shallowCopy: g, defaults: h, composeEasingObject: m }), "function" == typeof SHIFTY_DEBUG_NOW && (b.timeoutHandler = l), "object" == typeof d ? c.exports = n : "function" == typeof a && a.amd ? a(function() { return n }) : "undefined" == typeof b.Tweenable && (b.Tweenable = n), n }();! function() { e.shallowCopy(e.prototype.formula, { easeInQuad: function(a) { return Math.pow(a, 2) }, easeOutQuad: function(a) { return -(Math.pow(a - 1, 2) - 1) }, easeInOutQuad: function(a) { return (a /= .5) < 1 ? .5 * Math.pow(a, 2) : -.5 * ((a -= 2) * a - 2) }, easeInCubic: function(a) { return Math.pow(a, 3) }, easeOutCubic: function(a) { return Math.pow(a - 1, 3) + 1 }, easeInOutCubic: function(a) { return (a /= .5) < 1 ? .5 * Math.pow(a, 3) : .5 * (Math.pow(a - 2, 3) + 2) }, easeInQuart: function(a) { return Math.pow(a, 4) }, easeOutQuart: function(a) { return -(Math.pow(a - 1, 4) - 1) }, easeInOutQuart: function(a) { return (a /= .5) < 1 ? .5 * Math.pow(a, 4) : -.5 * ((a -= 2) * Math.pow(a, 3) - 2) }, easeInQuint: function(a) { return Math.pow(a, 5) }, easeOutQuint: function(a) { return Math.pow(a - 1, 5) + 1 }, easeInOutQuint: function(a) { return (a /= .5) < 1 ? .5 * Math.pow(a, 5) : .5 * (Math.pow(a - 2, 5) + 2) }, easeInSine: function(a) { return -Math.cos(a * (Math.PI / 2)) + 1 }, easeOutSine: function(a) { return Math.sin(a * (Math.PI / 2)) }, easeInOutSine: function(a) { return -.5 * (Math.cos(Math.PI * a) - 1) }, easeInExpo: function(a) { return 0 === a ? 0 : Math.pow(2, 10 * (a - 1)) }, easeOutExpo: function(a) { return 1 === a ? 1 : -Math.pow(2, -10 * a) + 1 }, easeInOutExpo: function(a) { return 0 === a ? 0 : 1 === a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2) }, easeInCirc: function(a) { return -(Math.sqrt(1 - a * a) - 1) }, easeOutCirc: function(a) { return Math.sqrt(1 - Math.pow(a - 1, 2)) }, easeInOutCirc: function(a) { return (a /= .5) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1) }, easeOutBounce: function(a) { return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375 }, easeInBack: function(a) { var b = 1.70158; return a * a * ((b + 1) * a - b) }, easeOutBack: function(a) { var b = 1.70158; return (a -= 1) * a * ((b + 1) * a + b) + 1 }, easeInOutBack: function(a) { var b = 1.70158; return (a /= .5) < 1 ? .5 * (a * a * (((b *= 1.525) + 1) * a - b)) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2) }, elastic: function(a) { return -1 * Math.pow(4, -8 * a) * Math.sin((6 * a - 1) * (2 * Math.PI) / 2) + 1 }, swingFromTo: function(a) { var b = 1.70158; return (a /= .5) < 1 ? .5 * (a * a * (((b *= 1.525) + 1) * a - b)) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2) }, swingFrom: function(a) { var b = 1.70158; return a * a * ((b + 1) * a - b) }, swingTo: function(a) { var b = 1.70158; return (a -= 1) * a * ((b + 1) * a + b) + 1 }, bounce: function(a) { return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375 }, bouncePast: function(a) { return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 2 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 2 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 2 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375) }, easeFromTo: function(a) { return (a /= .5) < 1 ? .5 * Math.pow(a, 4) : -.5 * ((a -= 2) * Math.pow(a, 3) - 2) }, easeFrom: function(a) { return Math.pow(a, 4) }, easeTo: function(a) { return Math.pow(a, .25) } }) }(),
                function() {
                    function a(a, b, c, d, e, f) {
                        function g(a) { return ((n * a + o) * a + p) * a }

                        function h(a) { return ((q * a + r) * a + s) * a }

                        function i(a) { return (3 * n * a + 2 * o) * a + p }

                        function j(a) { return 1 / (200 * a) }

                        function k(a, b) { return h(m(a, b)) }

                        function l(a) { return a >= 0 ? a : 0 - a }

                        function m(a, b) { var c, d, e, f, h, j; for (e = a, j = 0; 8 > j; j++) { if (f = g(e) - a, l(f) < b) return e; if (h = i(e), l(h) < 1e-6) break;
                                e -= f / h } if (c = 0, d = 1, e = a, c > e) return c; if (e > d) return d; for (; d > c;) { if (f = g(e), l(f - a) < b) return e;
                                a > f ? c = e : d = e, e = .5 * (d - c) + c } return e } var n = 0,
                            o = 0,
                            p = 0,
                            q = 0,
                            r = 0,
                            s = 0; return p = 3 * b, o = 3 * (d - b) - p, n = 1 - p - o, s = 3 * c, r = 3 * (e - c) - s, q = 1 - s - r, k(a, j(f)) }

                    function b(b, c, d, e) { return function(f) { return a(f, b, c, d, e, 1) } }
                    e.setBezierFunction = function(a, c, d, f, g) { var h = b(c, d, f, g); return h.displayName = a, h.x1 = c, h.y1 = d, h.x2 = f, h.y2 = g, e.prototype.formula[a] = h }, e.unsetBezierFunction = function(a) { delete e.prototype.formula[a] } }(),
                function() {
                    function a(a, b, c, d, f, g) { return e.tweenProps(d, b, a, c, 1, g, f) } var b = new e;
                    b._filterArgs = [], e.interpolate = function(c, d, f, g, h) { var i = e.shallowCopy({}, c),
                            j = h || 0,
                            k = e.composeEasingObject(c, g || "linear");
                        b.set({}); var l = b._filterArgs;
                        l.length = 0, l[0] = i, l[1] = c, l[2] = d, l[3] = k, e.applyFilter(b, "tweenCreated"), e.applyFilter(b, "beforeTween"); var m = a(c, i, d, f, k, j); return e.applyFilter(b, "afterTween"), m } }(),
                function(a) {
                    function b(a, b) { var c, d = [],
                            e = a.length; for (c = 0; e > c; c++) d.push("_" + b + "_" + c); return d }

                    function c(a) { var b = a.match(v); return b ? (1 === b.length || a[0].match(u)) && b.unshift("") : b = ["", ""], b.join(A) }

                    function d(b) { a.each(b, function(a) { var c = b[a]; "string" == typeof c && c.match(z) && (b[a] = e(c)) }) }

                    function e(a) { return i(z, a, f) }

                    function f(a) { var b = g(a); return "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" }

                    function g(a) { return a = a.replace(/#/, ""), 3 === a.length && (a = a.split(""), a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]), B[0] = h(a.substr(0, 2)), B[1] = h(a.substr(2, 2)), B[2] = h(a.substr(4, 2)), B }

                    function h(a) { return parseInt(a, 16) }

                    function i(a, b, c) { var d = b.match(a),
                            e = b.replace(a, A); if (d)
                            for (var f, g = d.length, h = 0; g > h; h++) f = d.shift(), e = e.replace(A, c(f)); return e }

                    function j(a) { return i(x, a, k) }

                    function k(a) { for (var b = a.match(w), c = b.length, d = a.match(y)[0], e = 0; c > e; e++) d += parseInt(b[e], 10) + ","; return d = d.slice(0, -1) + ")" }

                    function l(d) { var e = {}; return a.each(d, function(a) { var f = d[a]; if ("string" == typeof f) { var g = r(f);
                                e[a] = { formatString: c(f), chunkNames: b(g, a) } } }), e }

                    function m(b, c) { a.each(c, function(a) { for (var d = b[a], e = r(d), f = e.length, g = 0; f > g; g++) b[c[a].chunkNames[g]] = +e[g];
                            delete b[a] }) }

                    function n(b, c) { a.each(c, function(a) { var d = b[a],
                                e = o(b, c[a].chunkNames),
                                f = p(e, c[a].chunkNames);
                            d = q(c[a].formatString, f), b[a] = j(d) }) }

                    function o(a, b) { for (var c, d = {}, e = b.length, f = 0; e > f; f++) c = b[f], d[c] = a[c], delete a[c]; return d }

                    function p(a, b) { C.length = 0; for (var c = b.length, d = 0; c > d; d++) C.push(a[b[d]]); return C }

                    function q(a, b) { for (var c = a, d = b.length, e = 0; d > e; e++) c = c.replace(A, +b[e].toFixed(4)); return c }

                    function r(a) { return a.match(w) }

                    function s(b, c) { a.each(c, function(a) { var d, e = c[a],
                                f = e.chunkNames,
                                g = f.length,
                                h = b[a]; if ("string" == typeof h) { var i = h.split(" "),
                                    j = i[i.length - 1]; for (d = 0; g > d; d++) b[f[d]] = i[d] || j } else
                                for (d = 0; g > d; d++) b[f[d]] = h;
                            delete b[a] }) }

                    function t(b, c) { a.each(c, function(a) { var d = c[a],
                                e = d.chunkNames,
                                f = e.length,
                                g = b[e[0]],
                                h = typeof g; if ("string" === h) { for (var i = "", j = 0; f > j; j++) i += " " + b[e[j]], delete b[e[j]];
                                b[a] = i.substr(1) } else b[a] = g }) } var u = /(\d|\-|\.)/,
                        v = /([^\-0-9\.]+)/g,
                        w = /[0-9.\-]+/g,
                        x = new RegExp("rgb\\(" + w.source + /,\s*/.source + w.source + /,\s*/.source + w.source + "\\)", "g"),
                        y = /^.*\(/,
                        z = /#([0-9]|[a-f]){3,6}/gi,
                        A = "VAL",
                        B = [],
                        C = [];
                    a.prototype.filter.token = { tweenCreated: function(a, b, c, e) { d(a), d(b), d(c), this._tokenData = l(a) }, beforeTween: function(a, b, c, d) { s(d, this._tokenData), m(a, this._tokenData), m(b, this._tokenData), m(c, this._tokenData) }, afterTween: function(a, b, c, d) { n(a, this._tokenData), n(b, this._tokenData), n(c, this._tokenData), t(d, this._tokenData) } } }(e) }).call(null) }, {}], 2: [function(a, b, c) { var d = a("./shape"),
                e = a("./utils"),
                f = function(a, b) { this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}", this.containerAspectRatio = 1, d.apply(this, arguments) };
            f.prototype = new d, f.prototype.constructor = f, f.prototype._pathString = function(a) { var b = a.strokeWidth;
                a.trailWidth && a.trailWidth > a.strokeWidth && (b = a.trailWidth); var c = 50 - b / 2; return e.render(this._pathTemplate, { radius: c, "2radius": 2 * c }) }, f.prototype._trailString = function(a) { return this._pathString(a) }, b.exports = f }, { "./shape": 7, "./utils": 8 }], 3: [function(a, b, c) { var d = a("./shape"),
                e = a("./utils"),
                f = function(a, b) { this._pathTemplate = "M 0,{center} L 100,{center}", d.apply(this, arguments) };
            f.prototype = new d, f.prototype.constructor = f, f.prototype._initializeSvg = function(a, b) { a.setAttribute("viewBox", "0 0 100 " + b.strokeWidth), a.setAttribute("preserveAspectRatio", "none") }, f.prototype._pathString = function(a) { return e.render(this._pathTemplate, { center: a.strokeWidth / 2 }) }, f.prototype._trailString = function(a) { return this._pathString(a) }, b.exports = f }, { "./shape": 7, "./utils": 8 }], 4: [function(a, b, c) { b.exports = { Line: a("./line"), Circle: a("./circle"), SemiCircle: a("./semicircle"), Path: a("./path"), Shape: a("./shape"), utils: a("./utils") } }, { "./circle": 2, "./line": 3, "./path": 5, "./semicircle": 6, "./shape": 7, "./utils": 8 }], 5: [function(a, b, c) { var d = a("shifty"),
                e = a("./utils"),
                f = { easeIn: "easeInCubic", easeOut: "easeOutCubic", easeInOut: "easeInOutCubic" },
                g = function h(a, b) { if (!(this instanceof h)) throw new Error("Constructor was called without new keyword");
                    b = e.extend({ duration: 800, easing: "linear", from: {}, to: {}, step: function() {} }, b); var c;
                    c = e.isString(a) ? document.querySelector(a) : a, this.path = c, this._opts = b, this._tweenable = null; var d = this.path.getTotalLength();
                    this.path.style.strokeDasharray = d + " " + d, this.set(0) };
            g.prototype.value = function() { var a = this._getComputedDashOffset(),
                    b = this.path.getTotalLength(),
                    c = 1 - a / b; return parseFloat(c.toFixed(6), 10) }, g.prototype.set = function(a) { this.stop(), this.path.style.strokeDashoffset = this._progressToOffset(a); var b = this._opts.step; if (e.isFunction(b)) { var c = this._easing(this._opts.easing),
                        d = this._calculateTo(a, c),
                        f = this._opts.shape || this;
                    b(d, f, this._opts.attachment) } }, g.prototype.stop = function() { this._stopTween(), this.path.style.strokeDashoffset = this._getComputedDashOffset() }, g.prototype.animate = function(a, b, c) { b = b || {}, e.isFunction(b) && (c = b, b = {}); var f = e.extend({}, b),
                    g = e.extend({}, this._opts);
                b = e.extend(g, b); var h = this._easing(b.easing),
                    i = this._resolveFromAndTo(a, h, f);
                this.stop(), this.path.getBoundingClientRect(); var j = this._getComputedDashOffset(),
                    k = this._progressToOffset(a),
                    l = this;
                this._tweenable = new d, this._tweenable.tween({ from: e.extend({ offset: j }, i.from), to: e.extend({ offset: k }, i.to), duration: b.duration, easing: h, step: function(a) { l.path.style.strokeDashoffset = a.offset; var c = b.shape || l;
                        b.step(a, c, b.attachment) }, finish: function(a) { e.isFunction(c) && c() } }) }, g.prototype._getComputedDashOffset = function() { var a = window.getComputedStyle(this.path, null); return parseFloat(a.getPropertyValue("stroke-dashoffset"), 10) }, g.prototype._progressToOffset = function(a) { var b = this.path.getTotalLength(); return b - a * b }, g.prototype._resolveFromAndTo = function(a, b, c) { return c.from && c.to ? { from: c.from, to: c.to } : { from: this._calculateFrom(b), to: this._calculateTo(a, b) } }, g.prototype._calculateFrom = function(a) { return d.interpolate(this._opts.from, this._opts.to, this.value(), a) }, g.prototype._calculateTo = function(a, b) { return d.interpolate(this._opts.from, this._opts.to, a, b) }, g.prototype._stopTween = function() { null !== this._tweenable && (this._tweenable.stop(), this._tweenable = null) }, g.prototype._easing = function(a) { return f.hasOwnProperty(a) ? f[a] : a }, b.exports = g }, { "./utils": 8, shifty: 1 }], 6: [function(a, b, c) { var d = a("./shape"),
                e = a("./circle"),
                f = a("./utils"),
                g = function(a, b) { this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0", this.containerAspectRatio = 2, d.apply(this, arguments) };
            g.prototype = new d, g.prototype.constructor = g, g.prototype._initializeSvg = function(a, b) { a.setAttribute("viewBox", "0 0 100 50") }, g.prototype._initializeTextContainer = function(a, b, c) { a.text.style && (c.style.top = "auto", c.style.bottom = "0", a.text.alignToBottom ? f.setStyle(c, "transform", "translate(-50%, 0)") : f.setStyle(c, "transform", "translate(-50%, 50%)")) }, g.prototype._pathString = e.prototype._pathString, g.prototype._trailString = e.prototype._trailString, b.exports = g }, { "./circle": 2, "./shape": 7, "./utils": 8 }], 7: [function(a, b, c) { var d = a("./path"),
                e = a("./utils"),
                f = "Object is destroyed",
                g = function h(a, b) { if (!(this instanceof h)) throw new Error("Constructor was called without new keyword"); if (0 !== arguments.length) { this._opts = e.extend({ color: "#555", strokeWidth: 1, trailColor: null, trailWidth: null, fill: null, text: { style: { color: null, position: "absolute", left: "50%", top: "50%", padding: 0, margin: 0, transform: { prefix: !0, value: "translate(-50%, -50%)" } }, autoStyleContainer: !0, alignToBottom: !0, value: null, className: "progressbar-text" }, svgStyle: { display: "block", width: "100%" }, warnings: !1 }, b, !0), e.isObject(b) && void 0 !== b.svgStyle && (this._opts.svgStyle = b.svgStyle), e.isObject(b) && e.isObject(b.text) && void 0 !== b.text.style && (this._opts.text.style = b.text.style); var c, f = this._createSvgView(this._opts); if (c = e.isString(a) ? document.querySelector(a) : a, !c) throw new Error("Container does not exist: " + a);
                        this._container = c, this._container.appendChild(f.svg), this._opts.warnings && this._warnContainerAspectRatio(this._container), this._opts.svgStyle && e.setStyles(f.svg, this._opts.svgStyle), this.svg = f.svg, this.path = f.path, this.trail = f.trail, this.text = null; var g = e.extend({ attachment: void 0, shape: this }, this._opts);
                        this._progressPath = new d(f.path, g), e.isObject(this._opts.text) && null !== this._opts.text.value && this.setText(this._opts.text.value) } };
            g.prototype.animate = function(a, b, c) { if (null === this._progressPath) throw new Error(f);
                this._progressPath.animate(a, b, c) }, g.prototype.stop = function() { if (null === this._progressPath) throw new Error(f);
                void 0 !== this._progressPath && this._progressPath.stop() }, g.prototype.destroy = function() { if (null === this._progressPath) throw new Error(f);
                this.stop(), this.svg.parentNode.removeChild(this.svg), this.svg = null, this.path = null, this.trail = null, this._progressPath = null, null !== this.text && (this.text.parentNode.removeChild(this.text), this.text = null) }, g.prototype.set = function(a) { if (null === this._progressPath) throw new Error(f);
                this._progressPath.set(a) }, g.prototype.value = function() { if (null === this._progressPath) throw new Error(f); return void 0 === this._progressPath ? 0 : this._progressPath.value() }, g.prototype.setText = function(a) { if (null === this._progressPath) throw new Error(f);
                null === this.text && (this.text = this._createTextContainer(this._opts, this._container), this._container.appendChild(this.text)), e.isObject(a) ? (e.removeChildren(this.text), this.text.appendChild(a)) : this.text.innerHTML = a }, g.prototype._createSvgView = function(a) { var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                this._initializeSvg(b, a); var c = null;
                (a.trailColor || a.trailWidth) && (c = this._createTrail(a), b.appendChild(c)); var d = this._createPath(a); return b.appendChild(d), { svg: b, path: d, trail: c } }, g.prototype._initializeSvg = function(a, b) { a.setAttribute("viewBox", "0 0 100 100") }, g.prototype._createPath = function(a) { var b = this._pathString(a); return this._createPathElement(b, a) }, g.prototype._createTrail = function(a) { var b = this._trailString(a),
                    c = e.extend({}, a); return c.trailColor || (c.trailColor = "#eee"), c.trailWidth || (c.trailWidth = c.strokeWidth), c.color = c.trailColor, c.strokeWidth = c.trailWidth, c.fill = null, this._createPathElement(b, c) }, g.prototype._createPathElement = function(a, b) { var c = document.createElementNS("http://www.w3.org/2000/svg", "path"); return c.setAttribute("d", a), c.setAttribute("stroke", b.color), c.setAttribute("stroke-width", b.strokeWidth), b.fill ? c.setAttribute("fill", b.fill) : c.setAttribute("fill-opacity", "0"), c }, g.prototype._createTextContainer = function(a, b) { var c = document.createElement("div");
                c.className = a.text.className; var d = a.text.style; return d && (a.text.autoStyleContainer && (b.style.position = "relative"), e.setStyles(c, d), d.color || (c.style.color = a.color)), this._initializeTextContainer(a, b, c), c }, g.prototype._initializeTextContainer = function(a, b, c) {}, g.prototype._pathString = function(a) { throw new Error("Override this function for each progress bar") }, g.prototype._trailString = function(a) { throw new Error("Override this function for each progress bar") }, g.prototype._warnContainerAspectRatio = function(a) { if (this.containerAspectRatio) { var b = window.getComputedStyle(a, null),
                        c = parseFloat(b.getPropertyValue("width"), 10),
                        d = parseFloat(b.getPropertyValue("height"), 10);
                    e.floatEquals(this.containerAspectRatio, c / d) || (console.warn("Incorrect aspect ratio of container", "#" + a.id, "detected:", b.getPropertyValue("width") + "(width)", "/", b.getPropertyValue("height") + "(height)", "=", c / d), console.warn("Aspect ratio of should be", this.containerAspectRatio)) } }, b.exports = g }, { "./path": 5, "./utils": 8 }], 8: [function(a, b, c) {
            function d(a, b, c) { a = a || {}, b = b || {}, c = c || !1; for (var e in b)
                    if (b.hasOwnProperty(e)) { var f = a[e],
                            g = b[e];
                        c && l(f) && l(g) ? a[e] = d(f, g, c) : a[e] = g }
                return a }

            function e(a, b) { var c = a; for (var d in b)
                    if (b.hasOwnProperty(d)) { var e = b[d],
                            f = "\\{" + d + "\\}",
                            g = new RegExp(f, "g");
                        c = c.replace(g, e) }
                return c }

            function f(a, b, c) { for (var d = a.style, e = 0; e < p.length; ++e) { var f = p[e];
                    d[f + h(b)] = c }
                d[b] = c }

            function g(a, b) { m(b, function(b, c) { null !== b && void 0 !== b && (l(b) && b.prefix === !0 ? f(a, c, b.value) : a.style[c] = b) }) }

            function h(a) { return a.charAt(0).toUpperCase() + a.slice(1) }

            function i(a) { return "string" == typeof a || a instanceof String }

            function j(a) { return "function" == typeof a }

            function k(a) { return "[object Array]" === Object.prototype.toString.call(a) }

            function l(a) { if (k(a)) return !1; var b = typeof a; return "object" === b && !!a }

            function m(a, b) { for (var c in a)
                    if (a.hasOwnProperty(c)) { var d = a[c];
                        b(d, c) } }

            function n(a, b) { return Math.abs(a - b) < q }

            function o(a) { for (; a.firstChild;) a.removeChild(a.firstChild) } var p = "Webkit Moz O ms".split(" "),
                q = .001;
            b.exports = { extend: d, render: e, setStyle: f, setStyles: g, capitalize: h, isString: i, isFunction: j, isObject: l, forEachObject: m, floatEquals: n, removeChildren: o } }, {}] }, {}, [4])(4) });

// ==========
// FancyBox
// ==========
(function(r, G, f, v) { var J = f("html"),
        n = f(r),
        p = f(G),
        b = f.fancybox = function() { b.open.apply(this, arguments) },
        I = navigator.userAgent.match(/msie/i),
        B = null,
        s = G.createTouch !== v,
        t = function(a) { return a && a.hasOwnProperty && a instanceof f },
        q = function(a) { return a && "string" === f.type(a) },
        E = function(a) { return q(a) && 0 < a.indexOf("%") },
        l = function(a, d) { var e = parseInt(a, 10) || 0;
            d && E(a) && (e *= b.getViewport()[d] / 100); return Math.ceil(e) },
        w = function(a, b) { return l(a, b) + "px" };
    f.extend(b, { version: "2.1.5", defaults: { padding: 15, margin: 20, width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !s, fitToView: !0, aspectRatio: !1, topRatio: 0.5, leftRatio: 0.5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3E3, preload: 3, modal: !1, loop: !0, ajax: { dataType: "html", headers: { "X-fancyBox": !0 } }, iframe: { scrolling: "auto", preload: !0 }, swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" }, keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] }, direction: { next: "left", prev: "right" }, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: { wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (I ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>' }, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0, openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: { overlay: !0, title: !0 }, onCancel: f.noop, beforeLoad: f.noop, afterLoad: f.noop, beforeShow: f.noop, afterShow: f.noop, beforeChange: f.noop, beforeClose: f.noop, afterClose: f.noop }, group: {}, opts: {}, previous: null, coming: null, current: null, isActive: !1, isOpen: !1, isOpened: !1, wrap: null, skin: null, outer: null, inner: null, player: { timer: null, isActive: !1 }, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function(a, d) { if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function(e, c) { var k = {},
                    g, h, j, m, l; "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = { href: c.data("fancybox-href") || c.attr("href"), title: c.data("fancybox-title") || c.attr("title"), isDom: !0, element: c }, f.metadata && f.extend(!0, k, c.metadata())) : k = c);
                g = d.href || k.href || (q(c) ? c : null);
                h = d.title !== v ? d.title : k.title || "";
                m = (j = d.content || k.content) ? "html" : d.type || k.type;!m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
                q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
                j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g && k.isDom) && (m = "inline", j = c));
                f.extend(k, { href: g, type: m, content: j, title: h, selector: l });
                a[e] = k }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index) }, cancel: function() { var a = b.coming;
            a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a)) }, close: function(a) { b.cancel();!1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]()))) }, play: function(a) { var d = function() { clearTimeout(b.player.timer) },
                e = function() { d();
                    b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed)) },
                c = function() { d();
                    p.unbind(".player");
                    b.player.isActive = !1;
                    b.trigger("onPlayEnd") }; if (!0 === a || !b.player.isActive && !1 !== a) { if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, p.bind({ "onCancel.player beforeClose.player": c, "onUpdate.player": e, "beforeLoad.player": d }), e(), b.trigger("onPlayStart") } else c() }, next: function(a) { var d = b.current;
            d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next")) }, prev: function(a) { var d = b.current;
            d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev")) }, jumpto: function(a, d, e) { var c = b.current;
            c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a))) }, reposition: function(a, d) { var e = b.current,
                c = e ? e.wrap : null,
                k;
            c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k))) }, update: function(a) { var d = a && a.type,
                e = !d || "orientationchange" === d;
            e && (clearTimeout(B), B = null);
            b.isOpen && !B && (B = setTimeout(function() { var c = b.current;
                c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null) }, e && !s ? 0 : 300)) }, toggle: function(a) { b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update()) }, hideLoading: function() { p.unbind(".loading");
            f("#fancybox-loading").remove() }, showLoading: function() { var a, d;
            b.hideLoading();
            a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
            p.bind("keydown.loading", function(a) { if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel() });
            b.defaults.fixed || (d = b.getViewport(), a.css({ position: "absolute", top: 0.5 * d.h + d.y, left: 0.5 * d.w + d.x })) }, getViewport: function() { var a = b.current && b.current.locked || !1,
                d = { x: n.scrollLeft(), y: n.scrollTop() };
            a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height()); return d }, unbindEvents: function() { b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
            p.unbind(".fb");
            n.unbind(".fb") }, bindEvents: function() { var a = b.current,
                d;
            a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function(e) { var c = e.which || e.keyCode,
                    k = e.target || e.srcElement; if (27 === c && b.coming) return !1;!e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function(d, k) { if (1 < a.group.length && k[c] !== v) return b[d](k[c]), e.preventDefault(), !1; if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1 }) }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(d, c, k, g) { for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent(); if (0 !== c && !j && 1 < b.group.length && !a.canShrink) { if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");
                    else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");
                    d.preventDefault() } })) }, trigger: function(a, d) { var e, c = d || b.coming || b.current; if (c) { f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1))); if (!1 === e) return !1;
                c.helpers && f.each(c.helpers, function(d, e) { if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c) });
                p.trigger(a) } }, isImage: function(a) { return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i) }, isSWF: function(a) { return q(a) && a.match(/\.(swf)((\?|#).*)?$/i) }, _start: function(a) { var d = {},
                e, c;
            a = l(a);
            e = b.group[a] || null; if (!e) return !1;
            d = f.extend(!0, {}, b.opts, e);
            e = d.margin;
            c = d.padding; "number" === f.type(e) && (d.margin = [e, e, e, e]); "number" === f.type(c) && (d.padding = [c, c, c, c]);
            d.modal && f.extend(!0, d, { closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: { overlay: { closeClick: !1 } } });
            d.autoSize && (d.autoWidth = d.autoHeight = !0); "auto" === d.width && (d.autoWidth = !0); "auto" === d.height && (d.autoHeight = !0);
            d.group = b.group;
            d.index = a;
            b.coming = d; if (!1 === b.trigger("beforeLoad")) b.coming = null;
            else { c = d.type;
                e = d.href; if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
                b.isActive = !0; if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible"; "image" === c && (d.aspectRatio = !0); "iframe" === c && s && (d.scrolling = "scroll");
                d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
                f.extend(d, { skin: f(".fancybox-skin", d.wrap), outer: f(".fancybox-outer", d.wrap), inner: f(".fancybox-inner", d.wrap) });
                f.each(["Top", "Right", "Bottom", "Left"], function(a, b) { d.skin.css("padding" + b, w(d.padding[a])) });
                b.trigger("onReady"); if ("inline" === c || "html" === c) { if (!d.content || !d.content.length) return b._error("content") } else if (!e) return b._error("href"); "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad() } }, _error: function(a) { f.extend(b.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: a, content: b.coming.tpl.error });
            b._afterLoad() }, _loadImage: function() { var a = b.imgPreload = new Image;
            a.onload = function() { this.onload = this.onerror = null;
                b.coming.width = this.width / b.opts.pixelRatio;
                b.coming.height = this.height / b.opts.pixelRatio;
                b._afterLoad() };
            a.onerror = function() { this.onload = this.onerror = null;
                b._error("image") };
            a.src = b.coming.href;!0 !== a.complete && b.showLoading() }, _loadAjax: function() { var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(f.extend({}, a.ajax, { url: a.href, error: function(a, e) { b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading() }, success: function(d, e) { "success" === e && (a.content = d, b._afterLoad()) } })) }, _loadIframe: function() { var a = b.coming,
                d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function() { try { f(this).find("iframe").hide().attr("src", "//about:blank").end().empty() } catch (a) {} });
            a.iframe.preload && (b.showLoading(), d.one("load", function() { f(this).data("ready", 1);
                s || f(this).bind("load.fb", b.update);
                f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                b._afterLoad() }));
            a.content = d.appendTo(a.inner);
            a.iframe.preload || b._afterLoad() }, _preloadImages: function() { var a = b.group,
                d = b.current,
                e = a.length,
                c = d.preload ? Math.min(d.preload, e - 1) : 0,
                f, g; for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href) }, _afterLoad: function() { var a = b.coming,
                d = b.current,
                e, c, k, g, h;
            b.hideLoading(); if (a && !1 !== b.isActive)
                if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
                else { d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    b.unbindEvents();
                    e = a.content;
                    c = a.type;
                    k = a.scrolling;
                    f.extend(b, { wrap: a.wrap, skin: a.skin, outer: a.outer, inner: a.inner, current: a, previous: d });
                    g = a.href; switch (c) {
                        case "inline":
                        case "ajax":
                        case "html":
                            a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function() { f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1) })); break;
                        case "image":
                            e = a.tpl.image.replace("{href}", g); break;
                        case "swf":
                            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function(a, b) { e += '<param name="' + a + '" value="' + b + '"></param>';
                                h += " " + a + '="' + b + '"' }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>" }(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
                    b.trigger("beforeShow");
                    a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
                    b._setDimension();
                    b.reposition();
                    b.isOpen = !1;
                    b.coming = null;
                    b.bindEvents(); if (b.isOpened) { if (d.prevMethod) b.transitions[d.prevMethod]() } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
                    b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                    b._preloadImages() } }, _setDimension: function() { var a = b.getViewport(),
                d = 0,
                e = !1,
                c = !1,
                e = b.wrap,
                k = b.skin,
                g = b.inner,
                h = b.current,
                c = h.width,
                j = h.height,
                m = h.minWidth,
                u = h.minHeight,
                n = h.maxWidth,
                p = h.maxHeight,
                s = h.scrolling,
                q = h.scrollOutside ? h.scrollbarWidth : 0,
                x = h.margin,
                y = l(x[1] + x[3]),
                r = l(x[0] + x[2]),
                v, z, t, C, A, F, B, D, H;
            e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
            x = l(k.outerWidth(!0) - k.width());
            v = l(k.outerHeight(!0) - k.height());
            z = y + x;
            t = r + v;
            C = E(c) ? (a.w - z) * l(c) / 100 : c;
            A = E(j) ? (a.h - t) * l(j) / 100 : j; if ("iframe" === h.type) { if (H = h.content, h.autoHeight && 1 === H.data("ready")) try { H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0)) } catch (G) {} } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");
            c = l(C);
            j = l(A);
            D = C / A;
            m = l(E(m) ? l(m, "w") - z : m);
            n = l(E(n) ? l(n, "w") - z : n);
            u = l(E(u) ? l(u, "h") - t : u);
            p = l(E(p) ? l(p, "h") - t : p);
            F = n;
            B = p;
            h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));
            z = a.w - y;
            r = a.h - r;
            h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight && "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p))); if (h.fitToView)
                if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio)
                    for (;
                        (a > z || y > r) && (c > m && j > u) && !(19 < d++);) j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height();
                else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));
            q && ("auto" === s && j < A && c + x + q < z) && (c += q);
            g.width(c).height(j);
            e.width(c + x);
            a = e.width();
            y = e.height();
            e = (a > z || y > r) && c > m && j > u;
            c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
            f.extend(h, { dim: { width: w(a), height: w(y) }, origWidth: C, origHeight: A, canShrink: e, canExpand: c, wPadding: x, hPadding: v, wrapSpace: y - k.outerHeight(!0), skinSpace: k.height() - j });!H && (h.autoHeight && j > u && j < p && !c) && g.height("auto") }, _getPosition: function(a) { var d = b.current,
                e = b.getViewport(),
                c = d.margin,
                f = b.wrap.width() + c[1] + c[3],
                g = b.wrap.height() + c[0] + c[2],
                c = { position: "absolute", top: c[0], left: c[3] };
            d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
            c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
            c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio)); return c }, _afterZoomIn: function() { var a = b.current;
            a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function(d) {!f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]()) }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function(a) { a.preventDefault();
                b.close() }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play())) }, _afterZoomOut: function(a) { a = a || b.current;
            f(".fancybox-wrap").trigger("onReset").remove();
            f.extend(b, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null });
            b.trigger("afterClose", a) } });
    b.transitions = { getOrigPosition: function() { var a = b.current,
                d = a.element,
                e = a.orig,
                c = {},
                f = 50,
                g = 50,
                h = a.hPadding,
                j = a.wPadding,
                m = b.getViewport();!e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
            t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio); if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x; return c = { top: w(c.top - h * a.topRatio), left: w(c.left - j * a.leftRatio), width: w(f + j), height: w(g + h) } }, step: function(a, d) { var e, c, f = d.prop;
            c = b.current; var g = c.wrapSpace,
                h = c.skinSpace; if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" === f ? c : c - g * e - h * e)) }, zoomIn: function() { var a = b.current,
                d = a.pos,
                e = a.openEffect,
                c = "elastic" === e,
                k = f.extend({ opacity: 1 }, d);
            delete k.position;
            c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
            b.wrap.css(d).animate(k, { duration: "none" === e ? 0 : a.openSpeed, easing: a.openEasing, step: c ? this.step : null, complete: b._afterZoomIn }) }, zoomOut: function() { var a = b.current,
                d = a.closeEffect,
                e = "elastic" === d,
                c = { opacity: 0.1 };
            e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
            b.wrap.animate(c, { duration: "none" === d ? 0 : a.closeSpeed, easing: a.closeEasing, step: e ? this.step : null, complete: b._afterZoomOut }) }, changeIn: function() { var a = b.current,
                d = a.nextEffect,
                e = a.pos,
                c = { opacity: 1 },
                f = b.direction,
                g;
            e.opacity = 0.1; "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px")); "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, { duration: a.nextSpeed, easing: a.nextEasing, complete: b._afterZoomIn }) }, changeOut: function() { var a = b.previous,
                d = a.prevEffect,
                e = { opacity: 0.1 },
                c = b.direction; "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
            a.wrap.animate(e, { duration: "none" === d ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function() { f(this).trigger("onReset").remove() } }) } };
    b.helpers.overlay = { defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !s, fixed: !0 }, overlay: null, fixed: !1, el: f("html"), create: function(a) { a = f.extend({}, this.defaults, a);
            this.overlay && this.close();
            this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
            this.fixed = !1;
            a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0) }, open: function(a) { var d = this;
            a = f.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
            a.closeClick && this.overlay.bind("click.overlay", function(a) { if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1 });
            this.overlay.css(a.css).show() }, close: function() { var a, b;
            n.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));
            f(".fancybox-overlay").remove().hide();
            f.extend(this, { overlay: null, fixed: !1 }) }, update: function() { var a = "100%",
                b;
            this.overlay.width(a).height("100%");
            I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
            this.overlay.width(a).height(p.height()) }, onReady: function(a, b) { var e = this.overlay;
            f(".fancybox-overlay").stop(!0, !0);
            e || this.create(a);
            a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);!0 === a.showEarly && this.beforeShow.apply(this, arguments) }, beforeShow: function(a, b) { var e, c;
            b.locked && (!1 !== this.margin && (f("*").filter(function() { return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap") }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));
            this.open(a) }, onUpdate: function() { this.fixed || this.update() }, afterClose: function(a) { this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this)) } };
    b.helpers.title = { defaults: { type: "float", position: "bottom" }, beforeShow: function(a) { var d = b.current,
                e = d.title,
                c = a.type;
            f.isFunction(e) && (e = e.call(d.element, d)); if (q(e) && "" !== f.trim(e)) { d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>"); switch (c) {
                    case "inside":
                        c = b.skin; break;
                    case "outside":
                        c = b.wrap; break;
                    case "over":
                        c = b.inner; break;
                    default:
                        c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom"))) }
                d["top" === a.position ? "prependTo" : "appendTo"](c) } } };
    f.fn.fancybox = function(a) { var d, e = f(this),
            c = this.selector || "",
            k = function(g) { var h = f(this).blur(),
                    j = d,
                    k, l;!g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault()) };
        a = a || {};
        d = a.index || 0;!c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
        this.filter("[data-fancybox-start=1]").trigger("click"); return this };
    p.ready(function() { var a, d;
        f.scrollbarWidth === v && (f.scrollbarWidth = function() { var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                b = a.children(),
                b = b.innerWidth() - b.height(99).innerWidth();
            a.remove(); return b }); if (f.support.fixedPosition === v) { a = f.support;
            d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"); var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
            d.remove();
            a.fixedPosition = e }
        f.extend(b.defaults, { scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body") });
        a = f(r).width();
        J.addClass("fancybox-lock-test");
        d = f(r).width();
        J.removeClass("fancybox-lock-test");
        f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head") }) })(window, document, jQuery);
(function($) { "use strict"; var F = $.fancybox,
        format = function(url, rez, params) { params = params || ''; if ($.type(params) === "object") { params = $.param(params, true) }
            $.each(rez, function(key, value) { url = url.replace('$' + key, value || '') }); if (params.length) { url += (url.indexOf('?') > 0 ? '&' : '?') + params } return url };
    F.helpers.media = { defaults: { youtube: { matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i, params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: 'opaque', enablejsapi: 1 }, type: 'iframe', url: '//www.youtube.com/embed/$3' }, vimeo: { matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, type: 'iframe', url: '//player.vimeo.com/video/$1' }, metacafe: { matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/, params: { autoPlay: 'yes' }, type: 'swf', url: function(rez, params, obj) { obj.swf.flashVars = 'playerVars=' + $.param(params, true); return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf' } }, dailymotion: { matcher: /dailymotion.com\/video\/(.*)\/?(.*)/, params: { additionalInfos: 0, autoStart: 1 }, type: 'swf', url: '//www.dailymotion.com/swf/video/$1' }, twitvid: { matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i, params: { autoplay: 0 }, type: 'iframe', url: '//www.twitvid.com/embed.php?guid=$1' }, twitpic: { matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i, type: 'image', url: '//twitpic.com/show/full/$1/' }, instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: 'image', url: '//$1/p/$2/media/?size=l' }, google_maps: { matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i, type: 'iframe', url: function(rez) { return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed') } } }, beforeLoad: function(opts, obj) { var url = obj.href || '',
                type = false,
                what, item, rez, params; for (what in opts) { if (opts.hasOwnProperty(what)) { item = opts[what];
                    rez = url.match(item.matcher); if (rez) { type = item.type;
                        params = $.extend(true, {}, item.params, obj[what] || ($.isPlainObject(opts[what]) ? opts[what].params : null));
                        url = $.type(item.url) === "function" ? item.url.call(this, rez, params, obj) : format(item.url, rez, params); break } } } if (type) { obj.href = url;
                obj.type = type;
                obj.autoHeight = false } } } }(jQuery));

// ==========
// Direction hover
// ==========
! function(a) { a.fn.directionalHover = function(b) {
        function c(a, b, c, e, f, g, h, i) { var n = 0;
            g / 2 >= e - i && (n ^= j), c - h >= f / 2 && (n ^= k), e - i > g / 2 && (n ^= l), f / 2 > c - h && (n ^= m), d(n, a, b, c - h, e - i, f / 2, g / 2) }

        function d(a, b, c, d, i, j, k) { e(a, n) ? f(d, i, j, k) ? h(b, c, 0, 2 * -j) : h(b, c, 2 * -k, 0) : e(a, o) ? g(d, i, j, k) ? h(b, c, 2 * -k, 0) : h(b, c, 0, 2 * j) : e(a, p) ? g(d, i, j, k) ? h(b, c, 0, 2 * -j) : h(b, c, 2 * k, 0) : e(a, q) && (f(d, i, j, k) ? h(b, c, 2 * k, 0) : h(b, c, 0, 2 * j)) }

        function e(a, b) { return (a & b) === b }

        function f(a, b, c, d) { return 0 > d * a - c * b }

        function g(a, b, c, d) { return 0 > c * (b - d) + d * a - c * d }

        function h(a, b, c, d) { "in" === b ? a.animate({ top: c, left: d }, 0, function() { a.stop().animate({ top: 0, left: 0 }, i.speed, i.easing) }) : "out" === b && a.animate({ top: 0, left: 0 }, 0, function() { a.stop().animate({ top: c, left: d }, i.speed, i.easing) }) } var i = a.extend({}, a.fn.directionalHover.defaults, b),
            j = 1,
            k = 2,
            l = 4,
            m = 8,
            n = j | m,
            o = j | k,
            p = l | m,
            q = l | k; return this.css({ position: "relative", overflow: "hidden" }), this.find("." + i.overlay).css({ position: "absolute", top: "-100%" }), this.each(function() { var b = a(this);
            b.hover(function(a) { c(b.find("." + i.overlay), "in", a.pageX, a.pageY, b.width(), b.height(), Math.floor(b.offset().left), b.offset().top) }, function(a) { c(b.find("." + i.overlay), "out", a.pageX, a.pageY, b.width(), b.height(), Math.floor(b.offset().left), b.offset().top) }) }) }, a.fn.directionalHover.defaults = { overlay: "dh-overlay", easing: "swing", speed: 400 } }(jQuery);