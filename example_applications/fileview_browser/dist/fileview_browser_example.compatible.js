"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;
    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }
    g.FileviewBrowserExample = f();
  }
})(function () {
  var define, module, exports;
  return function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = "function" == typeof require && require;
            if (!f && c) return c(i, !0);
            if (u) return u(i, !0);
            var a = new Error("Cannot find module '" + i + "'");
            throw a.code = "MODULE_NOT_FOUND", a;
          }
          var p = n[i] = {
            exports: {}
          };
          e[i][0].call(p.exports, function (r) {
            var n = e[i][1][r];
            return o(n || r);
          }, p, p.exports, r, e, n, t);
        }
        return n[i].exports;
      }
      for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
      return o;
    }
    return r;
  }()({
    1: [function (require, module, exports) {
      /**
       * Simple syntax highlighter for use with CodeJar.
       *
       * Provides basic keyword/string/number/comment highlighting for common languages.
       * Can be replaced with Prism.js or highlight.js for more sophisticated highlighting
       * by passing a custom highlight function to the view options.
       *
       * @module Pict-Code-Highlighter
       */

      // Language definition map
      var _LanguageDefinitions = {
        'javascript': {
          // Combined regex to tokenize: comments, strings, template literals, regex, then everything else
          tokenizer: /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(["'])(?:(?!\2|\\).|\\.)*?\2|(`(?:[^`\\]|\\.)*?`)|(\/(?![/*])(?:\\.|\[(?:\\.|[^\]])*\]|[^/\\\n])+\/[gimsuvy]*)/g,
          keywords: /\b(async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|from|function|get|if|import|in|instanceof|let|new|of|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/g,
          builtins: /\b(true|false|null|undefined|NaN|Infinity|console|window|document|Math|JSON|Array|Object|String|Number|Boolean|Date|RegExp|Map|Set|Promise|Error|Symbol|parseInt|parseFloat|require|module|exports)\b/g,
          numbers: /\b(\d+\.?\d*(?:e[+-]?\d+)?|0x[0-9a-fA-F]+|0b[01]+|0o[0-7]+)\b/g
        },
        'json': {
          tokenizer: /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*")/g,
          keywords: /\b(true|false|null)\b/g,
          numbers: /-?\b\d+\.?\d*(?:e[+-]?\d+)?\b/g
        },
        'html': {
          // Tokenizer captures: (1) comments, (2) strings, (3) tags with attributes
          tokenizer: /(<!--[\s\S]*?-->)|(["'])(?:(?!\2|\\).|\\.)*?\2|(<\/?[a-zA-Z][a-zA-Z0-9-]*(?:\s+[a-zA-Z-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*))?)*\s*\/?>)/g,
          // tagToken group index for identifying tag matches
          tagGroupIndex: 3
        },
        'css': {
          tokenizer: /(\/\*[\s\S]*?\*\/)|(["'])(?:(?!\2|\\).|\\.)*?\2/g,
          selectors: /([.#]?[a-zA-Z_][\w-]*(?:\s*[>+~]\s*[.#]?[a-zA-Z_][\w-]*)*)\s*\{/g,
          properties: /\b([a-zA-Z-]+)\s*:/g,
          numbers: /\b(\d+\.?\d*)(px|em|rem|%|vh|vw|s|ms|deg|fr)?\b/g,
          keywords: /\b(important|inherit|initial|unset|none|auto|block|inline|flex|grid)\b/g
        },
        'sql': {
          tokenizer: /(--[^\n]*|\/\*[\s\S]*?\*\/)|(["'])(?:(?!\2|\\).|\\.)*?\2/g,
          keywords: /\b(SELECT|FROM|WHERE|AND|OR|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|TABLE|DROP|ALTER|ADD|COLUMN|INDEX|JOIN|LEFT|RIGHT|INNER|OUTER|ON|AS|ORDER|BY|GROUP|HAVING|LIMIT|OFFSET|UNION|ALL|DISTINCT|COUNT|SUM|AVG|MIN|MAX|NOT|NULL|IS|IN|BETWEEN|LIKE|EXISTS|CASE|WHEN|THEN|ELSE|END|PRIMARY|KEY|FOREIGN|REFERENCES|CONSTRAINT|DEFAULT|CHECK|UNIQUE|CASCADE|GRANT|REVOKE|COMMIT|ROLLBACK|BEGIN|TRANSACTION|INT|VARCHAR|DATETIME|AUTO_INCREMENT|CURRENT_TIMESTAMP)\b/gi,
          numbers: /\b\d+\.?\d*\b/g
        }
      };

      // Alias some common language names
      _LanguageDefinitions['js'] = _LanguageDefinitions['javascript'];
      _LanguageDefinitions['htm'] = _LanguageDefinitions['html'];

      /**
       * Escape HTML special characters to prevent XSS when inserting into innerHTML.
       *
       * @param {string} pString - The string to escape
       * @returns {string} The escaped string
       */
      function escapeHTML(pString) {
        return pString.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }

      /**
       * Highlight a segment of code that is NOT inside a string or comment.
       * This applies keyword, number, and structural highlighting.
       *
       * @param {string} pCode - The code segment to highlight (already HTML-escaped)
       * @param {object} pLanguageDef - The language definition
       * @returns {string} The highlighted HTML
       */
      function highlightCodeSegment(pCode, pLanguageDef) {
        var tmpResult = pCode;

        // CSS selectors
        if (pLanguageDef.selectors) {
          pLanguageDef.selectors.lastIndex = 0;
          tmpResult = tmpResult.replace(pLanguageDef.selectors, '<span class="function-name">$1</span>{');
        }

        // CSS properties
        if (pLanguageDef.properties) {
          pLanguageDef.properties.lastIndex = 0;
          tmpResult = tmpResult.replace(pLanguageDef.properties, '<span class="property">$1</span>:');
        }

        // Keywords
        if (pLanguageDef.keywords) {
          pLanguageDef.keywords.lastIndex = 0;
          tmpResult = tmpResult.replace(pLanguageDef.keywords, '<span class="keyword">$1</span>');
        }

        // Builtins
        if (pLanguageDef.builtins) {
          pLanguageDef.builtins.lastIndex = 0;
          tmpResult = tmpResult.replace(pLanguageDef.builtins, '<span class="keyword">$1</span>');
        }

        // Numbers (CSS numbers may have units as a capture group, others do not)
        if (pLanguageDef.numbers) {
          pLanguageDef.numbers.lastIndex = 0;
          tmpResult = tmpResult.replace(pLanguageDef.numbers, function (pMatch) {
            return "<span class=\"number\">".concat(pMatch, "</span>");
          });
        }
        return tmpResult;
      }

      /**
       * Highlight an HTML tag token, applying tag name, attribute name, and attribute value colors.
       *
       * The approach: parse the raw tag into structured pieces first, then build the
       * highlighted output from those pieces. This avoids mixing raw text with HTML span
       * tags, which would cause regex replacements to match span attributes on subsequent passes.
       *
       * @param {string} pTag - The raw (unescaped) tag string
       * @returns {string} The highlighted HTML
       */
      function highlightHTMLTag(pTag) {
        var tmpResult = '';
        var tmpRest = pTag;

        // 1. Extract the opening bracket and tag name: < or </  followed by tagname
        var tmpTagNameMatch = tmpRest.match(/^(<\/?)([a-zA-Z][a-zA-Z0-9-]*)/);
        if (!tmpTagNameMatch) {
          // Not a recognizable tag, just escape the whole thing
          return escapeHTML(pTag);
        }
        tmpResult += escapeHTML(tmpTagNameMatch[1]);
        tmpResult += '<span class="tag">' + escapeHTML(tmpTagNameMatch[2]) + '</span>';
        tmpRest = tmpRest.substring(tmpTagNameMatch[0].length);

        // 2. Parse attributes from the remaining text (before the closing > or />)
        // Repeatedly match: whitespace + attr-name + optional =value
        var tmpAttrRegex = /^(\s+)([a-zA-Z-]+)(?:(\s*=\s*)(["'])([^"']*?)\4)?/;
        var tmpAttrMatch;
        while ((tmpAttrMatch = tmpRest.match(tmpAttrRegex)) !== null) {
          // Whitespace before the attribute
          tmpResult += tmpAttrMatch[1];
          // Attribute name
          tmpResult += '<span class="attr-name">' + escapeHTML(tmpAttrMatch[2]) + '</span>';

          // If there's an = value part
          if (tmpAttrMatch[3]) {
            tmpResult += escapeHTML(tmpAttrMatch[3]);
            tmpResult += '<span class="attr-value">' + escapeHTML(tmpAttrMatch[4]) + escapeHTML(tmpAttrMatch[5]) + escapeHTML(tmpAttrMatch[4]) + '</span>';
          }
          tmpRest = tmpRest.substring(tmpAttrMatch[0].length);
        }

        // 3. Whatever remains (whitespace, />, >) — escape it all
        tmpResult += escapeHTML(tmpRest);
        return tmpResult;
      }

      /**
       * Create a highlight function for a given language.
       *
       * The approach: use a single tokenizer regex to split the code into protected tokens
       * (comments, strings) and code segments. Process each segment independently.
       * This avoids placeholder/sentinel issues entirely.
       *
       * @param {string} pLanguage - The language identifier (e.g. "javascript", "json", "html")
       * @returns {function} A function that takes an element and highlights its textContent
       */
      function createHighlighter(pLanguage) {
        return function highlightElement(pElement) {
          var tmpCode = pElement.textContent;
          var tmpLanguageName = typeof pLanguage === 'string' ? pLanguage.toLowerCase() : 'javascript';
          var tmpLanguageDef = _LanguageDefinitions[tmpLanguageName];
          if (!tmpLanguageDef) {
            // No highlighting rules for this language; just escape and return
            pElement.innerHTML = escapeHTML(tmpCode);
            return;
          }
          if (!tmpLanguageDef.tokenizer) {
            // No tokenizer; just escape and apply keyword highlighting
            pElement.innerHTML = highlightCodeSegment(escapeHTML(tmpCode), tmpLanguageDef);
            return;
          }

          // Split the code into tokens using the tokenizer regex.
          // The tokenizer captures comments and strings as groups.
          // We process everything between matches as code.
          var tmpResult = '';
          var tmpLastIndex = 0;
          var tmpTagGroupIndex = tmpLanguageDef.tagGroupIndex || 0;
          tmpLanguageDef.tokenizer.lastIndex = 0;
          var tmpMatch;
          while ((tmpMatch = tmpLanguageDef.tokenizer.exec(tmpCode)) !== null) {
            // Add the code segment before this match
            if (tmpMatch.index > tmpLastIndex) {
              var tmpSegment = tmpCode.substring(tmpLastIndex, tmpMatch.index);
              tmpResult += highlightCodeSegment(escapeHTML(tmpSegment), tmpLanguageDef);
            }
            var tmpFullMatch = tmpMatch[0];

            // Determine token type from capture groups
            // Group 1 is always comments, Group 2+ are strings/template literals/regex
            if (tmpMatch[1]) {
              // Comment
              tmpResult += "<span class=\"comment\">".concat(escapeHTML(tmpFullMatch), "</span>");
            } else if (tmpTagGroupIndex > 0 && tmpMatch[tmpTagGroupIndex]) {
              // HTML tag — highlight tag name, attributes, and values
              tmpResult += highlightHTMLTag(tmpFullMatch);
            } else {
              // String, template literal, or regex
              tmpResult += "<span class=\"string\">".concat(escapeHTML(tmpFullMatch), "</span>");
            }
            tmpLastIndex = tmpLanguageDef.tokenizer.lastIndex;
          }

          // Add any remaining code after the last match
          if (tmpLastIndex < tmpCode.length) {
            var _tmpSegment = tmpCode.substring(tmpLastIndex);
            tmpResult += highlightCodeSegment(escapeHTML(_tmpSegment), tmpLanguageDef);
          }
          pElement.innerHTML = tmpResult;
        };
      }
      module.exports = createHighlighter;
      module.exports.LanguageDefinitions = _LanguageDefinitions;
    }, {}],
    2: [function (require, module, exports) {
      module.exports = {
        "RenderOnLoad": true,
        "DefaultRenderable": "CodeEditor-Wrap",
        "DefaultDestinationAddress": "#CodeEditor-Container-Div",
        "Templates": [{
          "Hash": "CodeEditor-Container",
          "Template": "<!-- CodeEditor-Container Rendering Soon -->"
        }],
        "Renderables": [{
          "RenderableHash": "CodeEditor-Wrap",
          "TemplateHash": "CodeEditor-Container",
          "DestinationAddress": "#CodeEditor-Container-Div"
        }],
        "TargetElementAddress": "#CodeEditor-Container-Div",
        // Address in AppData or other Pict address space to read/write code content
        "CodeDataAddress": false,
        // The language for syntax highlighting (e.g. "javascript", "html", "css", "json")
        "Language": "javascript",
        // Whether the editor is read-only
        "ReadOnly": false,
        // Tab character: use tab or spaces
        "Tab": "\t",
        // Whether to indent with the same whitespace as the previous line
        "IndentOn": /[({[]$/,
        // Whether to add a closing bracket/paren/brace
        "MoveToNewLine": /^[)}\]]/,
        // Whether to handle the closing character
        "AddClosing": true,
        // Whether to preserve indentation on new lines
        "CatchTab": true,
        // Whether to show line numbers
        "LineNumbers": true,
        // Default code content if no address is provided
        "DefaultCode": "// Enter your code here\n",
        // CSS for the code editor.
        //
        // Every color/font is wired through pict-provider-theme tokens so apps
        // using pict-provider-theme get themed code editor automatically.  Each
        // var() carries its original ATOM-One-Light hex as the fallback so apps
        // without pict-provider-theme installed look exactly as before.
        "CSS": ".pict-code-editor-wrap\n{\n\tdisplay: flex;\n\tfont-family: var(--theme-typography-family-mono, 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace);\n\tfont-size: 14px;\n\tline-height: 1.5;\n\tborder: 1px solid var(--theme-color-border-default, #D0D0D0);\n\tborder-radius: 4px;\n\toverflow: hidden;\n}\n.pict-code-editor-wrap .pict-code-line-numbers\n{\n\twidth: 40px;\n\tmin-width: 40px;\n\t/* padding-top/bottom are stamped at runtime from the editor's\n\t   computed padding so row 1 of the gutter aligns with row 1 of\n\t   the code; only horizontal padding is stylesheet-owned. */\n\tpadding: 0;\n\ttext-align: right;\n\tbackground: var(--theme-color-editor-linenumber-background, var(--theme-color-background-secondary, #F5F5F5));\n\tborder-right: 1px solid var(--theme-color-editor-gutter-border, var(--theme-color-border-default, #D0D0D0));\n\tcolor: var(--theme-color-editor-linenumber-text, var(--theme-color-text-muted, #999));\n\tfont-size: 13px;\n\t/* line-height, padding-top, padding-bottom, and font-family are\n\t   intentionally NOT declared here.  PictSectionCode._syncGutterMetrics()\n\t   copies them from the editor's computed styles at init and on every\n\t   editor resize, so the gutter is guaranteed to track the editor.\n\t   Declaring them in CSS would either be redundant (when matching) or\n\t   actively wrong (when the editor's metrics diverge \u2014 e.g. theme scale\n\t   changes the editor's font-size).  See codejar-linenumbers for the\n\t   canonical version of this pattern. */\n\tuser-select: none;\n\tpointer-events: none;\n\tbox-sizing: border-box;\n}\n.pict-code-editor-wrap .pict-code-line-numbers span\n{\n\tdisplay: block;\n\tpadding: 0 8px 0 0;\n}\n.pict-code-editor-wrap .pict-code-editor\n{\n\tmargin: 0;\n\tpadding: 10px 10px 10px 8px;\n\tmin-height: 100px;\n\tflex: 1;\n\tmin-width: 0;\n\toutline: none;\n\ttab-size: 4;\n\twhite-space: pre;\n\toverflow-wrap: normal;\n\tcolor: var(--theme-color-text-primary, #383A42);\n\tbackground: var(--theme-color-background-panel, #FAFAFA);\n\tcaret-color: var(--theme-color-brand-primary, #526FFF);\n\tborder-radius: 0 4px 4px 0;\n}\n.pict-code-editor-wrap .pict-code-editor.pict-code-no-line-numbers\n{\n\tpadding-left: 10px;\n\tborder-radius: 4px;\n}\n.pict-code-editor-wrap .pict-code-editor::selection,\n.pict-code-editor-wrap .pict-code-editor *::selection\n{\n\tbackground: var(--theme-color-editor-selection-background, var(--theme-color-selection-background, #B3D4FC));\n}\n/* Syntax token colors \u2014 each class binds to a Color.Syntax.* token from\n   pict-provider-theme. Fallback hexes match the One Light palette so apps\n   that don't install the theme provider look the same as before. */\n.pict-code-editor-wrap .pict-code-editor .keyword       { color: var(--theme-color-syntax-keyword,     #A626A4); }\n.pict-code-editor-wrap .pict-code-editor .string        { color: var(--theme-color-syntax-string,      #50A14F); }\n.pict-code-editor-wrap .pict-code-editor .number        { color: var(--theme-color-syntax-number,      #986801); }\n.pict-code-editor-wrap .pict-code-editor .comment       { color: var(--theme-color-syntax-comment,     #A0A1A7); font-style: italic; }\n.pict-code-editor-wrap .pict-code-editor .operator      { color: var(--theme-color-syntax-operator,    #0184BC); }\n.pict-code-editor-wrap .pict-code-editor .punctuation   { color: var(--theme-color-syntax-punctuation, #383A42); }\n.pict-code-editor-wrap .pict-code-editor .function-name { color: var(--theme-color-syntax-function,    #4078F2); }\n.pict-code-editor-wrap .pict-code-editor .property      { color: var(--theme-color-syntax-property,    #E45649); }\n.pict-code-editor-wrap .pict-code-editor .tag           { color: var(--theme-color-syntax-tag,         #E45649); }\n.pict-code-editor-wrap .pict-code-editor .attr-name     { color: var(--theme-color-syntax-attrname,    #986801); }\n.pict-code-editor-wrap .pict-code-editor .attr-value    { color: var(--theme-color-syntax-attrvalue,   #50A14F); }\n.pict-code-editor-wrap .pict-code-editor .builtin       { color: var(--theme-color-syntax-builtin,     #986801); }\n.pict-code-editor-wrap .pict-code-editor .type          { color: var(--theme-color-syntax-type,        #C18401); }\n.pict-code-editor-wrap .pict-code-editor .variable      { color: var(--theme-color-syntax-variable,    #383A42); }\n\n/* highlight.js class aliases \u2014 when host apps render code blocks with\n   highlight.js (e.g. markdown previews via CodeJar's hljs integration),\n   the output uses .hljs / .hljs-* classes rather than the bare token\n   classes pict-section-code emits. Mapping them here lets one stylesheet\n   theme both editor surfaces (bare classes) and hljs-rendered surfaces\n   without the host needing a separate per-app github.css. Rules are\n   intentionally unscoped (no .pict-code-editor-wrap parent) so they\n   apply globally wherever hljs paints. */\n.hljs                  { color: var(--theme-color-text-primary,         #383A42); background: transparent; }\n.hljs-keyword,\n.hljs-keyword.hljs-typeof,\n.hljs-selector-tag,\n.hljs-literal          { color: var(--theme-color-syntax-keyword,       #A626A4); }\n.hljs-string,\n.hljs-regexp,\n.hljs-template-tag,\n.hljs-template-variable { color: var(--theme-color-syntax-string,       #50A14F); }\n.hljs-number,\n.hljs-meta             { color: var(--theme-color-syntax-number,        #986801); }\n.hljs-comment,\n.hljs-quote            { color: var(--theme-color-syntax-comment,       #A0A1A7); font-style: italic; }\n.hljs-operator,\n.hljs-link             { color: var(--theme-color-syntax-operator,      #0184BC); }\n.hljs-punctuation      { color: var(--theme-color-syntax-punctuation,   #383A42); }\n.hljs-function .hljs-title,\n.hljs-title.function_,\n.hljs-title.class_     { color: var(--theme-color-syntax-function,      #4078F2); }\n.hljs-variable,\n.hljs-variable.language_,\n.hljs-params           { color: var(--theme-color-syntax-variable,      #383A42); }\n.hljs-type,\n.hljs-class .hljs-title { color: var(--theme-color-syntax-type,         #C18401); }\n.hljs-built_in,\n.hljs-builtin-name     { color: var(--theme-color-syntax-builtin,       #986801); }\n.hljs-attr,\n.hljs-property         { color: var(--theme-color-syntax-property,      #E45649); }\n.hljs-tag,\n.hljs-name             { color: var(--theme-color-syntax-tag,           #E45649); }\n.hljs-attribute        { color: var(--theme-color-syntax-attrname,      #986801); }\n.hljs-symbol           { color: var(--theme-color-syntax-attrvalue,     #50A14F); }\n.hljs-emphasis         { font-style: italic; }\n.hljs-strong           { font-weight: bold; }\n.hljs-deletion         { color: var(--theme-color-status-error,         #B62828); background: rgba(220, 50, 47, 0.08); }\n.hljs-addition         { color: var(--theme-color-status-success,       #2E7A3A); background: rgba(80, 161, 79, 0.10); }\n"
      };
    }, {}],
    3: [function (require, module, exports) {
      var libPictViewClass = require('pict-view');
      var libCreateHighlighter = require('./Pict-Code-Highlighter.js');
      var _DefaultConfiguration = require('./Pict-Section-Code-DefaultConfiguration.js');
      var PictSectionCode = /*#__PURE__*/function (_libPictViewClass) {
        function PictSectionCode(pFable, pOptions, pServiceHash) {
          var _this;
          _classCallCheck(this, PictSectionCode);
          var tmpOptions = Object.assign({}, _DefaultConfiguration, pOptions);
          _this = _callSuper(this, PictSectionCode, [pFable, tmpOptions, pServiceHash]);
          _this.initialRenderComplete = false;

          // The CodeJar instance
          _this.codeJar = null;

          // The highlight function (can be overridden)
          _this._highlightFunction = null;

          // The current language
          _this._language = _this.options.Language || 'javascript';
          return _this;
        }
        _inherits(PictSectionCode, _libPictViewClass);
        return _createClass(PictSectionCode, [{
          key: "onBeforeInitialize",
          value: function onBeforeInitialize() {
            _superPropGet(PictSectionCode, "onBeforeInitialize", this, 3)([]);
            this._codeJarPrototype = null;
            this.targetElement = false;

            // Build the default highlight function for the configured language
            this._highlightFunction = libCreateHighlighter(this._language);
            return _superPropGet(PictSectionCode, "onBeforeInitialize", this, 3)([]);
          }

          /**
           * Connect the CodeJar prototype.  If not passed explicitly, try to find it
           * as a global (window.CodeJar) or require it from the npm package.
           *
           * @param {function} [pCodeJarPrototype] - The CodeJar constructor function
           * @returns {boolean|void}
           */
        }, {
          key: "connectCodeJarPrototype",
          value: function connectCodeJarPrototype(pCodeJarPrototype) {
            if (typeof pCodeJarPrototype === 'function') {
              this._codeJarPrototype = pCodeJarPrototype;
              return;
            }

            // Try to find CodeJar in global scope
            if (typeof window !== 'undefined') {
              if (typeof window.CodeJar === 'function') {
                this.log.trace("PICT-Code Found CodeJar in window.CodeJar.");
                this._codeJarPrototype = window.CodeJar;
                return;
              }
            }
            this.log.error("PICT-Code No CodeJar prototype found. Include codejar via script tag or call connectCodeJarPrototype(CodeJar) explicitly.");
            return false;
          }
        }, {
          key: "onAfterRender",
          value: function onAfterRender(pRenderable) {
            // Ensure the CSS from all registered views is injected into the DOM
            this.pict.CSSMap.injectCSS();
            if (!this.initialRenderComplete) {
              this.onAfterInitialRender();
              this.initialRenderComplete = true;
            }
            return _superPropGet(PictSectionCode, "onAfterRender", this, 3)([pRenderable]);
          }
        }, {
          key: "onAfterInitialRender",
          value: function onAfterInitialRender() {
            var _this2 = this;
            // Resolve the CodeJar prototype if not already set
            if (!this._codeJarPrototype) {
              this.connectCodeJarPrototype();
            }
            if (!this._codeJarPrototype) {
              this.log.error("PICT-Code Cannot initialize editor; no CodeJar prototype available.");
              return false;
            }
            if (this.codeJar) {
              this.log.error("PICT-Code editor is already initialized!");
              return false;
            }

            // Find the target element
            var tmpTargetElementSet = this.services.ContentAssignment.getElement(this.options.TargetElementAddress);
            if (!tmpTargetElementSet || tmpTargetElementSet.length < 1) {
              this.log.error("PICT-Code Could not find target element [".concat(this.options.TargetElementAddress, "]!"));
              this.targetElement = false;
              return false;
            }
            this.targetElement = tmpTargetElementSet[0];

            // Build the editor DOM structure
            this._buildEditorDOM();

            // Get initial code content
            var tmpCode = this._resolveCodeContent();

            // Create the CodeJar options
            var tmpCodeJarOptions = {};
            if (this.options.Tab) {
              tmpCodeJarOptions.tab = this.options.Tab;
            }
            if (this.options.IndentOn) {
              tmpCodeJarOptions.indentOn = this.options.IndentOn;
            }
            if (this.options.MoveToNewLine) {
              tmpCodeJarOptions.moveToNewLine = this.options.MoveToNewLine;
            }
            if (typeof this.options.AddClosing !== 'undefined') {
              tmpCodeJarOptions.addClosing = this.options.AddClosing;
            }
            if (typeof this.options.CatchTab !== 'undefined') {
              tmpCodeJarOptions.catchTab = this.options.CatchTab;
            }
            this.customConfigureEditorOptions(tmpCodeJarOptions);

            // Instantiate CodeJar on the editor element
            var tmpEditorElement = this._editorElement;
            this.codeJar = this._codeJarPrototype(tmpEditorElement, this._highlightFunction, tmpCodeJarOptions);

            // CodeJar forces white-space:pre-wrap and overflow-wrap:break-word
            // via inline styles, which causes line wrapping that breaks the
            // line-number alignment.  Override back to non-wrapping so the
            // wrap container scrolls horizontally instead.
            this._resetEditorWrapStyles();

            // Set the initial code
            if (tmpCode) {
              this.codeJar.updateCode(tmpCode);
            }

            // Wire up the change handler
            this.codeJar.onUpdate(function (pCode) {
              _this2._updateLineNumbers();
              _this2.onCodeChange(pCode);
            });

            // Initial line number render
            this._updateLineNumbers();

            // Sync line-numbers vertical position with the editor's scroll.
            //
            // The editor element scrolls internally (CodeJar uses
            // contenteditable + overflow:auto for long content), but the
            // line-numbers div is a sibling with overflow:visible — without
            // this sync the line-numbers content stays glued at the top of
            // the wrap while the editor scrolls underneath it, so "line 1"
            // appears next to whatever line is actually showing.
            //
            // Using `transform: translateY(...)` instead of scrollTop keeps
            // the sync compositor-only (no reflow per scroll event) and
            // avoids needing to change the line-numbers element's overflow
            // from visible.  Passive listener so we don't block scrolling.
            if (this._lineNumbersElement) {
              var tmpLineNumbersEl = this._lineNumbersElement;
              tmpEditorElement.addEventListener('scroll', function () {
                tmpLineNumbersEl.style.transform = 'translateY(-' + tmpEditorElement.scrollTop + 'px)';
              }, {
                passive: true
              });
            }

            // Sync gutter typographic metrics from the editor.  The gutter
            // must use the editor's exact line-height (and matching padding)
            // or rows drift apart cumulatively.  See _syncGutterMetrics().
            this._syncGutterMetrics();

            // Watch the editor for size changes (window resize affecting
            // flex layout, container resize) and re-sync the gutter so it
            // continues to track the editor.  ResizeObserver fires once per
            // frame at most, so the cost is negligible.
            if (this._lineNumbersElement && typeof ResizeObserver === 'function') {
              var tmpSelf = this;
              this._editorResizeObserver = new ResizeObserver(function () {
                tmpSelf._syncGutterMetrics();
              });
              this._editorResizeObserver.observe(tmpEditorElement);
            }

            // Watch for direct style/class mutations on the editor.  Theme
            // providers that toggle scale by swapping a class on the editor,
            // or host code that adjusts editor typography via inline styles,
            // don't necessarily change the editor's box size — so the
            // ResizeObserver above wouldn't see them.  MutationObserver on
            // the attributes catches these cases.
            if (this._lineNumbersElement && typeof MutationObserver === 'function') {
              var _tmpSelf = this;
              this._editorStyleObserver = new MutationObserver(function () {
                _tmpSelf._syncGutterMetrics();
              });
              this._editorStyleObserver.observe(tmpEditorElement, {
                attributes: true,
                attributeFilter: ['style', 'class']
              });
            }

            // Handle read-only
            if (this.options.ReadOnly) {
              tmpEditorElement.setAttribute('contenteditable', 'false');
            }
          }

          /**
           * Build the editor DOM elements inside the target container.
           */
        }, {
          key: "_buildEditorDOM",
          value: function _buildEditorDOM() {
            // Clear the target
            this.targetElement.innerHTML = '';

            // Create wrapper
            var tmpWrap = document.createElement('div');
            tmpWrap.className = 'pict-code-editor-wrap';

            // Create line numbers container
            if (this.options.LineNumbers) {
              var tmpLineNumbers = document.createElement('div');
              tmpLineNumbers.className = 'pict-code-line-numbers';
              tmpWrap.appendChild(tmpLineNumbers);
              this._lineNumbersElement = tmpLineNumbers;
            }

            // Create the editor element (CodeJar needs a pre or div)
            var tmpEditor = document.createElement('div');
            tmpEditor.className = 'pict-code-editor language-' + this._language;
            if (!this.options.LineNumbers) {
              tmpEditor.className += ' pict-code-no-line-numbers';
            }
            tmpWrap.appendChild(tmpEditor);
            this.targetElement.appendChild(tmpWrap);
            this._editorElement = tmpEditor;
            this._wrapElement = tmpWrap;
          }

          /**
           * Update the line numbers display based on current code content.
           */
        }, {
          key: "_updateLineNumbers",
          value: function _updateLineNumbers() {
            if (!this.options.LineNumbers || !this._lineNumbersElement || !this._editorElement) {
              return;
            }
            var tmpCode = this._editorElement.textContent || '';
            var tmpLineCount = tmpCode.split('\n').length;
            var tmpHTML = '';
            for (var i = 1; i <= tmpLineCount; i++) {
              tmpHTML += "<span>".concat(i, "</span>");
            }
            this._lineNumbersElement.innerHTML = tmpHTML;

            // Defense-in-depth: every line-count rebuild is also a natural
            // re-sync point.  Cheap (one getComputedStyle + a handful of
            // style writes) and guarantees newly-added spans use the same
            // metrics as the editor at the moment of the rebuild.
            this._syncGutterMetrics();
          }

          /**
           * Copy typographic metrics from the editor element to the line-numbers
           * gutter so every gutter row lines up with its corresponding code row.
           *
           * The gutter is a sibling element with its own font/line-height
           * declarations — if any one diverges from the editor (unitless
           * line-height resolving against a different font-size, host CSS
           * overriding font-family, theme scale changing the editor's metrics),
           * the two desync and the drift accumulates with every line.
           *
           * The pattern is borrowed from the canonical `codejar-linenumbers`
           * library (julianpoemp/codejar-linenumbers), which solves the same
           * class of bug by reading the editor's computed styles at init and
           * stamping them onto the gutter.  We extend that here by also
           * re-stamping whenever the editor resizes (see the ResizeObserver in
           * onAfterInitialRender), so theme scale changes self-heal too.
           *
           * Public callers can invoke {@link syncMetrics} to force a re-sync
           * after any external change that affects editor typography.
           */
        }, {
          key: "_syncGutterMetrics",
          value: function _syncGutterMetrics() {
            if (!this._lineNumbersElement || !this._editorElement) {
              return;
            }
            if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
              return;
            }
            var tmpEditorStyle = window.getComputedStyle(this._editorElement);
            var tmpLineHeight = tmpEditorStyle.lineHeight;

            // `normal` is the spec default — leave the gutter untouched so the
            // stylesheet's declaration wins (we have no number to copy).
            if (tmpLineHeight && tmpLineHeight !== 'normal') {
              this._lineNumbersElement.style.lineHeight = tmpLineHeight;
            }

            // Match the editor's vertical padding so row 1 of the gutter sits
            // at the same y-offset as row 1 of the code.
            if (tmpEditorStyle.paddingTop) {
              this._lineNumbersElement.style.paddingTop = tmpEditorStyle.paddingTop;
            }
            if (tmpEditorStyle.paddingBottom) {
              this._lineNumbersElement.style.paddingBottom = tmpEditorStyle.paddingBottom;
            }

            // Font-family must match so the visual baseline of the digits
            // aligns with the code (different monospace fonts can have
            // different x-heights even at identical line-heights).
            if (tmpEditorStyle.fontFamily) {
              this._lineNumbersElement.style.fontFamily = tmpEditorStyle.fontFamily;
            }

            // Dev-time sanity check.  If the gutter's resolved row height
            // disagrees with the editor's, alignment will drift cumulatively.
            // Warn loudly so the regression is caught at the next reload
            // instead of silently accumulating pixels per line.
            if (typeof console !== 'undefined' && console.warn) {
              var tmpFirstSpan = this._lineNumbersElement.querySelector('span');
              if (tmpFirstSpan) {
                var tmpGutterRow = tmpFirstSpan.getBoundingClientRect().height;
                var tmpEditorRow = parseFloat(tmpLineHeight);
                if (tmpGutterRow && tmpEditorRow && Math.abs(tmpGutterRow - tmpEditorRow) > 0.5) {
                  console.warn('[pict-section-code] gutter/editor row-height mismatch: ' + 'gutter ' + tmpGutterRow + 'px vs editor ' + tmpEditorRow + 'px — ' + 'line numbers will drift. Check for CSS overriding ' + '.pict-code-line-numbers line-height.');
                }
              }
            }
          }

          /**
           * Public hook for hosts to force a gutter metrics re-sync after
           * external typography changes (theme scale, font-size swap, etc.).
           * The ResizeObserver attached at init handles most cases, but call
           * this from an app's post-theme-change hook for belt-and-suspenders
           * coverage.
           */
        }, {
          key: "syncMetrics",
          value: function syncMetrics() {
            this._syncGutterMetrics();
          }

          /**
           * Reset inline styles that CodeJar sets on the editor element.
           *
           * CodeJar forces white-space:pre-wrap and overflow-wrap:break-word so
           * long lines wrap visually.  That breaks line-number alignment because
           * each wrapped visual row is not a logical line.  Resetting to pre /
           * normal makes the outer .pict-code-editor-wrap scroll horizontally.
           */
        }, {
          key: "_resetEditorWrapStyles",
          value: function _resetEditorWrapStyles() {
            if (!this._editorElement) {
              return;
            }
            this._editorElement.style.whiteSpace = 'pre';
            this._editorElement.style.overflowWrap = 'normal';
          }

          /**
           * Resolve the initial code content from address or default.
           *
           * @returns {string} The code content
           */
        }, {
          key: "_resolveCodeContent",
          value: function _resolveCodeContent() {
            if (this.options.CodeDataAddress) {
              var tmpAddressSpace = {
                Fable: this.fable,
                Pict: this.fable,
                AppData: this.AppData,
                Bundle: this.Bundle,
                Options: this.options
              };
              var tmpAddressedData = this.fable.manifest.getValueByHash(tmpAddressSpace, this.options.CodeDataAddress);
              if (typeof tmpAddressedData === 'string') {
                return tmpAddressedData;
              } else {
                this.log.warn("PICT-Code Address [".concat(this.options.CodeDataAddress, "] did not return a string; it was ").concat(_typeof(tmpAddressedData), "."));
              }
            }
            return this.options.DefaultCode || '';
          }

          /**
           * Hook for subclasses to customize CodeJar options before instantiation.
           *
           * @param {object} pOptions - The CodeJar options object to modify
           */
        }, {
          key: "customConfigureEditorOptions",
          value: function customConfigureEditorOptions(pOptions) {
            // Override in subclass to tweak options
          }

          /**
           * Called when the code content changes.  Override in subclasses to handle changes.
           *
           * @param {string} pCode - The new code content
           */
        }, {
          key: "onCodeChange",
          value: function onCodeChange(pCode) {
            // Write back to data address if configured
            if (this.options.CodeDataAddress) {
              var tmpAddressSpace = {
                Fable: this.fable,
                Pict: this.fable,
                AppData: this.AppData,
                Bundle: this.Bundle,
                Options: this.options
              };
              this.fable.manifest.setValueByHash(tmpAddressSpace, this.options.CodeDataAddress, pCode);
            }
          }

          // -- Public API Methods --

          /**
           * Get the current code content.
           *
           * @returns {string} The current code
           */
        }, {
          key: "getCode",
          value: function getCode() {
            if (!this.codeJar) {
              this.log.warn('PICT-Code getCode called before editor initialized.');
              return '';
            }
            return this.codeJar.toString();
          }

          /**
           * Set the code content.
           *
           * Safe to call whether or not the editor's host element is currently
           * visible.  CodeJar's `updateCode()` internally touches the
           * selection APIs (to preserve cursor position across the swap), and
           * those APIs return null / empty Range when the contenteditable is
           * inside a `display:none` ancestor.  In that case CodeJar's internal
           * bookkeeping throws — but the actual content swap is the easy
           * part: just set the editor element's textContent and re-run the
           * highlighter directly.  When the user makes the tab visible later,
           * CodeJar picks up the new textContent and cursor handling resumes.
           *
           * @param {string} pCode - The code to set
           */
        }, {
          key: "setCode",
          value: function setCode(pCode) {
            if (!this.codeJar) {
              this.log.warn('PICT-Code setCode called before editor initialized.');
              return;
            }
            var tmpUsedFallback = false;
            try {
              this.codeJar.updateCode(pCode);
            } catch (pError) {
              // Fall back to a direct textContent swap + re-highlight.
              // This branch typically fires when setCode is called on a
              // tab that's not currently active (display:none), or on an
              // editor whose host has been detached from the DOM.
              tmpUsedFallback = true;
              try {
                if (this._editorElement) {
                  this._editorElement.textContent = typeof pCode === 'string' ? pCode : '';
                  if (typeof this._highlightFunction === 'function') {
                    this._highlightFunction(this._editorElement);
                  }
                }
              } catch (pFallbackError) {
                this.log.warn('PICT-Code setCode failed: ' + pError + ' (textContent fallback also failed: ' + pFallbackError + ')');
                return;
              }
            }
            // Line-number gutter sync is best-effort either way; if it
            // throws (e.g. gutter wasn't built because the editor never
            // became visible), keep going — line numbers redraw on the
            // next visible render.
            try {
              this._updateLineNumbers();
            } catch (pLineNumberError) {/* gutter sync is non-fatal */}
          }

          /**
           * Change the editor language and re-highlight.
           *
           * @param {string} pLanguage - The language identifier
           */
        }, {
          key: "setLanguage",
          value: function setLanguage(pLanguage) {
            var _this3 = this;
            this._language = pLanguage;
            this._highlightFunction = libCreateHighlighter(pLanguage);
            if (this._editorElement) {
              // Update the class
              this._editorElement.className = 'pict-code-editor language-' + pLanguage;
              if (!this.options.LineNumbers) {
                this._editorElement.className += ' pict-code-no-line-numbers';
              }
            }
            if (this.codeJar) {
              // Re-create the editor with the new highlight function
              var tmpCode = this.codeJar.toString();
              this.codeJar.destroy();
              this.codeJar = this._codeJarPrototype(this._editorElement, this._highlightFunction, {
                tab: this.options.Tab,
                catchTab: this.options.CatchTab,
                addClosing: this.options.AddClosing
              });
              this._resetEditorWrapStyles();
              this.codeJar.updateCode(tmpCode);
              this.codeJar.onUpdate(function (pCode) {
                _this3._updateLineNumbers();
                _this3.onCodeChange(pCode);
              });
            }
          }

          /**
           * Set a custom highlight function to replace the built-in highlighter.
           * Useful for integrating Prism.js, highlight.js, or any other library.
           *
           * @param {function} pHighlightFunction - A function that takes a DOM element and highlights its textContent
           */
        }, {
          key: "setHighlightFunction",
          value: function setHighlightFunction(pHighlightFunction) {
            var _this4 = this;
            if (typeof pHighlightFunction !== 'function') {
              this.log.error('PICT-Code setHighlightFunction requires a function.');
              return;
            }
            this._highlightFunction = pHighlightFunction;
            if (this.codeJar) {
              var tmpCode = this.codeJar.toString();
              this.codeJar.destroy();
              this.codeJar = this._codeJarPrototype(this._editorElement, this._highlightFunction, {
                tab: this.options.Tab,
                catchTab: this.options.CatchTab,
                addClosing: this.options.AddClosing
              });
              this._resetEditorWrapStyles();
              this.codeJar.updateCode(tmpCode);
              this.codeJar.onUpdate(function (pCode) {
                _this4._updateLineNumbers();
                _this4.onCodeChange(pCode);
              });
            }
          }

          /**
           * Set the read-only state of the editor.
           *
           * @param {boolean} pReadOnly - Whether the editor should be read-only
           */
        }, {
          key: "setReadOnly",
          value: function setReadOnly(pReadOnly) {
            this.options.ReadOnly = pReadOnly;
            if (this._editorElement) {
              this._editorElement.setAttribute('contenteditable', pReadOnly ? 'false' : 'true');
            }
          }

          /**
           * Destroy the editor and clean up.
           */
        }, {
          key: "destroy",
          value: function destroy() {
            if (this._editorResizeObserver) {
              this._editorResizeObserver.disconnect();
              this._editorResizeObserver = null;
            }
            if (this._editorStyleObserver) {
              this._editorStyleObserver.disconnect();
              this._editorStyleObserver = null;
            }
            if (this.codeJar) {
              this.codeJar.destroy();
              this.codeJar = null;
            }
          }

          /**
           * Marshal code content from the data address into the view.
           */
        }, {
          key: "marshalToView",
          value: function marshalToView() {
            _superPropGet(PictSectionCode, "marshalToView", this, 3)([]);
            if (this.codeJar && this.options.CodeDataAddress) {
              var tmpCode = this._resolveCodeContent();
              if (typeof tmpCode === 'string') {
                this.codeJar.updateCode(tmpCode);
                this._updateLineNumbers();
              }
            }
          }

          /**
           * Marshal the current code content back to the data address.
           */
        }, {
          key: "marshalFromView",
          value: function marshalFromView() {
            _superPropGet(PictSectionCode, "marshalFromView", this, 3)([]);
            if (this.codeJar && this.options.CodeDataAddress) {
              this.onCodeChange(this.codeJar.toString());
            }
          }
        }]);
      }(libPictViewClass);
      module.exports = PictSectionCode;
      module.exports.default_configuration = _DefaultConfiguration;
      module.exports.createHighlighter = libCreateHighlighter;

      // Demo bundle for pict-docuserve.  Host apps that embed docuserve and
      // want pict-section-code's demos visible in their docs site call
      // `require('pict-section-code').registerWithDocuserve(pict)` once at
      // app boot.  Silent no-op when Docuserve-Demos isn't installed.
      //
      // The require here is intentionally eager: browserify needs a static
      // `require()` at module-toplevel to trace and bundle the demos source.
      // The apparent circular dep (demos/index.js requires THIS module to
      // reach the PictSectionCode class) is benign — by the time demos/
      // index.js runs, `module.exports = PictSectionCode` has already
      // executed, so it sees a usable class.  The `.demos` and
      // `.registerWithDocuserve` attachments below run after the require
      // returns, so demos/index.js never observes them being undefined.
      var libCodeDemos = require('./demos');
      module.exports.demos = libCodeDemos.demos;
      module.exports.registerWithDocuserve = libCodeDemos.registerWithDocuserve;
    }, {
      "./Pict-Code-Highlighter.js": 1,
      "./Pict-Section-Code-DefaultConfiguration.js": 2,
      "./demos": 4,
      "pict-view": 41
    }],
    4: [function (require, module, exports) {
      /**
       * pict-section-code demos
       *
       * Each entry is consumed by pict-docuserve's `Docuserve-Demos` provider.
       * Hosts that want these demos to appear in their docs site call
       * `require('pict-section-code/source/demos').registerWithDocuserve(pict)`
       * once at app boot (typically inside their DocuserveApplication subclass
       * after `super(...)`).
       *
       * Each demo's Mount(pict, container, spec) signature creates a fresh
       * pict-section-code view instance inside the supplied container.  Spec
       * fields are passed through to the view config so a single demo template
       * can express "JavaScript with line numbers", "JSON read-only no
       * gutter", etc. without duplicating the wiring.
       */

      var libPictSectionCode = require('../Pict-Section-Code.js');

      /**
       * Internal helper: mount a pict-section-code instance into a host
       * container according to the demo spec.  Each call registers a uniquely
       * identified view so multiple demos on the same page coexist cleanly.
       */
      function mountCodeEditor(pPict, pContainer, pSpec) {
        // Tag this mount with an id we can target as the destination.
        var tmpDestId = 'demo-code-' + (pSpec.Hash || 'unnamed') + '-' + Date.now();
        pContainer.innerHTML = '<div id="' + tmpDestId + '"></div>';
        var tmpConfig = {
          ViewIdentifier: 'Demo-Code-' + tmpDestId,
          DefaultDestinationAddress: '#' + tmpDestId,
          Templates: [{
            Hash: 'CodeEditor-Container',
            Template: '<!-- demo code editor renders here -->'
          }],
          Renderables: [{
            RenderableHash: 'CodeEditor-Wrap',
            TemplateHash: 'CodeEditor-Container',
            DestinationAddress: '#' + tmpDestId
          }],
          TargetElementAddress: '#' + tmpDestId,
          Language: pSpec.Language || 'javascript',
          ReadOnly: !!pSpec.ReadOnly,
          LineNumbers: pSpec.LineNumbers !== false,
          Tab: pSpec.Tab || '\t',
          AddClosing: pSpec.AddClosing !== false,
          CatchTab: pSpec.CatchTab !== false,
          DefaultCode: pSpec.Code || '// example code\n',
          // AutoRender is intentionally OFF so we can pre-wire CodeJar
          // before the first render fires.  pict-section-code looks for
          // window.CodeJar by default; most hosts bundle CodeJar under
          // window.CodeJarModules.CodeJar (e.g. retold-content-system's
          // codejar-bundle.js), so we wire it explicitly here.
          AutoRender: false,
          RenderOnLoad: false
        };
        var tmpView = pPict.addView(tmpConfig.ViewIdentifier, tmpConfig, libPictSectionCode);
        if (!tmpView) {
          return null;
        }

        // Connect the CodeJar prototype + highlight function from the
        // CodeJarModules global if it's loaded.  Falls back to bare CodeJar
        // if the host published the prototype directly.
        if (typeof window !== 'undefined') {
          if (window.CodeJarModules && typeof window.CodeJarModules.CodeJar === 'function') {
            tmpView.connectCodeJarPrototype(window.CodeJarModules.CodeJar);
          } else if (typeof window.CodeJar === 'function') {
            tmpView.connectCodeJarPrototype(window.CodeJar);
          }

          // Wire highlight.js highlighting if the bundle exposes it.
          if (window.CodeJarModules && window.CodeJarModules.hljs) {
            var tmpHljs = window.CodeJarModules.hljs;
            var tmpLanguage = tmpConfig.Language;
            tmpView._highlightFunction = function (pElement) {
              pElement.removeAttribute('data-highlighted');
              delete pElement.dataset.highlighted;
              pElement.className = pElement.className.replace(/\bhljs\b/g, '').replace(/\blanguage-\S+/g, '').trim();
              pElement.classList.add('language-' + tmpLanguage);
              try {
                tmpHljs.highlightElement(pElement);
              } catch (pErr) {/* swallow — highlighting is best-effort */}
            };
          }
        }
        try {
          tmpView.render();
        } catch (pError) {/* pict-section-code logs its own errors */}
        return tmpView;
      }
      var _Demos = [{
        DemoSchemaVersion: 1,
        Hash: 'javascript-editor',
        Group: 'pict',
        Module: 'pict-section-code',
        Name: 'JavaScript editor',
        Description: 'Default pict-section-code configuration — line numbers on, highlight.js for JavaScript, two-space tab.',
        Spec: {
          Hash: 'javascript-editor',
          Language: 'javascript',
          LineNumbers: true,
          Tab: '  ',
          Code: '// A small example — try editing me.\n' + 'function fibonacci(n) {\n' + '  if (n <= 1) return n;\n' + '  return fibonacci(n - 1) + fibonacci(n - 2);\n' + '}\n' + '\n' + 'for (let i = 0; i < 10; i++) {\n' + '  console.log(`fib(${i}) =`, fibonacci(i));\n' + '}\n'
        },
        Mount: mountCodeEditor,
        Sources: [{
          Name: 'spec.json',
          Language: 'json',
          Content: '{\n' + '  "Language": "javascript",\n' + '  "LineNumbers": true,\n' + '  "Tab": "  ",\n' + '  "Code": "function fibonacci(n) { … }"\n' + '}'
        }]
      }, {
        DemoSchemaVersion: 1,
        Hash: 'json-readonly',
        Group: 'pict',
        Module: 'pict-section-code',
        Name: 'JSON viewer (read-only)',
        Description: 'Read-only mode with line numbers off — useful for embedded "show me the payload" surfaces in dashboards.',
        Spec: {
          Hash: 'json-readonly',
          Language: 'json',
          ReadOnly: true,
          LineNumbers: false,
          Code: '{\n' + '  "version": "1.0.7",\n' + '  "syntax": {\n' + '    "keyword":  "#A626A4",\n' + '    "string":   "#50A14F",\n' + '    "number":   "#986801",\n' + '    "function": "#4078F2"\n' + '  },\n' + '  "features": ["highlighting", "line-numbers", "readonly", "themed"]\n' + '}\n'
        },
        Mount: mountCodeEditor,
        Sources: [{
          Name: 'spec.json',
          Language: 'json',
          Content: '{\n' + '  "Language": "json",\n' + '  "ReadOnly": true,\n' + '  "LineNumbers": false\n' + '}'
        }]
      }, {
        DemoSchemaVersion: 1,
        Hash: 'css-editor',
        Group: 'pict',
        Module: 'pict-section-code',
        Name: 'CSS editor (4-space tab)',
        Description: 'CSS-flavoured highlighting with a 4-space tab and bracket auto-close turned off — leaner editing for stylesheet snippets.',
        Spec: {
          Hash: 'css-editor',
          Language: 'css',
          LineNumbers: true,
          Tab: '    ',
          AddClosing: false,
          Code: '/* Theme-aware token usage */\n' + '.docuserve-demo-title {\n' + '    color: var(--theme-color-text-primary, #3D3229);\n' + '    font-size: 1.5em;\n' + '    font-weight: 600;\n' + '}\n' + '\n' + '.docuserve-demo-description {\n' + '    color: var(--theme-color-text-secondary, #5E5549);\n' + '    line-height: 1.55;\n' + '}\n'
        },
        Mount: mountCodeEditor,
        Sources: [{
          Name: 'spec.json',
          Language: 'json',
          Content: '{\n' + '  "Language": "css",\n' + '  "LineNumbers": true,\n' + '  "Tab": "    ",\n' + '  "AddClosing": false\n' + '}'
        }]
      }];

      /**
       * Register every pict-section-code demo with the host docuserve app.
       *
       * @param {object} pPict - The Pict instance (typically `this.pict` inside
       *                        a DocuserveApplication subclass).
       * @returns {number} count of demos registered (0 if Docuserve-Demos
       *                   provider isn't present — silent no-op).
       */
      function registerWithDocuserve(pPict) {
        if (!pPict || !pPict.providers || !pPict.providers['Docuserve-Demos']) {
          return 0;
        }
        return pPict.providers['Docuserve-Demos'].registerAll(_Demos);
      }
      module.exports = _Demos;
      module.exports.demos = _Demos;
      module.exports.registerWithDocuserve = registerWithDocuserve;
    }, {
      "../Pict-Section-Code.js": 3
    }],
    5: [function (require, module, exports) {
      module.exports = {
        "name": "fable-serviceproviderbase",
        "version": "3.0.19",
        "description": "Simple base classes for fable services.",
        "main": "source/Fable-ServiceProviderBase.js",
        "scripts": {
          "start": "node source/Fable-ServiceProviderBase.js",
          "test": "npx quack test",
          "tests": "npx quack test -g",
          "coverage": "npx quack coverage",
          "build": "npx quack build",
          "types": "tsc -p ./tsconfig.build.json",
          "check": "tsc -p . --noEmit"
        },
        "types": "types/source/Fable-ServiceProviderBase.d.ts",
        "mocha": {
          "diff": true,
          "extension": ["js"],
          "package": "./package.json",
          "reporter": "spec",
          "slow": "75",
          "timeout": "5000",
          "ui": "tdd",
          "watch-files": ["source/**/*.js", "test/**/*.js"],
          "watch-ignore": ["lib/vendor"]
        },
        "repository": {
          "type": "git",
          "url": "https://github.com/stevenvelozo/fable-serviceproviderbase.git"
        },
        "keywords": ["entity", "behavior"],
        "author": "Steven Velozo <steven@velozo.com> (http://velozo.com/)",
        "license": "MIT",
        "bugs": {
          "url": "https://github.com/stevenvelozo/fable-serviceproviderbase/issues"
        },
        "homepage": "https://github.com/stevenvelozo/fable-serviceproviderbase",
        "devDependencies": {
          "@types/mocha": "^10.0.10",
          "fable": "^3.1.62",
          "quackage": "^1.0.58",
          "typescript": "^5.9.3"
        }
      };
    }, {}],
    6: [function (require, module, exports) {
      /**
      * Fable Service Base
      * @author <steven@velozo.com>
      */

      var libPackage = require('../package.json');
      var FableServiceProviderBase = /*#__PURE__*/function () {
        /**
         * The constructor can be used in two ways:
         * 1) With a fable, options object and service hash (the options object and service hash are optional)a
         * 2) With an object or nothing as the first parameter, where it will be treated as the options object
         *
         * @param {import('fable')|Record<string, any>} [pFable] - (optional) The fable instance, or the options object if there is no fable
         * @param {Record<string, any>|string} [pOptions] - (optional) The options object, or the service hash if there is no fable
         * @param {string} [pServiceHash] - (optional) The service hash to identify this service instance
         */
        function FableServiceProviderBase(pFable, pOptions, pServiceHash) {
          _classCallCheck(this, FableServiceProviderBase);
          /** @type {import('fable')} */
          this.fable;
          /** @type {string} */
          this.UUID;
          /** @type {Record<string, any>} */
          this.options;
          /** @type {Record<string, any>} */
          this.services;
          /** @type {Record<string, any>} */
          this.servicesMap;

          // Check if a fable was passed in; connect it if so
          if (_typeof(pFable) === 'object' && pFable.isFable) {
            this.connectFable(pFable);
          } else {
            this.fable = false;
          }

          // Initialize the services map if it wasn't passed in
          /** @type {Record<string, any>} */
          this._PackageFableServiceProvider = libPackage;

          // initialize options and UUID based on whether the fable was passed in or not.
          if (this.fable) {
            this.UUID = pFable.getUUID();
            this.options = _typeof(pOptions) === 'object' ? pOptions : {};
          } else {
            // With no fable, check to see if there was an object passed into either of the first two
            // Parameters, and if so, treat it as the options object
            this.options = _typeof(pFable) === 'object' && !pFable.isFable ? pFable : _typeof(pOptions) === 'object' ? pOptions : {};
            this.UUID = "CORE-SVC-".concat(Math.floor(Math.random() * (99999 - 10000) + 10000));
          }

          // It's expected that the deriving class will set this
          this.serviceType = "Unknown-".concat(this.UUID);

          // The service hash is used to identify the specific instantiation of the service in the services map
          this.Hash = typeof pServiceHash === 'string' ? pServiceHash : !this.fable && typeof pOptions === 'string' ? pOptions : "".concat(this.UUID);
        }

        /**
         * @param {import('fable')} pFable
         */
        return _createClass(FableServiceProviderBase, [{
          key: "connectFable",
          value: function connectFable(pFable) {
            if (_typeof(pFable) !== 'object' || !pFable.isFable) {
              var tmpErrorMessage = "Fable Service Provider Base: Cannot connect to Fable, invalid Fable object passed in.  The pFable parameter was a [".concat(_typeof(pFable), "].}");
              console.log(tmpErrorMessage);
              return new Error(tmpErrorMessage);
            }
            if (!this.fable) {
              this.fable = pFable;
            }
            if (!this.log) {
              this.log = this.fable.Logging;
            }
            if (!this.services) {
              this.services = this.fable.services;
            }
            if (!this.servicesMap) {
              this.servicesMap = this.fable.servicesMap;
            }
            return true;
          }
        }]);
      }();
      _defineProperty(FableServiceProviderBase, "isFableService", true);
      module.exports = FableServiceProviderBase;

      // This is left here in case we want to go back to having different code/base class for "core" services
      module.exports.CoreServiceProviderBase = FableServiceProviderBase;
    }, {
      "../package.json": 5
    }],
    7: [function (require, module, exports) {
      /**
       * Theme Diagram Adapter
       *
       * Helper utilities for plugging diagram renderers (Mermaid today,
       * Excalidraw / chart libraries next) into the pict-provider-theme
       * lifecycle.
       *
       * Why this exists:
       *   Diagram engines like Mermaid bake colors into the SVG at render
       *   time. Once rendered, CSS alone cannot recolor node fills, cluster
       *   backgrounds, or edge stroke ends — those are inline attributes on
       *   <rect>, <path>, <polygon>, etc.  Switching light/dark requires
       *   the engine to re-render with a fresh themeVariables block.
       *
       *   Pre-adapter, every view that hosted a Mermaid block had to:
       *     - read every CSS custom property by hand
       *     - mirror a 20+ key themeVariables object
       *     - wire its own onApply subscription
       *     - stash diagram source on the DOM
       *     - clear data-processed + re-run on theme change
       *
       *   The adapter centralizes all of that.  Section views call
       *   `adapter.adaptMermaid(mermaid, options)` and stop caring about the
       *   token list, the listener, and the refresh dance.
       *
       *  Public API:
       *     buildMermaidThemeVariables(pOverrides)        - read fresh tokens, return mermaid themeVariables
       *     getMermaidTokenMap()                          - canonical {mermaidKey: cssVarName} map
       *     initializeMermaid(mermaid, pOverrides)        - mermaid.initialize() with the right base + themeVariables
       *     refreshMermaidDiagrams(pSelectorOrRoot)       - restore source, clear data-processed, re-run mermaid.run
       *     stashMermaidSource(pNodes)                    - cache source on data-mermaid-source before first run
       *     adaptMermaid(provider, mermaid, pOptions)     - one-shot: initialize + subscribe + return handle
       *     readCSSVar(pName, pFallback, pRoot)           - fresh getComputedStyle read with fallback
       *
       *  All helpers are stateless and safe to call repeatedly.  Subscriptions
       *  return a dispose function the caller can hold onto for teardown.
       *
       * @author Steven Velozo <steven@velozo.com>
       * @license MIT
       */

      // Canonical mapping: mermaid themeVariables key -> CSS custom property name -> fallback.
      // Fallbacks match the pict-default LIGHT palette so unthemed apps look like
      // the default theme rather than a third unrelated palette.
      var MERMAID_TOKEN_MAP = [
      // Primary surfaces (node fills + cluster background)
      {
        Key: 'primaryColor',
        Var: '--theme-color-background-panel',
        Fallback: '#ffffff'
      }, {
        Key: 'primaryTextColor',
        Var: '--theme-color-text-primary',
        Fallback: '#1a1a1a'
      }, {
        Key: 'primaryBorderColor',
        Var: '--theme-color-brand-primary',
        Fallback: '#3357c7'
      },
      // Secondary (alt rows, alternate nodes, sequence actor bg)
      {
        Key: 'secondaryColor',
        Var: '--theme-color-background-secondary',
        Fallback: '#f5f5f5'
      }, {
        Key: 'secondaryTextColor',
        Var: '--theme-color-text-secondary',
        Fallback: '#454545'
      }, {
        Key: 'secondaryBorderColor',
        Var: '--theme-color-border-default',
        Fallback: '#d6d6d6'
      },
      // Tertiary (clusters, accent groups)
      {
        Key: 'tertiaryColor',
        Var: '--theme-color-background-tertiary',
        Fallback: '#ebebeb'
      }, {
        Key: 'tertiaryTextColor',
        Var: '--theme-color-text-secondary',
        Fallback: '#454545'
      }, {
        Key: 'tertiaryBorderColor',
        Var: '--theme-color-border-light',
        Fallback: '#e9e9e9'
      },
      // Page-level + line + note
      {
        Key: 'background',
        Var: '--theme-color-background-panel',
        Fallback: '#ffffff'
      }, {
        Key: 'mainBkg',
        Var: '--theme-color-background-panel',
        Fallback: '#ffffff'
      }, {
        Key: 'secondBkg',
        Var: '--theme-color-background-secondary',
        Fallback: '#f5f5f5'
      }, {
        Key: 'lineColor',
        Var: '--theme-color-text-secondary',
        Fallback: '#454545'
      }, {
        Key: 'textColor',
        Var: '--theme-color-text-primary',
        Fallback: '#1a1a1a'
      }, {
        Key: 'noteBkgColor',
        Var: '--theme-color-background-tertiary',
        Fallback: '#ebebeb'
      }, {
        Key: 'noteTextColor',
        Var: '--theme-color-text-primary',
        Fallback: '#1a1a1a'
      }, {
        Key: 'noteBorderColor',
        Var: '--theme-color-border-default',
        Fallback: '#d6d6d6'
      },
      // Status (Mermaid uses these for error/warning highlights)
      {
        Key: 'errorBkgColor',
        Var: '--theme-color-status-error',
        Fallback: '#b62828'
      }, {
        Key: 'errorTextColor',
        Var: '--theme-color-text-on-brand',
        Fallback: '#ffffff'
      },
      // Typography
      {
        Key: 'fontFamily',
        Var: '--theme-typography-family-sans',
        Fallback: 'inherit'
      }];

      /**
       * Read a CSS custom property off pRoot (default: documentElement).
       * Always issues a fresh getComputedStyle so the value reflects the
       * current class state on <html> (theme-light / theme-dark).
       *
       * @param {string} pName     - variable name including '--' prefix
       * @param {string} [pFallback] - returned when the variable is unset/empty
       * @param {Element} [pRoot]  - element to compute style against
       * @returns {string}
       */
      function readCSSVar(pName, pFallback, pRoot) {
        if (typeof window === 'undefined' || typeof document === 'undefined') {
          return pFallback || '';
        }
        var tmpRoot = pRoot || document.documentElement;
        if (!tmpRoot) {
          return pFallback || '';
        }
        var tmpVal = (getComputedStyle(tmpRoot).getPropertyValue(pName) || '').trim();
        return tmpVal || pFallback || '';
      }

      /**
       * Returns the canonical {mermaidKey: cssVarName} mapping.  Useful for
       * apps that need to inspect or extend the token list (e.g. to add
       * gantt / sequence / pie-specific tokens for a custom diagram type).
       *
       * @returns {Array<{Key, Var, Fallback}>}
       */
      function getMermaidTokenMap() {
        // Defensive copy so callers can't mutate the canonical list.
        return MERMAID_TOKEN_MAP.map(function (tmpEntry) {
          return {
            Key: tmpEntry.Key,
            Var: tmpEntry.Var,
            Fallback: tmpEntry.Fallback
          };
        });
      }

      /**
       * Read every token in the mermaid map off the current document and
       * return an object suitable for mermaid.initialize({themeVariables}).
       *
       * @param {object} [pOverrides] - extra themeVariables keys to merge on top
       * @returns {object}
       */
      function buildMermaidThemeVariables(pOverrides) {
        var tmpVars = {};
        for (var i = 0; i < MERMAID_TOKEN_MAP.length; i++) {
          var tmpEntry = MERMAID_TOKEN_MAP[i];
          tmpVars[tmpEntry.Key] = readCSSVar(tmpEntry.Var, tmpEntry.Fallback);
        }
        if (pOverrides && _typeof(pOverrides) === 'object') {
          var tmpKeys = Object.keys(pOverrides);
          for (var j = 0; j < tmpKeys.length; j++) {
            tmpVars[tmpKeys[j]] = pOverrides[tmpKeys[j]];
          }
        }
        return tmpVars;
      }

      /**
       * Call mermaid.initialize() with the canonical pict theme bindings.
       * Safe to call repeatedly; mermaid simply merges new config.
       *
       * @param {object} mermaid - the mermaid module / global
       * @param {object} [pOverrides] - extra themeVariables keys, or { config: ... }
       *                                to override startOnLoad / securityLevel / theme
       * @returns {boolean} true if initialize ran, false if no mermaid available
       */
      function initializeMermaid(mermaid, pOverrides) {
        if (!mermaid || typeof mermaid.initialize !== 'function') {
          return false;
        }
        var tmpOverrides = pOverrides || {};
        var tmpThemeOverrides = tmpOverrides.themeVariables;
        var tmpConfigOverrides = tmpOverrides.config || {};
        var tmpVars = buildMermaidThemeVariables(tmpThemeOverrides);
        var tmpConfig = Object.assign({
          startOnLoad: false,
          theme: 'base',
          securityLevel: 'loose'
        }, tmpConfigOverrides, {
          themeVariables: tmpVars
        });
        mermaid.initialize(tmpConfig);
        return true;
      }

      /**
       * Cache each diagram's source text on data-mermaid-source so a later
       * refresh can restore it.  Mermaid replaces textContent with the
       * rendered SVG during run(); without this stash there's no way to
       * re-run.
       *
       * @param {NodeList|Array<Element>} pNodes
       */
      function stashMermaidSource(pNodes) {
        if (!pNodes || pNodes.length < 1) {
          return;
        }
        for (var i = 0; i < pNodes.length; i++) {
          var tmpEl = pNodes[i];
          if (!tmpEl || typeof tmpEl.getAttribute !== 'function') {
            continue;
          }
          if (!tmpEl.hasAttribute('data-mermaid-source')) {
            tmpEl.setAttribute('data-mermaid-source', tmpEl.textContent);
          }
        }
      }

      /**
       * Restore each pre.mermaid[data-mermaid-source] element to its source
       * text, drop the data-processed flag (mermaid skips elements with that
       * flag set), strip the mermaid-rendered helper class if present, and
       * re-run mermaid against them.
       *
       * @param {string|Element|Document} [pSelectorOrRoot]
       *   - string: querySelectorAll target (defaults to whole document)
       *   - Element: scoped root to search inside
       *   - omitted: whole document
       * @returns {Promise|null} the mermaid.run() promise, or null if no work
       */
      function refreshMermaidDiagrams(pSelectorOrRoot) {
        if (typeof document === 'undefined') {
          return null;
        }
        var tmpMermaid = typeof mermaid !== 'undefined' ? mermaid : null;
        if (!tmpMermaid || typeof tmpMermaid.run !== 'function') {
          return null;
        }
        var tmpRendered = _resolveMermaidNodes(pSelectorOrRoot);
        if (!tmpRendered || tmpRendered.length < 1) {
          return null;
        }
        for (var i = 0; i < tmpRendered.length; i++) {
          var tmpEl = tmpRendered[i];
          var tmpSrc = tmpEl.getAttribute('data-mermaid-source');
          if (tmpSrc !== null) {
            tmpEl.textContent = tmpSrc;
          }
          tmpEl.removeAttribute('data-processed');
          if (tmpEl.classList && typeof tmpEl.classList.remove === 'function') {
            tmpEl.classList.remove('mermaid-rendered');
          }
        }
        try {
          return tmpMermaid.run({
            nodes: tmpRendered
          });
        } catch (pError) {
          // Surface to the caller; they're already wrapping in try/catch in
          // most cases.  Return a rejected promise so .catch() consumers fire.
          return Promise.reject(pError);
        }
      }
      function _resolveMermaidNodes(pSelectorOrRoot) {
        var tmpSelector = 'pre.mermaid[data-mermaid-source]';
        if (!pSelectorOrRoot) {
          return document.querySelectorAll(tmpSelector);
        }
        if (typeof pSelectorOrRoot === 'string') {
          // Treat the string as a scope selector; collect mermaid nodes inside it.
          var tmpScope = document.querySelector(pSelectorOrRoot);
          if (!tmpScope) {
            return [];
          }
          return tmpScope.querySelectorAll(tmpSelector);
        }
        if (pSelectorOrRoot.querySelectorAll) {
          return pSelectorOrRoot.querySelectorAll(tmpSelector);
        }
        return [];
      }

      /**
       * One-shot: initialize mermaid against the active theme, subscribe to
       * theme apply events, and return a handle the caller can use for
       * teardown / manual refresh.
       *
       *   let tmpHandle = adaptMermaid(pict.providers.Theme, mermaid, {
       *       refreshScope: '#Pict-Content-Body'
       *   });
       *   // ... later, on unload:
       *   tmpHandle.dispose();
       *
       * @param {object} pProvider - pict-provider-theme instance
       * @param {object} pMermaid  - the mermaid module / global
       * @param {object} [pOptions]
       *   @param {string|Element} [pOptions.refreshScope] - passed to refreshMermaidDiagrams
       *   @param {object} [pOptions.themeOverrides]       - extra themeVariables keys
       *   @param {object} [pOptions.configOverrides]      - extra mermaid.initialize() top-level keys
       *   @param {function} [pOptions.onBeforeRefresh]    - called before each refresh; signature (pContext)
       *   @param {function} [pOptions.onAfterRefresh]     - called after each refresh resolves; signature (pContext)
       * @returns {{ dispose: function, refresh: function, reinitialize: function, subscribed: boolean }}
       */
      function adaptMermaid(pProvider, pMermaid, pOptions) {
        var tmpOptions = pOptions || {};
        var tmpInitOverrides = {
          themeVariables: tmpOptions.themeOverrides,
          config: tmpOptions.configOverrides
        };

        // Always initialize, even if no provider — the static base theme should
        // still pick up whatever CSS variables the page does have.
        initializeMermaid(pMermaid, tmpInitOverrides);
        var tmpRefresh = function tmpRefresh(pContext) {
          if (typeof tmpOptions.onBeforeRefresh === 'function') {
            try {
              tmpOptions.onBeforeRefresh(pContext || {});
            } catch (e) {/* swallow; refresh must not be gated on listener errors */}
          }
          initializeMermaid(pMermaid, tmpInitOverrides);
          var tmpResult = refreshMermaidDiagrams(tmpOptions.refreshScope);
          if (tmpResult && typeof tmpResult.then === 'function' && typeof tmpOptions.onAfterRefresh === 'function') {
            tmpResult.then(function () {
              try {
                tmpOptions.onAfterRefresh(pContext || {});
              } catch (e) {/* swallow */}
            }, function () {
              /* error path: onAfterRefresh still fires so the UI can drop spinners */
              try {
                tmpOptions.onAfterRefresh(pContext || {});
              } catch (e) {/* swallow */}
            });
          }
          return tmpResult;
        };
        var tmpDispose = function tmpDispose() {};
        var tmpSubscribed = false;
        if (pProvider && typeof pProvider.onApply === 'function') {
          tmpDispose = pProvider.onApply(function (pBundle, pContext) {
            tmpRefresh(pContext || {});
          });
          tmpSubscribed = true;
        }
        return {
          dispose: function dispose() {
            if (typeof tmpDispose === 'function') {
              tmpDispose();
            }
          },
          refresh: tmpRefresh,
          reinitialize: function reinitialize() {
            initializeMermaid(pMermaid, tmpInitOverrides);
          },
          subscribed: tmpSubscribed
        };
      }
      module.exports = {
        MERMAID_TOKEN_MAP: MERMAID_TOKEN_MAP,
        readCSSVar: readCSSVar,
        getMermaidTokenMap: getMermaidTokenMap,
        buildMermaidThemeVariables: buildMermaidThemeVariables,
        initializeMermaid: initializeMermaid,
        stashMermaidSource: stashMermaidSource,
        refreshMermaidDiagrams: refreshMermaidDiagrams,
        adaptMermaid: adaptMermaid
      };
    }, {}],
    8: [function (require, module, exports) {
      module.exports = {
        "name": "pict-provider",
        "version": "1.0.13",
        "description": "Pict Provider Base Class",
        "main": "source/Pict-Provider.js",
        "scripts": {
          "start": "node source/Pict-Provider.js",
          "test": "npx quack test",
          "tests": "npx quack test -g",
          "coverage": "npx quack coverage",
          "build": "npx quack build",
          "docker-dev-build": "docker build ./ -f Dockerfile_LUXURYCode -t pict-provider-image:local",
          "docker-dev-run": "docker run -it -d --name pict-provider-dev -p 24125:8080 -p 30027:8086 -v \"$PWD/.config:/home/coder/.config\"  -v \"$PWD:/home/coder/pict-provider\" -u \"$(id -u):$(id -g)\" -e \"DOCKER_USER=$USER\" pict-provider-image:local",
          "docker-dev-shell": "docker exec -it pict-provider-dev /bin/bash",
          "lint": "eslint source/**",
          "types": "tsc -p ."
        },
        "types": "types/source/Pict-Provider.d.ts",
        "repository": {
          "type": "git",
          "url": "git+https://github.com/stevenvelozo/pict-provider.git"
        },
        "author": "steven velozo <steven@velozo.com>",
        "license": "MIT",
        "bugs": {
          "url": "https://github.com/stevenvelozo/pict-provider/issues"
        },
        "homepage": "https://github.com/stevenvelozo/pict-provider#readme",
        "devDependencies": {
          "@eslint/js": "^9.39.1",
          "eslint": "^9.39.1",
          "pict": "^1.0.351",
          "pict-docuserve": "^0.1.5",
          "quackage": "^1.1.0",
          "typescript": "^5.9.3"
        },
        "dependencies": {
          "fable-serviceproviderbase": "^3.0.19"
        },
        "mocha": {
          "diff": true,
          "extension": ["js"],
          "package": "./package.json",
          "reporter": "spec",
          "slow": "75",
          "timeout": "5000",
          "ui": "tdd",
          "watch-files": ["source/**/*.js", "test/**/*.js"],
          "watch-ignore": ["lib/vendor"]
        }
      };
    }, {}],
    9: [function (require, module, exports) {
      var libFableServiceBase = require('fable-serviceproviderbase');
      var libPackage = require('../package.json');
      var defaultPictProviderSettings = {
        ProviderIdentifier: false,
        // If this is set to true, when the App initializes this will.
        // After the App initializes, initialize will be called as soon as it's added.
        AutoInitialize: true,
        AutoInitializeOrdinal: 0,
        AutoLoadDataWithApp: true,
        AutoLoadDataOrdinal: 0,
        AutoSolveWithApp: true,
        AutoSolveOrdinal: 0,
        Manifests: {},
        Templates: []
      };
      var PictProvider = /*#__PURE__*/function (_libFableServiceBase) {
        /**
         * @param {import('fable')} pFable - The Fable instance.
         * @param {Record<string, any>} [pOptions] - The options for the provider.
         * @param {string} [pServiceHash] - The service hash for the provider.
         */
        function PictProvider(pFable, pOptions, pServiceHash) {
          var _this5;
          _classCallCheck(this, PictProvider);
          // Intersect default options, parent constructor, service information
          var tmpOptions = Object.assign({}, JSON.parse(JSON.stringify(defaultPictProviderSettings)), pOptions);
          _this5 = _callSuper(this, PictProvider, [pFable, tmpOptions, pServiceHash]);

          /** @type {import('fable') & import('pict') & { instantiateServiceProviderWithoutRegistration(pServiceType: string, pOptions?: Record<string, any>, pCustomServiceHash?: string): any }} */
          _this5.fable;
          /** @type {import('fable') & import('pict') & { instantiateServiceProviderWithoutRegistration(pServiceType: string, pOptions?: Record<string, any>, pCustomServiceHash?: string): any }} */
          _this5.pict;
          /** @type {any} */
          _this5.log;
          /** @type {Record<string, any>} */
          _this5.options;
          /** @type {string} */
          _this5.UUID;
          /** @type {string} */
          _this5.Hash;
          if (!_this5.options.ProviderIdentifier) {
            _this5.options.ProviderIdentifier = "AutoProviderID-".concat(_this5.fable.getUUID());
          }
          _this5.serviceType = 'PictProvider';
          /** @type {Record<string, any>} */
          _this5._Package = libPackage;

          // Convenience and consistency naming
          _this5.pict = _this5.fable;

          // Wire in the essential Pict application state
          /** @type {Record<string, any>} */
          _this5.AppData = _this5.pict.AppData;
          /** @type {Record<string, any>} */
          _this5.Bundle = _this5.pict.Bundle;
          _this5.initializeTimestamp = false;
          _this5.lastSolvedTimestamp = false;
          for (var i = 0; i < _this5.options.Templates.length; i++) {
            var tmpDefaultTemplate = _this5.options.Templates[i];
            if (!tmpDefaultTemplate.hasOwnProperty('Postfix') || !tmpDefaultTemplate.hasOwnProperty('Template')) {
              _this5.log.error("PictProvider [".concat(_this5.UUID, "]::[").concat(_this5.Hash, "] ").concat(_this5.options.ProviderIdentifier, " could not load Default Template ").concat(i, " in the options array."), tmpDefaultTemplate);
            } else {
              if (!tmpDefaultTemplate.Source) {
                tmpDefaultTemplate.Source = "PictProvider [".concat(_this5.UUID, "]::[").concat(_this5.Hash, "] ").concat(_this5.options.ProviderIdentifier, " options object.");
              }
              _this5.pict.TemplateProvider.addDefaultTemplate(tmpDefaultTemplate.Prefix, tmpDefaultTemplate.Postfix, tmpDefaultTemplate.Template, tmpDefaultTemplate.Source);
            }
          }
          return _this5;
        }

        /* -------------------------------------------------------------------------- */
        /*                        Code Section: Initialization                        */
        /* -------------------------------------------------------------------------- */
        _inherits(PictProvider, _libFableServiceBase);
        return _createClass(PictProvider, [{
          key: "onBeforeInitialize",
          value: function onBeforeInitialize() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictProvider [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ProviderIdentifier, " onBeforeInitialize:"));
            }
            return true;
          }

          /**
           * @param {(pError?: Error) => void} fCallback - The callback to call after pre-pinitialization.
           *
           * @return {void}
           */
        }, {
          key: "onBeforeInitializeAsync",
          value: function onBeforeInitializeAsync(fCallback) {
            this.onBeforeInitialize();
            return fCallback();
          }
        }, {
          key: "onInitialize",
          value: function onInitialize() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictProvider [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ProviderIdentifier, " onInitialize:"));
            }
            return true;
          }

          /**
           * @param {(pError?: Error) => void} fCallback - The callback to call after initialization.
           *
           * @return {void}
           */
        }, {
          key: "onInitializeAsync",
          value: function onInitializeAsync(fCallback) {
            this.onInitialize();
            return fCallback();
          }
        }, {
          key: "initialize",
          value: function initialize() {
            if (this.pict.LogControlFlow) {
              this.log.trace("PICT-ControlFlow PROVIDER [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ProviderIdentifier, " initialize:"));
            }
            if (!this.initializeTimestamp) {
              this.onBeforeInitialize();
              this.onInitialize();
              this.onAfterInitialize();
              this.initializeTimestamp = this.pict.log.getTimeStamp();
              return true;
            } else {
              this.log.warn("PictProvider [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ProviderIdentifier, " initialize called but initialization is already completed.  Aborting."));
              return false;
            }
          }

          /**
           * @param {(pError?: Error) => void} fCallback - The callback to call after initialization.
           *
           * @return {void}
           */
        }, {
          key: "initializeAsync",
          value: function initializeAsync(fCallback) {
            var _this6 = this;
            if (this.pict.LogControlFlow) {
              this.log.trace("PICT-ControlFlow PROVIDER [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ProviderIdentifier, " initializeAsync:"));
            }
            if (!this.initializeTimestamp) {
              var tmpAnticipate = this.pict.instantiateServiceProviderWithoutRegistration('Anticipate');
              if (this.pict.LogNoisiness > 0) {
                this.log.info("PictProvider [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ProviderIdentifier, " beginning initialization..."));
              }
              tmpAnticipate.anticipate(this.onBeforeInitializeAsync.bind(this));
              tmpAnticipate.anticipate(this.onInitializeAsync.bind(this));
              tmpAnticipate.anticipate(this.onAfterInitializeAsync.bind(this));
              tmpAnticipate.wait(function (pError) {
                _this6.initializeTimestamp = _this6.pict.log.getTimeStamp();
                if (pError) {
                  _this6.log.error("PictProvider [".concat(_this6.UUID, "]::[").concat(_this6.Hash, "] ").concat(_this6.options.ProviderIdentifier, " initialization failed: ").concat(pError.message || pError), {
                    Stack: pError.stack
                  });
                } else if (_this6.pict.LogNoisiness > 0) {
                  _this6.log.info("PictProvider [".concat(_this6.UUID, "]::[").concat(_this6.Hash, "] ").concat(_this6.options.ProviderIdentifier, " initialization complete."));
                }
                return fCallback();
              });
            } else {
              this.log.warn("PictProvider [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ProviderIdentifier, " async initialize called but initialization is already completed.  Aborting."));
              // TODO: Should this be an error?
              return fCallback();
            }
          }
        }, {
          key: "onAfterInitialize",
          value: function onAfterInitialize() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictProvider [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ProviderIdentifier, " onAfterInitialize:"));
            }
            return true;
          }

          /**
           * @param {(pError?: Error) => void} fCallback - The callback to call after initialization.
           *
           * @return {void}
           */
        }, {
          key: "onAfterInitializeAsync",
          value: function onAfterInitializeAsync(fCallback) {
            this.onAfterInitialize();
            return fCallback();
          }
        }, {
          key: "onPreRender",
          value: function onPreRender() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictProvider [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ProviderIdentifier, " onPreRender:"));
            }
            return true;
          }

          /**
           * @param {(pError?: Error) => void} fCallback - The callback to call after pre-render.
           *
           * @return {void}
           */
        }, {
          key: "onPreRenderAsync",
          value: function onPreRenderAsync(fCallback) {
            this.onPreRender();
            return fCallback();
          }
        }, {
          key: "render",
          value: function render() {
            return this.onPreRender();
          }

          /**
           * @param {(pError?: Error) => void} fCallback - The callback to call after render.
           *
           * @return {void}
           */
        }, {
          key: "renderAsync",
          value: function renderAsync(fCallback) {
            this.onPreRender();
            return fCallback();
          }
        }, {
          key: "onPreSolve",
          value: function onPreSolve() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictProvider [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ProviderIdentifier, " onPreSolve:"));
            }
            return true;
          }

          /**
           * @param {(pError?: Error) => void} fCallback - The callback to call after pre-solve.
           *
           * @return {void}
           */
        }, {
          key: "onPreSolveAsync",
          value: function onPreSolveAsync(fCallback) {
            this.onPreSolve();
            return fCallback();
          }
        }, {
          key: "solve",
          value: function solve() {
            return this.onPreSolve();
          }

          /**
           * @param {(pError?: Error) => void} fCallback - The callback to call after solve.
           *
           * @return {void}
           */
        }, {
          key: "solveAsync",
          value: function solveAsync(fCallback) {
            this.onPreSolve();
            return fCallback();
          }

          /**
           * @param {(pError?: Error) => void} fCallback - The callback to call after the data pre-load.
           */
        }, {
          key: "onBeforeLoadDataAsync",
          value: function onBeforeLoadDataAsync(fCallback) {
            return fCallback();
          }

          /**
           * Hook to allow the provider to load data during application data load.
           *
           * @param {(pError?: Error) => void} fCallback - The callback to call after the data load.
           */
        }, {
          key: "onLoadDataAsync",
          value: function onLoadDataAsync(fCallback) {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictProvider [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ProviderIdentifier, " onLoadDataAsync:"));
            }
            return fCallback();
          }

          /**
           * @param {(pError?: Error) => void} fCallback - The callback to call after the data post-load.
           */
        }, {
          key: "onAfterLoadDataAsync",
          value: function onAfterLoadDataAsync(fCallback) {
            return fCallback();
          }

          /**
           * @param {(pError?: Error) => void} fCallback - The callback to call after the data pre-load.
           *
           * @return {void}
           */
        }, {
          key: "onBeforeSaveDataAsync",
          value: function onBeforeSaveDataAsync(fCallback) {
            return fCallback();
          }

          /**
           * Hook to allow the provider to load data during application data load.
           *
           * @param {(pError?: Error) => void} fCallback - The callback to call after the data load.
           *
           * @return {void}
           */
        }, {
          key: "onSaveDataAsync",
          value: function onSaveDataAsync(fCallback) {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictProvider [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ProviderIdentifier, " onSaveDataAsync:"));
            }
            return fCallback();
          }

          /**
           * @param {(pError?: Error) => void} fCallback - The callback to call after the data post-load.
           *
           * @return {void}
           */
        }, {
          key: "onAfterSaveDataAsync",
          value: function onAfterSaveDataAsync(fCallback) {
            return fCallback();
          }
        }]);
      }(libFableServiceBase);
      module.exports = PictProvider;
    }, {
      "../package.json": 8,
      "fable-serviceproviderbase": 6
    }],
    10: [function (require, module, exports) {
      arguments[4][1][0].apply(exports, arguments);
    }, {
      "dup": 1
    }],
    11: [function (require, module, exports) {
      arguments[4][2][0].apply(exports, arguments);
    }, {
      "dup": 2
    }],
    12: [function (require, module, exports) {
      var libPictViewClass = require('pict-view');
      var libCreateHighlighter = require('./Pict-Code-Highlighter.js');
      var _DefaultConfiguration = require('./Pict-Section-Code-DefaultConfiguration.js');
      var PictSectionCode = /*#__PURE__*/function (_libPictViewClass2) {
        function PictSectionCode(pFable, pOptions, pServiceHash) {
          var _this7;
          _classCallCheck(this, PictSectionCode);
          var tmpOptions = Object.assign({}, _DefaultConfiguration, pOptions);
          _this7 = _callSuper(this, PictSectionCode, [pFable, tmpOptions, pServiceHash]);
          _this7.initialRenderComplete = false;

          // The CodeJar instance
          _this7.codeJar = null;

          // The highlight function (can be overridden)
          _this7._highlightFunction = null;

          // The current language
          _this7._language = _this7.options.Language || 'javascript';
          return _this7;
        }
        _inherits(PictSectionCode, _libPictViewClass2);
        return _createClass(PictSectionCode, [{
          key: "onBeforeInitialize",
          value: function onBeforeInitialize() {
            _superPropGet(PictSectionCode, "onBeforeInitialize", this, 3)([]);
            this._codeJarPrototype = null;
            this.targetElement = false;

            // Build the default highlight function for the configured language
            this._highlightFunction = libCreateHighlighter(this._language);
            return _superPropGet(PictSectionCode, "onBeforeInitialize", this, 3)([]);
          }

          /**
           * Connect the CodeJar prototype.  If not passed explicitly, try to find it
           * as a global (window.CodeJar) or require it from the npm package.
           *
           * @param {function} [pCodeJarPrototype] - The CodeJar constructor function
           * @returns {boolean|void}
           */
        }, {
          key: "connectCodeJarPrototype",
          value: function connectCodeJarPrototype(pCodeJarPrototype) {
            if (typeof pCodeJarPrototype === 'function') {
              this._codeJarPrototype = pCodeJarPrototype;
              return;
            }

            // Try to find CodeJar in global scope
            if (typeof window !== 'undefined') {
              if (typeof window.CodeJar === 'function') {
                this.log.trace("PICT-Code Found CodeJar in window.CodeJar.");
                this._codeJarPrototype = window.CodeJar;
                return;
              }
            }
            this.log.error("PICT-Code No CodeJar prototype found. Include codejar via script tag or call connectCodeJarPrototype(CodeJar) explicitly.");
            return false;
          }
        }, {
          key: "onAfterRender",
          value: function onAfterRender(pRenderable) {
            // Ensure the CSS from all registered views is injected into the DOM
            this.pict.CSSMap.injectCSS();
            if (!this.initialRenderComplete) {
              this.onAfterInitialRender();
              this.initialRenderComplete = true;
            }
            return _superPropGet(PictSectionCode, "onAfterRender", this, 3)([pRenderable]);
          }
        }, {
          key: "onAfterInitialRender",
          value: function onAfterInitialRender() {
            var _this8 = this;
            // Resolve the CodeJar prototype if not already set
            if (!this._codeJarPrototype) {
              this.connectCodeJarPrototype();
            }
            if (!this._codeJarPrototype) {
              this.log.error("PICT-Code Cannot initialize editor; no CodeJar prototype available.");
              return false;
            }
            if (this.codeJar) {
              this.log.error("PICT-Code editor is already initialized!");
              return false;
            }

            // Find the target element
            var tmpTargetElementSet = this.services.ContentAssignment.getElement(this.options.TargetElementAddress);
            if (!tmpTargetElementSet || tmpTargetElementSet.length < 1) {
              this.log.error("PICT-Code Could not find target element [".concat(this.options.TargetElementAddress, "]!"));
              this.targetElement = false;
              return false;
            }
            this.targetElement = tmpTargetElementSet[0];

            // Build the editor DOM structure
            this._buildEditorDOM();

            // Get initial code content
            var tmpCode = this._resolveCodeContent();

            // Create the CodeJar options
            var tmpCodeJarOptions = {};
            if (this.options.Tab) {
              tmpCodeJarOptions.tab = this.options.Tab;
            }
            if (this.options.IndentOn) {
              tmpCodeJarOptions.indentOn = this.options.IndentOn;
            }
            if (this.options.MoveToNewLine) {
              tmpCodeJarOptions.moveToNewLine = this.options.MoveToNewLine;
            }
            if (typeof this.options.AddClosing !== 'undefined') {
              tmpCodeJarOptions.addClosing = this.options.AddClosing;
            }
            if (typeof this.options.CatchTab !== 'undefined') {
              tmpCodeJarOptions.catchTab = this.options.CatchTab;
            }
            this.customConfigureEditorOptions(tmpCodeJarOptions);

            // Instantiate CodeJar on the editor element
            var tmpEditorElement = this._editorElement;
            this.codeJar = this._codeJarPrototype(tmpEditorElement, this._highlightFunction, tmpCodeJarOptions);

            // CodeJar forces white-space:pre-wrap and overflow-wrap:break-word
            // via inline styles, which causes line wrapping that breaks the
            // line-number alignment.  Override back to non-wrapping so the
            // wrap container scrolls horizontally instead.
            this._resetEditorWrapStyles();

            // Set the initial code
            if (tmpCode) {
              this.codeJar.updateCode(tmpCode);
            }

            // Wire up the change handler
            this.codeJar.onUpdate(function (pCode) {
              _this8._updateLineNumbers();
              _this8.onCodeChange(pCode);
            });

            // Initial line number render
            this._updateLineNumbers();

            // Sync line-numbers vertical position with the editor's scroll.
            //
            // The editor element scrolls internally (CodeJar uses
            // contenteditable + overflow:auto for long content), but the
            // line-numbers div is a sibling with overflow:visible — without
            // this sync the line-numbers content stays glued at the top of
            // the wrap while the editor scrolls underneath it, so "line 1"
            // appears next to whatever line is actually showing.
            //
            // Using `transform: translateY(...)` instead of scrollTop keeps
            // the sync compositor-only (no reflow per scroll event) and
            // avoids needing to change the line-numbers element's overflow
            // from visible.  Passive listener so we don't block scrolling.
            if (this._lineNumbersElement) {
              var tmpLineNumbersEl = this._lineNumbersElement;
              tmpEditorElement.addEventListener('scroll', function () {
                tmpLineNumbersEl.style.transform = 'translateY(-' + tmpEditorElement.scrollTop + 'px)';
              }, {
                passive: true
              });
            }

            // Sync gutter typographic metrics from the editor.  The gutter
            // must use the editor's exact line-height (and matching padding)
            // or rows drift apart cumulatively.  See _syncGutterMetrics().
            this._syncGutterMetrics();

            // Watch the editor for size changes (window resize affecting
            // flex layout, container resize) and re-sync the gutter so it
            // continues to track the editor.  ResizeObserver fires once per
            // frame at most, so the cost is negligible.
            if (this._lineNumbersElement && typeof ResizeObserver === 'function') {
              var tmpSelf = this;
              this._editorResizeObserver = new ResizeObserver(function () {
                tmpSelf._syncGutterMetrics();
              });
              this._editorResizeObserver.observe(tmpEditorElement);
            }

            // Watch for direct style/class mutations on the editor.  Theme
            // providers that toggle scale by swapping a class on the editor,
            // or host code that adjusts editor typography via inline styles,
            // don't necessarily change the editor's box size — so the
            // ResizeObserver above wouldn't see them.  MutationObserver on
            // the attributes catches these cases.
            if (this._lineNumbersElement && typeof MutationObserver === 'function') {
              var _tmpSelf2 = this;
              this._editorStyleObserver = new MutationObserver(function () {
                _tmpSelf2._syncGutterMetrics();
              });
              this._editorStyleObserver.observe(tmpEditorElement, {
                attributes: true,
                attributeFilter: ['style', 'class']
              });
            }

            // Handle read-only
            if (this.options.ReadOnly) {
              tmpEditorElement.setAttribute('contenteditable', 'false');
            }
          }

          /**
           * Build the editor DOM elements inside the target container.
           */
        }, {
          key: "_buildEditorDOM",
          value: function _buildEditorDOM() {
            // Clear the target
            this.targetElement.innerHTML = '';

            // Create wrapper
            var tmpWrap = document.createElement('div');
            tmpWrap.className = 'pict-code-editor-wrap';

            // Create line numbers container
            if (this.options.LineNumbers) {
              var tmpLineNumbers = document.createElement('div');
              tmpLineNumbers.className = 'pict-code-line-numbers';
              tmpWrap.appendChild(tmpLineNumbers);
              this._lineNumbersElement = tmpLineNumbers;
            }

            // Create the editor element (CodeJar needs a pre or div)
            var tmpEditor = document.createElement('div');
            tmpEditor.className = 'pict-code-editor language-' + this._language;
            if (!this.options.LineNumbers) {
              tmpEditor.className += ' pict-code-no-line-numbers';
            }
            tmpWrap.appendChild(tmpEditor);
            this.targetElement.appendChild(tmpWrap);
            this._editorElement = tmpEditor;
            this._wrapElement = tmpWrap;
          }

          /**
           * Update the line numbers display based on current code content.
           */
        }, {
          key: "_updateLineNumbers",
          value: function _updateLineNumbers() {
            if (!this.options.LineNumbers || !this._lineNumbersElement || !this._editorElement) {
              return;
            }
            var tmpCode = this._editorElement.textContent || '';
            var tmpLineCount = tmpCode.split('\n').length;
            var tmpHTML = '';
            for (var i = 1; i <= tmpLineCount; i++) {
              tmpHTML += "<span>".concat(i, "</span>");
            }
            this._lineNumbersElement.innerHTML = tmpHTML;

            // Defense-in-depth: every line-count rebuild is also a natural
            // re-sync point.  Cheap (one getComputedStyle + a handful of
            // style writes) and guarantees newly-added spans use the same
            // metrics as the editor at the moment of the rebuild.
            this._syncGutterMetrics();
          }

          /**
           * Copy typographic metrics from the editor element to the line-numbers
           * gutter so every gutter row lines up with its corresponding code row.
           *
           * The gutter is a sibling element with its own font/line-height
           * declarations — if any one diverges from the editor (unitless
           * line-height resolving against a different font-size, host CSS
           * overriding font-family, theme scale changing the editor's metrics),
           * the two desync and the drift accumulates with every line.
           *
           * The pattern is borrowed from the canonical `codejar-linenumbers`
           * library (julianpoemp/codejar-linenumbers), which solves the same
           * class of bug by reading the editor's computed styles at init and
           * stamping them onto the gutter.  We extend that here by also
           * re-stamping whenever the editor resizes (see the ResizeObserver in
           * onAfterInitialRender), so theme scale changes self-heal too.
           *
           * Public callers can invoke {@link syncMetrics} to force a re-sync
           * after any external change that affects editor typography.
           */
        }, {
          key: "_syncGutterMetrics",
          value: function _syncGutterMetrics() {
            if (!this._lineNumbersElement || !this._editorElement) {
              return;
            }
            if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
              return;
            }
            var tmpEditorStyle = window.getComputedStyle(this._editorElement);
            var tmpLineHeight = tmpEditorStyle.lineHeight;

            // `normal` is the spec default — leave the gutter untouched so the
            // stylesheet's declaration wins (we have no number to copy).
            if (tmpLineHeight && tmpLineHeight !== 'normal') {
              this._lineNumbersElement.style.lineHeight = tmpLineHeight;
            }

            // Match the editor's vertical padding so row 1 of the gutter sits
            // at the same y-offset as row 1 of the code.
            if (tmpEditorStyle.paddingTop) {
              this._lineNumbersElement.style.paddingTop = tmpEditorStyle.paddingTop;
            }
            if (tmpEditorStyle.paddingBottom) {
              this._lineNumbersElement.style.paddingBottom = tmpEditorStyle.paddingBottom;
            }

            // Font-family must match so the visual baseline of the digits
            // aligns with the code (different monospace fonts can have
            // different x-heights even at identical line-heights).
            if (tmpEditorStyle.fontFamily) {
              this._lineNumbersElement.style.fontFamily = tmpEditorStyle.fontFamily;
            }

            // Dev-time sanity check.  If the gutter's resolved row height
            // disagrees with the editor's, alignment will drift cumulatively.
            // Warn loudly so the regression is caught at the next reload
            // instead of silently accumulating pixels per line.
            if (typeof console !== 'undefined' && console.warn) {
              var tmpFirstSpan = this._lineNumbersElement.querySelector('span');
              if (tmpFirstSpan) {
                var tmpGutterRow = tmpFirstSpan.getBoundingClientRect().height;
                var tmpEditorRow = parseFloat(tmpLineHeight);
                if (tmpGutterRow && tmpEditorRow && Math.abs(tmpGutterRow - tmpEditorRow) > 0.5) {
                  console.warn('[pict-section-code] gutter/editor row-height mismatch: ' + 'gutter ' + tmpGutterRow + 'px vs editor ' + tmpEditorRow + 'px — ' + 'line numbers will drift. Check for CSS overriding ' + '.pict-code-line-numbers line-height.');
                }
              }
            }
          }

          /**
           * Public hook for hosts to force a gutter metrics re-sync after
           * external typography changes (theme scale, font-size swap, etc.).
           * The ResizeObserver attached at init handles most cases, but call
           * this from an app's post-theme-change hook for belt-and-suspenders
           * coverage.
           */
        }, {
          key: "syncMetrics",
          value: function syncMetrics() {
            this._syncGutterMetrics();
          }

          /**
           * Reset inline styles that CodeJar sets on the editor element.
           *
           * CodeJar forces white-space:pre-wrap and overflow-wrap:break-word so
           * long lines wrap visually.  That breaks line-number alignment because
           * each wrapped visual row is not a logical line.  Resetting to pre /
           * normal makes the outer .pict-code-editor-wrap scroll horizontally.
           */
        }, {
          key: "_resetEditorWrapStyles",
          value: function _resetEditorWrapStyles() {
            if (!this._editorElement) {
              return;
            }
            this._editorElement.style.whiteSpace = 'pre';
            this._editorElement.style.overflowWrap = 'normal';
          }

          /**
           * Resolve the initial code content from address or default.
           *
           * @returns {string} The code content
           */
        }, {
          key: "_resolveCodeContent",
          value: function _resolveCodeContent() {
            if (this.options.CodeDataAddress) {
              var tmpAddressSpace = {
                Fable: this.fable,
                Pict: this.fable,
                AppData: this.AppData,
                Bundle: this.Bundle,
                Options: this.options
              };
              var tmpAddressedData = this.fable.manifest.getValueByHash(tmpAddressSpace, this.options.CodeDataAddress);
              if (typeof tmpAddressedData === 'string') {
                return tmpAddressedData;
              } else {
                this.log.warn("PICT-Code Address [".concat(this.options.CodeDataAddress, "] did not return a string; it was ").concat(_typeof(tmpAddressedData), "."));
              }
            }
            return this.options.DefaultCode || '';
          }

          /**
           * Hook for subclasses to customize CodeJar options before instantiation.
           *
           * @param {object} pOptions - The CodeJar options object to modify
           */
        }, {
          key: "customConfigureEditorOptions",
          value: function customConfigureEditorOptions(pOptions) {
            // Override in subclass to tweak options
          }

          /**
           * Called when the code content changes.  Override in subclasses to handle changes.
           *
           * @param {string} pCode - The new code content
           */
        }, {
          key: "onCodeChange",
          value: function onCodeChange(pCode) {
            // Write back to data address if configured
            if (this.options.CodeDataAddress) {
              var tmpAddressSpace = {
                Fable: this.fable,
                Pict: this.fable,
                AppData: this.AppData,
                Bundle: this.Bundle,
                Options: this.options
              };
              this.fable.manifest.setValueByHash(tmpAddressSpace, this.options.CodeDataAddress, pCode);
            }
          }

          // -- Public API Methods --

          /**
           * Get the current code content.
           *
           * @returns {string} The current code
           */
        }, {
          key: "getCode",
          value: function getCode() {
            if (!this.codeJar) {
              this.log.warn('PICT-Code getCode called before editor initialized.');
              return '';
            }
            return this.codeJar.toString();
          }

          /**
           * Set the code content.
           *
           * @param {string} pCode - The code to set
           */
        }, {
          key: "setCode",
          value: function setCode(pCode) {
            if (!this.codeJar) {
              this.log.warn('PICT-Code setCode called before editor initialized.');
              return;
            }
            this.codeJar.updateCode(pCode);
            this._updateLineNumbers();
          }

          /**
           * Change the editor language and re-highlight.
           *
           * @param {string} pLanguage - The language identifier
           */
        }, {
          key: "setLanguage",
          value: function setLanguage(pLanguage) {
            var _this9 = this;
            this._language = pLanguage;
            this._highlightFunction = libCreateHighlighter(pLanguage);
            if (this._editorElement) {
              // Update the class
              this._editorElement.className = 'pict-code-editor language-' + pLanguage;
              if (!this.options.LineNumbers) {
                this._editorElement.className += ' pict-code-no-line-numbers';
              }
            }
            if (this.codeJar) {
              // Re-create the editor with the new highlight function
              var tmpCode = this.codeJar.toString();
              this.codeJar.destroy();
              this.codeJar = this._codeJarPrototype(this._editorElement, this._highlightFunction, {
                tab: this.options.Tab,
                catchTab: this.options.CatchTab,
                addClosing: this.options.AddClosing
              });
              this._resetEditorWrapStyles();
              this.codeJar.updateCode(tmpCode);
              this.codeJar.onUpdate(function (pCode) {
                _this9._updateLineNumbers();
                _this9.onCodeChange(pCode);
              });
            }
          }

          /**
           * Set a custom highlight function to replace the built-in highlighter.
           * Useful for integrating Prism.js, highlight.js, or any other library.
           *
           * @param {function} pHighlightFunction - A function that takes a DOM element and highlights its textContent
           */
        }, {
          key: "setHighlightFunction",
          value: function setHighlightFunction(pHighlightFunction) {
            var _this0 = this;
            if (typeof pHighlightFunction !== 'function') {
              this.log.error('PICT-Code setHighlightFunction requires a function.');
              return;
            }
            this._highlightFunction = pHighlightFunction;
            if (this.codeJar) {
              var tmpCode = this.codeJar.toString();
              this.codeJar.destroy();
              this.codeJar = this._codeJarPrototype(this._editorElement, this._highlightFunction, {
                tab: this.options.Tab,
                catchTab: this.options.CatchTab,
                addClosing: this.options.AddClosing
              });
              this._resetEditorWrapStyles();
              this.codeJar.updateCode(tmpCode);
              this.codeJar.onUpdate(function (pCode) {
                _this0._updateLineNumbers();
                _this0.onCodeChange(pCode);
              });
            }
          }

          /**
           * Set the read-only state of the editor.
           *
           * @param {boolean} pReadOnly - Whether the editor should be read-only
           */
        }, {
          key: "setReadOnly",
          value: function setReadOnly(pReadOnly) {
            this.options.ReadOnly = pReadOnly;
            if (this._editorElement) {
              this._editorElement.setAttribute('contenteditable', pReadOnly ? 'false' : 'true');
            }
          }

          /**
           * Destroy the editor and clean up.
           */
        }, {
          key: "destroy",
          value: function destroy() {
            if (this._editorResizeObserver) {
              this._editorResizeObserver.disconnect();
              this._editorResizeObserver = null;
            }
            if (this._editorStyleObserver) {
              this._editorStyleObserver.disconnect();
              this._editorStyleObserver = null;
            }
            if (this.codeJar) {
              this.codeJar.destroy();
              this.codeJar = null;
            }
          }

          /**
           * Marshal code content from the data address into the view.
           */
        }, {
          key: "marshalToView",
          value: function marshalToView() {
            _superPropGet(PictSectionCode, "marshalToView", this, 3)([]);
            if (this.codeJar && this.options.CodeDataAddress) {
              var tmpCode = this._resolveCodeContent();
              if (typeof tmpCode === 'string') {
                this.codeJar.updateCode(tmpCode);
                this._updateLineNumbers();
              }
            }
          }

          /**
           * Marshal the current code content back to the data address.
           */
        }, {
          key: "marshalFromView",
          value: function marshalFromView() {
            _superPropGet(PictSectionCode, "marshalFromView", this, 3)([]);
            if (this.codeJar && this.options.CodeDataAddress) {
              this.onCodeChange(this.codeJar.toString());
            }
          }
        }]);
      }(libPictViewClass);
      module.exports = PictSectionCode;
      module.exports.default_configuration = _DefaultConfiguration;
      module.exports.createHighlighter = libCreateHighlighter;

      // Demo bundle for pict-docuserve.  Host apps that embed docuserve and
      // want pict-section-code's demos visible in their docs site call
      // `require('pict-section-code').registerWithDocuserve(pict)` once at
      // app boot.  Silent no-op when Docuserve-Demos isn't installed.
      //
      // The require here is intentionally eager: browserify needs a static
      // `require()` at module-toplevel to trace and bundle the demos source.
      // The apparent circular dep (demos/index.js requires THIS module to
      // reach the PictSectionCode class) is benign — by the time demos/
      // index.js runs, `module.exports = PictSectionCode` has already
      // executed, so it sees a usable class.  The `.demos` and
      // `.registerWithDocuserve` attachments below run after the require
      // returns, so demos/index.js never observes them being undefined.
      var libCodeDemos = require('./demos');
      module.exports.demos = libCodeDemos.demos;
      module.exports.registerWithDocuserve = libCodeDemos.registerWithDocuserve;
    }, {
      "./Pict-Code-Highlighter.js": 10,
      "./Pict-Section-Code-DefaultConfiguration.js": 11,
      "./demos": 13,
      "pict-view": 15
    }],
    13: [function (require, module, exports) {
      arguments[4][4][0].apply(exports, arguments);
    }, {
      "../Pict-Section-Code.js": 12,
      "dup": 4
    }],
    14: [function (require, module, exports) {
      module.exports = {
        "name": "pict-view",
        "version": "1.0.68",
        "description": "Pict View Base Class",
        "main": "source/Pict-View.js",
        "scripts": {
          "test": "npx quack test",
          "tests": "npx quack test -g",
          "start": "node source/Pict-View.js",
          "coverage": "npx quack coverage",
          "build": "npx quack build",
          "docker-dev-build": "docker build ./ -f Dockerfile_LUXURYCode -t pict-view-image:local",
          "docker-dev-run": "docker run -it -d --name pict-view-dev -p 30001:8080 -p 38086:8086 -v \"$PWD/.config:/home/coder/.config\"  -v \"$PWD:/home/coder/pict-view\" -u \"$(id -u):$(id -g)\" -e \"DOCKER_USER=$USER\" pict-view-image:local",
          "docker-dev-shell": "docker exec -it pict-view-dev /bin/bash",
          "types": "tsc -p .",
          "lint": "eslint source/**"
        },
        "types": "types/source/Pict-View.d.ts",
        "repository": {
          "type": "git",
          "url": "git+https://github.com/stevenvelozo/pict-view.git"
        },
        "author": "steven velozo <steven@velozo.com>",
        "license": "MIT",
        "bugs": {
          "url": "https://github.com/stevenvelozo/pict-view/issues"
        },
        "homepage": "https://github.com/stevenvelozo/pict-view#readme",
        "devDependencies": {
          "@eslint/js": "^9.39.1",
          "browser-env": "^3.3.0",
          "eslint": "^9.39.1",
          "pict": "^1.0.363",
          "quackage": "^1.0.65",
          "typescript": "^5.9.3"
        },
        "mocha": {
          "diff": true,
          "extension": ["js"],
          "package": "./package.json",
          "reporter": "spec",
          "slow": "75",
          "timeout": "5000",
          "ui": "tdd",
          "watch-files": ["source/**/*.js", "test/**/*.js"],
          "watch-ignore": ["lib/vendor"]
        },
        "dependencies": {
          "fable": "^3.1.67",
          "fable-serviceproviderbase": "^3.0.19"
        }
      };
    }, {}],
    15: [function (require, module, exports) {
      var libFableServiceBase = require('fable-serviceproviderbase');
      var libPackage = require('../package.json');
      var defaultPictViewSettings = {
        DefaultRenderable: false,
        DefaultDestinationAddress: false,
        DefaultTemplateRecordAddress: false,
        ViewIdentifier: false,
        // If this is set to true, when the App initializes this will.
        // After the App initializes, initialize will be called as soon as it's added.
        AutoInitialize: true,
        AutoInitializeOrdinal: 0,
        // If this is set to true, when the App autorenders (on load) this will.
        // After the App initializes, render will be called as soon as it's added.
        AutoRender: true,
        AutoRenderOrdinal: 0,
        AutoSolveWithApp: true,
        AutoSolveOrdinal: 0,
        CSSHash: false,
        CSS: false,
        CSSProvider: false,
        CSSPriority: 500,
        Templates: [],
        DefaultTemplates: [],
        Renderables: [],
        Manifests: {}
      };

      /** @typedef {(error?: Error) => void} ErrorCallback */
      /** @typedef {number | boolean} PictTimestamp */

      /**
       * @typedef {'replace' | 'append' | 'prepend' | 'append_once' | 'virtual-assignment'} RenderMethod
       */
      /**
       * @typedef {Object} Renderable
       *
       * @property {string} RenderableHash - A unique hash for the renderable.
       * @property {string} TemplateHash - The hash of the template to use for rendering this renderable.
       * @property {string} [DefaultTemplateRecordAddress] - The default address for resolving the data record for this renderable.
       * @property {string} [ContentDestinationAddress] - The default address (DOM CSS selector) for rendering the content of this renderable.
       * @property {RenderMethod} [RenderMethod=replace] - The method to use when projecting the renderable to the DOM ('replace', 'append', 'prepend', 'append_once', 'virtual-assignment').
       * @property {string} [TestAddress] - The address to use for testing the renderable.
       * @property {string} [TransactionHash] - The transaction hash for the root renderable.
       * @property {string} [RootRenderableViewHash] - The hash of the root renderable.
       * @property {string} [Content] - The rendered content for this renderable, if applicable.
       */

      /**
       * Represents a view in the Pict ecosystem.
       */
      var PictView = /*#__PURE__*/function (_libFableServiceBase2) {
        /**
         * @param {any} pFable - The Fable object that this service is attached to.
         * @param {any} [pOptions] - (optional) The options for this service.
         * @param {string} [pServiceHash] - (optional) The hash of the service.
         */
        function PictView(pFable, pOptions, pServiceHash) {
          var _this1;
          _classCallCheck(this, PictView);
          // Intersect default options, parent constructor, service information
          var tmpOptions = Object.assign({}, JSON.parse(JSON.stringify(defaultPictViewSettings)), pOptions);
          _this1 = _callSuper(this, PictView, [pFable, tmpOptions, pServiceHash]);
          //FIXME: add types to fable and ancillaries
          /** @type {any} */
          _this1.fable;
          /** @type {any} */
          _this1.options;
          /** @type {String} */
          _this1.UUID;
          /** @type {String} */
          _this1.Hash;
          /** @type {any} */
          _this1.log;
          var tmpHashIsUUID = _this1.Hash === _this1.UUID;
          //NOTE: since many places are using the view UUID as the HTML element ID, we prefix it to avoid starting with a number
          _this1.UUID = "V-".concat(_this1.UUID);
          if (tmpHashIsUUID) {
            _this1.Hash = _this1.UUID;
          }
          if (!_this1.options.ViewIdentifier) {
            _this1.options.ViewIdentifier = "AutoViewID-".concat(_this1.fable.getUUID());
          }
          _this1.serviceType = 'PictView';
          /** @type {Record<string, any>} */
          _this1._Package = libPackage;
          // Convenience and consistency naming
          /** @type {import('pict') & { log: any, instantiateServiceProviderWithoutRegistration: (hash: String) => any, instantiateServiceProviderIfNotExists: (hash: string) => any, TransactionTracking: import('pict/types/source/services/Fable-Service-TransactionTracking') }} */
          _this1.pict = _this1.fable;
          // Wire in the essential Pict application state
          _this1.AppData = _this1.pict.AppData;
          _this1.Bundle = _this1.pict.Bundle;

          /** @type {PictTimestamp} */
          _this1.initializeTimestamp = false;
          /** @type {PictTimestamp} */
          _this1.lastSolvedTimestamp = false;
          /** @type {PictTimestamp} */
          _this1.lastRenderedTimestamp = false;
          /** @type {PictTimestamp} */
          _this1.lastMarshalFromViewTimestamp = false;
          /** @type {PictTimestamp} */
          _this1.lastMarshalToViewTimestamp = false;
          _this1.pict.instantiateServiceProviderIfNotExists('TransactionTracking');

          // Load all templates from the array in the options
          // Templates are in the form of {Hash:'Some-Template-Hash',Template:'Template content',Source:'TemplateSource'}
          for (var i = 0; i < _this1.options.Templates.length; i++) {
            var tmpTemplate = _this1.options.Templates[i];
            if (!('Hash' in tmpTemplate) || !('Template' in tmpTemplate)) {
              _this1.log.error("PictView [".concat(_this1.UUID, "]::[").concat(_this1.Hash, "] ").concat(_this1.options.ViewIdentifier, " could not load Template ").concat(i, " in the options array."), tmpTemplate);
            } else {
              if (!tmpTemplate.Source) {
                tmpTemplate.Source = "PictView [".concat(_this1.UUID, "]::[").concat(_this1.Hash, "] ").concat(_this1.options.ViewIdentifier, " options object.");
              }
              _this1.pict.TemplateProvider.addTemplate(tmpTemplate.Hash, tmpTemplate.Template, tmpTemplate.Source);
            }
          }

          // Load all default templates from the array in the options
          // Templates are in the form of {Prefix:'',Postfix:'-List-Row',Template:'Template content',Source:'TemplateSourceString'}
          for (var _i = 0; _i < _this1.options.DefaultTemplates.length; _i++) {
            var tmpDefaultTemplate = _this1.options.DefaultTemplates[_i];
            if (!('Postfix' in tmpDefaultTemplate) || !('Template' in tmpDefaultTemplate)) {
              _this1.log.error("PictView [".concat(_this1.UUID, "]::[").concat(_this1.Hash, "] ").concat(_this1.options.ViewIdentifier, " could not load Default Template ").concat(_i, " in the options array."), tmpDefaultTemplate);
            } else {
              if (!tmpDefaultTemplate.Source) {
                tmpDefaultTemplate.Source = "PictView [".concat(_this1.UUID, "]::[").concat(_this1.Hash, "] ").concat(_this1.options.ViewIdentifier, " options object.");
              }
              _this1.pict.TemplateProvider.addDefaultTemplate(tmpDefaultTemplate.Prefix, tmpDefaultTemplate.Postfix, tmpDefaultTemplate.Template, tmpDefaultTemplate.Source);
            }
          }

          // Load the CSS if it's available
          if (_this1.options.CSS) {
            var tmpCSSHash = _this1.options.CSSHash ? _this1.options.CSSHash : "View-".concat(_this1.options.ViewIdentifier);
            var tmpCSSProvider = _this1.options.CSSProvider ? _this1.options.CSSProvider : tmpCSSHash;
            _this1.pict.CSSMap.addCSS(tmpCSSHash, _this1.options.CSS, tmpCSSProvider, _this1.options.CSSPriority);
          }

          // Load all renderables
          // Renderables are launchable renderable instructions with templates
          // They look as such: {Identifier:'ContentEntry', TemplateHash:'Content-Entry-Section-Main', ContentDestinationAddress:'#ContentSection', RecordAddress:'AppData.Content.DefaultText', ManifestTransformation:'ManyfestHash', ManifestDestinationAddress:'AppData.Content.DataToTransformContent'}
          // The only parts that are necessary are Identifier and Template
          // A developer can then do render('ContentEntry') and it just kinda works.  Or they can override the ContentDestinationAddress
          /** @type {Record<String, Renderable>} */
          _this1.renderables = {};
          for (var _i2 = 0; _i2 < _this1.options.Renderables.length; _i2++) {
            /** @type {Renderable} */
            var tmpRenderable = _this1.options.Renderables[_i2];
            _this1.addRenderable(tmpRenderable);
          }
          return _this1;
        }

        /**
         * Adds a renderable to the view.
         *
         * @param {string | Renderable} pRenderableHash - The hash of the renderable, or a renderable object.
         * @param {string} [pTemplateHash] - (optional) The hash of the template for the renderable.
         * @param {string} [pDefaultTemplateRecordAddress] - (optional) The default data address for the template.
         * @param {string} [pDefaultDestinationAddress] - (optional) The default destination address for the renderable.
         * @param {RenderMethod} [pRenderMethod=replace] - (optional) The method to use when rendering the renderable (ex. 'replace').
         */
        _inherits(PictView, _libFableServiceBase2);
        return _createClass(PictView, [{
          key: "addRenderable",
          value: function addRenderable(pRenderableHash, pTemplateHash, pDefaultTemplateRecordAddress, pDefaultDestinationAddress, pRenderMethod) {
            /** @type {Renderable} */
            var tmpRenderable;
            if (_typeof(pRenderableHash) == 'object') {
              // The developer passed in the renderable as an object.
              // Use theirs instead!
              tmpRenderable = pRenderableHash;
            } else {
              /** @type {RenderMethod} */
              var tmpRenderMethod = typeof pRenderMethod !== 'string' ? pRenderMethod : 'replace';
              tmpRenderable = {
                RenderableHash: pRenderableHash,
                TemplateHash: pTemplateHash,
                DefaultTemplateRecordAddress: pDefaultTemplateRecordAddress,
                ContentDestinationAddress: pDefaultDestinationAddress,
                RenderMethod: tmpRenderMethod
              };
            }
            if (typeof tmpRenderable.RenderableHash != 'string' || typeof tmpRenderable.TemplateHash != 'string') {
              this.log.error("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " could not load Renderable; RenderableHash or TemplateHash are invalid."), tmpRenderable);
            } else {
              if (this.pict.LogNoisiness > 0) {
                this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " adding renderable [").concat(tmpRenderable.RenderableHash, "] pointed to template ").concat(tmpRenderable.TemplateHash, "."));
              }
              this.renderables[tmpRenderable.RenderableHash] = tmpRenderable;
            }
          }

          /* -------------------------------------------------------------------------- */
          /*                        Code Section: Initialization                        */
          /* -------------------------------------------------------------------------- */
          /**
           * Lifecycle hook that triggers before the view is initialized.
           */
        }, {
          key: "onBeforeInitialize",
          value: function onBeforeInitialize() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " onBeforeInitialize:"));
            }
            return true;
          }

          /**
           * Lifecycle hook that triggers before the view is initialized (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           */
        }, {
          key: "onBeforeInitializeAsync",
          value: function onBeforeInitializeAsync(fCallback) {
            this.onBeforeInitialize();
            return fCallback();
          }

          /**
           * Lifecycle hook that triggers when the view is initialized.
           */
        }, {
          key: "onInitialize",
          value: function onInitialize() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " onInitialize:"));
            }
            return true;
          }

          /**
           * Lifecycle hook that triggers when the view is initialized (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           */
        }, {
          key: "onInitializeAsync",
          value: function onInitializeAsync(fCallback) {
            this.onInitialize();
            return fCallback();
          }

          /**
           * Performs view initialization.
           */
        }, {
          key: "initialize",
          value: function initialize() {
            if (this.pict.LogControlFlow) {
              this.log.trace("PICT-ControlFlow VIEW [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " initialize:"));
            }
            if (!this.initializeTimestamp) {
              this.onBeforeInitialize();
              this.onInitialize();
              this.onAfterInitialize();
              this.initializeTimestamp = this.pict.log.getTimeStamp();
              return true;
            } else {
              this.log.warn("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " initialize called but initialization is already completed.  Aborting."));
              return false;
            }
          }

          /**
           * Performs view initialization (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           */
        }, {
          key: "initializeAsync",
          value: function initializeAsync(fCallback) {
            var _this10 = this;
            if (this.pict.LogControlFlow) {
              this.log.trace("PICT-ControlFlow VIEW [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " initializeAsync:"));
            }
            if (!this.initializeTimestamp) {
              var tmpAnticipate = this.pict.instantiateServiceProviderWithoutRegistration('Anticipate');
              if (this.pict.LogNoisiness > 0) {
                this.log.info("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " beginning initialization..."));
              }
              tmpAnticipate.anticipate(this.onBeforeInitializeAsync.bind(this));
              tmpAnticipate.anticipate(this.onInitializeAsync.bind(this));
              tmpAnticipate.anticipate(this.onAfterInitializeAsync.bind(this));
              tmpAnticipate.wait(/** @param {Error} pError */
              function (pError) {
                if (pError) {
                  _this10.log.error("PictView [".concat(_this10.UUID, "]::[").concat(_this10.Hash, "] ").concat(_this10.options.ViewIdentifier, " initialization failed: ").concat(pError.message || pError), {
                    stack: pError.stack
                  });
                }
                _this10.initializeTimestamp = _this10.pict.log.getTimeStamp();
                if (_this10.pict.LogNoisiness > 0) {
                  _this10.log.info("PictView [".concat(_this10.UUID, "]::[").concat(_this10.Hash, "] ").concat(_this10.options.ViewIdentifier, " initialization complete."));
                }
                return fCallback();
              });
            } else {
              this.log.warn("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " async initialize called but initialization is already completed.  Aborting."));
              // TODO: Should this be an error?
              return fCallback();
            }
          }
        }, {
          key: "onAfterInitialize",
          value: function onAfterInitialize() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " onAfterInitialize:"));
            }
            return true;
          }

          /**
           * Lifecycle hook that triggers after the view is initialized (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           */
        }, {
          key: "onAfterInitializeAsync",
          value: function onAfterInitializeAsync(fCallback) {
            this.onAfterInitialize();
            return fCallback();
          }

          /* -------------------------------------------------------------------------- */
          /*                            Code Section: Render                            */
          /* -------------------------------------------------------------------------- */
          /**
           * Lifecycle hook that triggers before the view is rendered.
           *
           * @param {Renderable} pRenderable - The renderable that will be rendered.
           */
        }, {
          key: "onBeforeRender",
          value: function onBeforeRender(pRenderable) {
            // Overload this to mess with stuff before the content gets generated from the template
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " onBeforeRender:"));
            }
            return true;
          }

          /**
           * Lifecycle hook that triggers before the view is rendered (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           * @param {Renderable} pRenderable - The renderable that will be rendered.
           */
        }, {
          key: "onBeforeRenderAsync",
          value: function onBeforeRenderAsync(fCallback, pRenderable) {
            this.onBeforeRender(pRenderable);
            return fCallback();
          }

          /**
           * Lifecycle hook that triggers before the view is projected into the DOM.
           *
           * @param {Renderable} pRenderable - The renderable that will be projected.
           */
        }, {
          key: "onBeforeProject",
          value: function onBeforeProject(pRenderable) {
            // Overload this to mess with stuff before the content gets generated from the template
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " onBeforeProject:"));
            }
            return true;
          }

          /**
           * Lifecycle hook that triggers before the view is projected into the DOM (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           * @param {Renderable} pRenderable - The renderable that will be projected.
           */
        }, {
          key: "onBeforeProjectAsync",
          value: function onBeforeProjectAsync(fCallback, pRenderable) {
            this.onBeforeProject(pRenderable);
            return fCallback();
          }

          /**
           * Builds the render options for a renderable.
           *
           * For DRY purposes on the three flavors of render.
           *
           * @param {string|ErrorCallback} [pRenderableHash] - The hash of the renderable to render.
           * @param {string|ErrorCallback} [pRenderDestinationAddress] - The address where the renderable will be rendered.
           * @param {string|object|ErrorCallback} [pTemplateRecordAddress] - The address of (or actual obejct) where the data for the template is stored.
           */
        }, {
          key: "buildRenderOptions",
          value: function buildRenderOptions(pRenderableHash, pRenderDestinationAddress, pTemplateRecordAddress) {
            var tmpRenderOptions = {
              Valid: true
            };
            tmpRenderOptions.RenderableHash = typeof pRenderableHash === 'string' ? pRenderableHash : typeof this.options.DefaultRenderable == 'string' ? this.options.DefaultRenderable : false;
            if (!tmpRenderOptions.RenderableHash) {
              this.log.error("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " could not find a suitable RenderableHash ").concat(tmpRenderOptions.RenderableHash, " (param ").concat(pRenderableHash, "because it is not a valid renderable."));
              tmpRenderOptions.Valid = false;
            }
            tmpRenderOptions.Renderable = this.renderables[tmpRenderOptions.RenderableHash];
            if (!tmpRenderOptions.Renderable) {
              this.log.error("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " could not render ").concat(tmpRenderOptions.RenderableHash, " (param ").concat(pRenderableHash, ") because it does not exist."));
              tmpRenderOptions.Valid = false;
            }
            tmpRenderOptions.DestinationAddress = typeof pRenderDestinationAddress === 'string' ? pRenderDestinationAddress : typeof tmpRenderOptions.Renderable.ContentDestinationAddress === 'string' ? tmpRenderOptions.Renderable.ContentDestinationAddress : typeof this.options.DefaultDestinationAddress === 'string' ? this.options.DefaultDestinationAddress : false;
            if (!tmpRenderOptions.DestinationAddress) {
              this.log.error("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " could not render ").concat(tmpRenderOptions.RenderableHash, " (param ").concat(pRenderableHash, ") because it does not have a valid destination address (param ").concat(pRenderDestinationAddress, ")."));
              tmpRenderOptions.Valid = false;
            }
            if (_typeof(pTemplateRecordAddress) === 'object') {
              tmpRenderOptions.RecordAddress = 'Passed in as object';
              tmpRenderOptions.Record = pTemplateRecordAddress;
            } else {
              tmpRenderOptions.RecordAddress = typeof pTemplateRecordAddress === 'string' ? pTemplateRecordAddress : typeof tmpRenderOptions.Renderable.DefaultTemplateRecordAddress === 'string' ? tmpRenderOptions.Renderable.DefaultTemplateRecordAddress : typeof this.options.DefaultTemplateRecordAddress === 'string' ? this.options.DefaultTemplateRecordAddress : false;
              tmpRenderOptions.Record = typeof tmpRenderOptions.RecordAddress === 'string' ? this.pict.DataProvider.getDataByAddress(tmpRenderOptions.RecordAddress) : undefined;
            }
            return tmpRenderOptions;
          }

          /**
           * Assigns the content to the destination address.
           *
           * For DRY purposes on the three flavors of render.
           *
           * @param {Renderable} pRenderable - The renderable to render.
           * @param {string} pRenderDestinationAddress - The address where the renderable will be rendered.
           * @param {string} pContent - The content to render.
           * @returns {boolean} - Returns true if the content was assigned successfully.
           * @memberof PictView
           */
        }, {
          key: "assignRenderContent",
          value: function assignRenderContent(pRenderable, pRenderDestinationAddress, pContent) {
            return this.pict.ContentAssignment.projectContent(pRenderable.RenderMethod, pRenderDestinationAddress, pContent, pRenderable.TestAddress);
          }

          /**
           * Render a renderable from this view.
           *
           * @param {string} [pRenderableHash] - The hash of the renderable to render.
           * @param {string} [pRenderDestinationAddress] - The address where the renderable will be rendered.
           * @param {string|object} [pTemplateRecordAddress] - The address where the data for the template is stored.
           * @param {Renderable} [pRootRenderable] - The root renderable for the render operation, if applicable.
           * @return {boolean}
           */
        }, {
          key: "render",
          value: function render(pRenderableHash, pRenderDestinationAddress, pTemplateRecordAddress, pRootRenderable) {
            return this.renderWithScope(this, pRenderableHash, pRenderDestinationAddress, pTemplateRecordAddress, pRootRenderable);
          }

          /**
           * Render a renderable from this view, providing a specifici scope for the template.
           *
           * @param {any} pScope - The scope to use for the template rendering.
           * @param {string} [pRenderableHash] - The hash of the renderable to render.
           * @param {string} [pRenderDestinationAddress] - The address where the renderable will be rendered.
           * @param {string|object} [pTemplateRecordAddress] - The address where the data for the template is stored.
           * @param {Renderable} [pRootRenderable] - The root renderable for the render operation, if applicable.
           * @return {boolean}
           */
        }, {
          key: "renderWithScope",
          value: function renderWithScope(pScope, pRenderableHash, pRenderDestinationAddress, pTemplateRecordAddress, pRootRenderable) {
            var tmpRenderableHash = typeof pRenderableHash === 'string' ? pRenderableHash : typeof this.options.DefaultRenderable == 'string' ? this.options.DefaultRenderable : false;
            if (!tmpRenderableHash) {
              this.log.error("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " could not render ").concat(tmpRenderableHash, " (param ").concat(pRenderableHash, ") because it is not a valid renderable."));
              return false;
            }

            /** @type {Renderable} */
            var tmpRenderable;
            if (tmpRenderableHash == '__Virtual') {
              tmpRenderable = {
                RenderableHash: '__Virtual',
                TemplateHash: this.renderables[this.options.DefaultRenderable].TemplateHash,
                ContentDestinationAddress: typeof pRenderDestinationAddress === 'string' ? pRenderDestinationAddress : typeof tmpRenderable.ContentDestinationAddress === 'string' ? tmpRenderable.ContentDestinationAddress : typeof this.options.DefaultDestinationAddress === 'string' ? this.options.DefaultDestinationAddress : null,
                RenderMethod: 'virtual-assignment',
                TransactionHash: pRootRenderable && pRootRenderable.TransactionHash,
                RootRenderableViewHash: pRootRenderable && pRootRenderable.RootRenderableViewHash
              };
            } else {
              tmpRenderable = Object.assign({}, this.renderables[tmpRenderableHash]);
              tmpRenderable.ContentDestinationAddress = typeof pRenderDestinationAddress === 'string' ? pRenderDestinationAddress : typeof tmpRenderable.ContentDestinationAddress === 'string' ? tmpRenderable.ContentDestinationAddress : typeof this.options.DefaultDestinationAddress === 'string' ? this.options.DefaultDestinationAddress : null;
            }
            if (!tmpRenderable.TransactionHash) {
              tmpRenderable.TransactionHash = "ViewRender-V-".concat(this.options.ViewIdentifier, "-R-").concat(tmpRenderableHash, "-U-").concat(this.pict.getUUID());
              tmpRenderable.RootRenderableViewHash = this.Hash;
              this.pict.TransactionTracking.registerTransaction(tmpRenderable.TransactionHash);
            }
            if (!tmpRenderable) {
              this.log.error("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " could not render ").concat(tmpRenderableHash, " (param ").concat(pRenderableHash, ") because it does not exist."));
              return false;
            }
            if (!tmpRenderable.ContentDestinationAddress) {
              this.log.error("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " could not render ").concat(tmpRenderableHash, " (param ").concat(pRenderableHash, ") because it does not have a valid destination address."));
              return false;
            }
            var tmpRecordAddress;
            var tmpRecord;
            if (_typeof(pTemplateRecordAddress) === 'object') {
              tmpRecord = pTemplateRecordAddress;
              tmpRecordAddress = 'Passed in as object';
            } else {
              tmpRecordAddress = typeof pTemplateRecordAddress === 'string' ? pTemplateRecordAddress : typeof tmpRenderable.DefaultTemplateRecordAddress === 'string' ? tmpRenderable.DefaultTemplateRecordAddress : typeof this.options.DefaultTemplateRecordAddress === 'string' ? this.options.DefaultTemplateRecordAddress : false;
              tmpRecord = typeof tmpRecordAddress === 'string' ? this.pict.DataProvider.getDataByAddress(tmpRecordAddress) : undefined;
            }

            // Execute the developer-overridable pre-render behavior
            this.onBeforeRender(tmpRenderable);
            if (this.pict.LogControlFlow) {
              this.log.trace("PICT-ControlFlow VIEW [".concat(this.UUID, "]::[").concat(this.Hash, "] Renderable[").concat(tmpRenderableHash, "] Destination[").concat(tmpRenderable.ContentDestinationAddress, "] TemplateRecordAddress[").concat(tmpRecordAddress, "] render:"));
            }
            if (this.pict.LogNoisiness > 0) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " Beginning Render of Renderable[").concat(tmpRenderableHash, "] to Destination [").concat(tmpRenderable.ContentDestinationAddress, "]..."));
            }
            // Generate the content output from the template and data
            tmpRenderable.Content = this.pict.parseTemplateByHash(tmpRenderable.TemplateHash, tmpRecord, null, [this], pScope, {
              RootRenderable: _typeof(pRootRenderable) === 'object' ? pRootRenderable : tmpRenderable
            });
            if (this.pict.LogNoisiness > 0) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " Assigning Renderable[").concat(tmpRenderableHash, "] content length ").concat(tmpRenderable.Content.length, " to Destination [").concat(tmpRenderable.ContentDestinationAddress, "] using render method [").concat(tmpRenderable.RenderMethod, "]."));
            }
            this.onBeforeProject(tmpRenderable);
            this.onProject(tmpRenderable);
            if (tmpRenderable.RenderMethod !== 'virtual-assignment') {
              this.onAfterProject(tmpRenderable);

              // Execute the developer-overridable post-render behavior
              this.onAfterRender(tmpRenderable);
            }
            return true;
          }

          /**
           * Render a renderable from this view.
           *
           * @param {string|ErrorCallback} [pRenderableHash] - The hash of the renderable to render.
           * @param {string|ErrorCallback} [pRenderDestinationAddress] - The address where the renderable will be rendered.
           * @param {string|object|ErrorCallback} [pTemplateRecordAddress] - The address where the data for the template is stored.
           * @param {Renderable|ErrorCallback} [pRootRenderable] - The root renderable for the render operation, if applicable.
           * @param {ErrorCallback} [fCallback] - The callback to call when the async operation is complete.
           *
           * @return {void}
           */
        }, {
          key: "renderAsync",
          value: function renderAsync(pRenderableHash, pRenderDestinationAddress, pTemplateRecordAddress, pRootRenderable, fCallback) {
            return this.renderWithScopeAsync(this, pRenderableHash, pRenderDestinationAddress, pTemplateRecordAddress, pRootRenderable, fCallback);
          }

          /**
           * Render a renderable from this view.
           *
           * @param {any} pScope - The scope to use for the template rendering.
           * @param {string|ErrorCallback} [pRenderableHash] - The hash of the renderable to render.
           * @param {string|ErrorCallback} [pRenderDestinationAddress] - The address where the renderable will be rendered.
           * @param {string|object|ErrorCallback} [pTemplateRecordAddress] - The address where the data for the template is stored.
           * @param {Renderable|ErrorCallback} [pRootRenderable] - The root renderable for the render operation, if applicable.
           * @param {ErrorCallback} [fCallback] - The callback to call when the async operation is complete.
           *
           * @return {void}
           */
        }, {
          key: "renderWithScopeAsync",
          value: function renderWithScopeAsync(pScope, pRenderableHash, pRenderDestinationAddress, pTemplateRecordAddress, pRootRenderable, fCallback) {
            var _this11 = this;
            var tmpRenderableHash = typeof pRenderableHash === 'string' ? pRenderableHash : typeof this.options.DefaultRenderable == 'string' ? this.options.DefaultRenderable : false;

            // Allow the callback to be passed in as the last parameter no matter what
            /** @type {ErrorCallback} */
            var tmpCallback = typeof fCallback === 'function' ? fCallback : typeof pTemplateRecordAddress === 'function' ? pTemplateRecordAddress : typeof pRenderDestinationAddress === 'function' ? pRenderDestinationAddress : typeof pRenderableHash === 'function' ? pRenderableHash : typeof pRootRenderable === 'function' ? pRootRenderable : null;
            if (!tmpCallback) {
              this.log.warn("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " renderAsync was called without a valid callback.  A callback will be generated but this could lead to race conditions."));
              tmpCallback = function tmpCallback(pError) {
                if (pError) {
                  _this11.log.error("PictView [".concat(_this11.UUID, "]::[").concat(_this11.Hash, "] ").concat(_this11.options.Name, " renderAsync Auto Callback Error: ").concat(pError), pError);
                }
              };
            }
            if (!tmpRenderableHash) {
              this.log.error("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " could not asynchronously render ").concat(tmpRenderableHash, " (param ").concat(pRenderableHash, "because it is not a valid renderable."));
              return tmpCallback(new Error("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " could not asynchronously render ").concat(tmpRenderableHash, " (param ").concat(pRenderableHash, "because it is not a valid renderable.")));
            }

            /** @type {Renderable} */
            var tmpRenderable;
            if (tmpRenderableHash == '__Virtual') {
              tmpRenderable = {
                RenderableHash: '__Virtual',
                TemplateHash: this.renderables[this.options.DefaultRenderable].TemplateHash,
                ContentDestinationAddress: typeof pRenderDestinationAddress === 'string' ? pRenderDestinationAddress : typeof this.options.DefaultDestinationAddress === 'string' ? this.options.DefaultDestinationAddress : null,
                RenderMethod: 'virtual-assignment',
                TransactionHash: pRootRenderable && typeof pRootRenderable !== 'function' && pRootRenderable.TransactionHash,
                RootRenderableViewHash: pRootRenderable && typeof pRootRenderable !== 'function' && pRootRenderable.RootRenderableViewHash
              };
            } else {
              tmpRenderable = Object.assign({}, this.renderables[tmpRenderableHash]);
              tmpRenderable.ContentDestinationAddress = typeof pRenderDestinationAddress === 'string' ? pRenderDestinationAddress : typeof tmpRenderable.ContentDestinationAddress === 'string' ? tmpRenderable.ContentDestinationAddress : typeof this.options.DefaultDestinationAddress === 'string' ? this.options.DefaultDestinationAddress : null;
            }
            if (!tmpRenderable.TransactionHash) {
              tmpRenderable.TransactionHash = "ViewRender-V-".concat(this.options.ViewIdentifier, "-R-").concat(tmpRenderableHash, "-U-").concat(this.pict.getUUID());
              tmpRenderable.RootRenderableViewHash = this.Hash;
              this.pict.TransactionTracking.registerTransaction(tmpRenderable.TransactionHash);
            }
            if (!tmpRenderable) {
              this.log.error("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " could not render ").concat(tmpRenderableHash, " (param ").concat(pRenderableHash, ") because it does not exist."));
              return tmpCallback(new Error("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " could not render ").concat(tmpRenderableHash, " (param ").concat(pRenderableHash, ") because it does not exist.")));
            }
            if (!tmpRenderable.ContentDestinationAddress) {
              this.log.error("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " could not render ").concat(tmpRenderableHash, " (param ").concat(pRenderableHash, ") because it does not have a valid destination address."));
              return tmpCallback(new Error("Could not render ".concat(tmpRenderableHash)));
            }
            var tmpRecordAddress;
            var tmpRecord;
            if (_typeof(pTemplateRecordAddress) === 'object') {
              tmpRecord = pTemplateRecordAddress;
              tmpRecordAddress = 'Passed in as object';
            } else {
              tmpRecordAddress = typeof pTemplateRecordAddress === 'string' ? pTemplateRecordAddress : typeof tmpRenderable.DefaultTemplateRecordAddress === 'string' ? tmpRenderable.DefaultTemplateRecordAddress : typeof this.options.DefaultTemplateRecordAddress === 'string' ? this.options.DefaultTemplateRecordAddress : false;
              tmpRecord = typeof tmpRecordAddress === 'string' ? this.pict.DataProvider.getDataByAddress(tmpRecordAddress) : undefined;
            }
            if (this.pict.LogControlFlow) {
              this.log.trace("PICT-ControlFlow VIEW [".concat(this.UUID, "]::[").concat(this.Hash, "] Renderable[").concat(tmpRenderableHash, "] Destination[").concat(tmpRenderable.ContentDestinationAddress, "] TemplateRecordAddress[").concat(tmpRecordAddress, "] renderAsync:"));
            }
            if (this.pict.LogNoisiness > 2) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " Beginning Asynchronous Render (callback-style)..."));
            }
            var tmpAnticipate = this.fable.newAnticipate();
            tmpAnticipate.anticipate(function (fOnBeforeRenderCallback) {
              _this11.onBeforeRenderAsync(fOnBeforeRenderCallback, tmpRenderable);
            });
            tmpAnticipate.anticipate(function (fAsyncTemplateCallback) {
              // Render the template (asynchronously)
              _this11.pict.parseTemplateByHash(tmpRenderable.TemplateHash, tmpRecord, function (pError, pContent) {
                if (pError) {
                  _this11.log.error("PictView [".concat(_this11.UUID, "]::[").concat(_this11.Hash, "] ").concat(_this11.options.ViewIdentifier, " could not render (asynchronously) ").concat(tmpRenderableHash, " (param ").concat(pRenderableHash, ") because it did not parse the template."), pError);
                  return fAsyncTemplateCallback(pError);
                }
                tmpRenderable.Content = pContent;
                return fAsyncTemplateCallback();
              }, [_this11], pScope, {
                RootRenderable: _typeof(pRootRenderable) === 'object' ? pRootRenderable : tmpRenderable
              });
            });
            tmpAnticipate.anticipate(function (fNext) {
              _this11.onBeforeProjectAsync(fNext, tmpRenderable);
            });
            tmpAnticipate.anticipate(function (fNext) {
              _this11.onProjectAsync(fNext, tmpRenderable);
            });
            if (tmpRenderable.RenderMethod !== 'virtual-assignment') {
              tmpAnticipate.anticipate(function (fNext) {
                _this11.onAfterProjectAsync(fNext, tmpRenderable);
              });

              // Execute the developer-overridable post-render behavior
              tmpAnticipate.anticipate(function (fNext) {
                _this11.onAfterRenderAsync(fNext, tmpRenderable);
              });
            }
            tmpAnticipate.wait(tmpCallback);
          }

          /**
           * Renders the default renderable.
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           */
        }, {
          key: "renderDefaultAsync",
          value: function renderDefaultAsync(fCallback) {
            // Render the default renderable
            this.renderAsync(fCallback);
          }

          /**
           * @param {string} [pRenderableHash] - The hash of the renderable to render.
           * @param {string} [pRenderDestinationAddress] - The address where the renderable will be rendered.
           * @param {string|object} [pTemplateRecordAddress] - The address of (or actual obejct) where the data for the template is stored.
           */
        }, {
          key: "basicRender",
          value: function basicRender(pRenderableHash, pRenderDestinationAddress, pTemplateRecordAddress) {
            return this.basicRenderWithScope(this, pRenderableHash, pRenderDestinationAddress, pTemplateRecordAddress);
          }

          /**
           * @param {any} pScope - The scope to use for the template rendering.
           * @param {string} [pRenderableHash] - The hash of the renderable to render.
           * @param {string} [pRenderDestinationAddress] - The address where the renderable will be rendered.
           * @param {string|object} [pTemplateRecordAddress] - The address of (or actual obejct) where the data for the template is stored.
           */
        }, {
          key: "basicRenderWithScope",
          value: function basicRenderWithScope(pScope, pRenderableHash, pRenderDestinationAddress, pTemplateRecordAddress) {
            var tmpRenderOptions = this.buildRenderOptions(pRenderableHash, pRenderDestinationAddress, pTemplateRecordAddress);
            if (tmpRenderOptions.Valid) {
              this.assignRenderContent(tmpRenderOptions.Renderable, tmpRenderOptions.DestinationAddress, this.pict.parseTemplateByHash(tmpRenderOptions.Renderable.TemplateHash, tmpRenderOptions.Record, null, [this], pScope, {
                RootRenderable: tmpRenderOptions.Renderable
              }));
              return true;
            } else {
              this.log.error("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " could not perform a basic render of ").concat(tmpRenderOptions.RenderableHash, " because it is not valid."));
              return false;
            }
          }

          /**
           * @param {string|ErrorCallback} [pRenderableHash] - The hash of the renderable to render.
           * @param {string|ErrorCallback} [pRenderDestinationAddress] - The address where the renderable will be rendered.
           * @param {string|Object|ErrorCallback} [pTemplateRecordAddress] - The address of (or actual obejct) where the data for the template is stored.
           * @param {ErrorCallback} [fCallback] - The callback to call when the async operation is complete.
           */
        }, {
          key: "basicRenderAsync",
          value: function basicRenderAsync(pRenderableHash, pRenderDestinationAddress, pTemplateRecordAddress, fCallback) {
            return this.basicRenderWithScopeAsync(this, pRenderableHash, pRenderDestinationAddress, pTemplateRecordAddress, fCallback);
          }

          /**
           * @param {any} pScope - The scope to use for the template rendering.
           * @param {string|ErrorCallback} [pRenderableHash] - The hash of the renderable to render.
           * @param {string|ErrorCallback} [pRenderDestinationAddress] - The address where the renderable will be rendered.
           * @param {string|Object|ErrorCallback} [pTemplateRecordAddress] - The address of (or actual obejct) where the data for the template is stored.
           * @param {ErrorCallback} [fCallback] - The callback to call when the async operation is complete.
           */
        }, {
          key: "basicRenderWithScopeAsync",
          value: function basicRenderWithScopeAsync(pScope, pRenderableHash, pRenderDestinationAddress, pTemplateRecordAddress, fCallback) {
            var _this12 = this;
            // Allow the callback to be passed in as the last parameter no matter what
            /** @type {ErrorCallback} */
            var tmpCallback = typeof fCallback === 'function' ? fCallback : typeof pTemplateRecordAddress === 'function' ? pTemplateRecordAddress : typeof pRenderDestinationAddress === 'function' ? pRenderDestinationAddress : typeof pRenderableHash === 'function' ? pRenderableHash : null;
            if (!tmpCallback) {
              this.log.warn("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " basicRenderAsync was called without a valid callback.  A callback will be generated but this could lead to race conditions."));
              tmpCallback = function tmpCallback(pError) {
                if (pError) {
                  _this12.log.error("PictView [".concat(_this12.UUID, "]::[").concat(_this12.Hash, "] ").concat(_this12.options.Name, " basicRenderAsync Auto Callback Error: ").concat(pError), pError);
                }
              };
            }
            var tmpRenderOptions = this.buildRenderOptions(pRenderableHash, pRenderDestinationAddress, pTemplateRecordAddress);
            if (tmpRenderOptions.Valid) {
              this.pict.parseTemplateByHash(tmpRenderOptions.Renderable.TemplateHash, tmpRenderOptions.Record,
              /**
               * @param {Error} [pError] - The error that occurred during template parsing.
               * @param {string} [pContent] - The content that was rendered from the template.
               */
              function (pError, pContent) {
                if (pError) {
                  _this12.log.error("PictView [".concat(_this12.UUID, "]::[").concat(_this12.Hash, "] ").concat(_this12.options.ViewIdentifier, " could not render (asynchronously) ").concat(tmpRenderOptions.RenderableHash, " because it did not parse the template."), pError);
                  return tmpCallback(pError);
                }
                _this12.assignRenderContent(tmpRenderOptions.Renderable, tmpRenderOptions.DestinationAddress, pContent);
                return tmpCallback();
              }, [this], pScope, {
                RootRenderable: tmpRenderOptions.Renderable
              });
            } else {
              var tmpErrorMessage = "PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " could not perform a basic render of ").concat(tmpRenderOptions.RenderableHash, " because it is not valid.");
              this.log.error(tmpErrorMessage);
              return tmpCallback(new Error(tmpErrorMessage));
            }
          }

          /**
           * @param {Renderable} pRenderable - The renderable that was rendered.
           */
        }, {
          key: "onProject",
          value: function onProject(pRenderable) {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " onProject:"));
            }
            if (pRenderable.RenderMethod === 'virtual-assignment') {
              this.pict.TransactionTracking.pushToTransactionQueue(pRenderable.TransactionHash, {
                ViewHash: this.Hash,
                Renderable: pRenderable
              }, 'Deferred-Post-Content-Assignment');
            }
            if (this.pict.LogNoisiness > 0) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " Assigning Renderable[").concat(pRenderable.RenderableHash, "] content length ").concat(pRenderable.Content.length, " to Destination [").concat(pRenderable.ContentDestinationAddress, "] using Async render method ").concat(pRenderable.RenderMethod, "."));
            }

            // Assign the content to the destination address
            this.pict.ContentAssignment.projectContent(pRenderable.RenderMethod, pRenderable.ContentDestinationAddress, pRenderable.Content, pRenderable.TestAddress);
            this.lastRenderedTimestamp = this.pict.log.getTimeStamp();
          }

          /**
           * Lifecycle hook that triggers after the view is projected into the DOM (async flow).
           *
           * @param {(error?: Error, content?: string) => void} fCallback - The callback to call when the async operation is complete.
           * @param {Renderable} pRenderable - The renderable that is being projected.
           */
        }, {
          key: "onProjectAsync",
          value: function onProjectAsync(fCallback, pRenderable) {
            this.onProject(pRenderable);
            return fCallback();
          }

          /**
           * Lifecycle hook that triggers after the view is rendered.
           *
           * @param {Renderable} pRenderable - The renderable that was rendered.
           */
        }, {
          key: "onAfterRender",
          value: function onAfterRender(pRenderable) {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " onAfterRender:"));
            }
            if (pRenderable && pRenderable.RootRenderableViewHash === this.Hash) {
              var tmpTransactionQueue = this.pict.TransactionTracking.clearTransactionQueue(pRenderable.TransactionHash) || [];
              var _iterator = _createForOfIteratorHelper(tmpTransactionQueue),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var tmpEvent = _step.value;
                  var tmpView = this.pict.views[tmpEvent.Data.ViewHash];
                  if (!tmpView) {
                    this.log.error("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " onAfterRender: Could not find view for transaction hash ").concat(pRenderable.TransactionHash, " and ViewHash ").concat(tmpEvent.Data.ViewHash, "."));
                    continue;
                  }
                  tmpView.onAfterProject();

                  // Execute the developer-overridable post-render behavior
                  tmpView.onAfterRender(tmpEvent.Data.Renderable);
                }
                // Queue is drained and nested child renders have each cleaned up
                // their own transactions; remove this root render's entry from
                // the tracking map so it does not leak.
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              this.pict.TransactionTracking.unregisterTransaction(pRenderable.TransactionHash);
            }
            return true;
          }

          /**
           * Lifecycle hook that triggers after the view is rendered (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           * @param {Renderable} pRenderable - The renderable that was rendered.
           */
        }, {
          key: "onAfterRenderAsync",
          value: function onAfterRenderAsync(fCallback, pRenderable) {
            var _this13 = this;
            // NOTE: this.onAfterRender(pRenderable) will itself clear the
            // transaction queue and unregister the transaction if this view is
            // the root renderable - see onAfterRender above. So by the time the
            // loop below runs, the queue is already empty and there is nothing
            // to drain. Keeping the async queue walk here defensively in case
            // future subclasses override onAfterRender in ways that skip the
            // drain, but the common path is now "sync drain, async no-op".
            this.onAfterRender(pRenderable);
            var tmpAnticipate = this.fable.newAnticipate();
            var tmpIsRootRenderable = pRenderable && pRenderable.RootRenderableViewHash === this.Hash;
            if (tmpIsRootRenderable) {
              var queue = this.pict.TransactionTracking.clearTransactionQueue(pRenderable.TransactionHash) || [];
              var _iterator2 = _createForOfIteratorHelper(queue),
                _step2;
              try {
                var _loop = function _loop() {
                  var event = _step2.value;
                  /** @type {PictView} */
                  var tmpView = _this13.pict.views[event.Data.ViewHash];
                  if (!tmpView) {
                    _this13.log.error("PictView [".concat(_this13.UUID, "]::[").concat(_this13.Hash, "] ").concat(_this13.options.ViewIdentifier, " onAfterRenderAsync: Could not find view for transaction hash ").concat(pRenderable.TransactionHash, " and ViewHash ").concat(event.Data.ViewHash, "."));
                    return 1; // continue
                  }
                  tmpAnticipate.anticipate(tmpView.onAfterProjectAsync.bind(tmpView));
                  tmpAnticipate.anticipate(function (fNext) {
                    tmpView.onAfterRenderAsync(fNext, event.Data.Renderable);
                  });

                  // Execute the developer-overridable post-render behavior
                };
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  if (_loop()) continue;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
            return tmpAnticipate.wait(function (pError) {
              // Nested virtual-assignment children have now settled their own
              // onAfterRenderAsync chains (and unregistered their own
              // transactions along the way). Ensure this root render's entry
              // is also gone - unregisterTransaction is a no-op if the sync
              // onAfterRender above already removed it, so this is safe to
              // call unconditionally on the root path.
              if (tmpIsRootRenderable && pRenderable && pRenderable.TransactionHash) {
                _this13.pict.TransactionTracking.unregisterTransaction(pRenderable.TransactionHash);
              }
              return fCallback(pError);
            });
          }

          /**
           * Lifecycle hook that triggers after the view is projected into the DOM.
           *
           * @param {Renderable} pRenderable - The renderable that was projected.
           */
        }, {
          key: "onAfterProject",
          value: function onAfterProject(pRenderable) {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " onAfterProject:"));
            }
            return true;
          }

          /**
           * Lifecycle hook that triggers after the view is projected into the DOM (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           * @param {Renderable} pRenderable - The renderable that was projected.
           */
        }, {
          key: "onAfterProjectAsync",
          value: function onAfterProjectAsync(fCallback, pRenderable) {
            return fCallback();
          }

          /* -------------------------------------------------------------------------- */
          /*                            Code Section: Solver                            */
          /* -------------------------------------------------------------------------- */
          /**
           * Lifecycle hook that triggers before the view is solved.
           */
        }, {
          key: "onBeforeSolve",
          value: function onBeforeSolve() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " onBeforeSolve:"));
            }
            return true;
          }

          /**
           * Lifecycle hook that triggers before the view is solved (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           */
        }, {
          key: "onBeforeSolveAsync",
          value: function onBeforeSolveAsync(fCallback) {
            this.onBeforeSolve();
            return fCallback();
          }

          /**
           * Lifecycle hook that triggers when the view is solved.
           */
        }, {
          key: "onSolve",
          value: function onSolve() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " onSolve:"));
            }
            return true;
          }

          /**
           * Lifecycle hook that triggers when the view is solved (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           */
        }, {
          key: "onSolveAsync",
          value: function onSolveAsync(fCallback) {
            this.onSolve();
            return fCallback();
          }

          /**
           * Performs view solving and triggers lifecycle hooks.
           *
           * @return {boolean} - True if the view was solved successfully, false otherwise.
           */
        }, {
          key: "solve",
          value: function solve() {
            if (this.pict.LogNoisiness > 2) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " executing solve() function..."));
            }
            this.onBeforeSolve();
            this.onSolve();
            this.onAfterSolve();
            this.lastSolvedTimestamp = this.pict.log.getTimeStamp();
            return true;
          }

          /**
           * Performs view solving and triggers lifecycle hooks (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           */
        }, {
          key: "solveAsync",
          value: function solveAsync(fCallback) {
            var _this14 = this;
            var tmpAnticipate = this.pict.instantiateServiceProviderWithoutRegistration('Anticipate');

            /** @type {ErrorCallback} */
            var tmpCallback = typeof fCallback === 'function' ? fCallback : null;
            if (!tmpCallback) {
              this.log.warn("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " solveAsync was called without a valid callback.  A callback will be generated but this could lead to race conditions."));
              tmpCallback = function tmpCallback(pError) {
                if (pError) {
                  _this14.log.error("PictView [".concat(_this14.UUID, "]::[").concat(_this14.Hash, "] ").concat(_this14.options.Name, " solveAsync Auto Callback Error: ").concat(pError), pError);
                }
              };
            }
            tmpAnticipate.anticipate(this.onBeforeSolveAsync.bind(this));
            tmpAnticipate.anticipate(this.onSolveAsync.bind(this));
            tmpAnticipate.anticipate(this.onAfterSolveAsync.bind(this));
            tmpAnticipate.wait(function (pError) {
              if (_this14.pict.LogNoisiness > 2) {
                _this14.log.trace("PictView [".concat(_this14.UUID, "]::[").concat(_this14.Hash, "] ").concat(_this14.options.ViewIdentifier, " solveAsync() complete."));
              }
              _this14.lastSolvedTimestamp = _this14.pict.log.getTimeStamp();
              return tmpCallback(pError);
            });
          }

          /**
           * Lifecycle hook that triggers after the view is solved.
           */
        }, {
          key: "onAfterSolve",
          value: function onAfterSolve() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " onAfterSolve:"));
            }
            return true;
          }

          /**
           * Lifecycle hook that triggers after the view is solved (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           */
        }, {
          key: "onAfterSolveAsync",
          value: function onAfterSolveAsync(fCallback) {
            this.onAfterSolve();
            return fCallback();
          }

          /* -------------------------------------------------------------------------- */
          /*                     Code Section: Marshal From View                        */
          /* -------------------------------------------------------------------------- */
          /**
           * Lifecycle hook that triggers before data is marshaled from the view.
           *
           * @return {boolean} - True if the operation was successful, false otherwise.
           */
        }, {
          key: "onBeforeMarshalFromView",
          value: function onBeforeMarshalFromView() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " onBeforeMarshalFromView:"));
            }
            return true;
          }

          /**
           * Lifecycle hook that triggers before data is marshaled from the view (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           */
        }, {
          key: "onBeforeMarshalFromViewAsync",
          value: function onBeforeMarshalFromViewAsync(fCallback) {
            this.onBeforeMarshalFromView();
            return fCallback();
          }

          /**
           * Lifecycle hook that triggers when data is marshaled from the view.
           */
        }, {
          key: "onMarshalFromView",
          value: function onMarshalFromView() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " onMarshalFromView:"));
            }
            return true;
          }

          /**
           * Lifecycle hook that triggers when data is marshaled from the view (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           */
        }, {
          key: "onMarshalFromViewAsync",
          value: function onMarshalFromViewAsync(fCallback) {
            this.onMarshalFromView();
            return fCallback();
          }

          /**
           * Marshals data from the view.
           *
           * @return {boolean} - True if the operation was successful, false otherwise.
           */
        }, {
          key: "marshalFromView",
          value: function marshalFromView() {
            if (this.pict.LogNoisiness > 2) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " executing solve() function..."));
            }
            this.onBeforeMarshalFromView();
            this.onMarshalFromView();
            this.onAfterMarshalFromView();
            this.lastMarshalFromViewTimestamp = this.pict.log.getTimeStamp();
            return true;
          }

          /**
           * Marshals data from the view (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           */
        }, {
          key: "marshalFromViewAsync",
          value: function marshalFromViewAsync(fCallback) {
            var _this15 = this;
            var tmpAnticipate = this.pict.instantiateServiceProviderWithoutRegistration('Anticipate');

            /** @type {ErrorCallback} */
            var tmpCallback = typeof fCallback === 'function' ? fCallback : null;
            if (!tmpCallback) {
              this.log.warn("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " marshalFromViewAsync was called without a valid callback.  A callback will be generated but this could lead to race conditions."));
              tmpCallback = function tmpCallback(pError) {
                if (pError) {
                  _this15.log.error("PictView [".concat(_this15.UUID, "]::[").concat(_this15.Hash, "] ").concat(_this15.options.Name, " marshalFromViewAsync Auto Callback Error: ").concat(pError), pError);
                }
              };
            }
            tmpAnticipate.anticipate(this.onBeforeMarshalFromViewAsync.bind(this));
            tmpAnticipate.anticipate(this.onMarshalFromViewAsync.bind(this));
            tmpAnticipate.anticipate(this.onAfterMarshalFromViewAsync.bind(this));
            tmpAnticipate.wait(function (pError) {
              if (_this15.pict.LogNoisiness > 2) {
                _this15.log.trace("PictView [".concat(_this15.UUID, "]::[").concat(_this15.Hash, "] ").concat(_this15.options.ViewIdentifier, " marshalFromViewAsync() complete."));
              }
              _this15.lastMarshalFromViewTimestamp = _this15.pict.log.getTimeStamp();
              return tmpCallback(pError);
            });
          }

          /**
           * Lifecycle hook that triggers after data is marshaled from the view.
           */
        }, {
          key: "onAfterMarshalFromView",
          value: function onAfterMarshalFromView() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " onAfterMarshalFromView:"));
            }
            return true;
          }

          /**
           * Lifecycle hook that triggers after data is marshaled from the view (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           */
        }, {
          key: "onAfterMarshalFromViewAsync",
          value: function onAfterMarshalFromViewAsync(fCallback) {
            this.onAfterMarshalFromView();
            return fCallback();
          }

          /* -------------------------------------------------------------------------- */
          /*                     Code Section: Marshal To View                          */
          /* -------------------------------------------------------------------------- */
          /**
           * Lifecycle hook that triggers before data is marshaled into the view.
           */
        }, {
          key: "onBeforeMarshalToView",
          value: function onBeforeMarshalToView() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " onBeforeMarshalToView:"));
            }
            return true;
          }

          /**
           * Lifecycle hook that triggers before data is marshaled into the view (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           */
        }, {
          key: "onBeforeMarshalToViewAsync",
          value: function onBeforeMarshalToViewAsync(fCallback) {
            this.onBeforeMarshalToView();
            return fCallback();
          }

          /**
           * Lifecycle hook that triggers when data is marshaled into the view.
           */
        }, {
          key: "onMarshalToView",
          value: function onMarshalToView() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " onMarshalToView:"));
            }
            return true;
          }

          /**
           * Lifecycle hook that triggers when data is marshaled into the view (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           */
        }, {
          key: "onMarshalToViewAsync",
          value: function onMarshalToViewAsync(fCallback) {
            this.onMarshalToView();
            return fCallback();
          }

          /**
           * Marshals data into the view.
           *
           * @return {boolean} - True if the operation was successful, false otherwise.
           */
        }, {
          key: "marshalToView",
          value: function marshalToView() {
            if (this.pict.LogNoisiness > 2) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " executing solve() function..."));
            }
            this.onBeforeMarshalToView();
            this.onMarshalToView();
            this.onAfterMarshalToView();
            this.lastMarshalToViewTimestamp = this.pict.log.getTimeStamp();
            return true;
          }

          /**
           * Marshals data into the view (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           */
        }, {
          key: "marshalToViewAsync",
          value: function marshalToViewAsync(fCallback) {
            var _this16 = this;
            var tmpAnticipate = this.pict.instantiateServiceProviderWithoutRegistration('Anticipate');

            /** @type {ErrorCallback} */
            var tmpCallback = typeof fCallback === 'function' ? fCallback : null;
            if (!tmpCallback) {
              this.log.warn("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " marshalToViewAsync was called without a valid callback.  A callback will be generated but this could lead to race conditions."));
              tmpCallback = function tmpCallback(pError) {
                if (pError) {
                  _this16.log.error("PictView [".concat(_this16.UUID, "]::[").concat(_this16.Hash, "] ").concat(_this16.options.Name, " marshalToViewAsync Auto Callback Error: ").concat(pError), pError);
                }
              };
            }
            tmpAnticipate.anticipate(this.onBeforeMarshalToViewAsync.bind(this));
            tmpAnticipate.anticipate(this.onMarshalToViewAsync.bind(this));
            tmpAnticipate.anticipate(this.onAfterMarshalToViewAsync.bind(this));
            tmpAnticipate.wait(function (pError) {
              if (_this16.pict.LogNoisiness > 2) {
                _this16.log.trace("PictView [".concat(_this16.UUID, "]::[").concat(_this16.Hash, "] ").concat(_this16.options.ViewIdentifier, " marshalToViewAsync() complete."));
              }
              _this16.lastMarshalToViewTimestamp = _this16.pict.log.getTimeStamp();
              return tmpCallback(pError);
            });
          }

          /**
           * Lifecycle hook that triggers after data is marshaled into the view.
           */
        }, {
          key: "onAfterMarshalToView",
          value: function onAfterMarshalToView() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictView [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.ViewIdentifier, " onAfterMarshalToView:"));
            }
            return true;
          }

          /**
           * Lifecycle hook that triggers after data is marshaled into the view (async flow).
           *
           * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
           */
        }, {
          key: "onAfterMarshalToViewAsync",
          value: function onAfterMarshalToViewAsync(fCallback) {
            this.onAfterMarshalToView();
            return fCallback();
          }

          /** @return {boolean} - True if the object is a PictView. */
        }, {
          key: "isPictView",
          get: function get() {
            return true;
          }
        }]);
      }(libFableServiceBase);
      module.exports = PictView;
    }, {
      "../package.json": 14,
      "fable-serviceproviderbase": 6
    }],
    16: [function (require, module, exports) {
      'use strict';

      /**
       * Shared CSS for pict-section-content. Registered by BOTH the provider (so any consumer
       * using parseMarkdown gets code-block + content styling, even without instantiating the view)
       * and the view, under one hash so it injects once. This is the lower-layer home for the
       * code-block line-number gutter layout (.pict-content-code-wrap is a flex row) that used to
       * only ship with the view -- fixing the recurring "line numbers render above the code" bug.
       */
      module.exports = /*css*/"\n\t\t.pict-content {\n\t\t\tpadding: 2em 3em;\n\t\t\tmax-width: 900px;\n\t\t\tmargin: 0 auto;\n\t\t}\n\t\t.pict-content-loading {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tmin-height: 200px;\n\t\t\tcolor: var(--theme-color-text-muted, #8A7F72);\n\t\t\tfont-size: 1em;\n\t\t}\n\t\t.pict-content h1 {\n\t\t\tfont-size: 2em;\n\t\t\tcolor: var(--theme-color-text-primary, #3D3229);\n\t\t\tborder-bottom: 1px solid var(--theme-color-border-default, #DDD6CA);\n\t\t\tpadding-bottom: 0.3em;\n\t\t\tmargin-top: 0;\n\t\t}\n\t\t.pict-content h2 {\n\t\t\tfont-size: 1.5em;\n\t\t\tcolor: var(--theme-color-text-primary, #3D3229);\n\t\t\tborder-bottom: 1px solid var(--theme-color-border-light, #EAE3D8);\n\t\t\tpadding-bottom: 0.25em;\n\t\t\tmargin-top: 1.5em;\n\t\t}\n\t\t.pict-content h3 {\n\t\t\tfont-size: 1.25em;\n\t\t\tcolor: var(--theme-color-text-primary, #3D3229);\n\t\t\tmargin-top: 1.25em;\n\t\t}\n\t\t.pict-content h4, .pict-content h5, .pict-content h6 {\n\t\t\tcolor: var(--theme-color-text-secondary, #5E5549);\n\t\t\tmargin-top: 1em;\n\t\t}\n\t\t.pict-content p {\n\t\t\tline-height: 1.7;\n\t\t\tcolor: var(--theme-color-text-primary, #423D37);\n\t\t\tmargin: 0.75em 0;\n\t\t}\n\t\t.pict-content a {\n\t\t\tcolor: var(--theme-color-brand-primary, #2E7D74);\n\t\t\ttext-decoration: none;\n\t\t}\n\t\t.pict-content a:hover {\n\t\t\ttext-decoration: underline;\n\t\t}\n\t\t/* \u2500\u2500\u2500 Code blocks \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\t\t   Background, text color, line-number gutter, and every\n\t\t   syntax token route through pict-provider-theme tokens \u2014\n\t\t   the same set pict-section-code (the live editor) uses.\n\t\t   This way the rendered-preview code blocks look identical\n\t\t   to the live editor and re-skin together when the theme\n\t\t   switches.  Previous version used the text-primary token\n\t\t   as the code background (a TEXT token used as BACKGROUND),\n\t\t   which broke in dark mode and any palette where text and\n\t\t   background-tertiary diverge.\n\t\t*/\n\t\t.pict-content pre {\n\t\t\tbackground:    var(--theme-color-background-tertiary, #F0ECE4);\n\t\t\tcolor:         var(--theme-color-text-primary,        #3D3229);\n\t\t\tborder:        1px solid var(--theme-color-border-default, #DDD6CA);\n\t\t\tpadding: 1.25em;\n\t\t\tborder-radius: 6px;\n\t\t\toverflow-x: auto;\n\t\t\tline-height: 1.5;\n\t\t\tfont-size: 0.9em;\n\t\t\tfont-family: var(--theme-typography-family-mono, 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace);\n\t\t}\n\t\t/* Inline code (single backtick) \u2014 slightly differentiated\n\t\t   from block code so it doesn't disappear into prose. */\n\t\t.pict-content code {\n\t\t\tbackground:    var(--theme-color-background-secondary, #FAF8F4);\n\t\t\tcolor:         var(--theme-color-text-primary,         #3D3229);\n\t\t\tpadding: 0.15em 0.4em;\n\t\t\tborder-radius: 3px;\n\t\t\tfont-size: 0.9em;\n\t\t\tfont-family: var(--theme-typography-family-mono, 'SFMono-Regular', 'SF Mono', 'Menlo', monospace);\n\t\t}\n\t\t.pict-content-code-wrap {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\tfont-family: var(--theme-typography-family-mono, 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace);\n\t\t\tfont-size: 14px;\n\t\t\tline-height: 1.5;\n\t\t\tborder: 1px solid var(--theme-color-border-default, #DDD6CA);\n\t\t\tborder-radius: 6px;\n\t\t\toverflow: hidden;\n\t\t\tmargin: 1em 0;\n\t\t\tbackground: var(--theme-color-background-tertiary, #F0ECE4);\n\t\t}\n\t\t.pict-content-code-wrap .pict-content-code-line-numbers {\n\t\t\twidth: 40px;\n\t\t\tmin-width: 40px;\n\t\t\tpadding: 1.25em 0;\n\t\t\ttext-align: right;\n\t\t\tbackground:    var(--theme-color-background-secondary, #FAF8F4);\n\t\t\tborder-right:  1px solid var(--theme-color-border-default, #DDD6CA);\n\t\t\tcolor:         var(--theme-color-text-muted,           #8A7F72);\n\t\t\tfont-family: inherit;\n\t\t\tfont-size: inherit;\n\t\t\tline-height: inherit;\n\t\t\tuser-select: none;\n\t\t\tpointer-events: none;\n\t\t\tbox-sizing: border-box;\n\t\t}\n\t\t.pict-content-code-wrap .pict-content-code-line-numbers span {\n\t\t\tdisplay: block;\n\t\t\tpadding: 0 8px 0 0;\n\t\t}\n\t\t.pict-content-code-wrap pre {\n\t\t\tmargin: 0;\n\t\t\tbackground: var(--theme-color-background-tertiary, #F0ECE4);\n\t\t\tcolor:      var(--theme-color-text-primary,        #3D3229);\n\t\t\tborder: none;\n\t\t\tpadding: 1.25em 1.25em 1.25em 8px;\n\t\t\tborder-radius: 0 6px 6px 0;\n\t\t\toverflow-x: auto;\n\t\t\tline-height: 1.5;\n\t\t\tfont-size: inherit;\n\t\t\tflex: 1;\n\t\t\tmin-width: 0;\n\t\t}\n\t\t.pict-content-code-wrap pre code {\n\t\t\tbackground: none;\n\t\t\tpadding: 0;\n\t\t\tcolor: inherit;\n\t\t\tfont-size: inherit;\n\t\t\tfont-family: inherit;\n\t\t}\n\t\t/* Syntax token colors \u2014 every class binds to a --theme-color-syntax-*\n\t\t   variable, the same tokens pict-section-code (the live editor) uses.\n\t\t   Each var() carries an Atom One Light hex as fallback for hosts\n\t\t   without a theme provider; themes that DO ship syntax tokens\n\t\t   (pict-default, retold-content-system, etc.) drive everything\n\t\t   coherently. */\n\t\t.pict-content-code-wrap .keyword       { color: var(--theme-color-syntax-keyword,     #A626A4); }\n\t\t.pict-content-code-wrap .string        { color: var(--theme-color-syntax-string,      #50A14F); }\n\t\t.pict-content-code-wrap .number        { color: var(--theme-color-syntax-number,      #986801); }\n\t\t.pict-content-code-wrap .comment       { color: var(--theme-color-syntax-comment,     #A0A1A7); font-style: italic; }\n\t\t.pict-content-code-wrap .operator      { color: var(--theme-color-syntax-operator,    #0184BC); }\n\t\t.pict-content-code-wrap .punctuation   { color: var(--theme-color-syntax-punctuation, #383A42); }\n\t\t.pict-content-code-wrap .function-name { color: var(--theme-color-syntax-function,    #4078F2); }\n\t\t.pict-content-code-wrap .property      { color: var(--theme-color-syntax-property,    #E45649); }\n\t\t.pict-content-code-wrap .tag           { color: var(--theme-color-syntax-tag,         #E45649); }\n\t\t.pict-content-code-wrap .attr-name     { color: var(--theme-color-syntax-attrname,    #986801); }\n\t\t.pict-content-code-wrap .attr-value    { color: var(--theme-color-syntax-attrvalue,   #50A14F); }\n\t\t.pict-content-code-wrap .builtin       { color: var(--theme-color-syntax-builtin,     #986801); }\n\t\t.pict-content-code-wrap .type          { color: var(--theme-color-syntax-type,        #C18401); }\n\t\t.pict-content-code-wrap .variable      { color: var(--theme-color-syntax-variable,    #383A42); }\n\t\t.pict-content pre code {\n\t\t\tbackground: none;\n\t\t\tpadding: 0;\n\t\t\tcolor: inherit;\n\t\t\tfont-size: inherit;\n\t\t}\n\t\t.pict-content blockquote {\n\t\t\tborder-left: 4px solid var(--theme-color-brand-primary, #2E7D74);\n\t\t\tmargin: 1em 0;\n\t\t\tpadding: 0.5em 1em;\n\t\t\tbackground: var(--theme-color-background-secondary, #F7F5F0);\n\t\t\tcolor: var(--theme-color-text-secondary, #5E5549);\n\t\t}\n\t\t.pict-content blockquote p {\n\t\t\tmargin: 0.25em 0;\n\t\t}\n\t\t.pict-content ul, .pict-content ol {\n\t\t\tpadding-left: 2em;\n\t\t\tline-height: 1.8;\n\t\t}\n\t\t.pict-content li {\n\t\t\tmargin: 0.25em 0;\n\t\t\tcolor: var(--theme-color-text-primary, #423D37);\n\t\t}\n\t\t.pict-content hr {\n\t\t\tborder: none;\n\t\t\tborder-top: 1px solid var(--theme-color-border-default, #DDD6CA);\n\t\t\tmargin: 2em 0;\n\t\t}\n\t\t.pict-content table {\n\t\t\twidth: 100%;\n\t\t\tborder-collapse: collapse;\n\t\t\tmargin: 1em 0;\n\t\t}\n\t\t.pict-content table th {\n\t\t\tbackground: var(--theme-color-background-secondary, #F5F0E8);\n\t\t\tborder: 1px solid var(--theme-color-border-default, #DDD6CA);\n\t\t\tpadding: 0.6em 0.8em;\n\t\t\ttext-align: left;\n\t\t\tfont-weight: 600;\n\t\t\tcolor: var(--theme-color-text-primary, #3D3229);\n\t\t}\n\t\t.pict-content table td {\n\t\t\tborder: 1px solid var(--theme-color-border-default, #DDD6CA);\n\t\t\tpadding: 0.5em 0.8em;\n\t\t\tcolor: var(--theme-color-text-primary, #423D37);\n\t\t}\n\t\t.pict-content table tr:nth-child(even) {\n\t\t\tbackground: var(--theme-color-background-secondary, #F7F5F0);\n\t\t}\n\t\t.pict-content img {\n\t\t\tmax-width: 100%;\n\t\t\theight: auto;\n\t\t}\n\t\t.pict-content pre.mermaid {\n\t\t\tbackground: var(--theme-color-background-panel, #fff);\n\t\t\tcolor: var(--theme-color-text-primary, #2A241E);\n\t\t\ttext-align: center;\n\t\t\tpadding: 1em;\n\t\t}\n\t\t.pict-content pre.mermaid text,\n\t\t.pict-content pre.mermaid .nodeLabel,\n\t\t.pict-content pre.mermaid .edgeLabel,\n\t\t.pict-content pre.mermaid .label,\n\t\t.pict-content pre.mermaid .cluster-label,\n\t\t.pict-content pre.mermaid span,\n\t\t.pict-content pre.mermaid foreignObject p,\n\t\t.pict-content pre.mermaid foreignObject div,\n\t\t.pict-content pre.mermaid foreignObject span {\n\t\t\tcolor: var(--theme-color-text-primary, #2A241E) !important;\n\t\t\tfill: var(--theme-color-text-primary, #2A241E) !important;\n\t\t}\n\t\t.pict-content pre.mermaid .edgePath .path {\n\t\t\tstroke: var(--theme-color-text-secondary, #5E5549) !important;\n\t\t}\n\t\t.pict-content pre.mermaid .arrowheadPath {\n\t\t\tfill: var(--theme-color-text-secondary, #5E5549) !important;\n\t\t}\n\t\t/* Dark-mode override for handcrafted mermaid diagrams that bake\n\t\t   per-node inline fill colors via 'style X fill:#...' directives\n\t\t   (common in architecture / module docs, where pastel layer\n\t\t   colors mark visual hierarchy). Mermaid renders those as inline\n\t\t   style=\"fill:#...\" SVG attributes \u2014 highest specificity, so\n\t\t   neither themeVariables nor unflagged CSS can reach them.\n\t\t   In light mode the Material pastels read fine; in dark mode the\n\t\t   same light fills become a high-contrast island on the dark\n\t\t   page with unreadable text. Force the fills back to a theme\n\t\t   background so dark-mode reads; light mode is intentionally\n\t\t   unmodified so the per-layer hierarchy is preserved there. */\n\t\t.theme-dark .pict-content pre.mermaid .node rect,\n\t\t.theme-dark .pict-content pre.mermaid .node polygon,\n\t\t.theme-dark .pict-content pre.mermaid .node circle,\n\t\t.theme-dark .pict-content pre.mermaid .node ellipse,\n\t\t.theme-dark .pict-content pre.mermaid .node path,\n\t\t.theme-dark .pict-content pre.mermaid .cluster rect {\n\t\t\tfill:   var(--theme-color-background-tertiary, #2A241E) !important;\n\t\t\tstroke: var(--theme-color-border-default,      #5E5549) !important;\n\t\t}\n\t\t/* Mirror of the above for theme mode 'system' \u2014 when the user\n\t\t   hasn't explicitly picked light or dark, the theme provider\n\t\t   leaves <html> without .theme-light/.theme-dark and the CSS\n\t\t   variables follow prefers-color-scheme. The .theme-dark-prefixed\n\t\t   block above doesn't match in that case, so light pastels would\n\t\t   win again on dark OSes. Mirror the rule under the media query,\n\t\t   gated by :not(.theme-light) so an explicit light override on a\n\t\t   dark OS still wins. */\n\t\t@media (prefers-color-scheme: dark) {\n\t\t\thtml:not(.theme-light) .pict-content pre.mermaid .node rect,\n\t\t\thtml:not(.theme-light) .pict-content pre.mermaid .node polygon,\n\t\t\thtml:not(.theme-light) .pict-content pre.mermaid .node circle,\n\t\t\thtml:not(.theme-light) .pict-content pre.mermaid .node ellipse,\n\t\t\thtml:not(.theme-light) .pict-content pre.mermaid .node path,\n\t\t\thtml:not(.theme-light) .pict-content pre.mermaid .cluster rect {\n\t\t\t\tfill:   var(--theme-color-background-tertiary, #2A241E) !important;\n\t\t\t\tstroke: var(--theme-color-border-default,      #5E5549) !important;\n\t\t\t}\n\t\t}\n\t\t/* Excalidraw fence placeholders + rendered SVGs */\n\t\t.pict-content .pict-excalidraw-fence {\n\t\t\tdisplay: block;\n\t\t\tbackground: var(--theme-color-background-panel, #fff);\n\t\t\tborder: 1px solid var(--theme-color-border-default, #DDD6CA);\n\t\t\tborder-radius: 4px;\n\t\t\tpadding: 1em;\n\t\t\tmargin: 1em 0;\n\t\t\ttext-align: center;\n\t\t}\n\t\t.pict-content .pict-excalidraw-fence svg {\n\t\t\tmax-width: 100%;\n\t\t\theight: auto;\n\t\t}\n\t\t.pict-content .pict-excalidraw-fence-loading {\n\t\t\tcolor: var(--theme-color-text-secondary, #5E5549);\n\t\t\tfont-style: italic;\n\t\t\tfont-size: 0.9em;\n\t\t\tpadding: 1em;\n\t\t}\n\t\t.pict-content .pict-excalidraw-fence-error {\n\t\t\tborder-color: var(--theme-color-status-error, #D9534F);\n\t\t\tbackground: var(--theme-color-background-secondary, #FFF5F5);\n\t\t}\n\t\t.pict-content .pict-excalidraw-fence-error-message {\n\t\t\tcolor: var(--theme-color-status-error, #D9534F);\n\t\t\tfont-family: var(--theme-typography-family-mono, monospace);\n\t\t\tfont-size: 0.85em;\n\t\t\ttext-align: left;\n\t\t}\n\t\t.pict-content .pict-content-katex-display {\n\t\t\ttext-align: center;\n\t\t\tmargin: 1em 0;\n\t\t\tpadding: 0.5em;\n\t\t\toverflow-x: auto;\n\t\t}\n\t\t.pict-content .pict-content-katex-inline {\n\t\t\tdisplay: inline;\n\t\t}\n\n\t\t/* Fullscreen viewer for images and mermaid diagrams (click-to-zoom) */\n\t\t.pict-content [data-fullscreen-source] {\n\t\t\tcursor: zoom-in;\n\t\t\toutline: 1px solid transparent;\n\t\t\toutline-offset: 3px;\n\t\t\tborder-radius: 4px;\n\t\t\ttransition: outline-color 0.15s ease;\n\t\t}\n\t\t.pict-content [data-fullscreen-source]:hover {\n\t\t\toutline-color: var(--theme-color-brand-primary, #2E7D74);\n\t\t}\n\t\t/* Code block container with hover-revealed action buttons */\n\t\t.pict-content-code-container {\n\t\t\tposition: relative;\n\t\t\tdisplay: flex;\n\t\t\talign-items: flex-start;\n\t\t\tgap: 8px;\n\t\t\tmargin: 1em 0;\n\t\t}\n\t\t.pict-content-code-container > .pict-content-code-wrap {\n\t\t\tmargin: 0;\n\t\t\tflex: 1 1 auto;\n\t\t\tmin-width: 0;\n\t\t}\n\t\t.pict-content-code-actions {\n\t\t\tposition: sticky;\n\t\t\ttop: 64px;\n\t\t\talign-self: flex-start;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: 6px;\n\t\t\tflex: 0 0 auto;\n\t\t\tpadding-top: 6px;\n\t\t\topacity: 0;\n\t\t\ttransform: translateX(-4px);\n\t\t\ttransition: opacity 0.15s ease, transform 0.15s ease;\n\t\t\tpointer-events: none;\n\t\t}\n\t\t.pict-content-code-container:hover .pict-content-code-actions,\n\t\t.pict-content-code-container:focus-within .pict-content-code-actions {\n\t\t\topacity: 1;\n\t\t\ttransform: translateX(0);\n\t\t\tpointer-events: auto;\n\t\t}\n\t\t.pict-content-code-action-btn {\n\t\t\tdisplay: inline-flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\twidth: 28px;\n\t\t\theight: 28px;\n\t\t\tpadding: 0;\n\t\t\tbackground: var(--theme-color-background-panel, #FFFFFF);\n\t\t\tcolor: var(--theme-color-text-muted, #5E5549);\n\t\t\tborder: 1px solid var(--theme-color-border-default, #DDD6CA);\n\t\t\tborder-radius: 6px;\n\t\t\tcursor: pointer;\n\t\t\tbox-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n\t\t\ttransition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n\t\t}\n\t\t.pict-content-code-action-btn svg {\n\t\t\tdisplay: block;\n\t\t\twidth: 14px;\n\t\t\theight: 14px;\n\t\t\tstroke: currentColor;\n\t\t\tfill: none;\n\t\t\tstroke-width: 1.6;\n\t\t\tstroke-linecap: round;\n\t\t\tstroke-linejoin: round;\n\t\t}\n\t\t.pict-content-code-action-btn:hover {\n\t\t\tbackground: var(--theme-color-brand-primary, #2E7D74);\n\t\t\tcolor: var(--theme-color-text-on-brand, #FFFFFF);\n\t\t\tborder-color: var(--theme-color-brand-primary, #2E7D74);\n\t\t\tbox-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n\t\t}\n\t\t.pict-content-code-action-btn:focus-visible {\n\t\t\toutline: 2px solid var(--theme-color-brand-primary, #2E7D74);\n\t\t\toutline-offset: 2px;\n\t\t}\n\t\t.pict-content-code-action-btn.is-copied {\n\t\t\tbackground: var(--theme-color-brand-primary, #2E7D74);\n\t\t\tcolor: var(--theme-color-text-on-brand, #FFFFFF);\n\t\t\tborder-color: var(--theme-color-brand-primary, #2E7D74);\n\t\t}\n\t\t.pict-content-code-action-btn.is-copy-failed {\n\t\t\tbackground: var(--theme-color-status-error, #B23A3A);\n\t\t\tcolor: var(--theme-color-text-on-brand, #FFFFFF);\n\t\t\tborder-color: var(--theme-color-status-error, #B23A3A);\n\t\t}\n\t\t.pict-fullscreen-overlay {\n\t\t\tposition: fixed;\n\t\t\tinset: 0;\n\t\t\tz-index: 9999;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tbackground: rgba(0, 0, 0, 0.62);\n\t\t\tbackdrop-filter: blur(6px);\n\t\t\t-webkit-backdrop-filter: blur(6px);\n\t\t\tcolor: var(--theme-color-text-primary, #2A241E);\n\t\t}\n\t\t.pict-fullscreen-overlay[hidden] {\n\t\t\tdisplay: none;\n\t\t}\n\t\t.pict-fullscreen-titlebar {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: space-between;\n\t\t\tgap: 1em;\n\t\t\theight: 48px;\n\t\t\tpadding: 0 1em;\n\t\t\tbackground: var(--theme-color-background-panel, #FFFFFF);\n\t\t\tcolor: var(--theme-color-text-primary, #1A1612);\n\t\t\tborder-bottom: 1px solid var(--theme-color-border-default, #DDD6CA);\n\t\t\tbox-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n\t\t\tflex: 0 0 auto;\n\t\t}\n\t\t.pict-fullscreen-title {\n\t\t\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n\t\t\tfont-size: 0.95em;\n\t\t\tfont-weight: 600;\n\t\t\tletter-spacing: 0.01em;\n\t\t\twhite-space: nowrap;\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t\tcolor: var(--theme-color-text-primary, #1A1612);\n\t\t}\n\t\t.pict-fullscreen-controls {\n\t\t\tdisplay: inline-flex;\n\t\t\talign-items: center;\n\t\t\tgap: 4px;\n\t\t}\n\t\t.pict-fullscreen-btn {\n\t\t\tdisplay: inline-flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\twidth: 32px;\n\t\t\theight: 32px;\n\t\t\tpadding: 0;\n\t\t\tbackground: transparent;\n\t\t\tborder: 1px solid transparent;\n\t\t\tborder-radius: 6px;\n\t\t\tcolor: var(--theme-color-text-muted, #5E5549);\n\t\t\tcursor: pointer;\n\t\t\ttransition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;\n\t\t}\n\t\t.pict-fullscreen-btn svg {\n\t\t\tdisplay: block;\n\t\t\twidth: 16px;\n\t\t\theight: 16px;\n\t\t\tstroke: currentColor;\n\t\t\tfill: none;\n\t\t\tstroke-width: 1.75;\n\t\t\tstroke-linecap: round;\n\t\t\tstroke-linejoin: round;\n\t\t}\n\t\t.pict-fullscreen-btn:hover {\n\t\t\tbackground: var(--theme-color-border-light, #EAE3D8);\n\t\t\tcolor: var(--theme-color-text-primary, #1A1612);\n\t\t}\n\t\t.pict-fullscreen-btn:focus-visible {\n\t\t\toutline: 2px solid var(--theme-color-brand-primary, #2E7D74);\n\t\t\toutline-offset: 2px;\n\t\t}\n\t\t.pict-fullscreen-close:hover {\n\t\t\tbackground: var(--theme-color-brand-primary, #2E7D74);\n\t\t\tcolor: var(--theme-color-text-on-brand, #FFFFFF);\n\t\t}\n\t\t.pict-fullscreen-stage {\n\t\t\tflex: 1 1 auto;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\toverflow: hidden;\n\t\t\tpadding: 1.5em;\n\t\t\tcursor: zoom-in;\n\t\t\ttouch-action: none;\n\t\t}\n\t\t.pict-fullscreen-stage.is-zoomed {\n\t\t\tcursor: grab;\n\t\t}\n\t\t.pict-fullscreen-stage.is-panning {\n\t\t\tcursor: grabbing;\n\t\t}\n\t\t.pict-fullscreen-content {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tmax-width: 100%;\n\t\t\tmax-height: 100%;\n\t\t\ttransform-origin: center center;\n\t\t\ttransition: transform 0.05s linear;\n\t\t\twill-change: transform;\n\t\t}\n\t\t.pict-fullscreen-content > * {\n\t\t\tbox-shadow: 0 12px 48px rgba(0, 0, 0, 0.45);\n\t\t}\n\t\t.pict-fullscreen-content .pict-fullscreen-img {\n\t\t\tmax-width: 90vw;\n\t\t\tmax-height: calc(100vh - 96px);\n\t\t\twidth: auto;\n\t\t\theight: auto;\n\t\t\tobject-fit: contain;\n\t\t\tbackground: var(--theme-color-background-panel, #FFFFFF);\n\t\t\tpadding: 12px;\n\t\t\tborder-radius: 6px;\n\t\t}\n\t\t.pict-fullscreen-content .pict-fullscreen-mermaid-svg {\n\t\t\twidth: min(90vw, 1400px);\n\t\t\theight: auto;\n\t\t\tmax-height: calc(100vh - 96px);\n\t\t\tbackground: var(--theme-color-background-panel, #FFFFFF);\n\t\t\tpadding: 16px;\n\t\t\tborder-radius: 6px;\n\t\t}\n\t\t/* Bespoke inline-SVG diagrams (pict-renderer-graph / excalidraw).  Backdrop\n\t\t   uses the diagram's own --diagram-paper so the zoomed copy keeps the same\n\t\t   theme as the inline one (the host defines --diagram-* on the overlay). */\n\t\t.pict-fullscreen-content .pict-fullscreen-diagram-svg {\n\t\t\twidth: min(90vw, 1400px);\n\t\t\theight: auto;\n\t\t\tmax-height: calc(100vh - 96px);\n\t\t\tbackground: var(--diagram-paper, var(--theme-color-background-panel, #FFFFFF));\n\t\t\tpadding: 16px;\n\t\t\tborder-radius: 6px;\n\t\t}\n\t\t/* Same dark-mode fill/stroke override as for inline diagrams, but\n\t\t   scoped to the fullscreen-overlay clone \u2014 which lives under\n\t\t   <body>, NOT inside .pict-content, so the pre.mermaid-scoped\n\t\t   rules above don't reach it. */\n\t\t.theme-dark .pict-fullscreen-content .pict-fullscreen-mermaid-svg .node rect,\n\t\t.theme-dark .pict-fullscreen-content .pict-fullscreen-mermaid-svg .node polygon,\n\t\t.theme-dark .pict-fullscreen-content .pict-fullscreen-mermaid-svg .node circle,\n\t\t.theme-dark .pict-fullscreen-content .pict-fullscreen-mermaid-svg .node ellipse,\n\t\t.theme-dark .pict-fullscreen-content .pict-fullscreen-mermaid-svg .node path,\n\t\t.theme-dark .pict-fullscreen-content .pict-fullscreen-mermaid-svg .cluster rect {\n\t\t\tfill:   var(--theme-color-background-tertiary, #2A241E) !important;\n\t\t\tstroke: var(--theme-color-border-default,      #5E5549) !important;\n\t\t}\n\t\t@media (prefers-color-scheme: dark) {\n\t\t\thtml:not(.theme-light) .pict-fullscreen-content .pict-fullscreen-mermaid-svg .node rect,\n\t\t\thtml:not(.theme-light) .pict-fullscreen-content .pict-fullscreen-mermaid-svg .node polygon,\n\t\t\thtml:not(.theme-light) .pict-fullscreen-content .pict-fullscreen-mermaid-svg .node circle,\n\t\t\thtml:not(.theme-light) .pict-fullscreen-content .pict-fullscreen-mermaid-svg .node ellipse,\n\t\t\thtml:not(.theme-light) .pict-fullscreen-content .pict-fullscreen-mermaid-svg .node path,\n\t\t\thtml:not(.theme-light) .pict-fullscreen-content .pict-fullscreen-mermaid-svg .cluster rect {\n\t\t\t\tfill:   var(--theme-color-background-tertiary, #2A241E) !important;\n\t\t\t\tstroke: var(--theme-color-border-default,      #5E5549) !important;\n\t\t\t}\n\t\t}\n\t\t/* ---- video (the video fence, and video files written with the image form) ---- */\n\t\t.pict-content-video { margin: 18px 0; }\n\t\t.pict-content-video figcaption {\n\t\t\tfont-size: 13px;\n\t\t\tcolor: var(--theme-color-text-secondary, #6B6255);\n\t\t\tmargin-top: 6px;\n\t\t}\n\t\t.pict-content-video-file video,\n\t\tvideo.pict-content-video-inline {\n\t\t\tdisplay: block;\n\t\t\twidth: 100%;\n\t\t\tmax-width: 100%;\n\t\t\tborder-radius: 8px;\n\t\t\tbackground: #000;\n\t\t}\n\t\t/* The click-to-load card. It carries the whole clickable area, so a reader is never hunting for a\n\t\t   small play button, and it looks like a player rather than a link so nobody wonders what it is. */\n\t\t.pict-content-video-card {\n\t\t\tposition: relative;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tgap: 14px;\n\t\t\tpadding: 16px 18px;\n\t\t\tmin-height: 96px;\n\t\t\ttext-decoration: none;\n\t\t\tborder-radius: 8px;\n\t\t\toverflow: hidden;\n\t\t\tbackground: var(--theme-color-background-tertiary, #211C17);\n\t\t\tborder: 1px solid var(--theme-color-border-default, #5E5549);\n\t\t\tcolor: var(--theme-color-text-primary, #F0EAE0);\n\t\t}\n\t\t.pict-content-video-card:hover { border-color: var(--theme-color-brand-primary, #C89B3C); }\n\t\t.pict-content-video-poster {\n\t\t\tposition: absolute;\n\t\t\tinset: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tobject-fit: cover;\n\t\t\topacity: 0.45;\n\t\t}\n\t\t.pict-content-video-play { position: relative; flex: 0 0 auto; line-height: 0; }\n\t\t.pict-content-video-play-bg { fill: #212121; opacity: 0.85; }\n\t\t.pict-content-video-card:hover .pict-content-video-play-bg { fill: #cc0000; opacity: 1; }\n\t\t.pict-content-video-label { position: relative; display: flex; flex-direction: column; gap: 3px; min-width: 0; }\n\t\t.pict-content-video-title {\n\t\t\tfont-weight: 600;\n\t\t\tfont-size: 15px;\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t\twhite-space: nowrap;\n\t\t}\n\t\t.pict-content-video-source { font-size: 12px; color: var(--theme-color-text-secondary, #A69B8B); }\n\t\t.pict-content-video-frame {\n\t\t\tdisplay: block;\n\t\t\twidth: 100%;\n\t\t\taspect-ratio: 16 / 9;\n\t\t\tborder: 0;\n\t\t\tborder-radius: 8px;\n\t\t\tbackground: #000;\n\t\t}\n\t\t.pict-content-video-empty figcaption {\n\t\t\tpadding: 12px 14px;\n\t\t\tborder: 1px dashed var(--theme-color-border-default, #5E5549);\n\t\t\tborder-radius: 8px;\n\t\t\tmargin-top: 0;\n\t\t}\n\t\t.pict-fullscreen-content .pict-fullscreen-codewrap {\n\t\t\tmax-width: 90vw;\n\t\t\tmax-height: calc(100vh - 96px);\n\t\t\tmargin: 0;\n\t\t\toverflow: auto;\n\t\t\tbox-shadow: 0 12px 48px rgba(0, 0, 0, 0.45);\n\t\t}\n\t";
    }, {}],
    17: [function (require, module, exports) {
      // The container for all the Pict-Section-Content related code.

      // The main content view class
      module.exports = require('./views/Pict-View-Content.js');

      // The content provider (markdown parsing, HTML escaping)
      module.exports.PictContentProvider = require('./providers/Pict-Provider-Content.js');

      // A thin demo view that auto-registers the provider, reads markdown
      // from an AppData address, and pushes parsed HTML through the base
      // view's displayContent pipeline.  Used by the docuserve playground;
      // host applications can pick it up too if they just want "render this
      // markdown blob" without writing the parse-and-display glue.
      module.exports.PictContentDemoView = require('./views/PictView-Content-Demo.js');
    }, {
      "./providers/Pict-Provider-Content.js": 18,
      "./views/Pict-View-Content.js": 19,
      "./views/PictView-Content-Demo.js": 20
    }],
    18: [function (require, module, exports) {
      var libPictProvider = require('pict-provider');
      var libCreateHighlighter = require('pict-section-code').createHighlighter;
      var libContentCSS = require('../Pict-Content-CSS.js');

      /**
       * Content Provider for Pict Section Content
       *
       * A general-purpose markdown-to-HTML parser with support for:
       * - Headings, paragraphs, lists, blockquotes, horizontal rules
       * - Fenced code blocks with language tags (nested fence support)
       * - Syntax highlighting and line numbers for code blocks (via pict-section-code)
       * - Tables (GFM pipe syntax)
       * - Mermaid diagram blocks
       * - KaTeX math (inline and display)
       * - Bold, italic, inline code, links, images
       *
       * Link resolution is customizable via an optional callback.
       */
      var PictContentProvider = /*#__PURE__*/function (_libPictProvider) {
        function PictContentProvider(pFable, pOptions, pServiceHash) {
          var _this17;
          _classCallCheck(this, PictContentProvider);
          _this17 = _callSuper(this, PictContentProvider, [pFable, pOptions, pServiceHash]);

          // Register the content CSS at the PROVIDER layer. parseMarkdown emits the
          // .pict-content-code-wrap markup (a line-number gutter + a <pre>), and that CSS makes the
          // wrap a flex row so the numbers sit to the LEFT of the code. Consumers like the
          // inline-documentation reader use this provider WITHOUT instantiating the view, so the
          // view's CSS never shipped and the numbers stacked ABOVE the code -- the recurring bug.
          // Registering here fixes it for every consumer; the view uses the same hash, so it still
          // injects only once. (pict CLAUDE.md: providers must addCSS() themselves.)
          if (_this17.pict && _this17.pict.CSSMap && typeof _this17.pict.CSSMap.addCSS === 'function') {
            _this17.pict.CSSMap.addCSS('Pict-Section-Content-CSS', libContentCSS, 500);
          }
          return _this17;
        }

        /**
         * Highlight a code string using pict-section-code's syntax highlighter.
         * Uses a mock element to interface with the highlighter's DOM-based API.
         *
         * @param {string} pCode - The raw code string
         * @param {string} pLanguage - The language identifier (e.g. "javascript", "html")
         * @returns {string} The syntax-highlighted HTML
         */
        _inherits(PictContentProvider, _libPictProvider);
        return _createClass(PictContentProvider, [{
          key: "highlightCode",
          value: function highlightCode(pCode, pLanguage) {
            if (!pCode) {
              return '';
            }
            var tmpHighlighter = libCreateHighlighter(pLanguage);
            // Create a mock element to interface with the highlighter
            var tmpMockElement = {
              textContent: pCode,
              innerHTML: ''
            };
            tmpHighlighter(tmpMockElement);
            return tmpMockElement.innerHTML;
          }

          /**
           * Generate line number HTML for a code block.
           *
           * @param {string} pCode - The raw code string
           * @returns {string} HTML string with line number spans
           */
        }, {
          key: "generateLineNumbers",
          value: function generateLineNumbers(pCode) {
            if (!pCode) {
              return '<span>1</span>';
            }
            var tmpLineCount = pCode.split('\n').length;
            var tmpHTML = '';
            for (var i = 1; i <= tmpLineCount; i++) {
              tmpHTML += '<span>' + i + '</span>';
            }
            return tmpHTML;
          }

          /**
           * Parse a markdown string into HTML.
           *
           * @param {string} pMarkdown - The raw markdown text
           * @param {Function} [pLinkResolver] - Optional callback for link resolution: (pHref, pLinkText) => { href, target, rel } or null
           * @param {Function} [pImageResolver] - Optional callback for image URL resolution: (pSrc, pAlt) => resolvedSrc or null
           * @param {Function} [pVocabularyResolver] - Optional callback: (pWord) => { slug, title, short } or null. Passed through to parseInline() for vocabulary term auto-linking.
           * @returns {string} The parsed HTML
           */
        }, {
          key: "parseMarkdown",
          value: function parseMarkdown(pMarkdown, pLinkResolver, pImageResolver, pVocabularyResolver) {
            var _this18 = this;
            if (!pMarkdown) {
              return '';
            }
            var tmpLines = pMarkdown.split('\n');
            var tmpHTML = [];
            var tmpInCodeBlock = false;
            var tmpCodeFenceLength = 0;
            var tmpCodeLang = '';
            var tmpCodeLines = [];
            var tmpInList = false;
            var tmpListType = '';
            var tmpInBlockquote = false;
            var tmpBlockquoteLines = [];
            var tmpInMathBlock = false;
            var tmpMathLines = [];
            var tmpParagraphLines = [];

            // Helper to flush accumulated paragraph lines into a single <p> tag
            var fFlushParagraph = function fFlushParagraph() {
              if (tmpParagraphLines.length > 0) {
                tmpHTML.push('<p>' + tmpParagraphLines.map(function (pLine) {
                  return _this18.parseInline(pLine, pLinkResolver, pImageResolver, pVocabularyResolver);
                }).join(' ') + '</p>');
                tmpParagraphLines = [];
              }
            };
            for (var i = 0; i < tmpLines.length; i++) {
              var tmpLine = tmpLines[i];

              // Display math blocks ($$...$$) — skip if inside a code block
              if (!tmpInCodeBlock && tmpLine.trim().match(/^\$\$/)) {
                if (tmpInMathBlock) {
                  // End math block
                  tmpHTML.push('<div class="pict-content-katex-display">' + tmpMathLines.join('\n') + '</div>');
                  tmpInMathBlock = false;
                  tmpMathLines = [];
                } else {
                  // Flush any pending paragraph
                  fFlushParagraph();
                  // Close any open list or blockquote
                  if (tmpInList) {
                    tmpHTML.push(tmpListType === 'ul' ? '</ul>' : '</ol>');
                    tmpInList = false;
                  }
                  if (tmpInBlockquote) {
                    tmpHTML.push('<blockquote>' + this.parseMarkdown(tmpBlockquoteLines.join('\n'), pLinkResolver, pImageResolver, pVocabularyResolver) + '</blockquote>');
                    tmpInBlockquote = false;
                    tmpBlockquoteLines = [];
                  }
                  tmpInMathBlock = true;
                }
                continue;
              }
              if (tmpInMathBlock) {
                tmpMathLines.push(tmpLine);
                continue;
              }

              // Code blocks (fenced) — track fence length so ````x```` nests around ```y```
              var tmpFenceMatch = tmpLine.match(/^(`{3,})/);
              if (tmpFenceMatch) {
                var tmpFenceLen = tmpFenceMatch[1].length;
                if (tmpInCodeBlock) {
                  // Only close if the closing fence is at least as long as the opening
                  if (tmpFenceLen >= tmpCodeFenceLength && tmpLine.trim() === tmpFenceMatch[1]) {
                    // End code block
                    if (tmpCodeLang === 'mermaid') {
                      // Mermaid diagrams: output raw content for client-side rendering
                      tmpHTML.push('<pre class="mermaid">' + tmpCodeLines.join('\n') + '</pre>');
                    } else if (tmpCodeLang === 'video') {
                      // Video: one fence, two outcomes, decided by where the video lives.
                      // Self-hosted (a relative URL, or a file with a video extension) plays inline;
                      // a third-party watch page becomes a click-to-load card. See videoEmbedHTML.
                      tmpHTML.push(this.videoEmbedHTML(tmpCodeLines.join('\n')));
                    } else if (tmpCodeLang === 'excalidraw') {
                      // Excalidraw scenes: emit a placeholder div with the
                      // scene JSON URI-component encoded into a data
                      // attribute.  Pict-View-Content's
                      // renderExcalidrawDiagrams() swaps these for rendered
                      // SVGs once the wrapper bundle is ready.  We don't
                      // validate the JSON here — invalid fences just stay
                      // as the loading placeholder until the runtime
                      // reports the error.
                      var tmpRawScene = tmpCodeLines.join('\n');
                      var tmpEncoded = void 0;
                      try {
                        tmpEncoded = encodeURIComponent(tmpRawScene);
                      } catch (pErr) {
                        tmpEncoded = '';
                      }
                      tmpHTML.push('<div class="pict-excalidraw-fence" data-scene="' + tmpEncoded + '">' + '<div class="pict-excalidraw-fence-loading">Rendering Excalidraw diagram…</div>' + '</div>');
                    } else {
                      var tmpCodeText = tmpCodeLines.join('\n');
                      var tmpHighlightedCode = this.highlightCode(tmpCodeText, tmpCodeLang);
                      var tmpLineNumbersHTML = this.generateLineNumbers(tmpCodeText);
                      tmpHTML.push('<div class="pict-content-code-wrap"><div class="pict-content-code-line-numbers">' + tmpLineNumbersHTML + '</div><pre><code class="language-' + this.escapeHTML(tmpCodeLang) + '">' + tmpHighlightedCode + '</code></pre></div>');
                    }
                    tmpInCodeBlock = false;
                    tmpCodeFenceLength = 0;
                    tmpCodeLang = '';
                    tmpCodeLines = [];
                    continue;
                  } else {
                    // Inner fence with fewer backticks — treat as content
                    tmpCodeLines.push(tmpLine);
                    continue;
                  }
                } else {
                  // Flush any pending paragraph
                  fFlushParagraph();
                  // Close any open list or blockquote
                  if (tmpInList) {
                    tmpHTML.push(tmpListType === 'ul' ? '</ul>' : '</ol>');
                    tmpInList = false;
                  }
                  if (tmpInBlockquote) {
                    tmpHTML.push('<blockquote>' + this.parseMarkdown(tmpBlockquoteLines.join('\n'), pLinkResolver, pImageResolver, pVocabularyResolver) + '</blockquote>');
                    tmpInBlockquote = false;
                    tmpBlockquoteLines = [];
                  }
                  // Start code block — record fence length
                  tmpCodeFenceLength = tmpFenceLen;
                  tmpCodeLang = tmpLine.replace(/^`{3,}/, '').trim();
                  tmpInCodeBlock = true;
                  continue;
                }
              }
              if (tmpInCodeBlock) {
                tmpCodeLines.push(tmpLine);
                continue;
              }

              // Blockquotes
              if (tmpLine.match(/^>\s?/)) {
                if (!tmpInBlockquote) {
                  // Flush any pending paragraph
                  fFlushParagraph();
                  // Close any open list
                  if (tmpInList) {
                    tmpHTML.push(tmpListType === 'ul' ? '</ul>' : '</ol>');
                    tmpInList = false;
                  }
                  tmpInBlockquote = true;
                  tmpBlockquoteLines = [];
                }
                tmpBlockquoteLines.push(tmpLine.replace(/^>\s?/, ''));
                continue;
              } else if (tmpInBlockquote) {
                tmpHTML.push('<blockquote>' + this.parseMarkdown(tmpBlockquoteLines.join('\n'), pLinkResolver, pImageResolver, pVocabularyResolver) + '</blockquote>');
                tmpInBlockquote = false;
                tmpBlockquoteLines = [];
              }

              // Horizontal rule
              if (tmpLine.match(/^(-{3,}|\*{3,}|_{3,})\s*$/)) {
                fFlushParagraph();
                if (tmpInList) {
                  tmpHTML.push(tmpListType === 'ul' ? '</ul>' : '</ol>');
                  tmpInList = false;
                }
                tmpHTML.push('<hr>');
                continue;
              }

              // Headings
              var tmpHeadingMatch = tmpLine.match(/^(#{1,6})\s+(.+)/);
              if (tmpHeadingMatch) {
                fFlushParagraph();
                if (tmpInList) {
                  tmpHTML.push(tmpListType === 'ul' ? '</ul>' : '</ol>');
                  tmpInList = false;
                }
                var tmpLevel = tmpHeadingMatch[1].length;
                var tmpText = this.parseInline(tmpHeadingMatch[2], pLinkResolver, pImageResolver, pVocabularyResolver);
                var tmpID = tmpHeadingMatch[2].toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                tmpHTML.push('<h' + tmpLevel + ' id="' + tmpID + '">' + tmpText + '</h' + tmpLevel + '>');
                continue;
              }

              // Unordered list items
              var tmpULMatch = tmpLine.match(/^(\s*)[-*+]\s+(.*)/);
              if (tmpULMatch) {
                fFlushParagraph();
                if (!tmpInList || tmpListType !== 'ul') {
                  if (tmpInList) {
                    tmpHTML.push(tmpListType === 'ul' ? '</ul>' : '</ol>');
                  }
                  tmpHTML.push('<ul>');
                  tmpInList = true;
                  tmpListType = 'ul';
                }
                tmpHTML.push('<li>' + this.parseInline(tmpULMatch[2], pLinkResolver, pImageResolver, pVocabularyResolver) + '</li>');
                continue;
              }

              // Ordered list items
              var tmpOLMatch = tmpLine.match(/^(\s*)\d+\.\s+(.*)/);
              if (tmpOLMatch) {
                fFlushParagraph();
                if (!tmpInList || tmpListType !== 'ol') {
                  if (tmpInList) {
                    tmpHTML.push(tmpListType === 'ul' ? '</ul>' : '</ol>');
                  }
                  tmpHTML.push('<ol>');
                  tmpInList = true;
                  tmpListType = 'ol';
                }
                tmpHTML.push('<li>' + this.parseInline(tmpOLMatch[2], pLinkResolver, pImageResolver, pVocabularyResolver) + '</li>');
                continue;
              }

              // Indented continuation line of a wrapped list item — fold its
              // content into the last <li> instead of closing the list. Closing
              // here would split a real <ol>/<ul>, and each fragment restarts
              // ordered numbering. A non-indented non-marker line still closes
              // the list (handled below); blank lines never reach this branch.
              if (tmpInList && tmpLine.match(/^\s+\S/) && tmpHTML.length > 0 && tmpHTML[tmpHTML.length - 1].endsWith('</li>')) {
                var tmpLastIndex = tmpHTML.length - 1;
                var tmpListItemBody = tmpHTML[tmpLastIndex].slice(0, -'</li>'.length);
                tmpHTML[tmpLastIndex] = tmpListItemBody + ' ' + this.parseInline(tmpLine.trim(), pLinkResolver, pImageResolver, pVocabularyResolver) + '</li>';
                continue;
              }

              // Close list if we've left list items
              if (tmpInList && tmpLine.trim() !== '') {
                tmpHTML.push(tmpListType === 'ul' ? '</ul>' : '</ol>');
                tmpInList = false;
              }

              // Empty line — flush any accumulated paragraph
              if (tmpLine.trim() === '') {
                fFlushParagraph();
                continue;
              }

              // Table detection
              if (tmpLine.match(/^\|/) && i + 1 < tmpLines.length && tmpLines[i + 1].match(/^\|[\s-:|]+\|/)) {
                fFlushParagraph();
                // Close any open list
                if (tmpInList) {
                  tmpHTML.push(tmpListType === 'ul' ? '</ul>' : '</ol>');
                  tmpInList = false;
                }
                var tmpTableHTML = '<table>';

                // Header row
                var tmpHeaders = tmpLine.split('|').filter(function (pCell) {
                  return pCell.trim() !== '';
                });
                tmpTableHTML += '<thead><tr>';
                for (var h = 0; h < tmpHeaders.length; h++) {
                  tmpTableHTML += '<th>' + this.parseInline(tmpHeaders[h].trim(), pLinkResolver, pImageResolver, pVocabularyResolver) + '</th>';
                }
                tmpTableHTML += '</tr></thead>';

                // Skip separator row
                i++;

                // Body rows
                tmpTableHTML += '<tbody>';
                while (i + 1 < tmpLines.length && tmpLines[i + 1].match(/^\|/)) {
                  i++;
                  var tmpCells = tmpLines[i].split('|').filter(function (pCell) {
                    return pCell.trim() !== '';
                  });
                  tmpTableHTML += '<tr>';
                  for (var c = 0; c < tmpCells.length; c++) {
                    tmpTableHTML += '<td>' + this.parseInline(tmpCells[c].trim(), pLinkResolver, pImageResolver, pVocabularyResolver) + '</td>';
                  }
                  tmpTableHTML += '</tr>';
                }
                tmpTableHTML += '</tbody></table>';
                tmpHTML.push(tmpTableHTML);
                continue;
              }

              // Accumulate paragraph lines — consecutive non-blank text lines
              // will be joined into a single <p> tag when flushed
              tmpParagraphLines.push(tmpLine);
            }

            // Flush any remaining accumulated paragraph
            fFlushParagraph();

            // Close any trailing open elements
            if (tmpInList) {
              tmpHTML.push(tmpListType === 'ul' ? '</ul>' : '</ol>');
            }
            if (tmpInBlockquote) {
              tmpHTML.push('<blockquote>' + this.parseMarkdown(tmpBlockquoteLines.join('\n'), pLinkResolver, pImageResolver, pVocabularyResolver) + '</blockquote>');
            }
            if (tmpInCodeBlock) {
              var _tmpCodeText = tmpCodeLines.join('\n');
              var _tmpHighlightedCode = this.highlightCode(_tmpCodeText, tmpCodeLang);
              var _tmpLineNumbersHTML = this.generateLineNumbers(_tmpCodeText);
              tmpHTML.push('<div class="pict-content-code-wrap"><div class="pict-content-code-line-numbers">' + _tmpLineNumbersHTML + '</div><pre><code>' + _tmpHighlightedCode + '</code></pre></div>');
            }
            return tmpHTML.join('\n');
          }

          /**
           * Parse inline markdown elements (bold, italic, code, links, images, KaTeX).
           *
           * @param {string} pText - The text to parse
           * @param {Function} [pLinkResolver] - Optional callback: (pHref, pLinkText) => { href, target, rel } or null
           * @param {Function} [pImageResolver] - Optional callback: (pSrc, pAlt) => resolvedSrc or null
           * @param {Function} [pVocabularyResolver] - Optional callback: (pWord) => { slug, title, short } or null. When provided, known vocabulary terms in the rendered text are wrapped in <span class="pict-vocab-term"> with data attributes carrying the popover content.
           * @returns {string} HTML with inline elements
           */
        }, {
          key: "parseInline",
          value: function parseInline(pText, pLinkResolver, pImageResolver, pVocabularyResolver) {
            var _this19 = this;
            if (!pText) {
              return '';
            }
            var tmpResult = pText;

            // Extract inline code spans into placeholders so bold/italic regexes don't mangle their contents
            var tmpCodeSpans = [];
            tmpResult = tmpResult.replace(/`([^`]+)`/g, function (pMatch, pCode) {
              var tmpIndex = tmpCodeSpans.length;
              tmpCodeSpans.push('<code>' + pCode + '</code>');
              return '\x00CODEINLINE' + tmpIndex + '\x00';
            });

            // Inline LaTeX equations ($...$) — must be processed before other inline patterns
            // Match single $ delimiters that aren't adjacent to spaces (to avoid false positives with currency)
            tmpResult = tmpResult.replace(/\$([^\$\s][^\$]*?[^\$\s])\$/g, '<span class="pict-content-katex-inline">$1</span>');
            // Also match single-character inline math like $x$
            tmpResult = tmpResult.replace(/\$([^\$\s])\$/g, '<span class="pict-content-katex-inline">$1</span>');

            // Images
            tmpResult = tmpResult.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, function (pMatch, pAlt, pSrc) {
              var tmpSrc = pSrc;
              if (typeof pImageResolver === 'function') {
                var tmpResolved = pImageResolver(pSrc, pAlt);
                if (tmpResolved) {
                  tmpSrc = tmpResolved;
                }
              }
              // A video file written with the image form. Authors reach for `![clip](demo.mp4)` because it is
              // the syntax their fingers know, and an <img> pointed at an mp4 is a broken image icon -- so it
              // renders a player instead. Only a real video EXTENSION qualifies; see hasVideoExtension.
              if (_this19.hasVideoExtension(tmpSrc) && _this19.isSafeMediaURL(tmpSrc)) {
                return '<video class="pict-content-video-inline" controls preload="metadata" src="' + _this19.escapeHTML(tmpSrc) + '">' + '<a href="' + _this19.escapeHTML(tmpSrc) + '">' + _this19.escapeHTML(pAlt || 'Download the video') + '</a></video>';
              }
              return '<img src="' + tmpSrc + '" alt="' + pAlt + '">';
            });

            // Links
            tmpResult = tmpResult.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (pMatch, pLinkText, pHref) {
              if (typeof pLinkResolver === 'function') {
                var tmpResolved = pLinkResolver(pHref, pLinkText);
                if (tmpResolved) {
                  var tmpTarget = tmpResolved.target ? ' target="' + tmpResolved.target + '"' : '';
                  var tmpRel = tmpResolved.rel ? ' rel="' + tmpResolved.rel + '"' : '';
                  return '<a href="' + tmpResolved.href + '"' + tmpTarget + tmpRel + '>' + pLinkText + '</a>';
                }
              }
              // Default behavior: external links open in new tab
              if (pHref.match(/^https?:\/\//)) {
                return '<a href="' + pHref + '" target="_blank" rel="noopener">' + pLinkText + '</a>';
              }
              return '<a href="' + pHref + '">' + pLinkText + '</a>';
            });

            // Bold
            tmpResult = tmpResult.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
            // Underscore strong only at word boundaries (CommonMark intraword rule) so
            // identifiers / URLs like a__b or foo__bar aren't treated as emphasis.
            tmpResult = tmpResult.replace(/(^|[^A-Za-z0-9_])__([^_]+?)__(?![A-Za-z0-9_])/g, '$1<strong>$2</strong>');

            // Italic
            tmpResult = tmpResult.replace(/\*([^*]+)\*/g, '<em>$1</em>');
            // Underscore italic only at word boundaries — a single underscore inside a
            // word or a URL (e.g. hello_world in a link href) must NOT become <em>.
            tmpResult = tmpResult.replace(/(^|[^A-Za-z0-9_])_([^_]+?)_(?![A-Za-z0-9_])/g, '$1<em>$2</em>');

            // Restore inline code spans from placeholders
            tmpResult = tmpResult.replace(/\x00CODEINLINE(\d+)\x00/g, function (pMatch, pIndex) {
              return tmpCodeSpans[parseInt(pIndex)];
            });

            // Vocabulary term auto-linking: scan the rendered text for
            // known vocabulary terms and wrap each first occurrence in a
            // span with data attributes for the popover system. Skips
            // content inside <code>, <a>, <pre>, and <strong> tags to
            // avoid mangling links, code, or already-emphasized text.
            if (typeof pVocabularyResolver === 'function') {
              tmpResult = this._applyVocabularyLinks(tmpResult, pVocabularyResolver);
            }
            return tmpResult;
          }

          /**
           * Scan HTML for vocabulary terms and wrap the first occurrence
           * of each in a <span class="pict-vocab-term"> element. The
           * resolver callback is called for each candidate word/phrase
           * and returns { slug, title, short } if it's a known term.
           *
           * Skips content inside HTML tags to avoid breaking links,
           * code spans, and other markup.
           *
           * @param {string} pHTML
           * @param {Function} pResolver - (word) => {slug, title, short} | null
           * @returns {string}
           */
        }, {
          key: "_applyVocabularyLinks",
          value: function _applyVocabularyLinks(pHTML, pResolver) {
            if (!pHTML || typeof pResolver !== 'function') {
              return pHTML;
            }

            // Track which terms we've already linked to avoid duplicate
            // links for the same term appearing multiple times.
            var tmpLinked = {};

            // Split the HTML into segments: tags vs text nodes. We only
            // scan text nodes for vocabulary terms; tags pass through.
            // This regex captures HTML tags as separators.
            var tmpParts = pHTML.split(/(<[^>]+>)/g);

            // Track whether we're inside a tag that should be skipped
            var tmpSkipDepth = 0;
            var tmpSkipTags = ['code', 'a', 'pre', 'span'];
            for (var i = 0; i < tmpParts.length; i++) {
              var tmpPart = tmpParts[i];

              // Check if this is an HTML tag
              if (tmpPart.charAt(0) === '<') {
                // Opening tag?
                var tmpOpenMatch = tmpPart.match(/^<(\w+)/);
                if (tmpOpenMatch && tmpSkipTags.indexOf(tmpOpenMatch[1].toLowerCase()) !== -1) {
                  tmpSkipDepth++;
                }
                // Closing tag?
                var tmpCloseMatch = tmpPart.match(/^<\/(\w+)/);
                if (tmpCloseMatch && tmpSkipTags.indexOf(tmpCloseMatch[1].toLowerCase()) !== -1) {
                  tmpSkipDepth = Math.max(0, tmpSkipDepth - 1);
                }
                continue; // Don't modify tags
              }

              // Skip text inside protected elements
              if (tmpSkipDepth > 0) continue;

              // Scan this text node for vocabulary terms. Use word
              // boundary regex to match whole words only.
              tmpParts[i] = tmpPart.replace(/\b([A-Za-z][A-Za-z0-9_-]{1,30})\b/g, function (pMatch, pWord) {
                // Skip very short words and common English words
                if (pWord.length < 3) return pMatch;
                var tmpLower = pWord.toLowerCase();
                if (tmpLinked[tmpLower]) return pMatch; // already linked

                var tmpResult = pResolver(tmpLower);
                if (!tmpResult) return pMatch;
                tmpLinked[tmpLower] = true;
                var tmpShortEsc = (tmpResult.short || '').replace(/"/g, '&quot;');
                return '<span class="pict-vocab-term" data-vocab-slug="' + tmpResult.slug + '" data-vocab-title="' + (tmpResult.title || '').replace(/"/g, '&quot;') + '" data-vocab-short="' + tmpShortEsc + '">' + pMatch + '</span>';
              });
            }
            return tmpParts.join('');
          }

          /**
           * The file extensions that mean "these bytes ARE the video", as opposed to a page about one.
           */
        }, {
          key: "videoProviderFor",
          value:
          /**
           * Recognize a third-party video URL and return { Provider, Embed, Watch }, or null when the URL is not
           * one this knows how to embed.
           *
           * Only YouTube and Vimeo are recognized on purpose: an embed is a third party running code in the
           * reader's page, so the set of parties allowed to do that is a list, not a guess.
           *
           * @param {string} pURL
           * @returns {Object|null}
           */
          function videoProviderFor(pURL) {
            var tmpURL = String(pURL || '').trim();
            var tmpYouTube = tmpURL.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
            if (tmpYouTube) {
              // youtube-nocookie.com is the same player without the tracking cookies it would otherwise set
              // the moment the frame loads.
              return {
                Provider: 'YouTube',
                Embed: 'https://www.youtube-nocookie.com/embed/' + tmpYouTube[1] + '?autoplay=1&rel=0',
                Watch: 'https://www.youtube.com/watch?v=' + tmpYouTube[1]
              };
            }
            var tmpVimeo = tmpURL.match(/vimeo\.com\/(?:video\/)?(\d{6,})/);
            if (tmpVimeo) {
              return {
                Provider: 'Vimeo',
                Embed: 'https://player.vimeo.com/video/' + tmpVimeo[1] + '?autoplay=1',
                Watch: 'https://vimeo.com/' + tmpVimeo[1]
              };
            }
            return null;
          }

          /**
           * Is this URL safe to put in an href or a src? Only http(s) and same-document relative URLs are, which
           * is what keeps a javascript: or data: URL in a document from becoming script when a reader clicks it.
           *
           * @param {string} pURL
           * @returns {boolean}
           */
        }, {
          key: "isSafeMediaURL",
          value: function isSafeMediaURL(pURL) {
            var tmpURL = String(pURL || '').trim();
            if (!tmpURL) {
              return false;
            }
            if (/^https?:\/\//i.test(tmpURL)) {
              return true;
            }
            // A relative or root-relative path: same origin by construction, so it carries the document's own
            // trust. Anything with a scheme that is not http(s) is refused.
            return !/^[A-Za-z][A-Za-z0-9+.-]*:/.test(tmpURL);
          }

          /**
           * Does this URL end in a video file extension? Strictly the extension, nothing inferred.
           *
           * The inline image form uses THIS rather than isDirectVideoURL: in a ```video fence the author has
           * already said the thing is a video, so a relative URL can be taken at its word, but `![logo](/img/x)`
           * is an image and treating every extensionless relative source as video would turn the whole media
           * library into broken players.
           *
           * @param {string} pURL
           * @returns {boolean}
           */
        }, {
          key: "hasVideoExtension",
          value: function hasVideoExtension(pURL) {
            var tmpPath = String(pURL || '').trim().split('?')[0].split('#')[0];
            return PictContentProvider.VIDEO_EXTENSIONS.indexOf((tmpPath.split('.').pop() || '').toLowerCase()) >= 0;
          }

          /**
           * Does this URL point at video BYTES rather than a page about a video?
           *
           * A known video extension says yes. So does any relative URL: those are served by the application
           * itself, which is how an uploaded recording is addressed (a blob route often carries no extension at
           * all), and the application does not serve watch pages to its own markdown.
           *
           * @param {string} pURL
           * @returns {boolean}
           */
        }, {
          key: "isDirectVideoURL",
          value: function isDirectVideoURL(pURL) {
            var tmpURL = String(pURL || '').trim();
            if (!tmpURL) {
              return false;
            }
            if (this.hasVideoExtension(tmpURL)) {
              return true;
            }
            return !/^https?:\/\//i.test(tmpURL);
          }

          /**
           * The HTML for a ```video fence.
           *
           * Body shape: the URL on the first non-empty line, then optional `key: value` lines (title, poster).
           *
           *     ```video
           *     https://www.youtube.com/watch?v=abc123
           *     title: How the deploy pipeline works
           *     poster: /1.0/Media/42/Blob
           *     ```
           *
           * Two outcomes, decided by where the video lives:
           *
           * - Self-hosted (relative URL, or a file with a video extension) renders a plain <video controls
           *   preload="metadata">. The bytes come from the same place the page did, so there is nothing to
           *   consent to, and preload="metadata" paints the real first frame as its own thumbnail.
           * - A third-party watch page renders a CLICK-TO-LOAD card. Nothing is fetched from that party until the
           *   reader asks for it -- not the player, and not the poster image either, since fetching a thumbnail
           *   from the provider would leak the reader to them exactly as the player does. A poster is shown only
           *   when the author supplied one. Without JavaScript the card is still a working link to the video,
           *   which is what a server-rendered or printed copy of the document falls back to.
           *
           * @param {string} pBody - The fence contents
           * @returns {string} The HTML
           */
        }, {
          key: "videoEmbedHTML",
          value: function videoEmbedHTML(pBody) {
            var tmpLines = String(pBody || '').split('\n').map(function (pLine) {
              return pLine.trim();
            }).filter(function (pLine) {
              return pLine.length > 0;
            });
            if (!tmpLines.length) {
              return '<figure class="pict-content-video pict-content-video-empty"><figcaption>No video URL was given.</figcaption></figure>';
            }
            var tmpURL = tmpLines[0];
            var tmpOptions = {};
            for (var i = 1; i < tmpLines.length; i++) {
              var tmpMatch = tmpLines[i].match(/^([A-Za-z][A-Za-z0-9_-]*)\s*:\s*(.*)$/);
              if (tmpMatch) {
                tmpOptions[tmpMatch[1].toLowerCase()] = tmpMatch[2].trim();
              }
            }
            if (!this.isSafeMediaURL(tmpURL)) {
              return '<figure class="pict-content-video pict-content-video-empty"><figcaption>That video link was not a http(s) or relative URL.</figcaption></figure>';
            }
            var tmpTitle = tmpOptions.title || '';
            var tmpPoster = tmpOptions.poster && this.isSafeMediaURL(tmpOptions.poster) ? tmpOptions.poster : '';
            // The caption belongs under a PLAYER, which has nowhere else to say what it is. A card already
            // carries the title inside it, so captioning that one prints the same sentence twice.
            var tmpCaption = tmpTitle ? '<figcaption>' + this.escapeHTML(tmpTitle) + '</figcaption>' : '';
            if (this.isDirectVideoURL(tmpURL)) {
              return '<figure class="pict-content-video pict-content-video-file">' + '<video controls preload="metadata" src="' + this.escapeHTML(tmpURL) + '"' + (tmpPoster ? ' poster="' + this.escapeHTML(tmpPoster) + '"' : '') + '>' + '<a href="' + this.escapeHTML(tmpURL) + '">' + this.escapeHTML(tmpTitle || 'Download the video') + '</a>' + '</video>' + tmpCaption + '</figure>';
            }
            var tmpProvider = this.videoProviderFor(tmpURL);
            var tmpWatch = tmpProvider ? tmpProvider.Watch : tmpURL;
            var tmpLabel = tmpProvider ? tmpProvider.Provider + ' - plays from ' + tmpProvider.Provider + ' when you start it' : 'Opens in a new tab';
            // data-embed is what the view swaps in on click. A card with no data-embed (an unrecognized site)
            // stays a link, which is the honest outcome: this cannot promise to embed a page it does not know.
            return '<figure class="pict-content-video pict-content-video-embed"' + (tmpProvider ? ' data-embed="' + this.escapeHTML(tmpProvider.Embed) + '"' : '') + ' data-provider="' + this.escapeHTML(tmpProvider ? tmpProvider.Provider : 'link') + '">' + '<a class="pict-content-video-card" href="' + this.escapeHTML(tmpWatch) + '" target="_blank" rel="noopener noreferrer">' + (tmpPoster ? '<img class="pict-content-video-poster" src="' + this.escapeHTML(tmpPoster) + '" alt="">' : '') + '<span class="pict-content-video-play" aria-hidden="true">' + '<svg viewBox="0 0 68 48" width="54" height="38"><path class="pict-content-video-play-bg" d="M66.5 7.7a8 8 0 0 0-5.6-5.7C55.9.6 34 .6 34 .6s-21.9 0-26.9 1.4a8 8 0 0 0-5.6 5.7A83 83 0 0 0 .1 24a83 83 0 0 0 1.4 16.3 8 8 0 0 0 5.6 5.7c5 1.4 26.9 1.4 26.9 1.4s21.9 0 26.9-1.4a8 8 0 0 0 5.6-5.7A83 83 0 0 0 67.9 24a83 83 0 0 0-1.4-16.3z"/><path d="M27 34V14l18 10z" fill="#fff"/></svg>' + '</span>' + '<span class="pict-content-video-label">' + '<span class="pict-content-video-title">' + this.escapeHTML(tmpTitle || tmpWatch) + '</span>' + '<span class="pict-content-video-source">' + this.escapeHTML(tmpLabel) + '</span>' + '</span></a></figure>';
          }

          /**
           * Escape HTML special characters.
           *
           * @param {string} pText - The text to escape
           * @returns {string} The escaped text
           */
        }, {
          key: "escapeHTML",
          value: function escapeHTML(pText) {
            if (!pText) {
              return '';
            }
            return pText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
          }
        }], [{
          key: "VIDEO_EXTENSIONS",
          get: function get() {
            return ['mp4', 'webm', 'ogv', 'ogg', 'mov', 'm4v'];
          }
        }]);
      }(libPictProvider);
      module.exports = PictContentProvider;
      module.exports.default_configuration = {
        ProviderIdentifier: "Pict-Content",
        AutoInitialize: true,
        AutoInitializeOrdinal: 0
      };
    }, {
      "../Pict-Content-CSS.js": 16,
      "pict-provider": 9,
      "pict-section-code": 12
    }],
    19: [function (require, module, exports) {
      var libPictView = require('pict-view');
      var libContentCSS = require('../Pict-Content-CSS.js');
      var _ViewConfiguration = {
        ViewIdentifier: "Pict-Content",
        DefaultRenderable: "Pict-Content-Display",
        DefaultDestinationAddress: "#Pict-Content-Container",
        AutoRender: false,
        // Shared with the provider under one hash so the CSS injects once whether the view, the
        // provider (parseMarkdown), or both are used.
        CSS: libContentCSS,
        CSSHash: 'Pict-Section-Content-CSS',
        Templates: [{
          Hash: "Pict-Content-Template",
          Template: /*html*/"\n<div class=\"pict-content\" id=\"Pict-Content-Body\">\n\t<div class=\"pict-content-loading\">Loading content...</div>\n</div>\n"
        }],
        Renderables: [{
          RenderableHash: "Pict-Content-Display",
          TemplateHash: "Pict-Content-Template",
          DestinationAddress: "#Pict-Content-Container",
          RenderMethod: "replace"
        }]
      };
      var PictContentView = /*#__PURE__*/function (_libPictView) {
        function PictContentView(pFable, pOptions, pServiceHash) {
          _classCallCheck(this, PictContentView);
          return _callSuper(this, PictContentView, [pFable, pOptions, pServiceHash]);
        }

        /**
         * Display parsed HTML content in the content area.
         *
         * @param {string} pHTMLContent - The HTML to display
         * @param {string} [pContainerID] - The container element ID (defaults to 'Pict-Content-Body')
         */
        _inherits(PictContentView, _libPictView);
        return _createClass(PictContentView, [{
          key: "displayContent",
          value: function displayContent(pHTMLContent, pContainerID) {
            var tmpContainerID = pContainerID || 'Pict-Content-Body';
            this.pict.ContentAssignment.assignContent('#' + tmpContainerID, pHTMLContent);

            // Scroll to top of content area
            var tmpContentContainer = document.getElementById(tmpContainerID);
            if (tmpContentContainer && tmpContentContainer.parentElement) {
              tmpContentContainer.parentElement.scrollTop = 0;
            }

            // Ensure the container carries the `.pict-content` class so the
            // 30+ theme-scoped CSS rules below (`.pict-content a`, `.pict-content
            // h1`, `.pict-content pre`, ...) actually match when a host passes
            // a custom container ID.  Idempotent — re-adding the class is a
            // no-op if it's already there from the host's markup.
            if (tmpContentContainer && !tmpContentContainer.classList.contains('pict-content')) {
              tmpContentContainer.classList.add('pict-content');
            }

            // Tag images and code blocks immediately so they're clickable.
            // Mermaid blocks are tagged after mermaid.run() resolves (see below).
            this.enableFullscreenViewers(tmpContainerID, {
              skipMermaid: true
            });

            // Post-render: initialize Mermaid diagrams if mermaid is available.
            // Once mermaid finishes, retag so the rendered SVGs are also clickable.
            this.renderMermaidDiagrams(tmpContainerID);

            // Post-render: render ```excalidraw fenced scenes if the
            // pict-section-excalidraw wrapper bundle is loaded.  Each fence
            // becomes a static SVG (with the scene embedded for re-edit by
            // retold-content-system).
            this.renderExcalidrawDiagrams(tmpContainerID);

            // Post-render: make ```video cards for third-party players click-to-load.
            this.hydrateVideoEmbeds(tmpContainerID);

            // Post-render: render KaTeX equations if katex is available
            this.renderKaTeXEquations(tmpContainerID);
          }

          /**
           * Wire the click-to-load video cards the markdown parser emitted for third-party players.
           *
           * Until a reader clicks, nothing has been requested from the provider: no player, no cookies, no
           * thumbnail, no record that this document was opened. The click is the consent, and only then is the
           * iframe created. This is the whole reason the card exists rather than an iframe -- an embed that loads
           * with the page has already told a third party who is reading before anyone chose anything.
           *
           * Degrades to a link. With no JavaScript, or before this runs, the card is an anchor to the video, which
           * is what a server-rendered or printed copy of a document is left with.
           *
           * Idempotent: a hydrated figure carries data-hydrated, so a re-render does not double-bind.
           *
           * @param {string} [pContainerID]
           */
        }, {
          key: "hydrateVideoEmbeds",
          value: function hydrateVideoEmbeds(pContainerID) {
            if (typeof document === 'undefined') {
              return;
            }
            var tmpContainer = pContainerID ? document.getElementById(String(pContainerID).replace(/^#/, '')) : document;
            if (!tmpContainer) {
              return;
            }
            var tmpFigures = tmpContainer.querySelectorAll('.pict-content-video-embed[data-embed]:not([data-hydrated])');
            var _loop2 = function _loop2() {
              var tmpFigure = tmpFigures[i];
              tmpFigure.setAttribute('data-hydrated', 'true');
              var tmpCard = tmpFigure.querySelector('.pict-content-video-card');
              if (!tmpCard) {
                return 1; // continue
              }
              tmpCard.addEventListener('click', function (pEvent) {
                // A modified click is the reader asking for a new tab; leave the anchor to do that.
                if (pEvent.metaKey || pEvent.ctrlKey || pEvent.shiftKey || pEvent.altKey || pEvent.button > 0) {
                  return;
                }
                pEvent.preventDefault();
                var tmpEmbed = tmpFigure.getAttribute('data-embed') || '';
                if (!tmpEmbed) {
                  return;
                }
                var tmpFrame = document.createElement('iframe');
                tmpFrame.setAttribute('src', tmpEmbed);
                tmpFrame.setAttribute('title', (tmpFigure.querySelector('.pict-content-video-title') || {}).textContent || 'Video');
                tmpFrame.setAttribute('frameborder', '0');
                tmpFrame.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; picture-in-picture');
                tmpFrame.setAttribute('allowfullscreen', 'allowfullscreen');
                // The player gets no referrer: which document someone watched a video from is not the
                // provider's business, and nothing about playback needs it.
                tmpFrame.setAttribute('referrerpolicy', 'no-referrer');
                tmpFrame.className = 'pict-content-video-frame';
                tmpCard.parentNode.replaceChild(tmpFrame, tmpCard);
              });
            };
            for (var i = 0; i < tmpFigures.length; i++) {
              if (_loop2()) continue;
            }
          }

          /**
           * Render any `.pict-excalidraw-fence` placeholders inside the container
           * as static SVGs using the pict-section-excalidraw wrapper bundle's
           * exportToSvg helper.  Each fence's scene JSON travels through a
           * URI-component-encoded data-scene attribute (placed there by the
           * markdown parser in Pict-Provider-Content).
           *
           * Gracefully degrades when the wrapper bundle isn't on the page:
           * leaves the loading placeholder visible with a one-time console hint.
           * Idempotent — placeholders carry `data-rendered="true"` after the
           * first pass so re-renders don't double-emit.
           *
           * @param {string} [pContainerID]
           */
        }, {
          key: "renderExcalidrawDiagrams",
          value: function renderExcalidrawDiagrams(pContainerID) {
            var _this20 = this;
            if (typeof document === 'undefined') return;
            var tmpContainerID = pContainerID || 'Pict-Content-Body';
            var tmpContentBody = document.getElementById(tmpContainerID);
            if (!tmpContentBody) return;
            var tmpFences = tmpContentBody.querySelectorAll('.pict-excalidraw-fence:not([data-rendered])');
            if (tmpFences.length < 1) return;
            var tmpVendor = typeof window !== 'undefined' ? window.PictSectionExcalidrawVendor : null;
            if (!tmpVendor || typeof tmpVendor.exportToSvg !== 'function') {
              // Bundle not loaded — leave the placeholder visible.  The host
              // can load the wrapper bundle and call renderExcalidrawDiagrams
              // again, or include the script tag in its HTML shell.
              if (this.log && this.log.warn && !this._excalidrawBundleWarnLogged) {
                this.log.warn('pict-excalidraw fence(s) found but pict-section-excalidraw wrapper bundle is not loaded — leaving as placeholders.');
                this._excalidrawBundleWarnLogged = true;
              }
              return;
            }
            var _loop3 = function _loop3() {
              var tmpFence = tmpFences[i];
              var tmpEncoded = tmpFence.getAttribute('data-scene') || '';
              var tmpJson = '';
              try {
                tmpJson = decodeURIComponent(tmpEncoded);
              } catch (pErr) {
                tmpJson = '';
              }
              var tmpScene;
              try {
                tmpScene = JSON.parse(tmpJson);
              } catch (pErr) {
                _this20._renderExcalidrawFenceError(tmpFence, 'Invalid scene JSON: ' + pErr.message);
                return 1; // continue
              }
              var tmpExportArgs = {
                elements: tmpScene.elements || [],
                appState: Object.assign({
                  exportEmbedScene: true
                }, tmpScene.appState || {}),
                files: tmpScene.files || {}
              };
              tmpVendor.exportToSvg(tmpExportArgs).then(function (pSvgEl) {
                if (!pSvgEl) return;
                // Style the SVG to fit the fence's content width while preserving aspect.
                pSvgEl.removeAttribute('width');
                pSvgEl.removeAttribute('height');
                pSvgEl.setAttribute('style', 'max-width: 100%; height: auto;');
                tmpFence.innerHTML = '';
                tmpFence.appendChild(pSvgEl);
                tmpFence.setAttribute('data-rendered', 'true');
              }).catch(function (pErr) {
                _this20._renderExcalidrawFenceError(tmpFence, 'Excalidraw render failed: ' + (pErr && pErr.message ? pErr.message : pErr));
              });
            };
            for (var i = 0; i < tmpFences.length; i++) {
              if (_loop3()) continue;
            }
          }
        }, {
          key: "_renderExcalidrawFenceError",
          value: function _renderExcalidrawFenceError(pFence, pMessage) {
            pFence.setAttribute('data-rendered', 'true');
            pFence.classList.add('pict-excalidraw-fence-error');
            pFence.innerHTML = '<div class="pict-excalidraw-fence-error-message"></div>';
            // Use textContent on the inner div so any user-supplied error
            // substrings (e.g. parser error positions) can't introduce HTML.
            var tmpMsg = pFence.querySelector('.pict-excalidraw-fence-error-message');
            if (tmpMsg) tmpMsg.textContent = pMessage;
            if (this.log && this.log.warn) this.log.warn('pict-excalidraw fence: ' + pMessage);
          }

          /**
           * Lazily wire mermaid into the active pict-provider-theme via the
           * shared Theme-Diagram-Adapter. The adapter handles:
           *   - mermaid.initialize() with the canonical pict token map
           *   - onApply subscription (re-init + re-render on theme/mode change)
           *   - source stashing + data-processed reset for refresh
           *
           * Idempotent: the first call binds the adapter, subsequent calls are
           * no-ops.  When the provider isn't installed, mermaid still gets
           * initialized once against whatever CSS variables happen to exist.
           */
        }, {
          key: "_ensureMermaidAdapter",
          value: function _ensureMermaidAdapter() {
            if (this._mermaidAdapter) {
              return this._mermaidAdapter;
            }
            if (typeof mermaid === 'undefined' || typeof window === 'undefined') {
              return null;
            }
            var tmpProvider = this.pict && this.pict.providers && this.pict.providers.Theme;
            try {
              if (tmpProvider && tmpProvider.diagram && typeof tmpProvider.diagram.adaptMermaid === 'function') {
                this._mermaidAdapter = tmpProvider.diagram.adaptMermaid(mermaid, {});
              } else {
                // No provider: lazy-require the adapter directly so the
                // static base theme still picks up any CSS vars on :root.
                var libDiagramAdapter = require('pict-provider-theme/source/Theme-Diagram-Adapter.js');
                libDiagramAdapter.initializeMermaid(mermaid);
                this._mermaidAdapter = {
                  refresh: function refresh() {
                    return libDiagramAdapter.refreshMermaidDiagrams();
                  },
                  reinitialize: function reinitialize() {
                    libDiagramAdapter.initializeMermaid(mermaid);
                  },
                  dispose: function dispose() {},
                  subscribed: false
                };
              }
            } catch (pError) {
              if (this.log && this.log.warn) {
                this.log.warn('Mermaid theme adapter init failed: ' + pError.message);
              }
              this._mermaidAdapter = null;
            }
            return this._mermaidAdapter;
          }

          /**
           * Render any Mermaid diagram blocks in the content area.
           * Mermaid blocks are `<pre class="mermaid">` elements produced by parseMarkdown.
           *
           * @param {string} [pContainerID] - The container element ID (defaults to 'Pict-Content-Body')
           */
        }, {
          key: "renderMermaidDiagrams",
          value: function renderMermaidDiagrams(pContainerID) {
            var _this21 = this;
            if (typeof mermaid === 'undefined') {
              return;
            }
            var tmpContainerID = pContainerID || 'Pict-Content-Body';
            var tmpContentBody = document.getElementById(tmpContainerID);
            if (!tmpContentBody) {
              return;
            }
            var tmpMermaidElements = tmpContentBody.querySelectorAll('pre.mermaid');
            if (tmpMermaidElements.length < 1) {
              return;
            }

            // First-time setup: bind the Theme-Diagram-Adapter, which initializes
            // mermaid against the active palette and subscribes to onApply so a
            // theme/mode change triggers re-render of every pre.mermaid on the page.
            this._ensureMermaidAdapter();

            // Cache each diagram's source on the element so theme-change
            // re-renders can restore it. Mermaid replaces textContent with
            // the rendered SVG during run(), so we lose the source unless
            // we stash it here first.
            var tmpProviderForStash = this.pict && this.pict.providers && this.pict.providers.Theme;
            if (tmpProviderForStash && tmpProviderForStash.diagram && typeof tmpProviderForStash.diagram.stashMermaidSource === 'function') {
              tmpProviderForStash.diagram.stashMermaidSource(tmpMermaidElements);
            } else {
              for (var i = 0; i < tmpMermaidElements.length; i++) {
                var tmpEl = tmpMermaidElements[i];
                if (!tmpEl.hasAttribute('data-mermaid-source')) {
                  tmpEl.setAttribute('data-mermaid-source', tmpEl.textContent);
                }
              }
            }

            // mermaid.run() will process all pre.mermaid elements in the container.
            // It returns a promise; once it resolves the inner SVG exists and we
            // can tag the diagrams as fullscreen-clickable.
            try {
              var tmpResult = mermaid.run({
                nodes: tmpMermaidElements
              });
              if (tmpResult && typeof tmpResult.then === 'function') {
                tmpResult.then(function () {
                  // Strip mermaid 11's inline !important fill/stroke flags
                  // so the view's theme-aware .theme-dark CSS rules can win
                  // against the per-node colors mermaid bakes inline.  The
                  // adapter strips on every re-render; the initial render
                  // runs through mermaid.run() directly so we have to call
                  // the strip here too.  Without this the dark-mode rect
                  // fill override silently loses to inline `!important`.
                  var tmpProvider = _this21.pict && _this21.pict.providers && _this21.pict.providers.Theme;
                  if (tmpProvider && tmpProvider.diagram && typeof tmpProvider.diagram.stripMermaidStyleImportance === 'function') {
                    tmpProvider.diagram.stripMermaidStyleImportance(tmpMermaidElements);
                  }
                  _this21.enableFullscreenViewers(tmpContainerID, {
                    onlyMermaid: true
                  });
                }).catch(function (pError) {
                  _this21.log.error('Mermaid rendering error: ' + (pError && pError.message ? pError.message : pError));
                });
              } else {
                // Synchronous fallback (older mermaid)
                var tmpProvider = this.pict && this.pict.providers && this.pict.providers.Theme;
                if (tmpProvider && tmpProvider.diagram && typeof tmpProvider.diagram.stripMermaidStyleImportance === 'function') {
                  tmpProvider.diagram.stripMermaidStyleImportance(tmpMermaidElements);
                }
                this.enableFullscreenViewers(tmpContainerID, {
                  onlyMermaid: true
                });
              }
            } catch (pError) {
              this.log.error('Mermaid rendering error: ' + pError.message);
            }
          }

          /**
           * Render KaTeX inline and display math elements in the content area.
           * Inline: `<span class="pict-content-katex-inline">`
           * Display: `<div class="pict-content-katex-display">`
           *
           * @param {string} [pContainerID] - The container element ID (defaults to 'Pict-Content-Body')
           */
        }, {
          key: "renderKaTeXEquations",
          value: function renderKaTeXEquations(pContainerID) {
            if (typeof katex === 'undefined') {
              return;
            }
            var tmpContainerID = pContainerID || 'Pict-Content-Body';
            var tmpContentBody = document.getElementById(tmpContainerID);
            if (!tmpContentBody) {
              return;
            }

            // Render inline math
            var tmpInlineElements = tmpContentBody.querySelectorAll('.pict-content-katex-inline');
            for (var i = 0; i < tmpInlineElements.length; i++) {
              try {
                katex.render(tmpInlineElements[i].textContent, tmpInlineElements[i], {
                  throwOnError: false,
                  displayMode: false
                });
              } catch (pError) {
                this.log.warn('KaTeX inline error: ' + pError.message);
              }
            }

            // Render display math
            var tmpDisplayElements = tmpContentBody.querySelectorAll('.pict-content-katex-display');
            for (var _i3 = 0; _i3 < tmpDisplayElements.length; _i3++) {
              try {
                katex.render(tmpDisplayElements[_i3].textContent, tmpDisplayElements[_i3], {
                  throwOnError: false,
                  displayMode: true
                });
              } catch (pError) {
                this.log.warn('KaTeX display error: ' + pError.message);
              }
            }
          }

          /**
           * Walk the freshly-rendered content and tag images, mermaid diagrams,
           * and fenced code blocks so they're click-to-fullscreen.  Also installs
           * a single delegated click listener on the container the first time it
           * is called for that container.
           *
           * @param {string} [pContainerID] - The container element ID (defaults to 'Pict-Content-Body')
           * @param {Object} [pOptions] - { skipMermaid: bool, onlyMermaid: bool }
           */
        }, {
          key: "enableFullscreenViewers",
          value: function enableFullscreenViewers(pContainerID, pOptions) {
            var _this22 = this;
            var tmpContainerID = pContainerID || 'Pict-Content-Body';
            var tmpContentBody = document.getElementById(tmpContainerID);
            if (!tmpContentBody) {
              return;
            }
            var tmpOptions = pOptions || {};
            if (!tmpOptions.onlyMermaid) {
              // Images
              var tmpImages = tmpContentBody.querySelectorAll('img:not([data-fullscreen-source])');
              for (var i = 0; i < tmpImages.length; i++) {
                var tmpImg = tmpImages[i];
                tmpImg.setAttribute('data-fullscreen-source', 'image');
                var tmpAlt = tmpImg.getAttribute('alt');
                if (!tmpAlt) {
                  var tmpSrc = tmpImg.getAttribute('src') || '';
                  tmpAlt = tmpSrc.split('/').pop().split('?')[0] || 'Image';
                }
                tmpImg.setAttribute('data-fullscreen-title', tmpAlt);
              }

              // Code wraps (fenced blocks): do NOT tag for click-to-fullscreen —
              // that would conflict with text selection for copy/paste.
              // Instead wrap each in a container with hover-revealed action
              // buttons (fullscreen + copy) floating to the right.
              var tmpCodeWraps = tmpContentBody.querySelectorAll('.pict-content-code-wrap:not([data-code-actions-wired])');
              for (var _i4 = 0; _i4 < tmpCodeWraps.length; _i4++) {
                this._wireCodeActions(tmpCodeWraps[_i4]);
              }
            }
            if (!tmpOptions.skipMermaid) {
              // Mermaid diagrams (after mermaid.run() has replaced the inner pre)
              var tmpMermaid = tmpContentBody.querySelectorAll('pre.mermaid:not([data-fullscreen-source])');
              for (var _i5 = 0; _i5 < tmpMermaid.length; _i5++) {
                var tmpPre = tmpMermaid[_i5];
                // Only tag once mermaid has actually rendered an svg into it
                if (tmpPre.querySelector('svg')) {
                  tmpPre.setAttribute('data-fullscreen-source', 'mermaid');
                  tmpPre.setAttribute('data-fullscreen-title', 'Mermaid Diagram');
                }
              }
            }

            // Install delegated click listener once per container.
            if (!tmpContentBody.__pictFullscreenWired) {
              tmpContentBody.__pictFullscreenWired = true;
              tmpContentBody.addEventListener('click', function (pEvent) {
                var tmpTarget = pEvent.target;
                while (tmpTarget && tmpTarget !== tmpContentBody && !tmpTarget.hasAttribute('data-fullscreen-source')) {
                  tmpTarget = tmpTarget.parentElement;
                }
                if (tmpTarget && tmpTarget !== tmpContentBody && tmpTarget.hasAttribute('data-fullscreen-source')) {
                  pEvent.preventDefault();
                  _this22._openFullscreen(tmpTarget);
                }
              });
            }
          }

          /**
           * Wrap a fenced code block in a container that holds the existing
           * .pict-content-code-wrap plus a hover-revealed action column with
           * fullscreen + copy buttons.  The action column is sticky-positioned
           * so it follows the page scroll while the user is alongside a long
           * code block.
           *
           * @param {HTMLElement} pCodeWrap - The .pict-content-code-wrap element
           */
        }, {
          key: "_wireCodeActions",
          value: function _wireCodeActions(pCodeWrap) {
            var _this23 = this;
            if (!pCodeWrap || pCodeWrap.hasAttribute('data-code-actions-wired')) {
              return;
            }
            pCodeWrap.setAttribute('data-code-actions-wired', 'true');

            // Determine the fullscreen title from the language tag, if any.
            var tmpCodeEl = pCodeWrap.querySelector('code[class*="language-"]');
            var tmpLang = 'Code';
            if (tmpCodeEl) {
              var tmpMatch = (tmpCodeEl.getAttribute('class') || '').match(/language-(\S+)/);
              if (tmpMatch) {
                tmpLang = tmpMatch[1] + ' code';
              }
            }
            pCodeWrap.setAttribute('data-code-language', tmpLang);

            // Build the wrapping container.
            var tmpContainer = document.createElement('div');
            tmpContainer.className = 'pict-content-code-container';
            var tmpActions = document.createElement('div');
            tmpActions.className = 'pict-content-code-actions';
            tmpActions.setAttribute('aria-hidden', 'false');
            var tmpFullscreenBtn = document.createElement('button');
            tmpFullscreenBtn.type = 'button';
            tmpFullscreenBtn.className = 'pict-content-code-action-btn';
            tmpFullscreenBtn.setAttribute('aria-label', 'Open code in fullscreen');
            tmpFullscreenBtn.setAttribute('title', 'Open in fullscreen');
            tmpFullscreenBtn.innerHTML = '<svg viewBox="0 0 16 16" aria-hidden="true"><polyline points="3 6 3 3 6 3"></polyline><polyline points="13 6 13 3 10 3"></polyline><polyline points="3 10 3 13 6 13"></polyline><polyline points="13 10 13 13 10 13"></polyline></svg>';
            var tmpCopyBtn = document.createElement('button');
            tmpCopyBtn.type = 'button';
            tmpCopyBtn.className = 'pict-content-code-action-btn';
            tmpCopyBtn.setAttribute('aria-label', 'Copy code to clipboard');
            tmpCopyBtn.setAttribute('title', 'Copy code');
            tmpCopyBtn.innerHTML = '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="5" y="5" width="9" height="9" rx="1.25"></rect><path d="M11 5V3.25A1.25 1.25 0 0 0 9.75 2H3.25A1.25 1.25 0 0 0 2 3.25v6.5A1.25 1.25 0 0 0 3.25 11H5"></path></svg>';
            tmpActions.appendChild(tmpFullscreenBtn);
            tmpActions.appendChild(tmpCopyBtn);

            // Insert the container in the place of the code wrap, then move the
            // code wrap inside it followed by the actions column.
            var tmpParent = pCodeWrap.parentNode;
            tmpParent.insertBefore(tmpContainer, pCodeWrap);
            tmpContainer.appendChild(pCodeWrap);
            tmpContainer.appendChild(tmpActions);

            // Click handlers
            tmpFullscreenBtn.addEventListener('click', function (pEvent) {
              pEvent.preventDefault();
              pEvent.stopPropagation();
              _this23._openCodeFullscreen(pCodeWrap);
            });
            tmpCopyBtn.addEventListener('click', function (pEvent) {
              pEvent.preventDefault();
              pEvent.stopPropagation();
              _this23._copyCodeToClipboard(pCodeWrap, tmpCopyBtn);
            });
          }

          /**
           * Open the fullscreen overlay for a fenced code block.  Reuses the
           * same overlay singleton as image / mermaid.
           */
        }, {
          key: "_openCodeFullscreen",
          value: function _openCodeFullscreen(pCodeWrap) {
            var tmpOverlay = this._buildFullscreenOverlay();
            // Stamp the source attributes the overlay's open() expects.
            pCodeWrap.setAttribute('data-fullscreen-source', 'code');
            pCodeWrap.setAttribute('data-fullscreen-title', pCodeWrap.getAttribute('data-code-language') || 'Code');
            tmpOverlay.open(pCodeWrap);
          }

          /**
           * Copy the raw text of a code block to the clipboard and briefly flash
           * a "Copied!" state on the trigger button.
           */
        }, {
          key: "_copyCodeToClipboard",
          value: function _copyCodeToClipboard(pCodeWrap, pButton) {
            var tmpCodeEl = pCodeWrap.querySelector('code');
            var tmpText = tmpCodeEl ? tmpCodeEl.textContent : pCodeWrap.textContent;
            var fFlashOk = function fFlashOk() {
              pButton.classList.add('is-copied');
              pButton.setAttribute('title', 'Copied!');
              setTimeout(function () {
                pButton.classList.remove('is-copied');
                pButton.setAttribute('title', 'Copy code');
              }, 1400);
            };
            var fFlashFail = function fFlashFail() {
              pButton.classList.add('is-copy-failed');
              pButton.setAttribute('title', 'Copy failed');
              setTimeout(function () {
                pButton.classList.remove('is-copy-failed');
                pButton.setAttribute('title', 'Copy code');
              }, 1400);
            };
            try {
              if (navigator && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
                navigator.clipboard.writeText(tmpText).then(fFlashOk).catch(fFlashFail);
                return;
              }
            } catch (e) {
              // fall through to legacy fallback
            }

            // Legacy fallback for non-secure contexts.
            try {
              var tmpTextarea = document.createElement('textarea');
              tmpTextarea.value = tmpText;
              tmpTextarea.style.position = 'fixed';
              tmpTextarea.style.opacity = '0';
              document.body.appendChild(tmpTextarea);
              tmpTextarea.select();
              var tmpOk = document.execCommand('copy');
              document.body.removeChild(tmpTextarea);
              if (tmpOk) {
                fFlashOk();
              } else {
                fFlashFail();
              }
            } catch (e) {
              fFlashFail();
            }
          }

          /**
           * Lazily build the singleton fullscreen overlay element and attach it
           * to <body>.  Returns the existing instance if already built.
           */
        }, {
          key: "_buildFullscreenOverlay",
          value: function _buildFullscreenOverlay() {
            if (PictContentView._FullscreenOverlay) {
              return PictContentView._FullscreenOverlay;
            }
            var tmpOverlay = document.createElement('div');
            tmpOverlay.className = 'pict-fullscreen-overlay';
            tmpOverlay.setAttribute('role', 'dialog');
            tmpOverlay.setAttribute('aria-modal', 'true');
            tmpOverlay.setAttribute('aria-labelledby', 'pict-fullscreen-title');
            tmpOverlay.setAttribute('hidden', '');
            tmpOverlay.innerHTML = '' + '<div class="pict-fullscreen-titlebar">' + '<span class="pict-fullscreen-title" id="pict-fullscreen-title"></span>' + '<div class="pict-fullscreen-controls">' + '<button type="button" class="pict-fullscreen-btn" data-action="zoom-out" aria-label="Zoom out" title="Zoom out"><svg viewBox="0 0 16 16" aria-hidden="true"><line x1="3" y1="8" x2="13" y2="8"></line></svg></button>' + '<button type="button" class="pict-fullscreen-btn" data-action="zoom-reset" aria-label="Reset zoom" title="Reset zoom"><svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="5"></circle><line x1="8" y1="5" x2="8" y2="11"></line><line x1="5" y1="8" x2="11" y2="8"></line></svg></button>' + '<button type="button" class="pict-fullscreen-btn" data-action="zoom-in" aria-label="Zoom in" title="Zoom in"><svg viewBox="0 0 16 16" aria-hidden="true"><line x1="3" y1="8" x2="13" y2="8"></line><line x1="8" y1="3" x2="8" y2="13"></line></svg></button>' + '<button type="button" class="pict-fullscreen-btn pict-fullscreen-close" data-action="close" aria-label="Close" title="Close (Esc)"><svg viewBox="0 0 16 16" aria-hidden="true"><line x1="4" y1="4" x2="12" y2="12"></line><line x1="12" y1="4" x2="4" y2="12"></line></svg></button>' + '</div>' + '</div>' + '<div class="pict-fullscreen-stage">' + '<div class="pict-fullscreen-content"></div>' + '</div>';
            document.body.appendChild(tmpOverlay);
            var tmpState = {
              scale: 1,
              translateX: 0,
              translateY: 0,
              isPanning: false,
              didPan: false,
              currentKind: '',
              panStartX: 0,
              panStartY: 0,
              panOrigX: 0,
              panOrigY: 0,
              pinchInitialDistance: 0,
              pinchInitialScale: 1
            };
            var tmpStage = tmpOverlay.querySelector('.pict-fullscreen-stage');
            var tmpContent = tmpOverlay.querySelector('.pict-fullscreen-content');
            var tmpTitleEl = tmpOverlay.querySelector('.pict-fullscreen-title');
            var fApplyTransform = function fApplyTransform() {
              tmpContent.style.transform = 'translate(' + tmpState.translateX + 'px, ' + tmpState.translateY + 'px) scale(' + tmpState.scale + ')';
              tmpStage.classList.toggle('is-zoomed', tmpState.scale > 1.001);
            };
            var fClampScale = function fClampScale(pValue) {
              if (pValue < 0.5) return 0.5;
              if (pValue > 8) return 8;
              return pValue;
            };
            var fZoomAt = function fZoomAt(pNewScale, pAnchorClientX, pAnchorClientY) {
              var tmpClamped = fClampScale(pNewScale);
              var tmpStageRect = tmpStage.getBoundingClientRect();
              var tmpAnchorX = pAnchorClientX !== undefined ? pAnchorClientX : tmpStageRect.left + tmpStageRect.width / 2;
              var tmpAnchorY = pAnchorClientY !== undefined ? pAnchorClientY : tmpStageRect.top + tmpStageRect.height / 2;
              // Convert anchor into the local coordinate of the content (which is centered)
              var tmpCenterX = tmpStageRect.left + tmpStageRect.width / 2;
              var tmpCenterY = tmpStageRect.top + tmpStageRect.height / 2;
              var tmpDX = tmpAnchorX - tmpCenterX;
              var tmpDY = tmpAnchorY - tmpCenterY;
              var tmpRatio = tmpClamped / tmpState.scale;
              tmpState.translateX = tmpDX - tmpRatio * (tmpDX - tmpState.translateX);
              tmpState.translateY = tmpDY - tmpRatio * (tmpDY - tmpState.translateY);
              tmpState.scale = tmpClamped;
              fApplyTransform();
            };
            var fResetTransform = function fResetTransform() {
              tmpState.scale = 1;
              tmpState.translateX = 0;
              tmpState.translateY = 0;
              fApplyTransform();
            };
            var fClose = function fClose() {
              tmpOverlay.setAttribute('hidden', '');
              tmpContent.innerHTML = '';
              fResetTransform();
              document.documentElement.style.removeProperty('overflow');
              document.removeEventListener('keydown', fKeydown);
            };
            var fKeydown = function fKeydown(pEvent) {
              if (pEvent.key === 'Escape') {
                pEvent.preventDefault();
                fClose();
              } else if (pEvent.key === '+' || pEvent.key === '=') {
                pEvent.preventDefault();
                fZoomAt(tmpState.scale + 0.25);
              } else if (pEvent.key === '-' || pEvent.key === '_') {
                pEvent.preventDefault();
                fZoomAt(tmpState.scale - 0.25);
              } else if (pEvent.key === '0') {
                pEvent.preventDefault();
                fResetTransform();
              }
            };

            // Backdrop click closes (only when clicking the backdrop itself or
            // the stage area, not the inner content).  Suppress if a
            // drag-to-pan just finished — the pointerup that ended the pan
            // also fires a click event which we must ignore.
            tmpOverlay.addEventListener('click', function (pEvent) {
              if (tmpState.didPan) {
                tmpState.didPan = false;
                return;
              }
              if (pEvent.target === tmpOverlay || pEvent.target === tmpStage) {
                fClose();
              }
            });

            // Toolbar buttons
            tmpOverlay.querySelectorAll('[data-action]').forEach(function (pBtn) {
              pBtn.addEventListener('click', function (pEvent) {
                pEvent.stopPropagation();
                var tmpAction = pBtn.getAttribute('data-action');
                if (tmpAction === 'close') {
                  fClose();
                } else if (tmpAction === 'zoom-in') {
                  fZoomAt(tmpState.scale + 0.25);
                } else if (tmpAction === 'zoom-out') {
                  fZoomAt(tmpState.scale - 0.25);
                } else if (tmpAction === 'zoom-reset') {
                  fResetTransform();
                }
              });
            });

            // Wheel zoom — for images and mermaid diagrams.
            // For code blocks, let the browser handle native scrolling
            // so the user can scroll through long code.
            tmpStage.addEventListener('wheel', function (pEvent) {
              if (tmpState.currentKind === 'code') {
                return;
              }
              pEvent.preventDefault();
              var tmpDelta = -pEvent.deltaY;
              var tmpStep = (tmpDelta > 0 ? 1 : -1) * 0.15;
              fZoomAt(tmpState.scale + tmpStep, pEvent.clientX, pEvent.clientY);
            }, {
              passive: false
            });

            // Drag-to-pan when zoomed (not for code blocks — they scroll natively)
            tmpStage.addEventListener('pointerdown', function (pEvent) {
              if (tmpState.currentKind === 'code') {
                return;
              }
              if (tmpState.scale <= 1.001) {
                return;
              }
              if (pEvent.target.closest('.pict-fullscreen-controls')) {
                return;
              }
              tmpState.isPanning = true;
              tmpState.panStartX = pEvent.clientX;
              tmpState.panStartY = pEvent.clientY;
              tmpState.panOrigX = tmpState.translateX;
              tmpState.panOrigY = tmpState.translateY;
              tmpStage.setPointerCapture(pEvent.pointerId);
              tmpStage.classList.add('is-panning');
            });
            tmpStage.addEventListener('pointermove', function (pEvent) {
              if (!tmpState.isPanning) {
                return;
              }
              tmpState.translateX = tmpState.panOrigX + (pEvent.clientX - tmpState.panStartX);
              tmpState.translateY = tmpState.panOrigY + (pEvent.clientY - tmpState.panStartY);
              fApplyTransform();
            });
            var fEndPan = function fEndPan(pEvent) {
              if (!tmpState.isPanning) {
                return;
              }
              tmpState.isPanning = false;
              // Flag that a pan just ended so the subsequent click event
              // (which the browser fires after pointerup) does not close
              // the overlay via the backdrop-close handler.
              tmpState.didPan = true;
              tmpStage.classList.remove('is-panning');
              try {
                tmpStage.releasePointerCapture(pEvent.pointerId);
              } catch (e) {}
            };
            tmpStage.addEventListener('pointerup', fEndPan);
            tmpStage.addEventListener('pointercancel', fEndPan);

            // Touch pinch zoom
            var tmpActiveTouches = {};
            tmpStage.addEventListener('touchstart', function (pEvent) {
              for (var i = 0; i < pEvent.touches.length; i++) {
                var tmpT = pEvent.touches[i];
                tmpActiveTouches[tmpT.identifier] = {
                  x: tmpT.clientX,
                  y: tmpT.clientY
                };
              }
              if (pEvent.touches.length === 2) {
                var tmpA = pEvent.touches[0];
                var tmpB = pEvent.touches[1];
                var tmpDX = tmpB.clientX - tmpA.clientX;
                var tmpDY = tmpB.clientY - tmpA.clientY;
                tmpState.pinchInitialDistance = Math.sqrt(tmpDX * tmpDX + tmpDY * tmpDY);
                tmpState.pinchInitialScale = tmpState.scale;
              }
            }, {
              passive: true
            });
            tmpStage.addEventListener('touchmove', function (pEvent) {
              if (pEvent.touches.length === 2 && tmpState.pinchInitialDistance > 0) {
                pEvent.preventDefault();
                var tmpA = pEvent.touches[0];
                var tmpB = pEvent.touches[1];
                var tmpDX = tmpB.clientX - tmpA.clientX;
                var tmpDY = tmpB.clientY - tmpA.clientY;
                var tmpDist = Math.sqrt(tmpDX * tmpDX + tmpDY * tmpDY);
                var tmpRatio = tmpDist / tmpState.pinchInitialDistance;
                var tmpMidX = (tmpA.clientX + tmpB.clientX) / 2;
                var tmpMidY = (tmpA.clientY + tmpB.clientY) / 2;
                fZoomAt(tmpState.pinchInitialScale * tmpRatio, tmpMidX, tmpMidY);
              }
            }, {
              passive: false
            });
            tmpStage.addEventListener('touchend', function () {
              tmpActiveTouches = {};
              tmpState.pinchInitialDistance = 0;
            });
            PictContentView._FullscreenOverlay = {
              element: tmpOverlay,
              content: tmpContent,
              titleEl: tmpTitleEl,
              state: tmpState,
              open: function open(pSourceEl) {
                var tmpTitle = pSourceEl.getAttribute('data-fullscreen-title') || '';
                tmpTitleEl.textContent = tmpTitle;
                tmpContent.innerHTML = '';
                var tmpKind = pSourceEl.getAttribute('data-fullscreen-source');
                tmpState.currentKind = tmpKind || '';
                var tmpClone;
                if (tmpKind === 'mermaid') {
                  var tmpSvg = pSourceEl.querySelector('svg');
                  if (tmpSvg) {
                    tmpClone = tmpSvg.cloneNode(true);
                    tmpClone.classList.add('pict-fullscreen-mermaid-svg');
                    // Drop mermaid's inline max-width / width / height style so the
                    // fullscreen CSS rule actually controls the size.
                    tmpClone.removeAttribute('style');
                    tmpClone.removeAttribute('width');
                    tmpClone.removeAttribute('height');
                  } else {
                    tmpClone = pSourceEl.cloneNode(true);
                  }
                } else if (tmpKind === 'diagram') {
                  // Inline SVG diagram (bespoke pict-renderer-graph / excalidraw):
                  // clone the <svg> and drop its intrinsic sizing so the fullscreen
                  // stage controls the dimensions -- same approach as mermaid, but
                  // the source element may BE the svg or a wrapper around it.
                  var _tmpSvg = String(pSourceEl.tagName).toLowerCase() === 'svg' ? pSourceEl : pSourceEl.querySelector('svg');
                  if (_tmpSvg) {
                    tmpClone = _tmpSvg.cloneNode(true);
                    tmpClone.classList.add('pict-fullscreen-diagram-svg');
                    tmpClone.removeAttribute('style');
                    tmpClone.removeAttribute('width');
                    tmpClone.removeAttribute('height');
                  } else {
                    tmpClone = pSourceEl.cloneNode(true);
                  }
                } else if (tmpKind === 'image') {
                  tmpClone = pSourceEl.cloneNode(true);
                  tmpClone.classList.add('pict-fullscreen-img');
                } else {
                  tmpClone = pSourceEl.cloneNode(true);
                  tmpClone.classList.add('pict-fullscreen-codewrap');
                }
                tmpContent.appendChild(tmpClone);

                // Hide zoom controls for code blocks (they scroll natively)
                var tmpZoomBtns = tmpOverlay.querySelectorAll('[data-action="zoom-in"], [data-action="zoom-out"], [data-action="zoom-reset"]');
                for (var i = 0; i < tmpZoomBtns.length; i++) {
                  tmpZoomBtns[i].style.display = tmpKind === 'code' ? 'none' : '';
                }
                fResetTransform();
                tmpOverlay.removeAttribute('hidden');
                document.documentElement.style.overflow = 'hidden';
                document.addEventListener('keydown', fKeydown);
              },
              close: fClose
            };
            return PictContentView._FullscreenOverlay;
          }

          /**
           * Open the fullscreen overlay for a tagged source element.
           */
        }, {
          key: "_openFullscreen",
          value: function _openFullscreen(pSourceEl) {
            var tmpOverlay = this._buildFullscreenOverlay();
            tmpOverlay.open(pSourceEl);
          }

          /**
           * Show a loading indicator.
           *
           * @param {string} [pMessage] - Loading message (defaults to 'Loading content...')
           * @param {string} [pContainerID] - The container element ID (defaults to 'Pict-Content-Body')
           */
        }, {
          key: "showLoading",
          value: function showLoading(pMessage, pContainerID) {
            var tmpContainerID = pContainerID || 'Pict-Content-Body';
            var tmpMessage = pMessage || 'Loading content...';
            this.pict.ContentAssignment.assignContent('#' + tmpContainerID, '<div class="pict-content-loading">' + tmpMessage + '</div>');
          }
        }]);
      }(libPictView);
      module.exports = PictContentView;
      module.exports.default_configuration = _ViewConfiguration;
    }, {
      "../Pict-Content-CSS.js": 16,
      "pict-provider-theme/source/Theme-Diagram-Adapter.js": 7,
      "pict-view": 15
    }],
    20: [function (require, module, exports) {
      // Pict-Section-Content — Demo view
      //
      // A thin renderable wrapper around the canonical Pict-View-Content view.
      // The base view is "lazy" — it shows a Loading placeholder until its host
      // application explicitly calls `displayContent(parsedHTML)`.  That works
      // fine when an application has its own page logic, but it's awkward for
      // the docuserve playground (which doesn't know anything about
      // markdown / parseMarkdown).
      //
      // This demo view bridges that gap:
      //   1. Ensures the PictContentProvider is registered with `pict`.
      //   2. Reads markdown text from an AppData address (configurable via
      //      `MarkdownDataAddress`, e.g. "AppData.ContentDemo.Markdown").
      //   3. On every render, parses the markdown via the provider and calls
      //      the parent view's `displayContent` to push HTML into the DOM.
      //
      // Host applications that need anything more elaborate (navigation,
      // multiple documents, link resolvers) should keep using the canonical
      // Pict-View-Content view directly.  This demo view exists for the
      // playground and other "just render this markdown blob" surfaces.

      var libPictViewContent = require('./Pict-View-Content.js');
      var libPictContentProvider = require('../providers/Pict-Provider-Content.js');
      var _ViewConfiguration = {
        ViewIdentifier: "Pict-Content-Demo",
        DefaultRenderable: "Pict-Content-Display",
        DefaultDestinationAddress: "#Pict-Content-Container",
        // Where to read the markdown source from. Resolved against the
        // pict instance with simple dot-walking — "AppData.X.Y.Z".
        MarkdownDataAddress: "AppData.ContentDemo.Markdown",
        // AutoRender on, so the playground's wrapper just instantiates the
        // view and the markdown shows up on next tick.
        AutoRender: true,
        // Inherit CSS / Templates / Renderables from the base view so we
        // render into the same #Pict-Content-Container with the same shell.
        CSS: libPictViewContent.default_configuration.CSS,
        Templates: libPictViewContent.default_configuration.Templates,
        Renderables: libPictViewContent.default_configuration.Renderables
      };
      var PictContentDemoView = /*#__PURE__*/function (_libPictViewContent) {
        function PictContentDemoView(pFable, pOptions, pServiceHash) {
          var _this24;
          _classCallCheck(this, PictContentDemoView);
          _this24 = _callSuper(this, PictContentDemoView, [pFable, pOptions, pServiceHash]);

          // Ensure the content provider is registered. Use a stable hash
          // so repeat instantiation is a no-op.
          var tmpProviderHash = 'Pict-Content';
          if (!_this24.pict.providers[tmpProviderHash]) {
            _this24.pict.addProvider(tmpProviderHash, libPictContentProvider.default_configuration, libPictContentProvider);
          }
          return _this24;
        }

        /**
         * Walk a dotted address ("AppData.X.Y.Z") against the pict instance
         * and return the value, or null if any segment is missing.
         */
        _inherits(PictContentDemoView, _libPictViewContent);
        return _createClass(PictContentDemoView, [{
          key: "_readMarkdownFromAddress",
          value: function _readMarkdownFromAddress() {
            var tmpAddress = this.options.MarkdownDataAddress;
            if (!tmpAddress || typeof tmpAddress !== 'string') {
              return null;
            }
            var tmpParts = tmpAddress.split('.');
            var tmpCurrent = this.pict;
            for (var i = 0; i < tmpParts.length; i++) {
              if (tmpCurrent === null || tmpCurrent === undefined) {
                return null;
              }
              tmpCurrent = tmpCurrent[tmpParts[i]];
            }
            return typeof tmpCurrent === 'string' ? tmpCurrent : null;
          }
        }, {
          key: "onAfterRender",
          value: function onAfterRender(pRenderable, pAddress, pRecord, pContent) {
            // Pull markdown from AppData and push parsed HTML through the
            // parent view's pipeline (which also wires Mermaid / KaTeX /
            // fullscreen viewers).
            var tmpMarkdown = this._readMarkdownFromAddress();
            var tmpProvider = this.pict.providers['Pict-Content'];
            if (tmpProvider && typeof tmpMarkdown === 'string') {
              var tmpHTML = tmpProvider.parseMarkdown(tmpMarkdown);
              this.displayContent(tmpHTML);
            }
            this.pict.CSSMap.injectCSS();
            return _superPropGet(PictContentDemoView, "onAfterRender", this, 3)([pRenderable, pAddress, pRecord, pContent]);
          }
        }]);
      }(libPictViewContent);
      module.exports = PictContentDemoView;
      module.exports.default_configuration = _ViewConfiguration;
    }, {
      "../providers/Pict-Provider-Content.js": 18,
      "./Pict-View-Content.js": 19
    }],
    21: [function (require, module, exports) {
      var libPictApplication = require('pict-application');
      var libPictView = require('pict-view');

      // The fileview orchestrator, plus the real delegated child sections (see the gallery example — nothing is faked).
      var libFileview = require('../../source/Pict-Section-Fileview.js');
      var libPictSectionCode = require('../../../pict-section-code/source/Pict-Section-Code.js');
      var libPictSectionContent = require('../../../pict-section-content/source/Pict-Section-Content.js');
      var libPictSectionImage = require('../../../pict-section-image/source/Pict-Section-Image.js');
      var _Delegates = {
        CodeSectionClass: libPictSectionCode,
        ContentProviderClass: libPictSectionContent.PictContentProvider,
        ImageSectionClass: libPictSectionImage
      };

      // The file list the sidebar shows. Each entry is a Sluice-StoredFile-shaped record (ProbeStrategy 'none' → the
      // viewer resolves the lens straight from the record, no network probe). setFile() accepts the whole record and
      // ignores the display-only extras (Index / Selected / Caption). Two JPEGs and a PNG sit next to each other on
      // purpose: clicking from one image to the next is a SAME-KIND re-point, so the viewer re-feeds the live
      // pict-section-image child via update() instead of tearing it down — while clicking from an image to code is a
      // TYPE switch, so the image child is destroyed and the code child mounted.
      var _Files = [{
        Index: 0,
        Selected: true,
        Name: 'readme.txt',
        Caption: 'text',
        URL: './readme.txt',
        Extension: 'txt',
        MIMEType: 'text/plain',
        Size: 824,
        ProbeStrategy: 'none'
      }, {
        Index: 1,
        Selected: false,
        Name: 'greeter-service.js',
        Caption: 'code',
        URL: './greeter-service.js',
        Extension: 'js',
        MIMEType: 'application/javascript',
        Size: 868,
        ProbeStrategy: 'none'
      }, {
        Index: 2,
        Selected: false,
        Name: 'notes.md',
        Caption: 'markdown',
        URL: './notes.md',
        Extension: 'md',
        MIMEType: 'text/markdown',
        Size: 1224,
        ProbeStrategy: 'none'
      }, {
        Index: 3,
        Selected: false,
        Name: 'landscape.jpg',
        Caption: 'image',
        URL: './landscape.jpg',
        Extension: 'jpg',
        MIMEType: 'image/jpeg',
        Size: 39871,
        ProbeStrategy: 'none'
      }, {
        Index: 4,
        Selected: false,
        Name: 'portrait.png',
        Caption: 'image',
        URL: './portrait.png',
        Extension: 'png',
        MIMEType: 'image/png',
        Size: 5677793,
        ProbeStrategy: 'none'
      }, {
        Index: 5,
        Selected: false,
        Name: 'panorama.jpg',
        Caption: 'image',
        URL: './panorama.jpg',
        Extension: 'jpg',
        MIMEType: 'image/jpeg',
        Size: 61443,
        ProbeStrategy: 'none'
      }, {
        Index: 6,
        Selected: false,
        Name: 'diagram.svg',
        Caption: 'vector',
        URL: './diagram.svg',
        Extension: 'svg',
        MIMEType: 'image/svg+xml',
        Size: 2062,
        ProbeStrategy: 'none'
      }, {
        Index: 7,
        Selected: false,
        Name: 'dataset.zip',
        Caption: 'binary',
        URL: './dataset.zip',
        Extension: 'zip',
        MIMEType: 'application/zip',
        Size: 2115,
        ProbeStrategy: 'none'
      }];

      // Friendly lens names for the status line (the fileview AppData slot exposes the resolved renderer Hash).
      var _LensLabels = {
        'Fileview-Renderer-Text': 'Text lens (self-contained <pre>)',
        'Fileview-Renderer-Code': 'Code lens (pict-section-code)',
        'Fileview-Renderer-Markdown': 'Markdown lens (pict-section-content)',
        'Fileview-Renderer-Image': 'Image lens (pict-section-image)',
        'Fileview-Renderer-ImageBasic': 'Basic image lens (<img>)',
        'Fileview-Renderer-DownloadCard': 'Download card (no inline lens)'
      };
      var _FileListConfig = {
        "ViewIdentifier": "FileList",
        "DefaultRenderable": "FileList-Wrap",
        "DefaultDestinationAddress": "#FileList-Pane",
        "AutoRender": false,
        "CSS": /*css*/"\n\t\t.filelist { display: flex; flex-direction: column; gap: 0.2rem; }\n\t\t.filelist-title { font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #8a7a63; padding: 0.2rem 0.6rem 0.5rem; }\n\t\t.filelist-row { display: flex; align-items: baseline; justify-content: space-between; gap: 0.5rem; padding: 0.5rem 0.65rem; border-radius: 7px; cursor: pointer; border: 1px solid transparent; }\n\t\t.filelist-row:hover { background: #F3E6C8; }\n\t\t.filelist-row-selected, .filelist-row-selected:hover { background: #264653; border-color: #264653; }\n\t\t.filelist-row-selected .filelist-row-name { color: #FAEDCD; }\n\t\t.filelist-row-selected .filelist-row-cap { color: #D4A373; }\n\t\t.filelist-row-name { font-size: 0.86rem; font-weight: 600; color: #264653; font-family: 'SFMono-Regular', Menlo, Consolas, monospace; }\n\t\t.filelist-row-cap { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.05em; color: #8a7a63; }\n\t",
        "Templates": [{
          "Hash": "FileList-Container",
          "Template": /*html*/"\n<div class=\"filelist\">\n\t<div class=\"filelist-title\">Files</div>\n\t{~TS:FileBrowser-Row:AppData.FileBrowser.Files~}\n</div>"
        }, {
          "Hash": "FileBrowser-Row",
          "Template": /*html*/"\n<div class=\"filelist-row {~NE:Record.Selected^filelist-row-selected~}\" onclick=\"_Pict.views.FileList.select({~D:Record.Index~})\">\n\t<span class=\"filelist-row-name\">{~D:Record.Name~}</span>\n\t<span class=\"filelist-row-cap\">{~D:Record.Caption~}</span>\n</div>"
        }],
        "Renderables": [{
          "RenderableHash": "FileList-Wrap",
          "TemplateHash": "FileList-Container",
          "DestinationAddress": "#FileList-Pane",
          "RenderMethod": "replace"
        }]
      };
      var FileListView = /*#__PURE__*/function (_libPictView2) {
        function FileListView() {
          _classCallCheck(this, FileListView);
          return _callSuper(this, FileListView, arguments);
        }
        _inherits(FileListView, _libPictView2);
        return _createClass(FileListView, [{
          key: "onBeforeRender",
          value: function onBeforeRender(pRenderable) {
            this.pict.AppData.FileBrowser = this.pict.AppData.FileBrowser || {};
            this.pict.AppData.FileBrowser.Files = _Files;
            return _superPropGet(FileListView, "onBeforeRender", this, 3)([pRenderable]);
          }

          // Point the single shared viewer at the clicked file, update the selection highlight + status line, re-render.
        }, {
          key: "select",
          value: function select(pIndex) {
            var tmpFile = _Files[pIndex];
            if (!tmpFile) {
              return;
            }
            for (var i = 0; i < _Files.length; i++) {
              _Files[i].Selected = i === pIndex;
            }
            var tmpProvider = this.pict.providers['Viewer'];
            if (tmpProvider) {
              tmpProvider.setFile(tmpFile);
            }

            // The provider records the resolved renderer Hash synchronously after mount; surface it as a friendly label.
            var tmpResolved = this.pict.AppData['Viewer'] && this.pict.AppData['Viewer'].ResolvedRendererHash || '';
            this.pict.AppData.FileBrowser.ActiveLens = _LensLabels[tmpResolved] || tmpResolved || '';
            this.pict.ContentAssignment.assignContent('#Viewer-Status', this.pict.AppData.FileBrowser.ActiveLens);
            this.render();
          }
        }, {
          key: "onAfterRender",
          value: function onAfterRender(pRenderable) {
            this.pict.CSSMap.injectCSS();
            return _superPropGet(FileListView, "onAfterRender", this, 3)([pRenderable]);
          }
        }]);
      }(libPictView);
      var FileviewBrowserExampleApplication = /*#__PURE__*/function (_libPictApplication) {
        function FileviewBrowserExampleApplication(pFable, pOptions, pServiceHash) {
          var _this25;
          _classCallCheck(this, FileviewBrowserExampleApplication);
          _this25 = _callSuper(this, FileviewBrowserExampleApplication, [pFable, pOptions, pServiceHash]);

          // One viewer, pointed at the first file on boot.
          libFileview.createFileview(_this25.pict, Object.assign({
            Identifier: 'Viewer',
            DestinationAddress: '#Viewer-Pane',
            File: _Files[0]
          }, _Delegates));
          _this25.pict.addView('FileList', _FileListConfig, FileListView);
          return _this25;
        }
        _inherits(FileviewBrowserExampleApplication, _libPictApplication);
        return _createClass(FileviewBrowserExampleApplication, [{
          key: "onAfterInitialize",
          value: function onAfterInitialize() {
            _superPropGet(FileviewBrowserExampleApplication, "onAfterInitialize", this, 3)([]);
            if (this.pict.views['Viewer']) {
              this.pict.views['Viewer'].render();
            }
            if (this.pict.views['FileList']) {
              this.pict.views['FileList'].render();
            }

            // Seed the status line with the boot file's lens.
            var tmpResolved = this.pict.AppData['Viewer'] && this.pict.AppData['Viewer'].ResolvedRendererHash || '';
            this.pict.ContentAssignment.assignContent('#Viewer-Status', _LensLabels[tmpResolved] || tmpResolved || '');
          }
        }]);
      }(libPictApplication);
      module.exports = FileviewBrowserExampleApplication;
      module.exports.default_configuration = {
        "Name": "Fileview Browser Example",
        "Hash": "FileviewBrowserExample",
        "pict_configuration": {
          "Product": "FileviewBrowser-Example"
        }
      };
    }, {
      "../../../pict-section-code/source/Pict-Section-Code.js": 3,
      "../../../pict-section-content/source/Pict-Section-Content.js": 17,
      "../../../pict-section-image/source/Pict-Section-Image.js": 37,
      "../../source/Pict-Section-Fileview.js": 33,
      "pict-application": 25,
      "pict-view": 29
    }],
    22: [function (require, module, exports) {
      arguments[4][5][0].apply(exports, arguments);
    }, {
      "dup": 5
    }],
    23: [function (require, module, exports) {
      arguments[4][6][0].apply(exports, arguments);
    }, {
      "../package.json": 22,
      "dup": 6
    }],
    24: [function (require, module, exports) {
      module.exports = {
        "name": "pict-application",
        "version": "1.0.34",
        "description": "Application base class for a pict view-based application",
        "main": "source/Pict-Application.js",
        "scripts": {
          "test": "npx quack test",
          "start": "node source/Pict-Application.js",
          "coverage": "npx quack coverage",
          "build": "npx quack build",
          "docker-dev-build": "docker build ./ -f Dockerfile_LUXURYCode -t pict-application-image:local",
          "docker-dev-run": "docker run -it -d --name pict-application-dev -p 30001:8080 -p 38086:8086 -v \"$PWD/.config:/home/coder/.config\"  -v \"$PWD:/home/coder/pict-application\" -u \"$(id -u):$(id -g)\" -e \"DOCKER_USER=$USER\" pict-application-image:local",
          "docker-dev-shell": "docker exec -it pict-application-dev /bin/bash",
          "tests": "npx quack test -g",
          "lint": "eslint source/**",
          "types": "tsc -p ."
        },
        "types": "types/source/Pict-Application.d.ts",
        "repository": {
          "type": "git",
          "url": "git+https://github.com/stevenvelozo/pict-application.git"
        },
        "author": "steven velozo <steven@velozo.com>",
        "license": "MIT",
        "bugs": {
          "url": "https://github.com/stevenvelozo/pict-application/issues"
        },
        "homepage": "https://github.com/stevenvelozo/pict-application#readme",
        "devDependencies": {
          "@eslint/js": "^9.28.0",
          "browser-env": "^3.3.0",
          "eslint": "^9.28.0",
          "pict": "^1.0.348",
          "pict-docuserve": "^0.1.5",
          "pict-provider": "^1.0.10",
          "pict-view": "^1.0.66",
          "quackage": "^1.1.0",
          "typescript": "^5.9.3"
        },
        "mocha": {
          "diff": true,
          "extension": ["js"],
          "package": "./package.json",
          "reporter": "spec",
          "slow": "75",
          "timeout": "5000",
          "ui": "tdd",
          "watch-files": ["source/**/*.js", "test/**/*.js"],
          "watch-ignore": ["lib/vendor"]
        },
        "dependencies": {
          "fable-serviceproviderbase": "^3.0.19"
        }
      };
    }, {}],
    25: [function (require, module, exports) {
      var libFableServiceBase = require('fable-serviceproviderbase');
      var libPackage = require('../package.json');
      var defaultPictSettings = {
        Name: 'DefaultPictApplication',
        // The main "viewport" is the view that is used to host our application
        MainViewportViewIdentifier: 'Default-View',
        MainViewportRenderableHash: false,
        MainViewportDestinationAddress: false,
        MainViewportDefaultDataAddress: false,
        // Whether or not we should automatically render the main viewport and other autorender views after we initialize the pict application
        AutoSolveAfterInitialize: true,
        AutoRenderMainViewportViewAfterInitialize: true,
        AutoRenderViewsAfterInitialize: false,
        AutoLoginAfterInitialize: false,
        AutoLoadDataAfterLogin: false,
        ConfigurationOnlyViews: [],
        Manifests: {},
        // The prefix to prepend on all template destination hashes
        IdentifierAddressPrefix: 'PICT-'
      };

      /**
       * Base class for pict applications.
       */
      var PictApplication = /*#__PURE__*/function (_libFableServiceBase3) {
        /**
         * @param {import('fable')} pFable
         * @param {Record<string, any>} [pOptions]
         * @param {string} [pServiceHash]
         */
        function PictApplication(pFable, pOptions, pServiceHash) {
          var _this26;
          _classCallCheck(this, PictApplication);
          var tmpCarryOverConfiguration = _typeof(pFable.settings.PictApplicationConfiguration) === 'object' ? pFable.settings.PictApplicationConfiguration : {};
          var tmpOptions = Object.assign({}, JSON.parse(JSON.stringify(defaultPictSettings)), tmpCarryOverConfiguration, pOptions);
          _this26 = _callSuper(this, PictApplication, [pFable, tmpOptions, pServiceHash]);

          /** @type {any} */
          _this26.options;
          /** @type {any} */
          _this26.log;
          /** @type {import('pict') & import('fable')} */
          _this26.fable;
          /** @type {string} */
          _this26.UUID;
          /** @type {string} */
          _this26.Hash;
          /**
           * @type {{ [key: string]: any }}
           */
          _this26.servicesMap;
          _this26.serviceType = 'PictApplication';
          /** @type {Record<string, any>} */
          _this26._Package = libPackage;

          // Convenience and consistency naming
          _this26.pict = _this26.fable;
          // Wire in the essential Pict state
          /** @type {Record<string, any>} */
          _this26.AppData = _this26.fable.AppData;
          /** @type {Record<string, any>} */
          _this26.Bundle = _this26.fable.Bundle;

          /** @type {number} */
          _this26.initializeTimestamp;
          /** @type {number} */
          _this26.lastSolvedTimestamp;
          /** @type {number} */
          _this26.lastLoginTimestamp;
          /** @type {number} */
          _this26.lastMarshalFromViewsTimestamp;
          /** @type {number} */
          _this26.lastMarshalToViewsTimestamp;
          /** @type {number} */
          _this26.lastAutoRenderTimestamp;
          /** @type {number} */
          _this26.lastLoadDataTimestamp;

          // Load all the manifests for the application
          var tmpManifestKeys = Object.keys(_this26.options.Manifests);
          if (tmpManifestKeys.length > 0) {
            for (var i = 0; i < tmpManifestKeys.length; i++) {
              // Load each manifest
              var tmpManifestKey = tmpManifestKeys[i];
              _this26.fable.instantiateServiceProvider('Manifest', _this26.options.Manifests[tmpManifestKey], tmpManifestKey);
            }
          }
          return _this26;
        }

        /* -------------------------------------------------------------------------- */
        /*                     Code Section: Solve All Views                          */
        /* -------------------------------------------------------------------------- */
        /**
         * @return {boolean}
         */
        _inherits(PictApplication, _libFableServiceBase3);
        return _createClass(PictApplication, [{
          key: "onPreSolve",
          value: function onPreSolve() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onPreSolve:"));
            }
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onPreSolveAsync",
          value: function onPreSolveAsync(fCallback) {
            this.onPreSolve();
            return fCallback();
          }

          /**
           * @return {boolean}
           */
        }, {
          key: "onBeforeSolve",
          value: function onBeforeSolve() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onBeforeSolve:"));
            }
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onBeforeSolveAsync",
          value: function onBeforeSolveAsync(fCallback) {
            this.onBeforeSolve();
            return fCallback();
          }

          /**
           * @return {boolean}
           */
        }, {
          key: "onSolve",
          value: function onSolve() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onSolve:"));
            }
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onSolveAsync",
          value: function onSolveAsync(fCallback) {
            this.onSolve();
            return fCallback();
          }

          /**
           * @return {boolean}
           */
        }, {
          key: "solve",
          value: function solve() {
            if (this.pict.LogNoisiness > 2) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " executing solve() function..."));
            }

            // Walk through any loaded providers and solve them as well.
            var tmpLoadedProviders = Object.keys(this.pict.providers);
            var tmpProvidersToSolve = [];
            for (var i = 0; i < tmpLoadedProviders.length; i++) {
              var tmpProvider = this.pict.providers[tmpLoadedProviders[i]];
              if (tmpProvider.options.AutoSolveWithApp) {
                tmpProvidersToSolve.push(tmpProvider);
              }
            }
            // Sort the providers by their priority (if they are all priority 0, it will end up being add order due to JSON Object Property Key order stuff)
            tmpProvidersToSolve.sort(function (a, b) {
              return a.options.AutoSolveOrdinal - b.options.AutoSolveOrdinal;
            });
            for (var _i6 = 0; _i6 < tmpProvidersToSolve.length; _i6++) {
              tmpProvidersToSolve[_i6].solve(tmpProvidersToSolve[_i6]);
            }
            this.onBeforeSolve();
            // Now walk through any loaded views and initialize them as well.
            var tmpLoadedViews = Object.keys(this.pict.views);
            var tmpViewsToSolve = [];
            for (var _i7 = 0; _i7 < tmpLoadedViews.length; _i7++) {
              var tmpView = this.pict.views[tmpLoadedViews[_i7]];
              if (tmpView.options.AutoInitialize) {
                tmpViewsToSolve.push(tmpView);
              }
            }
            // Sort the views by their priority (if they are all priority 0, it will end up being add order due to JSON Object Property Key order stuff)
            tmpViewsToSolve.sort(function (a, b) {
              return a.options.AutoInitializeOrdinal - b.options.AutoInitializeOrdinal;
            });
            for (var _i8 = 0; _i8 < tmpViewsToSolve.length; _i8++) {
              tmpViewsToSolve[_i8].solve();
            }
            this.onSolve();
            this.onAfterSolve();
            this.lastSolvedTimestamp = this.fable.log.getTimeStamp();
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "solveAsync",
          value: function solveAsync(fCallback) {
            var _this27 = this;
            var tmpAnticipate = this.fable.instantiateServiceProviderWithoutRegistration('Anticipate');
            tmpAnticipate.anticipate(this.onBeforeSolveAsync.bind(this));

            // Allow the callback to be passed in as the last parameter no matter what
            var tmpCallback = typeof fCallback === 'function' ? fCallback : false;
            if (!tmpCallback) {
              this.log.warn("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " solveAsync was called without a valid callback.  A callback will be generated but this could lead to race conditions."));
              tmpCallback = function tmpCallback(pError) {
                if (pError) {
                  _this27.log.error("PictApp [".concat(_this27.UUID, "]::[").concat(_this27.Hash, "] ").concat(_this27.options.Name, " solveAsync Auto Callback Error: ").concat(pError), pError);
                }
              };
            }
            // Walk through any loaded providers and solve them as well.
            var tmpLoadedProviders = Object.keys(this.pict.providers);
            var tmpProvidersToSolve = [];
            for (var i = 0; i < tmpLoadedProviders.length; i++) {
              var tmpProvider = this.pict.providers[tmpLoadedProviders[i]];
              if (tmpProvider.options.AutoSolveWithApp) {
                tmpProvidersToSolve.push(tmpProvider);
              }
            }
            // Sort the providers by their priority (if they are all priority 0, it will end up being add order due to JSON Object Property Key order stuff)
            tmpProvidersToSolve.sort(function (a, b) {
              return a.options.AutoSolveOrdinal - b.options.AutoSolveOrdinal;
            });
            for (var _i9 = 0; _i9 < tmpProvidersToSolve.length; _i9++) {
              tmpAnticipate.anticipate(tmpProvidersToSolve[_i9].solveAsync.bind(tmpProvidersToSolve[_i9]));
            }

            // Walk through any loaded views and solve them as well.
            var tmpLoadedViews = Object.keys(this.pict.views);
            var tmpViewsToSolve = [];
            for (var _i0 = 0; _i0 < tmpLoadedViews.length; _i0++) {
              var tmpView = this.pict.views[tmpLoadedViews[_i0]];
              if (tmpView.options.AutoSolveWithApp) {
                tmpViewsToSolve.push(tmpView);
              }
            }
            // Sort the views by their priority (if they are all priority 0, it will end up being add order due to JSON Object Property Key order stuff)
            tmpViewsToSolve.sort(function (a, b) {
              return a.options.AutoSolveOrdinal - b.options.AutoSolveOrdinal;
            });
            for (var _i1 = 0; _i1 < tmpViewsToSolve.length; _i1++) {
              tmpAnticipate.anticipate(tmpViewsToSolve[_i1].solveAsync.bind(tmpViewsToSolve[_i1]));
            }
            tmpAnticipate.anticipate(this.onSolveAsync.bind(this));
            tmpAnticipate.anticipate(this.onAfterSolveAsync.bind(this));
            tmpAnticipate.wait(function (pError) {
              if (_this27.pict.LogNoisiness > 2) {
                _this27.log.trace("PictApp [".concat(_this27.UUID, "]::[").concat(_this27.Hash, "] ").concat(_this27.options.Name, " solveAsync() complete."));
              }
              _this27.lastSolvedTimestamp = _this27.fable.log.getTimeStamp();
              return tmpCallback(pError);
            });
          }

          /**
           * @return {boolean}
           */
        }, {
          key: "onAfterSolve",
          value: function onAfterSolve() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onAfterSolve:"));
            }
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onAfterSolveAsync",
          value: function onAfterSolveAsync(fCallback) {
            this.onAfterSolve();
            return fCallback();
          }

          /* -------------------------------------------------------------------------- */
          /*                     Code Section: Application Login                        */
          /* -------------------------------------------------------------------------- */

          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onBeforeLoginAsync",
          value: function onBeforeLoginAsync(fCallback) {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onBeforeLoginAsync:"));
            }
            return fCallback();
          }

          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onLoginAsync",
          value: function onLoginAsync(fCallback) {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onLoginAsync:"));
            }
            return fCallback();
          }

          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "loginAsync",
          value: function loginAsync(fCallback) {
            var _this28 = this;
            var tmpAnticipate = this.fable.instantiateServiceProviderWithoutRegistration('Anticipate');
            var tmpCallback = fCallback;
            if (typeof tmpCallback !== 'function') {
              this.log.warn("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " loginAsync was called without a valid callback.  A callback will be generated but this could lead to race conditions."));
              tmpCallback = function tmpCallback(pError) {
                if (pError) {
                  _this28.log.error("PictApp [".concat(_this28.UUID, "]::[").concat(_this28.Hash, "] ").concat(_this28.options.Name, " loginAsync Auto Callback Error: ").concat(pError), pError);
                }
              };
            }
            tmpAnticipate.anticipate(this.onBeforeLoginAsync.bind(this));
            tmpAnticipate.anticipate(this.onLoginAsync.bind(this));
            tmpAnticipate.anticipate(this.onAfterLoginAsync.bind(this));

            // check and see if we should automatically trigger a data load
            if (this.options.AutoLoadDataAfterLogin) {
              tmpAnticipate.anticipate(function (fNext) {
                if (!_this28.isLoggedIn()) {
                  return fNext();
                }
                if (_this28.pict.LogNoisiness > 1) {
                  _this28.log.trace("PictApp [".concat(_this28.UUID, "]::[").concat(_this28.Hash, "] ").concat(_this28.options.Name, " auto loading data after login..."));
                }
                //TODO: should data load errors funnel here? this creates a weird coupling between login and data load callbacks
                _this28.loadDataAsync(function (pError) {
                  fNext(pError);
                });
              });
            }
            tmpAnticipate.wait(function (pError) {
              if (_this28.pict.LogNoisiness > 2) {
                _this28.log.trace("PictApp [".concat(_this28.UUID, "]::[").concat(_this28.Hash, "] ").concat(_this28.options.Name, " loginAsync() complete."));
              }
              _this28.lastLoginTimestamp = _this28.fable.log.getTimeStamp();
              return tmpCallback(pError);
            });
          }

          /**
           * Check if the application state is logged in. Defaults to true. Override this method in your application based on login requirements.
           *
           * @return {boolean}
           */
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return true;
          }

          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onAfterLoginAsync",
          value: function onAfterLoginAsync(fCallback) {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onAfterLoginAsync:"));
            }
            return fCallback();
          }

          /* -------------------------------------------------------------------------- */
          /*                     Code Section: Application LoadData                     */
          /* -------------------------------------------------------------------------- */

          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onBeforeLoadDataAsync",
          value: function onBeforeLoadDataAsync(fCallback) {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onBeforeLoadDataAsync:"));
            }
            return fCallback();
          }

          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onLoadDataAsync",
          value: function onLoadDataAsync(fCallback) {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onLoadDataAsync:"));
            }
            return fCallback();
          }

          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "loadDataAsync",
          value: function loadDataAsync(fCallback) {
            var _this29 = this;
            var tmpAnticipate = this.fable.instantiateServiceProviderWithoutRegistration('Anticipate');
            var tmpCallback = fCallback;
            if (typeof tmpCallback !== 'function') {
              this.log.warn("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " loadDataAsync was called without a valid callback.  A callback will be generated but this could lead to race conditions."));
              tmpCallback = function tmpCallback(pError) {
                if (pError) {
                  _this29.log.error("PictApp [".concat(_this29.UUID, "]::[").concat(_this29.Hash, "] ").concat(_this29.options.Name, " loadDataAsync Auto Callback Error: ").concat(pError), pError);
                }
              };
            }
            tmpAnticipate.anticipate(this.onBeforeLoadDataAsync.bind(this));

            // Walk through any loaded providers and load their data as well.
            var tmpLoadedProviders = Object.keys(this.pict.providers);
            var tmpProvidersToLoadData = [];
            for (var i = 0; i < tmpLoadedProviders.length; i++) {
              var tmpProvider = this.pict.providers[tmpLoadedProviders[i]];
              if (tmpProvider.options.AutoLoadDataWithApp) {
                tmpProvidersToLoadData.push(tmpProvider);
              }
            }
            // Sort the providers by their priority (if they are all priority 0, it will end up being add order due to JSON Object Property Key order stuff)
            tmpProvidersToLoadData.sort(function (a, b) {
              return a.options.AutoLoadDataOrdinal - b.options.AutoLoadDataOrdinal;
            });
            for (var _i10 = 0, _tmpProvidersToLoadDa = tmpProvidersToLoadData; _i10 < _tmpProvidersToLoadDa.length; _i10++) {
              var _tmpProvider = _tmpProvidersToLoadDa[_i10];
              tmpAnticipate.anticipate(_tmpProvider.onBeforeLoadDataAsync.bind(_tmpProvider));
            }
            tmpAnticipate.anticipate(this.onLoadDataAsync.bind(this));

            //TODO: think about ways to parallelize these
            for (var _i11 = 0, _tmpProvidersToLoadDa2 = tmpProvidersToLoadData; _i11 < _tmpProvidersToLoadDa2.length; _i11++) {
              var _tmpProvider2 = _tmpProvidersToLoadDa2[_i11];
              tmpAnticipate.anticipate(_tmpProvider2.onLoadDataAsync.bind(_tmpProvider2));
            }
            tmpAnticipate.anticipate(this.onAfterLoadDataAsync.bind(this));
            for (var _i12 = 0, _tmpProvidersToLoadDa3 = tmpProvidersToLoadData; _i12 < _tmpProvidersToLoadDa3.length; _i12++) {
              var _tmpProvider3 = _tmpProvidersToLoadDa3[_i12];
              tmpAnticipate.anticipate(_tmpProvider3.onAfterLoadDataAsync.bind(_tmpProvider3));
            }
            tmpAnticipate.wait(/** @param {Error} [pError] */
            function (pError) {
              if (_this29.pict.LogNoisiness > 2) {
                _this29.log.trace("PictApp [".concat(_this29.UUID, "]::[").concat(_this29.Hash, "] ").concat(_this29.options.Name, " loadDataAsync() complete."));
              }
              _this29.lastLoadDataTimestamp = _this29.fable.log.getTimeStamp();
              return tmpCallback(pError);
            });
          }

          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onAfterLoadDataAsync",
          value: function onAfterLoadDataAsync(fCallback) {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onAfterLoadDataAsync:"));
            }
            return fCallback();
          }

          /* -------------------------------------------------------------------------- */
          /*                     Code Section: Application SaveData                     */
          /* -------------------------------------------------------------------------- */

          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onBeforeSaveDataAsync",
          value: function onBeforeSaveDataAsync(fCallback) {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onBeforeSaveDataAsync:"));
            }
            return fCallback();
          }

          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onSaveDataAsync",
          value: function onSaveDataAsync(fCallback) {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onSaveDataAsync:"));
            }
            return fCallback();
          }

          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "saveDataAsync",
          value: function saveDataAsync(fCallback) {
            var _this30 = this;
            var tmpAnticipate = this.fable.instantiateServiceProviderWithoutRegistration('Anticipate');
            var tmpCallback = fCallback;
            if (typeof tmpCallback !== 'function') {
              this.log.warn("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " saveDataAsync was called without a valid callback.  A callback will be generated but this could lead to race conditions."));
              tmpCallback = function tmpCallback(pError) {
                if (pError) {
                  _this30.log.error("PictApp [".concat(_this30.UUID, "]::[").concat(_this30.Hash, "] ").concat(_this30.options.Name, " saveDataAsync Auto Callback Error: ").concat(pError), pError);
                }
              };
            }
            tmpAnticipate.anticipate(this.onBeforeSaveDataAsync.bind(this));

            // Walk through any loaded providers and load their data as well.
            var tmpLoadedProviders = Object.keys(this.pict.providers);
            var tmpProvidersToSaveData = [];
            for (var i = 0; i < tmpLoadedProviders.length; i++) {
              var tmpProvider = this.pict.providers[tmpLoadedProviders[i]];
              if (tmpProvider.options.AutoSaveDataWithApp) {
                tmpProvidersToSaveData.push(tmpProvider);
              }
            }
            // Sort the providers by their priority (if they are all priority 0, it will end up being add order due to JSON Object Property Key order stuff)
            tmpProvidersToSaveData.sort(function (a, b) {
              return a.options.AutoSaveDataOrdinal - b.options.AutoSaveDataOrdinal;
            });
            for (var _i13 = 0, _tmpProvidersToSaveDa = tmpProvidersToSaveData; _i13 < _tmpProvidersToSaveDa.length; _i13++) {
              var _tmpProvider4 = _tmpProvidersToSaveDa[_i13];
              tmpAnticipate.anticipate(_tmpProvider4.onBeforeSaveDataAsync.bind(_tmpProvider4));
            }
            tmpAnticipate.anticipate(this.onSaveDataAsync.bind(this));

            //TODO: think about ways to parallelize these
            for (var _i14 = 0, _tmpProvidersToSaveDa2 = tmpProvidersToSaveData; _i14 < _tmpProvidersToSaveDa2.length; _i14++) {
              var _tmpProvider5 = _tmpProvidersToSaveDa2[_i14];
              tmpAnticipate.anticipate(_tmpProvider5.onSaveDataAsync.bind(_tmpProvider5));
            }
            tmpAnticipate.anticipate(this.onAfterSaveDataAsync.bind(this));
            for (var _i15 = 0, _tmpProvidersToSaveDa3 = tmpProvidersToSaveData; _i15 < _tmpProvidersToSaveDa3.length; _i15++) {
              var _tmpProvider6 = _tmpProvidersToSaveDa3[_i15];
              tmpAnticipate.anticipate(_tmpProvider6.onAfterSaveDataAsync.bind(_tmpProvider6));
            }
            tmpAnticipate.wait(/** @param {Error} [pError] */
            function (pError) {
              if (_this30.pict.LogNoisiness > 2) {
                _this30.log.trace("PictApp [".concat(_this30.UUID, "]::[").concat(_this30.Hash, "] ").concat(_this30.options.Name, " saveDataAsync() complete."));
              }
              _this30.lastSaveDataTimestamp = _this30.fable.log.getTimeStamp();
              return tmpCallback(pError);
            });
          }

          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onAfterSaveDataAsync",
          value: function onAfterSaveDataAsync(fCallback) {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onAfterSaveDataAsync:"));
            }
            return fCallback();
          }

          /* -------------------------------------------------------------------------- */
          /*                     Code Section: Initialize Application                   */
          /* -------------------------------------------------------------------------- */
          /**
           * @return {boolean}
           */
        }, {
          key: "onBeforeInitialize",
          value: function onBeforeInitialize() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onBeforeInitialize:"));
            }
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onBeforeInitializeAsync",
          value: function onBeforeInitializeAsync(fCallback) {
            this.onBeforeInitialize();
            return fCallback();
          }

          /**
           * @return {boolean}
           */
        }, {
          key: "onInitialize",
          value: function onInitialize() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onInitialize:"));
            }
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onInitializeAsync",
          value: function onInitializeAsync(fCallback) {
            this.onInitialize();
            return fCallback();
          }

          /**
           * @return {boolean}
           */
        }, {
          key: "initialize",
          value: function initialize() {
            if (this.pict.LogControlFlow) {
              this.log.trace("PICT-ControlFlow APPLICATION [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " initialize:"));
            }
            if (!this.initializeTimestamp) {
              this.onBeforeInitialize();
              if ('ConfigurationOnlyViews' in this.options) {
                // Load all the configuration only views
                for (var i = 0; i < this.options.ConfigurationOnlyViews.length; i++) {
                  var tmpViewIdentifier = typeof this.options.ConfigurationOnlyViews[i].ViewIdentifier === 'undefined' ? "AutoView-".concat(this.fable.getUUID()) : this.options.ConfigurationOnlyViews[i].ViewIdentifier;
                  this.log.info("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " adding configuration only view: ").concat(tmpViewIdentifier));
                  this.pict.addView(tmpViewIdentifier, this.options.ConfigurationOnlyViews[i]);
                }
              }
              this.onInitialize();

              // Walk through any loaded providers and initialize them as well.
              var tmpLoadedProviders = Object.keys(this.pict.providers);
              var tmpProvidersToInitialize = [];
              for (var _i16 = 0; _i16 < tmpLoadedProviders.length; _i16++) {
                var tmpProvider = this.pict.providers[tmpLoadedProviders[_i16]];
                if (tmpProvider.options.AutoInitialize) {
                  tmpProvidersToInitialize.push(tmpProvider);
                }
              }
              // Sort the providers by their priority (if they are all priority 0, it will end up being add order due to JSON Object Property Key order stuff)
              tmpProvidersToInitialize.sort(function (a, b) {
                return a.options.AutoInitializeOrdinal - b.options.AutoInitializeOrdinal;
              });
              for (var _i17 = 0; _i17 < tmpProvidersToInitialize.length; _i17++) {
                tmpProvidersToInitialize[_i17].initialize();
              }

              // Now walk through any loaded views and initialize them as well.
              var tmpLoadedViews = Object.keys(this.pict.views);
              var tmpViewsToInitialize = [];
              for (var _i18 = 0; _i18 < tmpLoadedViews.length; _i18++) {
                var tmpView = this.pict.views[tmpLoadedViews[_i18]];
                if (tmpView.options.AutoInitialize) {
                  tmpViewsToInitialize.push(tmpView);
                }
              }
              // Sort the views by their priority (if they are all priority 0, it will end up being add order due to JSON Object Property Key order stuff)
              tmpViewsToInitialize.sort(function (a, b) {
                return a.options.AutoInitializeOrdinal - b.options.AutoInitializeOrdinal;
              });
              for (var _i19 = 0; _i19 < tmpViewsToInitialize.length; _i19++) {
                tmpViewsToInitialize[_i19].initialize();
              }
              this.onAfterInitialize();
              if (this.options.AutoSolveAfterInitialize) {
                if (this.pict.LogNoisiness > 1) {
                  this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " auto solving after initialization..."));
                }
                // Solve the template synchronously
                this.solve();
              }
              // Now check and see if we should automatically render as well
              if (this.options.AutoRenderMainViewportViewAfterInitialize) {
                if (this.pict.LogNoisiness > 1) {
                  this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " auto rendering after initialization..."));
                }
                // Render the template synchronously
                this.render();
              }
              this.initializeTimestamp = this.fable.log.getTimeStamp();
              this.onCompletionOfInitialize();
              return true;
            } else {
              this.log.warn("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " initialize called but initialization is already completed.  Aborting."));
              return false;
            }
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "initializeAsync",
          value: function initializeAsync(fCallback) {
            var _this31 = this;
            if (this.pict.LogControlFlow) {
              this.log.trace("PICT-ControlFlow APPLICATION [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " initializeAsync:"));
            }

            // Allow the callback to be passed in as the last parameter no matter what
            var tmpCallback = typeof fCallback === 'function' ? fCallback : false;
            if (!tmpCallback) {
              this.log.warn("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " initializeAsync was called without a valid callback.  A callback will be generated but this could lead to race conditions."));
              tmpCallback = function tmpCallback(pError) {
                if (pError) {
                  _this31.log.error("PictApp [".concat(_this31.UUID, "]::[").concat(_this31.Hash, "] ").concat(_this31.options.Name, " initializeAsync Auto Callback Error: ").concat(pError), pError);
                }
              };
            }
            if (!this.initializeTimestamp) {
              var tmpAnticipate = this.fable.instantiateServiceProviderWithoutRegistration('Anticipate');
              if (this.pict.LogNoisiness > 3) {
                this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " beginning initialization..."));
              }
              if ('ConfigurationOnlyViews' in this.options) {
                // Load all the configuration only views
                for (var i = 0; i < this.options.ConfigurationOnlyViews.length; i++) {
                  var tmpViewIdentifier = typeof this.options.ConfigurationOnlyViews[i].ViewIdentifier === 'undefined' ? "AutoView-".concat(this.fable.getUUID()) : this.options.ConfigurationOnlyViews[i].ViewIdentifier;
                  this.log.info("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " adding configuration only view: ").concat(tmpViewIdentifier));
                  this.pict.addView(tmpViewIdentifier, this.options.ConfigurationOnlyViews[i]);
                }
              }
              tmpAnticipate.anticipate(this.onBeforeInitializeAsync.bind(this));
              tmpAnticipate.anticipate(this.onInitializeAsync.bind(this));

              // Walk through any loaded providers and solve them as well.
              var tmpLoadedProviders = Object.keys(this.pict.providers);
              var tmpProvidersToInitialize = [];
              for (var _i20 = 0; _i20 < tmpLoadedProviders.length; _i20++) {
                var tmpProvider = this.pict.providers[tmpLoadedProviders[_i20]];
                if (tmpProvider.options.AutoInitialize) {
                  tmpProvidersToInitialize.push(tmpProvider);
                }
              }
              // Sort the providers by their priority (if they are all priority 0, it will end up being add order due to JSON Object Property Key order stuff)
              tmpProvidersToInitialize.sort(function (a, b) {
                return a.options.AutoInitializeOrdinal - b.options.AutoInitializeOrdinal;
              });
              for (var _i21 = 0; _i21 < tmpProvidersToInitialize.length; _i21++) {
                tmpAnticipate.anticipate(tmpProvidersToInitialize[_i21].initializeAsync.bind(tmpProvidersToInitialize[_i21]));
              }

              // Now walk through any loaded views and initialize them as well.
              // TODO: Some optimization cleverness could be gained by grouping them into a parallelized async operation, by ordinal.
              var tmpLoadedViews = Object.keys(this.pict.views);
              var tmpViewsToInitialize = [];
              for (var _i22 = 0; _i22 < tmpLoadedViews.length; _i22++) {
                var tmpView = this.pict.views[tmpLoadedViews[_i22]];
                if (tmpView.options.AutoInitialize) {
                  tmpViewsToInitialize.push(tmpView);
                }
              }
              // Sort the views by their priority
              // If they are all the default priority 0, it will end up being add order due to JSON Object Property Key order stuff
              tmpViewsToInitialize.sort(function (a, b) {
                return a.options.AutoInitializeOrdinal - b.options.AutoInitializeOrdinal;
              });
              for (var _i23 = 0; _i23 < tmpViewsToInitialize.length; _i23++) {
                var _tmpView = tmpViewsToInitialize[_i23];
                tmpAnticipate.anticipate(_tmpView.initializeAsync.bind(_tmpView));
              }
              tmpAnticipate.anticipate(this.onAfterInitializeAsync.bind(this));
              if (this.options.AutoLoginAfterInitialize) {
                if (this.pict.LogNoisiness > 1) {
                  this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " auto login (asynchronously) after initialization..."));
                }
                tmpAnticipate.anticipate(this.loginAsync.bind(this));
              }
              if (this.options.AutoSolveAfterInitialize) {
                if (this.pict.LogNoisiness > 1) {
                  this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " auto solving (asynchronously) after initialization..."));
                }
                tmpAnticipate.anticipate(this.solveAsync.bind(this));
              }
              if (this.options.AutoRenderMainViewportViewAfterInitialize) {
                if (this.pict.LogNoisiness > 1) {
                  this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " auto rendering (asynchronously) after initialization..."));
                }
                tmpAnticipate.anticipate(this.renderMainViewportAsync.bind(this));
              }
              tmpAnticipate.wait(function (pError) {
                if (pError) {
                  _this31.log.error("PictApp [".concat(_this31.UUID, "]::[").concat(_this31.Hash, "] ").concat(_this31.options.Name, " initializeAsync Error: ").concat(pError.message || pError), {
                    stack: pError.stack
                  });
                }
                _this31.initializeTimestamp = _this31.fable.log.getTimeStamp();
                if (_this31.pict.LogNoisiness > 2) {
                  _this31.log.trace("PictApp [".concat(_this31.UUID, "]::[").concat(_this31.Hash, "] ").concat(_this31.options.Name, " initialization complete."));
                }
                return tmpCallback();
              });
            } else {
              this.log.warn("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " async initialize called but initialization is already completed.  Aborting."));
              // TODO: Should this be an error?
              return this.onCompletionOfInitializeAsync(tmpCallback);
            }
          }

          /**
           * @return {boolean}
           */
        }, {
          key: "onAfterInitialize",
          value: function onAfterInitialize() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onAfterInitialize:"));
            }
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onAfterInitializeAsync",
          value: function onAfterInitializeAsync(fCallback) {
            this.onAfterInitialize();
            return fCallback();
          }

          /**
           * @return {boolean}
           */
        }, {
          key: "onCompletionOfInitialize",
          value: function onCompletionOfInitialize() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onCompletionOfInitialize:"));
            }
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onCompletionOfInitializeAsync",
          value: function onCompletionOfInitializeAsync(fCallback) {
            this.onCompletionOfInitialize();
            return fCallback();
          }

          /* -------------------------------------------------------------------------- */
          /*                     Code Section: Marshal Data From All Views              */
          /* -------------------------------------------------------------------------- */
          /**
           * @return {boolean}
           */
        }, {
          key: "onBeforeMarshalFromViews",
          value: function onBeforeMarshalFromViews() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onBeforeMarshalFromViews:"));
            }
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onBeforeMarshalFromViewsAsync",
          value: function onBeforeMarshalFromViewsAsync(fCallback) {
            this.onBeforeMarshalFromViews();
            return fCallback();
          }

          /**
           * @return {boolean}
           */
        }, {
          key: "onMarshalFromViews",
          value: function onMarshalFromViews() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onMarshalFromViews:"));
            }
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onMarshalFromViewsAsync",
          value: function onMarshalFromViewsAsync(fCallback) {
            this.onMarshalFromViews();
            return fCallback();
          }

          /**
           * @return {boolean}
           */
        }, {
          key: "marshalFromViews",
          value: function marshalFromViews() {
            if (this.pict.LogNoisiness > 2) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " executing marshalFromViews() function..."));
            }
            this.onBeforeMarshalFromViews();
            // Now walk through any loaded views and initialize them as well.
            var tmpLoadedViews = Object.keys(this.pict.views);
            var tmpViewsToMarshalFromViews = [];
            for (var i = 0; i < tmpLoadedViews.length; i++) {
              var tmpView = this.pict.views[tmpLoadedViews[i]];
              tmpViewsToMarshalFromViews.push(tmpView);
            }
            for (var _i24 = 0; _i24 < tmpViewsToMarshalFromViews.length; _i24++) {
              tmpViewsToMarshalFromViews[_i24].marshalFromView();
            }
            this.onMarshalFromViews();
            this.onAfterMarshalFromViews();
            this.lastMarshalFromViewsTimestamp = this.fable.log.getTimeStamp();
            return true;
          }

          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "marshalFromViewsAsync",
          value: function marshalFromViewsAsync(fCallback) {
            var _this32 = this;
            var tmpAnticipate = this.fable.instantiateServiceProviderWithoutRegistration('Anticipate');

            // Allow the callback to be passed in as the last parameter no matter what
            var tmpCallback = typeof fCallback === 'function' ? fCallback : false;
            if (!tmpCallback) {
              this.log.warn("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " marshalFromViewsAsync was called without a valid callback.  A callback will be generated but this could lead to race conditions."));
              tmpCallback = function tmpCallback(pError) {
                if (pError) {
                  _this32.log.error("PictApp [".concat(_this32.UUID, "]::[").concat(_this32.Hash, "] ").concat(_this32.options.Name, " marshalFromViewsAsync Auto Callback Error: ").concat(pError), pError);
                }
              };
            }
            tmpAnticipate.anticipate(this.onBeforeMarshalFromViewsAsync.bind(this));
            // Walk through any loaded views and marshalFromViews them as well.
            var tmpLoadedViews = Object.keys(this.pict.views);
            var tmpViewsToMarshalFromViews = [];
            for (var i = 0; i < tmpLoadedViews.length; i++) {
              var tmpView = this.pict.views[tmpLoadedViews[i]];
              tmpViewsToMarshalFromViews.push(tmpView);
            }
            for (var _i25 = 0; _i25 < tmpViewsToMarshalFromViews.length; _i25++) {
              tmpAnticipate.anticipate(tmpViewsToMarshalFromViews[_i25].marshalFromViewAsync.bind(tmpViewsToMarshalFromViews[_i25]));
            }
            tmpAnticipate.anticipate(this.onMarshalFromViewsAsync.bind(this));
            tmpAnticipate.anticipate(this.onAfterMarshalFromViewsAsync.bind(this));
            tmpAnticipate.wait(function (pError) {
              if (_this32.pict.LogNoisiness > 2) {
                _this32.log.trace("PictApp [".concat(_this32.UUID, "]::[").concat(_this32.Hash, "] ").concat(_this32.options.Name, " marshalFromViewsAsync() complete."));
              }
              _this32.lastMarshalFromViewsTimestamp = _this32.fable.log.getTimeStamp();
              return tmpCallback(pError);
            });
          }

          /**
           * @return {boolean}
           */
        }, {
          key: "onAfterMarshalFromViews",
          value: function onAfterMarshalFromViews() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onAfterMarshalFromViews:"));
            }
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onAfterMarshalFromViewsAsync",
          value: function onAfterMarshalFromViewsAsync(fCallback) {
            this.onAfterMarshalFromViews();
            return fCallback();
          }

          /* -------------------------------------------------------------------------- */
          /*                     Code Section: Marshal Data To All Views                */
          /* -------------------------------------------------------------------------- */
          /**
           * @return {boolean}
           */
        }, {
          key: "onBeforeMarshalToViews",
          value: function onBeforeMarshalToViews() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onBeforeMarshalToViews:"));
            }
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onBeforeMarshalToViewsAsync",
          value: function onBeforeMarshalToViewsAsync(fCallback) {
            this.onBeforeMarshalToViews();
            return fCallback();
          }

          /**
           * @return {boolean}
           */
        }, {
          key: "onMarshalToViews",
          value: function onMarshalToViews() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onMarshalToViews:"));
            }
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onMarshalToViewsAsync",
          value: function onMarshalToViewsAsync(fCallback) {
            this.onMarshalToViews();
            return fCallback();
          }

          /**
           * @return {boolean}
           */
        }, {
          key: "marshalToViews",
          value: function marshalToViews() {
            if (this.pict.LogNoisiness > 2) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " executing marshalToViews() function..."));
            }
            this.onBeforeMarshalToViews();
            // Now walk through any loaded views and initialize them as well.
            var tmpLoadedViews = Object.keys(this.pict.views);
            var tmpViewsToMarshalToViews = [];
            for (var i = 0; i < tmpLoadedViews.length; i++) {
              var tmpView = this.pict.views[tmpLoadedViews[i]];
              tmpViewsToMarshalToViews.push(tmpView);
            }
            for (var _i26 = 0; _i26 < tmpViewsToMarshalToViews.length; _i26++) {
              tmpViewsToMarshalToViews[_i26].marshalToView();
            }
            this.onMarshalToViews();
            this.onAfterMarshalToViews();
            this.lastMarshalToViewsTimestamp = this.fable.log.getTimeStamp();
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "marshalToViewsAsync",
          value: function marshalToViewsAsync(fCallback) {
            var _this33 = this;
            var tmpAnticipate = this.fable.instantiateServiceProviderWithoutRegistration('Anticipate');

            // Allow the callback to be passed in as the last parameter no matter what
            var tmpCallback = typeof fCallback === 'function' ? fCallback : false;
            if (!tmpCallback) {
              this.log.warn("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " marshalToViewsAsync was called without a valid callback.  A callback will be generated but this could lead to race conditions."));
              tmpCallback = function tmpCallback(pError) {
                if (pError) {
                  _this33.log.error("PictApp [".concat(_this33.UUID, "]::[").concat(_this33.Hash, "] ").concat(_this33.options.Name, " marshalToViewsAsync Auto Callback Error: ").concat(pError), pError);
                }
              };
            }
            tmpAnticipate.anticipate(this.onBeforeMarshalToViewsAsync.bind(this));
            // Walk through any loaded views and marshalToViews them as well.
            var tmpLoadedViews = Object.keys(this.pict.views);
            var tmpViewsToMarshalToViews = [];
            for (var i = 0; i < tmpLoadedViews.length; i++) {
              var tmpView = this.pict.views[tmpLoadedViews[i]];
              tmpViewsToMarshalToViews.push(tmpView);
            }
            for (var _i27 = 0; _i27 < tmpViewsToMarshalToViews.length; _i27++) {
              tmpAnticipate.anticipate(tmpViewsToMarshalToViews[_i27].marshalToViewAsync.bind(tmpViewsToMarshalToViews[_i27]));
            }
            tmpAnticipate.anticipate(this.onMarshalToViewsAsync.bind(this));
            tmpAnticipate.anticipate(this.onAfterMarshalToViewsAsync.bind(this));
            tmpAnticipate.wait(function (pError) {
              if (_this33.pict.LogNoisiness > 2) {
                _this33.log.trace("PictApp [".concat(_this33.UUID, "]::[").concat(_this33.Hash, "] ").concat(_this33.options.Name, " marshalToViewsAsync() complete."));
              }
              _this33.lastMarshalToViewsTimestamp = _this33.fable.log.getTimeStamp();
              return tmpCallback(pError);
            });
          }

          /**
           * @return {boolean}
           */
        }, {
          key: "onAfterMarshalToViews",
          value: function onAfterMarshalToViews() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onAfterMarshalToViews:"));
            }
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onAfterMarshalToViewsAsync",
          value: function onAfterMarshalToViewsAsync(fCallback) {
            this.onAfterMarshalToViews();
            return fCallback();
          }

          /* -------------------------------------------------------------------------- */
          /*                     Code Section: Render View                              */
          /* -------------------------------------------------------------------------- */
          /**
           * @return {boolean}
           */
        }, {
          key: "onBeforeRender",
          value: function onBeforeRender() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onBeforeRender:"));
            }
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onBeforeRenderAsync",
          value: function onBeforeRenderAsync(fCallback) {
            this.onBeforeRender();
            return fCallback();
          }

          /**
           * @param {string} [pViewIdentifier] - The hash of the view to render. By default, the main viewport view is rendered.
           * @param {string} [pRenderableHash] - The hash of the renderable to render.
           * @param {string} [pRenderDestinationAddress] - The address where the renderable will be rendered.
           * @param {string} [pTemplateDataAddress] - The address where the data for the template is stored.
           *
           * TODO: Should we support objects for pTemplateDataAddress for parity with pict-view?
           */
        }, {
          key: "render",
          value: function render(pViewIdentifier, pRenderableHash, pRenderDestinationAddress, pTemplateDataAddress) {
            var tmpViewIdentifier = typeof pViewIdentifier !== 'string' ? this.options.MainViewportViewIdentifier : pViewIdentifier;
            var tmpRenderableHash = typeof pRenderableHash !== 'string' ? this.options.MainViewportRenderableHash : pRenderableHash;
            var tmpRenderDestinationAddress = typeof pRenderDestinationAddress !== 'string' ? this.options.MainViewportDestinationAddress : pRenderDestinationAddress;
            var tmpTemplateDataAddress = typeof pTemplateDataAddress !== 'string' ? this.options.MainViewportDefaultDataAddress : pTemplateDataAddress;
            if (this.pict.LogControlFlow) {
              this.log.trace("PICT-ControlFlow APPLICATION [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " VIEW Renderable[").concat(tmpRenderableHash, "] Destination[").concat(tmpRenderDestinationAddress, "] TemplateDataAddress[").concat(tmpTemplateDataAddress, "] render:"));
            }
            this.onBeforeRender();

            // Now get the view (by hash) from the loaded views
            var tmpView = typeof tmpViewIdentifier === 'string' ? this.servicesMap.PictView[tmpViewIdentifier] : false;
            if (!tmpView) {
              this.log.error("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " could not render from View ").concat(tmpViewIdentifier, " because it is not a valid view."));
              return false;
            }
            this.onRender();
            tmpView.render(tmpRenderableHash, tmpRenderDestinationAddress, tmpTemplateDataAddress);
            this.onAfterRender();
            return true;
          }
          /**
           * @return {boolean}
           */
        }, {
          key: "onRender",
          value: function onRender() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onRender:"));
            }
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onRenderAsync",
          value: function onRenderAsync(fCallback) {
            this.onRender();
            return fCallback();
          }

          /**
           * @param {string|((error?: Error) => void)} pViewIdentifier - The hash of the view to render. By default, the main viewport view is rendered. (or the callback)
           * @param {string|((error?: Error) => void)} [pRenderableHash] - The hash of the renderable to render. (or the callback)
           * @param {string|((error?: Error) => void)} [pRenderDestinationAddress] - The address where the renderable will be rendered. (or the callback)
           * @param {string|((error?: Error) => void)} [pTemplateDataAddress] - The address where the data for the template is stored. (or the callback)
           * @param {(error?: Error) => void} [fCallback] - The callback, if all other parameters are provided.
           *
           * TODO: Should we support objects for pTemplateDataAddress for parity with pict-view?
           */
        }, {
          key: "renderAsync",
          value: function renderAsync(pViewIdentifier, pRenderableHash, pRenderDestinationAddress, pTemplateDataAddress, fCallback) {
            var _this34 = this;
            var tmpViewIdentifier = typeof pViewIdentifier !== 'string' ? this.options.MainViewportViewIdentifier : pViewIdentifier;
            var tmpRenderableHash = typeof pRenderableHash !== 'string' ? this.options.MainViewportRenderableHash : pRenderableHash;
            var tmpRenderDestinationAddress = typeof pRenderDestinationAddress !== 'string' ? this.options.MainViewportDestinationAddress : pRenderDestinationAddress;
            var tmpTemplateDataAddress = typeof pTemplateDataAddress !== 'string' ? this.options.MainViewportDefaultDataAddress : pTemplateDataAddress;

            // Allow the callback to be passed in as the last parameter no matter what
            var tmpCallback = typeof fCallback === 'function' ? fCallback : typeof pTemplateDataAddress === 'function' ? pTemplateDataAddress : typeof pRenderDestinationAddress === 'function' ? pRenderDestinationAddress : typeof pRenderableHash === 'function' ? pRenderableHash : typeof pViewIdentifier === 'function' ? pViewIdentifier : false;
            if (!tmpCallback) {
              this.log.warn("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " renderAsync was called without a valid callback.  A callback will be generated but this could lead to race conditions."));
              tmpCallback = function tmpCallback(pError) {
                if (pError) {
                  _this34.log.error("PictApp [".concat(_this34.UUID, "]::[").concat(_this34.Hash, "] ").concat(_this34.options.Name, " renderAsync Auto Callback Error: ").concat(pError), pError);
                }
              };
            }
            if (this.pict.LogControlFlow) {
              this.log.trace("PICT-ControlFlow APPLICATION [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " VIEW Renderable[").concat(tmpRenderableHash, "] Destination[").concat(tmpRenderDestinationAddress, "] TemplateDataAddress[").concat(tmpTemplateDataAddress, "] renderAsync:"));
            }
            var tmpRenderAnticipate = this.fable.newAnticipate();
            tmpRenderAnticipate.anticipate(this.onBeforeRenderAsync.bind(this));
            var tmpView = typeof tmpViewIdentifier === 'string' ? this.servicesMap.PictView[tmpViewIdentifier] : false;
            if (!tmpView) {
              var tmpErrorMessage = "PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " could not asynchronously render from View ").concat(tmpViewIdentifier, " because it is not a valid view.");
              if (this.pict.LogNoisiness > 3) {
                this.log.error(tmpErrorMessage);
              }
              return tmpCallback(new Error(tmpErrorMessage));
            }
            tmpRenderAnticipate.anticipate(this.onRenderAsync.bind(this));
            tmpRenderAnticipate.anticipate(function (fNext) {
              tmpView.renderAsync.call(tmpView, tmpRenderableHash, tmpRenderDestinationAddress, tmpTemplateDataAddress, fNext);
            });
            tmpRenderAnticipate.anticipate(this.onAfterRenderAsync.bind(this));
            return tmpRenderAnticipate.wait(tmpCallback);
          }

          /**
           * @return {boolean}
           */
        }, {
          key: "onAfterRender",
          value: function onAfterRender() {
            if (this.pict.LogNoisiness > 3) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " onAfterRender:"));
            }
            return true;
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "onAfterRenderAsync",
          value: function onAfterRenderAsync(fCallback) {
            this.onAfterRender();
            return fCallback();
          }

          /**
           * @return {boolean}
           */
        }, {
          key: "renderMainViewport",
          value: function renderMainViewport() {
            if (this.pict.LogControlFlow) {
              this.log.trace("PICT-ControlFlow APPLICATION [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " renderMainViewport:"));
            }
            return this.render();
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "renderMainViewportAsync",
          value: function renderMainViewportAsync(fCallback) {
            if (this.pict.LogControlFlow) {
              this.log.trace("PICT-ControlFlow APPLICATION [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " renderMainViewportAsync:"));
            }
            return this.renderAsync(fCallback);
          }
          /**
           * @return {void}
           */
        }, {
          key: "renderAutoViews",
          value: function renderAutoViews() {
            var _this35 = this;
            if (this.pict.LogNoisiness > 0) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " beginning renderAutoViews..."));
            }
            // Now walk through any loaded views and sort them by the AutoRender ordinal
            var tmpLoadedViews = Object.keys(this.pict.views);
            // Sort the views by their priority
            // If they are all the default priority 0, it will end up being add order due to JSON Object Property Key order stuff
            tmpLoadedViews.sort(function (a, b) {
              return _this35.pict.views[a].options.AutoRenderOrdinal - _this35.pict.views[b].options.AutoRenderOrdinal;
            });
            for (var i = 0; i < tmpLoadedViews.length; i++) {
              var tmpView = this.pict.views[tmpLoadedViews[i]];
              if (tmpView.options.AutoRender) {
                tmpView.render();
              }
            }
            if (this.pict.LogNoisiness > 0) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " renderAutoViewsAsync complete."));
            }
          }
          /**
           * @param {(error?: Error) => void} fCallback
           */
        }, {
          key: "renderAutoViewsAsync",
          value: function renderAutoViewsAsync(fCallback) {
            var _this36 = this;
            var tmpAnticipate = this.fable.instantiateServiceProviderWithoutRegistration('Anticipate');

            // Allow the callback to be passed in as the last parameter no matter what
            var tmpCallback = typeof fCallback === 'function' ? fCallback : false;
            if (!tmpCallback) {
              this.log.warn("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " renderAutoViewsAsync was called without a valid callback.  A callback will be generated but this could lead to race conditions."));
              tmpCallback = function tmpCallback(pError) {
                if (pError) {
                  _this36.log.error("PictApp [".concat(_this36.UUID, "]::[").concat(_this36.Hash, "] ").concat(_this36.options.Name, " renderAutoViewsAsync Auto Callback Error: ").concat(pError), pError);
                }
              };
            }
            if (this.pict.LogNoisiness > 0) {
              this.log.trace("PictApp [".concat(this.UUID, "]::[").concat(this.Hash, "] ").concat(this.options.Name, " beginning renderAutoViewsAsync..."));
            }

            // Now walk through any loaded views and sort them by the AutoRender ordinal
            // TODO: Some optimization cleverness could be gained by grouping them into a parallelized async operation, by ordinal.
            var tmpLoadedViews = Object.keys(this.pict.views);
            // Sort the views by their priority
            // If they are all the default priority 0, it will end up being add order due to JSON Object Property Key order stuff
            tmpLoadedViews.sort(function (a, b) {
              return _this36.pict.views[a].options.AutoRenderOrdinal - _this36.pict.views[b].options.AutoRenderOrdinal;
            });
            for (var i = 0; i < tmpLoadedViews.length; i++) {
              var tmpView = this.pict.views[tmpLoadedViews[i]];
              if (tmpView.options.AutoRender) {
                tmpAnticipate.anticipate(tmpView.renderAsync.bind(tmpView));
              }
            }
            tmpAnticipate.wait(function (pError) {
              _this36.lastAutoRenderTimestamp = _this36.fable.log.getTimeStamp();
              if (_this36.pict.LogNoisiness > 0) {
                _this36.log.trace("PictApp [".concat(_this36.UUID, "]::[").concat(_this36.Hash, "] ").concat(_this36.options.Name, " renderAutoViewsAsync complete."));
              }
              return tmpCallback(pError);
            });
          }

          /**
           * @return {boolean}
           */
        }, {
          key: "isPictApplication",
          get: function get() {
            return true;
          }
        }]);
      }(libFableServiceBase);
      module.exports = PictApplication;
    }, {
      "../package.json": 24,
      "fable-serviceproviderbase": 23
    }],
    26: [function (require, module, exports) {
      arguments[4][8][0].apply(exports, arguments);
    }, {
      "dup": 8
    }],
    27: [function (require, module, exports) {
      arguments[4][9][0].apply(exports, arguments);
    }, {
      "../package.json": 26,
      "dup": 9,
      "fable-serviceproviderbase": 23
    }],
    28: [function (require, module, exports) {
      arguments[4][14][0].apply(exports, arguments);
    }, {
      "dup": 14
    }],
    29: [function (require, module, exports) {
      arguments[4][15][0].apply(exports, arguments);
    }, {
      "../package.json": 28,
      "dup": 15,
      "fable-serviceproviderbase": 23
    }],
    30: [function (require, module, exports) {
      'use strict';

      /**
       * Built-in fileview renderer plugins.
       *
       * A renderer is a plain object implementing the fileview renderer contract:
       *
       *   {
       *     Hash:         <string>,              // unique id in the registry
       *     Priority:     <number>,              // tiebreak when two renderers score equally (higher wins)
       *     Capability?:  (pFileviewProvider) => boolean,   // abstain (fall through) when a dependency is absent
       *     matches:      (pDescriptor) => number,          // score tier — see Pict-Fileview-Provider.resolveRenderer
       *     prepareDescriptor?: (pDescriptor, pFileviewProvider) => void,  // enrich the descriptor before mount
       *     mount:        (pContainerSelector, pDescriptor, pFileviewProvider) => handle
       *   }
       *
       * `mount` paints the body into pContainerSelector (always through pict.ContentAssignment) and returns a handle:
       *
       *   { Hash, Descriptor, ChildViewHash?, Ready?, update?(pDescriptor), destroy() }
       *
       * The provider keeps one handle at a time. On a SAME-KIND re-point (next file, same renderer) it calls the
       * handle's optional update(pDescriptor) to re-feed the live child instead of tearing it down — the
       * reuse-one-per-kind rule (Pict has no removeView, so re-minting a child per file leaks views/observers). On a
       * TYPE switch it calls destroy(). `Ready` is an optional promise a renderer that loads asynchronously resolves
       * once its content has painted — the provider ignores it; tests await it.
       *
       * Phase-1 slices covered here:
       *   - DownloadCard : the always-matches floor (score 1) — no file is ever unviewable.
       *   - Text         : any textual file, fetched and shown in a <pre>. Self-contained (no external dependency);
       *                    also the graceful degrade when Code/Markdown abstain.
       *   - Code         : delegates to pict-section-code (CodeJar, read-only). Host-provided + CodeJar-gated.
       *   - Markdown     : delegates to pict-section-content's parseMarkdown. Host-provided.
       *
       * Image / enormous-image / PDF / native-media renderers register on top of these in later slices.
       */

      // -------------------------------------------------------------------------------------------------------------
      // Score tiers (see resolveRenderer). Extension outranks the header MIME outranks magic bytes; an explicit
      // config Kind trumps all of them; the download card sits at the floor.
      // -------------------------------------------------------------------------------------------------------------
      var SCORE_KIND = 10000;
      var SCORE_EXTENSION = 700;
      var SCORE_MIME = 400;
      var SCORE_FALLBACK = 1;

      // Textual file families. CODE and MARKDOWN extensions are also claimed by the Text renderer (at the extension
      // tier) so a code/markdown file whose specialized renderer abstains still renders as readable plain text.
      var CODE_EXTENSIONS = [
      // NOTE: 'svg' is intentionally NOT here — a viewer should render an SVG as a graphic (the image lens), not as
      // source. An SVG loaded via <img src> is script-inert, so rendering it is safe. A host that wants SVG source
      // can register a renderer that claims it.
      'js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'json5', 'html', 'htm', 'xml', 'xhtml', 'css', 'scss', 'less', 'sass', 'sql', 'sh', 'bash', 'zsh', 'fish', 'py', 'rb', 'go', 'rs', 'java', 'c', 'h', 'cpp', 'cc', 'cxx', 'hpp', 'cs', 'php', 'pl', 'pm', 'lua', 'swift', 'kt', 'kts', 'scala', 'dart', 'r', 'groovy', 'gradle', 'vue', 'svelte', 'yaml', 'yml', 'toml'];
      var MARKDOWN_EXTENSIONS = ['md', 'markdown', 'mdown', 'mkd', 'mkdn', 'mdx'];
      var TEXT_EXTENSIONS = ['txt', 'text', 'log', 'csv', 'tsv', 'conf', 'cfg', 'ini', 'env', 'properties', 'list', 'diff', 'patch', 'srt', 'vtt', 'nfo', 'me', 'readme'];

      // Extension → the highlighter language pict-section-code understands. Unknown languages degrade safely in the
      // highlighter (escape + render), so an unmapped extension just falls back to itself.
      var LANGUAGE_BY_EXTENSION = {
        js: 'javascript',
        mjs: 'javascript',
        cjs: 'javascript',
        jsx: 'javascript',
        ts: 'javascript',
        tsx: 'javascript',
        json: 'json',
        json5: 'json',
        html: 'html',
        htm: 'html',
        xml: 'html',
        xhtml: 'html',
        vue: 'html',
        svelte: 'html',
        css: 'css',
        scss: 'css',
        less: 'css',
        sass: 'css',
        sql: 'sql'
      };

      // Config Kind → family (the strongest, config-tier signal).
      var KIND_CODE = ['code', 'source', 'sourcecode'];
      var KIND_MARKDOWN = ['markdown'];
      var KIND_TEXT = ['text', 'plaintext', 'plain', 'log'];
      function lowerKind(pDescriptor) {
        return String(pDescriptor && pDescriptor.Kind || '').toLowerCase();
      }
      function lowerExt(pDescriptor) {
        return String(pDescriptor && pDescriptor.Extension || '').toLowerCase();
      }
      function lowerMIME(pDescriptor) {
        return String(pDescriptor && pDescriptor.MIMEType || '').toLowerCase().split(';')[0].trim();
      }
      function isTextualMIME(pMIME) {
        if (!pMIME) {
          return false;
        }
        if (pMIME.indexOf('text/') === 0) {
          return true;
        }
        if (pMIME.indexOf('+xml') >= 0 || pMIME.indexOf('+json') >= 0) {
          return true;
        }
        return ['application/json', 'application/xml', 'application/javascript', 'application/x-javascript', 'application/x-sh', 'application/x-yaml', 'application/yaml', 'application/toml', 'application/sql'].indexOf(pMIME) >= 0;
      }

      // Image families. Only browser-renderable raster/vector formats belong here — a format a browser cannot paint
      // into an <img> (TIFF, HEIC/HEIF, camera RAW, PSD) is deliberately excluded so it degrades to the download card
      // rather than a broken image. (A server-side rendition service turning those into web formats is a later slice.)
      var IMAGE_EXTENSIONS = ['png', 'apng', 'jpg', 'jpeg', 'jpe', 'jfif', 'gif', 'webp', 'bmp', 'dib', 'svg', 'svgz', 'avif', 'ico', 'cur'];
      var NON_RENDERABLE_IMAGE_EXTENSIONS = ['tif', 'tiff', 'heic', 'heif', 'psd', 'raw', 'cr2', 'cr3', 'nef', 'arw', 'dng', 'orf', 'rw2'];
      var NON_RENDERABLE_IMAGE_MIMES = ['image/tiff', 'image/x-tiff', 'image/heic', 'image/heif', 'image/heic-sequence', 'image/heif-sequence', 'image/vnd.adobe.photoshop', 'image/x-adobe-dng', 'image/x-canon-cr2', 'image/x-nikon-nef', 'image/x-sony-arw'];
      var KIND_IMAGE = ['image', 'picture', 'photo', 'photograph', 'bitmap'];

      // The oversize floor: raw bytes larger than this are never blitted into an <img> (an 800 MB flat image blows the
      // browser's max-canvas and memory). Such a file degrades to the download card today; the enormous-image path
      // (a server DZI pyramid → pict-section-openseadragon) registers a higher-priority renderer in a later slice.
      // A coarse static hint because matches() has no provider handle — mirrors CodeRenderer._maxBytesHint.
      var IMAGE_MAX_BYTES_HINT = 30000000;

      /** Is this a browser-renderable image MIME (image/* but not one of the formats a browser cannot paint)? */
      function isRenderableImageMIME(pMIME) {
        if (!pMIME || pMIME.indexOf('image/') !== 0) {
          return false;
        }
        return NON_RENDERABLE_IMAGE_MIMES.indexOf(pMIME) < 0;
      }

      /**
       * The shared image score for a descriptor (used by both the delegating and the self-contained image renderers so
       * they tie on score and resolve by Priority). Returns 0 when the file is not a renderable image, or is larger
       * than the oversize floor, so it degrades honestly to the download card.
       */
      function scoreImage(pDescriptor) {
        // Oversize: don't blit huge bytes into an <img>, even when the Kind says image.
        if (typeof pDescriptor.Size === 'number' && pDescriptor.Size > IMAGE_MAX_BYTES_HINT) {
          return 0;
        }
        var tmpExt = lowerExt(pDescriptor);
        var tmpMIME = lowerMIME(pDescriptor);

        // Formats a browser can't paint — step aside for the download card.
        if (NON_RENDERABLE_IMAGE_EXTENSIONS.indexOf(tmpExt) >= 0) {
          return 0;
        }
        if (NON_RENDERABLE_IMAGE_MIMES.indexOf(tmpMIME) >= 0) {
          return 0;
        }
        if (KIND_IMAGE.indexOf(lowerKind(pDescriptor)) >= 0) {
          return SCORE_KIND;
        }
        if (IMAGE_EXTENSIONS.indexOf(tmpExt) >= 0) {
          return SCORE_EXTENSION;
        }
        if (isRenderableImageMIME(tmpMIME)) {
          return SCORE_MIME;
        }
        return 0;
      }

      // -------------------------------------------------------------------------------------------------------------
      // The download card: the universal fallback. Matches every descriptor at the floor score, so a resolver that
      // finds nothing better always lands here and shows name + type + size with a download affordance when the bytes
      // have an address. Downloading is the viewer's reader clicking a plain anchor — the viewer never fetches on its
      // own.
      // -------------------------------------------------------------------------------------------------------------
      var DownloadCardRenderer = {
        Hash: 'Fileview-Renderer-DownloadCard',
        Priority: -1000,
        // the floor: anything with a real opinion outranks it

        matches: function matches(pDescriptor) {
          return SCORE_FALLBACK;
        },
        mount: function mount(pContainerSelector, pDescriptor, pFileviewProvider) {
          var tmpProvider = pFileviewProvider;
          var tmpName = pDescriptor.Name || 'Untitled file';
          var tmpType = pDescriptor.MIMEType || (pDescriptor.Extension ? '.' + pDescriptor.Extension : 'Unknown type');
          var tmpSize = typeof pDescriptor.Size === 'number' && pDescriptor.Size >= 0 ? tmpProvider._formatBytes(pDescriptor.Size) : '';
          var tmpGlyph = tmpProvider._icon('File', 1.8);
          var tmpDownloadGlyph = tmpProvider._icon('Download');
          var tmpSub = tmpProvider._esc(tmpType);
          if (tmpSize) {
            tmpSub += ' · ' + tmpProvider._esc(tmpSize);
          }
          var tmpAction = '';
          if (pDescriptor.URL) {
            // A plain anchor — the reader initiates the download. `download` hints the save-as filename.
            tmpAction = '<div class="pfv-card-actions">' + '<a class="pfv-btn pfv-btn-primary" href="' + tmpProvider._esc(pDescriptor.URL) + '" download' + (pDescriptor.Name ? '="' + tmpProvider._esc(pDescriptor.Name) + '"' : '') + '>' + tmpDownloadGlyph + 'Download</a></div>';
          }
          var tmpHTML = '<div class="pfv-card">' + '<div class="pfv-card-icon">' + tmpGlyph + '</div>' + '<div class="pfv-card-meta">' + '<div class="pfv-card-name">' + tmpProvider._esc(tmpName) + '</div>' + '<div class="pfv-card-sub">' + tmpSub + '</div>' + '</div>' + tmpAction + '</div>';
          tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, tmpHTML);
          return {
            Hash: DownloadCardRenderer.Hash,
            Descriptor: pDescriptor,
            ChildViewHash: null,
            destroy: function destroy() {
              tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '');
            }
          };
        }
      };

      // -------------------------------------------------------------------------------------------------------------
      // Text: fetch a textual file and show it in a <pre>. Self-contained (no external dependency), and the graceful
      // degrade for code/markdown when their specialized renderers abstain. Capped by TextMaxBytes (a Range read) so
      // an enormous log does not lock the tab.
      // -------------------------------------------------------------------------------------------------------------
      var TextRenderer = {
        Hash: 'Fileview-Renderer-Text',
        Priority: 0,
        // Needs some way to fetch the bytes; without one it abstains so the download card takes over.
        Capability: function Capability(pFileviewProvider) {
          return pFileviewProvider._getFetch() !== null;
        },
        matches: function matches(pDescriptor) {
          var tmpKind = lowerKind(pDescriptor);
          if (KIND_TEXT.indexOf(tmpKind) >= 0) {
            return SCORE_KIND;
          }
          var tmpExt = lowerExt(pDescriptor);
          if (TEXT_EXTENSIONS.indexOf(tmpExt) >= 0 || CODE_EXTENSIONS.indexOf(tmpExt) >= 0 || MARKDOWN_EXTENSIONS.indexOf(tmpExt) >= 0) {
            return SCORE_EXTENSION;
          }
          if (isTextualMIME(lowerMIME(pDescriptor))) {
            return SCORE_MIME;
          }
          return 0;
        },
        mount: function mount(pContainerSelector, pDescriptor, pFileviewProvider) {
          var tmpProvider = pFileviewProvider;
          var tmpMax = tmpProvider._textMaxBytes();
          tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '<div class="pfv-textwrap"><div class="pfv-loading">' + tmpProvider._icon('File') + ' Loading…</div></div>');
          function fLoad(pFeedDescriptor) {
            return tmpProvider.fetchFileText(pFeedDescriptor.URL, {
              MaxBytes: tmpMax
            }).then(function (pText) {
              var tmpTruncated = typeof pFeedDescriptor.Size === 'number' && pFeedDescriptor.Size > tmpMax;
              var tmpNotice = tmpTruncated ? '<div class="pfv-notice">Showing the first ' + tmpProvider._formatBytes(tmpMax) + ' of ' + tmpProvider._formatBytes(pFeedDescriptor.Size) + ' — download the file for the rest.</div>' : '';
              tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '<div class="pfv-textwrap">' + tmpNotice + '<pre class="pfv-text">' + tmpProvider._esc(pText) + '</pre></div>');
            }).catch(function (pError) {
              tmpProvider._paintRendererError(pContainerSelector, 'Could not load this file for display.', pError);
            });
          }
          var tmpHandle = {
            Hash: TextRenderer.Hash,
            Descriptor: pDescriptor,
            ChildViewHash: null,
            update: function update(pNextDescriptor) {
              this.Descriptor = pNextDescriptor;
              return fLoad(pNextDescriptor);
            },
            destroy: function destroy() {
              tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '');
            }
          };
          tmpHandle.Ready = fLoad(pDescriptor);
          return tmpHandle;
        }
      };

      // -------------------------------------------------------------------------------------------------------------
      // Code: delegate to pict-section-code (CodeJar, read-only, line numbers). The child class is host-provided
      // (config.CodeSectionClass or window.PictSectionCode) and CodeJar is a page global — when either is absent, or
      // the file is larger than CodeMaxBytes, this abstains and the Text renderer renders it as plain text.
      // -------------------------------------------------------------------------------------------------------------
      var CodeRenderer = {
        Hash: 'Fileview-Renderer-Code',
        Priority: 100,
        Capability: function Capability(pFileviewProvider) {
          return !!pFileviewProvider._resolveCodeSectionClass() && pFileviewProvider._isCodeJarAvailable() && pFileviewProvider._getFetch() !== null;
        },
        matches: function matches(pDescriptor) {
          var tmpKind = lowerKind(pDescriptor);
          if (KIND_CODE.indexOf(tmpKind) >= 0) {
            return SCORE_KIND;
          }

          // A file larger than the highlight budget scores 0 so Code steps aside for Text (which Range-caps).
          if (typeof pDescriptor.Size === 'number' && pDescriptor.Size > CodeRenderer._maxBytesHint) {
            return 0;
          }
          var tmpExt = lowerExt(pDescriptor);
          if (CODE_EXTENSIONS.indexOf(tmpExt) >= 0) {
            return SCORE_EXTENSION;
          }
          var tmpMIME = lowerMIME(pDescriptor);
          if (tmpMIME.indexOf('text/x-') === 0 || ['application/json', 'application/xml', 'application/javascript', 'application/x-javascript', 'application/x-sh', 'application/sql'].indexOf(tmpMIME) >= 0) {
            return SCORE_MIME;
          }
          return 0;
        },
        // A coarse upper bound used only by matches() (which has no provider handle). The real, configurable cap is
        // enforced in Capability() and in the Range-capped fetch at mount; this just keeps the obvious giant off the
        // highlighter. Overridable by a host that re-registers the renderer.
        _maxBytesHint: 8000000,
        mount: function mount(pContainerSelector, pDescriptor, pFileviewProvider) {
          var tmpProvider = pFileviewProvider;
          var tmpSectionClass = tmpProvider._resolveCodeSectionClass();
          var tmpHostId = tmpProvider.identifier + '-CodeHost';
          var tmpChildHash = tmpProvider._nextChildHash('CodeChild');
          tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '<div id="' + tmpHostId + '" class="pfv-code-host"></div>');
          var tmpChildConfiguration = Object.assign({}, tmpSectionClass.default_configuration || {}, {
            RenderOnLoad: false,
            CSSHash: 'Pict-Section-Code-CSS',
            DefaultRenderable: tmpChildHash + '-Wrap',
            DefaultDestinationAddress: '#' + tmpHostId,
            TargetElementAddress: '#' + tmpHostId,
            Templates: [{
              Hash: tmpChildHash + '-Template',
              Template: '<!-- fileview code host -->'
            }],
            Renderables: [{
              RenderableHash: tmpChildHash + '-Wrap',
              TemplateHash: tmpChildHash + '-Template',
              DestinationAddress: '#' + tmpHostId,
              RenderMethod: 'replace'
            }],
            Language: tmpProvider._languageForDescriptor(pDescriptor),
            ReadOnly: true,
            LineNumbers: true,
            DefaultCode: ''
          });
          tmpProvider.pict.addView(tmpChildHash, tmpChildConfiguration, tmpSectionClass);
          var tmpChild = tmpProvider.pict.views[tmpChildHash];

          // Building the editor (and connecting CodeJar) happens in the child's onAfterInitialRender during render.
          try {
            if (tmpChild && typeof tmpChild.render === 'function') {
              tmpChild.render();
            }
          } catch (pError) {
            tmpProvider.log.warn('pict-section-fileview: code child render() threw.', {
              Error: pError.message
            });
          }
          function fFeed(pFeedDescriptor) {
            return tmpProvider.fetchFileText(pFeedDescriptor.URL, {
              MaxBytes: tmpProvider._codeMaxBytes()
            }).then(function (pText) {
              if (!tmpChild) {
                return;
              }
              if (typeof tmpChild.setLanguage === 'function') {
                try {
                  tmpChild.setLanguage(tmpProvider._languageForDescriptor(pFeedDescriptor));
                } catch (pError) {/* language swap is best-effort */}
              }
              if (typeof tmpChild.setCode === 'function') {
                tmpChild.setCode(pText);
              }
            }).catch(function (pError) {
              tmpProvider._paintRendererError(pContainerSelector, 'Could not load this file for display.', pError);
            });
          }
          var tmpHandle = {
            Hash: CodeRenderer.Hash,
            Descriptor: pDescriptor,
            ChildViewHash: tmpChildHash,
            update: function update(pNextDescriptor) {
              this.Descriptor = pNextDescriptor;
              return fFeed(pNextDescriptor);
            },
            destroy: function destroy() {
              try {
                if (tmpChild && typeof tmpChild.destroy === 'function') {
                  tmpChild.destroy();
                }
              } catch (pError) {/* CodeJar teardown is best-effort */}
              tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '');
            }
          };
          tmpHandle.Ready = fFeed(pDescriptor);
          return tmpHandle;
        }
      };

      // -------------------------------------------------------------------------------------------------------------
      // Markdown: delegate to pict-section-content's parseMarkdown (DOM-free — we assign the HTML into our own stage
      // element, so two markdown viewers on one page never collide on a shared body id). The content provider class
      // is host-provided (config.ContentProviderClass or window.PictSectionContent.PictContentProvider).
      // -------------------------------------------------------------------------------------------------------------
      var MarkdownRenderer = {
        Hash: 'Fileview-Renderer-Markdown',
        Priority: 100,
        Capability: function Capability(pFileviewProvider) {
          return !!pFileviewProvider._resolveContentProviderClass() && pFileviewProvider._getFetch() !== null;
        },
        matches: function matches(pDescriptor) {
          var tmpKind = lowerKind(pDescriptor);
          if (KIND_MARKDOWN.indexOf(tmpKind) >= 0) {
            return SCORE_KIND;
          }
          var tmpExt = lowerExt(pDescriptor);
          if (MARKDOWN_EXTENSIONS.indexOf(tmpExt) >= 0) {
            return SCORE_EXTENSION;
          }
          var tmpMIME = lowerMIME(pDescriptor);
          if (tmpMIME === 'text/markdown' || tmpMIME === 'text/x-markdown') {
            return SCORE_MIME;
          }
          return 0;
        },
        mount: function mount(pContainerSelector, pDescriptor, pFileviewProvider) {
          var tmpProvider = pFileviewProvider;
          var tmpContentProvider = tmpProvider._ensureContentProvider();
          var tmpBodyId = tmpProvider.identifier + '-MarkdownBody';
          tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '<div id="' + tmpBodyId + '" class="pict-content pfv-content-host"><div class="pfv-loading">Loading…</div></div>');
          function fLoad(pFeedDescriptor) {
            return tmpProvider.fetchFileText(pFeedDescriptor.URL, {
              MaxBytes: tmpProvider._textMaxBytes()
            }).then(function (pText) {
              var tmpHTML;
              try {
                tmpHTML = tmpContentProvider.parseMarkdown(pText);
              } catch (pError) {
                tmpHTML = '<pre class="pfv-text">' + tmpProvider._esc(pText) + '</pre>';
              }
              tmpProvider.pict.ContentAssignment.assignContent('#' + tmpBodyId, tmpHTML);
            }).catch(function (pError) {
              tmpProvider._paintRendererError(pContainerSelector, 'Could not load this document for display.', pError);
            });
          }
          var tmpHandle = {
            Hash: MarkdownRenderer.Hash,
            Descriptor: pDescriptor,
            ChildViewHash: null,
            update: function update(pNextDescriptor) {
              this.Descriptor = pNextDescriptor;
              return fLoad(pNextDescriptor);
            },
            destroy: function destroy() {
              tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '');
            }
          };
          tmpHandle.Ready = fLoad(pDescriptor);
          return tmpHandle;
        }
      };

      // -------------------------------------------------------------------------------------------------------------
      // Image (basic): a self-contained, responsive <img> that fits the stage — the universal image lens. No external
      // dependency and no fetch (the browser loads <img src> directly), so an ordinary image always shows even when
      // the nicer pict-section-image module is not on the page. It is the image counterpart of the Text degrade.
      // -------------------------------------------------------------------------------------------------------------
      var BasicImageRenderer = {
        Hash: 'Fileview-Renderer-ImageBasic',
        Priority: 0,
        matches: function matches(pDescriptor) {
          return scoreImage(pDescriptor);
        },
        mount: function mount(pContainerSelector, pDescriptor, pFileviewProvider) {
          var tmpProvider = pFileviewProvider;
          function fPaint(pFeedDescriptor) {
            var tmpAlt = tmpProvider._esc(pFeedDescriptor.Name || 'Image');
            tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '<div class="pfv-imagewrap"><img class="pfv-image" alt="' + tmpAlt + '" src="' + tmpProvider._esc(pFeedDescriptor.URL || '') + '" /></div>');
          }
          fPaint(pDescriptor);
          return {
            Hash: BasicImageRenderer.Hash,
            Descriptor: pDescriptor,
            ChildViewHash: null,
            Ready: Promise.resolve(),
            update: function update(pNextDescriptor) {
              this.Descriptor = pNextDescriptor;
              fPaint(pNextDescriptor);
            },
            destroy: function destroy() {
              tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '');
            }
          };
        }
      };

      // -------------------------------------------------------------------------------------------------------------
      // Image (delegated): mount pict-section-image for the full zoom/pan/download chrome. Host-provided
      // (config.ImageSectionClass or window.PictSectionImage); when absent, this abstains and BasicImageRenderer
      // paints the plain <img>. fileview owns the toolbar, so the child runs with ShowToolbar:false.
      // -------------------------------------------------------------------------------------------------------------
      var ImageRenderer = {
        Hash: 'Fileview-Renderer-Image',
        Priority: 100,
        Capability: function Capability(pFileviewProvider) {
          return !!pFileviewProvider._resolveImageSectionClass();
        },
        matches: function matches(pDescriptor) {
          return scoreImage(pDescriptor);
        },
        mount: function mount(pContainerSelector, pDescriptor, pFileviewProvider) {
          var tmpProvider = pFileviewProvider;
          var tmpSectionClass = tmpProvider._resolveImageSectionClass();
          var tmpHostId = tmpProvider.identifier + '-ImageHost';
          var tmpChildHash = tmpProvider._nextChildHash('ImageChild');
          tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '<div id="' + tmpHostId + '" class="pfv-image-host"></div>');
          var tmpChildConfiguration = Object.assign({}, tmpSectionClass.default_configuration || {}, {
            RenderOnLoad: false,
            DefaultRenderable: tmpChildHash + '-Wrap',
            DefaultDestinationAddress: '#' + tmpHostId,
            TargetElementAddress: '#' + tmpHostId,
            Templates: [{
              Hash: tmpChildHash + '-Template',
              Template: '<!-- fileview image host -->'
            }],
            Renderables: [{
              RenderableHash: tmpChildHash + '-Wrap',
              TemplateHash: tmpChildHash + '-Template',
              DestinationAddress: '#' + tmpHostId,
              RenderMethod: 'replace'
            }],
            ShowToolbar: false,
            // fileview owns the chrome
            Checkerboard: true
          });
          tmpProvider.pict.addView(tmpChildHash, tmpChildConfiguration, tmpSectionClass);
          var tmpChild = tmpProvider.pict.views[tmpChildHash];
          try {
            if (tmpChild && typeof tmpChild.render === 'function') {
              tmpChild.render();
            }
          } catch (pError) {
            tmpProvider.log.warn('pict-section-fileview: image child render() threw.', {
              Error: pError.message
            });
          }
          function fFeed(pFeedDescriptor) {
            if (tmpChild && typeof tmpChild.setImage === 'function') {
              tmpChild.setImage({
                URL: pFeedDescriptor.URL,
                Name: pFeedDescriptor.Name,
                AltText: pFeedDescriptor.Name
              });
            }
          }
          fFeed(pDescriptor);
          return {
            Hash: ImageRenderer.Hash,
            Descriptor: pDescriptor,
            ChildViewHash: tmpChildHash,
            Ready: Promise.resolve(),
            update: function update(pNextDescriptor) {
              this.Descriptor = pNextDescriptor;
              fFeed(pNextDescriptor);
            },
            destroy: function destroy() {
              try {
                if (tmpChild && typeof tmpChild.destroy === 'function') {
                  tmpChild.destroy();
                }
              } catch (pError) {/* child teardown is best-effort */}
              tmpProvider.pict.ContentAssignment.assignContent(pContainerSelector, '');
            }
          };
        }
      };

      // Registration order is cosmetic (resolution is by score, then Priority, then ordinal). Floor first, then the
      // generic degrades (text, basic image), then the specialized delegates.
      var BUILTIN_RENDERERS = [DownloadCardRenderer, TextRenderer, BasicImageRenderer, MarkdownRenderer, CodeRenderer, ImageRenderer];
      module.exports = {
        BUILTIN_RENDERERS: BUILTIN_RENDERERS,
        DownloadCardRenderer: DownloadCardRenderer,
        TextRenderer: TextRenderer,
        CodeRenderer: CodeRenderer,
        MarkdownRenderer: MarkdownRenderer,
        BasicImageRenderer: BasicImageRenderer,
        ImageRenderer: ImageRenderer,
        // Exported for hosts that build their own renderers against the same tiers / families.
        SCORE_KIND: SCORE_KIND,
        SCORE_EXTENSION: SCORE_EXTENSION,
        SCORE_MIME: SCORE_MIME,
        SCORE_FALLBACK: SCORE_FALLBACK,
        CODE_EXTENSIONS: CODE_EXTENSIONS,
        MARKDOWN_EXTENSIONS: MARKDOWN_EXTENSIONS,
        TEXT_EXTENSIONS: TEXT_EXTENSIONS,
        IMAGE_EXTENSIONS: IMAGE_EXTENSIONS,
        LANGUAGE_BY_EXTENSION: LANGUAGE_BY_EXTENSION,
        scoreImage: scoreImage
      };
    }, {}],
    31: [function (require, module, exports) {
      'use strict';

      /**
       * The fileview probe ladder — a small, pure, network-touching enrichment step.
       *
       * When a host hands the viewer a bare URL (ProbeStrategy 'auto'), the filename extension is often the only
       * signal available, and sometimes there is not even that (a `/Depot/File/42/Open` style address has no
       * extension at all). The probe climbs three cheap rungs to learn more about the bytes WITHOUT downloading
       * the whole file:
       *
       *   1. HEAD            → Content-Type (the header MIME tier), Content-Length (Size), Accept-Ranges.
       *   2. Range 0-63      → a 206 confirms range support; Content-Range yields the true total Size.
       *   3. magic sniff     → the leading bytes of that same Range read disambiguate container formats that
       *                        share no reliable extension/MIME (a bare URL that is really a PNG or a PDF).
       *
       * Every rung is best-effort: a server may refuse HEAD (405), block Range, or be cross-origin and strip the
       * headers. Each step is wrapped so a failure simply leaves the result as-is and the ladder returns whatever
       * it has gathered. The caller (the provider) merges the result into the FileDescriptor, filling only blanks —
       * a record's explicit MIMEType/Size/Kind always wins over a probe guess.
       *
       * The fetch implementation is injected (pOptions.fetch) so this is unit-testable headless with a stub and so
       * the provider can route it through a host-supplied client. No DOM, no globals.
       */

      // Magic-byte signatures → a derived MIME. Kept deliberately small: just enough to tell apart the renderable
      // kinds that a bare, extension-less URL would otherwise strand on the download card. Each entry is a byte
      // prefix match at offset 0 unless noted. RIFF and ISO-BMFF ('ftyp') containers are disambiguated specially
      // below because several formats share the same leading bytes.
      var MAGIC_PREFIXES = [{
        Bytes: [0x25, 0x50, 0x44, 0x46],
        MIME: 'application/pdf'
      },
      // %PDF
      {
        Bytes: [0x89, 0x50, 0x4E, 0x47],
        MIME: 'image/png'
      },
      // \x89PNG
      {
        Bytes: [0xFF, 0xD8, 0xFF],
        MIME: 'image/jpeg'
      }, {
        Bytes: [0x47, 0x49, 0x46, 0x38],
        MIME: 'image/gif'
      },
      // GIF8
      {
        Bytes: [0x42, 0x4D],
        MIME: 'image/bmp'
      },
      // BM
      {
        Bytes: [0x25, 0x21, 0x50, 0x53],
        MIME: 'application/postscript'
      },
      // %!PS
      {
        Bytes: [0x1F, 0x8B],
        MIME: 'application/gzip'
      }, {
        Bytes: [0x50, 0x4B, 0x03, 0x04],
        MIME: 'application/zip'
      },
      // PK.. (also docx/xlsx/epub/cbz)
      {
        Bytes: [0x49, 0x44, 0x33],
        MIME: 'audio/mpeg'
      },
      // ID3
      {
        Bytes: [0x4F, 0x67, 0x67, 0x53],
        MIME: 'application/ogg'
      },
      // OggS
      {
        Bytes: [0x66, 0x4C, 0x61, 0x43],
        MIME: 'audio/flac'
      } // fLaC
      ];

      // A MIME that tells the resolver almost nothing — a server default. When the header MIME is one of these we
      // still climb to the magic rung to try for something sharper.
      var GENERIC_MIMES = ['', 'application/octet-stream', 'binary/octet-stream', 'application/download', 'application/force-download', 'content/unknown', 'unknown/unknown'];

      /** Read a header value from a fetch Headers object or a plain map, case-insensitively. */
      function readHeader(pHeaders, pName) {
        if (!pHeaders) {
          return '';
        }
        try {
          if (typeof pHeaders.get === 'function') {
            return pHeaders.get(pName) || '';
          }
        } catch (pError) {/* fall through to the plain-map path */}
        var tmpLower = String(pName).toLowerCase();
        var tmpKeys = Object.keys(pHeaders);
        for (var i = 0; i < tmpKeys.length; i++) {
          if (tmpKeys[i].toLowerCase() === tmpLower) {
            return pHeaders[tmpKeys[i]] || '';
          }
        }
        return '';
      }

      /** Strip a Content-Type down to the bare MIME (drop `; charset=...`), lowercased. */
      function cleanMIME(pContentType) {
        if (!pContentType) {
          return '';
        }
        return String(pContentType).split(';')[0].trim().toLowerCase();
      }

      /** Is this MIME uninformative enough that the magic rung is still worth climbing? */
      function isGenericMIME(pMIME) {
        return GENERIC_MIMES.indexOf(cleanMIME(pMIME)) >= 0;
      }

      /** Lowercase hex of the first pCount bytes (for the descriptor's MagicBytes field / debugging). */
      function toHex(pBytes, pCount) {
        var tmpLimit = Math.min(pCount || pBytes.length, pBytes.length);
        var tmpHex = '';
        for (var i = 0; i < tmpLimit; i++) {
          var tmpByte = pBytes[i].toString(16);
          tmpHex += (tmpByte.length === 1 ? '0' : '') + tmpByte;
        }
        return tmpHex;
      }

      /** Does the byte array start with this prefix? */
      function startsWith(pBytes, pPrefix) {
        if (pBytes.length < pPrefix.length) {
          return false;
        }
        for (var i = 0; i < pPrefix.length; i++) {
          if (pBytes[i] !== pPrefix[i]) {
            return false;
          }
        }
        return true;
      }

      /** Four ASCII bytes at an offset, as a string (for RIFF/ftyp brand sniffing). */
      function fourCC(pBytes, pOffset) {
        if (pBytes.length < pOffset + 4) {
          return '';
        }
        return String.fromCharCode(pBytes[pOffset], pBytes[pOffset + 1], pBytes[pOffset + 2], pBytes[pOffset + 3]);
      }

      /**
       * Guess a MIME from leading bytes. Returns '' when nothing matches.
       * @param {Uint8Array} pBytes
       * @returns {string}
       */
      function sniffMagic(pBytes) {
        if (!pBytes || !pBytes.length) {
          return '';
        }

        // RIFF container: WEBP / WAV / AVI share "RIFF"; the brand sits at bytes 8..11.
        if (fourCC(pBytes, 0) === 'RIFF') {
          var tmpBrand = fourCC(pBytes, 8);
          if (tmpBrand === 'WEBP') {
            return 'image/webp';
          }
          if (tmpBrand === 'WAVE') {
            return 'audio/wav';
          }
          if (tmpBrand === 'AVI ') {
            return 'video/x-msvideo';
          }
        }

        // ISO base media (mp4 / m4a / mov): 'ftyp' at offset 4, brand at 8..11.
        if (fourCC(pBytes, 4) === 'ftyp') {
          var _tmpBrand = fourCC(pBytes, 8);
          if (_tmpBrand.indexOf('M4A') === 0) {
            return 'audio/mp4';
          }
          if (_tmpBrand === 'qt  ') {
            return 'video/quicktime';
          }
          return 'video/mp4';
        }
        for (var i = 0; i < MAGIC_PREFIXES.length; i++) {
          if (startsWith(pBytes, MAGIC_PREFIXES[i].Bytes)) {
            return MAGIC_PREFIXES[i].MIME;
          }
        }
        return '';
      }

      /**
       * Probe a descriptor's URL and return an enrichment object. Never throws — every rung is guarded and a
       * blocked/absent step just leaves its fields empty.
       *
       * @param {Object} pDescriptor - a normalized FileDescriptor (only .URL is read)
       * @param {Object} pOptions - { fetch: function, RangeBytes?: number }
       * @returns {Promise<Object>} { MIMEType, MIMESource, AcceptRanges, Size, MagicBytes }
       */
      function probeDescriptor(pDescriptor, pOptions) {
        var tmpOptions = pOptions || {};
        var tmpFetch = tmpOptions.fetch;
        var tmpURL = pDescriptor && pDescriptor.URL;
        var tmpRangeBytes = typeof tmpOptions.RangeBytes === 'number' && tmpOptions.RangeBytes > 0 ? tmpOptions.RangeBytes : 64;
        var tmpResult = {
          MIMEType: '',
          MIMESource: '',
          AcceptRanges: null,
          Size: null,
          MagicBytes: null
        };
        if (typeof tmpFetch !== 'function' || !tmpURL) {
          return Promise.resolve(tmpResult);
        }

        // Rung 1 — HEAD.
        return Promise.resolve().then(function () {
          return tmpFetch(tmpURL, {
            method: 'HEAD'
          });
        }).then(function (pHeadResponse) {
          if (pHeadResponse && pHeadResponse.ok) {
            var tmpContentType = cleanMIME(readHeader(pHeadResponse.headers, 'content-type'));
            if (tmpContentType) {
              tmpResult.MIMEType = tmpContentType;
              tmpResult.MIMESource = 'header';
            }
            var tmpLength = readHeader(pHeadResponse.headers, 'content-length');
            if (tmpLength && !isNaN(Number(tmpLength))) {
              tmpResult.Size = Number(tmpLength);
            }
            var tmpAcceptRanges = readHeader(pHeadResponse.headers, 'accept-ranges');
            if (tmpAcceptRanges) {
              tmpResult.AcceptRanges = String(tmpAcceptRanges).toLowerCase().indexOf('bytes') >= 0;
            }
          }
        }).catch(function () {/* HEAD refused / cross-origin — the Range rung below often still works */}).then(function () {
          // Rungs 2 + 3 — a small Range read confirms 206 support AND yields magic bytes. Skip it only when we
          // already have a sharp MIME and a known range answer (nothing left to learn cheaply).
          var tmpNeedMagic = isGenericMIME(tmpResult.MIMEType);
          var tmpNeedRanges = tmpResult.AcceptRanges === null;
          if (!tmpNeedMagic && !tmpNeedRanges) {
            return null;
          }
          return Promise.resolve().then(function () {
            return tmpFetch(tmpURL, {
              headers: {
                Range: 'bytes=0-' + (tmpRangeBytes - 1)
              }
            });
          }).then(function (pRangeResponse) {
            if (!pRangeResponse) {
              return;
            }
            if (pRangeResponse.status === 206) {
              tmpResult.AcceptRanges = true;
            } else if (tmpResult.AcceptRanges === null && pRangeResponse.ok) {
              tmpResult.AcceptRanges = false;
            }
            var tmpContentRange = readHeader(pRangeResponse.headers, 'content-range');
            if (tmpContentRange) {
              var tmpTotalMatch = /\/\s*(\d+)\s*$/.exec(tmpContentRange);
              if (tmpTotalMatch) {
                tmpResult.Size = Number(tmpTotalMatch[1]);
              }
            }
            if (tmpNeedMagic && typeof pRangeResponse.arrayBuffer === 'function') {
              return Promise.resolve(pRangeResponse.arrayBuffer()).then(function (pBuffer) {
                if (!pBuffer) {
                  return;
                }
                var tmpBytes = new Uint8Array(pBuffer);
                tmpResult.MagicBytes = toHex(tmpBytes, 16);
                var tmpGuess = sniffMagic(tmpBytes);
                if (tmpGuess && isGenericMIME(tmpResult.MIMEType)) {
                  tmpResult.MIMEType = tmpGuess;
                  tmpResult.MIMESource = 'magic';
                }
              });
            }
          }).catch(function () {/* Range blocked — keep whatever HEAD gave us */});
        }).then(function () {
          return tmpResult;
        });
      }
      module.exports = {
        probeDescriptor: probeDescriptor,
        sniffMagic: sniffMagic,
        isGenericMIME: isGenericMIME,
        cleanMIME: cleanMIME
      };
    }, {}],
    32: [function (require, module, exports) {
      'use strict';

      // The shared fileview shell CSS — the `.pfv-*` family. Every color/size is wired through pict-provider-theme
      // tokens (var(--theme-color-*, #fallback)) so a host using pict-provider-theme gets a themed viewer automatically,
      // and a host without it still gets the hand-picked fallbacks. Renderer-specific styling (the code gutter, the
      // OpenSeadragon canvas, the PDF page strip, …) stays with each delegated child section; this file owns only the
      // chrome (toolbar + stage + empty state + the always-present download card).
      var FILEVIEW_CSS = /*css*/"\n\t.pfv-root { display: flex; flex-direction: column; min-height: 0; height: 100%; width: 100%; box-sizing: border-box;\n\t\tbackground: var(--theme-color-background-panel, #ffffff); color: var(--theme-color-text-primary, #1f2733);\n\t\tborder: 1px solid var(--theme-color-border-default, #d7dce3); border-radius: 8px; overflow: hidden; }\n\n\t/* Maximized: the viewer leaves its host box and fills the browser viewport. Esc or the toolbar button restores it. */\n\t.pfv-root.pfv-fullscreen { position: fixed; top: 0; right: 0; bottom: 0; left: 0; width: 100vw; height: 100vh;\n\t\tborder-radius: 0; border: 0; z-index: 2147483000; }\n\n\t.pfv-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; flex: 0 0 auto;\n\t\tpadding: 0.55rem 0.85rem; border-bottom: 1px solid var(--theme-color-border-light, #e8ebf0);\n\t\tbackground: var(--theme-color-background-secondary, #f7f9fb); min-height: 2.6rem; }\n\t.pfv-toolbar-title { display: inline-flex; align-items: center; gap: 0.5rem; min-width: 0; font-size: 0.9rem; font-weight: 600; }\n\t.pfv-toolbar-title .pfv-name { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n\t.pfv-toolbar-sub { font-size: 0.74rem; font-weight: 500; color: var(--theme-color-text-muted, #6b7686); white-space: nowrap; }\n\t.pfv-toolbar-actions { display: inline-flex; align-items: center; gap: 0.4rem; flex: 0 0 auto; }\n\n\t.pfv-stage { position: relative; flex: 1 1 auto; min-height: 0; overflow: auto;\n\t\tdisplay: flex; align-items: stretch; justify-content: stretch; }\n\t.pfv-stage > * { min-width: 0; width: 100%; }\n\n\t.pfv-btn { font-size: 0.8rem; font-weight: 600; padding: 0.38rem 0.72rem; border-radius: 7px;\n\t\tborder: 1px solid var(--theme-color-border-medium, #d5dbe3); background: var(--theme-color-background-panel, #fff);\n\t\tcolor: var(--theme-color-text-secondary, #45505f); cursor: pointer; display: inline-flex; align-items: center;\n\t\tgap: 0.35rem; text-decoration: none; }\n\t.pfv-btn:hover { border-color: var(--theme-color-brand-primary, #5650e6); color: var(--theme-color-text-primary, #1f2733); text-decoration: none; }\n\t.pfv-btn-primary { background: var(--theme-color-brand-primary, #5650e6); border-color: var(--theme-color-brand-primary, #5650e6); color: #fff; }\n\t.pfv-btn-primary:hover { color: #fff; opacity: 0.94; }\n\n\t.pfv-empty { margin: auto; text-align: center; color: var(--theme-color-text-muted, #8a94a3); padding: 2.4rem 1rem; }\n\t.pfv-empty .pfv-empty-glyph { font-size: 2rem; opacity: 0.5; display: block; margin-bottom: 0.6rem; }\n\t.pfv-empty p { margin: 0; font-size: 0.9rem; }\n\n\t.pfv-card { margin: auto; display: flex; align-items: center; gap: 0.9rem; max-width: 30rem; width: calc(100% - 2rem);\n\t\tpadding: 1.1rem 1.2rem; border: 1px solid var(--theme-color-border-light, #e8ebf0); border-radius: 10px;\n\t\tbackground: var(--theme-color-background-secondary, #f7f9fb); }\n\t.pfv-card-icon { font-size: 1.8rem; color: var(--theme-color-brand-primary, #5650e6); flex: 0 0 auto; }\n\t.pfv-card-meta { min-width: 0; flex: 1 1 auto; }\n\t.pfv-card-name { font-size: 0.98rem; font-weight: 650; color: var(--theme-color-text-primary, #1f2733);\n\t\twhite-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n\t.pfv-card-sub { font-size: 0.78rem; color: var(--theme-color-text-muted, #6b7686); margin-top: 0.15rem; }\n\t.pfv-card-actions { flex: 0 0 auto; }\n\n\t/* Loading + truncation notice shared by the content-loading renderers (text / code / markdown). */\n\t.pfv-loading { margin: auto; padding: 1.6rem 1rem; color: var(--theme-color-text-muted, #8a94a3); font-size: 0.88rem;\n\t\tdisplay: inline-flex; align-items: center; gap: 0.4rem; }\n\t.pfv-notice { padding: 0.5rem 0.85rem; font-size: 0.76rem; color: var(--theme-color-text-muted, #6b7686);\n\t\tbackground: var(--theme-color-background-secondary, #f7f9fb); border-bottom: 1px solid var(--theme-color-border-light, #e8ebf0); }\n\n\t/* Plain-text lens \u2014 a readable, horizontally-scrolling <pre>. Also the degrade for code/markdown. */\n\t.pfv-textwrap { width: 100%; min-width: 0; display: flex; flex-direction: column; }\n\t.pfv-text { margin: 0; padding: 0.9rem 1.05rem; flex: 1 1 auto; overflow: auto; white-space: pre; tab-size: 4;\n\t\tfont-family: var(--theme-typography-family-mono, 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace);\n\t\tfont-size: 0.82rem; line-height: 1.55; color: var(--theme-color-text-primary, #1f2733);\n\t\tbackground: var(--theme-color-background-panel, #ffffff); }\n\n\t/* Hosts the delegated children mount into. The child owns its own inner styling; fileview just gives it the\n\t   full stage and lets it scroll. */\n\t.pfv-code-host { width: 100%; min-width: 0; display: flex; }\n\t.pfv-code-host .pict-code-editor-wrap { flex: 1 1 auto; border: 0; border-radius: 0; }\n\t.pfv-content-host { width: 100%; min-width: 0; overflow: auto; padding: 0.4rem 1.1rem 1.4rem; box-sizing: border-box; }\n\t.pfv-image-host { width: 100%; min-width: 0; height: 100%; min-height: 0; display: flex; }\n\n\t/* Basic (self-contained) image lens \u2014 a responsive, fit-to-stage <img>. The full zoom/pan chrome lives in\n\t   the delegated pict-section-image child; this is the always-present degrade. */\n\t.pfv-imagewrap { width: 100%; min-width: 0; height: 100%; min-height: 0; display: flex; align-items: center; justify-content: center; overflow: auto; padding: 0.6rem; box-sizing: border-box; }\n\t.pfv-image { display: block; max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; margin: auto; }\n\n\t/* Container-relative responsive hooks. The provider stamps pfv-phone / pfv-tablet / pfv-desktop on the root from a\n\t   ResizeObserver (a later cross-device slice); these are the baseline rules so the chrome is usable before that\n\t   lands and on hosts without ResizeObserver. */\n\t.pfv-root.pfv-phone .pfv-toolbar { flex-wrap: wrap; }\n\t.pfv-root.pfv-phone .pfv-toolbar-sub { display: none; }\n";
      module.exports = {
        FILEVIEW_CSS: FILEVIEW_CSS
      };
    }, {}],
    33: [function (require, module, exports) {
      'use strict';

      /**
       * pict-section-fileview — a universal, embeddable "quality viewer."
       *
       * Drop one control on a page, point it at a server-served file (a Sluice StoredFile record OR a bare range-served
       * URL), and it detects the type and renders it well — on phones, iPads, desktops, TVs, and projected displays. It is
       * an orchestrator, not a renderer: it owns type detection, a pluggable kind→renderer registry, the chrome, and child
       * lifecycle, and delegates each media kind to a purpose-built child section.
       *
       * Shape — the 3-file idiom (as pict-section-content / pict-section-workspace):
       *   Pict-Section-Fileview.js            this file — the factory + the public exports
       *   providers/Pict-Fileview-Provider.js the DOM-free heart: registry + descriptor normalize + resolve + render
       *   views/Pict-View-Fileview.js         the chrome shell (container + lifecycle)
       *   BuiltinRenderers.js                 the default renderer plugins (Phase 1: the download card)
       *   Pict-Fileview-CSS.js                the shared `.pfv-*` chrome CSS
       *
       * Usage:
       *   const libFileview = require('pict-section-fileview');
       *   libFileview.createFileview(pict, { Identifier: 'MyFileView', DestinationAddress: '#SomeDiv' });
       *   pict.views.MyFileView.render();
       *   pict.providers.MyFileView.setFile('https://host/1.0/Depot/File/42/Open');   // a URL
       *   pict.providers.MyFileView.setFile(tmpStoredFileRecord);                      // or a record
       */
      var PictFileviewProvider = require('./providers/Pict-Fileview-Provider.js');
      var PictViewFileview = require('./views/Pict-View-Fileview.js');
      var _require = require('./Pict-Fileview-CSS.js'),
        FILEVIEW_CSS = _require.FILEVIEW_CSS;
      var _require2 = require('./BuiltinRenderers.js'),
        BUILTIN_RENDERERS = _require2.BUILTIN_RENDERERS,
        DownloadCardRenderer = _require2.DownloadCardRenderer,
        TextRenderer = _require2.TextRenderer,
        CodeRenderer = _require2.CodeRenderer,
        MarkdownRenderer = _require2.MarkdownRenderer,
        BasicImageRenderer = _require2.BasicImageRenderer,
        ImageRenderer = _require2.ImageRenderer;
      var libFileviewProbe = require('./Fileview-Probe.js');

      // Where the viewer mounts by default. Override per instance via config `DestinationAddress`, or set an app-wide
      // default with the exported setDefaultDestination().
      var DEFAULT_DESTINATION = '#Pict-Application-Container';
      function setDefaultDestination(pSelector) {
        if (pSelector) {
          DEFAULT_DESTINATION = pSelector;
        }
      }

      /**
       * Register a fileview provider + view pair with a pict application.
       *
       * @param {Object} pPict - the pict application instance
       * @param {Object} [pConfig] - { Identifier?, DestinationAddress?, Ordinal?, File?, Renderers?, DisableBuiltins?,
       *                               CSSExtra?, ProviderClass?, ViewClass? }
       * @returns {{ Identifier: string }}
       */
      function createFileview(pPict, pConfig) {
        var tmpConfig = pConfig || {};
        var tmpId = tmpConfig.Identifier || 'Pict-Section-Fileview';
        var tmpDest = tmpConfig.DestinationAddress || DEFAULT_DESTINATION;
        var tmpProviderClass = tmpConfig.ProviderClass || PictFileviewProvider;
        var tmpViewClass = tmpConfig.ViewClass || PictViewFileview;
        pPict.addProvider(tmpId, {
          ProviderIdentifier: tmpId,
          AutoInitialize: true,
          AutoInitializeOrdinal: tmpConfig.Ordinal || 230,
          FileviewConfig: tmpConfig
        }, tmpProviderClass);

        // Instance-scoped element ids (so multiple fileviews coexist on one page — locked decision #1).
        var tmpContainerTemplate = '<div class="pfv-root" id="' + tmpId + '-Root">' + '<div class="pfv-toolbar" id="' + tmpId + '-Toolbar"></div>' + '<div class="pfv-stage" id="' + tmpId + '-Stage"></div>' + '</div>';
        pPict.addView(tmpId, {
          ViewIdentifier: tmpId,
          DefaultRenderable: tmpId + '-Wrap',
          DefaultDestinationAddress: tmpDest,
          AutoRender: false,
          CSS: FILEVIEW_CSS + (tmpConfig.CSSExtra || ''),
          Templates: [{
            Hash: tmpId + '-Template',
            Template: tmpContainerTemplate
          }],
          Renderables: [{
            RenderableHash: tmpId + '-Wrap',
            TemplateHash: tmpId + '-Template',
            DestinationAddress: tmpDest,
            RenderMethod: 'replace'
          }]
        }, tmpViewClass);
        return {
          Identifier: tmpId
        };
      }
      module.exports = {
        createFileview: createFileview,
        setDefaultDestination: setDefaultDestination,
        PictFileviewProvider: PictFileviewProvider,
        PictViewFileview: PictViewFileview,
        FILEVIEW_CSS: FILEVIEW_CSS,
        BUILTIN_RENDERERS: BUILTIN_RENDERERS,
        DownloadCardRenderer: DownloadCardRenderer,
        TextRenderer: TextRenderer,
        CodeRenderer: CodeRenderer,
        MarkdownRenderer: MarkdownRenderer,
        BasicImageRenderer: BasicImageRenderer,
        ImageRenderer: ImageRenderer,
        probeDescriptor: libFileviewProbe.probeDescriptor,
        sniffMagic: libFileviewProbe.sniffMagic
      };
    }, {
      "./BuiltinRenderers.js": 30,
      "./Fileview-Probe.js": 31,
      "./Pict-Fileview-CSS.js": 32,
      "./providers/Pict-Fileview-Provider.js": 34,
      "./views/Pict-View-Fileview.js": 35
    }],
    34: [function (require, module, exports) {
      'use strict';

      var libPictProvider = require('pict-provider');
      var _require3 = require('../Pict-Fileview-CSS.js'),
        FILEVIEW_CSS = _require3.FILEVIEW_CSS;
      var _require4 = require('../BuiltinRenderers.js'),
        BUILTIN_RENDERERS = _require4.BUILTIN_RENDERERS,
        LANGUAGE_BY_EXTENSION = _require4.LANGUAGE_BY_EXTENSION;
      var libFileviewProbe = require('../Fileview-Probe.js');

      /**
       * The fileview dispatch core — the DOM-free heart of pict-section-fileview.
       *
       * It owns three things and no rendering of its own:
       *   1. a pluggable renderer registry (registerRenderer / unregisterRenderer / listRenderers / getRenderer);
       *   2. descriptor normalization — a host may hand a complete record OR a bare URL string, and both become one
       *      FileDescriptor (locked decision #2);
       *   3. resolution — resolveRenderer(descriptor) picks the highest-scoring renderer whose Capability gate passes.
       *
       * The view (Pict-View-Fileview) is a thin shell that paints the container and calls renderFileview() here; the
       * registry/normalize/resolve methods are pure and unit-testable headless. Element ids derive from the instance's
       * ProviderIdentifier so multiple fileviews coexist on one page (locked decision #1).
       *
       * FileDescriptor (the contract every renderer reads):
       *   { URL, Name, Extension, MIMEType, Size, Kind, AcceptRanges, MagicBytes,
       *     Meta:{ title, language, poster, TileSources, duration, peaks },
       *     Probe:{ KindSource, MIMESource, ResolvedRendererHash, Strategy } }
       */
      var PictFileviewProvider = /*#__PURE__*/function (_libPictProvider2) {
        function PictFileviewProvider(pFable, pOptions, pServiceHash) {
          var _this37;
          _classCallCheck(this, PictFileviewProvider);
          _this37 = _callSuper(this, PictFileviewProvider, [pFable, pOptions, pServiceHash]);

          // Providers register their own CSS (pict CLAUDE.md). The view uses the same hash, so it injects once.
          if (_this37.pict && _this37.pict.CSSMap && typeof _this37.pict.CSSMap.addCSS === 'function') {
            _this37.pict.CSSMap.addCSS('Pict-Section-Fileview-CSS', FILEVIEW_CSS, 500);
          }
          var tmpConfig = _this37.options && _this37.options.FileviewConfig || {};
          _this37.fileviewConfig = tmpConfig;

          // The registry: an ordered list plus a by-hash index for dedupe/replacement.
          _this37._renderers = [];
          _this37._rendererIndex = {};
          _this37._registrationOrdinal = 0;
          if (!tmpConfig.DisableBuiltins) {
            for (var i = 0; i < BUILTIN_RENDERERS.length; i++) {
              _this37.registerRenderer(BUILTIN_RENDERERS[i]);
            }
          }
          if (Array.isArray(tmpConfig.Renderers)) {
            for (var _i28 = 0; _i28 < tmpConfig.Renderers.length; _i28++) {
              _this37.registerRenderer(tmpConfig.Renderers[_i28]);
            }
          }

          // Current file + mounted renderer handle.
          _this37._descriptor = null;
          _this37._currentHandle = null;

          // Fullscreen (fill-the-viewport) state + the document Escape handler installed only while maximized.
          _this37._fullscreen = false;
          _this37._keydownHandler = null;

          // Monotonic counter for instance-unique child view hashes (a delegated child per mount).
          _this37._childSerial = 0;

          // Observable state slot.
          var tmpId = _this37.identifier;
          if (_this37.pict && _this37.pict.AppData) {
            _this37.pict.AppData[tmpId] = _this37.pict.AppData[tmpId] || {
              Descriptor: null,
              ResolvedRendererHash: null
            };
          }

          // Seed an initial file if the config carried one.
          if (tmpConfig.File) {
            _this37.setFile(tmpConfig.File);
          }
          return _this37;
        }

        /** The instance hash — the registration key for the provider, its view, and every element id. */
        _inherits(PictFileviewProvider, _libPictProvider2);
        return _createClass(PictFileviewProvider, [{
          key: "identifier",
          get: function get() {
            return this.options && (this.options.ProviderIdentifier || this.options.ViewIdentifier) || 'Pict-Section-Fileview';
          }
        }, {
          key: "stageSelector",
          get: function get() {
            return '#' + this.identifier + '-Stage';
          }
        }, {
          key: "toolbarSelector",
          get: function get() {
            return '#' + this.identifier + '-Toolbar';
          }
        }, {
          key: "rootSelector",
          get: function get() {
            return '#' + this.identifier + '-Root';
          }

          // ---------------------------------------------------------------------------------------------------------------
          // Registry
          // ---------------------------------------------------------------------------------------------------------------

          /**
           * Register (or replace, by Hash) a renderer plugin. Returns the provider for chaining.
           * @param {Object} pRenderer - { Hash, Priority?, Capability?, matches, prepareDescriptor?, mount }
           */
        }, {
          key: "registerRenderer",
          value: function registerRenderer(pRenderer) {
            if (!pRenderer || !pRenderer.Hash || typeof pRenderer.matches !== 'function' || typeof pRenderer.mount !== 'function') {
              this.log.warn('pict-section-fileview: ignoring an invalid renderer (needs Hash + matches() + mount()).', {
                Renderer: pRenderer
              });
              return this;
            }
            var tmpEntry = {
              Renderer: pRenderer,
              Ordinal: this._registrationOrdinal++
            };
            if (Object.prototype.hasOwnProperty.call(this._rendererIndex, pRenderer.Hash)) {
              // Replace in place, preserving list position.
              var tmpExisting = this._rendererIndex[pRenderer.Hash];
              for (var i = 0; i < this._renderers.length; i++) {
                if (this._renderers[i] === tmpExisting) {
                  this._renderers[i] = tmpEntry;
                  break;
                }
              }
            } else {
              this._renderers.push(tmpEntry);
            }
            this._rendererIndex[pRenderer.Hash] = tmpEntry;
            return this;
          }

          /** Remove a renderer by Hash. Returns true if one was removed. */
        }, {
          key: "unregisterRenderer",
          value: function unregisterRenderer(pHash) {
            if (!Object.prototype.hasOwnProperty.call(this._rendererIndex, pHash)) {
              return false;
            }
            var tmpEntry = this._rendererIndex[pHash];
            var tmpPosition = this._renderers.indexOf(tmpEntry);
            if (tmpPosition >= 0) {
              this._renderers.splice(tmpPosition, 1);
            }
            delete this._rendererIndex[pHash];
            return true;
          }

          /** The registered renderer plugins, in registration order. */
        }, {
          key: "listRenderers",
          value: function listRenderers() {
            return this._renderers.map(function (pEntry) {
              return pEntry.Renderer;
            });
          }

          /** Look up a renderer plugin by Hash (or null). */
        }, {
          key: "getRenderer",
          value: function getRenderer(pHash) {
            var tmpEntry = this._rendererIndex[pHash];
            return tmpEntry ? tmpEntry.Renderer : null;
          }

          // ---------------------------------------------------------------------------------------------------------------
          // Descriptor normalization — a record OR a bare URL, both to one FileDescriptor (locked decision #2)
          // ---------------------------------------------------------------------------------------------------------------

          /**
           * Normalize a host input into a FileDescriptor. Accepts:
           *   - a string: treated as a URL (ProbeStrategy 'auto' — the probe itself is a later slice);
           *   - an object: a record (Sluice StoredFile or a pre-built descriptor), mapped field-by-field with common
           *     Sluice fallbacks. When the host hands a complete record with Kind set, ProbeStrategy is 'none'.
           * No network is touched here — this is pure.
           * @param {(string|Object)} pInput
           * @returns {Object} FileDescriptor
           */
        }, {
          key: "normalizeDescriptor",
          value: function normalizeDescriptor(pInput) {
            var tmpRaw;
            var tmpStrategy;
            if (typeof pInput === 'string') {
              tmpRaw = {
                URL: pInput
              };
              tmpStrategy = 'auto';
            } else {
              tmpRaw = pInput || {};
              tmpStrategy = tmpRaw.ProbeStrategy || (tmpRaw.Kind ? 'none' : 'auto');
            }
            var tmpURL = tmpRaw.URL || tmpRaw.ContentURL || tmpRaw.Url || tmpRaw.Address || '';
            var tmpName = tmpRaw.Name || tmpRaw.FileName || tmpRaw.Filename || this._basename(tmpURL) || '';
            var tmpExtension = (tmpRaw.Extension || tmpRaw.FileExtension || this._extensionFromName(tmpName) || '').replace(/^\./, '').toLowerCase();
            var tmpMIME = tmpRaw.MIMEType || tmpRaw.MimeType || tmpRaw.ContentType || tmpRaw.Type || '';
            var tmpSize = tmpRaw.Size;
            if (typeof tmpSize !== 'number') {
              tmpSize = typeof tmpRaw.FileSize === 'number' ? tmpRaw.FileSize : typeof tmpRaw.SizeInBytes === 'number' ? tmpRaw.SizeInBytes : null;
            }
            return {
              URL: tmpURL,
              Name: tmpName,
              Extension: tmpExtension,
              MIMEType: tmpMIME,
              Size: tmpSize,
              Kind: tmpRaw.Kind || '',
              AcceptRanges: typeof tmpRaw.AcceptRanges === 'boolean' ? tmpRaw.AcceptRanges : null,
              MagicBytes: tmpRaw.MagicBytes || null,
              Meta: Object.assign({}, tmpRaw.Meta),
              Probe: Object.assign({
                KindSource: '',
                MIMESource: '',
                ResolvedRendererHash: '',
                Strategy: tmpStrategy
              }, tmpRaw.Probe)
            };
          }

          // ---------------------------------------------------------------------------------------------------------------
          // Resolution — highest score wins; Capability gate lets a renderer abstain; Priority then order break ties
          // ---------------------------------------------------------------------------------------------------------------

          /**
           * Pick the best renderer for a descriptor. Score comes from each renderer's matches(); a renderer whose
           * Capability(provider) returns false is skipped entirely (so a missing page-global library falls through to the
           * next-best renderer, ultimately the download card). Ties break by Priority (higher wins) then registration order.
           * @param {Object} pDescriptor
           * @returns {Object|null} the winning renderer plugin
           */
        }, {
          key: "resolveRenderer",
          value: function resolveRenderer(pDescriptor) {
            var tmpBest = null;
            var tmpBestScore = -Infinity;
            var tmpBestPriority = -Infinity;
            var tmpBestOrdinal = Infinity;
            for (var i = 0; i < this._renderers.length; i++) {
              var tmpEntry = this._renderers[i];
              var tmpRenderer = tmpEntry.Renderer;
              if (typeof tmpRenderer.Capability === 'function' && !tmpRenderer.Capability(this)) {
                continue;
              }
              var tmpScore = void 0;
              try {
                tmpScore = tmpRenderer.matches(pDescriptor);
              } catch (pError) {
                this.log.warn('pict-section-fileview: a renderer matches() threw; skipping it.', {
                  Hash: tmpRenderer.Hash,
                  Error: pError.message
                });
                continue;
              }
              if (typeof tmpScore !== 'number' || !(tmpScore > 0)) {
                continue;
              }
              var tmpPriority = typeof tmpRenderer.Priority === 'number' ? tmpRenderer.Priority : 0;
              if (tmpScore > tmpBestScore || tmpScore === tmpBestScore && tmpPriority > tmpBestPriority || tmpScore === tmpBestScore && tmpPriority === tmpBestPriority && tmpEntry.Ordinal < tmpBestOrdinal) {
                tmpBest = tmpRenderer;
                tmpBestScore = tmpScore;
                tmpBestPriority = tmpPriority;
                tmpBestOrdinal = tmpEntry.Ordinal;
              }
            }
            return tmpBest;
          }

          // ---------------------------------------------------------------------------------------------------------------
          // Public API — point the viewer at a file
          // ---------------------------------------------------------------------------------------------------------------

          /**
           * Point the viewer at a file (a record or a URL string). Normalizes, stores the descriptor in AppData, and
           * re-paints the stage if the view has already rendered. Returns the resolved FileDescriptor.
           * @param {(string|Object)} pInput
           * @returns {Object} FileDescriptor
           */
        }, {
          key: "setFile",
          value: function setFile(pInput) {
            this._descriptor = pInput === null || typeof pInput === 'undefined' ? null : this.normalizeDescriptor(pInput);
            var tmpId = this.identifier;
            if (this.pict && this.pict.AppData) {
              this.pict.AppData[tmpId] = this.pict.AppData[tmpId] || {};
              this.pict.AppData[tmpId].Descriptor = this._descriptor;
            }

            // Re-paint only if the container exists (the view has rendered at least once).
            if (this._stageExists()) {
              this.renderFileview();
            }

            // Bare-URL inputs climb the probe ladder (async) to learn MIME / size / range support / magic, then
            // re-paint if the resolver's answer sharpens. Records that already carry a Kind are 'none' → no probe.
            if (this._descriptor && this._descriptor.Probe && this._descriptor.Probe.Strategy === 'auto' && !this._descriptor.Probe.Probed && this.fileviewConfig.Probe !== false) {
              this._probeAndRepaint(this._descriptor);
            }
            return this._descriptor;
          }

          /**
           * Climb the probe ladder for a descriptor and merge the result (filling only blanks — a record's explicit
           * values always win), then re-paint when something changed and a newer setFile has not superseded us.
           * Fire-and-forget: never throws, and quietly no-ops when no fetch is available.
           * @param {Object} pDescriptor
           */
        }, {
          key: "_probeAndRepaint",
          value: function _probeAndRepaint(pDescriptor) {
            var _this38 = this;
            var tmpFetch = this._getFetch();
            if (!tmpFetch) {
              pDescriptor.Probe.Probed = true;
              return;
            }
            libFileviewProbe.probeDescriptor(pDescriptor, {
              fetch: tmpFetch
            }).then(function (pEnrichment) {
              pDescriptor.Probe.Probed = true;
              if (_this38._descriptor !== pDescriptor) {
                return;
              } // a newer setFile replaced this file mid-probe

              var tmpChanged = false;
              if (!pDescriptor.MIMEType && pEnrichment.MIMEType) {
                pDescriptor.MIMEType = pEnrichment.MIMEType;
                pDescriptor.Probe.MIMESource = pEnrichment.MIMESource;
                tmpChanged = true;
              }
              if (pDescriptor.AcceptRanges === null && pEnrichment.AcceptRanges !== null) {
                pDescriptor.AcceptRanges = pEnrichment.AcceptRanges;
                tmpChanged = true;
              }
              if (typeof pDescriptor.Size !== 'number' && typeof pEnrichment.Size === 'number') {
                pDescriptor.Size = pEnrichment.Size;
                tmpChanged = true;
              }
              if (!pDescriptor.MagicBytes && pEnrichment.MagicBytes) {
                pDescriptor.MagicBytes = pEnrichment.MagicBytes;
                tmpChanged = true;
              }
              if (tmpChanged && _this38._stageExists()) {
                _this38.renderFileview();
              }
            }).catch(function (pError) {
              pDescriptor.Probe.Probed = true;
              _this38.log.warn('pict-section-fileview: probe failed.', {
                Error: pError && pError.message
              });
            });
          }

          /** The current FileDescriptor (or null). */
        }, {
          key: "descriptor",
          get: function get() {
            return this._descriptor;
          }

          // ---------------------------------------------------------------------------------------------------------------
          // Rendering — the view calls this from onAfterRender
          // ---------------------------------------------------------------------------------------------------------------

          /** Paint the toolbar + stage into the container the view rendered. */
        }, {
          key: "renderFileview",
          value: function renderFileview() {
            if (!this.pict || !this.pict.ContentAssignment) {
              return;
            }
            this._renderToolbar();
            this._mountResolved();
            // A repaint never re-stamps the root, but keep the class in sync in case a full view re-render did.
            if (this._fullscreen) {
              this._applyFullscreenClass(true);
            }
          }

          // ---------------------------------------------------------------------------------------------------------------
          // Fullscreen — fill the browser viewport, and back (the viewer's own chrome; the embedded child runs headless)
          // ---------------------------------------------------------------------------------------------------------------

          /** Toggle the maximized (fill-the-viewport) presentation. */
        }, {
          key: "toggleFullscreen",
          value: function toggleFullscreen() {
            if (this._fullscreen) {
              this.exitFullscreen();
            } else {
              this.enterFullscreen();
            }
          }

          /** Maximize: lift the viewer root out of its host box to fill the browser viewport (Esc or the button restores). */
        }, {
          key: "enterFullscreen",
          value: function enterFullscreen() {
            if (this._fullscreen) {
              return;
            }
            this._fullscreen = true;
            this._applyFullscreenClass(true);
            this._installEscapeHandler();
            this._renderToolbar(); // swap the glyph to "restore"
          }

          /** Restore the viewer to its host box. */
        }, {
          key: "exitFullscreen",
          value: function exitFullscreen() {
            if (!this._fullscreen) {
              return;
            }
            this._fullscreen = false;
            this._applyFullscreenClass(false);
            this._removeEscapeHandler();
            this._renderToolbar();
          }

          /** Is the viewer currently maximized? */
        }, {
          key: "isFullscreen",
          value: function isFullscreen() {
            return this._fullscreen;
          }

          /** Add or remove the pfv-fullscreen class on the viewer root. */
        }, {
          key: "_applyFullscreenClass",
          value: function _applyFullscreenClass(pOn) {
            if (!this.pict || !this.pict.ContentAssignment || typeof this.pict.ContentAssignment.getElement !== 'function') {
              return;
            }
            var tmpSet = this.pict.ContentAssignment.getElement(this.rootSelector);
            var tmpRoot = tmpSet && tmpSet.length > 0 ? tmpSet[0] : null;
            if (tmpRoot && tmpRoot.classList) {
              tmpRoot.classList[pOn ? 'add' : 'remove']('pfv-fullscreen');
            }
          }

          /**
           * Install a document-level Escape handler while maximized. A document keydown listener is the documented pict
           * exception (a browser-level event with no element-level inline equivalent); it is added only while fullscreen
           * and removed on exit / destroy.
           */
        }, {
          key: "_installEscapeHandler",
          value: function _installEscapeHandler() {
            if (this._keydownHandler || typeof document === 'undefined' || typeof document.addEventListener !== 'function') {
              return;
            }
            var tmpSelf = this;
            this._keydownHandler = function (pEvent) {
              if (pEvent && pEvent.key === 'Escape' && tmpSelf._fullscreen) {
                tmpSelf.exitFullscreen();
              }
            };
            document.addEventListener('keydown', this._keydownHandler);
          }

          /** Remove the document-level Escape handler. */
        }, {
          key: "_removeEscapeHandler",
          value: function _removeEscapeHandler() {
            if (this._keydownHandler && typeof document !== 'undefined' && typeof document.removeEventListener === 'function') {
              document.removeEventListener('keydown', this._keydownHandler);
            }
            this._keydownHandler = null;
          }

          /** Register the maximize / restore glyphs in the icon registry (idempotent; no-op without an Icon provider). */
        }, {
          key: "_ensureFullscreenIcons",
          value: function _ensureFullscreenIcons() {
            if (!this.pict || !this.pict.providers || !this.pict.providers.Icon || typeof this.pict.providers.Icon.registerSet !== 'function') {
              return;
            }
            this.pict.providers.Icon.registerSet({
              Outline: {
                Maximize: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
                Minimize: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>'
              }
            });
          }
        }, {
          key: "_renderToolbar",
          value: function _renderToolbar() {
            var tmpDescriptor = this._descriptor;
            var tmpTitleGlyph = this._icon('File');
            var tmpName = tmpDescriptor ? tmpDescriptor.Name || 'Untitled file' : 'File viewer';
            var tmpSub = '';
            if (tmpDescriptor) {
              var tmpBits = [];
              if (tmpDescriptor.MIMEType) {
                tmpBits.push(tmpDescriptor.MIMEType);
              } else if (tmpDescriptor.Extension) {
                tmpBits.push('.' + tmpDescriptor.Extension);
              }
              if (typeof tmpDescriptor.Size === 'number' && tmpDescriptor.Size >= 0) {
                tmpBits.push(this._formatBytes(tmpDescriptor.Size));
              }
              tmpSub = tmpBits.join(' · ');
            }
            var tmpActions = '';

            // Maximize / restore — fills the browser viewport and back (config ShowFullscreen, default on). An inline
            // onclick survives the toolbar's re-render on every setFile (the pict rule against addEventListener).
            if (this.fileviewConfig.ShowFullscreen !== false) {
              this._ensureFullscreenIcons();
              var tmpGlyph = this._icon(this._fullscreen ? 'Minimize' : 'Maximize');
              var tmpTitle = this._fullscreen ? 'Exit full screen' : 'Full screen';
              var tmpHandlerTarget = "_Pict.providers['" + this._esc(this.identifier) + "']";
              tmpActions += '<button type="button" class="pfv-btn pfv-fullscreen-btn" title="' + tmpTitle + '"' + ' onclick="' + tmpHandlerTarget + '.toggleFullscreen()">' + tmpGlyph + '</button>';
            }
            if (tmpDescriptor && tmpDescriptor.URL) {
              tmpActions += '<a class="pfv-btn" href="' + this._esc(tmpDescriptor.URL) + '" download' + (tmpDescriptor.Name ? '="' + this._esc(tmpDescriptor.Name) + '"' : '') + '>' + this._icon('Download') + 'Download</a>';
            }
            var tmpHTML = '<div class="pfv-toolbar-title">' + tmpTitleGlyph + '<span class="pfv-name">' + this._esc(tmpName) + '</span>' + (tmpSub ? '<span class="pfv-toolbar-sub">' + this._esc(tmpSub) + '</span>' : '') + '</div>' + '<div class="pfv-toolbar-actions">' + tmpActions + '</div>';
            this.pict.ContentAssignment.assignContent(this.toolbarSelector, tmpHTML);
          }
        }, {
          key: "_mountResolved",
          value: function _mountResolved() {
            var tmpStage = this.stageSelector;
            if (!this._descriptor) {
              this._destroyCurrentHandle();
              this.pict.ContentAssignment.assignContent(tmpStage, '<div class="pfv-empty"><span class="pfv-empty-glyph">' + this._icon('File', 2) + '</span><p>No file loaded.</p></div>');
              return;
            }
            var tmpRenderer = this.resolveRenderer(this._descriptor);
            if (!tmpRenderer) {
              // Should never happen (the download card always matches), but degrade honestly rather than render nothing.
              this._destroyCurrentHandle();
              this.pict.ContentAssignment.assignContent(tmpStage, '<div class="pfv-empty"><span class="pfv-empty-glyph">' + this._icon('Warning', 2) + '</span><p>No renderer matched this file.</p></div>');
              return;
            }
            if (typeof tmpRenderer.prepareDescriptor === 'function') {
              try {
                tmpRenderer.prepareDescriptor(this._descriptor, this);
              } catch (pError) {
                this.log.warn('pict-section-fileview: prepareDescriptor threw.', {
                  Hash: tmpRenderer.Hash,
                  Error: pError.message
                });
              }
            }

            // Reuse-one-per-kind. Pict has no removeView, so re-minting a child per file leaks views/observers. When
            // the resolved renderer is the one already mounted:
            //   - same descriptor identity (a bare re-render) → nothing to do;
            //   - new file, renderer exposes update() → re-feed the live child in place, no teardown;
            //   - otherwise → fall through to a clean destroy + re-mount.
            if (this._currentHandle && this._currentHandle.Hash === tmpRenderer.Hash) {
              if (this._currentHandle.Descriptor === this._descriptor) {
                return;
              }
              if (typeof this._currentHandle.update === 'function') {
                this._currentHandle.Descriptor = this._descriptor;
                try {
                  this._currentHandle.update(this._descriptor, this);
                  return;
                } catch (pError) {
                  this.log.warn('pict-section-fileview: a renderer update() threw; re-mounting.', {
                    Hash: tmpRenderer.Hash,
                    Error: pError.message
                  });
                }
              }
            }
            this._destroyCurrentHandle();
            this.pict.ContentAssignment.assignContent(tmpStage, '');
            var tmpHandle = null;
            try {
              tmpHandle = tmpRenderer.mount(tmpStage, this._descriptor, this);
            } catch (pError) {
              this.log.error('pict-section-fileview: a renderer mount() threw.', {
                Hash: tmpRenderer.Hash,
                Error: pError.message
              });
              this.pict.ContentAssignment.assignContent(tmpStage, '<div class="pfv-empty"><span class="pfv-empty-glyph">' + this._icon('Error', 2) + '</span><p>This file could not be displayed.</p></div>');
              return;
            }
            this._currentHandle = tmpHandle || null;
            var tmpId = this.identifier;
            if (this.pict && this.pict.AppData && this.pict.AppData[tmpId]) {
              this.pict.AppData[tmpId].ResolvedRendererHash = tmpRenderer.Hash;
            }
          }
        }, {
          key: "_destroyCurrentHandle",
          value: function _destroyCurrentHandle() {
            if (this._currentHandle && typeof this._currentHandle.destroy === 'function') {
              try {
                this._currentHandle.destroy();
              } catch (pError) {
                this.log.warn('pict-section-fileview: a renderer destroy() threw.', {
                  Error: pError.message
                });
              }
            }
            this._currentHandle = null;
          }

          /** Tear down the mounted renderer. Hosts call this when disposing the viewer. */
        }, {
          key: "destroy",
          value: function destroy() {
            this._removeEscapeHandler();
            this._fullscreen = false;
            this._destroyCurrentHandle();
          }
        }, {
          key: "_stageExists",
          value: function _stageExists() {
            if (!this.pict || !this.pict.ContentAssignment || typeof this.pict.ContentAssignment.getElement !== 'function') {
              return false;
            }
            var tmpElement = this.pict.ContentAssignment.getElement(this.stageSelector);
            if (!tmpElement) {
              return false;
            }
            if (typeof tmpElement.length === 'number') {
              return tmpElement.length > 0;
            }
            return true;
          }

          // ---------------------------------------------------------------------------------------------------------------
          // Content loading + delegate resolution the renderers lean on
          // ---------------------------------------------------------------------------------------------------------------

          /**
           * The fetch implementation, in order: a host-injected config.Fetch (lets a test stub or a host REST client
           * stand in), then the page global. Returns null when none is available — renderers that need bytes abstain
           * so the download card takes over. The global is bound so it is not called with the wrong receiver.
           * @returns {(Function|null)}
           */
        }, {
          key: "_getFetch",
          value: function _getFetch() {
            if (this.fileviewConfig && typeof this.fileviewConfig.Fetch === 'function') {
              return this.fileviewConfig.Fetch;
            }
            if (typeof globalThis !== 'undefined' && typeof globalThis.fetch === 'function') {
              return globalThis.fetch.bind(globalThis);
            }
            if (typeof window !== 'undefined' && typeof window.fetch === 'function') {
              return window.fetch.bind(window);
            }
            return null;
          }

          /**
           * Fetch a file's text, optionally capped with a Range read so an enormous file does not lock the tab.
           * @param {string} pURL
           * @param {Object} [pOptions] - { MaxBytes?: number }
           * @returns {Promise<string>}
           */
        }, {
          key: "fetchFileText",
          value: function fetchFileText(pURL, pOptions) {
            var tmpOptions = pOptions || {};
            var tmpFetch = this._getFetch();
            if (!tmpFetch) {
              return Promise.reject(new Error('No fetch implementation available to load file content.'));
            }
            if (!pURL) {
              return Promise.reject(new Error('No URL to load.'));
            }
            var tmpRequest = {};
            if (typeof tmpOptions.MaxBytes === 'number' && tmpOptions.MaxBytes > 0) {
              tmpRequest.headers = {
                Range: 'bytes=0-' + (tmpOptions.MaxBytes - 1)
              };
            }
            return Promise.resolve(tmpFetch(pURL, tmpRequest)).then(function (pResponse) {
              if (!pResponse || !pResponse.ok && pResponse.status !== 206) {
                throw new Error('HTTP ' + (pResponse ? pResponse.status : '0'));
              }
              return pResponse.text();
            });
          }

          /** The code child-section class: config.CodeSectionClass, else the page global, else null. */
        }, {
          key: "_resolveCodeSectionClass",
          value: function _resolveCodeSectionClass() {
            if (this.fileviewConfig && this.fileviewConfig.CodeSectionClass) {
              return this.fileviewConfig.CodeSectionClass;
            }
            if (typeof window !== 'undefined' && window.PictSectionCode) {
              // The quack UMD bundle may expose the class directly or on a .default.
              return typeof window.PictSectionCode === 'function' ? window.PictSectionCode : window.PictSectionCode.default || null;
            }
            return null;
          }

          /** Is CodeJar (pict-section-code's editor engine) present as a page global? */
        }, {
          key: "_isCodeJarAvailable",
          value: function _isCodeJarAvailable() {
            return typeof window !== 'undefined' && typeof window.CodeJar === 'function';
          }

          /** The image child-section class: config.ImageSectionClass, else the page global, else null. */
        }, {
          key: "_resolveImageSectionClass",
          value: function _resolveImageSectionClass() {
            if (this.fileviewConfig && this.fileviewConfig.ImageSectionClass) {
              return this.fileviewConfig.ImageSectionClass;
            }
            if (typeof window !== 'undefined' && window.PictSectionImage) {
              // The quack UMD bundle may expose the class directly or on a .default.
              return typeof window.PictSectionImage === 'function' ? window.PictSectionImage : window.PictSectionImage.default || null;
            }
            return null;
          }

          /** The markdown content-provider class: config.ContentProviderClass, else the page global, else null. */
        }, {
          key: "_resolveContentProviderClass",
          value: function _resolveContentProviderClass() {
            if (this.fileviewConfig && this.fileviewConfig.ContentProviderClass) {
              return this.fileviewConfig.ContentProviderClass;
            }
            if (typeof window !== 'undefined' && window.PictSectionContent && window.PictSectionContent.PictContentProvider) {
              return window.PictSectionContent.PictContentProvider;
            }
            return null;
          }

          /**
           * Lazily register a single shared content provider (its parseMarkdown is stateless) and return it. Shared
           * across every fileview instance under one hash so the markdown CSS registers once.
           * @returns {Object|null}
           */
        }, {
          key: "_ensureContentProvider",
          value: function _ensureContentProvider() {
            var tmpHash = 'Fileview-Content-Provider';
            if (this.pict.providers[tmpHash]) {
              return this.pict.providers[tmpHash];
            }
            var tmpClass = this._resolveContentProviderClass();
            if (!tmpClass) {
              return null;
            }
            this.pict.addProvider(tmpHash, {}, tmpClass);
            return this.pict.providers[tmpHash];
          }

          /** An instance-unique child view hash (so delegated children of different fileviews never collide). */
        }, {
          key: "_nextChildHash",
          value: function _nextChildHash(pPrefix) {
            this._childSerial++;
            return this.identifier + '-' + (pPrefix || 'Child') + '-' + this._childSerial;
          }

          /** The highlighter language for a descriptor's extension (unmapped extensions fall back to themselves). */
        }, {
          key: "_languageForDescriptor",
          value: function _languageForDescriptor(pDescriptor) {
            var tmpExt = String(pDescriptor && pDescriptor.Extension || '').toLowerCase();
            return LANGUAGE_BY_EXTENSION[tmpExt] || tmpExt || 'plaintext';
          }

          /** The byte cap for the code highlighter (config CodeMaxBytes, default 2 MB). */
        }, {
          key: "_codeMaxBytes",
          value: function _codeMaxBytes() {
            var tmpConfigured = this.fileviewConfig && this.fileviewConfig.CodeMaxBytes;
            return typeof tmpConfigured === 'number' && tmpConfigured > 0 ? tmpConfigured : 2000000;
          }

          /** The byte cap for the plain-text / markdown fetch (config TextMaxBytes, default 5 MB). */
        }, {
          key: "_textMaxBytes",
          value: function _textMaxBytes() {
            var tmpConfigured = this.fileviewConfig && this.fileviewConfig.TextMaxBytes;
            return typeof tmpConfigured === 'number' && tmpConfigured > 0 ? tmpConfigured : 5000000;
          }

          /** Paint a renderer's failure state into the stage and log it (shared by the content-loading renderers). */
        }, {
          key: "_paintRendererError",
          value: function _paintRendererError(pContainerSelector, pMessage, pError) {
            this.log.warn('pict-section-fileview: ' + pMessage, {
              Error: pError && pError.message
            });
            if (this.pict && this.pict.ContentAssignment) {
              this.pict.ContentAssignment.assignContent(pContainerSelector, '<div class="pfv-empty"><span class="pfv-empty-glyph">' + this._icon('Warning', 2) + '</span><p>' + this._esc(pMessage) + '</p></div>');
            }
          }

          // ---------------------------------------------------------------------------------------------------------------
          // Small shared utilities the renderers lean on
          // ---------------------------------------------------------------------------------------------------------------

          /** Emit a themable glyph from the icon registry, scaled by font-size; degrades to '' when no registry is present. */
        }, {
          key: "_icon",
          value: function _icon(pName, pEmSize) {
            if (!this.pict || typeof this.pict.icon !== 'function') {
              return '';
            }
            var tmpOptions = {};
            if (typeof pEmSize === 'number') {
              tmpOptions.style = 'font-size:' + pEmSize + 'em';
            }
            try {
              return this.pict.icon(pName, tmpOptions);
            } catch (pError) {
              return '';
            }
          }

          /** Escape HTML metacharacters for safe interpolation into markup. */
        }, {
          key: "_esc",
          value: function _esc(pText) {
            if (pText === null || typeof pText === 'undefined') {
              return '';
            }
            return String(pText).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
          }

          /** Human-readable byte count (1536 → "1.5 KB"). */
        }, {
          key: "_formatBytes",
          value: function _formatBytes(pBytes) {
            var tmpBytes = Number(pBytes);
            if (!isFinite(tmpBytes) || tmpBytes < 0) {
              return '';
            }
            if (tmpBytes < 1024) {
              return tmpBytes + ' B';
            }
            var tmpUnits = ['KB', 'MB', 'GB', 'TB', 'PB'];
            var tmpValue = tmpBytes / 1024;
            var tmpUnitIndex = 0;
            while (tmpValue >= 1024 && tmpUnitIndex < tmpUnits.length - 1) {
              tmpValue /= 1024;
              tmpUnitIndex++;
            }
            var tmpRounded = tmpValue >= 100 ? Math.round(tmpValue) : Math.round(tmpValue * 10) / 10;
            return tmpRounded + ' ' + tmpUnits[tmpUnitIndex];
          }

          /** The last path segment of a URL (no query/fragment). */
        }, {
          key: "_basename",
          value: function _basename(pURL) {
            if (!pURL) {
              return '';
            }
            var tmpPath = String(pURL).split('?')[0].split('#')[0];
            if (tmpPath.charAt(tmpPath.length - 1) === '/') {
              tmpPath = tmpPath.slice(0, -1);
            }
            var tmpSegments = tmpPath.split('/');
            var tmpName = tmpSegments[tmpSegments.length - 1] || '';
            try {
              tmpName = decodeURIComponent(tmpName);
            } catch (pError) {/* leave encoded */}
            return tmpName;
          }

          /** The extension of a filename (no leading dot, lowercased), or '' when there is none. */
        }, {
          key: "_extensionFromName",
          value: function _extensionFromName(pName) {
            if (!pName) {
              return '';
            }
            var tmpName = String(pName).split('?')[0].split('#')[0];
            var tmpDot = tmpName.lastIndexOf('.');
            if (tmpDot <= 0 || tmpDot === tmpName.length - 1) {
              return '';
            }
            return tmpName.slice(tmpDot + 1).toLowerCase();
          }
        }]);
      }(libPictProvider);
      module.exports = PictFileviewProvider;
      module.exports.default_configuration = {
        ProviderIdentifier: 'Pict-Section-Fileview',
        AutoInitialize: true,
        AutoInitializeOrdinal: 230
      };
    }, {
      "../BuiltinRenderers.js": 30,
      "../Fileview-Probe.js": 31,
      "../Pict-Fileview-CSS.js": 32,
      "pict-provider": 27
    }],
    35: [function (require, module, exports) {
      'use strict';

      var libPictView = require('pict-view');

      /**
       * pict-section-fileview base view — a thin shell. It paints one container (toolbar + stage) and hands all rendering
       * to the matching provider (same Identifier), which resolves the file's renderer and mounts it into the stage. The
       * factory (createFileview) builds this view's default_configuration: the container template (with instance-scoped
       * element ids), the renderable, and the shared CSS.
       */
      var PictViewFileview = /*#__PURE__*/function (_libPictView3) {
        function PictViewFileview() {
          _classCallCheck(this, PictViewFileview);
          return _callSuper(this, PictViewFileview, arguments);
        }
        _inherits(PictViewFileview, _libPictView3);
        return _createClass(PictViewFileview, [{
          key: "provider",
          get: function get() {
            return this.pict.providers[this.options.ViewIdentifier];
          }
        }, {
          key: "onAfterRender",
          value: function onAfterRender(pRenderable) {
            this.pict.CSSMap.injectCSS();
            var tmpProvider = this.provider;
            if (tmpProvider && typeof tmpProvider.renderFileview === 'function') {
              tmpProvider.renderFileview();
            }
            return _superPropGet(PictViewFileview, "onAfterRender", this, 3)([pRenderable]);
          }

          /**
           * Convenience proxy so a host can drive the viewer through the view handle (pict.views[id].setFile(...)) as well
           * as through the provider. Returns the resolved FileDescriptor.
           * @param {(string|Object)} pInput
           */
        }, {
          key: "setFile",
          value: function setFile(pInput) {
            var tmpProvider = this.provider;
            return tmpProvider ? tmpProvider.setFile(pInput) : null;
          }
        }]);
      }(libPictView);
      module.exports = PictViewFileview;
    }, {
      "pict-view": 29
    }],
    36: [function (require, module, exports) {
      module.exports = {
        "RenderOnLoad": true,
        "DefaultRenderable": "ImageViewer-Wrap",
        "DefaultDestinationAddress": "#ImageViewer-Container-Div",
        "Templates": [{
          "Hash": "ImageViewer-Container",
          // A stub — the viewer DOM is built imperatively in onAfterInitialRender (an <img> is an inherently
          // imperative element: its src, natural dimensions and load/error events have no template equivalent).
          // This mirrors pict-section-code, which builds its CodeJar host the same way.
          "Template": "<!-- ImageViewer-Container rendering soon -->"
        }],
        "Renderables": [{
          "RenderableHash": "ImageViewer-Wrap",
          "TemplateHash": "ImageViewer-Container",
          "DestinationAddress": "#ImageViewer-Container-Div"
        }],
        // The element the viewer DOM is built into (defaults to the same div the stub renders into).
        "TargetElementAddress": "#ImageViewer-Container-Div",
        // The initial image: a URL string, or false for an empty viewer until setImage() is called.
        "ImageURL": false,
        // Alt text for the <img> (accessibility; also shown by the browser if the image fails).
        "AltText": "",
        // An explicit download href + filename hint. DownloadURL defaults to ImageURL.
        "DownloadURL": false,
        "DownloadName": "",
        // Chrome + behavior toggles.
        "ShowToolbar": true,
        // the Fit / zoom / download toolbar above the image
        "ShowDownload": true,
        // the download affordance in the toolbar
        "ShowFullscreen": true,
        // the maximize/restore button (fills the browser viewport and back; Esc exits)
        "Checkerboard": true,
        // a subtle transparency checker behind the image so transparent PNGs read
        "ClickToZoom": true,
        // clicking the image toggles fit <-> zoomed

        // Zoom model: zoom is a multiplier of the fit (contain) size. 1 = fit the whole image (no scroll); above 1
        // the stage scrolls so the reader can pan (native scroll — touch- and mouse-friendly).
        "MinZoom": 1,
        "MaxZoom": 8,
        "ZoomStep": 0.5,
        "CSS": ".psi-root\n{\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 0;\n\theight: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\tbackground: var(--theme-color-background-panel, #ffffff);\n\tcolor: var(--theme-color-text-primary, #1f2733);\n}\n/* Maximized: the viewer leaves its host box and fills the browser viewport. Esc or the toolbar button restores it. */\n.psi-root.psi-fullscreen\n{\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tborder-radius: 0;\n\tz-index: 2147483000;\n}\n.psi-toolbar\n{\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.4rem;\n\tflex: 0 0 auto;\n\tpadding: 0.4rem 0.6rem;\n\tborder-bottom: 1px solid var(--theme-color-border-light, #e8ebf0);\n\tbackground: var(--theme-color-background-secondary, #f7f9fb);\n}\n.psi-spacer { flex: 1 1 auto; }\n.psi-btn\n{\n\tfont-size: 0.8rem;\n\tfont-weight: 600;\n\tpadding: 0.3rem 0.62rem;\n\tborder-radius: 6px;\n\tborder: 1px solid var(--theme-color-border-medium, #d5dbe3);\n\tbackground: var(--theme-color-background-panel, #ffffff);\n\tcolor: var(--theme-color-text-secondary, #45505f);\n\tcursor: pointer;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tgap: 0.3rem;\n\ttext-decoration: none;\n\tline-height: 1;\n}\n.psi-btn:hover { border-color: var(--theme-color-brand-primary, #5650e6); color: var(--theme-color-text-primary, #1f2733); text-decoration: none; }\n.psi-btn[disabled] { opacity: 0.45; cursor: default; }\n.psi-zoom-label { font-size: 0.78rem; color: var(--theme-color-text-muted, #6b7686); min-width: 3rem; text-align: center; user-select: none; }\n.psi-stage\n{\n\tposition: relative;\n\tflex: 1 1 auto;\n\tmin-height: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\toverflow: hidden;\n}\n.psi-stage.psi-scroll { overflow: auto; align-items: flex-start; justify-content: flex-start; }\n/* A subtle, theme-neutral transparency checker (reads on both light and dark panels). */\n.psi-stage.psi-checker\n{\n\tbackground-color: var(--theme-color-background-panel, #ffffff);\n\tbackground-image:\n\t\tlinear-gradient(45deg, rgba(128, 128, 128, 0.12) 25%, transparent 25%),\n\t\tlinear-gradient(-45deg, rgba(128, 128, 128, 0.12) 25%, transparent 25%),\n\t\tlinear-gradient(45deg, transparent 75%, rgba(128, 128, 128, 0.12) 75%),\n\t\tlinear-gradient(-45deg, transparent 75%, rgba(128, 128, 128, 0.12) 75%);\n\tbackground-size: 20px 20px;\n\tbackground-position: 0 0, 0 10px, 10px -10px, -10px 0;\n}\n.psi-image { display: block; }\n.psi-stage.psi-fit .psi-image { max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; cursor: zoom-in; }\n.psi-stage.psi-scroll .psi-image { cursor: zoom-out; }\n.psi-loading, .psi-error\n{\n\tmargin: auto;\n\ttext-align: center;\n\tcolor: var(--theme-color-text-muted, #8a94a3);\n\tpadding: 1.6rem 1rem;\n\tfont-size: 0.9rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 0.55rem;\n}\n.psi-error-glyph { font-size: 1.8rem; opacity: 0.6; }\n"
      };
    }, {}],
    37: [function (require, module, exports) {
      var libPictViewClass = require('pict-view');
      var _DefaultConfiguration = require('./Pict-Section-Image-DefaultConfiguration.js');

      /**
       * pict-section-image — a responsive image viewer section.
       *
       * Drop it on a page, point it at an image URL, and it fits the whole image to the stage on phones, tablets,
       * desktops and projected displays. A toolbar (Fit / zoom out / zoom in / download) and click-to-zoom let the
       * reader inspect detail; above "fit" the stage scrolls so panning is native (touch- and mouse-friendly).
       *
       * It is a single pict-view in the "code.js" shape (like pict-section-code): a stub container template, with the
       * viewer DOM built imperatively in onAfterInitialRender — an <img> is inherently imperative (src, natural
       * dimensions, and the load/error events have no template equivalent).
       *
       * Standalone, or driven as the ordinary-image renderer inside pict-section-fileview: the fileview delegate
       * mounts it with ShowToolbar:false (fileview owns the chrome) and feeds files through setImage().
       *
       * Zoom model: zoom is a multiplier of the fit (contain) size. 1 = fit the whole image, no scroll; above 1 the
       * stage scrolls. When the image's natural size and the stage box are measurable (a real browser, after load)
       * the zoomed <img> is sized in pixels from the fit size; when they are not (headless), it falls back to a
       * percentage width so nothing throws.
       *
       * Event wiring note: the toolbar buttons and the <img> (load / error / click) use element-property handlers
       * (`el.onclick = ...`), not addEventListener and not template inline handlers. The pict rule against
       * addEventListener is about listeners silently lost on template re-render; this widget is built once
       * imperatively and never re-rendered by the template engine, element-property handlers cannot duplicate, and
       * the <img>'s load/error/natural-size have no template-handler equivalent — the same programmatic-element
       * exception pict-section-code documents for its editor observers.
       */
      var PictSectionImage = /*#__PURE__*/function (_libPictViewClass3) {
        function PictSectionImage(pFable, pOptions, pServiceHash) {
          var _this39;
          _classCallCheck(this, PictSectionImage);
          var tmpOptions = Object.assign({}, _DefaultConfiguration, pOptions);
          _this39 = _callSuper(this, PictSectionImage, [pFable, tmpOptions, pServiceHash]);
          _this39.initialRenderComplete = false;

          // DOM handles — built once in onAfterInitialRender.
          _this39.targetElement = false;
          _this39._rootElement = null;
          _this39._stageElement = null;
          _this39._imageElement = null;
          _this39._loadingElement = null;
          _this39._zoomLabelElement = null;
          _this39._downloadElement = null;
          _this39._fullscreenButtonElement = null;

          // Fullscreen (fill-the-viewport) state + the document Escape handler installed only while maximized.
          _this39._fullscreen = false;
          _this39._keydownHandler = null;

          // View state.
          _this39._url = _this39.options.ImageURL || '';
          _this39._altText = _this39.options.AltText || '';
          _this39._downloadURL = _this39.options.DownloadURL || '';
          _this39._downloadName = _this39.options.DownloadName || '';
          _this39._zoom = 1;
          _this39._loaded = false;
          _this39._error = false;
          _this39._naturalWidth = 0;
          _this39._naturalHeight = 0;
          _this39._minZoom = typeof _this39.options.MinZoom === 'number' && _this39.options.MinZoom > 0 ? _this39.options.MinZoom : 1;
          _this39._maxZoom = typeof _this39.options.MaxZoom === 'number' && _this39.options.MaxZoom > _this39._minZoom ? _this39.options.MaxZoom : 8;
          _this39._zoomStep = typeof _this39.options.ZoomStep === 'number' && _this39.options.ZoomStep > 0 ? _this39.options.ZoomStep : 0.5;
          return _this39;
        }
        _inherits(PictSectionImage, _libPictViewClass3);
        return _createClass(PictSectionImage, [{
          key: "onBeforeInitialize",
          value: function onBeforeInitialize() {
            _superPropGet(PictSectionImage, "onBeforeInitialize", this, 3)([]);
            this.targetElement = false;
          }
        }, {
          key: "onAfterRender",
          value: function onAfterRender(pRenderable) {
            // Ensure the CSS from all registered views is injected (pict rule for lazy-rendered views).
            this.pict.CSSMap.injectCSS();

            // Build the viewer when it isn't present — the first render, or a host re-render that re-stamped the stub
            // container template over our built DOM. Instance state (_url, _zoom) persists, so a rebuild re-loads the
            // current image; this makes a re-render self-healing rather than silently wiping the viewer.
            if (!this._viewerPresent()) {
              this.onAfterInitialRender();
              this.initialRenderComplete = true;
            }
            return _superPropGet(PictSectionImage, "onAfterRender", this, 3)([pRenderable]);
          }

          /** Is the viewer DOM currently present in the target (false after the first render or a stub re-stamp)? */
        }, {
          key: "_viewerPresent",
          value: function _viewerPresent() {
            return !!this._queryOwned('#' + this.Hash + '-Stage');
          }
        }, {
          key: "onAfterInitialRender",
          value: function onAfterInitialRender() {
            var tmpTargetElementSet = this.services.ContentAssignment.getElement(this.options.TargetElementAddress);
            if (!tmpTargetElementSet || tmpTargetElementSet.length < 1) {
              this.log.error("PICT-Image Could not find target element [".concat(this.options.TargetElementAddress, "]!"));
              this.targetElement = false;
              return false;
            }
            this.targetElement = tmpTargetElementSet[0];
            this._buildViewerDOM();
            if (this._url) {
              this._loadImage(this._url);
            } else {
              this._present();
            }
          }

          // -----------------------------------------------------------------------------------------------------------
          // DOM construction (once)
          // -----------------------------------------------------------------------------------------------------------

          /**
           * Build the viewer chrome into the target element, then grab references and wire the element-property
           * handlers. Called once from onAfterInitialRender.
           */
        }, {
          key: "_buildViewerDOM",
          value: function _buildViewerDOM() {
            var tmpBase = this.Hash;
            var tmpCheckerClass = this.options.Checkerboard ? ' psi-checker' : '';

            // Make sure the maximize/restore glyphs exist in the icon registry before the toolbar references them.
            this._ensureIcons();
            var tmpToolbar = '';
            if (this.options.ShowToolbar) {
              var tmpDownload = '';
              if (this.options.ShowDownload) {
                tmpDownload = '<a class="psi-btn psi-download" id="' + tmpBase + '-Download" style="display:none" href="#" download>' + this._icon('Download') + 'Download</a>';
              }
              var tmpFullscreen = '';
              if (this.options.ShowFullscreen) {
                tmpFullscreen = '<button type="button" class="psi-btn psi-fullscreen-btn" id="' + tmpBase + '-FullscreenBtn" title="Full screen">' + this._icon(this._fullscreen ? 'Minimize' : 'Maximize') + '</button>';
              }
              tmpToolbar = '<div class="psi-toolbar" id="' + tmpBase + '-Toolbar">' + '<button type="button" class="psi-btn" id="' + tmpBase + '-FitBtn" title="Fit image">' + this._icon('Search') + 'Fit</button>' + '<button type="button" class="psi-btn" id="' + tmpBase + '-ZoomOutBtn" title="Zoom out">&minus;</button>' + '<span class="psi-zoom-label" id="' + tmpBase + '-ZoomLabel">Fit</span>' + '<button type="button" class="psi-btn" id="' + tmpBase + '-ZoomInBtn" title="Zoom in">+</button>' + '<span class="psi-spacer"></span>' + tmpFullscreen + tmpDownload + '</div>';
            }
            var tmpHTML = '<div class="psi-root" id="' + tmpBase + '-Root">' + tmpToolbar + '<div class="psi-stage psi-fit' + tmpCheckerClass + '" id="' + tmpBase + '-Stage">' + '<div class="psi-loading" id="' + tmpBase + '-Loading">' + this._icon('Image') + ' Loading…</div>' + '<img class="psi-image" id="' + tmpBase + '-Image" alt="' + this._esc(this._altText) + '" style="display:none" />' + '</div>' + '</div>';
            this.pict.ContentAssignment.assignContent(this.options.TargetElementAddress, tmpHTML);

            // Reference grab (querySelector within the owned subtree is fine — these are nodes we just built).
            this._rootElement = this._queryOwned('#' + tmpBase + '-Root');
            this._stageElement = this._queryOwned('#' + tmpBase + '-Stage');
            this._imageElement = this._queryOwned('#' + tmpBase + '-Image');
            this._loadingElement = this._queryOwned('#' + tmpBase + '-Loading');
            this._zoomLabelElement = this._queryOwned('#' + tmpBase + '-ZoomLabel');
            this._downloadElement = this._queryOwned('#' + tmpBase + '-Download');
            this._fullscreenButtonElement = this._queryOwned('#' + tmpBase + '-FullscreenBtn');

            // Image load / error / click — element-property handlers (see the class note).
            if (this._imageElement) {
              var tmpSelf = this;
              this._imageElement.onload = function () {
                tmpSelf._onImageLoad();
              };
              this._imageElement.onerror = function () {
                tmpSelf._onImageError();
              };
              if (this.options.ClickToZoom) {
                this._imageElement.onclick = function () {
                  tmpSelf.toggleZoom();
                };
              }
            }

            // Toolbar buttons.
            if (this.options.ShowToolbar) {
              var _tmpSelf3 = this;
              var tmpFit = this._queryOwned('#' + tmpBase + '-FitBtn');
              var tmpOut = this._queryOwned('#' + tmpBase + '-ZoomOutBtn');
              var tmpIn = this._queryOwned('#' + tmpBase + '-ZoomInBtn');
              if (tmpFit) {
                tmpFit.onclick = function () {
                  _tmpSelf3.fitImage();
                };
              }
              if (tmpOut) {
                tmpOut.onclick = function () {
                  _tmpSelf3.zoomOut();
                };
              }
              if (tmpIn) {
                tmpIn.onclick = function () {
                  _tmpSelf3.zoomIn();
                };
              }
              if (this._fullscreenButtonElement) {
                this._fullscreenButtonElement.onclick = function () {
                  _tmpSelf3.toggleFullscreen();
                };
              }
            }

            // If a host re-render re-stamped the stub over a maximized viewer, the rebuilt root lost the class —
            // re-apply it so the rebuild stays in fullscreen (instance state persists). The Escape handler lives on
            // document, so it survives the rebuild and needs no re-attaching.
            if (this._fullscreen && this._rootElement) {
              this._rootElement.classList.add('psi-fullscreen');
            }
          }

          /** querySelector scoped to the viewer subtree, via ContentAssignment, returning the element or null. */
        }, {
          key: "_queryOwned",
          value: function _queryOwned(pSelector) {
            var tmpSet = this.services.ContentAssignment.getElement(pSelector);
            return tmpSet && tmpSet.length > 0 ? tmpSet[0] : null;
          }

          // -----------------------------------------------------------------------------------------------------------
          // Image loading
          // -----------------------------------------------------------------------------------------------------------
        }, {
          key: "_loadImage",
          value: function _loadImage(pURL) {
            this._loaded = false;
            this._error = false;
            this._naturalWidth = 0;
            this._naturalHeight = 0;

            // Recover from a prior error: _paintErrorState replaced the stage contents and dropped the <img>, so
            // rebuild the viewer DOM (which recreates a fresh <img> + loading element) before loading.
            if (!this._imageElement && this.targetElement) {
              this._buildViewerDOM();
            }
            if (!this._imageElement) {
              return;
            }

            // Show the loading state; hide the image until it decodes.
            this._setLoadingVisible(true);
            this._imageElement.style.display = 'none';
            this._imageElement.setAttribute('alt', this._altText || '');
            if (!pURL) {
              // Nothing to show — leave the (empty) loading state cleared.
              this._setLoadingVisible(false);
              return;
            }

            // Assigning src kicks the browser's fetch/decode; onload / onerror drive the rest.
            this._imageElement.src = pURL;

            // Guard: a cached image can be complete synchronously with no load event. Detect it.
            if (this._imageElement.complete && this._imageElement.naturalWidth > 0) {
              this._onImageLoad();
            }
          }
        }, {
          key: "_onImageLoad",
          value: function _onImageLoad() {
            this._loaded = true;
            this._error = false;
            this._naturalWidth = this._imageElement ? this._imageElement.naturalWidth || 0 : 0;
            this._naturalHeight = this._imageElement ? this._imageElement.naturalHeight || 0 : 0;
            this._setLoadingVisible(false);
            if (this._imageElement) {
              this._imageElement.style.display = 'block';
            }
            this._present();
          }
        }, {
          key: "_onImageError",
          value: function _onImageError() {
            this._loaded = false;
            this._error = true;
            this._setLoadingVisible(false);
            if (this._imageElement) {
              this._imageElement.style.display = 'none';
            }
            this._paintErrorState();
          }
        }, {
          key: "_setLoadingVisible",
          value: function _setLoadingVisible(pVisible) {
            if (this._loadingElement) {
              this._loadingElement.style.display = pVisible ? 'flex' : 'none';
            }
          }
        }, {
          key: "_paintErrorState",
          value: function _paintErrorState() {
            if (!this._stageElement) {
              return;
            }
            var tmpDownload = '';
            if (this._downloadURL || this._url) {
              tmpDownload = '<a class="psi-btn" href="' + this._esc(this._downloadURL || this._url) + '" download' + (this._downloadName ? '="' + this._esc(this._downloadName) + '"' : '') + '>' + this._icon('Download') + 'Download</a>';
            }
            var tmpBase = this.Hash;
            this.pict.ContentAssignment.assignContent('#' + tmpBase + '-Stage', '<div class="psi-error"><span class="psi-error-glyph">' + this._icon('Image') + '</span>' + '<p>This image could not be displayed.</p>' + tmpDownload + '</div>');
            // The <img> node was replaced by the error block; drop stale references so a later setImage rebuilds.
            this._imageElement = null;
            this._loadingElement = null;
          }

          // -----------------------------------------------------------------------------------------------------------
          // Presentation (fit vs. zoom)
          // -----------------------------------------------------------------------------------------------------------

          /** Lay out the image for the current zoom + state, and refresh the toolbar. */
        }, {
          key: "_present",
          value: function _present() {
            if (!this._stageElement || !this._imageElement) {
              return;
            }
            if (this._error || !this._loaded) {
              this._refreshToolbar();
              return;
            }
            var tmpScrolled = this._zoom > this._minZoom;
            this._stageElement.classList.remove('psi-fit');
            this._stageElement.classList.remove('psi-scroll');
            this._stageElement.classList.add(tmpScrolled ? 'psi-scroll' : 'psi-fit');
            if (!tmpScrolled) {
              // Fit: let the CSS (max-width/height:100%, object-fit:contain) size the image.
              this._imageElement.style.width = '';
              this._imageElement.style.height = '';
              this._imageElement.style.maxWidth = '';
              this._imageElement.style.maxHeight = '';
            } else {
              var tmpFit = this._computeFitSize();
              if (tmpFit) {
                this._imageElement.style.width = Math.round(tmpFit.Width * this._zoom) + 'px';
                this._imageElement.style.height = Math.round(tmpFit.Height * this._zoom) + 'px';
              } else {
                // Headless / pre-layout fallback: a percentage width still scrolls in a real browser and never throws.
                this._imageElement.style.width = Math.round(this._zoom * 100) + '%';
                this._imageElement.style.height = 'auto';
              }
              this._imageElement.style.maxWidth = 'none';
              this._imageElement.style.maxHeight = 'none';
            }
            this._refreshToolbar();
          }

          /**
           * The contain (fit) size of the image within the stage, or null when it can't be measured (no natural size
           * yet, or a zero-size stage as in a headless test). "Fit" never upscales past natural size.
           * @returns {({Width:number,Height:number}|null)}
           */
        }, {
          key: "_computeFitSize",
          value: function _computeFitSize() {
            if (!this._stageElement || !this._naturalWidth || !this._naturalHeight) {
              return null;
            }
            var tmpStageWidth = this._stageElement.clientWidth;
            var tmpStageHeight = this._stageElement.clientHeight;
            if (!tmpStageWidth || !tmpStageHeight) {
              return null;
            }
            var tmpScale = Math.min(tmpStageWidth / this._naturalWidth, tmpStageHeight / this._naturalHeight, 1);
            return {
              Width: this._naturalWidth * tmpScale,
              Height: this._naturalHeight * tmpScale
            };
          }
        }, {
          key: "_refreshToolbar",
          value: function _refreshToolbar() {
            if (this._zoomLabelElement) {
              this._zoomLabelElement.textContent = this._zoom > this._minZoom ? Math.round(this._zoom * 100) + '%' : 'Fit';
            }
            if (this._downloadElement) {
              var tmpHref = this._downloadURL || this._url;
              if (tmpHref) {
                this._downloadElement.setAttribute('href', tmpHref);
                if (this._downloadName) {
                  this._downloadElement.setAttribute('download', this._downloadName);
                }
                this._downloadElement.style.display = 'inline-flex';
              } else {
                this._downloadElement.style.display = 'none';
              }
            }
          }

          // -----------------------------------------------------------------------------------------------------------
          // Public API
          // -----------------------------------------------------------------------------------------------------------

          /**
           * Point the viewer at an image. Accepts a URL string or a descriptor object
           * ({ URL, AltText?, Name?, DownloadURL?, DownloadName? }). Resets zoom to fit.
           * @param {(string|Object)} pInput
           */
        }, {
          key: "setImage",
          value: function setImage(pInput) {
            var tmpURL = '';
            var tmpAlt = this._altText;
            var tmpDownloadURL = '';
            var tmpDownloadName = '';
            if (typeof pInput === 'string') {
              tmpURL = pInput;
            } else if (pInput && _typeof(pInput) === 'object') {
              tmpURL = pInput.URL || pInput.Url || pInput.ImageURL || '';
              tmpAlt = pInput.AltText || pInput.Alt || pInput.Name || this._altText;
              tmpDownloadURL = pInput.DownloadURL || '';
              tmpDownloadName = pInput.DownloadName || pInput.Name || '';
            }
            this._url = tmpURL;
            this._altText = tmpAlt || '';
            this._downloadURL = tmpDownloadURL || tmpURL;
            this._downloadName = tmpDownloadName || '';
            this._zoom = 1;
            if (this.targetElement) {
              this._loadImage(tmpURL);
            }
          }

          /** Zoom in one step (switches from fit to a scrolling, zoomed presentation). */
        }, {
          key: "zoomIn",
          value: function zoomIn() {
            if (!this._loaded) {
              return;
            }
            this._zoom = Math.min(this._maxZoom, this._zoom + this._zoomStep);
            this._present();
          }

          /** Zoom out one step; at or below the floor the image returns to fit (no scroll). */
        }, {
          key: "zoomOut",
          value: function zoomOut() {
            if (!this._loaded) {
              return;
            }
            this._zoom = this._zoom - this._zoomStep;
            if (this._zoom < this._minZoom) {
              this._zoom = this._minZoom;
            }
            this._present();
          }

          /** Reset to the fit (contain) presentation. */
        }, {
          key: "fitImage",
          value: function fitImage() {
            this._zoom = this._minZoom;
            this._present();
          }

          /** Clicking the image toggles between fit and a zoomed-in presentation. */
        }, {
          key: "toggleZoom",
          value: function toggleZoom() {
            if (!this._loaded) {
              return;
            }
            if (this._zoom > this._minZoom) {
              this._zoom = this._minZoom;
            } else {
              this._zoom = Math.min(this._maxZoom, this._minZoom + this._zoomStep * 2);
            }
            this._present();
          }

          // -----------------------------------------------------------------------------------------------------------
          // Fullscreen — fill the browser viewport, and back
          // -----------------------------------------------------------------------------------------------------------

          /** Toggle the maximized (fill-the-viewport) presentation. */
        }, {
          key: "toggleFullscreen",
          value: function toggleFullscreen() {
            if (this._fullscreen) {
              this.exitFullscreen();
            } else {
              this.enterFullscreen();
            }
          }

          /** Maximize: lift the viewer out of its host box to fill the browser viewport (Esc or the button restores it). */
        }, {
          key: "enterFullscreen",
          value: function enterFullscreen() {
            if (this._fullscreen) {
              return;
            }
            this._fullscreen = true;
            if (this._rootElement) {
              this._rootElement.classList.add('psi-fullscreen');
            }
            this._installEscapeHandler();
            this._refreshFullscreenButton();
            // The stage just changed size — re-fit (or re-measure the zoomed layout) against the new viewport box.
            this._present();
          }

          /** Restore the viewer to its host box. */
        }, {
          key: "exitFullscreen",
          value: function exitFullscreen() {
            if (!this._fullscreen) {
              return;
            }
            this._fullscreen = false;
            if (this._rootElement) {
              this._rootElement.classList.remove('psi-fullscreen');
            }
            this._removeEscapeHandler();
            this._refreshFullscreenButton();
            this._present();
          }

          /** Is the viewer currently maximized? */
        }, {
          key: "isFullscreen",
          value: function isFullscreen() {
            return this._fullscreen;
          }

          /** Swap the maximize/restore glyph + title to match the current state. */
        }, {
          key: "_refreshFullscreenButton",
          value: function _refreshFullscreenButton() {
            if (!this._fullscreenButtonElement) {
              return;
            }
            this._fullscreenButtonElement.innerHTML = this._icon(this._fullscreen ? 'Minimize' : 'Maximize');
            this._fullscreenButtonElement.setAttribute('title', this._fullscreen ? 'Exit full screen' : 'Full screen');
          }

          /**
           * Install a document-level Escape handler while maximized. A document keydown listener is the documented
           * pict exception (a browser-level event with no element-level inline equivalent — the image need not be
           * focused for Escape to work). It is added only while fullscreen and removed on exit / destroy.
           */
        }, {
          key: "_installEscapeHandler",
          value: function _installEscapeHandler() {
            if (this._keydownHandler || typeof document === 'undefined' || typeof document.addEventListener !== 'function') {
              return;
            }
            var tmpSelf = this;
            this._keydownHandler = function (pEvent) {
              if (pEvent && pEvent.key === 'Escape' && tmpSelf._fullscreen) {
                tmpSelf.exitFullscreen();
              }
            };
            document.addEventListener('keydown', this._keydownHandler);
          }

          /** Remove the document-level Escape handler. */
        }, {
          key: "_removeEscapeHandler",
          value: function _removeEscapeHandler() {
            if (this._keydownHandler && typeof document !== 'undefined' && typeof document.removeEventListener === 'function') {
              document.removeEventListener('keydown', this._keydownHandler);
            }
            this._keydownHandler = null;
          }

          /** Register the maximize / restore glyphs in the icon registry (idempotent; no-op without an Icon provider). */
        }, {
          key: "_ensureIcons",
          value: function _ensureIcons() {
            if (!this.pict || !this.pict.providers || !this.pict.providers.Icon || typeof this.pict.providers.Icon.registerSet !== 'function') {
              return;
            }
            this.pict.providers.Icon.registerSet({
              Outline: {
                Maximize: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
                Minimize: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>'
              }
            });
          }

          /** A snapshot of the viewer's current state (handy for hosts and tests). */
        }, {
          key: "getState",
          value: function getState() {
            return {
              URL: this._url,
              Loaded: this._loaded,
              Error: this._error,
              Zoom: this._zoom,
              Fit: this._zoom <= this._minZoom,
              Fullscreen: this._fullscreen,
              NaturalWidth: this._naturalWidth,
              NaturalHeight: this._naturalHeight
            };
          }

          /** Tear down handlers and clear the viewer. */
        }, {
          key: "destroy",
          value: function destroy() {
            // Drop the document Escape handler (it outlives the viewer DOM otherwise) and leave fullscreen state clean.
            this._removeEscapeHandler();
            this._fullscreen = false;
            if (this._imageElement) {
              this._imageElement.onload = null;
              this._imageElement.onerror = null;
              this._imageElement.onclick = null;
              this._imageElement.removeAttribute('src');
            }
            if (this._fullscreenButtonElement) {
              this._fullscreenButtonElement.onclick = null;
            }
            if (this.targetElement && this.pict && this.pict.ContentAssignment) {
              this.pict.ContentAssignment.assignContent(this.options.TargetElementAddress, '');
            }
            this._rootElement = null;
            this._stageElement = null;
            this._imageElement = null;
            this._loadingElement = null;
            this._zoomLabelElement = null;
            this._downloadElement = null;
            this._fullscreenButtonElement = null;
          }

          // -----------------------------------------------------------------------------------------------------------
          // Small utilities
          // -----------------------------------------------------------------------------------------------------------

          /** A themable glyph from the icon registry; '' when no registry is present. */
        }, {
          key: "_icon",
          value: function _icon(pName) {
            if (!this.pict || typeof this.pict.icon !== 'function') {
              return '';
            }
            try {
              return this.pict.icon(pName);
            } catch (pError) {
              return '';
            }
          }

          /** Escape HTML metacharacters for safe interpolation into built markup. */
        }, {
          key: "_esc",
          value: function _esc(pText) {
            if (pText === null || typeof pText === 'undefined') {
              return '';
            }
            return String(pText).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
          }
        }]);
      }(libPictViewClass);
      module.exports = PictSectionImage;
      module.exports.default_configuration = _DefaultConfiguration;
    }, {
      "./Pict-Section-Image-DefaultConfiguration.js": 36,
      "pict-view": 29
    }],
    38: [function (require, module, exports) {
      arguments[4][5][0].apply(exports, arguments);
    }, {
      "dup": 5
    }],
    39: [function (require, module, exports) {
      arguments[4][6][0].apply(exports, arguments);
    }, {
      "../package.json": 38,
      "dup": 6
    }],
    40: [function (require, module, exports) {
      arguments[4][14][0].apply(exports, arguments);
    }, {
      "dup": 14
    }],
    41: [function (require, module, exports) {
      arguments[4][15][0].apply(exports, arguments);
    }, {
      "../package.json": 40,
      "dup": 15,
      "fable-serviceproviderbase": 39
    }]
  }, {}, [21])(21);
});
//# sourceMappingURL=fileview_browser_example.compatible.js.map
