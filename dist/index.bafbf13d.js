// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6KagL":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "8b22274fbafbf13d";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"gCE4p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "grabData", ()=>grabData);
parcelHelpers.export(exports, "grabBg", ()=>grabBg);
// Rendering all functions
var _modelJs = require("./model.js");
var _dataJs = require("./data.js");
var _data2Js = require("./data2.js");
// Views
var _searchViewJs = require("./Views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _timeViewJs = require("./Views/timeView.js");
var _timeViewJsDefault = parcelHelpers.interopDefault(_timeViewJs);
var _measureViewJs = require("./Views/measureView.js");
var _measureViewJsDefault = parcelHelpers.interopDefault(_measureViewJs);
var _buttonViewJs = require("./Views/buttonView.js");
var _buttonViewJsDefault = parcelHelpers.interopDefault(_buttonViewJs);
var _bgViewJs = require("./Views/bgView.js");
var _bgViewJsDefault = parcelHelpers.interopDefault(_bgViewJs);
const grabData = async function(city) {
    try {
        // current weather
        _dataJs.currentFunction(city);
        // next days weather
        _dataJs.nextFunction(city);
    } catch (err) {
        console.error(err);
    }
};
const grabBg = async function(e) {
    try {
        _data2Js.getPhoto(e);
    } catch (err) {
        console.error(err);
    }
};
function coordUser() {
    navigator.geolocation.getCurrentPosition(function(position) {
        const { latitude  } = position.coords;
        const { longitude  } = position.coords;
        grabData(`${latitude},${longitude}`);
    });
}
const init = function() {
    coordUser();
    _modelJs.grabInput();
    // SearchView
    (0, _searchViewJsDefault.default).btnSearch();
    // TimeView
    (0, _timeViewJsDefault.default).callDate();
    (0, _timeViewJsDefault.default).time();
    // MeasureView
    (0, _measureViewJsDefault.default).changeActive();
    // buttonView
    (0, _buttonViewJsDefault.default).changeModel();
};
init();

},{"./model.js":"dEDha","./data.js":"9kapS","./data2.js":"e8DDi","./Views/searchView.js":"gwuNM","./Views/timeView.js":"5GJVA","./Views/measureView.js":"igPDW","./Views/buttonView.js":"2clLH","./Views/bgView.js":"ae3kD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dEDha":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "message", ()=>message);
parcelHelpers.export(exports, "logInput", ()=>logInput);
parcelHelpers.export(exports, "grabInput", ()=>grabInput);
var _searchView = require("./Views/searchView");
var _searchViewDefault = parcelHelpers.interopDefault(_searchView);
var _controllerJs = require("./controller.js");
let message;
let log;
const logInput = function() {
    try {
        if (message === undefined) return;
        _controllerJs.grabData(`${message}`);
    // control.grabBg(`${message.split(' ').join('-')}`)
    } catch (err) {
        console.error(`💥💥💥, ${err}`);
    }
};
const grabInput = function() {
    (0, _searchViewDefault.default)._parentEl.addEventListener("click", function(e1) {
        input = e1.target.closest(".input-search")?.addEventListener("input", function() {
            const value = document.querySelector(".input-search").value;
            log = value;
            return log;
        });
        document.querySelector("#searchForm")?.addEventListener("submit", function(e) {
            e.preventDefault();
        });
        window.onkeydown = function(e) {
            if (e.keyCode === 13) {
                message = log;
                logInput();
            }
        };
        search = document.querySelector(".btn-input");
        if (e1.target.classList.contains("btn-input")) {
            message = log;
            console.log(message.split(" ").join("-"));
            console.log(`puto`);
            logInput();
        }
        return message;
    });
};

},{"./Views/searchView":"gwuNM","./controller.js":"gCE4p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gwuNM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Grab Search Bar
var _loupePng = require("url:../../icon white/loupe.png");
var _loupePngDefault = parcelHelpers.interopDefault(_loupePng);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _timeViewJs = require("./timeView.js");
var _timeViewJsDefault = parcelHelpers.interopDefault(_timeViewJs);
class SearchView extends (0, _viewJsDefault.default) {
    _parentEl = document.querySelector(".header");
    _btn = this._parentEl.querySelector(".principal-search-btn");
    btnSearch() {
        const btn = this._btn;
        btn.addEventListener("click", this.render.bind(this));
        btn.addEventListener("click", function() {
            (0, _timeViewJsDefault.default).callDate();
        });
    }
    _generateMarkup() {
        return `
         <form class="search" action="search" id="searchForm">
          <input type="search" placeholder="Search..." class="input-search"/>
          <button class="btn-input" type="button">
            <img src="${0, _loupePngDefault.default}" alt="" class="btn-search btn-input" />
          </button>
        </form>
        <div class="date-time">
          <h1 class="time">6:12 PM</h1>
          <h3 class="date">Tuesday - 7/13/2022</h3>
        </div>
        `;
    }
}
exports.default = new SearchView();

},{"url:../../icon white/loupe.png":"8Z0mn","./View.js":"9JQ8u","./timeView.js":"5GJVA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Z0mn":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bWBrl") + "loupe.bfa782ab.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"9JQ8u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    render() {
        const markup = this._generateMarkup();
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    _clear() {
        this._parentEl.innerHTML = "";
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5GJVA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _configJs = require("../config.js");
class TimeView extends (0, _viewJsDefault.default) {
    _parentEl = document.querySelector(".date-time");
    stopTimeout() {
        clearTimeout(_configJs.TIMER);
    }
    time() {
        _configJs.CLOCK(0);
    }
    calcDate(date) {
        // this.iflocation = false;
        let calc = date - _configJs.HOUR;
        this.stopTimeout();
        _configJs.CLOCK(calc);
    }
    updateDate(dayName, month, day, year) {
        return document.querySelector(".date").textContent = `${dayName} - ${month}/${day}/${year}`;
    }
    callDate() {
        this.updateDate(_configJs.DAYFUNCTION(_configJs.DAYNAME), _configJs.MONTH, _configJs.DAY, _configJs.YEAR);
    }
    dateDom() {
        document.querySelector(".time").textContent = _configJs.DATA(_configJs.RESULT);
    }
}
exports.default = new TimeView();

},{"./View.js":"9JQ8u","../config.js":"jtCLN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jtCLN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_CURRENT", ()=>API_CURRENT);
parcelHelpers.export(exports, "API_NEXT", ()=>API_NEXT);
parcelHelpers.export(exports, "GLOBALDATE", ()=>GLOBALDATE);
parcelHelpers.export(exports, "RESULT", ()=>RESULT);
parcelHelpers.export(exports, "YEAR", ()=>YEAR);
parcelHelpers.export(exports, "MONTH", ()=>MONTH);
parcelHelpers.export(exports, "DAY", ()=>DAY);
parcelHelpers.export(exports, "DAYNAME", ()=>DAYNAME);
parcelHelpers.export(exports, "HOUR", ()=>HOUR);
parcelHelpers.export(exports, "MINUTES", ()=>MINUTES);
parcelHelpers.export(exports, "TIMER", ()=>TIMER);
parcelHelpers.export(exports, "DATA", ()=>DATA);
parcelHelpers.export(exports, "CLOCK", ()=>CLOCK);
parcelHelpers.export(exports, "DAYFUNCTION", ()=>DAYFUNCTION);
var _timeViewJs = require("./Views/timeView.js");
var _timeViewJsDefault = parcelHelpers.interopDefault(_timeViewJs);
const API_CURRENT = function(city) {
    return `http://api.weatherapi.com/v1/current.json?key=473dc8a0e83946559b942237221207&q=${city}&aqi=no`;
};
const API_NEXT = function(city) {
    return `http://api.weatherapi.com/v1/forecast.json?key=473dc8a0e83946559b942237221207&q=${city}&days=3&aqi=no&alerts=no`;
};
const GLOBALDATE = new Date();
let RESULT;
const YEAR = GLOBALDATE.getFullYear();
const MONTH = GLOBALDATE.getMonth() + 1;
const DAY = GLOBALDATE.getDate();
const DAYNAME = GLOBALDATE.getDay();
const HOUR = GLOBALDATE.getHours();
const MINUTES = Number(GLOBALDATE.getMinutes() < 10 ? "0" : "") + GLOBALDATE.getMinutes();
let TIMER = null;
function DATA(result) {
    let time = result.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    return time;
}
function CLOCK(hour) {
    let currentDate = new Date();
    let calc = hour;
    RESULT = new Date(currentDate.getTime() + 1 * calc * 3600000);
    (0, _timeViewJsDefault.default).dateDom();
    TIMER = setTimeout(()=>{
        RESULT;
        CLOCK(calc);
    }, 1000);
    return TIMER;
}
function DAYFUNCTION(i) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    if (i === 7) return days[0];
    if (i === 8) return days[1];
    return days[i];
}

},{"./Views/timeView.js":"5GJVA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9kapS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dayDate", ()=>dayDate);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "currentFunction", ()=>currentFunction);
parcelHelpers.export(exports, "nextFunction", ()=>nextFunction);
var _configJs = require("./config.js");
var _controllerJs = require("./controller.js");
var _timeViewJs = require("./Views/timeView.js");
var _timeViewJsDefault = parcelHelpers.interopDefault(_timeViewJs);
var _namesViewJs = require("./Views/namesView.js");
var _namesViewJsDefault = parcelHelpers.interopDefault(_namesViewJs);
var _measureViewJs = require("./Views/measureView.js");
var _measureViewJsDefault = parcelHelpers.interopDefault(_measureViewJs);
var _buttonViewJs = require("./Views/buttonView.js");
var _buttonViewJsDefault = parcelHelpers.interopDefault(_buttonViewJs);
var _errorViewJs = require("./Views/errorView.js");
var _errorViewJsDefault = parcelHelpers.interopDefault(_errorViewJs);
let dayDate;
const state = {
    weather: {},
    location: {},
    actual: {},
    next1: {},
    next2: {}
};
// Objects with the data
const weatherObject = function(data) {
    const weather = data.current;
    return {
        celsius: weather.temp_c,
        fahrenheit: weather.temp_f,
        humidity: weather.humidity,
        updated: weather.last_updated,
        condition: weather.condition.text,
        icon: weather.condition.icon
    };
};
const locationObject = function(data) {
    const location = data.location;
    return {
        country: location.country,
        time: location.localtime,
        lat: location.lat,
        lon: location.lon,
        city: location.name,
        capital: location.region
    };
};
const nextObject = function(data, day) {
    const next = data.forecast.forecastday[day];
    return {
        rain: next.day.daily_chance_of_rain,
        icon: next.day.condition.icon,
        text: next.day.condition.text
    };
};
// Rendering data
let fetchArr = [];
const currentFunction = async function(city) {
    try {
        // current weather
        const res = await fetch(`${(0, _configJs.API_CURRENT)(city)}`);
        // Rendering the data
        const current = await res.json();
        if (!current) return;
        state.weather = weatherObject(current);
        state.location = locationObject(current);
        if (!res.ok) throw new Error(`${current.message}`);
        const dataTime = state.location.time;
        const [date, time] = dataTime.split(" ");
        const [year, month, day] = date.split("-");
        const [hour, minutes] = time.split(":");
        // For dayName
        dayDate = new Date(year, month - 1, day).getDay();
        (0, _timeViewJsDefault.default).updateDate((0, _configJs.DAYFUNCTION)(dayDate), month, day, year);
        (0, _timeViewJsDefault.default).calcDate(hour);
        // Renders
        (0, _measureViewJsDefault.default).render();
        (0, _buttonViewJsDefault.default).render();
        (0, _namesViewJsDefault.default).render();
        (0, _measureViewJsDefault.default).render();
        // Grab Bg
        _controllerJs.grabBg(`${state.location.capital}-${state.location.country}`);
    } catch (err) {
        console.error(err);
        (0, _errorViewJsDefault.default).errorDisplay();
    }
};
const nextFunction = async function(city) {
    try {
        // Getting the next 2 days
        const res = await fetch(`${(0, _configJs.API_NEXT)(city)}`);
        const future = await res.json();
        if (!future) return;
        state.actual = nextObject(future, 0);
        state.next1 = nextObject(future, 1);
        state.next2 = nextObject(future, 2);
        if (!res.ok) throw new Error(`${future.message}`);
        (0, _buttonViewJsDefault.default).render();
    } catch (err) {
        console.error(`${err}, log another City or Country.`);
        setTimeout(()=>{
            (0, _errorViewJsDefault.default).errorDisplay();
        }, 5000);
    }
};

},{"./config.js":"jtCLN","./controller.js":"gCE4p","./Views/timeView.js":"5GJVA","./Views/namesView.js":"9yj7y","./Views/measureView.js":"igPDW","./Views/buttonView.js":"2clLH","./Views/errorView.js":"6fV0x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9yj7y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _dataJs = require("../data.js");
class NamesView extends (0, _viewJsDefault.default) {
    _parentEl = document.querySelector(".text-city");
    _generateMarkup() {
        return `
            <h1 class="city">${(0, _dataJs.state).location.city}</h1>
            <h3 class="country">${(0, _dataJs.state).location.country}</h3>
        `;
    }
}
exports.default = new NamesView();

},{"./View.js":"9JQ8u","../data.js":"9kapS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"igPDW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _dataJs = require("../data.js");
// icons
var _cloudyPng = require("url:../../icon white/cloudy.png");
var _cloudyPngDefault = parcelHelpers.interopDefault(_cloudyPng);
var _celsiusPng = require("url:../../icon white/celsius.png");
var _celsiusPngDefault = parcelHelpers.interopDefault(_celsiusPng);
var _fahrenheitPng = require("url:../../icon white/fahrenheit.png");
var _fahrenheitPngDefault = parcelHelpers.interopDefault(_fahrenheitPng);
class measureView extends (0, _viewJsDefault.default) {
    _parentEl = document.querySelector(".temp-container");
    celsiusDOM = document.getElementById("btn-celsius");
    fahrenheitDOM = document.getElementById("btn-fahrenheit");
    _changeClass(old, newest, render) {
        old.classList.remove("btn-measure-active");
        newest.classList.add("btn-measure-active");
        this.render();
        if (!old.classList.contains("btn-measure-active")) return;
    }
    changeActive() {
        let btnCelsius = this.celsiusDOM;
        let btnFahrenheit = this.fahrenheitDOM;
        btnCelsius.addEventListener("click", this._changeClass.bind(this, btnFahrenheit, btnCelsius));
        btnFahrenheit.addEventListener("click", this._changeClass.bind(this, btnCelsius, btnFahrenheit));
    }
    _changeMeasure() {
        if (this.celsiusDOM.classList.contains("btn-measure-active")) return (0, _dataJs.state).weather.celsius;
        else return (0, _dataJs.state).weather.fahrenheit;
    }
    _changeIcon() {
        if (this.celsiusDOM.classList.contains("btn-measure-active")) return 0, _celsiusPngDefault.default;
        else return 0, _fahrenheitPngDefault.default;
    }
    _generateMarkup() {
        return `
        <div class="icon-div">
        <img
          src="${(0, _dataJs.state).weather.icon}"
          alt="icon"
          class="temp-icon"
        />
      </div>
      <div class="num-temp">
        <h1 class="temperature">${Math.round(this._changeMeasure())}</h1>
        <img src="${this._changeIcon()}" alt="f" class="measure" />
      </div>`;
    }
}
exports.default = new measureView();

},{"./View.js":"9JQ8u","../data.js":"9kapS","url:../../icon white/cloudy.png":"hvoj6","url:../../icon white/celsius.png":"aDUKr","url:../../icon white/fahrenheit.png":"awHuB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hvoj6":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bWBrl") + "cloudy.190778f1.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"aDUKr":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bWBrl") + "celsius.eb4bb7d0.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"awHuB":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bWBrl") + "fahrenheit.2c3e4d21.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2clLH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataJs = require("../data.js");
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
// icons
var _cloudyPng = require("url:../../icon white/cloudy.png");
var _cloudyPngDefault = parcelHelpers.interopDefault(_cloudyPng);
var _humidityPng = require("url:../../icon white/humidity.png");
var _humidityPngDefault = parcelHelpers.interopDefault(_humidityPng);
var _rainPng = require("url:../../icon white/rain.png");
var _rainPngDefault = parcelHelpers.interopDefault(_rainPng);
var _configJs = require("../config.js");
class ButtonView extends (0, _viewJsDefault.default) {
    _parentEl = document.querySelector(".weather-info");
    _fewDays = document.querySelector(".btn-few-days");
    _meteoData = document.querySelector(".btn-meteorological");
    _classChange(old, newest) {
        old.classList.toggle("hidden");
        newest.classList.toggle("hidden");
        this.render();
    }
    dayDateLog() {
        (0, _dataJs.dayDate)();
    }
    _generateMarkup() {
        if (!this._fewDays.classList.contains("hidden")) return `
            ${this._generateMarkupMeteo()}
        `;
        else return `
            ${this._generateMarkupNext()}
        `;
    }
    changeModel() {
        let meteo = this._meteoData;
        let fewDays = this._fewDays;
        this._fewDays.addEventListener("click", this._classChange.bind(this, fewDays, meteo));
        this._meteoData.addEventListener("click", this._classChange.bind(this, meteo, fewDays));
    }
    _generateMarkupMeteo() {
        return `
        <div class="days-div-weather meteo-days-1">
        <div class="meteo-line1 meteo-line">
          <h1 class="calc-humidity calc-meteo">${(0, _dataJs.state).weather.humidity}%</h1>
          <img src="${0, _humidityPngDefault.default}" alt="f" class="img-meteo" />
        </div>
        <h3 class="text-meteo">Humidity</h3>
      </div>
      <div class="days-div-weather meteo-days-2">
        <div class="meteo-line2 meteo-line">
          <img src="${0, _rainPngDefault.default}" alt="f" class="img-meteo" />
          <h1 class="calc-rain calc-meteo">${(0, _dataJs.state).actual.rain}%</h1>
        </div>
        <h3 class="text-meteo">Rain</h3>
      </div>
        `;
    }
    _generateMarkupNext() {
        return `
        <div class="days-div-weather next-days-1">
             <img src="${(0, _dataJs.state).next1.icon}" alt="f" class="img-next" />
             <h3 class="text-days">${(0, _configJs.DAYFUNCTION)((0, _dataJs.dayDate) + 1)}</h3>
        </div>
        <div class="days-div-weather next-days-2">
             <img src="${(0, _dataJs.state).next2.icon}" alt="f" class="img-next" />
             <h3 class="text-days">${(0, _configJs.DAYFUNCTION)((0, _dataJs.dayDate) + 2)}</h3>
      </div>
        `;
    }
}
exports.default = new ButtonView();

},{"../data.js":"9kapS","./View.js":"9JQ8u","url:../../icon white/cloudy.png":"hvoj6","url:../../icon white/humidity.png":"LbTZK","url:../../icon white/rain.png":"kQvDw","../config.js":"jtCLN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"LbTZK":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bWBrl") + "humidity.1372d9b1.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kQvDw":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bWBrl") + "rain.4d97b2cc.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6fV0x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class ErrorView extends (0, _viewJsDefault.default) {
    _parentEl = document.querySelector(".error");
    errorDisplay() {
        this._parentEl.classList.toggle("error-change");
        setTimeout(()=>{
            this._parentEl.classList.toggle("error-hidden");
        }, 4000);
    }
}
exports.default = new ErrorView();

},{"./View.js":"9JQ8u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e8DDi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state2", ()=>state2);
parcelHelpers.export(exports, "getPhoto", ()=>getPhoto);
// This is for the bg data
var _unsplashJs = require("unsplash-js");
var _bgViewJs = require("./Views/bgView.js");
var _bgViewJsDefault = parcelHelpers.interopDefault(_bgViewJs);
var _downloadViewJs = require("./Views/downloadView.js");
var _downloadViewJsDefault = parcelHelpers.interopDefault(_downloadViewJs);
const state2 = {
    bg: {},
    author: {},
    download: {}
};
const unsplash = (0, _unsplashJs.createApi)({
    accessKey: "a8hbd0MFXTjYEx9S1NJh9-VbieT2T70qH7-rwjbN4CQ"
});
const getPhoto = async function(search) {
    try {
        unsplash.search.getPhotos({
            query: `${search}`,
            orderBy: "relevant"
        }).then((result1)=>{
            if (result1.errors) console.log(`maricon se daño`);
            else {
                const feed = result1.response;
                const { total , results  } = feed;
                // download event
                unsplash.photos.trackDownload({
                    downloadLocation: results[0].links.download_location
                }).then((result)=>{
                    state2.download = result.response.url;
                    (0, _downloadViewJsDefault.default).render();
                });
                // bg
                state2.bg = result1.response.results[0];
                state2.author = state2.bg.user;
                console.log(state2.bg);
                // calling the functions
                (0, _bgViewJsDefault.default).changeBg();
                // render
                (0, _bgViewJsDefault.default).render();
            }
        });
    } catch (err) {
        console.error(err);
    }
};

},{"unsplash-js":"49FQl","./Views/bgView.js":"ae3kD","./Views/downloadView.js":"bXTM9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"49FQl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Language", ()=>Language);
parcelHelpers.export(exports, "OrderBy", ()=>OrderBy);
parcelHelpers.export(exports, "_internals", ()=>internals);
parcelHelpers.export(exports, "createApi", ()=>createApi);
var _contentType = require("content-type");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var checkIsString = /*#__PURE__*/ getRefinement(function(value) {
    return typeof value === "string" ? value : null;
});
var isDefined = function isDefined(x) {
    return x !== null && x !== undefined;
};
function getRefinement(getB) {
    return function(a) {
        return isDefined(getB(a));
    };
}
var checkIsNonEmptyArray = function checkIsNonEmptyArray(a) {
    return a.length > 0;
};
/** Takes a dictionary containing nullish values and returns a dictionary of all the defined
 * (non-nullish) values.
 */ var compactDefined = function compactDefined(obj) {
    return Object.keys(obj).reduce(function(acc, key) {
        var _ref;
        var value = obj[key];
        return _extends({}, acc, isDefined(value) ? (_ref = {}, _ref[key] = value, _ref) : {});
    }, {});
};
function flow() {
    for(var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++)fns[_key] = arguments[_key];
    var len = fns.length - 1;
    return function() {
        for(var _len2 = arguments.length, x = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)x[_key2] = arguments[_key2];
        var y = fns[0].apply(this, x);
        for(var i = 1; i <= len; i++)y = fns[i].call(this, y);
        return y;
    };
}
var checkIsObject = /*#__PURE__*/ getRefinement(function(response) {
    return isDefined(response) && typeof response === "object" && !Array.isArray(response) ? response : null;
});
var checkIsErrors = /*#__PURE__*/ getRefinement(function(errors) {
    return Array.isArray(errors) && errors.every(checkIsString) && checkIsNonEmptyArray(errors) ? errors : null;
});
var checkIsApiError = /*#__PURE__*/ getRefinement(function(response) {
    return checkIsObject(response) && "errors" in response && checkIsErrors(response.errors) ? {
        errors: response.errors
    } : null;
});
var getErrorForBadStatusCode = function getErrorForBadStatusCode(jsonResponse) {
    if (checkIsApiError(jsonResponse)) return {
        errors: jsonResponse.errors,
        source: "api"
    };
    else return {
        errors: [
            "Responded with a status code outside the 2xx range, and the response body is not recognisable."
        ],
        source: "decoding"
    };
};
var DecodingError = function DecodingError(message) {
    this.message = message;
};
var CONTENT_TYPE_RESPONSE_HEADER = "content-type";
var CONTENT_TYPE_JSON = "application/json";
var checkIsJsonResponse = function checkIsJsonResponse(response) {
    var contentTypeHeader = response.headers.get(CONTENT_TYPE_RESPONSE_HEADER);
    return isDefined(contentTypeHeader) && (0, _contentType.parse)(contentTypeHeader).type === CONTENT_TYPE_JSON;
};
/**
 * Note: restrict the type of JSON to `AnyJson` so that `any` doesn't leak downstream.
 */ var getJsonResponse = function getJsonResponse(response) {
    if (checkIsJsonResponse(response)) return response.json()["catch"](function(_err) {
        throw new DecodingError("unable to parse JSON response.");
    });
    else throw new DecodingError("expected JSON response from server.");
};
var handleFetchResponse = function handleFetchResponse(handleResponse) {
    return function(response) {
        return (response.ok ? handleResponse({
            response: response
        }).then(function(handledResponse) {
            return {
                type: "success",
                status: response.status,
                response: handledResponse,
                originalResponse: response
            };
        }) : getJsonResponse(response).then(function(jsonResponse) {
            return _extends({
                type: "error",
                status: response.status
            }, getErrorForBadStatusCode(jsonResponse), {
                originalResponse: response
            });
        }))["catch"](function(error) {
            /**
       * We want to separate expected decoding errors from unknown ones. We do so by throwing a custom
       * `DecodingError` whenever we encounter one within `handleFetchResponse` and catch them all
       * here. This allows us to easily handle all of these errors at once. Unexpected errors are not
       * caught, so that they bubble up and fail loudly.
       *
       * Note: Ideally we'd use an Either type, but this does the job without introducing dependencies
       * like `fp-ts`.
       */ if (error instanceof DecodingError) return {
                type: "error",
                source: "decoding",
                status: response.status,
                originalResponse: response,
                errors: [
                    error.message
                ]
            };
            else throw error;
        });
    };
};
var castResponse = function castResponse() {
    return function(_ref) {
        var response = _ref.response;
        return getJsonResponse(response);
    };
};
var addQueryToUrl = function addQueryToUrl(query) {
    return function(url) {
        Object.keys(query).forEach(function(queryKey) {
            return url.searchParams.set(queryKey, query[queryKey].toString());
        });
    };
};
var addPathnameToUrl = function addPathnameToUrl(pathname) {
    return function(url) {
        // When there is no existing pathname, the value is `/`. Appending would give us a URL with two
        // forward slashes. This is why we replace the value in that scenario.
        if (url.pathname === "/") url.pathname = pathname;
        else url.pathname += pathname;
    };
};
var buildUrl = function buildUrl(_ref) {
    var pathname = _ref.pathname, query = _ref.query;
    return function(apiUrl) {
        var url = new URL(apiUrl);
        addPathnameToUrl(pathname)(url);
        addQueryToUrl(query)(url);
        return url.toString();
    };
};
var getQueryFromSearchParams = function getQueryFromSearchParams(searchParams) {
    var query = {};
    searchParams.forEach(function(value, key) {
        query[key] = value;
    });
    return query;
};
var parseQueryAndPathname = function parseQueryAndPathname(url) {
    var _URL = new URL(url), pathname = _URL.pathname, searchParams = _URL.searchParams;
    var query = getQueryFromSearchParams(searchParams);
    return {
        query: query,
        pathname: pathname === "/" ? undefined : pathname
    };
};
/**
 * helper used to type-check the arguments, and add default params for all requests
 */ var createRequestHandler = function createRequestHandler(fn) {
    return function(a, additionalFetchOptions) {
        if (additionalFetchOptions === void 0) additionalFetchOptions = {};
        var _fn = fn(a), headers = _fn.headers, query = _fn.query, baseReqParams = _objectWithoutPropertiesLoose(_fn, [
            "headers",
            "query"
        ]);
        return _extends({}, baseReqParams, additionalFetchOptions, {
            query: query,
            headers: _extends({}, headers, additionalFetchOptions.headers)
        });
    };
};
var makeEndpoint = function makeEndpoint(endpoint) {
    return endpoint;
};
var initMakeRequest = function initMakeRequest(_ref) {
    var accessKey = _ref.accessKey, _ref$apiVersion = _ref.apiVersion, apiVersion = _ref$apiVersion === void 0 ? "v1" : _ref$apiVersion, _ref$apiUrl = _ref.apiUrl, apiUrl = _ref$apiUrl === void 0 ? "https://api.unsplash.com" : _ref$apiUrl, generalHeaders = _ref.headers, providedFetch = _ref.fetch, generalFetchOptions = _objectWithoutPropertiesLoose(_ref, [
        "accessKey",
        "apiVersion",
        "apiUrl",
        "headers",
        "fetch"
    ]);
    return function(_ref2) {
        var handleResponse = _ref2.handleResponse, handleRequest = _ref2.handleRequest;
        return flow(handleRequest, function(_ref3) {
            var pathname = _ref3.pathname, query = _ref3.query, _ref3$method = _ref3.method, method = _ref3$method === void 0 ? "GET" : _ref3$method, endpointHeaders = _ref3.headers, body = _ref3.body, signal = _ref3.signal;
            var url = buildUrl({
                pathname: pathname,
                query: query
            })(apiUrl);
            var fetchOptions = _extends({
                method: method,
                headers: _extends({}, generalHeaders, endpointHeaders, {
                    "Accept-Version": apiVersion
                }, isDefined(accessKey) ? {
                    Authorization: "Client-ID " + accessKey
                } : {}),
                body: body,
                signal: signal
            }, generalFetchOptions);
            var fetchToUse = providedFetch != null ? providedFetch : fetch;
            return fetchToUse(url, fetchOptions).then(handleFetchResponse(handleResponse));
        });
    };
};
var TOTAL_RESPONSE_HEADER = "x-total";
var getTotalFromApiFeedResponse = function getTotalFromApiFeedResponse(response) {
    var totalsStr = response.headers.get(TOTAL_RESPONSE_HEADER);
    if (isDefined(totalsStr)) {
        var total = parseInt(totalsStr);
        if (Number.isInteger(total)) return total;
        else throw new DecodingError("expected " + TOTAL_RESPONSE_HEADER + " header to be valid integer.");
    } else throw new DecodingError("expected " + TOTAL_RESPONSE_HEADER + " header to exist.");
};
var handleFeedResponse = function handleFeedResponse() {
    return function(_ref) {
        var response = _ref.response;
        return castResponse()({
            response: response
        }).then(function(results) {
            return {
                results: results,
                total: getTotalFromApiFeedResponse(response)
            };
        });
    };
};
var getCollections = function getCollections(collectionIds) {
    return isDefined(collectionIds) ? {
        collections: collectionIds.join()
    } : {};
};
var getTopics = function getTopics(topicIds) {
    return isDefined(topicIds) ? {
        topics: topicIds.join()
    } : {};
};
var getFeedParams = function getFeedParams(_ref) {
    var page = _ref.page, perPage = _ref.perPage, orderBy = _ref.orderBy;
    return compactDefined({
        per_page: perPage,
        order_by: orderBy,
        page: page
    });
};
var COLLECTIONS_PATH_PREFIX = "/collections";
var getPhotos = /*#__PURE__*/ function() {
    var getPathname = function getPathname(_ref) {
        var collectionId = _ref.collectionId;
        return COLLECTIONS_PATH_PREFIX + "/" + collectionId + "/photos";
    };
    return makeEndpoint({
        getPathname: getPathname,
        handleRequest: createRequestHandler(function(_ref2) {
            var collectionId = _ref2.collectionId, orientation = _ref2.orientation, paginationParams = _objectWithoutPropertiesLoose(_ref2, [
                "collectionId",
                "orientation"
            ]);
            return {
                pathname: getPathname({
                    collectionId: collectionId
                }),
                query: compactDefined(_extends({}, getFeedParams(paginationParams), {
                    orientation: orientation
                }))
            };
        }),
        handleResponse: handleFeedResponse()
    });
}();
var get = /*#__PURE__*/ function() {
    var getPathname = function getPathname(_ref3) {
        var collectionId = _ref3.collectionId;
        return COLLECTIONS_PATH_PREFIX + "/" + collectionId;
    };
    return makeEndpoint({
        getPathname: getPathname,
        handleRequest: createRequestHandler(function(_ref4) {
            var collectionId = _ref4.collectionId;
            return {
                pathname: getPathname({
                    collectionId: collectionId
                }),
                query: {}
            };
        }),
        handleResponse: castResponse()
    });
}();
var list = /*#__PURE__*/ function() {
    var getPathname = function getPathname() {
        return COLLECTIONS_PATH_PREFIX;
    };
    return makeEndpoint({
        getPathname: getPathname,
        handleRequest: createRequestHandler(function(paginationParams) {
            if (paginationParams === void 0) paginationParams = {};
            return {
                pathname: getPathname(),
                query: getFeedParams(paginationParams)
            };
        }),
        handleResponse: handleFeedResponse()
    });
}();
var getRelated = /*#__PURE__*/ function() {
    var getPathname = function getPathname(_ref5) {
        var collectionId = _ref5.collectionId;
        return COLLECTIONS_PATH_PREFIX + "/" + collectionId + "/related";
    };
    return makeEndpoint({
        getPathname: getPathname,
        handleRequest: createRequestHandler(function(_ref6) {
            var collectionId = _ref6.collectionId;
            return {
                pathname: getPathname({
                    collectionId: collectionId
                }),
                query: {}
            };
        }),
        handleResponse: castResponse()
    });
}();
var index = {
    __proto__: null,
    getPhotos: getPhotos,
    get: get,
    list: list,
    getRelated: getRelated
};
var PHOTOS_PATH_PREFIX = "/photos";
var list$1 = /*#__PURE__*/ function() {
    var _getPathname = function getPathname() {
        return PHOTOS_PATH_PREFIX;
    };
    return makeEndpoint({
        // Wrapper uses type trick to allow 0 args
        getPathname: function getPathname(_params) {
            return _getPathname();
        },
        handleRequest: createRequestHandler(function(feedParams) {
            if (feedParams === void 0) feedParams = {};
            return {
                pathname: PHOTOS_PATH_PREFIX,
                query: compactDefined(getFeedParams(feedParams))
            };
        }),
        handleResponse: handleFeedResponse()
    });
}();
var get$1 = /*#__PURE__*/ function() {
    var getPathname = function getPathname(_ref) {
        var photoId = _ref.photoId;
        return PHOTOS_PATH_PREFIX + "/" + photoId;
    };
    return makeEndpoint({
        getPathname: getPathname,
        handleRequest: createRequestHandler(function(_ref2) {
            var photoId = _ref2.photoId;
            return {
                pathname: getPathname({
                    photoId: photoId
                }),
                query: {}
            };
        }),
        handleResponse: castResponse()
    });
}();
var getStats = /*#__PURE__*/ function() {
    var getPathname = function getPathname(_ref3) {
        var photoId = _ref3.photoId;
        return PHOTOS_PATH_PREFIX + "/" + photoId + "/statistics";
    };
    return makeEndpoint({
        getPathname: getPathname,
        handleRequest: createRequestHandler(function(_ref4) {
            var photoId = _ref4.photoId;
            return {
                pathname: getPathname({
                    photoId: photoId
                }),
                query: {}
            };
        }),
        handleResponse: castResponse()
    });
}();
var getRandom = /*#__PURE__*/ function() {
    var getPathname = function getPathname() {
        return PHOTOS_PATH_PREFIX + "/random";
    };
    return makeEndpoint({
        getPathname: getPathname,
        handleRequest: createRequestHandler(function(_temp) {
            var _ref5 = _temp === void 0 ? {} : _temp, collectionIds = _ref5.collectionIds, contentFilter = _ref5.contentFilter, topicIds = _ref5.topicIds, queryParams = _objectWithoutPropertiesLoose(_ref5, [
                "collectionIds",
                "contentFilter",
                "topicIds"
            ]);
            return {
                pathname: getPathname(),
                query: compactDefined(_extends({}, queryParams, {
                    content_filter: contentFilter
                }, getCollections(collectionIds), getTopics(topicIds))),
                headers: {
                    /**
           * Avoid response caching
           */ "cache-control": "no-cache"
                }
            };
        }),
        handleResponse: castResponse()
    });
}();
var trackDownload = {
    handleRequest: /*#__PURE__*/ createRequestHandler(function(_ref6) {
        var downloadLocation = _ref6.downloadLocation;
        var _parseQueryAndPathnam = parseQueryAndPathname(downloadLocation), pathname = _parseQueryAndPathnam.pathname, query = _parseQueryAndPathnam.query;
        if (!isDefined(pathname)) throw new Error("Could not parse pathname from url.");
        return {
            pathname: pathname,
            query: compactDefined(query)
        };
    }),
    handleResponse: /*#__PURE__*/ castResponse()
};
var index$1 = {
    __proto__: null,
    list: list$1,
    get: get$1,
    getStats: getStats,
    getRandom: getRandom,
    trackDownload: trackDownload
};
var SEARCH_PATH_PREFIX = "/search";
var getPhotos$1 = /*#__PURE__*/ function() {
    var _getPathname = function getPathname() {
        return SEARCH_PATH_PREFIX + "/photos";
    };
    return makeEndpoint({
        // Wrapper uses type trick to allow 0 args
        getPathname: function getPathname(_params) {
            return _getPathname();
        },
        handleRequest: createRequestHandler(function(_ref) {
            var query = _ref.query, page = _ref.page, perPage = _ref.perPage, orderBy = _ref.orderBy, collectionIds = _ref.collectionIds, lang = _ref.lang, contentFilter = _ref.contentFilter, filters = _objectWithoutPropertiesLoose(_ref, [
                "query",
                "page",
                "perPage",
                "orderBy",
                "collectionIds",
                "lang",
                "contentFilter"
            ]);
            return {
                pathname: _getPathname(),
                query: compactDefined(_extends({
                    query: query,
                    content_filter: contentFilter,
                    lang: lang,
                    order_by: orderBy
                }, getFeedParams({
                    page: page,
                    perPage: perPage
                }), getCollections(collectionIds), filters))
            };
        }),
        handleResponse: castResponse()
    });
}();
var getCollections$1 = /*#__PURE__*/ function() {
    var _getPathname2 = function getPathname() {
        return SEARCH_PATH_PREFIX + "/collections";
    };
    return makeEndpoint({
        // Wrapper uses type trick to allow 0 args
        getPathname: function getPathname(_params) {
            return _getPathname2();
        },
        handleRequest: createRequestHandler(function(_ref2) {
            var query = _ref2.query, paginationParams = _objectWithoutPropertiesLoose(_ref2, [
                "query"
            ]);
            return {
                pathname: _getPathname2(),
                query: _extends({
                    query: query
                }, getFeedParams(paginationParams))
            };
        }),
        handleResponse: castResponse()
    });
}();
var getUsers = /*#__PURE__*/ function() {
    var _getPathname3 = function getPathname() {
        return SEARCH_PATH_PREFIX + "/users";
    };
    return makeEndpoint({
        // Wrapper uses type trick to allow 0 args
        getPathname: function getPathname(_params) {
            return _getPathname3();
        },
        handleRequest: createRequestHandler(function(_ref3) {
            var query = _ref3.query, paginationParams = _objectWithoutPropertiesLoose(_ref3, [
                "query"
            ]);
            return {
                pathname: _getPathname3(),
                query: _extends({
                    query: query
                }, getFeedParams(paginationParams))
            };
        }),
        handleResponse: castResponse()
    });
}();
var index$2 = {
    __proto__: null,
    getPhotos: getPhotos$1,
    getCollections: getCollections$1,
    getUsers: getUsers
};
var USERS_PATH_PREFIX = "/users";
var get$2 = /*#__PURE__*/ function() {
    var getPathname = function getPathname(_ref) {
        var username = _ref.username;
        return USERS_PATH_PREFIX + "/" + username;
    };
    return makeEndpoint({
        getPathname: getPathname,
        handleRequest: createRequestHandler(function(_ref2) {
            var username = _ref2.username;
            return {
                pathname: getPathname({
                    username: username
                }),
                query: {}
            };
        }),
        handleResponse: castResponse()
    });
}();
var getPhotos$2 = /*#__PURE__*/ function() {
    var getPathname = function getPathname(_ref3) {
        var username = _ref3.username;
        return USERS_PATH_PREFIX + "/" + username + "/photos";
    };
    return makeEndpoint({
        getPathname: getPathname,
        handleRequest: createRequestHandler(function(_ref4) {
            var username = _ref4.username, stats = _ref4.stats, orientation = _ref4.orientation, paginationParams = _objectWithoutPropertiesLoose(_ref4, [
                "username",
                "stats",
                "orientation"
            ]);
            return {
                pathname: getPathname({
                    username: username
                }),
                query: compactDefined(_extends({}, getFeedParams(paginationParams), {
                    orientation: orientation,
                    stats: stats
                }))
            };
        }),
        handleResponse: handleFeedResponse()
    });
}();
var getLikes = /*#__PURE__*/ function() {
    var getPathname = function getPathname(_ref5) {
        var username = _ref5.username;
        return USERS_PATH_PREFIX + "/" + username + "/likes";
    };
    return makeEndpoint({
        getPathname: getPathname,
        handleRequest: createRequestHandler(function(_ref6) {
            var username = _ref6.username, orientation = _ref6.orientation, paginationParams = _objectWithoutPropertiesLoose(_ref6, [
                "username",
                "orientation"
            ]);
            return {
                pathname: getPathname({
                    username: username
                }),
                query: compactDefined(_extends({}, getFeedParams(paginationParams), {
                    orientation: orientation
                }))
            };
        }),
        handleResponse: handleFeedResponse()
    });
}();
var getCollections$2 = /*#__PURE__*/ function() {
    var getPathname = function getPathname(_ref7) {
        var username = _ref7.username;
        return USERS_PATH_PREFIX + "/" + username + "/collections";
    };
    return makeEndpoint({
        getPathname: getPathname,
        handleRequest: createRequestHandler(function(_ref8) {
            var username = _ref8.username, paginationParams = _objectWithoutPropertiesLoose(_ref8, [
                "username"
            ]);
            return {
                pathname: getPathname({
                    username: username
                }),
                query: getFeedParams(paginationParams)
            };
        }),
        handleResponse: handleFeedResponse()
    });
}();
var index$3 = {
    __proto__: null,
    get: get$2,
    getPhotos: getPhotos$2,
    getLikes: getLikes,
    getCollections: getCollections$2
};
var BASE_TOPIC_PATH = "/topics";
var getTopicPath = function getTopicPath(_ref) {
    var topicIdOrSlug = _ref.topicIdOrSlug;
    return BASE_TOPIC_PATH + "/" + topicIdOrSlug;
};
var list$2 = /*#__PURE__*/ makeEndpoint({
    getPathname: getTopicPath,
    handleRequest: function handleRequest(_ref2) {
        var page = _ref2.page, perPage = _ref2.perPage, orderBy = _ref2.orderBy, topicIdsOrSlugs = _ref2.topicIdsOrSlugs;
        return {
            pathname: BASE_TOPIC_PATH,
            query: compactDefined(_extends({}, getFeedParams({
                page: page,
                perPage: perPage
            }), {
                ids: topicIdsOrSlugs == null ? void 0 : topicIdsOrSlugs.join(","),
                order_by: orderBy
            }))
        };
    },
    handleResponse: /*#__PURE__*/ handleFeedResponse()
});
var get$3 = /*#__PURE__*/ makeEndpoint({
    getPathname: getTopicPath,
    handleRequest: function handleRequest(_ref3) {
        var topicIdOrSlug = _ref3.topicIdOrSlug;
        return {
            pathname: getTopicPath({
                topicIdOrSlug: topicIdOrSlug
            }),
            query: {}
        };
    },
    handleResponse: /*#__PURE__*/ castResponse()
});
var getPhotos$3 = /*#__PURE__*/ function() {
    var getPathname = /*#__PURE__*/ flow(getTopicPath, function(topicPath) {
        return topicPath + "/photos";
    });
    return makeEndpoint({
        getPathname: getPathname,
        handleRequest: function handleRequest(_ref4) {
            var topicIdOrSlug = _ref4.topicIdOrSlug, orientation = _ref4.orientation, feedParams = _objectWithoutPropertiesLoose(_ref4, [
                "topicIdOrSlug",
                "orientation"
            ]);
            return {
                pathname: getPathname({
                    topicIdOrSlug: topicIdOrSlug
                }),
                query: compactDefined(_extends({}, getFeedParams(feedParams), {
                    orientation: orientation
                }))
            };
        },
        handleResponse: handleFeedResponse()
    });
}();
var index$4 = {
    __proto__: null,
    list: list$2,
    get: get$3,
    getPhotos: getPhotos$3
};
var trackNonHotLinkedPhotoView = function trackNonHotLinkedPhotoView(_ref) {
    var appId = _ref.appId;
    return function(_ref2) {
        var photoId = _ref2.photoId;
        var ids = !Array.isArray(photoId) ? [
            photoId
        ] : photoId;
        if (ids.length > 20) throw new Error("You cannot track more than 20 photos at once. Please try again with fewer photos.");
        return fetch("views.unsplash.com/v?photo_id=" + ids.join() + "&app_id=" + appId);
    };
};
var internals = {
    __proto__: null,
    collections: index,
    photos: index$1,
    search: index$2,
    users: index$3,
    topics: index$4,
    trackNonHotLinkedPhotoView: trackNonHotLinkedPhotoView
};
var Language;
(function(Language1) {
    Language1["Afrikaans"] = "af";
    Language1["Amharic"] = "am";
    Language1["Arabic"] = "ar";
    Language1["Azerbaijani"] = "az";
    Language1["Belarusian"] = "be";
    Language1["Bulgarian"] = "bg";
    Language1["Bengali"] = "bn";
    Language1["Bosnian"] = "bs";
    Language1["Catalan"] = "ca";
    Language1["Cebuano"] = "ceb";
    Language1["Corsican"] = "co";
    Language1["Czech"] = "cs";
    Language1["Welsh"] = "cy";
    Language1["Danish"] = "da";
    Language1["German"] = "de";
    Language1["Greek"] = "el";
    Language1["English"] = "en";
    Language1["Esperanto"] = "eo";
    Language1["Spanish"] = "es";
    Language1["Estonian"] = "et";
    Language1["Basque"] = "eu";
    Language1["Persian"] = "fa";
    Language1["Finnish"] = "fi";
    Language1["French"] = "fr";
    Language1["Frisian"] = "fy";
    Language1["Irish"] = "ga";
    Language1["ScotsGaelic"] = "gd";
    Language1["Galician"] = "gl";
    Language1["Gujarati"] = "gu";
    Language1["Hausa"] = "ha";
    Language1["Hawaiian"] = "haw";
    Language1["Hindi"] = "hi";
    Language1["Hmong"] = "hmn";
    Language1["Croatian"] = "hr";
    Language1["HaitianCreole"] = "ht";
    Language1["Hungarian"] = "hu";
    Language1["Armenian"] = "hy";
    Language1["Indonesian"] = "id";
    Language1["Igbo"] = "ig";
    Language1["Icelandic"] = "is";
    Language1["Italian"] = "it";
    Language1["Hebrew"] = "iw";
    Language1["Japanese"] = "ja";
    Language1["Javanese"] = "jw";
    Language1["Georgian"] = "ka";
    Language1["Kazakh"] = "kk";
    Language1["Khmer"] = "km";
    Language1["Kannada"] = "kn";
    Language1["Korean"] = "ko";
    Language1["Kurdish"] = "ku";
    Language1["Kyrgyz"] = "ky";
    Language1["Latin"] = "la";
    Language1["Luxembourgish"] = "lb";
    Language1["Lao"] = "lo";
    Language1["Lithuanian"] = "lt";
    Language1["Latvian"] = "lv";
    Language1["Malagasy"] = "mg";
    Language1["Maori"] = "mi";
    Language1["Macedonian"] = "mk";
    Language1["Malayalam"] = "ml";
    Language1["Mongolian"] = "mn";
    Language1["Marathi"] = "mr";
    Language1["Malay"] = "ms";
    Language1["Maltese"] = "mt";
    Language1["Myanmar"] = "my";
    Language1["Nepali"] = "ne";
    Language1["Dutch"] = "nl";
    Language1["Norwegian"] = "no";
    Language1["Nyanja"] = "ny";
    Language1["Oriya"] = "or";
    Language1["Punjabi"] = "pa";
    Language1["Polish"] = "pl";
    Language1["Pashto"] = "ps";
    Language1["Portuguese"] = "pt";
    Language1["Romanian"] = "ro";
    Language1["Russian"] = "ru";
    Language1["Kinyarwanda"] = "rw";
    Language1["Sindhi"] = "sd";
    Language1["Sinhala"] = "si";
    Language1["Slovak"] = "sk";
    Language1["Slovenian"] = "sl";
    Language1["Samoan"] = "sm";
    Language1["Shona"] = "sn";
    Language1["Somali"] = "so";
    Language1["Albanian"] = "sq";
    Language1["Serbian"] = "sr";
    Language1["Sesotho"] = "st";
    Language1["Sundanese"] = "su";
    Language1["Swedish"] = "sv";
    Language1["Swahili"] = "sw";
    Language1["Tamil"] = "ta";
    Language1["Telugu"] = "te";
    Language1["Tajik"] = "tg";
    Language1["Thai"] = "th";
    Language1["Turkmen"] = "tk";
    Language1["Filipino"] = "tl";
    Language1["Turkish"] = "tr";
    Language1["Tatar"] = "tt";
    Language1["Uighur"] = "ug";
    Language1["Ukrainian"] = "uk";
    Language1["Urdu"] = "ur";
    Language1["Uzbek"] = "uz";
    Language1["Vietnamese"] = "vi";
    Language1["Xhosa"] = "xh";
    Language1["Yiddish"] = "yi";
    Language1["Yoruba"] = "yo";
    Language1["ChineseSimplified"] = "zh";
    Language1["ChineseTraditional"] = "zh-TW";
    Language1["Zulu"] = "zu";
})(Language || (Language = {}));
var OrderBy;
(function(OrderBy1) {
    OrderBy1["LATEST"] = "latest";
    OrderBy1["POPULAR"] = "popular";
    OrderBy1["VIEWS"] = "views";
    OrderBy1["DOWNLOADS"] = "downloads";
    OrderBy1["OLDEST"] = "oldest";
})(OrderBy || (OrderBy = {}));
var createApi = /*#__PURE__*/ flow(initMakeRequest, function(makeRequest) {
    return {
        photos: {
            get: makeRequest(get$1),
            list: makeRequest(list$1),
            getStats: makeRequest(getStats),
            getRandom: makeRequest(getRandom),
            trackDownload: makeRequest(trackDownload)
        },
        users: {
            getPhotos: makeRequest(getPhotos$2),
            getCollections: makeRequest(getCollections$2),
            getLikes: makeRequest(getLikes),
            get: makeRequest(get$2)
        },
        search: {
            getCollections: makeRequest(getCollections$1),
            getPhotos: makeRequest(getPhotos$1),
            getUsers: makeRequest(getUsers)
        },
        collections: {
            getPhotos: makeRequest(getPhotos),
            get: makeRequest(get),
            list: makeRequest(list),
            getRelated: makeRequest(getRelated)
        },
        topics: {
            list: makeRequest(list$2),
            get: makeRequest(get$3),
            getPhotos: makeRequest(getPhotos$3)
        }
    };
});

},{"content-type":"cNHia","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cNHia":[function(require,module,exports) {
/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ "use strict";
/**
 * RegExp to match *( ";" parameter ) in RFC 7231 sec 3.1.1.1
 *
 * parameter     = token "=" ( token / quoted-string )
 * token         = 1*tchar
 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
 *               / DIGIT / ALPHA
 *               ; any VCHAR, except delimiters
 * quoted-string = DQUOTE *( qdtext / quoted-pair ) DQUOTE
 * qdtext        = HTAB / SP / %x21 / %x23-5B / %x5D-7E / obs-text
 * obs-text      = %x80-FF
 * quoted-pair   = "\" ( HTAB / SP / VCHAR / obs-text )
 */ var PARAM_REGEXP = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g;
var TEXT_REGEXP = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/;
var TOKEN_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
/**
 * RegExp to match quoted-pair in RFC 7230 sec 3.2.6
 *
 * quoted-pair = "\" ( HTAB / SP / VCHAR / obs-text )
 * obs-text    = %x80-FF
 */ var QESC_REGEXP = /\\([\u000b\u0020-\u00ff])/g;
/**
 * RegExp to match chars that must be quoted-pair in RFC 7230 sec 3.2.6
 */ var QUOTE_REGEXP = /([\\"])/g;
/**
 * RegExp to match type in RFC 7231 sec 3.1.1.1
 *
 * media-type = type "/" subtype
 * type       = token
 * subtype    = token
 */ var TYPE_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
/**
 * Module exports.
 * @public
 */ exports.format = format;
exports.parse = parse;
/**
 * Format object to media type.
 *
 * @param {object} obj
 * @return {string}
 * @public
 */ function format(obj) {
    if (!obj || typeof obj !== "object") throw new TypeError("argument obj is required");
    var parameters = obj.parameters;
    var type = obj.type;
    if (!type || !TYPE_REGEXP.test(type)) throw new TypeError("invalid type");
    var string = type;
    // append parameters
    if (parameters && typeof parameters === "object") {
        var param;
        var params = Object.keys(parameters).sort();
        for(var i = 0; i < params.length; i++){
            param = params[i];
            if (!TOKEN_REGEXP.test(param)) throw new TypeError("invalid parameter name");
            string += "; " + param + "=" + qstring(parameters[param]);
        }
    }
    return string;
}
/**
 * Parse media type to object.
 *
 * @param {string|object} string
 * @return {Object}
 * @public
 */ function parse(string) {
    if (!string) throw new TypeError("argument string is required");
    // support req/res-like objects as argument
    var header = typeof string === "object" ? getcontenttype(string) : string;
    if (typeof header !== "string") throw new TypeError("argument string is required to be a string");
    var index = header.indexOf(";");
    var type = index !== -1 ? header.substr(0, index).trim() : header.trim();
    if (!TYPE_REGEXP.test(type)) throw new TypeError("invalid media type");
    var obj = new ContentType(type.toLowerCase());
    // parse parameters
    if (index !== -1) {
        var key;
        var match;
        var value;
        PARAM_REGEXP.lastIndex = index;
        while(match = PARAM_REGEXP.exec(header)){
            if (match.index !== index) throw new TypeError("invalid parameter format");
            index += match[0].length;
            key = match[1].toLowerCase();
            value = match[2];
            if (value[0] === '"') // remove quotes and escapes
            value = value.substr(1, value.length - 2).replace(QESC_REGEXP, "$1");
            obj.parameters[key] = value;
        }
        if (index !== header.length) throw new TypeError("invalid parameter format");
    }
    return obj;
}
/**
 * Get content-type from req/res objects.
 *
 * @param {object}
 * @return {Object}
 * @private
 */ function getcontenttype(obj) {
    var header;
    if (typeof obj.getHeader === "function") // res-like
    header = obj.getHeader("content-type");
    else if (typeof obj.headers === "object") // req-like
    header = obj.headers && obj.headers["content-type"];
    if (typeof header !== "string") throw new TypeError("content-type header is missing from object");
    return header;
}
/**
 * Quote a string if necessary.
 *
 * @param {string} val
 * @return {string}
 * @private
 */ function qstring(val) {
    var str = String(val);
    // no need to quote tokens
    if (TOKEN_REGEXP.test(str)) return str;
    if (str.length > 0 && !TEXT_REGEXP.test(str)) throw new TypeError("invalid parameter value");
    return '"' + str.replace(QUOTE_REGEXP, "\\$1") + '"';
}
/**
 * Class to represent a content type.
 * @private
 */ function ContentType(type) {
    this.parameters = Object.create(null);
    this.type = type;
}

},{}],"ae3kD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _data2Js = require("../data2.js");
var _dataJs = require("../data.js");
var _thomMilkovicSkUTVJi8JcUnsplashJpg = require("url:../../cities/thom-milkovic-skUTVJi8-jc-unsplash.jpg");
var _thomMilkovicSkUTVJi8JcUnsplashJpgDefault = parcelHelpers.interopDefault(_thomMilkovicSkUTVJi8JcUnsplashJpg);
var _mwangiGathecaQlKaN7Eqay8UnsplashJpg = require("url:../../cities/mwangi-gatheca-qlKaN7eqay8-unsplash.jpg");
var _mwangiGathecaQlKaN7Eqay8UnsplashJpgDefault = parcelHelpers.interopDefault(_mwangiGathecaQlKaN7Eqay8UnsplashJpg);
var _alejandroAlfaroMCmo76QKvNaUUnsplashJpg = require("url:../../cities/alejandro-alfaro-m-cmo76qKvNaU-unsplash.jpg");
var _alejandroAlfaroMCmo76QKvNaUUnsplashJpgDefault = parcelHelpers.interopDefault(_alejandroAlfaroMCmo76QKvNaUUnsplashJpg);
class BgView extends (0, _viewJsDefault.default) {
    _parentEl = document.querySelector(".user");
    _styleEl = document.querySelector(".container");
    clImage() {
        console.log((0, _mwangiGathecaQlKaN7Eqay8UnsplashJpgDefault.default));
    }
    setImage(url) {
        const newImage = `${url}`;
        return newImage;
    }
    changeBg() {
        Object.assign(this._styleEl.style, {
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url("${(0, _data2Js.state2).bg.urls.full}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            objectFit: "cover"
        });
    }
    _generateMarkup() {
        return `
            <h3 class="user-font">
                Photo by
                <a href="${(0, _data2Js.state2).author.links.html}" target="_blank"
                  >${(0, _data2Js.state2).author.name}</a
                >
                on
                <a href="https://unsplash.com/es" target="_blank">Unsplash</a>
            </h3>
        `;
    }
}
exports.default = new BgView();

},{"./View.js":"9JQ8u","../data2.js":"e8DDi","../data.js":"9kapS","url:../../cities/thom-milkovic-skUTVJi8-jc-unsplash.jpg":"7NaZc","url:../../cities/mwangi-gatheca-qlKaN7eqay8-unsplash.jpg":"eEkYN","url:../../cities/alejandro-alfaro-m-cmo76qKvNaU-unsplash.jpg":"4AEXQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7NaZc":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bWBrl") + "thom-milkovic-skUTVJi8-jc-unsplash.8941ea58.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"eEkYN":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bWBrl") + "mwangi-gatheca-qlKaN7eqay8-unsplash.f3016749.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4AEXQ":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bWBrl") + "alejandro-alfaro-m-cmo76qKvNaU-unsplash.184e9271.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bXTM9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _data2Js = require("../data2.js");
var _downloadPng = require("url:../../icon white/download.png");
var _downloadPngDefault = parcelHelpers.interopDefault(_downloadPng);
class DownloadView extends (0, _viewJsDefault.default) {
    _parentEl = document.querySelector(".final");
    _generateMarkup() {
        return `
        <h1 class="hidden-credit">a</h1>
            <div class="credit-font">
              <h3 class="credits">
                made by
                <a href="https://www.behance.net/danielross8" target="_blank"
                  >@danirssx</a
                >
              </h3>
            </div>
            <a
              href="${(0, _data2Js.state2).download}" class="download-icon" target="_blank"><img
                src="${0, _downloadPngDefault.default}"
                alt="Download image"
                class="download-icon"
              />
            </a>
        `;
    }
}
exports.default = new DownloadView();

},{"./View.js":"9JQ8u","../data2.js":"e8DDi","url:../../icon white/download.png":"77Uty","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"77Uty":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bWBrl") + "download.aadc40db.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["6KagL","gCE4p"], "gCE4p", "parcelRequirebbde")

//# sourceMappingURL=index.bafbf13d.js.map
