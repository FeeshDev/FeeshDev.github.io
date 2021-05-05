//! CHANGES

console.log("Delta Client Injected!")

window.killFeed = [];
window.customskins = [];
window.killFeedText = () => {
    let text = killFeed.join("\n");
    return text;
}
window.minimapVis = true;

if (!localStorage.reloadAtts || localStorage.reloadAtts === "") {
    localStorage.reloadAtts = 0;
}

if (!localStorage.weaponSkin || localStorage.weaponSkin === "") {
    localStorage.weaponSkin = "empty";
}

if (!localStorage.extraUtils || localStorage.extraUtils === "") {
    localStorage.extraUtils = 0;
}

localStorage.reloadAtts = parseInt(localStorage.reloadAtts) + 1;

if (parseInt(localStorage.reloadAtts) >= 7) {
    localStorage.rp = "-1";
    alert("Rich Presence has been disabled due to page not loading for 7 times. Page will be reloaded in a few seconds with RP disabled.");
    setTimeout(() => {
        window.api.reload()
    }, 500);
}

if (!localStorage.rp || localStorage.rp === "") {
    localStorage.rp = "-1";
}

if (!localStorage.volume || localStorage.volume === "") {
    localStorage.volume = 100;
}

window.getMaxModePlayers = (mode) => {
    switch (mode) {
        case "prod":
            return 1;
        case "duos":
            return 2;
        case "squads":
            return 4;
        case "close":
            return 1;
        default:
            return 1;
    }
}

window.updateWrapList = () => {
    try {
        let wraplist = document.getElementById("customwrapslist");
        let wraps = JSON.parse(localStorage.customWraps);
        wraplist.textContent = `Custom wraps added: ${wraps.join(", ").replaceAll("wrap_", "")}`;
    } catch (e) {
        alert(`There was an issue updating wraps: ${e}`)
    }
}

window.fpsManager = {
    startTime: 0,
    frameNumber: 0,
    getFPS: () => {
        fpsManager.frameNumber++;
        let date = new Date().getTime(),
            math = (date - fpsManager.startTime) / 1000,
            fps = Math.floor(fpsManager.frameNumber / math);
        if (math > 1) {
            fpsManager.startTime = new Date().getTime();
            fpsManager.frameNumber = 0;
        }
        return fps;
    }
};

localStorage.deltaPartySize = "0";
localStorage.deltaPlayers = "0";
localStorage.deltaElims = "0";
localStorage.deltaStormTime = "0";
localStorage.deltaGameState = "menu";
localStorage.deltaMode = "prod";
localStorage.deltaStormState = "waiting";

webpackJsonp([0x0], {
    1: function (_0x3fced8, _0x101320, _0x12d1e1) {
        var _0x300306 = window['VULTR_SCHEME'];
        if (_0x300306 == 'build_redirect') {
            window['location']['href'] = 'https://build_redirect.buildroyale.io/redirect.html';
        }
        var _0x5ab57f = ![];
        try {
            var _0x325f6b = ['buildroyale-io.com', 'buildroyale.online', 'buildroyale.org', 'buildroyal.io', 'buildroyaleio.com', 'build-royale.com', 'red-ball4.com'];
            for (var _0x3888f0 = 0x0; _0x3888f0 < _0x325f6b['length']; _0x3888f0++) {
                for (var _0x131c05 = 0x0; _0x131c05 < window['location']['ancestorOrigins']['length']; _0x131c05++) {
                    if (window['location']['ancestorOrigins'][_0x131c05]['includes'](_0x325f6b[_0x3888f0])) {
                        window['location']['href'] = 'https://build_redirect.buildroyale.io/redirect.html';
                    }
                }
            }
            for (var _0x131c05 = 0x0; _0x131c05 < window['location']['ancestorOrigins']['length']; _0x131c05++) {
                if (window['location']['ancestorOrigins'][_0x131c05]['includes']('crazygames.com')) {
                    var _0x4e17d0 = document['createElement']('script');
                    _0x4e17d0['src'] = 'https://sdk.crazygames.com/crazygames-sdk-v1.js';
                    document['head']['appendChild'](_0x4e17d0);
                    _0x5ab57f = !![];
                    break;
                }
            }
            console['log']('Crazy: ' + _0x5ab57f);
        } catch (_0x357ff7) {
            console['log'](_0x357ff7);
        }
        window['_requestAnimationFrame'] = window['requestAnimationFrame'];
        window['requestAnimationFrame'] = function (_0x3ab4a3) {
            setTimeout(function () {
                fpsmeter.text = `FPS: ${window.fpsManager.getFPS()}`;
                window['_requestAnimationFrame'](_0x3ab4a3);
            }, 0x0);
        };
        var _0x5898ef = ['prod', 'duos', 'squads'];
        var _0x4cf6b0 = [0x1, 0x2, 0x4, 0x1];
        var _0x436a42 = window['location']['hostname'] + ':8081';
        var _0x39cfaa = ['dj'];
        if (_0x300306 == 'build_notbeta') {
            _0x39cfaa = ['dj'];
        }
        if (_0x300306 == 'build_prod') {
            _0x39cfaa = ['be', 'sd', 'vz', 'ea'];
        }
        function _0x801477() {
            return _0x39cfaa[Math['floor'](Math['random']() * _0x39cfaa['length'])];
        }
        function _0x98adb3(_0x2c5ac7, _0x1532c1) {
            if (!_0x1532c1)
                _0x1532c1 = window['location']['href'];
            _0x2c5ac7 = _0x2c5ac7['replace'](/[\[\]]/g, '\\$&');
            var _0x2fb094 = new RegExp('[?&]' + _0x2c5ac7 + '(=([^&#]*)|&|#|$)'),
                _0x590926 = _0x2fb094['exec'](_0x1532c1);
            if (!_0x590926)
                return null;
            if (!_0x590926[0x2])
                return '';
            return decodeURIComponent(_0x590926[0x2]['replace'](/\+/g, ' '));
        }
        window['enableChristmas'] = ![];
        var _0x2f153f = window['enableChristmas'];
        var _0x8ea84e = -0x1;
        function _0x4795a4() {
            var _0x5d9813 = new XMLHttpRequest();
            var _0x499d0c = _0x801477();
            var _0x20178c = 'https://build_matchmaking_' + _0x499d0c + '.buildroyale.io/RESTservers';
            _0x5d9813['open']('GET', _0x20178c, !![]);
            _0x5d9813['send']();
            _0x5d9813['onreadystatechange'] = function (_0x247688) {
                if (_0x5d9813['readyState'] != 0x4 || _0x5d9813['status'] != 0xc8 && _0x5d9813['status'] != 0x130) {
                    return;
                }
                var _0xabd5cd = _0x5d9813['responseText'];
                var _0x2e715f = JSON['parse'](_0xabd5cd)['servers'];
                var _0x55f73a = [];
                var _0x3c17d6 = [];
                var _0x55992b = [];
                for (var _0x5cf181 = 0x0; _0x5cf181 < _0x2e715f['length']; _0x5cf181++) {
                    var _0x575c3b = _0x2e715f[_0x5cf181];
                    var _0x33f76d = ![];
                    for (var _0xebd666 = 0x0; _0xebd666 < _0x55992b['length']; _0xebd666++) {
                        if (_0x55992b[_0xebd666]['region'] == _0x575c3b['region']) {
                            var _0x32464d = _0x55992b[_0xebd666];
                            if (_0x575c3b['playerCount'] - _0x575c3b['index'] < _0x32464d['playerCount'] - _0x32464d['index'] && _0x575c3b['index'] < 0xa) {
                                _0x55992b[_0xebd666] = _0x575c3b;
                            }
                            _0x33f76d = !![];
                        }
                    }
                    if (!_0x33f76d) {
                        _0x55992b['push'](_0x575c3b);
                    }
                }
                for (var _0x5cf181 = 0x0; _0x5cf181 < _0x55992b['length']; _0x5cf181++) {
                    var _0x575c3b = _0x55992b[_0x5cf181];
                    if (_0x3c17d6['indexOf'](_0x575c3b['region']) !== -0x1)
                        continue;
                    (function (_0x181d03) {
                        var _0x13cc73 = new XMLHttpRequest();
                        _0x13cc73['onreadystatechange'] = function (_0x301ef3) {
                            var _0x210318 = _0x301ef3['target'];
                            if (_0x210318['readyState'] != 0x4)
                                return;
                            if (_0x210318['status'] == 0xc8) {
                                for (var _0x26a7d6 = 0x0; _0x26a7d6 < _0x55f73a['length']; _0x26a7d6++) {
                                    _0x55f73a[_0x26a7d6]['abort']();
                                }
                                _0x8ea84e = _0x181d03['region'];
                                onRegionGet(_0x8ea84e);
                            } else { }
                        };
                        var _0x2ac1db = 'https://' + _0x420954(_0x181d03['ip']) + ':' + _0x5d8f50(_0x181d03) + '/ping';
                        _0x13cc73['open']('GET', _0x2ac1db, !![]);
                        _0x13cc73['send'](null);
                        _0x55f73a['push'](_0x13cc73);
                    }(_0x575c3b));
                }
                function _0x420954(_0x53375c) {
                    if (_0x53375c == '127.0.0.1' || _0x53375c == '7f000001' || _0x53375c == '903d62ef5d1c2fecdcaeb5e7dd485eff') {
                        return window['location']['hostname'];
                    } else {
                        return 'ip_' + _0x53375c + '.buildroyale.io';
                    }
                }
                function _0x5d8f50(_0x18b43f) {
                    if (_0x18b43f['region'] == 0x0) {
                        return 0x1f90;
                    }
                    return 0x1bb;
                }
            };
        }
        _0x4795a4();
        function _0x271136() {
            if (gameWrapper['enabled'] && gameWrapper['isStoreLoaded']) {
                var _0x441ef5 = gameWrapper['allProducts']['find'](_0x3fd614 => _0x3fd614['productId'] == 'io.buildroyale.app.remove_ads');
                return _0x441ef5['metadata'] != null ? _0x441ef5 : null;
            } else {
                return null;
            }
        }
        function _0x59e4d3() {
            var _0x1e7e53 = _0x271136();
            var _0x442d17 = _0x1e7e53 && !_0x1e7e53['isOwned'];
            document['getElementById']('disableAdsButton')['style']['display'] = _0x442d17 ? '' : 'none';
        }
        window['onload'] = function () {
            //! CHANGES
            setTimeout(() => {
                if (localStorage.rp === "-2") {
                    if (typeof (io) == "undefined" || !io) window.api.reload();
                    window.socket = io("http://localhost:3344");
                    localStorage.reloadAtts = 0;
                    socket.emit("gameState", "menu");
                    socket.emit("gameInfo", "mode", "prod");
                } else {
                    localStorage.reloadAtts = 0;
                    window.api.baserp();
                }
            }, 300);

            let ref2span = document.getElementById("ref2span");
            let ps = ref2span.getElementsByTagName("p");
            let mainp = ps[0];
            mainp.style.height = "240px";
            mainp.style.width = "630px";
            mainp.style.overflowY = "scroll";
            mainp.innerHTML = ""+
            "Delta Client v1.3.1<br>"+
            "> Volume slider<br>"+
            "> RP disables automatically if loading fails multiple times<br>"+
            "<br>Delta Client v1.3.0 - Stability Update<br>"+
            "> Download the new installer <a target='_blank' href='https://github.com/FeeshDev/DeltaClient/releases/tag/1.3.0'>here</a><br>"+
            "> Added warnings for wrap manager<br>"+
            "> Added extra errors checks for wrap manager<br>"+
            "> Made Dynamic Presence toggleable<br>"+
            "> Added overflow scroll to changelog<br>"+
            "> Initial page loading improvements<br>"+
            "> Fixed dev tools opening<br>"+
            "> In case page doesn't load, space can be used for console and \"r\" for reloading<br>"+
            "<br>Delta Client v1.2.1<br>"+
            "> FPS meter<br>"+
            "> Custom client side wraps<br>"+
            "<br>Delta Client v1.2.0<br>"+
            "> New logo<br>"+
            "> New changelog display<br>"+
            "> Improved minimap hider<br>"+
            "> Removed tool bar<br>"+
            "> Added console and fullscreen keybinds<br>"+
            "> All ingame guns now have wraps<br>"

            
            let wrapManager = document.createElement("a");
            wrapManager.classList.add("ref");
            wrapManager.classList.add("a");
            wrapManager.textContent = "Wrap Manager";
            wrapManager.style.width = "200px"
            wrapManager.onclick = () => {
                updateWrapList();
                showModal("wrapmanager");
            }
            ref2span.insertBefore(wrapManager, document.getElementById("more"))
            

            let addWrap = document.createElement("a");
            addWrap.classList.add("ref");
            addWrap.classList.add("a");
            addWrap.textContent = "Add Wrap";
            addWrap.style.width = "180px";
            addWrap.style.margin = "10px";
            addWrap.onclick = () => {
                try {
                    let redpng = document.getElementById("redpng");
                    let greenpng = document.getElementById("greenpng");
                    let name = document.getElementById("nameholder");
                    if (!redpng.value) return alert("Red link not filled in!");
                    if (!greenpng.value) return alert("Green link not filled in!");
                    if (!name.value) return alert("Wrap needs a name!");
                    let redWrapTest = document.getElementById(`red${name.value}`);
                    if (redWrapTest !== null) return alert("Theres already a wrap with this name!");
    
                    let wrapname = name.value.replaceAll(" ", "");
    
                    let redWrap = document.createElement("img");
                    redWrap.src = redpng.value;
                    redWrap.id = `red${wrapname}`;
                    redWrap.style.display = "none";
                    document.getElementById("customwrapholders").appendChild(redWrap);
    
                    let greenWrap = document.createElement("img");
                    greenWrap.src = greenpng.value;
                    greenWrap.id = `green${wrapname}`;
                    greenWrap.style.display = "none";
                    document.getElementById("customwrapholders").appendChild(greenWrap);
    
                    
                    let normal = JSON.parse(localStorage.customWraps);
                    normal.push(`wrap_${wrapname}`);
                    localStorage.customWraps = JSON.stringify(normal);
                    updateWrapList();
    
                    localStorage[`wrap_red${wrapname}`] = redWrap.src;
                    localStorage[`wrap_green${wrapname}`] = greenWrap.src;
                    window.customskins.push(wrapname);
                    _0x5ece8a[wrapname] = {};
    
                    alert(`Wrap "${wrapname}" added succesfully.`);
                    redpng.value = "";
                    greenpng.value = "";
                    name.value = "";
                } catch (e) {
                    alert(`There was an issue creating the wrap: ${e}`)
                }
            }

            let removeWrap = document.createElement("a");
            removeWrap.classList.add("ref");
            removeWrap.classList.add("a");
            removeWrap.textContent = "Remove Wrap";
            removeWrap.style.width = "180px";
            removeWrap.style.margin = "10px";
            removeWrap.onclick = () => {
                try {
                    let name = document.getElementById("nameholder");
                    if (!name.value) return alert("You need to choose an existing wrap name!");
                    let redWrapTest = document.getElementById(`red${name.value}`);
                    if (redWrapTest === null) return alert("This wrap doesn't exist!");
                    
                    let normal = JSON.parse(localStorage.customWraps);
                    const index = normal.indexOf(`wrap_${name.value}`);
                    normal.splice(index, 1);
                    localStorage.customWraps = JSON.stringify(normal);
                    updateWrapList();
    
                    localStorage.removeItem(`wrap_red${name.value}`);
                    localStorage.removeItem(`wrap_green${name.value}`);
                    document.getElementById(`red${name.value}`).remove();
                    document.getElementById(`green${name.value}`).remove();
                    if (localStorage.weaponSkin === name.value) localStorage.weaponSkin = "empty";
                    const index2 = window.customskins.indexOf(name.value);
                    window.customskins.splice(index2, 1);
    
                    alert(`Wrap "${name.value}" removed succesfully.`);
    
                    name.value = "";
                } catch (e) {
                    alert(`There was an issue creating the wrap: ${e}`)
                }
            }

        
            modals.push("wrapmanager");
            let fuckingModalThing = document.createElement("div");
            fuckingModalThing.innerHTML = '<div id="wrapmanager" class="modal500x600 modal noselect" style="display: none; visibility: hidden; transform: scale(1);">'+
            '<div class="modalexit"><p onclick="hideModal(\'wrapmanager\')" class="exit">x</p></div>'+
            '<div style="color: red; height: unset !important; font-size: 25px" class="modaltitle">Wrap Manager <br>Danger zone</div><div class="modalbreak"></div>'+
            '<div id="customwrapslist" style="padding: 16px; font-size: 18px; height: 40px; color: #000">Custom wraps added: none</div>'+
            '<div id="customwrapholders" style="display: none"></div>'+
            '<div style="color: #000; padding: 20px 120px 20px 120px" class="column">'+
            '<span style="padding: 16px;" >Red part link</span>'+
            '<input style="padding: 4px; background-color: gray; margin: 12px" placeholder="Direct link to red" id="redpng">'+
            '<span style="padding: 16px;" >Green part link</span>'+
            '<input style="padding: 4px; background-color: gray; margin: 12px" placeholder="Direct link to green" id="greenpng">'+
            '<span style="padding: 16px;" >Wrap name</span>'+
            '<input onkeypress="return event.charCode != 32" style="padding: 4px; background-color: gray; margin: 12px" type="text" placeholder="wrapname" id="nameholder">'+
            '<div id="wrapbuttons" class="row"></div>'+
            '</div>'+
            '</div>';
            document.body.insertBefore(fuckingModalThing, document.getElementById("locker"));
            document.getElementById("wrapbuttons").appendChild(addWrap);
            document.getElementById("wrapbuttons").appendChild(removeWrap);
            
            if (!localStorage.customWraps || localStorage.customWraps === "" || typeof (JSON.parse(localStorage.customWraps)) === "undefined") {
                localStorage.customWraps = '["none"]';
            } else {
                try {
                    let wraps = JSON.parse(localStorage.customWraps);
                
                    for (let i = 0; i < wraps.length; i++) {
                        const wrap = wraps[i];
                        if (wrap === 'none' || wrap === 'empty') continue;
    
                        let redWrap = document.createElement("img");
                        redWrap.src = localStorage[`wrap_red${wrap.replace("wrap_", "")}`];
                        redWrap.id = `red${wrap.replace("wrap_", "")}`;
                        redWrap.style.display = "none";
                        document.getElementById("customwrapholders").appendChild(redWrap);
    
                        let greenWrap = document.createElement("img");
                        greenWrap.src = localStorage[`wrap_green${wrap.replace("wrap_", "")}`];
                        greenWrap.id = `green${wrap.replace("wrap_", "")}`;
                        greenWrap.style.display = "none";
                        document.getElementById("customwrapholders").appendChild(greenWrap);
    
                        window.customskins.push(wrap.replace("wrap_", "").replaceAll(" ", ""));
                    }
                } catch (e) {
                    alert(`There was an issue loading wraps: ${e}`)
                }
            }    

            try {
                for (var _0x4cd046 = 0x0; _0x4cd046 < window['location']['ancestorOrigins']['length']; _0x4cd046++) {
                    if (window['location']['ancestorOrigins'][_0x4cd046]['includes']('crazygames.com')) {
                        document['getElementById']('more')['style']['visibility'] = 'hidden';
                    }
                }
            } catch (_0x2c092e) { }
            try {
                if (_0x5ab57f) {
                    var _0x5ce32c = window['CrazyGames']['CrazySDK']['getInstance']();
                    _0x5ce32c['init']();
                    _0x5ce32c['requestBanner']([{
                        'containerId': 'buildroyale-io_300x250',
                        'size': '300x250'
                    }, {
                        'containerId': 'buildroyale-io_300x250_2',
                        'size': '300x250'
                    }, {
                        'containerId': 'buildroyale-io_728x90',
                        'size': '728x90'
                    }, {
                        'containerId': 'buildroyale-io_300x600',
                        'size': '300x250'
                    }]);
                }
            } catch (_0x1b2028) { }
            if (_0x2d15ee() && !localStorage['ytskin']) { }
            function _0x165e4e(_0x1cad08) {
                var _0x442aa1 = document['getElementById'](_0x1cad08)['style'];
                _0x442aa1['visibility'] = 'hidden';
                _0x442aa1['display'] = 'none';
            }
            function _0x2c2779(_0x139a7f) {
                var _0x361498 = document['getElementById'](_0x139a7f)['style'];
                _0x361498['visibility'] = 'visible';
                _0x361498['display'] = 'initial';
            }
            if (_0x2f153f) {
                window['groundColor'] = '#CCC';
                console['log']('CHANGED TO CHRISTMAS COLOR');
            }
            gameWrapper['onStoreLoad'] = function () {
                _0x59e4d3();
            };
            gameWrapper['onPurchaseSuccess'] = function () {
                _0x59e4d3();
            };
            _0x59e4d3();
            document['getElementById']('disableAdsButton')['addEventListener']('click', function () {
                gameWrapper['makePurchase']('io.buildroyale.app.remove_ads');
            });
            var _0x46c82c;
            if (!_0x5ab57f) {
                _0x46c82c = document['createElement']('script');
                _0x46c82c['src'] = '//api.adinplay.com/libs/aiptag/pub/ORP/buildroyale.io/tag.min.js';
                //! CHANGES
                //document['head']['appendChild'](_0x46c82c);
            }
            var _0x2c83b5 = document['createElement']('script');
            _0x2c83b5['src'] = 'https://www.googletagservices.com/tag/js/gpt.js';
            document['head']['appendChild'](_0x2c83b5);
            (function (_0xc1cfc, _0x193053, _0x976c66, _0x1ad604, _0x507e15, _0x56f606, _0x4c6701) {
                _0xc1cfc['GoogleAnalyticsObject'] = _0x507e15;
                _0xc1cfc[_0x507e15] = _0xc1cfc[_0x507e15] || function () {
                    (_0xc1cfc[_0x507e15]['q'] = _0xc1cfc[_0x507e15]['q'] || [])['push'](arguments);
                },
                    _0xc1cfc[_0x507e15]['l'] = 0x1 * new Date();
                _0x56f606 = _0x193053['createElement'](_0x976c66),
                    _0x4c6701 = _0x193053['getElementsByTagName'](_0x976c66)[0x0];
                _0x56f606['async'] = 0x1;
                _0x56f606['src'] = _0x1ad604;
                _0x4c6701['parentNode']['insertBefore'](_0x56f606, _0x4c6701);
            }(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga'));
            setTimeout(function () {
                if (ga !== undefined) {
                    ga('create', 'UA-87346685-5', 'auto');
                    ga('send', 'pageview');
                }
            }, 0x1388);
            var _0x162120 = [];
            var _0x10d866 = [];
            function _0x282ecd(_0x2c2c4b) {
                if (_0x162120['indexOf'](_0x2c2c4b) != -0x1) {
                    return _0x10d866[_0x162120['indexOf'](_0x2c2c4b)];
                }
                var _0x447f87 = null;
                _0x447f87 = document['getElementById'](_0x2c2c4b);
                _0x162120['push'](_0x2c2c4b);
                _0x10d866['push'](_0x447f87);
                return _0x447f87;
            }
            try { } catch (_0x15208f) { }
            if (_0x2a9ffd && !gameWrapper['enabled'] && !_0x5ab57f) {
                aiptag['cmd']['display']['push'](function () {
                    aipDisplayTag['display']('buildroyale-io_300x250');
                });
                aiptag['cmd']['display']['push'](function () {
                    aipDisplayTag['display']('buildroyale-io_300x250_2');
                });
                aiptag['cmd']['display']['push'](function () {
                    aipDisplayTag['display']('buildroyale-io_728x90');
                });
                aiptag['cmd']['display']['push'](function () {
                    aipDisplayTag['display']('buildroyale-io_300x600');
                });
                aiptag['cmd']['display']['push'](function () {
                    aipDisplayTag['display']('buildroyale-io_300x250');
                });
                aiptag['cmd']['display']['push'](function () {
                    aipDisplayTag['display']('buildroyale-io_300x250_2');
                });
                aiptag['cmd']['display']['push'](function () {
                    aipDisplayTag['display']('buildroyale-io_728x90');
                });
                aiptag['cmd']['display']['push'](function () {
                    aipDisplayTag['display']('buildroyale-io_300x600');
                });
            }
            var _0x58ca65 = '';
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x5898ef['length']; _0x4cd046++) {
                var _0x22c291 = 'https://' + _0x5898ef[_0x4cd046] + '.buildroyale.io';
                if (_0x5898ef[_0x4cd046] == 'prod') {
                    _0x22c291 = 'https://buildroyale.io/';
                }
                var _0xbdc042 = 0x0;
                if (_0x4cd046 > 0x0) {
                    _0xbdc042 = -0x12;
                }
                _0x58ca65 += '<div><a class=\"a\"  style=\"margin-top: ' + _0xbdc042 + 'px; margin-right: 0; display: block; width: fit-content; height: fit-content;\"><img id=\"playlist' + _0x4cd046 + '\" class=\"queue\" draggable=\"false\" src=\"buildart/build_' + _0x5898ef[_0x4cd046] + '.png\"></a></div>';
            }
            _0x58ca65 += '<div id=\"partyleader\" align=\"center\" style=\"position: fixed; margin-top: 0px; top:' + (_0x5898ef['length'] * 0x55 - 0x14) + 'px; right: 0px; width: 255px;\">Only the party leader<br>can select a playlist</div>';
            document['getElementById']('reftopright')['innerHTML'] = _0x58ca65;
            _0x165e4e('partyleader');
            window['vultr'] = {
                'servers': []
            };
            var _0x44084c = _0x12d1e1(0x2);
            var _0x5101d0;
            var _0x2a9ffd = window['location']['hostname']['indexOf']('buildroyale.io') != -0x1 || window['location']['hostname']['indexOf']('buildroyale.net') != -0x1;
            if (!_0x2a9ffd && location['protocol'] === 'https:') {
                alert('Please use HTTP in development, since the SSL certificates are not valid for the c9users.io domain.');
            }
            if (_0x2a9ffd) {
                _0x5101d0 = new _0x44084c('buildroyale.io', 0x1f90, 0x64, 0x2, ![]);
            } else {
                _0x5101d0 = new _0x44084c(_0x436a42, 0x50, 0x64, 0x2, ![]);
            }
            _0x5101d0['debugLog'] = ![];
            var _0x411929 = _0x12d1e1(0xe);
            var _0x612620 = _0x12d1e1(0xf);
            var _0x1e6a3f = new _0x612620();
            var _0x1820e3 = 0x3e80;
            var _0x5ef86b = 0x0;
            var _0x369ac8 = 0x0;
            var _0x34b775 = -0x1;
            var _0x553bd8 = ![];
            window['grassTypes'] = 0x3;
            window['grassWidth'] = 0x3c;
            window['grass'] = [];
            for (var _0x4cd046 = 0x0; _0x4cd046 < window['grassTypes']; _0x4cd046++) {
                window['grassCanvas' + _0x4cd046] = document['createElement']('canvas');
                window['grassCanvas' + _0x4cd046]['width'] = window['grassWidth'];
                window['grassCanvas' + _0x4cd046]['height'] = window['grassWidth'];
                window['grassCtx' + _0x4cd046] = window['grassCanvas' + _0x4cd046]['getContext']('2d');
                window['grassCtx' + _0x4cd046]['translate'](window['grassCanvas' + _0x4cd046]['width'] / 0x2, window['grassCanvas' + _0x4cd046]['height'] / 0x2);
                var _0x3b424d = new _0x1e6a3f['object']();
                _0x3b424d['position']['y'] = 0x1e;
                _0x3b424d['rotational'] = new _0x1e6a3f['object']();
                _0x3b424d['img'] = new _0x1e6a3f['image'](_0x282ecd('grass' + _0x4cd046), 0x0, -0x1e, 0x46, 0x46, 0.3);
                _0x3b424d['rotational']['add'](_0x3b424d['img']);
                _0x3b424d['add'](_0x3b424d['rotational']);
                window['grass' + _0x4cd046] = _0x3b424d;
            }
            function _0x397319() {
                for (var _0x1adc99 = 0x0; _0x1adc99 < window['grassTypes']; _0x1adc99++) {
                    var _0xe680b2 = window['grassCanvas' + _0x1adc99]['width'];
                    window['grassCtx' + _0x1adc99]['clearRect'](-_0xe680b2 / 0x2, -_0xe680b2 / 0x2, _0xe680b2, _0xe680b2);
                    window['grass' + _0x1adc99]['render'](window['grassCtx' + _0x1adc99], 0x1, 0x1);
                    window['grassCtx' + _0x1adc99]['clearRect'](-_0xe680b2 / 0x2, 0x17, _0xe680b2, 0x1e);
                }
            }
            window['mobilecheck'] = function () {
                var _0x633adf = ![];
                (function (_0x5c1baf) {
                    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i['test'](_0x5c1baf) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i['test'](_0x5c1baf['substr'](0x0, 0x4)))
                        _0x633adf = !![];
                }(navigator['userAgent'] || navigator['vendor'] || window['opera']));
                return _0x633adf;
            };
            var _0x110cdb = window['mobilecheck']();
            window['addEventListener']('resize', function (_0x5ca195) {
                _0x110cdb = window['mobilecheck']();
            });
            if (_0x110cdb) {
                _0x282ecd('buildroyale-io_300x250')['style']['display'] = 'none';
                _0x282ecd('buildroyale-io_300x250')['style']['visibility'] = 'hidden';
                _0x282ecd('buildroyale-io_300x250_2')['style']['display'] = 'none';
                _0x282ecd('buildroyale-io_300x250_2')['style']['visibility'] = 'hidden';
                _0x282ecd('buildroyale-io_728x90')['style']['display'] = 'none';
                _0x282ecd('buildroyale-io_728x90')['style']['visibility'] = 'hidden';
                _0x282ecd('buildroyale-io_300x600')['style']['display'] = 'none';
                _0x282ecd('buildroyale-io_300x600')['style']['visibility'] = 'hidden';
            }
            function _0x2d15ee() {
                var _0xe476dd = 'test';
                try {
                    localStorage['setItem'](_0xe476dd, _0xe476dd);
                    localStorage['removeItem'](_0xe476dd);
                    return !![];
                } catch (_0x37e669) {
                    return ![];
                }
            }
            function _0x196a39() {
                return {
                    'array': [],
                    'length': 0x0,
                    'push': function (_0x30def1) {
                        this['array'][this['length']++] = _0x30def1;
                    },
                    'pushIfNotIn': function (_0x5d5b21) {
                        if (!this['contains'](_0x5d5b21)) {
                            this['push'](_0x5d5b21);
                        }
                    },
                    'sort': function (_0x3dfb33) {
                        this['array']['sort'](_0x3dfb33);
                    },
                    'removeIfIn': function (_0x5c0666) {
                        while (this['indexOf'](_0x5c0666) != -0x1) {
                            this['remove'](this['indexOf'](_0x5c0666));
                        }
                    },
                    'remove': function (_0x2a3517) {
                        if (_0x2a3517 >= this['length'] || _0x2a3517 < 0x0) {
                            return;
                        }
                        for (var _0x4d2c8b = _0x2a3517; _0x4d2c8b < this['length'] - 0x1; _0x4d2c8b++) {
                            this['array'][_0x4d2c8b] = this['array'][_0x4d2c8b + 0x1];
                        }
                        this['length']--;
                    },
                    'splice': function (_0x567c2c, _0x43d5fe) {
                        for (var _0x27e83c = 0x0; _0x27e83c < _0x43d5fe && _0x567c2c < this['length']; _0x27e83c++) {
                            this['remove'](_0x567c2c);
                        }
                    },
                    'forEach': function (_0x2d569d) {
                        for (var _0x491c06 = 0x0; _0x491c06 < this['length']; _0x491c06++) {
                            if (_0x2d569d(this['array'][_0x491c06])) {
                                this['remove'](_0x491c06);
                                _0x491c06--;
                            }
                        }
                    },
                    'indexOf': function (_0x3fbb3b) {
                        for (var _0x46617b = 0x0; _0x46617b < this['length']; _0x46617b++) {
                            if (this['array'][_0x46617b] == _0x3fbb3b) {
                                return _0x46617b;
                            }
                        }
                        return -0x1;
                    },
                    'contains': function (_0x3954d2) {
                        return this['indexOf'](_0x3954d2) != -0x1;
                    },
                    'makeDebugArray': function () {
                        var _0x2b0d77 = [];
                        for (var _0xab5bf8 = 0x0; _0xab5bf8 < this['length']; _0xab5bf8++) {
                            _0x2b0d77['push'](this['array'][_0xab5bf8]);
                        }
                        return _0x2b0d77;
                    }
                };
            }
            var _0x350bea = {
                'linear': function (_0x493a8c) {
                    return _0x493a8c;
                },
                'easeOutElastic': function (_0x534ff2) {
                    var _0x2bec00 = 0x2 * Math['PI'] / 0x3;
                    return _0x534ff2 === 0x0 ? 0x0 : _0x534ff2 === 0x1 ? 0x1 : Math['pow'](0x2, -0xa * _0x534ff2) * Math['sin']((_0x534ff2 * 0xa - 0.75) * _0x2bec00) + 0x1;
                },
                'easeInQuad': function (_0x44a50d) {
                    return _0x44a50d * _0x44a50d;
                },
                'easeOutQuad': function (_0x187127) {
                    return 0x1 - (0x1 - _0x187127) * (0x1 - _0x187127);
                },
                'easeInExpo': function (_0x48c1eb) {
                    return _0x48c1eb === 0x0 ? 0x0 : Math['pow'](0x2, 0xa * _0x48c1eb - 0xa);
                },
                'easeOutExpo': function (_0xcd6a85) {
                    return _0xcd6a85 === 0x1 ? 0x1 : 0x1 - Math['pow'](0x2, -0xa * _0xcd6a85);
                },
                'easeOutCubic': function (_0x396c6b) {
                    return 0x1 - (0x1 - _0x396c6b) * (0x1 - _0x396c6b) * (0x1 - _0x396c6b);
                },
                'easeInCubic': function (_0x4328c2) {
                    return _0x4328c2 * _0x4328c2 * _0x4328c2;
                },
                'easeInQuart': function (_0x424d87) {
                    return _0x424d87 * _0x424d87 * _0x424d87 * _0x424d87;
                }
            };
            function _0x4eb819(_0x4390b7, _0x18f99b, _0xe19d9f, _0x2af73c, _0xa85a7d, _0x48d756, _0x29782f, _0x29ac12) {
                return {
                    'obj': _0x4390b7,
                    'param': _0x18f99b,
                    'old': _0xe19d9f,
                    'newp': _0x2af73c,
                    'time': _0xa85a7d,
                    'delay': _0x48d756 || 0x0,
                    'currentTime': 0x0,
                    'ef': _0x29782f,
                    'cb': _0x29ac12
                };
            }
            var _0x53bdb0 = new _0x196a39();
            function _0x3c56c1(_0x50efed, _0x167029) {
                for (var _0x36faeb = 0x0; _0x36faeb < _0x53bdb0['length']; _0x36faeb++) {
                    if (_0x53bdb0['array'][_0x36faeb]['obj'] == _0x50efed && _0x53bdb0['array'][_0x36faeb]['param'] == _0x167029) {
                        _0x53bdb0['splice'](_0x36faeb, 0x1);
                        _0x36faeb--;
                    }
                }
            }
            function _0x37d938(_0x176ac0, _0x5194ee, _0x528a9b, _0x583d01, _0x10a840, _0x390cc1, _0xe3e5f, _0x34e0bb) {
                _0x3c56c1(_0x176ac0, _0x5194ee);
                _0x53bdb0['push'](new _0x4eb819(_0x176ac0, _0x5194ee, _0x528a9b, _0x583d01, _0x10a840, _0x390cc1, _0xe3e5f || _0x350bea['easeOutExpo'], _0x34e0bb));
            }
            function _0x282d3b(_0x474272) {
                for (var _0x13aa8f = 0x0; _0x13aa8f < _0x53bdb0['length']; _0x13aa8f++) {
                    var _0x302671 = _0x53bdb0['array'][_0x13aa8f];
                    _0x302671['currentTime'] += _0x474272;
                    if (_0x302671['currentTime'] < _0x302671['delay']) {
                        continue;
                    }
                    if (_0x302671['currentTime'] > _0x302671['delay'] + _0x302671['time']) {
                        _0x302671['obj'][_0x302671['param']] = _0x302671['newp'];
                        if (_0x302671['cb'] !== undefined) {
                            _0x302671['cb'](_0x302671['obj']);
                        }
                        _0x53bdb0['splice'](_0x13aa8f, 0x1);
                        _0x13aa8f--;
                        continue;
                    }
                    var _0x2d891d = (_0x302671['currentTime'] - _0x302671['delay']) / _0x302671['time'];
                    _0x302671['obj'][_0x302671['param']] = _0x1e6a3f['normalLerp'](_0x302671['old'], _0x302671['newp'], _0x302671['ef'](_0x2d891d));
                }
            }
            var _0x48cb9f = !![];
            var _0x446ded = null;
            var _0x2b3cd2 = [];
            var _0x1a48d2 = null;
            var _0xaedb40 = 0x0;
            var _0x22b6a1 = ![];
            var _0x3b160b = '';
            var _0x177d72 = '';
            var _0x29cc68 = !![];
            var _0x52c382 = ![];
            var _0x18d82a = Date['now']();
            var _0x551b49 = 'build_' + _0x5898ef[0x0];
            var _0x20a2a5 = [];
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x5898ef['length']; _0x4cd046++) {
                if (_0x4cd046 == 0x0) {
                    try {
                        document['getElementById']('playlist' + _0x4cd046)['style']['filter'] = 'drop-shadow(0px 0px 3px #ccc)';
                        //! CHANGES
                        if ((parseInt(localStorage.deltaPartySize) <= getMaxModePlayers(_0x5898ef[_0x4cd046])) && (typeof (socket) !== "undefined")) socket.emit("gameInfo", "mode", _0x5898ef[_0x4cd046]);
                        localStorage.deltaMode = _0x5898ef[_0x4cd046];
                    } catch (_0x5e9944) {
                        console['log']('STYLE 1');
                    }
                }
                try {
                    document['getElementById']('playlist' + _0x4cd046)['onclick'] = function (_0x1556d9) {
                        if (_0x29cc68) {
                            var _0x2ec789 = _0x1556d9['target']['id']['substr'](0x8);
                            for (var _0x1d30f5 = 0x0; _0x1d30f5 < _0x5898ef['length']; _0x1d30f5++) {
                                document['getElementById']('playlist' + _0x1d30f5)['style']['filter'] = 'drop-shadow(0px 0px 0px #222)';
                            }
                            _0x1556d9['target']['style']['filter'] = 'drop-shadow(0px 0px 3px #ccc)';
                            _0x551b49 = 'build_' + _0x5898ef[_0x2ec789];
                            //! CHANGES
                            if ((parseInt(localStorage.deltaPartySize) <= getMaxModePlayers(_0x5898ef[_0x2ec789])) && (typeof (socket) !== "undefined")) socket.emit("gameInfo", "mode", _0x5898ef[_0x2ec789]);
                            localStorage.deltaMode = _0x5898ef[_0x2ec789];
                            if (_0x446ded != null) {
                                _0x20a2a5['push']({
                                    'type': 'setqueue',
                                    'queue': 'build_' + _0x5898ef[_0x2ec789]
                                });
                            }
                        }
                    };
                } catch (_0x2b676c) {
                    console['log']('STYLE 2');
                }
            }
            var _0x469bb4 = {
                'join': function (_0x310d42) {
                    _0x52c382 = !![];
                    var _0x385d00 = _0x2a9ffd ? 'wss:' : 'ws:';
                    if (_0x1e6a3f['ws']['readyState'] != 0x1) {
                        _0x27152e();
                        hideAllModals();
                        if (_0x2a9ffd) {
                            _0x1e6a3f['createSocket'](_0x385d00 + '//ip_' + _0x310d42['ip'] + '.buildroyale.io/ws');
                            if (_0x5ab57f) {
                                _0x5ce32c['gameplayStart']();
                            }
                        } else {
                            _0x1e6a3f['createSocket'](_0x385d00 + '//' + _0x436a42 + '/ws');
                        }
                        var _0x532145 = '';
                        if (_0x2d15ee() && localStorage['p'] !== undefined) {
                            _0x532145 = localStorage['p'];
                        }
                        var _0x32aa6f = '';
                        if (_0x2d15ee() && localStorage['weaponSkin'] !== undefined) {
                            _0x32aa6f = localStorage['weaponSkin'];
                        }
                        var _0x416e7f = {
                            'type': 'start',
                            'name': _0x282ecd('nameBox')['value'],
                            'party': _0x177d72,
                            'p': _0x532145,
                            'ws': _0x32aa6f
                        };
                        if (window['token']) {
                            _0x416e7f['token'] = window['token'];
                        }
                        _0x1e6a3f['currentPackets']['push'](_0x416e7f);
                    }
                },
                'error': function (_0x579fce) {
                    if (_0x579fce['message'] === undefined) {
                        return;
                    }
                    alert(_0x579fce['message']);
                    //! CHANGES
                    if (_0x579fce['message'] == "Error: Party does not exist") {
                        localStorage.deltaPartySize = 0;
                        localStorage.deltaGameState = "menu";
                        socket.emit("gameState", "menu");
                        socket.emit("gameInfo", "partysize", 0);
                    }
                    if (_0x446ded != null) {
                        console['log']('Closing Error');
                        _0x446ded['close']();
                        _0x446ded = null;
                    }
                },
                'pu': function (_0x3cbcea) {
                    if (_0x3cbcea['m'] === undefined) {
                        return;
                    }
                    //! CHANGES
                    if ((localStorage.deltaPartySize != _0x3cbcea.m.length) && (typeof (socket) !== "undefined")) socket.emit("gameInfo", "partysize", _0x3cbcea.m.length);
                    localStorage.deltaPartySize = _0x3cbcea.m.length;
                    for (var _0x2e37ca = 0x0; _0x2e37ca < 0x4; _0x2e37ca++) {
                        document['getElementById']('partyname' + _0x2e37ca)['innerHTML'] = '';
                    }
                    for (var _0x2e37ca = 0x0; _0x2e37ca < 0x4; _0x2e37ca++) {
                        document['getElementById']('partynamediv' + _0x2e37ca)['style']['opacity'] = '0.5';
                        document['getElementById']('partynamediv' + _0x2e37ca)['style']['borderColor'] = 'rgba(255,255,255,0.5)';
                        document['getElementById']('partynamediv' + _0x2e37ca)['style']['background'] = 'rgba(0,0,0,0.3)';
                    }
                    for (var _0x2e37ca = 0x0; _0x2e37ca < _0x3cbcea['m']['length'] && _0x2e37ca < 0x4; _0x2e37ca++) {
                        var _0xd96830 = _0x3cbcea['m'][_0x2e37ca][0x0];
                        var _0x3613a8 = _0x3cbcea['m'][_0x2e37ca][0x1];
                        document['getElementById']('partynamediv' + _0x2e37ca)['style']['opacity'] = '1';
                        document['getElementById']('partyname' + _0x2e37ca)['style']['opacity'] = '1';
                        if (_0xd96830 == '') {
                            _0xd96830 = '<unnamed>';
                            document['getElementById']('partyname' + _0x2e37ca)['style']['opacity'] = '0.5';
                        }
                        if (_0x3613a8 == !![]) {
                            document['getElementById']('partyname' + _0x2e37ca)['style']['opacity'] = '1';
                            document['getElementById']('partynamediv' + _0x2e37ca)['style']['borderColor'] = 'rgba(0,187,0,0.5)';
                            document['getElementById']('partynamediv' + _0x2e37ca)['style']['background'] = 'rgba(0,187,0,0.25)';
                        }
                        document['getElementById']('partyname' + _0x2e37ca)['textContent'] = _0xd96830;
                    }
                    _0x177d72 = _0x3cbcea['id'];
                    if (document['getElementById']('partyid')['innerHTML'] != 'Party ID: ' + _0x3cbcea['id']) {
                        document['getElementById']('partyid')['innerHTML'] = 'Party ID: ' + _0x3cbcea['id'];
                        window['history']['replaceState'](null, '', '/?p=' + _0x3cbcea['id']);
                        if (_0x5ab57f) {
                            _0x5ce32c['inviteLink']({
                                'p': _0x3cbcea['id']
                            });
                        }
                    }
                    for (var _0x1f8f8a = 0x0; _0x1f8f8a < _0x5898ef['length']; _0x1f8f8a++) {
                        document['getElementById']('playlist' + _0x1f8f8a)['style']['filter'] = 'drop-shadow(0px 0px 0px #222)';
                    }
                    var _0x473036 = Math['max'](_0x5898ef['indexOf'](_0x3cbcea['q']['substr'](0x6)), 0x0);
                    document['getElementById']('playlist' + _0x473036)['style']['filter'] = 'drop-shadow(0px 0px 3px #ccc)';
                    //! CHANGES
                    if (localStorage.deltaGameState == "menu") {
                        if ((parseInt(localStorage.deltaPartySize) <= getMaxModePlayers(_0x5898ef[_0x473036])) && (typeof (socket) !== "undefined")) socket.emit("gameInfo", "mode", _0x5898ef[_0x473036]);
                    }
                    localStorage.deltaMode = _0x5898ef[_0x473036];
                    if (_0x3cbcea['u'] != 0x0) {
                        _0x2c2779('partyleader');
                        _0x29cc68 = ![];
                    } else {
                        _0x165e4e('partyleader');
                        _0x29cc68 = !![];
                    }
                    for (var _0x2e37ca = 0x0; _0x2e37ca < _0x4cf6b0['length']; _0x2e37ca++) {
                        try {
                            if (_0x4cf6b0[_0x2e37ca] < _0x3cbcea['m']['length']) {
                                document['getElementById']('playlist' + _0x2e37ca)['style']['opacity'] = 0.3;
                            } else {
                                document['getElementById']('playlist' + _0x2e37ca)['style']['opacity'] = 0x1;
                            }
                        } catch (_0x1b528f) { }
                    }
                    _0x165e4e('scene0');
                    _0x165e4e('scene1');
                    _0x2c2779('scene2');
                }
            };
            var _0x27f2dd = function (_0x386f9e) {
                if (msgpack !== undefined) {
                    var _0xe873fa = msgpack['decode'](new Uint8Array(_0x386f9e['data']));
                    for (var _0x2e83a5 = 0x0; _0x2e83a5 < _0xe873fa['length']; _0x2e83a5++) {
                        var _0x1579b5 = _0xe873fa[_0x2e83a5];
                        if (_0x469bb4[_0x1579b5['t']] !== undefined)
                            _0x469bb4[_0x1579b5['t']](_0x1579b5);
                        else {
                            console['log']('Encountered issue: unknown packet type');
                            console['log'](_0xe873fa);
                        }
                    }
                }
            };
            function _0x50246d() {
                if (_0x446ded == null || msgpack === undefined) {
                    return;
                }
                if (!_0x1e6a3f['spectating']) {
                    _0x22b6a1 = ![];
                }
                if (_0x446ded['readyState'] == 0x1 && _0x20a2a5['length'] > 0x0) {
                    _0x446ded['send'](msgpack['encode'](_0x20a2a5));
                    _0x20a2a5 = [];
                }
            }
            var _0xf99bd = 0x0;
            var _0x2c3ca7 = 0xa;
            function _0x3597c1() { }
            function _0x319f2e() {
                if (_0x446ded == null) {
                    return;
                }
                if (window['spawnText']['text'] == 'Unready') {
                    _0x33ff1d();
                    return;
                }
                _0x20a2a5['push']({
                    'type': 'ready'
                });
                window['spawnButton']['color'] = '#D00';
                window['spawnButton']['strokeStyle'] = '#B00';
                window['spawnText']['belowObjects'][0x0]['strokeStyle'] = '#B00';
                window['spawnText']['belowObjects'][0x0]['text'] = 'Unready';
                window['spawnText']['text'] = 'Unready';
            }
            function _0x33ff1d() {
                _0x20a2a5['push']({
                    'type': 'unready'
                });
                window['spawnButton']['color'] = '#0D0';
                window['spawnButton']['strokeStyle'] = '#0B0';
                window['spawnText']['belowObjects'][0x0]['strokeStyle'] = '#0B0';
                window['spawnText']['belowObjects'][0x0]['text'] = 'Ready';
                window['spawnText']['text'] = 'Ready';
            }
            function _0x32f633(_0x13290a) {
                if (_0x13290a === undefined) {
                    var _0x394b15 = Math['floor'](Math['random']() * _0x39cfaa['length']);
                    _0x13290a = _0x39cfaa[_0x394b15];
                }
                _0x446ded = new _0x1e6a3f['socket']('wss://build_matchmaking_' + _0x13290a + '.buildroyale.io/ws', _0x27f2dd, function () { }, function () {
                    if (_0x446ded != null) {
                        _0x446ded['close']();
                        _0x446ded = null;
                        window['history']['replaceState'](null, '', '/');
                    }
                    _0x165e4e('partyleader');
                    _0x2c2779('scene0');
                    _0x165e4e('scene1');
                    _0x165e4e('scene2');
                    document['getElementById']('partyid')['innerHTML'] = 'Party ID: xxxxxx';
                    _0x29cc68 = !![];
                    window['spawnButton']['color'] = '#0D0';
                    window['spawnButton']['strokeStyle'] = '#0B0';
                    window['spawnText']['belowObjects'][0x0]['strokeStyle'] = '#0B0';
                    window['spawnText']['belowObjects'][0x0]['text'] = 'Ready';
                    window['spawnText']['text'] = 'Ready';
                    for (var _0x26966c = 0x0; _0x26966c < _0x4cf6b0['length']; _0x26966c++) {
                        document['getElementById']('playlist' + _0x26966c)['style']['opacity'] = 0x1;
                    }
                });
            }
            document['getElementById']('nameBox')['onkeydown'] = function () {
                setTimeout(function () {
                    _0x4cd541['nametag']['text'] = document['getElementById']('nameBox')['value'];
                    _0x4cd541['nametagstroke']['text'] = document['getElementById']('nameBox')['value'];
                }, 0xa);
                if (_0x446ded == null) {
                    return;
                }
                setTimeout(function () {
                    _0x20a2a5['push']({
                        'type': 'changename',
                        'name': document['getElementById']('nameBox')['value']
                    });
                }, 0xa);
            };
            function _0x1f8ff4() {
                var _0x7c6dea = new XMLHttpRequest();
                var _0x1daca3 = 'https://build_matchmaking_' + _0x801477() + '.buildroyale.io/getplayercount';
                _0x7c6dea['open']('GET', _0x1daca3, !![]);
                _0x7c6dea['send']();
                _0x7c6dea['onreadystatechange'] = function (_0x947c5a) {
                    if (_0x7c6dea['readyState'] != 0x4 || _0x7c6dea['status'] != 0xc8 && _0x7c6dea['status'] != 0x130) {
                        return;
                    }
                    var _0x3f3193 = _0x7c6dea['responseText'];
                    var _0x50d9b7 = '<p style=\'margin-bottom: 14px;\'>';
                    _0x50d9b7 += _0x3f3193 + ' Builders Playing';
                    if (_0x300306 == 'build_prod') { } else if (_0x300306 == 'build_snipers') {
                        _0x50d9b7 += ' Sniper Showdown';
                    } else if (_0x300306 == 'build_gold') {
                        _0x50d9b7 += ' Solid Gold';
                    } else if (_0x300306 == 'build_shotguns') {
                        _0x50d9b7 += ' Shotgun Skirmish';
                    } else if (_0x300306 == 'build_close') {
                        _0x50d9b7 += ' Close Encounters';
                    }
                    _0x50d9b7 += '</p>';
                    document['getElementById']('playercount')['innerHTML'] = _0x50d9b7;
                };
            }
            _0x1f8ff4();
            function _0x232ca6() {
                var _0x2df07 = '';
                _0x2df07 += '<div id=\'scene0\'><div id=\'createparty\' class=\'createbutton noselect\'><p class=\'emptyatag\'>Create Party</p></div><div id=\'joinparty\' class=\'joinbutton noselect\'><p class=\'emptyatag\'>Join Party</p></div></div>';
                _0x2df07 += '<div id=\'scene1\'><div class=\'partyborder\'><input placeholder=\'Enter Party ID\' maxlength=\'6\' autocomplete=\'off\' autocorrect=\'off\' autocapitalize=\'off\' spellcheck=\'false\' type=\'text\' class=\'partyinput\' id=\'partyinput\'></div><div id=\'actuallyjoinparty\' class=\'joinbutton noselect\'><p class=\'emptyatag\'>Join Party</p></div><div id=\'back\' class=\'backbutton noselect\'><p class=\'emptyatag\'>Go Back</p></div></div>';
                _0x2df07 += '<div id=\'scene2\'><div id=\'partyid\' style=\'text-align: center; margin-top: 20px; margin-bottom: 12px\'>Party ID: xxxxxx</div><div id=\'partynamediv0\' class=\'round noselect\'><p id=\'partyname0\' class=\'emptytag\'></p></div><div id=\'partynamediv1\' style=\'opacity: 0.5;\' class=\'round noselect\'><p id=\'partyname1\' class=\'emptytag\'></p></div><div id=\'partynamediv2\' style=\'opacity: 0.5;\' class=\'round noselect\'><p id=\'partyname2\' class=\'emptytag\'></p></div><div id=\'partynamediv3\' style=\'opacity: 0.5;\' class=\'round noselect\'><p id=\'partyname3\' class=\'emptytag\'></p></div><div id=\'leaveparty\' class=\'leavebutton noselect\'><p class=\'emptyatag\'>Leave Party</p></div>' + (gameWrapper['enabled'] ? '<div id=\'shareparty\' class=\'sharebutton noselect\'><p class=\'emptyatag\'>Share Party</p></div>' : '') + '</div>';
                _0x2df07 += '<div id=\'settingbutton\' class=\'backbutton noselect\' style=\'margin-top: 25px;\'><p class=\'emptyatag\'>Settings</p></div>';
                document['getElementById']('partystuff')['innerHTML'] = _0x2df07;
                _0x165e4e('scene1');
                _0x165e4e('scene2');
                document['getElementById']('createparty')['onclick'] = function () {
                    _0x165e4e('scene0');
                    _0x165e4e('scene1');
                    _0x2c2779('scene2');
                    _0x32f633();
                    if (window['cachedRegion'] !== undefined && window['cachedRegion'] != 0x0) {
                        _0x8ea84e = window['cachedRegion'];
                    }
                    _0x20a2a5['push']({
                        'type': 'create',
                        'region': _0x8ea84e
                    });
                    _0x20a2a5['push']({
                        'type': 'changename',
                        'name': document['getElementById']('nameBox')['value']
                    });
                };
                document['getElementById']('joinparty')['onclick'] = function () {
                    _0x165e4e('scene0');
                    _0x2c2779('scene1');
                    _0x165e4e('scene2');
                    document['getElementById']('partyinput')['focus']();
                };
                document['getElementById']('actuallyjoinparty')['onclick'] = function () {
                    _0x3b160b = document['getElementById']('partyinput')['value'];
                    _0x3b160b = _0x3b160b['toLowerCase']();
                    if (_0x3b160b['length'] < 0x6) {
                        alert('ID Not Valid - Should be 6 characters long');
                        return;
                    }
                    var _0x4d372b = _0x3b160b['charAt'](0x0) + _0x3b160b['charAt'](0x1);
                    if (_0x39cfaa['indexOf'](_0x4d372b) == -0x1) {
                        alert('ID Not Valid - Please check again');
                        return;
                    }
                    if (_0x446ded == null) {
                        _0x32f633(_0x4d372b);
                        _0x20a2a5['push']({
                            'type': 'join',
                            'id': _0x3b160b
                        });
                        _0x20a2a5['push']({
                            'type': 'changename',
                            'name': document['getElementById']('nameBox')['value']
                        });
                    }
                };
                document['getElementById']('leaveparty')['onclick'] = function () {
                    if (_0x446ded != null) {
                        _0x446ded['close']();
                        _0x446ded = null;
                        window['history']['replaceState'](null, '', '/');
                    }
                    //! CHANGES
                    localStorage.deltaPartySize = 0;
                    if (typeof (socket) !== "undefined") socket.emit("gameInfo", "partysize", 0);
                    _0x165e4e('partyleader');
                    _0x2c2779('scene0');
                    _0x165e4e('scene1');
                    _0x165e4e('scene2');
                    document['getElementById']('partyid')['innerHTML'] = 'Party ID: xxxxxx';
                    _0x29cc68 = !![];
                    window['spawnButton']['color'] = '#0D0';
                    window['spawnButton']['strokeStyle'] = '#0B0';
                    window['spawnText']['belowObjects'][0x0]['strokeStyle'] = '#0B0';
                    window['spawnText']['belowObjects'][0x0]['text'] = 'Ready';
                    window['spawnText']['text'] = 'Ready';
                    for (var _0x4e0c13 = 0x0; _0x4e0c13 < _0x4cf6b0['length']; _0x4e0c13++) {
                        document['getElementById']('playlist' + _0x4e0c13)['style']['opacity'] = 0x1;
                    }
                };
                var _0x432342 = document['getElementById']('shareparty');
                if (_0x432342) {
                    _0x432342['onclick'] = function () {
                        gameWrapper['shareContent']({
                            'text': 'Join my Build Royale party! Click \"Join Party\" and enter this party ID: ' + _0x177d72 + '\x0a\x0ahttps://buildroyale.io/'
                        });
                    };
                }
                document['getElementById']('back')['onclick'] = function () {
                    _0x2c2779('scene0');
                    _0x165e4e('scene1');
                    _0x165e4e('scene2');
                };
                document['getElementById']('settingbutton')['onclick'] = function () {
                    _0x2900a3();
                };
                document['getElementById']('partynamediv1')['onclick'] = function () {
                    _0x20a2a5['push']({
                        'type': 'kick',
                        'player': 0x1
                    });
                };
                document['getElementById']('partynamediv2')['onclick'] = function () {
                    _0x20a2a5['push']({
                        'type': 'kick',
                        'player': 0x2
                    });
                };
                document['getElementById']('partynamediv3')['onclick'] = function () {
                    _0x20a2a5['push']({
                        'type': 'kick',
                        'player': 0x3
                    });
                };
            }
            _0x232ca6();
            var _0x4a2bfd = {};
            var _0x17a49f = window['location']['href']['replace'](/[?&]+([^=&]+)=([^&]*)/gi, function (_0x4e369e, _0x520207, _0x3a2049) {
                _0x4a2bfd[_0x520207] = _0x3a2049;
            });
            if (_0x4a2bfd['p'] !== undefined) {
                _0x3b160b = _0x4a2bfd['p'];
                _0x3b160b = _0x3b160b['toLowerCase']();
                if (_0x3b160b['length'] < 0x6) {
                    return;
                }
                var _0x2e0573 = _0x3b160b['charAt'](0x0) + _0x3b160b['charAt'](0x1);
                if (_0x39cfaa['indexOf'](_0x2e0573) == -0x1) {
                    return;
                }
                if (_0x446ded == null) {
                    _0x32f633(_0x2e0573);
                    _0x20a2a5['push']({
                        'type': 'join',
                        'id': _0x3b160b
                    });
                    setTimeout(function () {
                        _0x20a2a5['push']({
                            'type': 'changename',
                            'name': document['getElementById']('nameBox')['value']
                        });
                    }, 0x32);
                }
            }
            _0x5101d0['start'](function (_0x531ee3, _0x5c83eb) {
                var _0x497fbf = _0x2a9ffd ? 'wss:' : 'ws:';
                if (_0x2a9ffd) { } else { }
            });
            function _0x591c01(_0x49ded0) {
                var _0x2ba62a = [];
                for (var _0x30367e in _0x49ded0) {
                    _0x2ba62a['push'](_0x30367e);
                }
                return _0x2ba62a;
            }
            var _0x5a6243 = {
                'Timur Tripp': 'https://www.youtube.com/user/TimurTripp2',
                'Dragon Grinberg': 'https://www.youtube.com/channel/UClrQ-4XYaHYbgq5S26uz1aQ',
                'Gellzone': 'https://www.youtube.com/channel/UCrVzmr53P8FOHspx0d8v4ig'
            };
            var _0x56f972 = ![];
            var _0x6afaa3 = _0x591c01(_0x5a6243);
            var _0x6568a0 = _0x6afaa3[Math['floor'](Math['random']() * _0x6afaa3['length'])];
            document['getElementById']('YouTuberDiv')['innerHTML'] += '<a style=\'width:unset;float:right;margin:unset;font-size:25;color:#79e;text-decoration:none;\' target=\'_blank\' href=\'' + _0x5a6243[_0x6568a0] + '\'>' + _0x6568a0 + '</a>';
            function _0x3420b3(_0x5ca63c) {
                _0x5ca63c = _0x5ca63c['replace'](/[\[]/, '\\[')['replace'](/[\]]/, '\\]');
                var _0x3f70df = new RegExp('[\\?&]' + _0x5ca63c + '=([^&#]*)');
                var _0x1ff5d4 = _0x3f70df['exec'](location['search']);
                return _0x1ff5d4 === null ? '' : decodeURIComponent(_0x1ff5d4[0x1]['replace'](/\+/g, ' '));
            }
            var _0x419ad6 = window['location']['host']['split']('.')[0x0];
            if (_0x419ad6 != 'GameDistribution') {
                _0x419ad6 = 'GameDistribution';
            }
            var _0x1a66a6 = 0x0;
            var _0x5c2d09 = ![];
            var _0x5ea1e7 = ![];
            var _0x3765f6 = -0x1;
            var _0xa7b2b = 0x0;
            var _0x2974d1 = 0x0;
            var _0x55f03c = {
                'gameId': 'a8df29ec79604c758&c637459ec9203',
                'userId': '6F381FEC-FDB4-41A2-9F3C-147A4121B75B-s1',
                'pauseGame': function () { },
                'resumeGame': function () {
                    if (_0x56f972)
                        window['globalFinish']();
                },
                'onInit': function (_0x50c334) { },
                'onError': function (_0x567ec6) { }
            };
            var _0x1f38cc = {
                'GameDistribution': function () {
                    gdApi['showBanner']();
                },
                'AdInPlay': function () {
                    adplayer['startPreRoll']();
                },
                'none': function () {
                    window['globalFinish']();
                }
            };
            function _0x4dc9f8(_0x5c5229) {
                _0x5101d0['switchServer'](_0x5c5229);
            }
            window['switchServer'] = _0x4dc9f8;
            function _0x586498() {
                if (!_0x2a9ffd) {
                    var _0x4ad1b3 = _0x2a9ffd ? 'wss:' : 'ws:';
                    if (_0x1e6a3f['ws']['readyState'] != 0x1) {
                        _0xaedb40++;
                        _0x27152e();
                        hideAllModals();
                        _0x1e6a3f['createSocket'](_0x4ad1b3 + '//' + _0x436a42 + '/ws');
                        clearInterval(_0x1a48d2);
                        _0x1a48d2 = null;
                        var _0x2ddd79 = '';
                        if (_0x2d15ee() && localStorage['p'] !== undefined) {
                            _0x2ddd79 = localStorage['p'];
                        }
                        var _0x7a0b09 = '';
                        if (_0x2d15ee() && localStorage['weaponSkin'] !== undefined) {
                            _0x7a0b09 = localStorage['weaponSkin'];
                        }
                        var _0x325fff = {
                            'type': 'start',
                            'name': _0x282ecd('nameBox')['value'],
                            'party': _0x177d72,
                            'p': _0x2ddd79,
                            'ws': _0x7a0b09
                        };
                        if (window['token']) {
                            _0x325fff['token'] = window['token'];
                        }
                        _0x1e6a3f['currentPackets']['push'](_0x325fff);
                    }
                    return;
                }
                var _0x457bed = new XMLHttpRequest();
                var _0x1a0e95 = _0x801477();
                var _0x53c073 = 'https://build_matchmaking_' + _0x1a0e95 + '.buildroyale.io/RESTservers';
                if (_0x300306 == 'build_notbeta') {
                    _0x53c073 = 'https://build_matchmaking_be.buildroyale.io/RESTservers';
                }
                _0x53c073 += '?queue=' + _0x551b49;
                _0x457bed['open']('GET', _0x53c073, !![]);
                _0x457bed['send']();
                _0x457bed['onreadystatechange'] = function (_0x2d4fc7) {
                    if (_0x457bed['readyState'] != 0x4 || _0x457bed['status'] != 0xc8 && _0x457bed['status'] != 0x130) {
                        return;
                    }
                    if (_0x1e6a3f['ws']['readyState'] == 0x0 || _0x1e6a3f['ws']['readyState'] == 0x1) {
                        if (_0x1a48d2 != null) {
                            clearInterval(_0x1a48d2);
                            _0x1a48d2 = null;
                        }
                        return;
                    }
                    var _0x34ae77 = _0x457bed['responseText'];
                    var _0x2c19a9 = JSON['parse'](_0x34ae77)['servers'];
                    var _0x2a520e = [{
                        'region': 0x7,
                        'index': 0x0
                    }, {
                        'region': 0x3,
                        'index': 0x2
                    }, {
                        'region': 0x3,
                        'index': 0x1
                    }];
                    var _0x51084a = [];
                    for (var _0x4087f7 = 0x0; _0x4087f7 < _0x2c19a9['length']; _0x4087f7++) {
                        var _0x4b7173 = null;
                        for (var _0x3596ea = 0x0; _0x3596ea < _0x2c19a9['length']; _0x3596ea++) {
                            if (_0x3596ea != _0x4087f7 && _0x2c19a9[_0x4087f7]['region'] == _0x2c19a9[_0x3596ea]['region'] && _0x2c19a9[_0x4087f7]['index'] == _0x2c19a9[_0x3596ea]['index']) {
                                _0x4b7173 = _0x2c19a9[_0x3596ea];
                            }
                        }
                        if (window['cachedRegion'] !== undefined && window['cachedRegion'] != 0x0) {
                            _0x8ea84e = window['cachedRegion'];
                        }
                        var _0x32f0f4 = ![];
                        for (var _0x3596ea = 0x0; _0x3596ea < _0x2a520e['length']; _0x3596ea++) {
                            if (_0x2c19a9[_0x4087f7]['region'] == _0x2a520e[_0x3596ea]['region'] && _0x2c19a9[_0x4087f7]['index'] == _0x2a520e[_0x3596ea]['index']) {
                                _0x32f0f4 = !![];
                                break;
                            }
                        }
                        if (_0x5898ef['length'] == 0x1 && _0x5898ef[0x0] == 'ranked') {
                            _0x8ea84e = 0x3;
                        }
                        if (!_0x32f0f4 && _0x2c19a9[_0x4087f7]['region'] == _0x8ea84e && _0x2c19a9[_0x4087f7]['playerCount'] < 0x5f && _0x2c19a9[_0x4087f7]['state'] == 'lobby' && (_0x2c19a9[_0x4087f7]['time'] > 0xa || _0x2c19a9[_0x4087f7]['time'] < 0x0) && (_0x4b7173 == null || _0x4b7173['state'] == 'lobby' || _0x4b7173['playerCount'] < 0x32 && _0x4b7173['state'] != 'lobby')) {
                            _0x51084a['push'](_0x2c19a9[_0x4087f7]);
                        }
                    }
                    _0x51084a['sort'](function (_0x3472f7, _0x1c5a89) {
                        var _0xa780ba = 0x0;
                        var _0x27211d = 0x0;
                        if (_0x3472f7['port'] == 0x1f92) {
                            _0xa780ba = 0x64;
                        }
                        if (_0x1c5a89['port'] == 0x1f92) {
                            _0x27211d = 0x64;
                        }
                        return _0x3472f7['index'] + _0xa780ba - (_0x1c5a89['index'] + _0x27211d);
                    });
                    if (_0x2a9ffd && _0x51084a['length'] < 0x1) {
                        console['log']('No servers found');
                        return;
                    }
                    var _0x1181b6 = _0x51084a[0x0];
                    for (var _0x4087f7 = 0x1; _0x4087f7 < _0x51084a['length']; _0x4087f7++) {
                        if (_0x51084a[_0x4087f7]['playerCount'] > _0x1181b6['playerCount']) {
                            _0x1181b6 = _0x51084a[_0x4087f7];
                        }
                    }
                    for (var _0x4087f7 = 0x0; _0x4087f7 < _0x51084a['length']; _0x4087f7++) {
                        if (_0x51084a[_0x4087f7]['time'] != -0x1) {
                            if (_0x1181b6['time'] == -0x1 || _0x51084a[_0x4087f7]['time'] < _0x1181b6['time']) {
                                _0x1181b6 = _0x51084a[_0x4087f7];
                            }
                        }
                    }
                    var _0x5e1f5a = _0x2a9ffd ? 'wss:' : 'ws:';
                    if (_0x1e6a3f['ws']['readyState'] != 0x1) {
                        _0xaedb40++;
                        _0x27152e();
                        hideAllModals();
                        if (_0x2a9ffd) {
                            _0x1e6a3f['createSocket'](_0x5e1f5a + '//ip_' + _0x1181b6['ip'] + '.buildroyale.io/ws');
                            if (_0x5ab57f) {
                                _0x5ce32c['gameplayStart']();
                            }
                        } else {
                            _0x1e6a3f['createSocket'](_0x5e1f5a + '//' + _0x436a42 + '/ws');
                        }
                    }
                    clearInterval(_0x1a48d2);
                    _0x1a48d2 = null;
                    var _0x384e6b = '';
                    if (_0x2d15ee() && localStorage['p'] !== undefined) {
                        _0x384e6b = localStorage['p'];
                    }
                    var _0x432343 = '';
                    if (_0x2d15ee() && localStorage['weaponSkin'] !== undefined) {
                        _0x432343 = localStorage['weaponSkin'];
                    }
                    var _0x1aa046 = {
                        'type': 'start',
                        'name': _0x282ecd('nameBox')['value'],
                        'party': _0x177d72,
                        'p': _0x384e6b,
                        'ws': _0x432343
                    };
                    if (window['token']) {
                        _0x1aa046['token'] = window['token'];
                    }
                    _0x1e6a3f['currentPackets']['push'](_0x1aa046);
                };
            }
            var _0x10edfd = !![];
            var _0x1282d1 = 0x2;
            window['playingAd'] = ![];
            function _0x36c0cd(_0x3ccb77, _0x2729d1, _0x4db5e5) {
                var _0x332f78 = new Date();
                _0x332f78['setTime'](_0x332f78['getTime']() + _0x4db5e5 * 0x18 * 0x3c * 0x3c * 0x3e8);
                var _0x11de9f = 'expires=' + _0x332f78['toUTCString']();
                document['cookie'] = _0x3ccb77 + '=' + _0x2729d1 + ';' + _0x11de9f + ';path=/';
            }
            function _0x3749df(_0x349b2d) {
                var _0x40fee5 = _0x349b2d + '=';
                var _0x3a3e49 = decodeURIComponent(document['cookie']);
                var _0x2dcd20 = _0x3a3e49['split'](';');
                for (var _0x48a6d9 = 0x0; _0x48a6d9 < _0x2dcd20['length']; _0x48a6d9++) {
                    var _0x2811ca = _0x2dcd20[_0x48a6d9];
                    while (_0x2811ca['charAt'](0x0) == ' ') {
                        _0x2811ca = _0x2811ca['substring'](0x1);
                    }
                    if (_0x2811ca['indexOf'](_0x40fee5) == 0x0) {
                        return _0x2811ca['substring'](_0x40fee5['length'], _0x2811ca['length']);
                    }
                }
                return '';
            }
            window['globalFinish'] = function () {
                _0x36c0cd('name', _0x282ecd('nameBox')['value'], 0x16d);
                _0x36c0cd('skipped', 'false', 0x16d);
                if (_0x1a48d2 == null) {
                    _0x1a48d2 = setInterval(function () {
                        if (_0x48cb9f) {
                            _0x586498();
                        } else {
                            _0x3597c1();
                        }
                    }, 0x3e8);
                    _0x586498();
                }
                window['playingAd'] = ![];
            };
            function _0x563bf4() {
                window['globalFinish']();
            }
            try {
                _0x282ecd('nameBox')['value'] = _0x3749df('name');
            } catch (_0x4b0297) { }
            function _0x49a31e() {
                var _0x514e53 = 0x0;
                for (var _0x9f468 in _0x5101d0['servers']) {
                    var _0x1a501a = _0x5101d0['servers'][_0x9f468];
                    var _0x1aa300 = 0x0;
                    for (var _0x11e9d7 = 0x0; _0x11e9d7 < _0x1a501a['length']; _0x11e9d7++) {
                        _0x1aa300 += _0x1a501a[_0x11e9d7]['playerCount'];
                    }
                    _0x514e53 += _0x1aa300;
                    var _0x403f1f = _0x5101d0['regionInfo'][_0x9f468]['name'];
                    var _0xe52d8e = document['createElement']('option');
                    _0xe52d8e['text'] = _0x403f1f + ' - ' + _0x1aa300 + ' players';
                    _0xe52d8e['disabled'] = !![];
                    document['getElementById']('serverSelect')['add'](_0xe52d8e);
                    for (var _0x11e9d7 = 0x0; _0x11e9d7 < _0x1a501a['length']; _0x11e9d7++) {
                        var _0x520c1d = _0x1a501a[_0x11e9d7];
                        var _0x112cd9 = _0x5101d0['server'] && _0x5101d0['server']['region'] == _0x520c1d['region'] && _0x5101d0['server']['index'] == _0x520c1d['index'];
                        var _0x105b38 = _0x520c1d['region'] + ':' + _0x520c1d['index'];
                        var _0x44c1c5 = _0x403f1f + ' ' + (_0x520c1d['index'] + 0x1) + ' - ' + _0x520c1d['playerCount'] + ' players';
                        var _0x240c6a = _0x112cd9 ? 'selectedMenuSelector' : 'subMenuSelector';
                        var _0x372540 = _0x112cd9 ? '&#x25B6; ' : '';
                        var _0xe52d8e = document['createElement']('option');
                        _0xe52d8e['text'] = _0x403f1f + ' ' + (_0x520c1d['index'] + 0x1) + ' - ' + _0x520c1d['playerCount'] + ' players';
                        _0xe52d8e['value'] = _0x105b38;
                        _0x112cd9 ? _0xe52d8e['selected'] = !![] : ![];
                        document['getElementById']('serverSelect')['add'](_0xe52d8e);
                    }
                    var _0xe52d8e = document['createElement']('option');
                    _0xe52d8e['text'] = '';
                    _0xe52d8e['disabled'] = !![];
                    document['getElementById']('serverSelect')['add'](_0xe52d8e);
                }
                var _0xe52d8e = document['createElement']('option');
                _0xe52d8e['text'] = _0x514e53 + ' total players';
                _0xe52d8e['disabled'] = !![];
                document['getElementById']('serverSelect')['add'](_0xe52d8e);
                document['getElementById']('totalPlayers')['innerHTML'] = _0x514e53 + ' Players Online';
            }
            _0x49a31e();
            var _0x5d8502 = 0x0;
            var _0x5e2a9e = 0x0;
            var _0x33812f = -0x1;
            var _0x5c4577 = 0x0;
            var _0x3cb168 = ![];
            var _0x2a7b9c = 0x0;
            var _0x85bcff = 0x0;
            var _0x39c64c = [];
            var _0x4df00c = ['nameBox', 'ref1', 'ref2', 'reftopleft', 'reftopright', 'reftop'];
            for (var _0x4cd046 = 0x0; _0x4cd046 < modals['length']; _0x4cd046++) {
                _0x4df00c['push'](modals[_0x4cd046]);
            }
            _0x4df00c['push']('about');
            var _0x4061bb = [];
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x4df00c['length']; _0x4cd046++) {
                try {
                    var _0x83351d = document['getElementById'](_0x4df00c[_0x4cd046])['style'];
                } catch (_0x5842af) {
                    console['log']('Style 3');
                }
                if (_0x4df00c[_0x4cd046] == 'nameBox') {
                    _0x4061bb['push']({});
                    continue;
                }
                var _0x923bb4 = {};
                if (_0x83351d['top'] != '') {
                    _0x923bb4['top'] = parseInt(_0x83351d['top']);
                }
                if (_0x83351d['right'] != '') {
                    _0x923bb4['right'] = parseInt(_0x83351d['right']);
                }
                if (_0x83351d['left'] != '') {
                    _0x923bb4['left'] = parseInt(_0x83351d['left']);
                }
                if (_0x83351d['bottom'] != '') {
                    _0x923bb4['bottom'] = parseInt(_0x83351d['bottom']);
                }
                _0x4061bb['push'](_0x923bb4);
            }
            var _0x189c64 = [{
                'name': 'Common',
                'color': '#EEE'
            }, {
                'name': 'Uncommon',
                'color': '#12ff00'
            }, {
                'name': 'Rare',
                'color': _0x469e0a('#0084ff', 0x8)
            }, {
                'name': 'Epic',
                'color': _0x4cf33f('#e32aff', 0xa)
            }, {
                'name': 'Legendary',
                'color': '#fcff00'
            }, {
                'name': 'Mythic',
                'color': '#fc0000'
            }];
            var _0x123695 = ['mini', 'pot', 'medkit', 'bandages'];
            var _0x4b47c7 = ['wood', 'brick', 'metal'];
            var _0x5029f8 = {
                'scar': 0x64,
                'famas': 0x64,
                'tommy gun': 0x50,
                'ar-15': 0x5a,
                'scoped ar': 0x96,
                'bolt': 0xbe,
                'rifle': 0xaa,
                'deagle': 0x78,
                'lmg': 0x78,
                'shotgun': 0x0,
                'heavy': 0x32,
                'drum': 0x0,
                'musket': 0x82,
                'heavy sniper': 0xd2,
                'ak47': 0x64,
                'combat': 0x46,
                'silencedpistol': 0x46,
                'aug': 0x82,
                'mini': 0x0,
                'smg': 0x32,
                'ump': 0x32,
                'rpg': 0x64,
                'burst shotgun': 0x0,
                'pot': 0x0,
                'bandages': 0x0,
                'medkit': 0x0,
                'snowball': 0x32
            };
            var _0x380a5a = {
                'scar': 0x0,
                'famas': 0x0,
                'tommy gun': 0x0,
                'ar-15': 0x0,
                'scoped ar': 0x96,
                'bolt': 0xbe,
                'rifle': 0xaa,
                'deagle': 0x0,
                'lmg': 0x0,
                'shotgun': 0x0,
                'heavy': 0x32,
                'drum': 0x0,
                'musket': 0x82,
                'heavy sniper': 0xd2,
                'ak47': 0x0,
                'combat': 0x0,
                'silencedpistol': 0x0,
                'aug': 0x0,
                'mini': 0x0,
                'smg': 0x0,
                'ump': 0x0,
                'rpg': 0x0,
                'burst shotgun': 0x0,
                'pot': 0x0,
                'bandages': 0x0,
                'medkit': 0x0,
                'snowball': 0x0
            };
            var _0x560888 = {
                'lmg': 0x1,
                'scar': 0x1,
                'famas': 0x1,
                'tommy gun': 0x1,
                'ar-15': 0x1,
                'scoped ar': 0x1,
                'ak47': 0x1,
                'bolt': 0x2,
                'rifle': 0x2,
                'deagle': 0x2,
                'shotgun': 0x3,
                'heavy': 0x3,
                'drum': 0x3,
                'musket': 0x3,
                'combat': 0x3,
                'heavy sniper': 0x2,
                'aug': 0x1,
                'mini': 0x4,
                'smg': 0x0,
                'ump': 0x0,
                'silencedpistol': 0x0,
                'rpg': 0x2,
                'burst shotgun': 0x3,
                'pot': 0x4,
                'bandages': 0x4,
                'medkit': 0x4,
                'snowball': 0x4
            };
            var _0x1dfc77 = [];
            var _0x4aed44 = '#fcff00';
            var _0x2f32c0 = /^((?!chrome|android).)*safari/i['test'](navigator['userAgent']);
            function _0x591c01(_0x253e99) {
                var _0xb1d0d9 = [];
                for (var _0x44e99a in _0x253e99) {
                    _0xb1d0d9['push'](_0x44e99a);
                }
                return _0xb1d0d9;
            }
            var _0x3ba0be = {
                8: 'Backspace',
                9: 'Tab',
                13: 'Enter',
                16: 'Shift',
                17: 'Ctrl',
                18: 'Alt',
                19: 'Pause/Break',
                20: 'Capslock',
                27: 'Escape',
                32: 'Space',
                33: 'Page Up',
                34: 'Page Down',
                35: 'End',
                36: 'Home',
                37: 'Left',
                38: 'Up',
                39: 'Right',
                40: 'Down',
                43: '+',
                44: 'Print Screen',
                45: 'Insert',
                46: 'Delete',
                48: '0',
                49: '1',
                50: '2',
                51: '3',
                52: '4',
                53: '5',
                54: '6',
                55: '7',
                56: '8',
                57: '9',
                59: ';',
                61: '=',
                65: 'A',
                66: 'B',
                67: 'C',
                68: 'D',
                69: 'E',
                70: 'F',
                71: 'G',
                72: 'H',
                73: 'I',
                74: 'J',
                75: 'K',
                76: 'L',
                77: 'M',
                78: 'N',
                79: 'O',
                80: 'P',
                81: 'Q',
                82: 'R',
                83: 'S',
                84: 'T',
                85: 'U',
                86: 'V',
                87: 'W',
                88: 'X',
                89: 'Y',
                90: 'Z',
                106: '*',
                107: '+',
                109: '-',
                110: '.',
                111: '/',
                112: 'F1',
                113: 'F2',
                114: 'F3',
                115: 'F4',
                116: 'F5',
                117: 'F6',
                118: 'F7',
                119: 'F8',
                120: 'F9',
                121: 'F10',
                122: 'F11',
                123: 'F12',
                144: 'Num Lock',
                145: 'Scroll Lock',
                186: ';',
                187: '=',
                188: ',',
                189: '-',
                190: '.',
                191: '/',
                192: '`',
                219: '[',
                220: '\\',
                221: ']',
                222: '\''
            };
            //! CHANGES
            var _0x5f0f7e = ['Pickup 1', 'Pickup 2', 'Jump', 'Build', 'Reload', 'Inventory', 'Map', 'Ask For Ammo', 'ADS', 'Fire', 'Weapon Slot 1', 'Weapon Slot 2', 'Weapon Slot 3', 'Weapon Slot 4', 'Weapon Slot 5', 'Weapon Slot 6', 'Move Up', 'Move Down', 'Move Left', 'Move Right', 'Sprint', 'Reload Page', 'Console', 'Fullscreen', 'Hide Minimap'];
            var _0x177111 = _0x591c01(_0x3ba0be);
            var _0x435a79 = {};
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x177111['length']; _0x4cd046++) {
                _0x435a79[_0x3ba0be[_0x177111[_0x4cd046]]] = _0x177111[_0x4cd046];
            }
            //! CHANGES
            var _0x452198 = ['E', 'F', 'Space', 'Q', 'R', 'Tab', 'M', 'B', 'C', 'V', '1', '2', '3', '4', '5', '6', 'W', 'S', 'A', 'D', 'Shift', 'F5', 'F12', 'F11', 'O'];
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x452198['length']; _0x4cd046++) {
                _0x452198[_0x4cd046] = _0x435a79[_0x452198[_0x4cd046]['toString']()];
            }
            var _0x3aa99f = _0x452198;
            function _0x43a009(_0x1c6cc5) {
                if (_0x5f0f7e['indexOf'](_0x1c6cc5) == -0x1) {
                    console['log']('Didn\'t find keybind');
                    return -0x1;
                }
                return _0x3aa99f[_0x5f0f7e['indexOf'](_0x1c6cc5)];
            }
            function _0x453907(_0x2e8471) {
                if (_0x5f0f7e['indexOf'](_0x2e8471) == -0x1) {
                    console['log']('Didn\'t find keybind');
                    return '';
                }
                return _0x3ba0be[_0x3aa99f[_0x5f0f7e['indexOf'](_0x2e8471)]];
            }
            var _0x4e35cb = '';
            var _0x338c38 = '';
            if (!_0x2f32c0) { }
            _0x338c38 += '<div style=\'margin-bottom: 20px;\'></div>';
            _0x4e35cb += '<div style=\'height: 60px;\'><p style=\'font-family: sans-serif; font-weight: bold; margin: 20px; padding: 15px;\'>Mouse Lock</p></div>';
            _0x338c38 += '<div style=\'height: 60px;\'><select id=\'mouseLockSetting\' class=\'bind keybindbutton\' style=\'font-family: sans-serif; font-weight: bold; margin-left: auto; margin-right: auto; padding: 7px; border: solid 3px #000; width: 220px; height: 47px; font-size: 20px; text-align-last: center;\'><option value=\'-2\'>On</option><option selected value=\'-1\'>Off</option></select></div>';
            _0x4e35cb += '<div style=\'height: 60px;\'><p style=\'font-family: sans-serif; font-weight: bold; margin: 20px; padding: 15px;\'>Rich Presence</p></div>';
            _0x338c38 += '<div style=\'height: 80px;\'><select id=\'richPresenceSetting\' class=\'bind keybindbutton\' style=\'font-family: sans-serif; margin-top: 22px; font-weight: bold; margin-left: auto; margin-right: auto; padding: 7px; border: solid 3px #000; width: 220px; font-size: 20px; text-align-last: center;\'><option value=\'-2\'>On</option><option selected value=\'-1\'>Off</option></select></div>';
            _0x4e35cb += '<div style=\'height: 60px;\'><p style=\'font-family: sans-serif; font-weight: bold; margin: 20px; padding: 15px;\'>Region</p></div>';
            _0x338c38 += '<div style=\'height: 80px;\'><select id=\'regionSetting\' class=\'bind keybindbutton\' style=\'font-family: sans-serif; margin-top: 22px; font-weight: bold; margin-left: auto; margin-right: auto; padding: 7px; border: solid 3px #000; width: 220px; font-size: 20px; text-align-last: center;\'><option selected value=\'0\'>Auto</option><option value=\'2\'>North America</option><option value=\'9\'>Europe</option></select></div>';
            _0x4e35cb += '<div style=\'height: 60px;\'><p style=\'font-family: sans-serif; font-weight: bold; margin: 20px; padding: 15px;\'>Controller</p></div>';
            _0x338c38 += '<div style=\'height: 85px;\'><select id=\'controlSetting\' class=\'bind keybindbutton\' style=\'font-family: sans-serif; margin-top: 22px; font-weight: bold; margin-left: auto; margin-right: auto; padding: 7px; border: solid 3px #000; width: 220px; font-size: 20px; text-align-last: center;\'><option selected value=\'0\'>KB/Controller</option><option value=\'1\'>Keyboard Only</option></select></div>';
            _0x4e35cb += '<div style=\'height: 60px;\'><p id=\'volumeSettingName\' style=\'font-family: sans-serif; font-weight: bold; margin: 20px; padding: 15px;\'>Volume</p></div>';
            _0x338c38 += '<div style=\'height: 85px;\'><input id=\'volumeSetting\' type=\'range\' class=\'bind keybindbutton\' style=\'font-family: sans-serif; margin-top: 22px; font-weight: bold; margin-left: auto; margin-right: auto; padding: 7px; border: solid 3px #000; width: 220px; font-size: 20px; text-align-last: center;\'></div>';
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x5f0f7e['length']; _0x4cd046++) {
                _0x4e35cb += '<div style=\'height: 60px;\'><p style=\'font-family: sans-serif; font-weight: bold; margin: 20px; padding: 15px;\'>' + _0x5f0f7e[_0x4cd046] + '</p></div>';
                _0x338c38 += '<div style=\'height: 60px;\'><p id=\'key' + _0x4cd046 + '\' class=\'bind keybindbutton\' style=\'font-family: sans-serif; font-weight: bold; margin-top: 20px; margin-left: auto; margin-right: auto; padding: 7px; border: solid 3px #000; width: 200px;\'>' + _0x3ba0be[_0x3aa99f[_0x4cd046]] + '</p></div>';
            }
            document['getElementById']('firstkeybind')['innerHTML'] = _0x4e35cb;
            document['getElementById']('secondkeybind')['innerHTML'] = _0x338c38;
            var _0x2191ed = document['createElement']('canvas');
            _0x2191ed['width'] = 0x15e;
            _0x2191ed['height'] = 0xc3;
            var _0x4e4124 = _0x2191ed['getContext']('2d');
            function _0x460220(_0x4d3d5a, _0x280106, _0x4fe53c, _0x440d61, _0x334d4a) {
                var _0x35f96e = document['createElement']('canvas');
                _0x35f96e['width'] = 0x15e;
                _0x35f96e['height'] = 0x15e;
                var _0x17820e = _0x35f96e['getContext']('2d');
                _0x17820e['drawImage'](_0x282ecd(_0x4d3d5a), 0x0, 0x0, 0x15e, 0x15e);
                var _0xed7f17 = _0x440d61['indexOf'](_0x4d3d5a);
                _0x4e4124['globalCompositeOperation'] = 'source-over';
                _0x4e4124['clearRect'](0x0, 0x0, _0x2191ed['width'], _0x2191ed['height']);
                _0x4e4124['drawImage'](_0x280106, _0xed7f17 % 6 * 350, Math['floor'](_0xed7f17 / 6) * 195, 350, 195, 0, 0, 350, 195);
                _0x4e4124['globalCompositeOperation'] = 'source-in';
                _0x4e4124['drawImage'](_0x282ecd('red' + _0x334d4a), 0x0, 0xc3 / 0x2 - 0x15e / 0x2, 0x15e, 0x15e);
                _0x17820e['drawImage'](_0x2191ed, 0x0, 0x15e / 0x2 - 0xc3 / 0x2);
                _0x4e4124['globalCompositeOperation'] = 'source-over';
                _0x4e4124['clearRect'](0x0, 0x0, _0x2191ed['width'], _0x2191ed['height']);
                _0x4e4124['drawImage'](_0x4fe53c, _0xed7f17 % 0x6 * 0x15e, Math['floor'](_0xed7f17 / 0x6) * 0xc3, 0x15e, 0xc3, 0x0, 0x0, 0x15e, 0xc3);
                _0x4e4124['globalCompositeOperation'] = 'source-in';
                _0x4e4124['drawImage'](_0x282ecd('green' + _0x334d4a), 0x0, 0xc3 / 0x2 - 0x15e / 0x2, 0x15e, 0x15e);
                _0x17820e['drawImage'](_0x2191ed, 0x0, 0x15e / 0x2 - 0xc3 / 0x2);
                return _0x35f96e;
            }
            var _0x5ece8a = {};
            var _0x43d749 = ['empty', 'pewds', 'hawaii', 'lines', 'rainbow', 'retro', 'yt'];

            try {
                let wraps = JSON.parse(localStorage.customWraps);
                for (let i = 0; i < wraps.length; i++) {
                    const wrap = wraps[i];
                    if (wrap === 'none' || wrap === 'empty') continue;
    
                    wrap.replaceAll(" ", "")
    
                    _0x43d749.push(wrap.replace("wrap_", ""));
                }
            } catch (e) {
                alert(`There was an error loading wraps: ${e}`)
            }

            var _0x34ffd4 = ['empty', 'pewds', 'retro', 'yt'];
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x43d749['length']; _0x4cd046++) {
                _0x5ece8a[_0x43d749[_0x4cd046]] = {};
            }
            function _0x36ec46(_0x5349e8, _0x11eb79) {
                if (_0x5349e8 == 'empty') {
                    return _0x282ecd(_0x11eb79);
                }
                try {
                    if (_0x5ece8a[_0x5349e8][_0x11eb79] !== undefined) {
                        return _0x5ece8a[_0x5349e8][_0x11eb79];
                    }
                } catch (e) {

                }
                var _0xa0ce90 = _0x460220(_0x11eb79, _0x282ecd('redsheet'), _0x282ecd('greensheet'), _0x5cc6c9, _0x5349e8);
                _0x5ece8a[_0x5349e8][_0x11eb79] = _0xa0ce90;
                return _0xa0ce90;
            }
            //! come here
            var _0x5cc6c9 = ['scar', 'shotgun', 'bolt', 'deagle', 'drum', 'musket', 'heavy sniper', 'rifle', 'famas', 'smg', 'ump', 'scoped ar', 'tommy gun', 'rpg', 'ak47', 'combat', 'aug', 'silencedpistol', 'lmg', 'burst shotgun'];
            var _0x45100e = _0x5cc6c9['length'];
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x45100e; _0x4cd046++) {
                _0x5cc6c9['push']('top' + _0x5cc6c9[_0x4cd046]);
            }
            window['updateSkins'] = function () {
                _0x34ffd4 = ['empty', 'pewds', 'retro'];
                if (_0x2d15ee() && localStorage['ytskin']) {
                    _0x34ffd4['push']('yt');
                }
                if (window['customskins'] !== undefined) {
                    for (var _0x116d10 = 0x0; _0x116d10 < window['customskins']['length']; _0x116d10++) {
                        _0x34ffd4['push'](window['customskins'][_0x116d10]);
                    }
                }
                var _0x121175 = _0x282ecd('lockerdata');
                var _0x1c56dc = document['getElementById']('weaponskins');
                while (_0x1c56dc != null && _0x1c56dc['firstChild']) {
                    _0x1c56dc['firstChild']['id'] = 'garbage';
                    _0x1c56dc['removeChild'](_0x1c56dc['firstChild']);
                }
                _0x121175['innerHTML'] = '';
                _0x121175['innerHTML'] = '<div id=\'weaponskins\' align=\'center\' style=\'text-align: center; padding: 20px\'></div>';
                var _0x53cc29 = document['getElementById']('weaponskins');
                var _0x5e83e0 = 0x87;
                var _0x538528 = _0x5e83e0;
                _0x53cc29['innerHTML'] = '';
                for (var _0x116d10 = 0x0; _0x116d10 < _0x34ffd4['length']; _0x116d10++) {
                    _0x53cc29['innerHTML'] += '<div class=\'wskin\' id=\'wskin' + _0x34ffd4[_0x116d10] + '\' style=\'display: inline-block; width: ' + _0x5e83e0 + 'px; height: ' + _0x538528 + 'px; overflow: hidden; padding: -5px; margin: 5px; cursor: pointer;\'></div>';
                }
                for (var _0x116d10 = 0x0; _0x116d10 < _0x34ffd4['length']; _0x116d10++) {
                    var _0x505c12 = document['getElementById']('wskin' + _0x34ffd4[_0x116d10]);
                    var _0x97f41b = _0x36ec46(_0x34ffd4[_0x116d10], 'scar'); //locker item
                    try {
                        _0x97f41b['style']['width'] = _0x5e83e0;
                        _0x97f41b['style']['height'] = _0x538528;
                        _0x97f41b['style']['transform'] = 'rotate(30deg)';
                        _0x97f41b['style']['visibility'] = 'visible';
                        _0x97f41b['style']['display'] = 'initial';
                    } catch (_0x33e8ae) {
                        console['log']('Skin problem');
                    }
                    _0x505c12['onclick'] = function (_0xce3282) {
                        if (_0xce3282['target']['nodeName'] == 'CANVAS' || _0xce3282['target']['nodeName'] == 'IMG') {
                            _0x5ceb82(_0xce3282['target']['parentElement']['id']);
                        } else {
                            _0x5ceb82(_0xce3282['target']['id']);
                        }
                    };
                    _0x505c12['appendChild'](_0x97f41b);
                }
            };
            window['updateSkins']();
            window['updateSkins']();
            function _0x5ceb82(_0x295586) {
                try {
                    for (var _0x595914 = 0x0; _0x595914 < _0x34ffd4['length']; _0x595914++) {
                        var _0x161afb = _0x282ecd('wskin' + _0x34ffd4[_0x595914]);
                        _0x161afb['style']['backgroundColor'] = null;
                    }
                    _0x282ecd(_0x295586)['style']['backgroundColor'] = 'rgba(0,0,0,0.4)';
                    hideModal('locker');
                    if (_0x295586['indexOf']('wskin') != -0x1) {
                        _0x295586 = _0x295586['substr'](0x5);
                    }
                    if (_0x2d15ee()) {
                        localStorage['weaponSkin'] = _0x295586;
                    }
                    _0x4cd541['weapon']['image'] = _0x36ec46(_0x295586, 'scar'); //handheld update
                } catch (_0x108862) { }
            }
            function _0x23a634() {
                if (_0x2f153f) {
                    return;
                }
                for (var _0x29166c = 0x0; _0x29166c < 0x5dc; _0x29166c++) {
                    var _0x39205f = Math['random']() - 0.5;
                    var _0x4fc76f = Math['random']() - 0.5;
                    _0x39205f *= _0x1820e3;
                    _0x4fc76f *= _0x1820e3;
                    _0x4fc76f += 0x1e;
                    var _0x845446 = Math['floor'](Math['random']() * window['grassTypes']);
                    var _0x516f87 = new _0x1e6a3f['image'](window['grassCanvas' + _0x845446], _0x39205f, _0x4fc76f, window['grassWidth'], window['grassWidth']);
                    _0x696c2e['add'](_0x516f87);
                    window['grass']['push'](_0x516f87);
                }
            }
            function _0x249a21() {
                if (_0x5ef86b == 0x0) {
                    _0x23f908['qualitySize'] = 0x1;
                    _0x23f908['smoothingEnabled'] = !![];
                    _0x1e6a3f['resize'](!![]);
                    if (window['grass']['length'] == 0x0) {
                        _0x23a634();
                    }
                } else {
                    _0x23f908['qualitySize'] = 0x1;
                    _0x23f908['smoothingEnabled'] = !![];
                    _0x1e6a3f['resize'](!![]);
                    for (var _0x5be359 = 0x0; _0x5be359 < window['grass']['length']; _0x5be359++) {
                        window['grass'][_0x5be359]['parent']['remove'](window['grass'][_0x5be359]);
                    }
                    window['grass'] = [];
                }
                if (!_0x2f32c0) { }
                if (_0x2d15ee()) {
                    localStorage['graphics'] = _0x5ef86b;
                }
            }
            function _0x13e869() {
                document['getElementById']('controlSetting')['selectedIndex'] = _0x369ac8;
                if (_0x2d15ee()) {
                    localStorage['controlChoice'] = _0x369ac8;
                }
            }
            function updatePresenceSetting() {
                console['log']('Updating RP');
                document['getElementById']('richPresenceSetting')['selectedIndex'] = Number(richPresence) + 0x2;
                console['log'](Number(richPresence) + 0x2);
                if (_0x2d15ee()) {
                    localStorage['rp'] = richPresence;
                }
            }
            function updateVolumeSetting() {
                console['log']('Updating Volume');
                document['getElementById']('volumeSetting')['value'] = volume;
                console['log'](volume);
                document.getElementById("volumeSettingName").textContent = `Volume ${volume}%`
                if (_0x2d15ee()) {
                    localStorage['volume'] = volume;
                }
            }
            function _0x5d8f96() {
                console['log']('Updating mouse');
                if (_0x34b775 == -0x1) {
                    document['exitPointerLock']();
                }
                document['getElementById']('mouseLockSetting')['selectedIndex'] = Number(_0x34b775) + 0x2;
                console['log'](Number(_0x34b775) + 0x2);
                if (_0x2d15ee()) {
                    localStorage['mouse'] = _0x34b775;
                }
            }
            function _0x543f56() {
                console['log']('Updating region');
                var _0xb22a91 = 0x0;
                if (window['cachedRegion'] == 0x2 || window['cachedRegion'] == 0x3) {
                    _0xb22a91 = 0x1;
                } else if (window['cachedRegion'] == 0x7 || window['cachedRegion'] == 0x9) {
                    _0xb22a91 = 0x2;
                }
                document['getElementById']('regionSetting')['selectedIndex'] = _0xb22a91;
                if (_0x2d15ee()) {
                    localStorage['region'] = window['cachedRegion'];
                }
            }
            if (!_0x2f32c0) { }
            //! CHANGED
            document['getElementById']('richPresenceSetting')['onchange'] = function () {
                richPresence = document['getElementById']('richPresenceSetting')['value'];
                updatePresenceSetting();
                window.api.reload();
            };
            document['getElementById']('mouseLockSetting')['onchange'] = function () {
                _0x34b775 = document['getElementById']('mouseLockSetting')['value'];
                _0x5d8f96();
            };
            document['getElementById']('volumeSetting')['oninput'] = function () {
                volume = document['getElementById']('volumeSetting')['value'];
                updateVolumeSetting();
            };
            document['getElementById']('volumeSetting')['onchange'] = function () {
                volume = document['getElementById']('volumeSetting')['value'];
                updateVolumeSetting();
            };
            document['getElementById']('regionSetting')['onchange'] = function () {
                window['cachedRegion'] = document['getElementById']('regionSetting')['value'];
                _0x543f56();
            };
            document['getElementById']('controlSetting')['onchange'] = function () {
                _0x369ac8 = document['getElementById']('controlSetting')['value'];
                _0x13e869();
            };
            var _0x20c997 = -0x1;
            function _0x4182fc() {
                for (var _0x34e3c5 = 0x0; _0x34e3c5 < _0x3aa99f['length']; _0x34e3c5++) {
                    document['getElementById']('key' + _0x34e3c5)['style']['backgroundColor'] = null;
                    document['getElementById']('key' + _0x34e3c5)['innerHTML'] = _0x3ba0be[_0x3aa99f[_0x34e3c5]];
                }
            }
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x5f0f7e['length']; _0x4cd046++) {
                document['getElementById']('key' + _0x4cd046)['onclick'] = function (_0x52594f) {
                    _0x4182fc();
                    var _0x4e9a1d = _0x52594f['target']['id']['substring'](0x3);
                    _0x52594f['target']['style']['backgroundColor'] = 'rgba(0,0,0,0.25)';
                    _0x52594f['target']['innerHTML'] = 'Press any button...';
                    _0x20c997 = _0x4e9a1d;
                };
            }
            function _0x27152e() {
                _0x20c997 = -0x1;
                _0x4182fc();
                document['getElementById']('settings')['style']['visibility'] = 'hidden';
                document['getElementById']('settings')['style']['display'] = 'none';
            }
            function _0x2900a3() {
                hideAllModals();
                document['getElementById']('settings')['style']['visibility'] = 'visible';
                document['getElementById']('settings')['style']['display'] = 'initial';
            }
            function _0x2108ec() {
                if (_0x2d15ee()) {
                    localStorage['binds'] = JSON['stringify'](_0x3aa99f);
                }
            }
            function _0x448d81() {
                if (_0x2f32c0) {
                    _0x249a21();
                }
                if (_0x2d15ee()) {
                    if (localStorage['graphics'] !== undefined && (localStorage['graphics'] == 0x0 || localStorage['graphics'] == 0x1)) {
                        _0x5ef86b = localStorage['graphics'];
                        if (_0x2f32c0) { }
                    }
                    if (localStorage['controlChoice'] !== undefined) {
                        _0x369ac8 = localStorage['controlChoice'];
                        _0x13e869();
                    }
                    if (localStorage['rp'] !== undefined && (localStorage['rp'] == -0x2 || localStorage['rp'] == -0x1)) {
                        richPresence = localStorage['rp'];
                        updatePresenceSetting();
                    }
                    if (localStorage['volume'] !== undefined && (parseInt(localStorage['volume']) >= 0 && parseInt(localStorage['volume']) <= 100)) {
                        volume = localStorage['volume'];
                        updateVolumeSetting();
                    }
                    if (localStorage['mouse'] !== undefined && (localStorage['mouse'] == -0x2 || localStorage['mouse'] == -0x1)) {
                        _0x34b775 = localStorage['mouse'];
                        _0x5d8f96();
                    }
                    if (localStorage['region'] !== undefined && (localStorage['region'] == 0x2 || localStorage['region'] == 0x3 || localStorage['region'] == 0x7 || localStorage['region'] == 0x9)) {
                        if (localStorage['region'] == 0x9) {
                            localStorage['region'] = 0x7;
                        }
                        if (localStorage['region'] == 0x2) {
                            localStorage['region'] = 0x3;
                        }
                        window['cachedRegion'] = localStorage['region'];
                        _0x543f56();
                    }
                    if (localStorage['binds'] !== undefined) {
                        var _0xcea1e3 = [];
                        try {
                            _0xcea1e3 = JSON['parse'](localStorage['binds']);
                        } catch (_0x5e9191) { }
                        for (var _0x1e1834 = 0x0; _0x1e1834 < _0xcea1e3['length']; _0x1e1834++) {
                            if (_0x177111['indexOf'](_0xcea1e3[_0x1e1834]['toString']()) != -0x1) {
                                _0x3aa99f[_0x1e1834] = Number(_0xcea1e3[_0x1e1834]);
                            }
                        }
                        _0x4182fc();
                    }
                }
            }
            document['getElementById']('savebindsbutton')['onclick'] = function () {
                _0x27152e();
            };
            document['getElementById']('exitsettingsbutton')['onclick'] = function () {
                _0x27152e();
            };
            var _0x11ac14 = 0x514;
            var _0x1039d4 = _0x11ac14 * _0x11ac14;
            var _0x332562 = 0x3e8;
            var _0x3e3320 = _0x332562 * _0x332562;
            var _0x372340 = {};
            function _0x1a81ed(_0x33ecc3, _0x2aa29b) {
                var _0x1a8bfc = _0x34cb65(_0x33ecc3, _0x2aa29b);
                if (_0x1a8bfc > _0x1039d4) {
                    return 0x0;
                }
                _0x1a8bfc = 0x1 - _0x1a8bfc / _0x1039d4;
                var _0xed6deb = _0x2aa29b['y'] - _0x33ecc3['y'];
                if (_0x1a8bfc > 0x64 && _0xed6deb > 0x64) {
                    return 0x64;
                }
                _0xed6deb *= _0xed6deb;
                _0xed6deb = 0x1 - _0xed6deb / _0x3e3320;
                _0x1a8bfc = Math['min'](_0x1a8bfc, _0xed6deb);
                if (_0x1a8bfc < 0x0) {
                    return 0x0;
                }
                _0x1a8bfc *= _0x1a8bfc;
                _0x1a8bfc *= 0.5;
                _0x1a8bfc = Math['min'](_0x1a8bfc, 0x64);
                return _0x1a8bfc;
            }
            var _0x47bd49 = !![];
            try {
                if (_0x5ab57f) {
                    _0x5ce32c['addEventListener']('adStarted', function (_0x2f74b3) {
                        _0x47bd49 = ![];
                    });
                    _0x5ce32c['addEventListener']('adFinished', function (_0x3234ea) {
                        _0x47bd49 = !![];
                    });
                    _0x5ce32c['addEventListener']('adError', function (_0x224f60) {
                        _0x47bd49 = !![];
                    });
                }
            } catch (_0x26a713) { }
            function _0x134785(_0x1fee5f, _0x4e754d, _0x1e17d0, _0x22ee47) {
                if (!_0x47bd49) {
                    return;
                }
                //! CHANGED
                var _0x4b88c2 = _0x1a81ed(_0x4e754d, _0x1e17d0) * (window.volume/100);
                if (_0x4b88c2 <= 0x0 && !_0x22ee47) {
                    return null;
                }
                if (_0x372340[_0x1fee5f] === undefined && !_0x22ee47) {
                    return null;
                }
                if (gameWrapper['needsNativeAudio']) {
                    var _0x1fee5f = _0x372340[_0x1fee5f][0x0];
                    gameWrapper['playAudio'](_0x1fee5f['src'], _0x4b88c2);
                    return _0x1fee5f;
                }
                for (var _0x5163fc = 0x0; _0x5163fc < _0x372340[_0x1fee5f]['length']; _0x5163fc++) {
                    if (_0x372340[_0x1fee5f][_0x5163fc]['paused']) {
                        _0x372340[_0x1fee5f][_0x5163fc]['currentTime'] = 0x0;
                        _0x372340[_0x1fee5f][_0x5163fc]['volume'] = _0x4b88c2;
                        _0x372340[_0x1fee5f][_0x5163fc]['play']();
                        return _0x372340[_0x1fee5f][_0x5163fc];
                    }
                }
                var _0x1ef48b = _0x372340[_0x1fee5f][0x0]['cloneNode']();
                _0x372340[_0x1fee5f]['push'](_0x1ef48b);
                _0x1ef48b['volume'] = _0x4b88c2;
                _0x1ef48b['play']();
                return _0x1ef48b;
            }
            function _0x42f75d(_0x142abf) {
                var _0x1db74c = document['createElement']('audio');
                _0x1db74c['src'] = 'audio/' + _0x142abf + '.mp3';
                _0x372340[_0x142abf] = [_0x1db74c];
                if (gameWrapper['needsNativeAudio'])
                    gameWrapper['loadAudio'](_0x1db74c['src']);
            }
            function _0x66cf4c(_0x509b1a) {
                var _0x2212d7 = document['createElement']('audio');
                var _0x37cfef = _0x509b1a;
                if (_0x509b1a == 'ump') {
                    _0x509b1a = 'smg';
                }
                _0x2212d7['src'] = 'audio/gun/' + _0x509b1a + '.mp3';
                if (_0x372340[_0x37cfef] === undefined) {
                    _0x372340[_0x37cfef] = [_0x2212d7];
                } else {
                    _0x372340[_0x37cfef]['push'](_0x2212d7);
                }
                if (gameWrapper['needsNativeAudio'])
                    gameWrapper['loadAudio'](_0x2212d7['src']);
            }
            var _0x3ac80f = ![];
            if (_0x3ac80f) {
                window['AudioContext'] = window['AudioContext'] || window['webkitAudioContex'];
                var _0x10e7b7 = new window['AudioContext']();
                if (!_0x10e7b7['createGain'])
                    _0x10e7b7['createGain'] = _0x10e7b7['createGainNode'];
                if (!_0x10e7b7['createDelay'])
                    _0x10e7b7['createDelay'] = _0x10e7b7['createDelayNode'];
                if (!_0x10e7b7['createScriptProcessor'])
                    _0x10e7b7['createScriptProcessor'] = _0x10e7b7['createJavaScriptNode'];
                var _0x46f941 = {
                    'sounds': {},
                    'gainNodes': [],
                    'context': _0x10e7b7,
                    'loadSample': function (_0x383ca0) {
                        return fetch(_0x383ca0)['then'](function (_0x4625f1) {
                            return _0x4625f1['arrayBuffer']();
                        })['then'](function (_0x581024) {
                            return _0x46f941['context']['decodeAudioData'](_0x581024);
                        });
                    },
                    'playSample': function (_0x42eb60, _0x21b240) {
                        if (_0x42eb60 == undefined || _0x21b240 == undefined) {
                            return;
                        }
                        var _0x4cfb06 = _0x46f941['context']['createBufferSource']();
                        _0x4cfb06['buffer'] = _0x42eb60;
                        _0x4cfb06['connect'](_0x21b240);
                        _0x4cfb06['start'](0x0);
                    },
                    'load': function (_0x2f0f43, _0x1308be) {
                        if (_0x46f941['sounds'][_0x2f0f43] != undefined) {
                            return;
                        }
                        _0x46f941['sounds'][_0x2f0f43] = 0x1;
                        _0x46f941['loadSample'](_0x1308be)['then'](function (_0x1a35e3) {
                            _0x46f941['sounds'][_0x2f0f43] = _0x1a35e3;
                        });
                    }
                };
                _0x134785 = function (_0x2d6863, _0x50932c, _0x2fe089) {
                    if (!_0x47bd49) {
                        return;
                    }
                    var _0x5baee5 = _0x1a81ed(_0x50932c, _0x2fe089);
                    if (_0x5baee5 <= 0x0 || _0x46f941['sounds'][_0x2d6863] == undefined || _0x46f941['sounds'][_0x2d6863] == 0x1) {
                        return;
                    }
                    _0x5baee5 = Math['floor'](_0x5baee5 * 0xa);
                    var _0x545067 = _0x46f941['gainNodes'][_0x5baee5];
                    _0x46f941['playSample'](_0x46f941['sounds'][_0x2d6863], _0x545067);
                };
                _0x42f75d = function (_0x5131dc) {
                    _0x46f941['load'](_0x5131dc, 'audio/' + _0x5131dc + '.mp3');
                };
                _0x66cf4c = function (_0x491c8d) {
                    var _0x474f46 = _0x491c8d;
                    if (_0x491c8d == 'ump') {
                        _0x491c8d = 'smg';
                    }
                    _0x46f941['load'](_0x474f46, 'audio/gun/' + _0x491c8d + '.mp3');
                };
                for (var _0x4cd046 = 0x0; _0x4cd046 <= 0xa; _0x4cd046++) {
                    var _0x5f32a7 = _0x10e7b7['createGain']();
                    _0x5f32a7['gain']['setValueAtTime'](_0x4cd046 / 0xa, 0x0);
                    _0x5f32a7['connect'](_0x46f941['context']['destination']);
                    _0x46f941['gainNodes']['push'](_0x5f32a7);
                }
                window['addEventListener']('touchstart', function () {
                    _0x46f941['playSample'](_0x46f941['sounds']['smg'], _0x46f941['gainNodes'][0x9]);
                });
            }
            var _0x43fb78 = 0x6;
            var _0x5ca6aa = 0x1;
            var _0x69a9ab = 0x6;
            var _0x4a072b = 0x3;
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x43fb78; _0x4cd046++) {
                _0x42f75d('wood' + _0x4cd046);
            }
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x5ca6aa; _0x4cd046++) {
                _0x42f75d('rock' + _0x4cd046);
            }
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x69a9ab; _0x4cd046++) {
                _0x42f75d('metal' + _0x4cd046);
            }
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x4a072b; _0x4cd046++) {
                _0x42f75d('christmasstep' + _0x4cd046);
            }
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x4a072b; _0x4cd046++) {
                _0x42f75d('step' + _0x4cd046);
            }
            _0x42f75d('explosion0');
            _0x42f75d('explosion1');
            _0x42f75d('grapple');
            _0x42f75d('baller');
            _0x42f75d('bounce');
            _0x42f75d('reload');
            _0x66cf4c('ar');
            var _0x4a32d9 = ['bolt', 'deagle', 'rifle', 'scar', 'famas', 'scoped-ar', 'shotgun', 'smg', 'ump', 'tommy gun', 'drum', 'musket', 'heavy sniper', 'ak47', 'combat', 'snowball', 'silencedpistol', 'aug', 'burst shotgun'];
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x4a32d9['length']; _0x4cd046++) {
                _0x66cf4c(_0x4a32d9[_0x4cd046]);
            }
            for (var _0x4cd046 = 0x0; _0x4cd046 < 0x13; _0x4cd046++) {
                setTimeout(function () {
                    _0x66cf4c('ump');
                }, 0x64 * _0x4cd046);
            }
            for (var _0x4cd046 = 0x0; _0x4cd046 < 0x5; _0x4cd046++) {
                setTimeout(function () {
                    _0x66cf4c('famas');
                }, 0xc8 * _0x4cd046);
            }
            for (var _0x4cd046 = 0x0; _0x4cd046 < 0xf; _0x4cd046++) {
                setTimeout(function () {
                    _0x66cf4c('tommy gun');
                }, 0xc8 * _0x4cd046);
            }
            var _0x4cd821 = 0x0;
            var _0x5f61ac = 0x0;
            function _0x7a4a83(_0x38da66) {
                _0x134785('wood' + Math['floor'](Math['random']() * _0x43fb78), _0x1e6a3f['me']['visual']['position'], _0x38da66['visual']['position']);
            }
            function _0x129bbd(_0x1b5041) {
                _0x134785('rock' + Math['floor'](Math['random']() * _0x5ca6aa), _0x1e6a3f['me']['visual']['position'], _0x1b5041['visual']['position']);
            }
            function _0x4b0d78(_0x28f658) {
                _0x134785('metal' + Math['floor'](Math['random']() * _0x69a9ab), _0x1e6a3f['me']['visual']['position'], _0x28f658['visual']['position']);
            }
            _0x411929['showName'](_0x1e6a3f, _0x4df00c);
            function _0x5dcde4(_0x57fbf3) {
                while (_0x57fbf3 < 0x0) {
                    _0x57fbf3 += Math['PI'] * 0x2;
                }
                while (_0x57fbf3 > Math['PI'] * 0x2) {
                    _0x57fbf3 -= Math['PI'] * 0x2;
                }
                return _0x57fbf3;
            }
            function _0x10a220(_0x5e0af7, _0x159e3f, _0x50788c) {
                return (_0x159e3f - _0x5e0af7) * _0x50788c + _0x5e0af7;
            }
            var _0x11bc1f = function (_0x3f9ccd) {
                return {
                    'scene': _0x3f9ccd,
                    'position': new _0x1e6a3f['Vector2'](0x0, 0x0),
                    'velocity': new _0x1e6a3f['Vector2'](0x0, 0x0),
                    'elasticity': 0.01,
                    'drag': 0.2,
                    'shake': function (_0x1ab3d3, _0x2591f1) {
                        _0x1ab3d3 = _0x1ab3d3 || 0x1;
                        _0x2591f1 = _0x2591f1 || Math['random']() * Math['PI'] * 0x2;
                        this['velocity']['x'] = Math['cos'](_0x2591f1) * _0x1ab3d3;
                        this['velocity']['y'] = Math['sin'](_0x2591f1) * _0x1ab3d3;
                    },
                    'update': function () {
                        this['velocity']['x'] -= this['velocity']['x'] * this['drag'] * _0x1e6a3f['clientDetails']['dt'];
                        this['velocity']['y'] -= this['velocity']['y'] * this['drag'] * _0x1e6a3f['clientDetails']['dt'];
                        this['velocity']['x'] -= this['position']['x'] * this['elasticity'] * _0x1e6a3f['clientDetails']['dt'];
                        this['velocity']['y'] -= this['position']['y'] * this['elasticity'] * _0x1e6a3f['clientDetails']['dt'];
                        this['position']['x'] += this['velocity']['x'] * _0x1e6a3f['clientDetails']['dt'];
                        this['position']['y'] += this['velocity']['y'] * _0x1e6a3f['clientDetails']['dt'];
                        this['scene']['camera']['position']['x'] += this['position']['x'];
                        this['scene']['camera']['position']['y'] += this['position']['y'];
                    }
                };
            };
            function _0x2493e3(_0x6a24c9) {
                var _0x3209be = _0x6a24c9['toString'](0x10);
                return _0x3209be['length'] == 0x1 ? '0' + _0x3209be : _0x3209be;
            }
            function _0x351aaf(_0x2037e6, _0x613400, _0x3a7bf4) {
                return '#' + _0x2493e3(_0x2037e6) + _0x2493e3(_0x613400) + _0x2493e3(_0x3a7bf4);
            }
            var _0xbd822e = [];
            function _0x4bef41(_0x375f94, _0x5f1d42) {
                var _0xd0c295, _0x164e41 = _0x375f94 / 0x3;
                if (_0x5f1d42 === undefined) {
                    _0x5f1d42 = 0.001;
                }
                do {
                    _0xd0c295 = _0x164e41;
                    _0x164e41 = (_0x375f94 / _0x164e41 + _0x164e41) / 0x2;
                } while (Math['abs'](_0xd0c295 - _0x164e41) > _0x5f1d42);
                if (isNaN(_0x164e41)) {
                    return 0x0;
                }
                return _0x164e41;
            }
            for (var _0x4cd046 = 0x0; _0x4cd046 <= 0x3e8; _0x4cd046++) {
                _0xbd822e[_0x4cd046] = Math['sqrt'](_0x4cd046);
            }
            function _0x69d68d(_0x2d913c) {
                if (_0x2d913c < 0x0) {
                    return 0x0;
                }
                if (Math['floor'](_0x2d913c) == _0x2d913c && _0x2d913c < _0xbd822e['length']) {
                    return _0xbd822e[_0x2d913c];
                }
                return _0x2310d7(_0x2d913c, 0x1);
            }
            function _0x2310d7(_0x103c30, _0x32e86e) {
                if (_0x103c30 <= 0x0) {
                    return 0x0;
                }
                var _0x2e26c1, _0x364457 = 0x0;
                var _0x5e5d9c = 0x1;
                if (_0x32e86e === undefined) {
                    _0x32e86e = 0.1;
                }
                var _0xb4bf1d = 0x1;
                var _0x314e15;
                do {
                    _0x2e26c1 = _0x364457;
                    _0x364457 += _0xb4bf1d;
                    _0x314e15 = _0x364457 * _0x364457;
                    if (_0x314e15 - _0x103c30 > _0x32e86e) {
                        _0xb4bf1d /= 0xa;
                        _0x364457 = _0x2e26c1;
                    }
                } while (Math['abs'](_0x314e15 - _0x103c30) > _0x32e86e);
                return _0x364457;
            }
            function _0x34cb65(_0x1fd67c, _0x1dee6c) {
                return (_0x1dee6c['x'] - _0x1fd67c['x']) * (_0x1dee6c['x'] - _0x1fd67c['x']) + (_0x1dee6c['y'] - _0x1fd67c['y']) * (_0x1dee6c['y'] - _0x1fd67c['y']);
            }
            function _0x4648a0(_0x6f030b, _0x338981) {
                return _0x69d68d((_0x338981['x'] - _0x6f030b['x']) * (_0x338981['x'] - _0x6f030b['x']) + (_0x338981['y'] - _0x6f030b['y']) * (_0x338981['y'] - _0x6f030b['y']));
            }
            function _0x3b5f00(_0x47ff82, _0x4cbf16) {
                return Math['sqrt']((_0x4cbf16['x'] - _0x47ff82['x']) * (_0x4cbf16['x'] - _0x47ff82['x']) + (_0x4cbf16['y'] - _0x47ff82['y']) * (_0x4cbf16['y'] - _0x47ff82['y']));
            }
            var _0x23f908 = new _0x1e6a3f['renderer']();
            _0x23f908['clearScreen'] = ![];
            _0x23f908['ctx']['imageSmoothingEnabled'] = !![];
            _0x23f908['c']['style']['backgroundColor'] = window['groundColor'];
            _0x23f908['c']['requestPointerLock'] = _0x23f908['c']['requestPointerLock'] || _0x23f908['c']['mozRequestPointerLock'] || function () { };
            document['exitPointerLock'] = document['exitPointerLock'] || document['mozExitPointerLock'] || function () { };
            _0x23f908['c']['addEventListener']('click', function (_0x342414) {
                if (!_0x1e6a3f['spectating'] && !_0xf5fb22['locked']) {
                    if (_0x34b775 == -0x2 && !_0x5ea1e7) {
                        console['log'](_0x34b775);
                        _0x23f908['c']['requestPointerLock']();
                    }
                }
            });
            var _0xf5fb22 = new _0x1e6a3f['mouse'](_0x23f908);
            var _0x13c421 = new _0x1e6a3f['touches'](_0x23f908, _0xf5fb22);
            var _0xfdf4b4 = 0x0;
            _0x1e6a3f['keyboard'] = function (_0x44f6c3) {
                _0x44f6c3 = _0x44f6c3 || new _0x1e6a3f['controls']();
                _0x44f6c3['changedKeys'] = [];
                function _0x1b138e(_0x289f9b) {
                    var _0x2a66eb = ![];

                    //! CHANGES
                    if (_0x289f9b['keyCode'] == _0x43a009('Reload Page')) {
                        window.api.reload();
                    }

                    if (_0x289f9b['keyCode'] == _0x43a009('Console')) {
                        window.api.console();
                    }

                    if (_0x289f9b['keyCode'] == _0x43a009('Fullscreen')) {
                        window.api.fullscreen();
                    }

                    if (_0x289f9b['keyCode'] == _0x43a009('Hide Minimap')) {
                        window.minimapVis = !window.minimapVis;
                        if (window.minimapVis) {
                            console.log("Minimap Shown")
                            _0x3e303f.position.y = _0x3e303f.position.y + 250; // storm icons
                            _0x4a27d9.position.y = _0x4a27d9.position.y; // text

                            _0x49e998.position.y = _0x49e998.position.y + 250;  // players icon
                            _0x4918d8.position.y = _0x4918d8.position.y; // players

                            _0x3e88d5.position.y = _0x3e88d5.position.y + 250; // killsicon
                            _0x2db1b4.position.y = _0x2db1b4.position.y; //kills

                            _0x6f2310['opacity'] = 1;
                        } else {
                            console.log("Minimap Hidden")
                            _0x3e303f.position.y = _0x3e303f.position.y - 250; // storm icons
                            _0x4a27d9.position.y = _0x4a27d9.position.y; // text

                            _0x49e998.position.y = _0x49e998.position.y - 250;  // players icon
                            _0x4918d8.position.y = _0x4918d8.position.y; // players

                            _0x3e88d5.position.y = _0x3e88d5.position.y - 250; // killsicon
                            _0x2db1b4.position.y = _0x2db1b4.position.y; //kills

                            _0x6f2310['opacity'] = 0;
                        }
                    }

                    //_0x6f2310['opacity'] = 0;

                    if (_0x289f9b['keyCode'] == _0x43a009('Move Left')) {
                        if (!_0x44f6c3['left']) {
                            _0x2a66eb = !![];
                            _0x44f6c3['left'] = !![];
                            _0x44f6c3['changedKeys']['push']('left');
                        }
                    } else if (_0x289f9b['keyCode'] == _0x43a009('Move Up')) {
                        if (!_0x44f6c3['up']) {
                            _0x2a66eb = !![];
                            _0x44f6c3['up'] = !![];
                            _0x44f6c3['changedKeys']['push']('up');
                        }
                    } else if (_0x289f9b['keyCode'] == _0x43a009('Move Right')) {
                        if (!_0x44f6c3['right']) {
                            _0x2a66eb = !![];
                            _0x44f6c3['right'] = !![];
                            _0x44f6c3['changedKeys']['push']('right');
                        }
                    } else if (_0x289f9b['keyCode'] == _0x43a009('Move Down')) {
                        if (!_0x44f6c3['down']) {
                            _0x2a66eb = !![];
                            _0x44f6c3['down'] = !![];
                            _0x44f6c3['changedKeys']['push']('down');
                        }
                    } else if (_0x289f9b['keyCode'] == _0x43a009('Jump')) {
                        if (!_0x44f6c3['space']) {
                            _0x2a66eb = !![];
                            _0x44f6c3['space'] = !![];
                            _0x44f6c3['changedKeys']['push']('space');
                        }
                    } else if (_0x289f9b['keyCode'] == _0x43a009('Sprint')) {
                        if (!_0x44f6c3['shift']) {
                            _0x2a66eb = !![];
                            _0x44f6c3['shift'] = !![];
                            _0x44f6c3['changedKeys']['push']('shift');
                        }
                    }
                    _0x44f6c3['changed'] = _0x2a66eb;
                }
                window['addEventListener']('keydown', _0x1b138e, ![]);
                function _0x30695f(_0x18dd90) {
                    if (_0x18dd90['keyCode'] == _0x43a009('Move Left')) {
                        _0x44f6c3['left'] = ![];
                        _0x44f6c3['changedKeys']['push']('left');
                    } else if (_0x18dd90['keyCode'] == _0x43a009('Move Up')) {
                        _0x44f6c3['up'] = ![];
                        _0x44f6c3['changedKeys']['push']('up');
                    } else if (_0x18dd90['keyCode'] == _0x43a009('Move Right')) {
                        _0x44f6c3['right'] = ![];
                        _0x44f6c3['changedKeys']['push']('right');
                    } else if (_0x18dd90['keyCode'] == _0x43a009('Move Down')) {
                        _0x44f6c3['down'] = ![];
                        _0x44f6c3['changedKeys']['push']('down');
                    } else if (_0x18dd90['keyCode'] == _0x43a009('Jump')) {
                        _0x44f6c3['space'] = ![];
                        _0x44f6c3['changedKeys']['push']('space');
                    } else if (_0x18dd90['keyCode'] == _0x43a009('Sprint')) {
                        _0x44f6c3['shift'] = ![];
                        _0x44f6c3['changedKeys']['push']('shift');
                    }
                    _0x44f6c3['changed'] = !![];
                }
                window['addEventListener']('keyup', _0x30695f, ![]);
                return _0x44f6c3;
            };
            var _0x339df1 = new _0x1e6a3f['keyboard']();
            if ('onpointerlockchange' in document) {
                document['addEventListener']('pointerlockchange', _0x10c172, ![]);
            } else if ('onmozpointerlockchange' in document) {
                document['addEventListener']('mozpointerlockchange', _0x10c172, ![]);
            }
            function _0x10c172() {
                if (document['pointerLockElement'] === _0x23f908['c'] || document['mozPointerLockElement'] === _0x23f908['c']) {
                    _0xf5fb22['locked'] = !![];
                } else {
                    _0xf5fb22['locked'] = ![];
                }
            }
            var _0x127702 = 0x12c;
            var _0x12c372 = 0.8;
            var _0x561d93 = new _0x1e6a3f['scene']();
            _0x561d93['mouseCamera'] = new _0x1e6a3f['Vector2'](0x0, 0x0);
            _0x561d93['camera']['ratio'] = 0x1;
            _0x561d93['camera']['newRatio'] = 0x1;
            _0x561d93['camera']['borderRatio'] = 0x1;
            _0x561d93['name'] = 'scene';
            var _0x665d6a = new _0x1e6a3f['scene']();
            _0x665d6a['camera'] = _0x561d93['camera'];
            _0x665d6a['name'] = 'middle';
            var _0x586b15 = new _0x1e6a3f['scene']();
            _0x586b15['camera'] = _0x561d93['camera'];
            _0x586b15['name'] = 'background';
            var _0x44b24c = new _0x1e6a3f['scene']();
            _0x44b24c['camera'] = _0x561d93['camera'];
            _0x44b24c['name'] = 'bridgeScene';
            var _0x696c2e = new _0x1e6a3f['scene']();
            _0x696c2e['camera'] = _0x561d93['camera'];
            _0x696c2e['name'] = 'gridBackground';
            var _0x463f6a = new _0x1e6a3f['scene']();
            _0x463f6a['camera'] = _0x561d93['camera'];
            _0x463f6a['name'] = 'middleScene';
            var _0x27aecb = new _0x1e6a3f['scene']();
            _0x27aecb['camera'] = _0x561d93['camera'];
            _0x27aecb['name'] = 'top';
            var _0x2a0821 = new _0x1e6a3f['scene']();
            _0x2a0821['camera'] = _0x561d93['camera'];
            _0x2a0821['name'] = 'borderScene';
            var _0x3cc6f9 = new _0x1e6a3f['scene']();
            _0x3cc6f9['name'] = 'mapScene';
            var _0x500576 = new _0x1e6a3f['scene']();
            var _0x12499e = [_0x696c2e, _0x586b15, _0x44b24c, _0x561d93, _0x665d6a, _0x27aecb, _0x463f6a];
            var _0x153d00 = [new _0x1e6a3f['scene'](), new _0x1e6a3f['scene'](), new _0x1e6a3f['scene'](), new _0x1e6a3f['scene'](), new _0x1e6a3f['scene'](), new _0x1e6a3f['scene'](), new _0x1e6a3f['scene']()];
            var _0x7bebb1 = new _0x1e6a3f['scene']();
            _0x411929['createUI'](_0x1e6a3f, _0x7bebb1);
            _0x411929['createMap'](_0x1e6a3f, _0x696c2e, _0x665d6a, _0x1820e3);
            var _0x556614 = '\'Arial Black\', Gadget, sans-serif';
            _0x556614 = '\'Arial Black\'';
            var _0x21ef3c = new _0x1e6a3f['text']('', 0x0, -0xbe / 0x2 + 0x19, '#FFF', _0x556614, 0x96 / 0x5, '');
            _0x21ef3c['addBelow'](new _0x1e6a3f['text']('', 0x0, 0x5, '#FFF', _0x556614, 0x96 / 0x5, '', 0.4));
            _0x7bebb1['add'](_0x21ef3c);
            var _0x257b9c = new _0x1e6a3f['scene']();
            _0x257b9c['camera'] = _0x561d93['camera'];
            _0x257b9c['name'] = 'leafScene';
            var _0x9a0c40 = new _0x1e6a3f['object']();
            _0x257b9c['add'](_0x9a0c40);
            var _0x50233f = document['getElementById']('nameBox');
            _0x50233f['addEventListener']('focus', function () {
                _0x134c4f(_0xf5fb22['emulatedFromTouch']);
            });
            _0x50233f['addEventListener']('blur', function () {
                _0x134c4f(![]);
            });
            function _0x134c4f(_0x13598c) {
                window['menuLogo']['visible'] = !_0x13598c;
                _0x282ecd('name')['classList']['toggle']('mobileInput', _0x13598c);
            }
            _0x134c4f(![]);
            _0x448d81();
            var _0x2ffa83 = [_0x282ecd('leaf0'), _0x282ecd('leaf1')];
            var _0x338a93 = {
                'leaf': {
                    'new': function (_0x138b3b) {
                        var _0x5dad2c = new _0x1e6a3f['image'](_0x2ffa83[0x0]);
                        _0x665d6a['add'](_0x5dad2c);
                        return _0x5dad2c;
                    },
                    'update': function (_0x4302e6, _0xc91656) {
                        if (_0xc91656['envType'] == 'jungletree') {
                            _0x4302e6['img'] = _0x2ffa83[0x0];
                        } else {
                            _0x4302e6['image'] = _0x2ffa83[_0xc91656['envType']['substring'](0x4)];
                        }
                        _0x4302e6['position']['x'] = _0xc91656['visual']['position']['x'] + Math['random']() * 0x1e - 0xf;
                        _0x4302e6['position']['y'] = _0xc91656['visual']['position']['y'] + Math['random']() * 0x1e - 0xf;
                        _0x4302e6['width'] = 0x32 + Math['random']() * 0x14;
                        _0x4302e6['height'] = 0x32 + Math['random']() * 0x14;
                        _0x4302e6['opacity'] = 0x1;
                    }
                },
                'smoke': {
                    'new': function (_0x345555) {
                        var _0x37e8df = new _0x1e6a3f['image'](_0x282ecd('smoke' + Math['floor'](Math['random']() * 0x2)));
                        _0x665d6a['add'](_0x37e8df);
                        return _0x37e8df;
                    },
                    'update': function (_0xebdbe2, _0x4da936) {
                        var _0xf55041 = 0.4;
                        if (_0x4da936['sprinting']) {
                            _0xf55041 = 0x1;
                        }
                        var _0xb3fab9 = 0x32 + Math['random']() * 0x14;
                        _0xebdbe2['position']['x'] = _0x4da936['visual']['position']['x'] + Math['random']() * 0x1e - 0xf;
                        _0xebdbe2['position']['y'] = _0x4da936['visual']['position']['y'] + Math['random']() * 0x1e - 0xf;
                        _0xebdbe2['width'] = _0xebdbe2['height'] = _0xb3fab9;
                        _0xebdbe2['opacity'] = _0xf55041;
                    }
                },
                'pebble': {
                    'new': function (_0x1b228d) {
                        var _0x10c1b7 = new _0x1e6a3f['image'](_0x282ecd('pebble'));
                        _0x665d6a['add'](_0x10c1b7);
                        return _0x10c1b7;
                    },
                    'update': function (_0x3e7f29, _0x167e6a) {
                        _0x3e7f29['position']['x'] = _0x167e6a['visual']['position']['x'] + Math['random']() * 0x1e - 0xf;
                        _0x3e7f29['position']['y'] = _0x167e6a['visual']['position']['y'] + Math['random']() * 0x1e - 0xf;
                        _0x3e7f29['width'] = 0x32 + Math['random']() * 0x14;
                        _0x3e7f29['height'] = 0x32 + Math['random']() * 0x14;
                        _0x3e7f29['opacity'] = 0x1;
                    }
                },
                'scrap': {
                    'new': function (_0x11ed94) {
                        var _0x585b30 = new _0x1e6a3f['image'](_0x282ecd('scrap' + Math['floor'](Math['random']() * 0x2)));
                        _0x665d6a['add'](_0x585b30);
                        return _0x585b30;
                    },
                    'update': function (_0x4f9836, _0x17cdfc) {
                        _0x4f9836['position']['x'] = _0x17cdfc['visual']['position']['x'] + Math['random']() * 0x1e - 0xf;
                        _0x4f9836['position']['y'] = _0x17cdfc['visual']['position']['y'] + Math['random']() * 0x1e - 0xf;
                        _0x4f9836['width'] = 0x32 + Math['random']() * 0x14;
                        _0x4f9836['height'] = 0x32 + Math['random']() * 0x14;
                        _0x4f9836['opacity'] = 0x1;
                    }
                }
            };
            var _0x5290ca = _0x591c01(_0x338a93);
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x5290ca['length']; _0x4cd046++) {
                _0x338a93[_0x5290ca[_0x4cd046]]['list'] = [];
                _0x338a93[_0x5290ca[_0x4cd046]]['actualNew'] = function () {
                    var _0x56b82f = this['new']();
                    _0x1e6a3f['customParticle'](_0x56b82f);
                    _0x56b82f['using'] = ![];
                    _0x56b82f['visible'] = ![];
                    _0x56b82f['parentRemove'] = ![];
                    if (_0x56b82f['oldUpdate'] == undefined) {
                        _0x56b82f['oldUpdate'] = _0x56b82f['update'];
                        _0x56b82f['update'] = function (_0x762f61) {
                            if (!this['using']) {
                                return;
                            }
                            if (!this['oldUpdate'](_0x762f61)) {
                                this['using'] = ![];
                                this['visible'] = ![];
                            }
                        };
                        _0x56b82f['oldRender'] = _0x56b82f['render'];
                        _0x56b82f['render'] = function (_0x2ed803, _0x3a8714, _0x58efb8) {
                            if (this['using']) {
                                this['oldRender'](_0x2ed803, _0x3a8714, _0x58efb8);
                            }
                        };
                    }
                    return _0x56b82f;
                };
                for (var _0x2f607b = 0x0; _0x2f607b < 0x28; _0x2f607b++) {
                    _0x338a93[_0x5290ca[_0x4cd046]]['list']['push'](_0x338a93[_0x5290ca[_0x4cd046]]['actualNew']());
                }
            }
            _0x1e6a3f['customCustomParticle'] = function (_0x2943a4, _0x992c1c, _0x5bfc76, _0x410b59, _0x15ff38, _0x365c42, _0x3744de, _0x3f53d7) {
                var _0x3d38ec = _0x338a93[_0x2943a4]['list'];
                for (var _0x1e2ca9 = 0x0; _0x1e2ca9 <= _0x3d38ec['length']; _0x1e2ca9++) {
                    if (_0x1e2ca9 == _0x3d38ec['length']) {
                        _0x3d38ec[_0x1e2ca9] = _0x338a93[_0x2943a4]['actualNew']();
                    }
                    if (!_0x3d38ec[_0x1e2ca9]['using']) {
                        _0x3d38ec[_0x1e2ca9]['using'] = !![];
                        _0x338a93[_0x2943a4]['update'](_0x3d38ec[_0x1e2ca9], _0x992c1c);
                        _0x1e6a3f['customParticle'](_0x3d38ec[_0x1e2ca9], _0x5bfc76, _0x410b59, _0x15ff38, _0x365c42, _0x3744de, _0x3f53d7);
                        _0x3d38ec[_0x1e2ca9]['parent'] = null;
                        _0x3d38ec[_0x1e2ca9]['visible'] = !![];
                        if (_0x3d38ec[_0x1e2ca9] == undefined) {
                            console['log']('Gave undefined');
                        }
                        return _0x3d38ec[_0x1e2ca9];
                    }
                }
            };
            var _0x1cdc93 = document['createElement']('canvas');
            _0x1cdc93['width'] = _0x1cdc93['height'] = 0x708;
            var _0x210dca = _0x1cdc93['getContext']('2d');
            var _0x587dc2 = new _0x1e6a3f['image'](_0x1cdc93, 0x0, 0x0, 0x384, 0x384);
            _0x3cc6f9['add'](new _0x1e6a3f['rectangle'](0x0, 0x0, 0x782, 0x43a, '#000', 0.3));
            _0x3cc6f9['add'](_0x587dc2);
            var _0x3d84ce = new _0x1e6a3f['object']();
            _0x3d84ce['add'](new _0x1e6a3f['rectangle'](0x0, 0x0, 0x782, 0x43a, '#000', 0.5));
            var _0x17f71f = [];
            function _0x122eb4(_0x5cac75) {
                var _0x2c0775 = new _0x1e6a3f['strokeText'](_0x5cac75['text'], 0x0, 0x0, '#000', 'Arial Black', _0x5cac75['fontSize'], '', 0x1, _0x5cac75['align']);
                _0x2c0775['lineWidth'] = 0x6;
                _0x5cac75['addBelow'](_0x2c0775);
                _0x17f71f['push'](_0x5cac75);
            }
            function _0x42646b() {
                for (var _0x48f550 = 0x0; _0x48f550 < _0x17f71f['length']; _0x48f550++) {
                    _0x17f71f[_0x48f550]['belowObjects'][0x0]['text'] = _0x17f71f[_0x48f550]['text'];
                }
            }
            var _0x38b533 = 'lobby';
            var _0x20bc3e = -0x1;
            var _0xc16629 = {
                'position': [0x0, 0x0],
                'radius': _0x1820e3 / 0x2 + 0x258 + 0x15e
            };
            var _0x2e8aa0 = {
                'position': [0x0, 0x0],
                'radius': _0x1820e3 / 0x2 + 0x258 + 0x15e
            };
            var _0x325343 = ![];
            var _0x2c00c9 = 0x3e8;
            var _0x66beea = 0x3e8;
            var _0x5568e2 = 0x14;
            var _0x1b097b = new _0x1e6a3f['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x2a0821['add'](_0x1b097b);
            var _0x45708b = new _0x1e6a3f['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x2a0821['add'](_0x45708b);
            var _0x3c063d = new _0x1e6a3f['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x2a0821['add'](_0x3c063d);
            var _0x5603a3 = new _0x1e6a3f['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x2a0821['add'](_0x5603a3);
            var _0x23cb67 = new _0x1e6a3f['scene']();
            var _0x13162b = new _0x1e6a3f['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x23cb67['add'](_0x13162b);
            var _0x576448 = new _0x1e6a3f['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x23cb67['add'](_0x576448);
            var _0x31c559 = new _0x1e6a3f['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x23cb67['add'](_0x31c559);
            var _0x184b0f = new _0x1e6a3f['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x23cb67['add'](_0x184b0f);
            var _0x131db9 = new _0x1e6a3f['strokeRectangle'](0x0, 0x0, 0x0, 0x0, '#FFF', 0x32, 0.4);
            if (_0x2f153f) {
                _0x131db9['color'] = '#000';
            }
            _0x23cb67['add'](_0x131db9);
            var _0x4ffd25 = document['createElement']('canvas');
            _0x4ffd25['width'] = _0x4ffd25['height'] = 0x708;
            var _0x727ad5 = _0x4ffd25['getContext']('2d');
            _0x727ad5['translate'](0x384, 0x384);
            _0x3cc6f9['add'](new _0x1e6a3f['image'](_0x4ffd25, 0x0, 0x0, 0x384, 0x384));
            var _0x2713f3 = new _0x1e6a3f['circle'](0x0, 0x0, 0x32, '#FFF', 0x1);
            _0x2713f3['addBelow'](new _0x1e6a3f['circle'](0x0, 0x0, 0x78, '#FFF', 0.4));
            _0x2713f3['addBelow'](new _0x1e6a3f['circle'](0x0, 0x0, 0xc8, '#FFF', 0.2));
            _0x23cb67['add'](_0x2713f3);
            var _0x5dff38 = [];
            var _0x59380a = '#00BFFF';
            for (var _0x4cd046 = 0x0; _0x4cd046 < 0x4; _0x4cd046++) {
                var _0x42d2d2 = new _0x1e6a3f['circle'](0x0, 0x0, 0x32, _0x59380a, 0x1);
                _0x42d2d2['addBelow'](new _0x1e6a3f['circle'](0x0, 0x0, 0x78, _0x59380a, 0.4));
                _0x42d2d2['addBelow'](new _0x1e6a3f['circle'](0x0, 0x0, 0xc8, _0x59380a, 0.2));
                _0x23cb67['add'](_0x42d2d2);
                _0x5dff38['push'](_0x42d2d2);
            }
            var _0x2a5be2 = 0x12c;
            var _0x146a29 = 0.45;
            function _0x472bc3(_0x347205) {
                return _0x347205['toString']()['replace'](/\B(?=(\d{3})+(?!\d))/g, ',');
            }
            function _0x147c09(_0x50eb19) {
                _0x50eb19['width'] = 0x0;
                _0x50eb19['height'] = 0x0;
                _0x50eb19['opacity'] = 0x0;
            }
            function _0x376c18() {
                _0x2c00c9 = _0x1e6a3f['lerp'](_0xc16629['radius'], _0x2e8aa0['radius']);
                _0x2c00c9 = Math['max'](_0x2c00c9, 0x0);
                var _0x5be362 = new _0x1e6a3f['Vector2'](_0x1e6a3f['lerp'](_0xc16629['position'][0x0], _0x2e8aa0['position'][0x0]), _0x1e6a3f['lerp'](_0xc16629['position'][0x1], _0x2e8aa0['position'][0x1]));
                var _0x575f6f = _0x5be362['x'] - _0x2c00c9;
                var _0x378fbf = _0x5be362['y'] - _0x2c00c9;
                var _0x286ac0 = _0x5be362['y'] + _0x2c00c9;
                var _0x836ad0 = _0x5be362['x'] + _0x2c00c9;
                var _0xbc91f = _0x1e6a3f['me']['visual']['position']['x'] - 0x780 / 0x2 - _0x2a5be2;
                var _0x1a0d50 = _0x1e6a3f['me']['visual']['position']['y'] - 0x438 / 0x2 - _0x2a5be2;
                var _0x319559 = _0x1e6a3f['me']['visual']['position']['y'] + 0x438 / 0x2 + _0x2a5be2;
                var _0x5b5b3d = _0x1e6a3f['me']['visual']['position']['x'] + 0x780 / 0x2 + _0x2a5be2;
                var _0x1524cb = 0x0;
                var _0x4d0197 = 0x0;
                if (_0x378fbf < _0x1a0d50) {
                    _0x147c09(_0x3c063d);
                    _0x1524cb = _0x1a0d50;
                } else {
                    _0x3c063d['position']['x'] = _0x1e6a3f['me']['visual']['position']['x'];
                    _0x3c063d['position']['y'] = (_0x378fbf + _0x1a0d50) / 0x2;
                    _0x3c063d['height'] = _0x378fbf - _0x1a0d50;
                    _0x3c063d['width'] = 0x780 + _0x2a5be2 * 0x2;
                    _0x1524cb = _0x378fbf;
                    _0x3c063d['opacity'] = _0x146a29;
                }
                if (_0x286ac0 > _0x319559) {
                    _0x147c09(_0x5603a3);
                    _0x4d0197 = _0x319559;
                } else {
                    _0x5603a3['position']['x'] = _0x1e6a3f['me']['visual']['position']['x'];
                    _0x5603a3['position']['y'] = (_0x286ac0 + _0x319559) / 0x2;
                    _0x5603a3['height'] = _0x286ac0 - _0x319559;
                    _0x5603a3['width'] = 0x780 + _0x2a5be2 * 0x2;
                    _0x4d0197 = _0x286ac0;
                    _0x5603a3['opacity'] = _0x146a29;
                }
                if (_0x575f6f < _0xbc91f) {
                    _0x147c09(_0x1b097b);
                } else {
                    _0x1b097b['opacity'] = _0x146a29;
                    _0x1b097b['position']['x'] = (_0x575f6f + _0xbc91f) / 0x2;
                    _0x1b097b['position']['y'] = (_0x1524cb + _0x4d0197) / 0x2;
                    _0x1b097b['height'] = _0x4d0197 - _0x1524cb;
                    _0x1b097b['width'] = _0x575f6f - _0xbc91f;
                }
                if (_0x836ad0 > _0x5b5b3d) {
                    _0x147c09(_0x45708b);
                } else {
                    _0x45708b['opacity'] = _0x146a29;
                    _0x45708b['position']['x'] = (_0x836ad0 + _0x5b5b3d) / 0x2;
                    _0x45708b['position']['y'] = (_0x1524cb + _0x4d0197) / 0x2;
                    _0x45708b['height'] = _0x4d0197 - _0x1524cb;
                    _0x45708b['width'] = _0x5b5b3d - _0x836ad0;
                }
                _0x3b6319();
            }
            function _0x3b6319() {
                _0x2c00c9 = _0x1e6a3f['lerp'](_0xc16629['radius'], _0x2e8aa0['radius']);
                var _0x309765 = new _0x1e6a3f['Vector2'](_0x1e6a3f['lerp'](_0xc16629['position'][0x0], _0x2e8aa0['position'][0x0]), _0x1e6a3f['lerp'](_0xc16629['position'][0x1], _0x2e8aa0['position'][0x1]));
                var _0x1bc0a6 = _0x309765['x'] - _0x2c00c9;
                var _0xf2e4c8 = _0x309765['y'] - _0x2c00c9;
                var _0x87db89 = _0x309765['y'] + _0x2c00c9;
                var _0x46b8f7 = _0x309765['x'] + _0x2c00c9;
                var _0x3ea9a1 = -_0x1820e3 / 0x2;
                var _0x270c0f = -_0x1820e3 / 0x2;
                var _0x13b917 = _0x1820e3 / 0x2;
                var _0x33ab3a = _0x1820e3 / 0x2;
                var _0x344fcd = 0x0;
                var _0xdef7fa = 0x0;
                if (_0xf2e4c8 < _0x270c0f) {
                    _0x147c09(_0x31c559);
                    _0x344fcd = _0x270c0f;
                } else {
                    _0x31c559['position']['x'] = 0x0;
                    _0x31c559['position']['y'] = (_0xf2e4c8 + _0x270c0f) / 0x2;
                    _0x31c559['height'] = _0xf2e4c8 - _0x270c0f;
                    _0x31c559['width'] = _0x1820e3;
                    _0x344fcd = _0xf2e4c8;
                    _0x31c559['opacity'] = _0x146a29;
                }
                if (_0x87db89 > _0x13b917) {
                    _0x147c09(_0x184b0f);
                    _0xdef7fa = _0x13b917;
                } else {
                    _0x184b0f['position']['x'] = 0x0;
                    _0x184b0f['position']['y'] = (_0x87db89 + _0x13b917) / 0x2;
                    _0x184b0f['height'] = _0x87db89 - _0x13b917;
                    _0x184b0f['width'] = _0x1820e3;
                    _0xdef7fa = _0x87db89;
                    _0x184b0f['opacity'] = _0x146a29;
                }
                if (_0x1bc0a6 < _0x3ea9a1) {
                    _0x147c09(_0x13162b);
                } else {
                    _0x13162b['opacity'] = _0x146a29;
                    _0x13162b['position']['x'] = (_0x1bc0a6 + _0x3ea9a1) / 0x2;
                    _0x13162b['position']['y'] = (_0x344fcd + _0xdef7fa) / 0x2;
                    _0x13162b['height'] = _0xdef7fa - _0x344fcd;
                    _0x13162b['width'] = _0x1bc0a6 - _0x3ea9a1;
                }
                if (_0x46b8f7 > _0x33ab3a) {
                    _0x147c09(_0x576448);
                } else {
                    _0x576448['opacity'] = _0x146a29;
                    _0x576448['position']['x'] = (_0x46b8f7 + _0x33ab3a) / 0x2;
                    _0x576448['position']['y'] = (_0x344fcd + _0xdef7fa) / 0x2;
                    _0x576448['height'] = _0xdef7fa - _0x344fcd;
                    _0x576448['width'] = _0x33ab3a - _0x46b8f7;
                }
                _0x727ad5['clearRect'](-0x384, -0x384, 0x708, 0x708);
                _0x23cb67['render'](_0x727ad5, _0x1820e3 / 0x708, 0x1);
                _0x2713f3['position'] = _0x1e6a3f['me']['visual']['position']['clone']();
            }
            var _0x32cd8d = new _0x1e6a3f['object']();
            _0x32cd8d['size'] = 0.9;
            _0x32cd8d['opacity'] = 0x0;
            var _0x31bd73 = 0x1e;
            var _0x1446c5 = 0x13;
            var _0x2c6294 = 0x23;
            var _0x1d57ba = 0x0;
            var _0x521cfb = new _0x1e6a3f['arc'](0x0, 0x0, _0x1446c5, '#FFF', Math['PI'] * 0.7, 0x0, 0x9);
            _0x521cfb['addBelow'](new _0x1e6a3f['arc'](0x0, 0x0, _0x1446c5, '#FFF', Math['PI'] * 0x2, 0x0, 0x9));
            _0x521cfb['belowObjects'][0x0]['opacity'] = 0.35;
            var _0x17d379 = new _0x1e6a3f['text']('Matchmaking...', 0x0, 0x0, '#FFF', 'Arial Black', _0x31bd73);
            _0x32cd8d['position']['y'] = 0xfa;
            _0x32cd8d['add'](_0x521cfb);
            _0x32cd8d['add'](_0x17d379);
            _0x7bebb1['add'](_0x32cd8d);
            function _0xba7524() {
                _0x521cfb['rotation'] += _0x1e6a3f['clientDetails']['dt'] / 0x5;
                _0x1d57ba = _0x17d379['width'] + _0x2c6294 + _0x1446c5 * 0x2;
                _0x521cfb['position']['x'] = -_0x1d57ba / 0x2 + _0x1446c5;
                _0x17d379['position']['x'] = _0x1d57ba / 0x2 - _0x17d379['width'] / 0x2;
                _0x32cd8d['position']['y'] = Math['round'](_0x23f908['topOfScreen']) + 0x73;
            }
            var _0x46bd0f = new _0x11bc1f(_0x561d93);
            var _0x112d73 = new _0x1e6a3f['object']();
            var _0x213633 = 0x28;
            var _0x457326 = 0x14;
            var _0xc14805 = 0x4;
            var _0x25d7af = 0.6;
            _0x112d73['add'](new _0x1e6a3f['rectangle'](0x0, _0x213633, _0xc14805, _0x457326, '#FFF', _0x25d7af));
            _0x112d73['add'](new _0x1e6a3f['rectangle'](0x0, -_0x213633, _0xc14805, _0x457326, '#FFF', _0x25d7af));
            _0x112d73['add'](new _0x1e6a3f['rectangle'](_0x213633, 0x0, _0x457326, _0xc14805, '#FFF', _0x25d7af));
            _0x112d73['add'](new _0x1e6a3f['rectangle'](-_0x213633, 0x0, _0x457326, _0xc14805, '#FFF', _0x25d7af));
            _0x112d73['add'](new _0x1e6a3f['rectangle'](0x0, 0x0, _0xc14805, _0xc14805, '#FFF', _0x25d7af));
            var _0x1342c3 = new _0x1e6a3f['object']();
            _0x1342c3['add'](new _0x1e6a3f['rectangle'](0x0, _0x213633, _0xc14805, _0x457326, '#F00', _0x25d7af));
            _0x1342c3['add'](new _0x1e6a3f['rectangle'](0x0, -_0x213633, _0xc14805, _0x457326, '#F00', _0x25d7af));
            _0x1342c3['add'](new _0x1e6a3f['rectangle'](_0x213633, 0x0, _0x457326, _0xc14805, '#F00', _0x25d7af));
            _0x1342c3['add'](new _0x1e6a3f['rectangle'](-_0x213633, 0x0, _0x457326, _0xc14805, '#F00', _0x25d7af));
            _0x1342c3['rotation'] = Math['PI'] / 0x4;
            _0x1342c3['size'] = 0.7;
            _0x1342c3['opacity'] = 0x0;
            _0x500576['add'](_0x112d73);
            _0x112d73['add'](_0x1342c3);
            var _0x3fbfae = new _0x1e6a3f['scene']();
            var _0x1368dc = new _0x1e6a3f['object']();
            _0x1368dc['add'](new _0x1e6a3f['rectangle'](0x0, 0x6, 0x0, 0x19, '#A00'));
            _0x1368dc['add'](new _0x1e6a3f['rectangle'](0x0, 0x0, 0x0, 0x19, '#F00'));
            _0x1368dc['position']['y'] = 0x438;
            function _0x587560(_0xed48db, _0x1b56a8) {
                var _0x328192 = [];
                for (var _0x2b02bd = 0x0; _0x2b02bd < _0xed48db['length']; _0x2b02bd++) {
                    if (_0x1b56a8[_0x2b02bd] == undefined || _0xed48db[_0x2b02bd] == undefined) {
                        continue;
                    }
                    if (_0x1b56a8[_0x2b02bd]['pressed'] && !_0xed48db[_0x2b02bd]) {
                        _0x328192[_0x2b02bd] = !![];
                    } else {
                        _0x328192[_0x2b02bd] = ![];
                    }
                }
                return _0x328192;
            }
            var _0x42fd53 = ![];
            var _0x48bca2;
            _0x48bca2 = [];
            for (var _0x4cd046 = 0x0; _0x4cd046 < 0x10; _0x4cd046++) {
                _0x48bca2[_0x4cd046] = ![];
            }
            function _0xe9c774() {
                var _0x192b16;
                try {
                    _0x192b16 = navigator['getGamepads']();
                } catch (_0x2e02a5) {
                    return;
                }
                for (var _0x4f320e = 0x0; _0x4f320e < _0x192b16['length']; _0x4f320e++) {
                    var _0x123498 = _0x192b16[_0x4f320e];
                    if (_0x123498 == null || _0x123498['id']['indexOf']('Unknown') != -0x1) {
                        continue;
                    }
                    var _0x4ab3ff = _0x123498['buttons'];
                    var _0x5e6d41 = _0x123498['axes'];
                    var _0x36db80 = 0.35;
                    var _0x281170 = ![];
                    if (_0x4ab3ff == undefined || _0x4ab3ff['length'] < 0xb) {
                        return;
                    }
                    if (_0x5e6d41[0x0] < -_0x36db80) {
                        _0x281170 = !![];
                        if (!_0x339df1['left']) {
                            _0x339df1['left'] = !![];
                            _0x339df1['changedKeys']['push']('left');
                            _0x339df1['changed'] = !![];
                        }
                    } else if (_0x339df1['left']) {
                        _0x339df1['left'] = ![];
                        _0x339df1['changedKeys']['push']('left');
                        _0x339df1['changed'] = !![];
                    }
                    if (_0x5e6d41[0x0] > _0x36db80) {
                        _0x281170 = !![];
                        if (!_0x339df1['right']) {
                            _0x339df1['right'] = !![];
                            _0x339df1['changedKeys']['push']('right');
                            _0x339df1['changed'] = !![];
                        }
                    } else if (_0x339df1['right']) {
                        _0x339df1['right'] = ![];
                        _0x339df1['changedKeys']['push']('right');
                        _0x339df1['changed'] = !![];
                    }
                    if (_0x5e6d41[0x1] < -_0x36db80) {
                        _0x281170 = !![];
                        if (!_0x339df1['up']) {
                            _0x339df1['up'] = !![];
                            _0x339df1['changedKeys']['push']('up');
                            _0x339df1['changed'] = !![];
                        }
                    } else if (_0x339df1['up']) {
                        _0x339df1['up'] = ![];
                        _0x339df1['changedKeys']['push']('up');
                        _0x339df1['changed'] = ![];
                    }
                    if (_0x5e6d41[0x1] > _0x36db80) {
                        _0x281170 = !![];
                        if (!_0x339df1['down']) {
                            _0x339df1['down'] = !![];
                            _0x339df1['changedKeys']['push']('down');
                            _0x339df1['changed'] = !![];
                        }
                    } else if (_0x339df1['down']) {
                        _0x339df1['down'] = ![];
                        _0x339df1['changedKeys']['push']('down');
                        _0x339df1['changed'] = !![];
                    }
                    if (_0x4ab3ff[0xa]['pressed']) {
                        if (!_0x339df1['shift']) {
                            _0x339df1['shift'] = !![];
                            _0x339df1['changedKeys']['push']('shift');
                            _0x339df1['changed'] = !![];
                        }
                    } else if (_0x339df1['shift']) {
                        _0x339df1['shift'] = ![];
                        _0x339df1['changedKeys']['push']('shift');
                        _0x339df1['changed'] = !![];
                    }
                    if (_0x4ab3ff[0x6]['pressed']) {
                        if (!_0xf5fb22['rightClicking']) {
                            _0xf5fb22['rightClicking'] = !![];
                            _0xf5fb22['rightChanged'] = !![];
                        }
                    } else if (_0xf5fb22['rightClicking']) {
                        _0xf5fb22['rightClicking'] = ![];
                        _0xf5fb22['rightChanged'] = !![];
                        console['log']('Set Right Click False');
                    }
                    if (_0x4ab3ff[0x7]['pressed']) {
                        if (!_0xf5fb22['clicking']) {
                            _0xf5fb22['clicking'] = !![];
                            _0xf5fb22['changed'] = !![];
                        }
                    } else if (_0xf5fb22['clicking']) {
                        _0xf5fb22['clicking'] = ![];
                        _0xf5fb22['changed'] = !![];
                    }
                    if (_0x4ab3ff[0x0]['pressed'] && !_0x5ea1e7) {
                        if (!_0x339df1['space']) {
                            _0x339df1['space'] = !![];
                            _0x339df1['changedKeys']['push']('space');
                            _0x339df1['changed'] = !![];
                        }
                    } else if (_0x339df1['space']) {
                        _0x339df1['space'] = ![];
                        _0x339df1['changedKeys']['push']('space');
                        _0x339df1['changed'] = !![];
                    }
                    if (_0x48bca2 !== undefined) {
                        var _0x1b2049 = _0x587560(_0x48bca2, _0x4ab3ff);
                        if (_0x1b2049 === undefined) {
                            continue;
                        }
                        if (_0x1b2049[0x1]) {
                            _0x1e6a3f['currentPackets']['push']({
                                'type': 'build'
                            });
                        }
                        if (_0x1b2049[0x3]) {
                            _0x1e6a3f['currentPackets']['push']({
                                'type': 'reload'
                            });
                        }
                        if (_0x1b2049[0x2]) {
                            _0x1e6a3f['currentPackets']['push']({
                                'type': 'pickup'
                            });
                        }
                        if (_0x1b2049[0x8]) {
                            _0x527967();
                        }
                        if (_0x1e6a3f['spectating'] && _0x1b2049[0x9] && _0x7bebb1['opacity'] == 0x1) {
                            if (document['activeElement']['id'] == 'partyinput') {
                                _0x3b160b = document['getElementById']('partyinput')['value'];
                                _0x3b160b = _0x3b160b['toLowerCase']();
                                if (_0x3b160b['length'] < 0x6) {
                                    alert('ID Not Valid - Should be 6 characters long');
                                }
                                var _0x2b076e = _0x3b160b['charAt'](0x0) + _0x3b160b['charAt'](0x1);
                                if (_0x39cfaa['indexOf'](_0x2b076e) == -0x1) {
                                    alert('ID Not Valid - Please check again');
                                }
                                if (_0x446ded == null) {
                                    _0x32f633(_0x2b076e);
                                    _0x20a2a5['push']({
                                        'type': 'join',
                                        'id': _0x3b160b
                                    });
                                    _0x20a2a5['push']({
                                        'type': 'changename',
                                        'name': document['getElementById']('nameBox')['value']
                                    });
                                    _0x36c0cd('name', _0x282ecd('nameBox')['value'], 0x16d);
                                }
                            } else {
                                _0x20bc3e = -0x1;
                                _0xc16629 = {
                                    'position': [0x0, 0x0],
                                    'radius': _0x1820e3 / 0x2 + 0x258 + 0x15e
                                };
                                _0x2e8aa0 = {
                                    'position': [0x0, 0x0],
                                    'radius': _0x1820e3 / 0x2 + 0x258 + 0x15e
                                };
                                _0x131db9['width'] = _0x1820e3 + 0x3e8;
                                _0x131db9['height'] = _0x131db9['width'];
                                _0x131db9['position']['x'] = 0x0;
                                _0x131db9['position']['y'] = 0x0;
                                _0x36654a['opacity'] = 0x0;
                                _0x56f972 = !![];
                                if (_0x446ded != null) {
                                    _0x319f2e();
                                } else {
                                    _0x563bf4();
                                }
                                if (_0x34b775 == -0x2) { }
                            }
                        }
                        if (_0x1b2049[0x4]) {
                            _0x9a4f65 -= 0x1;
                            if (_0x9a4f65 < 0x0) {
                                _0x9a4f65 = 0x5;
                            }
                            while (_0x1e6a3f['me']['weaponSlots'][_0x9a4f65]['type'] == 'empty') {
                                _0x9a4f65--;
                            }
                            _0x1e6a3f['currentPackets']['push']({
                                'type': 'selectChange',
                                'weapon': _0x9a4f65
                            });
                        }
                        if (_0x1b2049[0x5]) {
                            _0x9a4f65 += 0x1;
                            if (_0x9a4f65 > 0x5) {
                                _0x9a4f65 = 0x0;
                            }
                            while (_0x1e6a3f['me']['weaponSlots'][_0x9a4f65]['type'] == 'empty') {
                                _0x9a4f65++;
                                if (_0x9a4f65 > 0x5) {
                                    _0x9a4f65 = 0x0;
                                }
                            }
                            _0x1e6a3f['currentPackets']['push']({
                                'type': 'selectChange',
                                'weapon': _0x9a4f65
                            });
                        }
                        for (var _0x4f320e = 0x0; _0x4f320e < _0x4ab3ff['length']; _0x4f320e++) {
                            _0x48bca2[_0x4f320e] = _0x4ab3ff[_0x4f320e]['pressed'];
                        }
                    }
                    var _0x24b5ff = 0x3;
                    if (_0x5e6d41[0x3] == 0x0) { }
                    if (Math['abs'](_0x5e6d41[0x2]) > _0x36db80 || Math['abs'](_0x5e6d41[_0x24b5ff]) > _0x36db80) {
                        _0xf5fb22['x'] = _0x5e6d41[0x2] * 0x12c;
                        _0xf5fb22['y'] = _0x5e6d41[_0x24b5ff] * 0x12c;
                        if (_0xf5fb22['rightClicking']) {
                            var _0x50492a = Math['atan2'](_0x5e6d41[_0x24b5ff], _0x5e6d41[0x2]);
                            var _0x64949d = 0x96;
                            var _0x274d77 = _0x4bef41(_0x5e6d41[0x2] * _0x5e6d41[0x2] + _0x5e6d41[_0x24b5ff] * _0x5e6d41[_0x24b5ff]);
                            _0x274d77 *= 0x96;
                            _0x64949d += _0x274d77;
                            _0xf5fb22['x'] = Math['cos'](_0x50492a) * _0x64949d;
                            _0xf5fb22['y'] = Math['sin'](_0x50492a) * _0x64949d;
                        }
                        _0x42fd53 = !![];
                    }
                }
            }
            var _0x1d5f1b = new _0x1e6a3f['text']('+5', 0x0, 0x28, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center');
            _0x1d5f1b['redraw']();
            _0x1d5f1b = _0x1d5f1b['canvas'];
            var _0x473362 = new _0x1e6a3f['text'](0x64, 0x0, 0x0, '#FFF', 'Arial', 0xa, 'bold', 0.9, 'left');
            _0x473362['redraw']();
            _0x473362 = _0x473362['canvas'];
            var _0x1e03e3 = new _0x1e6a3f['text']('/', 0x0, 0x0, '#FFF', 'Arial', 0xa, 'bold', 0.5, 'center');
            _0x1e03e3['redraw']();
            _0x1e03e3 = _0x1e03e3['canvas'];
            var _0x1ccd29 = [];
            var _0x18389d = 0xf;
            var _0x275aa0 = 0xc;
            var _0xf5f4ae = new _0x1e6a3f['object']();
            _0xf5f4ae['size'] = 0.8;
            var _0x438f1a = 0x28;
            var _0x3382aa = 0x1a;
            var _0x114c06 = 0x0;
            var _0x35047d = 0x40;
            var _0x1f966b = '#ffcc00';
            _0x3fbfae['add'](_0xf5f4ae);
            function _0x3dbce9(_0x7d9bfb, _0x535b94, _0x5dd7b3) {
                if (_0x5dd7b3 === undefined) {
                    _0x5dd7b3 = ![];
                }
                var _0x9bd16a = {};
                _0x9bd16a['parent'] = new _0x1e6a3f['object']();
                _0x9bd16a['rectangle'] = new _0x1e6a3f['rectangle'](0x0, 0x0, 0x1, 0x1, '#000', 0.3);
                _0x9bd16a['parent']['add'](_0x9bd16a['rectangle']);
                _0x9bd16a['name1'] = new _0x1e6a3f['text'](_0x7d9bfb, 0x0, 0x0, '#DDD', 'Arial Black', _0x3382aa, '', 0x1, 'left');
                _0x9bd16a['elim'] = new _0x1e6a3f['text']('Eliminated', 0x0, 0x0, '#F00', 'Arial Black', _0x3382aa, '', 0x1, 'left');
                if (_0x5dd7b3) {
                    _0x9bd16a['elim']['text'] = 'Knocked';
                    _0x9bd16a['elim']['fillStyle'] = _0x1f966b;
                }
                _0x9bd16a['name2'] = new _0x1e6a3f['text'](_0x535b94, 0x0, 0x0, '#DDD', 'Arial Black', _0x3382aa, '', 0x1, 'left');
                _0x9bd16a['parent']['add'](_0x9bd16a['name1']);
                _0x9bd16a['parent']['add'](_0x9bd16a['elim']);
                _0x9bd16a['parent']['add'](_0x9bd16a['name2']);
                _0x9bd16a['parent']['opacity'] = 0x0;
                _0x9bd16a['timeLeft'] = 0x6;
                _0x1ccd29['push'](_0x9bd16a);
                _0xf5f4ae['add'](_0x9bd16a['parent']);
                return _0x9bd16a;
            }
            function _0x526572() {
                var _0x290f7a = 0x0;
                _0x114c06 = 0x0;
                for (var _0x4194da = 0x0; _0x4194da < _0x1ccd29['length']; _0x4194da++) {
                    var _0x487244 = _0x1ccd29[_0x4194da];
                    var _0x438fea = _0x487244['name1']['width'] + _0x18389d + _0x487244['elim']['width'] + _0x18389d + _0x487244['name2']['width'];
                    _0x487244['rectangle']['width'] = _0x438fea + _0x275aa0 * 0x2;
                    _0x487244['rectangle']['height'] = _0x3382aa + _0x275aa0 * 0x2;
                    _0x487244['name1']['position']['x'] = 0x0;
                    _0x487244['elim']['position']['x'] = _0x487244['name1']['width'] + _0x18389d;
                    _0x487244['name2']['position']['x'] = _0x487244['elim']['position']['x'] + _0x487244['elim']['width'] + _0x18389d;
                    _0x487244['rectangle']['position']['x'] = _0x438fea / 0x2;
                    _0x487244['parent']['position']['x'] = 0x0;
                    _0x487244['parent']['position']['y'] = _0x3382aa / 0x2 + _0x4194da * _0x35047d;
                    _0x487244['parent']['position']['x'] += _0x438f1a;
                    _0x487244['parent']['position']['y'] += _0x438f1a;
                    _0x487244['timeLeft'] -= _0x1e6a3f['clientDetails']['dt'] / 0x32;
                    if (_0x487244['timeLeft'] < 0x0) {
                        _0x487244['parent']['position']['y'] += _0x114c06 * _0x35047d;
                        if (_0x114c06 != 0x0) {
                            _0x487244['parent']['position']['y'] -= _0x290f7a * _0x35047d;
                        }
                        _0x487244['parent']['opacity'] = _0x487244['timeLeft'] + 0x1;
                        _0x114c06 += _0x487244['parent']['opacity'];
                        if (_0x487244['timeLeft'] <= -0x1) {
                            if (_0x487244['parent']['parent'] != null)
                                _0x487244['parent']['parent']['remove'](_0x487244['parent']);
                            var _0x112a95 = _0x487244['parent'];
                            _0x112a95['remove'](_0x487244['name1']);
                            _0x112a95['remove'](_0x487244['elim']);
                            _0x112a95['remove'](_0x487244['name2']);
                            _0x112a95['remove'](_0x487244['rectangle']);
                            _0x487244['name1']['unlink']();
                            _0x487244['elim']['unlink']();
                            _0x487244['name2']['unlink']();
                            _0x1ccd29['splice'](_0x4194da, 0x1);
                            _0x4194da--;
                            _0x114c06 = 0x0;
                            _0x290f7a -= 0x1;
                        }
                    } else if (_0x487244['parent']['opacity'] < 0x1) {
                        _0x487244['parent']['opacity'] = Math['min'](0x1, _0x487244['parent']['opacity'] + _0x1e6a3f['clientDetails']['dt'] / 0x32);
                    }
                    if (_0x487244['timeLeft'] >= 0x0) {
                        _0x487244['parent']['position']['y'] += _0x114c06 * _0x35047d;
                        if (_0x114c06 != 0x0) {
                            _0x487244['parent']['position']['y'] -= _0x290f7a * _0x35047d;
                        }
                    }
                    if (_0x487244['timeLeft'] < 0x0) {
                        _0x290f7a++;
                    }
                }
            }
            var _0x2bb197 = new _0x1e6a3f['scene']();
            _0x2bb197['opacity'] = 0x0;
            _0x2bb197['add'](new _0x1e6a3f['rectangle'](0x0, 0x0, 0x782, 0x43a, '#000', 0.3));
            var _0x2fb376 = new _0x1e6a3f['text']('You placed #100', 0x0, -0x438 / 0x4 - 0x32, '#FFF', 'Arial Black', 0x32, '', 0x1);
            _0x122eb4(_0x2fb376);
            _0x2fb376['belowObjects'][0x0]['lineWidth'] = 0x8;
            var _0x370bad = new _0x1e6a3f['image'](_0x282ecd('victory'), _0x2fb376['position']['x'], _0x2fb376['position']['y'], 0x258, 0xc8, 0x0);
            _0x370bad['size'] = 0.9;
            _0x2bb197['add'](_0x2fb376);
            _0x2bb197['add'](_0x370bad);
            var _0x529bb2 = new _0x1e6a3f['text']('Eliminated', 0x0, -0x438 / 0x4 + 0x46, '#F00', 'Arial Black', 0x1e, '', 0x0, 'left');
            var _0x2a84a3 = new _0x1e6a3f['text']('Slug', 0x0, -0x438 / 0x4 + 0x46, '#FFF', 'Arial Black', 0x1e, '', 0x0, 'left');
            var _0x2dfcf5 = 0x1e;
            var _0x308420 = new _0x1e6a3f['rectangle'](0x0, -0x438 / 0x4 + 0x46, 0x1, 0x1e + _0x2dfcf5, '#000', 0.3);
            _0x529bb2['opacity'] = 0x0;
            _0x2a84a3['opacity'] = 0x0;
            _0x308420['opacity'] = 0x0;
            _0x2bb197['add'](_0x308420);
            _0x2bb197['add'](_0x529bb2);
            _0x2bb197['add'](_0x2a84a3);
            function _0x22b03e() {
                var _0x5157d8 = 0x14;
                var _0x1e7dc7 = _0x529bb2['width'] + _0x2a84a3['width'] + _0x5157d8;
                _0x529bb2['position']['x'] = -_0x1e7dc7 / 0x2;
                _0x2a84a3['position']['x'] = _0x529bb2['position']['x'] + _0x529bb2['width'] + _0x5157d8;
                _0x308420['width'] = _0x1e7dc7 + _0x2dfcf5;
            }
            var _0x10b221 = new _0x1e6a3f['roundRectangle'](0x0, 0x438 / 0x4, 0x1f4 - 0x6, 0x46, 0x46 / 0x2, '#4169E1', 0.4);
            _0x10b221['strokeStyle'] = '#5179F1';
            _0x10b221['lineWidth'] = 0x6;
            var _0x4c90cb = new _0x1e6a3f['text']('Return to Lobby', _0x10b221['position']['x'], _0x10b221['position']['y'], '#FFF', _0x556614, 0x1e, '');
            window['lobbyText'] = _0x4c90cb;
            var _0x77d5f4 = new _0x1e6a3f['strokeText']('Return to Lobby', 0x0, -0x2, '#5179F1', _0x556614, 0x1e, '');
            _0x77d5f4['lineWidth'] = 0x9;
            _0x4c90cb['addBelow'](_0x77d5f4);
            _0x2bb197['add'](_0x10b221);
            _0x2bb197['add'](_0x4c90cb);
            var _0x23463c = new _0x1e6a3f['object']();
            var _0x3b6f44 = 0xaa;
            var _0x376a6e = 0x5a;
            var _0xe49276 = 0x1e;
            var _0x37b410 = 0x3e;
            var _0x11c7a9 = '#999';
            var _0x1cf4a6 = '#AAA';
            _0x1cf4a6 = '#CCC';
            var _0x3d8d2e = new _0x1e6a3f['text']('Place', -_0x3b6f44, -_0x376a6e, _0x11c7a9, 'Arial Black', _0xe49276, '', 0x1);
            _0x122eb4(_0x3d8d2e);
            _0x23463c['add'](_0x3d8d2e);
            var _0x30cce0 = new _0x1e6a3f['text']('Eliminations', _0x3b6f44, -_0x376a6e, _0x11c7a9, 'Arial Black', _0xe49276, '', 0x1);
            _0x122eb4(_0x30cce0);
            _0x23463c['add'](_0x30cce0);
            var _0x3d71e3 = new _0x1e6a3f['text']('Damage to', -_0x3b6f44, _0x376a6e - 0xe, _0x11c7a9, 'Arial Black', 0x16, '', 0x1);
            _0x122eb4(_0x3d71e3);
            _0x23463c['add'](_0x3d71e3);
            var _0x386f57 = new _0x1e6a3f['text']('Enemies', -_0x3b6f44, _0x376a6e + 0xe, _0x11c7a9, 'Arial Black', 0x16, '', 0x1);
            _0x122eb4(_0x386f57);
            _0x23463c['add'](_0x386f57);
            var _0x4c8e76 = new _0x1e6a3f['text']('Walls Built', _0x3b6f44, _0x376a6e, _0x11c7a9, 'Arial Black', _0xe49276, '', 0x1);
            _0x122eb4(_0x4c8e76);
            _0x23463c['add'](_0x4c8e76);
            var _0x59ae66 = new _0x1e6a3f['text']('#100', -_0x3b6f44, -_0x376a6e + _0x37b410, _0x1cf4a6, 'Arial Black', _0xe49276 + 0xf, '', 0x1);
            _0x122eb4(_0x59ae66);
            _0x23463c['add'](_0x59ae66);
            var _0x3f9a94 = new _0x1e6a3f['text']('0', _0x3b6f44, -_0x376a6e + _0x37b410, _0x1cf4a6, 'Arial Black', _0xe49276 + 0xf, '', 0x1);
            _0x122eb4(_0x3f9a94);
            _0x23463c['add'](_0x3f9a94);
            var _0xc63a51 = new _0x1e6a3f['text']('0', -_0x3b6f44, _0x376a6e + _0x37b410, _0x1cf4a6, 'Arial Black', _0xe49276 + 0xf, '', 0x1);
            _0x122eb4(_0xc63a51);
            _0x23463c['add'](_0xc63a51);
            var _0x20eaa3 = new _0x1e6a3f['text']('0', _0x3b6f44, _0x376a6e + _0x37b410, _0x1cf4a6, 'Arial Black', _0xe49276 + 0xf, '', 0x1);
            _0x122eb4(_0x20eaa3);
            _0x23463c['add'](_0x20eaa3);
            _0x23463c['addBelow'](new _0x1e6a3f['rectangle'](0x0, _0x37b410 * 0.6, 3.6 * _0x3b6f44, 3.8 * _0x376a6e, '#000', 0.4));
            _0x23463c['position']['y'] = -0x14;
            _0x23463c['size'] = 0.9;
            _0x2bb197['add'](_0x23463c);
            var _0x32c920 = 0x1;
            var _0x5c2ba4 = new _0x1e6a3f['object']();
            _0x5c2ba4['opacity'] = 0x1;
            var _0x28c545 = 0x0;
            var _0x1754d3 = 0x14;
            var _0x273e98 = 0x23;
            var _0xc05c25 = new _0x1e6a3f['text']('Eliminated', 0x0, 0x0, '#C11', 'Arial Black', _0x273e98, '', 0x1, 'center');
            var _0x5e09a5 = new _0x1e6a3f['strokeText']('Eliminated', 0x0, 0x0, '#000', 'Arial Black', _0x273e98, '', 0x1, 'center');
            _0x5e09a5['lineWidth'] = 0x5;
            _0xc05c25['addBelow'](_0x5e09a5);
            var _0x12809f = new _0x1e6a3f['text']('GS25', 0x0, 0x0, '#FFF', 'Arial Black', _0x273e98, '', 0x1, 'center');
            _0x5e09a5 = new _0x1e6a3f['strokeText']('GS25', 0x0, 0x0, '#000', 'Arial Black', _0x273e98, '', 0x1, 'center');
            _0x5e09a5['lineWidth'] = 0x5;
            _0x12809f['addBelow'](_0x5e09a5);
            var _0x451755 = document['createElement']('canvas');
            var _0x47279c = new _0x1e6a3f['image'](_0x451755, 0x0, -0x438 / 0x4, 0x0, _0x273e98 + 0xf, 0x0);
            var _0x107bf5 = new _0x1e6a3f['rectangle'](0x0, 0x0, 0x0, 0x0, '#000');
            _0x107bf5['opacity'] = 0.3;
            _0x5c2ba4['addBelow'](_0x107bf5);
            function _0x1ccdc6() {
                var _0x379599 = _0xc05c25['width'] + _0x12809f['width'] + _0x1754d3;
                _0xc05c25['position']['x'] = -_0x379599 / 0x2 + _0xc05c25['width'] / 0x2;
                _0x12809f['position']['x'] = _0x379599 / 0x2 - _0x12809f['width'] / 0x2;
                _0x12809f['belowObjects'][0x0]['text'] = _0x12809f['text'];
                _0x451755['width'] = _0x379599 + 0x19;
                _0x451755['height'] = _0x273e98 + 0x19;
                _0x107bf5['width'] = _0x451755['width'];
                _0x107bf5['height'] = _0x451755['height'];
                var _0x1e54bd = _0x451755['getContext']('2d');
                _0x1e54bd['globalAlpha'] = 0x1;
                _0x1e54bd['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                _0x1e54bd['translate'](_0x451755['width'] / 0x2, _0x451755['height'] / 0x2);
                _0x5c2ba4['render'](_0x1e54bd, 0x1, 0x1);
                _0x5c2ba4['size'] = 0x1;
                _0x47279c['width'] = _0x451755['width'];
                _0x47279c['height'] = _0x451755['height'];
            }
            _0x5c2ba4['add'](_0xc05c25);
            _0x5c2ba4['add'](_0x12809f);
            var _0x40a9ff = '#00BFFF';
            var _0x2c2a68 = new _0x1e6a3f['object']();
            var _0x1b750b = new _0x1e6a3f['text']('Waiting for players...', 0x0, -0x438 / 0x4, _0x40a9ff, 'Arial Black', _0x273e98, '', 0x1, 'center');
            _0x122eb4(_0x1b750b);
            _0x1b750b['opacity'] = 0x0;
            _0x2c2a68['add'](_0x1b750b);
            var _0xe628c7 = new _0x1e6a3f['rectangle'](0x0, 0x0, 0x1, 0x1, '#000');
            _0xe628c7['opacity'] = 0.3;
            _0x2c2a68['addBelow'](_0xe628c7);
            _0x3fbfae['add'](_0x2c2a68);
            var _0x323e15 = 0x2bc;
            var _0x5d6a7b = document['createElement']('canvas');
            _0x5d6a7b['width'] = _0x323e15;
            _0x5d6a7b['height'] = 0x1;
            var _0x5615d7 = _0x5d6a7b['getContext']('2d');
            var _0x2b0ac6 = _0x23f908['ctx']['createLinearGradient'](0x0, 0x0, _0x323e15, 0x0);
            _0x2b0ac6['addColorStop'](0x0, 'rgba(255, 255, 255, 0)');
            _0x2b0ac6['addColorStop'](0.5, 'rgba(255, 255, 255, 1)');
            _0x2b0ac6['addColorStop'](0x1, 'rgba(255, 255, 255, 0)');
            _0x5615d7['fillStyle'] = _0x2b0ac6;
            _0x5615d7['fillRect'](0x0, 0x0, _0x5d6a7b['width'], _0x5d6a7b['height']);
            var _0x55f112 = new _0x1e6a3f['image'](_0x5d6a7b, 0x0, 0x0, _0x323e15, 0xa, 0.25);
            var _0x559865 = new _0x1e6a3f['object']();
            var _0x1b0692 = new _0x1e6a3f['text']('100', 0x1e, -0x28, '#DDD', 'Arial Black', 0x1a, '', 0x1, 'left');
            var _0x30891d = new _0x1e6a3f['strokeText']('100', 0x0, 0x0, '#000', 'Arial Black', 0x1a, 'bold', 0x1, 'left');
            _0x30891d['lineWidth'] = 0x4;
            _0x1b0692['addBelow'](_0x30891d);
            _0x559865['add'](new _0x1e6a3f['image'](_0x282ecd('health'), 0x66, -0x28, 0x1c, 0x1c));
            _0x559865['add'](new _0x1e6a3f['rectangle'](0x113, -0x28, 0x12c, 0x14, '#000', 0.3));
            var _0x2dc41a = new _0x1e6a3f['rectangle'](0x113, -0x28, 0x12c, 0x14, '#0C0', 0.95);
            _0x559865['add'](_0x2dc41a);
            _0x559865['add'](new _0x1e6a3f['strokeRectangle'](0x113, -0x28, 0x12c, 0x14, '#000', 0x2, 0x1));
            _0x559865['add'](_0x1b0692);
            var _0x21286f = 0x23;
            var _0x12b020 = new _0x1e6a3f['text']('0', 0x1e, -0x28 - _0x21286f, '#DDD', 'Arial Black', 0x1a, '', 0x1, 'left');
            var _0x407a6b = new _0x1e6a3f['strokeText']('100', 0x0, 0x0, '#000', 'Arial Black', 0x1a, 'bold', 0x1, 'left');
            _0x407a6b['lineWidth'] = 0x4;
            _0x12b020['addBelow'](_0x407a6b);
            _0x559865['add'](new _0x1e6a3f['image'](_0x282ecd('shield'), 0x66, -0x28 - _0x21286f, 0x1c, 0x1c));
            _0x559865['add'](new _0x1e6a3f['rectangle'](0x113, -0x28 - _0x21286f, 0x12c, 0x14, '#000', 0.3));
            var _0x3e2b48 = new _0x1e6a3f['rectangle'](0x113, -0x28 - _0x21286f, 0x12c, 0x14, _0x40a9ff, 0.95);
            _0x3e2b48['width'] = 0x0;
            _0x559865['add'](_0x3e2b48);
            _0x559865['add'](new _0x1e6a3f['strokeRectangle'](0x113, -0x28 - _0x21286f, 0x12c, 0x14, '#000', 0x2, 0x1));
            _0x559865['add'](_0x12b020);
            var _0x131318 = new _0x1e6a3f['text']('', 0x7d, -0x28 - _0x21286f * 0x2, '#FFF', 'Arial Black', 0x1a, '', 0x1, 'left');
            var _0x165bbd = new _0x1e6a3f['strokeText']('', 0x0, 0x0, '#000', 'Arial Black', 0x1a, 'bold', 0x1, 'left');
            _0x165bbd['lineWidth'] = 0x4;
            _0x131318['addBelow'](_0x165bbd);
            _0x559865['add'](_0x131318);
            var _0x4f4e44 = _0x559865;
            var _0x42a372 = [];
            for (var _0x4cd046 = 0x0; _0x4cd046 < 0x3; _0x4cd046++) {
                var _0x559865 = new _0x1e6a3f['object']();
                _0x559865['add'](new _0x1e6a3f['rectangle'](0x113, -0x28, 0x12c, 0x14, '#000', 0.3));
                var _0x44d347 = new _0x1e6a3f['rectangle'](0x113, -0x28, 0x12c, 0x14, '#0C0', 0.95);
                _0x559865['add'](_0x44d347);
                _0x559865['add'](new _0x1e6a3f['strokeRectangle'](0x113, -0x28, 0x12c, 0x14, '#000', 0x2, 0x1));
                _0x559865['health'] = _0x44d347;
                var _0x21286f = 0x23;
                _0x559865['add'](new _0x1e6a3f['rectangle'](0x113, -0x28 - _0x21286f, 0x12c, 0x14, '#000', 0.3));
                var _0xd92c2 = new _0x1e6a3f['rectangle'](0x113, -0x28 - _0x21286f, 0x12c, 0x14, _0x40a9ff, 0.95);
                _0x3e2b48['width'] = 0x0;
                _0x559865['add'](_0xd92c2);
                _0x559865['add'](new _0x1e6a3f['strokeRectangle'](0x113, -0x28 - _0x21286f, 0x12c, 0x14, '#000', 0x2, 0x1));
                _0x559865['shield'] = _0xd92c2;
                var _0x2f8f9a = new _0x1e6a3f['text']('GS25', 0x7d, -0x28 - _0x21286f * 0x2, '#FFF', 'Arial Black', 0x1a, '', 0x1, 'left');
                _0x559865['add'](_0x2f8f9a);
                _0x559865['nametag'] = _0x2f8f9a;
                _0x559865['position']['y'] = -_0x4cd046 * 0x4d - 0x78;
                _0x559865['position']['x'] = -0x37;
                _0x559865['size'] = 0.7;
                _0x559865['opacity'] = 0x0;
                _0x42a372['push'](_0x559865);
                _0x4f4e44['add'](_0x559865);
            }
            _0x559865 = _0x4f4e44;
            var _0x158c1e = ![];
            var _0x17fabd = 0x113;
            var _0x93fbd9 = -0x78 - _0x21286f;
            var _0x1ae341 = 0x20;
            var _0xa4e22e = new _0x1e6a3f['image'](_0x282ecd('empty'), _0x17fabd, _0x93fbd9, 0x28, 0x28, 0x1);
            _0x559865['add'](_0xa4e22e);
            var _0x141031 = new _0x1e6a3f['text']('0', _0x17fabd - 0x1b, _0x93fbd9, '#DDD', 'Arial Black', _0x1ae341, '', 0x1, 'right');
            var _0x1784c8 = new _0x1e6a3f['strokeText']('0', 0x2, 0x0, '#000', 'Arial Black', _0x1ae341, '', 0x1, 'right');
            _0x1784c8['lineWidth'] = 0x4;
            _0x141031['addBelow'](_0x1784c8);
            _0x559865['add'](_0x141031);
            var _0x52b9d4 = new _0x1e6a3f['text']('0', _0x17fabd + 0x1b, _0x93fbd9, '#DDD', 'Arial Black', _0x1ae341, '', 0x1, 'left');
            var _0xd9a71c = new _0x1e6a3f['strokeText']('0', 0x0, 0x0, '#000', 'Arial Black', _0x1ae341, '', 0x1, 'left');
            _0xd9a71c['lineWidth'] = 0x4;
            _0x52b9d4['addBelow'](_0xd9a71c);
            _0x559865['add'](_0x52b9d4);
            function _0x38fd45() {
                _0x17fabd = 0x113;
                _0x93fbd9 = -0x78 - _0x21286f;
                if (_0x1e6a3f['me']['team'] !== undefined && _0x1e6a3f['me']['team']['length'] > 0x0) {
                    _0x17fabd = 0x15e;
                    _0x93fbd9 = -0x6e - _0x21286f;
                }
                _0xa4e22e['position']['x'] = _0x17fabd;
                _0x141031['position']['x'] = _0x17fabd - 0x1b;
                _0x52b9d4['position']['x'] = _0x17fabd + 0x1b;
                _0xa4e22e['position']['y'] = _0x93fbd9;
                _0x141031['position']['y'] = _0x93fbd9;
                _0x52b9d4['position']['y'] = _0x93fbd9;
            }
            var _0xda8531 = new _0x1e6a3f['object']();
            var _0x28e179 = 0xfa;
            var _0x6f2310 = new _0x1e6a3f['image'](_0x282ecd('empty'), -0x96, 0x96, _0x28e179, _0x28e179);
            var _0x3099a8 = new _0x1e6a3f['rectangle'](0x0, 0x0, _0x28e179, _0x28e179, '#000', 0.5);
            _0x6f2310['addBelow'](_0x3099a8);
            //! sussy
            _0x6f2310['addBelow'](new _0x1e6a3f['strokeRectangle'](0x0, 0x0, _0x28e179 + 0x2, _0x28e179 + 0x2, '#000', 0x4, 0.5));
            _0xda8531['add'](_0x6f2310);
            var _0xeeae32 = '#FFF';
            if (_0x2f153f) {
                _0xeeae32 = '#222';
            }
            var _0x3618de = 0x20;
            var _0x36654a = new _0x1e6a3f['object']();
            _0x36654a['position'] = new _0x1e6a3f['Vector2'](-0x140, 0x32);
            _0x36654a['add'](new _0x1e6a3f['image'](_0x282ecd('spectate'), 0x0, 0x0, 0x2d, 0x2d));
            var _0x31f51b = new _0x1e6a3f['text']('0', -0x1e, 0x0, _0xeeae32, 'Arial Black', _0x3618de - 0x6);
            _0x31f51b['align'] = 'right';
            _0x36654a['add'](_0x31f51b);
            _0xda8531['add'](_0x36654a);
            _0x36654a['opacity'] = 0x0;
            var _0x3e303f = new _0x1e6a3f['image'](_0x282ecd('waitingIcon'), -_0x28e179 / 0x2 + _0x3618de / 0x2 - 0x96, _0x28e179 / 0x2 + _0x3618de / 0x2 + 0x96 + 0xa, _0x3618de, _0x3618de);
            _0xda8531['add'](_0x3e303f);

            var _0x4a27d9 = new _0x1e6a3f['text']('0:00', _0x3618de / 0x2 + 0x5, 0x0, _0xeeae32, 'Arial Black', _0x3618de - 0x6);
            _0x4a27d9['align'] = 'left';
            _0x3e303f['add'](_0x4a27d9);

            var _0x49e998 = new _0x1e6a3f['image'](_0x282ecd('playersIcon'), -_0x28e179 / 0x2 + _0x3618de / 0x2 + 0x6b - 0x96, _0x28e179 / 0x2 + _0x3618de / 0x2 + 0x96 + 0xa, _0x3618de, _0x3618de);
            _0xda8531['add'](_0x49e998);
            var _0x4918d8 = new _0x1e6a3f['text']('50', _0x3618de / 0x2 + 0x5, 0x0, _0xeeae32, 'Arial Black', _0x3618de - 0x6);
            _0x4918d8['align'] = 'left';
            _0x49e998['add'](_0x4918d8);
            var _0x2173be = new _0x1e6a3f['text']('50', _0x3618de / 0x2 + 0x5, 0x19, '#EEEE00', 'Arial Black', _0x3618de - 0x6);
            _0x2173be['align'] = 'left';
            _0x2173be['opacity'] = 0x0;
            _0x49e998['add'](_0x2173be);
            var _0x3e88d5 = new _0x1e6a3f['image'](_0x282ecd('killsIcon'), -_0x28e179 / 0x2 + _0x3618de / 0x2 + 0xbe - 0x96, _0x28e179 / 0x2 + _0x3618de / 0x2 + 0x96 + 0xa, _0x3618de, _0x3618de);
            _0xda8531['add'](_0x3e88d5);
            var _0x2db1b4 = new _0x1e6a3f['text']('0', _0x3618de / 0x2 + 0x5, 0x0, _0xeeae32, 'Arial Black', _0x3618de - 0x6);
            _0x2db1b4['align'] = 'left';
            _0x3e88d5['add'](_0x2db1b4);
            window.fpsmeter = new _0x1e6a3f['text']('FPS: 0', _0x3618de / 0x2 - 84, 38, _0xeeae32, 'Arial Black', _0x3618de - 0x6);
            fpsmeter['align'] = 'left';
            _0x3e88d5['add'](fpsmeter);
            var _0x1e0bb8 = document['createElement']('canvas');
            var _0x5eb5f3 = _0x1e0bb8['getContext']('2d');
            _0x1e0bb8['width'] = _0x1e0bb8['height'] = 0x1f4;
            function _0x2d6b7f() {
                var _0x374764 = 0x1f4;
                var _0x1b765e = _0x5eb5f3;
                _0x1b765e['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                var _0xdc28e5 = -(_0x1e6a3f['me']['visual']['position']['x'] * 0x708 / _0x1820e3 + 0x384) + _0x374764 / 0x2;
                var _0x7111b6 = -(_0x1e6a3f['me']['visual']['position']['y'] * 0x708 / _0x1820e3 + 0x384) + _0x374764 / 0x2;
                _0xdc28e5 = Math['min'](_0xdc28e5, 0x0);
                _0x7111b6 = Math['min'](_0x7111b6, 0x0);
                _0xdc28e5 = Math['max'](_0xdc28e5, -0x708 + _0x374764);
                _0x7111b6 = Math['max'](_0x7111b6, -0x708 + _0x374764);
                _0x1b765e['drawImage'](_0x1cdc93, _0xdc28e5, _0x7111b6);
                _0x1b765e['drawImage'](_0x4ffd25, _0xdc28e5, _0x7111b6);
            }
            _0x6f2310['renderSpecific'] = function (_0x5ba3ee, _0x180438) {
                var _0x3edd10 = 0x1f4;
                _0x5ba3ee['drawImage'](_0x1cdc93, Math['min'](Math['max'](_0x1e6a3f['me']['visual']['position']['x'] * 0x708 / _0x1820e3 + 0x384 - _0x3edd10 / 0x2, 0x0), 0x708 - _0x3edd10), Math['min'](Math['max'](_0x1e6a3f['me']['visual']['position']['y'] * 0x708 / _0x1820e3 + 0x384 - _0x3edd10 / 0x2, 0x0), 0x708 - _0x3edd10), _0x3edd10, _0x3edd10, -this['width'] / 0x2 / _0x180438, -this['height'] / 0x2 / _0x180438, this['width'] / _0x180438, this['height'] / _0x180438);
                _0x5ba3ee['drawImage'](_0x4ffd25, Math['min'](Math['max'](_0x1e6a3f['me']['visual']['position']['x'] * 0x708 / _0x1820e3 + 0x384 - _0x3edd10 / 0x2, 0x0), 0x708 - _0x3edd10), Math['min'](Math['max'](_0x1e6a3f['me']['visual']['position']['y'] * 0x708 / _0x1820e3 + 0x384 - _0x3edd10 / 0x2, 0x0), 0x708 - _0x3edd10), _0x3edd10, _0x3edd10, -this['width'] / 0x2 / _0x180438, -this['height'] / 0x2 / _0x180438, this['width'] / _0x180438, this['height'] / _0x180438);
            };
            _0x6f2310['renderSpecific'] = function (_0x24fc42, _0x569271) {
                var _0x1eafb1 = 0x1 / _0x569271;
                try {
                    if (this['image']['tagName'] == 'IMG' && this['image']['src']['indexOf']('.png') == -0x1) {
                        throw 'no';
                    }
                    _0x2d6b7f();
                    this['width'] = this['height'] = 0x1f4 / 0x2;
                    _0x24fc42['drawImage'](_0x1e0bb8, -this['width'] * 0.5 * _0x1eafb1, -this['height'] * 0.5 * _0x1eafb1, this['width'] * _0x1eafb1, this['height'] * _0x1eafb1);
                } catch (_0x2f77d0) {
                    _0x24fc42['fillStyle'] = '#000';
                    _0x24fc42['globalAlpha'] = 0x1;
                    _0x24fc42['fillRect'](-this['width'] * 0.5 * _0x1eafb1, -this['height'] * 0.5 * _0x1eafb1, this['width'] * _0x1eafb1, this['height'] * _0x1eafb1);
                }
            };
            var _0x58157d = new _0x1e6a3f['object']();
            function _0x13086c(_0x32db56, _0x2a3b06, _0x478095) {
                var _0xdf59ae = 0x78;
                var _0xf3cc3a = _0xdf59ae - 0x12;
                var _0xd79d93 = 0x32;
                if (_0x32db56 !== undefined) {
                    _0xdf59ae = _0x32db56;
                }
                if (_0x2a3b06 !== undefined) {
                    _0xf3cc3a = _0xdf59ae - _0x2a3b06;
                }
                if (window['innerWidth'] > 0x3e8) {
                    var _0x5ceb57 = 0.65;
                    _0xdf59ae *= _0x5ceb57;
                    _0xd79d93 *= _0x5ceb57;
                    _0xf3cc3a *= _0x5ceb57;
                }
                var _0x48b384 = new _0x1e6a3f['object']();
                var _0xe827c7 = new _0x1e6a3f['circle'](0x0, 0x0, _0xdf59ae, '#ffffff', 0.3);
                var _0x26c0c8 = _0x1e6a3f['prerender'](_0xe827c7, _0xdf59ae * 0x2, _0xdf59ae * 0x2, 0x0, 0x2);
                _0xe827c7['color'] = '#ff0707';
                _0xe827c7['opacity'] = 0.4;
                var _0x3c1992 = _0x1e6a3f['prerender'](_0xe827c7, _0xdf59ae * 0x2, _0xdf59ae * 0x2, 0x0, 0x2);
                _0xe827c7 = new _0x1e6a3f['object']();
                _0xe827c7['add'](_0x26c0c8);
                _0xe827c7['add'](_0x3c1992);
                _0x3c1992['opacity'] = 0x0;
                _0xe827c7['offbg'] = _0x26c0c8;
                _0xe827c7['onbg'] = _0x3c1992;
                _0x48b384['add'](_0xe827c7);
                var _0xe50f7f = new _0x1e6a3f['circle'](0x0, 0x0, _0xf3cc3a, '#ffffff', 0.25);
                _0xe50f7f = _0x1e6a3f['prerender'](_0xe50f7f, _0xf3cc3a * 0x2, _0xf3cc3a * 0x2, 0x0);
                _0x48b384['add'](_0xe50f7f);
                var _0x33b8c0 = new _0x1e6a3f['circle'](0x0, 0x0, _0xd79d93, '#ffffff');
                _0xe50f7f = _0x1e6a3f['prerender'](_0xe50f7f, _0xd79d93 * 0x2, _0xd79d93 * 0x2, 0x0);
                _0x48b384['add'](_0x33b8c0);
                _0x48b384['opacity'] = 0.5;
                if (_0x478095 !== undefined) {
                    _0x48b384['position']['x'] = _0x478095['x'];
                    _0x48b384['position']['y'] = _0x478095['y'];
                }
                return {
                    'isActive': ![],
                    'angle': 0x0,
                    'isTriggering': ![],
                    'wasTriggering': ![],
                    'radius': _0xdf59ae,
                    'triggerRadius': _0xf3cc3a,
                    'objects': {
                        'root': _0x48b384,
                        'bg': _0xe827c7,
                        'fg': _0xe50f7f,
                        'thumb': _0x33b8c0
                    },
                    'fading': !![]
                };
            }
            function _0xbb2809(_0x30b809, _0x2d7a61) {
                if (_0x2d7a61 == null) {
                    _0x30b809['isActive'] = ![];
                    _0x30b809['hasMoved'] = ![];
                    _0x30b809['isTriggering'] = ![];
                    if (!_0x30b809['fading']) {
                        var _0x3c0594 = _0x30b809['objects']['root'];
                        _0x37d938(_0x3c0594, 'opacity', _0x3c0594['opacity'], 0x0, 0x190, 0x0, _0x350bea['easeOutExpo']);
                        _0x30b809['fading'] = !![];
                    }
                    return;
                }
                var _0x4a96aa = _0x2d7a61['tX'] - _0x2d7a61['tStartX'];
                var _0x445b1e = _0x2d7a61['tY'] - _0x2d7a61['tStartY'];
                var _0x4f49b0 = _0x30b809['angle'];
                var _0xefa77d = _0x4a96aa * _0x4a96aa + _0x445b1e * _0x445b1e;
                var _0x35ec18 = _0xefa77d > 0x4;
                if (_0x35ec18) {
                    _0x4f49b0 = Math['atan2'](_0x445b1e, _0x4a96aa);
                }
                if (_0xefa77d > _0x30b809['radius'] * _0x30b809['radius']) {
                    _0xefa77d = _0x30b809['radius'] * _0x30b809['radius'];
                    _0x30b809['objects']['thumb']['position']['x'] = Math['cos'](_0x4f49b0) * _0x30b809['radius'];
                    _0x30b809['objects']['thumb']['position']['y'] = Math['sin'](_0x4f49b0) * _0x30b809['radius'];
                } else {
                    _0x30b809['objects']['thumb']['position']['x'] = _0x4a96aa;
                    _0x30b809['objects']['thumb']['position']['y'] = _0x445b1e;
                }
                _0xefa77d = Math['min'](_0xefa77d, _0x30b809['radius'] * _0x30b809['radius']);
                var _0x36c7e0 = _0xefa77d > _0x30b809['triggerRadius'] * _0x30b809['triggerRadius'];
                if (_0x30b809['fading']) {
                    var _0x3c0594 = _0x30b809['objects']['root'];
                    _0x37d938(_0x3c0594, 'opacity', _0x3c0594['opacity'], 0x1, 0x12c, 0x0, _0x350bea['easeOutExpo']);
                    _0x3c56c1(_0x30b809['objects']['bg']['onbg'], 'opacity');
                    _0x30b809['objects']['bg']['onbg']['opacity'] = 0x0;
                    _0x3c56c1(_0x30b809['objects']['bg']['offbg'], 'opacity');
                    _0x30b809['objects']['bg']['offbg']['opacity'] = 0x1;
                    _0x30b809['fading'] = ![];
                }
                _0x30b809['objects']['root']['position']['x'] = _0x2d7a61['tStartX'];
                _0x30b809['objects']['root']['position']['y'] = _0x2d7a61['tStartY'];
                if (_0x30b809['isTriggering'] != _0x36c7e0) {
                    var _0x3c0594 = _0x30b809['objects']['bg']['onbg'];
                    _0x37d938(_0x3c0594, 'opacity', _0x3c0594['opacity'], _0x36c7e0, 0xc8, 0x0, _0x350bea['easeOutExpo']);
                    _0x3c0594 = _0x30b809['objects']['bg']['offbg'];
                    _0x37d938(_0x3c0594, 'opacity', _0x3c0594['opacity'], !_0x36c7e0, 0xc8, 0x0, _0x350bea['easeOutExpo']);
                }
                _0x30b809['isActive'] = !![];
                _0x30b809['hasMoved'] = _0x35ec18;
                _0x30b809['angle'] = _0x4f49b0;
                _0x30b809['isTriggering'] = _0x36c7e0;
            }
            var _0x2e06e5 = _0x13086c(0x78, 0x12, new _0x1e6a3f['Vector2'](-0x1f4, 0x78));
            _0x58157d['add'](_0x2e06e5['objects']['root']);
            var _0x2b4ce5 = _0x13086c(0x8c, 0x17, new _0x1e6a3f['Vector2'](0x244, 0x78));
            _0x58157d['add'](_0x2b4ce5['objects']['root']);
            var _0x220d98 = [];
            function _0x55835b(_0x1ba4f9, _0x3dd152, _0x182667, _0x463f14, _0x4f81b1) {
                var _0x79b0c5 = 'rgba(0, 0, 0, 0.3)';
                var _0x525ba8 = new _0x1e6a3f['circle'](0x0, 0x0, _0x182667, _0x79b0c5);
                if (window['innerWidth'] > 0x3e8) {
                    _0x525ba8['radius'] *= 0.85;
                }
                var _0x364212 = _0x1e6a3f['prerender'](_0x525ba8, _0x182667 * 0x2, _0x182667 * 0x2, 0x0);
                _0x525ba8['color'] = '#77F';
                _0x525ba8['opacity'] = 0.65;
                var _0x3bda93 = _0x1e6a3f['prerender'](_0x525ba8, _0x182667 * 0x2, _0x182667 * 0x2, 0x0);
                _0x3bda93['opacity'] = 0x0;
                _0x525ba8 = new _0x1e6a3f['object']();
                _0x525ba8['add'](_0x364212);
                _0x525ba8['add'](_0x3bda93);
                _0x525ba8['touchActive'] = ![];
                _0x182667 *= 1.5;
                _0x525ba8['enabled'] = !![];
                if (_0x463f14 == undefined) {
                    var _0x34668b = new _0x1e6a3f['text'](_0x1ba4f9, 0x0, 0x0, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center');
                    if (window['innerWidth'] > 0x3e8) {
                        _0x34668b['size'] *= 0.85;
                    }
                    _0x525ba8['add'](_0x34668b);
                } else {
                    _0x525ba8['add'](new _0x1e6a3f['image'](_0x463f14, 0x0, 0x0, _0x4f81b1 || 0x55, _0x4f81b1 || 0x55, 0.93));
                    if (window['innerWidth'] > 0x3e8) {
                        _0x525ba8['objects'][_0x525ba8['objects']['length'] - 0x1]['size'] = 0.85;
                    }
                }
                _0x525ba8['checkTouch'] = function () {
                    if (_0x525ba8['visible'] && _0x525ba8['enabled']) {
                        var _0xabb42 = new _0x1e6a3f['Vector2']();
                        for (var _0x525113 of _0x13c421['touches']) {
                            var _0x1c6e39 = _0x525ba8['absolutePosition'](_0xabb42);
                            var _0xdad423 = _0x525113['tStartX'] - _0x1c6e39['x'];
                            var _0x5c0e81 = _0x525113['tStartY'] - _0x1c6e39['y'];
                            var _0x1e1c4a = _0xdad423 * _0xdad423 + _0x5c0e81 * _0x5c0e81;
                            var _0x418172 = ![];
                            for (var _0x370217 = 0x0; _0x370217 < _0x220d98['length']; _0x370217++) {
                                if (_0x220d98[_0x370217] == _0x525ba8) {
                                    continue;
                                }
                                _0x1c6e39 = _0x220d98[_0x370217]['absolutePosition'](_0xabb42);
                                _0xdad423 = _0x525113['tStartX'] - _0x1c6e39['x'];
                                _0x5c0e81 = _0x525113['tStartY'] - _0x1c6e39['y'];
                                if (_0xdad423 * _0xdad423 + _0x5c0e81 * _0x5c0e81 < _0x1e1c4a) {
                                    _0x418172 = !![];
                                    break;
                                }
                            }
                            if (_0x1e1c4a <= _0x182667 * _0x182667 && !_0x418172) {
                                if (!_0x525ba8['touchActive']) {
                                    if (gameWrapper['enabled'])
                                        gameWrapper['hapticFeedback']('light');
                                    _0x3dd152();
                                    _0x525ba8['touchActive'] = !![];
                                    if (_0x525ba8['opacity'] == 0x1) {
                                        _0x3bda93['opacityf'] = 0x1;
                                        _0x364212['opacityf'] = 0x0;
                                        _0x37d938(_0x3bda93, 'opacity', _0x3bda93['opacity'], 0x1, 0x50, 0x0, _0x350bea['easeOutExpo']);
                                        _0x37d938(_0x364212, 'opacity', _0x364212['opacity'], 0x0, 0x50, 0x0, _0x350bea['easeOutExpo']);
                                        _0x37d938(_0x525ba8, 'size', _0x525ba8['size'], 0.85, 0x50, 0x0, _0x350bea['easeOutExpo']);
                                    } else {
                                        _0x3bda93['opacityf'] = 0x0;
                                        _0x364212['opacityf'] = 0x1;
                                        _0x37d938(_0x3bda93, 'opacity', _0x3bda93['opacity'], 0x0, 0x190, 0x0, _0x350bea['easeOutExpo']);
                                        _0x37d938(_0x364212, 'opacity', _0x364212['opacity'], 0x1, 0x190, 0x0, _0x350bea['easeOutExpo']);
                                        _0x37d938(_0x525ba8, 'size', _0x525ba8['size'], 0x1, 0x50, 0x0, _0x350bea['easeOutExpo']);
                                    }
                                }
                                return !![];
                            }
                        }
                    }
                    _0x525ba8['touchActive'] = ![];
                    if (_0x364212['opacityf'] != 0x1) {
                        _0x3bda93['opacityf'] = 0x0;
                        _0x364212['opacityf'] = 0x1;
                        _0x37d938(_0x3bda93, 'opacity', _0x3bda93['opacity'], 0x0, 0x190, 0x0, _0x350bea['easeOutExpo']);
                        _0x37d938(_0x364212, 'opacity', _0x364212['opacity'], 0x1, 0x190, 0x0, _0x350bea['easeOutExpo']);
                        _0x37d938(_0x525ba8, 'size', _0x525ba8['size'], 0x1, 0x50, 0x0, _0x350bea['easeOutExpo']);
                    }
                    if (_0x525ba8 == _0x4e6fb3) {
                        if (_0x339df1['space']) {
                            _0x339df1['space'] = ![];
                            _0x339df1['changedKeys']['push']('space');
                            _0x339df1['changed'] = !![];
                        }
                    }
                    return ![];
                };
                _0x220d98['push'](_0x525ba8);
                return _0x525ba8;
            }
            var _0x4ac153 = 0x50;
            var _0x3c580a = _0x4ac153 * 2.4;
            var _0x1ec0f5 = new _0x1e6a3f['object']();
            var _0x1f1958 = _0x55835b('R', function () {
                _0x1e6a3f['currentPackets']['push']({
                    'type': 'reload'
                });
            }, _0x4ac153, _0x282ecd('mobilereload'));
            var _0x5ae0de = _0x55835b('P', function () {
                _0x1e6a3f['currentPackets']['push']({
                    'type': 'pickup'
                });
            }, _0x4ac153, _0x282ecd('mobilepickup'));
            var _0x4e6fb3 = _0x55835b('J', function () {
                if (_0x339df1['space']) {
                    return;
                }
                _0x339df1['space'] = !![];
                _0x339df1['changedKeys']['push']('space');
                _0x339df1['changed'] = !![];
            }, _0x4ac153, _0x282ecd('mobilejump'), 0x5f);
            var _0x94952b = 0x1a;
            var _0x5b0f80 = 0x50;
            var _0x30b239 = new _0x1e6a3f['rectangle'](0x0, 0x0, _0x94952b, _0x5b0f80, '#FFFFFF');
            _0x30b239['add'](new _0x1e6a3f['rectangle'](0x0, 0x0, _0x5b0f80, _0x94952b, '#FFFFFF'));
            _0x30b239 = _0x1e6a3f['prerender'](_0x30b239, 0x80, 0x80)['image'];
            var _0x36dd9b = _0x55835b('H', function () { }, _0x4ac153 * 0.85, _0x30b239, 0x5f * 0.89);
            _0x36dd9b['enabled'] = ![];
            _0x36dd9b['opacity'] = 0x0;
            _0x36dd9b['position']['x'] = -_0x4ac153 * 5.7 - 0x1e;
            _0x36dd9b['position']['y'] += 0x3c;
            _0x1f1958['position']['x'] = _0x4e6fb3['position']['x'] = _0x5ae0de['position']['x'] = -_0x4ac153 - 0x1e;
            _0x4e6fb3['position']['x'] -= _0x3c580a / 0x2;
            _0x5ae0de['position']['x'] -= _0x3c580a;
            _0x4e6fb3['position']['y'] = -_0x4ac153 * 1.9;
            var _0x20a456 = -0x78;
            _0x4e6fb3['position']['y'] += _0x20a456;
            _0x1f1958['position']['y'] += _0x20a456;
            _0x5ae0de['position']['y'] += _0x20a456;
            _0x36dd9b['position']['y'] += _0x20a456;
            [_0x1f1958, _0x5ae0de, _0x4e6fb3, _0x36dd9b]['map'](_0x3fe8db => _0x1ec0f5['add'](_0x3fe8db));
            var _0x174e9d = new _0x1e6a3f['object']();
            var _0x2fba54 = [];
            var _0x59bb45 = 0x64;
            var _0x9a4f65 = 0x0;
            var _0x5886d5 = new _0x1e6a3f['strokeRectangle'](-0x5 * (_0x59bb45 + 0xa) - _0x59bb45, -_0x59bb45, _0x59bb45 + 0x5, _0x59bb45 + 0x5, '#FFF', 0x5, 0.6);
            var _0x575d9a = {
                'x': 0x0,
                'y': 0x0
            };
            var _0x375764 = -0x1;
            function _0x59478a(_0x3aad74 = ![], _0x1cd68a = ![]) {
                for (var _0x2039af = _0x3aad74 ? 0x0 : 0x1; _0x2039af < _0x2fba54['length']; _0x2039af++) {
                    var _0x6320e4 = new _0x1e6a3f['rectangle'](_0x174e9d['position']['x'] + _0x2fba54[_0x2039af]['parent']['position']['x'] * _0x174e9d['size'], _0x174e9d['position']['y'] + _0x2fba54[_0x2039af]['parent']['position']['y'] * _0x174e9d['size'], (_0x59bb45 + 0xa) * _0x174e9d['size'], (_0x59bb45 + 0xa) * _0x174e9d['size']);
                    if (_0xf5fb22['isCollidingWithRectangle'](_0x6320e4, _0x1cd68a)) {
                        return _0x2039af;
                    }
                }
                return -0x1;
            }
            function _0x41f5ba() {
                for (var _0x202346 = 0x0; _0x202346 < _0x1a4a1f['length']; _0x202346++) {
                    var _0x12f0e1 = new _0x1e6a3f['rectangle'](_0x174e9d['position']['x'] + _0x1a4a1f[_0x202346]['position']['x'] * _0x174e9d['size'], _0x174e9d['position']['y'] + _0x1a4a1f[_0x202346]['position']['y'] * _0x174e9d['size'], _0x1a4a1f[_0x202346]['width'] * _0x174e9d['size'], _0x1a4a1f[_0x202346]['height'] * _0x174e9d['size']);
                    if (_0xf5fb22['isCollidingWithRectangle'](_0x12f0e1)) {
                        _0x1a4a1f[_0x202346]['color'] = '#77F';
                        return _0x202346;
                    }
                }
                return -0x1;
            }
            function _0x59cfa8() {
                for (var _0x48d106 = 0x0; _0x48d106 < _0x281050['length']; _0x48d106++) {
                    _0x281050[_0x48d106]['color'] = '#000';
                    _0x281050[_0x48d106]['opacity'] = 0.3;
                }
                for (var _0x48d106 = 0x0; _0x48d106 < _0x281050['length']; _0x48d106++) {
                    var _0x4a359a = new _0x1e6a3f['rectangle'](_0x174e9d['position']['x'] + _0x281050[_0x48d106]['position']['x'] * _0x174e9d['size'], _0x174e9d['position']['y'] + _0x281050[_0x48d106]['position']['y'] * _0x174e9d['size'], _0x281050[_0x48d106]['width'] * _0x174e9d['size'], _0x281050[_0x48d106]['height'] * _0x174e9d['size']);
                    if (_0xf5fb22['isCollidingWithRectangle'](_0x4a359a)) {
                        _0x281050[_0x48d106]['color'] = '#77F';
                        return _0x48d106;
                    }
                }
                return -0x1;
            }
            function _0x3297b5() {
                _0x575d9a = {
                    'x': 0x0,
                    'y': 0x0
                };
                _0x375764 = -0x1;
                for (var _0x2ad0e1 = 0x0; _0x2ad0e1 < _0x2fba54['length']; _0x2ad0e1++) {
                    _0x2fba54[_0x2ad0e1]['position']['x'] = 0x0;
                    _0x2fba54[_0x2ad0e1]['position']['y'] = 0x0;
                }
                if (!_0x5ea1e7) {
                    _0x2fba54[_0x9a4f65]['position']['y'] = -0xa;
                    _0x5886d5['position']['y'] = -_0x59bb45 - 0xa;
                }
            }
            for (var _0x4cd046 = 0x5; _0x4cd046 >= 0x0; _0x4cd046--) {
                var _0x30e854 = new _0x1e6a3f['object']();
                _0x30e854['position']['x'] = -_0x4cd046 * (_0x59bb45 + 0xa) - _0x59bb45;
                _0x30e854['position']['y'] = -_0x59bb45;
                var _0x24a521 = new _0x1e6a3f['rectangle'](0x0, 0x0, _0x59bb45, _0x59bb45, '#000', 0.2);
                _0x30e854['add'](_0x24a521);
                _0x2fba54['push'](_0x24a521);
                _0x174e9d['add'](_0x30e854);
            }
            var _0x173e45 = new _0x1e6a3f['image'](_0x282ecd('switch'), 0x0, 0x0, _0x59bb45, _0x59bb45, 0x0);
            _0x174e9d['add'](_0x173e45);
            function _0x54d0f6() {
                if (_0x3765f6 == -0x1) {
                    _0x173e45['opacity'] = 0x0;
                    return;
                }
                _0x173e45['opacity'] = 0.5;
                var _0x6e79ee = 0x5 - _0x3765f6;
                _0x173e45['position']['y'] = -_0x59bb45;
                _0x173e45['position']['x'] = -_0x6e79ee * (_0x59bb45 + 0xa) - _0x59bb45;
                _0x174e9d['remove'](_0x173e45);
                _0x174e9d['add'](_0x173e45);
            }
            var _0xa814e4 = 0x15;
            var _0x3e7437 = 0x13;
            var _0x44337e = new _0x1e6a3f['text']('Press Q to Build', -0x5 * (_0x59bb45 + 0xa) - _0x59bb45 * 1.5, -_0x59bb45 * 2.3, '#FFF', 'Arial Black', _0xa814e4, 'bold', 0x1, 'left');
            var _0x123f03 = new _0x1e6a3f['strokeText']('Press Q to Build', 0x0, 0x0, '#000', 'Arial Black', _0xa814e4, 'bold', 0x1, 'left');
            _0x123f03['lineWidth'] = 0x4;
            _0x44337e['addBelow'](_0x123f03);
            _0x174e9d['add'](_0x44337e);
            var _0x571e34 = new _0x1e6a3f['text']('Press Tab to Manage Inventory', -0x5 * (_0x59bb45 + 0xa) - _0x59bb45 * 1.5, -_0x59bb45 * 0x2, '#FFF', 'Arial Black', _0xa814e4, 'bold', 0x1, 'left');
            var _0xe539af = new _0x1e6a3f['strokeText']('Press Tab to Manage Inventory', 0x0, 0x0, '#000', 'Arial Black', _0xa814e4, 'bold', 0x1, 'left');
            _0xe539af['lineWidth'] = 0x4;
            _0x571e34['addBelow'](_0xe539af);
            _0x174e9d['add'](_0x571e34);
            var _0x1a4a1f = [];
            var _0x2140fe = 0x50;
            var _0x560d8b = [];
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x4b47c7['length']; _0x4cd046++) {
                var _0x7849d7 = new _0x1e6a3f['rectangle'](-_0x4cd046 * _0x59bb45 * 0.9 - _0x59bb45 + (_0x59bb45 - _0x2140fe) / 0x2, -_0x59bb45 * 0x2 - 0x6e / 0x2 + _0xa814e4 / 0x2, _0x2140fe, 0x6e, '#000', 0.3);
                _0x7849d7['add'](new _0x1e6a3f['image'](_0x282ecd(_0x4b47c7[0x2 - _0x4cd046]), 0x0, -0x14, 0x41, 0x41, 0x1 / 0.4));
                _0x7849d7['text'] = new _0x1e6a3f['text']('0', 0x0, 0x19, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center');
                _0x7849d7['text']['opacity'] = 0x1 / 0.3;
                _0x7849d7['add'](_0x7849d7['text']);
                var _0x21384b = new _0x1e6a3f['object']();
                _0x21384b['add'](_0x7849d7);
                _0x1a4a1f['push'](_0x7849d7);
                _0x174e9d['add'](_0x21384b);
                _0x560d8b['push'](_0x21384b);
            }
            var _0x28d401 = _0x55835b('B', function () {
                _0x1e6a3f['currentPackets']['push']({
                    'type': 'build'
                });
            }, 0x32, _0x282ecd('mobilebuild'), 0x46);
            _0x28d401['position']['x'] = -0x2bc;
            _0x28d401['position']['y'] = -_0x59bb45 * 0x2 - 0x6e / 0x2 + _0xa814e4 / 0x2;
            _0x174e9d['add'](_0x28d401);
            var _0xc370a0 = _0x55835b('I', function () {
                _0x527967();
            }, 0x32, _0x282ecd('mobilebackpack'), 0x46);
            _0xc370a0['position']['x'] = -0x2bc - 0x55;
            _0xc370a0['position']['y'] = -0x6c;
            _0x174e9d['add'](_0xc370a0);
            var _0x281050 = [];
            for (var _0x4cd046 = 0x0; _0x4cd046 < 0x4; _0x4cd046++) {
                var _0x1f36fe = -_0x59bb45 * 3.3 - 0x6e / 0x2 + _0xa814e4 / 0x2;
                var _0x7849d7 = new _0x1e6a3f['rectangle'](-_0x4cd046 * _0x59bb45 * 0.9 - _0x59bb45 + (_0x59bb45 - _0x2140fe) / 0x2, _0x1f36fe, _0x2140fe, 0x6e, '#000', 0.3);
                _0x7849d7['add'](new _0x1e6a3f['image'](_0x282ecd('stack' + (0x3 - _0x4cd046)), 0x0, -0x14, 0x41, 0x41, 0x1 / 0.4));
                _0x7849d7['text'] = new _0x1e6a3f['text']('0', 0x0, 0x19, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center');
                _0x7849d7['text']['opacity'] = 0x1 / 0.3;
                _0x7849d7['add'](_0x7849d7['text']);
                _0x281050['push'](_0x7849d7);
                _0x174e9d['add'](_0x7849d7);
            }
            var _0x811bcc = new _0x1e6a3f['object']();
            _0x811bcc['veryInitialSize'] = 0.8;
            _0x811bcc['position']['y'] = 0x438 / 0xa;
            _0x811bcc['opacity'] = 0x1;
            var _0x383a17 = 0x1e0;
            var _0x154f21 = 0x78;
            var _0x3b012a = -0x1e;
            _0x811bcc['weapon'] = new _0x1e6a3f['image'](_0x282ecd('empty'));
            _0x811bcc['stroke'] = new _0x1e6a3f['strokeRectangle'](0x0, 0x0, _0x383a17, _0x154f21, '#000', 0x8, 0x1);
            _0x811bcc['fill'] = new _0x1e6a3f['rectangle'](0x0, 0x0, _0x383a17, _0x154f21, '#000', 0.4);
            _0x811bcc['weaponName'] = new _0x1e6a3f['text']('', -0x28 + _0x3b012a, -0x14, '#FFF', 'Arial Black', 0x24, 'bold', 0x1, 'left');
            _0x811bcc['weaponNameStroke'] = new _0x1e6a3f['strokeText']('', -0x28 + _0x3b012a, -0x14, '#000', 'Arial Black', 0x24, 'bold', 0x1, 'left');
            _0x811bcc['weaponNameStroke']['lineWidth'] = 0x7;
            _0x811bcc['weaponNameStroke']['opacity'] = 0.6;
            _0x811bcc['add'](_0x811bcc['stroke']);
            _0x811bcc['add'](_0x811bcc['fill']);
            _0x811bcc['weapon']['rotation'] = Math['PI'] / 0x7;
            _0x811bcc['weapon']['size'] = 1.4;
            _0x811bcc['largestOpacity'] = 0.7;
            _0x811bcc['weapon']['opacity'] = 0x1 / _0x811bcc['largestOpacity'];
            _0x811bcc['weapon']['position']['x'] = -0x78;
            _0x811bcc['weapon']['position']['x'] += _0x3b012a;
            var _0x4d83f4 = new _0x1e6a3f['strokeText']('Press E/F to pick up', -0x28 + _0x3b012a, 0x14, '#000', 'Arial Black', 0x14, '', 0x1, 'left');
            _0x4d83f4['lineWidth'] = 0x6;
            _0x4d83f4['opacity'] = 0.6;
            _0x811bcc['add'](_0x4d83f4);
            var _0x30c296 = new _0x1e6a3f['text']('Press E/F to pick up', -0x28 + _0x3b012a, 0x14, '#FFF', 'Arial Black', 0x14, '', 0x1, 'left');
            _0x811bcc['add'](_0x30c296);
            _0x811bcc['add'](_0x811bcc['weaponNameStroke']);
            _0x811bcc['add'](_0x811bcc['weaponName']);
            _0x811bcc['add'](_0x811bcc['weapon']);
            _0x811bcc['add'](new _0x1e6a3f['strokeRectangle'](0x0, 0x0, _0x383a17 + 0x8, _0x154f21 + 0x8, '#000', 0x2, 0x1));
            _0x811bcc['size'] = 0x1;
            var _0x7e150a = 0x0;
            var _0x8e2eb4 = document['createElement']('canvas');
            var _0x5c56b4 = new _0x1e6a3f['image'](_0x8e2eb4, 0x0, 0x0, _0x383a17, _0x154f21, 0x0);
            _0x5c56b4['opacity'] = 0x0;
            _0x8e2eb4['width'] = _0x383a17 * 0x2 + 0x8;
            _0x8e2eb4['height'] = _0x154f21 * 0x2 + 0x8;
            function _0x17569f() {
                _0x811bcc['position']['x'] = 0x0;
                _0x811bcc['position']['y'] = 0x0;
                _0x8e2eb4['width'] = _0x383a17 + 0x8;
                _0x8e2eb4['height'] = _0x154f21 + 0x8;
                var _0x31a092 = _0x8e2eb4['getContext']('2d');
                _0x31a092['globalAlpha'] = 0x1;
                _0x31a092['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                _0x31a092['translate'](_0x383a17 / 0x2 + 0x4, _0x154f21 / 0x2 + 0x4);
                _0x811bcc['render'](_0x31a092, 0x1, 0x1);
                _0x811bcc['size'] = 0x1;
                if (_0x5c56b4['parent'] != null) {
                    _0x5c56b4['parent']['remove'](_0x5c56b4);
                }
                _0x5c56b4['parent'] = null;
                _0x27aecb['add'](_0x5c56b4);
            }
            _0x17569f();
            function _0x33c21f(_0xef7d67, _0x28121c, _0x188c55) {
                var _0x5ec7f3 = document['createElement']('canvas');
                var _0x4d826f = _0x5ec7f3['getContext']('2d');
                var _0x3e0aba = new _0x1e6a3f['object']();
                _0x3e0aba['add'](new _0x1e6a3f['image'](_0x282ecd('blanksmoke0'), 0x0, 0x0, _0x28121c, _0x28121c, 0.6));
                _0x3e0aba['add'](new _0x1e6a3f['image'](_0x282ecd(_0xef7d67), 0x0, 0x0, _0x28121c, _0x28121c, _0x188c55));
                _0x5ec7f3['width'] = _0x28121c;
                _0x5ec7f3['height'] = _0x28121c;
                _0x4d826f['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                _0x4d826f['translate'](_0x28121c / 0x2, _0x28121c / 0x2);
                _0x3e0aba['render'](_0x4d826f, 0x1, 0x1);
                return _0x5ec7f3;
            }
            var _0x38b34f = _0x33c21f('yellowsmoke0', 0xa0, 0.8);
            var _0x2fd544 = _0x33c21f('orangesmoke0', 0x82, 0.8);
            var _0x3039ab = _0x33c21f('redsmoke0', 0x64, 0.8);
            var _0x223e34 = _0x33c21f('blacksmoke0', 0x64, 0.2);
            var _0x191016 = new _0x1e6a3f['object']();
            var _0x2d6df6 = new _0x1e6a3f['arc'](0x0, 0x0, 0x21, '#FFF', Math['PI'] * 0x2, 0x0, 0x6);
            _0x191016['add'](_0x2d6df6);
            var _0x147750 = new _0x1e6a3f['text']('0', 0x0, 0x0, '#FFF', 'Arial Black', 0x16, 'bold', 0x1, 'center');
            _0x191016['add'](_0x147750);
            _0x191016['addBelow'](new _0x1e6a3f['circle'](0x0, 0x0, 0x28, '#000', 0.4));
            _0x191016['opacity'] = 0x0;
            _0x191016['size'] = 0x1;
            _0x3fbfae['add'](_0x191016);
            window['addEventListener']('keyup', function (_0x278533) {
                if (_0x278533['keyCode'] == _0x43a009('ADS')) {
                    if (_0xf5fb22['rightClicking']) {
                        _0xf5fb22['rightClicking'] = ![];
                        _0xf5fb22['rightChanged'] = !![];
                    }
                }
                if (_0x278533['keyCode'] == _0x43a009('Fire')) {
                    if (_0xf5fb22['clicking']) {
                        _0xf5fb22['clicking'] = ![];
                        _0xf5fb22['changed'] = !![];
                    }
                }
            });
            function _0x527967() {
                if (!_0x5c2d09) {
                    _0x5ea1e7 = !_0x5ea1e7;
                    if (_0x5ea1e7) {
                        document['exitPointerLock']();
                    } else if (_0x34b775 == -0x2) {
                        _0x23f908['c']['requestPointerLock']();
                    }
                    _0xf5fb22['clicking'] = ![];
                    _0xf5fb22['changed'] = !![];
                    if (_0x1e6a3f['me'] !== undefined && _0x1e6a3f['me']['updateWeaponSlots'] !== undefined) {
                        _0x1e6a3f['me']['updateWeaponSlots'] = !![];
                    }
                }
                if (!_0x5ea1e7) {
                    _0x3765f6 = -0x1;
                }
            }
            window['addEventListener']('keydown', function (_0x45937d) {
                if (_0x45937d['keyCode'] == 0x1b) {
                    window['parent']['postMessage']('escape', 'file://');
                }
                if (_0x45937d['keyCode'] == 0x7b) {
                    window['parent']['postMessage']('devtools', 'file://');
                }
                if (_0x20c997 != -0x1) {
                    _0x45937d['preventDefault']();
                    if (_0x177111['indexOf'](_0x45937d['keyCode']['toString']()) != -0x1) {
                        _0x3aa99f[_0x20c997] = _0x45937d['keyCode'];
                        _0x4182fc();
                        _0x2108ec();
                    }
                    return;
                }
                if (!_0x1e6a3f['spectating']) {
                    if (_0x3aa99f['indexOf'](_0x45937d['keyCode']) != -0x1 || _0x3aa99f['indexOf'](_0x45937d['keyCode']['toString']()) != -0x1) {
                        if (_0x2a9ffd) {
                            _0x45937d['preventDefault']();
                        }
                    }
                    if (_0x45937d['keyCode'] == _0x43a009('Inventory')) {
                        _0x45937d['preventDefault']();
                        _0x527967();
                    }
                    if (_0x45937d['keyCode'] == _0x43a009('ADS')) {
                        if (!_0xf5fb22['rightClicking']) {
                            _0xf5fb22['rightClicking'] = !![];
                            _0xf5fb22['rightChanged'] = !![];
                        }
                    }
                    if (_0x45937d['keyCode'] == _0x43a009('Fire')) {
                        if (!_0xf5fb22['clicking']) {
                            _0xf5fb22['clicking'] = !![];
                            _0xf5fb22['changed'] = !![];
                        }
                    }
                    if (_0x45937d['keyCode'] == _0x43a009('Build')) {
                        _0x1e6a3f['currentPackets']['push']({
                            'type': 'build'
                        });
                    }
                    if (_0x45937d['keyCode'] == _0x43a009('Reload')) {
                        _0x1e6a3f['currentPackets']['push']({
                            'type': 'reload'
                        });
                    }
                    if (_0x45937d['keyCode'] == _0x43a009('Pickup 1') || _0x45937d['keyCode'] == _0x43a009('Pickup 2')) {
                        _0x1e6a3f['currentPackets']['push']({
                            'type': 'pickup'
                        });
                    }
                    if (_0x45937d['keyCode'] == _0x43a009('Map')) {
                        if (!_0x5ea1e7) _0x5c2d09 = !_0x5c2d09;
                    }
                    if (_0x45937d['keyCode'] == _0x43a009('Ask For Ammo')) {
                        _0x1e6a3f['currentPackets']['push']({
                            'type': 'needammo'
                        });
                    }
                    if (_0x1e6a3f['me']['weaponSlots'] !== undefined) {
                        var _0x39273f = ![];
                        var _0x4e1e2c = _0x45937d['keyCode'];
                        for (var _0x83bc94 = 0x1; _0x83bc94 <= 0x6; _0x83bc94++) {
                            if (_0x45937d['keyCode']['toString']() == _0x43a009('Weapon Slot ' + _0x83bc94)['toString']()) {
                                _0x39273f = !![];
                                _0x4e1e2c = 0x30 + _0x83bc94;
                                _0x83bc94 = 0x7;
                            }
                        }
                        if (_0x39273f && _0x4e1e2c <= 0x36 && _0x4e1e2c >= 0x31) {
                            if (_0x5ea1e7) {
                                if (_0x4e1e2c > 0x31) {
                                    if (_0x3765f6 != -0x1) {
                                        _0x1e6a3f['currentPackets']['push']({
                                            'type': 'switch',
                                            'slot1': _0x3765f6,
                                            'slot2': _0x4e1e2c - 0x31
                                        });
                                        if (_0x3765f6 == _0x9a4f65) {
                                            _0x9a4f65 = _0x4e1e2c - 0x31;
                                        } else if (_0x4e1e2c - 0x31 == _0x9a4f65) {
                                            _0x9a4f65 = _0x3765f6;
                                        }
                                        if (_0x3765f6 == _0x4e1e2c - 0x31 && _0x3765f6 == _0x9a4f65) {
                                            for (var _0x83bc94 = Math['max'](_0x9a4f65 - 0x1, 0x0); _0x1e6a3f['me']['weaponSlots'][Math['max'](_0x83bc94, 0x0)]['type'] != 'empty' && _0x83bc94 >= 0x0; _0x83bc94--) { }
                                            _0x9a4f65 = Math['max'](_0x83bc94, 0x0);
                                            _0x1e6a3f['currentPackets']['push']({
                                                'type': 'selectChange',
                                                'weapon': _0x9a4f65
                                            });
                                        }
                                        _0x3765f6 = -0x1;
                                    } else {
                                        _0x3765f6 = _0x4e1e2c - 0x31;
                                    }
                                }
                            } else if (_0x1e6a3f['me']['weaponSlots'][_0x4e1e2c - 0x31]['type'] != 'empty' && _0x9a4f65 != _0x4e1e2c - 0x31) {
                                _0x9a4f65 = _0x4e1e2c - 0x31;
                                _0x1e6a3f['currentPackets']['push']({
                                    'type': 'selectChange',
                                    'weapon': _0x9a4f65
                                });
                            }
                        }
                    }
                } else {
                    _0x5c2d09 = ![];
                }
            }, ![]);
            function _0x4cf33f(_0x1baab9, _0x2cee33) {
                var _0x3b360c = ![];
                if (_0x1baab9[0x0] == '#') {
                    _0x1baab9 = _0x1baab9['slice'](0x1);
                    _0x3b360c = !![];
                }
                var _0x4b3439 = parseInt(_0x1baab9, 0x10);
                var _0x165aca = (_0x4b3439 >> 0x10) + _0x2cee33;
                if (_0x165aca > 0xff)
                    _0x165aca = 0xff;
                else if (_0x165aca < 0x0)
                    _0x165aca = 0x0;
                var _0x3440eb = (_0x4b3439 >> 0x8 & 0xff) + _0x2cee33;
                if (_0x3440eb > 0xff)
                    _0x3440eb = 0xff;
                else if (_0x3440eb < 0x0)
                    _0x3440eb = 0x0;
                var _0x1c68f9 = (_0x4b3439 & 0xff) + _0x2cee33;
                if (_0x1c68f9 > 0xff)
                    _0x1c68f9 = 0xff;
                else if (_0x1c68f9 < 0x0)
                    _0x1c68f9 = 0x0;
                return (_0x3b360c ? '#' : '') + (_0x1c68f9 | _0x3440eb << 0x8 | _0x165aca << 0x10)['toString'](0x10);
            }
            function _0x469e0a(_0x476767, _0x21a78d) {
                var _0x41f0bf = parseInt(_0x476767['slice'](0x1), 0x10),
                    _0x585e5a = Math['round'](2.55 * _0x21a78d),
                    _0x2c4d26 = (_0x41f0bf >> 0x10) + _0x585e5a,
                    _0x38d8c7 = (_0x41f0bf >> 0x8 & 0xff) + _0x585e5a,
                    _0x112856 = (_0x41f0bf & 0xff) + _0x585e5a;
                return '#' + (0x1000000 + (_0x2c4d26 < 0xff ? _0x2c4d26 < 0x1 ? 0x0 : _0x2c4d26 : 0xff) * 0x10000 + (_0x38d8c7 < 0xff ? _0x38d8c7 < 0x1 ? 0x0 : _0x38d8c7 : 0xff) * 0x100 + (_0x112856 < 0xff ? _0x112856 < 0x1 ? 0x0 : _0x112856 : 0xff))['toString'](0x10)['slice'](0x1);
            }
            _0x174e9d['size'] = 0.9;
            _0x174e9d['add'](_0x5886d5);
            _0x3fbfae['add'](_0x559865);
            _0x3fbfae['add'](_0x47279c);
            _0x3fbfae['add'](_0xda8531);
            _0x3fbfae['add'](_0x3d84ce);
            _0x3fbfae['add'](_0x1ec0f5);
            _0x3fbfae['add'](_0x174e9d);
            _0x3fbfae['add'](_0x58157d);
            var _0x1d4f40 = new _0x1e6a3f['text']('Press Space to Pick Up', 0x0, 97.5, '#FFF', _0x556614, 0x1e, '');
            _0x1d4f40['addBelow'](new _0x1e6a3f['text']('Press Space to Pick Up', 0x0, 0x4, '#FFF', _0x556614, 0x1e, ''));
            _0x1d4f40['belowObjects'][0x0]['opacity'] = 0.3;
            _0x1d4f40['newOpacity'] = 0x0;
            var _0x359b85 = 0x16;
            var _0x4e9cbd = 0x19;
            var _0x566c7b = _0x1e6a3f['prerender'](new _0x1e6a3f['circle'](_0x359b85, _0x4e9cbd, 0xa, '#B38638', 0x1), 0x14)['image'];
            var _0x560753 = _0x1e6a3f['prerender'](new _0x1e6a3f['circle'](0x0, 0x0, 0xc, '#000', 0x1), 0x18)['image'];
            _0x1e6a3f['addType']('player', function (_0x1cda6c, _0x20f51f) {
                //console.log(_0x20f51f)
                _0x1cda6c['visual'] = new _0x1e6a3f['object']();
                _0x1cda6c['firstPacket'] = !![];
                _0x1cda6c['actualRotation'] = 0x0;
                _0x1cda6c['oldJump'] = 0x0;
                _0x1cda6c['currentJump'] = 0x0;
                _0x1cda6c['newJump'] = 0x0;
                _0x1cda6c['elims'] = 0x0;
                _0x1cda6c['spectators'] = 0x0;
                _0x1cda6c['sprite'] = new _0x1e6a3f['object']();
                _0x1cda6c['playerImage'] = new _0x1e6a3f['image'](_0x282ecd('player' + (_0x2f153f ? _0x20f51f['hair'] : '')), 0x0, 0x0, 0x64, 0x64);
                _0x1cda6c['sprite']['add'](_0x1cda6c['playerImage']);
                _0x1cda6c['weaponSkin'] = '';
                if (_0x20f51f['ws'] !== undefined) {
                    _0x1cda6c['weaponSkin'] = _0x20f51f['ws'];
                }
                _0x1cda6c['picaxeSkin'] = _0x20f51f['picaxeSkin'];
                _0x1cda6c['hairStyle'] = 'hair' + _0x20f51f['hair'];
                _0x1cda6c['hair'] = _0x20f51f['hair'];
                _0x1cda6c['infected'] = -0x1;
                if (_0x20f51f['hair'] > 0x3) {
                    _0x1cda6c['hairStyle'] = 'customhair' + (_0x20f51f['hair'] - 0x4);
                    _0x1cda6c['playerImage']['image'] = _0x282ecd('customplayer' + (_0x20f51f['hair'] - 0x4));
                    _0x1cda6c['playerImage']['addBelow'](new _0x1e6a3f['image'](_0x282ecd('backpack' + (_0x20f51f['hair'] - 0x4)), 0x0, 0x2, 0x64, 0x64));
                }
                if (_0x20f51f['infected'] !== undefined) {
                    if (_0x20f51f['infected']) {
                        _0x1cda6c['hairStyle'] = 'hazmathair';
                        _0x1cda6c['playerImage']['image'] = _0x282ecd('hazmatbody');
                        _0x1cda6c['playerImage']['belowObjects'] = [];
                    } else {
                        _0x1cda6c['hairStyle'] = 'infected' + Math['floor'](Math['random']() * 0x2);
                        _0x1cda6c['playerImage']['image'] = _0x282ecd('player');
                        _0x1cda6c['playerImage']['belowObjects'] = [];
                    }
                    _0x1cda6c['infected'] = _0x20f51f['infected'];
                }
                if (_0x20f51f['zombie'] !== undefined) {
                    if (_0x20f51f['zombie'] && _0x1cda6c['hairStyle'] != 'zombiehair') {
                        _0x1cda6c['hairStyle'] = 'zombiehair';
                        _0x1cda6c['playerImage']['image'] = _0x282ecd('zombiebody');
                        _0x1cda6c['playerImage']['belowObjects'] = [];
                    }
                    _0x1cda6c['infected'] = _0x20f51f['infected'];
                }
                if (typeof _0x20f51f['hair'] == 'string') {
                    _0x1cda6c['playerImage']['image'] = _0x282ecd(_0x20f51f['hair'] + 'body');
                    _0x1cda6c['hairStyle'] = _0x20f51f['hair'] + 'head';
                    _0x1cda6c['playerImage']['belowObjects'] = [];
                }
                _0x1cda6c['head'] = new _0x1e6a3f['image'](_0x282ecd(_0x1cda6c['hairStyle']), 0x0, 0x0, 0x78, 0x78);
                if (_0x20f51f['knocked']) {
                    _0x1cda6c['head']['image'] = _0x282ecd('revive');
                }
                _0x1cda6c['knocked'] = ![];
                if (_0x20f51f['knocked'] !== undefined) {
                    _0x1cda6c['knocked'] = _0x20f51f['knocked'];
                }
                _0x1cda6c['head']['rotation'] = Math['PI'] / 0x2;
                _0x1cda6c['sprite']['add'](_0x1cda6c['head']);
                _0x1cda6c['handXOffset'] = _0x359b85;
                _0x1cda6c['handYOffset'] = _0x4e9cbd;
                _0x1cda6c['oldSpread'] = 0x4;
                _0x1cda6c['currentSpread'] = 0x4;
                _0x1cda6c['spread'] = 0x4;
                _0x1cda6c['hands'] = new _0x1e6a3f['object']();
                _0x1cda6c['hand1'] = new _0x1e6a3f['image'](_0x566c7b, _0x1cda6c['handXOffset'], _0x1cda6c['handYOffset'], 0x14, 0x14);
                _0x1cda6c['hand1']['addBelow'](new _0x1e6a3f['image'](_0x560753, 0x0, 0x0, 0x18, 0x18));
                _0x1cda6c['hands']['add'](_0x1cda6c['hand1']);
                _0x1cda6c['hand2'] = new _0x1e6a3f['image'](_0x566c7b, _0x1cda6c['handXOffset'] - 0x5, -_0x1cda6c['handYOffset'], 0x14, 0x14);
                _0x1cda6c['hand2']['addBelow'](new _0x1e6a3f['image'](_0x560753, 0x0, 0x0, 0x18, 0x18));
                _0x1cda6c['arm'] = new _0x1e6a3f['object']();
                _0x1cda6c['arm']['add'](new _0x1e6a3f['rectangle'](0x0, -0xf, 0xf, 0x1e, '#000'));
                _0x1cda6c['arm']['add'](new _0x1e6a3f['rectangle'](0x0, -0xf, 0xb, 0x1e, '#836628'));
                _0x1cda6c['arm']['rotation'] = 2.555 + Math['PI'] / 0x2;
                _0x1cda6c['hand2']['addBelow'](_0x1cda6c['arm']);
                _0x1cda6c['arm2'] = new _0x1e6a3f['object']();
                _0x1cda6c['arm2']['add'](new _0x1e6a3f['rectangle'](0x2, 0xf, 0xf, 0x1e, '#000'));
                _0x1cda6c['arm2']['add'](new _0x1e6a3f['rectangle'](0x2, 0xf, 0xb, 0x1e, '#836628'));
                _0x1cda6c['arm2']['rotation'] = 0.09 + Math['PI'] / 0x2;
                _0x1cda6c['hand1']['addBelow'](_0x1cda6c['arm2']);
                _0x1cda6c['handOffset'] = 0x0;
                _0x1cda6c['handIncreasing'] = ![];
                _0x1cda6c['handDecreasing'] = ![];
                _0x1cda6c['weapon'] = new _0x1e6a3f['image'](_0x282ecd(_0x1cda6c['picaxeSkin']), 0x18, 0xa, 0x6e, 0x6e);
                _0x1cda6c['flash'] = new _0x1e6a3f['image'](_0x282ecd('flash1'), -0x6e / 0x2 - 0x7, 0x0, 0x28, 0x28);
                _0x1cda6c['flash']['rotation'] = -Math['PI'] / 0x2;
                _0x1cda6c['flash']['opacity'] = 0x0;
                _0x1cda6c['weapon']['addBelow'](_0x1cda6c['flash']);
                _0x1cda6c['weapon']['rotation'] = Math['PI'] / 0x2 + 0.01;
                _0x1cda6c['hands']['add'](_0x1cda6c['weapon']);
                _0x1cda6c['hands']['add'](_0x1cda6c['hand2']);
                _0x1cda6c['sprite']['addBelow'](_0x1cda6c['hands']);
                var _0x23eb5e = _0x1cda6c['handYOffset'] - 0xa;
                _0x1cda6c['foot1'] = new _0x1e6a3f['circle'](0x0, _0x23eb5e, 0xf, '#000', 0x1);
                _0x1cda6c['foot2'] = new _0x1e6a3f['circle'](0x0, -_0x23eb5e, 0xf, '#000', 0x1);
                _0x1cda6c['foot1']['add'](new _0x1e6a3f['circle'](0x0, 0x0, 0xd, '#8b4513', 0.5));
                _0x1cda6c['foot2']['add'](new _0x1e6a3f['circle'](0x0, 0x0, 0xd, '#8b4513', 0.5));
                _0x1cda6c['feet'] = new _0x1e6a3f['object']();
                _0x1cda6c['feet']['addBelow'](_0x1cda6c['foot1']);
                _0x1cda6c['feet']['addBelow'](_0x1cda6c['foot2']);
                _0x1cda6c['feet']['rotation'] = 0x0;
                _0x1cda6c['sprite']['addBelow'](_0x1cda6c['feet']);
                _0x1cda6c['shadow'] = new _0x1e6a3f['circle'](0x0, 0x0, 0x2a, '#000', 0.1);
                _0x1cda6c['sprite']['addBelow'](_0x1cda6c['shadow']);
                _0x1cda6c['rarecolor'] = new _0x1e6a3f['image'](_0x282ecd('beachballshadow'), 0x0, 0x0, 0x43, 0x43, 0.35);
                _0x1cda6c['visual']['add'](_0x1cda6c['sprite']);
                _0x1cda6c['ui'] = new _0x1e6a3f['object']();
                _0x1cda6c['visual']['addBelow'](_0x1cda6c['ui']);
                _0x1cda6c['health'] = _0x20f51f['health'];
                _0x1cda6c['shield'] = _0x20f51f['shield'];
                _0x1cda6c['selectedWeapon'] = _0x20f51f['selectedWeapon'];
                _0x1cda6c['healthbar'] = new _0x1e6a3f['rectangle'](0x0, 0x32, _0x1cda6c['health'], 0xe, '#0D0');
                _0x1cda6c['healthbar']['width'] = 0;
                _0x1cda6c['underHealthbar'] = new _0x1e6a3f['rectangle'](0x0, 0x4, _0x1cda6c['health'], 0xe, '#0A0');
                _0x1cda6c['healthbar']['addBelow'](_0x1cda6c['underHealthbar']);
                _0x1cda6c['shieldbar'] = new _0x1e6a3f['rectangle'](0x0, 0x2b + 0x7 / 0x2, _0x1cda6c['shield'], 0x7, '#48F');
                _0x1cda6c['shieldbar']['width'] = 0;
                _0x1cda6c['hasGroundItem'] = ![];
                _0x1cda6c['name'] = _0x20f51f['name'];
                var _0x4bf88a = '#CCC';
                
                let xBarOffset = 20;

                _0x1cda6c['minihealthbar'] = new _0x1e6a3f['rectangle'](xBarOffset, 73, 70, 14, '#0D0');
                _0x1cda6c['minihealthbar'].opacity = 0;
                _0x1cda6c['underminihealthbar'] = new _0x1e6a3f['rectangle'](xBarOffset, 73, 74, 18, '#000');
                _0x1cda6c['underminihealthbar'].opacity = 0;
                _0x1cda6c['aboveunderminihealthbar'] = new _0x1e6a3f['strokeRectangle'](xBarOffset, 73, 70, 14, '#000', 2);
                _0x1cda6c['aboveunderminihealthbar'].opacity = 0;

                _0x1cda6c['minishieldbar'] = new _0x1e6a3f['rectangle'](xBarOffset, 53, 70, 14, '#48F');
                _0x1cda6c['minishieldbar'].opacity = 0;
                _0x1cda6c['underminishieldbar'] = new _0x1e6a3f['rectangle'](xBarOffset, 53, 74, 18, '#000');
                _0x1cda6c['underminishieldbar'].opacity = 0;
                _0x1cda6c['aboveunderminishieldbar'] = new _0x1e6a3f['strokeRectangle'](xBarOffset, 53, 70, 14, '#000', 2);
                _0x1cda6c['aboveunderminishieldbar'].opacity = 0;
                //_0x1cda6c['minihealthbar']['width'] = 10;

                _0x1cda6c['healthnumber'] = new _0x1e6a3f['text'](100, -20, 75, _0x4bf88a, _0x556614, 20, '');
                _0x1cda6c['healthnumber']['opacity'] = 0;
                _0x1cda6c['healthnumber']['align'] = 'right';
                _0x1cda6c['healthnumberstroke'] = new _0x1e6a3f['strokeText'](100, 2, 0x0, '#000', _0x556614, 20, '');
                _0x1cda6c['healthnumberstroke']['lineWidth'] = 0x4;
                _0x1cda6c['healthnumberstroke']['align'] = 'right';
                _0x1cda6c['healthnumber']['addBelow'](_0x1cda6c['healthnumberstroke']);

                _0x1cda6c['shieldnumber'] = new _0x1e6a3f['text'](100, -20, 55, _0x4bf88a, _0x556614, 20, '');
                _0x1cda6c['shieldnumber']['opacity'] = 0;
                _0x1cda6c['shieldnumber']['align'] = 'right';
                _0x1cda6c['shieldnumberstroke'] = new _0x1e6a3f['strokeText'](100, 2, 0x0, '#000', _0x556614, 20, '');
                _0x1cda6c['shieldnumberstroke']['lineWidth'] = 0x4;
                _0x1cda6c['shieldnumberstroke']['align'] = 'right';
                _0x1cda6c['shieldnumber']['addBelow'](_0x1cda6c['shieldnumberstroke']);

                _0x1cda6c['nametag'] = new _0x1e6a3f['text'](_0x1cda6c['name'], 0x0, -0x41, _0x4bf88a, _0x556614, 0x19, '');
                
                _0x1cda6c['nametagstroke'] = new _0x1e6a3f['strokeText'](_0x1cda6c['name'], 0x0, 0x0, '#000', _0x556614, 0x19, '');
                _0x1cda6c['nametagstroke']['lineWidth'] = 0x4;
                _0x1cda6c['nametag']['addBelow'](_0x1cda6c['nametagstroke']);
                _0x1cda6c['nametag']['opacity'] = 0;


                _0x1cda6c['ui']['add'](_0x1cda6c['healthnumber']);
                _0x1cda6c['ui']['add'](_0x1cda6c['underminihealthbar']);
                _0x1cda6c['ui']['add'](_0x1cda6c['aboveunderminihealthbar']);
                _0x1cda6c['ui']['add'](_0x1cda6c['minihealthbar']);

                _0x1cda6c['ui']['add'](_0x1cda6c['shieldnumber']);
                _0x1cda6c['ui']['add'](_0x1cda6c['underminishieldbar']);
                _0x1cda6c['ui']['add'](_0x1cda6c['aboveunderminishieldbar']);
                _0x1cda6c['ui']['add'](_0x1cda6c['minishieldbar']);


                _0x1cda6c['ui']['add'](_0x1cda6c['nametag']);

                _0x1cda6c['speech'] = new _0x1e6a3f['object']();
                _0x1cda6c['speech']['position'] = new _0x1e6a3f['Vector2'](0x0, -0x64);
                var _0x672a26 = 0x50;
                var _0x2c3b7b = 0x3c;
                var _0x406b30 = 0x14;
                var _0x4f9d3e = [new _0x1e6a3f['Vector2'](-_0x672a26 / 0x2, _0x2c3b7b / 0x2), new _0x1e6a3f['Vector2'](-_0x672a26 / 0x2, -_0x2c3b7b / 0x2), new _0x1e6a3f['Vector2'](_0x672a26 / 0x2, -_0x2c3b7b / 0x2), new _0x1e6a3f['Vector2'](_0x672a26 / 0x2, _0x2c3b7b / 0x2), new _0x1e6a3f['Vector2'](_0x406b30 / 0x2, _0x2c3b7b / 0x2), new _0x1e6a3f['Vector2'](0x0, _0x2c3b7b / 0x2 + Math['sin'](Math['PI'] / 0x3) * _0x406b30), new _0x1e6a3f['Vector2'](-_0x406b30 / 0x2, _0x2c3b7b / 0x2)];
                _0x1cda6c['speechPolygon'] = new _0x1e6a3f['polygon'](0x0, 0x0, _0x4f9d3e, '#FFF');
                _0x1cda6c['speechPolygon']['shouldStroke'] = !![];
                _0x1cda6c['speechPolygon']['lineWidth'] = 0x6;
                _0x1cda6c['strokeColor'] = '#000';
                _0x1cda6c['speechAmmo'] = new _0x1e6a3f['image'](_0x282ecd('stack1'), 0x0, 0x0, 0x37, 0x37);
                _0x1cda6c['speechAmmo']['position'] = _0x1cda6c['speechPolygon']['position'];
                _0x1cda6c['speechPolygon']['opacity'] = 0.8;
                _0x1cda6c['speech']['add'](_0x1cda6c['speechPolygon']);
                _0x1cda6c['speech']['add'](_0x1cda6c['speechAmmo']);
                _0x1cda6c['ui']['add'](_0x1cda6c['speech']);
                _0x1cda6c['speech']['opacity'] = 0x0;
                _0x1cda6c['speechTimer'] = 0x0;
                _0x1cda6c['wall'] = new _0x1e6a3f['image'](_0x282ecd('wall'), 0x78, 0x0, 0x35, 0x9);
                _0x1cda6c['wall']['rotation'] = Math['PI'] / 0x2;
                _0x1cda6c['wall']['size'] = 0x5;
                _0x1cda6c['wall']['opacity'] = 0x0;
                _0x1cda6c['wAmmo'] = _0x20f51f['wAmmo'];
                _0x1cda6c['ammo'] = _0x20f51f['ammo'];
                _0x1cda6c['house'] = _0x20f51f['house'];
                _0x1cda6c['wallTime'] = 0x0;
                _0x1cda6c['visual']['add'](_0x1cda6c['wall']);
                _0x1cda6c['staminaVal'] = 0x64;
                _0x1cda6c['stamina'] = new _0x1e6a3f['arc'](-0x37, -0x14, 0xc, '#FF0', Math['PI'] * 0x2, 0x0, 0x8);
                _0x1cda6c['stamina']['addBelow'](new _0x1e6a3f['arc'](0x0, 0x0, 0xc, '#000', Math['PI'] * 0x2, 0x0, 0x8));
                _0x1cda6c['stamina']['belowObjects'][0x0]['opacity'] = 0.3;
                _0x1cda6c['stamina']['opacity'] = 0x0;
                _0x1cda6c['timeUntilSound'] = 0x1;
                _0x1cda6c['inCar'] = ![];
                _0x1cda6c['resetOldJump'] = ![];
                _0x1cda6c['weaponSlots'] = _0x20f51f['weaponSlots'];
                _0x1cda6c['updateWeaponSlots'] = !![];
                _0x1cda6c['dollas'] = [];
                _0x1cda6c['currentWeaponPosition'] = new _0x1e6a3f['Vector2'](0x0, 0x0);
                _0x1cda6c['newWeaponPosition'] = new _0x1e6a3f['Vector2'](0x0, 0x0);
                _0x1cda6c['steadying'] = _0x20f51f['steadying'];
                _0x1cda6c['unsetSteadying'] = ![];
                _0x1cda6c['finishedSteadying'] = !![];
                _0x1cda6c['spawnTrail'] = 0x0;
                _0x1cda6c['extraRotationTicks'] = 0x0;
                _0x1cda6c['ui']['add'](_0x1cda6c['stamina']);
                _0x1cda6c['switchOpacity'] = 0.42;
                _0x1cda6c['gun'] = new _0x1e6a3f['image'](document['getElementById']('empty'), 0x32, 0x14, 0x1e, 0x3c);
                _0x1cda6c['gun']['rotation'] = Math['PI'] / 0x2;
                _0x1cda6c['gun']['opacity'] = 0x0;
                _0x1cda6c['dead'] = ![];
                _0x1cda6c['damages'] = [];
                _0x1cda6c['textRotate'] = 0x0;
                _0x1cda6c['reloadTime'] = 0x0;
                _0x1cda6c['oldReloadTime'] = 0x0;
                _0x1cda6c['newReloadTime'] = 0x0;
                _0x1cda6c['fullReload'] = _0x20f51f['frt'];
                _0x1cda6c['healRotations'] = 0x5;
                _0x1cda6c['resetSelectedWeapon'] = ![];
                _0x1cda6c['sprinting'] = _0x20f51f['sprinting'];
                _0x1cda6c['jumpTicks'] = 0x10;
                _0x1cda6c['building'] = _0x20f51f['building'];
                _0x1cda6c['canBuild'] = _0x20f51f['canBuild'];
                _0x1cda6c['material'] = _0x4b47c7[_0x20f51f['mat']];
                _0x1cda6c['mat'] = _0x20f51f['mat'];
                _0x1cda6c['materials'] = _0x20f51f['mats'];
                _0x1cda6c['oldMats'] = [_0x20f51f['mats'][0x0], _0x20f51f['mats'][0x1], _0x20f51f['mats'][0x2]];
                _0x1cda6c['team'] = [];
                _0x1cda6c['inVehicle'] = _0x20f51f['v'];
                _0x1cda6c['lastClose'] = -0x1;
                _0x1cda6c['lastCloseR'] = -0x1;
                _0x1cda6c['healing'] = ![];
                _0x1cda6c['healSin'] = 0x0;
                _0x1cda6c['damageIndicator'] = new _0x1e6a3f['object']();
                _0x1cda6c['damageIcon'] = new _0x1e6a3f['image'](_0x282ecd('redarrow'), 0x0, 0x50, 0x64, 0x64);
                _0x1cda6c['damageIcon']['rotation'] = Math['PI'];
                _0x1cda6c['damageIndicator']['add'](_0x1cda6c['damageIcon']);
                _0x1cda6c['damageIndicator']['opacity'] = 0x0;
                _0x1cda6c['ui']['add'](_0x1cda6c['damageIndicator']);
                _0x1cda6c['sprite']['objects'][0x0]['rotation'] = Math['sin'](_0x1cda6c['extraRotationTicks']) / 0x10 + Math['PI'] / 0x2 - _0x1cda6c['handOffset'] / 0x5;
                _0x561d93['add'](_0x1cda6c['visual']);
                if (_0x1cda6c['canBuild']) {
                    _0x1cda6c['buildingPreview'] = new _0x1e6a3f['image'](_0x282ecd('blue' + _0x1cda6c['material']), 0x0, 0x0, _0x127702 * _0x12c372 / 0x2, _0x127702);
                } else {
                    _0x1cda6c['buildingPreview'] = new _0x1e6a3f['image'](_0x282ecd('red' + _0x1cda6c['material']), 0x0, 0x0, _0x127702 * _0x12c372 / 0x2, _0x127702);
                }
                _0x1cda6c['buildingPreview']['opacity'] = 0x0;
                _0x561d93['add'](_0x1cda6c['buildingPreview']);
                if (_0x1cda6c['steadying']) {
                    _0x1cda6c['hands']['rotation'] = Math['PI'] / 0x2 - 0.23;
                    _0x1cda6c['hands']['position']['x'] = 0xf;
                    _0x1cda6c['hands']['position']['y'] = -0xc;
                    var _0x2ee8c8 = 0x0;
                    _0x1cda6c['sprite']['objects'][0x0]['rotation'] = _0x2ee8c8 / 0x10 + Math['PI'] / 0x2 - _0x1cda6c['handOffset'] / 0x5 + Math['PI'] / 0x3 - 0.15;
                }
                if (_0x1cda6c['isPreview'] != undefined) {
                    var _0x2ee8c8 = -0.6;
                    if (_0x20f51f['footSin'] !== undefined) {
                        _0x2ee8c8 = _0x20f51f['footSin'];
                    }
                    _0x1cda6c['foot1']['position']['x'] = -_0x2ee8c8 * 0xf + 0x2;
                    _0x1cda6c['foot2']['position']['x'] = _0x2ee8c8 * 0xf + 0x2;
                    if (_0x1cda6c['steadying'] && _0x1cda6c['flare'] !== undefined && _0x1cda6c['flare'] == !![]) {
                        _0x1cda6c['flash']['opacity'] = 0.4;
                        _0x1cda6c['flash']['image'] = _0x282ecd('flash2');
                    }
                }
            }, function (_0x339e86) {
                if (_0x339e86 == _0x1e6a3f['me']) {
                    if (_0x55f112['parent'] != _0x339e86['ui']) {
                        if (_0x55f112['parent'] != null) {
                            _0x55f112['parent']['remove'](_0x55f112);
                        }
                        _0x339e86['ui']['add'](_0x55f112);
                    }
                    for (var _0x264493 = 0x0; _0x264493 < _0x39c64c['length']; _0x264493++) {
                        _0x39c64c[_0x264493]['under'] = ![];
                    }
                    if (_0x339e86['house'] >= 0x0) {
                        _0x39c64c[_0x339e86['house']]['under'] = !![];
                    }
                    for (var _0x264493 = 0x0; _0x264493 < _0x42a372['length']; _0x264493++) {
                        _0x42a372[_0x264493]['opacity'] = 0x0;
                    }
                    for (var _0x264493 = 0x0; _0x264493 < _0x339e86['team']['length'] && _0x264493 < _0x42a372['length']; _0x264493++) {
                        if (_0x339e86['team'][_0x264493]['nametag'] === undefined) {
                            continue;
                        }
                        _0x339e86['team'][_0x264493]['nametag']['opacity'] = 0x1;
                        _0x42a372[_0x264493]['opacity'] = 0x1;
                        _0x42a372[_0x264493]['health']['width'] = _0x339e86['team'][_0x264493]['health'] * 0x3;
                        _0x42a372[_0x264493]['shield']['width'] = _0x339e86['team'][_0x264493]['shield'] * 0x3;
                        if (_0x339e86['team'][_0x264493]['knocked']) {
                            _0x42a372[_0x264493]['health']['color'] = '#C00';
                            _0x42a372[_0x264493]['health']['width'] /= 0x2;
                        } else {
                            _0x42a372[_0x264493]['health']['color'] = '#0C0';
                        }
                        _0x42a372[_0x264493]['nametag']['text'] = _0x339e86['team'][_0x264493]['name'];
                        if (_0x339e86['team'][_0x264493]['name'] == '') {
                            _0x339e86['team'][_0x264493]['nametag']['text'] = 'teammate';
                            _0x339e86['team'][_0x264493]['nametagstroke']['text'] = 'teammate';
                            _0x339e86['team'][_0x264493]['nametag']['opacity'] = 0.3;
                        }
                        _0x42a372[_0x264493]['health']['position']['x'] = 0x7d + _0x42a372[_0x264493]['health']['width'] / 0x2;
                        _0x42a372[_0x264493]['shield']['position']['x'] = 0x7d + _0x42a372[_0x264493]['shield']['width'] / 0x2;
                    }
                    for (var _0x264493 = 0x0; _0x264493 < _0x5dff38['length']; _0x264493++) {
                        _0x5dff38[_0x264493]['opacity'] = 0x0;
                    }
                    for (var _0x264493 = 0x0; _0x264493 < _0x339e86['team']['length'] && _0x264493 < _0x5dff38['length']; _0x264493++) {
                        _0x5dff38[_0x264493]['opacity'] = 0x1;
                        _0x5dff38[_0x264493]['position']['x'] = _0x339e86['team'][_0x264493]['visual']['position']['x'];
                        _0x5dff38[_0x264493]['position']['y'] = _0x339e86['team'][_0x264493]['visual']['position']['y'];
                    }
                    _0x1342c3['opacity'] -= _0x1e6a3f['clientDetails']['dt'] / 0x28;
                    _0x1342c3['opacity'] = Math['max'](_0x1342c3['opacity'], 0x0);
                    if (_0x339e86['hasGroundItem']) {
                        _0x5ae0de['opacity'] = 0x1;
                        _0x5c56b4['opacity'] = Math['min'](_0x5c56b4['opacity'] + _0x1e6a3f['clientDetails']['dt'] / 0x14, 0x1);
                        _0x811bcc['initialSize'] = _0x811bcc['veryInitialSize'];
                    } else {
                        _0x5ae0de['opacity'] = 0.2;
                        _0x5c56b4['opacity'] = Math['max'](_0x5c56b4['opacity'] - _0x1e6a3f['clientDetails']['dt'] / 0x14, 0x0);
                        _0x811bcc['initialSize'] += _0x1e6a3f['clientDetails']['dt'] / 0x28;
                    }
                    _0x7e150a += _0x1e6a3f['clientDetails']['dt'] / 0x1e;
                    _0x5c56b4['size'] = _0x811bcc['initialSize'] + Math['sin'](_0x7e150a) / 0x1e;
                    _0x5c56b4['position']['x'] = _0x339e86['visual']['position']['x'];
                    _0x5c56b4['position']['y'] = _0x339e86['visual']['position']['y'] + 0x438 / 0x7;
                    _0x339e86['textRotate'] += 0.1 * _0x1e6a3f['clientDetails']['dt'];
                    if (_0x339e86['textRotate'] > Math['PI'] * 0x2) {
                        _0x339e86['textRotate'] -= Math['PI'] * 0x2;
                    }
                    _0x1d4f40['rotation'] = Math['sin'](_0x339e86['textRotate']) / 0x8;
                    _0x1d4f40['opacity'] += (_0x1d4f40['newOpacity'] - _0x1d4f40['opacity']) * 0.1 * _0x1e6a3f['clientDetails']['dt'];
                    _0x339e86['currentSpread'] = _0x1e6a3f['lerp'](_0x339e86['oldSpread'], _0x339e86['spread']);
                    var _0x2605dc = 0xa;
                    _0x112d73['objects'][0x0]['position']['y'] = _0x339e86['currentSpread'] * _0x2605dc;
                    _0x112d73['objects'][0x1]['position']['y'] = -_0x339e86['currentSpread'] * _0x2605dc;
                    _0x112d73['objects'][0x2]['position']['x'] = _0x339e86['currentSpread'] * _0x2605dc;
                    _0x112d73['objects'][0x3]['position']['x'] = -_0x339e86['currentSpread'] * _0x2605dc;
                    for (var _0x264493 = 0x0; _0x264493 < _0x1a4a1f['length']; _0x264493++) {
                        _0x1a4a1f[_0x264493]['color'] = '#000';
                    }
                    if (_0x339e86['building'])
                        _0x1a4a1f[0x2 - _0x339e86['mat']]['color'] = '#77F';
                    for (var _0x264493 = 0x0; _0x264493 < _0x339e86['materials']['length']; _0x264493++) {
                        _0x339e86['oldMats'][_0x264493] += (_0x339e86['materials'][_0x264493] - _0x339e86['oldMats'][_0x264493]) * 0.07;
                        _0x1a4a1f[0x2 - _0x264493]['text']['text'] = Math['round'](_0x339e86['oldMats'][_0x264493])['toString']();
                    }
                }
                _0x339e86['reloadTime'] = _0x1e6a3f['lerp'](_0x339e86['oldReloadTime'], _0x339e86['newReloadTime']);
                if (_0x339e86['done']) {
                    _0x339e86['ticksAsleep'] = 0x0;
                    _0x339e86['visual']['opacity'] -= 0.02 * _0x1e6a3f['clientDetails']['dt'];
                    if (_0x339e86['visual']['opacity'] <= 0x0) {
                        for (var _0x264493 = 0x0; _0x264493 < _0x339e86['damages']['length']; _0x264493++) {
                            if (_0x339e86['damages'][_0x264493]['parent'] != null) {
                                _0x339e86['damages'][_0x264493]['parent']['remove'](_0x339e86['damages'][_0x264493]);
                            }
                        }
                        for (var _0x264493 = 0x0; _0x264493 < _0x1e6a3f['objects']['length']; _0x264493++) {
                            var _0xb534c1 = _0x1e6a3f['objects'][_0x264493];
                            if (_0xb534c1['id'] == _0x339e86['id']) {
                                if (_0xb534c1['visual']['parent'] != null)
                                    _0xb534c1['visual']['parent']['remove'](_0xb534c1['visual']);
                                _0x1e6a3f['objects']['splice'](_0x264493, 0x1);
                            }
                        }
                        if (_0x339e86['oldPlayerCanvas'] !== undefined && _0x339e86['oldPlayerCanvas'] != null) {
                            _0x2b3cd2['push'](_0x339e86['oldPlayerCanvas']);
                            _0x339e86['oldPlayerCanvas']['width'] = 0x0;
                            _0x339e86['oldPlayerCanvas']['height'] = 0x0;
                            _0x339e86['oldPlayerCanvas'] = null;
                        }
                        _0x339e86['nametag']['unlink']();
                        _0x339e86['nametagstroke']['unlink']();
                    }
                }
                _0x339e86['damageIndicator']['opacity'] -= _0x1e6a3f['clientDetails']['dt'] / 0x46;
                _0x339e86['damageIndicator']['opacity'] = Math['max'](_0x339e86['damageIndicator']['opacity'], 0x0);
                var _0x5d1384 = _0x4648a0(_0x339e86['actualNew']['position'], _0x339e86['actualOld']['position']);
                _0x339e86['spawnTrail'] = Math['min'](_0x339e86['spawnTrail'] + _0x1e6a3f['clientDetails']['dt'], 0x64);
                var _0x30c221 = 0x2;
                if (_0x5ef86b == 0x1) {
                    _0x30c221 = 0x3;
                }
                if (_0x5d1384 > 0x5 && (_0x339e86['sprinting'] && _0x339e86['spawnTrail'] > 0x3 * _0x30c221 || !_0x339e86['sprinting'] && _0x339e86['spawnTrail'] > 0x6 * _0x30c221)) {
                    var _0x178ead = Math['floor'](Math['random']() * 0x2);
                    var _0x215135 = 0.4;
                    if (_0x339e86['sprinting']) {
                        _0x215135 = 0x1;
                    }
                    var _0x39db79 = 0x32 + Math['random']() * 0x14;
                    if (_0x339e86['isPreview'] == undefined) {
                        _0x1e6a3f['customCustomParticle']('smoke', _0x339e86, (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 0x1 - _0x215135, 0x0, 0x0);
                        _0x339e86['spawnTrail'] = 0x0;
                    } else if (_0x18f2d0 != undefined && _0x339e86['spawnTrail'] > 0x4 * _0x30c221) {
                        _0x18f2d0['addBelow'](new _0x1e6a3f['customParticle'](new _0x1e6a3f['image'](_0x282ecd('smoke' + _0x178ead), _0x339e86['visual']['position']['x'], _0x339e86['visual']['position']['y'] + Math['random']() * 0x22 - 0x11, _0x39db79 * 1.2, _0x39db79 * 1.2, _0x215135), (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 0x1 - _0x215135, 0x0, 0x0));
                        _0x339e86['spawnTrail'] = 0x0;
                    }
                }
                var _0x5384b6 = 0x6;
                if (_0x339e86['handIncreasing']) {
                    _0x339e86['handDecreasing'] = ![];
                    if (_0x339e86['handOffset'] >= 0x0) {
                        _0x339e86['handOffset'] += _0x1e6a3f['clientDetails']['dt'] * 2.5 / _0x5384b6;
                        if (_0x339e86['handOffset'] >= Math['PI'] / 0x3) {
                            _0x339e86['handIncreasing'] = ![];
                            _0x339e86['handOffset'] = Math['PI'] / 0x3;
                        }
                    } else {
                        _0x339e86['handOffset'] += _0x1e6a3f['clientDetails']['dt'] * 0.6 / _0x5384b6;
                        if (_0x339e86['handOffset'] >= 0x0) {
                            _0x339e86['handIncreasing'] = ![];
                            _0x339e86['handOffset'] = 0x0;
                        }
                    }
                } else if (_0x339e86['handDecreasing']) {
                    _0x339e86['handOffset'] -= _0x1e6a3f['clientDetails']['dt'] * 0.3 / _0x5384b6;
                    if (_0x339e86['handOffset'] <= -Math['PI'] / 0x6) {
                        _0x339e86['handOffset'] = -Math['PI'] / 0x6;
                    }
                } else {
                    _0x339e86['handOffset'] -= _0x1e6a3f['clientDetails']['dt'] / _0x5384b6 * 0.29;
                    _0x339e86['handOffset'] = Math['max'](0x0, _0x339e86['handOffset']);
                }
                _0x339e86['extraRotationTicks'] += _0x5d1384 * _0x1e6a3f['clientDetails']['dt'] / 0xdc;
                var _0x16679d = Math['sin'](_0x339e86['extraRotationTicks']);

                //!do stuff here

                _0x339e86['foot1']['position']['x'] = -_0x16679d * 0xf + 0x2;
                _0x339e86['foot2']['position']['x'] = _0x16679d * 0xf + 0x2;
                _0x339e86['flash']['opacity'] = Math['max'](_0x339e86['flash']['opacity'] - _0x1e6a3f['clientDetails']['dt'] / 0xa, 0x0);
                _0x339e86['ui']['rotation'] = -_0x339e86['visual']['rotation'];

                _0x339e86.nametag.opacity = localStorage.extraUtils == "1" ? 1 : 0;

                _0x339e86.healthnumber.opacity = localStorage.extraUtils == "1" ? 1 : 0;
                _0x339e86.minihealthbar.opacity = localStorage.extraUtils == "1" ? 1 : 0;
                _0x339e86.underminihealthbar.opacity = localStorage.extraUtils == "1" ? 0.4 : 0;
                _0x339e86.aboveunderminihealthbar.opacity = localStorage.extraUtils == "1" ? 0.4 : 0;

                _0x339e86.shieldnumber.opacity = localStorage.extraUtils == "1" ? 1 : 0;
                _0x339e86.minishieldbar.opacity = localStorage.extraUtils == "1" ? 1 : 0;
                _0x339e86.underminishieldbar.opacity = localStorage.extraUtils == "1" ? 0.4 : 0;
                _0x339e86.aboveunderminishieldbar.opacity = localStorage.extraUtils == "1" ? 0.4 : 0;

                _0x339e86.healthnumber.text = _0x339e86.health;
                _0x339e86.shieldnumber.text = _0x339e86.shield;

                _0x339e86.healthnumberstroke.text = _0x339e86.health;
                _0x339e86.shieldnumberstroke.text = _0x339e86.shield;

                _0x339e86.minihealthbar.width = 70 * (_0x339e86.health / 100);
                _0x339e86.minihealthbar.position.x = _0x339e86.minihealthbar.width / 2 - 15;

                _0x339e86.minishieldbar.width = 70 * (_0x339e86.shield / 100);
                _0x339e86.minishieldbar.position.x = _0x339e86.minishieldbar.width / 2 - 15;

                _0x339e86['healthbar']['width'] += (_0x339e86['health'] - _0x339e86['healthbar']['width']) * 0.1 * _0x1e6a3f['clientDetails']['dt'];
                _0x339e86['shieldbar']['width'] += (_0x339e86['shield'] - _0x339e86['shieldbar']['width']) * 0.1 * _0x1e6a3f['clientDetails']['dt'];
                _0x339e86['underHealthbar']['width'] = _0x339e86['healthbar']['width'] = Math['min'](Math['max'](_0x339e86['healthbar']['width'], 0x0), 0x64);
                _0x339e86['healthbar']['position']['x'] = (_0x339e86['healthbar']['width'] - 0x64) / 0x2;
                _0x339e86['shieldbar']['position']['x'] = (_0x339e86['shieldbar']['width'] - 0x64) / 0x2;
                _0x339e86['stamina']['angle'] += (_0x339e86['staminaVal'] * 1.8 * 0x2 * Math['PI'] / 0xb4 - _0x339e86['stamina']['angle']) * 0.1 * _0x1e6a3f['clientDetails']['dt'];
                _0x339e86['stamina']['rotation'] = -_0x339e86['stamina']['angle'] - Math['PI'] / 0x2;
                for (var _0x264493 = 0x0; _0x264493 < _0x339e86['dollas']['length']; _0x264493++) {
                    _0x339e86['dollas'][_0x264493]['position']['y'] -= _0x1e6a3f['clientDetails']['dt'] * 0.65;
                    _0x339e86['dollas'][_0x264493]['specialOpacity'] -= 0.02 * _0x1e6a3f['clientDetails']['dt'];
                    _0x339e86['dollas'][_0x264493]['opacity'] = _0x339e86['dollas'][_0x264493]['specialOpacity'];
                    if (_0x339e86['dollas'][_0x264493]['opacity'] <= 0x0) {
                        if (_0x339e86['dollas']['parent'] != null) {
                            _0x339e86['dollas'][_0x264493]['parent']['remove'](_0x339e86['dollas'][_0x264493]);
                        }
                        _0x339e86['dollas']['splice'](_0x264493, 0x1);
                        _0x264493--;
                    }
                }
                if (_0x339e86['staminaVal'] == 0x64) {
                    _0x339e86['stamina']['opacity'] -= 0.03 * _0x1e6a3f['clientDetails']['dt'];
                } else {
                    _0x339e86['stamina']['opacity'] += 0.03 * _0x1e6a3f['clientDetails']['dt'];
                }
                if (_0x339e86['weapon']['opacity'] < 0x1) {
                    _0x339e86['weapon']['opacity'] = Math['min'](_0x339e86['weapon']['opacity'] + _0x1e6a3f['clientDetails']['dt'] / 0x19, 0x1);
                }
                if (_0x339e86['building']) {
                    _0x339e86['buildingPreview']['opacity'] = 0.7 * _0x339e86['weapon']['opacity'];
                } else {
                    _0x339e86['buildingPreview']['opacity'] = Math['max'](_0x339e86['buildingPreview']['opacity'] - _0x1e6a3f['clientDetails']['dt'] / 0xa, 0x0);
                }
                _0x339e86['finishedSteadying'] = ![];
                if (_0x339e86['steadying']) {
                    if (_0x339e86['weaponSlots'][_0x339e86['selectedWeapon']]['type'] == 'snowball') {
                        _0x339e86['hands']['rotation'] = _0x1e6a3f['lerp'](_0x339e86['hands']['rotation'], Math['PI'] / 0x4 - 0.03);
                        _0x339e86['hands']['position']['x'] = Math['max'](_0x1e6a3f['lerp'](_0x339e86['hands']['position']['x'], 0x7), 0x1);
                        _0x339e86['hands']['position']['y'] = _0x1e6a3f['lerp'](_0x339e86['hands']['position']['y'], -0xc);
                        _0x339e86['sprite']['objects'][0x0]['rotation'] = _0x1e6a3f['lerp'](_0x339e86['sprite']['objects'][0x0]['rotation'], _0x16679d / 0x10 + Math['PI'] / 0x2 - _0x339e86['handOffset'] / 0x5 + (Math['PI'] / 0x3 - 0.15) / 0x2);
                    } else {
                        _0x339e86['hands']['rotation'] = _0x1e6a3f['lerp'](_0x339e86['hands']['rotation'], Math['PI'] / 0x2 - 0.23);
                        _0x339e86['hands']['position']['x'] = Math['max'](_0x1e6a3f['lerp'](_0x339e86['hands']['position']['x'], 0xf), 0x1);
                        _0x339e86['hands']['position']['y'] = _0x1e6a3f['lerp'](_0x339e86['hands']['position']['y'], -0xc);
                        _0x339e86['sprite']['objects'][0x0]['rotation'] = _0x1e6a3f['lerp'](_0x339e86['sprite']['objects'][0x0]['rotation'], _0x16679d / 0x10 + Math['PI'] / 0x2 - _0x339e86['handOffset'] / 0x5 + Math['PI'] / 0x3 - 0.15);
                    }
                } else {
                    if (_0x339e86['sprinting'] && !_0x339e86['building']) {
                        _0x339e86['hands']['rotation'] = _0x1e6a3f['lerp'](_0x339e86['hands']['rotation'], -_0x16679d / 0x8 - _0x339e86['handOffset']);
                        if (_0x339e86['isPreview']) {
                            _0x339e86['hands']['rotation'] = -_0x16679d / 0x8 - _0x339e86['handOffset'];
                        }
                    } else {
                        _0x339e86['hands']['rotation'] = _0x1e6a3f['lerp'](_0x339e86['hands']['rotation'], -_0x16679d / 0x18 - _0x339e86['handOffset']);
                    }
                    _0x339e86['hands']['position']['x'] = _0x1e6a3f['lerp'](_0x339e86['hands']['position']['x'], 0x0);
                    _0x339e86['hands']['position']['y'] = _0x1e6a3f['lerp'](_0x339e86['hands']['position']['y'], 0x0);
                    if (_0x339e86['hands']['position']['x'] < 0x1) {
                        _0x339e86['finishedSteadying'] = !![];
                    }
                    if (!_0x339e86['isPreview']) {
                        _0x339e86['sprite']['objects'][0x0]['rotation'] = _0x1e6a3f['lerp'](_0x339e86['sprite']['objects'][0x0]['rotation'], _0x16679d / 0x10 + Math['PI'] / 0x2 - _0x339e86['handOffset'] / 0x5);
                    } else {
                        _0x339e86['sprite']['objects'][0x0]['rotation'] = _0x16679d / 0x10 + Math['PI'] / 0x2 - _0x339e86['handOffset'] / 0x5;
                    }
                    _0x339e86['head']['rotation'] = (_0x16679d / 0x10 - _0x339e86['handOffset'] / 0x5) * 0.5 + Math['PI'] / 0x2;
                }
                if (_0x339e86['reloadTime'] > 0x0 && _0x123695['indexOf'](_0x339e86['weaponSlots'][_0x339e86['selectedWeapon']]['type']) == -0x1 && !_0x339e86['steadying'] && _0x339e86['finishedSteadying']) {
                    _0x339e86['handDecreasing'] = !![];
                } else if (_0x339e86['reloadTime'] <= 0x0 && _0x339e86['handOffset'] < 0x0) {
                    _0x339e86['handIncreasing'] = !![];
                }
                if (_0x339e86['newWeaponPosition']['y'] > 0x0) {
                    _0x339e86['newWeaponPosition']['y'] -= 0.2;
                    _0x339e86['hands']['position']['x'] = -_0x339e86['newWeaponPosition']['y'] + 0xf;
                    _0x339e86['newWeaponPosition']['x'] -= 0x1 / 0x19;
                    _0x339e86['hands']['position']['y'] = -0xc;
                }
                _0x339e86['feet']['rotation'] = _0x339e86['sprite']['objects'][0x0]['rotation'] - Math['PI'] / 0x2;
                if (_0x339e86 == _0x1e6a3f['me']) {
                    _0x5886d5['position']['x'] = (_0x9a4f65 - 0x5) * (_0x59bb45 + 0xa) - _0x59bb45;
                    for (var _0x264493 = 0x0; _0x264493 < _0x2fba54['length']; _0x264493++) {
                        _0x2fba54[_0x264493]['position']['y'] = 0x0;
                    }
                    if (!_0x5ea1e7) {
                        _0x2fba54[_0x9a4f65]['position']['y'] = -0xa;
                        _0x5886d5['position']['y'] = -_0x59bb45 - 0xa;
                    } else {
                        _0x5886d5['position']['y'] = -_0x59bb45;
                    }
                    if (_0x339e86['weaponSlots'][_0x339e86['selectedWeapon']]['type'] == 'medkit' || _0x339e86['weaponSlots'][_0x339e86['selectedWeapon']]['type'] == 'mini' || _0x339e86['weaponSlots'][_0x339e86['selectedWeapon']]['type'] == 'pot' || _0x339e86['weaponSlots'][_0x339e86['selectedWeapon']]['type'] == 'bandages') {
                        if (!_0x36dd9b['enabled']) {
                            _0x37d938(_0x36dd9b, 'opacity', _0x36dd9b['opacity'], 0x1, 0x190, 0x0, _0x350bea['easeOutExpo']);
                        }
                        _0x36dd9b['enabled'] = !![];
                    } else {
                        if (_0x36dd9b['enabled']) {
                            _0x37d938(_0x36dd9b, 'opacity', _0x36dd9b['opacity'], 0x0, 0x190, 0x0, _0x350bea['easeOutExpo']);
                        }
                        _0x36dd9b['enabled'] = ![];
                    }
                }
                _0x339e86['currentJump'] = _0x1e6a3f['lerp'](_0x339e86['oldJump'], _0x339e86['newJump']);
                if (_0x339e86['resetOldJump']) {
                    _0x339e86['oldJump'] = _0x339e86['newJump'] = 0x0;
                    _0x339e86['resetOldJump'] = ![];
                }
                var _0x2249c1 = Math['max'](-Math['pow'](_0x339e86['currentJump'] / _0x339e86['jumpTicks'], 0x2) + _0x339e86['currentJump'] / _0x339e86['jumpTicks'], 0x0);
                _0x339e86['visual']['size'] = 0x1 + _0x2249c1 * 1.3;
                _0x339e86['shadow']['size'] = 0x1;
                if (_0x339e86['visual']['size'] != 0x1) {
                    _0x339e86['shadow']['size'] = 0x1 / _0x2310d7(_0x339e86['visual']['size'], 0.01);
                }
                for (var _0x264493 = 0x0; _0x264493 < _0x339e86['damages']['length']; _0x264493++) {
                    _0x339e86['damages'][_0x264493]['t'] -= _0x1e6a3f['clientDetails']['dt'] / 0x37;
                    _0x339e86['damages'][_0x264493]['position']['y'] = _0x339e86['damages'][_0x264493]['original']['y'] - Math['max'](-Math['pow'](_0x339e86['damages'][_0x264493]['t'] / 0x2 + 0.5, 0x2) + _0x339e86['damages'][_0x264493]['t'] / 0x2 + 0.5, 0x0) * 0x96 + _0x339e86['visual']['position']['y'];
                    _0x339e86['damages'][_0x264493]['position']['x'] = _0x339e86['damages'][_0x264493]['original']['x'] + _0x339e86['visual']['position']['x'];
                    _0x339e86['damages'][_0x264493]['opacity'] = _0x339e86['damages'][_0x264493]['t'];
                    if (_0x339e86['damages'][_0x264493]['t'] <= 0x0) {
                        _0x339e86['damages']['opacity'] = 0x0;
                        if (_0x339e86['damages'][_0x264493]['parent'] != null) {
                            _0x339e86['damages'][_0x264493]['parent']['remove'](_0x339e86['damages'][_0x264493]);
                        }
                        _0x339e86['damages'][_0x264493]['unlink']();
                        _0x339e86['damages']['splice'](_0x264493, 0x1);
                        _0x264493--;
                    }
                }
                if (_0x339e86['healing']) {
                    _0x339e86['healSin'] = (_0x339e86['fullReload'] - _0x339e86['reloadTime'] / 0xa) * _0x339e86['healRotations'] * Math['PI'] / _0x339e86['fullReload'];
                    var _0x39e878 = Math['sin'](_0x339e86['healSin']) * 0x5;
                    _0x339e86['hand1']['position']['x'] = _0x339e86['handXOffset'] - 0x3 + _0x39e878;
                    _0x339e86['hand2']['position']['x'] = _0x339e86['handXOffset'] - 0x3 + _0x39e878;
                    _0x339e86['weapon']['position']['x'] = _0x339e86['originalWeaponX'] + _0x39e878;
                    var _0x535534 = ![];
                    if (_0x123695['indexOf'](_0x339e86['weaponSlots'][_0x339e86['selectedWeapon']]['type']) != -0x1) {
                        if (_0x339e86['reloadTime'] > 0x0) {
                            if (!_0x339e86['healing']) {
                                _0x339e86['healSin'] = 0x0;
                            }
                            _0x535534 = !![];
                        }
                    }
                    if (_0x339e86['healing'] != _0x535534) {
                        _0x339e86['resetSelectedWeapon'] = !![];
                    }
                    _0x339e86['healing'] = _0x535534;
                }
                if (_0x339e86['reloadTime'] <= 0x0) {
                    _0x339e86['healSin'] = 0x0;
                }
                if (_0x339e86['speechTimer'] > 0x0) {
                    _0x339e86['speechTimer'] -= _0x1e6a3f['clientDetails']['dt'] / 0xa;
                    _0x339e86['speech']['opacity'] += _0x1e6a3f['clientDetails']['dt'] / 0xa;
                    _0x339e86['speech']['opacity'] = Math['min'](_0x339e86['speech']['opacity'], 0x1);
                } else {
                    _0x339e86['speech']['opacity'] -= _0x1e6a3f['clientDetails']['dt'] / 0xa;
                    _0x339e86['speech']['opacity'] = Math['max'](0x0, _0x339e86['speech']['opacity']);
                }
            }, function (_0x5a7ac4, _0x5cca29) {
                if (_0x5a7ac4['firstPacket']) {
                    if (_0x5cca29['selectedWeapon'] === undefined) {
                        _0x5cca29['selectedWeapon'] = _0x5a7ac4['selectedWeapon'];
                    }
                    if (_0x5cca29['building'] === undefined) {
                        _0x5cca29['building'] = _0x5a7ac4['building'];
                    }
                    _0x5a7ac4['firstPacket'] = ![];
                }
                if (_0x5cca29['gh'] !== undefined && _0x5a7ac4 == _0x1e6a3f['me']) {
                    _0x1342c3['opacity'] = 0.7;
                }
                if (_0x5cca29['house'] !== undefined) {
                    _0x5a7ac4['house'] = _0x5cca29['house'];
                }
                if (_0x5cca29['elims'] !== undefined) {
                    _0x5a7ac4['elims'] = _0x5cca29['elims'];
                    if (_0x5a7ac4 == _0x1e6a3f['me']) {
                        _0x2db1b4['text'] = _0x5a7ac4['elims'];
                        //! CHANGES
                        if ((localStorage.deltaElims != _0x5a7ac4['elims']) && (typeof (socket) !== "undefined")) socket.emit("gameInfo", "elims", _0x5a7ac4['elims']);
                        localStorage.deltaElims = _0x5a7ac4['elims'];
                    }
                }
                if (_0x5a7ac4['unsetSteadying']) {
                    if (_0x5cca29['steadying'] === undefined) {
                        _0x5cca29['steadying'] = ![];
                    }
                    _0x5a7ac4['unsetSteadying'] = ![];
                }
                if (_0x5cca29['infected'] !== undefined) {
                    if (_0x5cca29['infected'] && _0x5a7ac4['hairStyle'] != 'hazmathair') {
                        _0x5a7ac4['hairStyle'] = 'hazmathair';
                        _0x5a7ac4['playerImage']['image'] = _0x282ecd('hazmatbody');
                        _0x5a7ac4['playerImage']['belowObjects'] = [];
                        _0x5a7ac4['head']['image'] = _0x282ecd(_0x5a7ac4['hairStyle']);
                    } else if (!_0x5cca29['infected'] && _0x5a7ac4['hairStyle'] != 'infected0' && _0x5a7ac4['hairStyle'] != 'infected1') {
                        _0x5a7ac4['hairStyle'] = 'infected' + Math['floor'](Math['random']() * 0x2);
                        _0x5a7ac4['playerImage']['image'] = _0x282ecd('player');
                        _0x5a7ac4['playerImage']['belowObjects'] = [];
                        _0x5a7ac4['head']['image'] = _0x282ecd(_0x5a7ac4['hairStyle']);
                    }
                    _0x5a7ac4['infected'] = _0x5cca29['infected'];
                }
                if (_0x5cca29['zombie'] !== undefined) {
                    if (_0x5cca29['zombie'] && _0x5a7ac4['hairStyle'] != 'zombiehair') {
                        _0x5a7ac4['hairStyle'] = 'zombiehair';
                        _0x5a7ac4['playerImage']['image'] = _0x282ecd('zombiebody');
                        _0x5a7ac4['playerImage']['belowObjects'] = [];
                        _0x5a7ac4['head']['image'] = _0x282ecd(_0x5a7ac4['hairStyle']);
                    }
                    _0x5a7ac4['infected'] = _0x5cca29['infected'];
                }
                if (_0x5cca29['shot'] !== undefined && _0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] == 'picaxe') {
                    _0x5a7ac4['handIncreasing'] = !![];
                }
                if (_0x5cca29['shot'] !== undefined && _0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] != 'picaxe' && _0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] != 'snowball') {
                    _0x5a7ac4['newWeaponPosition']['y'] = 0x5;
                    _0x5a7ac4['newWeaponPosition']['x'] = 0x1;
                    _0x5a7ac4['flash']['image'] = _0x282ecd('flash' + Math['floor'](Math['random']() * 0x3));
                    _0x5a7ac4['flash']['opacity'] = 0.8;
                    if (!_0x5a7ac4['steadying'] && (_0x5cca29['steadying'] === undefined || !_0x5cca29['steadying'])) {
                        _0x5a7ac4['unsetSteadying'] = !![];
                        _0x5cca29['steadying'] = !![];
                    }
                    if (_0x5a7ac4 == _0x1e6a3f['me']) {
                        _0x5d8502 = 0x65;
                    }
                }
                if (_0x5cca29['team'] !== undefined) {
                    _0x5a7ac4['team'] = [];
                    if (_0x5a7ac4 == _0x1e6a3f['me']) {
                        for (var _0x25909a = 0x0; _0x25909a < _0x5cca29['team']['length']; _0x25909a++) {
                            if (_0x5cca29['team'][_0x25909a] != _0x1e6a3f['me']['id']) {
                                for (var _0x459ce2 = 0x0; _0x459ce2 < _0x1e6a3f['objects']['length']; _0x459ce2++) {
                                    if (_0x1e6a3f['objects'][_0x459ce2]['id'] == _0x5cca29['team'][_0x25909a]) {
                                        _0x5a7ac4['team']['push'](_0x1e6a3f['objects'][_0x459ce2]);
                                    }
                                }
                            }
                        }
                    }
                }
                if (_0x5cca29['sprinting'] !== undefined) {
                    _0x5a7ac4['sprinting'] = _0x5cca29['sprinting'];
                }
                if (_0x5cca29['teleported'] !== undefined) {
                    _0x5a7ac4['old']['position'] = _0x5a7ac4['actualNew']['position']['clone']();
                    _0x5a7ac4['old']['rotation'] = _0x5a7ac4['new']['rotation'];
                    _0x5a7ac4['actualOld']['position'] = _0x5a7ac4['actualNew']['position']['clone']();
                    _0x5a7ac4['new']['position'] = _0x5a7ac4['actualNew']['position']['clone']();
                    _0x5a7ac4['visual']['position'] = _0x5a7ac4['actualNew']['position']['clone']();
                    _0x5a7ac4['visual']['rotation'] = _0x5a7ac4['new']['rotation'];
                    if (_0x5a7ac4 == _0x1e6a3f['me']) {
                        _0x5d8502 = 0x98967f;
                        _0x5e2a9e = 0x3e7;
                        _0x561d93['camera']['position'] = new _0x1e6a3f['Vector2'](_0x1e6a3f['me']['visual']['position']['x'], _0x1e6a3f['me']['visual']['position']['y']);
                    }
                }
                if (_0x5a7ac4 == _0x1e6a3f['me']) {
                    if (!_0x325343) {
                        _0xc16629['radius'] = _0x2e8aa0['radius'];
                        _0xc16629['position'] = _0x2e8aa0['position'];
                    }
                    if (_0x5cca29['specs'] !== undefined) {
                        _0x5a7ac4['spectators'] = _0x5cca29['specs'];
                        if (_0x5a7ac4['spectators'] == 0x0) {
                            _0x36654a['opacity'] = 0x0;
                        } else {
                            _0x36654a['opacity'] = 0x1;
                            _0x31f51b['text'] = _0x5a7ac4['spectators']['toString']();
                        }
                    }
                    _0x325343 = ![];
                    if (_0x5cca29['health'] !== undefined) {
                        _0x1b0692['text'] = _0x5cca29['health']['toString']();
                        _0x2dc41a['width'] = _0x5cca29['health'] * 0x3;
                        if (_0x5a7ac4['knocked']) {
                            _0x2dc41a['color'] = '#C00';
                            _0x2dc41a['width'] /= 0x2;
                        } else {
                            _0x2dc41a['color'] = '#0C0';
                        }
                    }
                    if (_0x5cca29['shield'] !== undefined) {
                        _0x12b020['text'] = _0x5cca29['shield']['toString']();
                        _0x3e2b48['width'] = _0x5cca29['shield'] * 0x3;
                    }
                    if (_0x1e6a3f['spectating'] && _0x5cca29['selectedWeapon'] !== undefined) {
                        _0x9a4f65 = _0x5cca29['selectedWeapon'];
                    }
                }
                if (_0x5cca29['knocked'] !== undefined) {
                    if (_0x5cca29['knocked']) {
                        _0x5a7ac4['head']['image'] = _0x282ecd('revive');
                    } else {
                        _0x5a7ac4['head']['image'] = _0x282ecd(_0x5a7ac4['hairStyle']);
                    }
                    _0x5a7ac4['knocked'] = _0x5cca29['knocked'];
                }
                if (_0x5cca29['health'] !== undefined) {
                    _0x5a7ac4['health'] = _0x5cca29['health'];
                }
                if (_0x5cca29['shield'] !== undefined) {
                    _0x5a7ac4['shield'] = _0x5cca29['shield'];
                }
                if (_0x5cca29['hLost'] !== undefined) {
                    var _0x2d2f6d = new _0x1e6a3f['object']();
                    _0x2d2f6d['position']['x'] = (Math['random']() * 0x2 - 0x1) * 0x1e;
                    _0x2d2f6d['position']['y'] = (Math['random']() * 0x2 - 0x1) * 0xf - 0x3c;
                    _0x2d2f6d['original'] = {
                        'x': _0x2d2f6d['position']['x'],
                        'y': _0x2d2f6d['position']['y']
                    };
                    _0x2d2f6d['t'] = 0x1;
                    var _0x29df61 = new _0x1e6a3f['strokeText'](_0x5cca29['hLost'], 0x0, 0x0, '#333', 'Arial Black', 0x19, 'bold', 0x1, 'center');
                    _0x29df61['lineWidth'] = 0x6;
                    _0x2d2f6d['add'](_0x29df61);
                    _0x2d2f6d['add'](new _0x1e6a3f['text'](_0x5cca29['hLost'], 0x0, 0x0, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center'));
                    _0x5a7ac4['damages']['push'](_0x2d2f6d);
                    _0x27aecb['add'](_0x2d2f6d);
                }
                if (_0x5cca29['sLost'] !== undefined) {
                    var _0x2d2f6d = new _0x1e6a3f['object']();
                    _0x2d2f6d['position']['x'] = (Math['random']() * 0x2 - 0x1) * 0x1e;
                    _0x2d2f6d['position']['y'] = (Math['random']() * 0x2 - 0x1) * 0xf - 0x3c;
                    _0x2d2f6d['original'] = {
                        'x': _0x2d2f6d['position']['x'],
                        'y': _0x2d2f6d['position']['y']
                    };
                    _0x2d2f6d['t'] = 0x1;
                    var _0x29df61 = new _0x1e6a3f['strokeText'](_0x5cca29['sLost'], 0x0, 0x0, '#333', 'Arial Black', 0x19, 'bold', 0x1, 'center');
                    _0x29df61['lineWidth'] = 0x6;
                    _0x2d2f6d['add'](_0x29df61);
                    _0x2d2f6d['add'](new _0x1e6a3f['text'](_0x5cca29['sLost'], 0x0, 0x0, _0x40a9ff, 'Arial Black', 0x19, 'bold', 0x1, 'center'));
                    _0x5a7ac4['damages']['push'](_0x2d2f6d);
                    _0x27aecb['add'](_0x2d2f6d);
                }
                _0x5a7ac4['oldJump'] = _0x5a7ac4['currentJump'];
                if (_0x5cca29['jump'] !== undefined) {
                    _0x5a7ac4['newJump'] = _0x5cca29['jump'];
                    if (_0x5cca29['jump'] == 0x8 - 0x6) {
                        if (_0x5a7ac4['visual']['parent'] != null) {
                            _0x5a7ac4['visual']['parent']['remove'](_0x5a7ac4['visual']);
                        }
                        _0x5a7ac4['visual']['parent'] = null;
                        _0x463f6a['add'](_0x5a7ac4['visual']);
                    } else if (_0x5cca29['jump'] == 0x8 + 0x6) {
                        if (_0x5a7ac4['visual']['parent'] != null) {
                            _0x5a7ac4['visual']['parent']['remove'](_0x5a7ac4['visual']);
                        }
                        _0x5a7ac4['visual']['parent'] = null;
                        _0x561d93['add'](_0x5a7ac4['visual']);
                    }
                    if (_0x5a7ac4['newJump'] < _0x5a7ac4['jumpTicks'] / 0x2 && _0x5a7ac4['oldJump'] > _0x5a7ac4['jumpTicks'] / 0x2) {
                        _0x5a7ac4['oldJump'] = _0x5a7ac4['jumpTicks'] - _0x5a7ac4['oldJump'];
                    }
                } else {
                    _0x5a7ac4['newJump'] = 0x0;
                    _0x5a7ac4['currentJump'] = 0x0;
                    if (_0x5a7ac4['oldJump'] > _0x5a7ac4['jumpTicks'] / 0x2) {
                        _0x5a7ac4['oldJump'] = _0x5a7ac4['jumpTicks'] - _0x5a7ac4['oldJump'];
                        _0x5a7ac4['resetOldJump'] = !![];
                        var _0xd24795 = 0.5;
                        for (var _0x25909a = 0x0; _0x25909a < 0x8 && _0x5ef86b == 0x0; _0x25909a++) {
                            var _0x42de27 = Math['floor'](Math['random']() * 0x2);
                            _0x665d6a['add'](new _0x1e6a3f['customParticle'](new _0x1e6a3f['image'](_0x282ecd('smoke' + _0x42de27), _0x5a7ac4['visual']['position']['x'] + Math['random']() * 0x1e - 0xf, _0x5a7ac4['visual']['position']['y'] + Math['random']() * 0x1e - 0xf, 0x32 + Math['random']() * 0x14, 0x32 + Math['random']() * 0x14, _0xd24795), (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 0x1 - _0xd24795, Math['random']() * 0x2 - 0x1, Math['random']() * 0x2 - 0x1));
                        }
                    }
                }
                if (_0x5cca29['la'] !== undefined) {
                    _0x5a7ac4['damageIndicator']['rotation'] = _0x5cca29['la'] / 0x64 + Math['PI'] / 0x2;
                    _0x5a7ac4['damageIndicator']['opacity'] = 0.5;
                }
                if (_0x5cca29['steadying'] !== undefined) {
                    _0x5a7ac4['steadying'] = _0x5cca29['steadying'];
                    if (!_0x5a7ac4['steadying']) {
                        _0x5a7ac4['newWeaponPosition']['y'] = 0x0;
                        _0x5a7ac4['newWeaponPosition']['x'] = 0x0;
                    }
                    if (_0x5cca29['selectedWeapon'] === undefined) {
                        _0x5cca29['selectedWeapon'] = _0x5a7ac4['selectedWeapon'];
                    }
                }
                if (_0x5cca29['building'] !== undefined && _0x5cca29['building'] != _0x5a7ac4['building']) {
                    _0x5a7ac4['weapon']['opacity'] = _0x5a7ac4['switchOpacity'];
                    _0x5a7ac4['building'] = _0x5cca29['building'];
                    if (_0x5cca29['selectedWeapon'] === undefined) {
                        _0x5cca29['selectedWeapon'] = _0x5a7ac4['selectedWeapon'];
                    }
                }
                if (_0x5cca29['mat'] !== undefined) {
                    _0x5a7ac4['mat'] = _0x5cca29['mat'];
                    if (_0x5a7ac4 == _0x1e6a3f['me']) {
                        _0x5a7ac4['material'] = _0x4b47c7[_0x5cca29['mat']];
                        for (var _0x25909a = 0x0; _0x25909a < _0x1a4a1f['length']; _0x25909a++) {
                            _0x1a4a1f[_0x25909a]['color'] = '#000';
                        }
                        _0x1a4a1f[0x2 - _0x5cca29['mat']]['color'] = '#77F';
                    }
                    if (_0x5a7ac4['canBuild']) {
                        _0x5a7ac4['buildingPreview']['image'] = _0x282ecd('blue' + _0x5a7ac4['material']);
                    } else {
                        _0x5a7ac4['buildingPreview']['image'] = _0x282ecd('red' + _0x5a7ac4['material']);
                    }
                }
                if (_0x5cca29['mats'] !== undefined) {
                    if (_0x5a7ac4 == _0x1e6a3f['me']) {
                        for (var _0x25909a = 0x0; _0x25909a < _0x5cca29['mats']['length']; _0x25909a++) {
                            if (_0x5a7ac4['materials'][_0x25909a] < _0x5cca29['mats'][_0x25909a]) {
                                var _0x873e25 = new _0x1e6a3f['image'](_0x282ecd(_0x4b47c7[_0x25909a]), -(0x2 - _0x25909a) * _0x59bb45 * 0.9 - _0x59bb45 + (_0x59bb45 - _0x2140fe) / 0x2, -_0x59bb45 * 2.5 - 0x6e, 0x32, 0x32);
                                _0x873e25['add'](new _0x1e6a3f['text']('+' + (_0x5cca29['mats'][_0x25909a] - _0x5a7ac4['materials'][_0x25909a]), 0x0, 0x28, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center'));
                                if (_0x5cca29['mats'][_0x25909a] - _0x5a7ac4['materials'][_0x25909a] == 0x5) {
                                    _0x873e25['objects'][_0x873e25['objects']['length'] - 0x1]['canvas'] = _0x1d5f1b;
                                }
                                var _0x39650e = new _0x1e6a3f['customParticle'](_0x873e25, 0x0, 0.7, 0x0, -0.6);
                                _0x39650e['turn'] = 0x0;
                                _0x39650e['widthFade'] = 0x0;
                                _0x39650e['heightFade'] = 0x0;
                                _0x174e9d['add'](_0x39650e);
                                _0x873e25['rotation'] = 0x0;
                            }
                        }
                    }
                    _0x5a7ac4['materials'] = _0x5cca29['mats'];
                }
                if (_0x5cca29['canBuild'] !== undefined) {
                    _0x5a7ac4['canBuild'] = _0x5cca29['canBuild'];
                    if (_0x5a7ac4['canBuild']) {
                        _0x5a7ac4['buildingPreview']['image'] = _0x282ecd('blue' + _0x5a7ac4['material']);
                    } else {
                        _0x5a7ac4['buildingPreview']['image'] = _0x282ecd('red' + _0x5a7ac4['material']);
                    }
                }
                if (_0x5cca29['rs'] !== undefined) {
                    _0x134785('reload', _0x1e6a3f['me']['visual']['position'], _0x5a7ac4['visual']['position']);
                }
                if (_0x5cca29['frt'] !== undefined) {
                    _0x5a7ac4['fullReload'] = _0x5cca29['frt'];
                }
                if (_0x5cca29['rt'] !== undefined) {
                    _0x5a7ac4['oldReloadTime'] = _0x5a7ac4['reloadTime'];
                    _0x5a7ac4['newReloadTime'] = _0x5cca29['rt'];
                    if (_0x5a7ac4['newReloadTime'] > _0x5a7ac4['oldReloadTime']) {
                        _0x5a7ac4['oldReloadTime'] = _0x5a7ac4['newReloadTime'];
                    }
                    if (_0x5a7ac4['reloadTime'] == 0x0) {
                        _0x5a7ac4['oldReloadTime'] = _0x5cca29['rt'];
                    }
                    if (_0x123695['indexOf'](_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type']) != -0x1) {
                        if (_0x5cca29['rt'] > 0x0) {
                            if (!_0x5a7ac4['healing']) {
                                _0x5a7ac4['healSin'] = 0x0;
                            }
                            _0x5a7ac4['healing'] = !![];
                        }
                    }
                    if (_0x5cca29['rt'] == -0xa) {
                        _0x5a7ac4['reloadTime'] = _0x5a7ac4['oldReloadTime'] = _0x5a7ac4['newReloadTime'] = 0x0;
                        _0x191016['opacity'] = 0x0;
                    }
                } else {
                    if (_0x5a7ac4['newReloadTime'] == 0x0) {
                        _0x5a7ac4['oldReloadTime'] = 0x0;
                    }
                }
                if (_0x5cca29['v'] !== undefined) {
                    _0x5a7ac4['inVehicle'] = _0x5cca29['v'];
                }
                if (_0x5cca29['weaponSlots'] !== undefined) {
                    _0x5a7ac4['weaponSlots'] = _0x5cca29['weaponSlots'];
                    _0x5a7ac4['updateWeaponSlots'] = !![];
                    _0x5a7ac4['resetSelectedWeapon'] = !![];
                }
                if (_0x5cca29['picaxeSkin'] !== undefined) {
                    _0x5a7ac4['picaxeSkin'] = _0x5cca29['picaxeSkin'];
                }
                if (_0x5cca29['wAmmo'] !== undefined) {
                    _0x5a7ac4['wAmmo'] = _0x5cca29['wAmmo'];
                    _0x5a7ac4['updateWeaponSlots'] = !![];
                }
                if (_0x5cca29['ammo'] !== undefined) {
                    _0x5a7ac4['ammo'] = _0x5cca29['ammo'];
                    _0x5a7ac4['updateWeaponSlots'] = !![];
                    if (_0x5a7ac4 == _0x1e6a3f['me']) {
                        for (var _0x25909a = 0x0; _0x25909a < _0x281050['length']; _0x25909a++) {
                            _0x281050[0x3 - _0x25909a]['text']['text'] = _0x5a7ac4['ammo'][_0x25909a]['toString']();
                        }
                    }
                }
                if (_0x5a7ac4 == _0x1e6a3f['me'] && _0x5a7ac4['updateWeaponSlots']) {
                    _0x5cca29['weaponSlots'] = _0x5a7ac4['weaponSlots'];
                    _0x5cca29['wAmmo'] = _0x5a7ac4['wAmmo'];
                    if (_0x5a7ac4 == _0x1e6a3f['me'] && !_0x1e6a3f['spectating'] && _0x5a7ac4['weaponSlots'][_0x9a4f65]['type'] == 'empty') {
                        for (var _0x25909a = _0x9a4f65; _0x25909a >= 0x0; _0x25909a--) {
                            if (_0x5a7ac4['weaponSlots'][_0x25909a]['type'] != 'empty') {
                                _0x9a4f65 = _0x25909a;
                                _0x1e6a3f['currentPackets']['push']({
                                    'type': 'select',
                                    'weapon': _0x9a4f65
                                });
                                break;
                            }
                        }
                    }
                    var _0x3a30ab = 0x1e;
                    for (var _0x25909a = 0x0; _0x25909a < _0x5cca29['weaponSlots']['length'] && _0x25909a < _0x2fba54['length']; _0x25909a++) {
                        var _0xd6d77d = _0x5cca29['weaponSlots'][_0x25909a];
                        var _0x56f1d1 = new _0x1e6a3f['image'](_0x282ecd('inv' + _0xd6d77d['rarity']), 0x0, 0x0, _0x59bb45, _0x59bb45);
                        var _0x4b9f26 = new _0x1e6a3f['text'](_0x453907('Weapon Slot ' + (_0x25909a + 0x1))['toString'](), 0x0, _0x59bb45 * 0.75, '#FFF', 'Arial Black', _0x3a30ab - 0x7, '', 0x1, 'center');
                        var _0x224036 = 0x20;
                        _0x4b9f26['add'](new _0x1e6a3f['strokeRectangle'](0x0, 0x0, _0x224036, _0x224036, '#FFF', 0x3));
                        _0x56f1d1['add'](_0x4b9f26);
                        _0x4b9f26['size'] = 0.8;
                        if (_0xd6d77d['type'] == 'empty') {
                            _0x56f1d1['remove'](_0x4b9f26);
                            _0x56f1d1 = new _0x1e6a3f['rectangle'](0x0, 0x0, _0x59bb45, _0x59bb45, '#000', 0.2);
                            _0x56f1d1['add'](_0x4b9f26);
                        } else if (_0xd6d77d['type'] == 'picaxe') {
                            var _0x147d30 = new _0x1e6a3f['object']();
                            _0x147d30['position'] = new _0x1e6a3f['Vector2'](0x2, 0x5);
                            var _0x1527c7 = new _0x1e6a3f['image'](_0x282ecd(_0x5a7ac4['picaxeSkin']), 0x0, 0x0, _0x59bb45 * 0.9, _0x59bb45 * 0.9);
                            _0x147d30['add'](_0x1527c7);
                            _0x1527c7['rotation'] = -Math['PI'] * 0xb / 0x10;
                            _0x56f1d1['add'](_0x147d30);
                        } else if (_0xd6d77d['type'] == 'scar' || _0xd6d77d['type'] == 'bolt' || _0xd6d77d['type'] == 'lmg' || _0xd6d77d['type'] == 'shotgun' || _0xd6d77d['type'] == 'heavy' || _0xd6d77d['type'] == 'smg' || _0xd6d77d['type'] == 'ump' || _0xd6d77d['type'] == 'rifle' || _0xd6d77d['type'] == 'ar-15' || _0xd6d77d['type'] == 'scoped ar' || _0xd6d77d['type'] == 'deagle' || _0xd6d77d['type'] == 'rpg' || _0xd6d77d['type'] == 'famas' || _0xd6d77d['type'] == 'tommy gun' || _0xd6d77d['type'] == 'drum' || _0xd6d77d['type'] == 'musket' || _0xd6d77d['type'] == 'heavy sniper' || _0xd6d77d['type'] == 'ak47' || _0xd6d77d['type'] == 'combat' || _0xd6d77d['type'] == 'silencedpistol' || _0xd6d77d['type'] == 'aug' || _0xd6d77d['type'] == 'burst shotgun') {
                            var _0x1d598e = new _0x1e6a3f['object']();
                            _0x1d598e['position'] = new _0x1e6a3f['Vector2'](-0x2, 0x0);
                            var _0x5326d8 = new _0x1e6a3f['image'](_0x282ecd(_0xd6d77d['type']), 0x0, 0x0, _0x59bb45 * 1.04, _0x59bb45 * 1.04);
                            _0x1d598e['add'](_0x5326d8);
                            _0x5326d8['rotation'] = -Math['PI'] * 0xc / 0x10 + Math['PI'];
                            if (_0xd6d77d['type'] == 'deagle') {
                                _0x5326d8['size'] = 0.8;
                            }
                            _0x56f1d1['add'](_0x1d598e);
                            if (_0x5cca29['wAmmo'][_0x25909a - 0x1] >= 0x0) {
                                var _0x5baba0 = new _0x1e6a3f['strokeText']((_0x5a7ac4['ammo'][_0x560888[_0xd6d77d['type']]] + _0x5cca29['wAmmo'][_0x25909a - 0x1])['toString'](), -_0x59bb45 / 0x2 + _0x3a30ab / 0x3, _0x59bb45 / 0x2 - _0x3a30ab / 0x2, '#000', 'Arial Black', _0x3a30ab - 0x7, '', 0x1, 'left');
                                _0x5baba0['lineWidth'] = 0x4;
                                _0x5baba0['add'](new _0x1e6a3f['text']((_0x5a7ac4['ammo'][_0x560888[_0xd6d77d['type']]] + _0x5cca29['wAmmo'][_0x25909a - 0x1])['toString'](), 0x0, 0x0, '#FFF', 'Arial Black', _0x3a30ab - 0x7, '', 0x1, 'left'));
                                _0x56f1d1['add'](_0x5baba0);
                                var _0x37f44 = new _0x1e6a3f['image'](_0x282ecd('inventoryammo' + _0x560888[_0xd6d77d['type']]), _0x59bb45 / 0x2 - _0x3a30ab / 0x2 - 0x5, -_0x59bb45 / 0x2 + _0x3a30ab / 0x2 + 0x5, _0x3a30ab, _0x3a30ab);
                                _0x37f44['rotation'] = Math['PI'] / 0x5;
                                _0x56f1d1['add'](_0x37f44);
                            }
                        } else if (_0xd6d77d['type'] == 'mini' || _0xd6d77d['type'] == 'pot' || _0xd6d77d['type'] == 'bandages' || _0xd6d77d['type'] == 'medkit' || _0xd6d77d['type'] == 'snowball') {
                            var _0x1d598e = new _0x1e6a3f['object']();
                            _0x1d598e['position'] = new _0x1e6a3f['Vector2'](-0x2, 0x0);
                            var _0x5326d8 = new _0x1e6a3f['image'](_0x282ecd(_0xd6d77d['type']), 0x0, 0x0, _0x59bb45 * 0.7, _0x59bb45 * 0.7);
                            if (_0xd6d77d['type'] == 'bandages') {
                                _0x5326d8['position']['x'] += 0x5;
                            }
                            _0x1d598e['add'](_0x5326d8);
                            _0x5326d8['rotation'] = 0x0;
                            _0x56f1d1['add'](_0x1d598e);
                            if (_0x5cca29['wAmmo'][_0x25909a - 0x1] >= 0x0) {
                                var _0x5baba0 = new _0x1e6a3f['strokeText'](_0x5cca29['wAmmo'][_0x25909a - 0x1]['toString'](), -_0x59bb45 / 0x2 + _0x3a30ab / 0x3, _0x59bb45 / 0x2 - _0x3a30ab / 0x2, '#000', 'Arial Black', _0x3a30ab - 0x7, '', 0x1, 'left');
                                _0x5baba0['lineWidth'] = 0x4;
                                _0x5baba0['add'](new _0x1e6a3f['text'](_0x5cca29['wAmmo'][_0x25909a - 0x1]['toString'](), 0x0, 0x0, '#FFF', 'Arial Black', _0x3a30ab - 0x7, '', 0x1, 'left'));
                                _0x56f1d1['add'](_0x5baba0);
                            }
                        }
                        if (_0x25909a == _0x9a4f65) {
                            if (!_0x5ea1e7)
                                _0x56f1d1['position']['y'] -= 0xa;
                            _0x5886d5['position']['y'] = _0x56f1d1['position']['y'] - _0x59bb45;
                        }
                        _0x2fba54[_0x25909a]['parent']['add'](_0x56f1d1);
                        _0x2fba54[_0x25909a]['parent']['remove'](_0x2fba54[_0x25909a]);
                        _0x2fba54[_0x25909a]['unlink']();
                        _0x2fba54[_0x25909a] = _0x56f1d1;
                    }
                    _0x5a7ac4['updateWeaponSlots'] = ![];
                }
                if (_0x5a7ac4['resetSelectedWeapon']) {
                    if (_0x5cca29['selectedWeapon'] === undefined) {
                        _0x5cca29['selectedWeapon'] = _0x5a7ac4['selectedWeapon'];
                    }
                }
                if (_0x5cca29['selectedWeapon'] !== undefined) {
                    if (_0x5cca29['selectedWeapon'] != _0x5a7ac4['selectedWeapon'] && !_0x5a7ac4['building']) {
                        _0x5a7ac4['weapon']['opacity'] = _0x5a7ac4['switchOpacity'];
                    }
                    _0x5a7ac4['selectedWeapon'] = _0x5cca29['selectedWeapon'];
                    if (_0x5a7ac4 == _0x1e6a3f['me'] && _0x5a7ac4['selectedWeapon'] != _0x9a4f65 && !_0x5a7ac4['knocked']) {
                        _0x1e6a3f['currentPackets']['push']({
                            'type': 'select',
                            'weapon': _0x9a4f65
                        });
                    }
                    if (_0x5a7ac4 == _0x1e6a3f['me']) {
                        _0x158c1e = !![];
                    }
                    if (_0x282ecd(_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type']) != null) {
                        _0x5a7ac4['hands']['remove'](_0x5a7ac4['weapon']);
                        _0x5a7ac4['hands']['remove'](_0x5a7ac4['hand2']);
                        _0x5a7ac4['hands']['remove'](_0x5a7ac4['hand1']);
                        if (_0x5a7ac4['weaponSkin'] != '' && _0x5cc6c9['indexOf'](_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type']) >= 0x0) {
                            _0x5a7ac4['weapon']['image'] = _0x36ec46(_0x5a7ac4['weaponSkin'], _0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type']);
                        } else {
                            _0x5a7ac4['weapon']['image'] = _0x282ecd(_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type']);
                        }
                        if (_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] == 'picaxe' && !_0x5a7ac4['building']) {
                            if (_0x5a7ac4['hair'] == 0x4 || _0x5a7ac4['hair'] == 0x7) {
                                _0x5a7ac4['weapon']['image'] = _0x282ecd('custompic' + (_0x5a7ac4['hair'] - 0x4));
                            } else {
                                _0x5a7ac4['weapon']['image'] = _0x282ecd(_0x5a7ac4['picaxeSkin']);
                            }
                            _0x5a7ac4['hands']['add'](_0x5a7ac4['hand1']);
                            _0x5a7ac4['hands']['add'](_0x5a7ac4['weapon']);
                            _0x5a7ac4['hands']['add'](_0x5a7ac4['hand2']);
                            _0x5a7ac4['weapon']['position']['x'] = 0x18;
                            _0x5a7ac4['weapon']['position']['y'] = 0xa;
                            _0x5a7ac4['weapon']['rotation'] = Math['PI'] / 0x2 + 0.01;
                            _0x5a7ac4['hand1']['position']['x'] = _0x5a7ac4['handXOffset'];
                            _0x5a7ac4['hand2']['position']['x'] = _0x5a7ac4['handXOffset'] - 0x5;
                            _0x5a7ac4['weapon']['size'] = 0x1;
                            if (_0x5a7ac4['knocked']) {
                                _0x5a7ac4['weapon']['size'] = 0x0;
                                _0x5a7ac4['hand1']['position']['x'] = _0x5a7ac4['handXOffset'];
                                _0x5a7ac4['hand2']['position']['x'] = _0x5a7ac4['handXOffset'];
                            }
                            if (_0x5a7ac4 == _0x1e6a3f['me']) {
                                _0x158c1e = ![];
                            }
                        } else {
                            if (!_0x5a7ac4['healing']) {
                                _0x5a7ac4['hand1']['position']['x'] = _0x5a7ac4['handXOffset'];
                                _0x5a7ac4['hand2']['position']['x'] = _0x5a7ac4['handXOffset'] + 0x4;
                            }
                            _0x5a7ac4['hand1']['position']['y'] = _0x5a7ac4['handYOffset'];
                            if (_0x5a7ac4['steadying'] && !_0x5a7ac4['building']) {
                                _0x5a7ac4['hands']['add'](_0x5a7ac4['hand1']);
                                _0x5a7ac4['hands']['add'](_0x5a7ac4['hand2']);
                                _0x5a7ac4['hands']['add'](_0x5a7ac4['weapon']);
                                _0x5a7ac4['hand1']['position']['x'] = _0x5a7ac4['handXOffset'] + 0x6;
                                _0x5a7ac4['hand1']['position']['y'] = _0x5a7ac4['handYOffset'] - 0x5;
                                if (_0x282ecd('top' + _0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type']) != null) {
                                    if (_0x5a7ac4['weaponSkin'] != '' && _0x5cc6c9['indexOf'](_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type']) >= 0x0) {
                                        _0x5a7ac4['weapon']['image'] = _0x36ec46(_0x5a7ac4['weaponSkin'], 'top' + _0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type']);
                                    } else {
                                        _0x5a7ac4['weapon']['image'] = _0x282ecd('top' + _0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type']);
                                    }
                                }
                            } else if (!_0x5a7ac4['building']) {
                                _0x5a7ac4['hands']['add'](_0x5a7ac4['hand1']);
                                _0x5a7ac4['hands']['add'](_0x5a7ac4['weapon']);
                                _0x5a7ac4['hands']['add'](_0x5a7ac4['hand2']);
                                if (_0x5a7ac4['weaponSkin'] != '' && _0x5cc6c9['indexOf'](_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type']) >= 0x0) {
                                    _0x5a7ac4['weapon']['image'] = _0x36ec46(_0x5a7ac4['weaponSkin'], _0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type']);
                                } else {
                                    _0x5a7ac4['weapon']['image'] = _0x282ecd(_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type']);
                                }
                            }
                            if (_0x5a7ac4['building']) {
                                _0x5a7ac4['hands']['add'](_0x5a7ac4['hand1']);
                                _0x5a7ac4['hands']['add'](_0x5a7ac4['hand2']);
                                _0x5a7ac4['hands']['add'](_0x5a7ac4['weapon']);
                                _0x5a7ac4['weapon']['image'] = _0x282ecd('blueprint');
                                _0x5a7ac4['hand2']['position']['x'] = _0x5a7ac4['handXOffset'] - 0x5;
                                _0x5a7ac4['hand1']['position']['x'] = _0x5a7ac4['handXOffset'] - 0x5;
                                _0x5a7ac4['weapon']['position']['x'] = 0x1e;
                                _0x5a7ac4['weapon']['position']['y'] = 0x0;
                                _0x5a7ac4['weapon']['size'] = 0.56;
                                _0x5a7ac4['weapon']['rotation'] = Math['PI'] / 0x2;
                                if (_0x5a7ac4 == _0x1e6a3f['me']) {
                                    _0x158c1e = ![];
                                }
                            } else {
                                if (!_0x5a7ac4['healing']) {
                                    _0x5a7ac4['weapon']['position']['x'] = 0x18;
                                    _0x5a7ac4['weapon']['position']['y'] = -0xd;
                                }
                                _0x5a7ac4['weapon']['rotation'] = Math['PI'] / 0x2 + 0.2;
                                _0x5a7ac4['weapon']['size'] = 0x1;
                                _0x5a7ac4['originalWeaponX'] = 0x1c;
                                var _0xd6d77d = _0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']];
                                if (_0x5a7ac4 == _0x1e6a3f['me']) {
                                    _0x52b9d4['text'] = _0x5a7ac4['ammo'][_0x560888[_0xd6d77d['type']]];
                                    _0x141031['text'] = _0x5a7ac4['wAmmo'][_0x5a7ac4['selectedWeapon'] - 0x1];
                                    _0xa4e22e['image'] = _0x282ecd('inventoryammo' + _0x560888[_0xd6d77d['type']]);
                                }
                                if (_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] == 'bolt') {
                                    if (!_0x5a7ac4['steadying'])
                                        _0x5a7ac4['weapon']['position']['x'] = 0x1e;
                                    else {
                                        _0x5a7ac4['weapon']['position']['y'] = -0x16;
                                        _0x5a7ac4['weapon']['position']['x'] = 0x1a;
                                    }
                                } else if (_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] == 'lmg') {
                                    if (!_0x5a7ac4['steadying']) {
                                        _0x5a7ac4['weapon']['position']['x'] = 0x1c;
                                        _0x5a7ac4['weapon']['position']['y'] = -0x9;
                                        _0x5a7ac4['weapon']['rotation'] = Math['PI'] / 0x2 + 0.3;
                                        _0x5a7ac4['weapon']['size'] = 1.1;
                                    }
                                } else if (_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] == 'shotgun' || _0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] == 'heavy' || _0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] == 'drum') {
                                    if (!_0x5a7ac4['steadying']) {
                                        _0x5a7ac4['weapon']['position']['x'] = 0x1c;
                                        _0x5a7ac4['weapon']['position']['y'] = -0x9;
                                        _0x5a7ac4['weapon']['rotation'] = Math['PI'] / 0x2 + 0.2;
                                        _0x5a7ac4['weapon']['size'] = 1.05;
                                    }
                                } else if (_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] == 'smg' || _0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] == 'ump') {
                                    if (!_0x5a7ac4['steadying']) {
                                        _0x5a7ac4['weapon']['position']['x'] = 0x1c;
                                        _0x5a7ac4['weapon']['position']['y'] = -0x9;
                                        _0x5a7ac4['weapon']['rotation'] = Math['PI'] / 0x2 + 0.2;
                                        _0x5a7ac4['weapon']['size'] = 1.05;
                                    }
                                } else if (_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] == 'rpg') {
                                    if (!_0x5a7ac4['steadying']) {
                                        _0x5a7ac4['weapon']['position']['x'] = 0x1c;
                                        _0x5a7ac4['weapon']['size'] = 1.1;
                                        _0x5a7ac4['weapon']['rotation'] = Math['PI'] / 0x2 + 0.3;
                                    }
                                } else if (_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] == 'deagle') {
                                    if (!_0x5a7ac4['steadying']) {
                                        _0x5a7ac4['weapon']['position']['x'] = 0x1c;
                                        _0x5a7ac4['weapon']['position']['y'] = 0x0;
                                        _0x5a7ac4['weapon']['rotation'] = Math['PI'] / 0x2 + 0.2;
                                        _0x5a7ac4['weapon']['size'] = 0.7;
                                    }
                                } else if (_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] == 'tommy gun') {
                                    if (!_0x5a7ac4['steadying']) {
                                        _0x5a7ac4['weapon']['position']['x'] = 0x1e;
                                        _0x5a7ac4['weapon']['size'] = 1.15;
                                    }
                                } else if (_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] == 'heavy sniper') {
                                    if (!_0x5a7ac4['steadying']) {
                                        _0x5a7ac4['weapon']['position']['x'] = 0x1c;
                                        _0x5a7ac4['weapon']['size'] = 1.05;
                                    }
                                } else if (_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] == 'mini') {
                                    _0x5a7ac4['hands']['remove'](_0x5a7ac4['weapon']);
                                    _0x5a7ac4['hands']['remove'](_0x5a7ac4['hand2']);
                                    _0x5a7ac4['hands']['remove'](_0x5a7ac4['hand1']);
                                    _0x5a7ac4['hands']['add'](_0x5a7ac4['hand1']);
                                    _0x5a7ac4['hands']['add'](_0x5a7ac4['hand2']);
                                    _0x5a7ac4['hands']['add'](_0x5a7ac4['weapon']);
                                    if (!_0x5a7ac4['healing']) {
                                        _0x5a7ac4['hand1']['position']['x'] = _0x5a7ac4['handXOffset'] - 0x3;
                                        _0x5a7ac4['hand2']['position']['x'] = _0x5a7ac4['handXOffset'] - 0x3;
                                        _0x5a7ac4['weapon']['position']['x'] = 0x1c;
                                    }
                                    _0x5a7ac4['weapon']['position']['y'] = 0x5;
                                    _0x5a7ac4['weapon']['size'] = 0.5;
                                    _0x5a7ac4['weapon']['rotation'] = Math['PI'] / 0x2 - 0.1;
                                    _0x5a7ac4['healRotations'] = 0x2;
                                    if (_0x5a7ac4 == _0x1e6a3f['me'])
                                        _0x158c1e = ![];
                                } else if (_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] == 'pot') {
                                    _0x5a7ac4['hands']['remove'](_0x5a7ac4['weapon']);
                                    _0x5a7ac4['hands']['remove'](_0x5a7ac4['hand2']);
                                    _0x5a7ac4['hands']['remove'](_0x5a7ac4['hand1']);
                                    _0x5a7ac4['hands']['add'](_0x5a7ac4['hand1']);
                                    _0x5a7ac4['hands']['add'](_0x5a7ac4['hand2']);
                                    _0x5a7ac4['hands']['add'](_0x5a7ac4['weapon']);
                                    if (!_0x5a7ac4['healing']) {
                                        _0x5a7ac4['hand1']['position']['x'] = _0x5a7ac4['handXOffset'] - 0x3;
                                        _0x5a7ac4['hand2']['position']['x'] = _0x5a7ac4['handXOffset'] - 0x3;
                                        _0x5a7ac4['weapon']['position']['x'] = 0x1c;
                                    }
                                    _0x5a7ac4['weapon']['position']['y'] = 0x2;
                                    _0x5a7ac4['weapon']['size'] = 0.5;
                                    _0x5a7ac4['weapon']['rotation'] = Math['PI'] / 0x2 - 0.1;
                                    _0x5a7ac4['healRotations'] = 0x5;
                                    if (_0x5a7ac4 == _0x1e6a3f['me'])
                                        _0x158c1e = ![];
                                } else if (_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] == 'bandages') {
                                    _0x5a7ac4['hands']['remove'](_0x5a7ac4['weapon']);
                                    _0x5a7ac4['hands']['remove'](_0x5a7ac4['hand2']);
                                    _0x5a7ac4['hands']['remove'](_0x5a7ac4['hand1']);
                                    _0x5a7ac4['hands']['add'](_0x5a7ac4['hand1']);
                                    _0x5a7ac4['hands']['add'](_0x5a7ac4['hand2']);
                                    _0x5a7ac4['hands']['add'](_0x5a7ac4['weapon']);
                                    if (!_0x5a7ac4['healing']) {
                                        _0x5a7ac4['hand1']['position']['x'] = _0x5a7ac4['handXOffset'] - 0x3;
                                        _0x5a7ac4['hand2']['position']['x'] = _0x5a7ac4['handXOffset'] - 0x3;
                                        _0x5a7ac4['weapon']['position']['x'] = 0xf;
                                    }
                                    _0x5a7ac4['originalWeaponX'] = 0xf;
                                    _0x5a7ac4['weapon']['position']['y'] = 0x0;
                                    _0x5a7ac4['weapon']['size'] = 0.5;
                                    _0x5a7ac4['weapon']['rotation'] = Math['PI'] * 0x3 / 0x2 + 0.05;
                                    _0x5a7ac4['healRotations'] = 0x3;
                                    if (_0x5a7ac4 == _0x1e6a3f['me'])
                                        _0x158c1e = ![];
                                } else if (_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] == 'medkit') {
                                    _0x5a7ac4['hands']['remove'](_0x5a7ac4['weapon']);
                                    _0x5a7ac4['hands']['remove'](_0x5a7ac4['hand2']);
                                    _0x5a7ac4['hands']['remove'](_0x5a7ac4['hand1']);
                                    _0x5a7ac4['hands']['add'](_0x5a7ac4['hand1']);
                                    _0x5a7ac4['hands']['add'](_0x5a7ac4['hand2']);
                                    _0x5a7ac4['hands']['add'](_0x5a7ac4['weapon']);
                                    if (!_0x5a7ac4['healing']) {
                                        _0x5a7ac4['hand1']['position']['x'] = _0x5a7ac4['handXOffset'] - 0x3;
                                        _0x5a7ac4['hand2']['position']['x'] = _0x5a7ac4['handXOffset'] - 0x3;
                                        _0x5a7ac4['weapon']['position']['x'] = 0x1c;
                                    }
                                    _0x5a7ac4['weapon']['position']['y'] = 0x2;
                                    _0x5a7ac4['weapon']['size'] = 0.5;
                                    _0x5a7ac4['weapon']['rotation'] = Math['PI'] / 0x2 - 0.1;
                                    _0x5a7ac4['healRotations'] = 0x5;
                                    if (_0x5a7ac4 == _0x1e6a3f['me'])
                                        _0x158c1e = ![];
                                } else if (_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type'] == 'snowball') {
                                    _0x5a7ac4['hands']['remove'](_0x5a7ac4['weapon']);
                                    _0x5a7ac4['hands']['remove'](_0x5a7ac4['hand2']);
                                    _0x5a7ac4['hands']['remove'](_0x5a7ac4['hand1']);
                                    _0x5a7ac4['hands']['add'](_0x5a7ac4['hand1']);
                                    _0x5a7ac4['hands']['add'](_0x5a7ac4['hand2']);
                                    _0x5a7ac4['hands']['add'](_0x5a7ac4['weapon']);
                                    if (!_0x5a7ac4['healing']) {
                                        _0x5a7ac4['hand1']['position']['x'] = _0x5a7ac4['handXOffset'] - 0x3;
                                        _0x5a7ac4['hand2']['position']['x'] = _0x5a7ac4['handXOffset'] - 0x3;
                                        _0x5a7ac4['weapon']['position']['x'] = 0x1b;
                                        _0x5a7ac4['weapon']['position']['y'] = 0x14;
                                    }
                                    _0x5a7ac4['weapon']['size'] = 0.5;
                                    _0x5a7ac4['weapon']['rotation'] = Math['PI'] / 0x2 - 0.1;
                                    _0x5a7ac4['healRotations'] = 0x5;
                                    if (_0x5a7ac4 == _0x1e6a3f['me'])
                                        _0x158c1e = ![];
                                }
                            }
                        }
                    }
                }
                _0x5a7ac4['currentWeaponPosition'] = _0x5a7ac4['weapon']['position']['clone']();
                if (_0x5a7ac4['building']) {
                    var _0x24b1d6 = _0x5dcde4(_0x5a7ac4['visual']['rotation']);
                    var _0x1e55cf = 0x6;
                    _0x127702 /= _0x1e55cf;
                    var _0x376689 = _0x127702;
                    var _0x58db42 = ![];
                    var _0x5ed9b9 = ![];
                    if (_0x24b1d6 < Math['PI'] / 0x4 || _0x24b1d6 > Math['PI'] * 0x7 / 0x4) {
                        _0x5a7ac4['buildingPreview']['rotation'] = 0x0;
                        _0x5a7ac4['buildingPreview']['position']['x'] = (Math['round'](_0x5a7ac4['new']['position']['x'] / _0x376689) + 2.5) * _0x127702;
                        _0x5a7ac4['buildingPreview']['position']['y'] = Math['round'](_0x5a7ac4['new']['position']['y'] / _0x376689) * _0x127702;
                        _0x5ed9b9 = !![];
                    } else if (_0x24b1d6 < Math['PI'] * 0x3 / 0x4) {
                        _0x5a7ac4['buildingPreview']['rotation'] = Math['PI'] / 0x2;
                        _0x5a7ac4['buildingPreview']['position']['x'] = Math['round'](_0x5a7ac4['new']['position']['x'] / _0x376689) * _0x127702;
                        _0x5a7ac4['buildingPreview']['position']['y'] = (Math['round'](_0x5a7ac4['new']['position']['y'] / _0x376689) + 2.5) * _0x127702;
                        _0x58db42 = !![];
                    } else if (_0x24b1d6 < Math['PI'] * 0x5 / 0x4) {
                        _0x5a7ac4['buildingPreview']['rotation'] = 0x0;
                        _0x5a7ac4['buildingPreview']['position']['x'] = (Math['round'](_0x5a7ac4['new']['position']['x'] / _0x376689) - 2.5) * _0x127702;
                        _0x5a7ac4['buildingPreview']['position']['y'] = Math['round'](_0x5a7ac4['new']['position']['y'] / _0x376689) * _0x127702;
                        _0x5ed9b9 = !![];
                    } else {
                        _0x5a7ac4['buildingPreview']['rotation'] = Math['PI'] / 0x2;
                        _0x5a7ac4['buildingPreview']['position']['x'] = Math['round'](_0x5a7ac4['new']['position']['x'] / _0x376689) * _0x127702;
                        _0x5a7ac4['buildingPreview']['position']['y'] = (Math['round'](_0x5a7ac4['new']['position']['y'] / _0x376689) - 2.5) * _0x127702;
                        _0x58db42 = !![];
                    }
                    if (_0x58db42) {
                        _0x5a7ac4['buildingPreview']['position']['x'] += Math['round'](Math['cos'](_0x24b1d6) * 0x2) * _0x127702;
                    }
                    if (_0x5ed9b9) {
                        _0x5a7ac4['buildingPreview']['position']['y'] += Math['round'](Math['sin'](_0x24b1d6) * 0x2) * _0x127702;
                    }
                    _0x127702 *= _0x1e55cf;
                }
                if (_0x5cca29['stamina'] !== undefined) {
                    _0x5a7ac4['staminaVal'] = _0x5cca29['stamina'];
                } else {
                    _0x5a7ac4['staminaVal'] = 0x64;
                }
                if (_0x5a7ac4 == _0x1e6a3f['me']) {
                    _0x5a7ac4['oldSpread'] = _0x5a7ac4['currentSpread'];
                    if (_0x5cca29['spread'] !== undefined) {
                        _0x5a7ac4['spread'] = _0x5cca29['spread'] / 0x64;
                    }
                    _0x131318['text'] = _0x5a7ac4['name'];
                    _0x165bbd['text'] = _0x5a7ac4['name'];
                }
                if (_0x1e6a3f['spectating']) { }
                if (_0x5a7ac4 == _0x1e6a3f['me'] && _0x5cca29['close'] !== undefined) {
                    if (_0x5cca29['closeR'] === undefined) {
                        _0x5a7ac4['hasGroundItem'] = ![];
                    } else if (_0x5cca29['close'] != _0x5a7ac4['lastClose'] || _0x5cca29['closeR'] != _0x5a7ac4['lastCloseR']) {
                        _0x811bcc['weaponName']['text'] = _0x5cca29['close']['toUpperCase']();
                        _0x811bcc['weapon']['image'] = _0x282ecd(_0x5cca29['close']);
                        _0x811bcc['weapon']['size'] = 1.4;
                        _0x811bcc['weapon']['width'] = _0x811bcc['weapon']['height'] = 0x64;
                        _0x811bcc['weapon']['rotation'] = Math['PI'] / 0x7;
                        var _0x286f3f = 'Press ' + _0x453907('Pickup 1') + '/' + _0x453907('Pickup 2') + ' to ';
                        _0x4d83f4['text'] = _0x286f3f + 'pick up';
                        if (_0x5cca29['close'] == 'mini') {
                            _0x811bcc['weapon']['size'] = 0x1;
                            _0x811bcc['weapon']['rotation'] = 0x0;
                            _0x811bcc['weaponName']['text'] = 'Mini Potion';
                        } else if (_0x5cca29['close'] == 'pot') {
                            _0x811bcc['weapon']['size'] = 0x1;
                            _0x811bcc['weapon']['rotation'] = 0x0;
                            _0x811bcc['weaponName']['text'] = 'Potion';
                        } else if (_0x5cca29['close'] == 'bandages' || _0x5cca29['close'] == 'medkit') {
                            _0x811bcc['weapon']['size'] = 0x1;
                            _0x811bcc['weapon']['rotation'] = 0x0;
                        } else if (_0x5cca29['close'] == 'chest') {
                            _0x811bcc['weapon']['size'] = 0.7;
                            _0x811bcc['weapon']['width'] = 0x96;
                            _0x811bcc['weapon']['rotation'] = 0x0;
                            _0x4d83f4['text'] = _0x286f3f + 'open';
                        } else if (_0x5cca29['close'] == 'revive') {
                            _0x4d83f4['text'] = _0x286f3f + 'revive';
                            _0x811bcc['weapon']['rotation'] = 0x0;
                            _0x811bcc['weapon']['width'] = _0x811bcc['weapon']['height'] = 0x78;
                            _0x811bcc['weapon']['width'] -= 0x4;
                        } else if (_0x5cca29['close'] == 'baller') {
                            _0x811bcc['weapon']['size'] = 1.2;
                            _0x811bcc['weapon']['rotation'] = 0x0;
                            _0x811bcc['weapon']['width'] = _0x811bcc['weapon']['height'] = 0x78;
                            _0x811bcc['weapon']['width'] -= 0x4;
                            _0x4d83f4['text'] = _0x286f3f + 'ride';
                        }
                        _0x30c296['text'] = _0x4d83f4['text'];
                        _0x811bcc['stroke']['color'] = _0x189c64[_0x5cca29['closeR']]['color'];
                        _0x5c56b4['opacity'] = 0x0;
                        _0x811bcc['fill']['color'] = _0x189c64[_0x5cca29['closeR']]['color'];
                        _0x5a7ac4['hasGroundItem'] = !![];
                        _0x5a7ac4['lastClose'] = _0x5cca29['close'];
                        _0x5a7ac4['lastCloseR'] = _0x5cca29['closeR'];
                        _0x811bcc['weaponNameStroke']['text'] = _0x811bcc['weaponName']['text'];
                        _0x17569f();
                    } else {
                        _0x5a7ac4['hasGroundItem'] = !![];
                    }
                }
                var _0x55f048 = _0x4648a0(_0x5a7ac4['actualNew']['position'], _0x5a7ac4['actualOld']['position']);
                if (_0x5a7ac4['newJump'] <= 0x0) {
                    _0x5a7ac4['timeUntilSound'] -= _0x55f048;
                } else {
                    _0x5a7ac4['timeUntilSound'] = 0x1;
                }
                if (_0x5a7ac4['timeUntilSound'] <= 0x0 && _0x5a7ac4['isPreview'] === undefined && !_0x5a7ac4['inVehicle']) {
                    if (_0x5a7ac4['house'] < 0x0 && _0x2f153f) {
                        _0x134785('christmasstep' + Math['floor'](Math['random']() * _0x4a072b), _0x1e6a3f['me']['visual']['position'], _0x5a7ac4['visual']['position']);
                        _0x5a7ac4['timeUntilSound'] = 0x96;
                    } else {
                        _0x134785('step' + Math['floor'](Math['random']() * _0x4a072b), _0x1e6a3f['me']['visual']['position'], _0x5a7ac4['visual']['position']);
                        _0x5a7ac4['timeUntilSound'] = 0x64;
                    }
                }
                if (_0x5cca29['needAmmo'] !== undefined && _0x5cca29['needAmmo'] && _0x1e6a3f['me']['team'] !== undefined) {
                    if (_0x1e6a3f['me']['team']['length'] > 0x0 && _0x5a7ac4['selectedWeapon'] != 0x0 && (_0x5a7ac4 == _0x1e6a3f['me'] || _0x1e6a3f['me']['team']['indexOf'](_0x5a7ac4) != -0x1) && _0x560888[_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type']] <= 0x3) {
                        _0x5a7ac4['speechTimer'] = 0xf;
                        _0x5a7ac4['speechAmmo']['image'] = _0x282ecd('stack' + _0x560888[_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type']]);
                    }
                }
                if (_0x5cca29['needAmmo'] !== undefined && _0x5cca29['needAmmo'] && _0x5a7ac4['selectedWeapon'] != 0x0 && _0x1e6a3f['me']['infected'] != -0x1 && _0x1e6a3f['me']['infected'] == _0x5a7ac4['infected'] && _0x560888[_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type']] <= 0x3) {
                    _0x5a7ac4['speechTimer'] = 0xf;
                    _0x5a7ac4['speechAmmo']['image'] = _0x282ecd('stack' + _0x560888[_0x5a7ac4['weaponSlots'][_0x5a7ac4['selectedWeapon']]['type']]);
                }
            }, function (_0xe9382, _0x2127b9) {
                if (!_0xe9382['dead']) {
                    if (_0x2b3cd2['length'] == 0x0) {
                        _0xe9382['oldPlayerCanvas'] = document['createElement']('canvas');
                    } else {
                        _0xe9382['oldPlayerCanvas'] = _0x2b3cd2[0x0];
                        _0x2b3cd2['splice'](0x0, 0x1);
                        _0xe9382['oldPlayerCanvas']['getContext']('2d')['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                        var _0x42d855 = _0xe9382['oldPlayerCanvas']['width'];
                        _0xe9382['oldPlayerCanvas']['getContext']('2d')['clearRect'](-0x1, -0x1, _0x42d855, _0x42d855);
                    }
                    var _0x526f6b = 0x12c;
                    var _0x479ee8 = new _0x1e6a3f['image'](_0xe9382['oldPlayerCanvas'], 0x0, 0x0, _0x526f6b, _0x526f6b, 0x0);
                    _0xe9382['oldPlayerCanvas']['width'] = _0x526f6b;
                    _0xe9382['oldPlayerCanvas']['height'] = _0x526f6b;
                    var _0x563846 = _0xe9382['oldPlayerCanvas']['getContext']('2d');
                    _0x563846['globalAlpha'] = 0x1;
                    _0x563846['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                    _0x563846['translate'](_0x526f6b / 0x2, _0x526f6b / 0x2);
                    _0xe9382['sprite']['render'](_0x563846, 0x1, 0x1);
                    _0xe9382['sprite']['belowObjects'] = [];
                    _0xe9382['sprite']['objects'] = [new _0x1e6a3f['object']()];
                    _0xe9382['sprite']['add'](_0x479ee8);
                    if (_0xe9382['buildingPreview']['parent'] != null) {
                        _0xe9382['buildingPreview']['parent']['remove'](_0xe9382['buildingPreview']);
                        _0xe9382['done'] = !![];
                    }
                    if (_0x2127b9['hLost'] !== undefined) {
                        var _0x2e8be2 = new _0x1e6a3f['object']();
                        _0x2e8be2['position']['x'] = (Math['random']() * 0x2 - 0x1) * 0x1e;
                        _0x2e8be2['position']['y'] = (Math['random']() * 0x2 - 0x1) * 0xf - 0x3c;
                        _0x2e8be2['original'] = {
                            'x': _0x2e8be2['position']['x'],
                            'y': _0x2e8be2['position']['y']
                        };
                        _0x2e8be2['t'] = 0x1;
                        var _0x26474e = new _0x1e6a3f['strokeText'](_0x2127b9['hLost'], 0x0, 0x0, '#444', 'Arial Black', 0x19, 'bold', 0x1, 'center');
                        _0x26474e['lineWidth'] = 0x4;
                        _0x2e8be2['add'](_0x26474e);
                        _0x2e8be2['add'](new _0x1e6a3f['text'](_0x2127b9['hLost'], 0x0, 0x0, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center'));
                        _0xe9382['damages']['push'](_0x2e8be2);
                        _0x27aecb['add'](_0x2e8be2);
                    }
                    _0xe9382['dead'] = !![];
                }
                return !![];
            });
            var _0x125c72 = [];
            function _0x2d857e(_0x5ae9f6) {
                for (var _0xe9d0f = 0x0; _0xe9d0f <= _0x125c72['length']; _0xe9d0f++) {
                    if (_0xe9d0f == _0x125c72['length']) {
                        _0x125c72[_0xe9d0f] = new _0x1e6a3f['polygon'](0x0, 0x0, [new _0x1e6a3f['Vector2'](0x0, _0x5ae9f6), new _0x1e6a3f['Vector2'](-0x96, 0x0), new _0x1e6a3f['Vector2'](0x0, -_0x5ae9f6)], '#FFF');
                        _0x125c72[_0xe9d0f]['using'] = ![];
                    }
                    if (!_0x125c72[_0xe9d0f]['using']) {
                        var _0x3682c2 = _0x125c72[_0xe9d0f];
                        _0x3682c2['points'][0x0]['y'] = _0x5ae9f6;
                        _0x3682c2['points'][0x2]['y'] = -_0x5ae9f6;
                        _0x3682c2['points'][0x1]['x'] = -0x96;
                        _0x3682c2['using'] = !![];
                        return _0x3682c2;
                    }
                }
            }
            var _0x19f3a4 = [];
            function _0x29d25e() {
                for (var _0x441b4f = 0x0; _0x441b4f <= _0x19f3a4['length']; _0x441b4f++) {
                    if (_0x441b4f == _0x19f3a4['length']) {
                        _0x19f3a4[_0x441b4f] = new _0x1e6a3f['image'](_0x282ecd('bullet'), 0x0, 0x0, 0xa, 0x28);
                        _0x19f3a4[_0x441b4f]['using'] = ![];
                    }
                    if (!_0x19f3a4[_0x441b4f]['using']) {
                        var _0x7a850 = _0x19f3a4[_0x441b4f];
                        _0x7a850['using'] = !![];
                        _0x7a850['parent'] = null;
                        return _0x7a850;
                    }
                }
            }
            _0x1e6a3f['addType']('bullet', function (_0x38d92e, _0x236540) {
                _0x38d92e['bulletType'] = _0x236540['bulletType'];
                _0x38d92e['visual'] = new _0x1e6a3f['object']();
                _0x38d92e['trail'] = new _0x1e6a3f['object']();
                _0x38d92e['done'] = ![];
                _0x38d92e['tlength'] = 0x32;
                var _0x33e7c4;
                var _0x467379 = 0x5;
                switch (_0x38d92e['bulletType']) {
                    case 'shotgun':
                    case 'heavy':
                    case 'drum':
                    case 'combat':
                    case 'burst shotgun':
                        _0x33e7c4 = new _0x1e6a3f['image'](_0x282ecd('shotgunbullet'), 0x0, 0x0, 0xa, 0xa);
                        _0x467379 = 0x5;
                        if (_0x38d92e['bulletType'] == 'shotgun') {
                            if (_0x4cd821 > 0x0 && _0x38d92e['isPreview'] === undefined) {
                                _0x134785(_0x38d92e['bulletType'], _0x1e6a3f['me']['visual']['position'], new _0x1e6a3f['Vector2'](_0x236540['x'], _0x236540['y']));
                                _0x4cd821 = 0x0;
                            }
                        } else {
                            if (_0x5f61ac > 0x0 && _0x38d92e['isPreview'] === undefined) {
                                _0x134785(_0x38d92e['bulletType'], _0x1e6a3f['me']['visual']['position'], new _0x1e6a3f['Vector2'](_0x236540['x'], _0x236540['y']));
                                _0x5f61ac = 0x0;
                            }
                        }
                        _0x33e7c4['rotation'] = Math['PI'] / 0x2;
                        break;
                    case 'snowball':
                        _0x33e7c4 = new _0x1e6a3f['image'](_0x282ecd('snowball'), 0x0, 0x0, 0x3c, 0x3c);
                        _0x467379 = 0x4;
                        var _0x3aa0b9 = _0x38d92e['bulletType'];
                        if (_0x4a32d9['indexOf'](_0x3aa0b9) < 0x0) {
                            _0x3aa0b9 = 'ar';
                        }
                        if (_0x38d92e['isPreview'] === undefined) {
                            _0x134785(_0x3aa0b9, _0x1e6a3f['me']['visual']['position'], new _0x1e6a3f['Vector2'](_0x236540['x'], _0x236540['y']));
                        }
                        _0x33e7c4['rotation'] = Math['PI'] / 0x2;
                        _0x38d92e['ticksAlive'] = 0x0;
                        break;
                        break;
                    case 'rpg':
                        _0x33e7c4 = new _0x1e6a3f['image'](_0x282ecd('rocket'), 0x0, 0x0, 0xa0, 0xa0);
                        _0x467379 = 0x5;
                        if (_0x38d92e['isPreview'] === undefined) {
                            _0x134785('explosion0', _0x1e6a3f['me']['visual']['position'], new _0x1e6a3f['Vector2'](_0x236540['x'], _0x236540['y']));
                        }
                        _0x33e7c4['rotation'] = Math['PI'];
                        _0x38d92e['ticksAlive'] = 0x0;
                        _0x38d92e['t'] = 0x0;
                        _0x38d92e['explosion'] = new _0x1e6a3f['object']();
                        _0x38d92e['ring'] = new _0x1e6a3f['arc'](0x0, 0x0, 0x64, '#AAA', Math['PI'] * 0x2, 0x0, 0x50);
                        _0x38d92e['explosion']['add'](_0x38d92e['ring']);
                        _0x38d92e['particles'] = 0x3;
                        _0x38d92e['particleArray'] = [];
                        _0x38d92e['particleContainer'] = new _0x1e6a3f['object']();
                        _0x38d92e['explosion']['add'](_0x38d92e['particleContainer']);
                        var _0x11596 = 0xa0;
                        var _0x47a477 = new _0x1e6a3f['image'](_0x38b34f, 0x0, 0x0, _0x11596, _0x11596, 0.6);
                        _0x38d92e['particleArray']['push'](_0x47a477);
                        for (var _0x4930ca = 0x0; _0x4930ca < _0x38d92e['particles']; _0x4930ca++) {
                            var _0x44ec91 = new _0x1e6a3f['object']();
                            _0x47a477['parent'] = null;
                            _0x44ec91['add'](_0x47a477);
                            _0x44ec91['rotation'] = Math['PI'] * 0x2 / _0x38d92e['particles'] * _0x4930ca + Math['random']() * Math['PI'] * 0x2 / _0x38d92e['particles'] * 0.5;
                            _0x44ec91['size'] = Math['random']() * 0.2 + 0x1;
                            _0x38d92e['particleContainer']['addBelow'](_0x44ec91);
                        }
                        _0x47a477['rotation'] = Math['random']() * Math['PI'] * 0x2;
                        _0x38d92e['particles'] = 0x5;
                        _0x11596 = 0x82;
                        _0x47a477 = new _0x1e6a3f['image'](_0x2fd544, 0x0, 0x0, _0x11596, _0x11596, 0.6);
                        _0x38d92e['particleArray']['push'](_0x47a477);
                        for (var _0x4930ca = 0x0; _0x4930ca < _0x38d92e['particles']; _0x4930ca++) {
                            var _0x44ec91 = new _0x1e6a3f['object']();
                            _0x47a477['parent'] = null;
                            _0x44ec91['add'](_0x47a477);
                            _0x44ec91['rotation'] = Math['PI'] * 0x2 / _0x38d92e['particles'] * _0x4930ca + Math['PI'] / _0x38d92e['particles'] + Math['random']() * Math['PI'] * 0x2 / _0x38d92e['particles'] * 0.5;
                            _0x44ec91['size'] = Math['random']() * 0.2 + 0x1;
                            _0x38d92e['particleContainer']['addBelow'](_0x44ec91);
                        }
                        _0x47a477['rotation'] = Math['random']() * Math['PI'] * 0x2;
                        _0x38d92e['particles'] = 0x8;
                        _0x11596 = 0x64;
                        _0x47a477 = new _0x1e6a3f['image'](_0x3039ab, 0x0, 0x0, _0x11596, _0x11596, 0.6);
                        _0x38d92e['particleArray']['push'](_0x47a477);
                        for (var _0x4930ca = 0x0; _0x4930ca < _0x38d92e['particles']; _0x4930ca++) {
                            var _0x44ec91 = new _0x1e6a3f['object']();
                            _0x47a477['parent'] = null;
                            _0x44ec91['add'](_0x47a477);
                            _0x44ec91['rotation'] = Math['PI'] * 0x2 / _0x38d92e['particles'] * _0x4930ca + Math['random']() * Math['PI'] * 0x2 / _0x38d92e['particles'] * 0.5;
                            _0x44ec91['size'] = Math['random']() * 0.2 + 0x1;
                            _0x38d92e['particleContainer']['addBelow'](_0x44ec91);
                        }
                        _0x47a477['rotation'] = Math['random']() * Math['PI'] * 0x2;
                        _0x11596 = 0x64;
                        _0x38d92e['particles'] = 0xa;
                        _0x47a477 = new _0x1e6a3f['image'](_0x223e34, 0x0, 0x0, _0x11596, _0x11596, 0.6);
                        _0x38d92e['particleArray']['push'](_0x47a477);
                        for (var _0x4930ca = 0x0; _0x4930ca < _0x38d92e['particles']; _0x4930ca++) {
                            var _0x44ec91 = new _0x1e6a3f['object']();
                            _0x47a477['parent'] = null;
                            _0x44ec91['add'](_0x47a477);
                            _0x44ec91['rotation'] = Math['PI'] * 0x2 / _0x38d92e['particles'] * _0x4930ca + Math['PI'] / _0x38d92e['particles'] + Math['random']() * Math['PI'] * 0x2 / _0x38d92e['particles'] * 0.5;
                            _0x44ec91['size'] = Math['random']() * 0.3 + 0.9;
                            _0x38d92e['particleContainer']['addBelow'](_0x44ec91);
                        }
                        _0x47a477['rotation'] = Math['random']() * Math['PI'] * 0x2;
                        _0x38d92e['line'] = new _0x1e6a3f['rectangle'](0x0, 0x64, 0x8, 0x8c, '#FFF', 0.4);
                        _0x38d92e['lines'] = 0xa;
                        for (var _0x4930ca = 0x0; _0x4930ca < _0x38d92e['lines']; _0x4930ca++) {
                            var _0x5871b3 = new _0x1e6a3f['object']();
                            _0x38d92e['line']['parent'] = null;
                            _0x5871b3['add'](_0x38d92e['line']);
                            _0x5871b3['rotation'] = 0x2 * Math['PI'] / _0x38d92e['lines'] * _0x4930ca + Math['random']() * Math['PI'] * 0x2 / _0x38d92e['lines'] * 0.3;
                            _0x5871b3['size'] = 0x1 - Math['random']() * 0.2;
                            _0x38d92e['explosion']['add'](_0x5871b3);
                        }
                        _0x38d92e['visual']['add'](_0x38d92e['explosion']);
                        _0x38d92e['explosion']['opacity'] = 0x0;
                        _0x38d92e['explosion']['size'] = 0.8;
                        _0x38d92e['exploded'] = ![];
                        break;
                        break;
                    default:
                        _0x33e7c4 = _0x29d25e();
                        _0x467379 = 0x4;
                        var _0x3aa0b9 = _0x38d92e['bulletType'];
                        if (_0x3aa0b9 == 'scoped ar') {
                            _0x3aa0b9 = 'scoped-ar';
                        }
                        if (_0x4a32d9['indexOf'](_0x3aa0b9) < 0x0) {
                            _0x3aa0b9 = 'ar';
                        }
                        if (_0x38d92e['isPreview'] === undefined) {
                            _0x134785(_0x3aa0b9, _0x1e6a3f['me']['visual']['position'], new _0x1e6a3f['Vector2'](_0x236540['x'], _0x236540['y']));
                        }
                        _0x33e7c4['rotation'] = Math['PI'] / 0x2;
                        break;
                }
                _0x38d92e['visual']['add'](_0x33e7c4);
                _0x38d92e['trail'] = _0x2d857e(_0x467379);
                _0x38d92e['trail']['opacity'] = 0x0;
                _0x38d92e['bullet'] = _0x33e7c4;
                _0x38d92e['visual']['addBelow'](_0x38d92e['trail']);
                _0x561d93['addBelow'](_0x38d92e['visual']);
                if (_0x38d92e['bulletType'] == 'snowball') {
                    _0x561d93['remove'](_0x38d92e['visual']);
                    _0x561d93['add'](_0x38d92e['visual']);
                }
                if (_0x236540['pi'] == _0x1e6a3f['me']['id'] && !_0x1e6a3f['spectating'] && (_0x38d92e['bulletType'] == 'sniper' || _0x38d92e['bulletType'] == 'shotgun' || _0x38d92e['bulletType'] == 'heavy' || _0x38d92e['bulletType'] == 'drum')) {
                    _0x46bd0f['shake'](0xf, _0x1e6a3f['me']['actualRotation'] + Math['PI']);
                }
            }, function (_0x250661) {
                if (_0x250661['bulletType'] == 'rpg') {
                    _0x250661['trail']['opacity'] = 0x0;
                    _0x250661['ticksAlive']++;
                    if (!_0x250661['done'] && _0x250661['ticksAlive'] % 0x2 == 0x0) {
                        var _0xb960b9 = 0.8;
                        var _0x158122 = Math['floor'](Math['random']() * 0x2);
                        var _0x2cd337 = 0xf;
                        _0x2cd337 = 0x0;
                        var _0x13ef7d = _0x2cd337 / 0x2;
                        var _0x4e65b2 = 0x9;
                        var _0x373c19 = 0x0;
                        var _0x9fdecb = _0x4e65b2 + Math['random']() * _0x373c19;
                        _0x665d6a['add'](new _0x1e6a3f['customParticle'](new _0x1e6a3f['image'](_0x282ecd('smoke' + _0x158122), _0x250661['visual']['position']['x'] + Math['random']() * _0x2cd337 - _0x13ef7d, _0x250661['visual']['position']['y'] + Math['random']() * _0x2cd337 - _0x13ef7d, _0x9fdecb, _0x9fdecb, _0xb960b9), (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 1.2, 0x0, 0x0, -0x7, -0x7));
                    }
                } else if (_0x250661['bulletType'] == 'snowball') {
                    _0x250661['trail']['opacity'] = 0x0;
                    var _0x2a8062 = _0x1e6a3f['lerp'](_0x250661['ticksAlive'] - 0x1, _0x250661['ticksAlive']);
                    var _0x2fd8f4 = 0xc / 0x2;
                    var _0x354c75 = 0x0;
                    _0x354c75 = -(_0x2a8062 - _0x2fd8f4) * (_0x2a8062 - _0x2fd8f4);
                    _0x354c75 /= _0x2fd8f4;
                    _0x354c75 += _0x2fd8f4;
                    _0x354c75 /= _0x2fd8f4;
                    _0x354c75 += 0x1;
                    _0x250661['bullet']['size'] = _0x354c75;
                } else {
                    if (_0x250661['trail']['opacity'] < 0.3) {
                        _0x250661['trail']['opacity'] += _0x1e6a3f['clientDetails']['dt'] / 0x32;
                    } else {
                        _0x250661['trail']['opacity'] = 0.3;
                    }
                    if (_0x250661['tlength'] < 0x96) {
                        _0x250661['tlength'] += _0x1e6a3f['clientDetails']['dt'] * 0xa;
                    } else {
                        _0x250661['tlength'] = 0x96;
                    }
                    _0x250661['trail']['points'][0x1]['x'] = -_0x250661['tlength'];
                }
                if (_0x250661['done']) {
                    if (_0x250661['bulletType'] == 'rpg' && _0x250661['exploded']) {
                        _0x250661['new']['position']['x'] = _0x250661['visual']['position']['x'];
                        _0x250661['new']['position']['y'] = _0x250661['visual']['position']['y'];
                        _0x250661['explosion']['opacity'] = 0x1;
                        _0x250661['t'] += 0.03 * _0x1e6a3f['clientDetails']['dt'];
                        var _0x2abeea = _0x250661['t'];
                        var _0x4819ef = Math['sqrt'](_0x2abeea * 0x4);
                        _0x250661['bullet']['opacity'] -= 0.17 * _0x1e6a3f['clientDetails']['dt'];
                        _0x250661['ring']['radius'] = 0x50 + 0x82 * _0x2abeea;
                        _0x250661['ring']['lineWidth'] = 0x3c + 0x1e * _0x2abeea;
                        _0x250661['ring']['opacity'] = Math['max'](0.4 * (0x1 - _0x2abeea) - 0.14, 0x0);
                        _0x250661['line']['position']['y'] = _0x250661['line']['height'] / 0x2 + 0xc8 * _0x2abeea;
                        _0x250661['line']['opacity'] = 0.4 * (0x1 - _0x2abeea);
                        for (var _0x37f802 = 0x0; _0x37f802 < _0x250661['particleArray']['length']; _0x37f802++) {
                            _0x250661['particleArray'][_0x37f802]['position']['y'] = 0x1e * _0x37f802 + 0x22 * _0x4819ef / 0x2 * (_0x37f802 + 0x2);
                            _0x250661['particleArray'][_0x37f802]['opacity'] = (0x1 - _0x4819ef / 0x2) * Math['max']((_0x250661['particleArray']['length'] - 0x1) / 0x2 + 0.5, 0x1);
                            if (_0x37f802 == 0x0) {
                                _0x250661['particleArray'][_0x37f802]['opacity'] *= 0.6;
                            }
                        }
                        if (_0x250661['t'] >= 0x1) {
                            for (var _0x37f802 = 0x0; _0x37f802 < _0x1e6a3f['objects']['length']; _0x37f802++) {
                                if (_0x1e6a3f['objects'][_0x37f802]['id'] == _0x250661['id']) {
                                    if (_0x1e6a3f['objects'][_0x37f802]['visual']['parent'] != null)
                                        _0x1e6a3f['objects'][_0x37f802]['visual']['parent']['remove'](_0x1e6a3f['objects'][_0x37f802]['visual']);
                                    _0x1e6a3f['objects']['splice'](_0x37f802, 0x1);
                                }
                            }
                        }
                    } else {
                        _0x250661['visual']['opacity'] -= 0.17 * _0x1e6a3f['clientDetails']['dt'];
                        if (_0x250661['visual']['opacity'] <= 0x0) {
                            _0x250661['trail']['parent'] = null;
                            _0x250661['trail']['using'] = ![];
                            _0x250661['bullet']['using'] = ![];
                            for (var _0x37f802 = 0x0; _0x37f802 < _0x1e6a3f['objects']['length']; _0x37f802++) {
                                if (_0x1e6a3f['objects'][_0x37f802]['id'] == _0x250661['id']) {
                                    if (_0x1e6a3f['objects'][_0x37f802]['visual']['parent'] != null)
                                        _0x1e6a3f['objects'][_0x37f802]['visual']['parent']['remove'](_0x1e6a3f['objects'][_0x37f802]['visual']);
                                    _0x1e6a3f['objects']['splice'](_0x37f802, 0x1);
                                }
                            }
                        }
                    }
                }
            }, function (_0x45a1df) {
                if (_0x45a1df['bulletType'] == 'snowball') {
                    _0x45a1df['ticksAlive']++;
                }
            }, function (_0x516768, _0x4c2a08) {
                _0x516768['old']['position'] = _0x516768['visual']['position']['clone']();
                _0x516768['old']['rotation'] = _0x516768['visual']['rotation'];
                _0x516768['actualOld']['position'] = _0x516768['visual']['position']['clone']();
                _0x516768['actualOld']['rotation'] = _0x516768['visual']['rotation'];
                if (_0x4c2a08['p'] !== undefined) {
                    _0x516768['new']['position'] = new _0x1e6a3f['Vector2'](_0x4c2a08['p'][0x0], _0x4c2a08['p'][0x1]);
                }
                if (_0x516768['bulletType'] == 'rpg' && !_0x516768['done'] && _0x4c2a08['exploded'] !== undefined && _0x4c2a08['exploded'] == !![]) {
                    _0x516768['exploded'] = !![];
                    _0x134785('explosion1', _0x1e6a3f['me']['visual']['position'], new _0x1e6a3f['Vector2'](_0x516768['visual']['position']['x'], _0x516768['visual']['position']['y']));
                }
                _0x516768['done'] = !![];
                return !![];
            });
            var _0xa2b651 = [];
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x189c64['length']; _0x4cd046++) {
                var _0x3dc565 = {};
                _0x3dc565['visual'] = new _0x1e6a3f['object']();
                _0x3dc565['shine'] = new _0x1e6a3f['image'](_0x282ecd('gridshine'), 0x0, 0x0, 0xaa, 0xaa, 0.55);
                _0x3dc565['shine']['width'] = _0x3dc565['shine']['height'] = 0x7e;
                _0x3dc565['visual']['addBelow'](_0x3dc565['shine']);
                _0x3dc565['done'] = ![];
                _0x3dc565['bg'] = new _0x1e6a3f['object']();
                _0x3dc565['bg']['add'](new _0x1e6a3f['circle'](0x0, 0x0, 0x4b / 0x2 + 0x3, _0x189c64[_0x4cd046]['color'], 0.3));
                var _0xa7ffed = new _0x1e6a3f['arc'](0x0, 0x0, 0x4b / 0x2, _0x189c64[_0x4cd046]['color'], 0x2 * Math['PI'], 0x0, 0x6);
                _0xa7ffed['opacity'] = 0.5;
                _0xa7ffed['add'](new _0x1e6a3f['arc'](0x0, 0x0, 0x4b / 0x2 + 0x4, '#000', 0x2 * Math['PI'], 0x0, 0x1));
                _0x3dc565['bg']['add'](_0xa7ffed);
                _0x3dc565['visual']['addBelow'](_0x3dc565['bg']);
                var _0x30abe8 = 0xc8;
                var _0x7bba3 = document['createElement']('canvas');
                _0x7bba3['width'] = _0x7bba3['height'] = _0x30abe8;
                var _0x1bcf04 = _0x7bba3['getContext']('2d');
                _0x1bcf04['translate'](_0x30abe8 / 0x2, _0x30abe8 / 0x2);
                _0x3dc565['visual']['render'](_0x1bcf04, 0x64 / _0x30abe8, 0x1);
                _0xa2b651['push'](_0x7bba3);
                _0x7bba3['color'] = _0x189c64[_0x4cd046]['color'];
            }
            var _0xccfbc0 = 0x0;
            var _0x59e289 = 0x0;
            _0x1e6a3f['addType']('gun', function (_0x372f86, _0x4a5ff5) {
                _0x372f86['extraRotationTicks'] = 0x0;
                _0x372f86['visual'] = new _0x1e6a3f['object']();
                _0x372f86['visual']['opacity'] = 0x0;
                _0x372f86['rarity'] = _0x4a5ff5['rarity'];
                _0x372f86['oldRarity'] = _0x4a5ff5['rarity'];
                _0x372f86['particleAngle'] = 0x0;
                _0x372f86['gun'] = new _0x1e6a3f['image'](_0x282ecd(_0x4a5ff5['gunType']), -0x3, 0x5, 0x6e, 0x6e);
                _0x372f86['gun']['rotation'] = Math['PI'] / 0x7;
                if (_0x4a5ff5['gunType'] == 'mini' || _0x4a5ff5['gunType'] == 'pot' || _0x4a5ff5['gunType'] == 'bandages' || _0x4a5ff5['gunType'] == 'medkit') {
                    _0x372f86['gun']['size'] = 0.4;
                    _0x372f86['gun']['rotation'] = 0x0;
                    if (_0x4a5ff5['gunType'] == 'mini' || _0x4a5ff5['gunType'] == 'pot') {
                        _0x372f86['gun']['position']['y'] = -0x2;
                        _0x372f86['gun']['position']['x'] = 0.6;
                    } else {
                        _0x372f86['gun']['position']['x'] = 0x0;
                        _0x372f86['gun']['position']['y'] = 0x0;
                        _0x372f86['gun']['size'] = 0.5;
                    }
                }
                if (_0x4a5ff5['gunType'] == 'snowball') {
                    _0x372f86['gun']['size'] = 0.65;
                    _0x372f86['gun']['position']['y'] = -0.5;
                    _0x372f86['gun']['position']['x'] = 0x1;
                }
                if (_0x4a5ff5['gunType'] == 'deagle') {
                    _0x372f86['gun']['size'] = 0.6;
                }
                _0x372f86['visual']['add'](_0x372f86['gun']);
                _0x372f86['bg'] = new _0x1e6a3f['image'](_0xa2b651[_0x4a5ff5['rarity']], 0x0, 0x0, 0x64, 0x64);
                _0x372f86['visual']['addBelow'](_0x372f86['bg']);
                _0x372f86['ticksSinceParticles'] = 0x0;
                _0x372f86['particleSpawnTick'] = 0xa;
                if (_0x372f86['rarity'] == 0x4) {
                    _0x372f86['particleSpawnTick'] = 0x6;
                }
                _0x665d6a['add'](_0x372f86['visual']);
            }, function (_0x5d9e8a) {
                _0x5d9e8a['extraRotationTicks'] += _0x1e6a3f['clientDetails']['dt'] / 0xf;
                var _0x4d2db7 = _0x59e289;
                _0x5d9e8a['gun']['width'] = _0x5d9e8a['gun']['height'] = -_0x4d2db7 * 0x6 + 0x6e;
                _0x5d9e8a['bg']['size'] = _0x4d2db7 * 0.02 + 0.8;
                if (_0x5d9e8a['done']) {
                    _0x5d9e8a['visual']['opacity'] -= 0.07 * _0x1e6a3f['clientDetails']['dt'];
                    if (_0x5d9e8a['visual']['opacity'] <= 0x0) {
                        for (var _0x5968de = 0x0; _0x5968de < _0x1e6a3f['objects']['length']; _0x5968de++) {
                            if (_0x1e6a3f['objects'][_0x5968de]['id'] == _0x5d9e8a['id']) {
                                if (_0x1e6a3f['objects'][_0x5968de]['visual']['parent'] != null)
                                    _0x1e6a3f['objects'][_0x5968de]['visual']['parent']['remove'](_0x1e6a3f['objects'][_0x5968de]['visual']);
                                _0x1e6a3f['objects']['splice'](_0x5968de, 0x1);
                            }
                        }
                    }
                } else if (_0x5d9e8a['visual']['opacity'] < 0x1) {
                    _0x5d9e8a['visual']['opacity'] += 0.07 * _0x1e6a3f['clientDetails']['dt'];
                    _0x5d9e8a['visual']['opacity'] = Math['min'](_0x5d9e8a['visual']['opacity'], 0x1);
                }
                _0x5d9e8a['ticksSinceParticles'] += _0x1e6a3f['clientDetails']['dt'];
                if (_0x5d9e8a['ticksSinceParticles'] > _0x5d9e8a['particleSpawnTick']) {
                    var _0x356b6c = new _0x1e6a3f['polygon'](0x0, 0x0, [new _0x1e6a3f['Vector2'](-0x32, 0x28), new _0x1e6a3f['Vector2'](0x0, -0x28), new _0x1e6a3f['Vector2'](0x32, 0x28)], _0x4cf33f(_0x189c64[_0x5d9e8a['rarity']]['color'], 0x6));
                    if (_0x356b6c['color']['length'] != 0x7) {
                        _0x356b6c['color'] = _0x189c64[_0x5d9e8a['rarity']]['color'];
                    }
                    _0x356b6c['size'] = 0.4;
                    _0x356b6c['opacity'] = 0.7;
                    _0x356b6c['shouldStroke'] = !![];
                    _0x356b6c['strokeColor'] = _0x4cf33f(_0x189c64[_0x5d9e8a['rarity']]['color'], 0x2);
                    if (_0x356b6c['strokeColor']['length'] != 0x7) {
                        _0x356b6c['strokeColor'] = _0x356b6c['color'];
                    }
                    _0x356b6c['lineWidth'] = 0xd;
                    _0x5d9e8a['particleAngle'] += 1.8;
                    var _0x338506 = 0.6 * 0xa / _0x5d9e8a['particleSpawnTick'];
                    var _0x36d8e7 = new _0x1e6a3f['customParticle'](_0x356b6c, (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.04, 0.35, Math['cos'](_0x5d9e8a['particleAngle']) * _0x338506, Math['sin'](_0x5d9e8a['particleAngle']) * _0x338506);
                    if (_0x5d9e8a['rarity'] == 0x3) {
                        _0x36d8e7['opacityThreshold'] = 0.1;
                    }
                    _0x5d9e8a['bg']['add'](_0x36d8e7);
                    _0x5d9e8a['ticksSinceParticles'] = 0x0;
                }
            }, function (_0x48a0f3, _0x528240) { }, function (_0xf59979) {
                _0xf59979['done'] = !![];
                return !![];
            });
            var _0x4dbcd1;
            for (var _0x4cd046 = 0x0; _0x4cd046 < 0x1; _0x4cd046++) {
                var _0x3dc565 = {};
                _0x3dc565['visual'] = new _0x1e6a3f['object']();
                _0x3dc565['shine'] = new _0x1e6a3f['image'](_0x282ecd('gridshine'), 0x0, 0x0, 0xaa, 0xaa, 0.55);
                _0x3dc565['shine']['width'] = _0x3dc565['shine']['height'] = 0x7e;
                _0x3dc565['visual']['addBelow'](_0x3dc565['shine']);
                _0x3dc565['done'] = ![];
                _0x3dc565['bg'] = new _0x1e6a3f['object']();
                _0x3dc565['bg']['add'](new _0x1e6a3f['circle'](0x0, 0x0, 0x46 / 0x2 + 0x3, _0x189c64[_0x4cd046]['color'], 0.3));
                var _0xa7ffed = new _0x1e6a3f['arc'](0x0, 0x0, 0x46 / 0x2, _0x189c64[_0x4cd046]['color'], 0x2 * Math['PI'], 0x0, 0x6);
                _0xa7ffed['opacity'] = 0.5;
                _0xa7ffed['add'](new _0x1e6a3f['arc'](0x0, 0x0, 0x46 / 0x2 + 0x4, '#000', 0x2 * Math['PI'], 0x0, 0x1));
                _0x3dc565['bg']['add'](_0xa7ffed);
                _0x3dc565['visual']['addBelow'](_0x3dc565['bg']);
                _0x3dc565['bg']['opacity'] = 0.5;
                var _0x30abe8 = 0xc8;
                var _0x7bba3 = document['createElement']('canvas');
                _0x7bba3['width'] = _0x7bba3['height'] = _0x30abe8;
                var _0x1bcf04 = _0x7bba3['getContext']('2d');
                _0x1bcf04['translate'](_0x30abe8 / 0x2, _0x30abe8 / 0x2);
                _0x3dc565['visual']['render'](_0x1bcf04, 0x64 / _0x30abe8, 0x1);
                _0x4dbcd1 = _0x7bba3;
            }
            _0x1e6a3f['addType']('ammo', function (_0x3ed860, _0x172ef1) {
                _0x3ed860['extraRotationTicks'] = 0x0;
                _0x3ed860['visual'] = new _0x1e6a3f['object']();
                _0x3ed860['visual']['opacity'] = 0x0;
                _0x172ef1['rarity'] = 0x0;
                var _0x216c8c = 'empty';
                if (_0x172ef1['mat'] !== undefined) {
                    switch (_0x172ef1['mat']) {
                        case 0x0:
                            _0x216c8c = 'wood';
                            break;
                        case 0x1:
                            _0x216c8c = 'brick';
                            break;
                        case 0x2:
                            _0x216c8c = 'metal';
                    }
                } else if (_0x172ef1['ammo'] !== undefined) {
                    _0x216c8c = 'stack' + _0x172ef1['ammo'];
                }
                _0x3ed860['gun'] = new _0x1e6a3f['image'](_0x282ecd(_0x216c8c), 0x0, 0x0, 0x6e, 0x6e);
                _0x3ed860['gun']['rotation'] = 0x0;
                _0x3ed860['gun']['size'] = 0.45;
                _0x3ed860['visual']['add'](_0x3ed860['gun']);
                _0x3ed860['done'] = ![];
                _0x3ed860['bg'] = new _0x1e6a3f['image'](_0x4dbcd1, 0x0, 0x0, 0x64, 0x64);
                _0x3ed860['visual']['addBelow'](_0x3ed860['bg']);
                var _0x127703 = 0.5;
                _0x3ed860['bg']['opacity'] *= _0x127703;
                _0x665d6a['add'](_0x3ed860['visual']);
            }, function (_0x22d38b) {
                _0x22d38b['extraRotationTicks'] += _0x1e6a3f['clientDetails']['dt'] / 0xf;
                _0x22d38b['gun']['width'] = _0x22d38b['gun']['height'] = -_0x59e289 * 0x6 + 0x6e;
                _0x22d38b['bg']['size'] = _0x59e289 * 0.02 + 0.8;
                if (_0x22d38b['done']) {
                    _0x22d38b['visual']['opacity'] -= 0.07 * _0x1e6a3f['clientDetails']['dt'];
                    if (_0x22d38b['visual']['opacity'] <= 0x0) {
                        for (var _0x5df146 = 0x0; _0x5df146 < _0x1e6a3f['objects']['length']; _0x5df146++) {
                            if (_0x1e6a3f['objects'][_0x5df146]['id'] == _0x22d38b['id']) {
                                if (_0x1e6a3f['objects'][_0x5df146]['visual']['parent'] != null)
                                    _0x1e6a3f['objects'][_0x5df146]['visual']['parent']['remove'](_0x1e6a3f['objects'][_0x5df146]['visual']);
                                _0x1e6a3f['objects']['splice'](_0x5df146, 0x1);
                            }
                        }
                    }
                } else if (_0x22d38b['visual']['opacity'] < 0x1) {
                    _0x22d38b['visual']['opacity'] += 0.07 * _0x1e6a3f['clientDetails']['dt'];
                    _0x22d38b['visual']['opacity'] = Math['min'](_0x22d38b['visual']['opacity'], 0x1);
                }
                _0x22d38b['ticksSinceParticles'] += _0x1e6a3f['clientDetails']['dt'];
            }, function (_0x1f21de, _0x314888) { }, function (_0x5398d2) {
                _0x5398d2['done'] = !![];
                return !![];
            });
            _0x1e6a3f['addType']('chest', function (_0x1dce82, _0x5dceef) {
                _0x1dce82['visual'] = new _0x1e6a3f['image'](_0x282ecd('chest'), 0x0, 0x0, 0x96, 0x64);
                _0x1dce82['visual']['size'] = 0.8;
                _0x1dce82['chestUnder'] = new _0x1e6a3f['image'](_0x282ecd('chestunder'), 0x0, 0x0, 0x96, 0x64);
                _0x1dce82['visual']['addBelow'](_0x1dce82['chestUnder']);
                _0x561d93['addBelow'](_0x1dce82['visual']);
                _0x1dce82['done'] = ![];
                _0x1dce82['sinTicks'] = 0x0;
                _0x1dce82['sin'] = 0x0;
            }, function (_0x24724d) {
                _0x24724d['sinTicks'] += _0x1e6a3f['clientDetails']['dt'] / 0x28;
                _0x24724d['sin'] = Math['sin'](_0x24724d['sinTicks']);
                _0x24724d['chestUnder']['opacity'] = 0.32 + _0x24724d['sin'] / 0x9;
                _0x24724d['chestUnder']['size'] = 1.3 + _0x24724d['sin'] / 0xd;
                if (_0x24724d['done']) {
                    _0x24724d['visual']['opacity'] -= 0.04 * _0x1e6a3f['clientDetails']['dt'];
                    if (_0x24724d['visual']['opacity'] <= 0x0) {
                        for (var _0x2bce88 = 0x0; _0x2bce88 < _0x1e6a3f['objects']['length']; _0x2bce88++) {
                            if (_0x1e6a3f['objects'][_0x2bce88]['id'] == _0x24724d['id']) {
                                if (_0x1e6a3f['objects'][_0x2bce88]['visual']['parent'] != null)
                                    _0x1e6a3f['objects'][_0x2bce88]['visual']['parent']['remove'](_0x1e6a3f['objects'][_0x2bce88]['visual']);
                                _0x1e6a3f['objects']['splice'](_0x2bce88, 0x1);
                            }
                        }
                    }
                }
            }, function (_0x860860, _0x4e45f9) { }, function (_0x449152) {
                _0x449152['done'] = !![];
                return !![];
            });
            _0x1e6a3f['addType']('house', function (_0x38e3d4, _0x2cbb4d) {
                _0x38e3d4['visual'] = new _0x1e6a3f['object']();
            }, function (_0x46df49) { }, function (_0x4de289, _0x1f8cc1) { }, function (_0x440817) { });
            _0x1e6a3f['addType']('ball', function (_0x42df05, _0x3b00d4) {
                _0x42df05['visual'] = new _0x1e6a3f['image'](_0x282ecd(_0x3b00d4['name']), 0x0, 0x0, 0x46, 0x46);
                _0x561d93['addBelow'](_0x42df05['visual']);
            }, function (_0x4dd090) { }, function (_0x2836e4, _0x417ae9) { }, function (_0x567b6b) { });
            _0x1e6a3f['addType']('baller', function (_0x49a1bf, _0x47b074) {
                _0x49a1bf['visual'] = new _0x1e6a3f['image'](_0x282ecd('baller0'), 0x0, 0x0, 0xfa, 0xfa);
                _0x49a1bf['grapple'] = new _0x1e6a3f['image'](_0x282ecd('grapple'), 0x0, 0x0, 0x28, 0x28);
                _0x49a1bf['rope'] = new _0x1e6a3f['image'](_0x282ecd('rope'), 0x0, 0x0, 0xa, 0x0);
                _0x561d93['add'](_0x49a1bf['rope']);
                _0x49a1bf['newGrapple'] = null;
                _0x49a1bf['isNull'] = !![];
                _0x49a1bf['actualGrappleDist'] = 0x64;
                _0x49a1bf['grappleDist'] = _0x49a1bf['actualGrappleDist'];
                _0x49a1bf['grappleDifference'] = 0xf;
                _0x561d93['add'](_0x49a1bf['grapple']);
                _0x561d93['add'](_0x49a1bf['visual']);
                _0x49a1bf['timeSinceSoundUpdate'] = 0x0;
                _0x49a1bf['volumeDifference'] = 0x0;
                _0x49a1bf['grapple']['oldPosition'] = new _0x1e6a3f['Vector2']();
                if (_0x47b074['isPreview']) {
                    _0x49a1bf['isPreview'] = !![];
                }
                _0x49a1bf['fullHealth'] = _0x47b074['h'];
                _0x49a1bf['health'] = _0x47b074['ch'];
                _0x49a1bf['currentVisual'] = 'baller';
            }, function (_0x565569) {
                if (_0x565569['newGrapple'] == null) {
                    _0x565569['grapple']['position']['x'] = _0x565569['visual']['position']['x'] + Math['cos'](_0x565569['visual']['rotation']) * _0x565569['grappleDist'];
                    _0x565569['grapple']['position']['y'] = _0x565569['visual']['position']['y'] + Math['sin'](_0x565569['visual']['rotation']) * _0x565569['grappleDist'];
                    _0x565569['grapple']['rotation'] = _0x565569['visual']['rotation'] + Math['PI'] / 0x2;
                    _0x565569['rope']['height'] = 0x0;
                } else {
                    _0x565569['grapple']['position']['x'] = _0x1e6a3f['lerp'](_0x565569['grapple']['oldPosition']['x'], _0x565569['newGrapple']['x']);
                    _0x565569['grapple']['position']['y'] = _0x1e6a3f['lerp'](_0x565569['grapple']['oldPosition']['y'], _0x565569['newGrapple']['y']);
                    _0x565569['grappleDist'] -= _0x565569['grappleDifference'];
                    _0x565569['rope']['position']['x'] = (_0x565569['visual']['position']['x'] + Math['cos'](_0x565569['visual']['rotation']) * _0x565569['grappleDist'] + _0x565569['grapple']['position']['x']) / 0x2;
                    _0x565569['rope']['position']['y'] = (_0x565569['visual']['position']['y'] + Math['sin'](_0x565569['visual']['rotation']) * _0x565569['grappleDist'] + _0x565569['grapple']['position']['y']) / 0x2;
                    var _0x53612a = _0x565569['grapple']['position']['x'] - (_0x565569['visual']['position']['x'] + Math['cos'](_0x565569['visual']['rotation']) * _0x565569['grappleDist']);
                    var _0x72a0f7 = _0x565569['grapple']['position']['y'] - (_0x565569['visual']['position']['y'] + Math['sin'](_0x565569['visual']['rotation']) * _0x565569['grappleDist']);
                    _0x565569['rope']['height'] = Math['sqrt'](_0x53612a * _0x53612a + _0x72a0f7 * _0x72a0f7);
                    _0x565569['rope']['rotation'] = Math['atan2'](_0x72a0f7, _0x53612a) + Math['PI'] / 0x2;
                    _0x565569['grappleDist'] = _0x565569['actualGrappleDist'];
                    if (_0x565569['isNull']) {
                        _0x565569['grapple']['rotation'] = _0x565569['visual']['rotation'] + Math['PI'] / 0x2;
                    }
                }
                if (!_0x565569['isPreview']) {
                    _0x565569['grapple']['parent']['remove'](_0x565569['grapple']);
                    _0x565569['visual']['parent']['remove'](_0x565569['visual']);
                    _0x561d93['add'](_0x565569['grapple']);
                    _0x561d93['add'](_0x565569['visual']);
                }
                var _0x47d95d = Math['max'](Math['min'](0x4 - Math['ceil'](_0x565569['health'] / _0x565569['fullHealth'] * 0x4), 0x3), 0x0);
                if ('baller' + _0x47d95d != _0x565569['currentVisual']) {
                    _0x565569['visual']['image'] = _0x282ecd('baller' + _0x47d95d);
                }
                _0x565569['currentVisual'] = 'baller' + _0x47d95d;
                if (_0x565569['done']) {
                    _0x565569['visual']['opacity'] -= 0.07 * _0x1e6a3f['clientDetails']['dt'];
                    _0x565569['grapple']['opacity'] = _0x565569['visual']['opacity'];
                    _0x565569['rope']['opacity'] = _0x565569['visual']['opacity'];
                    if (_0x565569['visual']['opacity'] <= 0x0) {
                        _0x565569['grapple']['parent']['remove'](_0x565569['grapple']);
                        _0x565569['rope']['parent']['remove'](_0x565569['rope']);
                        for (var _0x27d261 = 0x0; _0x27d261 < _0x1e6a3f['objects']['length']; _0x27d261++) {
                            if (_0x1e6a3f['objects'][_0x27d261]['id'] == _0x565569['id']) {
                                if (_0x1e6a3f['objects'][_0x27d261]['visual']['parent'] != null)
                                    _0x1e6a3f['objects'][_0x27d261]['visual']['parent']['remove'](_0x1e6a3f['objects'][_0x27d261]['visual']);
                                _0x1e6a3f['objects']['splice'](_0x27d261, 0x1);
                            }
                        }
                    }
                }
            }, function (_0x3ec586, _0x5b9107) {
                if (isNaN(_0x3ec586['new']['position']['x'])) {
                    console['log']('NaN baller');
                    console['log'](_0x3ec586);
                }
                if (_0x3ec586['newGrapple'] != null) {
                    _0x3ec586['grapple']['oldPosition']['x'] = _0x3ec586['grapple']['position']['x'];
                    _0x3ec586['grapple']['oldPosition']['y'] = _0x3ec586['grapple']['position']['y'];
                }
                if (_0x3ec586['isNull']) {
                    _0x3ec586['newGrapple'] = null;
                    _0x3ec586['isNull'] = ![];
                }
                if (_0x5b9107['grapple'] !== undefined) {
                    if (_0x5b9107['grapple'] == ![]) {
                        _0x3ec586['isNull'] = !![];
                        _0x3ec586['newGrapple'] = new _0x1e6a3f['Vector2']();
                        _0x3ec586['newGrapple']['x'] = _0x3ec586['visual']['position']['x'] + Math['cos'](_0x3ec586['visual']['rotation']) * _0x3ec586['grappleDist'];
                        _0x3ec586['newGrapple']['y'] = _0x3ec586['visual']['position']['y'] + Math['sin'](_0x3ec586['visual']['rotation']) * _0x3ec586['grappleDist'];
                    } else {
                        _0x134785('grapple', _0x1e6a3f['me']['visual']['position'], _0x3ec586['visual']['position'], !![])['volume'] /= 0x4;
                        _0x3ec586['newGrapple'] = new _0x1e6a3f['Vector2'](_0x5b9107['grapple'][0x0], _0x5b9107['grapple'][0x1]);
                        _0x3ec586['grapple']['oldPosition'] = new _0x1e6a3f['Vector2']();
                        _0x3ec586['grapple']['oldPosition']['x'] = _0x3ec586['visual']['position']['x'] + Math['cos'](_0x3ec586['visual']['rotation']) * _0x3ec586['grappleDist'];
                        _0x3ec586['grapple']['oldPosition']['y'] = _0x3ec586['visual']['position']['y'] + Math['sin'](_0x3ec586['visual']['rotation']) * _0x3ec586['grappleDist'];
                    }
                }
                if (_0x5b9107['h'] !== undefined) {
                    _0x3ec586['health'] = _0x5b9107['h'];
                    if (_0x3ec586['health'] < 0x0) {
                        _0x3ec586['health'] = 0x0;
                    }
                }
                if (_0x5b9107['bounced']) {
                    var _0x235841 = _0x134785('bounce', _0x1e6a3f['me']['visual']['position'], _0x3ec586['visual']['position']);
                    if (_0x235841 != null) {
                        _0x235841['volume'] *= 0.6;
                    }
                }
            }, function (_0x5e4457) {
                _0x5e4457['done'] = !![];
                return !![];
            });
            _0x1e6a3f['addType']('object', function (_0x2b9b7b, _0x3a641c) {
                _0x2b9b7b['envType'] = _0x3a641c['type'];
                _0x2b9b7b['visual'] = new _0x1e6a3f['object']();
                _0x2b9b7b['sprite'] = new _0x1e6a3f['object']();
                if (_0x3a641c['type'] == 'pumpkin' && Math['random']() > 0.5) {
                    _0x3a641c['type'] = 'pumpkin1';
                }
                if (_0x3a641c['type'] != 'wall')
                    _0x2b9b7b['sprite'] = new _0x1e6a3f['image'](_0x282ecd(_0x3a641c['type']), 0x0, 0x0, _0x3a641c['width'], _0x3a641c['height']);
                if (_0x3a641c['width'] == 0x0 || _0x3a641c['height'] == 0x0) {
                    _0x2b9b7b['sprite']['width'] = 0x0;
                    _0x2b9b7b['sprite']['height'] = 0x0;
                }
                _0x2b9b7b['visual']['add'](_0x2b9b7b['sprite']);
                _0x2b9b7b['ui'] = new _0x1e6a3f['object']();
                _0x2b9b7b['shake'] = 0x0;
                _0x2b9b7b['done'] = ![];
                _0x2b9b7b['health'] = _0x3a641c['health'];
                _0x2b9b7b['fullHealth'] = _0x3a641c['fullHealth'];
                _0x2b9b7b['ticksSinceHealthChange'] = 0x1f4;
                var _0x3925d5 = 0x32;
                _0x2b9b7b['healthbar'] = new _0x1e6a3f['rectangle'](0x0, _0x3925d5, _0x2b9b7b['health'], 0xe, '#0D0');
                _0x2b9b7b['healthbar']['width'] = 0x0;
                _0x2b9b7b['healthBackground'] = new _0x1e6a3f['rectangle'](0x0, _0x3925d5, 0x64, 0xe, '#000', 0.3);
                _0x2b9b7b['ui']['add'](_0x2b9b7b['healthBackground']);
                _0x2b9b7b['ui']['add'](_0x2b9b7b['healthbar']);
                var _0x26a9dd = 0xa;
                var _0x4a4e11 = -0x19;
                var _0xdc4aa9 = 'bold';
                _0x2b9b7b['totalHealth'] = new _0x1e6a3f['text'](_0x2b9b7b['fullHealth'], _0x4a4e11 + 0x3, _0x3925d5, '#FFF', 'Arial', _0x26a9dd, _0xdc4aa9, 0.9, 'left');
                if (_0x2b9b7b['fullHealth'] == 0x64) {
                    _0x2b9b7b['totalHealth']['canvas'] = _0x473362;
                }
                _0x2b9b7b['ui']['add'](_0x2b9b7b['totalHealth']);
                _0x2b9b7b['middleHealth'] = new _0x1e6a3f['text']('/', _0x4a4e11 + 0x1, _0x3925d5, '#FFF', 'Arial', _0x26a9dd, _0xdc4aa9, 0.5, 'center');
                _0x2b9b7b['middleHealth']['canvas'] = _0x1e03e3;
                _0x2b9b7b['ui']['add'](_0x2b9b7b['middleHealth']);
                _0x2b9b7b['currentHealth'] = new _0x1e6a3f['text']('100', _0x4a4e11 - 0x3, _0x3925d5, '#FFF', 'Arial', _0x26a9dd, _0xdc4aa9, 0x1, 'right');
                _0x2b9b7b['ui']['add'](_0x2b9b7b['currentHealth']);
                _0x2b9b7b['ui']['opacity'] = 0x0;
                _0x2b9b7b['visual']['add'](_0x2b9b7b['ui']);
                _0x2b9b7b['shakePosition'] = new _0x1e6a3f['Vector2'](0x0, 0x0);
                _0x2b9b7b['sprite']['position'] = _0x2b9b7b['shakePosition'];
                _0x2b9b7b['velocity'] = new _0x1e6a3f['Vector2'](0x0, 0x0);
                _0x2b9b7b['elasticity'] = 0.01;
                _0x2b9b7b['drag'] = 0.5;
                _0x2b9b7b['playSound'] = _0x7a4a83;
                if (_0x2b9b7b['envType'] == 'wall') {
                    if (_0x4b47c7[_0x3a641c['mat']] == 'brick') {
                        _0x2b9b7b['playSound'] = _0x129bbd;
                    } else if (_0x4b47c7[_0x3a641c['mat']] == 'metal') {
                        _0x2b9b7b['playSound'] = _0x4b0d78;
                    }
                } else if (_0x2b9b7b['envType'] == 'rock') {
                    _0x2b9b7b['playSound'] = _0x129bbd;
                } else if (_0x2b9b7b['envType'] == 'trash' || _0x2b9b7b['envType'] == 'silo') {
                    _0x2b9b7b['playSound'] = _0x4b0d78;
                }
                if (_0x3a641c['type'] == 'trash') {
                    _0x2b9b7b['sprite']['size'] = 1.34;
                }
                if (_0x3a641c['type'] == 'hay') {
                    _0x2b9b7b['sprite']['size'] = 0x1;
                }
                if (_0x3a641c['type'] == 'basketballnet') {
                    _0x2b9b7b['sprite']['width'] = 0x12c;
                    _0x2b9b7b['sprite']['height'] = 0xc8;
                    _0x2b9b7b['playSound'] = _0x4b0d78;
                }
                if (_0x3a641c['type'] == 'bench') {
                    _0x2b9b7b['sprite']['width'] = 0x1c2;
                    _0x2b9b7b['sprite']['height'] = 0x96;
                    _0x2b9b7b['playSound'] = _0x4b0d78;
                }
                if (_0x3a641c['type'] == 'metalbench') {
                    _0x2b9b7b['sprite']['width'] = 0xc8;
                    _0x2b9b7b['sprite']['height'] = 0xc8;
                    _0x2b9b7b['playSound'] = _0x4b0d78;
                }
                if (_0x3a641c['type'] == 'counter') {
                    _0x2b9b7b['sprite']['width'] = 0x190;
                    _0x2b9b7b['sprite']['height'] = 0x64;
                    _0x2b9b7b['playSound'] = _0x4b0d78;
                }
                if (_0x3a641c['type'] == 'corn') {
                    _0x2b9b7b['sprite']['size'] = 1.9;
                }
                if (_0x3a641c['type'] == 'pumpkin' || _0x3a641c['type'] == 'pumpkin1') {
                    _0x2b9b7b['sprite']['size'] = 1.2;
                }
                if (_0x3a641c['type'] == 'table') {
                    _0x2b9b7b['sprite']['width'] = 0xaf;
                    _0x2b9b7b['sprite']['height'] = 0x7d;
                }
                if (_0x3a641c['type'] == 'chair') {
                    _0x2b9b7b['sprite']['width'] = 0x55;
                    _0x2b9b7b['sprite']['height'] = 0x55;
                }
                if (_0x3a641c['type'] == 'couch' || _0x3a641c['type'] == 'junglecouch') {
                    _0x2b9b7b['sprite']['size'] = 1.3;
                }
                if (_0x3a641c['type'] == 'desk') {
                    _0x2b9b7b['sprite']['size'] = 1.2;
                }
                if (_0x3a641c['type'] == 'wall') {
                    _0x2b9b7b['material'] = _0x4b47c7[_0x3a641c['mat']];
                    _0x561d93['objects']['unshift'](_0x2b9b7b['visual']);
                    _0x2b9b7b['visual']['parent'] = _0x561d93;
                    _0x2b9b7b['sprite']['opacity'] = 0.9;
                    _0x2b9b7b['sprite']['addBelow'](new _0x1e6a3f['image'](_0x282ecd('blue' + _0x2b9b7b['material']), 0x0, 0x0, _0x127702 * _0x12c372 / 0x2, _0x127702, 0.7));
                    _0x2b9b7b['wall0'] = new _0x1e6a3f['image'](_0x282ecd(_0x2b9b7b['material'] + 'wall0'), 0x0, 0x0, _0x127702 * _0x12c372, _0x127702 * 0x2);
                    _0x2b9b7b['wall1'] = new _0x1e6a3f['image'](_0x282ecd(_0x2b9b7b['material'] + 'wall1'), 0x0, 0x0, _0x127702 * _0x12c372, _0x127702 * 0x2);
                    _0x2b9b7b['wall2'] = new _0x1e6a3f['image'](_0x282ecd(_0x2b9b7b['material'] + 'wall2'), 0x0, 0x0, _0x127702 * _0x12c372, _0x127702 * 0x2);
                    _0x2b9b7b['rising'] = [];
                    _0x2b9b7b['lowering'] = [_0x2b9b7b['wall0']];
                    _0x2b9b7b['sprite']['add'](_0x2b9b7b['wall0']);
                    _0x2b9b7b['sprite']['add'](_0x2b9b7b['wall1']);
                    _0x2b9b7b['sprite']['add'](_0x2b9b7b['wall2']);
                    _0x2b9b7b['wall0']['opacity'] = 0x0;
                    _0x2b9b7b['wall1']['opacity'] = 0x0;
                    _0x2b9b7b['wall2']['opacity'] = 0x0;
                    if (_0x3a641c['health'] / _0x2b9b7b['fullHealth'] > 0.8 && _0x2b9b7b['wall2']['opacity'] < 0x1 && _0x2b9b7b['lowering']['indexOf'](_0x2b9b7b['wall2']) < 0x0 && _0x2b9b7b['rising']['indexOf'](_0x2b9b7b['wall2']) < 0x0) {
                        _0x2b9b7b['lowering']['push'](_0x2b9b7b['wall2']);
                    }
                    if (_0x3a641c['health'] / _0x2b9b7b['fullHealth'] >= 0.4 && _0x2b9b7b['wall1']['opacity'] < 0x1 && _0x2b9b7b['lowering']['indexOf'](_0x2b9b7b['wall1']) < 0x0 && _0x2b9b7b['rising']['indexOf'](_0x2b9b7b['wall1']) < 0x0) {
                        _0x2b9b7b['lowering']['push'](_0x2b9b7b['wall1']);
                    }
                } else if (_0x3a641c['type']['substring'](0x0, 0x4) == 'tree' || _0x3a641c['type'] == 'rock' || _0x3a641c['type'] == 'jungletree' || _0x3a641c['type'] == 'cherryblossom') {
                    _0x2b9b7b['sprite']['width'] = _0x2b9b7b['sprite']['height'] = _0x2b9b7b['sprite']['width'] * 0x2;
                    _0x2b9b7b['visual']['rotation'] = Math['random']() * 0x2 * Math['PI'];
                    if (_0x3a641c['type'] == 'rock') {
                        _0x561d93['addBelow'](_0x2b9b7b['visual']);
                    } else {
                        _0x463f6a['addBelow'](_0x2b9b7b['visual']);
                    }
                    if (_0x2f153f) {
                        if (_0x3a641c['type']['substring'](0x0, 0x4) == 'tree') {
                            _0x2b9b7b['sprite']['image'] = _0x282ecd('christmastree' + (_0x3a641c['type']['substring'](0x4, 0x5) * 0x2 + Math['floor'](Math['random']() * 0x2)));
                        }
                    }
                } else if (_0x3a641c['type'] == 'trash' || _0x3a641c['type'] == 'chair' || _0x3a641c['type'] == 'table' || _0x3a641c['type'] == 'couch' || _0x3a641c['type'] == 'bench' || _0x3a641c['type'] == 'metalbench' || _0x3a641c['type'] == 'counter') {
                    _0x561d93['addBelow'](_0x2b9b7b['visual']);
                } else if (_0x3a641c['type'] == 'basketballnet') {
                    _0x463f6a['addBelow'](_0x2b9b7b['visual']);
                } else {
                    _0x561d93['add'](_0x2b9b7b['visual']);
                }
            }, function (_0x535f9b) {
                _0x535f9b['ui']['rotation'] = -_0x535f9b['visual']['rotation'];
                _0x535f9b['healthbar']['width'] += (_0x535f9b['health'] / _0x535f9b['fullHealth'] * 0x64 - _0x535f9b['healthbar']['width']) * 0.1 * _0x1e6a3f['clientDetails']['dt'];
                _0x535f9b['healthbar']['width'] = Math['min'](Math['max'](_0x535f9b['healthbar']['width'], 0x0), 0x64);
                _0x535f9b['healthbar']['position']['x'] = (_0x535f9b['healthbar']['width'] - 0x64) / 0x2;
                var _0x32cd54 = Math['random']() * Math['PI'] * 0x2;
                var _0x28197d = 0.5;
                _0x535f9b['sprite']['position']['x'] = Math['cos'](_0x32cd54) * _0x535f9b['shake'] * _0x28197d;
                _0x535f9b['sprite']['position']['y'] = Math['sin'](_0x32cd54) * _0x535f9b['shake'] * _0x28197d;
                _0x535f9b['shake'] -= _0x1e6a3f['clientDetails']['dt'];
                _0x535f9b['shake'] = Math['max'](_0x535f9b['shake'], 0x0);
                _0x535f9b['velocity']['x'] -= _0x535f9b['velocity']['x'] * _0x535f9b['drag'] * _0x1e6a3f['clientDetails']['dt'];
                _0x535f9b['velocity']['y'] -= _0x535f9b['velocity']['y'] * _0x535f9b['drag'] * _0x1e6a3f['clientDetails']['dt'];
                _0x535f9b['velocity']['x'] -= _0x535f9b['shakePosition']['x'] * _0x535f9b['elasticity'] * _0x1e6a3f['clientDetails']['dt'];
                _0x535f9b['velocity']['y'] -= _0x535f9b['shakePosition']['y'] * _0x535f9b['elasticity'] * _0x1e6a3f['clientDetails']['dt'];
                _0x535f9b['shakePosition']['x'] += _0x535f9b['velocity']['x'] * _0x1e6a3f['clientDetails']['dt'];
                _0x535f9b['shakePosition']['y'] += _0x535f9b['velocity']['y'] * _0x1e6a3f['clientDetails']['dt'];
                if (_0x535f9b['shadow'] !== undefined && _0x1e6a3f['me']['visual'] !== undefined) {
                    _0x535f9b['shadow']['width'] = _0x535f9b['sprite']['width'];
                    _0x535f9b['shadow']['height'] = _0x535f9b['sprite']['height'];
                    _0x535f9b['shadowContainer']['rotation'] = -_0x535f9b['visual']['rotation'];
                    _0x535f9b['shadow']['rotation'] = _0x535f9b['visual']['rotation'];
                    _0x535f9b['shadow']['position']['x'] = _0x535f9b['visual']['position']['x'] - _0x1e6a3f['me']['visual']['position']['x'];
                    _0x535f9b['shadow']['position']['y'] = _0x535f9b['visual']['position']['y'] - _0x1e6a3f['me']['visual']['position']['y'];
                    var _0x528c33 = 0.1;
                    _0x535f9b['shadow']['position']['x'] *= _0x528c33;
                    _0x535f9b['shadow']['position']['y'] *= _0x528c33;
                    _0x535f9b['shadow']['position']['x'] += _0x535f9b['sprite']['position']['x'];
                    _0x535f9b['shadow']['position']['y'] += _0x535f9b['sprite']['position']['y'];
                    _0x535f9b['shadow']['opacity'] = Math['max'](0.2 - (Math['abs'](_0x535f9b['shadow']['position']['x']) + Math['abs'](_0x535f9b['shadow']['position']['y'])) / 0x190, 0x0);
                    _0x535f9b['shadow']['size'] = 1.1 + (Math['abs'](_0x535f9b['shadow']['position']['x']) + Math['abs'](_0x535f9b['shadow']['position']['y'])) / 0x190;
                }
                _0x535f9b['ticksSinceHealthChange'] += _0x1e6a3f['clientDetails']['dt'];
                if (_0x535f9b['ticksSinceHealthChange'] >= 0x1f4) {
                    _0x535f9b['ticksSinceHealthChange'] = 0x1f4;
                    _0x535f9b['ui']['opacity'] -= _0x1e6a3f['clientDetails']['dt'] / 0x32;
                    _0x535f9b['ui']['opacity'] = Math['max'](_0x535f9b['ui']['opacity'], 0x0);
                } else {
                    _0x535f9b['ui']['opacity'] += _0x1e6a3f['clientDetails']['dt'] / 0x14;
                    _0x535f9b['ui']['opacity'] = Math['min'](_0x535f9b['ui']['opacity'], 0x1);
                }
                if (_0x535f9b['envType'] == 'wall') {
                    for (var _0x1edb00 = 0x0; _0x1edb00 < _0x535f9b['lowering']['length']; _0x1edb00++) {
                        _0x535f9b['lowering'][_0x1edb00]['opacity'] += _0x1e6a3f['clientDetails']['dt'] / 0x14;
                        _0x535f9b['lowering'][_0x1edb00]['width'] = _0x10a220(_0x127702 * _0x12c372, _0x127702 * _0x12c372 / 0x2, _0x535f9b['lowering'][_0x1edb00]['opacity']);
                        _0x535f9b['lowering'][_0x1edb00]['height'] = _0x10a220(_0x127702 * 0x2, _0x127702, _0x535f9b['lowering'][_0x1edb00]['opacity']);
                        if (_0x535f9b['lowering'][_0x1edb00]['opacity'] >= 0x1) {
                            _0x535f9b['lowering'][_0x1edb00]['opacity'] = 0x1;
                            _0x535f9b['lowering'][_0x1edb00]['width'] = _0x10a220(_0x127702 * _0x12c372, _0x127702 * _0x12c372 / 0x2, _0x535f9b['lowering'][_0x1edb00]['opacity']);
                            _0x535f9b['lowering'][_0x1edb00]['height'] = _0x10a220(_0x127702 * 0x2, _0x127702, _0x535f9b['lowering'][_0x1edb00]['opacity']);
                            _0x535f9b['lowering']['splice'](_0x1edb00, 0x1);
                            _0x1edb00--;
                        }
                    }
                    for (var _0x1edb00 = 0x0; _0x1edb00 < _0x535f9b['rising']['length']; _0x1edb00++) {
                        _0x535f9b['rising'][_0x1edb00]['opacity'] -= _0x1e6a3f['clientDetails']['dt'] / 0x14;
                        _0x535f9b['rising'][_0x1edb00]['width'] = _0x10a220(_0x127702 * _0x12c372, _0x127702 * _0x12c372 / 0x2, _0x535f9b['rising'][_0x1edb00]['opacity']);
                        _0x535f9b['rising'][_0x1edb00]['height'] = _0x10a220(_0x127702 * 0x2, _0x127702, _0x535f9b['rising'][_0x1edb00]['opacity']);
                        if (_0x535f9b['rising'][_0x1edb00]['opacity'] <= 0x0) {
                            _0x535f9b['rising'][_0x1edb00]['opacity'] = 0x0;
                            _0x535f9b['rising']['splice'](_0x1edb00, 0x1);
                            _0x1edb00--;
                        }
                    }
                }
                if (_0x535f9b['done']) {
                    _0x535f9b['visual']['opacity'] -= 0.07 * _0x1e6a3f['clientDetails']['dt'];
                    if (_0x535f9b['visual']['opacity'] <= 0x0) {
                        _0x535f9b['ui']['remove'](_0x535f9b['totalHealth']);
                        _0x535f9b['ui']['remove'](_0x535f9b['middleHealth']);
                        _0x535f9b['ui']['remove'](_0x535f9b['currentHealth']);
                        if (_0x535f9b['totalHealth']['canvas'] != _0x473362) {
                            _0x535f9b['totalHealth']['unlink']();
                        }
                        _0x535f9b['currentHealth']['unlink']();
                        _0x535f9b['totalHealth'] = null;
                        _0x535f9b['middleHealth'] = null;
                        _0x535f9b['currentHealth'] = null;
                        for (var _0x1edb00 = 0x0; _0x1edb00 < _0x1e6a3f['objects']['length']; _0x1edb00++) {
                            if (_0x1e6a3f['objects'][_0x1edb00]['id'] == _0x535f9b['id']) {
                                if (_0x1e6a3f['objects'][_0x1edb00]['visual']['parent'] != null)
                                    _0x1e6a3f['objects'][_0x1edb00]['visual']['parent']['remove'](_0x1e6a3f['objects'][_0x1edb00]['visual']);
                                _0x1e6a3f['objects']['splice'](_0x1edb00, 0x1);
                            }
                        }
                    }
                }
            }, function (_0x222fb6, _0x42da84) {
                if (_0x42da84['health'] !== undefined) {
                    if (_0x42da84['health'] < _0x222fb6['health']) {
                        _0x222fb6['shake'] = _0x222fb6['health'] - _0x42da84['health'];
                        _0x222fb6['playSound'](_0x222fb6);
                        _0x222fb6['shake'] = Math['min'](_0x222fb6['shake'], 0x1e);
                    }
                    if (_0x222fb6['envType'] == 'wall') {
                        if (_0x42da84['health'] < _0x222fb6['health']) {
                            if (_0x42da84['health'] / _0x222fb6['fullHealth'] <= 0.7 && _0x222fb6['wall2']['opacity'] > 0x0 && _0x222fb6['rising']['indexOf'](_0x222fb6['wall2']) < 0x0) {
                                _0x222fb6['rising']['push'](_0x222fb6['wall2']);
                                if (_0x222fb6['lowering']['indexOf'](_0x222fb6['wall2']) >= 0x0) {
                                    _0x222fb6['lowering']['splice'](_0x222fb6['lowering']['indexOf'](_0x222fb6['wall2']), 0x1);
                                }
                            }
                            if (_0x42da84['health'] / _0x222fb6['fullHealth'] <= 0.3 && _0x222fb6['wall1']['opacity'] > 0x0 && _0x222fb6['rising']['indexOf'](_0x222fb6['wall1']) < 0x0) {
                                _0x222fb6['rising']['push'](_0x222fb6['wall1']);
                                if (_0x222fb6['lowering']['indexOf'](_0x222fb6['wall1']) >= 0x0) {
                                    _0x222fb6['lowering']['splice'](_0x222fb6['lowering']['indexOf'](_0x222fb6['wall2']), 0x1);
                                }
                            }
                        } else {
                            if (_0x42da84['health'] / _0x222fb6['fullHealth'] > 0.8 && _0x222fb6['wall2']['opacity'] < 0x1 && _0x222fb6['lowering']['indexOf'](_0x222fb6['wall2']) < 0x0 && _0x222fb6['rising']['indexOf'](_0x222fb6['wall2']) < 0x0) {
                                _0x222fb6['lowering']['push'](_0x222fb6['wall2']);
                            }
                            if (_0x42da84['health'] / _0x222fb6['fullHealth'] >= 0.4 && _0x222fb6['wall1']['opacity'] < 0x1 && _0x222fb6['lowering']['indexOf'](_0x222fb6['wall1']) < 0x0 && _0x222fb6['rising']['indexOf'](_0x222fb6['wall1']) < 0x0) {
                                _0x222fb6['lowering']['push'](_0x222fb6['wall1']);
                            }
                        }
                    }
                    if (_0x222fb6['health'] != _0x42da84['health']) {
                        _0x222fb6['ticksSinceHealthChange'] = 0x0;
                        if (_0x222fb6['envType'] == 'wall' && _0x42da84['health'] == _0x222fb6['fullHealth']) {
                            _0x222fb6['shake'] = 0xf;
                        }
                    }
                    if (_0x42da84['health'] == _0x222fb6['fullHealth']) {
                        _0x222fb6['ticksSinceHealthChange'] = 0x1f4;
                    }
                    _0x222fb6['currentHealth']['text'] = _0x42da84['health'];
                    _0x222fb6['health'] = _0x42da84['health'];
                }
            }, function (_0x557e59, _0x2f6579) {
                if (_0x557e59['done']) {
                    return !![];
                }
                if (_0x2f6579['health'] !== undefined) {
                    if (_0x2f6579['health'] < _0x557e59['health'] && _0x557e59['health'] != 0x0) {
                        _0x557e59['shake'] = 0x6;
                        _0x557e59['ticksSinceHealthChange'] = 0x0;
                        _0x557e59['playSound'](_0x557e59);
                    }
                    _0x2f6579['health'] = Math['max'](_0x2f6579['health'], 0x0);
                    _0x557e59['currentHealth']['text'] = _0x2f6579['health'];
                    _0x557e59['health'] = _0x2f6579['health'];
                }
                if (_0x557e59['envType']['substring'](0x0, 0x4) == 'tree' || _0x557e59['envType'] == 'jungletree') {
                    var _0x400adf = _0x5ef86b == 0x0 ? 0xc : 0x6;
                    for (var _0xe7c2d0 = 0x0; _0xe7c2d0 < _0x400adf; _0xe7c2d0++) {
                        var _0x44819d = (Math['random']() - 0.5) * 0x4;
                        var _0x4eb39e = (Math['random']() - 0.5) * 0x4;
                        if (_0x2f153f) { }
                        var _0x3aa861 = _0x1e6a3f['customCustomParticle']('leaf', _0x557e59, (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 0x1, _0x44819d, _0x4eb39e);
                        if (_0x3aa861 === undefined) {
                            console['log']('SOMEHOW GOT UNDEFINED');
                        }
                    }
                    _0x557e59['done'] = !![];
                    return !![];
                } else if (_0x557e59['envType'] == 'rock') {
                    var _0x400adf = _0x5ef86b == 0x0 ? 0x8 : 0x4;
                    for (var _0xe7c2d0 = 0x0; _0xe7c2d0 < _0x400adf; _0xe7c2d0++) {
                        var _0x44819d = (Math['random']() - 0.5) * 0x4;
                        var _0x4eb39e = (Math['random']() - 0.5) * 0x4;
                        _0x1e6a3f['customCustomParticle']('pebble', _0x557e59, (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 1.2, _0x44819d, _0x4eb39e);
                    }
                    _0x557e59['done'] = !![];
                    return !![];
                } else if (_0x557e59['envType'] == 'trash') {
                    var _0x400adf = _0x5ef86b == 0x0 ? 0x8 : 0x4;
                    for (var _0xe7c2d0 = 0x0; _0xe7c2d0 < _0x400adf; _0xe7c2d0++) {
                        var _0x44819d = (Math['random']() - 0.5) * 0x4;
                        var _0x4eb39e = (Math['random']() - 0.5) * 0x4;
                        _0x1e6a3f['customCustomParticle']('scrap', _0x557e59, (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 1.2, _0x44819d, _0x4eb39e);
                    }
                    _0x557e59['done'] = !![];
                    return !![];
                } else if (_0x557e59['envType'] == 'wall') {
                    _0x557e59['rising']['push'](_0x557e59['wall0']);
                    _0x557e59['done'] = !![];
                    return !![];
                } else if (_0x557e59['envType'] == 'corn' || _0x557e59['envType'] == 'table' || _0x557e59['envType'] == 'junglecouch' || _0x557e59['envType'] == 'desk' || _0x557e59['envType'] == 'chair' || _0x557e59['envType'] == 'silo' || _0x557e59['envType'] == 'couch' || _0x557e59['envType'] == 'hay' || _0x557e59['envType'] == 'bench' || _0x557e59['envType'] == 'basketballnet' || _0x557e59['envType'] == 'metalbench' || _0x557e59['envType'] == 'counter' || _0x557e59['envType'] == 'pumpkin' || _0x557e59['envType'] == 'present' || _0x557e59['envType'] == 'cherryblossom') {
                    _0x557e59['done'] = !![];
                    return !![];
                }
            });
            function _0x1336fd(_0x4bc5f9) {
                return _0x4bc5f9 > 0x3e7 ? (_0x4bc5f9 / 0x3e8)['toFixed'](0x1) + 'k' : _0x4bc5f9;
            }
            var _0x219668 = 0x0;
            _0x1e6a3f['timers'] = [];
            _0x1e6a3f['time'] = function (_0x2ae2a0) {
                _0x1e6a3f['timers']['push']({
                    'name': _0x2ae2a0,
                    'time': performance['now']()
                });
            };
            _0x1e6a3f['timeEnd'] = function (_0x535797) {
                for (var _0x22e6f8 = 0x0; _0x22e6f8 < _0x1e6a3f['timers']['length']; _0x22e6f8++) {
                    if (_0x1e6a3f['timers'][_0x22e6f8]['name'] == _0x535797) {
                        var _0x50b50f = _0x1e6a3f['timers']['splice'](_0x22e6f8, 0x1)[0x0];
                        _0x22e6f8--;
                    }
                }
            };
            var _0x4cf0d1 = -0x1;
            function _0x1695fb() {
                _0x612620['requestFrame'](_0x1695fb);
                _0x1d6fdb();
                if (gameWrapper['showingInterstitialAd']) {
                    return;
                }
                _0x1e6a3f['time']('1');
                _0x23f908['clear']();
                var _0xdb06f3 = 'initial';
                if (_0x1e6a3f['spectating'] && _0xf5fb22['isCollidingWithRectangle'](window['spawnButton'])) {
                    window['spawnButton']['size'] = 0x1;
                    window['spawnButton']['strokeOpacity'] = 0x1;
                    window['spawnButton']['opacity'] = 0.8;
                    window['spawnText']['opacity'] = 0x1;
                    _0xdb06f3 = 'pointer';
                } else if (!_0x1e6a3f['spectating']) {
                    _0xdb06f3 = 'none';
                } else {
                    window['spawnButton']['size'] = 0x1;
                    window['spawnButton']['strokeOpacity'] = 0.4;
                    window['spawnText']['fontSize'] = 0x1e;
                    window['spawnButton']['opacity'] = 0.6;
                }
                if (_0x1e6a3f['spectating'] && _0x7bebb1['opacity'] != 0x1 && _0xf5fb22['isCollidingWithRectangle'](_0x10b221)) {
                    _0x10b221['strokeOpacity'] = 0x1;
                    _0x10b221['opacity'] = 0.8;
                    _0x10b221['opacity'] = 0x1;
                    _0xdb06f3 = 'pointer';
                } else {
                    _0x10b221['size'] = 0x1;
                    _0x10b221['strokeOpacity'] = 0.4;
                    _0x10b221['opacity'] = 0.6;
                    _0x4c90cb['fontSize'] = 0x1e;
                }
                _0x23f908['c']['style']['cursor'] = _0xdb06f3;
                if (_0x7bebb1['opacity'] != 0x1) {
                    _0x54899e['position']['x'] = -_0x561d93['camera']['position']['x'] % 0x32 + _0x561d93['camera']['position']['x'];
                    _0x54899e['position']['y'] = -_0x561d93['camera']['position']['y'] % 0x32 + _0x561d93['camera']['position']['y'];
                    _0x23f908['render'](_0x696c2e);
                    _0x23f908['render'](_0x586b15);
                    _0x23f908['render'](_0x44b24c);
                    _0x23f908['render'](_0x665d6a);
                    _0x23f908['render'](_0x561d93);
                    _0x23f908['render'](_0x463f6a);
                    _0x23f908['render'](_0x27aecb);
                    _0x23f908['render'](_0x2a0821);
                    var _0xdb06f3 = 'none';
                    _0x28d401['visible'] = _0xc370a0['visible'] = _0xf5fb22['emulatedFromTouch'] && !_0x1e6a3f['spectating'] && !_0x5ea1e7;
                    _0x58157d['visible'] = _0xf5fb22['emulatedFromTouch'];
                    if (_0x5ea1e7) {
                        _0x44337e['visible'] = _0x571e34['visible'] = !![];
                        _0xdb06f3 = 'initial';
                        _0x3d84ce['opacity'] = 0x1;
                        _0x174e9d['size'] = 1.2;
                        _0x44337e['text'] = 'Click and Drag to Swap Items';
                        _0x571e34['text'] = 'Drag to the Middle to Drop';
                        _0x44337e['fontSize'] = _0x3e7437;
                        _0x571e34['fontSize'] = _0x3e7437;
                        if (_0x375764 != -0x1) {
                            _0x2fba54[_0x375764]['position']['x'] = (_0xf5fb22['x'] - _0x575d9a['x']) / _0x174e9d['size'];
                            _0x2fba54[_0x375764]['position']['y'] = (_0xf5fb22['y'] - _0x575d9a['y']) / _0x174e9d['size'];
                            _0xdb06f3 = 'pointer';
                        }
                        for (var _0x79b372 = 0x0; _0x79b372 < _0x1a4a1f['length']; _0x79b372++) {
                            _0x1a4a1f[_0x79b372]['color'] = '#000';
                        }
                        if (_0x59478a() != -0x1) {
                            _0xdb06f3 = 'pointer';
                        }
                        if (_0x41f5ba() != -0x1) {
                            _0xdb06f3 = 'pointer';
                        }
                        if (_0x59cfa8() != -0x1) {
                            _0xdb06f3 = 'pointer';
                        }
                    } else {
                        _0x44337e['visible'] = _0x571e34['visible'] = !_0xf5fb22['emulatedFromTouch'];
                        _0x3297b5();
                        _0x3d84ce['opacity'] = 0x0;
                        _0x174e9d['size'] = 0x1;
                        _0x44337e['text'] = 'Press ' + _0x453907('Build') + ' to Build';
                        _0x571e34['text'] = 'Press ' + _0x453907('Inventory') + ' to Manage Inventory';
                        _0x44337e['fontSize'] = _0xa814e4;
                        _0x571e34['fontSize'] = _0xa814e4;
                        for (var _0x79b372 = 0x0; _0x79b372 < _0x281050['length']; _0x79b372++) {
                            _0x281050[_0x79b372]['opacity'] = 0x0;
                        }
                    }
                    if (!_0x1e6a3f['spectating']) {
                        _0x23f908['c']['style']['cursor'] = _0xdb06f3;
                    }
                    _0x123f03['text'] = _0x44337e['text'];
                    _0xe539af['text'] = _0x571e34['text'];
                    _0x123f03['fontSize'] = _0x44337e['fontSize'];
                    _0xe539af['fontSize'] = _0x44337e['fontSize'];
                    _0x54d0f6();
                }
                _0x1e6a3f['timeEnd']('1');
                _0x1e6a3f['time']('2');
                _0xa7b2b += _0x1e6a3f['clientDetails']['dt'] / 0x32;
                if (_0xa7b2b > Math['PI'] * 0x2) {
                    _0xa7b2b -= Math['PI'] * 0x2;
                }
                var _0x27d21d = Math['sin'](_0xa7b2b) * 0.13;
                if (_0x5ef86b == 0x0) {
                    for (var _0x79b372 = 0x0; _0x79b372 < window['grassTypes']; _0x79b372++) {
                        window['grass' + _0x79b372]['rotational']['rotation'] = _0x27d21d;
                    }
                    _0x397319();
                }
                if (_0x7bebb1['opacity'] != 0x1) {
                    _0x23f908['render'](_0x3fbfae);
                }
                if (!_0x1e6a3f['spectating'] && _0x2f153f) { }
                if (_0x5c2d09) {
                    _0x23f908['render'](_0x3cc6f9);
                }
                if (_0x1e6a3f['spectating'] && !_0x553bd8) {
                    _0x22b03e();
                    if (_0x370bad['opacity'] == 0x1) {
                        _0x2bb197['opacity'] += _0x1e6a3f['clientDetails']['dt'] / 0x190;
                    } else {
                        _0x2bb197['opacity'] += _0x1e6a3f['clientDetails']['dt'] / 0x32;
                    }
                    _0x2bb197['opacity'] = Math['min'](_0x2bb197['opacity'], 0x1);
                    if (_0x7bebb1['opacity'] != 0x1) {
                        if (gameWrapper['enabled'] && _0x1e6a3f['now'] - _0x2974d1 > 0x4 * 0x3c * 0x3e8) {
                            _0x2974d1 = _0x1e6a3f['now'];
                            var _0x4d6904 = _0x271136();
                            if (_0x4d6904 == null || !_0x4d6904['isOwned']) {
                                setTimeout(function () {
                                    gameWrapper['showInterstitialAd']();
                                }, 0x3e8);
                            }
                        }
                        var _0x58024a = document['getElementById']('deathscreentopleft')['style']['visibility'];
                        _0x2c2779('deathscreentopleft');
                        if (!_0x58024a) { }
                        if (_0xf5fb22['locked']) {
                            document['exitPointerLock']();
                        }
                    } else {
                        _0x165e4e('deathscreentopleft');
                    }
                    _0x23f908['render'](_0x2bb197);
                } else {
                    _0x165e4e('deathscreentopleft');
                    _0x2bb197['opacity'] = 0x0;
                }
                if (_0x1e6a3f['spectating'] && _0x7bebb1['opacity'] == 0x1) {
                    _0x411929['showName'](_0x1e6a3f, _0x4df00c);
                    _0x1a66a6 -= _0x1e6a3f['clientDetails']['dt'];
                    try {
                        var _0x2ba2a = 0x1 / (_0x23f908['ratio'] / _0x23f908['qualitySize']);
                        if (window['innerWidth'] >= 0x556 && window['innerWidth'] < 0x780) {
                            _0x2ba2a = 0.9 * _0x1e6a3f['devicePixelRatio'];
                        }
                        for (var _0x79b372 = 0x0; _0x79b372 < _0x4df00c['length']; _0x79b372++) {
                            _0x4cf0d1 = _0x2ba2a;
                            var _0x112705 = 0x1 / (_0x23f908['ratio'] / _0x23f908['qualitySize']);
                            if (window['innerWidth'] >= 0x556 && window['innerWidth'] < 0x780 && _0x4df00c[_0x79b372] != 'nameBox') { }
                            _0x112705 /= _0x1e6a3f['devicePixelRatio'];
                            if (window['innerWidth'] < 0x3e8 || _0x110cdb) {
                                if (_0x4df00c[_0x79b372] == 'nameBox') { } else {
                                    _0x112705 *= 1.5;
                                }
                            }
                            document['getElementById'](_0x4df00c[_0x79b372])['style']['transform'] = 'scale(' + _0x112705 + ')';
                            var _0x335105 = document['getElementById'](_0x4df00c[_0x79b372])['getBoundingClientRect']()['width'];
                            _0x335105 = _0x335105 / _0x112705 - _0x335105;
                            _0x335105 /= 0x2;
                            if (isNaN(_0x335105)) {
                                continue;
                            }
                            var _0x99519f = document['getElementById'](_0x4df00c[_0x79b372])['getBoundingClientRect']()['height'];
                            _0x99519f = _0x99519f / _0x112705 - _0x99519f;
                            _0x99519f /= 0x2;
                            if (isNaN(_0x99519f)) {
                                continue;
                            }
                            if (_0x4061bb[_0x79b372]['left'] !== undefined) {
                                document['getElementById'](_0x4df00c[_0x79b372])['style']['left'] = _0x4061bb[_0x79b372]['left'] * _0x112705 - _0x335105 + _0x23f908['inset']['left'] / _0x1e6a3f['devicePixelRatio'];
                            }
                            if (_0x4061bb[_0x79b372]['top'] !== undefined) {
                                document['getElementById'](_0x4df00c[_0x79b372])['style']['top'] = _0x4061bb[_0x79b372]['top'] * _0x112705 - _0x99519f + _0x23f908['inset']['top'] / _0x1e6a3f['devicePixelRatio'];
                            }
                            if (_0x4061bb[_0x79b372]['bottom'] !== undefined) {
                                document['getElementById'](_0x4df00c[_0x79b372])['style']['bottom'] = _0x4061bb[_0x79b372]['bottom'] * _0x112705 - _0x99519f + _0x23f908['inset']['bottom'] / _0x1e6a3f['devicePixelRatio'];
                            }
                            if (_0x4061bb[_0x79b372]['right'] !== undefined) {
                                document['getElementById'](_0x4df00c[_0x79b372])['style']['right'] = _0x4061bb[_0x79b372]['right'] * _0x112705 - _0x335105 + _0x23f908['inset']['right'] / _0x1e6a3f['devicePixelRatio'];
                            }
                        }
                    } catch (_0x41fb7d) {
                        console['log']('Render issue');
                    }
                    _0x3691ea();
                    _0x23f908['render'](_0x7bebb1);
                } else {
                    _0x411929['hideName'](_0x1e6a3f, _0x4df00c);
                }
                if (!_0x1e6a3f['spectating']) {
                    if (!_0x5ea1e7) {
                        _0x23f908['render'](_0x500576);
                    }
                    _0x7bebb1['opacity'] = 0x0;
                    if (_0x1a48d2 != null) {
                        clearInterval(_0x1a48d2);
                        _0x1a48d2 = null;
                    }
                }
                _0x1e6a3f['timeEnd']('2');
            }
            function _0x1d6fdb() {
                _0x1e6a3f['flushMessageQueue']();
                if (_0x369ac8 == 0x0) {
                    _0xe9c774();
                }
                _0x282d3b(_0x1e6a3f['clientDetails']['actualDt']);
                _0x339df1['changedKeys']['forEach'](function (_0x108b49) {
                    _0x1e6a3f['currentPackets']['push']({
                        'type': 'updateControls',
                        'object': {
                            'key': _0x108b49,
                            'state': _0x339df1[_0x108b49]
                        }
                    });
                });
                _0x339df1['changedKeys'] = [];
                if (_0xf5fb22['moved']) {
                    if (_0xf5fb22['renderer'] !== undefined && !_0x42fd53) {
                        _0xf5fb22['x'] = Math['max'](Math['min']((_0xf5fb22['newx'] - _0xf5fb22['renderer']['c']['width'] / _0x1e6a3f['devicePixelRatio'] * _0xf5fb22['renderer']['qualitySize'] / 0x2 - _0xf5fb22['renderer']['left']) * _0xf5fb22['renderer']['ratio'] / _0xf5fb22['renderer']['qualitySize'] * _0x1e6a3f['devicePixelRatio'], 0x780 / 0x2), -0x780 / 0x2);
                        _0xf5fb22['y'] = Math['max'](Math['min']((_0xf5fb22['newy'] - _0xf5fb22['renderer']['c']['height'] / _0x1e6a3f['devicePixelRatio'] * _0xf5fb22['renderer']['qualitySize'] / 0x2 - _0xf5fb22['renderer']['top']) * _0xf5fb22['renderer']['ratio'] / _0xf5fb22['renderer']['qualitySize'] * _0x1e6a3f['devicePixelRatio'], 0x438 / 0x2), -0x438 / 0x2);
                    }
                    _0xf5fb22['moved'] = ![];
                }
                if (_0x42fd53) {
                    _0x42fd53 = ![];
                }
                _0xf5fb22['x'] = Math['max'](Math['min'](_0xf5fb22['x'], 0x780 / 0x2), -0x780 / 0x2);
                _0xf5fb22['y'] = Math['max'](Math['min'](_0xf5fb22['y'], 0x438 / 0x2), -0x438 / 0x2);
                _0x112d73['visible'] = !_0xf5fb22['emulatedFromTouch'];
                var _0x4861fc = ![];
                _0x1ec0f5['visible'] = !_0x5ea1e7;
                for (var _0x313304 of _0x220d98) {
                    _0x313304['visible'] = _0xf5fb22['emulatedFromTouch'] && !_0x1e6a3f['spectating'];
                    _0x4861fc = _0x4861fc || _0x313304['touchActive'];
                }
                var _0x1995d1 = null;
                var _0x39086d = null;
                if (_0x1e6a3f['spectating']) {
                    while (_0x13c421['touches']['length'] > 0x0) {
                        _0x13c421['touches']['splice'](0x0, 0x1);
                    }
                }
                if (!_0x1e6a3f['spectating'] && !_0x5ea1e7 && !_0x5c2d09) {
                    for (var _0x4cb2f1 of _0x13c421['touches']) {
                        if (_0x1995d1 == null && _0x4cb2f1['tStartX'] < 0x0) {
                            _0x1995d1 = _0x4cb2f1;
                        } else if (_0x39086d == null && _0x4cb2f1['tStartX'] > 0x0 && !_0x4861fc) {
                            _0x39086d = _0x4cb2f1;
                        }
                    }
                }
                _0xbb2809(_0x2e06e5, _0x1995d1);
                _0xbb2809(_0x2b4ce5, _0x39086d);
                if (_0xf5fb22['emulatedFromTouch']) {
                    if (_0x2b4ce5['isTriggering'] || _0x36dd9b['touchActive']) {
                        if (!_0xf5fb22['clicking']) {
                            _0xf5fb22['clicking'] = !![];
                            _0xf5fb22['changed'] = !![];
                        }
                    } else {
                        if (_0xf5fb22['clicking']) {
                            _0xf5fb22['clicking'] = ![];
                            _0xf5fb22['changed'] = !![];
                        }
                    }
                    if (_0x1e6a3f['me'] && !_0x1e6a3f['me']['building']) {
                        if (_0x2b4ce5['hasMoved']) {
                            if (!_0xf5fb22['rightClicking']) {
                                _0xf5fb22['rightClicking'] = !![];
                                _0xf5fb22['rightChanged'] = !![];
                            }
                        } else {
                            if (_0xf5fb22['rightClicking']) {
                                _0xf5fb22['rightClicking'] = ![];
                                _0xf5fb22['rightChanged'] = !![];
                            }
                        }
                    }
                } else {
                    if (_0x55f112['shouldbevisible'] != ![]) {
                        _0x37d938(_0x55f112, 'opacity', _0x55f112['opacity'], 0x0, 0x190, 0x0, _0x350bea['easeOutExpo']);
                    }
                    _0x55f112['shouldbevisible'] = ![];
                }
                if (_0x55f112['shouldbevisible'] != _0x2b4ce5['hasMoved']) {
                    if (_0x2b4ce5['hasMoved']) {
                        _0x37d938(_0x55f112, 'opacity', _0x55f112['opacity'], 0.25, 0x1f4, 0x0, _0x350bea['easeOutExpo']);
                    } else {
                        _0x37d938(_0x55f112, 'opacity', _0x55f112['opacity'], 0x0, 0x190, 0x0, _0x350bea['easeOutExpo']);
                    }
                }
                _0x55f112['shouldbevisible'] = _0x2b4ce5['hasMoved'];
                if (_0x2b4ce5['hasMoved']) {
                    var _0x512b42 = _0x323e15 / 0x2 + 0x50;
                    _0x55f112['position']['x'] = Math['cos'](_0x2b4ce5['angle']) * _0x512b42;
                    _0x55f112['position']['y'] = Math['sin'](_0x2b4ce5['angle']) * _0x512b42;
                    _0x55f112['rotation'] = _0x2b4ce5['angle'];
                }
                if (_0xf5fb22['emulatedFromTouch']) {
                    var _0x58a16a = ![];
                    var _0xd29116 = ![];
                    var _0x1ee17d = ![];
                    var _0x387381 = ![];
                    var _0x3a880c = !![];
                    if (_0x339df1['useTouch'] != !![]) {
                        _0x339df1['changedKeys']['push']('useTouch');
                        _0x339df1['changed'] = !![];
                    }
                    _0x339df1['useTouch'] = !![];
                    if (_0x2e06e5['isActive'] && _0x2e06e5['hasMoved']) {
                        var _0x337fc8 = Math['cos'](_0x2e06e5['angle']);
                        var _0x4055e5 = Math['sin'](_0x2e06e5['angle']);
                        var _0x5afe5f = Math['sin'](Math['PI'] / 0x8);
                        _0x58a16a = _0x337fc8 > _0x5afe5f;
                        _0xd29116 = _0x337fc8 < -_0x5afe5f;
                        _0x387381 = _0x4055e5 > _0x5afe5f;
                        _0x1ee17d = _0x4055e5 < -_0x5afe5f;
                        _0x3a880c = !_0x2e06e5['isTriggering'];
                        if (_0x339df1['touchDirection'] != _0x2e06e5['angle']) {
                            _0x339df1['changedKeys']['push']('useTouch');
                            _0x339df1['changedKeys']['push']('touchDirection');
                        }
                        _0x339df1['touchDirection'] = _0x2e06e5['angle'];
                    }
                    if (!_0x2e06e5['isActive']) {
                        if (_0x339df1['touchDirection'] != -0x1) {
                            _0x339df1['changedKeys']['push']('useTouch');
                            _0x339df1['changedKeys']['push']('touchDirection');
                        }
                        _0x339df1['touchDirection'] = -0x1;
                    }
                    if (_0x58a16a != _0x339df1['right']) {
                        _0x339df1['right'] = _0x58a16a;
                        _0x339df1['changedKeys']['push']('right');
                        _0x339df1['changed'] = !![];
                    }
                    if (_0xd29116 != _0x339df1['left']) {
                        _0x339df1['left'] = _0xd29116;
                        _0x339df1['changedKeys']['push']('left');
                        _0x339df1['changed'] = !![];
                    }
                    if (_0x1ee17d != _0x339df1['up']) {
                        _0x339df1['up'] = _0x1ee17d;
                        _0x339df1['changedKeys']['push']('up');
                        _0x339df1['changed'] = !![];
                    }
                    if (_0x387381 != _0x339df1['down']) {
                        _0x339df1['down'] = _0x387381;
                        _0x339df1['changedKeys']['push']('down');
                        _0x339df1['changed'] = !![];
                    }
                    if (_0x3a880c != _0x339df1['shift']) {
                        _0x339df1['shift'] = _0x3a880c;
                        _0x339df1['changedKeys']['push']('shift');
                        _0x339df1['changed'] = !![];
                    }
                } else {
                    if (_0x339df1['useTouch'] != ![]) {
                        _0x339df1['changedKeys']['push']('useTouch');
                        _0x339df1['changed'] = !![];
                    }
                    _0x339df1['useTouch'] = ![];
                }
                if (_0x1e6a3f['me']['ui'] !== undefined) {
                    if (!_0x1e6a3f['spectating'] && !_0x1e6a3f['me']['inCar']) {
                        var _0x3e1e92;
                        if (!_0xf5fb22['emulatedFromTouch']) {
                            _0x3e1e92 = -Math['atan2'](_0xf5fb22['x'] + (_0x561d93['camera']['position']['x'] - _0x1e6a3f['me']['visual']['position']['x']) / _0x561d93['camera']['ratio'], _0xf5fb22['y'] + (_0x561d93['camera']['position']['y'] - _0x1e6a3f['me']['visual']['position']['y']) / _0x561d93['camera']['ratio']) + Math['PI'] / 0x2;
                        } else {
                            if (_0x2e06e5['isActive'] && !_0x2b4ce5['isActive']) {
                                _0x3e1e92 = _0x2b4ce5['angle'];
                            } else if (_0x2b4ce5['isActive']) {
                                _0x3e1e92 = _0x2b4ce5['angle'];
                            }
                            _0x3e1e92 = _0x2b4ce5['angle'];
                        }
                        if (_0x3e1e92 !== undefined) {
                            _0x1e6a3f['me']['actualRotation'] = _0x1e6a3f['me']['visual']['rotation'] = _0x3e1e92;
                        }
                    }
                    _0x1e6a3f['me']['ui']['rotation'] = -_0x1e6a3f['me']['visual']['rotation'];
                }
                _0x219668 += _0x1e6a3f['clientDetails']['dt'];
                if (!_0x1e6a3f['spectating'] && _0xfdf4b4 != Math['round'](_0x1e6a3f['me']['actualRotation'] * 0x32) && _0x1e6a3f['me']['ui'] !== undefined) {
                    if (_0x219668 > 2.8 || _0x219668 > 0.8 && _0xf5fb22['clicking']) {
                        _0x1e6a3f['currentPackets']['push']({
                            'type': 's',
                            'a': Math['round'](_0x1e6a3f['me']['actualRotation'] * 0x3e8) / 0x3e8
                        });
                        _0xfdf4b4 = Math['round'](_0x1e6a3f['me']['actualRotation'] * 0x32);
                        _0x219668 = 0x0;
                    }
                }
                if (!_0x1e6a3f['spectating']) {
                    _0x7bebb1['opacity'] = 0x0;
                    if (_0x1a48d2 != null) {
                        clearInterval(_0x1a48d2);
                        _0x1a48d2 = null;
                    }
                }
                if (_0x3cb168) {
                    _0xf5fb22['clicking'] = ![];
                    _0x3cb168 = ![];
                }
                if (_0xf5fb22['changed']) {
                    if (_0x5ea1e7) {
                        _0xf5fb22['clicking'] = ![];
                    }
                    _0x1e6a3f['currentPackets']['push']({
                        'type': 'mouse',
                        'clicking': _0xf5fb22['clicking']
                    });
                    _0xf5fb22['changed'] = ![];
                }
                if (_0xf5fb22['rightChanged']) {
                    _0x1e6a3f['currentPackets']['push']({
                        'type': 'mouse2',
                        'clicking': _0xf5fb22['rightClicking']
                    });
                    _0xf5fb22['rightChanged'] = ![];
                }
                if (!_0x1e6a3f['spectating']) { }
                _0x54899e['position']['x'] = -_0x561d93['camera']['position']['x'] % 0x32 + _0x561d93['camera']['position']['x'];
                _0x54899e['position']['y'] = -_0x561d93['camera']['position']['y'] % 0x32 + _0x561d93['camera']['position']['y'];
                if (_0x5d8502 > 0x64 && _0x1e6a3f['me']['steadying'] !== undefined) {
                    _0x5e2a9e++;
                    var _0x3e211b = 0x1;
                    if (_0x5e2a9e >= 0x4) {
                        _0x3e211b = 0x0;
                        _0x5e2a9e = 0x0;
                    }
                    for (let _0x1ce36f = _0x3e211b; _0x1ce36f < _0x12499e['length']; _0x1ce36f++) {
                        for (let _0x52d660 = _0x12499e[_0x1ce36f]['objects']['length'] - 0x1; _0x52d660 >= 0x0; _0x52d660--) {
                            let _0x3c9930 = _0x12499e[_0x1ce36f]['objects'][_0x52d660];
                            if (_0x4efd49(_0x3c9930)) {
                                _0x3c9930['visible'] = !![];
                            } else {
                                _0x3c9930['visible'] = ![];
                            }
                        };
                        for (let _0x465ffd = 0x0; _0x465ffd < _0x12499e[_0x1ce36f]['belowObjects']['length']; _0x465ffd++) {
                            let _0xcf2b8b = _0x12499e[_0x1ce36f]['belowObjects'][_0x465ffd];
                            if (_0x4efd49(_0xcf2b8b)) {
                                _0xcf2b8b['visible'] = !![];
                            } else {
                                _0xcf2b8b['visible'] = ![];
                            }
                        }
                    }
                    if (_0x1e6a3f['me']['steadying']) {
                        _0x5d8502 = 0x32;
                    } else {
                        _0x5d8502 = 0x0;
                    }
                }
                _0x5d8502 += _0x1e6a3f['clientDetails']['dt'] * 16.67;
                _0x5c4577 += _0x1e6a3f['clientDetails']['dt'] / 0x96;
                if (_0x5c4577 > 0x1) {
                    _0x5c4577 -= 0x1;
                }
                if (_0x1dfc77['length'] > 0x0 && Math['abs'](_0x1dfc77[0x0]['position']['x'] - _0x1e6a3f['me']['visual']['position']['x']) < 0x9c4) {
                    var _0x540f66 = ![];
                    for (var _0x10df79 = 0x0; _0x10df79 < _0x1dfc77['length']; _0x10df79++) {
                        if (Math['abs'](_0x1dfc77[_0x10df79]['position']['y'] - _0x1e6a3f['me']['visual']['position']['y']) > 0x7d0) {
                            if (_0x540f66) {
                                break;
                            }
                            continue;
                        }
                        var _0x487635 = _0x10df79 - _0x1dfc77['length'] / 0x2;
                        _0x1dfc77[_0x10df79]['position']['y'] = 0x1f4 / 0x3 * _0x487635 + _0x5c4577 * 0x1f4 / 0x3;
                        _0x1dfc77[_0x10df79]['opacity'] = (Math['sin'](_0x1dfc77[_0x10df79]['position']['y'] / 0x64 - _0x5c4577 * Math['PI'] * 0x2) + 0x1) / 0x8 + 0.07;
                        _0x540f66 = !![];
                    }
                }
                _0x4bbfc8 += _0x1e6a3f['clientDetails']['dt'] / 0x4;
                if (!_0x10edfd && _0x1e6a3f['spectating']) {
                    _0x1a66a6 = 0x50;
                }
                _0x10edfd = _0x1e6a3f['spectating'];
                _0x1e6a3f['update']();
                _0x561d93['camera']['position'] = new _0x1e6a3f['Vector2'](_0x1e6a3f['me']['visual']['position']['x'], _0x1e6a3f['me']['visual']['position']['y']);
                _0x46bd0f['update']();
                if (_0x1e6a3f['me']['steadying'] !== undefined && _0x1e6a3f['me']['steadying'] && _0x1e6a3f['me']['reloadTime'] <= 0x0 && _0xf5fb22['rightClicking'] && !_0x1e6a3f['spectating']) {
                    var _0x5f35ca = _0x5029f8[_0x1e6a3f['me']['weaponSlots'][_0x1e6a3f['me']['selectedWeapon']]['type']];
                    if (_0xf5fb22['emulatedFromTouch']) {
                        _0x5f35ca = _0x380a5a[_0x1e6a3f['me']['weaponSlots'][_0x1e6a3f['me']['selectedWeapon']]['type']];
                    }
                    var _0x1630b3 = _0x5f35ca;
                    var _0x539bc2 = _0x3b5f00(_0xf5fb22, new _0x1e6a3f['Vector2'](0x0, 0x0));
                    if (isNaN(_0x539bc2)) {
                        console['log']('Mouse Distance is NaN');
                        _0x539bc2 = 0x0;
                    }
                    if (_0x539bc2 < _0x5f35ca) {
                        _0x1630b3 = _0x539bc2;
                    }
                    if (_0x1e6a3f['me']['currentJump'] != 0x0) {
                        _0x1630b3 = 0x0;
                    }
                    _0x2a7b9c += (_0x1630b3 - _0x2a7b9c) * 0.1;
                } else {
                    _0x2a7b9c += -_0x2a7b9c * 0.1;
                }
                if (isNaN(_0x2a7b9c)) {
                    console['log']('Camera Distance is NaN');
                    _0x2a7b9c = 0x0;
                }
                if (_0x1e6a3f['me']['steadying'] !== undefined && _0x1e6a3f['me']['steadying'] && _0x1e6a3f['me']['reloadTime'] <= 0x0 && !_0x1e6a3f['spectating']) {
                    _0x32c920 -= _0x1e6a3f['clientDetails']['dt'] / 0x23;
                    _0x32c920 = Math['max'](_0x32c920, 0.25);
                } else {
                    _0x32c920 += _0x1e6a3f['clientDetails']['dt'] / 0x1e;
                    _0x32c920 = Math['min'](_0x32c920, 0x1);
                }
                if (_0x1e6a3f['me']['sprite'] !== undefined) {
                    if (Math['abs'](_0x85bcff - _0x1e6a3f['me']['actualRotation']) > Math['PI']) {
                        if (_0x85bcff > _0x1e6a3f['me']['actualRotation'])
                            _0x85bcff -= Math['PI'] * 0x2;
                        else
                            _0x85bcff += Math['PI'] * 0x2;
                    }
                    if (!isNaN(_0x1e6a3f['me']['actualRotation'])) {
                        _0x85bcff += (_0x1e6a3f['me']['actualRotation'] - _0x85bcff) * 0.1;
                        _0x85bcff = _0x1e6a3f['me']['actualRotation'];
                    } else {
                        _0x85bcff = 0x0;
                    }
                    if (!isNaN(_0x85bcff)) {
                        _0x561d93['camera']['position']['x'] += Math['cos'](_0x85bcff) * _0x2a7b9c;
                        _0x561d93['camera']['position']['y'] += Math['sin'](_0x85bcff) * _0x2a7b9c;
                    } else {
                        console['log']('Issue with rotation: ' + _0x85bcff);
                    }
                }
                _0xf5fb22['x'] = Math['max'](Math['min'](_0xf5fb22['x'], 0x780 / 0x2), -0x780 / 0x2);
                _0xf5fb22['y'] = Math['max'](Math['min'](_0xf5fb22['y'], 0x438 / 0x2), -0x438 / 0x2);
                for (var _0x592903 = 0x0; _0x592903 < _0x39c64c['length']; _0x592903++) {
                    if (_0x39c64c[_0x592903]['hasRoof']) {
                        _0x39c64c[_0x592903]['roof']['opacity'] = Math['min'](_0x39c64c[_0x592903]['roof']['opacity'], 0.999);
                        if (_0x39c64c[_0x592903]['under']) {
                            _0x39c64c[_0x592903]['roof']['opacity'] -= _0x1e6a3f['clientDetails']['dt'] / 0xf;
                            _0x39c64c[_0x592903]['roof']['opacity'] = Math['max'](_0x39c64c[_0x592903]['roof']['opacity'], _0x39c64c[_0x592903]['roofOpacity']);
                        } else {
                            _0x39c64c[_0x592903]['roof']['opacity'] += _0x1e6a3f['clientDetails']['dt'] / 0xf;
                            _0x39c64c[_0x592903]['roof']['opacity'] = Math['min'](_0x39c64c[_0x592903]['roof']['opacity'], 0.999);
                        }
                    }
                }
                if (_0xf5fb22['x'] !== undefined && _0xf5fb22['y'] !== undefined) {
                    _0x112d73['position']['x'] = _0xf5fb22['x'];
                    _0x112d73['position']['y'] = _0xf5fb22['y'];
                }
                if (_0x33812f != _0x1e6a3f['me']['id']) {
                    _0x5d8502 = 0x32;
                    _0x5e2a9e = 0x2;
                    _0x33812f = _0x1e6a3f['me']['id'];
                }
                if (_0x1e6a3f['spectating'])
                    _0x1e6a3f['me']['wallTime'] = 0x0;
                if (!_0x1e6a3f['spectating'] && !document['hidden']) {
                    if (_0x1e6a3f['me']['inCar']) {
                        _0x561d93['mouseCamera']['x'] += (Math['cos'](_0x1e6a3f['me']['visual']['rotation']) * 0x1f4 / 0x7 - _0x561d93['mouseCamera']['x']) * 0.1 * Math['min'](_0x1e6a3f['clientDetails']['dt'], 0x2);
                        _0x561d93['mouseCamera']['y'] += (Math['sin'](_0x1e6a3f['me']['visual']['rotation']) * 0x1f4 / 0x7 - _0x561d93['mouseCamera']['y']) * 0.1 * Math['min'](_0x1e6a3f['clientDetails']['dt'], 0x2);
                    } else {
                        _0x561d93['mouseCamera']['x'] += (_0xf5fb22['x'] / 0x7 - _0x561d93['mouseCamera']['x']) * 0.1 * Math['min'](_0x1e6a3f['clientDetails']['dt'], 0x2);
                        _0x561d93['mouseCamera']['y'] += (_0xf5fb22['y'] / 0x7 - _0x561d93['mouseCamera']['y']) * 0.1 * Math['min'](_0x1e6a3f['clientDetails']['dt'], 0x2);
                    }
                    if (_0x1e6a3f['me']['reloadTime'] !== undefined && _0x1e6a3f['me']['reloadTime'] > 0x0) {
                        _0x2d6df6['angle'] = Math['PI'] * 0x2 * _0x1e6a3f['me']['reloadTime'] / 0xa / _0x1e6a3f['me']['fullReload'];
                        _0x2d6df6['rotation'] = -_0x2d6df6['angle'] - Math['PI'] / 0x2;
                        _0x147750['text'] = _0x1e6a3f['me']['newReloadTime'] / 0xa;
                        if (_0x1e6a3f['me']['newReloadTime'] % 0xa == 0x0) {
                            _0x147750['text'] += '.0';
                        }
                        _0x191016['opacity'] = 0x1;
                        _0x191016['position']['y'] = _0x23f908['bottomOfScreen'] - 0x96;
                    } else {
                        _0x191016['opacity'] = Math['max'](_0x191016['opacity'] - _0x1e6a3f['clientDetails']['dt'] / 0x14, 0x0);
                        _0x147750['text'] = '0.0';
                    }
                } else {
                    _0x561d93['mouseCamera']['x'] *= 0.1 / Math['min'](_0x1e6a3f['clientDetails']['dt'], 0x2);
                    _0x561d93['mouseCamera']['y'] *= 0.1 / Math['min'](_0x1e6a3f['clientDetails']['dt'], 0x2);
                }
                if (_0x561d93['camera']['borderRatio'] > _0x561d93['camera']['newRatio']) {
                    _0x561d93['camera']['ratio'] += (_0x561d93['camera']['newRatio'] - _0x561d93['camera']['ratio']) * 0.05;
                } else {
                    _0x561d93['camera']['ratio'] += (_0x561d93['camera']['borderRatio'] - _0x561d93['camera']['ratio']) * 0.05;
                }
                if (_0x1e6a3f['me']['ui'] !== undefined) {
                    if (!_0x1e6a3f['spectating'] && !_0x1e6a3f['me']['inCar']) {
                        if (_0xf5fb22['emulatedFromTouch']) {
                            if (_0x2e06e5['isActive'] && !_0x2b4ce5['isActive']) {
                                _0x1e6a3f['me']['actualRotation'] = _0x1e6a3f['me']['visual']['rotation'] = _0x2b4ce5['angle'];
                            } else if (_0x2b4ce5['isActive']) {
                                _0x1e6a3f['me']['actualRotation'] = _0x1e6a3f['me']['visual']['rotation'] = _0x2b4ce5['angle'];
                            }
                            _0x1e6a3f['me']['actualRotation'] = _0x1e6a3f['me']['visual']['rotation'] = _0x2b4ce5['angle'];
                        } else {
                            _0x1e6a3f['me']['actualRotation'] = _0x1e6a3f['me']['visual']['rotation'] = -Math['atan2'](_0xf5fb22['x'] + (_0x561d93['camera']['position']['x'] - _0x1e6a3f['me']['visual']['position']['x']) / _0x561d93['camera']['ratio'], _0xf5fb22['y'] + (_0x561d93['camera']['position']['y'] - _0x1e6a3f['me']['visual']['position']['y']) / _0x561d93['camera']['ratio']) + Math['PI'] / 0x2;
                        }
                    }
                    _0x1e6a3f['me']['ui']['rotation'] = -_0x1e6a3f['me']['visual']['rotation'];
                }
                _0x376c18();
                _0x1ec0f5['position']['x'] = _0x23f908['rightOfScreen'] - _0x23f908['inset']['right'] * _0x23f908['scaleFactor'];
                _0x1ec0f5['position']['y'] = 0x0;
                _0x174e9d['position']['x'] = _0x23f908['rightOfScreen'] - _0x23f908['inset']['right'] * _0x23f908['scaleFactor'];
                _0x174e9d['position']['y'] = _0x23f908['bottomOfScreen'] - _0x23f908['inset']['bottom'] * _0x23f908['scaleFactor'];
                _0x559865['position']['x'] = _0x23f908['leftOfScreen'] + _0x23f908['inset']['left'] * _0x23f908['scaleFactor'];
                _0x559865['position']['y'] = _0x23f908['bottomOfScreen'] - _0x23f908['inset']['bottom'] * _0x23f908['scaleFactor'];
                if (_0xf5fb22['emulatedFromTouch']) {
                    _0xda8531['position']['x'] = _0x23f908['leftOfScreen'] + 0x12c + _0x23f908['inset']['left'] * _0x23f908['scaleFactor'];
                    _0xda8531['position']['y'] = _0x23f908['topOfScreen'] + _0x23f908['inset']['top'] * _0x23f908['scaleFactor'];
                } else {
                    _0xda8531['position']['x'] = _0x23f908['rightOfScreen'] - _0x23f908['inset']['right'] * _0x23f908['scaleFactor'];
                    _0xda8531['position']['y'] = _0x23f908['topOfScreen'] + _0x23f908['inset']['top'] * _0x23f908['scaleFactor'];
                }
                if (_0xf5fb22['emulatedFromTouch']) {
                    if (_0x1e6a3f['me']['building'] || _0x5ea1e7) {
                        for (var _0x592903 = 0x0; _0x592903 < _0x560d8b['length']; _0x592903++) {
                            _0x560d8b[_0x592903]['opacity'] = 0x1;
                        }
                    } else {
                        for (var _0x592903 = 0x0; _0x592903 < _0x560d8b['length']; _0x592903++) {
                            _0x560d8b[_0x592903]['opacity'] = 0x0;
                        }
                    }
                } else {
                    for (var _0x592903 = 0x0; _0x592903 < _0x560d8b['length']; _0x592903++) {
                        _0x560d8b[_0x592903]['opacity'] = 0x1;
                    }
                }
                _0xf5f4ae['position']['x'] = _0x23f908['leftOfScreen'] + _0x23f908['inset']['left'] * _0x23f908['scaleFactor'];
                _0xf5f4ae['position']['y'] = _0x23f908['topOfScreen'] - _0x23f908['inset']['top'] * _0x23f908['scaleFactor'];
                _0x526572();
                _0x30891d['text'] = _0x1b0692['text'];
                _0x407a6b['text'] = _0x12b020['text'];
                _0x2dc41a['position']['x'] = 0x7d + _0x2dc41a['width'] / 0x2;
                _0x3e2b48['position']['x'] = 0x7d + _0x3e2b48['width'] / 0x2;
                if (_0x158c1e) {
                    _0x141031['opacity'] = 0x5;
                    _0x52b9d4['opacity'] = 0x1;
                    _0xa4e22e['opacity'] = 0x1;
                } else {
                    _0x141031['opacity'] = 0x0;
                    _0x52b9d4['opacity'] = 0x0;
                    _0xa4e22e['opacity'] = 0x0;
                }
                _0x1784c8['text'] = _0x141031['text'];
                _0xd9a71c['text'] = _0x52b9d4['text'];
                _0x38fd45();
                _0xba7524();
                if (_0x1a48d2 != null || _0x52c382 || _0x1e6a3f['spectating'] && _0x32cd8d['opacity'] != 0x0) {
                    _0x32cd8d['opacity'] += _0x1e6a3f['clientDetails']['dt'] / 0x1e;
                    _0x52c382 = ![];
                } else {
                    _0x32cd8d['opacity'] = 0x0;
                    if (!_0x1e6a3f['spectating']) {
                        if (window['spawnText']['text'] != 'Ready') {
                            window['spawnButton']['color'] = '#0D0';
                            window['spawnButton']['strokeStyle'] = '#0B0';
                            window['spawnText']['belowObjects'][0x0]['strokeStyle'] = '#0B0';
                            window['spawnText']['belowObjects'][0x0]['text'] = 'Ready';
                            window['spawnText']['text'] = 'Ready';
                        }
                    }
                }
                _0x32cd8d['opacity'] = Math['min'](_0x32cd8d['opacity'], 0x1);
                if (_0x4cd821 < 0xa) {
                    _0x4cd821++;
                }
                if (_0x5f61ac < 0xa) {
                    _0x5f61ac++;
                }
                if (_0x1e6a3f['spectating']) {
                    _0x28c545 = 0x0;
                }
                if (_0x28c545 > 0x0 && _0x47279c['opacity'] < 0x1) {
                    _0x47279c['opacity'] += _0x1e6a3f['clientDetails']['dt'] / 0x1e;
                    _0x47279c['opacity'] = Math['min'](_0x47279c['opacity'], 0x1);
                } else if (_0x28c545 <= 0x0 && _0x47279c['opacity'] > 0x0) {
                    _0x47279c['opacity'] -= _0x1e6a3f['clientDetails']['dt'] / 0x1e;
                    _0x47279c['opacity'] = Math['max'](_0x47279c['opacity'], 0x0);
                }
                if (_0x28c545 > 0x0) {
                    _0x28c545 -= _0x1e6a3f['clientDetails']['dt'] / 0x28;
                    _0x1ccdc6();
                }
                var _0x177752 = ![];
                if (_0x38b533 == 'waiting') {
                    //! CHANGES
                    if ((localStorage.deltaGameState !== 'menu') && (localStorage.deltaGameState !== 'game') && (typeof (socket) !== "undefined")) {
                        socket.emit("gameState", "game");
                        localStorage.deltaGameState = 'game';
                    }
                    _0x1b750b['text'] = 'Storm is closing in ' + _0x20bc3e + ' seconds!';
                    if (_0x20bc3e <= 0xa && _0x20bc3e > 0x5) {
                        _0x177752 = !![];
                    }
                    if (_0x28c545 > 0x0 || _0x1e6a3f['spectating']) {
                        _0x177752 = ![];
                    }
                }
                if (_0x38b533 == 'lobby') {
                    _0x177752 = !![];
                    if (_0x20bc3e < 0x0) {
                        _0x1b750b['text'] = 'Waiting for players...';
                        _0x1b750b['opacity'] = 0x1;
                    } else {
                        _0x1b750b['text'] = 'Match starting in ' + _0x20bc3e + ' seconds';
                        //! CHANGES
                        if (localStorage.deltaGameState !== 'lobby' && (typeof (socket) !== "undefined")) socket.emit("gameState", "lobby");
                        localStorage.deltaGameState = 'lobby';
                    }
                }
                _0x42646b();
                if (_0x177752) {
                    _0x1b750b['opacity'] += _0x1e6a3f['clientDetails']['dt'] / 0x1e;
                    _0x1b750b['opacity'] = Math['min'](_0x1b750b['opacity'], 0x1);
                } else {
                    _0x1b750b['opacity'] -= _0x1e6a3f['clientDetails']['dt'] / 0x1e;
                    _0x1b750b['opacity'] = Math['max'](_0x1b750b['opacity'], 0x0);
                }
                _0xe628c7['opacity'] = _0x1b750b['opacity'] * 0.3;
                _0xe628c7['height'] = _0x1b750b['fontSize'] + 0x28;
                _0xe628c7['width'] = _0x1b750b['width'] + 0x28;
                _0xe628c7['position']['y'] = _0x1b750b['position']['y'];
                _0xf99bd--;
                if (_0xf99bd <= 0x0) {
                    _0x50246d();
                    _0xf99bd = _0x2c3ca7;
                }
                _0xccfbc0 += _0x1e6a3f['clientDetails']['dt'] / 0xf;
                if (_0xccfbc0 > Math['PI'] * 0x2) {
                    _0xccfbc0 -= Math['PI'] * 0x2;
                }
                _0x59e289 = Math['sin'](_0xccfbc0);
                _0x174e9d['opacity'] = _0x32c920;
                _0x559865['opacity'] = _0x32c920;
                _0xda8531['opacity'] = _0x32c920 * 0.8;
                _0x2c2a68['opacity'] = _0x32c920;
                _0xf5f4ae['opacity'] = _0x32c920;
            }
            var _0x23953c = [];
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x696c2e['belowObjects']['length']; _0x4cd046++) { }
            var _0x795c51 = document['createElement']('canvas');
            var _0x88cd83 = _0x795c51['getContext']('2d');
            var _0x10049c = 0x780 + 0x64;
            var _0x3a2786 = 0x438 + 0x64;
            _0x795c51['width'] = _0x10049c;
            _0x795c51['height'] = _0x3a2786;
            _0x88cd83['globalAlpha'] = 0x1;
            _0x88cd83['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
            _0x88cd83['translate'](_0x10049c / 0x2, _0x3a2786 / 0x2);
            var _0x2ca806 = new _0x1e6a3f['object']();
            _0x2ca806['objects'] = _0x696c2e['belowObjects'];
            _0x2ca806['render'](_0x88cd83, 0x1, 0x1);
            var _0x54899e = new _0x1e6a3f['image'](_0x795c51, 0x0, 0x0, _0x10049c, _0x3a2786);
            _0x696c2e['belowObjects'] = [_0x54899e];
            function _0x166d21() {
                var _0x21e203 = -0x1;
                for (var _0x465c5 = 0x0; _0x465c5 < _0x23953c['length']; _0x465c5 += 0x5) {
                    if (_0x31446b(_0x23953c[_0x465c5])) {
                        _0x21e203 = _0x465c5;
                        break;
                    }
                }
                if (_0x21e203 == -0x1) {
                    return;
                }
                var _0x609b1d = new Array(0x50);
                var _0x94f1e = 0x0;
                for (var _0x465c5 = _0x21e203; _0x465c5 > 0x0 && Math['abs'](_0x561d93['camera']['position']['y'] - _0x23953c[_0x465c5]['position']['y']) < 0x3ac; _0x465c5--) {
                    if (_0x31446b(_0x23953c[_0x465c5])) {
                        _0x609b1d[_0x94f1e] = _0x23953c[_0x465c5];
                        _0x94f1e++;
                    }
                }
                for (var _0x465c5 = _0x21e203; _0x465c5 < _0x23953c['length'] && Math['abs'](_0x561d93['camera']['position']['x'] - _0x23953c[_0x465c5]['position']['x']) < 0x550; _0x465c5++) {
                    if (_0x31446b(_0x23953c[_0x465c5])) {
                        _0x609b1d[_0x94f1e] = _0x23953c[_0x465c5];
                        _0x94f1e++;
                    }
                }
                _0x696c2e['belowObjects'] = _0x609b1d;
            }
            function _0x31446b(_0x1cb448) {
                if (Math['abs'](_0x561d93['camera']['position']['x'] - _0x1cb448['position']['x']) > 0x488)
                    return ![];
                if (Math['abs'](_0x561d93['camera']['position']['y'] - _0x1cb448['position']['y']) > 0x2e4)
                    return ![];
                return !![];
            }
            _0x1695fb();
            var _0x3c110b = ![];
            _0x1e6a3f['onGetEnvs'] = function (_0x43656c) {
                var _0xd5a7a3 = _0x43656c['riverWidth'] - 0x2;
                var _0x46be04 = 0x1f4;
                var _0xb6f7e = 0x4b;
                var _0x322ce0 = _0x43656c['river'];
                var _0x571856 = new _0x1e6a3f['scene']();
                _0x571856['addBelow'](new _0x1e6a3f['rectangle'](0x0, 0x0, _0x1820e3, _0x1820e3, window['groundColor']));
                var _0x5b6e06 = 0x1f4;
                var _0x166f66 = 0x32;
                var _0x28334e = _0x282ecd('grid');
                for (var _0x39e394 = -_0x166f66; _0x39e394 <= _0x166f66; _0x39e394++) {
                    for (var _0x3ca818 = -_0x166f66; _0x3ca818 <= _0x166f66; _0x3ca818++) {
                        var _0x40b946 = new _0x1e6a3f['image'](_0x28334e, _0x39e394 * _0x5b6e06, _0x3ca818 * _0x5b6e06, _0x5b6e06, _0x5b6e06, 0.14);
                        _0x571856['add'](_0x40b946);
                    }
                }
                var _0x2370b9 = _0x282ecd('wave');
                for (var _0x138066 = -0x13; _0x138066 <= 0x13; _0x138066++) {
                    var _0x3ca818 = _0x138066 * _0x46be04;
                    var _0x4d4145 = new _0x1e6a3f['rectangle'](_0x322ce0 + _0xd5a7a3 / 0x2 + _0xb6f7e / 0x2, _0x3ca818, _0xb6f7e, _0x46be04, '#d2c290', 0.3);
                    _0x4d4145['background'] = !![];
                    _0x571856['add'](_0x4d4145);
                    _0x4d4145['parent'] = null;
                    _0x586b15['add'](_0x4d4145);
                    var _0x6aa668 = new _0x1e6a3f['rectangle'](_0x322ce0 - _0xd5a7a3 / 0x2 - _0xb6f7e / 0x2, _0x3ca818, _0xb6f7e, _0x46be04, '#d2c290', 0.3);
                    _0x6aa668['background'] = !![];
                    _0x571856['add'](_0x6aa668);
                    _0x6aa668['parent'] = null;
                    _0x586b15['add'](_0x6aa668);
                    var _0x1923ec = new _0x1e6a3f['rectangle'](_0x322ce0, _0x3ca818, _0xd5a7a3, _0x46be04, 'blue', 0.4);
                    _0x1923ec['background'] = !![];
                    _0x571856['add'](_0x1923ec);
                    _0x1923ec['parent'] = null;
                    _0x586b15['add'](_0x1923ec);
                    for (var _0x3990b5 = 0x0; _0x3990b5 < 0x3; _0x3990b5++) {
                        var _0x2978a7 = new _0x1e6a3f['image'](_0x2370b9, _0x322ce0, _0x3ca818 - _0x46be04 / 0x2 + _0x3990b5 * 0x1f4 / 0x3, 0x64, 0x15e);
                        _0x2978a7['rotation'] = -Math['PI'] / 0x2;
                        _0x2978a7['size'] = 1.4;
                        _0x2978a7['background'] = !![];
                        _0x2978a7['opacity'] = 0.35;
                        if (_0x3990b5 == 0x2) {
                            _0x571856['add'](_0x2978a7);
                            _0x2978a7['parent'] = null;
                        }
                        _0x44b24c['addBelow'](_0x2978a7);
                        _0x1dfc77['push'](_0x2978a7);
                    }
                }
                var _0x4e6f0e = ['rock', 'tree0', 'tree1', 'jungletree'];
                var _0x48cacd = _0x1e6a3f['envs']['resourceNames'];
                for (var _0xc52cce = 0x0; _0xc52cce < _0x4e6f0e['length']; _0xc52cce++) {
                    var _0x193111 = _0x4e6f0e[_0xc52cce];
                    for (var _0x138066 = 0x0; _0x138066 < _0x1e6a3f['envs']['resources']['length']; _0x138066++) {
                        if (_0x48cacd[_0x1e6a3f['envs']['resources'][_0x138066][0x0]] != _0x193111) {
                            continue;
                        }
                        var _0x1fd3a2 = _0x1e6a3f['envs']['resources'][_0x138066];
                        var _0x3db28a = {};
                        _0x3db28a['type'] = _0x48cacd[_0x1fd3a2[0x0]];
                        _0x3db28a['x'] = _0x1fd3a2[0x1];
                        _0x3db28a['y'] = _0x1fd3a2[0x2];
                        _0x3db28a['angle'] = _0x1fd3a2[0x3];
                        _0x3db28a['radius'] = _0x1fd3a2[0x4];
                        if (_0x3db28a['type'] != _0x193111) {
                            continue;
                        }
                        var _0x18de7d = _0x3db28a['radius'] * 0x4;
                        var _0x1898df = 0x1;
                        if (_0x2f153f) {
                            if (_0x3db28a['type']['substring'](0x0, 0x4) == 'tree') {
                                _0x3db28a['type'] = 'christmastree' + _0x3db28a['type']['substring'](0x4, 0x5) * 0x2;
                            }
                            _0x1898df = 0.8;
                        }
                        var _0x4f399b = new _0x1e6a3f['image'](_0x282ecd(_0x3db28a['type']), _0x3db28a['x'], _0x3db28a['y'], _0x18de7d, _0x18de7d, _0x1898df);
                        _0x4f399b['rotation'] = _0x3db28a['angle'];
                        _0x571856['add'](_0x4f399b);
                    }
                }
                var _0x50f27b = ['dirt', 'dirtcurve', 'road', 'roadcurve'];
                var _0x251c3e = ['dirtbridge', 'roadbridge', 'stonebridge'];
                for (var _0x138066 = 0x0; _0x138066 < _0x43656c['houses']['length']; _0x138066++) {
                    if (_0x43656c['houses'][_0x138066]['image'] !== undefined) {
                        _0x43656c['houses'][_0x138066]['type'] = _0x43656c['houses'][_0x138066]['image'];
                    }
                    var _0x132d62 = new _0x1e6a3f['image'](_0x282ecd(_0x43656c['houses'][_0x138066]['type']), _0x43656c['houses'][_0x138066]['position'][0x0], _0x43656c['houses'][_0x138066]['position'][0x1], _0x43656c['houses'][_0x138066]['width'], _0x43656c['houses'][_0x138066]['height']);
                    _0x132d62['house'] = !![];
                    if (_0x43656c['houses'][_0x138066]['width'] == 0x0) {
                        _0x132d62['size'] = 0x0;
                    }
                    _0x132d62['rotation'] = _0x43656c['houses'][_0x138066]['rotation'] * Math['PI'] / 0x2;
                    if (_0x43656c['houses'][_0x138066]['type'] == 'pool') {
                        _0x132d62['opacity'] = 0.75;
                    }
                    if (_0x43656c['houses'][_0x138066]['type'] == 'soccerfield') {
                        _0x132d62['opacity'] = 0.65;
                    }
                    if (_0x2f153f) {
                        if (_0x43656c['houses'][_0x138066]['type'] == 'field' || _0x43656c['houses'][_0x138066]['type'] == 'lot') {
                            _0x132d62['opacity'] = 0.65;
                        }
                    }
                    var _0x8fe810 = _0x132d62;
                    if (document['getElementById']('small' + _0x43656c['houses'][_0x138066]['type']) != null) {
                        _0x8fe810 = new _0x1e6a3f['image'](_0x282ecd('small' + _0x43656c['houses'][_0x138066]['type']), _0x43656c['houses'][_0x138066]['position'][0x0], _0x43656c['houses'][_0x138066]['position'][0x1], _0x43656c['houses'][_0x138066]['width'], _0x43656c['houses'][_0x138066]['height']);
                        _0x8fe810['rotation'] = _0x132d62['rotation'];
                        _0x8fe810['opacity'] = _0x132d62['opacity'];
                        if (_0x2f153f) {
                            if (_0x50f27b['indexOf'](_0x43656c['houses'][_0x138066]['type']) != -0x1) {
                                _0x8fe810['opacity'] = 0.65;
                            }
                        }
                    }
                    if (_0x43656c['houses'][_0x138066]['type'] == 'cherryblossoms') {
                        _0x8fe810 = new _0x1e6a3f['object']();
                        _0x8fe810['position'] = _0x132d62['position'];
                        var _0x42b9ff = 0x12c;
                        _0x8fe810['add'](new _0x1e6a3f['image'](_0x282ecd('cherryblossom'), 0x0, -0x2 * 0x32, _0x42b9ff, _0x42b9ff));
                        _0x8fe810['add'](new _0x1e6a3f['image'](_0x282ecd('cherryblossom'), 0x4 * 0x32, 0x2 * 0x32, _0x42b9ff, _0x42b9ff));
                        _0x8fe810['add'](new _0x1e6a3f['image'](_0x282ecd('cherryblossom'), -0x4 * 0x32, 0x2 * 0x32, _0x42b9ff, _0x42b9ff));
                        _0x8fe810['rotation'] = _0x132d62['rotation'];
                    }
                    _0x571856['add'](_0x8fe810);
                    _0x132d62['parent'] = null;
                    if (_0x43656c['houses'][_0x138066]['hasRoof']) {
                        _0x132d62['under'] = ![];
                        _0x132d62['roofOpacity'] = 0.075;
                        if (_0x43656c['houses'][_0x138066]['type'] == 'pavilion') {
                            _0x132d62['roofOpacity'] = 0.4;
                        }
                        _0x132d62['roof'] = new _0x1e6a3f['image'](_0x282ecd(_0x43656c['houses'][_0x138066]['type'] + 'roof'), _0x43656c['houses'][_0x138066]['position'][0x0], _0x43656c['houses'][_0x138066]['position'][0x1], _0x43656c['houses'][_0x138066]['width'], _0x43656c['houses'][_0x138066]['height']);
                        if (_0x282ecd(_0x43656c['houses'][_0x138066]['type'])['width'] != _0x282ecd(_0x43656c['houses'][_0x138066]['type'] + 'roof')['width'] || _0x282ecd(_0x43656c['houses'][_0x138066]['type'])['height'] != _0x282ecd(_0x43656c['houses'][_0x138066]['type'] + 'roof')['height']) {
                            if (_0x43656c['houses'][_0x138066]['type'] != 'soccergoal') {
                                _0x132d62['roof']['image'] = null;
                            }
                        }
                        _0x132d62['roof']['rotation'] = _0x43656c['houses'][_0x138066]['rotation'] * Math['PI'] / 0x2;
                        _0x132d62['roof']['house'] = !![];
                        _0x571856['add'](_0x132d62['roof']);
                        _0x132d62['roof']['parent'] = null;
                        _0x27aecb['add'](_0x132d62['roof']);
                    }
                    _0x132d62['hasRoof'] = _0x43656c['houses'][_0x138066]['hasRoof'];
                    _0x39c64c['push'](_0x132d62);
                    if (_0x251c3e['indexOf'](_0x43656c['houses'][_0x138066]['type']) >= 0x0) {
                        _0x44b24c['add'](_0x132d62);
                        if (_0x2f153f) {
                            _0x132d62['opacity'] = 0.65;
                        }
                    } else if (_0x50f27b['indexOf'](_0x43656c['houses'][_0x138066]['type']) == -0x1) {
                        _0x586b15['add'](_0x132d62);
                    } else {
                        _0x132d62['opacity'] = 0x1;
                        if (_0x2f153f) {
                            _0x132d62['opacity'] = 0.65;
                        }
                        _0x586b15['addBelow'](_0x132d62);
                    }
                }
                if (!_0x2f153f) {
                    _0x4e6f0e = ['corn', 'pumpkin'];
                    for (var _0xc52cce = 0x0; _0xc52cce < _0x4e6f0e['length']; _0xc52cce++) {
                        var _0x193111 = _0x4e6f0e[_0xc52cce];
                        for (var _0x138066 = 0x0; _0x138066 < _0x1e6a3f['envs']['resources']['length']; _0x138066++) {
                            var _0x1fd3a2 = _0x1e6a3f['envs']['resources'][_0x138066];
                            var _0x3db28a = {};
                            _0x3db28a['type'] = _0x48cacd[_0x1fd3a2[0x0]];
                            _0x3db28a['x'] = _0x1fd3a2[0x1];
                            _0x3db28a['y'] = _0x1fd3a2[0x2];
                            _0x3db28a['angle'] = _0x1fd3a2[0x3];
                            _0x3db28a['radius'] = _0x1fd3a2[0x4];
                            if (_0x3db28a['type'] != _0x193111) {
                                continue;
                            }
                            var _0x18de7d = _0x3db28a['radius'] * 0x4;
                            var _0x1898df = 0x1;
                            if (_0x2f153f) {
                                if (_0x3db28a['type']['substring'](0x0, 0x4) == 'tree') {
                                    console['log'](_0x3db28a['type']['substring'](0x4, 0x1));
                                    _0x3db28a['type'] = 'christmastree' + _0x3db28a['type']['substring'](0x4, 0x1) * 0x2;
                                }
                                _0x1898df = 0.8;
                            }
                            var _0x4f399b = new _0x1e6a3f['image'](_0x282ecd(_0x3db28a['type']), _0x3db28a['x'], _0x3db28a['y'], _0x18de7d, _0x18de7d, _0x1898df);
                            _0x4f399b['rotation'] = _0x3db28a['angle'];
                            _0x571856['add'](_0x4f399b);
                        }
                    }
                }
                var _0x373898 = 0xfa;
                var _0x214037 = _0x43656c['locations'];
                for (var _0x138066 = 0x0; _0x138066 < _0x214037['length']; _0x138066++) {
                    var _0x3bb1b5 = new _0x1e6a3f['text'](_0x214037[_0x138066]['name'], _0x214037[_0x138066]['x'] * 0x32, _0x214037[_0x138066]['y'] * 0x32, '#FFF', 'Arial Black', _0x373898, '', 0x1, 'center');
                    var _0x1e26ee = new _0x1e6a3f['strokeText'](_0x214037[_0x138066]['name'], 0x0, 0x0, '#000', 'Arial Black', _0x373898, '', 0x1, 'center');
                    _0x1e26ee['lineWidth'] = 0x46;
                    _0x3bb1b5['addBelow'](_0x1e26ee);
                    _0x571856['add'](_0x3bb1b5);
                }
                _0x210dca['translate'](_0x1cdc93['width'] / 0x2, _0x1cdc93['height'] / 0x2);
                _0x571856['render'](_0x210dca, _0x1820e3 / 0x708, 0x1);
                _0x1e6a3f['envs'] = {};
            };
            _0x1e6a3f['normalLerp'] = function (_0x1e8ff7, _0x234987, _0x14ae52) {
                return (_0x234987 - _0x1e8ff7) * _0x14ae52 + _0x1e8ff7;
            };
            var _0x18f2d0 = new _0x1e6a3f['scene']();
            var _0x4cd541;
            var _0x3a74d0 = [];
            var _0x5a43ce = [{
                'opacity': 0.8,
                'x': -0x23,
                'y': -0x6,
                'width': 0x3c
            }, {
                'opacity': 0.6,
                'x': -0x41,
                'y': 0xf,
                'width': 0x2d
            }, {
                'opacity': 0.35,
                'x': -0x57,
                'y': -0x5,
                'width': 0x23
            }, {
                'opacity': 0.15,
                'x': -0x73,
                'y': 0xa,
                'width': 0x1c
            }];
            var _0xabf2de = [{
                'hair': 0x0,
                'weaponSlots': [{
                    'type': 'famas',
                    'rarity': 0x0,
                    'ammo': 0x0
                }],
                'flare': !![],
                'steadying': !![],
                'rotation': Math['PI'] / 0x2 + 0.2,
                'start': new _0x1e6a3f['Vector2'](-0x18b, -0x156),
                'end': new _0x1e6a3f['Vector2'](-0x181, -0x152),
                'startRotation': Math['PI'] / 0x2 + 0.25,
                'endRotation': Math['PI'] / 0x2 + 0.4,
                'smokes': [{
                    'opacity': 0.56,
                    'x': -0x23,
                    'y': -0x6,
                    'width': 0x3c
                }, {
                    'opacity': 0.3,
                    'x': -0x46,
                    'y': 0xf,
                    'width': 0x2d
                }, {
                    'opacity': 0.15,
                    'x': -0x57,
                    'y': -0xf,
                    'width': 0x23
                }]
            }, {
                'hair': 0x1,
                'footSin': 0x1,
                'weaponSlots': [{
                    'type': 'heavy sniper',
                    'rarity': 0x0,
                    'ammo': 0x0
                }],
                'steadying': ![],
                'rotation': Math['PI'] + 0.1,
                'start': new _0x1e6a3f['Vector2'](-0x1fe, 0x104),
                'end': new _0x1e6a3f['Vector2'](-0x21c, 0x104),
                'smokes': _0x5a43ce
            }, {
                'hair': 0x2,
                'footSin': 0x1,
                'weaponSlots': [{
                    'type': 'silencedpistol',
                    'rarity': 0x0,
                    'ammo': 0x0
                }],
                'steadying': ![],
                'rotation': Math['PI'] * 0x5 / 0x4,
                'start': new _0x1e6a3f['Vector2'](0x186, 0xd2),
                'end': new _0x1e6a3f['Vector2'](0x195, 0xe1),
                'smokes': [],
                'baller': ![]
            }, {
                'hair': 0x3,
                'footSin': 0x1,
                'weaponSlots': [{
                    'type': 'picaxe',
                    'rarity': 0x0,
                    'ammo': 0x0
                }],
                'steadying': ![],
                'rotation': Math['PI'] * 0x7 / 0x4,
                'startRotation': Math['PI'] * 0x7 / 0x4 - 0.25,
                'endRotation': Math['PI'] * 0x7 / 0x4 + 0.25,
                'building': !![],
                'start': new _0x1e6a3f['Vector2'](0x154, -0x8c),
                'end': new _0x1e6a3f['Vector2'](0x154, -0x8c),
                'smokes': [{
                    'opacity': 0.56,
                    'x': -0x23,
                    'y': -0x6,
                    'width': 0x3c
                }, {
                    'opacity': 0.3,
                    'x': -0x46,
                    'y': 0xf,
                    'width': 0x2d
                }, {
                    'opacity': 0.15,
                    'x': -0x57,
                    'y': -0xf,
                    'width': 0x23
                }]
            }];
            var _0x3fa21a = [];
            var _0x569328 = [{
                'start': new _0x1e6a3f['Vector2'](-0x19f, -0x122),
                'rotation': Math['PI'] / 0x2 + 0.2,
                'startDistance': 0xe6,
                'endDistance': 0x140
            }, {
                'start': new _0x1e6a3f['Vector2'](-0x19f, -0x122),
                'rotation': Math['PI'] / 0x2 + 0.4,
                'startDistance': 0x12c,
                'endDistance': 0x186
            }, {
                'start': new _0x1e6a3f['Vector2'](-0x19f, -0x122),
                'rotation': Math['PI'] / 0x2 + 0.3,
                'startDistance': 0x172,
                'endDistance': 0x1cc
            }, {
                'start': new _0x1e6a3f['Vector2'](0x316, -0x172),
                'rotation': Math['PI'] * 0x5 / 0x6,
                'startDistance': 0xc8,
                'endDistance': 0xe6,
                'bulletType': 'rpg'
            }, {
                'start': new _0x1e6a3f['Vector2'](0x34d, 0x118),
                'rotation': Math['PI'] + 0.2,
                'startDistance': 0xf0,
                'endDistance': 0x6e
            }];
            var _0x52b3fb = [];
            var _0x4c9ccd = [{
                'rotation': Math['PI'] / 0x2,
                'position': new _0x1e6a3f['Vector2'](0x14a, -0x109),
                'reverse': !![]
            }, {
                'health': 0x5a,
                'rotation': 0x0,
                'position': new _0x1e6a3f['Vector2'](0x154 + 0x7d, -0x109 + 0x87)
            }];
            var _0x400f8b = 0x0;
            var _0x145a43 = 0x0;
            function _0x124e17(_0x30bd51, _0x211612) {
                var _0x2a3e09 = {
                    'new': {
                        'position': new _0x1e6a3f['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'actualNew': {
                        'position': new _0x1e6a3f['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'old': {
                        'position': new _0x1e6a3f['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'actualOld': {
                        'position': new _0x1e6a3f['Vector2'](0x1e, 0x0),
                        'rotation': 0.001
                    },
                    'isPreview': !![],
                    'flare': ![],
                    'ticksAsleep': 0x0,
                    'type': 'player'
                };
                var _0x30dcaa = {
                    'hair': 0x0,
                    'knocked': ![],
                    'health': 0x64,
                    'shield': 0x64,
                    'selectedWeapon': 0x0,
                    'name': document['getElementById']('nameBox')['value'],
                    'wAmmo': [0x0, 0x0, 0x0, 0x0, 0x0],
                    'ammo': [0x0, 0x0, 0x0, 0x0, 0x0],
                    'house': -0x1,
                    'weaponSlots': [{
                        'type': 'picaxe',
                        'rarity': 0x0,
                        'ammo': 0x0
                    }],
                    'steadying': ![],
                    'frt': 0x0,
                    'sprinting': !![],
                    'building': ![],
                    'canBuild': ![],
                    'mat': 0x0,
                    'mats': [0x0, 0x0, 0x0]
                };
                var _0xbb6208 = Object['keys'](_0x30bd51);
                for (var _0x420e0d = 0x0; _0x420e0d < _0xbb6208['length']; _0x420e0d++) {
                    _0x30dcaa[_0xbb6208[_0x420e0d]] = _0x30bd51[_0xbb6208[_0x420e0d]];
                }
                if (_0x30bd51['flare'] !== undefined) {
                    _0x2a3e09['flare'] = _0x30bd51['flare'];
                }
                if (_0x30bd51['baller']) {
                    _0x2a3e09['baller'] = {
                        'new': {
                            'position': new _0x1e6a3f['Vector2'](0xa, 0x0),
                            'rotation': 0.001
                        },
                        'actualNew': {
                            'position': new _0x1e6a3f['Vector2'](0xa, 0x0),
                            'rotation': 0.001
                        },
                        'old': {
                            'position': new _0x1e6a3f['Vector2'](0xa, 0x0),
                            'rotation': 0.001
                        },
                        'actualOld': {
                            'position': new _0x1e6a3f['Vector2'](0x1e, 0x0),
                            'rotation': 0.001
                        },
                        'isPreview': !![],
                        'flare': ![],
                        'ticksAsleep': 0x0,
                        'type': 'baller'
                    };
                    _0x1e6a3f['types']['baller']['create'](_0x2a3e09['baller'], {
                        'isPreview': !![],
                        'h': 0x64,
                        'ch': 0x5a
                    });
                    _0x561d93['remove'](_0x2a3e09['baller']['grapple']);
                    _0x561d93['remove'](_0x2a3e09['baller']['rope']);
                    _0x561d93['remove'](_0x2a3e09['baller']['visual']);
                }
                _0x1e6a3f['types']['player']['create'](_0x2a3e09, _0x30dcaa);
                _0x2a3e09['visual']['size'] = 1.1;
                if (_0x30bd51['rotation'] !== undefined) {
                    _0x2a3e09['visual']['rotation'] = _0x30bd51['rotation'];
                }
                _0x1e6a3f['types']['player']['updatePacket'](_0x2a3e09, {
                    'selectedWeapon': _0x2a3e09['selectedWeapon']
                });
                _0x561d93['remove'](_0x2a3e09['buildingPreview']);
                _0x561d93['remove'](_0x2a3e09['visual']);
                _0x211612['add'](_0x2a3e09['visual']);
                if (_0x30bd51['baller']) {
                    _0x211612['add'](_0x2a3e09['baller']['grapple']);
                    _0x211612['add'](_0x2a3e09['baller']['visual']);
                }
                return _0x2a3e09;
            }
            function _0x41dc6f(_0x35c156, _0x3c1414) {
                var _0x4b629e = {
                    'new': {
                        'position': new _0x1e6a3f['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'old': {
                        'position': new _0x1e6a3f['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'actualOld': {
                        'position': new _0x1e6a3f['Vector2'](0x1e, 0x0),
                        'rotation': 0.001
                    },
                    'isPreview': !![],
                    'ticksAsleep': 0x0,
                    'type': 'bullet'
                };
                var _0x12b782 = {
                    'bulletType': 'scar'
                };
                var _0x135d8e = Object['keys'](_0x35c156);
                for (var _0xff77ba = 0x0; _0xff77ba < _0x135d8e['length']; _0xff77ba++) {
                    _0x12b782[_0x135d8e[_0xff77ba]] = _0x35c156[_0x135d8e[_0xff77ba]];
                }
                _0x1e6a3f['types']['bullet']['create'](_0x4b629e, _0x12b782);
                _0x4b629e['visual']['size'] = 1.1;
                if (_0x35c156['rotation'] !== undefined) {
                    _0x4b629e['visual']['rotation'] = _0x35c156['rotation'];
                }
                if (_0x12b782['bulletType'] != 'rpg') {
                    _0x4b629e['trail']['opacity'] = 0.3;
                    _0x4b629e['trail']['points'][0x1]['x'] = -0x96;
                } else {
                    for (var _0xff77ba = 0x0; _0xff77ba < 0xc; _0xff77ba++) {
                        var _0xe4a097 = new _0x1e6a3f['image'](_0x282ecd('smoke0'));
                        _0xe4a097['position']['x'] = -(_0xff77ba + 0x2) * 0x14 - _0xff77ba * _0xff77ba;
                        _0xe4a097['position']['y'] = Math['cos'](Math['PI'] * _0xff77ba) * (_0xff77ba + 0xa) * 0.2;
                        _0xe4a097['width'] = _0xe4a097['height'] = 0x14 + 0x5 * _0xff77ba;
                        _0xe4a097['rotation'] = Math['random']() * Math['PI'] * 0x2;
                        _0xe4a097['opacity'] = Math['max'](0x1 - _0xff77ba / 0xa, 0.03);
                        if (_0xff77ba == 0xa) {
                            _0xe4a097['opacity'] = 0.04;
                        } else if (_0xff77ba == 0xb) {
                            _0xe4a097['opacity'] = 0.02;
                        }
                        _0x4b629e['visual']['addBelow'](_0xe4a097);
                    }
                }
                _0x561d93['remove'](_0x4b629e['visual']);
                _0x3c1414['add'](_0x4b629e['visual']);
                return _0x4b629e;
            }
            function _0x264748(_0x1c5c36, _0x4317cf) {
                var _0x5ecbb2 = {
                    'new': {
                        'position': new _0x1e6a3f['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'old': {
                        'position': new _0x1e6a3f['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'actualOld': {
                        'position': new _0x1e6a3f['Vector2'](0x1e, 0x0),
                        'rotation': 0.001
                    },
                    'isPreview': !![],
                    'ticksAsleep': 0x0,
                    'reverse': ![],
                    'type': 'object'
                };
                var _0x22fcb2 = {
                    'type': 'wall',
                    'health': 0x32,
                    'fullHealth': 0x64,
                    'width': 0xc8 / 0x4 - 0.6,
                    'height': (0xc8 / 0x4 - 0.6) * 0x5,
                    'mat': 0x1
                };
                var _0xb8a56 = Object['keys'](_0x1c5c36);
                for (var _0x339536 = 0x0; _0x339536 < _0xb8a56['length']; _0x339536++) {
                    _0x22fcb2[_0xb8a56[_0x339536]] = _0x1c5c36[_0xb8a56[_0x339536]];
                }
                _0x1e6a3f['types']['object']['create'](_0x5ecbb2, _0x22fcb2);
                _0x5ecbb2['visual']['size'] = 1.05;
                if (_0x1c5c36['rotation'] !== undefined) {
                    _0x5ecbb2['visual']['rotation'] = _0x1c5c36['rotation'] + Math['PI'];
                }
                if (_0x1c5c36['reverse'] !== undefined) {
                    _0x5ecbb2['reverse'] = _0x1c5c36['reverse'];
                }
                _0x5ecbb2['visual']['position'] = _0x1c5c36['position'];
                for (var _0x339536 = 0x0; _0x339536 < _0x5ecbb2['lowering']['length'] - 0x1; _0x339536++) {
                    _0x5ecbb2['lowering'][_0x339536]['width'] = _0x127702 * _0x12c372 / 0x2;
                    _0x5ecbb2['lowering'][_0x339536]['height'] = _0x127702;
                    _0x5ecbb2['lowering'][_0x339536]['opacity'] = 0x1;
                }
                _0x561d93['remove'](_0x5ecbb2['visual']);
                _0x4317cf['add'](_0x5ecbb2['visual']);
                return _0x5ecbb2;
            }
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0xabf2de['length']; _0x4cd046++) {
                var _0x421d2d = _0x124e17(_0xabf2de[_0x4cd046], _0x7bebb1['animatedLayer']);
                _0x421d2d['start'] = _0xabf2de[_0x4cd046]['start'];
                _0x421d2d['end'] = _0xabf2de[_0x4cd046]['end'];
                _0x421d2d['startRotation'] = _0xabf2de[_0x4cd046]['startRotation'];
                _0x421d2d['endRotation'] = _0xabf2de[_0x4cd046]['endRotation'];
                if (_0xabf2de[_0x4cd046]['smokes'] !== undefined) {
                    for (var _0x2f607b = 0x0; _0x2f607b < _0xabf2de[_0x4cd046]['smokes']['length']; _0x2f607b++) {
                        var _0x416ffa = _0xabf2de[_0x4cd046]['smokes'][_0x2f607b];
                        var _0x3b6f2a = 'smoke' + Math['floor'](Math['random']() * 0x2);
                        _0x3b6f2a = 'smoke0';
                        var _0x9d5157 = new _0x1e6a3f['image'](_0x282ecd(_0x3b6f2a), _0x416ffa['x'], _0x416ffa['y'], _0x416ffa['width'], _0x416ffa['width'], _0x416ffa['opacity']);
                        _0x9d5157['rotation'] = Math['random']() * Math['PI'] * 0x2;
                        _0x421d2d['visual']['addBelow'](_0x9d5157);
                    }
                }
                _0x3a74d0['push'](_0x421d2d);
            }
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x569328['length']; _0x4cd046++) {
                var _0x421d2d = _0x41dc6f(_0x569328[_0x4cd046], _0x7bebb1['animatedLayer']);
                _0x421d2d['start'] = _0x569328[_0x4cd046]['start'];
                _0x421d2d['startDistance'] = _0x569328[_0x4cd046]['startDistance'];
                _0x421d2d['endDistance'] = _0x569328[_0x4cd046]['endDistance'];
                _0x421d2d['rotation'] = _0x569328[_0x4cd046]['rotation'];
                _0x3fa21a['push'](_0x421d2d);
            }
            for (var _0x4cd046 = 0x0; _0x4cd046 < _0x4c9ccd['length']; _0x4cd046++) {
                var _0x421d2d = _0x264748(_0x4c9ccd[_0x4cd046], _0x7bebb1['animatedLayer']);
                _0x421d2d['start'] = _0x569328[_0x4cd046]['start'];
                _0x421d2d['rotation'] = _0x569328[_0x4cd046]['rotation'];
                _0x52b3fb['push'](_0x421d2d);
            }
            function _0x5e21e4() {
                _0x18f2d0['objects'] = [];
                var _0x115c2c = _0x124e17({
                    'weaponSlots': [{
                        'type': 'scar',
                        'rarity': 0x0,
                        'ammo': 0x0
                    }]
                }, _0x18f2d0);
                _0x4cd541 = _0x115c2c;
                _0x115c2c['visual']['position']['x'] = 0x5a;
                _0x115c2c['visual']['position']['y'] = 0x136;
                _0x115c2c['nametag']['opacity'] = 0x1;
                _0x115c2c['nametag']['size'] = 0.85;
            }
            _0x5e21e4();
            _0x7bebb1['add'](_0x18f2d0);
            if (_0x2d15ee() && localStorage['weaponSkin'] !== undefined) {
                _0x5ceb82(localStorage['weaponSkin']);
            }
            var _0x21ebc2 = [];
            var _0x5036fa = 0x780 + 0xc8;
            var _0x319e4a = 0x438 + 0xc8;
            for (var _0x4cd046 = 0x0; _0x4cd046 < 0x14; _0x4cd046++) {
                var _0x3f4fb5 = 0x32;
                _0x3f4fb5 = 0x3c;
                var _0x47fe16 = new _0x1e6a3f['image'](_0x282ecd('leaf0'), Math['random']() * _0x5036fa - _0x5036fa / 0x2, Math['random']() * _0x319e4a - _0x319e4a / 0x2, _0x3f4fb5, _0x3f4fb5);
                _0x47fe16['opacity'] = 0.7;
                _0x47fe16['speed'] = 0.8 + Math['random']() * 1.2;
                _0x47fe16['rotation'] = Math['random']() * Math['PI'] * 0x2;
                _0x9a0c40['add'](_0x47fe16);
                _0x21ebc2['push'](_0x47fe16);
            }
            _0x9a0c40['parent'] = null;
            _0x7bebb1['animatedLayer']['add'](_0x9a0c40);
            _0x9a0c40['parent'] = _0x257b9c;
            function _0x4d5c35() {
                var _0x5ad753 = _0x5036fa / 0x2;
                var _0x5eac56 = _0x319e4a / 0x2;
                var _0x32b93c = -_0x5ad753;
                var _0x342ed9 = -_0x5eac56;
                if (!_0x1e6a3f['spectating']) {
                    _0x5ad753 += _0x257b9c['camera']['position']['x'];
                    _0x32b93c += _0x257b9c['camera']['position']['x'];
                    _0x5eac56 += _0x257b9c['camera']['position']['y'];
                    _0x342ed9 += _0x257b9c['camera']['position']['y'];
                }
                var _0x5e3d7e = Math['min'](_0x1e6a3f['clientDetails']['dt'], 0x2);
                for (var _0x33fe34 = 0x0; _0x33fe34 < _0x21ebc2['length']; _0x33fe34++) {
                    var _0x2312e0 = _0x21ebc2[_0x33fe34];
                    _0x2312e0['rotation'] += _0x5e3d7e / 0x14 * _0x2312e0['speed'] / 0x4;
                    var _0x1f49ff = _0x2312e0['speed'];
                    var _0x59948e = _0x1f49ff * 1.65;
                    _0x2312e0['position']['x'] += _0x5e3d7e * _0x1f49ff;
                    _0x2312e0['position']['y'] += _0x5e3d7e * _0x59948e;
                    while (_0x2312e0['position']['x'] > _0x5ad753) {
                        _0x2312e0['position']['x'] -= _0x5036fa;
                    }
                    while (_0x2312e0['position']['y'] > _0x5eac56) {
                        _0x2312e0['position']['y'] -= _0x319e4a;
                    }
                    while (_0x2312e0['position']['x'] < _0x32b93c) {
                        _0x2312e0['position']['x'] += _0x5036fa;
                    }
                    while (_0x2312e0['position']['y'] < _0x342ed9) {
                        _0x2312e0['position']['y'] += _0x319e4a;
                    }
                }
            }
            function _0x3691ea() {
                if (_0x4cd541 == undefined) {
                    return;
                }
                _0x4d5c35();
                _0x1e6a3f['types']['player']['tickUpdate'](_0x4cd541);
                _0x4cd541['visual']['size'] = 1.18;
                _0x18f2d0['belowObjects']['forEach'](function (_0x300311) {
                    _0x300311['position']['x'] -= _0x1e6a3f['clientDetails']['dt'] * 0x6;
                });
                _0x400f8b += _0x1e6a3f['clientDetails']['dt'] / 0x1e;
                _0x145a43 = Math['sin'](_0x400f8b);
                if (_0x400f8b > Math['PI'] * 0x2) {
                    _0x400f8b -= Math['PI'] * 0x2;
                }
                for (var _0x2b321a = 0x0; _0x2b321a < _0x3a74d0['length']; _0x2b321a++) {
                    var _0x35df8d = _0x3a74d0[_0x2b321a];
                    _0x35df8d['visual']['position']['x'] = _0x1e6a3f['normalLerp'](_0x35df8d['start']['x'], _0x35df8d['end']['x'], _0x145a43 / 0x2 + 0.5);
                    _0x35df8d['visual']['position']['y'] = _0x1e6a3f['normalLerp'](_0x35df8d['start']['y'], _0x35df8d['end']['y'], _0x145a43 / 0x2 + 0.5);
                    if (_0x35df8d['startRotation'] !== undefined) {
                        _0x35df8d['visual']['rotation'] = _0x1e6a3f['normalLerp'](_0x35df8d['startRotation'], _0x35df8d['endRotation'], _0x145a43 / 0x2 + 0.5);
                    }
                    if (_0x35df8d['flare']) {
                        _0x35df8d['flash']['opacity'] = _0x145a43 / 0x7 + 0.2;
                    }
                    if (_0x35df8d['baller'] !== undefined) {
                        _0x35df8d['baller']['visual']['position']['x'] = _0x35df8d['visual']['position']['x'];
                        _0x35df8d['baller']['visual']['position']['y'] = _0x35df8d['visual']['position']['y'];
                        _0x35df8d['baller']['visual']['rotation'] = _0x35df8d['visual']['rotation'];
                        _0x1e6a3f['types']['baller']['tickUpdate'](_0x35df8d['baller']);
                    }
                }
                for (var _0x2b321a = 0x0; _0x2b321a < _0x3fa21a['length']; _0x2b321a++) {
                    var _0x35df8d = _0x3fa21a[_0x2b321a];
                    var _0x54e6a8 = Math['sin'](_0x35df8d['rotation']);
                    var _0x5ccf8d = Math['cos'](_0x35df8d['rotation']);
                    _0x35df8d['visual']['position']['x'] = _0x1e6a3f['normalLerp'](_0x35df8d['start']['x'] + _0x5ccf8d * _0x35df8d['startDistance'], _0x35df8d['start']['x'] + _0x5ccf8d * _0x35df8d['endDistance'], _0x145a43 / 0x2 + 0.5);
                    _0x35df8d['visual']['position']['y'] = _0x1e6a3f['normalLerp'](_0x35df8d['start']['y'] + _0x54e6a8 * _0x35df8d['startDistance'], _0x35df8d['start']['y'] + _0x54e6a8 * _0x35df8d['endDistance'], _0x145a43 / 0x2 + 0.5);
                    if (_0x35df8d['startRotation'] !== undefined) {
                        _0x35df8d['visual']['rotation'] = _0x1e6a3f['normalLerp'](_0x35df8d['startRotation'], _0x35df8d['endRotation'], _0x145a43 / 0x2 + 0.5);
                    }
                }
                for (var _0x2b321a = 0x0; _0x2b321a < _0x52b3fb['length']; _0x2b321a++) {
                    var _0x463060 = _0x52b3fb[_0x2b321a];
                    var _0x156540 = _0x463060['lowering']['length'] - 0x1;
                    var _0xe89b67 = (0x1 / 0x3 + 0x1 / 0x4) / 0x2;
                    var _0x395188 = _0xe89b67;
                    _0x463060['lowering'][_0x156540]['opacity'] = _0x145a43 * _0xe89b67 + _0x395188;
                    if (_0x463060['reverse']) {
                        _0x463060['lowering'][_0x156540]['opacity'] = _0x395188 - _0x145a43 * _0xe89b67;
                    }
                    _0x463060['lowering'][_0x156540]['width'] = _0x10a220(_0x127702 * _0x12c372, _0x127702 * _0x12c372 / 0x2, _0x463060['lowering'][_0x156540]['opacity']);
                    _0x463060['lowering'][_0x156540]['height'] = _0x10a220(_0x127702 * 0x2, _0x127702, _0x463060['lowering'][_0x156540]['opacity']);
                }
            }
            window['addEventListener']('keydown', function (_0x1ef51d) {
                if (_0x20c997 != -0x1) {
                    return;
                }
                if (_0x1e6a3f['spectating'] && _0x1ef51d['keyCode'] == 0xd && _0x7bebb1['opacity'] == 0x1) {
                    if (document['activeElement']['id'] == 'partyinput') {
                        _0x3b160b = document['getElementById']('partyinput')['value'];
                        _0x3b160b = _0x3b160b['toLowerCase']();
                        if (_0x3b160b['length'] < 0x6) {
                            alert('ID Not Valid - Should be 6 characters long');
                        }
                        var _0x37ab67 = _0x3b160b['charAt'](0x0) + _0x3b160b['charAt'](0x1);
                        if (_0x39cfaa['indexOf'](_0x37ab67) == -0x1) {
                            alert('ID Not Valid - Please check again');
                        }
                        if (_0x446ded == null) {
                            _0x32f633(_0x37ab67);
                            _0x20a2a5['push']({
                                'type': 'join',
                                'id': _0x3b160b
                            });
                            _0x20a2a5['push']({
                                'type': 'changename',
                                'name': document['getElementById']('nameBox')['value']
                            });
                            _0x36c0cd('name', _0x282ecd('nameBox')['value'], 0x16d);
                        }
                        return;
                    }
                    _0x20bc3e = -0x1;
                    _0xc16629 = {
                        'position': [0x0, 0x0],
                        'radius': _0x1820e3 / 0x2 + 0x258 + 0x15e
                    };
                    _0x2e8aa0 = {
                        'position': [0x0, 0x0],
                        'radius': _0x1820e3 / 0x2 + 0x258 + 0x15e
                    };
                    _0x131db9['width'] = _0x1820e3 + 0x3e8;
                    _0x131db9['height'] = _0x131db9['width'];
                    _0x131db9['position']['x'] = 0x0;
                    _0x131db9['position']['y'] = 0x0;
                    _0x36654a['opacity'] = 0x0;
                    _0x56f972 = !![];
                    if (_0x446ded != null) {
                        _0x319f2e();
                        return;
                    }
                    _0x563bf4();
                    if (_0x34b775 == -0x2) {
                        _0x23f908['c']['requestPointerLock']();
                    }
                }
            });
            var _0x5cc820 = 0x488;
            var _0x5ba499 = 0x2e4;
            function _0x4efd49(_0x29e53f) {
                if (_0x29e53f['background']) {
                    _0x5cc820 = 0x550;
                    _0x5ba499 = 0x3ac;
                } else if (_0x29e53f['house']) {
                    _0x5cc820 = 0x76c;
                    _0x5ba499 = 0x514;
                }
                if (Math['abs'](_0x561d93['camera']['position']['x'] - _0x29e53f['position']['x']) > _0x5cc820)
                    return ![];
                if (Math['abs'](_0x561d93['camera']['position']['y'] - _0x29e53f['position']['y']) > _0x5ba499)
                    return ![];
                return !![];
            }
            function _0x353187() {
                if (_0xf5fb22['moved']) {
                    if (_0xf5fb22['renderer'] !== undefined) {
                        _0xf5fb22['x'] = Math['max'](Math['min']((_0xf5fb22['newx'] - _0xf5fb22['renderer']['c']['width'] / _0x1e6a3f['devicePixelRatio'] * _0xf5fb22['renderer']['qualitySize'] / 0x2 - _0xf5fb22['renderer']['left']) * _0xf5fb22['renderer']['ratio'] / _0xf5fb22['renderer']['qualitySize'] * _0x1e6a3f['devicePixelRatio'], 0x780 / 0x2), -0x780 / 0x2);
                        _0xf5fb22['y'] = Math['max'](Math['min']((_0xf5fb22['newy'] - _0xf5fb22['renderer']['c']['height'] / _0x1e6a3f['devicePixelRatio'] * _0xf5fb22['renderer']['qualitySize'] / 0x2 - _0xf5fb22['renderer']['top']) * _0xf5fb22['renderer']['ratio'] / _0xf5fb22['renderer']['qualitySize'] * _0x1e6a3f['devicePixelRatio'], 0x438 / 0x2), -0x438 / 0x2);
                    }
                    _0xf5fb22['moved'] = ![];
                }
                for (var _0x1dcc20 of _0x220d98) {
                    _0x1dcc20['checkTouch']();
                }
                var _0x4a5100 = _0x59478a(![], !![]);
                if (_0x375764 != -0x1) {
                    if (_0x4a5100 == -0x1) {
                        _0x1e6a3f['currentPackets']['push']({
                            'type': 'switch',
                            'slot1': _0x375764,
                            'slot2': _0x375764
                        });
                        if (_0x375764 == _0x9a4f65) {
                            for (var _0x1e436f = Math['max'](_0x9a4f65 - 0x1, 0x0); _0x1e6a3f['me']['weaponSlots'][Math['max'](_0x1e436f, 0x0)]['type'] != 'empty' && _0x1e436f >= 0x0; _0x1e436f--) { }
                            _0x9a4f65 = Math['max'](_0x1e436f, 0x0);
                            _0x1e6a3f['currentPackets']['push']({
                                'type': 'selectChange',
                                'weapon': _0x9a4f65
                            });
                        }
                    } else {
                        _0x1e6a3f['currentPackets']['push']({
                            'type': 'switch',
                            'slot1': _0x375764,
                            'slot2': _0x4a5100
                        });
                        if (_0x9a4f65 == _0x375764) {
                            _0x9a4f65 = _0x4a5100;
                            _0x1e6a3f['currentPackets']['push']({
                                'type': 'selectChange',
                                'weapon': _0x9a4f65
                            });
                        } else if (_0x9a4f65 == _0x4a5100) {
                            _0x9a4f65 = _0x375764;
                            _0x1e6a3f['currentPackets']['push']({
                                'type': 'selectChange',
                                'weapon': _0x9a4f65
                            });
                        }
                        var _0x5c12b5 = _0x2fba54[_0x375764]['image'];
                        _0x2fba54[_0x375764]['image'] = _0x2fba54[_0x4a5100]['image'];
                        _0x2fba54[_0x4a5100]['image'] = _0x5c12b5;
                    }
                }
                _0x3297b5();
            }
            window['addEventListener']('mouseup', _0x353187);
            window['addEventListener']('touchend', _0x353187, {
                'passive': ![]
            });
            function _0x352b5c(_0x5ca809) {
                if (_0xf5fb22['moved']) {
                    if (_0xf5fb22['renderer'] !== undefined) {
                        _0xf5fb22['x'] = Math['max'](Math['min']((_0xf5fb22['newx'] - _0xf5fb22['renderer']['c']['width'] / _0x1e6a3f['devicePixelRatio'] * _0xf5fb22['renderer']['qualitySize'] / 0x2 - _0xf5fb22['renderer']['left']) * _0xf5fb22['renderer']['ratio'] / _0xf5fb22['renderer']['qualitySize'] * _0x1e6a3f['devicePixelRatio'], 0x780 / 0x2), -0x780 / 0x2);
                        _0xf5fb22['y'] = Math['max'](Math['min']((_0xf5fb22['newy'] - _0xf5fb22['renderer']['c']['height'] / _0x1e6a3f['devicePixelRatio'] * _0xf5fb22['renderer']['qualitySize'] / 0x2 - _0xf5fb22['renderer']['top']) * _0xf5fb22['renderer']['ratio'] / _0xf5fb22['renderer']['qualitySize'] * _0x1e6a3f['devicePixelRatio'], 0x438 / 0x2), -0x438 / 0x2);
                    }
                    _0xf5fb22['moved'] = ![];
                }
                var _0x39f6c4 = _0x59478a();
                if (_0x5ea1e7 && _0x39f6c4 != -0x1) {
                    _0x375764 = _0x39f6c4;
                    var _0x42347d = _0x2fba54[_0x375764]['parent']['parent'];
                    _0x42347d['remove'](_0x2fba54[_0x375764]['parent']);
                    _0x42347d['add'](_0x2fba54[_0x375764]['parent']);
                    _0x575d9a['x'] = _0xf5fb22['x'];
                    _0x575d9a['y'] = _0xf5fb22['y'];
                }
                var _0x39f6c4 = _0x59478a();
                var _0x2145f5 = _0x41f5ba();
                var _0x5b45f5 = _0x59cfa8();
                if (_0x5ea1e7 && _0x2145f5 != -0x1) {
                    _0x1e6a3f['currentPackets']['push']({
                        'type': 'splitmat',
                        'mat': 0x2 - _0x2145f5
                    });
                    if (_0xf5fb22['emulatedFromTouch'] && gameWrapper['enabled'])
                        gameWrapper['hapticFeedback']('light');
                }
                if (_0x5ea1e7 && _0x5b45f5 != -0x1) {
                    _0x1e6a3f['currentPackets']['push']({
                        'type': 'splitammo',
                        'mat': 0x3 - _0x5b45f5
                    });
                    if (_0xf5fb22['emulatedFromTouch'] && gameWrapper['enabled'])
                        gameWrapper['hapticFeedback']('light');
                }
                if (_0x5ea1e7 && _0x39f6c4 == -0x1 && _0x2145f5 == -0x1 && _0x5b45f5 == -0x1) {
                    _0x527967();
                }
                if (!_0x5ea1e7 && _0xf5fb22['emulatedFromTouch']) {
                    var _0x104324 = _0x59478a(!![]);
                    if (_0x104324 != -0x1) {
                        if (_0x1e6a3f['me'] && _0x1e6a3f['me']['weaponSlots'][_0x104324]['type'] != 'empty') {
                            _0x9a4f65 = _0x104324;
                            _0x1e6a3f['currentPackets']['push']({
                                'type': 'selectChange',
                                'weapon': _0x104324
                            });
                            if (gameWrapper['enabled'])
                                gameWrapper['hapticFeedback']('light');
                        }
                    }
                    if (_0x2145f5 != -0x1 && _0x1e6a3f['me']['building']) {
                        _0x1e6a3f['currentPackets']['push']({
                            'type': 'selectMatChange',
                            'mat': 0x2 - _0x2145f5
                        });
                        if (gameWrapper['enabled'])
                            gameWrapper['hapticFeedback']('light');
                    }
                }
                if (_0xf5fb22['emulatedFromTouch']) {
                    if (!_0x5ea1e7) {
                        if (_0x5c2d09) {
                            if (_0xf5fb22['clicking']) {
                                _0x5c2d09 = ![];
                            }
                        } else {
                            var _0x33b9f9 = 0x12c;
                            var _0x22e74c = new _0x1e6a3f['rectangle'](_0x23f908['leftOfScreen'] + _0x33b9f9 / 0x2, _0x23f908['topOfScreen'] + _0x33b9f9 / 0x2, _0x33b9f9, _0x33b9f9);
                            if (_0xf5fb22['emulatedFromTouch'] && _0xf5fb22['isCollidingWithRectangle'](_0x22e74c)) {
                                if (!_0x5ea1e7 && !_0x5c2d09)
                                    _0x5c2d09 = !![];
                            }
                        }
                    }
                }
                for (var _0x3935c1 of _0x220d98) {
                    _0x3935c1['checkTouch']();
                }
                if (_0xf5fb22['isCollidingWithRectangle'](window['spawnButton']) && _0x1e6a3f['spectating'] && _0x7bebb1['opacity'] == 0x1 && (_0x5ca809 == _0x23f908['c'] || _0x5ca809['id'] !== undefined && _0x5ca809['id']['indexOf']('ref') != -0x1)) {
                    if (gameWrapper['enabled'])
                        gameWrapper['hapticFeedback']('light');
                    _0x20bc3e = -0x1;
                    _0xc16629 = {
                        'position': [0x0, 0x0],
                        'radius': _0x1820e3 / 0x2 + 0x258 + 0x15e
                    };
                    _0x2e8aa0 = {
                        'position': [0x0, 0x0],
                        'radius': _0x1820e3 / 0x2 + 0x258 + 0x15e
                    };
                    _0x36654a['opacity'] = 0x0;
                    _0x131db9['width'] = _0x1820e3 + 0x3e8;
                    _0x131db9['height'] = _0x131db9['width'];
                    _0x131db9['position']['x'] = 0x0;
                    _0x131db9['position']['y'] = 0x0;
                    _0x56f972 = !![];
                    _0xf5fb22['changed'] = ![];
                    _0xf5fb22['clicking'] = ![];
                    _0x3cb168 = !![];
                    if (_0x446ded != null) {
                        _0x319f2e();
                        return;
                    }
                    _0x563bf4();
                    if (_0x34b775 == -0x2) {
                        _0x23f908['c']['requestPointerLock']();
                    }
                }
                if (_0x1e6a3f['spectating'] && !_0x553bd8 && _0xf5fb22['isCollidingWithRectangle'](_0x10b221) && Date['now']() - _0x18d82a > 0x5dc) {
                    _0x1e6a3f['ws']['close']();
                    _0x4795a4();
                    _0x1f8ff4();
                    //! CHANGES
                    localStorage.deltaGameState = 'menu';
                    if (typeof (socket) != "undefined") socket.emit("gameState", "menu");
                    if (_0x2a9ffd && !gameWrapper['enabled'] && !_0x5ab57f) {
                        try {
                            aiptag['cmd']['display']['push'](function () {
                                aipDisplayTag['display']('buildroyale-io_300x250');
                            });
                            aiptag['cmd']['display']['push'](function () {
                                aipDisplayTag['display']('buildroyale-io_300x250_2');
                            });
                            aiptag['cmd']['display']['push'](function () {
                                aipDisplayTag['display']('buildroyale-io_728x90');
                            });
                            aiptag['cmd']['display']['push'](function () {
                                aipDisplayTag['display']('buildroyale-io_300x600');
                            });
                        } catch (_0x3fc4af) {
                            console['log']('Ad Error');
                        }
                    }
                    _0x7bebb1['opacity'] = 0x1;
                    _0x2bb197['opacity'] = 0x0;
                    for (var _0x31c17b = _0x1e6a3f['objects']['length'] - 0x1; _0x31c17b >= 0x0; _0x31c17b--) {
                        if (_0x1e6a3f['types'][_0x1e6a3f['objects'][_0x31c17b]['type']] !== undefined) {
                            if (_0x1e6a3f['types'][_0x1e6a3f['objects'][_0x31c17b]['type']]['remove'](_0x1e6a3f['objects'][_0x31c17b], {}))
                                continue;
                            if (_0x1e6a3f['objects'][_0x31c17b]['visual']['parent'] != null)
                                _0x1e6a3f['objects'][_0x31c17b]['visual']['parent']['remove'](_0x1e6a3f['objects'][_0x31c17b]['visual']);
                            _0x1e6a3f['objects']['splice'](_0x31c17b, 0x1);
                        }
                    }
                }
            }
            window['addEventListener']('mousedown', function (_0x29ee82) {
                _0x352b5c(_0x29ee82['target']);
            });
            window['addEventListener']('touchstart', function (_0x1c35de) {
                _0x352b5c(_0x1c35de['target']);
            }, {
                'passive': ![]
            });
            document['addEventListener']('visibilitychange', function () {
                if (document['hidden']) { } else {
                    _0x339df1['shift'] = ![];
                    _0x339df1['changedKeys']['push']('shift');
                }
            });
            _0x1e6a3f['addPacketType']('email', function (_0x43f570) { });
            _0x1e6a3f['addPacketType']('players', function (_0x52faee) {
                if (_0x52faee['players'] !== undefined) {
                    _0x4918d8['text'] = _0x52faee['players'];
                    //! CHANGES
                    if ((localStorage.deltaPlayers != _0x52faee['players']) && (typeof (socket) !== "undefined")) socket.emit("gameInfo", "players", _0x52faee['players']);
                    localStorage.deltaPlayers = _0x52faee['players'];
                }
                if (_0x52faee['infect'] !== undefined) {
                    _0x2173be['text'] = _0x52faee['infect'];
                    _0x2173be['opacity'] = 0x1;
                } else {
                    _0x2173be['opacity'] = 0x0;
                }
            });
            _0x1e6a3f['addPacketType']('feed', function (_0x1b78c4) {
                if (_0x1b78c4['n1'] == '') {
                    _0x1b78c4['n1'] = '<unnamed>';
                }
                if (_0x1b78c4['n2'] == '') {
                    _0x1b78c4['n2'] = '<unnamed>';
                }
                if (_0x1b78c4['knock'] === undefined) {
                    _0x1b78c4['knock'] = ![];
                }
                _0x3dbce9(_0x1b78c4['n1'], _0x1b78c4['n2'], _0x1b78c4['knock']);
                window.killFeed.push((!_0x1b78c4['knock']) ? `${_0x1b78c4['n1']} Eliminated ${_0x1b78c4['n2']}` : `${_0x1b78c4['n1']} Knocked ${_0x1b78c4['n2']}`);
            });
            _0x1e6a3f['addPacketType']('elim', function (_0x3d2f59) {
                _0x12809f['text'] = _0x3d2f59['name'];
                _0x28c545 = 0x4;
                if (_0x3d2f59['knock'] !== undefined && _0x3d2f59['knock']) {
                    _0xc05c25['text'] = 'Knocked';
                    _0xc05c25['belowObjects'][0x0]['text'] = 'Knocked';
                    _0xc05c25['fillStyle'] = _0x1f966b;
                } else {
                    _0xc05c25['text'] = 'Eliminated';
                    _0xc05c25['belowObjects'][0x0]['text'] = 'Eliminated';
                    _0xc05c25['fillStyle'] = '#C11';
                }
            });
            _0x1e6a3f['addPacketType']('death', function (_0x4a660a) {
                //! CHANGES
                if (typeof (socket) !== "undefined") socket.emit("gameState", "spec");

                if (_0x2a9ffd && !gameWrapper['enabled']) {
                    try {
                        if (_0x5ab57f) {
                            _0x5ce32c['requestAd']('midgame');
                            _0x5ce32c['gameplayStop']();
                        } else {
                            aiptag['cmd']['display']['push'](function () {
                                aipDisplayTag['display']('buildroyale-io_300x250');
                            });
                            aiptag['cmd']['display']['push'](function () {
                                aipDisplayTag['display']('buildroyale-io_300x250_2');
                            });
                            aiptag['cmd']['display']['push'](function () {
                                aipDisplayTag['display']('buildroyale-io_728x90');
                            });
                            aiptag['cmd']['display']['push'](function () {
                                aipDisplayTag['display']('buildroyale-io_300x600');
                            });
                            aiptag['cmd']['display']['push'](function () {
                                aipDisplayTag['display']('buildroyale-io_300x250');
                            });
                            aiptag['cmd']['display']['push'](function () {
                                aipDisplayTag['display']('buildroyale-io_300x250_2');
                            });
                            aiptag['cmd']['display']['push'](function () {
                                aipDisplayTag['display']('buildroyale-io_728x90');
                            });
                            aiptag['cmd']['display']['push'](function () {
                                aipDisplayTag['display']('buildroyale-io_300x600');
                            });
                        }
                    } catch (_0xc01885) {
                        console['log']('Ad Error');
                    }
                }
                if (ga !== undefined) {
                    ga('send', 'event', 'Game', 'play');
                } else { }
                _0x1e6a3f['spectating'] = !![];
                _0x18d82a = Date['now']();
                _0x5c2d09 = ![];
                _0x5ea1e7 = ![];
                _0x3765f6 = -0x1;
                if (_0x4a660a['place'] == 0x1) {
                    _0x370bad['opacity'] = 0x1;
                    _0x2fb376['opacity'] = 0x0;
                    if (_0x5ab57f) {
                        _0x5ce32c['happytime']();
                    }
                } else {
                    _0x370bad['opacity'] = 0x0;
                    _0x2fb376['opacity'] = 0x1;
                }
                _0x59ae66['text'] = '#' + _0x4a660a['place'];
                _0x3f9a94['text'] = _0x4a660a['eliminations'];
                _0xc63a51['text'] = _0x472bc3(_0x4a660a['damageToEnemies']);
                _0x20eaa3['text'] = _0x4a660a['wallsBuilt'];
                _0x2fb376['text'] = 'You placed #' + _0x4a660a['place'];
                _0x529bb2['opacity'] = 0x0;
                _0x2a84a3['opacity'] = 0x0;
                _0x308420['opacity'] = 0x0;
                if (_0x4a660a['place'] == 0x1) {
                    _0x529bb2['text'] = 'Eliminated:';
                }
                if (_0x4a660a['name'] !== undefined) {
                    var _0x491610 = _0x4a660a['name'];
                    if (_0x491610 == '') {
                        _0x491610 = '<unnamed>';
                    }
                    if (_0x4a660a['place'] == 0x1) {
                        _0x529bb2['text'] = 'Eliminated:';
                    } else {
                        _0x529bb2['text'] = 'Eliminated By:';
                    }
                    _0x2a84a3['text'] = _0x491610;
                    _0x529bb2['opacity'] = 0x1;
                    _0x2a84a3['opacity'] = 0x1;
                    _0x308420['opacity'] = 0.3;
                }
                if (_0x4a660a['place'] == 0x1 && _0x28c545 > 0x3) {
                    _0x2a84a3['text'] = _0x12809f['text'];
                    _0x529bb2['opacity'] = 0x1;
                    _0x2a84a3['opacity'] = 0x1;
                    _0x308420['opacity'] = 0.3;
                }
            });
            _0x1e6a3f['addPacketType']('circle', function (_0x37ebd1) {
                _0x325343 = !![];
                if (_0x37ebd1['state'] !== undefined) {
                    _0x38b533 = _0x37ebd1['state'];
                    if (_0x38b533 == 'waiting' || _0x38b533 == 'lobby') {
                        _0x3e303f['image'] = _0x282ecd('waitingIcon');
                        //! CHANGES
                        if (typeof (socket) !== "undefined") socket.emit("gameInfo", "stormstate", "waiting");
                        localStorage.deltaStormState = 'waiting';
                    } else if (_0x38b533 == 'moving') {
                        _0x3e303f['image'] = _0x282ecd('movingIcon');
                        //! CHANGES
                        if (typeof (socket) !== "undefined") socket.emit("gameInfo", "stormstate", "moving");
                        localStorage.deltaStormState = 'moving';
                    }
                }
                if (_0x37ebd1['time'] !== undefined) {
                    _0x20bc3e = _0x37ebd1['time'];
                    var _0xc43186 = '0:';
                    if (_0x20bc3e < 0xa)
                        _0xc43186 += '0';
                    _0xc43186 += Math['max'](_0x20bc3e, 0x0);
                    _0x4a27d9['text'] = _0xc43186;
                    //! CHANGES
                    if ((localStorage.deltaStormTime != _0xc43186) && (typeof (socket) !== "undefined")) socket.emit("gameInfo", "time", _0xc43186);
                    localStorage.deltaStormTime = _0xc43186;
                }
                if (_0x37ebd1['circle'] !== undefined) {
                    if (_0x38b533 == 'moving') {
                        _0x2e8aa0['position'][0x0] = _0x1e6a3f['lerp'](_0x2e8aa0['position'][0x0], _0x37ebd1['circle']['position'][0x0]);
                        _0x2e8aa0['position'][0x1] = _0x1e6a3f['lerp'](_0x2e8aa0['position'][0x1], _0x37ebd1['circle']['position'][0x1]);
                        _0xc16629 = _0x2e8aa0;
                        _0x2e8aa0 = _0x37ebd1['circle'];
                        _0xc16629['radius'] = _0x2c00c9;
                        _0x2e8aa0['width'] = Math['min'](_0x2e8aa0['width'], 0x0);
                    } else {
                        _0x131db9['width'] = _0x131db9['height'] = _0x37ebd1['circle']['radius'] * 0x2;
                        _0x131db9['position'] = new _0x1e6a3f['Vector2'](_0x37ebd1['circle']['position'][0x0], _0x37ebd1['circle']['position'][0x1]);
                    }
                }
            });
            _0x1e6a3f['addPacketType']('forceSpectate', function (_0x2d961d) {
                console['log']('Forcing spectate');
                //! CHANGES
                if (typeof (socket) !== "undefined") socket.emit("gameState", "spec");
                _0x553bd8 = !![];
                _0x7bebb1['opacity'] = 0;
            });
            var _0x2c628e = 0x0;
            var _0x256d8d = 0.1;
            var _0x4bbfc8 = 0x0;
            document['body']['addEventListener']('mousewheel', function (_0x3daa27) {
                _0x3daa27['preventDefault']();
            }, {
                'passive': ![]
            });
            document['addEventListener']('wheel', function (_0x12bae7) {
                if (_0x1e6a3f['spectating']) {
                    return;
                }
                if (_0x4bbfc8 < 0x1) {
                    return;
                }
                _0x4bbfc8 = 0x0;
                if (_0x12bae7['wheelDelta']) {
                    _0x2c628e += _0x12bae7['wheelDelta'];
                } else {
                    _0x2c628e -= _0x12bae7['deltaY'];
                }
                if (Math['abs'](_0x2c628e) < _0x256d8d) {
                    return;
                }
                if (_0x1e6a3f['me']['weaponSlots'] === undefined) {
                    return;
                }
                if (_0x2c628e <= -_0x256d8d) {
                    _0x9a4f65 += 0x1;
                    if (_0x9a4f65 > 0x5) {
                        _0x9a4f65 = 0x0;
                    }
                    while (_0x1e6a3f['me']['weaponSlots'][_0x9a4f65]['type'] == 'empty') {
                        _0x9a4f65++;
                        if (_0x9a4f65 > 0x5) {
                            _0x9a4f65 = 0x0;
                        }
                    }
                } else if (_0x2c628e >= _0x256d8d) {
                    _0x9a4f65 -= 0x1;
                    if (_0x9a4f65 < 0x0) {
                        _0x9a4f65 = 0x5;
                    }
                    while (_0x1e6a3f['me']['weaponSlots'][_0x9a4f65]['type'] == 'empty') {
                        _0x9a4f65--;
                    }
                }
                _0x2c628e = 0x0;
                _0x1e6a3f['currentPackets']['push']({
                    'type': 'selectChange',
                    'weapon': _0x9a4f65
                });
            });
            function _0x1ff393() {
                for (var _0x5740be = 0x0; _0x5740be < 0x5; _0x5740be++) {
                    var _0x535c26 = _0x112d73['objects'][_0x5740be];
                    var _0x230887 = Math['floor'](Math['random']() * 0x2);
                    if (_0x230887 == 0x0) {
                        _0x535c26['color'] = '#F00';
                    } else {
                        _0x535c26['color'] = '#0F0';
                    }
                    _0x535c26['opacity'] = 0x1;
                }
                for (var _0x5740be = 0x0; _0x5740be < _0x1e6a3f['objects']['length']; _0x5740be++) {
                    if (_0x1e6a3f['objects'][_0x5740be]['type'] == 'object') {
                        if (_0x1e6a3f['objects'][_0x5740be]['sprite']['image'] !== undefined && _0x1e6a3f['objects'][_0x5740be]['sprite']['image']['id'] !== undefined) {
                            if (_0x1e6a3f['objects'][_0x5740be]['sprite']['image']['id'] == 'christmastree0') {
                                _0x1e6a3f['objects'][_0x5740be]['sprite']['image'] = _0x282ecd('christmastree1');
                            } else if (_0x1e6a3f['objects'][_0x5740be]['sprite']['image']['id'] == 'christmastree1') {
                                _0x1e6a3f['objects'][_0x5740be]['sprite']['image'] = _0x282ecd('christmastree0');
                            } else if (_0x1e6a3f['objects'][_0x5740be]['sprite']['image']['id'] == 'christmastree2') {
                                _0x1e6a3f['objects'][_0x5740be]['sprite']['image'] = _0x282ecd('christmastree3');
                            } else if (_0x1e6a3f['objects'][_0x5740be]['sprite']['image']['id'] == 'christmastree3') {
                                _0x1e6a3f['objects'][_0x5740be]['sprite']['image'] = _0x282ecd('christmastree2');
                            }
                        }
                    }
                }
                setTimeout(_0x1ff393, 0x2bc);
            }
            if (_0x2f153f) {
                _0x1ff393();
            }
            function _0x303ccd(_0x435f4a) {
                if (_0x435f4a['type'] == 'text') {
                    _0x435f4a['oldText'] = '';
                }
                for (var _0x235aa8 = 0x0; _0x235aa8 < _0x435f4a['objects']['length']; _0x235aa8++) {
                    _0x303ccd(_0x435f4a['objects'][_0x235aa8]);
                }
                for (var _0x235aa8 = 0x0; _0x235aa8 < _0x435f4a['belowObjects']['length']; _0x235aa8++) {
                    _0x303ccd(_0x435f4a['belowObjects'][_0x235aa8]);
                }
            }
            function _0x30439d() {
                clearInterval(_0x214ae2);
                window['spawnText']['oldText'] = '';
                window['lobbyText']['oldText'] = '';
                for (var _0x1ebc8e = 0x0; _0x1ebc8e < _0x12499e['length']; _0x1ebc8e++) {
                    _0x303ccd(_0x12499e[_0x1ebc8e]);
                }
                _0x303ccd(_0x18f2d0);
                _0x303ccd(_0x2bb197);
                document['getElementById']('loadingDesktop')['style']['visibility'] = 'hidden';
                document['getElementById']('loadingDesktop')['style']['display'] = 'none';
                document['getElementById']('loadingDesktop')['style']['opacity'] = 0x0;
            }
            var _0x214ae2 = setInterval(function () {
                if (!document['fonts']['check']('12px Arial Black'))
                    return;
                var _0x30d2dd = document['getElementsByTagName']('img');
                var _0xdd9695 = !![];
                for (var _0x439806 of _0x30d2dd) {
                    if (!_0x439806['complete']) {
                        _0xdd9695 = ![];
                        return;
                    }
                }
                if (gameWrapper['enabled']) {
                    setTimeout(function () {
                        _0x30439d();
                    }, 0x64);
                } else {
                    _0x30439d();
                }
            }, 0x64);
            setTimeout(_0x30439d, 0x1388);
        };
    },
    14: function (_0x42f12b, _0x7737f9) {
        _0x42f12b['exports']['createUI'] = function (_0x2faca1, _0x9f3661) {
            var _0x31e3f9 = '\'Arial Black\', Gadget, sans-serif';
            _0x31e3f9 = '\'Arial Black\'';
            var _0x32d4a8 = new _0x2faca1['image'](document['getElementById']('logo'), 0x0, -0xc8, 0x2ee, 0x1f4);
            window['menuLogo'] = _0x32d4a8;
            _0x32d4a8['size'] = 0.9;
            _0x9f3661['add'](_0x32d4a8);
            var _0x255e3e = 0x78;
            window['spawnButton'] = new _0x2faca1['roundRectangle'](0x0, _0x255e3e, 0x1f4 - 0x6, 0x46, 0x46 / 0x2, '#0D0', 0.4);
            window['spawnButton']['strokeStyle'] = '#0B0';
            window['spawnButton']['lineWidth'] = 0x6;
            _0x9f3661['add'](window['spawnButton']);
            window['spawnText'] = new _0x2faca1['text']('Ready', 0x0, _0x255e3e, '#FFF', _0x31e3f9, 0x1e, '');
            var _0x4c26ab = new _0x2faca1['strokeText']('Ready', 0x0, -0x2, '#0B0', _0x31e3f9, 0x1e, '');
            _0x4c26ab['lineWidth'] = 0x9;
            window['spawnText']['addBelow'](_0x4c26ab);
            _0x9f3661['add'](window['spawnText']);
            _0x9f3661['addBelow'](new _0x2faca1['rectangle'](0x0, 0x0, 0x781, 0x439, '#000', 0.5));
            _0x9f3661['animatedLayer'] = new _0x2faca1['object']();
            _0x9f3661['addBelow'](_0x9f3661['animatedLayer']);
            _0x9f3661['addBelow'](new _0x2faca1['image'](document['getElementById']('background'), 0x0, 0x0, 0x780, 0x438));
        };
        _0x42f12b['exports']['showName'] = function (_0xbc40e1, _0x46921f) {
            _0x46921f['forEach'](function (_0x2cd03d) {
                if (modals['indexOf'](_0x2cd03d) != -0x1) {
                    return;
                }
                document['getElementById'](_0x2cd03d)['style']['visibility'] = 'visible';
                document['getElementById'](_0x2cd03d)['style']['display'] = 'initial';
            });
        };
        _0x42f12b['exports']['hideName'] = function (_0x2166f4, _0x10fe6d) {
            _0x10fe6d['forEach'](function (_0x32f3aa) {
                if (_0x32f3aa == 'settings') {
                    return;
                }
                document['getElementById'](_0x32f3aa)['style']['visibility'] = 'hidden';
                document['getElementById'](_0x32f3aa)['style']['display'] = 'none';
            });
        };
        _0x42f12b['exports']['createMap'] = function (_0x917f00, _0x1f5f86, _0x3b2ab1, _0x50ac63) {
            var _0x54718a = 0x32;
            var _0x11a049 = 0xc8;
            var _0x1fe380 = _0x50ac63 / 0x190;
            var _0x323270 = document['getElementById']('grid');
            for (var _0x196753 = -_0x54718a; _0x196753 <= _0x54718a; _0x196753++) {
                for (var _0x1d5c5e = -_0x54718a; _0x1d5c5e <= _0x54718a; _0x1d5c5e++) {
                    var _0x55f30a = new _0x917f00['image'](_0x323270, _0x196753 * _0x11a049 - 1.25, _0x1d5c5e * _0x11a049 - 1.25, _0x11a049, _0x11a049, 0.14);
                    _0x55f30a['background'] = !![];
                    _0x1f5f86['addBelow'](_0x55f30a);
                }
            }
            for (var _0x196753 = -_0x54718a + 0x5; _0x196753 < _0x54718a - 0x5; _0x196753++) {
                for (var _0x1d5c5e = -_0x1fe380 - 0x4; _0x1d5c5e < -_0x1fe380; _0x1d5c5e++) {
                    var _0x3a0666 = new _0x917f00['rectangle']((_0x196753 + 0.5) * _0x11a049, (_0x1d5c5e + 0.5) * _0x11a049, _0x11a049, _0x11a049, '#000', 0.3);
                    _0x3a0666['background'] = !![];
                    _0x3b2ab1['add'](_0x3a0666);
                }
                for (var _0x1d5c5e = _0x1fe380 + 0x4; _0x1d5c5e > _0x1fe380; _0x1d5c5e--) {
                    var _0x3a0666 = new _0x917f00['rectangle']((_0x196753 + 0.5) * _0x11a049, (_0x1d5c5e - 0.5) * _0x11a049, _0x11a049, _0x11a049, '#000', 0.3);
                    _0x3a0666['background'] = !![];
                    _0x3b2ab1['add'](_0x3a0666);
                }
            }
            var _0x5d9787 = document['getElementById']('grass');
            if (!window['enableChristmas']) {
                for (var _0x4673b1 = 0x0; _0x4673b1 < 0x5dc; _0x4673b1++) {
                    var _0x196753 = Math['random']() - 0.5;
                    var _0x1d5c5e = Math['random']() - 0.5;
                    _0x196753 *= _0x50ac63;
                    _0x1d5c5e *= _0x50ac63;
                    _0x1d5c5e += 0x1e;
                    var _0x4dcda2 = Math['floor'](Math['random']() * window['grassTypes']);
                    var _0x39f020 = new _0x917f00['image'](window['grassCanvas' + _0x4dcda2], _0x196753, _0x1d5c5e, window['grassWidth'], window['grassWidth']);
                    _0x1f5f86['add'](_0x39f020);
                    window['grass']['push'](_0x39f020);
                }
            }
            for (var _0x1d5c5e = -_0x54718a + 0xa; _0x1d5c5e < _0x54718a - 0xa; _0x1d5c5e++) {
                for (var _0x196753 = -_0x1fe380 - 0x6; _0x196753 < -_0x1fe380; _0x196753++) {
                    var _0x3a0666 = new _0x917f00['rectangle']((_0x196753 + 0.5) * _0x11a049, (_0x1d5c5e + 0.5) * _0x11a049, _0x11a049, _0x11a049, '#000', 0.3);
                    _0x3a0666['background'] = !![];
                    _0x3b2ab1['add'](_0x3a0666);
                }
                for (var _0x196753 = _0x1fe380 + 0x6; _0x196753 > _0x1fe380; _0x196753--) {
                    var _0x3a0666 = new _0x917f00['rectangle']((_0x196753 - 0.5) * _0x11a049, (_0x1d5c5e + 0.5) * _0x11a049, _0x11a049, _0x11a049, '#000', 0.3);
                    _0x3a0666['background'] = !![];
                    _0x3b2ab1['add'](_0x3a0666);
                }
            }
        };
    },
    15: function (_0x40a4b3, _0x41b17) {
        var _0x5d9059 = {
            'startTime': 0x0,
            'frameNumber': 0x0,
            'getFPS': function () {
                this['frameNumber']++;
                var _0x442a8a = new Date()['getTime'](),
                    _0x44af8f = (_0x442a8a - this['startTime']) / 0x3e8,
                    _0x51228e = Math['floor'](this['frameNumber'] / _0x44af8f);
                if (_0x44af8f > 0x1) {
                    this['startTime'] = new Date()['getTime']();
                    this['frameNumber'] = 0x0;
                }
                return _0x51228e;
            }
        };
        var _0x8cc71f = ['canvas', 'globalAlpha', 'globalCompositeOperation', 'filter', 'imageSmoothingEnabled', 'imageSmoothingQuality', 'strokeStyle', 'fillStyle', 'shadowOffsetX', 'shadowOffsetY', 'shadowBlur', 'shadowColor', 'lineWidth', 'lineCap', 'lineJoin', 'miterLimit', 'lineDashOffset', 'font', 'textAlign', 'textBaseline', 'direction', 'arc', 'arcTo', 'beginPath', 'bezierCurveTo', 'clearRect', 'clip', 'closePath', 'createImageData', 'createLinearGradient', 'createPattern', 'createRadialGradient', 'drawFocusIfNeeded', 'drawImage', 'ellipse', 'fill', 'fillRect', 'fillText', 'getContextAttributes', 'getImageData', 'getLineDash', 'getTransform', 'isPointInPath', 'isPointInStroke', 'lineTo', 'measureText', 'moveTo', 'putImageData', 'quadraticCurveTo', 'rect', 'resetTransform', 'restore', 'rotate', 'save', 'scale', 'setLineDash', 'setTransform', 'stroke', 'strokeRect', 'strokeText', 'transform', 'translate'];
        var _0x5a79ce = HTMLCanvasElement['prototype']['getContext'];
        HTMLCanvasElement['prototype']['getContext'] = function (_0x3e7c15) {
            var _0x14cafc = _0x5a79ce['apply'](this, [_0x3e7c15]);
            if (_0x14cafc == null) {
                console['warn']('Failed to initialize ctx, creating stub ctx');
                _0x14cafc = {};
                for (var _0x1f0d50 of _0x8cc71f) {
                    _0x14cafc[_0x1f0d50] = function () { };
                }
                _0x14cafc['measureText'] = function () {
                    return {
                        'width': 0x1,
                        'height': 0x1
                    };
                };
                _0x14cafc['miterLimit'] = 0x1;
            }
            return _0x14cafc;
        };
        _0x40a4b3['exports'] = function gameIO() {
            var _0x5eac64 = {
                'renderers': [],
                'scenes': [],
                'particles': [],
                'envs': {},
                'devicePixelRatio': window['devicePixelRatio'],
                'pixelResize': 0.5,
                'lastPixelCheck': Date['now']()
            };
            _0x5eac64['gamepad'] = function () {
                var _0x4db08b = [];
                if (navigator['getGamepads'] !== undefined)
                    _0x4db08b = navigator['getGamepads']();
                for (var _0x24f78d = 0x0; _0x24f78d < _0x4db08b['length']; _0x24f78d++) {
                    if (_0x4db08b[_0x24f78d] !== undefined)
                        return _0x4db08b[_0x24f78d];
                }
                return null;
            };
            _0x5eac64['gamepadControl'] = function () {
                var _0x773c45 = {
                    'buttons': [],
                    'axes': []
                };
                for (var _0x13742e = 0x0; _0x13742e < 0x10; _0x13742e++)
                    _0x773c45['buttons']['push']({
                        'pressed': ![]
                    });
                return _0x773c45;
            };
            _0x5eac64['recycledCanvases'] = [];
            for (var _0x5959fe = 0x0; _0x5959fe < 0x1e; _0x5959fe++) {
                _0x5eac64['recycledCanvases']['push'](document['createElement']('canvas'));
                _0x5eac64['recycledCanvases'][_0x5959fe]['width'] = 0x0;
                _0x5eac64['recycledCanvases'][_0x5959fe]['height'] = 0x0;
            }
            _0x5eac64['usingCanvases'] = [];
            _0x5eac64['getCanvas'] = function () {
                while (_0x5eac64['recycledCanvases']['length'] > 0x0) {
                    var _0x422214 = _0x5eac64['recycledCanvases']['splice'](0x0, 0x1)[0x0];
                    if (_0x5eac64['usingCanvases']['indexOf'](_0x422214) != -0x1) {
                        continue;
                    }
                    _0x5eac64['usingCanvases']['push'](_0x422214);
                    return _0x422214;
                }
                return document['createElement']('canvas');
            };
            _0x5eac64['mouse'] = function (_0x1cb56a) {
                var _0x3398fb = new _0x5eac64['Vector2'](0x0, 0x0);
                _0x3398fb['renderer'] = _0x1cb56a || undefined;
                _0x3398fb['clicking'] = ![];
                _0x3398fb['rightClicking'] = ![];
                _0x3398fb['changed'] = ![];
                _0x3398fb['rightChanged'] = !![];
                _0x3398fb['moved'] = ![];
                _0x3398fb['locked'] = ![];
                _0x3398fb['emulatedFromTouch'] = ![];
                _0x3398fb['client'] = new _0x5eac64['Vector2'](0x0, 0x0);
                window['addEventListener']('mousemove', function (_0x3a7f1f) {
                    _0x3398fb['emulatedFromTouch'] = ![];
                    if (_0x3398fb['locked']) {
                        _0x3398fb['client']['x'] += _0x3a7f1f['movementX'];
                        _0x3398fb['client']['y'] += _0x3a7f1f['movementY'];
                        _0x3398fb['client']['x'] = Math['max'](Math['min'](_0x3398fb['client']['x'], window['innerWidth']), 0x0);
                        _0x3398fb['client']['y'] = Math['max'](Math['min'](_0x3398fb['client']['y'], window['innerHeight']), 0x0);
                        _0x3398fb['newx'] = _0x3398fb['client']['x'];
                        _0x3398fb['newy'] = _0x3398fb['client']['y'];
                    } else {
                        _0x3398fb['newx'] = _0x3a7f1f['clientX'];
                        _0x3398fb['newy'] = _0x3a7f1f['clientY'];
                        _0x3398fb['client']['x'] = _0x3398fb['x'];
                        _0x3398fb['client']['y'] = _0x3398fb['y'];
                    }
                    _0x3398fb['moved'] = !![];
                });
                window['addEventListener']('mousedown', function (_0x3835b7) {
                    var _0x18b408 = _0x3835b7['target'];
                    while (_0x18b408 && _0x18b408['classList']) {
                        _0x18b408['classList']['add']('pressed');
                        _0x18b408 = _0x18b408['parentNode'];
                    }
                    window['addEventListener']('mouseup', function () {
                        var _0x3105b3 = _0x3835b7['target'];
                        while (_0x3105b3 && _0x3105b3['classList']) {
                            _0x3105b3['classList']['remove']('pressed');
                            _0x3105b3 = _0x3105b3['parentNode'];
                        }
                    }, {
                        'once': !![]
                    });
                    _0x3398fb['emulatedFromTouch'] = ![];
                    if (_0x3835b7['button'] === 0x0) {
                        _0x3398fb['clicking'] = !![];
                        _0x3398fb['changed'] = !![];
                    } else if (_0x3835b7['button'] == 0x2) {
                        _0x3398fb['rightClicking'] = !![];
                        _0x3398fb['rightChanged'] = !![];
                    } else if (_0x3835b7['button'] > 0x2) {
                        _0x3835b7['preventDefault']();
                    }
                });
                window['addEventListener']('click', function (_0x4af5cc) {
                    if (_0x4af5cc['button'] > 0x2) {
                        _0x4af5cc['preventDefault']();
                    }
                });
                window['addEventListener']('contextmenu', function (_0xd07e72) {
                    _0xd07e72['preventDefault']();
                    if (_0xd07e72['stopPropagation'] != undefined)
                        _0xd07e72['stopPropagation']();
                });
                window['addEventListener']('mouseup', function (_0x5f5238) {
                    _0x3398fb['emulatedFromTouch'] = ![];
                    if (_0x5f5238['button'] === 0x0) {
                        _0x3398fb['clicking'] = ![];
                        _0x3398fb['changed'] = !![];
                    } else if (_0x5f5238['button'] == 0x2) {
                        _0x3398fb['rightClicking'] = ![];
                        _0x3398fb['rightChanged'] = !![];
                    } else if (_0x5f5238['button'] > 0x2) {
                        _0x5f5238['preventDefault']();
                    }
                });
                _0x3398fb['fromRenderer'] = function (_0x5a01a4) {
                    this['x'] = (this['x'] - _0x5a01a4['c']['width'] / 0x2 - _0x5a01a4['left']) * _0x5a01a4['ratio'] / 0x2;
                    this['y'] = (this['y'] - _0x5a01a4['c']['height'] / 0x2 - _0x5a01a4['top']) * _0x5a01a4['ratio'] / 0x2;
                };
                _0x3398fb['isCollidingWithRectangle'] = function (_0x229f3f, _0x230fb4 = ![]) {
                    if (!_0x230fb4 && this['emulatedFromTouch'] && !this['clicking'] && !this['rightClicking'])
                        return ![];
                    if (_0x1cb56a === undefined)
                        return ![];
                    if (this['x'] < _0x229f3f['position']['x'] + _0x229f3f['width'] / 0x2 && this['x'] > _0x229f3f['position']['x'] - _0x229f3f['width'] / 0x2 && this['y'] < _0x229f3f['position']['y'] + _0x229f3f['height'] / 0x2 && this['y'] > _0x229f3f['position']['y'] - _0x229f3f['height'] / 0x2)
                        return !![];
                    return ![];
                };
                return _0x3398fb;
            };
            _0x5eac64['touches'] = function (_0x40b8d2, _0x158556) {
                var _0x5e6df1 = [];
                var _0x5c9004 = null;
                function _0x4a9b64(_0x5a7eac) {
                    _0x5a7eac['tX'] = Math['max'](Math['min']((_0x5a7eac['x'] - _0x40b8d2['c']['width'] / _0x5eac64['devicePixelRatio'] * _0x40b8d2['qualitySize'] / 0x2 - _0x40b8d2['left']) * _0x40b8d2['ratio'] / _0x40b8d2['qualitySize'] * _0x5eac64['devicePixelRatio'], 0x780 / 0x2), -0x780 / 0x2);
                    _0x5a7eac['tY'] = Math['max'](Math['min']((_0x5a7eac['y'] - _0x40b8d2['c']['height'] / _0x5eac64['devicePixelRatio'] * _0x40b8d2['qualitySize'] / 0x2 - _0x40b8d2['top']) * _0x40b8d2['ratio'] / _0x40b8d2['qualitySize'] * _0x5eac64['devicePixelRatio'], 0x438 / 0x2), -0x438 / 0x2);
                    _0x5a7eac['tStartX'] = Math['max'](Math['min']((_0x5a7eac['startX'] - _0x40b8d2['c']['width'] / _0x5eac64['devicePixelRatio'] * _0x40b8d2['qualitySize'] / 0x2 - _0x40b8d2['left']) * _0x40b8d2['ratio'] / _0x40b8d2['qualitySize'] * _0x5eac64['devicePixelRatio'], 0x780 / 0x2), -0x780 / 0x2);
                    _0x5a7eac['tStartY'] = Math['max'](Math['min']((_0x5a7eac['startY'] - _0x40b8d2['c']['height'] / _0x5eac64['devicePixelRatio'] * _0x40b8d2['qualitySize'] / 0x2 - _0x40b8d2['top']) * _0x40b8d2['ratio'] / _0x40b8d2['qualitySize'] * _0x5eac64['devicePixelRatio'], 0x438 / 0x2), -0x438 / 0x2);
                }
                window['addEventListener']('touchstart', function (_0x1260e8) {
                    var _0x11f52b = _0x1260e8['target'];
                    while (_0x11f52b && _0x11f52b['classList']) {
                        _0x11f52b['classList']['add']('pressed');
                        _0x11f52b = _0x11f52b['parentNode'];
                    }
                    _0x158556['emulatedFromTouch'] = !![];
                    for (var _0x220897 of _0x1260e8['changedTouches']) {
                        _0x5c9004 = _0x220897['identifier'];
                        if (_0x158556) {
                            _0x158556['clicking'] = !![];
                            _0x158556['changed'] = !![];
                            _0x158556['newx'] = _0x220897['clientX'];
                            _0x158556['newy'] = _0x220897['clientY'];
                            _0x158556['client']['x'] = _0x158556['x'];
                            _0x158556['client']['y'] = _0x158556['y'];
                            _0x158556['moved'] = !![];
                        }
                        var _0x220897 = {
                            'id': _0x220897['identifier'],
                            'x': _0x220897['clientX'],
                            'y': _0x220897['clientY'],
                            'startX': _0x220897['clientX'],
                            'startY': _0x220897['clientY'],
                            'moved': !![]
                        };
                        _0x4a9b64(_0x220897);
                        _0x5e6df1['push'](_0x220897);
                    }
                    _0x1260e8['preventDefault']();
                }, {
                    'passive': ![]
                });
                window['addEventListener']('touchmove', function (_0x328b58) {
                    for (var _0x51aea9 of _0x328b58['changedTouches']) {
                        if (_0x5c9004 == _0x51aea9['identifier']) {
                            _0x158556['emulatedFromTouch'] = !![];
                            _0x158556['newx'] = _0x51aea9['clientX'];
                            _0x158556['newy'] = _0x51aea9['clientY'];
                            _0x158556['client']['x'] = _0x158556['x'];
                            _0x158556['client']['y'] = _0x158556['y'];
                            _0x158556['moved'] = !![];
                        }
                        var _0x5e7084 = _0x5e6df1['find'](_0x33aa6d => _0x33aa6d['id'] == _0x51aea9['identifier']);
                        if (_0x5e7084 == null)
                            continue;
                        _0x5e7084['x'] = _0x51aea9['clientX'];
                        _0x5e7084['y'] = _0x51aea9['clientY'];
                        _0x5e7084['moved'] = !![];
                        _0x4a9b64(_0x5e7084);
                    }
                    _0x328b58['preventDefault']();
                }, {
                    'passive': ![]
                });
                var _0x781bc = function (_0x1199fd) {
                    var _0x591346 = _0x1199fd['target'];
                    while (_0x591346 && _0x591346['classList']) {
                        _0x591346['classList']['remove']('pressed');
                        _0x591346 = _0x591346['parentNode'];
                    }
                    for (var _0x22ab4e of _0x1199fd['changedTouches']) {
                        var _0x2e2f31 = _0x22ab4e['target'];
                        while (_0x2e2f31 != null) {
                            if (_0x2e2f31['tagName'] == 'INPUT') {
                                _0x2e2f31['focus']();
                                _0x1199fd['preventDefault']();
                                return;
                            }
                            if (_0x2e2f31['tagName'] == 'A') {
                                _0x2e2f31['target'] = '';
                                _0x2e2f31['click']();
                                _0x1199fd['preventDefault']();
                                return;
                            }
                            if (_0x2e2f31['onclick']) {
                                _0x2e2f31['onclick'](_0x22ab4e);
                                _0x1199fd['preventDefault']();
                                return;
                            }
                            _0x2e2f31 = _0x2e2f31['parentElement'];
                        }
                        if (_0x1199fd['target'])
                            _0x22ab4e['target']['click']();
                        if (_0x5c9004 == _0x22ab4e['identifier']) {
                            _0x5c9004 = null;
                            if (_0x158556) {
                                _0x158556['emulatedFromTouch'] = !![];
                                _0x158556['clicking'] = ![];
                                _0x158556['changed'] = !![];
                                _0x158556['newx'] = _0x22ab4e['clientX'];
                                _0x158556['newy'] = _0x22ab4e['clientY'];
                                _0x158556['client']['x'] = _0x158556['x'];
                                _0x158556['client']['y'] = _0x158556['y'];
                                _0x158556['moved'] = !![];
                            }
                        }
                        var _0x3da1a7 = _0x5e6df1['findIndex'](_0x1852ed => _0x1852ed['id'] == _0x22ab4e['identifier']);
                        if (_0x3da1a7 == -0x1)
                            continue;
                        _0x5e6df1['splice'](_0x3da1a7, 0x1);
                    }
                    _0x1199fd['preventDefault']();
                };
                window['addEventListener']('touchend', _0x781bc, {
                    'passive': ![]
                });
                window['addEventListener']('touchcancel', _0x781bc, {
                    'passive': ![]
                });
                return {
                    'renderer': _0x40b8d2,
                    'touches': _0x5e6df1,
                    'getTouch'(_0xb7c6f9) {
                        return this['touches']['find'](_0x2733e3 => _0x2733e3['id'] == _0xb7c6f9);
                    }
                };
            };
            _0x5eac64['renderer'] = function (_0xfd31f) {
                if (_0xfd31f === undefined) {
                    _0xfd31f = document['createElement']('canvas');
                    _0xfd31f['style']['position'] = 'absolute';
                    document['body']['appendChild'](_0xfd31f);
                }
                _0x5eac64['renderers']['push']({
                    'ctx': _0xfd31f['getContext']('2d'),
                    'c': _0xfd31f,
                    'clearScreen': !![],
                    'top': 0x0,
                    'left': 0x0,
                    'leftOfScreen': 0x0,
                    'rightOfScreen': 0x0,
                    'topOfScreen': 0x0,
                    'bottomOfScreen': 0x0,
                    'position': new _0x5eac64['Vector2'](0x0, 0x0),
                    'ratio': 0x1,
                    'qualitySize': 0x1,
                    'scaleFactor': 0x1,
                    'smoothingEnabled': !![],
                    'inset': {
                        'top': 0x0,
                        'bottom': 0x0,
                        'left': 0x0,
                        'right': 0x0
                    },
                    'lastResize': {
                        'lastCheck': 0x0,
                        'screenWidth': null,
                        'screenHeight': null,
                        'renderSize': null,
                        'pixelResize': 0.5,
                        'inset': {
                            'top': 0x0,
                            'bottom': 0x0,
                            'left': 0x0,
                            'right': 0x0
                        }
                    },
                    'resizeIfNeeded': function (_0x575d15) {
                        var _0x310159 = _0x5eac64['now'];
                        if (_0x310159 - this['lastResize']['lastCheck'] > 0xfa || _0x575d15) {
                            if (!_0x575d15)
                                this['lastResize']['lastCheck'] = _0x310159;
                        } else {
                            return;
                        }
                        _0x5eac64['devicePixelRatio'] = (window['devicePixelRatio'] + 0x1) / 0x2;
                        _0x5eac64['devicePixelRatio'] = _0x5eac64['normalLerp'](0x1, window['devicePixelRatio'], _0x5eac64['pixelResize']);
                        if (window['innerWidth'] >= 0x3e8) {
                            _0x5eac64['devicePixelRatio'] = 0x1;
                            _0x5eac64['pixelResize'] = 0x0;
                        }
                        this['inset']['top'] = _0x95056e('sat') * _0x5eac64['devicePixelRatio'];
                        this['inset']['bottom'] = _0x95056e('sab') * _0x5eac64['devicePixelRatio'];
                        this['inset']['left'] = _0x95056e('sal') * _0x5eac64['devicePixelRatio'];
                        this['inset']['right'] = _0x95056e('sar') * _0x5eac64['devicePixelRatio'];
                        var _0x149f2c = window['innerWidth'];
                        var _0x5e3406 = window['innerHeight'];
                        var _0x193301 = this['qualitySize'];
                        if (_0x149f2c != this['lastResize']['screenWidth'] || _0x5e3406 != this['lastResize']['screenHeight'] || _0x193301 != this['lastResize']['renderSize'] || _0x5eac64['pixelResize'] != this['lastResize']['pixelResize'] || this['inset']['top'] != this['lastResize']['inset']['top'] || this['inset']['bottom'] != this['lastResize']['inset']['bottom'] || this['inset']['left'] != this['lastResize']['inset']['left'] || this['inset']['right'] != this['lastResize']['inset']['right']) {
                            this['lastResize']['screenWidth'] = _0x149f2c;
                            this['lastResize']['screenHeight'] = _0x5e3406;
                            this['lastResize']['renderSize'] = _0x193301;
                            this['lastResize']['pixelResize'] = _0x5eac64['pixelResize'];
                            Object['assign'](this['lastResize']['inset'], this['inset']);
                        } else {
                            return;
                        }
                        var _0xc7efb4 = this;
                        if (_0x149f2c / _0xc7efb4['c']['width'] <= _0x5e3406 / _0xc7efb4['c']['height']) {
                            _0xc7efb4['c']['height'] = _0x5e3406 * _0x5eac64['devicePixelRatio'];
                            _0xc7efb4['c']['width'] = _0xc7efb4['c']['height'] * 0x10 / 0x9;
                            _0xc7efb4['ratio'] = 0x438 / _0xc7efb4['c']['height'];
                            _0xc7efb4['c']['style']['height'] = '100vh';
                            _0xc7efb4['c']['style']['width'] = _0x5e3406 / _0xc7efb4['c']['height'] * _0xc7efb4['c']['width'] + 0x2;
                            _0xc7efb4['c']['style']['top'] = '0';
                            _0xc7efb4['top'] = 0x0;
                            _0xc7efb4['c']['style']['left'] = _0x149f2c / 0x2 - _0x5e3406 / _0xc7efb4['c']['height'] * _0xc7efb4['c']['width'] / 0x2 - 0x1 + 'px';
                            _0xc7efb4['left'] = _0x149f2c / 0x2 - _0x5e3406 / _0xc7efb4['c']['height'] * _0xc7efb4['c']['width'] / 0x2 - 0x1;
                        } else {
                            _0xc7efb4['c']['width'] = _0x149f2c * _0x5eac64['devicePixelRatio'];
                            _0xc7efb4['c']['height'] = _0xc7efb4['c']['width'] * 0x9 / 0x10;
                            _0xc7efb4['ratio'] = 0x780 / _0xc7efb4['c']['width'];
                            _0xc7efb4['c']['style']['width'] = '100vw';
                            _0xc7efb4['c']['style']['height'] = _0x149f2c / _0xc7efb4['c']['width'] * _0xc7efb4['c']['height'];
                            _0xc7efb4['c']['style']['left'] = '0';
                            _0xc7efb4['left'] = 0x0;
                            _0xc7efb4['c']['style']['top'] = _0x5e3406 / 0x2 - _0x149f2c / _0xc7efb4['c']['width'] * _0xc7efb4['c']['height'] / 0x2 + 'px';
                            _0xc7efb4['top'] = _0x5e3406 / 0x2 - _0x149f2c / _0xc7efb4['c']['width'] * _0xc7efb4['c']['height'] / 0x2;
                        }
                        _0xc7efb4['leftOfScreen'] = -0x780 / 0x2 - (_0x149f2c * _0x5eac64['devicePixelRatio'] - _0xc7efb4['c']['width']) / 0x2 * _0xc7efb4['ratio'];
                        _0xc7efb4['topOfScreen'] = -0x438 / 0x2 - (_0x5e3406 * _0x5eac64['devicePixelRatio'] - _0xc7efb4['c']['height']) / 0x2 * _0xc7efb4['ratio'];
                        _0xc7efb4['rightOfScreen'] = -_0xc7efb4['leftOfScreen'];
                        _0xc7efb4['bottomOfScreen'] = -_0xc7efb4['topOfScreen'];
                        _0xc7efb4['c']['width'] /= _0x193301;
                        _0xc7efb4['c']['height'] /= _0x193301;
                        _0xc7efb4['ratio'] *= _0x193301;
                        _0xc7efb4['scaleFactor'] = _0xc7efb4['ratio'] / _0xc7efb4['qualitySize'] / 0x2;
                        _0xc7efb4['ctx']['imageSmoothingEnabled'] = _0xc7efb4['smoothingEnabled'];
                    },
                    'render': function (_0x28f842) {
                        this['resizeIfNeeded'](![]);
                        this['ctx']['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                        if (this['clearScreen'])
                            this['clear']();
                        this['ctx']['translate'](-this['position']['x'] / this['ratio'] + this['c']['width'] / 0x2, -this['position']['y'] / this['ratio'] + this['c']['height'] / 0x2);
                        _0x28f842['render'](this['ctx'], this['ratio'] * _0x28f842['camera']['ratio'], 0x1);
                    },
                    'clear': function () {
                        this['ctx']['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                        this['ctx']['clearRect'](0x0, 0x0, this['c']['width'], this['c']['height']);
                    },
                    'drawBackground': function () {
                        this['ctx']['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                        this['ctx']['fillStyle'] = '#000';
                        this['ctx']['globalAlpha'] = 0x1;
                        this['ctx']['fillRect'](0x0, 0x0, this['c']['width'], this['c']['height']);
                    }
                });
                _0x5eac64['renderers'][_0x5eac64['renderers']['length'] - 0x1]['ctx']['imageSmoothingEnabled'] = !![];
                _0x5eac64['resize'](!![]);
                _0x5eac64['oldresize']();
                _0x5eac64['resize'](!![]);
                return _0x5eac64['renderers'][_0x5eac64['renderers']['length'] - 0x1];
            };
            _0x5eac64['socket'] = function (_0x3892b4, _0x11f6e7, _0x551682, _0x45d6ed, _0xa85cb4) {
                if (_0x3892b4 === undefined)
                    return null;
                var _0x577e5d = new WebSocket(_0x3892b4);
                _0x577e5d['binaryType'] = 'arraybuffer';
                _0x577e5d['onmessage'] = _0x11f6e7 || function () { };
                _0x577e5d['onopen'] = _0x551682 || function () { };
                _0x577e5d['onclose'] = _0x45d6ed || function () { };
                _0x577e5d['onerror'] = _0xa85cb4 || function () { };
                return _0x577e5d;
            };
            _0x5eac64['resize'] = function (_0x1e78a1) {
                _0x5eac64['renderers']['forEach'](function (_0x14195e) {
                    _0x14195e['resizeIfNeeded'](_0x1e78a1);
                });
            };
            _0x5eac64['oldresize'] = function () {
                var _0x5b4f82 = 0x1;
                _0x5eac64['renderers']['forEach'](function (_0x712983) {
                    _0x5b4f82 = _0x712983['qualitySize'];
                    if (document['body']['clientWidth'] / _0x712983['c']['width'] <= document['body']['clientHeight'] / _0x712983['c']['height']) {
                        _0x712983['c']['height'] = document['body']['clientHeight'] * _0x5eac64['devicePixelRatio'];
                        _0x712983['c']['width'] = _0x712983['c']['height'] * 0x10 / 0x9;
                        _0x712983['ratio'] = 0x438 / _0x712983['c']['height'];
                        _0x712983['c']['style']['height'] = '100%';
                        _0x712983['c']['style']['width'] = document['body']['clientHeight'] / _0x712983['c']['height'] * _0x712983['c']['width'] + 0x2;
                        _0x712983['c']['style']['top'] = '0';
                        _0x712983['top'] = 0x0;
                        _0x712983['c']['style']['left'] = document['body']['clientWidth'] / 0x2 - document['body']['clientHeight'] / _0x712983['c']['height'] * _0x712983['c']['width'] / 0x2 - 0x1 + 'px';
                        _0x712983['left'] = document['body']['clientWidth'] / 0x2 - document['body']['clientHeight'] / _0x712983['c']['height'] * _0x712983['c']['width'] / 0x2 - 0x1;
                    } else {
                        _0x712983['c']['width'] = document['body']['clientWidth'] * _0x5eac64['devicePixelRatio'];
                        _0x712983['c']['height'] = _0x712983['c']['width'] * 0x9 / 0x10;
                        _0x712983['ratio'] = 0x780 / _0x712983['c']['width'];
                        _0x712983['c']['style']['width'] = '100%';
                        _0x712983['c']['style']['height'] = document['body']['clientWidth'] / _0x712983['c']['width'] * _0x712983['c']['height'];
                        _0x712983['c']['style']['left'] = '0';
                        _0x712983['left'] = 0x0;
                        _0x712983['c']['style']['top'] = document['body']['clientHeight'] / 0x2 - document['body']['clientWidth'] / _0x712983['c']['width'] * _0x712983['c']['height'] / 0x2 + 'px';
                        _0x712983['top'] = document['body']['clientHeight'] / 0x2 - document['body']['clientWidth'] / _0x712983['c']['width'] * _0x712983['c']['height'] / 0x2;
                    }
                    _0x712983['leftOfScreen'] = -0x780 / 0x2 - (document['body']['clientWidth'] * _0x5eac64['devicePixelRatio'] - _0x712983['c']['width']) / 0x2 * _0x712983['ratio'];
                    _0x712983['topOfScreen'] = -0x438 / 0x2 - (document['body']['clientHeight'] * _0x5eac64['devicePixelRatio'] - _0x712983['c']['height']) / 0x2 * _0x712983['ratio'];
                    _0x712983['rightOfScreen'] = -_0x712983['leftOfScreen'];
                    _0x712983['bottomOfScreen'] = -_0x712983['topOfScreen'];
                    _0x712983['c']['width'] /= _0x5b4f82;
                    _0x712983['c']['height'] /= _0x5b4f82;
                    _0x712983['ratio'] *= _0x5b4f82;
                    _0x712983['ctx']['imageSmoothingEnabled'] = _0x712983['smoothingEnabled'];
                });
            };
            window['addEventListener']('resize', _0x5eac64['resize'], ![]);
            _0x5eac64['object'] = function () {
                return {
                    'position': new _0x5eac64['Vector2'](0x0, 0x0),
                    'size': 0x1,
                    'opacity': 0x1,
                    'rotation': 0x0,
                    'type': 'object',
                    'background': ![],
                    'visible': !![],
                    'parent': null,
                    'objects': [],
                    'belowObjects': [],
                    'add': function (_0x4bed53) {
                        if (_0x4bed53['parent'] != null) {
                            console['log']('You can only have 1 parent per object');
                            return;
                        }
                        _0x4bed53['parent'] = this;
                        this['objects']['push'](_0x4bed53);
                    },
                    'addBelow': function (_0x3cb80a) {
                        if (_0x3cb80a['parent'] != null) {
                            console['log']('You can only have 1 parent per object');
                            return;
                        }
                        _0x3cb80a['parent'] = this;
                        this['belowObjects']['unshift'](_0x3cb80a);
                    },
                    'remove': function (_0x9a45f3) {
                        if (_0x9a45f3['type'] == 'text' && _0x9a45f3['canvas'] !== undefined) { }
                        while (this['objects']['indexOf'](_0x9a45f3) != -0x1) {
                            this['objects']['splice'](this['objects']['indexOf'](_0x9a45f3), 0x1);
                            _0x9a45f3['parent'] = null;
                        }
                        while (this['belowObjects']['indexOf'](_0x9a45f3) != -0x1) {
                            this['belowObjects']['splice'](this['belowObjects']['indexOf'](_0x9a45f3), 0x1);
                            _0x9a45f3['parent'] = null;
                        }
                    },
                    'unlink': function () {
                        if (this['parent'] != null) {
                            this['parent']['remove'](this);
                            this['parent'] = null;
                        }
                        if (this['type'] == 'text' && this['canvas'] != _0x5eac64['blankCanvas'] && this['canvas'] != null) {
                            if (_0x5eac64['recycledCanvases']['indexOf'](this['canvas']) == -0x1) {
                                _0x5eac64['recycledCanvases']['push'](this['canvas']);
                                while (_0x5eac64['usingCanvases']['indexOf'](this['canvas']) != -0x1) {
                                    _0x5eac64['usingCanvases']['splice'](_0x5eac64['usingCanvases']['indexOf'](this['canvas']), 0x1);
                                }
                                this['canvas']['width'] = this['canvas']['height'] = 0x0;
                                this['canvas'] = null;
                            }
                        }
                        while (this['objects']['length'] > 0x0) {
                            var _0x1d5d1a = this['objects'][0x0];
                            _0x1d5d1a['unlink']();
                            if (this['objects'][0x0] == _0x1d5d1a) {
                                this['objects']['splice'](0x0, 0x1);
                            }
                        }
                        while (this['belowObjects']['length'] > 0x0) {
                            var _0x1d5d1a = this['belowObjects'][0x0];
                            _0x1d5d1a['unlink']();
                            if (this['belowObjects'][0x0] == _0x1d5d1a) {
                                this['belowObjects']['splice'](0x0, 0x1);
                            }
                        }
                    },
                    'render': function (_0xe14ebd, _0x832e7c, _0x25a92f) {
                        if (!this['visible'] || _0x25a92f <= 0x0 || this['opacity'] <= 0x0) {
                            return;
                        }
                        _0x25a92f = Math['min'](Math['max'](0x0, _0x25a92f), 0x1);
                        var _0x3047c8 = this['size'];
                        _0x25a92f = Math['min'](this['opacity'] * _0x25a92f, 0x1);
                        var _0xa1567e = this['position']['x'] / _0x832e7c;
                        var _0xdd7682 = this['position']['y'] / _0x832e7c;
                        _0xe14ebd['translate'](_0xa1567e, _0xdd7682);
                        _0xe14ebd['rotate'](this['rotation']);
                        var _0x234feb = _0x832e7c / this['size'];
                        this['belowObjects']['forEach'](function (_0xbb35b3) {
                            _0xbb35b3['render'](_0xe14ebd, _0x234feb, _0x25a92f);
                        });
                        _0xe14ebd['globalAlpha'] = _0x25a92f;
                        this['renderSpecific'](_0xe14ebd, _0x234feb);
                        this['objects']['forEach'](function (_0x2a4e75) {
                            _0x2a4e75['render'](_0xe14ebd, _0x234feb, _0x25a92f);
                        });
                        _0xe14ebd['rotate'](-this['rotation']);
                        _0xe14ebd['translate'](-_0xa1567e, -_0xdd7682);
                    },
                    'renderSpecific': function (_0x49652c, _0x474754) {
                        return;
                    },
                    'absolutePosition': function (_0x5c9758) {
                        _0x5c9758['x'] = this['position']['x'];
                        _0x5c9758['y'] = this['position']['y'];
                        var _0x1f6edc = this['parent'];
                        while (_0x1f6edc != null) {
                            _0x5c9758['x'] += _0x1f6edc['position']['x'];
                            _0x5c9758['y'] += _0x1f6edc['position']['y'];
                            _0x1f6edc = _0x1f6edc['parent'];
                        }
                        return _0x5c9758;
                    }
                };
            };
            _0x5eac64['image'] = function (_0x391b22, _0x511c46, _0x5b5b6a, _0x26d01b, _0x391733, _0x35c723) {
                var _0x2951cd = new _0x5eac64['object']();
                _0x2951cd['image'] = _0x391b22 || null;
                if (_0x2951cd['image'] == null || _0x2951cd === undefined) { }
                _0x2951cd['position'] = new _0x5eac64['Vector2'](_0x511c46 || 0x0, _0x5b5b6a || 0x0);
                _0x2951cd['width'] = _0x26d01b || 0x64;
                _0x2951cd['height'] = _0x391733 || 0x64;
                _0x2951cd['opacity'] = _0x35c723 || 0x1;
                _0x2951cd['type'] = 'image';
                _0x2951cd['renderSpecific'] = function (_0x18ca7f, _0xd38068) {
                    var _0x545be6 = 0x1 / _0xd38068;
                    try {
                        _0x18ca7f['drawImage'](this['image'], -this['width'] * 0.5 * _0x545be6, -this['height'] * 0.5 * _0x545be6, this['width'] * _0x545be6, this['height'] * _0x545be6);
                    } catch (_0x84c11e) {
                        _0x18ca7f['fillStyle'] = '#000';
                        _0x18ca7f['globalAlpha'] = 0x1;
                        _0x18ca7f['fillRect'](-this['width'] * 0.5 * _0x545be6, -this['height'] * 0.5 * _0x545be6, this['width'] * _0x545be6, this['height'] * _0x545be6);
                    }
                };
                return _0x2951cd;
            };
            _0x5eac64['prerender'] = function (_0x7afc99, _0xcc12d2, _0x4bfbd8, _0x4dc044) {
                var _0x581508 = _0x5eac64['getCanvas']();
                var _0x1229fc = _0x581508['getContext']('2d');
                if (_0x4bfbd8 === undefined) {
                    _0x4bfbd8 = _0xcc12d2;
                }
                _0x4dc044 = _0x4dc044 || 0x1;
                _0x581508['width'] = Math['max'](_0xcc12d2 * 0x2 * _0x4dc044, 0x1);
                _0x581508['height'] = Math['max'](_0x4bfbd8 * 0x2 * _0x4dc044, 0x1);
                _0x1229fc['translate'](_0x581508['width'] / 0x2, _0x581508['height'] / 0x2);
                var _0x4e0519 = _0x7afc99['position']['x'];
                var _0x5d38b6 = _0x7afc99['position']['y'];
                _0x7afc99['position'] = new _0x5eac64['Vector2']();
                _0x7afc99['render'](_0x1229fc, 0.5, 0x1);
                return new _0x5eac64['image'](_0x581508, _0x4e0519, _0x5d38b6, _0xcc12d2, _0x4bfbd8, _0x7afc99['opacity']);
            };
            _0x5eac64['textImage'] = function (_0x218246, _0x2e5a70, _0x46821d, _0x6b1af0, _0x5c17c6, _0x47b8ad, _0x49b5f1, _0x20e7d0, _0x171035) {
                var _0x568d24;
                if (_0x218246 == null || _0x218246 === undefined) {
                    _0x568d24 = _0x5eac64['getCanvas']();
                } else {
                    _0x568d24 = _0x218246;
                }
                var _0x1b0db6 = _0x568d24['getContext']('2d');
                _0x5c17c6 *= 0x2;
                _0x1b0db6['font'] = _0x47b8ad + ' ' + _0x5c17c6 + 'px ' + _0x6b1af0;
                _0x1b0db6['fillStyle'] = _0x46821d;
                _0x1b0db6['strokeStyle'] = _0x46821d;
                if (_0x49b5f1) {
                    _0x1b0db6['lineWidth'] = _0x20e7d0 * 0x2;
                }
                var _0x58f42c = _0x1b0db6['measureText'](_0x2e5a70)['width'];
                var _0x21f1da = _0x5c17c6;
                if (_0x49b5f1) {
                    _0x58f42c += _0x20e7d0 * 0x2;
                    _0x21f1da += _0x20e7d0 * 0x2;
                }
                if (!_0x171035) {
                    _0x568d24['width'] = Math['max'](_0x58f42c, 0x1);
                    _0x568d24['height'] = Math['max'](_0x21f1da, 0x1);
                }
                _0x1b0db6['fillStyle'] = '#000';
                _0x1b0db6['font'] = _0x47b8ad + ' ' + _0x5c17c6 + 'px ' + _0x6b1af0;
                _0x1b0db6['fillStyle'] = _0x46821d;
                _0x1b0db6['strokeStyle'] = _0x46821d;
                _0x1b0db6['imageSmoothingEnabled'] = ![];
                if (_0x49b5f1) {
                    _0x1b0db6['lineWidth'] = _0x20e7d0 * 0x2;
                    _0x1b0db6['miterLimit'] = 0.1;
                    _0x1b0db6['strokeText'](_0x2e5a70, _0x20e7d0, _0x5c17c6 / 0x4 + _0x21f1da / 0x2 + _0x20e7d0 / 0x2);
                } else {
                    _0x1b0db6['fillText'](_0x2e5a70, -(_0x58f42c - _0x568d24['width']) / 0x2, _0x5c17c6 / 0x4 + _0x21f1da / 0x2 - (_0x21f1da - _0x568d24['height']) / 0x2);
                }
                return _0x568d24;
            };
            _0x5eac64['flushTextRenderQueue'] = function () {
                while (_0x5eac64['textRenderQueue']['length'] > 0x0) {
                    var _0x23eaa7 = _0x5eac64['textRenderQueue']['splice'](0x0, 0x1)[0x0];
                    _0x23eaa7['redraw']();
                }
            };
            _0x5eac64['blankCanvas'] = document['createElement']('canvas');
            _0x5eac64['textRenderQueue'] = [];
            _0x5eac64['savedTexts'] = [];
            _0x5eac64['savedStrokes'] = [];
            _0x5eac64['findText'] = function (_0x1ebefc, _0x293b83) {
                for (var _0x3e17d2 = 0x0; _0x3e17d2 < _0x1ebefc['length']; _0x3e17d2++) {
                    var _0x340c5e = _0x1ebefc[_0x3e17d2];
                    if (_0x340c5e['text'] == _0x293b83['text'] && _0x340c5e['fontSize'] == _0x293b83['fontSize'] && _0x340c5e['textSize'] == _0x293b83['fontSize']) {
                        return _0x340c5e;
                    }
                }
                return null;
            };
            _0x5eac64['text'] = function (_0x464268, _0x5a85e9, _0x5165cf, _0x632804, _0x50b8f7, _0x3024c4, _0x3a6ac0, _0x3a0052, _0x43c079) {
                var _0xc99e66 = new _0x5eac64['object']();
                _0xc99e66['text'] = _0x464268 || '';
                _0xc99e66['position'] = new _0x5eac64['Vector2'](_0x5a85e9 || 0x0, _0x5165cf || 0x0);
                _0xc99e66['fillStyle'] = _0x632804 || '#000';
                _0xc99e66['font'] = _0x50b8f7 || 'Arial';
                _0xc99e66['fontSize'] = _0x3024c4 || 0x1e;
                _0xc99e66['otherParams'] = _0x3a6ac0 || '';
                _0xc99e66['opacity'] = _0x3a0052 || 0x1;
                _0xc99e66['type'] = 'text';
                _0xc99e66['width'] = 0x0;
                _0xc99e66['align'] = _0x43c079 || 'center';
                _0xc99e66['ticksAlive'] = Math['floor'](Math['random']() * 0xc7);
                _0xc99e66['oldText'] = '';
                _0xc99e66['oldFont'] = _0xc99e66['font'];
                _0xc99e66['oldFontSize'] = _0xc99e66['fontSize'];
                _0xc99e66['fontLoaded'] = ![];
                if (document['fonts'] !== undefined) {
                    _0xc99e66['fontLoaded'] = document['fonts']['check'](_0xc99e66['otherParams'] + ' ' + _0x3024c4 + 'px ' + _0x50b8f7);
                }
                _0xc99e66['canvas'] = _0x5eac64['blankCanvas'];
                _0xc99e66['save'] = function () {
                    if (found == null) {
                        _0x5eac64['savedTexts']['push'](_0xc99e66);
                    }
                };
                _0xc99e66['redraw'] = function () {
                    var _0x464268 = this;
                    if (_0x464268['canvas'] == _0x5eac64['blankCanvas']) {
                        _0x464268['canvas'] = _0x5eac64['getCanvas']();
                    }
                    _0x464268['canvas'] = _0x5eac64['textImage'](_0x464268['canvas'], _0x464268['text'], _0x464268['fillStyle'], _0x464268['font'], _0x464268['fontSize'], _0x464268['otherParams']);
                    _0x464268['oldText'] = _0x464268['text'];
                    _0x464268['oldFont'] = _0x464268['font'];
                    _0x464268['oldFontSize'] = _0x464268['fontSize'];
                    _0x464268['width'] = _0x464268['canvas']['width'] / 0x2;
                    if (document['fonts'] == undefined) {
                        return;
                    }
                    _0x464268['fontLoaded'] = document['fonts']['check'](_0x464268['otherParams'] + ' ' + _0x464268['fontSize'] + 'px ' + _0x464268['font']);
                };
                _0xc99e66['renderSpecific'] = function (_0x56d055, _0x325e5a) {
                    this['ticksAlive']++;
                    if (document['fonts'] == undefined) {
                        this['fontLoaded'] = !![];
                        this['redraw']();
                    }
                    if (!this['fontLoaded'] || this['canvas'] === _0x5eac64['blankCanvas'] || this['oldText'] != this['text'] || this['oldFont'] != this['font'] || this['oldFontSize'] != this['fontSize']) {
                        this['redraw']();
                    }
                    if (this['ticksAlive'] > 0x3e8) {
                        this['ticksAlive'] = 0xa;
                    }
                    _0x325e5a *= 0x2;
                    try {
                        switch (_0xc99e66['align']) {
                            case 'right':
                                _0x56d055['drawImage'](this['canvas'], -this['canvas']['width'] / _0x325e5a, -this['canvas']['height'] / 0x2 / _0x325e5a, this['canvas']['width'] / _0x325e5a, this['canvas']['height'] / _0x325e5a);
                                break;
                            case 'left':
                                _0x56d055['drawImage'](this['canvas'], 0x0, -this['canvas']['height'] / 0x2 / _0x325e5a, this['canvas']['width'] / _0x325e5a, this['canvas']['height'] / _0x325e5a);
                                break;
                            default:
                                _0x56d055['drawImage'](this['canvas'], -this['canvas']['width'] / 0x2 / _0x325e5a, -this['canvas']['height'] / 0x2 / _0x325e5a, this['canvas']['width'] / _0x325e5a, this['canvas']['height'] / _0x325e5a);
                                break;
                        }
                    } catch (_0x589e4e) { }
                };
                return _0xc99e66;
            };
            _0x5eac64['strokeText'] = function (_0xd2e35d, _0x2c311b, _0x5a728b, _0x5e0e1c, _0xd8e42b, _0x2e44b5, _0x4856a8, _0x3e42bf, _0xe2c8c1) {
                var _0x17af75 = new _0x5eac64['object']();
                _0x17af75['text'] = _0xd2e35d || '';
                _0x17af75['position'] = new _0x5eac64['Vector2'](_0x2c311b || 0x0, _0x5a728b || 0x0);
                _0x17af75['strokeStyle'] = _0x5e0e1c || '#000';
                _0x17af75['font'] = _0xd8e42b || 'Arial';
                _0x17af75['fontSize'] = _0x2e44b5 || 0x1e;
                _0x17af75['otherParams'] = _0x4856a8 || '';
                _0x17af75['opacity'] = _0x3e42bf || 0x1;
                _0x17af75['type'] = 'text';
                _0x17af75['width'] = 0x0;
                _0x17af75['align'] = _0xe2c8c1 || 'center';
                _0x17af75['lineWidth'] = 0x2;
                _0x17af75['ticksAlive'] = Math['floor'](Math['random']() * 0xc7);
                _0x17af75['oldText'] = _0x17af75['text'];
                _0x17af75['oldFont'] = _0x17af75['font'];
                _0x17af75['oldFontSize'] = _0x17af75['fontSize'];
                _0x17af75['oldLineWidth'] = _0x17af75['lineWidth'];
                _0x17af75['canvas'] = _0x5eac64['blankCanvas'];
                _0x17af75['fontLoaded'] = ![];
                if (document['fonts'] !== undefined) {
                    _0x17af75['fontLoaded'] = document['fonts']['check'](_0x17af75['otherParams'] + ' ' + _0x2e44b5 + 'px ' + _0xd8e42b);
                }
                _0x17af75['save'] = function () {
                    if (found == null) {
                        _0x5eac64['savedStrokes']['push'](_0x17af75);
                    }
                };
                _0x17af75['redraw'] = function () {
                    if (this['canvas'] == _0x5eac64['blankCanvas']) {
                        this['canvas'] = _0x5eac64['getCanvas']();
                    }
                    this['canvas'] = _0x5eac64['textImage'](this['canvas'], this['text'], this['strokeStyle'], this['font'], this['fontSize'], this['otherParams'], !![], this['lineWidth']);
                    this['canvas'] = _0x5eac64['textImage'](this['canvas'], this['text'], this['strokeStyle'], this['font'], this['fontSize'], this['otherParams'], ![], this['lineWidth'], !![]);
                    this['oldText'] = this['text'];
                    this['oldFont'] = this['font'];
                    this['oldFontSize'] = this['fontSize'];
                    this['oldLineWidth'] = this['lineWidth'];
                    this['width'] = this['canvas']['width'] / 0x2;
                    if (document['fonts'] == undefined) {
                        return;
                    }
                    this['fontLoaded'] = document['fonts']['check'](this['otherParams'] + ' ' + this['fontSize'] + 'px ' + this['font']);
                };
                _0x17af75['renderSpecific'] = function (_0x484b45, _0x5338bb) {
                    _0x5338bb *= 0x2;
                    this['ticksAlive']++;
                    if (document['fonts'] == undefined) {
                        this['fontLoaded'] = !![];
                        this['redraw']();
                    }
                    if (!this['fontLoaded'] || this['canvas'] === undefined || this['oldText'] != this['text'] || this['oldFont'] != this['font'] || this['oldFontSize'] != this['fontSize'] || this['oldLineWidth'] != this['lineWidth']) {
                        this['redraw']();
                    }
                    if (this['ticksAlive'] > 0x3e8) {
                        this['ticksAlive'] = 0xa;
                    }
                    try {
                        switch (_0x17af75['align']) {
                            case 'right':
                                _0x484b45['drawImage'](this['canvas'], -this['canvas']['width'] / _0x5338bb, -this['canvas']['height'] / 0x2 / _0x5338bb, this['canvas']['width'] / _0x5338bb, this['canvas']['height'] / _0x5338bb);
                                break;
                            case 'left':
                                _0x484b45['drawImage'](this['canvas'], -this['lineWidth'] / _0x5338bb, -this['canvas']['height'] / 0x2 / _0x5338bb, this['canvas']['width'] / _0x5338bb, this['canvas']['height'] / _0x5338bb);
                                break;
                            default:
                                _0x484b45['drawImage'](this['canvas'], -this['canvas']['width'] / 0x2 / _0x5338bb, -this['canvas']['height'] / 0x2 / _0x5338bb, this['canvas']['width'] / _0x5338bb, this['canvas']['height'] / _0x5338bb);
                                break;
                        }
                    } catch (_0xc224e) { }
                };
                return _0x17af75;
            };
            _0x5eac64['Vector2'] = function (_0x1f9000, _0x2bb992) {
                return {
                    'x': _0x1f9000 || 0x0,
                    'y': _0x2bb992 || 0x0,
                    'clone': function () {
                        return new _0x5eac64['Vector2'](this['x'], this['y']);
                    }
                };
            };
            _0x5eac64['Vector3'] = function (_0x421324, _0x549877, _0x120c39) {
                return {
                    'x': _0x421324 || 0x0,
                    'y': _0x549877 || 0x0,
                    'z': _0x120c39 || 0x0,
                    'clone': function () {
                        return new _0x5eac64['Vector3'](this['x'], this['y'], this['z']);
                    }
                };
            };
            _0x5eac64['Vector4'] = function (_0x8f624d, _0x1d16e6, _0x127147, _0x177e0e) {
                return {
                    'x': _0x8f624d || 0x0,
                    'y': _0x1d16e6 || 0x0,
                    'z': _0x127147 || 0x0,
                    'w': _0x177e0e || 0x0,
                    'clone': function () {
                        return new _0x5eac64['Vector4'](this['x'], this['y'], this['z'], this['w']);
                    }
                };
            };
            _0x5eac64['controls'] = function () {
                return {
                    'up': ![],
                    'down': ![],
                    'left': ![],
                    'right': ![],
                    'space': ![],
                    'shift': ![],
                    'changed': ![],
                    'clone': function () {
                        var _0x361381 = new _0x5eac64['controls']();
                        _0x361381['up'] = this['up'];
                        _0x361381['down'] = this['down'];
                        _0x361381['left'] = this['left'];
                        _0x361381['right'] = this['right'];
                        _0x361381['space'] = this['space'];
                        _0x361381['shift'] = this['shift'];
                        return _0x361381;
                    }
                };
            };
            _0x5eac64['multiplayerControls'] = function () {
                return {
                    'key_up': ![],
                    'key_down': ![],
                    'key_left': ![],
                    'key_right': ![],
                    'key_w': ![],
                    'key_s': ![],
                    'key_a': ![],
                    'key_d': ![],
                    'space': ![],
                    'shift': ![],
                    'changed': ![]
                };
            };
            _0x5eac64['keyboard'] = function (_0x469b8c) {
                _0x469b8c = _0x469b8c || new _0x5eac64['controls']();
                _0x469b8c['changedKeys'] = [];
                function _0x1c995c(_0x25ad0f) {
                    var _0x407087 = ![];
                    if (_0x25ad0f['keyCode'] == 0x25 || _0x25ad0f['keyCode'] == 0x41) {
                        if (!_0x469b8c['left']) {
                            _0x407087 = !![];
                            _0x469b8c['left'] = !![];
                            _0x469b8c['changedKeys']['push']('left');
                        }
                    } else if (_0x25ad0f['keyCode'] == 0x26 || _0x25ad0f['keyCode'] == 0x57) {
                        if (!_0x469b8c['up']) {
                            _0x407087 = !![];
                            _0x469b8c['up'] = !![];
                            _0x469b8c['changedKeys']['push']('up');
                        }
                    } else if (_0x25ad0f['keyCode'] == 0x27 || _0x25ad0f['keyCode'] == 0x44) {
                        if (!_0x469b8c['right']) {
                            _0x407087 = !![];
                            _0x469b8c['right'] = !![];
                            _0x469b8c['changedKeys']['push']('right');
                        }
                    } else if (_0x25ad0f['keyCode'] == 0x28 || _0x25ad0f['keyCode'] == 0x53) {
                        if (!_0x469b8c['down']) {
                            _0x407087 = !![];
                            _0x469b8c['down'] = !![];
                            _0x469b8c['changedKeys']['push']('down');
                        }
                    } else if (_0x25ad0f['keyCode'] == 0x20) {
                        if (!_0x469b8c['space']) {
                            _0x407087 = !![];
                            _0x469b8c['space'] = !![];
                            _0x469b8c['changedKeys']['push']('space');
                        }
                    } else if (_0x25ad0f['keyCode'] == 0x10) {
                        if (!_0x469b8c['shift']) {
                            _0x407087 = !![];
                            _0x469b8c['shift'] = !![];
                            _0x469b8c['changedKeys']['push']('shift');
                        }
                    }
                    _0x469b8c['changed'] = _0x407087;
                }
                window['addEventListener']('keydown', _0x1c995c, ![]);
                function _0x56d8d8(_0x148eeb) {
                    if (_0x148eeb['keyCode'] == 0x25 || _0x148eeb['keyCode'] == 0x41) {
                        _0x469b8c['left'] = ![];
                        _0x469b8c['changedKeys']['push']('left');
                    } else if (_0x148eeb['keyCode'] == 0x26 || _0x148eeb['keyCode'] == 0x57) {
                        _0x469b8c['up'] = ![];
                        _0x469b8c['changedKeys']['push']('up');
                    } else if (_0x148eeb['keyCode'] == 0x27 || _0x148eeb['keyCode'] == 0x44) {
                        _0x469b8c['right'] = ![];
                        _0x469b8c['changedKeys']['push']('right');
                    } else if (_0x148eeb['keyCode'] == 0x28 || _0x148eeb['keyCode'] == 0x53) {
                        _0x469b8c['down'] = ![];
                        _0x469b8c['changedKeys']['push']('down');
                    } else if (_0x148eeb['keyCode'] == 0x20) {
                        _0x469b8c['space'] = ![];
                        _0x469b8c['changedKeys']['push']('space');
                    } else if (_0x148eeb['keyCode'] == 0x10) {
                        _0x469b8c['shift'] = ![];
                        _0x469b8c['changedKeys']['push']('shift');
                    }
                    _0x469b8c['changed'] = !![];
                }
                window['addEventListener']('keyup', _0x56d8d8, ![]);
                return _0x469b8c;
            };
            _0x5eac64['multiplayerKeyboard'] = function (_0x32803b) {
                _0x32803b = _0x32803b || new _0x5eac64['controls']();
                function _0x35305a(_0x26d540) {
                    var _0x117307 = ![];
                    if (_0x26d540['keyCode'] == 0x41) {
                        if (!_0x32803b['key_a']) {
                            _0x117307 = !![];
                            _0x32803b['key_a'] = !![];
                        }
                    } else if (_0x26d540['keyCode'] == 0x25) {
                        if (!_0x32803b['key_left']) {
                            _0x117307 = !![];
                            _0x32803b['key_left'] = !![];
                        }
                    } else if (_0x26d540['keyCode'] == 0x57) {
                        if (!_0x32803b['key_w']) {
                            _0x117307 = !![];
                            _0x32803b['key_w'] = !![];
                        }
                    } else if (_0x26d540['keyCode'] == 0x26) {
                        if (!_0x32803b['key_up']) {
                            _0x117307 = !![];
                            _0x32803b['key_up'] = !![];
                        }
                    } else if (_0x26d540['keyCode'] == 0x44) {
                        if (!_0x32803b['key_d']) {
                            _0x117307 = !![];
                            _0x32803b['key_d'] = !![];
                        }
                    } else if (_0x26d540['keyCode'] == 0x27) {
                        if (!_0x32803b['key_right']) {
                            _0x117307 = !![];
                            _0x32803b['key_right'] = !![];
                        }
                    } else if (_0x26d540['keyCode'] == 0x53) {
                        if (!_0x32803b['key_s']) {
                            _0x117307 = !![];
                            _0x32803b['key_s'] = !![];
                        }
                    } else if (_0x26d540['keyCode'] == 0x28) {
                        if (!_0x32803b['key_down']) {
                            _0x117307 = !![];
                            _0x32803b['key_down'] = !![];
                        }
                    } else if (_0x26d540['keyCode'] == 0x20) {
                        if (!_0x32803b['space']) {
                            _0x117307 = !![];
                            _0x32803b['space'] = !![];
                        }
                    } else if (_0x26d540['keyCode'] == 0x10) {
                        if (!_0x32803b['shift']) {
                            _0x117307 = !![];
                            _0x32803b['shift'] = !![];
                        }
                    }
                    _0x32803b['changed'] = _0x117307;
                }
                window['addEventListener']('keydown', _0x35305a, ![]);
                function _0x469636(_0x52fb6f) {
                    if (_0x52fb6f['keyCode'] == 0x25)
                        _0x32803b['key_left'] = ![];
                    else if (_0x52fb6f['keyCode'] == 0x41)
                        _0x32803b['key_a'] = ![];
                    else if (_0x52fb6f['keyCode'] == 0x26)
                        _0x32803b['key_up'] = ![];
                    else if (_0x52fb6f['keyCode'] == 0x57)
                        _0x32803b['key_w'] = ![];
                    else if (_0x52fb6f['keyCode'] == 0x27)
                        _0x32803b['key_right'] = ![];
                    else if (_0x52fb6f['keyCode'] == 0x44)
                        _0x32803b['key_d'] = ![];
                    else if (_0x52fb6f['keyCode'] == 0x28)
                        _0x32803b['key_down'] = ![];
                    else if (_0x52fb6f['keyCode'] == 0x53)
                        _0x32803b['key_s'] = ![];
                    else if (_0x52fb6f['keyCode'] == 0x20)
                        _0x32803b['space'] = ![];
                    else if (_0x52fb6f['keyCode'] == 0x10)
                        _0x32803b['shift'] = ![];
                    _0x32803b['changed'] = !![];
                }
                window['addEventListener']('keyup', _0x469636, ![]);
                return _0x32803b;
            };
            _0x5eac64['rectangle'] = function (_0x52538d, _0x401bfd, _0x446ff4, _0x2ad378, _0x13fb87, _0x1ad23a) {
                var _0x1faca5 = new _0x5eac64['object']();
                _0x1faca5['position'] = new _0x5eac64['Vector2'](_0x52538d || 0x0, _0x401bfd || 0x0);
                _0x1faca5['width'] = _0x446ff4 || 0x64;
                _0x1faca5['height'] = _0x2ad378 || 0x64;
                _0x1faca5['color'] = _0x13fb87 || '#000000';
                _0x1faca5['opacity'] = _0x1ad23a || 0x1;
                _0x1faca5['type'] = 'rectangle';
                _0x1faca5['renderSpecific'] = function (_0x1392c6, _0x12975a) {
                    _0x1392c6['fillStyle'] = this['color'];
                    _0x1392c6['fillRect'](-this['width'] * this['size'] / 0x2 / _0x12975a, -this['height'] * this['size'] / 0x2 / _0x12975a, this['width'] * this['size'] / _0x12975a, this['height'] * this['size'] / _0x12975a);
                };
                return _0x1faca5;
            };
            _0x5eac64['strokeRectangle'] = function (_0x55df74, _0x553c07, _0x18b7a9, _0x4f6f7d, _0x1ecaa8, _0x2a021b, _0x151ce8) {
                var _0x301d4d = new _0x5eac64['object']();
                _0x301d4d['position'] = new _0x5eac64['Vector2'](_0x55df74 || 0x0, _0x553c07 || 0x0);
                _0x301d4d['width'] = _0x18b7a9 || 0x64;
                _0x301d4d['height'] = _0x4f6f7d || 0x64;
                _0x301d4d['color'] = _0x1ecaa8 || '#000000';
                _0x301d4d['opacity'] = _0x151ce8 || 0x1;
                _0x301d4d['lineWidth'] = _0x2a021b || 0x5;
                _0x301d4d['type'] = 'rectangle';
                _0x301d4d['renderSpecific'] = function (_0x2a51e1, _0x5226cc) {
                    _0x2a51e1['strokeStyle'] = this['color'];
                    _0x2a51e1['lineWidth'] = this['lineWidth'] * this['size'] / _0x5226cc;
                    _0x2a51e1['strokeRect'](-this['width'] * this['size'] / 0x2 / _0x5226cc, -this['height'] * this['size'] / 0x2 / _0x5226cc, this['width'] * this['size'] / _0x5226cc, this['height'] * this['size'] / _0x5226cc);
                };
                return _0x301d4d;
            };
            _0x5eac64['roundRectangle'] = function (_0x11e1bd, _0x12f311, _0x4c7041, _0x49b6aa, _0x31b750, _0x5d7f8a) {
                var _0x3821c2 = new _0x5eac64['object']();
                _0x3821c2['position'] = new _0x5eac64['Vector2'](_0x11e1bd || 0x0, _0x12f311 || 0x0);
                _0x3821c2['width'] = _0x4c7041 || 0x64;
                _0x3821c2['height'] = _0x49b6aa || 0x64;
                _0x3821c2['color'] = _0x5d7f8a || '#000000';
                _0x3821c2['radius'] = _0x31b750 || 0x0;
                _0x3821c2['type'] = 'roundRectangle';
                _0x3821c2['strokeStyle'] = -0x1;
                _0x3821c2['lineWidth'] = 0x4;
                _0x3821c2['renderSpecific'] = function (_0x32bc83, _0x3f2d42) {
                    _0x32bc83['fillStyle'] = this['color'];
                    _0x32bc83['beginPath']();
                    _0x32bc83['moveTo']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x3f2d42, -this['height'] * this['size'] / 0x2 / _0x3f2d42);
                    _0x32bc83['lineTo']((this['width'] / 0x2 - this['radius']) * this['size'] / _0x3f2d42, -this['height'] * this['size'] / 0x2 / _0x3f2d42);
                    _0x32bc83['arc']((this['width'] / 0x2 - this['radius']) * this['size'] / _0x3f2d42, (-this['height'] / 0x2 + this['radius']) * this['size'] / _0x3f2d42, this['radius'] * this['size'] / _0x3f2d42, Math['PI'] * 0x3 / 0x2, Math['PI'] * 0x2);
                    _0x32bc83['lineTo'](this['width'] * this['size'] / 0x2 / _0x3f2d42, (this['height'] / 0x2 - this['radius']) * this['size'] / _0x3f2d42);
                    _0x32bc83['arc']((this['width'] / 0x2 - this['radius']) * this['size'] / _0x3f2d42, (this['height'] / 0x2 - this['radius']) * this['size'] / _0x3f2d42, this['radius'] * this['size'] / _0x3f2d42, 0x0, Math['PI'] / 0x2);
                    _0x32bc83['lineTo']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x3f2d42, this['height'] * this['size'] / 0x2 / _0x3f2d42);
                    _0x32bc83['arc']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x3f2d42, (this['height'] / 0x2 - this['radius']) * this['size'] / _0x3f2d42, this['radius'] * this['size'] / _0x3f2d42, Math['PI'] / 0x2, Math['PI']);
                    _0x32bc83['lineTo'](-this['width'] * this['size'] / 0x2 / _0x3f2d42, (-this['height'] / 0x2 + this['radius']) * this['size'] / _0x3f2d42);
                    _0x32bc83['arc']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x3f2d42, (-this['height'] / 0x2 + this['radius']) * this['size'] / _0x3f2d42, this['radius'] * this['size'] / _0x3f2d42, Math['PI'], Math['PI'] * 0x3 / 0x2);
                    _0x32bc83['fill']();
                    if (this['strokeStyle'] != -0x1) {
                        _0x32bc83['strokeStyle'] = this['strokeStyle'];
                        _0x32bc83['lineWidth'] = this['lineWidth'] * this['size'] / _0x3f2d42;
                        var _0x20a846 = this['width'];
                        var _0x11a4ed = this['height'];
                        this['width'] -= this['lineWidth'] / 0x2;
                        this['height'] -= this['lineWidth'] / 0x2;
                        _0x32bc83['beginPath']();
                        _0x32bc83['moveTo']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x3f2d42, -this['height'] * this['size'] / 0x2 / _0x3f2d42);
                        _0x32bc83['lineTo']((this['width'] / 0x2 - this['radius']) * this['size'] / _0x3f2d42, -this['height'] * this['size'] / 0x2 / _0x3f2d42);
                        _0x32bc83['arc']((this['width'] / 0x2 - this['radius']) * this['size'] / _0x3f2d42, (-this['height'] / 0x2 + this['radius']) * this['size'] / _0x3f2d42, this['radius'] * this['size'] / _0x3f2d42, Math['PI'] * 0x3 / 0x2, Math['PI'] * 0x2);
                        _0x32bc83['lineTo'](this['width'] * this['size'] / 0x2 / _0x3f2d42, (this['height'] / 0x2 - this['radius']) * this['size'] / _0x3f2d42);
                        _0x32bc83['arc']((this['width'] / 0x2 - this['radius']) * this['size'] / _0x3f2d42, (this['height'] / 0x2 - this['radius']) * this['size'] / _0x3f2d42, this['radius'] * this['size'] / _0x3f2d42, 0x0, Math['PI'] / 0x2);
                        _0x32bc83['lineTo']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x3f2d42, this['height'] * this['size'] / 0x2 / _0x3f2d42);
                        _0x32bc83['arc']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x3f2d42, (this['height'] / 0x2 - this['radius']) * this['size'] / _0x3f2d42, this['radius'] * this['size'] / _0x3f2d42, Math['PI'] / 0x2, Math['PI']);
                        _0x32bc83['lineTo'](-this['width'] * this['size'] / 0x2 / _0x3f2d42, (-this['height'] / 0x2 + this['radius']) * this['size'] / _0x3f2d42);
                        _0x32bc83['arc']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x3f2d42, (-this['height'] / 0x2 + this['radius']) * this['size'] / _0x3f2d42, this['radius'] * this['size'] / _0x3f2d42, Math['PI'], Math['PI'] * 0x3 / 0x2);
                        _0x32bc83['stroke']();
                        this['width'] = _0x20a846;
                        this['height'] = _0x11a4ed;
                    }
                };
                return _0x3821c2;
            };
            _0x5eac64['blurredRectangle'] = function (_0x395012, _0x58c9d7, _0x5b889a, _0x19cb8e, _0x260b88, _0x2fdc06, _0x8089d5) {
                _0x395012 = _0x395012 || 0x0;
                _0x58c9d7 = _0x58c9d7 || 0x0;
                _0x5b889a = _0x5b889a || 0x64;
                _0x19cb8e = _0x19cb8e || 0x64;
                _0x260b88 = _0x260b88 || '#000000';
                _0x2fdc06 = _0x2fdc06 || 0x3;
                _0x8089d5 = _0x8089d5 || 0x1;
                var _0x2964fe = document['createElement']('canvas');
                _0x2964fe['width'] = _0x5b889a + _0x2fdc06 * 0x4;
                _0x2964fe['height'] = _0x19cb8e + _0x2fdc06 * 0x4;
                var _0x5b6349 = _0x2964fe['getContext']('2d');
                _0x5b6349['fillStyle'] = _0x260b88;
                _0x5b6349['filter'] = 'blur( ' + _0x2fdc06 + 'px )';
                _0x5b6349['globalAlpha'] = _0x8089d5;
                _0x5b6349['fillRect'](_0x2fdc06 * 0x2, _0x2fdc06 * 0x2, _0x5b889a, _0x19cb8e);
                return new _0x5eac64['image'](_0x2964fe, _0x395012, _0x58c9d7, _0x5b889a, _0x19cb8e);
            };
            _0x5eac64['polygon'] = function (_0x455c0c, _0x107363, _0x98c445, _0x1f135f) {
                var _0x4bdf48 = new _0x5eac64['object']();
                _0x4bdf48['position'] = new _0x5eac64['Vector2'](_0x455c0c || 0x0, _0x107363 || 0x0);
                _0x4bdf48['points'] = _0x98c445 || [new _0x5eac64['Vector2'](-0x32, 0x28), new _0x5eac64['Vector2'](0x0, -0x28), new _0x5eac64['Vector2'](0x32, 0x28)];
                _0x4bdf48['color'] = _0x1f135f || '#000000';
                _0x4bdf48['shouldStroke'] = ![];
                _0x4bdf48['strokeColor'] = '#000000';
                _0x4bdf48['lineWidth'] = 0x3;
                _0x4bdf48['type'] = 'polygon';
                _0x4bdf48['renderSpecific'] = function (_0x5eff3a, _0x3f3419) {
                    var _0x3d236e = _0x5eff3a['miterLimit'];
                    _0x5eff3a['miterLimit'] = 0xa;
                    _0x5eff3a['fillStyle'] = this['color'];
                    _0x5eff3a['lineWidth'] = this['lineWidth'] * this['size'] / _0x3f3419;
                    _0x5eff3a['beginPath']();
                    _0x5eff3a['moveTo'](this['points'][0x0]['x'] * this['size'] / _0x3f3419, this['points'][0x0]['y'] * this['size'] / _0x3f3419);
                    for (var _0x4d4f7a = 0x1; _0x4d4f7a < this['points']['length']; _0x4d4f7a++) {
                        _0x5eff3a['lineTo'](this['points'][_0x4d4f7a]['x'] * this['size'] / _0x3f3419, this['points'][_0x4d4f7a]['y'] * this['size'] / _0x3f3419);
                    }
                    _0x5eff3a['closePath']();
                    if (this['shouldStroke']) {
                        _0x5eff3a['strokeStyle'] = this['strokeColor'];
                        _0x5eff3a['stroke']();
                    }
                    _0x5eff3a['fill']();
                    _0x5eff3a['miterLimit'] = _0x3d236e;
                };
                return _0x4bdf48;
            };
            _0x5eac64['circle'] = function (_0x43b88e, _0x484a18, _0x5cc4c9, _0x463342, _0xe26675) {
                var _0x491f27 = new _0x5eac64['object']();
                _0x491f27['position'] = new _0x5eac64['Vector2'](_0x43b88e || 0x0, _0x484a18 || 0x0);
                _0x491f27['radius'] = _0x5cc4c9 || 0x64;
                _0x491f27['color'] = _0x463342 || '#000000';
                _0x491f27['opacity'] = _0xe26675 || 0x1;
                _0x491f27['type'] = 'circle';
                _0x491f27['renderSpecific'] = function (_0x3738aa, _0x18fbbb) {
                    _0x3738aa['fillStyle'] = this['color'];
                    _0x3738aa['beginPath']();
                    _0x3738aa['arc'](0x0, 0x0, this['radius'] * this['size'] / _0x18fbbb, 0x0, 0x2 * Math['PI']);
                    _0x3738aa['closePath']();
                    _0x3738aa['fill']();
                };
                return _0x491f27;
            };
            _0x5eac64['arc'] = function (_0x5e9b60, _0x1f94b6, _0x2a229e, _0x134441, _0x112704, _0x5c3568, _0x2ef7b0) {
                var _0x3a0727 = new _0x5eac64['object']();
                _0x3a0727['position'] = new _0x5eac64['Vector2'](_0x5e9b60 || 0x0, _0x1f94b6 || 0x0);
                _0x3a0727['radius'] = _0x2a229e || 0x64;
                _0x3a0727['color'] = _0x134441 || '#000000';
                _0x3a0727['angle'] = _0x112704 || Math['PI'];
                _0x3a0727['rotation'] = _0x5c3568 || 0x0;
                _0x3a0727['lineWidth'] = _0x2ef7b0 || 0x5;
                _0x3a0727['type'] = 'arc';
                _0x3a0727['renderSpecific'] = function (_0x206d50, _0x3a1aa0) {
                    _0x206d50['strokeStyle'] = this['color'];
                    _0x206d50['lineWidth'] = this['lineWidth'] * this['size'] / _0x3a1aa0;
                    _0x206d50['beginPath']();
                    _0x206d50['arc'](0x0, 0x0, this['radius'] * this['size'] / _0x3a1aa0, 0x0, this['angle']);
                    _0x206d50['stroke']();
                };
                return _0x3a0727;
            };
            _0x5eac64['blurredCircle'] = function (_0x2e794c, _0x514830, _0x357887, _0xd9edc8, _0x3337e5) {
                _0x2e794c = _0x2e794c || 0x0;
                _0x514830 = _0x514830 || 0x0;
                _0x357887 = _0x357887 || 0x64;
                _0xd9edc8 = _0xd9edc8 || '#000000';
                _0x3337e5 = _0x3337e5 || 0x3;
                var _0xdd1399 = document['createElement']('canvas');
                _0xdd1399['width'] = _0x357887 * 0x2 + _0x3337e5 * 0x4;
                _0xdd1399['height'] = _0x357887 * 0x2 + _0x3337e5 * 0x4;
                var _0x372d86 = _0xdd1399['getContext']('2d');
                _0x372d86['fillStyle'] = _0xd9edc8;
                _0x372d86['filter'] = 'blur( ' + _0x3337e5 + 'px )';
                _0x372d86['beginPath']();
                _0x372d86['arc'](_0x357887 + _0x3337e5 * 0x2, _0x357887 + _0x3337e5 * 0x2, _0x357887, 0x0, 0x2 * Math['PI']);
                _0x372d86['closePath']();
                _0x372d86['fill']();
                return new _0x5eac64['image'](_0xdd1399, _0x2e794c, _0x514830, _0x357887 * 0x2, _0x357887 * 2.3);
            };
            _0x5eac64['particle'] = function (_0x86141f, _0x2e12e0, _0x2ce1ab, _0x3baaef, _0x6b0f38, _0x11f128, _0x353d88, _0x586e65, _0x46381c, _0x440254) {
                var _0x2d08d8 = new _0x5eac64['rectangle'](_0x86141f, _0x2e12e0, _0x2ce1ab, _0x2ce1ab, _0x3baaef, 0.7);
                _0x2d08d8['turn'] = _0x6b0f38 || (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.2;
                _0x2d08d8['opacityFade'] = _0x11f128 || 0x1;
                _0x2d08d8['rotation'] = Math['random']() * Math['PI'] * 0x2;
                _0x2d08d8['velocity'] = new _0x5eac64['Vector2'](_0x353d88 || 0x0, _0x586e65 || 0x0);
                _0x2d08d8['velocityFade'] = 0x1;
                if (_0x440254 !== undefined)
                    _0x2d08d8['velocityFade'] = _0x440254;
                _0x2d08d8['opacity'] = _0x46381c || 0x1;
                _0x2d08d8['type'] = 'particle';
                _0x2d08d8['update'] = function (_0x249ffe) {
                    _0x2d08d8['rotation'] += _0x2d08d8['turn'] * _0x249ffe;
                    _0x2d08d8['width'] -= 0.2 * _0x249ffe;
                    _0x2d08d8['height'] -= 0.2 * _0x249ffe;
                    _0x2d08d8['opacity'] -= 0.02 * _0x249ffe * _0x2d08d8['opacityFade'];
                    _0x2d08d8['velocity']['x'] *= _0x2d08d8['velocityFade'];
                    _0x2d08d8['velocity']['y'] *= _0x2d08d8['velocityFade'];
                    _0x2d08d8['position']['x'] += _0x2d08d8['velocity']['x'] * _0x249ffe;
                    _0x2d08d8['position']['y'] += _0x2d08d8['velocity']['y'] * _0x249ffe;
                    if (_0x2d08d8['opacity'] <= 0x0 && _0x5eac64['particles']['indexOf'](_0x2d08d8) != -0x1) {
                        _0x5eac64['particles']['splice'](_0x5eac64['particles']['indexOf'](_0x2d08d8), 0x1);
                        if (_0x2d08d8['parent'] != null)
                            _0x2d08d8['parent']['remove'](_0x2d08d8);
                    }
                };
                _0x5eac64['particles']['push'](_0x2d08d8);
                return _0x2d08d8;
            };
            _0x5eac64['customParticle'] = function (_0x50fd1b, _0x302d80, _0xd099ae, _0x4e4f74, _0x2fd60f, _0x265442, _0x599c58) {
                _0x50fd1b['turn'] = _0x302d80 || (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.2;
                _0x50fd1b['opacityFade'] = _0xd099ae || 0x1;
                _0x50fd1b['rotation'] = Math['random']() * Math['PI'] * 0x2;
                _0x50fd1b['velocity'] = new _0x5eac64['Vector2'](_0x4e4f74 || 0x0, _0x2fd60f || 0x0);
                _0x50fd1b['widthFade'] = _0x265442 || 0x1;
                _0x50fd1b['heightFade'] = _0x599c58 || 0x1;
                _0x50fd1b['type'] = 'particle';
                _0x50fd1b['opacityThreshold'] = 0x0;
                if (_0x50fd1b['update'] == undefined) {
                    _0x50fd1b['update'] = function (_0x4637d1) {
                        _0x50fd1b['rotation'] += _0x50fd1b['turn'] * _0x4637d1;
                        _0x50fd1b['width'] -= 0.4 * _0x4637d1 * _0x50fd1b['widthFade'];
                        _0x50fd1b['height'] -= 0.4 * _0x4637d1 * _0x50fd1b['heightFade'];
                        _0x50fd1b['opacity'] -= 0.02 * _0x4637d1 * _0x50fd1b['opacityFade'];
                        _0x50fd1b['position']['x'] += _0x50fd1b['velocity']['x'] * _0x4637d1;
                        _0x50fd1b['position']['y'] += _0x50fd1b['velocity']['y'] * _0x4637d1;
                        if (_0x50fd1b['opacity'] <= _0x50fd1b['opacityThreshold'] && _0x5eac64['particles']['indexOf'](_0x50fd1b) != -0x1) {
                            _0x50fd1b['opacity'] = 0x0;
                            if (_0x50fd1b['parentRemove'] === undefined)
                                _0x5eac64['particles']['splice'](_0x5eac64['particles']['indexOf'](_0x50fd1b), 0x1);
                            if (_0x50fd1b['parent'] != null && _0x50fd1b['parentRemove'] === undefined)
                                _0x50fd1b['parent']['remove'](_0x50fd1b);
                            return 0x0;
                        }
                        return 0x1;
                    };
                }
                if (_0x50fd1b['parentRemove'] === undefined) {
                    _0x5eac64['particles']['push'](_0x50fd1b);
                }
                return _0x50fd1b;
            };
            _0x5eac64['scene'] = function () {
                var _0x4cbf1c = new _0x5eac64['object']();
                _0x4cbf1c['type'] = 'scene';
                _0x4cbf1c['camera'] = {
                    'position': new _0x5eac64['Vector2'](0x0, 0x0),
                    'ratio': 0x1,
                    'rotation': 0x0
                };
                _0x4cbf1c['render'] = function (_0x1fc0dd, _0x4b0d45, _0x410df4) {
                    _0x4b0d45 /= this['size'];
                    this['opacity'] = Math['min'](Math['max'](0x0, this['opacity']), 0x1);
                    _0x1fc0dd['globalAlpha'] = this['opacity'] * _0x410df4;
                    _0x1fc0dd['translate'](-this['camera']['position']['x'] / _0x4b0d45, -this['camera']['position']['y'] / _0x4b0d45);
                    _0x1fc0dd['rotate'](-this['camera']['rotation']);
                    this['belowObjects']['forEach'](function (_0x311a5b) {
                        _0x311a5b['render'](_0x1fc0dd, _0x4b0d45, _0x410df4);
                    });
                    this['objects']['forEach'](function (_0x20a8bf) {
                        _0x20a8bf['render'](_0x1fc0dd, _0x4b0d45, _0x410df4);
                    });
                    _0x1fc0dd['rotate'](this['camera']['rotation']);
                    _0x1fc0dd['translate'](this['camera']['position']['x'] / _0x4b0d45, this['camera']['position']['y'] / _0x4b0d45);
                };
                _0x5eac64['scenes']['push'](_0x4cbf1c);
                return _0x4cbf1c;
            };
            _0x5eac64['me'] = {
                'id': -0x1,
                'score': 0x0,
                'visual': {
                    'position': new _0x5eac64['Vector2'](0x0, 0x0)
                },
                'new': {
                    'position': new _0x5eac64['Vector2'](0x0, 0x0)
                },
                'actualNew': {
                    'position': new _0x5eac64['Vector2'](0x0, 0x0)
                },
                'old': {
                    'position': new _0x5eac64['Vector2'](0x0, 0x0)
                }
            };
            window.me = _0x5eac64['me'];
            _0x5eac64['ws'] = {
                'readyState': -0x1,
                'send': function () { },
                'close': function () { }
            };
            _0x5eac64['connecting'] = ![];
            _0x5eac64['spectating'] = !![];
            _0x5eac64['currentPackets'] = [];
            _0x5eac64['createSocket'] = function (_0x1919b4) {
                if (_0x5eac64['connecting'])
                    return;
                _0x5eac64['connecting'] = !![];
                console['log']('Closing old socket');
                _0x5eac64['ws']['close']();
                function _0x2a07f5() {
                    _0x5eac64['connecting'] = ![];
                }
                _0x5eac64['ws'] = new _0x5eac64['socket'](_0x1919b4, _0x5eac64['messageEvent'], _0x2a07f5);
                _0x5eac64['ws']['binaryType'] = 'arraybuffer';
            };
            _0x5eac64['hasEnvs'] = ![];
            _0x5eac64['serverDetails'] = {
                'lastFrame': Date['now'](),
                'thisFrame': Date['now'](),
                'dt': 0x1,
                'dtArray': [5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2],
                'fpsArray': [0x3c, 0x3c, 0x3c, 0x3c, 0x3c, 0x3c, 0x3c, 0x3c, 0x3c, 0x3c],
                'ticksSincePacket': 0x0
            };
            _0x5eac64['clientDetails'] = {
                'lastFrame': Date['now'](),
                'thisFrame': Date['now'](),
                'dt': 0x1,
                'actualDt': 0x1
            };
            _0x5eac64['toBuffer'] = function (_0x5d07f0) {
                var _0x23e36a = new ArrayBuffer(_0x5d07f0['length']);
                var _0x1f464e = new Uint8Array(_0x23e36a);
                for (var _0x175841 = 0x0, _0x6e1dd3 = _0x5d07f0['length']; _0x175841 < _0x6e1dd3; _0x175841++) {
                    _0x1f464e[_0x175841] = _0x5d07f0['charCodeAt'](_0x175841);
                }
                return _0x23e36a;
            };
            _0x5eac64['fromBuffer'] = function (_0x5131e7) {
                try {
                    return String['fromCharCode']['apply'](null, new Uint8Array(_0x5131e7));
                } catch (_0x34f1d8) { }
            };
            _0x5eac64['selfExists'] = function () {
                if (!_0x5eac64['hasEnvs']) {
                    _0x5eac64['currentPackets']['push']({
                        'type': 'getEnvs'
                    });
                }
                for (var _0x47e16b = 0x0; _0x47e16b < _0x5eac64['objects']['length']; _0x47e16b++) {
                    if (_0x5eac64['objects'][_0x47e16b]['id'] == _0x5eac64['me']['id']) {
                        return !![];
                    }
                }
                if (_0x5eac64['ws']['readyState'] == 0x1) {
                    _0x5eac64['currentPackets']['push']({
                        'type': 'getID'
                    });
                }
            };
            _0x5eac64['notUpdatedIsClose'] = function (_0x350f63) {
                if (Math['abs'](_0x5eac64['me']['new']['position']['x'] - _0x350f63['new']['position']['x']) < 0x780 / 0x2 + 0x640 && Math['abs'](_0x5eac64['me']['new']['position']['y'] - _0x350f63['new']['position']['y']) < 0x438 / 0x2 + 0x640)
                    return !![];
            };
            _0x5eac64['visualIsClose'] = function (_0x86174f) {
                if (Math['abs'](_0x5eac64['me']['new']['position']['x'] - _0x86174f['position']['x']) < 0x780 / 0x2 + 0x640 && Math['abs'](_0x5eac64['me']['new']['position']['y'] - _0x86174f['position']['y']) < 0x438 / 0x2 + 0x640)
                    return !![];
            };
            _0x5eac64['lerp'] = function (_0x3c06ae, _0x30a36a) {
                if (_0x5eac64['serverDetails']['ticksSincePacket'] > _0x5eac64['serverDetails']['dt'] + 0x5) {
                    return (_0x30a36a - _0x3c06ae) / _0x5eac64['serverDetails']['dt'] * (_0x5eac64['serverDetails']['dt'] + 0x5) + _0x3c06ae;
                }
                return (_0x30a36a - _0x3c06ae) / _0x5eac64['serverDetails']['dt'] * _0x5eac64['serverDetails']['ticksSincePacket'] + _0x3c06ae;
            };
            _0x5eac64['normalLerp'] = function (_0x486185, _0x61dd6a, _0x25bfb2) {
                return (_0x61dd6a - _0x486185) * _0x25bfb2 + _0x486185;
            };
            _0x5eac64['getObj'] = function (_0x4f183d) {
                for (var _0x5ab4dd = 0x0; _0x5ab4dd < _0x5eac64['objects']['length']; _0x5ab4dd++) {
                    if (_0x5eac64['objects'][_0x5ab4dd]['id'] == _0x4f183d) {
                        return _0x5eac64['objects'][_0x5ab4dd];
                    }
                }
                return null;
            };
            _0x5eac64['askForObj'] = function (_0x50e39b) {
                _0x5eac64['currentPackets']['push']({
                    'type': 'getObject',
                    'object': {
                        'id': _0x50e39b
                    }
                });
            };
            _0x5eac64['onGetEnvs'] = function (_0x295aee) { };
            _0x5eac64['customSign'] = function (_0x194267) {
                return Math['sign'](_0x194267);
                return Math['sign'](Math['round'](_0x194267 / 0xa));
            };
            _0x5eac64['positions'] = [];
            _0x5eac64['average'] = function (_0x548dc2) {
                var _0x481d85 = 0x0;
                for (var _0x113a1c = 0x0; _0x113a1c < _0x548dc2['length']; _0x113a1c++) {
                    _0x481d85 += _0x548dc2[_0x113a1c];
                }
                return _0x481d85 / _0x548dc2['length'];
            };
            _0x5eac64['packetFunctions'] = {
                'setID': function (_0x22aa61) {
                    _0x5eac64['spectating'] = _0x22aa61['s'];
                    for (var _0x417d04 = 0x0; _0x417d04 < _0x5eac64['objects']['length']; _0x417d04++) {
                        if (_0x5eac64['objects'][_0x417d04]['id'] == _0x22aa61['id']) {
                            _0x5eac64['me'] = _0x5eac64['objects'][_0x417d04];
                            if (_0x5eac64['spectating']) {
                                _0x5eac64['me'].weaponSkin = "";
                            } else {
                                _0x5eac64['me'].weaponSkin = localStorage.weaponSkin;
                            }
                            window.me = _0x5eac64['me'];
                        }
                    }
                },
                'x': function (_0x509f56) {
                    var _0x30d6bf = ['i', 'b', 'x', 'y', 'a', 'n'];
                    for (var _0x26f5b3 = 0x0; _0x26f5b3 < _0x30d6bf['length']; _0x26f5b3++) {
                        _0x509f56[_0x30d6bf[_0x26f5b3]] = _0x509f56['p'][_0x26f5b3];
                    }
                    if (_0x5eac64['getObj'](_0x509f56['i']) != null) {
                        return null;
                    }
                    var _0x118857 = {
                        'new': {
                            'position': new _0x5eac64['Vector2'](_0x509f56['x'], _0x509f56['y']),
                            'rotation': _0x509f56['a'] / 0x64
                        },
                        'actualNew': {
                            'position': new _0x5eac64['Vector2'](_0x509f56['x'], _0x509f56['y']),
                            'rotation': _0x509f56['a'] / 0x64
                        },
                        'old': {
                            'position': new _0x5eac64['Vector2'](_0x509f56['x'], _0x509f56['y']),
                            'rotation': _0x509f56['a'] / 0x64
                        },
                        'actualOld': {
                            'position': new _0x5eac64['Vector2'](_0x509f56['x'], _0x509f56['y']),
                            'rotation': _0x509f56['a'] / 0x64
                        },
                        'id': _0x509f56['i'],
                        'ticksAsleep': 0x0,
                        'visual': new _0x5eac64['object'](),
                        'type': _0x509f56['b'],
                        'needsUpdate': _0x509f56['n']
                    };
                    if (_0x5eac64['types'][_0x509f56['b']] === undefined) {
                        console['log'](_0x509f56['b']);
                    }
                    _0x5eac64['types'][_0x509f56['b']]['create'](_0x118857, _0x509f56);
                    _0x118857['visual']['position']['x'] = _0x118857['new']['position']['x'];
                    _0x118857['visual']['position']['y'] = _0x118857['new']['position']['y'];
                    _0x118857['visual']['rotation'] = _0x118857['new']['rotation'];
                    _0x5eac64['objects']['push'](_0x118857);
                    return;
                },
                'y': function (_0x4b5b14) {
                    if (_0x5eac64['getObj'](_0x4b5b14['a'][0x0]) == null) {
                        _0x5eac64['askForObj'](_0x4b5b14['a'][0x0]);
                        return;
                    }
                    var _0x1480f0 = _0x5eac64['getObj'](_0x4b5b14['a'][0x0]);
                    if (_0x5eac64['usedIDs']['indexOf'](_0x1480f0['id']) != -0x1) {
                        return;
                    }
                    var _0x4101d5 = _0x1480f0['actualNew']['position']['x'] - _0x1480f0['actualOld']['position']['x'];
                    var _0x5c5141 = _0x1480f0['actualNew']['position']['y'] - _0x1480f0['actualOld']['position']['y'];
                    var _0x3b433b = 1.35;
                    var _0x51e4b5 = 0.7;
                    _0x3b433b = 1.5;
                    _0x51e4b5 = _0x3b433b;
                    var _0xcec643 = _0x3b433b;
                    if (_0x5eac64['customSign'](_0x1480f0['actualNew']['position']['x'] - _0x1480f0['actualOld']['position']['x']) == -_0x5eac64['customSign'](_0x4b5b14['a'][0x1] - _0x1480f0['actualNew']['position']['x'])) {
                        _0xcec643 = _0x51e4b5;
                    }
                    var _0x1e9d01 = _0x3b433b;
                    if (_0x5eac64['customSign'](_0x1480f0['actualNew']['position']['y'] - _0x1480f0['actualOld']['position']['y']) == -_0x5eac64['customSign'](_0x4b5b14['a'][0x2] - _0x1480f0['actualNew']['position']['y'])) {
                        _0x1e9d01 = _0x51e4b5;
                    }
                    var _0x5c9449 = 0.2;
                    var _0x2ed632 = 0.6;
                    var _0x2ee417 = _0x5c9449;
                    var _0x4c08ac = _0x5c9449;
                    var _0x3b6a08 = 0xa;
                    if (Math['abs'](_0x1480f0['actualNew']['position']['x'] - _0x1480f0['actualOld']['position']['x']) < _0x3b6a08) {
                        _0x2ee417 = _0x5eac64['normalLerp'](_0x5c9449, _0x2ed632, (_0x3b6a08 - Math['abs'](_0x1480f0['actualNew']['position']['x'] - _0x1480f0['actualOld']['position']['x'])) / _0x3b6a08);
                    }
                    if (Math['abs'](_0x1480f0['actualNew']['position']['y'] - _0x1480f0['actualOld']['position']['y']) < _0x3b6a08) {
                        _0x4c08ac = _0x5eac64['normalLerp'](_0x5c9449, _0x2ed632, (_0x3b6a08 - Math['abs'](_0x1480f0['actualNew']['position']['y'] - _0x1480f0['actualOld']['position']['y'])) / _0x3b6a08);
                    }
                    _0x1480f0['ticksAsleep'] = 0x0;
                    _0x1480f0['old']['position'] = _0x1480f0['visual']['position']['clone']();
                    _0x1480f0['old']['rotation'] = _0x1480f0['visual']['rotation'];
                    _0x1480f0['actualOld']['position'] = _0x1480f0['actualNew']['position']['clone']();
                    _0x1480f0['actualOld']['rotation'] = _0x1480f0['actualNew']['rotation'];
                    _0x1480f0['new']['position'] = new _0x5eac64['Vector2'](_0x4b5b14['a'][0x1], _0x4b5b14['a'][0x2]);
                    _0x1480f0['actualNew']['position'] = _0x1480f0['new']['position']['clone']();
                    _0x1480f0['actualNew']['rotation'] = _0x1480f0['new']['rotation'];
                    _0x1480f0['new']['position']['x'] = _0x5eac64['normalLerp'](_0x1480f0['old']['position']['x'] + (_0x1480f0['new']['position']['x'] - _0x1480f0['actualOld']['position']['x']) * _0xcec643, _0x1480f0['new']['position']['x'], _0x2ee417);
                    _0x1480f0['new']['position']['y'] = _0x5eac64['normalLerp'](_0x1480f0['old']['position']['y'] + (_0x1480f0['new']['position']['y'] - _0x1480f0['actualOld']['position']['y']) * _0x1e9d01, _0x1480f0['new']['position']['y'], _0x4c08ac);
                    if (_0x1480f0 == _0x5eac64['me']) { }
                    if (isNaN(_0x1480f0['old']['position']['x'])) {
                        _0x1480f0['old']['position']['x'] = _0x1480f0['new']['position']['x'];
                        _0x1480f0['actualOld']['position']['x'] = _0x1480f0['new']['position']['x'];
                        console['log']('NaN X Value');
                    }
                    if (isNaN(_0x1480f0['old']['position']['y'])) {
                        _0x1480f0['old']['position']['y'] = _0x1480f0['new']['position']['y'];
                        _0x1480f0['actualOld']['position']['y'] = _0x1480f0['new']['position']['y'];
                        console['log']('NaN Y Value');
                    }
                    if (Math['abs'](_0x1480f0['visual']['position']['x'] - _0x1480f0['new']['position']['x']) < 0.3) {
                        _0x1480f0['old']['position']['x'] = _0x1480f0['new']['position']['x'];
                    }
                    if (Math['abs'](_0x1480f0['visual']['position']['y'] - _0x1480f0['new']['position']['y']) < 0.3) {
                        _0x1480f0['old']['position']['y'] = _0x1480f0['new']['position']['y'];
                    }
                    _0x1480f0['new']['rotation'] = _0x4b5b14['a'][0x3] / 0x64;
                    if (Math['abs'](_0x1480f0['old']['rotation'] - _0x1480f0['new']['rotation']) > Math['PI']) {
                        if (_0x1480f0['old']['rotation'] > _0x1480f0['new']['rotation'])
                            _0x1480f0['old']['rotation'] -= Math['PI'] * 0x2;
                        else
                            _0x1480f0['old']['rotation'] += Math['PI'] * 0x2;
                    }
                    _0x5eac64['usedIDs']['push'](_0x1480f0['id']);
                    _0x5eac64['types'][_0x1480f0['type']]['updatePacket'](_0x1480f0, _0x4b5b14);
                },
                'z': function (_0x1f2ebf) {
                    for (var _0x2bffcd = 0x0; _0x2bffcd < _0x5eac64['objects']['length']; _0x2bffcd++) {
                        if (_0x5eac64['objects'][_0x2bffcd]['id'] == _0x1f2ebf['i']) {
                            if (_0x5eac64['types'][_0x5eac64['objects'][_0x2bffcd]['type']]['remove'](_0x5eac64['objects'][_0x2bffcd], _0x1f2ebf))
                                return;
                            if (_0x5eac64['objects'][_0x2bffcd]['visual']['parent'] != null)
                                _0x5eac64['objects'][_0x2bffcd]['visual']['parent']['remove'](_0x5eac64['objects'][_0x2bffcd]['visual']);
                            _0x5eac64['objects']['splice'](_0x2bffcd, 0x1);
                            break;
                        }
                    }
                },
                'e': function (_0x32c51d) {
                    if (!_0x5eac64['hasEnvs']) {
                        _0x5eac64['hasEnvs'] = !![];
                        _0x5eac64['envs'] = _0x32c51d['envs'];
                        _0x5eac64['onGetEnvs'](_0x5eac64['envs']);
                    }
                }
            };
            _0x5eac64['addPacketType'] = function (_0x2d60a7, _0x306810) {
                _0x5eac64['packetFunctions'][_0x2d60a7] = _0x306810;
            };
            _0x5eac64['types'] = [];
            _0x5eac64['objects'] = [];
            _0x5eac64['usedIDs'] = [];
            _0x5eac64['lerpSpeed'] = 0x1;
            var _0x6cbe73 = 0x3c;
            _0x5eac64['messageQueue'] = [];
            _0x5eac64['messageEvent'] = function (_0x48f40e) {
                _0x5eac64['messageQueue']['push'](_0x48f40e);
            };
            _0x5eac64['flushMessageQueue'] = function () {
                while (_0x5eac64['messageQueue']['length'] > 0x0) {
                    _0x5eac64['actualMessageEvent'](_0x5eac64['messageQueue']['splice'](0x0, 0x1)[0x0]);
                }
            };
            _0x5eac64['actualMessageEvent'] = function (_0x250909) {
                _0x5eac64['serverDetails']['thisFrame'] = Date['now']();
                _0x5eac64['lerpSpeed'] = 0x3 / _0x5eac64['serverDetails']['ticksSincePacket'];
                if (isNaN(_0x5eac64['lerpSpeed'])) {
                    _0x5eac64['lerpSpeed'] = 0x1;
                }
                _0x5eac64['lerpSpeed'] = Math['min'](Math['max'](_0x5eac64['lerpSpeed'], 0.1), 0x2);
                _0x5eac64['serverDetails']['dt'] = 5.3;
                _0x5eac64['serverDetails']['lastFrame'] = _0x5eac64['serverDetails']['thisFrame'];
                if (msgpack !== undefined) {
                    var _0x315f67 = msgpack['decode'](new Uint8Array(_0x250909['data']));
                    for (var _0x739089 = 0x0; _0x739089 < _0x315f67['length']; _0x739089++) {
                        var _0x270b0f = _0x315f67[_0x739089];
                        if (_0x5eac64['packetFunctions'][_0x270b0f['t']] !== undefined)
                            _0x5eac64['packetFunctions'][_0x270b0f['t']](_0x270b0f);
                        else {
                            console['log']('Encountered issue: unknown packet type');
                            console['log'](_0x315f67);
                            _0x270b0f = msgpack['decode'](_0x270b0f);
                            if (_0x5eac64['packetFunctions'][_0x270b0f['t']] !== undefined) {
                                try {
                                    _0x5eac64['packetFunctions'][_0x270b0f['t']](_0x270b0f);
                                } catch (_0x11d700) {
                                    console['log']('Packet function error');
                                    console['log'](_0x11d700);
                                }
                            }
                        }
                    }
                }
                for (var _0x739089 = 0x0; _0x739089 < _0x5eac64['objects']['length']; _0x739089++) {
                    _0x5eac64['objects'][_0x739089]['ticksAsleep']++;
                    if (_0x5eac64['objects'][_0x739089]['ticksAsleep'] > 0x1) {
                        _0x5eac64['objects'][_0x739089]['new']['position']['x'] = _0x5eac64['normalLerp'](_0x5eac64['objects'][_0x739089]['new']['position']['x'], _0x5eac64['objects'][_0x739089]['actualNew']['position']['x'], 0.2);
                        _0x5eac64['objects'][_0x739089]['new']['position']['y'] = _0x5eac64['normalLerp'](_0x5eac64['objects'][_0x739089]['new']['position']['y'], _0x5eac64['objects'][_0x739089]['actualNew']['position']['y'], 0.2);
                    }
                    if (_0x5eac64['usedIDs']['indexOf'](_0x5eac64['objects'][_0x739089]['id']) == -0x1) {
                        _0x5eac64['objects'][_0x739089]['old']['position']['x'] = _0x5eac64['objects'][_0x739089]['visual']['position']['x'];
                        _0x5eac64['objects'][_0x739089]['old']['position']['y'] = _0x5eac64['objects'][_0x739089]['visual']['position']['y'];
                        _0x5eac64['objects'][_0x739089]['old']['rotation'] = _0x5eac64['objects'][_0x739089]['visual']['rotation'];
                    }
                    if ((_0x5eac64['objects'][_0x739089]['needsUpdate'] && (_0x5eac64['objects'][_0x739089]['ticksAsleep'] > 0xc9 && (_0x5eac64['objects'][_0x739089]['old']['position']['x'] == _0x5eac64['objects'][_0x739089]['new']['position']['x'] && _0x5eac64['objects'][_0x739089]['old']['position']['y'] == _0x5eac64['objects'][_0x739089]['new']['position']['y'] && _0x5eac64['objects'][_0x739089]['old']['rotation'] == _0x5eac64['objects'][_0x739089]['new']['rotation'])) || !_0x5eac64['objects'][_0x739089]['needsUpdate'] && _0x5eac64['objects'][_0x739089]['ticksAsleep'] >= 0x78 && !_0x5eac64['notUpdatedIsClose'](_0x5eac64['objects'][_0x739089])) && _0x5eac64['usedIDs']['indexOf'](_0x5eac64['objects'][_0x739089]['id']) == -0x1) {
                        if (_0x5eac64['types'][_0x5eac64['objects'][_0x739089]['type']]['remove'](_0x5eac64['objects'][_0x739089], {}))
                            continue;
                        if (_0x5eac64['objects'][_0x739089]['visual']['parent'] != null)
                            _0x5eac64['objects'][_0x739089]['visual']['parent']['remove'](_0x5eac64['objects'][_0x739089]['visual']);
                        _0x5eac64['objects']['splice'](_0x739089, 0x1);
                    }
                }
                _0x5eac64['usedIDs'] = [];
                _0x5eac64['selfExists']();
                _0x5eac64['serverDetails']['ticksSincePacket'] = 0x0;
            };
            _0x5eac64['update'] = function () {
                _0x5eac64['now'] = Date['now']();
                var _0x46bb2d = Math['max'](_0x5d9059['getFPS'](), 0x1e);
                _0x5eac64['serverDetails']['fpsArray']['push'](_0x46bb2d);
                _0x5eac64['serverDetails']['fpsArray']['splice'](0x0, 0x1);
                _0x6cbe73 = 0x0;
                for (var _0x1f1d05 = 0x0; _0x1f1d05 < _0x5eac64['serverDetails']['fpsArray']['length']; _0x1f1d05++) {
                    _0x6cbe73 += _0x5eac64['serverDetails']['fpsArray'][_0x1f1d05];
                }
                _0x6cbe73 /= _0x5eac64['serverDetails']['fpsArray']['length'];
                _0x5eac64['serverDetails']['ticksSincePacket'] += 0x1 / (_0x6cbe73 / 0x3c);
                if (_0x5eac64['now'] - _0x5eac64['lastPixelCheck'] >= 0x9c4 && window['innerWidth'] < 0x3e8) {
                    if (_0x6cbe73 < 0x37) {
                        _0x5eac64['pixelResize'] -= 0.1;
                    } else if (_0x6cbe73 >= 0x3b) {
                        _0x5eac64['pixelResize'] += 0.05;
                    }
                    _0x5eac64['pixelResize'] = Math['max'](Math['min'](_0x5eac64['pixelResize'], 0x1), 0x0);
                    _0x5eac64['lastPixelCheck'] = _0x5eac64['now'];
                }
                _0x5eac64['flushTextRenderQueue']();
                for (var _0x1f1d05 = 0x0; _0x1f1d05 < _0x5eac64['objects']['length']; _0x1f1d05++) {
                    var _0x265e61 = _0x5eac64['objects'][_0x1f1d05];
                    _0x265e61['visual']['rotation'] = _0x5eac64['lerp'](_0x265e61['old']['rotation'], _0x265e61['new']['rotation']);
                    _0x265e61['visual']['position']['x'] = _0x5eac64['normalLerp'](_0x265e61['visual']['position']['x'], _0x5eac64['lerp'](_0x265e61['old']['position']['x'], _0x265e61['new']['position']['x']), 0.8);
                    _0x265e61['visual']['position']['y'] = _0x5eac64['normalLerp'](_0x265e61['visual']['position']['y'], _0x5eac64['lerp'](_0x265e61['old']['position']['y'], _0x265e61['new']['position']['y']), 0.8);
                    _0x5eac64['types'][_0x265e61['type']]['tickUpdate'](_0x265e61);
                }
                _0x5eac64['clientDetails']['thisFrame'] = _0x5eac64['now'];
                _0x5eac64['clientDetails']['dt'] = Math['min'](0x3c / _0x46bb2d, 0x2);
                _0x5eac64['clientDetails']['actualDt'] = Math['min'](0x3e8 / _0x46bb2d, 0x22);
                _0x5eac64['clientDetails']['lastFrame'] = _0x5eac64['clientDetails']['thisFrame'];
                _0x5eac64['particles']['forEach'](function (_0x407f54) {
                    _0x407f54['update'](_0x5eac64['clientDetails']['dt'] * 1.2);
                });
                if (_0x5eac64['ws']['readyState'] == 0x1 && _0x5eac64['currentPackets']['length'] > 0x0) {
                    for (var _0x1f1d05 = 0x0; _0x1f1d05 < _0x5eac64['currentPackets']['length']; _0x1f1d05++) {
                        if (_0x5eac64['currentPackets'][_0x1f1d05]['type'] !== undefined) {
                            _0x5eac64['currentPackets'][_0x1f1d05]['t'] = _0x5eac64['currentPackets'][_0x1f1d05]['type'];
                            delete _0x5eac64['currentPackets'][_0x1f1d05]['type'];
                        }
                    }
                    _0x5eac64['ws']['send'](msgpack['encode'](_0x5eac64['currentPackets']));
                    if (window['logPackets']) {
                        console['log'](_0x5eac64['currentPackets']);
                    }
                    _0x5eac64['currentPackets'] = [];
                }
            };
            _0x5eac64['addType'] = function (_0xafde21, _0x170db7, _0x1a95ca, _0x44b155, _0x3b147d) {
                _0x5eac64['types'][_0xafde21] = {
                    'create': _0x170db7,
                    'tickUpdate': _0x1a95ca || function (_0x2a1868) { },
                    'updatePacket': _0x44b155 || function (_0x2b3c4f, _0x37bde5) { },
                    'remove': _0x3b147d || function (_0x1c4e80) { }
                };
            };
            _0x5eac64['addType']('spectator', function (_0x3f231f, _0x4599f9) {
                _0x3f231f['visual'] = new _0x5eac64['object']();
            }, function () { }, function () { });
            return _0x5eac64;
        };
        _0x40a4b3['exports']['requestFrame'] = function (_0x2638ed) {
            (window['requestAnimationFrame'] || window['webkitRequestAnimationFrame'] || window['mozRequestAnimationFrame'] || window['oRequestAnimationFrame'] || window['msRequestAnimationFrame'] || function (_0x578948) {
                setTimeout(_0x578948, 0x3e8 / 0x3c);
            })(_0x2638ed);
        };
        function _0x95056e(_0x35f12f) {
            let _0x152496 = getComputedStyle(document['documentElement'])['getPropertyValue']('--' + _0x35f12f);
            _0x152496 = parseInt(_0x152496);
            if (isFinite(_0x152496)) {
                return _0x152496;
            } else {
                return 0x0;
            }
        }
    },
    2: function (_0x47fded, _0xe3a197, _0x76f2be) {
        var _0x8797ae = _0x76f2be(0x3);
        var _0x104651 = _0x76f2be(0xb);
        function _0x37c676(_0x22e9f7, _0x393159, _0x512276, _0x575f7b, _0x219f59) {
            if (location['hostname'] == 'localhost') {
                window['location']['hostname'] = '127.0.0.1';
            }
            this['debugLog'] = ![];
            this['baseUrl'] = _0x22e9f7;
            this['lobbySize'] = _0x512276;
            this['devPort'] = _0x393159;
            this['lobbySpread'] = _0x575f7b;
            this['rawIPs'] = !!_0x219f59;
            this['region'] = 0x0;
            this['callback'] = undefined;
            this['servers'] = this['processServers']();
        }
        _0x37c676['prototype']['regionInfo'] = {
            0: {
                'name': 'local',
                'latitude': 0x0,
                'longitude': 0x0
            },
            1: {
                'name': 'New Jersey',
                'latitude': 40.1393329,
                'longitude': -75.8521818
            },
            2: {
                'name': 'Chicago',
                'latitude': 41.8339037,
                'longitude': -87.872238
            },
            3: {
                'name': 'Dallas',
                'latitude': 32.8208751,
                'longitude': -96.8714229
            },
            4: {
                'name': 'Seattle',
                'latitude': 47.6149942,
                'longitude': -122.4759879
            },
            5: {
                'name': 'Los Angeles',
                'latitude': 34.0207504,
                'longitude': -118.691914
            },
            6: {
                'name': 'Atlanta',
                'latitude': 33.7676334,
                'longitude': -84.5610332
            },
            7: {
                'name': 'Amsterdam',
                'latitude': 52.3745287,
                'longitude': 4.7581878
            },
            8: {
                'name': 'London',
                'latitude': 51.5283063,
                'longitude': -0.382486
            },
            9: {
                'name': 'Frankfurt',
                'latitude': 50.1211273,
                'longitude': 8.496137
            },
            12: {
                'name': 'Silicon Valley',
                'latitude': 37.4024714,
                'longitude': -122.3219752
            },
            19: {
                'name': 'Sydney',
                'latitude': -33.8479715,
                'longitude': 150.651084
            },
            24: {
                'name': 'Paris',
                'latitude': 48.8588376,
                'longitude': 2.2773454
            },
            25: {
                'name': 'Tokyo',
                'latitude': 35.6732615,
                'longitude': 139.569959
            },
            39: {
                'name': 'Miami',
                'latitude': 25.7823071,
                'longitude': -80.3012156
            },
            40: {
                'name': 'Singapore',
                'latitude': 1.3147268,
                'longitude': 103.7065876
            }
        };
        _0x37c676['prototype']['start'] = function (_0x2133ad) {
            this['callback'] = _0x2133ad;
            var _0x2e1fd9 = this['parseServerQuery']();
            if (_0x2e1fd9) {
                this['log']('Found server in query.');
                this['connect'](_0x2e1fd9);
            } else {
                this['log']('Pinging servers...');
                this['pingServers']();
            }
        };
        _0x37c676['prototype']['parseServerQuery'] = function () {
            var _0x56cff3 = _0x8797ae['parse'](location['href'], !![]);
            var _0x410324 = 0x0;
            if (_0x56cff3['query']['region'] !== undefined) {
                _0x410324 = _0x56cff3['query']['region'];
            }
            this['region'] = _0x410324;
            if (typeof _0x410324 != 'string') {
                return;
            }
            var _0x6380f3 = this['servers'][_0x410324];
            if (!Array['isArray'](_0x6380f3)) {
                console['warn']('No server list for region', _0x410324);
                return;
            }
            return;
        };
        _0x37c676['prototype']['pingServers'] = function () {
            var _0x1ca94f = this;
            var _0x18ccc8 = [];
            for (var _0x22797a in this['servers']) {
                var _0x410d35 = this['servers'][_0x22797a];
                var _0xe879c0 = _0x410d35[Math['floor'](Math['random']() * _0x410d35['length'])];
                (function (_0x15964f, _0x1a605e) {
                    var _0x17d77e = new XMLHttpRequest();
                    _0x17d77e['onreadystatechange'] = function (_0x411147) {
                        var _0x421dea = _0x411147['target'];
                        if (_0x421dea['readyState'] != 0x4)
                            return;
                        if (_0x421dea['status'] == 0xc8) {
                            for (var _0x51ae05 = 0x0; _0x51ae05 < _0x18ccc8['length']; _0x51ae05++) {
                                _0x18ccc8[_0x51ae05]['abort']();
                            }
                            _0x1ca94f['log']('Connecting to region', _0x1a605e['region']);
                            _0x1ca94f['seekServer'](_0x1a605e['region']);
                            if (onRegionGet !== undefined) {
                                onRegionGet(_0x1a605e['region']);
                            }
                        } else { }
                    };
                    var _0x323a9f = 'https://' + _0x1ca94f['serverAddress'](_0x1a605e['ip'], !![]) + ':' + _0x1ca94f['serverPort'](_0x1a605e) + '/ping';
                    _0x17d77e['open']('GET', _0x323a9f, !![]);
                    _0x17d77e['send'](null);
                    _0x1ca94f['log']('Pinging', _0x323a9f);
                    _0x18ccc8['push'](_0x17d77e);
                }(_0x410d35, _0xe879c0));
            }
        };
        _0x37c676['prototype']['seekServer'] = function (_0x555e8b, _0xff3ea9, _0x3a0009) {
            if (_0xff3ea9 == undefined) {
                _0xff3ea9 = 'random';
            }
            if (_0x3a0009 == undefined) {
                _0x3a0009 = ![];
            }
            const _0x4dad0e = ['random'];
            var _0x4d47a8 = this['lobbySize'];
            var _0x251748 = this['lobbySpread'];
            var _0x55e5f6 = this['servers'][_0x555e8b]['filter'](function (_0x16c3f5) {
                if (_0xff3ea9 == 'random') {
                    return !![];
                } else {
                    return _0x4dad0e[_0x16c3f5['index'] % _0x4dad0e['length']]['key'] == _0xff3ea9;
                }
            })['sort'](function (_0x3e7fd2, _0x21751d) {
                return _0x21751d['playerCount'] - _0x3e7fd2['playerCount'];
            });
            if (_0x55e5f6['filter'](function (_0x1ca787) {
                return _0x1ca787['playerCount'] < _0x4d47a8;
            })['length'] > 0x0) {
                _0x55e5f6 = _0x55e5f6['filter'](function (_0x4fe82b) {
                    return _0x4fe82b['playerCount'] < _0x4d47a8;
                });
            }
            var _0x241e07 = Math['min'](_0x251748, _0x55e5f6['length']);
            var _0x22c0b0 = Math['floor'](Math['random']() * _0x241e07);
            _0x22c0b0 = Math['min'](_0x22c0b0, _0x55e5f6['length'] - 0x1);
            var _0x3eebfd = _0x55e5f6[_0x22c0b0];
            this['log']('Found server.');
            if (_0x3a0009) {
                this['log']('Redirecting...');
                this['switchServer'](_0x3eebfd['region'] + ':' + _0x3eebfd['index']);
            } else {
                this['log']('Connecting...');
                this['connect'](_0x3eebfd);
            }
        };
        _0x37c676['prototype']['connect'] = function (_0x51a98b) {
            if (this['connected']) {
                return;
            }
            this['log']('Connecting to server:', _0x51a98b);
            this['region'] = _0x51a98b['region'];
            this['server'] = _0x51a98b;
            this['log']('Calling callback with address', this['serverAddress'](_0x51a98b['ip']), 'on port', this['serverPort'](_0x51a98b));
            this['callback'](this['serverAddress'](_0x51a98b['ip']), this['serverPort'](_0x51a98b));
        };
        _0x37c676['prototype']['switchServer'] = function (_0x52fe3a) {
            this['switchingServers'] = !![];
            window['location']['href'] = '/?server=' + _0x52fe3a;
        };
        _0x37c676['prototype']['serverAddress'] = function (_0x3e86a8, _0x122719) {
            if (_0x3e86a8 == '127.0.0.1' || _0x3e86a8 == '7f000001' || _0x3e86a8 == '903d62ef5d1c2fecdcaeb5e7dd485eff') {
                return window['location']['hostname'];
            } else if (this['rawIPs']) {
                if (_0x122719) {
                    return 'ip_' + this['hashIP'](_0x3e86a8) + '.' + this['baseUrl'];
                } else {
                    return _0x3e86a8;
                }
            } else {
                return 'ip_' + _0x3e86a8 + '.' + this['baseUrl'];
            }
        };
        _0x37c676['prototype']['serverPort'] = function (_0x24e6dc) {
            if (_0x24e6dc['region'] == 0x0) {
                return this['devPort'];
            }
            return location['protocol']['startsWith']('https') ? 0x1bb : 0x50;
        };
        _0x37c676['prototype']['processServers'] = function () {
            var _0x49bb08 = {};
            var _0x2995dc = vultr['servers'];
            for (var _0x2318e6 = 0x0; _0x2318e6 < _0x2995dc['length']; _0x2318e6++) {
                var _0x186dd7 = _0x2995dc[_0x2318e6];
                var _0x1aea2b = _0x49bb08[_0x186dd7['region']];
                if (_0x1aea2b == undefined) {
                    _0x1aea2b = [];
                    _0x49bb08[_0x186dd7['region']] = _0x1aea2b;
                }
                _0x1aea2b['push'](_0x186dd7);
            }
            for (var _0x5aca69 in _0x49bb08) {
                _0x49bb08[_0x5aca69] = _0x49bb08[_0x5aca69]['sort'](function (_0x6569c2, _0x14e17c) {
                    return _0x6569c2['index'] - _0x14e17c['index'];
                });
            }
            return _0x49bb08;
        };
        _0x37c676['prototype']['ipToHex'] = function (_0x362b18) {
            const _0x56aa8f = _0x362b18['split']('.')['map'](function (_0x318ea9) {
                ('00' + parseInt(_0x318ea9)['toString'](0x10))['substr'](-0x2);
            })['join']('')['toLowerCase']();
            return _0x56aa8f;
        };
        _0x37c676['prototype']['hashIP'] = function (_0xd6186) {
            return _0x104651(this['ipToHex'](_0xd6186));
        };
        _0x37c676['prototype']['log'] = function () {
            if (this['debugLog']) {
                return;
            } else if (console['verbose']) {
                return;
            }
        };
        _0x47fded['exports'] = _0x37c676;
    }
}, [0x1]);