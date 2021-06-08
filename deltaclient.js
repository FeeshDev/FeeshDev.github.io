webpackJsonp([0x0], {
    1: function (_0x4b1366, _0x1fa353, _0x1eccf1) {
        var _0x2e0123 = window['VULTR_SCHEME'];
        if (_0x2e0123 == 'build_redirect') {
            window['location']['href'] = 'https://build_redirect.buildroyale.io/redirect.html';
        }
        var _0x21dcd8 = ![];
        try {
            var _0xdf868f = ['buildroyale-io.com', 'buildroyale.online', 'buildroyale.org', 'buildroyal.io', 'buildroyaleio.com', 'build-royale.com', 'red-ball4.com'];
            for (var _0x1d4dd2 = 0x0; _0x1d4dd2 < _0xdf868f['length']; _0x1d4dd2++) {
                for (var _0x65eb15 = 0x0; _0x65eb15 < window['location']['ancestorOrigins']['length']; _0x65eb15++) {
                    if (window['location']['ancestorOrigins'][_0x65eb15]['includes'](_0xdf868f[_0x1d4dd2])) {
                        window['location']['href'] = 'https://build_redirect.buildroyale.io/redirect.html';
                    }
                }
            }
            for (var _0x65eb15 = 0x0; _0x65eb15 < window['location']['ancestorOrigins']['length']; _0x65eb15++) {
                if (window['location']['ancestorOrigins'][_0x65eb15]['includes']('crazygames.com')) {
                    var _0x5aaf52 = document['createElement']('script');
                    _0x5aaf52['src'] = 'https://sdk.crazygames.com/crazygames-sdk-v1.js';
                    document['head']['appendChild'](_0x5aaf52);
                    _0x21dcd8 = !![];
                    break;
                }
            }
        } catch (_0x3f4dcc) {
            console['log'](_0x3f4dcc);
        }
        window['_requestAnimationFrame'] = window['requestAnimationFrame'];
        window['requestAnimationFrame'] = function (_0x5c5df6) {
            setTimeout(function () {
                window['_requestAnimationFrame'](_0x5c5df6);
            }, 0x0);
        };
        var _0x366d5b = ['prod', 'duos', 'squads'];
        var _0xbabb47 = [0x1, 0x2, 0x4];
        var _0x354918 = window['location']['hostname'] + ':8081';
        var _0x5b1c4e = ['dj'];
        if (_0x2e0123 == 'build_notbeta') {
            _0x5b1c4e = ['dj'];
        }
        if (_0x2e0123 == 'build_prod') {
            _0x5b1c4e = ['be', 'sd', 'vz', 'ea'];
        }

        function _0x3048b7() {
            return _0x5b1c4e[Math['floor'](Math['random']() * _0x5b1c4e['length'])];
        }

        function _0x29cba4(_0x37305d, _0x43995b) {
            if (!_0x43995b) _0x43995b = window['location']['href'];
            _0x37305d = _0x37305d['replace'](/[\[\]]/g, '\\$&');
            var _0x2cee39 = new RegExp('[?&]' + _0x37305d + '(=([^&#]*)|&|#|$)'),
                _0x688ffa = _0x2cee39['exec'](_0x43995b);
            if (!_0x688ffa) return null;
            if (!_0x688ffa[0x2]) return '';
            return decodeURIComponent(_0x688ffa[0x2]['replace'](/\+/g, ' '));
        }
        window['enableChristmas'] = ![];
        var _0x595d79 = window['enableChristmas'];
        var _0x15e5b4 = -0x1;

        function _0x24bb85() {
            var _0x41674b = new XMLHttpRequest();
            var _0x23d1ac = _0x3048b7();
            var _0x117be4 = 'https://build_matchmaking_' + _0x23d1ac + '.buildroyale.io/RESTservers';
            _0x41674b['open']('GET', _0x117be4, !![]);
            _0x41674b['send']();
            _0x41674b['onreadystatechange'] = function (_0x35f2b0) {
                if (_0x41674b['readyState'] != 0x4 || _0x41674b['status'] != 0xc8 && _0x41674b['status'] != 0x130) {
                    return;
                }
                var _0x3052e0 = _0x41674b['responseText'];
                var _0x378ea4 = JSON['parse'](_0x3052e0)['servers'];
                var _0x31d95a = [];
                var _0x5b8111 = [];
                var _0x352528 = [];
                for (var _0x6ee27b = 0x0; _0x6ee27b < _0x378ea4['length']; _0x6ee27b++) {
                    var _0x26e931 = _0x378ea4[_0x6ee27b];
                    var _0x4ba3ae = ![];
                    for (var _0xad2c87 = 0x0; _0xad2c87 < _0x352528['length']; _0xad2c87++) {
                        if (_0x352528[_0xad2c87]['region'] == _0x26e931['region']) {
                            var _0x57b350 = _0x352528[_0xad2c87];
                            if (_0x26e931['playerCount'] - _0x26e931['index'] < _0x57b350['playerCount'] - _0x57b350['index'] && _0x26e931['index'] < 0xa) {
                                _0x352528[_0xad2c87] = _0x26e931;
                            }
                            _0x4ba3ae = !![];
                        }
                    }
                    if (!_0x4ba3ae) {
                        _0x352528['push'](_0x26e931);
                    }
                }
                for (var _0x6ee27b = 0x0; _0x6ee27b < _0x352528['length']; _0x6ee27b++) {
                    var _0x26e931 = _0x352528[_0x6ee27b];
                    if (_0x5b8111['indexOf'](_0x26e931['region']) !== -0x1) continue;
                    (function (_0x5c49ce) {
                        var _0x335e2b = new XMLHttpRequest();
                        _0x335e2b['onreadystatechange'] = function (_0x902ee2) {
                            var _0x329a7b = _0x902ee2['target'];
                            if (_0x329a7b['readyState'] != 0x4) return;
                            if (_0x329a7b['status'] == 0xc8) {
                                for (var _0x4760d7 = 0x0; _0x4760d7 < _0x31d95a['length']; _0x4760d7++) {
                                    _0x31d95a[_0x4760d7]['abort']();
                                }
                                _0x15e5b4 = _0x5c49ce['region'];
                                onRegionGet(_0x15e5b4);
                            } else {}
                        };
                        var _0x5275aa = 'https://' + _0x5a3bad(_0x5c49ce['ip']) + ':' + _0x1caa4d(_0x5c49ce) + '/ping';
                        _0x335e2b['open']('GET', _0x5275aa, !![]);
                        _0x335e2b['send'](null);
                        _0x31d95a['push'](_0x335e2b);
                    }(_0x26e931));
                }

                function _0x5a3bad(_0x38daa3) {
                    if (_0x38daa3 == '127.0.0.1' || _0x38daa3 == '7f000001' || _0x38daa3 == '903d62ef5d1c2fecdcaeb5e7dd485eff') {
                        return window['location']['hostname'];
                    } else {
                        return 'ip_' + _0x38daa3 + '.buildroyale.io';
                    }
                }

                function _0x1caa4d(_0x70f8d8) {
                    if (_0x70f8d8['region'] == 0x0) {
                        return 0x1f90;
                    }
                    return 0x1bb;
                }
            };
        }
        _0x24bb85();

        function _0x2d0261() {
            if (gameWrapper['enabled'] && gameWrapper['isStoreLoaded']) {
                var _0x48581c = gameWrapper['allProducts']['find'](_0x47604e => _0x47604e['productId'] == 'io.buildroyale.app.remove_ads');
                return _0x48581c['metadata'] != null ? _0x48581c : null;
            } else {
                return null;
            }
        }

        function _0x758a24() {
            var _0x47328a = _0x2d0261();
            var _0x3a97d8 = _0x47328a && !_0x47328a['isOwned'];
            document['getElementById']('disableAdsButton')['style']['display'] = _0x3a97d8 ? '' : 'none';
        }
        window['onload'] = function () {
            try {
                for (var _0x441ab1 = 0x0; _0x441ab1 < window['location']['ancestorOrigins']['length']; _0x441ab1++) {
                    if (window['location']['ancestorOrigins'][_0x441ab1]['includes']('crazygames.com')) {
                        document['getElementById']('more')['style']['visibility'] = 'hidden';
                    }
                }
            } catch (_0x523879) {}
            try {
                if (_0x21dcd8) {
                    var _0x5ac3ca = window['CrazyGames']['CrazySDK']['getInstance']();
                    _0x5ac3ca['init']();
                    _0x5ac3ca['requestBanner']([{
                        'containerId': 'buildroyale-io_300x250',
                        'size': '300x250'
                    }, {
                        'containerId': 'buildroyale-io_300x250_2',
                        'size': '300x250'
                    }]);
                }
            } catch (_0x420f04) {}
            if (_0x223ed9() && !localStorage['ytskin']) {}

            function _0x36e333(_0x14bbdd) {
                var _0x4ab7b9 = document['getElementById'](_0x14bbdd)['style'];
                _0x4ab7b9['visibility'] = 'hidden';
                _0x4ab7b9['display'] = 'none';
            }

            function _0x2baa30(_0x2e45fc) {
                var _0x11d86b = document['getElementById'](_0x2e45fc)['style'];
                _0x11d86b['visibility'] = 'visible';
                _0x11d86b['display'] = 'initial';
            }
            if (_0x595d79) {
                window['groundColor'] = '#CCC';
                console['log']('CHANGED TO CHRISTMAS COLOR');
            }
            gameWrapper['onStoreLoad'] = function () {
                _0x758a24();
            };
            gameWrapper['onPurchaseSuccess'] = function () {
                _0x758a24();
            };
            _0x758a24();
            document['getElementById']('disableAdsButton')['addEventListener']('click', function () {
                gameWrapper['makePurchase']('io.buildroyale.app.remove_ads');
            });
            var _0x21f407;
            if (!_0x21dcd8) {
                _0x21f407 = document['createElement']('script');
                _0x21f407['src'] = '//api.adinplay.com/libs/aiptag/pub/ORP/buildroyale.io/tag.min.js';
                document['head']['appendChild'](_0x21f407);
            }
            var _0x3ef56e = document['createElement']('script');
            _0x3ef56e['src'] = 'https://www.googletagservices.com/tag/js/gpt.js';
            document['head']['appendChild'](_0x3ef56e);
            (function (_0x3a0e6c, _0x16072f, _0x4bc3bc, _0x304372, _0x28d752, _0x4b250b, _0x3b6220) {
                _0x3a0e6c['GoogleAnalyticsObject'] = _0x28d752;
                _0x3a0e6c[_0x28d752] = _0x3a0e6c[_0x28d752] || function () {
                    (_0x3a0e6c[_0x28d752]['q'] = _0x3a0e6c[_0x28d752]['q'] || [])['push'](arguments);
                }, _0x3a0e6c[_0x28d752]['l'] = 0x1 * new Date();
                _0x4b250b = _0x16072f['createElement'](_0x4bc3bc), _0x3b6220 = _0x16072f['getElementsByTagName'](_0x4bc3bc)[0x0];
                _0x4b250b['async'] = 0x1;
                _0x4b250b['src'] = _0x304372;
                _0x3b6220['parentNode']['insertBefore'](_0x4b250b, _0x3b6220);
            }(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga'));
            setTimeout(function () {
                if (ga !== undefined) {
                    ga('create', 'UA-87346685-5', 'auto');
                    ga('send', 'pageview');
                }
            }, 0x1388);
            var _0x479bca = [];
            var _0x41bee7 = [];

            function _0x52811c(_0x29ada4) {
                if (_0x479bca['indexOf'](_0x29ada4) != -0x1) {
                    return _0x41bee7[_0x479bca['indexOf'](_0x29ada4)];
                }
                var _0x3a9ac5 = null;
                _0x3a9ac5 = document['getElementById'](_0x29ada4);
                _0x479bca['push'](_0x29ada4);
                _0x41bee7['push'](_0x3a9ac5);
                return _0x3a9ac5;
            }
            try {} catch (_0x2d1a0a) {}
            if (_0x4d72a3 && !gameWrapper['enabled'] && !_0x21dcd8) {
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
            var _0xec2d8d = '';
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x366d5b['length']; _0x441ab1++) {
                var _0x2b5d8b = 'https://' + _0x366d5b[_0x441ab1] + '.buildroyale.io';
                if (_0x366d5b[_0x441ab1] == 'prod') {
                    _0x2b5d8b = 'https://buildroyale.io/';
                }
                var _0x1b0a01 = 0x0;
                if (_0x441ab1 > 0x0) {
                    _0x1b0a01 = -0x12;
                }
                _0xec2d8d += '<div><a class=\"a\"  style=\"margin-top: ' + _0x1b0a01 + 'px; margin-right: 0; display: block; width: fit-content; height: fit-content;\"><img id=\"playlist' + _0x441ab1 + '\" class=\"queue\" draggable=\"false\" src=\"buildart/build_' + _0x366d5b[_0x441ab1] + '.png\"></a></div>';
            }
            _0xec2d8d += '<div id=\"partyleader\" align=\"center\" style=\"position: fixed; margin-top: 0px; top:' + (_0x366d5b['length'] * 0x55 - 0x14) + 'px; right: 0px; width: 255px;\">Only the party leader<br>can select a playlist</div>';
            document['getElementById']('reftopright')['innerHTML'] = _0xec2d8d;
            _0x36e333('partyleader');
            window['vultr'] = {
                'servers': []
            };
            var _0x5c20b6 = _0x1eccf1(0x2);
            var _0x2fc60e;
            var _0x4d72a3 = window['location']['hostname']['indexOf']('buildroyale.io') != -0x1 || window['location']['hostname']['indexOf']('buildroyale.net') != -0x1;
            if (!_0x4d72a3 && location['protocol'] === 'https:') {
                alert('Please use HTTP in development, since the SSL certificates are not valid for the c9users.io domain.');
            }
            if (_0x4d72a3) {
                _0x2fc60e = new _0x5c20b6('buildroyale.io', 0x1f90, 0x64, 0x2, ![]);
            } else {
                _0x2fc60e = new _0x5c20b6(_0x354918, 0x50, 0x64, 0x2, ![]);
            }
            _0x2fc60e['debugLog'] = ![];
            var _0x29af9f = _0x1eccf1(0xe);
            var _0x5c6dd8 = _0x1eccf1(0xf);
            var _0x117b6e = new _0x5c6dd8();
            var _0x28097e = 0x3e80;
            var _0x5272a6 = 0x0;
            var _0x53cafc = 0x0;
            var _0x60b1ef = -0x1;
            var _0x413d8d = ![];
            window['grassTypes'] = 0x3;
            window['grassWidth'] = 0x3c;
            window['grass'] = [];
            for (var _0x441ab1 = 0x0; _0x441ab1 < window['grassTypes']; _0x441ab1++) {
                window['grassCanvas' + _0x441ab1] = document['createElement']('canvas');
                window['grassCanvas' + _0x441ab1]['width'] = window['grassWidth'];
                window['grassCanvas' + _0x441ab1]['height'] = window['grassWidth'];
                window['grassCtx' + _0x441ab1] = window['grassCanvas' + _0x441ab1]['getContext']('2d');
                window['grassCtx' + _0x441ab1]['translate'](window['grassCanvas' + _0x441ab1]['width'] / 0x2, window['grassCanvas' + _0x441ab1]['height'] / 0x2);
                var _0x30fffd = new _0x117b6e['object']();
                _0x30fffd['position']['y'] = 0x1e;
                _0x30fffd['rotational'] = new _0x117b6e['object']();
                _0x30fffd['img'] = new _0x117b6e['image'](_0x52811c('grass' + _0x441ab1), 0x0, -0x1e, 0x46, 0x46, 0.3);
                _0x30fffd['rotational']['add'](_0x30fffd['img']);
                _0x30fffd['add'](_0x30fffd['rotational']);
                window['grass' + _0x441ab1] = _0x30fffd;
            }

            function _0x484a57() {
                for (var _0x29de89 = 0x0; _0x29de89 < window['grassTypes']; _0x29de89++) {
                    var _0xef6542 = window['grassCanvas' + _0x29de89]['width'];
                    window['grassCtx' + _0x29de89]['clearRect'](-_0xef6542 / 0x2, -_0xef6542 / 0x2, _0xef6542, _0xef6542);
                    window['grass' + _0x29de89]['render'](window['grassCtx' + _0x29de89], 0x1, 0x1);
                    window['grassCtx' + _0x29de89]['clearRect'](-_0xef6542 / 0x2, 0x17, _0xef6542, 0x1e);
                }
            }
            _0x484a57();
            window['mobilecheck'] = function () {
                var _0x33d7c6 = ![];
                (function (_0x46f403) {
                    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i ['test'](_0x46f403) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i ['test'](_0x46f403['substr'](0x0, 0x4))) _0x33d7c6 = !![];
                }(navigator['userAgent'] || navigator['vendor'] || window['opera']));
                return _0x33d7c6;
            };
            var _0x643dd1 = window['mobilecheck']();
            window['addEventListener']('resize', function (_0x58fa31) {
                _0x643dd1 = window['mobilecheck']();
            });
            if (_0x643dd1) {
                _0x52811c('buildroyale-io_300x250')['style']['display'] = 'none';
                _0x52811c('buildroyale-io_300x250')['style']['visibility'] = 'hidden';
                _0x52811c('buildroyale-io_300x250_2')['style']['display'] = 'none';
                _0x52811c('buildroyale-io_300x250_2')['style']['visibility'] = 'hidden';
                _0x52811c('buildroyale-io_728x90')['style']['display'] = 'none';
                _0x52811c('buildroyale-io_728x90')['style']['visibility'] = 'hidden';
                _0x52811c('buildroyale-io_300x600')['style']['display'] = 'none';
                _0x52811c('buildroyale-io_300x600')['style']['visibility'] = 'hidden';
            }

            function _0x223ed9() {
                var _0x42a1aa = 'test';
                try {
                    localStorage['setItem'](_0x42a1aa, _0x42a1aa);
                    localStorage['removeItem'](_0x42a1aa);
                    return !![];
                } catch (_0x2f76aa) {
                    return ![];
                }
            }

            function _0x1cfc50() {
                return {
                    'array': [],
                    'length': 0x0,
                    'push': function (_0x180f58) {
                        this['array'][this['length']++] = _0x180f58;
                    },
                    'pushIfNotIn': function (_0x3a2734) {
                        if (!this['contains'](_0x3a2734)) {
                            this['push'](_0x3a2734);
                        }
                    },
                    'sort': function (_0x3fc5e0) {
                        this['array']['sort'](_0x3fc5e0);
                    },
                    'removeIfIn': function (_0x47bb1b) {
                        while (this['indexOf'](_0x47bb1b) != -0x1) {
                            this['remove'](this['indexOf'](_0x47bb1b));
                        }
                    },
                    'remove': function (_0x49af4e) {
                        if (_0x49af4e >= this['length'] || _0x49af4e < 0x0) {
                            return;
                        }
                        for (var _0x10f110 = _0x49af4e; _0x10f110 < this['length'] - 0x1; _0x10f110++) {
                            this['array'][_0x10f110] = this['array'][_0x10f110 + 0x1];
                        }
                        this['length']--;
                    },
                    'splice': function (_0x1a5782, _0x1ad459) {
                        for (var _0x1e84c6 = 0x0; _0x1e84c6 < _0x1ad459 && _0x1a5782 < this['length']; _0x1e84c6++) {
                            this['remove'](_0x1a5782);
                        }
                    },
                    'forEach': function (_0x55f976) {
                        for (var _0xa3402b = 0x0; _0xa3402b < this['length']; _0xa3402b++) {
                            if (_0x55f976(this['array'][_0xa3402b])) {
                                this['remove'](_0xa3402b);
                                _0xa3402b--;
                            }
                        }
                    },
                    'indexOf': function (_0xae33d4) {
                        for (var _0x5118ff = 0x0; _0x5118ff < this['length']; _0x5118ff++) {
                            if (this['array'][_0x5118ff] == _0xae33d4) {
                                return _0x5118ff;
                            }
                        }
                        return -0x1;
                    },
                    'contains': function (_0xa4586d) {
                        return this['indexOf'](_0xa4586d) != -0x1;
                    },
                    'makeDebugArray': function () {
                        var _0x5793a0 = [];
                        for (var _0x3614d8 = 0x0; _0x3614d8 < this['length']; _0x3614d8++) {
                            _0x5793a0['push'](this['array'][_0x3614d8]);
                        }
                        return _0x5793a0;
                    }
                };
            }
            var _0x1acb6f = {
                'linear': function (_0x45d733) {
                    return _0x45d733;
                },
                'easeOutElastic': function (_0xeee46f) {
                    var _0x47d19a = 0x2 * Math['PI'] / 0x3;
                    return _0xeee46f === 0x0 ? 0x0 : _0xeee46f === 0x1 ? 0x1 : Math['pow'](0x2, -0xa * _0xeee46f) * Math['sin']((_0xeee46f * 0xa - 0.75) * _0x47d19a) + 0x1;
                },
                'easeInQuad': function (_0x3a9a19) {
                    return _0x3a9a19 * _0x3a9a19;
                },
                'easeOutQuad': function (_0x15ea9c) {
                    return 0x1 - (0x1 - _0x15ea9c) * (0x1 - _0x15ea9c);
                },
                'easeInExpo': function (_0x3daace) {
                    return _0x3daace === 0x0 ? 0x0 : Math['pow'](0x2, 0xa * _0x3daace - 0xa);
                },
                'easeOutExpo': function (_0x4887f5) {
                    return _0x4887f5 === 0x1 ? 0x1 : 0x1 - Math['pow'](0x2, -0xa * _0x4887f5);
                },
                'easeOutCubic': function (_0x215159) {
                    return 0x1 - (0x1 - _0x215159) * (0x1 - _0x215159) * (0x1 - _0x215159);
                },
                'easeInCubic': function (_0x5bed09) {
                    return _0x5bed09 * _0x5bed09 * _0x5bed09;
                },
                'easeInQuart': function (_0x5618bd) {
                    return _0x5618bd * _0x5618bd * _0x5618bd * _0x5618bd;
                }
            };

            function _0x9506e3(_0x10b04c, _0x35c8d4, _0xe1557e, _0x54670a, _0x49ae07, _0x426766, _0x3f1888, _0x1d98e7) {
                return {
                    'obj': _0x10b04c,
                    'param': _0x35c8d4,
                    'old': _0xe1557e,
                    'newp': _0x54670a,
                    'time': _0x49ae07,
                    'delay': _0x426766 || 0x0,
                    'currentTime': 0x0,
                    'ef': _0x3f1888,
                    'cb': _0x1d98e7
                };
            }
            var _0x384a60 = new _0x1cfc50();

            function _0x4c6fa4(_0x198362, _0x430d1d) {
                for (var _0x450637 = 0x0; _0x450637 < _0x384a60['length']; _0x450637++) {
                    if (_0x384a60['array'][_0x450637]['obj'] == _0x198362 && _0x384a60['array'][_0x450637]['param'] == _0x430d1d) {
                        _0x384a60['splice'](_0x450637, 0x1);
                        _0x450637--;
                    }
                }
            }

            function _0x597340(_0x52d7dd, _0x24c554, _0xb4067, _0xb86001, _0x4f1a57, _0x158d8c, _0x1a6287, _0x1d53cf) {
                _0x4c6fa4(_0x52d7dd, _0x24c554);
                _0x384a60['push'](new _0x9506e3(_0x52d7dd, _0x24c554, _0xb4067, _0xb86001, _0x4f1a57, _0x158d8c, _0x1a6287 || _0x1acb6f['easeOutExpo'], _0x1d53cf));
            }

            function _0x7b71bb(_0x33c7a5) {
                for (var _0x193f2c = 0x0; _0x193f2c < _0x384a60['length']; _0x193f2c++) {
                    var _0x4a520a = _0x384a60['array'][_0x193f2c];
                    _0x4a520a['currentTime'] += _0x33c7a5;
                    if (_0x4a520a['currentTime'] < _0x4a520a['delay']) {
                        continue;
                    }
                    if (_0x4a520a['currentTime'] > _0x4a520a['delay'] + _0x4a520a['time']) {
                        _0x4a520a['obj'][_0x4a520a['param']] = _0x4a520a['newp'];
                        if (_0x4a520a['cb'] !== undefined) {
                            _0x4a520a['cb'](_0x4a520a['obj']);
                        }
                        _0x384a60['splice'](_0x193f2c, 0x1);
                        _0x193f2c--;
                        continue;
                    }
                    var _0x1559aa = (_0x4a520a['currentTime'] - _0x4a520a['delay']) / _0x4a520a['time'];
                    _0x4a520a['obj'][_0x4a520a['param']] = _0x117b6e['normalLerp'](_0x4a520a['old'], _0x4a520a['newp'], _0x4a520a['ef'](_0x1559aa));
                }
            }
            var _0x1b6624 = !![];
            var _0x309482 = null;
            var _0x10bc7c = [];
            var _0x37901c = null;
            var _0x469de2 = 0x0;
            var _0x4a3c0d = ![];
            var _0x2c9838 = '';
            var _0xef05cb = '';
            var _0x384a1f = !![];
            var _0x1a267a = ![];
            var _0x419d90 = Date['now']();
            var _0xceb451 = 'build_' + _0x366d5b[0x0];
            var _0x3ed413 = [];
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x366d5b['length']; _0x441ab1++) {
                if (_0x441ab1 == 0x0) {
                    try {
                        document['getElementById']('playlist' + _0x441ab1)['style']['filter'] = 'drop-shadow(0px 0px 3px #ccc)';
                    } catch (_0x41b6c2) {
                        console['log']('STYLE 1');
                    }
                }
                try {
                    document['getElementById']('playlist' + _0x441ab1)['onclick'] = function (_0x1ecfe0) {
                        if (_0x384a1f) {
                            var _0x154e56 = _0x1ecfe0['target']['id']['substr'](0x8);
                            for (var _0x574a6d = 0x0; _0x574a6d < _0x366d5b['length']; _0x574a6d++) {
                                document['getElementById']('playlist' + _0x574a6d)['style']['filter'] = 'drop-shadow(0px 0px 0px #222)';
                            }
                            _0x1ecfe0['target']['style']['filter'] = 'drop-shadow(0px 0px 3px #ccc)';
                            _0xceb451 = 'build_' + _0x366d5b[_0x154e56];
                            if (_0x309482 != null) {
                                _0x3ed413['push']({
                                    'type': 'setqueue',
                                    'queue': 'build_' + _0x366d5b[_0x154e56]
                                });
                            }
                        }
                    };
                } catch (_0x19754a) {
                    console['log']('STYLE 2');
                }
            }
            var _0x1b4b6d = {
                'join': function (_0x2938a8) {
                    _0x1a267a = !![];
                    var _0x4aac2b = _0x4d72a3 ? 'wss:' : 'ws:';
                    if (_0x117b6e['ws']['readyState'] != 0x1) {
                        _0x463062();
                        hideAllModals();
                        if (_0x4d72a3) {
                            _0x117b6e['createSocket'](_0x4aac2b + '//ip_' + _0x2938a8['ip'] + '.buildroyale.io/ws');
                            if (_0x21dcd8) {
                                _0x5ac3ca['gameplayStart']();
                            }
                        } else {
                            _0x117b6e['createSocket'](_0x4aac2b + '//' + _0x354918 + '/ws');
                        }
                        var _0x411c9d = '';
                        if (_0x223ed9() && localStorage['p'] !== undefined) {
                            _0x411c9d = localStorage['p'];
                        }
                        var _0x23673a = '';
                        if (_0x223ed9() && localStorage['weaponSkin'] !== undefined) {
                            _0x23673a = localStorage['weaponSkin'];
                        }
                        var _0x42dd9c = {
                            'type': 'start',
                            'name': _0x52811c('nameBox')['value'],
                            'party': _0xef05cb,
                            'p': _0x411c9d,
                            'ws': _0x23673a,
                            'loc': window['location']['href'],
                            'locker': _0x344d3a
                        };
                        if (window['token']) {
                            _0x42dd9c['token'] = window['token'];
                        }
                        _0x117b6e['currentPackets']['push'](_0x42dd9c);
                    }
                },
                'error': function (_0x2e6c88) {
                    if (_0x2e6c88['message'] === undefined) {
                        return;
                    }
                    alert(_0x2e6c88['message']);
                    if (_0x309482 != null) {
                        console['log']('Closing Error');
                        _0x309482['close']();
                        _0x309482 = null;
                    }
                },
                'pu': function (_0x473b85) {
                    if (_0x473b85['m'] === undefined) {
                        return;
                    }
                    for (var _0x4e2c4b = 0x0; _0x4e2c4b < 0x4; _0x4e2c4b++) {
                        document['getElementById']('partyname' + _0x4e2c4b)['innerHTML'] = '';
                    }
                    for (var _0x4e2c4b = 0x0; _0x4e2c4b < 0x4; _0x4e2c4b++) {
                        document['getElementById']('partynamediv' + _0x4e2c4b)['style']['opacity'] = '0.5';
                        document['getElementById']('partynamediv' + _0x4e2c4b)['style']['borderColor'] = 'rgba(255,255,255,0.5)';
                        document['getElementById']('partynamediv' + _0x4e2c4b)['style']['background'] = 'rgba(0,0,0,0.3)';
                    }
                    for (var _0x4e2c4b = 0x0; _0x4e2c4b < _0x473b85['m']['length'] && _0x4e2c4b < 0x4; _0x4e2c4b++) {
                        var _0x554138 = _0x473b85['m'][_0x4e2c4b][0x0];
                        var _0x1b229f = _0x473b85['m'][_0x4e2c4b][0x1];
                        document['getElementById']('partynamediv' + _0x4e2c4b)['style']['opacity'] = '1';
                        document['getElementById']('partyname' + _0x4e2c4b)['style']['opacity'] = '1';
                        if (_0x554138 == '') {
                            _0x554138 = '<unnamed>';
                            document['getElementById']('partyname' + _0x4e2c4b)['style']['opacity'] = '0.5';
                        }
                        if (_0x1b229f == !![]) {
                            document['getElementById']('partyname' + _0x4e2c4b)['style']['opacity'] = '1';
                            document['getElementById']('partynamediv' + _0x4e2c4b)['style']['borderColor'] = 'rgba(0,187,0,0.5)';
                            document['getElementById']('partynamediv' + _0x4e2c4b)['style']['background'] = 'rgba(0,187,0,0.25)';
                        }
                        document['getElementById']('partyname' + _0x4e2c4b)['textContent'] = _0x554138;
                    }
                    _0xef05cb = _0x473b85['id'];
                    if (document['getElementById']('partyid')['innerHTML'] != 'Party ID: ' + _0x473b85['id']) {
                        document['getElementById']('partyid')['innerHTML'] = 'Party ID: ' + _0x473b85['id'];
                        window['history']['replaceState'](null, '', '/?p=' + _0x473b85['id']);
                        if (_0x21dcd8) {
                            _0x5ac3ca['inviteLink']({
                                'p': _0x473b85['id']
                            });
                        }
                    }
                    for (var _0x5987ac = 0x0; _0x5987ac < _0x366d5b['length']; _0x5987ac++) {
                        document['getElementById']('playlist' + _0x5987ac)['style']['filter'] = 'drop-shadow(0px 0px 0px #222)';
                    }
                    var _0x4ba519 = Math['max'](_0x366d5b['indexOf'](_0x473b85['q']['substr'](0x6)), 0x0);
                    document['getElementById']('playlist' + _0x4ba519)['style']['filter'] = 'drop-shadow(0px 0px 3px #ccc)';
                    if (_0x473b85['u'] != 0x0) {
                        _0x2baa30('partyleader');
                        _0x384a1f = ![];
                    } else {
                        _0x36e333('partyleader');
                        _0x384a1f = !![];
                    }
                    for (var _0x4e2c4b = 0x0; _0x4e2c4b < _0xbabb47['length']; _0x4e2c4b++) {
                        try {
                            if (_0xbabb47[_0x4e2c4b] < _0x473b85['m']['length']) {
                                document['getElementById']('playlist' + _0x4e2c4b)['style']['opacity'] = 0.3;
                            } else {
                                document['getElementById']('playlist' + _0x4e2c4b)['style']['opacity'] = 0x1;
                            }
                        } catch (_0x5c3c5a) {}
                    }
                    _0x36e333('scene0');
                    _0x36e333('scene1');
                    _0x2baa30('scene2');
                }
            };
            var _0x2972b7 = function (_0xcfcec0) {
                if (msgpack !== undefined) {
                    var _0x2e5e7e = msgpack['decode'](new Uint8Array(_0xcfcec0['data']));
                    for (var _0x1583e2 = 0x0; _0x1583e2 < _0x2e5e7e['length']; _0x1583e2++) {
                        var _0x55611f = _0x2e5e7e[_0x1583e2];
                        if (_0x1b4b6d[_0x55611f['t']] !== undefined) _0x1b4b6d[_0x55611f['t']](_0x55611f);
                        else {
                            console['log']('Encountered issue: unknown packet type');
                            console['log'](_0x2e5e7e);
                        }
                    }
                }
            };

            function _0x21a958() {
                if (_0x309482 == null || msgpack === undefined) {
                    return;
                }
                if (!_0x117b6e['spectating']) {
                    _0x4a3c0d = ![];
                }
                if (_0x309482['readyState'] == 0x1 && _0x3ed413['length'] > 0x0) {
                    _0x309482['send'](msgpack['encode'](_0x3ed413));
                    _0x3ed413 = [];
                }
            }
            var _0x30f8e2 = 0x0;
            var _0x239cea = 0xa;

            function _0x213cf7() {}

            function _0x198256() {
                if (_0x309482 == null) {
                    return;
                }
                if (window['spawnText']['text'] == 'Unready') {
                    _0x2b01eb();
                    return;
                }
                _0x3ed413['push']({
                    'type': 'ready'
                });
                window['spawnButton']['color'] = '#D00';
                window['spawnButton']['strokeStyle'] = '#B00';
                window['spawnText']['belowObjects'][0x0]['strokeStyle'] = '#B00';
                window['spawnText']['belowObjects'][0x0]['text'] = 'Unready';
                window['spawnText']['text'] = 'Unready';
            }

            function _0x2b01eb() {
                _0x3ed413['push']({
                    'type': 'unready'
                });
                window['spawnButton']['color'] = '#0D0';
                window['spawnButton']['strokeStyle'] = '#0B0';
                window['spawnText']['belowObjects'][0x0]['strokeStyle'] = '#0B0';
                window['spawnText']['belowObjects'][0x0]['text'] = 'Ready';
                window['spawnText']['text'] = 'Ready';
            }

            function _0x2005ac(_0x5f070d) {
                if (_0x5f070d === undefined) {
                    var _0x4ee6ba = Math['floor'](Math['random']() * _0x5b1c4e['length']);
                    _0x5f070d = _0x5b1c4e[_0x4ee6ba];
                }
                _0x309482 = new _0x117b6e['socket']('wss://build_matchmaking_' + _0x5f070d + '.buildroyale.io/ws', _0x2972b7, function () {}, function () {
                    if (_0x309482 != null) {
                        _0x309482['close']();
                        _0x309482 = null;
                        window['history']['replaceState'](null, '', '/');
                    }
                    _0x36e333('partyleader');
                    _0x2baa30('scene0');
                    _0x36e333('scene1');
                    _0x36e333('scene2');
                    document['getElementById']('partyid')['innerHTML'] = 'Party ID: xxxxxx';
                    _0x384a1f = !![];
                    window['spawnButton']['color'] = '#0D0';
                    window['spawnButton']['strokeStyle'] = '#0B0';
                    window['spawnText']['belowObjects'][0x0]['strokeStyle'] = '#0B0';
                    window['spawnText']['belowObjects'][0x0]['text'] = 'Ready';
                    window['spawnText']['text'] = 'Ready';
                    for (var _0x359d53 = 0x0; _0x359d53 < _0xbabb47['length']; _0x359d53++) {
                        document['getElementById']('playlist' + _0x359d53)['style']['opacity'] = 0x1;
                    }
                });
            }
            document['getElementById']('nameBox')['onkeydown'] = function () {
                setTimeout(function () {
                    _0x28f688['nametag']['text'] = document['getElementById']('nameBox')['value'];
                    _0x28f688['nametagstroke']['text'] = document['getElementById']('nameBox')['value'];
                }, 0xa);
                if (_0x309482 == null) {
                    return;
                }
                setTimeout(function () {
                    _0x3ed413['push']({
                        'type': 'changename',
                        'name': document['getElementById']('nameBox')['value']
                    });
                }, 0xa);
            };

            function _0x375e75() {
                var _0x37b79f = new XMLHttpRequest();
                var _0x426ae3 = 'https://build_matchmaking_' + _0x3048b7() + '.buildroyale.io/getplayercount';
                _0x37b79f['open']('GET', _0x426ae3, !![]);
                _0x37b79f['send']();
                _0x37b79f['onreadystatechange'] = function (_0x2608ec) {
                    if (_0x37b79f['readyState'] != 0x4 || _0x37b79f['status'] != 0xc8 && _0x37b79f['status'] != 0x130) {
                        return;
                    }
                    var _0x135d59 = _0x37b79f['responseText'];
                    var _0x25bf27 = '<p style=\'margin-bottom: 14px;\'>';
                    _0x25bf27 += _0x135d59 + ' Builders Playing';
                    if (_0x2e0123 == 'build_prod') {} else if (_0x2e0123 == 'build_snipers') {
                        _0x25bf27 += ' Sniper Showdown';
                    } else if (_0x2e0123 == 'build_gold') {
                        _0x25bf27 += ' Solid Gold';
                    } else if (_0x2e0123 == 'build_shotguns') {
                        _0x25bf27 += ' Shotgun Skirmish';
                    } else if (_0x2e0123 == 'build_close') {
                        _0x25bf27 += ' Close Encounters';
                    }
                    _0x25bf27 += '</p>';
                    document['getElementById']('playercount')['innerHTML'] = _0x25bf27;
                };
            }
            _0x375e75();

            function _0x33ec7a() {
                var _0x5a428a = '';
                _0x5a428a += '<div id=\'scene0\'><div id=\'createparty\' class=\'createbutton noselect\'><p class=\'emptyatag\'>Create Party</p></div><div id=\'joinparty\' class=\'joinbutton noselect\'><p class=\'emptyatag\'>Join Party</p></div></div>';
                _0x5a428a += '<div id=\'scene1\'><div class=\'partyborder\'><input placeholder=\'Enter Party ID\' maxlength=\'6\' autocomplete=\'off\' autocorrect=\'off\' autocapitalize=\'off\' spellcheck=\'false\' type=\'text\' class=\'partyinput\' id=\'partyinput\'></div><div id=\'actuallyjoinparty\' class=\'joinbutton noselect\'><p class=\'emptyatag\'>Join Party</p></div><div id=\'back\' class=\'backbutton noselect\'><p class=\'emptyatag\'>Go Back</p></div></div>';
                _0x5a428a += '<div id=\'scene2\'><div id=\'partyid\' style=\'text-align: center; margin-top: 20px; margin-bottom: 12px\'>Party ID: xxxxxx</div><div id=\'partynamediv0\' class=\'round noselect\'><p id=\'partyname0\' class=\'emptytag\'></p></div><div id=\'partynamediv1\' style=\'opacity: 0.5;\' class=\'round noselect\'><p id=\'partyname1\' class=\'emptytag\'></p></div><div id=\'partynamediv2\' style=\'opacity: 0.5;\' class=\'round noselect\'><p id=\'partyname2\' class=\'emptytag\'></p></div><div id=\'partynamediv3\' style=\'opacity: 0.5;\' class=\'round noselect\'><p id=\'partyname3\' class=\'emptytag\'></p></div><div id=\'leaveparty\' class=\'leavebutton noselect\'><p class=\'emptyatag\'>Leave Party</p></div>' + (gameWrapper['enabled'] ? '<div id=\'shareparty\' class=\'sharebutton noselect\'><p class=\'emptyatag\'>Share Party</p></div>' : '') + '</div>';
                _0x5a428a += '<div id=\'settingbutton\' class=\'backbutton noselect\' style=\'margin-top: 25px;\'><p class=\'emptyatag\'>Settings</p></div>';
                document['getElementById']('partystuff')['innerHTML'] = _0x5a428a;
                _0x36e333('scene1');
                _0x36e333('scene2');
                document['getElementById']('createparty')['onclick'] = function () {
                    _0x36e333('scene0');
                    _0x36e333('scene1');
                    _0x2baa30('scene2');
                    _0x2005ac();
                    if (window['cachedRegion'] !== undefined && window['cachedRegion'] != 0x0) {
                        _0x15e5b4 = window['cachedRegion'];
                    }
                    _0x3ed413['push']({
                        'type': 'create',
                        'region': _0x15e5b4
                    });
                    _0x3ed413['push']({
                        'type': 'changename',
                        'name': document['getElementById']('nameBox')['value']
                    });
                };
                document['getElementById']('joinparty')['onclick'] = function () {
                    _0x36e333('scene0');
                    _0x2baa30('scene1');
                    _0x36e333('scene2');
                    document['getElementById']('partyinput')['focus']();
                };
                document['getElementById']('actuallyjoinparty')['onclick'] = function () {
                    _0x2c9838 = document['getElementById']('partyinput')['value'];
                    _0x2c9838 = _0x2c9838['toLowerCase']();
                    if (_0x2c9838['length'] < 0x6) {
                        alert('ID Not Valid - Should be 6 characters long');
                        return;
                    }
                    var _0x2faa39 = _0x2c9838['charAt'](0x0) + _0x2c9838['charAt'](0x1);
                    if (_0x5b1c4e['indexOf'](_0x2faa39) == -0x1) {
                        alert('ID Not Valid - Please check again');
                        return;
                    }
                    if (_0x309482 == null) {
                        _0x2005ac(_0x2faa39);
                        _0x3ed413['push']({
                            'type': 'join',
                            'id': _0x2c9838
                        });
                        _0x3ed413['push']({
                            'type': 'changename',
                            'name': document['getElementById']('nameBox')['value']
                        });
                    }
                };
                document['getElementById']('leaveparty')['onclick'] = function () {
                    if (_0x309482 != null) {
                        _0x309482['close']();
                        _0x309482 = null;
                        window['history']['replaceState'](null, '', '/');
                    }
                    _0x36e333('partyleader');
                    _0x2baa30('scene0');
                    _0x36e333('scene1');
                    _0x36e333('scene2');
                    document['getElementById']('partyid')['innerHTML'] = 'Party ID: xxxxxx';
                    _0x384a1f = !![];
                    window['spawnButton']['color'] = '#0D0';
                    window['spawnButton']['strokeStyle'] = '#0B0';
                    window['spawnText']['belowObjects'][0x0]['strokeStyle'] = '#0B0';
                    window['spawnText']['belowObjects'][0x0]['text'] = 'Ready';
                    window['spawnText']['text'] = 'Ready';
                    for (var _0x11d320 = 0x0; _0x11d320 < _0xbabb47['length']; _0x11d320++) {
                        document['getElementById']('playlist' + _0x11d320)['style']['opacity'] = 0x1;
                    }
                };
                var _0x19e189 = document['getElementById']('shareparty');
                if (_0x19e189) {
                    _0x19e189['onclick'] = function () {
                        gameWrapper['shareContent']({
                            'text': 'Join my Build Royale party! Click \"Join Party\" and enter this party ID: ' + _0xef05cb + '\x0a\x0ahttps://buildroyale.io/'
                        });
                    };
                }
                document['getElementById']('back')['onclick'] = function () {
                    _0x2baa30('scene0');
                    _0x36e333('scene1');
                    _0x36e333('scene2');
                };
                document['getElementById']('settingbutton')['onclick'] = function () {
                    _0x3fd3e6();
                };
                document['getElementById']('partynamediv1')['onclick'] = function () {
                    _0x3ed413['push']({
                        'type': 'kick',
                        'player': 0x1
                    });
                };
                document['getElementById']('partynamediv2')['onclick'] = function () {
                    _0x3ed413['push']({
                        'type': 'kick',
                        'player': 0x2
                    });
                };
                document['getElementById']('partynamediv3')['onclick'] = function () {
                    _0x3ed413['push']({
                        'type': 'kick',
                        'player': 0x3
                    });
                };
            }
            _0x33ec7a();
            var _0x3b50e3 = {};
            var _0x283179 = window['location']['href']['replace'](/[?&]+([^=&]+)=([^&]*)/gi, function (_0x102b6a, _0x3d8fcc, _0xe3e213) {
                _0x3b50e3[_0x3d8fcc] = _0xe3e213;
            });
            if (_0x3b50e3['p'] !== undefined) {
                _0x2c9838 = _0x3b50e3['p'];
                _0x2c9838 = _0x2c9838['toLowerCase']();
                if (_0x2c9838['length'] < 0x6) {
                    return;
                }
                var _0x270a75 = _0x2c9838['charAt'](0x0) + _0x2c9838['charAt'](0x1);
                if (_0x5b1c4e['indexOf'](_0x270a75) == -0x1) {
                    return;
                }
                if (_0x309482 == null) {
                    _0x2005ac(_0x270a75);
                    _0x3ed413['push']({
                        'type': 'join',
                        'id': _0x2c9838
                    });
                    setTimeout(function () {
                        _0x3ed413['push']({
                            'type': 'changename',
                            'name': document['getElementById']('nameBox')['value']
                        });
                    }, 0x32);
                }
            }
            _0x2fc60e['start'](function (_0x15d9e0, _0x2e3442) {
                var _0x47bf69 = _0x4d72a3 ? 'wss:' : 'ws:';
                if (_0x4d72a3) {} else {}
            });

            function _0x585f8c(_0x1004c4) {
                var _0x1ed2e5 = [];
                for (var _0x8f4c30 in _0x1004c4) {
                    _0x1ed2e5['push'](_0x8f4c30);
                }
                return _0x1ed2e5;
            }
            var _0x8f8461 = {
                'Timur Tripp': 'https://www.youtube.com/user/TimurTripp2',
                'Dragon Grinberg': 'https://www.youtube.com/channel/UClrQ-4XYaHYbgq5S26uz1aQ',
                'Gellzone': 'https://www.youtube.com/channel/UCrVzmr53P8FOHspx0d8v4ig'
            };
            var _0x42aa48 = ![];
            var _0x8d827f = _0x585f8c(_0x8f8461);
            var _0x3e066e = _0x8d827f[Math['floor'](Math['random']() * _0x8d827f['length'])];
            document['getElementById']('YouTuberDiv')['innerHTML'] += '<a style=\'width:unset;float:right;margin:unset;font-size:25;color:#79e;text-decoration:none;\' target=\'_blank\' href=\'' + _0x8f8461[_0x3e066e] + '\'>' + _0x3e066e + '</a>';

            function _0x4d9306(_0x50ab62) {
                _0x50ab62 = _0x50ab62['replace'](/[\[]/, '\\[')['replace'](/[\]]/, '\\]');
                var _0x4c2488 = new RegExp('[\\?&]' + _0x50ab62 + '=([^&#]*)');
                var _0x30d445 = _0x4c2488['exec'](location['search']);
                return _0x30d445 === null ? '' : decodeURIComponent(_0x30d445[0x1]['replace'](/\+/g, ' '));
            }
            var _0x1327cb = window['location']['host']['split']('.')[0x0];
            if (_0x1327cb != 'GameDistribution') {
                _0x1327cb = 'GameDistribution';
            }
            var _0x2112dc = 0x0;
            var _0x5525d5 = ![];
            var _0x454358 = ![];
            var _0x1debb8 = -0x1;
            var _0x3746ff = 0x0;
            var _0x2ce264 = 0x0;
            var _0xfffd07 = {
                'gameId': 'a8df29ec79604c758&c637459ec9203',
                'userId': '6F381FEC-FDB4-41A2-9F3C-147A4121B75B-s1',
                'pauseGame': function () {},
                'resumeGame': function () {
                    if (_0x42aa48) window['globalFinish']();
                },
                'onInit': function (_0x245f96) {},
                'onError': function (_0x391d68) {}
            };
            var _0x2b70a6 = {
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

            function _0x252424(_0x115201) {
                _0x2fc60e['switchServer'](_0x115201);
            }
            window['switchServer'] = _0x252424;

            function _0x557814() {
                if (!_0x4d72a3) {
                    var _0x4b13b9 = _0x4d72a3 ? 'wss:' : 'ws:';
                    if (_0x117b6e['ws']['readyState'] != 0x1) {
                        _0x469de2++;
                        _0x463062();
                        hideAllModals();
                        _0x117b6e['createSocket'](_0x4b13b9 + '//' + _0x354918 + '/ws');
                        clearInterval(_0x37901c);
                        _0x37901c = null;
                        var _0x16624d = '';
                        if (_0x223ed9() && localStorage['p'] !== undefined) {
                            _0x16624d = localStorage['p'];
                        }
                        var _0x446f5e = '';
                        if (_0x223ed9() && localStorage['weaponSkin'] !== undefined) {
                            _0x446f5e = localStorage['weaponSkin'];
                        }
                        var _0x331d50 = {
                            'type': 'start',
                            'name': _0x52811c('nameBox')['value'],
                            'party': _0xef05cb,
                            'p': _0x16624d,
                            'ws': _0x446f5e,
                            'loc': window['location']['href'],
                            'locker': _0x344d3a
                        };
                        if (window['token']) {
                            _0x331d50['token'] = window['token'];
                        }
                        _0x117b6e['currentPackets']['push'](_0x331d50);
                    }
                    return;
                }
                var _0x1927aa = new XMLHttpRequest();
                var _0xfdf8d8 = _0x3048b7();
                var _0x2111bb = 'https://build_matchmaking_' + _0xfdf8d8 + '.buildroyale.io/RESTservers';
                if (_0x2e0123 == 'build_notbeta') {
                    _0x2111bb = 'https://build_matchmaking_be.buildroyale.io/RESTservers';
                }
                _0x2111bb += '?queue=' + _0xceb451;
                _0x1927aa['open']('GET', _0x2111bb, !![]);
                _0x1927aa['send']();
                _0x1927aa['onreadystatechange'] = function (_0x12074f) {
                    if (_0x1927aa['readyState'] != 0x4 || _0x1927aa['status'] != 0xc8 && _0x1927aa['status'] != 0x130) {
                        return;
                    }
                    if (_0x117b6e['ws']['readyState'] == 0x0 || _0x117b6e['ws']['readyState'] == 0x1) {
                        if (_0x37901c != null) {
                            clearInterval(_0x37901c);
                            _0x37901c = null;
                        }
                        return;
                    }
                    var _0x37683b = _0x1927aa['responseText'];
                    var _0x3d8fae = JSON['parse'](_0x37683b)['servers'];
                    var _0x325170 = [{
                        'region': 0x7,
                        'index': 0x0
                    }, {
                        'region': 0x3,
                        'index': 0x2
                    }, {
                        'region': 0x3,
                        'index': 0x1
                    }];
                    var _0x54c9e5 = [];
                    for (var _0x257a8d = 0x0; _0x257a8d < _0x3d8fae['length']; _0x257a8d++) {
                        var _0x3ad70c = null;
                        for (var _0x54c2a0 = 0x0; _0x54c2a0 < _0x3d8fae['length']; _0x54c2a0++) {
                            if (_0x54c2a0 != _0x257a8d && _0x3d8fae[_0x257a8d]['region'] == _0x3d8fae[_0x54c2a0]['region'] && _0x3d8fae[_0x257a8d]['index'] == _0x3d8fae[_0x54c2a0]['index']) {
                                _0x3ad70c = _0x3d8fae[_0x54c2a0];
                            }
                        }
                        if (window['cachedRegion'] !== undefined && window['cachedRegion'] != 0x0) {
                            _0x15e5b4 = window['cachedRegion'];
                        }
                        var _0x11564c = ![];
                        for (var _0x54c2a0 = 0x0; _0x54c2a0 < _0x325170['length']; _0x54c2a0++) {
                            if (_0x3d8fae[_0x257a8d]['region'] == _0x325170[_0x54c2a0]['region'] && _0x3d8fae[_0x257a8d]['index'] == _0x325170[_0x54c2a0]['index']) {
                                _0x11564c = !![];
                                break;
                            }
                        }
                        if (_0x366d5b['length'] == 0x1 && _0x366d5b[0x0] == 'ranked') {
                            _0x15e5b4 = 0x3;
                        }
                        if (!_0x11564c && _0x3d8fae[_0x257a8d]['region'] == _0x15e5b4 && _0x3d8fae[_0x257a8d]['playerCount'] < 0x5f && _0x3d8fae[_0x257a8d]['state'] == 'lobby' && (_0x3d8fae[_0x257a8d]['time'] > 0xa || _0x3d8fae[_0x257a8d]['time'] < 0x0) && (_0x3ad70c == null || _0x3ad70c['state'] == 'lobby' || _0x3ad70c['playerCount'] < 0x32 && _0x3ad70c['state'] != 'lobby')) {
                            _0x54c9e5['push'](_0x3d8fae[_0x257a8d]);
                        }
                    }
                    _0x54c9e5['sort'](function (_0x4f1076, _0x540fbd) {
                        var _0x5c1d3a = 0x0;
                        var _0x459b96 = 0x0;
                        if (_0x4f1076['port'] == 0x1f92) {
                            _0x5c1d3a = 0x64;
                        }
                        if (_0x540fbd['port'] == 0x1f92) {
                            _0x459b96 = 0x64;
                        }
                        return _0x4f1076['index'] + _0x5c1d3a - (_0x540fbd['index'] + _0x459b96);
                    });
                    if (_0x4d72a3 && _0x54c9e5['length'] < 0x1) {
                        console['log']('No servers found');
                        return;
                    }
                    var _0x361455 = _0x54c9e5[0x0];
                    for (var _0x257a8d = 0x1; _0x257a8d < _0x54c9e5['length']; _0x257a8d++) {
                        if (_0x54c9e5[_0x257a8d]['playerCount'] > _0x361455['playerCount']) {
                            _0x361455 = _0x54c9e5[_0x257a8d];
                        }
                    }
                    for (var _0x257a8d = 0x0; _0x257a8d < _0x54c9e5['length']; _0x257a8d++) {
                        if (_0x54c9e5[_0x257a8d]['time'] != -0x1) {
                            if (_0x361455['time'] == -0x1 || _0x54c9e5[_0x257a8d]['time'] < _0x361455['time']) {
                                _0x361455 = _0x54c9e5[_0x257a8d];
                            }
                        }
                    }
                    var _0x3f9260 = _0x4d72a3 ? 'wss:' : 'ws:';
                    if (_0x117b6e['ws']['readyState'] != 0x1) {
                        _0x469de2++;
                        _0x463062();
                        hideAllModals();
                        if (_0x4d72a3) {
                            _0x117b6e['createSocket'](_0x3f9260 + '//ip_' + _0x361455['ip'] + '.buildroyale.io/ws');
                            if (_0x21dcd8) {
                                _0x5ac3ca['gameplayStart']();
                            }
                        } else {
                            _0x117b6e['createSocket'](_0x3f9260 + '//' + _0x354918 + '/ws');
                        }
                    }
                    clearInterval(_0x37901c);
                    _0x37901c = null;
                    var _0x526aea = '';
                    if (_0x223ed9() && localStorage['p'] !== undefined) {
                        _0x526aea = localStorage['p'];
                    }
                    var _0x130cb5 = '';
                    if (_0x223ed9() && localStorage['weaponSkin'] !== undefined) {
                        _0x130cb5 = localStorage['weaponSkin'];
                    }
                    var _0x44800b = {
                        'type': 'start',
                        'name': _0x52811c('nameBox')['value'],
                        'party': _0xef05cb,
                        'p': _0x526aea,
                        'ws': _0x130cb5,
                        'loc': window['location']['href'],
                        'locker': _0x344d3a
                    };
                    if (window['token']) {
                        _0x44800b['token'] = window['token'];
                    }
                    _0x117b6e['currentPackets']['push'](_0x44800b);
                };
            }
            var _0x2b1b3 = !![];
            var _0x449a81 = 0x2;
            window['playingAd'] = ![];

            function _0x22fd95(_0x19a4fa, _0x55cc63, _0x5108f5) {
                var _0x18e002 = new Date();
                _0x18e002['setTime'](_0x18e002['getTime']() + _0x5108f5 * 0x18 * 0x3c * 0x3c * 0x3e8);
                var _0x1f2b80 = 'expires=' + _0x18e002['toUTCString']();
                document['cookie'] = _0x19a4fa + '=' + _0x55cc63 + ';' + _0x1f2b80 + ';path=/';
            }

            function _0x478d6e(_0x175262) {
                var _0x25f4f6 = _0x175262 + '=';
                var _0x41ca88 = decodeURIComponent(document['cookie']);
                var _0x3e53f3 = _0x41ca88['split'](';');
                for (var _0x2904f4 = 0x0; _0x2904f4 < _0x3e53f3['length']; _0x2904f4++) {
                    var _0x506440 = _0x3e53f3[_0x2904f4];
                    while (_0x506440['charAt'](0x0) == ' ') {
                        _0x506440 = _0x506440['substring'](0x1);
                    }
                    if (_0x506440['indexOf'](_0x25f4f6) == 0x0) {
                        return _0x506440['substring'](_0x25f4f6['length'], _0x506440['length']);
                    }
                }
                return '';
            }
            window['globalFinish'] = function () {
                _0x22fd95('name', _0x52811c('nameBox')['value'], 0x16d);
                _0x22fd95('skipped', 'false', 0x16d);
                if (_0x37901c == null) {
                    _0x37901c = setInterval(function () {
                        if (_0x1b6624) {
                            _0x557814();
                        } else {
                            _0x213cf7();
                        }
                    }, 0x3e8);
                    _0x557814();
                }
                window['playingAd'] = ![];
            };

            function _0x53f0ab() {
                window['globalFinish']();
            }
            try {
                _0x52811c('nameBox')['value'] = _0x478d6e('name');
            } catch (_0xc33ec0) {}

            function _0xa5959a() {
                var _0x2a238c = 0x0;
                for (var _0x24b3d2 in _0x2fc60e['servers']) {
                    var _0x1812d1 = _0x2fc60e['servers'][_0x24b3d2];
                    var _0x4462d4 = 0x0;
                    for (var _0x5c44e5 = 0x0; _0x5c44e5 < _0x1812d1['length']; _0x5c44e5++) {
                        _0x4462d4 += _0x1812d1[_0x5c44e5]['playerCount'];
                    }
                    _0x2a238c += _0x4462d4;
                    var _0x2ec7c0 = _0x2fc60e['regionInfo'][_0x24b3d2]['name'];
                    var _0x2f9ca0 = document['createElement']('option');
                    _0x2f9ca0['text'] = _0x2ec7c0 + ' - ' + _0x4462d4 + ' players';
                    _0x2f9ca0['disabled'] = !![];
                    document['getElementById']('serverSelect')['add'](_0x2f9ca0);
                    for (var _0x5c44e5 = 0x0; _0x5c44e5 < _0x1812d1['length']; _0x5c44e5++) {
                        var _0x10bca1 = _0x1812d1[_0x5c44e5];
                        var _0x53b690 = _0x2fc60e['server'] && _0x2fc60e['server']['region'] == _0x10bca1['region'] && _0x2fc60e['server']['index'] == _0x10bca1['index'];
                        var _0x2d04da = _0x10bca1['region'] + ':' + _0x10bca1['index'];
                        var _0x455809 = _0x2ec7c0 + ' ' + (_0x10bca1['index'] + 0x1) + ' - ' + _0x10bca1['playerCount'] + ' players';
                        var _0x2b3c60 = _0x53b690 ? 'selectedMenuSelector' : 'subMenuSelector';
                        var _0xb19bb2 = _0x53b690 ? '&#x25B6; ' : '';
                        var _0x2f9ca0 = document['createElement']('option');
                        _0x2f9ca0['text'] = _0x2ec7c0 + ' ' + (_0x10bca1['index'] + 0x1) + ' - ' + _0x10bca1['playerCount'] + ' players';
                        _0x2f9ca0['value'] = _0x2d04da;
                        _0x53b690 ? _0x2f9ca0['selected'] = !![] : ![];
                        document['getElementById']('serverSelect')['add'](_0x2f9ca0);
                    }
                    var _0x2f9ca0 = document['createElement']('option');
                    _0x2f9ca0['text'] = '';
                    _0x2f9ca0['disabled'] = !![];
                    document['getElementById']('serverSelect')['add'](_0x2f9ca0);
                }
                var _0x2f9ca0 = document['createElement']('option');
                _0x2f9ca0['text'] = _0x2a238c + ' total players';
                _0x2f9ca0['disabled'] = !![];
                document['getElementById']('serverSelect')['add'](_0x2f9ca0);
                document['getElementById']('totalPlayers')['innerHTML'] = _0x2a238c + ' Players Online';
            }
            _0xa5959a();
            var _0x4f1972 = 0x0;
            var _0x240665 = 0x0;
            var _0x371b51 = -0x1;
            var _0x30a29e = 0x0;
            var _0x578a5f = ![];
            var _0x406148 = 0x0;
            var _0x4e0d40 = 0x0;
            var _0x1a0a83 = [];
            var _0x19dd05 = ['nameBox', 'ref1', 'ref2', 'reftopleft', 'reftopright', 'reftop'];
            for (var _0x441ab1 = 0x0; _0x441ab1 < modals['length']; _0x441ab1++) {
                _0x19dd05['push'](modals[_0x441ab1]);
            }
            _0x19dd05['push']('about');
            var _0x333a7e = [];
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x19dd05['length']; _0x441ab1++) {
                try {
                    var _0x464b1b = document['getElementById'](_0x19dd05[_0x441ab1])['style'];
                } catch (_0x4e4974) {
                    console['log']('Style 3');
                }
                if (_0x19dd05[_0x441ab1] == 'nameBox') {
                    _0x333a7e['push']({});
                    continue;
                }
                var _0x3d26b1 = {};
                if (_0x464b1b['top'] != '') {
                    _0x3d26b1['top'] = parseInt(_0x464b1b['top']);
                }
                if (_0x464b1b['right'] != '') {
                    _0x3d26b1['right'] = parseInt(_0x464b1b['right']);
                }
                if (_0x464b1b['left'] != '') {
                    _0x3d26b1['left'] = parseInt(_0x464b1b['left']);
                }
                if (_0x464b1b['bottom'] != '') {
                    _0x3d26b1['bottom'] = parseInt(_0x464b1b['bottom']);
                }
                _0x333a7e['push'](_0x3d26b1);
            }
            var _0x1658b3 = [{
                'name': 'Common',
                'color': '#EEE'
            }, {
                'name': 'Uncommon',
                'color': '#12ff00'
            }, {
                'name': 'Rare',
                'color': _0x45d511('#0084ff', 0x8)
            }, {
                'name': 'Epic',
                'color': _0x2382d1('#e32aff', 0xa)
            }, {
                'name': 'Legendary',
                'color': '#fcff00'
            }, {
                'name': 'Mythic',
                'color': '#fc0000'
            }];
            var _0x56adf6 = ['mini', 'pot', 'medkit', 'bandages'];
            var _0x32a36c = ['wood', 'brick', 'metal'];
            var _0xfc11c = {
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
            var _0x3a6408 = {
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
            var _0xf034b = {
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
            var _0x2aa99f = [];
            var _0x54a994 = '#fcff00';
            var _0x452345 = /^((?!chrome|android).)*safari/i ['test'](navigator['userAgent']);

            function _0x585f8c(_0xfe071b) {
                var _0x125715 = [];
                for (var _0x4471e6 in _0xfe071b) {
                    _0x125715['push'](_0x4471e6);
                }
                return _0x125715;
            }
            var _0x13ee5f = {
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
                112: 'f1',
                113: 'f2',
                114: 'f3',
                115: 'f4',
                116: 'f5',
                117: 'f6',
                118: 'f7',
                119: 'f8',
                120: 'f9',
                121: 'f10',
                122: 'f11',
                123: 'f12',
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
            var _0x43c5fe = ['Pickup 1', 'Pickup 2', 'Jump', 'Build', 'Reload', 'Inventory', 'Map', 'Ask For Ammo', 'ADS', 'Fire', 'Weapon Slot 1', 'Weapon Slot 2', 'Weapon Slot 3', 'Weapon Slot 4', 'Weapon Slot 5', 'Weapon Slot 6', 'Move Up', 'Move Down', 'Move Left', 'Move Right', 'Sprint'];
            var _0x489511 = _0x585f8c(_0x13ee5f);
            var _0x52cf4a = {};
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x489511['length']; _0x441ab1++) {
                _0x52cf4a[_0x13ee5f[_0x489511[_0x441ab1]]] = _0x489511[_0x441ab1];
            }
            var _0x5f0f89 = ['E', 'F', 'Space', 'Q', 'R', 'Tab', 'M', 'B', 'C', 'V', '1', '2', '3', '4', '5', '6', 'W', 'S', 'A', 'D', 'Shift'];
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x5f0f89['length']; _0x441ab1++) {
                _0x5f0f89[_0x441ab1] = _0x52cf4a[_0x5f0f89[_0x441ab1]['toString']()];
            }
            var _0x29875c = _0x5f0f89;

            function _0x5b09a5(_0x364b55) {
                if (_0x43c5fe['indexOf'](_0x364b55) == -0x1) {
                    console['log']('Didn\'t find keybind');
                    return -0x1;
                }
                return _0x29875c[_0x43c5fe['indexOf'](_0x364b55)];
            }

            function _0x45786e(_0x408925) {
                if (_0x43c5fe['indexOf'](_0x408925) == -0x1) {
                    console['log']('Didn\'t find keybind');
                    return '';
                }
                return _0x13ee5f[_0x29875c[_0x43c5fe['indexOf'](_0x408925)]];
            }
            var _0x305b1e = '';
            var _0xed356a = '';
            if (!_0x452345) {}
            _0xed356a += '<div style=\'margin-bottom: 20px;\'></div>';
            _0x305b1e += '<div style=\'height: 60px;\'><p style=\'font-family: sans-serif; font-weight: bold; margin: 20px; padding: 15px;\'>Mouse Lock</p></div>';
            _0xed356a += '<div style=\'height: 60px;\'><select id=\'mouseLockSetting\' class=\'bind keybindbutton\' style=\'font-family: sans-serif; font-weight: bold; margin-left: auto; margin-right: auto; padding: 7px; border: solid 3px #000; width: 220px; height: 47px; font-size: 20px; text-align-last: center;\'><option value=\'-2\'>On</option><option selected value=\'-1\'>Off</option></select></div>';
            _0x305b1e += '<div style=\'height: 60px;\'><p style=\'font-family: sans-serif; font-weight: bold; margin: 20px; padding: 15px;\'>Region</p></div>';
            _0xed356a += '<div style=\'height: 80px;\'><select id=\'regionSetting\' class=\'bind keybindbutton\' style=\'font-family: sans-serif; margin-top: 22px; font-weight: bold; margin-left: auto; margin-right: auto; padding: 7px; border: solid 3px #000; width: 220px; font-size: 20px; text-align-last: center;\'><option selected value=\'0\'>Auto</option><option value=\'2\'>North America</option><option value=\'9\'>Europe</option></select></div>';
            _0x305b1e += '<div style=\'height: 60px;\'><p style=\'font-family: sans-serif; font-weight: bold; margin: 20px; padding: 15px;\'>Controller</p></div>';
            _0xed356a += '<div style=\'height: 85px;\'><select id=\'controlSetting\' class=\'bind keybindbutton\' style=\'font-family: sans-serif; margin-top: 22px; font-weight: bold; margin-left: auto; margin-right: auto; padding: 7px; border: solid 3px #000; width: 220px; font-size: 20px; text-align-last: center;\'><option selected value=\'0\'>KB/Controller</option><option value=\'1\'>Keyboard Only</option></select></div>';
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x43c5fe['length']; _0x441ab1++) {
                _0x305b1e += '<div style=\'height: 60px;\'><p style=\'font-family: sans-serif; font-weight: bold; margin: 20px; padding: 15px;\'>' + _0x43c5fe[_0x441ab1] + '</p></div>';
                _0xed356a += '<div style=\'height: 60px;\'><p id=\'key' + _0x441ab1 + '\' class=\'bind keybindbutton\' style=\'font-family: sans-serif; font-weight: bold; margin-top: 20px; margin-left: auto; margin-right: auto; padding: 7px; border: solid 3px #000; width: 200px;\'>' + _0x13ee5f[_0x29875c[_0x441ab1]] + '</p></div>';
            }
            document['getElementById']('firstkeybind')['innerHTML'] = _0x305b1e;
            document['getElementById']('secondkeybind')['innerHTML'] = _0xed356a;
            var _0x4c8d4d = {
                'skin': ['player', 'astronaut', 'baseball', 'camper', 'cowboy', 'fisherman', 'galaxy', 'magma', 'potato', 'pumpkin', 'shootem', 'skeleton', 'spider', 'sunflower', 'trike', 'tennis', 'tourist', 'viking'],
                'pickaxe': ['pickaxe', 'astronautpic', 'baseballpic', 'bat', 'cactus', 'camperpic', 'candycane', 'club', 'cowboypic', 'fishermanpic', 'galaxypic', 'magmapic', 'sawfish', 'shootempic', 'skeletonpic', 'sunflowerpic', 'tennispic', 'touristpic', 'trophy'],
                'wrap': ['nowrap', 'camo', 'diamond', 'flames', 'galaxywrap', 'gold', 'grass', 'hay', 'ice', 'magmawrap', 'slime', 'sprinkles', 'sun', 'webs', 'wood']
            };
            var _0x20d57a = {};
            var _0x505915 = 0x1;

            function _0x4ba695(_0x2ac6d5, _0x270451) {
                _0x2ac6d5 += '?' + _0x505915;
                if (_0x20d57a[_0x2ac6d5] != undefined) {
                    var _0x5520e4 = _0x20d57a[_0x2ac6d5];
                    if (_0x5520e4['loaded']) {
                        if (_0x270451 != undefined) {
                            _0x270451(_0x5520e4);
                        }
                    } else {
                        if (_0x270451 != undefined) {
                            _0x5520e4['callbacks']['push'](_0x270451);
                        }
                    }
                    return _0x5520e4;
                }
                var _0x3cb839 = document['createElement']('img');
                _0x3cb839['src'] = _0x2ac6d5;
                var _0x5520e4 = {
                    'img': _0x3cb839,
                    'loaded': ![],
                    'callbacks': []
                };
                _0x20d57a[_0x2ac6d5] = _0x5520e4;
                if (_0x270451 != undefined) {
                    _0x5520e4['callbacks']['push'](_0x270451);
                }
                _0x3cb839['onload'] = function (_0x4c929a) {
                    _0x5520e4['loaded'] = !![];
                    for (var _0x1392f8 = 0x0; _0x1392f8 < _0x5520e4['callbacks']['length']; _0x1392f8++) {
                        _0x5520e4['callbacks'][_0x1392f8](_0x3cb839);
                    }
                };
                return _0x5520e4;
            }
            var _0x530656 = document['createElement']('canvas');
            _0x530656['width'] = 0x15e;
            _0x530656['height'] = 0xc3;
            var _0x58bb9e = _0x530656['getContext']('2d');

            function _0x54c277(_0x38c971, _0x152027, _0x287b0e, _0x4a67b4, _0x52d4b4, _0x59e00f) {
                if (_0xa7f17d[_0x52d4b4][_0x38c971] !== undefined) {
                    return _0xa7f17d[_0x52d4b4][_0x38c971];
                }
                if (_0x59e00f == undefined) {
                    _0x59e00f = document['createElement']('canvas');
                }
                var _0x2fe820 = _0x4ba695('cosmetics/wraps/' + _0x52d4b4 + '0.png');
                var _0x17277d = _0x4ba695('cosmetics/wraps/' + _0x52d4b4 + '1.png');
                if (!_0x2fe820['loaded'] || !_0x17277d['loaded']) {
                    var _0x4e88e8 = function () {
                        _0x54c277(_0x38c971, _0x152027, _0x287b0e, _0x4a67b4, _0x52d4b4, _0x59e00f);
                    };
                    if (!_0x2fe820['loaded']) {
                        _0x2fe820 = _0x4ba695('cosmetics/wraps/' + _0x52d4b4 + '0.png', _0x4e88e8);
                    } else {
                        _0x17277d = _0x4ba695('cosmetics/wraps/' + _0x52d4b4 + '1.png', _0x4e88e8);
                    }
                    return _0x59e00f;
                }
                _0x59e00f['width'] = 0x15e;
                _0x59e00f['height'] = 0x15e;
                var _0x5418a5 = _0x59e00f['getContext']('2d');
                _0x5418a5['drawImage'](_0x52811c(_0x38c971), 0x0, 0x0, 0x15e, 0x15e);
                var _0x4c0dd4 = _0x4a67b4['indexOf'](_0x38c971);
                _0x58bb9e['globalCompositeOperation'] = 'source-over';
                _0x58bb9e['clearRect'](0x0, 0x0, _0x530656['width'], _0x530656['height']);
                _0x58bb9e['drawImage'](_0x152027, _0x4c0dd4 % 0x6 * 0x15e, Math['floor'](_0x4c0dd4 / 0x6) * 0xc3, 0x15e, 0xc3, 0x0, 0x0, 0x15e, 0xc3);
                _0x58bb9e['globalCompositeOperation'] = 'source-in';
                _0x58bb9e['drawImage'](_0x2fe820['img'], 0x0, 0xc3 / 0x2 - 0x15e / 0x2, 0x15e, 0x15e);
                _0x5418a5['drawImage'](_0x530656, 0x0, 0x15e / 0x2 - 0xc3 / 0x2);
                _0x58bb9e['globalCompositeOperation'] = 'source-over';
                _0x58bb9e['clearRect'](0x0, 0x0, _0x530656['width'], _0x530656['height']);
                _0x58bb9e['drawImage'](_0x287b0e, _0x4c0dd4 % 0x6 * 0x15e, Math['floor'](_0x4c0dd4 / 0x6) * 0xc3, 0x15e, 0xc3, 0x0, 0x0, 0x15e, 0xc3);
                _0x58bb9e['globalCompositeOperation'] = 'source-in';
                _0x58bb9e['drawImage'](_0x17277d['img'], 0x0, 0xc3 / 0x2 - 0x15e / 0x2, 0x15e, 0x15e);
                _0x5418a5['drawImage'](_0x530656, 0x0, 0x15e / 0x2 - 0xc3 / 0x2);
                _0xa7f17d[_0x52d4b4][_0x38c971] = _0x59e00f;
                return _0x59e00f;
            }
            var _0xa7f17d = {};
            var _0x4a5efc = ['empty', 'pewds', 'hawaii', 'lines', 'rainbow', 'retro', 'yt'];
            var _0x8af192 = ['empty', 'pewds', 'retro', 'yt'];
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x4a5efc['length']; _0x441ab1++) {
                _0xa7f17d[_0x4a5efc[_0x441ab1]] = {};
            }

            function _0x3c7d0a(_0x29f516, _0x577f4d) {
                if (_0x29f516 == 'empty' || _0x29f516 == 'nowrap') {
                    return _0x52811c(_0x577f4d);
                }
                if (_0xa7f17d[_0x29f516] !== undefined) {
                    if (_0xa7f17d[_0x29f516][_0x577f4d] !== undefined) {
                        return _0xa7f17d[_0x29f516][_0x577f4d];
                    }
                } else {
                    _0xa7f17d[_0x29f516] = {};
                }
                var _0x7733c = _0x54c277(_0x577f4d, _0x52811c('redsheet'), _0x52811c('greensheet'), _0x46dddc, _0x29f516);
                return _0x7733c;
            }
            var _0x46dddc = ['scar', 'shotgun', 'bolt', 'deagle', 'drum', 'musket', 'heavy sniper', 'rifle', 'famas', 'smg', 'ump', 'scoped ar', 'tommy gun', 'rpg', 'ak47'];
            var _0x4b0faf = _0x46dddc['length'];
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x4b0faf; _0x441ab1++) {
                _0x46dddc['push']('top' + _0x46dddc[_0x441ab1]);
            }
            var _0x462beb = ![];
            window['updateSkins'] = function (_0x19ca95) {
                if (_0x19ca95 == undefined) {
                    _0x19ca95 = [];
                }
                if (_0x462beb) {
                    return;
                }
                _0x462beb = !![];
                _0x8af192 = _0x19ca95;
                var _0x14f73f = [];
                _0x14f73f = _0x14f73f['concat'](_0x4c8d4d['skin']);
                _0x14f73f = _0x14f73f['concat'](_0x4c8d4d['pickaxe']);
                _0x14f73f = _0x14f73f['concat'](_0x4c8d4d['wrap']);
                console['log'](_0x8af192);
                if (_0x8af192 == undefined) {
                    _0x8af192 = [];
                }
                _0x8af192['splice'](0x0, 0x0, 'player', 'nowrap', 'pickaxe');
                var _0x59cf81 = _0x52811c('skins');
                var _0x5ec54b = _0x52811c('wraps');
                var _0x177405 = _0x52811c('pickaxes');
                for (var _0x2afa1f = 0x0; _0x2afa1f < _0x8af192['length']; _0x2afa1f++) {
                    var _0x1c49d3 = document['createElement']('div');
                    _0x1c49d3['classList']['add']('locker-item');
                    var _0x81681d = null;
                    var _0xea45b5 = document['createElement']('img');
                    let _0xce7d14 = 'cosmetics/';
                    var _0xbce995 = 0x0;
                    switch (_0x1e2f5d(_0x8af192[_0x2afa1f])) {
                    case 'skin':
                        _0x81681d = _0x59cf81;
                        _0xce7d14 += 'body/';
                        _0xbce995 = 0xf;
                        break;
                    case 'pickaxe':
                        _0x81681d = _0x177405;
                        _0xce7d14 += 'pickaxe/';
                        _0xbce995 = -0x28;
                        break;
                    case 'wrap':
                        _0x81681d = _0x5ec54b;
                        _0xce7d14 += 'combos/';
                        break;
                    default:
                        break;
                    }
                    _0xea45b5['src'] = _0xce7d14 + _0x8af192[_0x2afa1f] + '.png?' + _0x505915;
                    _0xea45b5['style']['transform'] = 'rotate(' + _0xbce995 + 'deg)';
                    _0xea45b5['draggable'] = ![];
                    _0xea45b5['classList']['add'](_0x1e2f5d(_0x8af192[_0x2afa1f]));
                    _0x1c49d3['appendChild'](_0xea45b5);
                    if (_0x1e2f5d(_0x8af192[_0x2afa1f]) == 'skin') {
                        var _0x39688a = 'cosmetics/head/' + _0x8af192[_0x2afa1f] + '.png';
                        _0xea45b5 = document['createElement']('img');
                        _0xea45b5['src'] = _0x39688a;
                        _0xea45b5['classList']['add']('skin');
                        _0xea45b5['style']['transform'] = 'translate(0px, -109px) scale(1.25) rotate(' + _0xbce995 + 'deg)';
                        _0xea45b5['draggable'] = ![];
                        _0x1c49d3['appendChild'](_0xea45b5);
                    }
                    let _0x50b8c8 = _0x8af192[_0x2afa1f];
                    let _0x50a542 = _0x1e2f5d(_0x8af192[_0x2afa1f]);
                    _0x1c49d3['onclick'] = function (_0x498899) {
                        var _0x43e5ae = document['createElement']('img');
                        _0x43e5ae['src'] = _0xce7d14 + _0x50b8c8 + '.png?' + _0x505915;
                        var _0x301138 = _0x28f688;
                        switch (_0x50a542) {
                        case 'skin':
                            _0x28f688['playerImage']['image'] = _0x43e5ae;
                            var _0x3abacd = document['createElement']('img');
                            _0x3abacd['src'] = 'cosmetics/head/' + _0x50b8c8 + '.png';
                            _0x28f688['head']['image'] = _0x3abacd;
                            _0x344d3a['skin'] = _0x50b8c8;
                            break;
                        case 'pickaxe':
                            _0x28f688['weapon']['image'] = _0x43e5ae;
                            _0x301138['weapon']['position']['x'] = 0x18;
                            _0x301138['weapon']['position']['y'] = 0xa;
                            _0x301138['weapon']['rotation'] = Math['PI'] / 0x2 + 0.01;
                            _0x301138['weapon']['size'] = 0x1;
                            _0x301138['hand1']['position']['x'] = _0x301138['handXOffset'];
                            _0x301138['hand2']['position']['x'] = _0x301138['handXOffset'] - 0x5;
                            _0x344d3a['pickaxe'] = _0x50b8c8;
                            break;
                        case 'wrap':
                            _0x301138['weapon']['image'] = _0x3c7d0a(_0x50b8c8, 'scar');
                            _0x301138['weapon']['position']['x'] = 0x18;
                            _0x301138['weapon']['position']['y'] = -0xd;
                            _0x301138['weapon']['rotation'] = Math['PI'] / 0x2 + 0.2;
                            _0x301138['hand1']['position']['x'] = _0x301138['handXOffset'];
                            _0x301138['hand2']['position']['x'] = _0x301138['handXOffset'] + 0x4;
                            _0x344d3a['wrap'] = _0x50b8c8;
                            break;
                        }
                    };
                    _0x81681d['appendChild'](_0x1c49d3);
                }
                return;
            };
            if (window['skinData'] != undefined) {
                window['updateSkins'](window['skinData']);
            }
            let _0x462f9f = ['skins', 'wraps', 'pickaxes'];

            function _0x22da83(_0x1ed1f0) {
                document['getElementById'](_0x1ed1f0)['style']['visibility'] = 'hidden';
                document['getElementById'](_0x1ed1f0)['style']['display'] = 'none';
            }

            function _0x3fca3d() {
                for (var _0x5b3697 = 0x0; _0x5b3697 < _0x462f9f['length']; _0x5b3697++) {
                    _0x22da83(_0x462f9f[_0x5b3697]);
                }
            }

            function _0x173856(_0x5a8ab3) {
                _0x3fca3d();
                document['getElementById'](_0x5a8ab3)['style']['visibility'] = 'visible';
                document['getElementById'](_0x5a8ab3)['style']['display'] = 'grid';
                for (var _0x1ac208 = 0x0; _0x1ac208 < _0x462f9f['length']; _0x1ac208++) {
                    document['getElementById'](_0x462f9f[_0x1ac208] + '-button')['classList']['remove']('cat-selected');
                }
                document['getElementById'](_0x5a8ab3 + '-button')['classList']['add']('cat-selected');
            }
            _0x3fca3d();
            _0x173856('skins');
            window['selectPage'] = _0x173856;

            function _0x382963(_0x420126) {
                try {
                    for (var _0x152c41 = 0x0; _0x152c41 < _0x8af192['length']; _0x152c41++) {
                        var _0x3f7aa = _0x52811c('wskin' + _0x8af192[_0x152c41]);
                        _0x3f7aa['style']['backgroundColor'] = null;
                    }
                    _0x52811c(_0x420126)['style']['backgroundColor'] = 'rgba(0,0,0,0.4)';
                    hideModal('locker');
                    if (_0x420126['indexOf']('wskin') != -0x1) {
                        _0x420126 = _0x420126['substr'](0x5);
                    }
                    if (_0x223ed9()) {
                        localStorage['weaponSkin'] = _0x420126;
                    }
                    _0x28f688['weapon']['image'] = _0x3c7d0a(_0x420126, 'scar');
                } catch (_0x2f532b) {}
            }

            function _0x1e2f5d(_0x105470) {
                var _0x244fe7 = Object['keys'](_0x4c8d4d);
                for (var _0x69ac55 = 0x0; _0x69ac55 < _0x244fe7['length']; _0x69ac55++) {
                    if (_0x4c8d4d[_0x244fe7[_0x69ac55]]['indexOf'](_0x105470) != -0x1) {
                        return _0x244fe7[_0x69ac55];
                    }
                }
                return '';
            }
            var _0x5141cc = {
                'kills': 0x0,
                'wins': 0x0,
                'games': 0x0,
                'singleGameKills': 0x0,
                'singleGameDamage': 0x0,
                'singleGameWalls': 0x0,
                'sniperKills': 0x0,
                'shotgunKills': 0x0,
                'arKills': 0x0,
                'pickaxeKills': 0x0
            };
            var _0x344d3a = {
                'pickaxe': 'pickaxe',
                'wrap': 'nowrap',
                'skin': 'player'
            };
            var _0x1ae68a = [{
                'name': 'Eliminations',
                'type': 'kills',
                'tiers': {
                    500: 'sprinkles',
                    1000: 'skeleton',
                    5000: 'skeletonpic'
                }
            }, {
                'name': 'Wins',
                'type': 'wins',
                'tiers': {
                    50: 'tennis',
                    300: 'magmapic',
                    800: 'flames'
                }
            }, {
                'name': 'Games',
                'type': 'games',
                'tiers': {
                    300: 'touristpic',
                    600: 'gold',
                    1000: 'cactus'
                }
            }, {
                'name': 'Single Game Eliminations',
                'type': 'singleGameKills',
                'tiers': {
                    5: 'ice',
                    8: 'fishermanpic',
                    11: 'galaxywrap',
                    14: 'astronaut'
                }
            }, {
                'name': 'Single Game Damage',
                'type': 'singleGameDamage',
                'tiers': {
                    500: 'tennispic',
                    1000: 'sun',
                    1500: 'fisherman',
                    2000: 'viking'
                }
            }, {
                'name': 'Single Game Walls Built',
                'type': 'singleGameWalls',
                'tiers': {
                    50: 'club',
                    100: 'wood',
                    150: 'shootem'
                }
            }, {
                'name': 'Sniper Eliminations',
                'type': 'sniperKills',
                'tiers': {
                    100: 'camperpic',
                    400: 'magmawrap',
                    1000: 'cowboy'
                }
            }, {
                'name': 'Shotgun Eliminations',
                'type': 'shotgunKills',
                'tiers': {
                    100: 'slime',
                    400: 'sunflowerpic',
                    1000: 'tourist'
                }
            }, {
                'name': 'Assault Rifle Eliminations',
                'type': 'arKills',
                'tiers': {
                    200: 'camper',
                    800: 'galaxypic',
                    2000: 'camo'
                }
            }, {
                'name': 'Pickaxe Eliminations',
                'type': 'pickaxeKills',
                'tiers': {
                    10: 'galaxy',
                    20: 'sunflower',
                    50: 'astronautpic'
                }
            }];
            window['createChallenge'] = (_0xa2bb83 = 0x0, _0x184eef = {}) => {
                if (_0xa2bb83 === 0x0) {
                    let _0x4a3ed3 = document['createElement']('div');
                    var _0x19c868 = _0x1e2f5d(_0x184eef['reward']);
                    var _0x108ec0 = 'cosmetics/';
                    var _0x243c8c = 0x0;
                    switch (_0x19c868) {
                    case 'skin':
                        _0x108ec0 += 'body/';
                        _0x243c8c = 0xf;
                        break;
                    case 'wrap':
                        _0x108ec0 += 'combos/';
                        break;
                    case 'pickaxe':
                        _0x108ec0 += 'pickaxe/';
                        _0x243c8c = -0x28;
                        break;
                    }
                    var _0x1e326f = _0x108ec0 + _0x184eef['reward'] + '.png';
                    var _0x368568 = '<img style=\"transform:rotate(' + _0x243c8c + 'deg)\" src=\"' + _0x1e326f + '\">';
                    if (_0x19c868 == 'skin') {
                        _0x1e326f = 'cosmetics/head/' + _0x184eef['reward'] + '.png';
                        _0x368568 += '<img style=\"transform:translate(0,-97px) rotate(' + _0x243c8c + 'deg) scale(1.25)\" src=\"' + _0x1e326f + '\">';
                    }
                    _0x4a3ed3['innerHTML'] = '\x0a\x09\x09\x09<div class=\"challenge\" id=\"challenge_' + _0x184eef['id'] + '\">\x0a\x09\x09\x09\x09<div class=\"challenge_info milestone\">\x0a\x09\x09\x09\x09\x09<div class=\"challenge_title\">\x0a\x09\x09\x09\x09\x09\x09' + _0x184eef['name'] + '\x0a\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09<div class=\"challenge_progressbar\">\x0a\x09\x09\x09\x09\x09\x09<div style=\"width: 69%\" id=\"challenge_' + _0x184eef['id'] + '_progress\" class=\"challenge_progress\"></div>\x0a\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09<div class=\"challenge_amtleft\" id=\"challenge_' + _0x184eef['id'] + '_amtleft\">\x0a\x09\x09\x09\x09\x09\x096969 Until Next Reward\x0a\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09<div class=\"challenge_reward challenge_weapon\">\x0a\x09\x09\x09\x09\x09' + _0x368568 + '\x0a\x09\x09\x09\x09</div>\x0a\x09\x09\x09</div>\x0a\x09\x09\x09';
                    document['getElementById']('challengedata')['appendChild'](_0x4a3ed3);
                } else {}
            };
            window['updateChallenges'] = () => {
                window['userChallengeData']['forEach'](_0x4efb0e => {
                    if (!_0x4efb0e['hasOwnProperty']('progress')) return;
                    let _0x641e7b = document['getElementById']('challenge_' + _0x4efb0e['id'] + '_progress');
                    const _0xb9139 = Math['round'](_0x4efb0e['progress'][0x0] * 0x64 / _0x4efb0e['progress'][0x1]);
                    _0x641e7b['style']['width'] = _0xb9139 + '%';
                    let _0x46d30b = document['getElementById']('challenge_' + _0x4efb0e['id'] + '_amtleft');
                    const _0x5882f7 = _0x4efb0e['progress'][0x1] - _0x4efb0e['progress'][0x0];
                    _0x46d30b['innerHTML'] = '<p style=\"font-size:20px; font-family: arial; margin-top: 7px;\">' + _0x4efb0e['progress'][0x0] + ' / ' + _0x4efb0e['progress'][0x1] + '</p>';
                    if (_0x5882f7 > 0x0) {
                        _0x46d30b['innerHTML'] += '(' + _0x5882f7 + ' Until Next Reward)';
                    }
                    _0x46d30b['innerHTML'] += '<br>';
                });
            };
            var _0x387632 = ![];
            window['createChallengeData'] = function () {
                if (window['challengeDataRaw'] != undefined) {
                    _0x5141cc = window['challengeDataRaw'];
                } else {
                    return;
                }
                _0x387632 = !![];
                window['userChallengeData'] = [];
                for (var _0x49a28f = 0x0; _0x49a28f < _0x1ae68a['length']; _0x49a28f++) {
                    var _0x1c2078 = _0x1ae68a[_0x49a28f];
                    var _0x5078eb = Object['keys'](_0x1c2078['tiers']);
                    var _0x464d1a = _0x5141cc[_0x1c2078['type']];
                    var _0x16b05b = _0x5078eb[_0x5078eb['length'] - 0x1];
                    for (var _0x1bf724 = _0x5078eb['length'] - 0x1; _0x1bf724 >= 0x0; _0x1bf724--) {
                        if (_0x464d1a < _0x5078eb[_0x1bf724]) {
                            _0x16b05b = _0x5078eb[_0x1bf724];
                        }
                    }
                    if (_0x464d1a > _0x16b05b) {
                        _0x464d1a = _0x16b05b;
                    }
                    window['userChallengeData']['push']({
                        'name': _0x1c2078['name'],
                        'id': _0x1c2078['name']['replace'](/ /g, ''),
                        'progress': [_0x464d1a, _0x16b05b],
                        'reward': _0x1c2078['tiers'][_0x16b05b]
                    });
                }
                document['getElementById']('challengedata')['innerHTML'] = '';
                for (var _0x49a28f = 0x0; _0x49a28f < window['userChallengeData']['length']; _0x49a28f++) {
                    var _0x1c2078 = window['userChallengeData'][_0x49a28f];
                    window['createChallenge'](_0x1c2078['type'], _0x1c2078);
                }
                window['updateChallenges']();
            };
            window['createChallengeData']();

            function _0x9b6c2b() {
                if (_0x595d79) {
                    return;
                }
                for (var _0x3345ae = 0x0; _0x3345ae < 0x5dc; _0x3345ae++) {
                    var _0x5a8eb4 = Math['random']() - 0.5;
                    var _0x2b9f17 = Math['random']() - 0.5;
                    _0x5a8eb4 *= _0x28097e;
                    _0x2b9f17 *= _0x28097e;
                    _0x2b9f17 += 0x1e;
                    var _0x57d0d2 = Math['floor'](Math['random']() * window['grassTypes']);
                    var _0x4026f4 = new _0x117b6e['image'](window['grassCanvas' + _0x57d0d2], _0x5a8eb4, _0x2b9f17, window['grassWidth'], window['grassWidth']);
                    _0x1d7b20['add'](_0x4026f4);
                    window['grass']['push'](_0x4026f4);
                }
            }

            function _0x1c1d30() {
                if (_0x5272a6 == 0x0) {
                    _0x34a800['qualitySize'] = 0x1;
                    _0x34a800['smoothingEnabled'] = !![];
                    _0x117b6e['resize'](!![]);
                    if (window['grass']['length'] == 0x0) {
                        _0x9b6c2b();
                    }
                } else {
                    _0x34a800['qualitySize'] = 0x1;
                    _0x34a800['smoothingEnabled'] = !![];
                    _0x117b6e['resize'](!![]);
                    for (var _0x233c60 = 0x0; _0x233c60 < window['grass']['length']; _0x233c60++) {
                        window['grass'][_0x233c60]['parent']['remove'](window['grass'][_0x233c60]);
                    }
                    window['grass'] = [];
                }
                if (!_0x452345) {}
                if (_0x223ed9()) {
                    localStorage['graphics'] = _0x5272a6;
                }
            }

            function _0x5136b() {
                document['getElementById']('controlSetting')['selectedIndex'] = _0x53cafc;
                if (_0x223ed9()) {
                    localStorage['controlChoice'] = _0x53cafc;
                }
            }

            function _0x1755fb() {
                console['log']('Updating mouse');
                if (_0x60b1ef == -0x1) {
                    document['exitPointerLock']();
                }
                document['getElementById']('mouseLockSetting')['selectedIndex'] = Number(_0x60b1ef) + 0x2;
                console['log'](Number(_0x60b1ef) + 0x2);
                if (_0x223ed9()) {
                    localStorage['mouse'] = _0x60b1ef;
                }
            }

            function _0x433be4() {
                console['log']('Updating region');
                var _0x3eba1f = 0x0;
                if (window['cachedRegion'] == 0x2 || window['cachedRegion'] == 0x3) {
                    _0x3eba1f = 0x1;
                } else if (window['cachedRegion'] == 0x7 || window['cachedRegion'] == 0x9) {
                    _0x3eba1f = 0x2;
                }
                document['getElementById']('regionSetting')['selectedIndex'] = _0x3eba1f;
                if (_0x223ed9()) {
                    localStorage['region'] = window['cachedRegion'];
                }
            }
            if (!_0x452345) {}
            document['getElementById']('mouseLockSetting')['onchange'] = function () {
                _0x60b1ef = document['getElementById']('mouseLockSetting')['value'];
                _0x1755fb();
            };
            document['getElementById']('regionSetting')['onchange'] = function () {
                window['cachedRegion'] = document['getElementById']('regionSetting')['value'];
                _0x433be4();
            };
            document['getElementById']('controlSetting')['onchange'] = function () {
                _0x53cafc = document['getElementById']('controlSetting')['value'];
                _0x5136b();
            };
            var _0x2effea = -0x1;

            function _0x59e1c9() {
                for (var _0x28bedf = 0x0; _0x28bedf < _0x29875c['length']; _0x28bedf++) {
                    document['getElementById']('key' + _0x28bedf)['style']['backgroundColor'] = null;
                    document['getElementById']('key' + _0x28bedf)['innerHTML'] = _0x13ee5f[_0x29875c[_0x28bedf]];
                }
            }
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x43c5fe['length']; _0x441ab1++) {
                document['getElementById']('key' + _0x441ab1)['onclick'] = function (_0xca3d5c) {
                    _0x59e1c9();
                    var _0x1ed6c3 = _0xca3d5c['target']['id']['substring'](0x3);
                    _0xca3d5c['target']['style']['backgroundColor'] = 'rgba(0,0,0,0.25)';
                    _0xca3d5c['target']['innerHTML'] = 'Press any button...';
                    _0x2effea = _0x1ed6c3;
                };
            }

            function _0x463062() {
                _0x2effea = -0x1;
                _0x59e1c9();
                document['getElementById']('settings')['style']['visibility'] = 'hidden';
                document['getElementById']('settings')['style']['display'] = 'none';
            }

            function _0x3fd3e6() {
                hideAllModals();
                document['getElementById']('settings')['style']['visibility'] = 'visible';
                document['getElementById']('settings')['style']['display'] = 'initial';
            }

            function _0x24b168() {
                if (_0x223ed9()) {
                    localStorage['binds'] = JSON['stringify'](_0x29875c);
                }
            }

            function _0x2d38df() {
                if (_0x452345) {
                    _0x1c1d30();
                }
                if (_0x223ed9()) {
                    if (localStorage['graphics'] !== undefined && (localStorage['graphics'] == 0x0 || localStorage['graphics'] == 0x1)) {
                        _0x5272a6 = localStorage['graphics'];
                        if (_0x452345) {}
                    }
                    if (localStorage['controlChoice'] !== undefined) {
                        _0x53cafc = localStorage['controlChoice'];
                        _0x5136b();
                    }
                    if (localStorage['mouse'] !== undefined && (localStorage['mouse'] == -0x2 || localStorage['mouse'] == -0x1)) {
                        _0x60b1ef = localStorage['mouse'];
                        _0x1755fb();
                    }
                    if (localStorage['region'] !== undefined && (localStorage['region'] == 0x2 || localStorage['region'] == 0x3 || localStorage['region'] == 0x7 || localStorage['region'] == 0x9)) {
                        if (localStorage['region'] == 0x9) {
                            localStorage['region'] = 0x7;
                        }
                        if (localStorage['region'] == 0x2) {
                            localStorage['region'] = 0x3;
                        }
                        window['cachedRegion'] = localStorage['region'];
                        _0x433be4();
                    }
                    if (localStorage['binds'] !== undefined) {
                        var _0x39aefd = [];
                        try {
                            _0x39aefd = JSON['parse'](localStorage['binds']);
                        } catch (_0x111734) {}
                        for (var _0x3b854e = 0x0; _0x3b854e < _0x39aefd['length']; _0x3b854e++) {
                            if (_0x489511['indexOf'](_0x39aefd[_0x3b854e]['toString']()) != -0x1) {
                                _0x29875c[_0x3b854e] = Number(_0x39aefd[_0x3b854e]);
                            }
                        }
                        _0x59e1c9();
                    }
                }
            }
            document['getElementById']('savebindsbutton')['onclick'] = function () {
                _0x463062();
            };
            document['getElementById']('exitsettingsbutton')['onclick'] = function () {
                _0x463062();
            };
            var _0x11b2f0 = 0x514;
            var _0x127c81 = _0x11b2f0 * _0x11b2f0;
            var _0x2a22f4 = 0x3e8;
            var _0x37df07 = _0x2a22f4 * _0x2a22f4;
            var _0x90864b = {};

            function _0x2efe0e(_0x43aa82, _0x2c952b) {
                var _0x5791c2 = _0x12d5de(_0x43aa82, _0x2c952b);
                if (_0x5791c2 > _0x127c81) {
                    return 0x0;
                }
                _0x5791c2 = 0x1 - _0x5791c2 / _0x127c81;
                var _0x14601e = _0x2c952b['y'] - _0x43aa82['y'];
                if (_0x5791c2 > 0x64 && _0x14601e > 0x64) {
                    return 0x64;
                }
                _0x14601e *= _0x14601e;
                _0x14601e = 0x1 - _0x14601e / _0x37df07;
                _0x5791c2 = Math['min'](_0x5791c2, _0x14601e);
                if (_0x5791c2 < 0x0) {
                    return 0x0;
                }
                _0x5791c2 *= _0x5791c2;
                _0x5791c2 *= 0.5;
                _0x5791c2 = Math['min'](_0x5791c2, 0x64);
                return _0x5791c2;
            }
            var _0x267038 = !![];
            try {
                if (_0x21dcd8) {
                    _0x5ac3ca['addEventListener']('adStarted', function (_0x5690ab) {
                        _0x267038 = ![];
                    });
                    _0x5ac3ca['addEventListener']('adFinished', function (_0x1c322c) {
                        _0x267038 = !![];
                    });
                    _0x5ac3ca['addEventListener']('adError', function (_0x3d3be8) {
                        _0x267038 = !![];
                    });
                }
            } catch (_0x14019e) {}

            function _0x496a8f(_0x3a1ccf, _0x55cb81, _0x158ed2, _0x23a8c4) {
                if (!_0x267038) {
                    return;
                }
                var _0x3407ee = _0x2efe0e(_0x55cb81, _0x158ed2);
                if (_0x3407ee <= 0x0 && !_0x23a8c4) {
                    return null;
                }
                if (_0x90864b[_0x3a1ccf] === undefined && !_0x23a8c4) {
                    return null;
                }
                if (gameWrapper['needsNativeAudio']) {
                    var _0x3a1ccf = _0x90864b[_0x3a1ccf][0x0];
                    gameWrapper['playAudio'](_0x3a1ccf['src'], _0x3407ee);
                    return _0x3a1ccf;
                }
                for (var _0x5d9ed8 = 0x0; _0x5d9ed8 < _0x90864b[_0x3a1ccf]['length']; _0x5d9ed8++) {
                    if (_0x90864b[_0x3a1ccf][_0x5d9ed8]['paused']) {
                        _0x90864b[_0x3a1ccf][_0x5d9ed8]['currentTime'] = 0x0;
                        _0x90864b[_0x3a1ccf][_0x5d9ed8]['volume'] = _0x3407ee;
                        _0x90864b[_0x3a1ccf][_0x5d9ed8]['play']();
                        return _0x90864b[_0x3a1ccf][_0x5d9ed8];
                    }
                }
                var _0x28344b = _0x90864b[_0x3a1ccf][0x0]['cloneNode']();
                _0x90864b[_0x3a1ccf]['push'](_0x28344b);
                _0x28344b['volume'] = _0x3407ee;
                _0x28344b['play']();
                return _0x28344b;
            }

            function _0x32be38(_0x4918f6) {
                var _0x3ba572 = document['createElement']('audio');
                _0x3ba572['src'] = 'audio/' + _0x4918f6 + '.mp3';
                _0x90864b[_0x4918f6] = [_0x3ba572];
                if (gameWrapper['needsNativeAudio']) gameWrapper['loadAudio'](_0x3ba572['src']);
            }

            function _0xefa5f4(_0x443667) {
                var _0x33f0a4 = document['createElement']('audio');
                var _0x2eac49 = _0x443667;
                if (_0x443667 == 'ump') {
                    _0x443667 = 'smg';
                }
                _0x33f0a4['src'] = 'audio/gun/' + _0x443667 + '.mp3';
                if (_0x90864b[_0x2eac49] === undefined) {
                    _0x90864b[_0x2eac49] = [_0x33f0a4];
                } else {
                    _0x90864b[_0x2eac49]['push'](_0x33f0a4);
                }
                if (gameWrapper['needsNativeAudio']) gameWrapper['loadAudio'](_0x33f0a4['src']);
            }
            var _0x32fbd9 = ![];
            if (_0x32fbd9) {
                window['AudioContext'] = window['AudioContext'] || window['webkitAudioContex'];
                var _0x1d8234 = new window['AudioContext']();
                if (!_0x1d8234['createGain']) _0x1d8234['createGain'] = _0x1d8234['createGainNode'];
                if (!_0x1d8234['createDelay']) _0x1d8234['createDelay'] = _0x1d8234['createDelayNode'];
                if (!_0x1d8234['createScriptProcessor']) _0x1d8234['createScriptProcessor'] = _0x1d8234['createJavaScriptNode'];
                var _0x1b576f = {
                    'sounds': {},
                    'gainNodes': [],
                    'context': _0x1d8234,
                    'loadSample': function (_0x14397d) {
                        return fetch(_0x14397d)['then'](function (_0x115966) {
                            return _0x115966['arrayBuffer']();
                        })['then'](function (_0x414e2e) {
                            return _0x1b576f['context']['decodeAudioData'](_0x414e2e);
                        });
                    },
                    'playSample': function (_0x2432f9, _0xde7c0e) {
                        if (_0x2432f9 == undefined || _0xde7c0e == undefined) {
                            return;
                        }
                        var _0xc20160 = _0x1b576f['context']['createBufferSource']();
                        _0xc20160['buffer'] = _0x2432f9;
                        _0xc20160['connect'](_0xde7c0e);
                        _0xc20160['start'](0x0);
                    },
                    'load': function (_0x4d00c5, _0x19dfec) {
                        if (_0x1b576f['sounds'][_0x4d00c5] != undefined) {
                            return;
                        }
                        _0x1b576f['sounds'][_0x4d00c5] = 0x1;
                        _0x1b576f['loadSample'](_0x19dfec)['then'](function (_0x70aa4c) {
                            _0x1b576f['sounds'][_0x4d00c5] = _0x70aa4c;
                        });
                    }
                };
                _0x496a8f = function (_0x2b2b38, _0x241296, _0x134314) {
                    if (!_0x267038) {
                        return;
                    }
                    var _0x122dd4 = _0x2efe0e(_0x241296, _0x134314);
                    if (_0x122dd4 <= 0x0 || _0x1b576f['sounds'][_0x2b2b38] == undefined || _0x1b576f['sounds'][_0x2b2b38] == 0x1) {
                        return;
                    }
                    _0x122dd4 = Math['floor'](_0x122dd4 * 0xa);
                    var _0xb6550d = _0x1b576f['gainNodes'][_0x122dd4];
                    _0x1b576f['playSample'](_0x1b576f['sounds'][_0x2b2b38], _0xb6550d);
                };
                _0x32be38 = function (_0x21d176) {
                    _0x1b576f['load'](_0x21d176, 'audio/' + _0x21d176 + '.mp3');
                };
                _0xefa5f4 = function (_0x43eb7a) {
                    var _0x384ebf = _0x43eb7a;
                    if (_0x43eb7a == 'ump') {
                        _0x43eb7a = 'smg';
                    }
                    _0x1b576f['load'](_0x384ebf, 'audio/gun/' + _0x43eb7a + '.mp3');
                };
                for (var _0x441ab1 = 0x0; _0x441ab1 <= 0xa; _0x441ab1++) {
                    var _0x1d3fe0 = _0x1d8234['createGain']();
                    _0x1d3fe0['gain']['setValueAtTime'](_0x441ab1 / 0xa, 0x0);
                    _0x1d3fe0['connect'](_0x1b576f['context']['destination']);
                    _0x1b576f['gainNodes']['push'](_0x1d3fe0);
                }
                window['addEventListener']('touchstart', function () {
                    _0x1b576f['playSample'](_0x1b576f['sounds']['smg'], _0x1b576f['gainNodes'][0x9]);
                });
            }
            var _0xc4b09a = 0x6;
            var _0x4028ca = 0x1;
            var _0x5e9d35 = 0x6;
            var _0x1424df = 0x3;
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0xc4b09a; _0x441ab1++) {
                _0x32be38('wood' + _0x441ab1);
            }
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x4028ca; _0x441ab1++) {
                _0x32be38('rock' + _0x441ab1);
            }
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x5e9d35; _0x441ab1++) {
                _0x32be38('metal' + _0x441ab1);
            }
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x1424df; _0x441ab1++) {
                _0x32be38('christmasstep' + _0x441ab1);
            }
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x1424df; _0x441ab1++) {
                _0x32be38('step' + _0x441ab1);
            }
            _0x32be38('explosion0');
            _0x32be38('explosion1');
            _0x32be38('grapple');
            _0x32be38('baller');
            _0x32be38('bounce');
            _0x32be38('reload');
            _0xefa5f4('ar');
            var _0x58db8d = ['bolt', 'deagle', 'rifle', 'scar', 'famas', 'scoped-ar', 'shotgun', 'smg', 'ump', 'tommy gun', 'drum', 'musket', 'heavy sniper', 'ak47', 'combat', 'snowball', 'silencedpistol', 'aug', 'burst shotgun'];
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x58db8d['length']; _0x441ab1++) {
                _0xefa5f4(_0x58db8d[_0x441ab1]);
            }
            for (var _0x441ab1 = 0x0; _0x441ab1 < 0x13; _0x441ab1++) {
                setTimeout(function () {
                    _0xefa5f4('ump');
                }, 0x64 * _0x441ab1);
            }
            for (var _0x441ab1 = 0x0; _0x441ab1 < 0x5; _0x441ab1++) {
                setTimeout(function () {
                    _0xefa5f4('famas');
                }, 0xc8 * _0x441ab1);
            }
            for (var _0x441ab1 = 0x0; _0x441ab1 < 0xf; _0x441ab1++) {
                setTimeout(function () {
                    _0xefa5f4('tommy gun');
                }, 0xc8 * _0x441ab1);
            }
            var _0x5f3362 = 0x0;
            var _0x9da206 = 0x0;

            function _0x4db58a(_0x5200c7) {
                _0x496a8f('wood' + Math['floor'](Math['random']() * _0xc4b09a), _0x117b6e['me']['visual']['position'], _0x5200c7['visual']['position']);
            }

            function _0x1d0a6a(_0xb9a2b9) {
                _0x496a8f('rock' + Math['floor'](Math['random']() * _0x4028ca), _0x117b6e['me']['visual']['position'], _0xb9a2b9['visual']['position']);
            }

            function _0x28caa2(_0x50b904) {
                _0x496a8f('metal' + Math['floor'](Math['random']() * _0x5e9d35), _0x117b6e['me']['visual']['position'], _0x50b904['visual']['position']);
            }
            _0x29af9f['showName'](_0x117b6e, _0x19dd05);

            function _0xdee85d(_0x2be4c5) {
                while (_0x2be4c5 < 0x0) {
                    _0x2be4c5 += Math['PI'] * 0x2;
                }
                while (_0x2be4c5 > Math['PI'] * 0x2) {
                    _0x2be4c5 -= Math['PI'] * 0x2;
                }
                return _0x2be4c5;
            }

            function _0x14c37c(_0x36fafa, _0x3a5268, _0x4def2e) {
                return (_0x3a5268 - _0x36fafa) * _0x4def2e + _0x36fafa;
            }
            var _0x57a089 = function (_0x25ce23) {
                return {
                    'scene': _0x25ce23,
                    'position': new _0x117b6e['Vector2'](0x0, 0x0),
                    'velocity': new _0x117b6e['Vector2'](0x0, 0x0),
                    'elasticity': 0.01,
                    'drag': 0.2,
                    'shake': function (_0x194f0e, _0x37dda8) {
                        _0x194f0e = _0x194f0e || 0x1;
                        _0x37dda8 = _0x37dda8 || Math['random']() * Math['PI'] * 0x2;
                        this['velocity']['x'] = Math['cos'](_0x37dda8) * _0x194f0e;
                        this['velocity']['y'] = Math['sin'](_0x37dda8) * _0x194f0e;
                    },
                    'update': function () {
                        this['velocity']['x'] -= this['velocity']['x'] * this['drag'] * _0x117b6e['clientDetails']['dt'];
                        this['velocity']['y'] -= this['velocity']['y'] * this['drag'] * _0x117b6e['clientDetails']['dt'];
                        this['velocity']['x'] -= this['position']['x'] * this['elasticity'] * _0x117b6e['clientDetails']['dt'];
                        this['velocity']['y'] -= this['position']['y'] * this['elasticity'] * _0x117b6e['clientDetails']['dt'];
                        this['position']['x'] += this['velocity']['x'] * _0x117b6e['clientDetails']['dt'];
                        this['position']['y'] += this['velocity']['y'] * _0x117b6e['clientDetails']['dt'];
                        this['scene']['camera']['position']['x'] += this['position']['x'];
                        this['scene']['camera']['position']['y'] += this['position']['y'];
                    }
                };
            };

            function _0xcf1709(_0x1c25c4) {
                var _0x3ebbd4 = _0x1c25c4['toString'](0x10);
                return _0x3ebbd4['length'] == 0x1 ? '0' + _0x3ebbd4 : _0x3ebbd4;
            }

            function _0xcae906(_0xf13694, _0x517900, _0xaec64d) {
                return '#' + _0xcf1709(_0xf13694) + _0xcf1709(_0x517900) + _0xcf1709(_0xaec64d);
            }
            var _0x3a8fd2 = [];

            function _0x20c316(_0x29b255, _0x58acbd) {
                var _0x1c9b9a, _0x25794b = _0x29b255 / 0x3;
                if (_0x58acbd === undefined) {
                    _0x58acbd = 0.001;
                }
                do {
                    _0x1c9b9a = _0x25794b;
                    _0x25794b = (_0x29b255 / _0x25794b + _0x25794b) / 0x2;
                } while (Math['abs'](_0x1c9b9a - _0x25794b) > _0x58acbd);
                if (isNaN(_0x25794b)) {
                    return 0x0;
                }
                return _0x25794b;
            }
            for (var _0x441ab1 = 0x0; _0x441ab1 <= 0x3e8; _0x441ab1++) {
                _0x3a8fd2[_0x441ab1] = Math['sqrt'](_0x441ab1);
            }

            function _0x250a9d(_0x48a416) {
                if (_0x48a416 < 0x0) {
                    return 0x0;
                }
                if (Math['floor'](_0x48a416) == _0x48a416 && _0x48a416 < _0x3a8fd2['length']) {
                    return _0x3a8fd2[_0x48a416];
                }
                return _0x231375(_0x48a416, 0x1);
            }

            function _0x231375(_0x286bb1, _0x1f16cc) {
                if (_0x286bb1 <= 0x0) {
                    return 0x0;
                }
                var _0x2f45ad, _0xec8108 = 0x0;
                var _0x45271b = 0x1;
                if (_0x1f16cc === undefined) {
                    _0x1f16cc = 0.1;
                }
                var _0x16bb02 = 0x1;
                var _0xb18a2c;
                do {
                    _0x2f45ad = _0xec8108;
                    _0xec8108 += _0x16bb02;
                    _0xb18a2c = _0xec8108 * _0xec8108;
                    if (_0xb18a2c - _0x286bb1 > _0x1f16cc) {
                        _0x16bb02 /= 0xa;
                        _0xec8108 = _0x2f45ad;
                    }
                } while (Math['abs'](_0xb18a2c - _0x286bb1) > _0x1f16cc);
                return _0xec8108;
            }

            function _0x12d5de(_0x4354da, _0x2d1328) {
                return (_0x2d1328['x'] - _0x4354da['x']) * (_0x2d1328['x'] - _0x4354da['x']) + (_0x2d1328['y'] - _0x4354da['y']) * (_0x2d1328['y'] - _0x4354da['y']);
            }

            function _0x326ba8(_0x141872, _0x47b0d9) {
                return _0x250a9d((_0x47b0d9['x'] - _0x141872['x']) * (_0x47b0d9['x'] - _0x141872['x']) + (_0x47b0d9['y'] - _0x141872['y']) * (_0x47b0d9['y'] - _0x141872['y']));
            }

            function _0x1773c1(_0x591b71, _0x5e8468) {
                return Math['sqrt']((_0x5e8468['x'] - _0x591b71['x']) * (_0x5e8468['x'] - _0x591b71['x']) + (_0x5e8468['y'] - _0x591b71['y']) * (_0x5e8468['y'] - _0x591b71['y']));
            }
            var _0x34a800 = new _0x117b6e['renderer']();
            _0x34a800['clearScreen'] = ![];
            _0x34a800['ctx']['imageSmoothingEnabled'] = !![];
            _0x34a800['c']['style']['backgroundColor'] = window['groundColor'];
            _0x34a800['c']['requestPointerLock'] = _0x34a800['c']['requestPointerLock'] || _0x34a800['c']['mozRequestPointerLock'] || function () {};
            document['exitPointerLock'] = document['exitPointerLock'] || document['mozExitPointerLock'] || function () {};
            _0x34a800['c']['addEventListener']('click', function (_0x5e5f1f) {
                if (!_0x117b6e['spectating'] && !_0x34ea3f['locked']) {
                    if (_0x60b1ef == -0x2 && !_0x454358) {
                        console['log'](_0x60b1ef);
                        _0x34a800['c']['requestPointerLock']();
                    }
                }
            });
            var _0x34ea3f = new _0x117b6e['mouse'](_0x34a800);
            var _0x234a02 = new _0x117b6e['touches'](_0x34a800, _0x34ea3f);
            var _0x6df9cf = 0x0;
            _0x117b6e['keyboard'] = function (_0x4cf15c) {
                _0x4cf15c = _0x4cf15c || new _0x117b6e['controls']();
                _0x4cf15c['changedKeys'] = [];

                function _0xd57263(_0x5cb92f) {
                    var _0x5f70cd = ![];
                    if (_0x5cb92f['keyCode'] == _0x5b09a5('Move Left')) {
                        if (!_0x4cf15c['left']) {
                            _0x5f70cd = !![];
                            _0x4cf15c['left'] = !![];
                            _0x4cf15c['changedKeys']['push']('left');
                        }
                    } else if (_0x5cb92f['keyCode'] == _0x5b09a5('Move Up')) {
                        if (!_0x4cf15c['up']) {
                            _0x5f70cd = !![];
                            _0x4cf15c['up'] = !![];
                            _0x4cf15c['changedKeys']['push']('up');
                        }
                    } else if (_0x5cb92f['keyCode'] == _0x5b09a5('Move Right')) {
                        if (!_0x4cf15c['right']) {
                            _0x5f70cd = !![];
                            _0x4cf15c['right'] = !![];
                            _0x4cf15c['changedKeys']['push']('right');
                        }
                    } else if (_0x5cb92f['keyCode'] == _0x5b09a5('Move Down')) {
                        if (!_0x4cf15c['down']) {
                            _0x5f70cd = !![];
                            _0x4cf15c['down'] = !![];
                            _0x4cf15c['changedKeys']['push']('down');
                        }
                    } else if (_0x5cb92f['keyCode'] == _0x5b09a5('Jump')) {
                        if (!_0x4cf15c['space']) {
                            _0x5f70cd = !![];
                            _0x4cf15c['space'] = !![];
                            _0x4cf15c['changedKeys']['push']('space');
                        }
                    } else if (_0x5cb92f['keyCode'] == _0x5b09a5('Sprint')) {
                        if (!_0x4cf15c['shift']) {
                            _0x5f70cd = !![];
                            _0x4cf15c['shift'] = !![];
                            _0x4cf15c['changedKeys']['push']('shift');
                        }
                    }
                    _0x4cf15c['changed'] = _0x5f70cd;
                }
                window['addEventListener']('keydown', _0xd57263, ![]);

                function _0x4f136d(_0x2458e3) {
                    if (_0x2458e3['keyCode'] == _0x5b09a5('Move Left')) {
                        _0x4cf15c['left'] = ![];
                        _0x4cf15c['changedKeys']['push']('left');
                    } else if (_0x2458e3['keyCode'] == _0x5b09a5('Move Up')) {
                        _0x4cf15c['up'] = ![];
                        _0x4cf15c['changedKeys']['push']('up');
                    } else if (_0x2458e3['keyCode'] == _0x5b09a5('Move Right')) {
                        _0x4cf15c['right'] = ![];
                        _0x4cf15c['changedKeys']['push']('right');
                    } else if (_0x2458e3['keyCode'] == _0x5b09a5('Move Down')) {
                        _0x4cf15c['down'] = ![];
                        _0x4cf15c['changedKeys']['push']('down');
                    } else if (_0x2458e3['keyCode'] == _0x5b09a5('Jump')) {
                        _0x4cf15c['space'] = ![];
                        _0x4cf15c['changedKeys']['push']('space');
                    } else if (_0x2458e3['keyCode'] == _0x5b09a5('Sprint')) {
                        _0x4cf15c['shift'] = ![];
                        _0x4cf15c['changedKeys']['push']('shift');
                    }
                    _0x4cf15c['changed'] = !![];
                }
                window['addEventListener']('keyup', _0x4f136d, ![]);
                return _0x4cf15c;
            };
            var _0x33b098 = new _0x117b6e['keyboard']();
            if ('onpointerlockchange' in document) {
                document['addEventListener']('pointerlockchange', _0x2dcb55, ![]);
            } else if ('onmozpointerlockchange' in document) {
                document['addEventListener']('mozpointerlockchange', _0x2dcb55, ![]);
            }

            function _0x2dcb55() {
                if (document['pointerLockElement'] === _0x34a800['c'] || document['mozPointerLockElement'] === _0x34a800['c']) {
                    _0x34ea3f['locked'] = !![];
                } else {
                    _0x34ea3f['locked'] = ![];
                }
            }
            var _0x478d05 = 0x12c;
            var _0x36dfb4 = 0.8;
            var _0x2a3fa5 = new _0x117b6e['scene']();
            _0x2a3fa5['mouseCamera'] = new _0x117b6e['Vector2'](0x0, 0x0);
            _0x2a3fa5['camera']['ratio'] = 0x1;
            _0x2a3fa5['camera']['newRatio'] = 0x1;
            _0x2a3fa5['camera']['borderRatio'] = 0x1;
            _0x2a3fa5['name'] = 'scene';
            var _0x20b307 = new _0x117b6e['scene']();
            _0x20b307['camera'] = _0x2a3fa5['camera'];
            _0x20b307['name'] = 'middle';
            var _0x1e63a6 = new _0x117b6e['scene']();
            _0x1e63a6['camera'] = _0x2a3fa5['camera'];
            _0x1e63a6['name'] = 'background';
            var _0x81476a = new _0x117b6e['scene']();
            _0x81476a['camera'] = _0x2a3fa5['camera'];
            _0x81476a['name'] = 'bridgeScene';
            var _0x1d7b20 = new _0x117b6e['scene']();
            _0x1d7b20['camera'] = _0x2a3fa5['camera'];
            _0x1d7b20['name'] = 'gridBackground';
            var _0x2cb9c6 = new _0x117b6e['scene']();
            _0x2cb9c6['camera'] = _0x2a3fa5['camera'];
            _0x2cb9c6['name'] = 'middleScene';
            var _0x220553 = new _0x117b6e['scene']();
            _0x220553['camera'] = _0x2a3fa5['camera'];
            _0x220553['name'] = 'top';
            var _0x3b464e = new _0x117b6e['scene']();
            _0x3b464e['camera'] = _0x2a3fa5['camera'];
            _0x3b464e['name'] = 'borderScene';
            var _0xb4e088 = new _0x117b6e['scene']();
            _0xb4e088['name'] = 'mapScene';
            var _0x412401 = new _0x117b6e['scene']();
            var _0x3346f0 = [_0x1d7b20, _0x1e63a6, _0x81476a, _0x2a3fa5, _0x20b307, _0x220553, _0x2cb9c6];
            var _0x345ef0 = [new _0x117b6e['scene'](), new _0x117b6e['scene'](), new _0x117b6e['scene'](), new _0x117b6e['scene'](), new _0x117b6e['scene'](), new _0x117b6e['scene'](), new _0x117b6e['scene']()];
            var _0x26a43b = new _0x117b6e['scene']();
            _0x29af9f['createUI'](_0x117b6e, _0x26a43b);
            _0x29af9f['createMap'](_0x117b6e, _0x1d7b20, _0x20b307, _0x28097e);
            var _0x22201b = '\'Arial Black\', Gadget, sans-serif';
            _0x22201b = '\'Arial Black\'';
            var _0x57956b = new _0x117b6e['text']('', 0x0, -0xbe / 0x2 + 0x19, '#FFF', _0x22201b, 0x96 / 0x5, '');
            _0x57956b['addBelow'](new _0x117b6e['text']('', 0x0, 0x5, '#FFF', _0x22201b, 0x96 / 0x5, '', 0.4));
            _0x26a43b['add'](_0x57956b);
            var _0x3d29bd = new _0x117b6e['scene']();
            _0x3d29bd['camera'] = _0x2a3fa5['camera'];
            _0x3d29bd['name'] = 'leafScene';
            var _0x1bdcfd = new _0x117b6e['object']();
            _0x3d29bd['add'](_0x1bdcfd);
            var _0x3e710f = document['getElementById']('nameBox');
            _0x3e710f['addEventListener']('focus', function () {
                _0x447f47(_0x34ea3f['emulatedFromTouch']);
            });
            _0x3e710f['addEventListener']('blur', function () {
                _0x447f47(![]);
            });

            function _0x447f47(_0x48ea84) {
                window['menuLogo']['visible'] = !_0x48ea84;
                _0x52811c('name')['classList']['toggle']('mobileInput', _0x48ea84);
            }
            _0x447f47(![]);
            _0x2d38df();
            var _0x25ee48 = [_0x52811c('leaf0'), _0x52811c('leaf1')];
            var _0x66cac1 = {
                'leaf': {
                    'new': function (_0x3083d9) {
                        var _0x1fc01 = new _0x117b6e['image'](_0x25ee48[0x0]);
                        _0x20b307['add'](_0x1fc01);
                        return _0x1fc01;
                    },
                    'update': function (_0x41202b, _0x23ecb4) {
                        if (_0x23ecb4['envType'] == 'jungletree') {
                            _0x41202b['img'] = _0x25ee48[0x0];
                        } else {
                            _0x41202b['image'] = _0x25ee48[_0x23ecb4['envType']['substring'](0x4)];
                        }
                        _0x41202b['position']['x'] = _0x23ecb4['visual']['position']['x'] + Math['random']() * 0x1e - 0xf;
                        _0x41202b['position']['y'] = _0x23ecb4['visual']['position']['y'] + Math['random']() * 0x1e - 0xf;
                        _0x41202b['width'] = 0x32 + Math['random']() * 0x14;
                        _0x41202b['height'] = 0x32 + Math['random']() * 0x14;
                        _0x41202b['opacity'] = 0x1;
                    }
                },
                'smoke': {
                    'new': function (_0x4297fd) {
                        var _0x2ec346 = new _0x117b6e['image'](_0x52811c('smoke' + Math['floor'](Math['random']() * 0x2)));
                        _0x20b307['add'](_0x2ec346);
                        return _0x2ec346;
                    },
                    'update': function (_0xeee0a3, _0x409f91) {
                        var _0x5edcb5 = 0.4;
                        if (_0x409f91['sprinting']) {
                            _0x5edcb5 = 0x1;
                        }
                        var _0x51ed80 = 0x32 + Math['random']() * 0x14;
                        _0xeee0a3['position']['x'] = _0x409f91['visual']['position']['x'] + Math['random']() * 0x1e - 0xf;
                        _0xeee0a3['position']['y'] = _0x409f91['visual']['position']['y'] + Math['random']() * 0x1e - 0xf;
                        _0xeee0a3['width'] = _0xeee0a3['height'] = _0x51ed80;
                        _0xeee0a3['opacity'] = _0x5edcb5;
                    }
                },
                'pebble': {
                    'new': function (_0x513afa) {
                        var _0x126a29 = new _0x117b6e['image'](_0x52811c('pebble'));
                        _0x20b307['add'](_0x126a29);
                        return _0x126a29;
                    },
                    'update': function (_0x5ed333, _0x3615f5) {
                        _0x5ed333['position']['x'] = _0x3615f5['visual']['position']['x'] + Math['random']() * 0x1e - 0xf;
                        _0x5ed333['position']['y'] = _0x3615f5['visual']['position']['y'] + Math['random']() * 0x1e - 0xf;
                        _0x5ed333['width'] = 0x32 + Math['random']() * 0x14;
                        _0x5ed333['height'] = 0x32 + Math['random']() * 0x14;
                        _0x5ed333['opacity'] = 0x1;
                    }
                },
                'scrap': {
                    'new': function (_0x1d6668) {
                        var _0x497b9c = new _0x117b6e['image'](_0x52811c('scrap' + Math['floor'](Math['random']() * 0x2)));
                        _0x20b307['add'](_0x497b9c);
                        return _0x497b9c;
                    },
                    'update': function (_0x2ad163, _0x7c5d57) {
                        _0x2ad163['position']['x'] = _0x7c5d57['visual']['position']['x'] + Math['random']() * 0x1e - 0xf;
                        _0x2ad163['position']['y'] = _0x7c5d57['visual']['position']['y'] + Math['random']() * 0x1e - 0xf;
                        _0x2ad163['width'] = 0x32 + Math['random']() * 0x14;
                        _0x2ad163['height'] = 0x32 + Math['random']() * 0x14;
                        _0x2ad163['opacity'] = 0x1;
                    }
                }
            };
            var _0x4a4fd8 = _0x585f8c(_0x66cac1);
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x4a4fd8['length']; _0x441ab1++) {
                _0x66cac1[_0x4a4fd8[_0x441ab1]]['list'] = [];
                _0x66cac1[_0x4a4fd8[_0x441ab1]]['actualNew'] = function () {
                    var _0x225048 = this['new']();
                    _0x117b6e['customParticle'](_0x225048);
                    _0x225048['using'] = ![];
                    _0x225048['visible'] = ![];
                    _0x225048['parentRemove'] = ![];
                    if (_0x225048['oldUpdate'] == undefined) {
                        _0x225048['oldUpdate'] = _0x225048['update'];
                        _0x225048['update'] = function (_0x5eadd6) {
                            if (!this['using']) {
                                return;
                            }
                            if (!this['oldUpdate'](_0x5eadd6)) {
                                this['using'] = ![];
                                this['visible'] = ![];
                            }
                        };
                        _0x225048['oldRender'] = _0x225048['render'];
                        _0x225048['render'] = function (_0x5b0a17, _0x444e89, _0x336e86) {
                            if (this['using']) {
                                this['oldRender'](_0x5b0a17, _0x444e89, _0x336e86);
                            }
                        };
                    }
                    return _0x225048;
                };
                for (var _0x4db1a6 = 0x0; _0x4db1a6 < 0x28; _0x4db1a6++) {
                    _0x66cac1[_0x4a4fd8[_0x441ab1]]['list']['push'](_0x66cac1[_0x4a4fd8[_0x441ab1]]['actualNew']());
                }
            }
            _0x117b6e['customCustomParticle'] = function (_0x58ff0f, _0x55786b, _0x4d89c5, _0x2c896b, _0x3b84d5, _0x30be9d, _0x37c6ac, _0x5160fb) {
                var _0xed366d = _0x66cac1[_0x58ff0f]['list'];
                for (var _0x39f02e = 0x0; _0x39f02e <= _0xed366d['length']; _0x39f02e++) {
                    if (_0x39f02e == _0xed366d['length']) {
                        _0xed366d[_0x39f02e] = _0x66cac1[_0x58ff0f]['actualNew']();
                    }
                    if (!_0xed366d[_0x39f02e]['using']) {
                        _0xed366d[_0x39f02e]['using'] = !![];
                        _0x66cac1[_0x58ff0f]['update'](_0xed366d[_0x39f02e], _0x55786b);
                        _0x117b6e['customParticle'](_0xed366d[_0x39f02e], _0x4d89c5, _0x2c896b, _0x3b84d5, _0x30be9d, _0x37c6ac, _0x5160fb);
                        _0xed366d[_0x39f02e]['parent'] = null;
                        _0xed366d[_0x39f02e]['visible'] = !![];
                        if (_0xed366d[_0x39f02e] == undefined) {
                            console['log']('Gave undefined');
                        }
                        return _0xed366d[_0x39f02e];
                    }
                }
            };
            var _0x541679 = document['createElement']('canvas');
            _0x541679['width'] = _0x541679['height'] = 0x708;
            var _0x3f2592 = _0x541679['getContext']('2d');
            var _0x1a78a5 = new _0x117b6e['image'](_0x541679, 0x0, 0x0, 0x384, 0x384);
            _0xb4e088['add'](new _0x117b6e['rectangle'](0x0, 0x0, 0x782, 0x43a, '#000', 0.3));
            _0xb4e088['add'](_0x1a78a5);
            var _0x23f6f4 = new _0x117b6e['object']();
            _0x23f6f4['add'](new _0x117b6e['rectangle'](0x0, 0x0, 0x782, 0x43a, '#000', 0.5));
            var _0x5ee9b2 = [];

            function _0x525a97(_0x12a33e) {
                var _0x58f122 = new _0x117b6e['strokeText'](_0x12a33e['text'], 0x0, 0x0, '#000', 'Arial Black', _0x12a33e['fontSize'], '', 0x1, _0x12a33e['align']);
                _0x58f122['lineWidth'] = 0x6;
                _0x12a33e['addBelow'](_0x58f122);
                _0x5ee9b2['push'](_0x12a33e);
            }

            function _0xa62402() {
                for (var _0x5eb4a7 = 0x0; _0x5eb4a7 < _0x5ee9b2['length']; _0x5eb4a7++) {
                    _0x5ee9b2[_0x5eb4a7]['belowObjects'][0x0]['text'] = _0x5ee9b2[_0x5eb4a7]['text'];
                }
            }
            var _0x1603dc = 'lobby';
            var _0x2dcbe6 = -0x1;
            var _0x18ff70 = {
                'position': [0x0, 0x0],
                'radius': _0x28097e / 0x2 + 0x258 + 0x15e
            };
            var _0x1d1091 = {
                'position': [0x0, 0x0],
                'radius': _0x28097e / 0x2 + 0x258 + 0x15e
            };
            var _0x397a0b = ![];
            var _0x17789 = 0x3e8;
            var _0x14de48 = 0x3e8;
            var _0x47c129 = 0x14;
            var _0x3cdbca = new _0x117b6e['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x3b464e['add'](_0x3cdbca);
            var _0x3d250e = new _0x117b6e['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x3b464e['add'](_0x3d250e);
            var _0xe50f30 = new _0x117b6e['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x3b464e['add'](_0xe50f30);
            var _0x21476c = new _0x117b6e['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x3b464e['add'](_0x21476c);
            var _0x4fd7d5 = new _0x117b6e['scene']();
            var _0x34bf7e = new _0x117b6e['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x4fd7d5['add'](_0x34bf7e);
            var _0x3efa0a = new _0x117b6e['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x4fd7d5['add'](_0x3efa0a);
            var _0x201971 = new _0x117b6e['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x4fd7d5['add'](_0x201971);
            var _0x5e8cab = new _0x117b6e['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x4fd7d5['add'](_0x5e8cab);
            var _0x2cf3af = new _0x117b6e['strokeRectangle'](0x0, 0x0, 0x0, 0x0, '#FFF', 0x32, 0.4);
            if (_0x595d79) {
                _0x2cf3af['color'] = '#000';
            }
            _0x4fd7d5['add'](_0x2cf3af);
            var _0x32b7ea = document['createElement']('canvas');
            _0x32b7ea['width'] = _0x32b7ea['height'] = 0x708;
            var _0x43f57a = _0x32b7ea['getContext']('2d');
            _0x43f57a['translate'](0x384, 0x384);
            _0xb4e088['add'](new _0x117b6e['image'](_0x32b7ea, 0x0, 0x0, 0x384, 0x384));
            var _0x5d4f0e = new _0x117b6e['circle'](0x0, 0x0, 0x32, '#FFF', 0x1);
            _0x5d4f0e['addBelow'](new _0x117b6e['circle'](0x0, 0x0, 0x78, '#FFF', 0.4));
            _0x5d4f0e['addBelow'](new _0x117b6e['circle'](0x0, 0x0, 0xc8, '#FFF', 0.2));
            _0x4fd7d5['add'](_0x5d4f0e);
            var _0x355cc5 = [];
            var _0x617d1 = '#00BFFF';
            for (var _0x441ab1 = 0x0; _0x441ab1 < 0x4; _0x441ab1++) {
                var _0x19b665 = new _0x117b6e['circle'](0x0, 0x0, 0x32, _0x617d1, 0x1);
                _0x19b665['addBelow'](new _0x117b6e['circle'](0x0, 0x0, 0x78, _0x617d1, 0.4));
                _0x19b665['addBelow'](new _0x117b6e['circle'](0x0, 0x0, 0xc8, _0x617d1, 0.2));
                _0x4fd7d5['add'](_0x19b665);
                _0x355cc5['push'](_0x19b665);
            }
            var _0x3f048e = 0x12c;
            var _0x353720 = 0.45;

            function _0x3b4631(_0x23929e) {
                return _0x23929e['toString']()['replace'](/\B(?=(\d{3})+(?!\d))/g, ',');
            }

            function _0x26672a(_0x235cf7) {
                _0x235cf7['width'] = 0x0;
                _0x235cf7['height'] = 0x0;
                _0x235cf7['opacity'] = 0x0;
            }

            function _0x1678d8() {
                _0x17789 = _0x117b6e['lerp'](_0x18ff70['radius'], _0x1d1091['radius']);
                _0x17789 = Math['max'](_0x17789, 0x0);
                var _0x4247eb = new _0x117b6e['Vector2'](_0x117b6e['lerp'](_0x18ff70['position'][0x0], _0x1d1091['position'][0x0]), _0x117b6e['lerp'](_0x18ff70['position'][0x1], _0x1d1091['position'][0x1]));
                var _0x1e2da8 = _0x4247eb['x'] - _0x17789;
                var _0x1414a4 = _0x4247eb['y'] - _0x17789;
                var _0x5dafdf = _0x4247eb['y'] + _0x17789;
                var _0x45ffbb = _0x4247eb['x'] + _0x17789;
                var _0x55562b = _0x117b6e['me']['visual']['position']['x'] - 0x780 / 0x2 - _0x3f048e;
                var _0x2587b2 = _0x117b6e['me']['visual']['position']['y'] - 0x438 / 0x2 - _0x3f048e;
                var _0x2ceb15 = _0x117b6e['me']['visual']['position']['y'] + 0x438 / 0x2 + _0x3f048e;
                var _0x2d2a43 = _0x117b6e['me']['visual']['position']['x'] + 0x780 / 0x2 + _0x3f048e;
                var _0x41193d = 0x0;
                var _0x40ae55 = 0x0;
                if (_0x1414a4 < _0x2587b2) {
                    _0x26672a(_0xe50f30);
                    _0x41193d = _0x2587b2;
                } else {
                    _0xe50f30['position']['x'] = _0x117b6e['me']['visual']['position']['x'];
                    _0xe50f30['position']['y'] = (_0x1414a4 + _0x2587b2) / 0x2;
                    _0xe50f30['height'] = _0x1414a4 - _0x2587b2;
                    _0xe50f30['width'] = 0x780 + _0x3f048e * 0x2;
                    _0x41193d = _0x1414a4;
                    _0xe50f30['opacity'] = _0x353720;
                }
                if (_0x5dafdf > _0x2ceb15) {
                    _0x26672a(_0x21476c);
                    _0x40ae55 = _0x2ceb15;
                } else {
                    _0x21476c['position']['x'] = _0x117b6e['me']['visual']['position']['x'];
                    _0x21476c['position']['y'] = (_0x5dafdf + _0x2ceb15) / 0x2;
                    _0x21476c['height'] = _0x5dafdf - _0x2ceb15;
                    _0x21476c['width'] = 0x780 + _0x3f048e * 0x2;
                    _0x40ae55 = _0x5dafdf;
                    _0x21476c['opacity'] = _0x353720;
                }
                if (_0x1e2da8 < _0x55562b) {
                    _0x26672a(_0x3cdbca);
                } else {
                    _0x3cdbca['opacity'] = _0x353720;
                    _0x3cdbca['position']['x'] = (_0x1e2da8 + _0x55562b) / 0x2;
                    _0x3cdbca['position']['y'] = (_0x41193d + _0x40ae55) / 0x2;
                    _0x3cdbca['height'] = _0x40ae55 - _0x41193d;
                    _0x3cdbca['width'] = _0x1e2da8 - _0x55562b;
                }
                if (_0x45ffbb > _0x2d2a43) {
                    _0x26672a(_0x3d250e);
                } else {
                    _0x3d250e['opacity'] = _0x353720;
                    _0x3d250e['position']['x'] = (_0x45ffbb + _0x2d2a43) / 0x2;
                    _0x3d250e['position']['y'] = (_0x41193d + _0x40ae55) / 0x2;
                    _0x3d250e['height'] = _0x40ae55 - _0x41193d;
                    _0x3d250e['width'] = _0x2d2a43 - _0x45ffbb;
                }
                _0x208697();
            }

            function _0x208697() {
                _0x17789 = _0x117b6e['lerp'](_0x18ff70['radius'], _0x1d1091['radius']);
                var _0x2054a9 = new _0x117b6e['Vector2'](_0x117b6e['lerp'](_0x18ff70['position'][0x0], _0x1d1091['position'][0x0]), _0x117b6e['lerp'](_0x18ff70['position'][0x1], _0x1d1091['position'][0x1]));
                var _0x5c7ca2 = _0x2054a9['x'] - _0x17789;
                var _0xbaabde = _0x2054a9['y'] - _0x17789;
                var _0x244b00 = _0x2054a9['y'] + _0x17789;
                var _0xf70fb3 = _0x2054a9['x'] + _0x17789;
                var _0x47d286 = -_0x28097e / 0x2;
                var _0x51b511 = -_0x28097e / 0x2;
                var _0x4c28a2 = _0x28097e / 0x2;
                var _0x233785 = _0x28097e / 0x2;
                var _0x14f473 = 0x0;
                var _0x848a95 = 0x0;
                if (_0xbaabde < _0x51b511) {
                    _0x26672a(_0x201971);
                    _0x14f473 = _0x51b511;
                } else {
                    _0x201971['position']['x'] = 0x0;
                    _0x201971['position']['y'] = (_0xbaabde + _0x51b511) / 0x2;
                    _0x201971['height'] = _0xbaabde - _0x51b511;
                    _0x201971['width'] = _0x28097e;
                    _0x14f473 = _0xbaabde;
                    _0x201971['opacity'] = _0x353720;
                }
                if (_0x244b00 > _0x4c28a2) {
                    _0x26672a(_0x5e8cab);
                    _0x848a95 = _0x4c28a2;
                } else {
                    _0x5e8cab['position']['x'] = 0x0;
                    _0x5e8cab['position']['y'] = (_0x244b00 + _0x4c28a2) / 0x2;
                    _0x5e8cab['height'] = _0x244b00 - _0x4c28a2;
                    _0x5e8cab['width'] = _0x28097e;
                    _0x848a95 = _0x244b00;
                    _0x5e8cab['opacity'] = _0x353720;
                }
                if (_0x5c7ca2 < _0x47d286) {
                    _0x26672a(_0x34bf7e);
                } else {
                    _0x34bf7e['opacity'] = _0x353720;
                    _0x34bf7e['position']['x'] = (_0x5c7ca2 + _0x47d286) / 0x2;
                    _0x34bf7e['position']['y'] = (_0x14f473 + _0x848a95) / 0x2;
                    _0x34bf7e['height'] = _0x848a95 - _0x14f473;
                    _0x34bf7e['width'] = _0x5c7ca2 - _0x47d286;
                }
                if (_0xf70fb3 > _0x233785) {
                    _0x26672a(_0x3efa0a);
                } else {
                    _0x3efa0a['opacity'] = _0x353720;
                    _0x3efa0a['position']['x'] = (_0xf70fb3 + _0x233785) / 0x2;
                    _0x3efa0a['position']['y'] = (_0x14f473 + _0x848a95) / 0x2;
                    _0x3efa0a['height'] = _0x848a95 - _0x14f473;
                    _0x3efa0a['width'] = _0x233785 - _0xf70fb3;
                }
                _0x43f57a['clearRect'](-0x384, -0x384, 0x708, 0x708);
                _0x4fd7d5['render'](_0x43f57a, _0x28097e / 0x708, 0x1);
                _0x5d4f0e['position'] = _0x117b6e['me']['visual']['position']['clone']();
            }
            var _0x8b23cb = new _0x117b6e['object']();
            _0x8b23cb['size'] = 0.9;
            _0x8b23cb['opacity'] = 0x0;
            var _0x1313f9 = 0x1e;
            var _0x41082c = 0x13;
            var _0x541a16 = 0x23;
            var _0x15d5d4 = 0x0;
            var _0x5845d2 = new _0x117b6e['arc'](0x0, 0x0, _0x41082c, '#FFF', Math['PI'] * 0.7, 0x0, 0x9);
            _0x5845d2['addBelow'](new _0x117b6e['arc'](0x0, 0x0, _0x41082c, '#FFF', Math['PI'] * 0x2, 0x0, 0x9));
            _0x5845d2['belowObjects'][0x0]['opacity'] = 0.35;
            var _0x3e9faa = new _0x117b6e['text']('Matchmaking...', 0x0, 0x0, '#FFF', 'Arial Black', _0x1313f9);
            _0x8b23cb['position']['y'] = 0xfa;
            _0x8b23cb['add'](_0x5845d2);
            _0x8b23cb['add'](_0x3e9faa);
            _0x26a43b['add'](_0x8b23cb);

            function _0x5e9dbc() {
                _0x5845d2['rotation'] += _0x117b6e['clientDetails']['dt'] / 0x5;
                _0x15d5d4 = _0x3e9faa['width'] + _0x541a16 + _0x41082c * 0x2;
                _0x5845d2['position']['x'] = -_0x15d5d4 / 0x2 + _0x41082c;
                _0x3e9faa['position']['x'] = _0x15d5d4 / 0x2 - _0x3e9faa['width'] / 0x2;
                _0x8b23cb['position']['y'] = Math['round'](_0x34a800['topOfScreen']) + 0x73;
            }
            var _0x224723 = new _0x57a089(_0x2a3fa5);
            var _0x2a9b08 = new _0x117b6e['object']();
            var _0x4f6f86 = 0x28;
            var _0x124c90 = 0x14;
            var _0xe98ffb = 0x4;
            var _0x588ffd = 0.6;
            _0x2a9b08['add'](new _0x117b6e['rectangle'](0x0, _0x4f6f86, _0xe98ffb, _0x124c90, '#FFF', _0x588ffd));
            _0x2a9b08['add'](new _0x117b6e['rectangle'](0x0, -_0x4f6f86, _0xe98ffb, _0x124c90, '#FFF', _0x588ffd));
            _0x2a9b08['add'](new _0x117b6e['rectangle'](_0x4f6f86, 0x0, _0x124c90, _0xe98ffb, '#FFF', _0x588ffd));
            _0x2a9b08['add'](new _0x117b6e['rectangle'](-_0x4f6f86, 0x0, _0x124c90, _0xe98ffb, '#FFF', _0x588ffd));
            _0x2a9b08['add'](new _0x117b6e['rectangle'](0x0, 0x0, _0xe98ffb, _0xe98ffb, '#FFF', _0x588ffd));
            var _0x21bbd6 = new _0x117b6e['object']();
            _0x21bbd6['add'](new _0x117b6e['rectangle'](0x0, _0x4f6f86, _0xe98ffb, _0x124c90, '#F00', _0x588ffd));
            _0x21bbd6['add'](new _0x117b6e['rectangle'](0x0, -_0x4f6f86, _0xe98ffb, _0x124c90, '#F00', _0x588ffd));
            _0x21bbd6['add'](new _0x117b6e['rectangle'](_0x4f6f86, 0x0, _0x124c90, _0xe98ffb, '#F00', _0x588ffd));
            _0x21bbd6['add'](new _0x117b6e['rectangle'](-_0x4f6f86, 0x0, _0x124c90, _0xe98ffb, '#F00', _0x588ffd));
            _0x21bbd6['rotation'] = Math['PI'] / 0x4;
            _0x21bbd6['size'] = 0.7;
            _0x21bbd6['opacity'] = 0x0;
            _0x412401['add'](_0x2a9b08);
            _0x2a9b08['add'](_0x21bbd6);
            var _0x39d88c = new _0x117b6e['scene']();
            var _0x19f93e = new _0x117b6e['object']();
            _0x19f93e['add'](new _0x117b6e['rectangle'](0x0, 0x6, 0x0, 0x19, '#A00'));
            _0x19f93e['add'](new _0x117b6e['rectangle'](0x0, 0x0, 0x0, 0x19, '#F00'));
            _0x19f93e['position']['y'] = 0x438;

            function _0xcf5d73(_0x30a43f, _0x1c9244) {
                var _0x263ba9 = [];
                for (var _0x27f049 = 0x0; _0x27f049 < _0x30a43f['length']; _0x27f049++) {
                    if (_0x1c9244[_0x27f049] == undefined || _0x30a43f[_0x27f049] == undefined) {
                        continue;
                    }
                    if (_0x1c9244[_0x27f049]['pressed'] && !_0x30a43f[_0x27f049]) {
                        _0x263ba9[_0x27f049] = !![];
                    } else {
                        _0x263ba9[_0x27f049] = ![];
                    }
                }
                return _0x263ba9;
            }
            var _0x28899a = ![];
            var _0x2b7e41;
            _0x2b7e41 = [];
            for (var _0x441ab1 = 0x0; _0x441ab1 < 0x10; _0x441ab1++) {
                _0x2b7e41[_0x441ab1] = ![];
            }

            function _0x108d9b() {
                var _0x4e2250;
                try {
                    _0x4e2250 = navigator['getGamepads']();
                } catch (_0x4065c9) {
                    return;
                }
                for (var _0xa21499 = 0x0; _0xa21499 < _0x4e2250['length']; _0xa21499++) {
                    var _0x3a815f = _0x4e2250[_0xa21499];
                    if (_0x3a815f == null || _0x3a815f['id']['indexOf']('Unknown') != -0x1) {
                        continue;
                    }
                    var _0x47d7b7 = _0x3a815f['buttons'];
                    var _0x3cc5b2 = _0x3a815f['axes'];
                    var _0x1ba639 = 0.35;
                    var _0x285208 = ![];
                    if (_0x47d7b7 == undefined || _0x47d7b7['length'] < 0xb) {
                        return;
                    }
                    if (_0x3cc5b2[0x0] < -_0x1ba639) {
                        _0x285208 = !![];
                        if (!_0x33b098['left']) {
                            _0x33b098['left'] = !![];
                            _0x33b098['changedKeys']['push']('left');
                            _0x33b098['changed'] = !![];
                        }
                    } else if (_0x33b098['left']) {
                        _0x33b098['left'] = ![];
                        _0x33b098['changedKeys']['push']('left');
                        _0x33b098['changed'] = !![];
                    }
                    if (_0x3cc5b2[0x0] > _0x1ba639) {
                        _0x285208 = !![];
                        if (!_0x33b098['right']) {
                            _0x33b098['right'] = !![];
                            _0x33b098['changedKeys']['push']('right');
                            _0x33b098['changed'] = !![];
                        }
                    } else if (_0x33b098['right']) {
                        _0x33b098['right'] = ![];
                        _0x33b098['changedKeys']['push']('right');
                        _0x33b098['changed'] = !![];
                    }
                    if (_0x3cc5b2[0x1] < -_0x1ba639) {
                        _0x285208 = !![];
                        if (!_0x33b098['up']) {
                            _0x33b098['up'] = !![];
                            _0x33b098['changedKeys']['push']('up');
                            _0x33b098['changed'] = !![];
                        }
                    } else if (_0x33b098['up']) {
                        _0x33b098['up'] = ![];
                        _0x33b098['changedKeys']['push']('up');
                        _0x33b098['changed'] = ![];
                    }
                    if (_0x3cc5b2[0x1] > _0x1ba639) {
                        _0x285208 = !![];
                        if (!_0x33b098['down']) {
                            _0x33b098['down'] = !![];
                            _0x33b098['changedKeys']['push']('down');
                            _0x33b098['changed'] = !![];
                        }
                    } else if (_0x33b098['down']) {
                        _0x33b098['down'] = ![];
                        _0x33b098['changedKeys']['push']('down');
                        _0x33b098['changed'] = !![];
                    }
                    if (_0x47d7b7[0xa]['pressed']) {
                        if (!_0x33b098['shift']) {
                            _0x33b098['shift'] = !![];
                            _0x33b098['changedKeys']['push']('shift');
                            _0x33b098['changed'] = !![];
                        }
                    } else if (_0x33b098['shift']) {
                        _0x33b098['shift'] = ![];
                        _0x33b098['changedKeys']['push']('shift');
                        _0x33b098['changed'] = !![];
                    }
                    if (_0x47d7b7[0x6]['pressed']) {
                        if (!_0x34ea3f['rightClicking']) {
                            _0x34ea3f['rightClicking'] = !![];
                            _0x34ea3f['rightChanged'] = !![];
                        }
                    } else if (_0x34ea3f['rightClicking']) {
                        _0x34ea3f['rightClicking'] = ![];
                        _0x34ea3f['rightChanged'] = !![];
                        console['log']('Set Right Click False');
                    }
                    if (_0x47d7b7[0x7]['pressed']) {
                        if (!_0x34ea3f['clicking']) {
                            _0x34ea3f['clicking'] = !![];
                            _0x34ea3f['changed'] = !![];
                        }
                    } else if (_0x34ea3f['clicking']) {
                        _0x34ea3f['clicking'] = ![];
                        _0x34ea3f['changed'] = !![];
                    }
                    if (_0x47d7b7[0x0]['pressed'] && !_0x454358) {
                        if (!_0x33b098['space']) {
                            _0x33b098['space'] = !![];
                            _0x33b098['changedKeys']['push']('space');
                            _0x33b098['changed'] = !![];
                        }
                    } else if (_0x33b098['space']) {
                        _0x33b098['space'] = ![];
                        _0x33b098['changedKeys']['push']('space');
                        _0x33b098['changed'] = !![];
                    }
                    if (_0x2b7e41 !== undefined) {
                        var _0x4ca114 = _0xcf5d73(_0x2b7e41, _0x47d7b7);
                        if (_0x4ca114 === undefined) {
                            continue;
                        }
                        if (_0x4ca114[0x1]) {
                            _0x117b6e['currentPackets']['push']({
                                'type': 'build'
                            });
                        }
                        if (_0x4ca114[0x3]) {
                            _0x117b6e['currentPackets']['push']({
                                'type': 'reload'
                            });
                        }
                        if (_0x4ca114[0x2]) {
                            _0x117b6e['currentPackets']['push']({
                                'type': 'pickup'
                            });
                        }
                        if (_0x4ca114[0x8]) {
                            _0x5c7888();
                        }
                        if (_0x117b6e['spectating'] && _0x4ca114[0x9] && _0x26a43b['opacity'] == 0x1) {
                            if (document['activeElement']['id'] == 'partyinput') {
                                _0x2c9838 = document['getElementById']('partyinput')['value'];
                                _0x2c9838 = _0x2c9838['toLowerCase']();
                                if (_0x2c9838['length'] < 0x6) {
                                    alert('ID Not Valid - Should be 6 characters long');
                                }
                                var _0x27333b = _0x2c9838['charAt'](0x0) + _0x2c9838['charAt'](0x1);
                                if (_0x5b1c4e['indexOf'](_0x27333b) == -0x1) {
                                    alert('ID Not Valid - Please check again');
                                }
                                if (_0x309482 == null) {
                                    _0x2005ac(_0x27333b);
                                    _0x3ed413['push']({
                                        'type': 'join',
                                        'id': _0x2c9838
                                    });
                                    _0x3ed413['push']({
                                        'type': 'changename',
                                        'name': document['getElementById']('nameBox')['value']
                                    });
                                    _0x22fd95('name', _0x52811c('nameBox')['value'], 0x16d);
                                }
                            } else {
                                _0x2dcbe6 = -0x1;
                                _0x18ff70 = {
                                    'position': [0x0, 0x0],
                                    'radius': _0x28097e / 0x2 + 0x258 + 0x15e
                                };
                                _0x1d1091 = {
                                    'position': [0x0, 0x0],
                                    'radius': _0x28097e / 0x2 + 0x258 + 0x15e
                                };
                                _0x2cf3af['width'] = _0x28097e + 0x3e8;
                                _0x2cf3af['height'] = _0x2cf3af['width'];
                                _0x2cf3af['position']['x'] = 0x0;
                                _0x2cf3af['position']['y'] = 0x0;
                                _0x4509c1['opacity'] = 0x0;
                                _0x42aa48 = !![];
                                if (_0x309482 != null) {
                                    _0x198256();
                                } else {
                                    _0x53f0ab();
                                }
                                if (_0x60b1ef == -0x2) {}
                            }
                        }
                        if (_0x4ca114[0x4]) {
                            _0x6203d7 -= 0x1;
                            if (_0x6203d7 < 0x0) {
                                _0x6203d7 = 0x5;
                            }
                            while (_0x117b6e['me']['weaponSlots'][_0x6203d7]['type'] == 'empty') {
                                _0x6203d7--;
                            }
                            _0x117b6e['currentPackets']['push']({
                                'type': 'selectChange',
                                'weapon': _0x6203d7
                            });
                        }
                        if (_0x4ca114[0x5]) {
                            _0x6203d7 += 0x1;
                            if (_0x6203d7 > 0x5) {
                                _0x6203d7 = 0x0;
                            }
                            while (_0x117b6e['me']['weaponSlots'][_0x6203d7]['type'] == 'empty') {
                                _0x6203d7++;
                                if (_0x6203d7 > 0x5) {
                                    _0x6203d7 = 0x0;
                                }
                            }
                            _0x117b6e['currentPackets']['push']({
                                'type': 'selectChange',
                                'weapon': _0x6203d7
                            });
                        }
                        for (var _0xa21499 = 0x0; _0xa21499 < _0x47d7b7['length']; _0xa21499++) {
                            _0x2b7e41[_0xa21499] = _0x47d7b7[_0xa21499]['pressed'];
                        }
                    }
                    var _0x323944 = 0x3;
                    if (_0x3cc5b2[0x3] == 0x0) {}
                    if (Math['abs'](_0x3cc5b2[0x2]) > _0x1ba639 || Math['abs'](_0x3cc5b2[_0x323944]) > _0x1ba639) {
                        _0x34ea3f['x'] = _0x3cc5b2[0x2] * 0x12c;
                        _0x34ea3f['y'] = _0x3cc5b2[_0x323944] * 0x12c;
                        if (_0x34ea3f['rightClicking']) {
                            var _0x5ca236 = Math['atan2'](_0x3cc5b2[_0x323944], _0x3cc5b2[0x2]);
                            var _0x447bfe = 0x96;
                            var _0x2a2bdb = _0x20c316(_0x3cc5b2[0x2] * _0x3cc5b2[0x2] + _0x3cc5b2[_0x323944] * _0x3cc5b2[_0x323944]);
                            _0x2a2bdb *= 0x96;
                            _0x447bfe += _0x2a2bdb;
                            _0x34ea3f['x'] = Math['cos'](_0x5ca236) * _0x447bfe;
                            _0x34ea3f['y'] = Math['sin'](_0x5ca236) * _0x447bfe;
                        }
                        _0x28899a = !![];
                    }
                }
            }
            var _0x5e6c0d = new _0x117b6e['text']('+5', 0x0, 0x28, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center');
            _0x5e6c0d['redraw']();
            _0x5e6c0d = _0x5e6c0d['canvas'];
            var _0x25a510 = new _0x117b6e['text'](0x64, 0x0, 0x0, '#FFF', 'Arial', 0xa, 'bold', 0.9, 'left');
            _0x25a510['redraw']();
            _0x25a510 = _0x25a510['canvas'];
            var _0x53fe60 = new _0x117b6e['text']('/', 0x0, 0x0, '#FFF', 'Arial', 0xa, 'bold', 0.5, 'center');
            _0x53fe60['redraw']();
            _0x53fe60 = _0x53fe60['canvas'];
            var _0xeacac1 = [];
            var _0x2747a4 = 0xf;
            var _0x484655 = 0xc;
            var _0x2f3604 = new _0x117b6e['object']();
            _0x2f3604['size'] = 0.8;
            var _0xe944b3 = 0x28;
            var _0x34c577 = 0x1a;
            var _0x2f9b6f = 0x0;
            var _0x27a8da = 0x40;
            var _0x330fd4 = '#ffcc00';
            _0x39d88c['add'](_0x2f3604);

            function _0x8025ea(_0xa92246, _0xb57c83, _0x1b7cca) {
                if (_0x1b7cca === undefined) {
                    _0x1b7cca = ![];
                }
                var _0x32a751 = {};
                _0x32a751['parent'] = new _0x117b6e['object']();
                _0x32a751['rectangle'] = new _0x117b6e['rectangle'](0x0, 0x0, 0x1, 0x1, '#000', 0.3);
                _0x32a751['parent']['add'](_0x32a751['rectangle']);
                _0x32a751['name1'] = new _0x117b6e['text'](_0xa92246, 0x0, 0x0, '#DDD', 'Arial Black', _0x34c577, '', 0x1, 'left');
                _0x32a751['elim'] = new _0x117b6e['text']('Eliminated', 0x0, 0x0, '#F00', 'Arial Black', _0x34c577, '', 0x1, 'left');
                if (_0x1b7cca) {
                    _0x32a751['elim']['text'] = 'Knocked';
                    _0x32a751['elim']['fillStyle'] = _0x330fd4;
                }
                _0x32a751['name2'] = new _0x117b6e['text'](_0xb57c83, 0x0, 0x0, '#DDD', 'Arial Black', _0x34c577, '', 0x1, 'left');
                _0x32a751['parent']['add'](_0x32a751['name1']);
                _0x32a751['parent']['add'](_0x32a751['elim']);
                _0x32a751['parent']['add'](_0x32a751['name2']);
                _0x32a751['parent']['opacity'] = 0x0;
                _0x32a751['timeLeft'] = 0x6;
                _0xeacac1['push'](_0x32a751);
                _0x2f3604['add'](_0x32a751['parent']);
                return _0x32a751;
            }

            function _0x43dd0e() {
                var _0x429411 = 0x0;
                _0x2f9b6f = 0x0;
                for (var _0x34ada3 = 0x0; _0x34ada3 < _0xeacac1['length']; _0x34ada3++) {
                    var _0x3ba53f = _0xeacac1[_0x34ada3];
                    var _0x35cf41 = _0x3ba53f['name1']['width'] + _0x2747a4 + _0x3ba53f['elim']['width'] + _0x2747a4 + _0x3ba53f['name2']['width'];
                    _0x3ba53f['rectangle']['width'] = _0x35cf41 + _0x484655 * 0x2;
                    _0x3ba53f['rectangle']['height'] = _0x34c577 + _0x484655 * 0x2;
                    _0x3ba53f['name1']['position']['x'] = 0x0;
                    _0x3ba53f['elim']['position']['x'] = _0x3ba53f['name1']['width'] + _0x2747a4;
                    _0x3ba53f['name2']['position']['x'] = _0x3ba53f['elim']['position']['x'] + _0x3ba53f['elim']['width'] + _0x2747a4;
                    _0x3ba53f['rectangle']['position']['x'] = _0x35cf41 / 0x2;
                    _0x3ba53f['parent']['position']['x'] = 0x0;
                    _0x3ba53f['parent']['position']['y'] = _0x34c577 / 0x2 + _0x34ada3 * _0x27a8da;
                    _0x3ba53f['parent']['position']['x'] += _0xe944b3;
                    _0x3ba53f['parent']['position']['y'] += _0xe944b3;
                    _0x3ba53f['timeLeft'] -= _0x117b6e['clientDetails']['dt'] / 0x32;
                    if (_0x3ba53f['timeLeft'] < 0x0) {
                        _0x3ba53f['parent']['position']['y'] += _0x2f9b6f * _0x27a8da;
                        if (_0x2f9b6f != 0x0) {
                            _0x3ba53f['parent']['position']['y'] -= _0x429411 * _0x27a8da;
                        }
                        _0x3ba53f['parent']['opacity'] = _0x3ba53f['timeLeft'] + 0x1;
                        _0x2f9b6f += _0x3ba53f['parent']['opacity'];
                        if (_0x3ba53f['timeLeft'] <= -0x1) {
                            if (_0x3ba53f['parent']['parent'] != null) _0x3ba53f['parent']['parent']['remove'](_0x3ba53f['parent']);
                            var _0x10497b = _0x3ba53f['parent'];
                            _0x10497b['remove'](_0x3ba53f['name1']);
                            _0x10497b['remove'](_0x3ba53f['elim']);
                            _0x10497b['remove'](_0x3ba53f['name2']);
                            _0x10497b['remove'](_0x3ba53f['rectangle']);
                            _0x3ba53f['name1']['unlink']();
                            _0x3ba53f['elim']['unlink']();
                            _0x3ba53f['name2']['unlink']();
                            _0xeacac1['splice'](_0x34ada3, 0x1);
                            _0x34ada3--;
                            _0x2f9b6f = 0x0;
                            _0x429411 -= 0x1;
                        }
                    } else if (_0x3ba53f['parent']['opacity'] < 0x1) {
                        _0x3ba53f['parent']['opacity'] = Math['min'](0x1, _0x3ba53f['parent']['opacity'] + _0x117b6e['clientDetails']['dt'] / 0x32);
                    }
                    if (_0x3ba53f['timeLeft'] >= 0x0) {
                        _0x3ba53f['parent']['position']['y'] += _0x2f9b6f * _0x27a8da;
                        if (_0x2f9b6f != 0x0) {
                            _0x3ba53f['parent']['position']['y'] -= _0x429411 * _0x27a8da;
                        }
                    }
                    if (_0x3ba53f['timeLeft'] < 0x0) {
                        _0x429411++;
                    }
                }
            }
            var _0x23b709 = new _0x117b6e['scene']();
            _0x23b709['opacity'] = 0x0;
            _0x23b709['add'](new _0x117b6e['rectangle'](0x0, 0x0, 0x782, 0x43a, '#000', 0.3));
            var _0x11ad9c = new _0x117b6e['text']('You placed #100', 0x0, -0x438 / 0x4 - 0x32, '#FFF', 'Arial Black', 0x32, '', 0x1);
            _0x525a97(_0x11ad9c);
            _0x11ad9c['belowObjects'][0x0]['lineWidth'] = 0x8;
            var _0x12f8c9 = new _0x117b6e['image'](_0x52811c('victory'), _0x11ad9c['position']['x'], _0x11ad9c['position']['y'], 0x258, 0xc8, 0x0);
            _0x12f8c9['size'] = 0.9;
            _0x23b709['add'](_0x11ad9c);
            _0x23b709['add'](_0x12f8c9);
            var _0x501758 = new _0x117b6e['text']('Eliminated', 0x0, -0x438 / 0x4 + 0x46, '#F00', 'Arial Black', 0x1e, '', 0x0, 'left');
            var _0x9aad4b = new _0x117b6e['text']('Slug', 0x0, -0x438 / 0x4 + 0x46, '#FFF', 'Arial Black', 0x1e, '', 0x0, 'left');
            var _0x57d540 = 0x1e;
            var _0x672833 = new _0x117b6e['rectangle'](0x0, -0x438 / 0x4 + 0x46, 0x1, 0x1e + _0x57d540, '#000', 0.3);
            _0x501758['opacity'] = 0x0;
            _0x9aad4b['opacity'] = 0x0;
            _0x672833['opacity'] = 0x0;
            _0x23b709['add'](_0x672833);
            _0x23b709['add'](_0x501758);
            _0x23b709['add'](_0x9aad4b);

            function _0x174aba() {
                var _0x290a05 = 0x14;
                var _0x4ff936 = _0x501758['width'] + _0x9aad4b['width'] + _0x290a05;
                _0x501758['position']['x'] = -_0x4ff936 / 0x2;
                _0x9aad4b['position']['x'] = _0x501758['position']['x'] + _0x501758['width'] + _0x290a05;
                _0x672833['width'] = _0x4ff936 + _0x57d540;
            }
            var _0x4eb6d9 = new _0x117b6e['roundRectangle'](0x0, 0x438 / 0x4, 0x1f4 - 0x6, 0x46, 0x46 / 0x2, '#4169E1', 0.4);
            _0x4eb6d9['strokeStyle'] = '#5179F1';
            _0x4eb6d9['lineWidth'] = 0x6;
            var _0x372aa2 = new _0x117b6e['text']('Return to Lobby', _0x4eb6d9['position']['x'], _0x4eb6d9['position']['y'], '#FFF', _0x22201b, 0x1e, '');
            window['lobbyText'] = _0x372aa2;
            var _0x469056 = new _0x117b6e['strokeText']('Return to Lobby', 0x0, -0x2, '#5179F1', _0x22201b, 0x1e, '');
            _0x469056['lineWidth'] = 0x9;
            _0x372aa2['addBelow'](_0x469056);
            _0x23b709['add'](_0x4eb6d9);
            _0x23b709['add'](_0x372aa2);
            var _0x5cd02d = new _0x117b6e['object']();
            var _0x3b878f = 0xaa;
            var _0x1666ab = 0x5a;
            var _0x4f7d9b = 0x1e;
            var _0x549fed = 0x3e;
            var _0x5286de = '#999';
            var _0x4fb55f = '#AAA';
            _0x4fb55f = '#CCC';
            var _0x28f658 = new _0x117b6e['text']('Place', -_0x3b878f, -_0x1666ab, _0x5286de, 'Arial Black', _0x4f7d9b, '', 0x1);
            _0x525a97(_0x28f658);
            _0x5cd02d['add'](_0x28f658);
            var _0x3cbb45 = new _0x117b6e['text']('Eliminations', _0x3b878f, -_0x1666ab, _0x5286de, 'Arial Black', _0x4f7d9b, '', 0x1);
            _0x525a97(_0x3cbb45);
            _0x5cd02d['add'](_0x3cbb45);
            var _0x2f061e = new _0x117b6e['text']('Damage to', -_0x3b878f, _0x1666ab - 0xe, _0x5286de, 'Arial Black', 0x16, '', 0x1);
            _0x525a97(_0x2f061e);
            _0x5cd02d['add'](_0x2f061e);
            var _0x3f0622 = new _0x117b6e['text']('Enemies', -_0x3b878f, _0x1666ab + 0xe, _0x5286de, 'Arial Black', 0x16, '', 0x1);
            _0x525a97(_0x3f0622);
            _0x5cd02d['add'](_0x3f0622);
            var _0x3502ec = new _0x117b6e['text']('Walls Built', _0x3b878f, _0x1666ab, _0x5286de, 'Arial Black', _0x4f7d9b, '', 0x1);
            _0x525a97(_0x3502ec);
            _0x5cd02d['add'](_0x3502ec);
            var _0x1940be = new _0x117b6e['text']('#100', -_0x3b878f, -_0x1666ab + _0x549fed, _0x4fb55f, 'Arial Black', _0x4f7d9b + 0xf, '', 0x1);
            _0x525a97(_0x1940be);
            _0x5cd02d['add'](_0x1940be);
            var _0x3392b2 = new _0x117b6e['text']('0', _0x3b878f, -_0x1666ab + _0x549fed, _0x4fb55f, 'Arial Black', _0x4f7d9b + 0xf, '', 0x1);
            _0x525a97(_0x3392b2);
            _0x5cd02d['add'](_0x3392b2);
            var _0x2fc7af = new _0x117b6e['text']('0', -_0x3b878f, _0x1666ab + _0x549fed, _0x4fb55f, 'Arial Black', _0x4f7d9b + 0xf, '', 0x1);
            _0x525a97(_0x2fc7af);
            _0x5cd02d['add'](_0x2fc7af);
            var _0xc4e22c = new _0x117b6e['text']('0', _0x3b878f, _0x1666ab + _0x549fed, _0x4fb55f, 'Arial Black', _0x4f7d9b + 0xf, '', 0x1);
            _0x525a97(_0xc4e22c);
            _0x5cd02d['add'](_0xc4e22c);
            _0x5cd02d['addBelow'](new _0x117b6e['rectangle'](0x0, _0x549fed * 0.6, 3.6 * _0x3b878f, 3.8 * _0x1666ab, '#000', 0.4));
            _0x5cd02d['position']['y'] = -0x14;
            _0x5cd02d['size'] = 0.9;
            _0x23b709['add'](_0x5cd02d);
            var _0x1d1278 = 0x1;
            var _0x52233a = new _0x117b6e['object']();
            _0x52233a['opacity'] = 0x1;
            var _0x3a7e8a = 0x0;
            var _0x130a27 = 0x14;
            var _0x265139 = 0x23;
            var _0x8d3751 = new _0x117b6e['text']('Eliminated', 0x0, 0x0, '#C11', 'Arial Black', _0x265139, '', 0x1, 'center');
            var _0x1e61ac = new _0x117b6e['strokeText']('Eliminated', 0x0, 0x0, '#000', 'Arial Black', _0x265139, '', 0x1, 'center');
            _0x1e61ac['lineWidth'] = 0x5;
            _0x8d3751['addBelow'](_0x1e61ac);
            var _0x416942 = new _0x117b6e['text']('GS25', 0x0, 0x0, '#FFF', 'Arial Black', _0x265139, '', 0x1, 'center');
            _0x1e61ac = new _0x117b6e['strokeText']('GS25', 0x0, 0x0, '#000', 'Arial Black', _0x265139, '', 0x1, 'center');
            _0x1e61ac['lineWidth'] = 0x5;
            _0x416942['addBelow'](_0x1e61ac);
            var _0x271412 = document['createElement']('canvas');
            var _0x11a4be = new _0x117b6e['image'](_0x271412, 0x0, -0x438 / 0x4, 0x0, _0x265139 + 0xf, 0x0);
            var _0x28e482 = new _0x117b6e['rectangle'](0x0, 0x0, 0x0, 0x0, '#000');
            _0x28e482['opacity'] = 0.3;
            _0x52233a['addBelow'](_0x28e482);

            function _0x2aa70e() {
                var _0x2702e8 = _0x8d3751['width'] + _0x416942['width'] + _0x130a27;
                _0x8d3751['position']['x'] = -_0x2702e8 / 0x2 + _0x8d3751['width'] / 0x2;
                _0x416942['position']['x'] = _0x2702e8 / 0x2 - _0x416942['width'] / 0x2;
                _0x416942['belowObjects'][0x0]['text'] = _0x416942['text'];
                _0x271412['width'] = _0x2702e8 + 0x19;
                _0x271412['height'] = _0x265139 + 0x19;
                _0x28e482['width'] = _0x271412['width'];
                _0x28e482['height'] = _0x271412['height'];
                var _0x32ff3c = _0x271412['getContext']('2d');
                _0x32ff3c['globalAlpha'] = 0x1;
                _0x32ff3c['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                _0x32ff3c['translate'](_0x271412['width'] / 0x2, _0x271412['height'] / 0x2);
                _0x52233a['render'](_0x32ff3c, 0x1, 0x1);
                _0x52233a['size'] = 0x1;
                _0x11a4be['width'] = _0x271412['width'];
                _0x11a4be['height'] = _0x271412['height'];
            }
            _0x52233a['add'](_0x8d3751);
            _0x52233a['add'](_0x416942);
            var _0x107c76 = '#00BFFF';
            var _0x5b67db = new _0x117b6e['object']();
            var _0x1cb7ed = new _0x117b6e['text']('Waiting for players...', 0x0, -0x438 / 0x4, _0x107c76, 'Arial Black', _0x265139, '', 0x1, 'center');
            _0x525a97(_0x1cb7ed);
            _0x1cb7ed['opacity'] = 0x0;
            _0x5b67db['add'](_0x1cb7ed);
            var _0x48dfa6 = new _0x117b6e['rectangle'](0x0, 0x0, 0x1, 0x1, '#000');
            _0x48dfa6['opacity'] = 0.3;
            _0x5b67db['addBelow'](_0x48dfa6);
            _0x39d88c['add'](_0x5b67db);
            var _0x3ec897 = 0x2bc;
            var _0x922994 = document['createElement']('canvas');
            _0x922994['width'] = _0x3ec897;
            _0x922994['height'] = 0x1;
            var _0x33dba9 = _0x922994['getContext']('2d');
            var _0x1b3ff6 = _0x34a800['ctx']['createLinearGradient'](0x0, 0x0, _0x3ec897, 0x0);
            _0x1b3ff6['addColorStop'](0x0, 'rgba(255, 255, 255, 0)');
            _0x1b3ff6['addColorStop'](0.5, 'rgba(255, 255, 255, 1)');
            _0x1b3ff6['addColorStop'](0x1, 'rgba(255, 255, 255, 0)');
            _0x33dba9['fillStyle'] = _0x1b3ff6;
            _0x33dba9['fillRect'](0x0, 0x0, _0x922994['width'], _0x922994['height']);
            var _0x175275 = new _0x117b6e['image'](_0x922994, 0x0, 0x0, _0x3ec897, 0xa, 0.25);
            var _0x1e123c = new _0x117b6e['object']();
            var _0x483640 = new _0x117b6e['text']('100', 0x1e, -0x28, '#DDD', 'Arial Black', 0x1a, '', 0x1, 'left');
            var _0x6acad1 = new _0x117b6e['strokeText']('100', 0x0, 0x0, '#000', 'Arial Black', 0x1a, 'bold', 0x1, 'left');
            _0x6acad1['lineWidth'] = 0x4;
            _0x483640['addBelow'](_0x6acad1);
            _0x1e123c['add'](new _0x117b6e['image'](_0x52811c('health'), 0x66, -0x28, 0x1c, 0x1c));
            _0x1e123c['add'](new _0x117b6e['rectangle'](0x113, -0x28, 0x12c, 0x14, '#000', 0.3));
            var _0x45b36f = new _0x117b6e['rectangle'](0x113, -0x28, 0x12c, 0x14, '#0C0', 0.95);
            _0x1e123c['add'](_0x45b36f);
            _0x1e123c['add'](new _0x117b6e['strokeRectangle'](0x113, -0x28, 0x12c, 0x14, '#000', 0x2, 0x1));
            _0x1e123c['add'](_0x483640);
            var _0x2fef57 = 0x23;
            var _0x23fdd6 = new _0x117b6e['text']('0', 0x1e, -0x28 - _0x2fef57, '#DDD', 'Arial Black', 0x1a, '', 0x1, 'left');
            var _0x3bb98a = new _0x117b6e['strokeText']('100', 0x0, 0x0, '#000', 'Arial Black', 0x1a, 'bold', 0x1, 'left');
            _0x3bb98a['lineWidth'] = 0x4;
            _0x23fdd6['addBelow'](_0x3bb98a);
            _0x1e123c['add'](new _0x117b6e['image'](_0x52811c('shield'), 0x66, -0x28 - _0x2fef57, 0x1c, 0x1c));
            _0x1e123c['add'](new _0x117b6e['rectangle'](0x113, -0x28 - _0x2fef57, 0x12c, 0x14, '#000', 0.3));
            var _0x47a409 = new _0x117b6e['rectangle'](0x113, -0x28 - _0x2fef57, 0x12c, 0x14, _0x107c76, 0.95);
            _0x47a409['width'] = 0x0;
            _0x1e123c['add'](_0x47a409);
            _0x1e123c['add'](new _0x117b6e['strokeRectangle'](0x113, -0x28 - _0x2fef57, 0x12c, 0x14, '#000', 0x2, 0x1));
            _0x1e123c['add'](_0x23fdd6);
            var _0xbed9f0 = new _0x117b6e['text']('', 0x7d, -0x28 - _0x2fef57 * 0x2, '#FFF', 'Arial Black', 0x1a, '', 0x1, 'left');
            var _0x1e4c4d = new _0x117b6e['strokeText']('', 0x0, 0x0, '#000', 'Arial Black', 0x1a, 'bold', 0x1, 'left');
            _0x1e4c4d['lineWidth'] = 0x4;
            _0xbed9f0['addBelow'](_0x1e4c4d);
            _0x1e123c['add'](_0xbed9f0);
            var _0x560872 = _0x1e123c;
            var _0xecf7c4 = [];
            for (var _0x441ab1 = 0x0; _0x441ab1 < 0x3; _0x441ab1++) {
                var _0x1e123c = new _0x117b6e['object']();
                _0x1e123c['add'](new _0x117b6e['rectangle'](0x113, -0x28, 0x12c, 0x14, '#000', 0.3));
                var _0x148b15 = new _0x117b6e['rectangle'](0x113, -0x28, 0x12c, 0x14, '#0C0', 0.95);
                _0x1e123c['add'](_0x148b15);
                _0x1e123c['add'](new _0x117b6e['strokeRectangle'](0x113, -0x28, 0x12c, 0x14, '#000', 0x2, 0x1));
                _0x1e123c['health'] = _0x148b15;
                var _0x2fef57 = 0x23;
                _0x1e123c['add'](new _0x117b6e['rectangle'](0x113, -0x28 - _0x2fef57, 0x12c, 0x14, '#000', 0.3));
                var _0x13b5ad = new _0x117b6e['rectangle'](0x113, -0x28 - _0x2fef57, 0x12c, 0x14, _0x107c76, 0.95);
                _0x47a409['width'] = 0x0;
                _0x1e123c['add'](_0x13b5ad);
                _0x1e123c['add'](new _0x117b6e['strokeRectangle'](0x113, -0x28 - _0x2fef57, 0x12c, 0x14, '#000', 0x2, 0x1));
                _0x1e123c['shield'] = _0x13b5ad;
                var _0x442b44 = new _0x117b6e['text']('GS25', 0x7d, -0x28 - _0x2fef57 * 0x2, '#FFF', 'Arial Black', 0x1a, '', 0x1, 'left');
                _0x1e123c['add'](_0x442b44);
                _0x1e123c['nametag'] = _0x442b44;
                _0x1e123c['position']['y'] = -_0x441ab1 * 0x4d - 0x78;
                _0x1e123c['position']['x'] = -0x37;
                _0x1e123c['size'] = 0.7;
                _0x1e123c['opacity'] = 0x0;
                _0xecf7c4['push'](_0x1e123c);
                _0x560872['add'](_0x1e123c);
            }
            _0x1e123c = _0x560872;
            var _0x289838 = ![];
            var _0x35b8dd = 0x113;
            var _0x884ee2 = -0x78 - _0x2fef57;
            var _0x5861f1 = 0x20;
            var _0x40b502 = new _0x117b6e['image'](_0x52811c('empty'), _0x35b8dd, _0x884ee2, 0x28, 0x28, 0x1);
            _0x1e123c['add'](_0x40b502);
            var _0x451d6f = new _0x117b6e['text']('0', _0x35b8dd - 0x1b, _0x884ee2, '#DDD', 'Arial Black', _0x5861f1, '', 0x1, 'right');
            var _0x25310f = new _0x117b6e['strokeText']('0', 0x2, 0x0, '#000', 'Arial Black', _0x5861f1, '', 0x1, 'right');
            _0x25310f['lineWidth'] = 0x4;
            _0x451d6f['addBelow'](_0x25310f);
            _0x1e123c['add'](_0x451d6f);
            var _0x19ed5a = new _0x117b6e['text']('0', _0x35b8dd + 0x1b, _0x884ee2, '#DDD', 'Arial Black', _0x5861f1, '', 0x1, 'left');
            var _0x440e6b = new _0x117b6e['strokeText']('0', 0x0, 0x0, '#000', 'Arial Black', _0x5861f1, '', 0x1, 'left');
            _0x440e6b['lineWidth'] = 0x4;
            _0x19ed5a['addBelow'](_0x440e6b);
            _0x1e123c['add'](_0x19ed5a);

            function _0x213e1e() {
                _0x35b8dd = 0x113;
                _0x884ee2 = -0x78 - _0x2fef57;
                if (_0x117b6e['me']['team'] !== undefined && _0x117b6e['me']['team']['length'] > 0x0) {
                    _0x35b8dd = 0x15e;
                    _0x884ee2 = -0x6e - _0x2fef57;
                }
                _0x40b502['position']['x'] = _0x35b8dd;
                _0x451d6f['position']['x'] = _0x35b8dd - 0x1b;
                _0x19ed5a['position']['x'] = _0x35b8dd + 0x1b;
                _0x40b502['position']['y'] = _0x884ee2;
                _0x451d6f['position']['y'] = _0x884ee2;
                _0x19ed5a['position']['y'] = _0x884ee2;
            }
            var _0x2c468b = new _0x117b6e['object']();
            var _0x36a384 = 0xfa;
            var _0x1c75a9 = new _0x117b6e['image'](_0x52811c('empty'), -0x96, 0x96, _0x36a384, _0x36a384);
            var _0x2ef02f = new _0x117b6e['rectangle'](0x0, 0x0, _0x36a384, _0x36a384, '#000', 0.5);
            _0x1c75a9['addBelow'](_0x2ef02f);
            _0x1c75a9['addBelow'](new _0x117b6e['strokeRectangle'](0x0, 0x0, _0x36a384 + 0x2, _0x36a384 + 0x2, '#000', 0x4, 0.5));
            _0x2c468b['add'](_0x1c75a9);
            var _0x1dbf2f = '#FFF';
            if (_0x595d79) {
                _0x1dbf2f = '#222';
            }
            var _0x590b0e = 0x20;
            var _0x4509c1 = new _0x117b6e['object']();
            _0x4509c1['position'] = new _0x117b6e['Vector2'](-0x140, 0x32);
            _0x4509c1['add'](new _0x117b6e['image'](_0x52811c('spectate'), 0x0, 0x0, 0x2d, 0x2d));
            var _0xe84c9d = new _0x117b6e['text']('0', -0x1e, 0x0, _0x1dbf2f, 'Arial Black', _0x590b0e - 0x6);
            _0xe84c9d['align'] = 'right';
            _0x4509c1['add'](_0xe84c9d);
            _0x2c468b['add'](_0x4509c1);
            _0x4509c1['opacity'] = 0x0;
            var _0x2bb5f9 = new _0x117b6e['image'](_0x52811c('waitingIcon'), -_0x36a384 / 0x2 + _0x590b0e / 0x2 - 0x96, _0x36a384 / 0x2 + _0x590b0e / 0x2 + 0x96 + 0xa, _0x590b0e, _0x590b0e);
            _0x2c468b['add'](_0x2bb5f9);
            var _0x22d9da = new _0x117b6e['text']('0:00', _0x590b0e / 0x2 + 0x5, 0x0, _0x1dbf2f, 'Arial Black', _0x590b0e - 0x6);
            _0x22d9da['align'] = 'left';
            _0x2bb5f9['add'](_0x22d9da);
            var _0x15d0a1 = new _0x117b6e['image'](_0x52811c('playersIcon'), -_0x36a384 / 0x2 + _0x590b0e / 0x2 + 0x6b - 0x96, _0x36a384 / 0x2 + _0x590b0e / 0x2 + 0x96 + 0xa, _0x590b0e, _0x590b0e);
            _0x2c468b['add'](_0x15d0a1);
            var _0x35d9b8 = new _0x117b6e['text']('50', _0x590b0e / 0x2 + 0x5, 0x0, _0x1dbf2f, 'Arial Black', _0x590b0e - 0x6);
            _0x35d9b8['align'] = 'left';
            _0x15d0a1['add'](_0x35d9b8);
            var _0x3bfbe1 = new _0x117b6e['text']('50', _0x590b0e / 0x2 + 0x5, 0x19, '#EEEE00', 'Arial Black', _0x590b0e - 0x6);
            _0x3bfbe1['align'] = 'left';
            _0x3bfbe1['opacity'] = 0x0;
            _0x15d0a1['add'](_0x3bfbe1);
            var _0x47097f = new _0x117b6e['image'](_0x52811c('killsIcon'), -_0x36a384 / 0x2 + _0x590b0e / 0x2 + 0xbe - 0x96, _0x36a384 / 0x2 + _0x590b0e / 0x2 + 0x96 + 0xa, _0x590b0e, _0x590b0e);
            _0x2c468b['add'](_0x47097f);
            var _0x40e5d1 = new _0x117b6e['text']('0', _0x590b0e / 0x2 + 0x5, 0x0, _0x1dbf2f, 'Arial Black', _0x590b0e - 0x6);
            _0x40e5d1['align'] = 'left';
            _0x47097f['add'](_0x40e5d1);
            var _0x54a8a2 = document['createElement']('canvas');
            var _0x3c80b0 = _0x54a8a2['getContext']('2d');
            _0x54a8a2['width'] = _0x54a8a2['height'] = 0x1f4;

            function _0x3054d9() {
                var _0x1960fd = 0x1f4;
                var _0x4c80da = _0x3c80b0;
                _0x4c80da['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                var _0x331d76 = -(_0x117b6e['me']['visual']['position']['x'] * 0x708 / _0x28097e + 0x384) + _0x1960fd / 0x2;
                var _0x2f073e = -(_0x117b6e['me']['visual']['position']['y'] * 0x708 / _0x28097e + 0x384) + _0x1960fd / 0x2;
                _0x331d76 = Math['min'](_0x331d76, 0x0);
                _0x2f073e = Math['min'](_0x2f073e, 0x0);
                _0x331d76 = Math['max'](_0x331d76, -0x708 + _0x1960fd);
                _0x2f073e = Math['max'](_0x2f073e, -0x708 + _0x1960fd);
                _0x4c80da['drawImage'](_0x541679, _0x331d76, _0x2f073e);
                _0x4c80da['drawImage'](_0x32b7ea, _0x331d76, _0x2f073e);
            }
            _0x1c75a9['renderSpecific'] = function (_0x23a8fa, _0x33b6ba) {
                var _0x5e207d = 0x1f4;
                _0x23a8fa['drawImage'](_0x541679, Math['min'](Math['max'](_0x117b6e['me']['visual']['position']['x'] * 0x708 / _0x28097e + 0x384 - _0x5e207d / 0x2, 0x0), 0x708 - _0x5e207d), Math['min'](Math['max'](_0x117b6e['me']['visual']['position']['y'] * 0x708 / _0x28097e + 0x384 - _0x5e207d / 0x2, 0x0), 0x708 - _0x5e207d), _0x5e207d, _0x5e207d, -this['width'] / 0x2 / _0x33b6ba, -this['height'] / 0x2 / _0x33b6ba, this['width'] / _0x33b6ba, this['height'] / _0x33b6ba);
                _0x23a8fa['drawImage'](_0x32b7ea, Math['min'](Math['max'](_0x117b6e['me']['visual']['position']['x'] * 0x708 / _0x28097e + 0x384 - _0x5e207d / 0x2, 0x0), 0x708 - _0x5e207d), Math['min'](Math['max'](_0x117b6e['me']['visual']['position']['y'] * 0x708 / _0x28097e + 0x384 - _0x5e207d / 0x2, 0x0), 0x708 - _0x5e207d), _0x5e207d, _0x5e207d, -this['width'] / 0x2 / _0x33b6ba, -this['height'] / 0x2 / _0x33b6ba, this['width'] / _0x33b6ba, this['height'] / _0x33b6ba);
            };
            _0x1c75a9['renderSpecific'] = function (_0x33f077, _0x13f3de) {
                var _0x52948d = 0x1 / _0x13f3de;
                try {
                    if (this['image']['tagName'] == 'IMG' && this['image']['src']['indexOf']('.png') == -0x1) {
                        throw 'no';
                    }
                    _0x3054d9();
                    this['width'] = this['height'] = 0x1f4 / 0x2;
                    _0x33f077['drawImage'](_0x54a8a2, -this['width'] * 0.5 * _0x52948d, -this['height'] * 0.5 * _0x52948d, this['width'] * _0x52948d, this['height'] * _0x52948d);
                } catch (_0x4b8810) {
                    _0x33f077['fillStyle'] = '#000';
                    _0x33f077['globalAlpha'] = 0x1;
                    _0x33f077['fillRect'](-this['width'] * 0.5 * _0x52948d, -this['height'] * 0.5 * _0x52948d, this['width'] * _0x52948d, this['height'] * _0x52948d);
                }
            };
            var _0x429599 = new _0x117b6e['object']();

            function _0xcfebf2(_0x35cf97, _0xa65c40, _0x5d4651) {
                var _0x415950 = 0x78;
                var _0x1b2ade = _0x415950 - 0x12;
                var _0x14ce63 = 0x32;
                if (_0x35cf97 !== undefined) {
                    _0x415950 = _0x35cf97;
                }
                if (_0xa65c40 !== undefined) {
                    _0x1b2ade = _0x415950 - _0xa65c40;
                }
                if (window['innerWidth'] > 0x3e8) {
                    var _0x2e050a = 0.65;
                    _0x415950 *= _0x2e050a;
                    _0x14ce63 *= _0x2e050a;
                    _0x1b2ade *= _0x2e050a;
                }
                var _0x147904 = new _0x117b6e['object']();
                var _0xe05447 = new _0x117b6e['circle'](0x0, 0x0, _0x415950, '#ffffff', 0.3);
                var _0x50394b = _0x117b6e['prerender'](_0xe05447, _0x415950 * 0x2, _0x415950 * 0x2, 0x0, 0x2);
                _0xe05447['color'] = '#ff0707';
                _0xe05447['opacity'] = 0.4;
                var _0x53e4ee = _0x117b6e['prerender'](_0xe05447, _0x415950 * 0x2, _0x415950 * 0x2, 0x0, 0x2);
                _0xe05447 = new _0x117b6e['object']();
                _0xe05447['add'](_0x50394b);
                _0xe05447['add'](_0x53e4ee);
                _0x53e4ee['opacity'] = 0x0;
                _0xe05447['offbg'] = _0x50394b;
                _0xe05447['onbg'] = _0x53e4ee;
                _0x147904['add'](_0xe05447);
                var _0x3ca13a = new _0x117b6e['circle'](0x0, 0x0, _0x1b2ade, '#ffffff', 0.25);
                _0x3ca13a = _0x117b6e['prerender'](_0x3ca13a, _0x1b2ade * 0x2, _0x1b2ade * 0x2, 0x0);
                _0x147904['add'](_0x3ca13a);
                var _0x40af5e = new _0x117b6e['circle'](0x0, 0x0, _0x14ce63, '#ffffff');
                _0x3ca13a = _0x117b6e['prerender'](_0x3ca13a, _0x14ce63 * 0x2, _0x14ce63 * 0x2, 0x0);
                _0x147904['add'](_0x40af5e);
                _0x147904['opacity'] = 0.5;
                if (_0x5d4651 !== undefined) {
                    _0x147904['position']['x'] = _0x5d4651['x'];
                    _0x147904['position']['y'] = _0x5d4651['y'];
                }
                return {
                    'isActive': ![],
                    'angle': 0x0,
                    'isTriggering': ![],
                    'wasTriggering': ![],
                    'radius': _0x415950,
                    'triggerRadius': _0x1b2ade,
                    'objects': {
                        'root': _0x147904,
                        'bg': _0xe05447,
                        'fg': _0x3ca13a,
                        'thumb': _0x40af5e
                    },
                    'fading': !![]
                };
            }

            function _0x3d0c1d(_0x1a8124, _0x1ff379) {
                if (_0x1ff379 == null) {
                    _0x1a8124['isActive'] = ![];
                    _0x1a8124['hasMoved'] = ![];
                    _0x1a8124['isTriggering'] = ![];
                    if (!_0x1a8124['fading']) {
                        var _0x398743 = _0x1a8124['objects']['root'];
                        _0x597340(_0x398743, 'opacity', _0x398743['opacity'], 0x0, 0x190, 0x0, _0x1acb6f['easeOutExpo']);
                        _0x1a8124['fading'] = !![];
                    }
                    return;
                }
                var _0x51f0e9 = _0x1ff379['tX'] - _0x1ff379['tStartX'];
                var _0x1f5fac = _0x1ff379['tY'] - _0x1ff379['tStartY'];
                var _0x1e133c = _0x1a8124['angle'];
                var _0x5ecb65 = _0x51f0e9 * _0x51f0e9 + _0x1f5fac * _0x1f5fac;
                var _0x3071b2 = _0x5ecb65 > 0x4;
                if (_0x3071b2) {
                    _0x1e133c = Math['atan2'](_0x1f5fac, _0x51f0e9);
                }
                if (_0x5ecb65 > _0x1a8124['radius'] * _0x1a8124['radius']) {
                    _0x5ecb65 = _0x1a8124['radius'] * _0x1a8124['radius'];
                    _0x1a8124['objects']['thumb']['position']['x'] = Math['cos'](_0x1e133c) * _0x1a8124['radius'];
                    _0x1a8124['objects']['thumb']['position']['y'] = Math['sin'](_0x1e133c) * _0x1a8124['radius'];
                } else {
                    _0x1a8124['objects']['thumb']['position']['x'] = _0x51f0e9;
                    _0x1a8124['objects']['thumb']['position']['y'] = _0x1f5fac;
                }
                _0x5ecb65 = Math['min'](_0x5ecb65, _0x1a8124['radius'] * _0x1a8124['radius']);
                var _0x4f61d1 = _0x5ecb65 > _0x1a8124['triggerRadius'] * _0x1a8124['triggerRadius'];
                if (_0x1a8124['fading']) {
                    var _0x398743 = _0x1a8124['objects']['root'];
                    _0x597340(_0x398743, 'opacity', _0x398743['opacity'], 0x1, 0x12c, 0x0, _0x1acb6f['easeOutExpo']);
                    _0x4c6fa4(_0x1a8124['objects']['bg']['onbg'], 'opacity');
                    _0x1a8124['objects']['bg']['onbg']['opacity'] = 0x0;
                    _0x4c6fa4(_0x1a8124['objects']['bg']['offbg'], 'opacity');
                    _0x1a8124['objects']['bg']['offbg']['opacity'] = 0x1;
                    _0x1a8124['fading'] = ![];
                }
                _0x1a8124['objects']['root']['position']['x'] = _0x1ff379['tStartX'];
                _0x1a8124['objects']['root']['position']['y'] = _0x1ff379['tStartY'];
                if (_0x1a8124['isTriggering'] != _0x4f61d1) {
                    var _0x398743 = _0x1a8124['objects']['bg']['onbg'];
                    _0x597340(_0x398743, 'opacity', _0x398743['opacity'], _0x4f61d1, 0xc8, 0x0, _0x1acb6f['easeOutExpo']);
                    _0x398743 = _0x1a8124['objects']['bg']['offbg'];
                    _0x597340(_0x398743, 'opacity', _0x398743['opacity'], !_0x4f61d1, 0xc8, 0x0, _0x1acb6f['easeOutExpo']);
                }
                _0x1a8124['isActive'] = !![];
                _0x1a8124['hasMoved'] = _0x3071b2;
                _0x1a8124['angle'] = _0x1e133c;
                _0x1a8124['isTriggering'] = _0x4f61d1;
            }
            var _0x2015cf = _0xcfebf2(0x78, 0x12, new _0x117b6e['Vector2'](-0x1f4, 0x78));
            _0x429599['add'](_0x2015cf['objects']['root']);
            var _0x3cdff9 = _0xcfebf2(0x8c, 0x17, new _0x117b6e['Vector2'](0x244, 0x78));
            _0x429599['add'](_0x3cdff9['objects']['root']);
            var _0x3f0803 = [];

            function _0x108583(_0xffef8d, _0x36dff9, _0x534d77, _0x28537b, _0x21b3b3) {
                var _0x22c9e8 = 'rgba(0, 0, 0, 0.3)';
                var _0x4d5df0 = new _0x117b6e['circle'](0x0, 0x0, _0x534d77, _0x22c9e8);
                if (window['innerWidth'] > 0x3e8) {
                    _0x4d5df0['radius'] *= 0.85;
                }
                var _0x3d51ad = _0x117b6e['prerender'](_0x4d5df0, _0x534d77 * 0x2, _0x534d77 * 0x2, 0x0);
                _0x4d5df0['color'] = '#77F';
                _0x4d5df0['opacity'] = 0.65;
                var _0x14c201 = _0x117b6e['prerender'](_0x4d5df0, _0x534d77 * 0x2, _0x534d77 * 0x2, 0x0);
                _0x14c201['opacity'] = 0x0;
                _0x4d5df0 = new _0x117b6e['object']();
                _0x4d5df0['add'](_0x3d51ad);
                _0x4d5df0['add'](_0x14c201);
                _0x4d5df0['touchActive'] = ![];
                _0x534d77 *= 1.5;
                _0x4d5df0['enabled'] = !![];
                if (_0x28537b == undefined) {
                    var _0x4ccec1 = new _0x117b6e['text'](_0xffef8d, 0x0, 0x0, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center');
                    if (window['innerWidth'] > 0x3e8) {
                        _0x4ccec1['size'] *= 0.85;
                    }
                    _0x4d5df0['add'](_0x4ccec1);
                } else {
                    _0x4d5df0['add'](new _0x117b6e['image'](_0x28537b, 0x0, 0x0, _0x21b3b3 || 0x55, _0x21b3b3 || 0x55, 0.93));
                    if (window['innerWidth'] > 0x3e8) {
                        _0x4d5df0['objects'][_0x4d5df0['objects']['length'] - 0x1]['size'] = 0.85;
                    }
                }
                _0x4d5df0['checkTouch'] = function () {
                    if (_0x4d5df0['visible'] && _0x4d5df0['enabled']) {
                        var _0x54b275 = new _0x117b6e['Vector2']();
                        for (var _0x5d8774 of _0x234a02['touches']) {
                            var _0x5db8e9 = _0x4d5df0['absolutePosition'](_0x54b275);
                            var _0x481f8f = _0x5d8774['tStartX'] - _0x5db8e9['x'];
                            var _0x2a4048 = _0x5d8774['tStartY'] - _0x5db8e9['y'];
                            var _0x50a0ef = _0x481f8f * _0x481f8f + _0x2a4048 * _0x2a4048;
                            var _0x13985f = ![];
                            for (var _0x37693e = 0x0; _0x37693e < _0x3f0803['length']; _0x37693e++) {
                                if (_0x3f0803[_0x37693e] == _0x4d5df0) {
                                    continue;
                                }
                                _0x5db8e9 = _0x3f0803[_0x37693e]['absolutePosition'](_0x54b275);
                                _0x481f8f = _0x5d8774['tStartX'] - _0x5db8e9['x'];
                                _0x2a4048 = _0x5d8774['tStartY'] - _0x5db8e9['y'];
                                if (_0x481f8f * _0x481f8f + _0x2a4048 * _0x2a4048 < _0x50a0ef) {
                                    _0x13985f = !![];
                                    break;
                                }
                            }
                            if (_0x50a0ef <= _0x534d77 * _0x534d77 && !_0x13985f) {
                                if (!_0x4d5df0['touchActive']) {
                                    if (gameWrapper['enabled']) gameWrapper['hapticFeedback']('light');
                                    _0x36dff9();
                                    _0x4d5df0['touchActive'] = !![];
                                    if (_0x4d5df0['opacity'] == 0x1) {
                                        _0x14c201['opacityf'] = 0x1;
                                        _0x3d51ad['opacityf'] = 0x0;
                                        _0x597340(_0x14c201, 'opacity', _0x14c201['opacity'], 0x1, 0x50, 0x0, _0x1acb6f['easeOutExpo']);
                                        _0x597340(_0x3d51ad, 'opacity', _0x3d51ad['opacity'], 0x0, 0x50, 0x0, _0x1acb6f['easeOutExpo']);
                                        _0x597340(_0x4d5df0, 'size', _0x4d5df0['size'], 0.85, 0x50, 0x0, _0x1acb6f['easeOutExpo']);
                                    } else {
                                        _0x14c201['opacityf'] = 0x0;
                                        _0x3d51ad['opacityf'] = 0x1;
                                        _0x597340(_0x14c201, 'opacity', _0x14c201['opacity'], 0x0, 0x190, 0x0, _0x1acb6f['easeOutExpo']);
                                        _0x597340(_0x3d51ad, 'opacity', _0x3d51ad['opacity'], 0x1, 0x190, 0x0, _0x1acb6f['easeOutExpo']);
                                        _0x597340(_0x4d5df0, 'size', _0x4d5df0['size'], 0x1, 0x50, 0x0, _0x1acb6f['easeOutExpo']);
                                    }
                                }
                                return !![];
                            }
                        }
                    }
                    _0x4d5df0['touchActive'] = ![];
                    if (_0x3d51ad['opacityf'] != 0x1) {
                        _0x14c201['opacityf'] = 0x0;
                        _0x3d51ad['opacityf'] = 0x1;
                        _0x597340(_0x14c201, 'opacity', _0x14c201['opacity'], 0x0, 0x190, 0x0, _0x1acb6f['easeOutExpo']);
                        _0x597340(_0x3d51ad, 'opacity', _0x3d51ad['opacity'], 0x1, 0x190, 0x0, _0x1acb6f['easeOutExpo']);
                        _0x597340(_0x4d5df0, 'size', _0x4d5df0['size'], 0x1, 0x50, 0x0, _0x1acb6f['easeOutExpo']);
                    }
                    if (_0x4d5df0 == _0x447cd9) {
                        if (_0x33b098['space']) {
                            _0x33b098['space'] = ![];
                            _0x33b098['changedKeys']['push']('space');
                            _0x33b098['changed'] = !![];
                        }
                    }
                    return ![];
                };
                _0x3f0803['push'](_0x4d5df0);
                return _0x4d5df0;
            }
            var _0x573e81 = 0x50;
            var _0x4133aa = _0x573e81 * 2.4;
            var _0x409d8d = new _0x117b6e['object']();
            var _0x351f25 = _0x108583('R', function () {
                _0x117b6e['currentPackets']['push']({
                    'type': 'reload'
                });
            }, _0x573e81, _0x52811c('mobilereload'));
            var _0x5175cb = _0x108583('P', function () {
                _0x117b6e['currentPackets']['push']({
                    'type': 'pickup'
                });
            }, _0x573e81, _0x52811c('mobilepickup'));
            var _0x447cd9 = _0x108583('J', function () {
                if (_0x33b098['space']) {
                    return;
                }
                _0x33b098['space'] = !![];
                _0x33b098['changedKeys']['push']('space');
                _0x33b098['changed'] = !![];
            }, _0x573e81, _0x52811c('mobilejump'), 0x5f);
            var _0x248e15 = 0x1a;
            var _0x1faf57 = 0x50;
            var _0x415669 = new _0x117b6e['rectangle'](0x0, 0x0, _0x248e15, _0x1faf57, '#FFFFFF');
            _0x415669['add'](new _0x117b6e['rectangle'](0x0, 0x0, _0x1faf57, _0x248e15, '#FFFFFF'));
            _0x415669 = _0x117b6e['prerender'](_0x415669, 0x80, 0x80)['image'];
            var _0x117962 = _0x108583('H', function () {}, _0x573e81 * 0.85, _0x415669, 0x5f * 0.89);
            _0x117962['enabled'] = ![];
            _0x117962['opacity'] = 0x0;
            _0x117962['position']['x'] = -_0x573e81 * 5.7 - 0x1e;
            _0x117962['position']['y'] += 0x3c;
            _0x351f25['position']['x'] = _0x447cd9['position']['x'] = _0x5175cb['position']['x'] = -_0x573e81 - 0x1e;
            _0x447cd9['position']['x'] -= _0x4133aa / 0x2;
            _0x5175cb['position']['x'] -= _0x4133aa;
            _0x447cd9['position']['y'] = -_0x573e81 * 1.9;
            var _0x5061d8 = -0x78;
            _0x447cd9['position']['y'] += _0x5061d8;
            _0x351f25['position']['y'] += _0x5061d8;
            _0x5175cb['position']['y'] += _0x5061d8;
            _0x117962['position']['y'] += _0x5061d8;
            [_0x351f25, _0x5175cb, _0x447cd9, _0x117962]['map'](_0x226a93 => _0x409d8d['add'](_0x226a93));
            var _0x573d64 = new _0x117b6e['object']();
            var _0x1bc362 = [];
            var _0x4b2a6b = 0x64;
            var _0x6203d7 = 0x0;
            var _0x2efa04 = new _0x117b6e['strokeRectangle'](-0x5 * (_0x4b2a6b + 0xa) - _0x4b2a6b, -_0x4b2a6b, _0x4b2a6b + 0x5, _0x4b2a6b + 0x5, '#FFF', 0x5, 0.6);
            var _0x1d03a5 = {
                'x': 0x0,
                'y': 0x0
            };
            var _0x36ab4b = -0x1;

            function _0x1043f4(_0x364094 = ![], _0x1f876a = ![]) {
                for (var _0x9b3e55 = _0x364094 ? 0x0 : 0x1; _0x9b3e55 < _0x1bc362['length']; _0x9b3e55++) {
                    var _0x633385 = new _0x117b6e['rectangle'](_0x573d64['position']['x'] + _0x1bc362[_0x9b3e55]['parent']['position']['x'] * _0x573d64['size'], _0x573d64['position']['y'] + _0x1bc362[_0x9b3e55]['parent']['position']['y'] * _0x573d64['size'], (_0x4b2a6b + 0xa) * _0x573d64['size'], (_0x4b2a6b + 0xa) * _0x573d64['size']);
                    if (_0x34ea3f['isCollidingWithRectangle'](_0x633385, _0x1f876a)) {
                        return _0x9b3e55;
                    }
                }
                return -0x1;
            }

            function _0x571852() {
                for (var _0x69baa3 = 0x0; _0x69baa3 < _0x5c310['length']; _0x69baa3++) {
                    var _0x3f49b5 = new _0x117b6e['rectangle'](_0x573d64['position']['x'] + _0x5c310[_0x69baa3]['position']['x'] * _0x573d64['size'], _0x573d64['position']['y'] + _0x5c310[_0x69baa3]['position']['y'] * _0x573d64['size'], _0x5c310[_0x69baa3]['width'] * _0x573d64['size'], _0x5c310[_0x69baa3]['height'] * _0x573d64['size']);
                    if (_0x34ea3f['isCollidingWithRectangle'](_0x3f49b5)) {
                        _0x5c310[_0x69baa3]['color'] = '#77F';
                        return _0x69baa3;
                    }
                }
                return -0x1;
            }

            function _0x5bd9ae() {
                for (var _0x420d9f = 0x0; _0x420d9f < _0x2af41a['length']; _0x420d9f++) {
                    _0x2af41a[_0x420d9f]['color'] = '#000';
                    _0x2af41a[_0x420d9f]['opacity'] = 0.3;
                }
                for (var _0x420d9f = 0x0; _0x420d9f < _0x2af41a['length']; _0x420d9f++) {
                    var _0x4912b9 = new _0x117b6e['rectangle'](_0x573d64['position']['x'] + _0x2af41a[_0x420d9f]['position']['x'] * _0x573d64['size'], _0x573d64['position']['y'] + _0x2af41a[_0x420d9f]['position']['y'] * _0x573d64['size'], _0x2af41a[_0x420d9f]['width'] * _0x573d64['size'], _0x2af41a[_0x420d9f]['height'] * _0x573d64['size']);
                    if (_0x34ea3f['isCollidingWithRectangle'](_0x4912b9)) {
                        _0x2af41a[_0x420d9f]['color'] = '#77F';
                        return _0x420d9f;
                    }
                }
                return -0x1;
            }

            function _0x4982e() {
                _0x1d03a5 = {
                    'x': 0x0,
                    'y': 0x0
                };
                _0x36ab4b = -0x1;
                for (var _0x5c4415 = 0x0; _0x5c4415 < _0x1bc362['length']; _0x5c4415++) {
                    _0x1bc362[_0x5c4415]['position']['x'] = 0x0;
                    _0x1bc362[_0x5c4415]['position']['y'] = 0x0;
                }
                if (!_0x454358) {
                    _0x1bc362[_0x6203d7]['position']['y'] = -0xa;
                    _0x2efa04['position']['y'] = -_0x4b2a6b - 0xa;
                }
            }
            for (var _0x441ab1 = 0x5; _0x441ab1 >= 0x0; _0x441ab1--) {
                var _0x324c6e = new _0x117b6e['object']();
                _0x324c6e['position']['x'] = -_0x441ab1 * (_0x4b2a6b + 0xa) - _0x4b2a6b;
                _0x324c6e['position']['y'] = -_0x4b2a6b;
                var _0x2f357e = new _0x117b6e['rectangle'](0x0, 0x0, _0x4b2a6b, _0x4b2a6b, '#000', 0.2);
                _0x324c6e['add'](_0x2f357e);
                _0x1bc362['push'](_0x2f357e);
                _0x573d64['add'](_0x324c6e);
            }
            var _0xdfe453 = new _0x117b6e['image'](_0x52811c('switch'), 0x0, 0x0, _0x4b2a6b, _0x4b2a6b, 0x0);
            _0x573d64['add'](_0xdfe453);

            function _0x4233b3() {
                if (_0x1debb8 == -0x1) {
                    _0xdfe453['opacity'] = 0x0;
                    return;
                }
                _0xdfe453['opacity'] = 0.5;
                var _0x22689f = 0x5 - _0x1debb8;
                _0xdfe453['position']['y'] = -_0x4b2a6b;
                _0xdfe453['position']['x'] = -_0x22689f * (_0x4b2a6b + 0xa) - _0x4b2a6b;
                _0x573d64['remove'](_0xdfe453);
                _0x573d64['add'](_0xdfe453);
            }
            var _0x235f80 = 0x15;
            var _0x3f4d96 = 0x13;
            var _0x4babc3 = new _0x117b6e['text']('Press Q to Build', -0x5 * (_0x4b2a6b + 0xa) - _0x4b2a6b * 1.5, -_0x4b2a6b * 2.3, '#FFF', 'Arial Black', _0x235f80, 'bold', 0x1, 'left');
            var _0x4feda3 = new _0x117b6e['strokeText']('Press Q to Build', 0x0, 0x0, '#000', 'Arial Black', _0x235f80, 'bold', 0x1, 'left');
            _0x4feda3['lineWidth'] = 0x4;
            _0x4babc3['addBelow'](_0x4feda3);
            _0x573d64['add'](_0x4babc3);
            var _0x19365d = new _0x117b6e['text']('Press Tab to Manage Inventory', -0x5 * (_0x4b2a6b + 0xa) - _0x4b2a6b * 1.5, -_0x4b2a6b * 0x2, '#FFF', 'Arial Black', _0x235f80, 'bold', 0x1, 'left');
            var _0x4cb6bb = new _0x117b6e['strokeText']('Press Tab to Manage Inventory', 0x0, 0x0, '#000', 'Arial Black', _0x235f80, 'bold', 0x1, 'left');
            _0x4cb6bb['lineWidth'] = 0x4;
            _0x19365d['addBelow'](_0x4cb6bb);
            _0x573d64['add'](_0x19365d);
            var _0x5c310 = [];
            var _0x576100 = 0x50;
            var _0x19ba71 = [];
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x32a36c['length']; _0x441ab1++) {
                var _0x52d451 = new _0x117b6e['rectangle'](-_0x441ab1 * _0x4b2a6b * 0.9 - _0x4b2a6b + (_0x4b2a6b - _0x576100) / 0x2, -_0x4b2a6b * 0x2 - 0x6e / 0x2 + _0x235f80 / 0x2, _0x576100, 0x6e, '#000', 0.3);
                _0x52d451['add'](new _0x117b6e['image'](_0x52811c(_0x32a36c[0x2 - _0x441ab1]), 0x0, -0x14, 0x41, 0x41, 0x1 / 0.4));
                _0x52d451['text'] = new _0x117b6e['text']('0', 0x0, 0x19, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center');
                _0x52d451['text']['opacity'] = 0x1 / 0.3;
                _0x52d451['add'](_0x52d451['text']);
                var _0x1d0217 = new _0x117b6e['object']();
                _0x1d0217['add'](_0x52d451);
                _0x5c310['push'](_0x52d451);
                _0x573d64['add'](_0x1d0217);
                _0x19ba71['push'](_0x1d0217);
            }
            var _0x390f0a = _0x108583('B', function () {
                _0x117b6e['currentPackets']['push']({
                    'type': 'build'
                });
            }, 0x32, _0x52811c('mobilebuild'), 0x46);
            _0x390f0a['position']['x'] = -0x2bc;
            _0x390f0a['position']['y'] = -_0x4b2a6b * 0x2 - 0x6e / 0x2 + _0x235f80 / 0x2;
            _0x573d64['add'](_0x390f0a);
            var _0x51bb9a = _0x108583('I', function () {
                _0x5c7888();
            }, 0x32, _0x52811c('mobilebackpack'), 0x46);
            _0x51bb9a['position']['x'] = -0x2bc - 0x55;
            _0x51bb9a['position']['y'] = -0x6c;
            _0x573d64['add'](_0x51bb9a);
            var _0x2af41a = [];
            for (var _0x441ab1 = 0x0; _0x441ab1 < 0x4; _0x441ab1++) {
                var _0x238e69 = -_0x4b2a6b * 3.3 - 0x6e / 0x2 + _0x235f80 / 0x2;
                var _0x52d451 = new _0x117b6e['rectangle'](-_0x441ab1 * _0x4b2a6b * 0.9 - _0x4b2a6b + (_0x4b2a6b - _0x576100) / 0x2, _0x238e69, _0x576100, 0x6e, '#000', 0.3);
                _0x52d451['add'](new _0x117b6e['image'](_0x52811c('stack' + (0x3 - _0x441ab1)), 0x0, -0x14, 0x41, 0x41, 0x1 / 0.4));
                _0x52d451['text'] = new _0x117b6e['text']('0', 0x0, 0x19, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center');
                _0x52d451['text']['opacity'] = 0x1 / 0.3;
                _0x52d451['add'](_0x52d451['text']);
                _0x2af41a['push'](_0x52d451);
                _0x573d64['add'](_0x52d451);
            }
            var _0x4a8d6a = new _0x117b6e['object']();
            _0x4a8d6a['veryInitialSize'] = 0.8;
            _0x4a8d6a['position']['y'] = 0x438 / 0xa;
            _0x4a8d6a['opacity'] = 0x1;
            var _0x468d75 = 0x1e0;
            var _0x3ac1a5 = 0x78;
            var _0x30289a = -0x1e;
            _0x4a8d6a['weapon'] = new _0x117b6e['image'](_0x52811c('empty'));
            _0x4a8d6a['stroke'] = new _0x117b6e['strokeRectangle'](0x0, 0x0, _0x468d75, _0x3ac1a5, '#000', 0x8, 0x1);
            _0x4a8d6a['fill'] = new _0x117b6e['rectangle'](0x0, 0x0, _0x468d75, _0x3ac1a5, '#000', 0.4);
            _0x4a8d6a['weaponName'] = new _0x117b6e['text']('', -0x28 + _0x30289a, -0x14, '#FFF', 'Arial Black', 0x24, 'bold', 0x1, 'left');
            _0x4a8d6a['weaponNameStroke'] = new _0x117b6e['strokeText']('', -0x28 + _0x30289a, -0x14, '#000', 'Arial Black', 0x24, 'bold', 0x1, 'left');
            _0x4a8d6a['weaponNameStroke']['lineWidth'] = 0x7;
            _0x4a8d6a['weaponNameStroke']['opacity'] = 0.6;
            _0x4a8d6a['add'](_0x4a8d6a['stroke']);
            _0x4a8d6a['add'](_0x4a8d6a['fill']);
            _0x4a8d6a['weapon']['rotation'] = Math['PI'] / 0x7;
            _0x4a8d6a['weapon']['size'] = 1.4;
            _0x4a8d6a['largestOpacity'] = 0.7;
            _0x4a8d6a['weapon']['opacity'] = 0x1 / _0x4a8d6a['largestOpacity'];
            _0x4a8d6a['weapon']['position']['x'] = -0x78;
            _0x4a8d6a['weapon']['position']['x'] += _0x30289a;
            var _0x528970 = new _0x117b6e['strokeText']('Press E/F to pick up', -0x28 + _0x30289a, 0x14, '#000', 'Arial Black', 0x14, '', 0x1, 'left');
            _0x528970['lineWidth'] = 0x6;
            _0x528970['opacity'] = 0.6;
            _0x4a8d6a['add'](_0x528970);
            var _0x4849ed = new _0x117b6e['text']('Press E/F to pick up', -0x28 + _0x30289a, 0x14, '#FFF', 'Arial Black', 0x14, '', 0x1, 'left');
            _0x4a8d6a['add'](_0x4849ed);
            _0x4a8d6a['add'](_0x4a8d6a['weaponNameStroke']);
            _0x4a8d6a['add'](_0x4a8d6a['weaponName']);
            _0x4a8d6a['add'](_0x4a8d6a['weapon']);
            _0x4a8d6a['add'](new _0x117b6e['strokeRectangle'](0x0, 0x0, _0x468d75 + 0x8, _0x3ac1a5 + 0x8, '#000', 0x2, 0x1));
            _0x4a8d6a['size'] = 0x1;
            var _0x5accaf = 0x0;
            var _0x5695e6 = document['createElement']('canvas');
            var _0x1fa3a6 = new _0x117b6e['image'](_0x5695e6, 0x0, 0x0, _0x468d75, _0x3ac1a5, 0x0);
            _0x1fa3a6['opacity'] = 0x0;
            _0x5695e6['width'] = _0x468d75 * 0x2 + 0x8;
            _0x5695e6['height'] = _0x3ac1a5 * 0x2 + 0x8;

            function _0xb2abf6() {
                _0x4a8d6a['position']['x'] = 0x0;
                _0x4a8d6a['position']['y'] = 0x0;
                _0x5695e6['width'] = _0x468d75 + 0x8;
                _0x5695e6['height'] = _0x3ac1a5 + 0x8;
                var _0x4e735a = _0x5695e6['getContext']('2d');
                _0x4e735a['globalAlpha'] = 0x1;
                _0x4e735a['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                _0x4e735a['translate'](_0x468d75 / 0x2 + 0x4, _0x3ac1a5 / 0x2 + 0x4);
                _0x4a8d6a['render'](_0x4e735a, 0x1, 0x1);
                _0x4a8d6a['size'] = 0x1;
                if (_0x1fa3a6['parent'] != null) {
                    _0x1fa3a6['parent']['remove'](_0x1fa3a6);
                }
                _0x1fa3a6['parent'] = null;
                _0x220553['add'](_0x1fa3a6);
            }
            _0xb2abf6();

            function _0x3d6a1d(_0x59101b, _0x7858c, _0x3340f9) {
                var _0x5d0835 = document['createElement']('canvas');
                var _0x4c443b = _0x5d0835['getContext']('2d');
                var _0x27a1cc = new _0x117b6e['object']();
                _0x27a1cc['add'](new _0x117b6e['image'](_0x52811c('blanksmoke0'), 0x0, 0x0, _0x7858c, _0x7858c, 0.6));
                _0x27a1cc['add'](new _0x117b6e['image'](_0x52811c(_0x59101b), 0x0, 0x0, _0x7858c, _0x7858c, _0x3340f9));
                _0x5d0835['width'] = _0x7858c;
                _0x5d0835['height'] = _0x7858c;
                _0x4c443b['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                _0x4c443b['translate'](_0x7858c / 0x2, _0x7858c / 0x2);
                _0x27a1cc['render'](_0x4c443b, 0x1, 0x1);
                return _0x5d0835;
            }
            var _0x1384f1 = _0x3d6a1d('yellowsmoke0', 0xa0, 0.8);
            var _0x2bfb93 = _0x3d6a1d('orangesmoke0', 0x82, 0.8);
            var _0x5bb21a = _0x3d6a1d('redsmoke0', 0x64, 0.8);
            var _0x85fc3 = _0x3d6a1d('blacksmoke0', 0x64, 0.2);
            var _0x291294 = new _0x117b6e['object']();
            var _0x1e5e07 = new _0x117b6e['arc'](0x0, 0x0, 0x21, '#FFF', Math['PI'] * 0x2, 0x0, 0x6);
            _0x291294['add'](_0x1e5e07);
            var _0xb180ed = new _0x117b6e['text']('0', 0x0, 0x0, '#FFF', 'Arial Black', 0x16, 'bold', 0x1, 'center');
            _0x291294['add'](_0xb180ed);
            _0x291294['addBelow'](new _0x117b6e['circle'](0x0, 0x0, 0x28, '#000', 0.4));
            _0x291294['opacity'] = 0x0;
            _0x291294['size'] = 0x1;
            _0x39d88c['add'](_0x291294);
            window['addEventListener']('keyup', function (_0x59bcf6) {
                if (_0x59bcf6['keyCode'] == _0x5b09a5('ADS')) {
                    if (_0x34ea3f['rightClicking']) {
                        _0x34ea3f['rightClicking'] = ![];
                        _0x34ea3f['rightChanged'] = !![];
                    }
                }
                if (_0x59bcf6['keyCode'] == _0x5b09a5('Fire')) {
                    if (_0x34ea3f['clicking']) {
                        _0x34ea3f['clicking'] = ![];
                        _0x34ea3f['changed'] = !![];
                    }
                }
            });

            function _0x5c7888() {
                if (!_0x5525d5) {
                    _0x454358 = !_0x454358;
                    if (_0x454358) {
                        document['exitPointerLock']();
                    } else if (_0x60b1ef == -0x2) {
                        _0x34a800['c']['requestPointerLock']();
                    }
                    _0x34ea3f['clicking'] = ![];
                    _0x34ea3f['changed'] = !![];
                    if (_0x117b6e['me'] !== undefined && _0x117b6e['me']['updateWeaponSlots'] !== undefined) {
                        _0x117b6e['me']['updateWeaponSlots'] = !![];
                    }
                }
                if (!_0x454358) {
                    _0x1debb8 = -0x1;
                }
            }
            window['addEventListener']('keydown', function (_0x36590a) {
                if (_0x36590a['keyCode'] == 0x1b) {
                    window['parent']['postMessage']('escape', 'file://');
                }
                if (_0x36590a['keyCode'] == 0x7b) {
                    window['parent']['postMessage']('devtools', 'file://');
                }
                if (_0x2effea != -0x1) {
                    _0x36590a['preventDefault']();
                    if (_0x489511['indexOf'](_0x36590a['keyCode']['toString']()) != -0x1) {
                        _0x29875c[_0x2effea] = _0x36590a['keyCode'];
                        _0x59e1c9();
                        _0x24b168();
                    }
                    return;
                }
                if (!_0x117b6e['spectating']) {
                    if (_0x29875c['indexOf'](_0x36590a['keyCode']) != -0x1 || _0x29875c['indexOf'](_0x36590a['keyCode']['toString']()) != -0x1) {
                        if (_0x4d72a3) {
                            _0x36590a['preventDefault']();
                        }
                    }
                    if (_0x36590a['keyCode'] == _0x5b09a5('Inventory')) {
                        _0x36590a['preventDefault']();
                        _0x5c7888();
                    }
                    if (_0x36590a['keyCode'] == _0x5b09a5('ADS')) {
                        if (!_0x34ea3f['rightClicking']) {
                            _0x34ea3f['rightClicking'] = !![];
                            _0x34ea3f['rightChanged'] = !![];
                        }
                    }
                    if (_0x36590a['keyCode'] == _0x5b09a5('Fire')) {
                        if (!_0x34ea3f['clicking']) {
                            _0x34ea3f['clicking'] = !![];
                            _0x34ea3f['changed'] = !![];
                        }
                    }
                    if (_0x36590a['keyCode'] == _0x5b09a5('Build')) {
                        _0x117b6e['currentPackets']['push']({
                            'type': 'build'
                        });
                    }
                    if (_0x36590a['keyCode'] == _0x5b09a5('Reload')) {
                        _0x117b6e['currentPackets']['push']({
                            'type': 'reload'
                        });
                    }
                    if (_0x36590a['keyCode'] == _0x5b09a5('Pickup 1') || _0x36590a['keyCode'] == _0x5b09a5('Pickup 2')) {
                        _0x117b6e['currentPackets']['push']({
                            'type': 'pickup'
                        });
                    }
                    if (_0x36590a['keyCode'] == _0x5b09a5('Map')) {
                        if (!_0x454358) _0x5525d5 = !_0x5525d5;
                    }
                    if (_0x36590a['keyCode'] == _0x5b09a5('Ask For Ammo')) {
                        _0x117b6e['currentPackets']['push']({
                            'type': 'needammo'
                        });
                    }
                    if (_0x117b6e['me']['weaponSlots'] !== undefined) {
                        var _0x2cf29e = ![];
                        var _0x41f41d = _0x36590a['keyCode'];
                        for (var _0x56eb25 = 0x1; _0x56eb25 <= 0x6; _0x56eb25++) {
                            if (_0x36590a['keyCode']['toString']() == _0x5b09a5('Weapon Slot ' + _0x56eb25)['toString']()) {
                                _0x2cf29e = !![];
                                _0x41f41d = 0x30 + _0x56eb25;
                                _0x56eb25 = 0x7;
                            }
                        }
                        if (_0x2cf29e && _0x41f41d <= 0x36 && _0x41f41d >= 0x31) {
                            if (_0x454358) {
                                if (_0x41f41d > 0x31) {
                                    if (_0x1debb8 != -0x1) {
                                        _0x117b6e['currentPackets']['push']({
                                            'type': 'switch',
                                            'slot1': _0x1debb8,
                                            'slot2': _0x41f41d - 0x31
                                        });
                                        if (_0x1debb8 == _0x6203d7) {
                                            _0x6203d7 = _0x41f41d - 0x31;
                                        } else if (_0x41f41d - 0x31 == _0x6203d7) {
                                            _0x6203d7 = _0x1debb8;
                                        }
                                        if (_0x1debb8 == _0x41f41d - 0x31 && _0x1debb8 == _0x6203d7) {
                                            for (var _0x56eb25 = Math['max'](_0x6203d7 - 0x1, 0x0); _0x117b6e['me']['weaponSlots'][Math['max'](_0x56eb25, 0x0)]['type'] != 'empty' && _0x56eb25 >= 0x0; _0x56eb25--) {}
                                            _0x6203d7 = Math['max'](_0x56eb25, 0x0);
                                            _0x117b6e['currentPackets']['push']({
                                                'type': 'selectChange',
                                                'weapon': _0x6203d7
                                            });
                                        }
                                        _0x1debb8 = -0x1;
                                    } else {
                                        _0x1debb8 = _0x41f41d - 0x31;
                                    }
                                }
                            } else if (_0x117b6e['me']['weaponSlots'][_0x41f41d - 0x31]['type'] != 'empty' && _0x6203d7 != _0x41f41d - 0x31) {
                                _0x6203d7 = _0x41f41d - 0x31;
                                _0x117b6e['currentPackets']['push']({
                                    'type': 'selectChange',
                                    'weapon': _0x6203d7
                                });
                            }
                        }
                    }
                } else {
                    _0x5525d5 = ![];
                }
            }, ![]);

            function _0x2382d1(_0x51d20f, _0x550628) {
                var _0x55efc4 = ![];
                if (_0x51d20f[0x0] == '#') {
                    _0x51d20f = _0x51d20f['slice'](0x1);
                    _0x55efc4 = !![];
                }
                var _0x450396 = parseInt(_0x51d20f, 0x10);
                var _0x505a52 = (_0x450396 >> 0x10) + _0x550628;
                if (_0x505a52 > 0xff) _0x505a52 = 0xff;
                else if (_0x505a52 < 0x0) _0x505a52 = 0x0;
                var _0x3d5020 = (_0x450396 >> 0x8 & 0xff) + _0x550628;
                if (_0x3d5020 > 0xff) _0x3d5020 = 0xff;
                else if (_0x3d5020 < 0x0) _0x3d5020 = 0x0;
                var _0x9f40a0 = (_0x450396 & 0xff) + _0x550628;
                if (_0x9f40a0 > 0xff) _0x9f40a0 = 0xff;
                else if (_0x9f40a0 < 0x0) _0x9f40a0 = 0x0;
                return (_0x55efc4 ? '#' : '') + (_0x9f40a0 | _0x3d5020 << 0x8 | _0x505a52 << 0x10)['toString'](0x10);
            }

            function _0x45d511(_0x25b046, _0x35c557) {
                var _0x584098 = parseInt(_0x25b046['slice'](0x1), 0x10),
                    _0x21daff = Math['round'](2.55 * _0x35c557),
                    _0x10e7ea = (_0x584098 >> 0x10) + _0x21daff,
                    _0x33a80f = (_0x584098 >> 0x8 & 0xff) + _0x21daff,
                    _0x49fe59 = (_0x584098 & 0xff) + _0x21daff;
                return '#' + (0x1000000 + (_0x10e7ea < 0xff ? _0x10e7ea < 0x1 ? 0x0 : _0x10e7ea : 0xff) * 0x10000 + (_0x33a80f < 0xff ? _0x33a80f < 0x1 ? 0x0 : _0x33a80f : 0xff) * 0x100 + (_0x49fe59 < 0xff ? _0x49fe59 < 0x1 ? 0x0 : _0x49fe59 : 0xff))['toString'](0x10)['slice'](0x1);
            }
            _0x573d64['size'] = 0.9;
            _0x573d64['add'](_0x2efa04);
            _0x39d88c['add'](_0x1e123c);
            _0x39d88c['add'](_0x11a4be);
            _0x39d88c['add'](_0x2c468b);
            _0x39d88c['add'](_0x23f6f4);
            _0x39d88c['add'](_0x409d8d);
            _0x39d88c['add'](_0x573d64);
            _0x39d88c['add'](_0x429599);
            var _0x560b44 = new _0x117b6e['text']('Press Space to Pick Up', 0x0, 97.5, '#FFF', _0x22201b, 0x1e, '');
            _0x560b44['addBelow'](new _0x117b6e['text']('Press Space to Pick Up', 0x0, 0x4, '#FFF', _0x22201b, 0x1e, ''));
            _0x560b44['belowObjects'][0x0]['opacity'] = 0.3;
            _0x560b44['newOpacity'] = 0x0;
            var _0x17dee9 = 0x16;
            var _0x2b28c8 = 0x19;
            var _0x275e75 = _0x117b6e['prerender'](new _0x117b6e['circle'](_0x17dee9, _0x2b28c8, 0xa, '#B38638', 0x1), 0x14)['image'];
            var _0x2bc7e5 = _0x117b6e['prerender'](new _0x117b6e['circle'](0x0, 0x0, 0xc, '#000', 0x1), 0x18)['image'];
            _0x117b6e['addType']('player', function (_0x3b5358, _0x2ad113) {
                _0x3b5358['visual'] = new _0x117b6e['object']();
                _0x3b5358['firstPacket'] = !![];
                _0x3b5358['actualRotation'] = 0x0;
                _0x3b5358['oldJump'] = 0x0;
                _0x3b5358['currentJump'] = 0x0;
                _0x3b5358['newJump'] = 0x0;
                _0x3b5358['elims'] = 0x0;
                _0x3b5358['spectators'] = 0x0;
                _0x3b5358['sprite'] = new _0x117b6e['object']();
                _0x3b5358['playerImage'] = new _0x117b6e['image'](_0x52811c('player' + (_0x595d79 ? _0x2ad113['hair'] : '')), 0x0, 0x0, 0x64, 0x64);
                if (_0x2ad113['locker'] == undefined) {
                    _0x2ad113['locker'] = {
                        'skin': null,
                        'pickaxe': null,
                        'wrap': null
                    };
                }
                if (_0x2ad113['locker']['skin'] != null) {
                    _0x3b5358['playerImage']['image'] = _0x4ba695('cosmetics/body/' + _0x2ad113['locker']['skin'] + '.png')['img'];
                }
                _0x3b5358['sprite']['add'](_0x3b5358['playerImage']);
                _0x3b5358['weaponSkin'] = '';
                if (_0x2ad113['locker']['wrap'] != null) {
                    _0x3b5358['weaponSkin'] = _0x2ad113['locker']['wrap'];
                }
                _0x3b5358['pickaxeSkin'] = _0x2ad113['pickaxeSkin'];
                console['log']('Pickaxe skin is: ' + _0x3b5358['pickaxeSkin']);
                _0x3b5358['pickaxeImage'] = _0x52811c(_0x3b5358['pickaxeSkin']);
                if (_0x2ad113['locker']['pickaxe'] != null) {
                    console['log']('Pickaxe asset: ' + 'cosmetics/pickaxe/' + _0x2ad113['locker']['pickaxe'] + '.png');
                    _0x3b5358['pickaxeImage'] = _0x4ba695('cosmetics/pickaxe/' + _0x2ad113['locker']['pickaxe'] + '.png')['img'];
                }
                _0x3b5358['hairStyle'] = 'hair' + _0x2ad113['hair'];
                _0x3b5358['hair'] = _0x2ad113['hair'];
                _0x3b5358['infected'] = -0x1;
                var _0x101ebb = !![];
                if (_0x2ad113['hair'] > 0x3) {
                    _0x101ebb = ![];
                    _0x3b5358['hairStyle'] = 'customhair' + (_0x2ad113['hair'] - 0x4);
                    _0x3b5358['playerImage']['image'] = _0x52811c('customplayer' + (_0x2ad113['hair'] - 0x4));
                    _0x3b5358['playerImage']['addBelow'](new _0x117b6e['image'](_0x52811c('backpack' + (_0x2ad113['hair'] - 0x4)), 0x0, 0x2, 0x64, 0x64));
                }
                if (_0x2ad113['infected'] !== undefined) {
                    if (_0x2ad113['infected']) {
                        _0x101ebb = ![];
                        _0x3b5358['hairStyle'] = 'hazmathair';
                        _0x3b5358['playerImage']['image'] = _0x52811c('hazmatbody');
                        _0x3b5358['playerImage']['belowObjects'] = [];
                    } else {
                        _0x101ebb = ![];
                        _0x3b5358['hairStyle'] = 'infected' + Math['floor'](Math['random']() * 0x2);
                        _0x3b5358['playerImage']['image'] = _0x52811c('player');
                        _0x3b5358['playerImage']['belowObjects'] = [];
                    }
                    _0x3b5358['infected'] = _0x2ad113['infected'];
                }
                if (_0x2ad113['zombie'] !== undefined) {
                    _0x101ebb = ![];
                    if (_0x2ad113['zombie'] && _0x3b5358['hairStyle'] != 'zombiehair') {
                        _0x3b5358['hairStyle'] = 'zombiehair';
                        _0x3b5358['playerImage']['image'] = _0x52811c('zombiebody');
                        _0x3b5358['playerImage']['belowObjects'] = [];
                    }
                    _0x3b5358['infected'] = _0x2ad113['infected'];
                }
                if (typeof _0x2ad113['hair'] == 'string') {
                    _0x101ebb = ![];
                    _0x3b5358['playerImage']['image'] = _0x52811c(_0x2ad113['hair'] + 'body');
                    _0x3b5358['hairStyle'] = _0x2ad113['hair'] + 'head';
                    _0x3b5358['playerImage']['belowObjects'] = [];
                }
                _0x3b5358['head'] = new _0x117b6e['image'](_0x52811c(_0x3b5358['hairStyle']), 0x0, 0x0, 0x78, 0x78);
                if (_0x101ebb && _0x2ad113['locker']['skin'] != null) {
                    _0x3b5358['head']['image'] = _0x4ba695('cosmetics/head/' + _0x2ad113['locker']['skin'] + '.png')['img'];
                }
                _0x3b5358['headImage'] = _0x3b5358['head']['image'];
                if (_0x2ad113['knocked']) {
                    _0x3b5358['head']['image'] = _0x52811c('revive');
                }
                _0x3b5358['knocked'] = ![];
                if (_0x2ad113['knocked'] !== undefined) {
                    _0x3b5358['knocked'] = _0x2ad113['knocked'];
                }
                _0x3b5358['head']['rotation'] = Math['PI'] / 0x2;
                _0x3b5358['sprite']['add'](_0x3b5358['head']);
                _0x3b5358['handXOffset'] = _0x17dee9;
                _0x3b5358['handYOffset'] = _0x2b28c8;
                _0x3b5358['oldSpread'] = 0x4;
                _0x3b5358['currentSpread'] = 0x4;
                _0x3b5358['spread'] = 0x4;
                _0x3b5358['hands'] = new _0x117b6e['object']();
                _0x3b5358['hand1'] = new _0x117b6e['image'](_0x275e75, _0x3b5358['handXOffset'], _0x3b5358['handYOffset'], 0x14, 0x14);
                _0x3b5358['hand1']['addBelow'](new _0x117b6e['image'](_0x2bc7e5, 0x0, 0x0, 0x18, 0x18));
                _0x3b5358['hands']['add'](_0x3b5358['hand1']);
                _0x3b5358['hand2'] = new _0x117b6e['image'](_0x275e75, _0x3b5358['handXOffset'] - 0x5, -_0x3b5358['handYOffset'], 0x14, 0x14);
                _0x3b5358['hand2']['addBelow'](new _0x117b6e['image'](_0x2bc7e5, 0x0, 0x0, 0x18, 0x18));
                _0x3b5358['arm'] = new _0x117b6e['object']();
                _0x3b5358['arm']['add'](new _0x117b6e['rectangle'](0x0, -0xf, 0xf, 0x1e, '#000'));
                _0x3b5358['arm']['add'](new _0x117b6e['rectangle'](0x0, -0xf, 0xb, 0x1e, '#836628'));
                _0x3b5358['arm']['rotation'] = 2.555 + Math['PI'] / 0x2;
                _0x3b5358['hand2']['addBelow'](_0x3b5358['arm']);
                _0x3b5358['arm2'] = new _0x117b6e['object']();
                _0x3b5358['arm2']['add'](new _0x117b6e['rectangle'](0x2, 0xf, 0xf, 0x1e, '#000'));
                _0x3b5358['arm2']['add'](new _0x117b6e['rectangle'](0x2, 0xf, 0xb, 0x1e, '#836628'));
                _0x3b5358['arm2']['rotation'] = 0.09 + Math['PI'] / 0x2;
                _0x3b5358['hand1']['addBelow'](_0x3b5358['arm2']);
                _0x3b5358['handOffset'] = 0x0;
                _0x3b5358['handIncreasing'] = ![];
                _0x3b5358['handDecreasing'] = ![];
                _0x3b5358['weapon'] = new _0x117b6e['image'](_0x3b5358['pickaxeImage'], 0x18, 0xa, 0x6e, 0x6e);
                _0x3b5358['flash'] = new _0x117b6e['image'](_0x52811c('flash1'), -0x6e / 0x2 - 0x7, 0x0, 0x28, 0x28);
                _0x3b5358['flash']['rotation'] = -Math['PI'] / 0x2;
                _0x3b5358['flash']['opacity'] = 0x0;
                _0x3b5358['weapon']['addBelow'](_0x3b5358['flash']);
                _0x3b5358['weapon']['rotation'] = Math['PI'] / 0x2 + 0.01;
                _0x3b5358['hands']['add'](_0x3b5358['weapon']);
                _0x3b5358['hands']['add'](_0x3b5358['hand2']);
                _0x3b5358['sprite']['addBelow'](_0x3b5358['hands']);
                var _0x3e881b = _0x3b5358['handYOffset'] - 0xa;
                _0x3b5358['foot1'] = new _0x117b6e['circle'](0x0, _0x3e881b, 0xf, '#000', 0x1);
                _0x3b5358['foot2'] = new _0x117b6e['circle'](0x0, -_0x3e881b, 0xf, '#000', 0x1);
                _0x3b5358['foot1']['add'](new _0x117b6e['circle'](0x0, 0x0, 0xd, '#8b4513', 0.5));
                _0x3b5358['foot2']['add'](new _0x117b6e['circle'](0x0, 0x0, 0xd, '#8b4513', 0.5));
                _0x3b5358['feet'] = new _0x117b6e['object']();
                _0x3b5358['feet']['addBelow'](_0x3b5358['foot1']);
                _0x3b5358['feet']['addBelow'](_0x3b5358['foot2']);
                _0x3b5358['feet']['rotation'] = 0x0;
                _0x3b5358['sprite']['addBelow'](_0x3b5358['feet']);
                _0x3b5358['shadow'] = new _0x117b6e['circle'](0x0, 0x0, 0x2a, '#000', 0.1);
                _0x3b5358['sprite']['addBelow'](_0x3b5358['shadow']);
                _0x3b5358['rarecolor'] = new _0x117b6e['image'](_0x52811c('beachballshadow'), 0x0, 0x0, 0x43, 0x43, 0.35);
                _0x3b5358['visual']['add'](_0x3b5358['sprite']);
                _0x3b5358['ui'] = new _0x117b6e['object']();
                _0x3b5358['visual']['addBelow'](_0x3b5358['ui']);
                _0x3b5358['health'] = _0x2ad113['health'];
                _0x3b5358['shield'] = _0x2ad113['shield'];
                _0x3b5358['selectedWeapon'] = _0x2ad113['selectedWeapon'];
                _0x3b5358['healthbar'] = new _0x117b6e['rectangle'](0x0, 0x32, _0x3b5358['health'], 0xe, '#0D0');
                _0x3b5358['healthbar']['width'] = 0x0;
                _0x3b5358['underHealthbar'] = new _0x117b6e['rectangle'](0x0, 0x4, _0x3b5358['health'], 0xe, '#0A0');
                _0x3b5358['healthbar']['addBelow'](_0x3b5358['underHealthbar']);
                _0x3b5358['shieldbar'] = new _0x117b6e['rectangle'](0x0, 0x2b + 0x7 / 0x2, _0x3b5358['shield'], 0x7, '#48F');
                _0x3b5358['shieldbar']['width'] = 0x0;
                _0x3b5358['hasGroundItem'] = ![];
                _0x3b5358['name'] = _0x2ad113['name'];
                var _0x517dc3 = '#CCC';
                _0x3b5358['nametag'] = new _0x117b6e['text'](_0x3b5358['name'], 0x0, -0x41, _0x517dc3, _0x22201b, 0x19, '');
                _0x3b5358['nametagstroke'] = new _0x117b6e['strokeText'](_0x3b5358['name'], 0x0, 0x0, '#000', _0x22201b, 0x19, '');
                _0x3b5358['nametagstroke']['lineWidth'] = 0x4;
                _0x3b5358['nametag']['addBelow'](_0x3b5358['nametagstroke']);
                _0x3b5358['nametag']['opacity'] = 0x0;
                _0x3b5358['ui']['add'](_0x3b5358['nametag']);
                _0x3b5358['speech'] = new _0x117b6e['object']();
                _0x3b5358['speech']['position'] = new _0x117b6e['Vector2'](0x0, -0x64);
                var _0x270018 = 0x50;
                var _0x7c7155 = 0x3c;
                var _0xa508da = 0x14;
                var _0x8e7e04 = [new _0x117b6e['Vector2'](-_0x270018 / 0x2, _0x7c7155 / 0x2), new _0x117b6e['Vector2'](-_0x270018 / 0x2, -_0x7c7155 / 0x2), new _0x117b6e['Vector2'](_0x270018 / 0x2, -_0x7c7155 / 0x2), new _0x117b6e['Vector2'](_0x270018 / 0x2, _0x7c7155 / 0x2), new _0x117b6e['Vector2'](_0xa508da / 0x2, _0x7c7155 / 0x2), new _0x117b6e['Vector2'](0x0, _0x7c7155 / 0x2 + Math['sin'](Math['PI'] / 0x3) * _0xa508da), new _0x117b6e['Vector2'](-_0xa508da / 0x2, _0x7c7155 / 0x2)];
                _0x3b5358['speechPolygon'] = new _0x117b6e['polygon'](0x0, 0x0, _0x8e7e04, '#FFF');
                _0x3b5358['speechPolygon']['shouldStroke'] = !![];
                _0x3b5358['speechPolygon']['lineWidth'] = 0x6;
                _0x3b5358['strokeColor'] = '#000';
                _0x3b5358['speechAmmo'] = new _0x117b6e['image'](_0x52811c('stack1'), 0x0, 0x0, 0x37, 0x37);
                _0x3b5358['speechAmmo']['position'] = _0x3b5358['speechPolygon']['position'];
                _0x3b5358['speechPolygon']['opacity'] = 0.8;
                _0x3b5358['speech']['add'](_0x3b5358['speechPolygon']);
                _0x3b5358['speech']['add'](_0x3b5358['speechAmmo']);
                _0x3b5358['ui']['add'](_0x3b5358['speech']);
                _0x3b5358['speech']['opacity'] = 0x0;
                _0x3b5358['speechTimer'] = 0x0;
                _0x3b5358['wall'] = new _0x117b6e['image'](_0x52811c('wall'), 0x78, 0x0, 0x35, 0x9);
                _0x3b5358['wall']['rotation'] = Math['PI'] / 0x2;
                _0x3b5358['wall']['size'] = 0x5;
                _0x3b5358['wall']['opacity'] = 0x0;
                _0x3b5358['wAmmo'] = _0x2ad113['wAmmo'];
                _0x3b5358['ammo'] = _0x2ad113['ammo'];
                _0x3b5358['house'] = _0x2ad113['house'];
                _0x3b5358['wallTime'] = 0x0;
                _0x3b5358['visual']['add'](_0x3b5358['wall']);
                _0x3b5358['staminaVal'] = 0x64;
                _0x3b5358['stamina'] = new _0x117b6e['arc'](-0x37, -0x14, 0xc, '#FF0', Math['PI'] * 0x2, 0x0, 0x8);
                _0x3b5358['stamina']['addBelow'](new _0x117b6e['arc'](0x0, 0x0, 0xc, '#000', Math['PI'] * 0x2, 0x0, 0x8));
                _0x3b5358['stamina']['belowObjects'][0x0]['opacity'] = 0.3;
                _0x3b5358['stamina']['opacity'] = 0x0;
                _0x3b5358['timeUntilSound'] = 0x1;
                _0x3b5358['inCar'] = ![];
                _0x3b5358['resetOldJump'] = ![];
                _0x3b5358['weaponSlots'] = _0x2ad113['weaponSlots'];
                _0x3b5358['updateWeaponSlots'] = !![];
                _0x3b5358['dollas'] = [];
                _0x3b5358['currentWeaponPosition'] = new _0x117b6e['Vector2'](0x0, 0x0);
                _0x3b5358['newWeaponPosition'] = new _0x117b6e['Vector2'](0x0, 0x0);
                _0x3b5358['steadying'] = _0x2ad113['steadying'];
                _0x3b5358['unsetSteadying'] = ![];
                _0x3b5358['finishedSteadying'] = !![];
                _0x3b5358['spawnTrail'] = 0x0;
                _0x3b5358['extraRotationTicks'] = 0x0;
                _0x3b5358['ui']['add'](_0x3b5358['stamina']);
                _0x3b5358['switchOpacity'] = 0.42;
                _0x3b5358['gun'] = new _0x117b6e['image'](document['getElementById']('empty'), 0x32, 0x14, 0x1e, 0x3c);
                _0x3b5358['gun']['rotation'] = Math['PI'] / 0x2;
                _0x3b5358['gun']['opacity'] = 0x0;
                _0x3b5358['dead'] = ![];
                _0x3b5358['damages'] = [];
                _0x3b5358['textRotate'] = 0x0;
                _0x3b5358['reloadTime'] = 0x0;
                _0x3b5358['oldReloadTime'] = 0x0;
                _0x3b5358['newReloadTime'] = 0x0;
                _0x3b5358['fullReload'] = _0x2ad113['frt'];
                _0x3b5358['healRotations'] = 0x5;
                _0x3b5358['resetSelectedWeapon'] = ![];
                _0x3b5358['sprinting'] = _0x2ad113['sprinting'];
                _0x3b5358['jumpTicks'] = 0x10;
                _0x3b5358['building'] = _0x2ad113['building'];
                _0x3b5358['canBuild'] = _0x2ad113['canBuild'];
                _0x3b5358['material'] = _0x32a36c[_0x2ad113['mat']];
                _0x3b5358['mat'] = _0x2ad113['mat'];
                _0x3b5358['materials'] = _0x2ad113['mats'];
                _0x3b5358['oldMats'] = [_0x2ad113['mats'][0x0], _0x2ad113['mats'][0x1], _0x2ad113['mats'][0x2]];
                _0x3b5358['team'] = [];
                _0x3b5358['inVehicle'] = _0x2ad113['v'];
                _0x3b5358['lastClose'] = -0x1;
                _0x3b5358['lastCloseR'] = -0x1;
                _0x3b5358['healing'] = ![];
                _0x3b5358['healSin'] = 0x0;
                _0x3b5358['damageIndicator'] = new _0x117b6e['object']();
                _0x3b5358['damageIcon'] = new _0x117b6e['image'](_0x52811c('redarrow'), 0x0, 0x50, 0x64, 0x64);
                _0x3b5358['damageIcon']['rotation'] = Math['PI'];
                _0x3b5358['damageIndicator']['add'](_0x3b5358['damageIcon']);
                _0x3b5358['damageIndicator']['opacity'] = 0x0;
                _0x3b5358['ui']['add'](_0x3b5358['damageIndicator']);
                _0x3b5358['sprite']['objects'][0x0]['rotation'] = Math['sin'](_0x3b5358['extraRotationTicks']) / 0x10 + Math['PI'] / 0x2 - _0x3b5358['handOffset'] / 0x5;
                _0x2a3fa5['add'](_0x3b5358['visual']);
                if (_0x3b5358['canBuild']) {
                    _0x3b5358['buildingPreview'] = new _0x117b6e['image'](_0x52811c('blue' + _0x3b5358['material']), 0x0, 0x0, _0x478d05 * _0x36dfb4 / 0x2, _0x478d05);
                } else {
                    _0x3b5358['buildingPreview'] = new _0x117b6e['image'](_0x52811c('red' + _0x3b5358['material']), 0x0, 0x0, _0x478d05 * _0x36dfb4 / 0x2, _0x478d05);
                }
                _0x3b5358['buildingPreview']['opacity'] = 0x0;
                _0x2a3fa5['add'](_0x3b5358['buildingPreview']);
                if (_0x3b5358['steadying']) {
                    _0x3b5358['hands']['rotation'] = Math['PI'] / 0x2 - 0.23;
                    _0x3b5358['hands']['position']['x'] = 0xf;
                    _0x3b5358['hands']['position']['y'] = -0xc;
                    var _0x56c656 = 0x0;
                    _0x3b5358['sprite']['objects'][0x0]['rotation'] = _0x56c656 / 0x10 + Math['PI'] / 0x2 - _0x3b5358['handOffset'] / 0x5 + Math['PI'] / 0x3 - 0.15;
                }
                if (_0x3b5358['isPreview'] != undefined) {
                    var _0x56c656 = -0.6;
                    if (_0x2ad113['footSin'] !== undefined) {
                        _0x56c656 = _0x2ad113['footSin'];
                    }
                    _0x3b5358['foot1']['position']['x'] = -_0x56c656 * 0xf + 0x2;
                    _0x3b5358['foot2']['position']['x'] = _0x56c656 * 0xf + 0x2;
                    if (_0x3b5358['steadying'] && _0x3b5358['flare'] !== undefined && _0x3b5358['flare'] == !![]) {
                        _0x3b5358['flash']['opacity'] = 0.4;
                        _0x3b5358['flash']['image'] = _0x52811c('flash2');
                    }
                }
            }, function (_0xf0eaae) {
                if (_0xf0eaae == _0x117b6e['me']) {
                    if (_0x175275['parent'] != _0xf0eaae['ui']) {
                        if (_0x175275['parent'] != null) {
                            _0x175275['parent']['remove'](_0x175275);
                        }
                        _0xf0eaae['ui']['add'](_0x175275);
                    }
                    for (var _0x48126d = 0x0; _0x48126d < _0x1a0a83['length']; _0x48126d++) {
                        _0x1a0a83[_0x48126d]['under'] = ![];
                    }
                    if (_0xf0eaae['house'] >= 0x0) {
                        _0x1a0a83[_0xf0eaae['house']]['under'] = !![];
                    }
                    for (var _0x48126d = 0x0; _0x48126d < _0xecf7c4['length']; _0x48126d++) {
                        _0xecf7c4[_0x48126d]['opacity'] = 0x0;
                    }
                    for (var _0x48126d = 0x0; _0x48126d < _0xf0eaae['team']['length'] && _0x48126d < _0xecf7c4['length']; _0x48126d++) {
                        if (_0xf0eaae['team'][_0x48126d]['nametag'] === undefined) {
                            continue;
                        }
                        _0xf0eaae['team'][_0x48126d]['nametag']['opacity'] = 0x1;
                        _0xecf7c4[_0x48126d]['opacity'] = 0x1;
                        _0xecf7c4[_0x48126d]['health']['width'] = _0xf0eaae['team'][_0x48126d]['health'] * 0x3;
                        _0xecf7c4[_0x48126d]['shield']['width'] = _0xf0eaae['team'][_0x48126d]['shield'] * 0x3;
                        if (_0xf0eaae['team'][_0x48126d]['knocked']) {
                            _0xecf7c4[_0x48126d]['health']['color'] = '#C00';
                            _0xecf7c4[_0x48126d]['health']['width'] /= 0x2;
                        } else {
                            _0xecf7c4[_0x48126d]['health']['color'] = '#0C0';
                        }
                        _0xecf7c4[_0x48126d]['nametag']['text'] = _0xf0eaae['team'][_0x48126d]['name'];
                        if (_0xf0eaae['team'][_0x48126d]['name'] == '') {
                            _0xf0eaae['team'][_0x48126d]['nametag']['text'] = 'teammate';
                            _0xf0eaae['team'][_0x48126d]['nametagstroke']['text'] = 'teammate';
                            _0xf0eaae['team'][_0x48126d]['nametag']['opacity'] = 0.3;
                        }
                        _0xecf7c4[_0x48126d]['health']['position']['x'] = 0x7d + _0xecf7c4[_0x48126d]['health']['width'] / 0x2;
                        _0xecf7c4[_0x48126d]['shield']['position']['x'] = 0x7d + _0xecf7c4[_0x48126d]['shield']['width'] / 0x2;
                    }
                    for (var _0x48126d = 0x0; _0x48126d < _0x355cc5['length']; _0x48126d++) {
                        _0x355cc5[_0x48126d]['opacity'] = 0x0;
                    }
                    for (var _0x48126d = 0x0; _0x48126d < _0xf0eaae['team']['length'] && _0x48126d < _0x355cc5['length']; _0x48126d++) {
                        _0x355cc5[_0x48126d]['opacity'] = 0x1;
                        _0x355cc5[_0x48126d]['position']['x'] = _0xf0eaae['team'][_0x48126d]['visual']['position']['x'];
                        _0x355cc5[_0x48126d]['position']['y'] = _0xf0eaae['team'][_0x48126d]['visual']['position']['y'];
                    }
                    _0x21bbd6['opacity'] -= _0x117b6e['clientDetails']['dt'] / 0x28;
                    _0x21bbd6['opacity'] = Math['max'](_0x21bbd6['opacity'], 0x0);
                    if (_0xf0eaae['hasGroundItem']) {
                        _0x5175cb['opacity'] = 0x1;
                        _0x1fa3a6['opacity'] = Math['min'](_0x1fa3a6['opacity'] + _0x117b6e['clientDetails']['dt'] / 0x14, 0x1);
                        _0x4a8d6a['initialSize'] = _0x4a8d6a['veryInitialSize'];
                    } else {
                        _0x5175cb['opacity'] = 0.2;
                        _0x1fa3a6['opacity'] = Math['max'](_0x1fa3a6['opacity'] - _0x117b6e['clientDetails']['dt'] / 0x14, 0x0);
                        _0x4a8d6a['initialSize'] += _0x117b6e['clientDetails']['dt'] / 0x28;
                    }
                    _0x5accaf += _0x117b6e['clientDetails']['dt'] / 0x1e;
                    _0x1fa3a6['size'] = _0x4a8d6a['initialSize'] + Math['sin'](_0x5accaf) / 0x1e;
                    _0x1fa3a6['position']['x'] = _0xf0eaae['visual']['position']['x'];
                    _0x1fa3a6['position']['y'] = _0xf0eaae['visual']['position']['y'] + 0x438 / 0x7;
                    _0xf0eaae['textRotate'] += 0.1 * _0x117b6e['clientDetails']['dt'];
                    if (_0xf0eaae['textRotate'] > Math['PI'] * 0x2) {
                        _0xf0eaae['textRotate'] -= Math['PI'] * 0x2;
                    }
                    _0x560b44['rotation'] = Math['sin'](_0xf0eaae['textRotate']) / 0x8;
                    _0x560b44['opacity'] += (_0x560b44['newOpacity'] - _0x560b44['opacity']) * 0.1 * _0x117b6e['clientDetails']['dt'];
                    _0xf0eaae['currentSpread'] = _0x117b6e['lerp'](_0xf0eaae['oldSpread'], _0xf0eaae['spread']);
                    var _0x5225b6 = 0xa;
                    _0x2a9b08['objects'][0x0]['position']['y'] = _0xf0eaae['currentSpread'] * _0x5225b6;
                    _0x2a9b08['objects'][0x1]['position']['y'] = -_0xf0eaae['currentSpread'] * _0x5225b6;
                    _0x2a9b08['objects'][0x2]['position']['x'] = _0xf0eaae['currentSpread'] * _0x5225b6;
                    _0x2a9b08['objects'][0x3]['position']['x'] = -_0xf0eaae['currentSpread'] * _0x5225b6;
                    for (var _0x48126d = 0x0; _0x48126d < _0x5c310['length']; _0x48126d++) {
                        _0x5c310[_0x48126d]['color'] = '#000';
                    }
                    if (_0xf0eaae['building']) _0x5c310[0x2 - _0xf0eaae['mat']]['color'] = '#77F';
                    for (var _0x48126d = 0x0; _0x48126d < _0xf0eaae['materials']['length']; _0x48126d++) {
                        _0xf0eaae['oldMats'][_0x48126d] += (_0xf0eaae['materials'][_0x48126d] - _0xf0eaae['oldMats'][_0x48126d]) * 0.07;
                        _0x5c310[0x2 - _0x48126d]['text']['text'] = Math['round'](_0xf0eaae['oldMats'][_0x48126d])['toString']();
                    }
                }
                _0xf0eaae['reloadTime'] = _0x117b6e['lerp'](_0xf0eaae['oldReloadTime'], _0xf0eaae['newReloadTime']);
                if (_0xf0eaae['done']) {
                    _0xf0eaae['ticksAsleep'] = 0x0;
                    _0xf0eaae['visual']['opacity'] -= 0.02 * _0x117b6e['clientDetails']['dt'];
                    if (_0xf0eaae['visual']['opacity'] <= 0x0) {
                        for (var _0x48126d = 0x0; _0x48126d < _0xf0eaae['damages']['length']; _0x48126d++) {
                            if (_0xf0eaae['damages'][_0x48126d]['parent'] != null) {
                                _0xf0eaae['damages'][_0x48126d]['parent']['remove'](_0xf0eaae['damages'][_0x48126d]);
                            }
                        }
                        for (var _0x48126d = 0x0; _0x48126d < _0x117b6e['objects']['length']; _0x48126d++) {
                            var _0x2829f4 = _0x117b6e['objects'][_0x48126d];
                            if (_0x2829f4['id'] == _0xf0eaae['id']) {
                                if (_0x2829f4['visual']['parent'] != null) _0x2829f4['visual']['parent']['remove'](_0x2829f4['visual']);
                                _0x117b6e['objects']['splice'](_0x48126d, 0x1);
                            }
                        }
                        if (_0xf0eaae['oldPlayerCanvas'] !== undefined && _0xf0eaae['oldPlayerCanvas'] != null) {
                            _0x10bc7c['push'](_0xf0eaae['oldPlayerCanvas']);
                            _0xf0eaae['oldPlayerCanvas']['width'] = 0x0;
                            _0xf0eaae['oldPlayerCanvas']['height'] = 0x0;
                            _0xf0eaae['oldPlayerCanvas'] = null;
                        }
                        _0xf0eaae['nametag']['unlink']();
                        _0xf0eaae['nametagstroke']['unlink']();
                    }
                }
                _0xf0eaae['damageIndicator']['opacity'] -= _0x117b6e['clientDetails']['dt'] / 0x46;
                _0xf0eaae['damageIndicator']['opacity'] = Math['max'](_0xf0eaae['damageIndicator']['opacity'], 0x0);
                var _0x2dac77 = _0x326ba8(_0xf0eaae['actualNew']['position'], _0xf0eaae['actualOld']['position']);
                _0xf0eaae['spawnTrail'] = Math['min'](_0xf0eaae['spawnTrail'] + _0x117b6e['clientDetails']['dt'], 0x64);
                var _0x3f4eb4 = 0x2;
                if (_0x5272a6 == 0x1) {
                    _0x3f4eb4 = 0x3;
                }
                if (_0x2dac77 > 0x5 && (_0xf0eaae['sprinting'] && _0xf0eaae['spawnTrail'] > 0x3 * _0x3f4eb4 || !_0xf0eaae['sprinting'] && _0xf0eaae['spawnTrail'] > 0x6 * _0x3f4eb4)) {
                    var _0xa4b0d6 = Math['floor'](Math['random']() * 0x2);
                    var _0x3d36eb = 0.4;
                    if (_0xf0eaae['sprinting']) {
                        _0x3d36eb = 0x1;
                    }
                    var _0x31123b = 0x32 + Math['random']() * 0x14;
                    if (_0xf0eaae['isPreview'] == undefined) {
                        _0x117b6e['customCustomParticle']('smoke', _0xf0eaae, (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 0x1 - _0x3d36eb, 0x0, 0x0);
                        _0xf0eaae['spawnTrail'] = 0x0;
                    } else if (_0x34da79 != undefined && _0xf0eaae['spawnTrail'] > 0x4 * _0x3f4eb4) {
                        _0x34da79['addBelow'](new _0x117b6e['customParticle'](new _0x117b6e['image'](_0x52811c('smoke' + _0xa4b0d6), _0xf0eaae['visual']['position']['x'], _0xf0eaae['visual']['position']['y'] + Math['random']() * 0x22 - 0x11, _0x31123b * 1.2, _0x31123b * 1.2, _0x3d36eb), (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 0x1 - _0x3d36eb, 0x0, 0x0));
                        _0xf0eaae['spawnTrail'] = 0x0;
                    }
                }
                var _0x1aa8d1 = 0x6;
                if (_0xf0eaae['handIncreasing']) {
                    _0xf0eaae['handDecreasing'] = ![];
                    if (_0xf0eaae['handOffset'] >= 0x0) {
                        _0xf0eaae['handOffset'] += _0x117b6e['clientDetails']['dt'] * 2.5 / _0x1aa8d1;
                        if (_0xf0eaae['handOffset'] >= Math['PI'] / 0x3) {
                            _0xf0eaae['handIncreasing'] = ![];
                            _0xf0eaae['handOffset'] = Math['PI'] / 0x3;
                        }
                    } else {
                        _0xf0eaae['handOffset'] += _0x117b6e['clientDetails']['dt'] * 0.6 / _0x1aa8d1;
                        if (_0xf0eaae['handOffset'] >= 0x0) {
                            _0xf0eaae['handIncreasing'] = ![];
                            _0xf0eaae['handOffset'] = 0x0;
                        }
                    }
                } else if (_0xf0eaae['handDecreasing']) {
                    _0xf0eaae['handOffset'] -= _0x117b6e['clientDetails']['dt'] * 0.3 / _0x1aa8d1;
                    if (_0xf0eaae['handOffset'] <= -Math['PI'] / 0x6) {
                        _0xf0eaae['handOffset'] = -Math['PI'] / 0x6;
                    }
                } else {
                    _0xf0eaae['handOffset'] -= _0x117b6e['clientDetails']['dt'] / _0x1aa8d1 * 0.29;
                    _0xf0eaae['handOffset'] = Math['max'](0x0, _0xf0eaae['handOffset']);
                }
                _0xf0eaae['extraRotationTicks'] += _0x2dac77 * _0x117b6e['clientDetails']['dt'] / 0xdc;
                var _0xda47a0 = Math['sin'](_0xf0eaae['extraRotationTicks']);
                _0xf0eaae['foot1']['position']['x'] = -_0xda47a0 * 0xf + 0x2;
                _0xf0eaae['foot2']['position']['x'] = _0xda47a0 * 0xf + 0x2;
                _0xf0eaae['flash']['opacity'] = Math['max'](_0xf0eaae['flash']['opacity'] - _0x117b6e['clientDetails']['dt'] / 0xa, 0x0);
                _0xf0eaae['ui']['rotation'] = -_0xf0eaae['visual']['rotation'];
                _0xf0eaae['healthbar']['width'] += (_0xf0eaae['health'] - _0xf0eaae['healthbar']['width']) * 0.1 * _0x117b6e['clientDetails']['dt'];
                _0xf0eaae['shieldbar']['width'] += (_0xf0eaae['shield'] - _0xf0eaae['shieldbar']['width']) * 0.1 * _0x117b6e['clientDetails']['dt'];
                _0xf0eaae['underHealthbar']['width'] = _0xf0eaae['healthbar']['width'] = Math['min'](Math['max'](_0xf0eaae['healthbar']['width'], 0x0), 0x64);
                _0xf0eaae['healthbar']['position']['x'] = (_0xf0eaae['healthbar']['width'] - 0x64) / 0x2;
                _0xf0eaae['shieldbar']['position']['x'] = (_0xf0eaae['shieldbar']['width'] - 0x64) / 0x2;
                _0xf0eaae['stamina']['angle'] += (_0xf0eaae['staminaVal'] * 1.8 * 0x2 * Math['PI'] / 0xb4 - _0xf0eaae['stamina']['angle']) * 0.1 * _0x117b6e['clientDetails']['dt'];
                _0xf0eaae['stamina']['rotation'] = -_0xf0eaae['stamina']['angle'] - Math['PI'] / 0x2;
                for (var _0x48126d = 0x0; _0x48126d < _0xf0eaae['dollas']['length']; _0x48126d++) {
                    _0xf0eaae['dollas'][_0x48126d]['position']['y'] -= _0x117b6e['clientDetails']['dt'] * 0.65;
                    _0xf0eaae['dollas'][_0x48126d]['specialOpacity'] -= 0.02 * _0x117b6e['clientDetails']['dt'];
                    _0xf0eaae['dollas'][_0x48126d]['opacity'] = _0xf0eaae['dollas'][_0x48126d]['specialOpacity'];
                    if (_0xf0eaae['dollas'][_0x48126d]['opacity'] <= 0x0) {
                        if (_0xf0eaae['dollas']['parent'] != null) {
                            _0xf0eaae['dollas'][_0x48126d]['parent']['remove'](_0xf0eaae['dollas'][_0x48126d]);
                        }
                        _0xf0eaae['dollas']['splice'](_0x48126d, 0x1);
                        _0x48126d--;
                    }
                }
                if (_0xf0eaae['staminaVal'] == 0x64) {
                    _0xf0eaae['stamina']['opacity'] -= 0.03 * _0x117b6e['clientDetails']['dt'];
                } else {
                    _0xf0eaae['stamina']['opacity'] += 0.03 * _0x117b6e['clientDetails']['dt'];
                }
                if (_0xf0eaae['weapon']['opacity'] < 0x1) {
                    _0xf0eaae['weapon']['opacity'] = Math['min'](_0xf0eaae['weapon']['opacity'] + _0x117b6e['clientDetails']['dt'] / 0x19, 0x1);
                }
                if (_0xf0eaae['building']) {
                    _0xf0eaae['buildingPreview']['opacity'] = 0.7 * _0xf0eaae['weapon']['opacity'];
                } else {
                    _0xf0eaae['buildingPreview']['opacity'] = Math['max'](_0xf0eaae['buildingPreview']['opacity'] - _0x117b6e['clientDetails']['dt'] / 0xa, 0x0);
                }
                _0xf0eaae['finishedSteadying'] = ![];
                if (_0xf0eaae['steadying']) {
                    if (_0xf0eaae['weaponSlots'][_0xf0eaae['selectedWeapon']]['type'] == 'snowball') {
                        _0xf0eaae['hands']['rotation'] = _0x117b6e['lerp'](_0xf0eaae['hands']['rotation'], Math['PI'] / 0x4 - 0.03);
                        _0xf0eaae['hands']['position']['x'] = Math['max'](_0x117b6e['lerp'](_0xf0eaae['hands']['position']['x'], 0x7), 0x1);
                        _0xf0eaae['hands']['position']['y'] = _0x117b6e['lerp'](_0xf0eaae['hands']['position']['y'], -0xc);
                        _0xf0eaae['sprite']['objects'][0x0]['rotation'] = _0x117b6e['lerp'](_0xf0eaae['sprite']['objects'][0x0]['rotation'], _0xda47a0 / 0x10 + Math['PI'] / 0x2 - _0xf0eaae['handOffset'] / 0x5 + (Math['PI'] / 0x3 - 0.15) / 0x2);
                    } else {
                        _0xf0eaae['hands']['rotation'] = _0x117b6e['lerp'](_0xf0eaae['hands']['rotation'], Math['PI'] / 0x2 - 0.23);
                        _0xf0eaae['hands']['position']['x'] = Math['max'](_0x117b6e['lerp'](_0xf0eaae['hands']['position']['x'], 0xf), 0x1);
                        _0xf0eaae['hands']['position']['y'] = _0x117b6e['lerp'](_0xf0eaae['hands']['position']['y'], -0xc);
                        _0xf0eaae['sprite']['objects'][0x0]['rotation'] = _0x117b6e['lerp'](_0xf0eaae['sprite']['objects'][0x0]['rotation'], _0xda47a0 / 0x10 + Math['PI'] / 0x2 - _0xf0eaae['handOffset'] / 0x5 + Math['PI'] / 0x3 - 0.15);
                    }
                } else {
                    if (_0xf0eaae['sprinting'] && !_0xf0eaae['building']) {
                        _0xf0eaae['hands']['rotation'] = _0x117b6e['lerp'](_0xf0eaae['hands']['rotation'], -_0xda47a0 / 0x8 - _0xf0eaae['handOffset']);
                        if (_0xf0eaae['isPreview']) {
                            _0xf0eaae['hands']['rotation'] = -_0xda47a0 / 0x8 - _0xf0eaae['handOffset'];
                        }
                    } else {
                        _0xf0eaae['hands']['rotation'] = _0x117b6e['lerp'](_0xf0eaae['hands']['rotation'], -_0xda47a0 / 0x18 - _0xf0eaae['handOffset']);
                    }
                    _0xf0eaae['hands']['position']['x'] = _0x117b6e['lerp'](_0xf0eaae['hands']['position']['x'], 0x0);
                    _0xf0eaae['hands']['position']['y'] = _0x117b6e['lerp'](_0xf0eaae['hands']['position']['y'], 0x0);
                    if (_0xf0eaae['hands']['position']['x'] < 0x1) {
                        _0xf0eaae['finishedSteadying'] = !![];
                    }
                    if (!_0xf0eaae['isPreview']) {
                        _0xf0eaae['sprite']['objects'][0x0]['rotation'] = _0x117b6e['lerp'](_0xf0eaae['sprite']['objects'][0x0]['rotation'], _0xda47a0 / 0x10 + Math['PI'] / 0x2 - _0xf0eaae['handOffset'] / 0x5);
                    } else {
                        _0xf0eaae['sprite']['objects'][0x0]['rotation'] = _0xda47a0 / 0x10 + Math['PI'] / 0x2 - _0xf0eaae['handOffset'] / 0x5;
                    }
                    _0xf0eaae['head']['rotation'] = (_0xda47a0 / 0x10 - _0xf0eaae['handOffset'] / 0x5) * 0.5 + Math['PI'] / 0x2;
                }
                if (_0xf0eaae['reloadTime'] > 0x0 && _0x56adf6['indexOf'](_0xf0eaae['weaponSlots'][_0xf0eaae['selectedWeapon']]['type']) == -0x1 && !_0xf0eaae['steadying'] && _0xf0eaae['finishedSteadying']) {
                    _0xf0eaae['handDecreasing'] = !![];
                } else if (_0xf0eaae['reloadTime'] <= 0x0 && _0xf0eaae['handOffset'] < 0x0) {
                    _0xf0eaae['handIncreasing'] = !![];
                }
                if (_0xf0eaae['newWeaponPosition']['y'] > 0x0) {
                    _0xf0eaae['newWeaponPosition']['y'] -= 0.2;
                    _0xf0eaae['hands']['position']['x'] = -_0xf0eaae['newWeaponPosition']['y'] + 0xf;
                    _0xf0eaae['newWeaponPosition']['x'] -= 0x1 / 0x19;
                    _0xf0eaae['hands']['position']['y'] = -0xc;
                }
                _0xf0eaae['feet']['rotation'] = _0xf0eaae['sprite']['objects'][0x0]['rotation'] - Math['PI'] / 0x2;
                if (_0xf0eaae == _0x117b6e['me']) {
                    _0x2efa04['position']['x'] = (_0x6203d7 - 0x5) * (_0x4b2a6b + 0xa) - _0x4b2a6b;
                    for (var _0x48126d = 0x0; _0x48126d < _0x1bc362['length']; _0x48126d++) {
                        _0x1bc362[_0x48126d]['position']['y'] = 0x0;
                    }
                    if (!_0x454358) {
                        _0x1bc362[_0x6203d7]['position']['y'] = -0xa;
                        _0x2efa04['position']['y'] = -_0x4b2a6b - 0xa;
                    } else {
                        _0x2efa04['position']['y'] = -_0x4b2a6b;
                    }
                    if (_0xf0eaae['weaponSlots'][_0xf0eaae['selectedWeapon']]['type'] == 'medkit' || _0xf0eaae['weaponSlots'][_0xf0eaae['selectedWeapon']]['type'] == 'mini' || _0xf0eaae['weaponSlots'][_0xf0eaae['selectedWeapon']]['type'] == 'pot' || _0xf0eaae['weaponSlots'][_0xf0eaae['selectedWeapon']]['type'] == 'bandages') {
                        if (!_0x117962['enabled']) {
                            _0x597340(_0x117962, 'opacity', _0x117962['opacity'], 0x1, 0x190, 0x0, _0x1acb6f['easeOutExpo']);
                        }
                        _0x117962['enabled'] = !![];
                    } else {
                        if (_0x117962['enabled']) {
                            _0x597340(_0x117962, 'opacity', _0x117962['opacity'], 0x0, 0x190, 0x0, _0x1acb6f['easeOutExpo']);
                        }
                        _0x117962['enabled'] = ![];
                    }
                }
                _0xf0eaae['currentJump'] = _0x117b6e['lerp'](_0xf0eaae['oldJump'], _0xf0eaae['newJump']);
                if (_0xf0eaae['resetOldJump']) {
                    _0xf0eaae['oldJump'] = _0xf0eaae['newJump'] = 0x0;
                    _0xf0eaae['resetOldJump'] = ![];
                }
                var _0x463556 = Math['max'](-Math['pow'](_0xf0eaae['currentJump'] / _0xf0eaae['jumpTicks'], 0x2) + _0xf0eaae['currentJump'] / _0xf0eaae['jumpTicks'], 0x0);
                _0xf0eaae['visual']['size'] = 0x1 + _0x463556 * 1.3;
                _0xf0eaae['shadow']['size'] = 0x1;
                if (_0xf0eaae['visual']['size'] != 0x1) {
                    _0xf0eaae['shadow']['size'] = 0x1 / _0x231375(_0xf0eaae['visual']['size'], 0.01);
                }
                for (var _0x48126d = 0x0; _0x48126d < _0xf0eaae['damages']['length']; _0x48126d++) {
                    _0xf0eaae['damages'][_0x48126d]['t'] -= _0x117b6e['clientDetails']['dt'] / 0x37;
                    _0xf0eaae['damages'][_0x48126d]['position']['y'] = _0xf0eaae['damages'][_0x48126d]['original']['y'] - Math['max'](-Math['pow'](_0xf0eaae['damages'][_0x48126d]['t'] / 0x2 + 0.5, 0x2) + _0xf0eaae['damages'][_0x48126d]['t'] / 0x2 + 0.5, 0x0) * 0x96 + _0xf0eaae['visual']['position']['y'];
                    _0xf0eaae['damages'][_0x48126d]['position']['x'] = _0xf0eaae['damages'][_0x48126d]['original']['x'] + _0xf0eaae['visual']['position']['x'];
                    _0xf0eaae['damages'][_0x48126d]['opacity'] = _0xf0eaae['damages'][_0x48126d]['t'];
                    if (_0xf0eaae['damages'][_0x48126d]['t'] <= 0x0) {
                        _0xf0eaae['damages']['opacity'] = 0x0;
                        if (_0xf0eaae['damages'][_0x48126d]['parent'] != null) {
                            _0xf0eaae['damages'][_0x48126d]['parent']['remove'](_0xf0eaae['damages'][_0x48126d]);
                        }
                        _0xf0eaae['damages'][_0x48126d]['unlink']();
                        _0xf0eaae['damages']['splice'](_0x48126d, 0x1);
                        _0x48126d--;
                    }
                }
                if (_0xf0eaae['healing']) {
                    _0xf0eaae['healSin'] = (_0xf0eaae['fullReload'] - _0xf0eaae['reloadTime'] / 0xa) * _0xf0eaae['healRotations'] * Math['PI'] / _0xf0eaae['fullReload'];
                    var _0x17dfe6 = Math['sin'](_0xf0eaae['healSin']) * 0x5;
                    _0xf0eaae['hand1']['position']['x'] = _0xf0eaae['handXOffset'] - 0x3 + _0x17dfe6;
                    _0xf0eaae['hand2']['position']['x'] = _0xf0eaae['handXOffset'] - 0x3 + _0x17dfe6;
                    _0xf0eaae['weapon']['position']['x'] = _0xf0eaae['originalWeaponX'] + _0x17dfe6;
                    var _0x182ed9 = ![];
                    if (_0x56adf6['indexOf'](_0xf0eaae['weaponSlots'][_0xf0eaae['selectedWeapon']]['type']) != -0x1) {
                        if (_0xf0eaae['reloadTime'] > 0x0) {
                            if (!_0xf0eaae['healing']) {
                                _0xf0eaae['healSin'] = 0x0;
                            }
                            _0x182ed9 = !![];
                        }
                    }
                    if (_0xf0eaae['healing'] != _0x182ed9) {
                        _0xf0eaae['resetSelectedWeapon'] = !![];
                    }
                    _0xf0eaae['healing'] = _0x182ed9;
                }
                if (_0xf0eaae['reloadTime'] <= 0x0) {
                    _0xf0eaae['healSin'] = 0x0;
                }
                if (_0xf0eaae['speechTimer'] > 0x0) {
                    _0xf0eaae['speechTimer'] -= _0x117b6e['clientDetails']['dt'] / 0xa;
                    _0xf0eaae['speech']['opacity'] += _0x117b6e['clientDetails']['dt'] / 0xa;
                    _0xf0eaae['speech']['opacity'] = Math['min'](_0xf0eaae['speech']['opacity'], 0x1);
                } else {
                    _0xf0eaae['speech']['opacity'] -= _0x117b6e['clientDetails']['dt'] / 0xa;
                    _0xf0eaae['speech']['opacity'] = Math['max'](0x0, _0xf0eaae['speech']['opacity']);
                }
            }, function (_0x396722, _0x4900b6) {
                if (_0x396722['firstPacket']) {
                    if (_0x4900b6['selectedWeapon'] === undefined) {
                        _0x4900b6['selectedWeapon'] = _0x396722['selectedWeapon'];
                    }
                    if (_0x4900b6['building'] === undefined) {
                        _0x4900b6['building'] = _0x396722['building'];
                    }
                    _0x396722['firstPacket'] = ![];
                }
                if (_0x4900b6['gh'] !== undefined && _0x396722 == _0x117b6e['me']) {
                    _0x21bbd6['opacity'] = 0.7;
                }
                if (_0x4900b6['house'] !== undefined) {
                    _0x396722['house'] = _0x4900b6['house'];
                }
                if (_0x4900b6['elims'] !== undefined) {
                    _0x396722['elims'] = _0x4900b6['elims'];
                    if (_0x396722 == _0x117b6e['me']) {
                        _0x40e5d1['text'] = _0x396722['elims'];
                    }
                }
                if (_0x396722['unsetSteadying']) {
                    if (_0x4900b6['steadying'] === undefined) {
                        _0x4900b6['steadying'] = ![];
                    }
                    _0x396722['unsetSteadying'] = ![];
                }
                if (_0x4900b6['infected'] !== undefined) {
                    if (_0x4900b6['infected'] && _0x396722['hairStyle'] != 'hazmathair') {
                        _0x396722['hairStyle'] = 'hazmathair';
                        _0x396722['playerImage']['image'] = _0x52811c('hazmatbody');
                        _0x396722['playerImage']['belowObjects'] = [];
                        _0x396722['head']['image'] = _0x52811c(_0x396722['hairStyle']);
                    } else if (!_0x4900b6['infected'] && _0x396722['hairStyle'] != 'infected0' && _0x396722['hairStyle'] != 'infected1') {
                        _0x396722['hairStyle'] = 'infected' + Math['floor'](Math['random']() * 0x2);
                        _0x396722['playerImage']['image'] = _0x52811c('player');
                        _0x396722['playerImage']['belowObjects'] = [];
                        _0x396722['head']['image'] = _0x52811c(_0x396722['hairStyle']);
                    }
                    _0x396722['infected'] = _0x4900b6['infected'];
                }
                if (_0x4900b6['zombie'] !== undefined) {
                    if (_0x4900b6['zombie'] && _0x396722['hairStyle'] != 'zombiehair') {
                        _0x396722['hairStyle'] = 'zombiehair';
                        _0x396722['playerImage']['image'] = _0x52811c('zombiebody');
                        _0x396722['playerImage']['belowObjects'] = [];
                        _0x396722['head']['image'] = _0x52811c(_0x396722['hairStyle']);
                    }
                    _0x396722['infected'] = _0x4900b6['infected'];
                }
                if (_0x4900b6['shot'] !== undefined && _0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] == 'pickaxe') {
                    _0x396722['handIncreasing'] = !![];
                }
                if (_0x4900b6['shot'] !== undefined && _0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] != 'pickaxe' && _0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] != 'snowball') {
                    _0x396722['newWeaponPosition']['y'] = 0x5;
                    _0x396722['newWeaponPosition']['x'] = 0x1;
                    _0x396722['flash']['image'] = _0x52811c('flash' + Math['floor'](Math['random']() * 0x3));
                    _0x396722['flash']['opacity'] = 0.8;
                    if (!_0x396722['steadying'] && (_0x4900b6['steadying'] === undefined || !_0x4900b6['steadying'])) {
                        _0x396722['unsetSteadying'] = !![];
                        _0x4900b6['steadying'] = !![];
                    }
                    if (_0x396722 == _0x117b6e['me']) {
                        _0x4f1972 = 0x65;
                    }
                }
                if (_0x4900b6['team'] !== undefined) {
                    _0x396722['team'] = [];
                    if (_0x396722 == _0x117b6e['me']) {
                        for (var _0x19177c = 0x0; _0x19177c < _0x4900b6['team']['length']; _0x19177c++) {
                            if (_0x4900b6['team'][_0x19177c] != _0x117b6e['me']['id']) {
                                for (var _0x56939c = 0x0; _0x56939c < _0x117b6e['objects']['length']; _0x56939c++) {
                                    if (_0x117b6e['objects'][_0x56939c]['id'] == _0x4900b6['team'][_0x19177c]) {
                                        _0x396722['team']['push'](_0x117b6e['objects'][_0x56939c]);
                                    }
                                }
                            }
                        }
                    }
                }
                if (_0x4900b6['sprinting'] !== undefined) {
                    _0x396722['sprinting'] = _0x4900b6['sprinting'];
                }
                if (_0x4900b6['teleported'] !== undefined) {
                    _0x396722['old']['position'] = _0x396722['actualNew']['position']['clone']();
                    _0x396722['old']['rotation'] = _0x396722['new']['rotation'];
                    _0x396722['actualOld']['position'] = _0x396722['actualNew']['position']['clone']();
                    _0x396722['new']['position'] = _0x396722['actualNew']['position']['clone']();
                    _0x396722['visual']['position'] = _0x396722['actualNew']['position']['clone']();
                    _0x396722['visual']['rotation'] = _0x396722['new']['rotation'];
                    if (_0x396722 == _0x117b6e['me']) {
                        _0x4f1972 = 0x98967f;
                        _0x240665 = 0x3e7;
                        _0x2a3fa5['camera']['position'] = new _0x117b6e['Vector2'](_0x117b6e['me']['visual']['position']['x'], _0x117b6e['me']['visual']['position']['y']);
                    }
                }
                if (_0x396722 == _0x117b6e['me']) {
                    if (!_0x397a0b) {
                        _0x18ff70['radius'] = _0x1d1091['radius'];
                        _0x18ff70['position'] = _0x1d1091['position'];
                    }
                    if (_0x4900b6['specs'] !== undefined) {
                        _0x396722['spectators'] = _0x4900b6['specs'];
                        if (_0x396722['spectators'] == 0x0) {
                            _0x4509c1['opacity'] = 0x0;
                        } else {
                            _0x4509c1['opacity'] = 0x1;
                            _0xe84c9d['text'] = _0x396722['spectators']['toString']();
                        }
                    }
                    _0x397a0b = ![];
                    if (_0x4900b6['health'] !== undefined) {
                        _0x483640['text'] = _0x4900b6['health']['toString']();
                        _0x45b36f['width'] = _0x4900b6['health'] * 0x3;
                        if (_0x396722['knocked']) {
                            _0x45b36f['color'] = '#C00';
                            _0x45b36f['width'] /= 0x2;
                        } else {
                            _0x45b36f['color'] = '#0C0';
                        }
                    }
                    if (_0x4900b6['shield'] !== undefined) {
                        _0x23fdd6['text'] = _0x4900b6['shield']['toString']();
                        _0x47a409['width'] = _0x4900b6['shield'] * 0x3;
                    }
                    if (_0x117b6e['spectating'] && _0x4900b6['selectedWeapon'] !== undefined) {
                        _0x6203d7 = _0x4900b6['selectedWeapon'];
                    }
                }
                if (_0x4900b6['knocked'] !== undefined) {
                    if (_0x4900b6['knocked']) {
                        _0x396722['head']['image'] = _0x52811c('revive');
                    } else {
                        _0x396722['head']['image'] = _0x396722['headImage'];
                    }
                    _0x396722['knocked'] = _0x4900b6['knocked'];
                }
                if (_0x4900b6['health'] !== undefined) {
                    _0x396722['health'] = _0x4900b6['health'];
                }
                if (_0x4900b6['shield'] !== undefined) {
                    _0x396722['shield'] = _0x4900b6['shield'];
                }
                if (_0x4900b6['hLost'] !== undefined) {
                    var _0xbe7f06 = new _0x117b6e['object']();
                    _0xbe7f06['position']['x'] = (Math['random']() * 0x2 - 0x1) * 0x1e;
                    _0xbe7f06['position']['y'] = (Math['random']() * 0x2 - 0x1) * 0xf - 0x3c;
                    _0xbe7f06['original'] = {
                        'x': _0xbe7f06['position']['x'],
                        'y': _0xbe7f06['position']['y']
                    };
                    _0xbe7f06['t'] = 0x1;
                    var _0x53e058 = new _0x117b6e['strokeText'](_0x4900b6['hLost'], 0x0, 0x0, '#333', 'Arial Black', 0x19, 'bold', 0x1, 'center');
                    _0x53e058['lineWidth'] = 0x6;
                    _0xbe7f06['add'](_0x53e058);
                    _0xbe7f06['add'](new _0x117b6e['text'](_0x4900b6['hLost'], 0x0, 0x0, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center'));
                    _0x396722['damages']['push'](_0xbe7f06);
                    _0x220553['add'](_0xbe7f06);
                }
                if (_0x4900b6['sLost'] !== undefined) {
                    var _0xbe7f06 = new _0x117b6e['object']();
                    _0xbe7f06['position']['x'] = (Math['random']() * 0x2 - 0x1) * 0x1e;
                    _0xbe7f06['position']['y'] = (Math['random']() * 0x2 - 0x1) * 0xf - 0x3c;
                    _0xbe7f06['original'] = {
                        'x': _0xbe7f06['position']['x'],
                        'y': _0xbe7f06['position']['y']
                    };
                    _0xbe7f06['t'] = 0x1;
                    var _0x53e058 = new _0x117b6e['strokeText'](_0x4900b6['sLost'], 0x0, 0x0, '#333', 'Arial Black', 0x19, 'bold', 0x1, 'center');
                    _0x53e058['lineWidth'] = 0x6;
                    _0xbe7f06['add'](_0x53e058);
                    _0xbe7f06['add'](new _0x117b6e['text'](_0x4900b6['sLost'], 0x0, 0x0, _0x107c76, 'Arial Black', 0x19, 'bold', 0x1, 'center'));
                    _0x396722['damages']['push'](_0xbe7f06);
                    _0x220553['add'](_0xbe7f06);
                }
                _0x396722['oldJump'] = _0x396722['currentJump'];
                if (_0x4900b6['jump'] !== undefined) {
                    _0x396722['newJump'] = _0x4900b6['jump'];
                    if (_0x4900b6['jump'] == 0x8 - 0x6) {
                        if (_0x396722['visual']['parent'] != null) {
                            _0x396722['visual']['parent']['remove'](_0x396722['visual']);
                        }
                        _0x396722['visual']['parent'] = null;
                        _0x2cb9c6['add'](_0x396722['visual']);
                    } else if (_0x4900b6['jump'] == 0x8 + 0x6) {
                        if (_0x396722['visual']['parent'] != null) {
                            _0x396722['visual']['parent']['remove'](_0x396722['visual']);
                        }
                        _0x396722['visual']['parent'] = null;
                        _0x2a3fa5['add'](_0x396722['visual']);
                    }
                    if (_0x396722['newJump'] < _0x396722['jumpTicks'] / 0x2 && _0x396722['oldJump'] > _0x396722['jumpTicks'] / 0x2) {
                        _0x396722['oldJump'] = _0x396722['jumpTicks'] - _0x396722['oldJump'];
                    }
                } else {
                    _0x396722['newJump'] = 0x0;
                    _0x396722['currentJump'] = 0x0;
                    if (_0x396722['oldJump'] > _0x396722['jumpTicks'] / 0x2) {
                        _0x396722['oldJump'] = _0x396722['jumpTicks'] - _0x396722['oldJump'];
                        _0x396722['resetOldJump'] = !![];
                        var _0x519580 = 0.5;
                        for (var _0x19177c = 0x0; _0x19177c < 0x8 && _0x5272a6 == 0x0; _0x19177c++) {
                            var _0x44d20d = Math['floor'](Math['random']() * 0x2);
                            _0x20b307['add'](new _0x117b6e['customParticle'](new _0x117b6e['image'](_0x52811c('smoke' + _0x44d20d), _0x396722['visual']['position']['x'] + Math['random']() * 0x1e - 0xf, _0x396722['visual']['position']['y'] + Math['random']() * 0x1e - 0xf, 0x32 + Math['random']() * 0x14, 0x32 + Math['random']() * 0x14, _0x519580), (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 0x1 - _0x519580, Math['random']() * 0x2 - 0x1, Math['random']() * 0x2 - 0x1));
                        }
                    }
                }
                if (_0x4900b6['la'] !== undefined) {
                    _0x396722['damageIndicator']['rotation'] = _0x4900b6['la'] / 0x64 + Math['PI'] / 0x2;
                    _0x396722['damageIndicator']['opacity'] = 0.5;
                }
                if (_0x4900b6['steadying'] !== undefined) {
                    _0x396722['steadying'] = _0x4900b6['steadying'];
                    if (!_0x396722['steadying']) {
                        _0x396722['newWeaponPosition']['y'] = 0x0;
                        _0x396722['newWeaponPosition']['x'] = 0x0;
                    }
                    if (_0x4900b6['selectedWeapon'] === undefined) {
                        _0x4900b6['selectedWeapon'] = _0x396722['selectedWeapon'];
                    }
                }
                if (_0x4900b6['building'] !== undefined && _0x4900b6['building'] != _0x396722['building']) {
                    _0x396722['weapon']['opacity'] = _0x396722['switchOpacity'];
                    _0x396722['building'] = _0x4900b6['building'];
                    if (_0x4900b6['selectedWeapon'] === undefined) {
                        _0x4900b6['selectedWeapon'] = _0x396722['selectedWeapon'];
                    }
                }
                if (_0x4900b6['mat'] !== undefined) {
                    _0x396722['mat'] = _0x4900b6['mat'];
                    if (_0x396722 == _0x117b6e['me']) {
                        _0x396722['material'] = _0x32a36c[_0x4900b6['mat']];
                        for (var _0x19177c = 0x0; _0x19177c < _0x5c310['length']; _0x19177c++) {
                            _0x5c310[_0x19177c]['color'] = '#000';
                        }
                        _0x5c310[0x2 - _0x4900b6['mat']]['color'] = '#77F';
                    }
                    if (_0x396722['canBuild']) {
                        _0x396722['buildingPreview']['image'] = _0x52811c('blue' + _0x396722['material']);
                    } else {
                        _0x396722['buildingPreview']['image'] = _0x52811c('red' + _0x396722['material']);
                    }
                }
                if (_0x4900b6['mats'] !== undefined) {
                    if (_0x396722 == _0x117b6e['me']) {
                        for (var _0x19177c = 0x0; _0x19177c < _0x4900b6['mats']['length']; _0x19177c++) {
                            if (_0x396722['materials'][_0x19177c] < _0x4900b6['mats'][_0x19177c]) {
                                var _0x49af7d = new _0x117b6e['image'](_0x52811c(_0x32a36c[_0x19177c]), -(0x2 - _0x19177c) * _0x4b2a6b * 0.9 - _0x4b2a6b + (_0x4b2a6b - _0x576100) / 0x2, -_0x4b2a6b * 2.5 - 0x6e, 0x32, 0x32);
                                _0x49af7d['add'](new _0x117b6e['text']('+' + (_0x4900b6['mats'][_0x19177c] - _0x396722['materials'][_0x19177c]), 0x0, 0x28, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center'));
                                if (_0x4900b6['mats'][_0x19177c] - _0x396722['materials'][_0x19177c] == 0x5) {
                                    _0x49af7d['objects'][_0x49af7d['objects']['length'] - 0x1]['canvas'] = _0x5e6c0d;
                                }
                                var _0x257511 = new _0x117b6e['customParticle'](_0x49af7d, 0x0, 0.7, 0x0, -0.6);
                                _0x257511['turn'] = 0x0;
                                _0x257511['widthFade'] = 0x0;
                                _0x257511['heightFade'] = 0x0;
                                _0x573d64['add'](_0x257511);
                                _0x49af7d['rotation'] = 0x0;
                            }
                        }
                    }
                    _0x396722['materials'] = _0x4900b6['mats'];
                }
                if (_0x4900b6['canBuild'] !== undefined) {
                    _0x396722['canBuild'] = _0x4900b6['canBuild'];
                    if (_0x396722['canBuild']) {
                        _0x396722['buildingPreview']['image'] = _0x52811c('blue' + _0x396722['material']);
                    } else {
                        _0x396722['buildingPreview']['image'] = _0x52811c('red' + _0x396722['material']);
                    }
                }
                if (_0x4900b6['rs'] !== undefined) {
                    _0x496a8f('reload', _0x117b6e['me']['visual']['position'], _0x396722['visual']['position']);
                }
                if (_0x4900b6['frt'] !== undefined) {
                    _0x396722['fullReload'] = _0x4900b6['frt'];
                }
                if (_0x4900b6['rt'] !== undefined) {
                    _0x396722['oldReloadTime'] = _0x396722['reloadTime'];
                    _0x396722['newReloadTime'] = _0x4900b6['rt'];
                    if (_0x396722['newReloadTime'] > _0x396722['oldReloadTime']) {
                        _0x396722['oldReloadTime'] = _0x396722['newReloadTime'];
                    }
                    if (_0x396722['reloadTime'] == 0x0) {
                        _0x396722['oldReloadTime'] = _0x4900b6['rt'];
                    }
                    if (_0x56adf6['indexOf'](_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type']) != -0x1) {
                        if (_0x4900b6['rt'] > 0x0) {
                            if (!_0x396722['healing']) {
                                _0x396722['healSin'] = 0x0;
                            }
                            _0x396722['healing'] = !![];
                        }
                    }
                    if (_0x4900b6['rt'] == -0xa) {
                        _0x396722['reloadTime'] = _0x396722['oldReloadTime'] = _0x396722['newReloadTime'] = 0x0;
                        _0x291294['opacity'] = 0x0;
                    }
                } else {
                    if (_0x396722['newReloadTime'] == 0x0) {
                        _0x396722['oldReloadTime'] = 0x0;
                    }
                }
                if (_0x4900b6['v'] !== undefined) {
                    _0x396722['inVehicle'] = _0x4900b6['v'];
                }
                if (_0x4900b6['weaponSlots'] !== undefined) {
                    _0x396722['weaponSlots'] = _0x4900b6['weaponSlots'];
                    _0x396722['updateWeaponSlots'] = !![];
                    _0x396722['resetSelectedWeapon'] = !![];
                }
                if (_0x4900b6['wAmmo'] !== undefined) {
                    _0x396722['wAmmo'] = _0x4900b6['wAmmo'];
                    _0x396722['updateWeaponSlots'] = !![];
                }
                if (_0x4900b6['ammo'] !== undefined) {
                    _0x396722['ammo'] = _0x4900b6['ammo'];
                    _0x396722['updateWeaponSlots'] = !![];
                    if (_0x396722 == _0x117b6e['me']) {
                        for (var _0x19177c = 0x0; _0x19177c < _0x2af41a['length']; _0x19177c++) {
                            _0x2af41a[0x3 - _0x19177c]['text']['text'] = _0x396722['ammo'][_0x19177c]['toString']();
                        }
                    }
                }
                if (_0x396722 == _0x117b6e['me'] && _0x396722['updateWeaponSlots']) {
                    _0x4900b6['weaponSlots'] = _0x396722['weaponSlots'];
                    _0x4900b6['wAmmo'] = _0x396722['wAmmo'];
                    if (_0x396722 == _0x117b6e['me'] && !_0x117b6e['spectating'] && _0x396722['weaponSlots'][_0x6203d7]['type'] == 'empty') {
                        for (var _0x19177c = _0x6203d7; _0x19177c >= 0x0; _0x19177c--) {
                            if (_0x396722['weaponSlots'][_0x19177c]['type'] != 'empty') {
                                _0x6203d7 = _0x19177c;
                                _0x117b6e['currentPackets']['push']({
                                    'type': 'select',
                                    'weapon': _0x6203d7
                                });
                                break;
                            }
                        }
                    }
                    var _0x3aca3f = 0x1e;
                    for (var _0x19177c = 0x0; _0x19177c < _0x4900b6['weaponSlots']['length'] && _0x19177c < _0x1bc362['length']; _0x19177c++) {
                        var _0x23d235 = _0x4900b6['weaponSlots'][_0x19177c];
                        var _0x40d015 = new _0x117b6e['image'](_0x52811c('inv' + _0x23d235['rarity']), 0x0, 0x0, _0x4b2a6b, _0x4b2a6b);
                        var _0x211480 = new _0x117b6e['text'](_0x45786e('Weapon Slot ' + (_0x19177c + 0x1))['toString'](), 0x0, _0x4b2a6b * 0.75, '#FFF', 'Arial Black', _0x3aca3f - 0x7, '', 0x1, 'center');
                        var _0x2992d2 = 0x20;
                        _0x211480['add'](new _0x117b6e['strokeRectangle'](0x0, 0x0, _0x2992d2, _0x2992d2, '#FFF', 0x3));
                        _0x40d015['add'](_0x211480);
                        _0x211480['size'] = 0.8;
                        if (_0x23d235['type'] == 'empty') {
                            _0x40d015['remove'](_0x211480);
                            _0x40d015 = new _0x117b6e['rectangle'](0x0, 0x0, _0x4b2a6b, _0x4b2a6b, '#000', 0.2);
                            _0x40d015['add'](_0x211480);
                        } else if (_0x23d235['type'] == 'pickaxe') {
                            var _0x474512 = new _0x117b6e['object']();
                            _0x474512['position'] = new _0x117b6e['Vector2'](0x2, 0x5);
                            var _0x1b956a = new _0x117b6e['image'](_0x396722['pickaxeImage'], 0x0, 0x0, _0x4b2a6b * 0.9, _0x4b2a6b * 0.9);
                            _0x474512['add'](_0x1b956a);
                            _0x1b956a['rotation'] = -Math['PI'] * 0xb / 0x10;
                            _0x40d015['add'](_0x474512);
                        } else if (_0x23d235['type'] == 'scar' || _0x23d235['type'] == 'bolt' || _0x23d235['type'] == 'lmg' || _0x23d235['type'] == 'shotgun' || _0x23d235['type'] == 'heavy' || _0x23d235['type'] == 'smg' || _0x23d235['type'] == 'ump' || _0x23d235['type'] == 'rifle' || _0x23d235['type'] == 'ar-15' || _0x23d235['type'] == 'scoped ar' || _0x23d235['type'] == 'deagle' || _0x23d235['type'] == 'rpg' || _0x23d235['type'] == 'famas' || _0x23d235['type'] == 'tommy gun' || _0x23d235['type'] == 'drum' || _0x23d235['type'] == 'musket' || _0x23d235['type'] == 'heavy sniper' || _0x23d235['type'] == 'ak47' || _0x23d235['type'] == 'combat' || _0x23d235['type'] == 'silencedpistol' || _0x23d235['type'] == 'aug' || _0x23d235['type'] == 'burst shotgun') {
                            var _0x12a61f = new _0x117b6e['object']();
                            _0x12a61f['position'] = new _0x117b6e['Vector2'](-0x2, 0x0);
                            var _0x5b2e1e = new _0x117b6e['image'](_0x52811c(_0x23d235['type']), 0x0, 0x0, _0x4b2a6b * 1.04, _0x4b2a6b * 1.04);
                            _0x12a61f['add'](_0x5b2e1e);
                            _0x5b2e1e['rotation'] = -Math['PI'] * 0xc / 0x10 + Math['PI'];
                            if (_0x23d235['type'] == 'deagle') {
                                _0x5b2e1e['size'] = 0.8;
                            }
                            _0x40d015['add'](_0x12a61f);
                            if (_0x4900b6['wAmmo'][_0x19177c - 0x1] >= 0x0) {
                                var _0x4ff21c = new _0x117b6e['strokeText']((_0x396722['ammo'][_0xf034b[_0x23d235['type']]] + _0x4900b6['wAmmo'][_0x19177c - 0x1])['toString'](), -_0x4b2a6b / 0x2 + _0x3aca3f / 0x3, _0x4b2a6b / 0x2 - _0x3aca3f / 0x2, '#000', 'Arial Black', _0x3aca3f - 0x7, '', 0x1, 'left');
                                _0x4ff21c['lineWidth'] = 0x4;
                                _0x4ff21c['add'](new _0x117b6e['text']((_0x396722['ammo'][_0xf034b[_0x23d235['type']]] + _0x4900b6['wAmmo'][_0x19177c - 0x1])['toString'](), 0x0, 0x0, '#FFF', 'Arial Black', _0x3aca3f - 0x7, '', 0x1, 'left'));
                                _0x40d015['add'](_0x4ff21c);
                                var _0x1fbb2d = new _0x117b6e['image'](_0x52811c('inventoryammo' + _0xf034b[_0x23d235['type']]), _0x4b2a6b / 0x2 - _0x3aca3f / 0x2 - 0x5, -_0x4b2a6b / 0x2 + _0x3aca3f / 0x2 + 0x5, _0x3aca3f, _0x3aca3f);
                                _0x1fbb2d['rotation'] = Math['PI'] / 0x5;
                                _0x40d015['add'](_0x1fbb2d);
                            }
                        } else if (_0x23d235['type'] == 'mini' || _0x23d235['type'] == 'pot' || _0x23d235['type'] == 'bandages' || _0x23d235['type'] == 'medkit' || _0x23d235['type'] == 'snowball') {
                            var _0x12a61f = new _0x117b6e['object']();
                            _0x12a61f['position'] = new _0x117b6e['Vector2'](-0x2, 0x0);
                            var _0x5b2e1e = new _0x117b6e['image'](_0x52811c(_0x23d235['type']), 0x0, 0x0, _0x4b2a6b * 0.7, _0x4b2a6b * 0.7);
                            if (_0x23d235['type'] == 'bandages') {
                                _0x5b2e1e['position']['x'] += 0x5;
                            }
                            _0x12a61f['add'](_0x5b2e1e);
                            _0x5b2e1e['rotation'] = 0x0;
                            _0x40d015['add'](_0x12a61f);
                            if (_0x4900b6['wAmmo'][_0x19177c - 0x1] >= 0x0) {
                                var _0x4ff21c = new _0x117b6e['strokeText'](_0x4900b6['wAmmo'][_0x19177c - 0x1]['toString'](), -_0x4b2a6b / 0x2 + _0x3aca3f / 0x3, _0x4b2a6b / 0x2 - _0x3aca3f / 0x2, '#000', 'Arial Black', _0x3aca3f - 0x7, '', 0x1, 'left');
                                _0x4ff21c['lineWidth'] = 0x4;
                                _0x4ff21c['add'](new _0x117b6e['text'](_0x4900b6['wAmmo'][_0x19177c - 0x1]['toString'](), 0x0, 0x0, '#FFF', 'Arial Black', _0x3aca3f - 0x7, '', 0x1, 'left'));
                                _0x40d015['add'](_0x4ff21c);
                            }
                        }
                        if (_0x19177c == _0x6203d7) {
                            if (!_0x454358) _0x40d015['position']['y'] -= 0xa;
                            _0x2efa04['position']['y'] = _0x40d015['position']['y'] - _0x4b2a6b;
                        }
                        _0x1bc362[_0x19177c]['parent']['add'](_0x40d015);
                        _0x1bc362[_0x19177c]['parent']['remove'](_0x1bc362[_0x19177c]);
                        _0x1bc362[_0x19177c]['unlink']();
                        _0x1bc362[_0x19177c] = _0x40d015;
                    }
                    _0x396722['updateWeaponSlots'] = ![];
                }
                if (_0x396722['resetSelectedWeapon']) {
                    if (_0x4900b6['selectedWeapon'] === undefined) {
                        _0x4900b6['selectedWeapon'] = _0x396722['selectedWeapon'];
                    }
                }
                if (_0x4900b6['selectedWeapon'] !== undefined) {
                    if (_0x4900b6['selectedWeapon'] != _0x396722['selectedWeapon'] && !_0x396722['building']) {
                        _0x396722['weapon']['opacity'] = _0x396722['switchOpacity'];
                    }
                    _0x396722['selectedWeapon'] = _0x4900b6['selectedWeapon'];
                    if (_0x396722 == _0x117b6e['me'] && _0x396722['selectedWeapon'] != _0x6203d7 && !_0x396722['knocked']) {
                        _0x117b6e['currentPackets']['push']({
                            'type': 'select',
                            'weapon': _0x6203d7
                        });
                    }
                    if (_0x396722 == _0x117b6e['me']) {
                        _0x289838 = !![];
                    }
                    if (_0x52811c(_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type']) != null) {
                        _0x396722['hands']['remove'](_0x396722['weapon']);
                        _0x396722['hands']['remove'](_0x396722['hand2']);
                        _0x396722['hands']['remove'](_0x396722['hand1']);
                        if (_0x396722['weaponSkin'] != '' && _0x46dddc['indexOf'](_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type']) >= 0x0) {
                            _0x396722['weapon']['image'] = _0x3c7d0a(_0x396722['weaponSkin'], _0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type']);
                        } else {
                            _0x396722['weapon']['image'] = _0x52811c(_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type']);
                        }
                        if (_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] == 'pickaxe' && !_0x396722['building']) {
                            if (_0x396722['hair'] == 0x4 || _0x396722['hair'] == 0x7) {
                                _0x396722['weapon']['image'] = _0x52811c('custompic' + (_0x396722['hair'] - 0x4));
                            } else {
                                _0x396722['weapon']['image'] = _0x396722['pickaxeImage'];
                            }
                            _0x396722['hands']['add'](_0x396722['hand1']);
                            _0x396722['hands']['add'](_0x396722['weapon']);
                            _0x396722['hands']['add'](_0x396722['hand2']);
                            _0x396722['weapon']['position']['x'] = 0x18;
                            _0x396722['weapon']['position']['y'] = 0xa;
                            _0x396722['weapon']['rotation'] = Math['PI'] / 0x2 + 0.01;
                            _0x396722['hand1']['position']['x'] = _0x396722['handXOffset'];
                            _0x396722['hand2']['position']['x'] = _0x396722['handXOffset'] - 0x5;
                            _0x396722['weapon']['size'] = 0x1;
                            if (_0x396722['knocked']) {
                                _0x396722['weapon']['size'] = 0x0;
                                _0x396722['hand1']['position']['x'] = _0x396722['handXOffset'];
                                _0x396722['hand2']['position']['x'] = _0x396722['handXOffset'];
                            }
                            if (_0x396722 == _0x117b6e['me']) {
                                _0x289838 = ![];
                            }
                        } else {
                            if (!_0x396722['healing']) {
                                _0x396722['hand1']['position']['x'] = _0x396722['handXOffset'];
                                _0x396722['hand2']['position']['x'] = _0x396722['handXOffset'] + 0x4;
                            }
                            _0x396722['hand1']['position']['y'] = _0x396722['handYOffset'];
                            if (_0x396722['steadying'] && !_0x396722['building']) {
                                _0x396722['hands']['add'](_0x396722['hand1']);
                                _0x396722['hands']['add'](_0x396722['hand2']);
                                _0x396722['hands']['add'](_0x396722['weapon']);
                                _0x396722['hand1']['position']['x'] = _0x396722['handXOffset'] + 0x6;
                                _0x396722['hand1']['position']['y'] = _0x396722['handYOffset'] - 0x5;
                                if (_0x52811c('top' + _0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type']) != null) {
                                    if (_0x396722['weaponSkin'] != '' && _0x46dddc['indexOf'](_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type']) >= 0x0) {
                                        _0x396722['weapon']['image'] = _0x3c7d0a(_0x396722['weaponSkin'], 'top' + _0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type']);
                                    } else {
                                        _0x396722['weapon']['image'] = _0x52811c('top' + _0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type']);
                                    }
                                }
                            } else if (!_0x396722['building']) {
                                _0x396722['hands']['add'](_0x396722['hand1']);
                                _0x396722['hands']['add'](_0x396722['weapon']);
                                _0x396722['hands']['add'](_0x396722['hand2']);
                                if (_0x396722['weaponSkin'] != '' && _0x46dddc['indexOf'](_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type']) >= 0x0) {
                                    _0x396722['weapon']['image'] = _0x3c7d0a(_0x396722['weaponSkin'], _0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type']);
                                } else {
                                    _0x396722['weapon']['image'] = _0x52811c(_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type']);
                                }
                            }
                            if (_0x396722['building']) {
                                _0x396722['hands']['add'](_0x396722['hand1']);
                                _0x396722['hands']['add'](_0x396722['hand2']);
                                _0x396722['hands']['add'](_0x396722['weapon']);
                                _0x396722['weapon']['image'] = _0x52811c('blueprint');
                                _0x396722['hand2']['position']['x'] = _0x396722['handXOffset'] - 0x5;
                                _0x396722['hand1']['position']['x'] = _0x396722['handXOffset'] - 0x5;
                                _0x396722['weapon']['position']['x'] = 0x1e;
                                _0x396722['weapon']['position']['y'] = 0x0;
                                _0x396722['weapon']['size'] = 0.56;
                                _0x396722['weapon']['rotation'] = Math['PI'] / 0x2;
                                if (_0x396722 == _0x117b6e['me']) {
                                    _0x289838 = ![];
                                }
                            } else {
                                if (!_0x396722['healing']) {
                                    _0x396722['weapon']['position']['x'] = 0x18;
                                    _0x396722['weapon']['position']['y'] = -0xd;
                                }
                                _0x396722['weapon']['rotation'] = Math['PI'] / 0x2 + 0.2;
                                _0x396722['weapon']['size'] = 0x1;
                                _0x396722['originalWeaponX'] = 0x1c;
                                var _0x23d235 = _0x396722['weaponSlots'][_0x396722['selectedWeapon']];
                                if (_0x396722 == _0x117b6e['me']) {
                                    _0x19ed5a['text'] = _0x396722['ammo'][_0xf034b[_0x23d235['type']]];
                                    _0x451d6f['text'] = _0x396722['wAmmo'][_0x396722['selectedWeapon'] - 0x1];
                                    _0x40b502['image'] = _0x52811c('inventoryammo' + _0xf034b[_0x23d235['type']]);
                                }
                                if (_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] == 'bolt') {
                                    if (!_0x396722['steadying']) _0x396722['weapon']['position']['x'] = 0x1e;
                                    else {
                                        _0x396722['weapon']['position']['y'] = -0x16;
                                        _0x396722['weapon']['position']['x'] = 0x1a;
                                    }
                                } else if (_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] == 'lmg') {
                                    if (!_0x396722['steadying']) {
                                        _0x396722['weapon']['position']['x'] = 0x1c;
                                        _0x396722['weapon']['position']['y'] = -0x9;
                                        _0x396722['weapon']['rotation'] = Math['PI'] / 0x2 + 0.3;
                                        _0x396722['weapon']['size'] = 1.1;
                                    }
                                } else if (_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] == 'shotgun' || _0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] == 'heavy' || _0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] == 'drum') {
                                    if (!_0x396722['steadying']) {
                                        _0x396722['weapon']['position']['x'] = 0x1c;
                                        _0x396722['weapon']['position']['y'] = -0x9;
                                        _0x396722['weapon']['rotation'] = Math['PI'] / 0x2 + 0.2;
                                        _0x396722['weapon']['size'] = 1.05;
                                    }
                                } else if (_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] == 'smg' || _0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] == 'ump') {
                                    if (!_0x396722['steadying']) {
                                        _0x396722['weapon']['position']['x'] = 0x1c;
                                        _0x396722['weapon']['position']['y'] = -0x9;
                                        _0x396722['weapon']['rotation'] = Math['PI'] / 0x2 + 0.2;
                                        _0x396722['weapon']['size'] = 1.05;
                                    }
                                } else if (_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] == 'rpg') {
                                    if (!_0x396722['steadying']) {
                                        _0x396722['weapon']['position']['x'] = 0x1c;
                                        _0x396722['weapon']['size'] = 1.1;
                                        _0x396722['weapon']['rotation'] = Math['PI'] / 0x2 + 0.3;
                                    }
                                } else if (_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] == 'deagle') {
                                    if (!_0x396722['steadying']) {
                                        _0x396722['weapon']['position']['x'] = 0x1c;
                                        _0x396722['weapon']['position']['y'] = 0x0;
                                        _0x396722['weapon']['rotation'] = Math['PI'] / 0x2 + 0.2;
                                        _0x396722['weapon']['size'] = 0.7;
                                    }
                                } else if (_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] == 'tommy gun') {
                                    if (!_0x396722['steadying']) {
                                        _0x396722['weapon']['position']['x'] = 0x1e;
                                        _0x396722['weapon']['size'] = 1.15;
                                    }
                                } else if (_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] == 'heavy sniper') {
                                    if (!_0x396722['steadying']) {
                                        _0x396722['weapon']['position']['x'] = 0x1c;
                                        _0x396722['weapon']['size'] = 1.05;
                                    }
                                } else if (_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] == 'mini') {
                                    _0x396722['hands']['remove'](_0x396722['weapon']);
                                    _0x396722['hands']['remove'](_0x396722['hand2']);
                                    _0x396722['hands']['remove'](_0x396722['hand1']);
                                    _0x396722['hands']['add'](_0x396722['hand1']);
                                    _0x396722['hands']['add'](_0x396722['hand2']);
                                    _0x396722['hands']['add'](_0x396722['weapon']);
                                    if (!_0x396722['healing']) {
                                        _0x396722['hand1']['position']['x'] = _0x396722['handXOffset'] - 0x3;
                                        _0x396722['hand2']['position']['x'] = _0x396722['handXOffset'] - 0x3;
                                        _0x396722['weapon']['position']['x'] = 0x1c;
                                    }
                                    _0x396722['weapon']['position']['y'] = 0x5;
                                    _0x396722['weapon']['size'] = 0.5;
                                    _0x396722['weapon']['rotation'] = Math['PI'] / 0x2 - 0.1;
                                    _0x396722['healRotations'] = 0x2;
                                    if (_0x396722 == _0x117b6e['me']) _0x289838 = ![];
                                } else if (_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] == 'pot') {
                                    _0x396722['hands']['remove'](_0x396722['weapon']);
                                    _0x396722['hands']['remove'](_0x396722['hand2']);
                                    _0x396722['hands']['remove'](_0x396722['hand1']);
                                    _0x396722['hands']['add'](_0x396722['hand1']);
                                    _0x396722['hands']['add'](_0x396722['hand2']);
                                    _0x396722['hands']['add'](_0x396722['weapon']);
                                    if (!_0x396722['healing']) {
                                        _0x396722['hand1']['position']['x'] = _0x396722['handXOffset'] - 0x3;
                                        _0x396722['hand2']['position']['x'] = _0x396722['handXOffset'] - 0x3;
                                        _0x396722['weapon']['position']['x'] = 0x1c;
                                    }
                                    _0x396722['weapon']['position']['y'] = 0x2;
                                    _0x396722['weapon']['size'] = 0.5;
                                    _0x396722['weapon']['rotation'] = Math['PI'] / 0x2 - 0.1;
                                    _0x396722['healRotations'] = 0x5;
                                    if (_0x396722 == _0x117b6e['me']) _0x289838 = ![];
                                } else if (_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] == 'bandages') {
                                    _0x396722['hands']['remove'](_0x396722['weapon']);
                                    _0x396722['hands']['remove'](_0x396722['hand2']);
                                    _0x396722['hands']['remove'](_0x396722['hand1']);
                                    _0x396722['hands']['add'](_0x396722['hand1']);
                                    _0x396722['hands']['add'](_0x396722['hand2']);
                                    _0x396722['hands']['add'](_0x396722['weapon']);
                                    if (!_0x396722['healing']) {
                                        _0x396722['hand1']['position']['x'] = _0x396722['handXOffset'] - 0x3;
                                        _0x396722['hand2']['position']['x'] = _0x396722['handXOffset'] - 0x3;
                                        _0x396722['weapon']['position']['x'] = 0xf;
                                    }
                                    _0x396722['originalWeaponX'] = 0xf;
                                    _0x396722['weapon']['position']['y'] = 0x0;
                                    _0x396722['weapon']['size'] = 0.5;
                                    _0x396722['weapon']['rotation'] = Math['PI'] * 0x3 / 0x2 + 0.05;
                                    _0x396722['healRotations'] = 0x3;
                                    if (_0x396722 == _0x117b6e['me']) _0x289838 = ![];
                                } else if (_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] == 'medkit') {
                                    _0x396722['hands']['remove'](_0x396722['weapon']);
                                    _0x396722['hands']['remove'](_0x396722['hand2']);
                                    _0x396722['hands']['remove'](_0x396722['hand1']);
                                    _0x396722['hands']['add'](_0x396722['hand1']);
                                    _0x396722['hands']['add'](_0x396722['hand2']);
                                    _0x396722['hands']['add'](_0x396722['weapon']);
                                    if (!_0x396722['healing']) {
                                        _0x396722['hand1']['position']['x'] = _0x396722['handXOffset'] - 0x3;
                                        _0x396722['hand2']['position']['x'] = _0x396722['handXOffset'] - 0x3;
                                        _0x396722['weapon']['position']['x'] = 0x1c;
                                    }
                                    _0x396722['weapon']['position']['y'] = 0x2;
                                    _0x396722['weapon']['size'] = 0.5;
                                    _0x396722['weapon']['rotation'] = Math['PI'] / 0x2 - 0.1;
                                    _0x396722['healRotations'] = 0x5;
                                    if (_0x396722 == _0x117b6e['me']) _0x289838 = ![];
                                } else if (_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type'] == 'snowball') {
                                    _0x396722['hands']['remove'](_0x396722['weapon']);
                                    _0x396722['hands']['remove'](_0x396722['hand2']);
                                    _0x396722['hands']['remove'](_0x396722['hand1']);
                                    _0x396722['hands']['add'](_0x396722['hand1']);
                                    _0x396722['hands']['add'](_0x396722['hand2']);
                                    _0x396722['hands']['add'](_0x396722['weapon']);
                                    if (!_0x396722['healing']) {
                                        _0x396722['hand1']['position']['x'] = _0x396722['handXOffset'] - 0x3;
                                        _0x396722['hand2']['position']['x'] = _0x396722['handXOffset'] - 0x3;
                                        _0x396722['weapon']['position']['x'] = 0x1b;
                                        _0x396722['weapon']['position']['y'] = 0x14;
                                    }
                                    _0x396722['weapon']['size'] = 0.5;
                                    _0x396722['weapon']['rotation'] = Math['PI'] / 0x2 - 0.1;
                                    _0x396722['healRotations'] = 0x5;
                                    if (_0x396722 == _0x117b6e['me']) _0x289838 = ![];
                                }
                            }
                        }
                    }
                }
                _0x396722['currentWeaponPosition'] = _0x396722['weapon']['position']['clone']();
                if (_0x396722['building']) {
                    var _0x27ff06 = _0xdee85d(_0x396722['visual']['rotation']);
                    var _0x51a0ee = 0x6;
                    _0x478d05 /= _0x51a0ee;
                    var _0xa1847c = _0x478d05;
                    var _0xbb1488 = ![];
                    var _0x3d0079 = ![];
                    if (_0x27ff06 < Math['PI'] / 0x4 || _0x27ff06 > Math['PI'] * 0x7 / 0x4) {
                        _0x396722['buildingPreview']['rotation'] = 0x0;
                        _0x396722['buildingPreview']['position']['x'] = (Math['round'](_0x396722['new']['position']['x'] / _0xa1847c) + 2.5) * _0x478d05;
                        _0x396722['buildingPreview']['position']['y'] = Math['round'](_0x396722['new']['position']['y'] / _0xa1847c) * _0x478d05;
                        _0x3d0079 = !![];
                    } else if (_0x27ff06 < Math['PI'] * 0x3 / 0x4) {
                        _0x396722['buildingPreview']['rotation'] = Math['PI'] / 0x2;
                        _0x396722['buildingPreview']['position']['x'] = Math['round'](_0x396722['new']['position']['x'] / _0xa1847c) * _0x478d05;
                        _0x396722['buildingPreview']['position']['y'] = (Math['round'](_0x396722['new']['position']['y'] / _0xa1847c) + 2.5) * _0x478d05;
                        _0xbb1488 = !![];
                    } else if (_0x27ff06 < Math['PI'] * 0x5 / 0x4) {
                        _0x396722['buildingPreview']['rotation'] = 0x0;
                        _0x396722['buildingPreview']['position']['x'] = (Math['round'](_0x396722['new']['position']['x'] / _0xa1847c) - 2.5) * _0x478d05;
                        _0x396722['buildingPreview']['position']['y'] = Math['round'](_0x396722['new']['position']['y'] / _0xa1847c) * _0x478d05;
                        _0x3d0079 = !![];
                    } else {
                        _0x396722['buildingPreview']['rotation'] = Math['PI'] / 0x2;
                        _0x396722['buildingPreview']['position']['x'] = Math['round'](_0x396722['new']['position']['x'] / _0xa1847c) * _0x478d05;
                        _0x396722['buildingPreview']['position']['y'] = (Math['round'](_0x396722['new']['position']['y'] / _0xa1847c) - 2.5) * _0x478d05;
                        _0xbb1488 = !![];
                    }
                    if (_0xbb1488) {
                        _0x396722['buildingPreview']['position']['x'] += Math['round'](Math['cos'](_0x27ff06) * 0x2) * _0x478d05;
                    }
                    if (_0x3d0079) {
                        _0x396722['buildingPreview']['position']['y'] += Math['round'](Math['sin'](_0x27ff06) * 0x2) * _0x478d05;
                    }
                    _0x478d05 *= _0x51a0ee;
                }
                if (_0x4900b6['stamina'] !== undefined) {
                    _0x396722['staminaVal'] = _0x4900b6['stamina'];
                } else {
                    _0x396722['staminaVal'] = 0x64;
                }
                if (_0x396722 == _0x117b6e['me']) {
                    _0x396722['oldSpread'] = _0x396722['currentSpread'];
                    if (_0x4900b6['spread'] !== undefined) {
                        _0x396722['spread'] = _0x4900b6['spread'] / 0x64;
                    }
                    _0xbed9f0['text'] = _0x396722['name'];
                    _0x1e4c4d['text'] = _0x396722['name'];
                }
                if (_0x117b6e['spectating']) {}
                if (_0x396722 == _0x117b6e['me'] && _0x4900b6['close'] !== undefined) {
                    if (_0x4900b6['closeR'] === undefined) {
                        _0x396722['hasGroundItem'] = ![];
                    } else if (_0x4900b6['close'] != _0x396722['lastClose'] || _0x4900b6['closeR'] != _0x396722['lastCloseR']) {
                        _0x4a8d6a['weaponName']['text'] = _0x4900b6['close']['toUpperCase']();
                        _0x4a8d6a['weapon']['image'] = _0x52811c(_0x4900b6['close']);
                        _0x4a8d6a['weapon']['size'] = 1.4;
                        _0x4a8d6a['weapon']['width'] = _0x4a8d6a['weapon']['height'] = 0x64;
                        _0x4a8d6a['weapon']['rotation'] = Math['PI'] / 0x7;
                        var _0x17488a = 'Press ' + _0x45786e('Pickup 1') + '/' + _0x45786e('Pickup 2') + ' to ';
                        _0x528970['text'] = _0x17488a + 'pick up';
                        if (_0x4900b6['close'] == 'mini') {
                            _0x4a8d6a['weapon']['size'] = 0x1;
                            _0x4a8d6a['weapon']['rotation'] = 0x0;
                            _0x4a8d6a['weaponName']['text'] = 'Mini Potion';
                        } else if (_0x4900b6['close'] == 'pot') {
                            _0x4a8d6a['weapon']['size'] = 0x1;
                            _0x4a8d6a['weapon']['rotation'] = 0x0;
                            _0x4a8d6a['weaponName']['text'] = 'Potion';
                        } else if (_0x4900b6['close'] == 'bandages' || _0x4900b6['close'] == 'medkit') {
                            _0x4a8d6a['weapon']['size'] = 0x1;
                            _0x4a8d6a['weapon']['rotation'] = 0x0;
                        } else if (_0x4900b6['close'] == 'chest') {
                            _0x4a8d6a['weapon']['size'] = 0.7;
                            _0x4a8d6a['weapon']['width'] = 0x96;
                            _0x4a8d6a['weapon']['rotation'] = 0x0;
                            _0x528970['text'] = _0x17488a + 'open';
                        } else if (_0x4900b6['close'] == 'revive') {
                            _0x528970['text'] = _0x17488a + 'revive';
                            _0x4a8d6a['weapon']['rotation'] = 0x0;
                            _0x4a8d6a['weapon']['width'] = _0x4a8d6a['weapon']['height'] = 0x78;
                            _0x4a8d6a['weapon']['width'] -= 0x4;
                        } else if (_0x4900b6['close'] == 'baller') {
                            _0x4a8d6a['weapon']['size'] = 1.2;
                            _0x4a8d6a['weapon']['rotation'] = 0x0;
                            _0x4a8d6a['weapon']['width'] = _0x4a8d6a['weapon']['height'] = 0x78;
                            _0x4a8d6a['weapon']['width'] -= 0x4;
                            _0x528970['text'] = _0x17488a + 'ride';
                        }
                        _0x4849ed['text'] = _0x528970['text'];
                        _0x4a8d6a['stroke']['color'] = _0x1658b3[_0x4900b6['closeR']]['color'];
                        _0x1fa3a6['opacity'] = 0x0;
                        _0x4a8d6a['fill']['color'] = _0x1658b3[_0x4900b6['closeR']]['color'];
                        _0x396722['hasGroundItem'] = !![];
                        _0x396722['lastClose'] = _0x4900b6['close'];
                        _0x396722['lastCloseR'] = _0x4900b6['closeR'];
                        _0x4a8d6a['weaponNameStroke']['text'] = _0x4a8d6a['weaponName']['text'];
                        _0xb2abf6();
                    } else {
                        _0x396722['hasGroundItem'] = !![];
                    }
                }
                var _0x4aef4a = _0x326ba8(_0x396722['actualNew']['position'], _0x396722['actualOld']['position']);
                if (_0x396722['newJump'] <= 0x0) {
                    _0x396722['timeUntilSound'] -= _0x4aef4a;
                } else {
                    _0x396722['timeUntilSound'] = 0x1;
                }
                if (_0x396722['timeUntilSound'] <= 0x0 && _0x396722['isPreview'] === undefined && !_0x396722['inVehicle']) {
                    if (_0x396722['house'] < 0x0 && _0x595d79) {
                        _0x496a8f('christmasstep' + Math['floor'](Math['random']() * _0x1424df), _0x117b6e['me']['visual']['position'], _0x396722['visual']['position']);
                        _0x396722['timeUntilSound'] = 0x96;
                    } else {
                        _0x496a8f('step' + Math['floor'](Math['random']() * _0x1424df), _0x117b6e['me']['visual']['position'], _0x396722['visual']['position']);
                        _0x396722['timeUntilSound'] = 0x64;
                    }
                }
                if (_0x4900b6['needAmmo'] !== undefined && _0x4900b6['needAmmo'] && _0x117b6e['me']['team'] !== undefined) {
                    if (_0x117b6e['me']['team']['length'] > 0x0 && _0x396722['selectedWeapon'] != 0x0 && (_0x396722 == _0x117b6e['me'] || _0x117b6e['me']['team']['indexOf'](_0x396722) != -0x1) && _0xf034b[_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type']] <= 0x3) {
                        _0x396722['speechTimer'] = 0xf;
                        _0x396722['speechAmmo']['image'] = _0x52811c('stack' + _0xf034b[_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type']]);
                    }
                }
                if (_0x4900b6['needAmmo'] !== undefined && _0x4900b6['needAmmo'] && _0x396722['selectedWeapon'] != 0x0 && _0x117b6e['me']['infected'] != -0x1 && _0x117b6e['me']['infected'] == _0x396722['infected'] && _0xf034b[_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type']] <= 0x3) {
                    _0x396722['speechTimer'] = 0xf;
                    _0x396722['speechAmmo']['image'] = _0x52811c('stack' + _0xf034b[_0x396722['weaponSlots'][_0x396722['selectedWeapon']]['type']]);
                }
            }, function (_0xf98e87, _0x4625d7) {
                if (!_0xf98e87['dead']) {
                    if (_0x10bc7c['length'] == 0x0) {
                        _0xf98e87['oldPlayerCanvas'] = document['createElement']('canvas');
                    } else {
                        _0xf98e87['oldPlayerCanvas'] = _0x10bc7c[0x0];
                        _0x10bc7c['splice'](0x0, 0x1);
                        _0xf98e87['oldPlayerCanvas']['getContext']('2d')['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                        var _0x5b2ac9 = _0xf98e87['oldPlayerCanvas']['width'];
                        _0xf98e87['oldPlayerCanvas']['getContext']('2d')['clearRect'](-0x1, -0x1, _0x5b2ac9, _0x5b2ac9);
                    }
                    var _0x1f1346 = 0x12c;
                    var _0x437143 = new _0x117b6e['image'](_0xf98e87['oldPlayerCanvas'], 0x0, 0x0, _0x1f1346, _0x1f1346, 0x0);
                    _0xf98e87['oldPlayerCanvas']['width'] = _0x1f1346;
                    _0xf98e87['oldPlayerCanvas']['height'] = _0x1f1346;
                    var _0x3c5b09 = _0xf98e87['oldPlayerCanvas']['getContext']('2d');
                    _0x3c5b09['globalAlpha'] = 0x1;
                    _0x3c5b09['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                    _0x3c5b09['translate'](_0x1f1346 / 0x2, _0x1f1346 / 0x2);
                    _0xf98e87['sprite']['render'](_0x3c5b09, 0x1, 0x1);
                    _0xf98e87['sprite']['belowObjects'] = [];
                    _0xf98e87['sprite']['objects'] = [new _0x117b6e['object']()];
                    _0xf98e87['sprite']['add'](_0x437143);
                    if (_0xf98e87['buildingPreview']['parent'] != null) {
                        _0xf98e87['buildingPreview']['parent']['remove'](_0xf98e87['buildingPreview']);
                        _0xf98e87['done'] = !![];
                    }
                    if (_0x4625d7['hLost'] !== undefined) {
                        var _0x25b624 = new _0x117b6e['object']();
                        _0x25b624['position']['x'] = (Math['random']() * 0x2 - 0x1) * 0x1e;
                        _0x25b624['position']['y'] = (Math['random']() * 0x2 - 0x1) * 0xf - 0x3c;
                        _0x25b624['original'] = {
                            'x': _0x25b624['position']['x'],
                            'y': _0x25b624['position']['y']
                        };
                        _0x25b624['t'] = 0x1;
                        var _0x5d4004 = new _0x117b6e['strokeText'](_0x4625d7['hLost'], 0x0, 0x0, '#444', 'Arial Black', 0x19, 'bold', 0x1, 'center');
                        _0x5d4004['lineWidth'] = 0x4;
                        _0x25b624['add'](_0x5d4004);
                        _0x25b624['add'](new _0x117b6e['text'](_0x4625d7['hLost'], 0x0, 0x0, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center'));
                        _0xf98e87['damages']['push'](_0x25b624);
                        _0x220553['add'](_0x25b624);
                    }
                    _0xf98e87['dead'] = !![];
                }
                return !![];
            });
            var _0x52b608 = [];

            function _0x63937d(_0x543345) {
                for (var _0xf3698c = 0x0; _0xf3698c <= _0x52b608['length']; _0xf3698c++) {
                    if (_0xf3698c == _0x52b608['length']) {
                        _0x52b608[_0xf3698c] = new _0x117b6e['polygon'](0x0, 0x0, [new _0x117b6e['Vector2'](0x0, _0x543345), new _0x117b6e['Vector2'](-0x96, 0x0), new _0x117b6e['Vector2'](0x0, -_0x543345)], '#FFF');
                        _0x52b608[_0xf3698c]['using'] = ![];
                    }
                    if (!_0x52b608[_0xf3698c]['using']) {
                        var _0x1f85fc = _0x52b608[_0xf3698c];
                        _0x1f85fc['points'][0x0]['y'] = _0x543345;
                        _0x1f85fc['points'][0x2]['y'] = -_0x543345;
                        _0x1f85fc['points'][0x1]['x'] = -0x96;
                        _0x1f85fc['using'] = !![];
                        return _0x1f85fc;
                    }
                }
            }
            var _0x20605e = [];

            function _0x4e4cc2() {
                for (var _0x43eff4 = 0x0; _0x43eff4 <= _0x20605e['length']; _0x43eff4++) {
                    if (_0x43eff4 == _0x20605e['length']) {
                        _0x20605e[_0x43eff4] = new _0x117b6e['image'](_0x52811c('bullet'), 0x0, 0x0, 0xa, 0x28);
                        _0x20605e[_0x43eff4]['using'] = ![];
                    }
                    if (!_0x20605e[_0x43eff4]['using']) {
                        var _0x32dd38 = _0x20605e[_0x43eff4];
                        _0x32dd38['using'] = !![];
                        _0x32dd38['parent'] = null;
                        return _0x32dd38;
                    }
                }
            }
            _0x117b6e['addType']('bullet', function (_0x1df0a7, _0x981186) {
                _0x1df0a7['bulletType'] = _0x981186['bulletType'];
                _0x1df0a7['visual'] = new _0x117b6e['object']();
                _0x1df0a7['trail'] = new _0x117b6e['object']();
                _0x1df0a7['done'] = ![];
                _0x1df0a7['tlength'] = 0x32;
                var _0x280b98;
                var _0x13b8c4 = 0x5;
                switch (_0x1df0a7['bulletType']) {
                case 'shotgun':
                case 'heavy':
                case 'drum':
                case 'combat':
                case 'burst shotgun':
                    _0x280b98 = new _0x117b6e['image'](_0x52811c('shotgunbullet'), 0x0, 0x0, 0xa, 0xa);
                    _0x13b8c4 = 0x5;
                    if (_0x1df0a7['bulletType'] == 'shotgun') {
                        if (_0x5f3362 > 0x0 && _0x1df0a7['isPreview'] === undefined) {
                            _0x496a8f(_0x1df0a7['bulletType'], _0x117b6e['me']['visual']['position'], new _0x117b6e['Vector2'](_0x981186['x'], _0x981186['y']));
                            _0x5f3362 = 0x0;
                        }
                    } else {
                        if (_0x9da206 > 0x0 && _0x1df0a7['isPreview'] === undefined) {
                            _0x496a8f(_0x1df0a7['bulletType'], _0x117b6e['me']['visual']['position'], new _0x117b6e['Vector2'](_0x981186['x'], _0x981186['y']));
                            _0x9da206 = 0x0;
                        }
                    }
                    _0x280b98['rotation'] = Math['PI'] / 0x2;
                    break;
                case 'snowball':
                    _0x280b98 = new _0x117b6e['image'](_0x52811c('snowball'), 0x0, 0x0, 0x3c, 0x3c);
                    _0x13b8c4 = 0x4;
                    var _0x1115f9 = _0x1df0a7['bulletType'];
                    if (_0x58db8d['indexOf'](_0x1115f9) < 0x0) {
                        _0x1115f9 = 'ar';
                    }
                    if (_0x1df0a7['isPreview'] === undefined) {
                        _0x496a8f(_0x1115f9, _0x117b6e['me']['visual']['position'], new _0x117b6e['Vector2'](_0x981186['x'], _0x981186['y']));
                    }
                    _0x280b98['rotation'] = Math['PI'] / 0x2;
                    _0x1df0a7['ticksAlive'] = 0x0;
                    break;
                    break;
                case 'rpg':
                    _0x280b98 = new _0x117b6e['image'](_0x52811c('rocket'), 0x0, 0x0, 0xa0, 0xa0);
                    _0x13b8c4 = 0x5;
                    if (_0x1df0a7['isPreview'] === undefined) {
                        _0x496a8f('explosion0', _0x117b6e['me']['visual']['position'], new _0x117b6e['Vector2'](_0x981186['x'], _0x981186['y']));
                    }
                    _0x280b98['rotation'] = Math['PI'];
                    _0x1df0a7['ticksAlive'] = 0x0;
                    _0x1df0a7['t'] = 0x0;
                    _0x1df0a7['explosion'] = new _0x117b6e['object']();
                    _0x1df0a7['ring'] = new _0x117b6e['arc'](0x0, 0x0, 0x64, '#AAA', Math['PI'] * 0x2, 0x0, 0x50);
                    _0x1df0a7['explosion']['add'](_0x1df0a7['ring']);
                    _0x1df0a7['particles'] = 0x3;
                    _0x1df0a7['particleArray'] = [];
                    _0x1df0a7['particleContainer'] = new _0x117b6e['object']();
                    _0x1df0a7['explosion']['add'](_0x1df0a7['particleContainer']);
                    var _0x2ff2d2 = 0xa0;
                    var _0x28e43c = new _0x117b6e['image'](_0x1384f1, 0x0, 0x0, _0x2ff2d2, _0x2ff2d2, 0.6);
                    _0x1df0a7['particleArray']['push'](_0x28e43c);
                    for (var _0xa60dbb = 0x0; _0xa60dbb < _0x1df0a7['particles']; _0xa60dbb++) {
                        var _0x4cadf9 = new _0x117b6e['object']();
                        _0x28e43c['parent'] = null;
                        _0x4cadf9['add'](_0x28e43c);
                        _0x4cadf9['rotation'] = Math['PI'] * 0x2 / _0x1df0a7['particles'] * _0xa60dbb + Math['random']() * Math['PI'] * 0x2 / _0x1df0a7['particles'] * 0.5;
                        _0x4cadf9['size'] = Math['random']() * 0.2 + 0x1;
                        _0x1df0a7['particleContainer']['addBelow'](_0x4cadf9);
                    }
                    _0x28e43c['rotation'] = Math['random']() * Math['PI'] * 0x2;
                    _0x1df0a7['particles'] = 0x5;
                    _0x2ff2d2 = 0x82;
                    _0x28e43c = new _0x117b6e['image'](_0x2bfb93, 0x0, 0x0, _0x2ff2d2, _0x2ff2d2, 0.6);
                    _0x1df0a7['particleArray']['push'](_0x28e43c);
                    for (var _0xa60dbb = 0x0; _0xa60dbb < _0x1df0a7['particles']; _0xa60dbb++) {
                        var _0x4cadf9 = new _0x117b6e['object']();
                        _0x28e43c['parent'] = null;
                        _0x4cadf9['add'](_0x28e43c);
                        _0x4cadf9['rotation'] = Math['PI'] * 0x2 / _0x1df0a7['particles'] * _0xa60dbb + Math['PI'] / _0x1df0a7['particles'] + Math['random']() * Math['PI'] * 0x2 / _0x1df0a7['particles'] * 0.5;
                        _0x4cadf9['size'] = Math['random']() * 0.2 + 0x1;
                        _0x1df0a7['particleContainer']['addBelow'](_0x4cadf9);
                    }
                    _0x28e43c['rotation'] = Math['random']() * Math['PI'] * 0x2;
                    _0x1df0a7['particles'] = 0x8;
                    _0x2ff2d2 = 0x64;
                    _0x28e43c = new _0x117b6e['image'](_0x5bb21a, 0x0, 0x0, _0x2ff2d2, _0x2ff2d2, 0.6);
                    _0x1df0a7['particleArray']['push'](_0x28e43c);
                    for (var _0xa60dbb = 0x0; _0xa60dbb < _0x1df0a7['particles']; _0xa60dbb++) {
                        var _0x4cadf9 = new _0x117b6e['object']();
                        _0x28e43c['parent'] = null;
                        _0x4cadf9['add'](_0x28e43c);
                        _0x4cadf9['rotation'] = Math['PI'] * 0x2 / _0x1df0a7['particles'] * _0xa60dbb + Math['random']() * Math['PI'] * 0x2 / _0x1df0a7['particles'] * 0.5;
                        _0x4cadf9['size'] = Math['random']() * 0.2 + 0x1;
                        _0x1df0a7['particleContainer']['addBelow'](_0x4cadf9);
                    }
                    _0x28e43c['rotation'] = Math['random']() * Math['PI'] * 0x2;
                    _0x2ff2d2 = 0x64;
                    _0x1df0a7['particles'] = 0xa;
                    _0x28e43c = new _0x117b6e['image'](_0x85fc3, 0x0, 0x0, _0x2ff2d2, _0x2ff2d2, 0.6);
                    _0x1df0a7['particleArray']['push'](_0x28e43c);
                    for (var _0xa60dbb = 0x0; _0xa60dbb < _0x1df0a7['particles']; _0xa60dbb++) {
                        var _0x4cadf9 = new _0x117b6e['object']();
                        _0x28e43c['parent'] = null;
                        _0x4cadf9['add'](_0x28e43c);
                        _0x4cadf9['rotation'] = Math['PI'] * 0x2 / _0x1df0a7['particles'] * _0xa60dbb + Math['PI'] / _0x1df0a7['particles'] + Math['random']() * Math['PI'] * 0x2 / _0x1df0a7['particles'] * 0.5;
                        _0x4cadf9['size'] = Math['random']() * 0.3 + 0.9;
                        _0x1df0a7['particleContainer']['addBelow'](_0x4cadf9);
                    }
                    _0x28e43c['rotation'] = Math['random']() * Math['PI'] * 0x2;
                    _0x1df0a7['line'] = new _0x117b6e['rectangle'](0x0, 0x64, 0x8, 0x8c, '#FFF', 0.4);
                    _0x1df0a7['lines'] = 0xa;
                    for (var _0xa60dbb = 0x0; _0xa60dbb < _0x1df0a7['lines']; _0xa60dbb++) {
                        var _0x14c311 = new _0x117b6e['object']();
                        _0x1df0a7['line']['parent'] = null;
                        _0x14c311['add'](_0x1df0a7['line']);
                        _0x14c311['rotation'] = 0x2 * Math['PI'] / _0x1df0a7['lines'] * _0xa60dbb + Math['random']() * Math['PI'] * 0x2 / _0x1df0a7['lines'] * 0.3;
                        _0x14c311['size'] = 0x1 - Math['random']() * 0.2;
                        _0x1df0a7['explosion']['add'](_0x14c311);
                    }
                    _0x1df0a7['visual']['add'](_0x1df0a7['explosion']);
                    _0x1df0a7['explosion']['opacity'] = 0x0;
                    _0x1df0a7['explosion']['size'] = 0.8;
                    _0x1df0a7['exploded'] = ![];
                    break;
                    break;
                default:
                    _0x280b98 = _0x4e4cc2();
                    _0x13b8c4 = 0x4;
                    var _0x1115f9 = _0x1df0a7['bulletType'];
                    if (_0x1115f9 == 'scoped ar') {
                        _0x1115f9 = 'scoped-ar';
                    }
                    if (_0x58db8d['indexOf'](_0x1115f9) < 0x0) {
                        _0x1115f9 = 'ar';
                    }
                    if (_0x1df0a7['isPreview'] === undefined) {
                        _0x496a8f(_0x1115f9, _0x117b6e['me']['visual']['position'], new _0x117b6e['Vector2'](_0x981186['x'], _0x981186['y']));
                    }
                    _0x280b98['rotation'] = Math['PI'] / 0x2;
                    break;
                }
                _0x1df0a7['visual']['add'](_0x280b98);
                _0x1df0a7['trail'] = _0x63937d(_0x13b8c4);
                _0x1df0a7['trail']['opacity'] = 0x0;
                _0x1df0a7['bullet'] = _0x280b98;
                _0x1df0a7['visual']['addBelow'](_0x1df0a7['trail']);
                _0x2a3fa5['addBelow'](_0x1df0a7['visual']);
                if (_0x1df0a7['bulletType'] == 'snowball') {
                    _0x2a3fa5['remove'](_0x1df0a7['visual']);
                    _0x2a3fa5['add'](_0x1df0a7['visual']);
                }
                if (_0x981186['pi'] == _0x117b6e['me']['id'] && !_0x117b6e['spectating'] && (_0x1df0a7['bulletType'] == 'sniper' || _0x1df0a7['bulletType'] == 'shotgun' || _0x1df0a7['bulletType'] == 'heavy' || _0x1df0a7['bulletType'] == 'drum')) {
                    _0x224723['shake'](0xf, _0x117b6e['me']['actualRotation'] + Math['PI']);
                }
            }, function (_0x2f7a80) {
                if (_0x2f7a80['bulletType'] == 'rpg') {
                    _0x2f7a80['trail']['opacity'] = 0x0;
                    _0x2f7a80['ticksAlive']++;
                    if (!_0x2f7a80['done'] && _0x2f7a80['ticksAlive'] % 0x2 == 0x0) {
                        var _0x450ec0 = 0.8;
                        var _0x29fc19 = Math['floor'](Math['random']() * 0x2);
                        var _0xa907e9 = 0xf;
                        _0xa907e9 = 0x0;
                        var _0x3a0901 = _0xa907e9 / 0x2;
                        var _0x47e0ce = 0x9;
                        var _0x15f821 = 0x0;
                        var _0x4d879b = _0x47e0ce + Math['random']() * _0x15f821;
                        _0x20b307['add'](new _0x117b6e['customParticle'](new _0x117b6e['image'](_0x52811c('smoke' + _0x29fc19), _0x2f7a80['visual']['position']['x'] + Math['random']() * _0xa907e9 - _0x3a0901, _0x2f7a80['visual']['position']['y'] + Math['random']() * _0xa907e9 - _0x3a0901, _0x4d879b, _0x4d879b, _0x450ec0), (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 1.2, 0x0, 0x0, -0x7, -0x7));
                    }
                } else if (_0x2f7a80['bulletType'] == 'snowball') {
                    _0x2f7a80['trail']['opacity'] = 0x0;
                    var _0x4079a3 = _0x117b6e['lerp'](_0x2f7a80['ticksAlive'] - 0x1, _0x2f7a80['ticksAlive']);
                    var _0x4f3431 = 0xc / 0x2;
                    var _0x109a0b = 0x0;
                    _0x109a0b = -(_0x4079a3 - _0x4f3431) * (_0x4079a3 - _0x4f3431);
                    _0x109a0b /= _0x4f3431;
                    _0x109a0b += _0x4f3431;
                    _0x109a0b /= _0x4f3431;
                    _0x109a0b += 0x1;
                    _0x2f7a80['bullet']['size'] = _0x109a0b;
                } else {
                    if (_0x2f7a80['trail']['opacity'] < 0.3) {
                        _0x2f7a80['trail']['opacity'] += _0x117b6e['clientDetails']['dt'] / 0x32;
                    } else {
                        _0x2f7a80['trail']['opacity'] = 0.3;
                    }
                    if (_0x2f7a80['tlength'] < 0x96) {
                        _0x2f7a80['tlength'] += _0x117b6e['clientDetails']['dt'] * 0xa;
                    } else {
                        _0x2f7a80['tlength'] = 0x96;
                    }
                    _0x2f7a80['trail']['points'][0x1]['x'] = -_0x2f7a80['tlength'];
                }
                if (_0x2f7a80['done']) {
                    if (_0x2f7a80['bulletType'] == 'rpg' && _0x2f7a80['exploded']) {
                        _0x2f7a80['new']['position']['x'] = _0x2f7a80['visual']['position']['x'];
                        _0x2f7a80['new']['position']['y'] = _0x2f7a80['visual']['position']['y'];
                        _0x2f7a80['explosion']['opacity'] = 0x1;
                        _0x2f7a80['t'] += 0.03 * _0x117b6e['clientDetails']['dt'];
                        var _0xff5896 = _0x2f7a80['t'];
                        var _0x41d7ed = Math['sqrt'](_0xff5896 * 0x4);
                        _0x2f7a80['bullet']['opacity'] -= 0.17 * _0x117b6e['clientDetails']['dt'];
                        _0x2f7a80['ring']['radius'] = 0x50 + 0x82 * _0xff5896;
                        _0x2f7a80['ring']['lineWidth'] = 0x3c + 0x1e * _0xff5896;
                        _0x2f7a80['ring']['opacity'] = Math['max'](0.4 * (0x1 - _0xff5896) - 0.14, 0x0);
                        _0x2f7a80['line']['position']['y'] = _0x2f7a80['line']['height'] / 0x2 + 0xc8 * _0xff5896;
                        _0x2f7a80['line']['opacity'] = 0.4 * (0x1 - _0xff5896);
                        for (var _0x473b7d = 0x0; _0x473b7d < _0x2f7a80['particleArray']['length']; _0x473b7d++) {
                            _0x2f7a80['particleArray'][_0x473b7d]['position']['y'] = 0x1e * _0x473b7d + 0x22 * _0x41d7ed / 0x2 * (_0x473b7d + 0x2);
                            _0x2f7a80['particleArray'][_0x473b7d]['opacity'] = (0x1 - _0x41d7ed / 0x2) * Math['max']((_0x2f7a80['particleArray']['length'] - 0x1) / 0x2 + 0.5, 0x1);
                            if (_0x473b7d == 0x0) {
                                _0x2f7a80['particleArray'][_0x473b7d]['opacity'] *= 0.6;
                            }
                        }
                        if (_0x2f7a80['t'] >= 0x1) {
                            for (var _0x473b7d = 0x0; _0x473b7d < _0x117b6e['objects']['length']; _0x473b7d++) {
                                if (_0x117b6e['objects'][_0x473b7d]['id'] == _0x2f7a80['id']) {
                                    if (_0x117b6e['objects'][_0x473b7d]['visual']['parent'] != null) _0x117b6e['objects'][_0x473b7d]['visual']['parent']['remove'](_0x117b6e['objects'][_0x473b7d]['visual']);
                                    _0x117b6e['objects']['splice'](_0x473b7d, 0x1);
                                }
                            }
                        }
                    } else {
                        _0x2f7a80['visual']['opacity'] -= 0.17 * _0x117b6e['clientDetails']['dt'];
                        if (_0x2f7a80['visual']['opacity'] <= 0x0) {
                            _0x2f7a80['trail']['parent'] = null;
                            _0x2f7a80['trail']['using'] = ![];
                            _0x2f7a80['bullet']['using'] = ![];
                            for (var _0x473b7d = 0x0; _0x473b7d < _0x117b6e['objects']['length']; _0x473b7d++) {
                                if (_0x117b6e['objects'][_0x473b7d]['id'] == _0x2f7a80['id']) {
                                    if (_0x117b6e['objects'][_0x473b7d]['visual']['parent'] != null) _0x117b6e['objects'][_0x473b7d]['visual']['parent']['remove'](_0x117b6e['objects'][_0x473b7d]['visual']);
                                    _0x117b6e['objects']['splice'](_0x473b7d, 0x1);
                                }
                            }
                        }
                    }
                }
            }, function (_0x5b99ec) {
                if (_0x5b99ec['bulletType'] == 'snowball') {
                    _0x5b99ec['ticksAlive']++;
                }
            }, function (_0x131ebe, _0x1a6be6) {
                _0x131ebe['old']['position'] = _0x131ebe['visual']['position']['clone']();
                _0x131ebe['old']['rotation'] = _0x131ebe['visual']['rotation'];
                _0x131ebe['actualOld']['position'] = _0x131ebe['visual']['position']['clone']();
                _0x131ebe['actualOld']['rotation'] = _0x131ebe['visual']['rotation'];
                if (_0x1a6be6['p'] !== undefined) {
                    _0x131ebe['new']['position'] = new _0x117b6e['Vector2'](_0x1a6be6['p'][0x0], _0x1a6be6['p'][0x1]);
                }
                if (_0x131ebe['bulletType'] == 'rpg' && !_0x131ebe['done'] && _0x1a6be6['exploded'] !== undefined && _0x1a6be6['exploded'] == !![]) {
                    _0x131ebe['exploded'] = !![];
                    _0x496a8f('explosion1', _0x117b6e['me']['visual']['position'], new _0x117b6e['Vector2'](_0x131ebe['visual']['position']['x'], _0x131ebe['visual']['position']['y']));
                }
                _0x131ebe['done'] = !![];
                return !![];
            });
            var _0x5e1dcc = [];
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x1658b3['length']; _0x441ab1++) {
                var _0x24025d = {};
                _0x24025d['visual'] = new _0x117b6e['object']();
                _0x24025d['shine'] = new _0x117b6e['image'](_0x52811c('gridshine'), 0x0, 0x0, 0xaa, 0xaa, 0.55);
                _0x24025d['shine']['width'] = _0x24025d['shine']['height'] = 0x7e;
                _0x24025d['visual']['addBelow'](_0x24025d['shine']);
                _0x24025d['done'] = ![];
                _0x24025d['bg'] = new _0x117b6e['object']();
                _0x24025d['bg']['add'](new _0x117b6e['circle'](0x0, 0x0, 0x4b / 0x2 + 0x3, _0x1658b3[_0x441ab1]['color'], 0.3));
                var _0x127f18 = new _0x117b6e['arc'](0x0, 0x0, 0x4b / 0x2, _0x1658b3[_0x441ab1]['color'], 0x2 * Math['PI'], 0x0, 0x6);
                _0x127f18['opacity'] = 0.5;
                _0x127f18['add'](new _0x117b6e['arc'](0x0, 0x0, 0x4b / 0x2 + 0x4, '#000', 0x2 * Math['PI'], 0x0, 0x1));
                _0x24025d['bg']['add'](_0x127f18);
                _0x24025d['visual']['addBelow'](_0x24025d['bg']);
                var _0x5d783b = 0xc8;
                var _0x25107f = document['createElement']('canvas');
                _0x25107f['width'] = _0x25107f['height'] = _0x5d783b;
                var _0x241553 = _0x25107f['getContext']('2d');
                _0x241553['translate'](_0x5d783b / 0x2, _0x5d783b / 0x2);
                _0x24025d['visual']['render'](_0x241553, 0x64 / _0x5d783b, 0x1);
                _0x5e1dcc['push'](_0x25107f);
                _0x25107f['color'] = _0x1658b3[_0x441ab1]['color'];
            }
            var _0x13a747 = 0x0;
            var _0x56d294 = 0x0;
            _0x117b6e['addType']('gun', function (_0x3241ac, _0x45f380) {
                _0x3241ac['extraRotationTicks'] = 0x0;
                _0x3241ac['visual'] = new _0x117b6e['object']();
                _0x3241ac['visual']['opacity'] = 0x0;
                _0x3241ac['rarity'] = _0x45f380['rarity'];
                _0x3241ac['oldRarity'] = _0x45f380['rarity'];
                _0x3241ac['particleAngle'] = 0x0;
                _0x3241ac['gun'] = new _0x117b6e['image'](_0x52811c(_0x45f380['gunType']), -0x3, 0x5, 0x6e, 0x6e);
                _0x3241ac['gun']['rotation'] = Math['PI'] / 0x7;
                if (_0x45f380['gunType'] == 'mini' || _0x45f380['gunType'] == 'pot' || _0x45f380['gunType'] == 'bandages' || _0x45f380['gunType'] == 'medkit') {
                    _0x3241ac['gun']['size'] = 0.4;
                    _0x3241ac['gun']['rotation'] = 0x0;
                    if (_0x45f380['gunType'] == 'mini' || _0x45f380['gunType'] == 'pot') {
                        _0x3241ac['gun']['position']['y'] = -0x2;
                        _0x3241ac['gun']['position']['x'] = 0.6;
                    } else {
                        _0x3241ac['gun']['position']['x'] = 0x0;
                        _0x3241ac['gun']['position']['y'] = 0x0;
                        _0x3241ac['gun']['size'] = 0.5;
                    }
                }
                if (_0x45f380['gunType'] == 'snowball') {
                    _0x3241ac['gun']['size'] = 0.65;
                    _0x3241ac['gun']['position']['y'] = -0.5;
                    _0x3241ac['gun']['position']['x'] = 0x1;
                }
                if (_0x45f380['gunType'] == 'deagle') {
                    _0x3241ac['gun']['size'] = 0.6;
                }
                _0x3241ac['visual']['add'](_0x3241ac['gun']);
                _0x3241ac['bg'] = new _0x117b6e['image'](_0x5e1dcc[_0x45f380['rarity']], 0x0, 0x0, 0x64, 0x64);
                _0x3241ac['visual']['addBelow'](_0x3241ac['bg']);
                _0x3241ac['ticksSinceParticles'] = 0x0;
                _0x3241ac['particleSpawnTick'] = 0xa;
                if (_0x3241ac['rarity'] == 0x4) {
                    _0x3241ac['particleSpawnTick'] = 0x6;
                }
                _0x20b307['add'](_0x3241ac['visual']);
            }, function (_0x835b38) {
                _0x835b38['extraRotationTicks'] += _0x117b6e['clientDetails']['dt'] / 0xf;
                var _0x584c2b = _0x56d294;
                _0x835b38['gun']['width'] = _0x835b38['gun']['height'] = -_0x584c2b * 0x6 + 0x6e;
                _0x835b38['bg']['size'] = _0x584c2b * 0.02 + 0.8;
                if (_0x835b38['done']) {
                    _0x835b38['visual']['opacity'] -= 0.07 * _0x117b6e['clientDetails']['dt'];
                    if (_0x835b38['visual']['opacity'] <= 0x0) {
                        for (var _0x1d3d3e = 0x0; _0x1d3d3e < _0x117b6e['objects']['length']; _0x1d3d3e++) {
                            if (_0x117b6e['objects'][_0x1d3d3e]['id'] == _0x835b38['id']) {
                                if (_0x117b6e['objects'][_0x1d3d3e]['visual']['parent'] != null) _0x117b6e['objects'][_0x1d3d3e]['visual']['parent']['remove'](_0x117b6e['objects'][_0x1d3d3e]['visual']);
                                _0x117b6e['objects']['splice'](_0x1d3d3e, 0x1);
                            }
                        }
                    }
                } else if (_0x835b38['visual']['opacity'] < 0x1) {
                    _0x835b38['visual']['opacity'] += 0.07 * _0x117b6e['clientDetails']['dt'];
                    _0x835b38['visual']['opacity'] = Math['min'](_0x835b38['visual']['opacity'], 0x1);
                }
                _0x835b38['ticksSinceParticles'] += _0x117b6e['clientDetails']['dt'];
                if (_0x835b38['ticksSinceParticles'] > _0x835b38['particleSpawnTick']) {
                    var _0x542729 = new _0x117b6e['polygon'](0x0, 0x0, [new _0x117b6e['Vector2'](-0x32, 0x28), new _0x117b6e['Vector2'](0x0, -0x28), new _0x117b6e['Vector2'](0x32, 0x28)], _0x2382d1(_0x1658b3[_0x835b38['rarity']]['color'], 0x6));
                    if (_0x542729['color']['length'] != 0x7) {
                        _0x542729['color'] = _0x1658b3[_0x835b38['rarity']]['color'];
                    }
                    _0x542729['size'] = 0.4;
                    _0x542729['opacity'] = 0.7;
                    _0x542729['shouldStroke'] = !![];
                    _0x542729['strokeColor'] = _0x2382d1(_0x1658b3[_0x835b38['rarity']]['color'], 0x2);
                    if (_0x542729['strokeColor']['length'] != 0x7) {
                        _0x542729['strokeColor'] = _0x542729['color'];
                    }
                    _0x542729['lineWidth'] = 0xd;
                    _0x835b38['particleAngle'] += 1.8;
                    var _0x2d7a25 = 0.6 * 0xa / _0x835b38['particleSpawnTick'];
                    var _0x484a9f = new _0x117b6e['customParticle'](_0x542729, (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.04, 0.35, Math['cos'](_0x835b38['particleAngle']) * _0x2d7a25, Math['sin'](_0x835b38['particleAngle']) * _0x2d7a25);
                    if (_0x835b38['rarity'] == 0x3) {
                        _0x484a9f['opacityThreshold'] = 0.1;
                    }
                    _0x835b38['bg']['add'](_0x484a9f);
                    _0x835b38['ticksSinceParticles'] = 0x0;
                }
            }, function (_0x507706, _0x58d21d) {}, function (_0xdc119f) {
                _0xdc119f['done'] = !![];
                return !![];
            });
            var _0x113ac7;
            for (var _0x441ab1 = 0x0; _0x441ab1 < 0x1; _0x441ab1++) {
                var _0x24025d = {};
                _0x24025d['visual'] = new _0x117b6e['object']();
                _0x24025d['shine'] = new _0x117b6e['image'](_0x52811c('gridshine'), 0x0, 0x0, 0xaa, 0xaa, 0.55);
                _0x24025d['shine']['width'] = _0x24025d['shine']['height'] = 0x7e;
                _0x24025d['visual']['addBelow'](_0x24025d['shine']);
                _0x24025d['done'] = ![];
                _0x24025d['bg'] = new _0x117b6e['object']();
                _0x24025d['bg']['add'](new _0x117b6e['circle'](0x0, 0x0, 0x46 / 0x2 + 0x3, _0x1658b3[_0x441ab1]['color'], 0.3));
                var _0x127f18 = new _0x117b6e['arc'](0x0, 0x0, 0x46 / 0x2, _0x1658b3[_0x441ab1]['color'], 0x2 * Math['PI'], 0x0, 0x6);
                _0x127f18['opacity'] = 0.5;
                _0x127f18['add'](new _0x117b6e['arc'](0x0, 0x0, 0x46 / 0x2 + 0x4, '#000', 0x2 * Math['PI'], 0x0, 0x1));
                _0x24025d['bg']['add'](_0x127f18);
                _0x24025d['visual']['addBelow'](_0x24025d['bg']);
                _0x24025d['bg']['opacity'] = 0.5;
                var _0x5d783b = 0xc8;
                var _0x25107f = document['createElement']('canvas');
                _0x25107f['width'] = _0x25107f['height'] = _0x5d783b;
                var _0x241553 = _0x25107f['getContext']('2d');
                _0x241553['translate'](_0x5d783b / 0x2, _0x5d783b / 0x2);
                _0x24025d['visual']['render'](_0x241553, 0x64 / _0x5d783b, 0x1);
                _0x113ac7 = _0x25107f;
            }
            _0x117b6e['addType']('ammo', function (_0x3580f0, _0x376aa2) {
                _0x3580f0['extraRotationTicks'] = 0x0;
                _0x3580f0['visual'] = new _0x117b6e['object']();
                _0x3580f0['visual']['opacity'] = 0x0;
                _0x376aa2['rarity'] = 0x0;
                var _0x2728f0 = 'empty';
                if (_0x376aa2['mat'] !== undefined) {
                    switch (_0x376aa2['mat']) {
                    case 0x0:
                        _0x2728f0 = 'wood';
                        break;
                    case 0x1:
                        _0x2728f0 = 'brick';
                        break;
                    case 0x2:
                        _0x2728f0 = 'metal';
                    }
                } else if (_0x376aa2['ammo'] !== undefined) {
                    _0x2728f0 = 'stack' + _0x376aa2['ammo'];
                }
                _0x3580f0['gun'] = new _0x117b6e['image'](_0x52811c(_0x2728f0), 0x0, 0x0, 0x6e, 0x6e);
                _0x3580f0['gun']['rotation'] = 0x0;
                _0x3580f0['gun']['size'] = 0.45;
                _0x3580f0['visual']['add'](_0x3580f0['gun']);
                _0x3580f0['done'] = ![];
                _0x3580f0['bg'] = new _0x117b6e['image'](_0x113ac7, 0x0, 0x0, 0x64, 0x64);
                _0x3580f0['visual']['addBelow'](_0x3580f0['bg']);
                var _0x431e69 = 0.5;
                _0x3580f0['bg']['opacity'] *= _0x431e69;
                _0x20b307['add'](_0x3580f0['visual']);
            }, function (_0x5d1138) {
                _0x5d1138['extraRotationTicks'] += _0x117b6e['clientDetails']['dt'] / 0xf;
                _0x5d1138['gun']['width'] = _0x5d1138['gun']['height'] = -_0x56d294 * 0x6 + 0x6e;
                _0x5d1138['bg']['size'] = _0x56d294 * 0.02 + 0.8;
                if (_0x5d1138['done']) {
                    _0x5d1138['visual']['opacity'] -= 0.07 * _0x117b6e['clientDetails']['dt'];
                    if (_0x5d1138['visual']['opacity'] <= 0x0) {
                        for (var _0x9c1c9a = 0x0; _0x9c1c9a < _0x117b6e['objects']['length']; _0x9c1c9a++) {
                            if (_0x117b6e['objects'][_0x9c1c9a]['id'] == _0x5d1138['id']) {
                                if (_0x117b6e['objects'][_0x9c1c9a]['visual']['parent'] != null) _0x117b6e['objects'][_0x9c1c9a]['visual']['parent']['remove'](_0x117b6e['objects'][_0x9c1c9a]['visual']);
                                _0x117b6e['objects']['splice'](_0x9c1c9a, 0x1);
                            }
                        }
                    }
                } else if (_0x5d1138['visual']['opacity'] < 0x1) {
                    _0x5d1138['visual']['opacity'] += 0.07 * _0x117b6e['clientDetails']['dt'];
                    _0x5d1138['visual']['opacity'] = Math['min'](_0x5d1138['visual']['opacity'], 0x1);
                }
                _0x5d1138['ticksSinceParticles'] += _0x117b6e['clientDetails']['dt'];
            }, function (_0x59b73d, _0x36b451) {}, function (_0x545e5f) {
                _0x545e5f['done'] = !![];
                return !![];
            });
            _0x117b6e['addType']('chest', function (_0x169902, _0x447167) {
                _0x169902['visual'] = new _0x117b6e['image'](_0x52811c('chest'), 0x0, 0x0, 0x96, 0x64);
                _0x169902['visual']['size'] = 0.8;
                _0x169902['chestUnder'] = new _0x117b6e['image'](_0x52811c('chestunder'), 0x0, 0x0, 0x96, 0x64);
                _0x169902['visual']['addBelow'](_0x169902['chestUnder']);
                _0x2a3fa5['addBelow'](_0x169902['visual']);
                _0x169902['done'] = ![];
                _0x169902['sinTicks'] = 0x0;
                _0x169902['sin'] = 0x0;
            }, function (_0x5479be) {
                _0x5479be['sinTicks'] += _0x117b6e['clientDetails']['dt'] / 0x28;
                _0x5479be['sin'] = Math['sin'](_0x5479be['sinTicks']);
                _0x5479be['chestUnder']['opacity'] = 0.32 + _0x5479be['sin'] / 0x9;
                _0x5479be['chestUnder']['size'] = 1.3 + _0x5479be['sin'] / 0xd;
                if (_0x5479be['done']) {
                    _0x5479be['visual']['opacity'] -= 0.04 * _0x117b6e['clientDetails']['dt'];
                    if (_0x5479be['visual']['opacity'] <= 0x0) {
                        for (var _0x450ecd = 0x0; _0x450ecd < _0x117b6e['objects']['length']; _0x450ecd++) {
                            if (_0x117b6e['objects'][_0x450ecd]['id'] == _0x5479be['id']) {
                                if (_0x117b6e['objects'][_0x450ecd]['visual']['parent'] != null) _0x117b6e['objects'][_0x450ecd]['visual']['parent']['remove'](_0x117b6e['objects'][_0x450ecd]['visual']);
                                _0x117b6e['objects']['splice'](_0x450ecd, 0x1);
                            }
                        }
                    }
                }
            }, function (_0x3fc3de, _0x1e1287) {}, function (_0x3f885d) {
                _0x3f885d['done'] = !![];
                return !![];
            });
            _0x117b6e['addType']('house', function (_0x12f0a3, _0x284acc) {
                _0x12f0a3['visual'] = new _0x117b6e['object']();
            }, function (_0x35c7b4) {}, function (_0x3739b5, _0x56753b) {}, function (_0x249441) {});
            _0x117b6e['addType']('ball', function (_0x5b8391, _0x40ef80) {
                _0x5b8391['visual'] = new _0x117b6e['image'](_0x52811c(_0x40ef80['name']), 0x0, 0x0, 0x46, 0x46);
                _0x2a3fa5['addBelow'](_0x5b8391['visual']);
            }, function (_0x12d92e) {}, function (_0x2c5108, _0x5513d6) {}, function (_0x2faeee) {});
            _0x117b6e['addType']('baller', function (_0x350c39, _0x2aae00) {
                _0x350c39['visual'] = new _0x117b6e['image'](_0x52811c('baller0'), 0x0, 0x0, 0xfa, 0xfa);
                _0x350c39['grapple'] = new _0x117b6e['image'](_0x52811c('grapple'), 0x0, 0x0, 0x28, 0x28);
                _0x350c39['rope'] = new _0x117b6e['image'](_0x52811c('rope'), 0x0, 0x0, 0xa, 0x0);
                _0x2a3fa5['add'](_0x350c39['rope']);
                _0x350c39['newGrapple'] = null;
                _0x350c39['isNull'] = !![];
                _0x350c39['actualGrappleDist'] = 0x64;
                _0x350c39['grappleDist'] = _0x350c39['actualGrappleDist'];
                _0x350c39['grappleDifference'] = 0xf;
                _0x2a3fa5['add'](_0x350c39['grapple']);
                _0x2a3fa5['add'](_0x350c39['visual']);
                _0x350c39['timeSinceSoundUpdate'] = 0x0;
                _0x350c39['volumeDifference'] = 0x0;
                _0x350c39['grapple']['oldPosition'] = new _0x117b6e['Vector2']();
                if (_0x2aae00['isPreview']) {
                    _0x350c39['isPreview'] = !![];
                }
                _0x350c39['fullHealth'] = _0x2aae00['h'];
                _0x350c39['health'] = _0x2aae00['ch'];
                _0x350c39['currentVisual'] = 'baller';
            }, function (_0x55fb88) {
                if (_0x55fb88['newGrapple'] == null) {
                    _0x55fb88['grapple']['position']['x'] = _0x55fb88['visual']['position']['x'] + Math['cos'](_0x55fb88['visual']['rotation']) * _0x55fb88['grappleDist'];
                    _0x55fb88['grapple']['position']['y'] = _0x55fb88['visual']['position']['y'] + Math['sin'](_0x55fb88['visual']['rotation']) * _0x55fb88['grappleDist'];
                    _0x55fb88['grapple']['rotation'] = _0x55fb88['visual']['rotation'] + Math['PI'] / 0x2;
                    _0x55fb88['rope']['height'] = 0x0;
                } else {
                    _0x55fb88['grapple']['position']['x'] = _0x117b6e['lerp'](_0x55fb88['grapple']['oldPosition']['x'], _0x55fb88['newGrapple']['x']);
                    _0x55fb88['grapple']['position']['y'] = _0x117b6e['lerp'](_0x55fb88['grapple']['oldPosition']['y'], _0x55fb88['newGrapple']['y']);
                    _0x55fb88['grappleDist'] -= _0x55fb88['grappleDifference'];
                    _0x55fb88['rope']['position']['x'] = (_0x55fb88['visual']['position']['x'] + Math['cos'](_0x55fb88['visual']['rotation']) * _0x55fb88['grappleDist'] + _0x55fb88['grapple']['position']['x']) / 0x2;
                    _0x55fb88['rope']['position']['y'] = (_0x55fb88['visual']['position']['y'] + Math['sin'](_0x55fb88['visual']['rotation']) * _0x55fb88['grappleDist'] + _0x55fb88['grapple']['position']['y']) / 0x2;
                    var _0x3ecb22 = _0x55fb88['grapple']['position']['x'] - (_0x55fb88['visual']['position']['x'] + Math['cos'](_0x55fb88['visual']['rotation']) * _0x55fb88['grappleDist']);
                    var _0x184023 = _0x55fb88['grapple']['position']['y'] - (_0x55fb88['visual']['position']['y'] + Math['sin'](_0x55fb88['visual']['rotation']) * _0x55fb88['grappleDist']);
                    _0x55fb88['rope']['height'] = Math['sqrt'](_0x3ecb22 * _0x3ecb22 + _0x184023 * _0x184023);
                    _0x55fb88['rope']['rotation'] = Math['atan2'](_0x184023, _0x3ecb22) + Math['PI'] / 0x2;
                    _0x55fb88['grappleDist'] = _0x55fb88['actualGrappleDist'];
                    if (_0x55fb88['isNull']) {
                        _0x55fb88['grapple']['rotation'] = _0x55fb88['visual']['rotation'] + Math['PI'] / 0x2;
                    }
                }
                if (!_0x55fb88['isPreview']) {
                    _0x55fb88['grapple']['parent']['remove'](_0x55fb88['grapple']);
                    _0x55fb88['visual']['parent']['remove'](_0x55fb88['visual']);
                    _0x2a3fa5['add'](_0x55fb88['grapple']);
                    _0x2a3fa5['add'](_0x55fb88['visual']);
                }
                var _0x3af06f = Math['max'](Math['min'](0x4 - Math['ceil'](_0x55fb88['health'] / _0x55fb88['fullHealth'] * 0x4), 0x3), 0x0);
                if ('baller' + _0x3af06f != _0x55fb88['currentVisual']) {
                    _0x55fb88['visual']['image'] = _0x52811c('baller' + _0x3af06f);
                }
                _0x55fb88['currentVisual'] = 'baller' + _0x3af06f;
                if (_0x55fb88['done']) {
                    _0x55fb88['visual']['opacity'] -= 0.07 * _0x117b6e['clientDetails']['dt'];
                    _0x55fb88['grapple']['opacity'] = _0x55fb88['visual']['opacity'];
                    _0x55fb88['rope']['opacity'] = _0x55fb88['visual']['opacity'];
                    if (_0x55fb88['visual']['opacity'] <= 0x0) {
                        _0x55fb88['grapple']['parent']['remove'](_0x55fb88['grapple']);
                        _0x55fb88['rope']['parent']['remove'](_0x55fb88['rope']);
                        for (var _0x412d61 = 0x0; _0x412d61 < _0x117b6e['objects']['length']; _0x412d61++) {
                            if (_0x117b6e['objects'][_0x412d61]['id'] == _0x55fb88['id']) {
                                if (_0x117b6e['objects'][_0x412d61]['visual']['parent'] != null) _0x117b6e['objects'][_0x412d61]['visual']['parent']['remove'](_0x117b6e['objects'][_0x412d61]['visual']);
                                _0x117b6e['objects']['splice'](_0x412d61, 0x1);
                            }
                        }
                    }
                }
            }, function (_0x23895d, _0x15a3a1) {
                if (isNaN(_0x23895d['new']['position']['x'])) {
                    console['log']('NaN baller');
                    console['log'](_0x23895d);
                }
                if (_0x23895d['newGrapple'] != null) {
                    _0x23895d['grapple']['oldPosition']['x'] = _0x23895d['grapple']['position']['x'];
                    _0x23895d['grapple']['oldPosition']['y'] = _0x23895d['grapple']['position']['y'];
                }
                if (_0x23895d['isNull']) {
                    _0x23895d['newGrapple'] = null;
                    _0x23895d['isNull'] = ![];
                }
                if (_0x15a3a1['grapple'] !== undefined) {
                    if (_0x15a3a1['grapple'] == ![]) {
                        _0x23895d['isNull'] = !![];
                        _0x23895d['newGrapple'] = new _0x117b6e['Vector2']();
                        _0x23895d['newGrapple']['x'] = _0x23895d['visual']['position']['x'] + Math['cos'](_0x23895d['visual']['rotation']) * _0x23895d['grappleDist'];
                        _0x23895d['newGrapple']['y'] = _0x23895d['visual']['position']['y'] + Math['sin'](_0x23895d['visual']['rotation']) * _0x23895d['grappleDist'];
                    } else {
                        _0x496a8f('grapple', _0x117b6e['me']['visual']['position'], _0x23895d['visual']['position'], !![])['volume'] /= 0x4;
                        _0x23895d['newGrapple'] = new _0x117b6e['Vector2'](_0x15a3a1['grapple'][0x0], _0x15a3a1['grapple'][0x1]);
                        _0x23895d['grapple']['oldPosition'] = new _0x117b6e['Vector2']();
                        _0x23895d['grapple']['oldPosition']['x'] = _0x23895d['visual']['position']['x'] + Math['cos'](_0x23895d['visual']['rotation']) * _0x23895d['grappleDist'];
                        _0x23895d['grapple']['oldPosition']['y'] = _0x23895d['visual']['position']['y'] + Math['sin'](_0x23895d['visual']['rotation']) * _0x23895d['grappleDist'];
                    }
                }
                if (_0x15a3a1['h'] !== undefined) {
                    _0x23895d['health'] = _0x15a3a1['h'];
                    if (_0x23895d['health'] < 0x0) {
                        _0x23895d['health'] = 0x0;
                    }
                }
                if (_0x15a3a1['bounced']) {
                    var _0xf5e695 = _0x496a8f('bounce', _0x117b6e['me']['visual']['position'], _0x23895d['visual']['position']);
                    if (_0xf5e695 != null) {
                        _0xf5e695['volume'] *= 0.6;
                    }
                }
            }, function (_0x5c190a) {
                _0x5c190a['done'] = !![];
                return !![];
            });
            _0x117b6e['addType']('object', function (_0xe1a76d, _0x3f595b) {
                _0xe1a76d['envType'] = _0x3f595b['type'];
                _0xe1a76d['visual'] = new _0x117b6e['object']();
                _0xe1a76d['sprite'] = new _0x117b6e['object']();
                if (_0x3f595b['type'] == 'pumpkin' && Math['random']() > 0.5) {
                    _0x3f595b['type'] = 'pumpkin1';
                }
                if (_0x3f595b['type'] != 'wall') _0xe1a76d['sprite'] = new _0x117b6e['image'](_0x52811c(_0x3f595b['type']), 0x0, 0x0, _0x3f595b['width'], _0x3f595b['height']);
                if (_0x3f595b['width'] == 0x0 || _0x3f595b['height'] == 0x0) {
                    _0xe1a76d['sprite']['width'] = 0x0;
                    _0xe1a76d['sprite']['height'] = 0x0;
                }
                _0xe1a76d['visual']['add'](_0xe1a76d['sprite']);
                _0xe1a76d['ui'] = new _0x117b6e['object']();
                _0xe1a76d['shake'] = 0x0;
                _0xe1a76d['done'] = ![];
                _0xe1a76d['health'] = _0x3f595b['health'];
                _0xe1a76d['fullHealth'] = _0x3f595b['fullHealth'];
                _0xe1a76d['ticksSinceHealthChange'] = 0x1f4;
                var _0x38327e = 0x32;
                _0xe1a76d['healthbar'] = new _0x117b6e['rectangle'](0x0, _0x38327e, _0xe1a76d['health'], 0xe, '#0D0');
                _0xe1a76d['healthbar']['width'] = 0x0;
                _0xe1a76d['healthBackground'] = new _0x117b6e['rectangle'](0x0, _0x38327e, 0x64, 0xe, '#000', 0.3);
                _0xe1a76d['ui']['add'](_0xe1a76d['healthBackground']);
                _0xe1a76d['ui']['add'](_0xe1a76d['healthbar']);
                var _0x3e7eb6 = 0xa;
                var _0xb5cc31 = -0x19;
                var _0x349df8 = 'bold';
                _0xe1a76d['totalHealth'] = new _0x117b6e['text'](_0xe1a76d['fullHealth'], _0xb5cc31 + 0x3, _0x38327e, '#FFF', 'Arial', _0x3e7eb6, _0x349df8, 0.9, 'left');
                if (_0xe1a76d['fullHealth'] == 0x64) {
                    _0xe1a76d['totalHealth']['canvas'] = _0x25a510;
                }
                _0xe1a76d['ui']['add'](_0xe1a76d['totalHealth']);
                _0xe1a76d['middleHealth'] = new _0x117b6e['text']('/', _0xb5cc31 + 0x1, _0x38327e, '#FFF', 'Arial', _0x3e7eb6, _0x349df8, 0.5, 'center');
                _0xe1a76d['middleHealth']['canvas'] = _0x53fe60;
                _0xe1a76d['ui']['add'](_0xe1a76d['middleHealth']);
                _0xe1a76d['currentHealth'] = new _0x117b6e['text']('100', _0xb5cc31 - 0x3, _0x38327e, '#FFF', 'Arial', _0x3e7eb6, _0x349df8, 0x1, 'right');
                _0xe1a76d['ui']['add'](_0xe1a76d['currentHealth']);
                _0xe1a76d['ui']['opacity'] = 0x0;
                _0xe1a76d['visual']['add'](_0xe1a76d['ui']);
                _0xe1a76d['shakePosition'] = new _0x117b6e['Vector2'](0x0, 0x0);
                _0xe1a76d['sprite']['position'] = _0xe1a76d['shakePosition'];
                _0xe1a76d['velocity'] = new _0x117b6e['Vector2'](0x0, 0x0);
                _0xe1a76d['elasticity'] = 0.01;
                _0xe1a76d['drag'] = 0.5;
                _0xe1a76d['playSound'] = _0x4db58a;
                if (_0xe1a76d['envType'] == 'wall') {
                    if (_0x32a36c[_0x3f595b['mat']] == 'brick') {
                        _0xe1a76d['playSound'] = _0x1d0a6a;
                    } else if (_0x32a36c[_0x3f595b['mat']] == 'metal') {
                        _0xe1a76d['playSound'] = _0x28caa2;
                    }
                } else if (_0xe1a76d['envType'] == 'rock') {
                    _0xe1a76d['playSound'] = _0x1d0a6a;
                } else if (_0xe1a76d['envType'] == 'trash' || _0xe1a76d['envType'] == 'silo') {
                    _0xe1a76d['playSound'] = _0x28caa2;
                }
                if (_0x3f595b['type'] == 'trash') {
                    _0xe1a76d['sprite']['size'] = 1.34;
                }
                if (_0x3f595b['type'] == 'hay') {
                    _0xe1a76d['sprite']['size'] = 0x1;
                }
                if (_0x3f595b['type'] == 'basketballnet') {
                    _0xe1a76d['sprite']['width'] = 0x12c;
                    _0xe1a76d['sprite']['height'] = 0xc8;
                    _0xe1a76d['playSound'] = _0x28caa2;
                }
                if (_0x3f595b['type'] == 'bench') {
                    _0xe1a76d['sprite']['width'] = 0x1c2;
                    _0xe1a76d['sprite']['height'] = 0x96;
                    _0xe1a76d['playSound'] = _0x28caa2;
                }
                if (_0x3f595b['type'] == 'metalbench') {
                    _0xe1a76d['sprite']['width'] = 0xc8;
                    _0xe1a76d['sprite']['height'] = 0xc8;
                    _0xe1a76d['playSound'] = _0x28caa2;
                }
                if (_0x3f595b['type'] == 'counter') {
                    _0xe1a76d['sprite']['width'] = 0x190;
                    _0xe1a76d['sprite']['height'] = 0x64;
                    _0xe1a76d['playSound'] = _0x28caa2;
                }
                if (_0x3f595b['type'] == 'corn') {
                    _0xe1a76d['sprite']['size'] = 1.9;
                }
                if (_0x3f595b['type'] == 'pumpkin' || _0x3f595b['type'] == 'pumpkin1') {
                    _0xe1a76d['sprite']['size'] = 1.2;
                }
                if (_0x3f595b['type'] == 'table') {
                    _0xe1a76d['sprite']['width'] = 0xaf;
                    _0xe1a76d['sprite']['height'] = 0x7d;
                }
                if (_0x3f595b['type'] == 'chair') {
                    _0xe1a76d['sprite']['width'] = 0x55;
                    _0xe1a76d['sprite']['height'] = 0x55;
                }
                if (_0x3f595b['type'] == 'couch' || _0x3f595b['type'] == 'junglecouch') {
                    _0xe1a76d['sprite']['size'] = 1.3;
                }
                if (_0x3f595b['type'] == 'desk') {
                    _0xe1a76d['sprite']['size'] = 1.2;
                }
                if (_0x3f595b['type'] == 'wall') {
                    _0xe1a76d['material'] = _0x32a36c[_0x3f595b['mat']];
                    _0x2a3fa5['objects']['unshift'](_0xe1a76d['visual']);
                    _0xe1a76d['visual']['parent'] = _0x2a3fa5;
                    _0xe1a76d['sprite']['opacity'] = 0.9;
                    _0xe1a76d['sprite']['addBelow'](new _0x117b6e['image'](_0x52811c('blue' + _0xe1a76d['material']), 0x0, 0x0, _0x478d05 * _0x36dfb4 / 0x2, _0x478d05, 0.7));
                    _0xe1a76d['wall0'] = new _0x117b6e['image'](_0x52811c(_0xe1a76d['material'] + 'wall0'), 0x0, 0x0, _0x478d05 * _0x36dfb4, _0x478d05 * 0x2);
                    _0xe1a76d['wall1'] = new _0x117b6e['image'](_0x52811c(_0xe1a76d['material'] + 'wall1'), 0x0, 0x0, _0x478d05 * _0x36dfb4, _0x478d05 * 0x2);
                    _0xe1a76d['wall2'] = new _0x117b6e['image'](_0x52811c(_0xe1a76d['material'] + 'wall2'), 0x0, 0x0, _0x478d05 * _0x36dfb4, _0x478d05 * 0x2);
                    _0xe1a76d['rising'] = [];
                    _0xe1a76d['lowering'] = [_0xe1a76d['wall0']];
                    _0xe1a76d['sprite']['add'](_0xe1a76d['wall0']);
                    _0xe1a76d['sprite']['add'](_0xe1a76d['wall1']);
                    _0xe1a76d['sprite']['add'](_0xe1a76d['wall2']);
                    _0xe1a76d['wall0']['opacity'] = 0x0;
                    _0xe1a76d['wall1']['opacity'] = 0x0;
                    _0xe1a76d['wall2']['opacity'] = 0x0;
                    if (_0x3f595b['health'] / _0xe1a76d['fullHealth'] > 0.8 && _0xe1a76d['wall2']['opacity'] < 0x1 && _0xe1a76d['lowering']['indexOf'](_0xe1a76d['wall2']) < 0x0 && _0xe1a76d['rising']['indexOf'](_0xe1a76d['wall2']) < 0x0) {
                        _0xe1a76d['lowering']['push'](_0xe1a76d['wall2']);
                    }
                    if (_0x3f595b['health'] / _0xe1a76d['fullHealth'] >= 0.4 && _0xe1a76d['wall1']['opacity'] < 0x1 && _0xe1a76d['lowering']['indexOf'](_0xe1a76d['wall1']) < 0x0 && _0xe1a76d['rising']['indexOf'](_0xe1a76d['wall1']) < 0x0) {
                        _0xe1a76d['lowering']['push'](_0xe1a76d['wall1']);
                    }
                } else if (_0x3f595b['type']['substring'](0x0, 0x4) == 'tree' || _0x3f595b['type'] == 'rock' || _0x3f595b['type'] == 'jungletree' || _0x3f595b['type'] == 'cherryblossom') {
                    _0xe1a76d['sprite']['width'] = _0xe1a76d['sprite']['height'] = _0xe1a76d['sprite']['width'] * 0x2;
                    _0xe1a76d['visual']['rotation'] = Math['random']() * 0x2 * Math['PI'];
                    if (_0x3f595b['type'] == 'rock') {
                        _0x2a3fa5['addBelow'](_0xe1a76d['visual']);
                    } else {
                        _0x2cb9c6['addBelow'](_0xe1a76d['visual']);
                    }
                    if (_0x595d79) {
                        if (_0x3f595b['type']['substring'](0x0, 0x4) == 'tree') {
                            _0xe1a76d['sprite']['image'] = _0x52811c('christmastree' + (_0x3f595b['type']['substring'](0x4, 0x5) * 0x2 + Math['floor'](Math['random']() * 0x2)));
                        }
                    }
                } else if (_0x3f595b['type'] == 'trash' || _0x3f595b['type'] == 'chair' || _0x3f595b['type'] == 'table' || _0x3f595b['type'] == 'couch' || _0x3f595b['type'] == 'bench' || _0x3f595b['type'] == 'metalbench' || _0x3f595b['type'] == 'counter') {
                    _0x2a3fa5['addBelow'](_0xe1a76d['visual']);
                } else if (_0x3f595b['type'] == 'basketballnet') {
                    _0x2cb9c6['addBelow'](_0xe1a76d['visual']);
                } else {
                    _0x2a3fa5['add'](_0xe1a76d['visual']);
                }
            }, function (_0x57438c) {
                _0x57438c['ui']['rotation'] = -_0x57438c['visual']['rotation'];
                _0x57438c['healthbar']['width'] += (_0x57438c['health'] / _0x57438c['fullHealth'] * 0x64 - _0x57438c['healthbar']['width']) * 0.1 * _0x117b6e['clientDetails']['dt'];
                _0x57438c['healthbar']['width'] = Math['min'](Math['max'](_0x57438c['healthbar']['width'], 0x0), 0x64);
                _0x57438c['healthbar']['position']['x'] = (_0x57438c['healthbar']['width'] - 0x64) / 0x2;
                var _0x26e90a = Math['random']() * Math['PI'] * 0x2;
                var _0x216dcc = 0.5;
                _0x57438c['sprite']['position']['x'] = Math['cos'](_0x26e90a) * _0x57438c['shake'] * _0x216dcc;
                _0x57438c['sprite']['position']['y'] = Math['sin'](_0x26e90a) * _0x57438c['shake'] * _0x216dcc;
                _0x57438c['shake'] -= _0x117b6e['clientDetails']['dt'];
                _0x57438c['shake'] = Math['max'](_0x57438c['shake'], 0x0);
                _0x57438c['velocity']['x'] -= _0x57438c['velocity']['x'] * _0x57438c['drag'] * _0x117b6e['clientDetails']['dt'];
                _0x57438c['velocity']['y'] -= _0x57438c['velocity']['y'] * _0x57438c['drag'] * _0x117b6e['clientDetails']['dt'];
                _0x57438c['velocity']['x'] -= _0x57438c['shakePosition']['x'] * _0x57438c['elasticity'] * _0x117b6e['clientDetails']['dt'];
                _0x57438c['velocity']['y'] -= _0x57438c['shakePosition']['y'] * _0x57438c['elasticity'] * _0x117b6e['clientDetails']['dt'];
                _0x57438c['shakePosition']['x'] += _0x57438c['velocity']['x'] * _0x117b6e['clientDetails']['dt'];
                _0x57438c['shakePosition']['y'] += _0x57438c['velocity']['y'] * _0x117b6e['clientDetails']['dt'];
                if (_0x57438c['shadow'] !== undefined && _0x117b6e['me']['visual'] !== undefined) {
                    _0x57438c['shadow']['width'] = _0x57438c['sprite']['width'];
                    _0x57438c['shadow']['height'] = _0x57438c['sprite']['height'];
                    _0x57438c['shadowContainer']['rotation'] = -_0x57438c['visual']['rotation'];
                    _0x57438c['shadow']['rotation'] = _0x57438c['visual']['rotation'];
                    _0x57438c['shadow']['position']['x'] = _0x57438c['visual']['position']['x'] - _0x117b6e['me']['visual']['position']['x'];
                    _0x57438c['shadow']['position']['y'] = _0x57438c['visual']['position']['y'] - _0x117b6e['me']['visual']['position']['y'];
                    var _0x383287 = 0.1;
                    _0x57438c['shadow']['position']['x'] *= _0x383287;
                    _0x57438c['shadow']['position']['y'] *= _0x383287;
                    _0x57438c['shadow']['position']['x'] += _0x57438c['sprite']['position']['x'];
                    _0x57438c['shadow']['position']['y'] += _0x57438c['sprite']['position']['y'];
                    _0x57438c['shadow']['opacity'] = Math['max'](0.2 - (Math['abs'](_0x57438c['shadow']['position']['x']) + Math['abs'](_0x57438c['shadow']['position']['y'])) / 0x190, 0x0);
                    _0x57438c['shadow']['size'] = 1.1 + (Math['abs'](_0x57438c['shadow']['position']['x']) + Math['abs'](_0x57438c['shadow']['position']['y'])) / 0x190;
                }
                _0x57438c['ticksSinceHealthChange'] += _0x117b6e['clientDetails']['dt'];
                if (_0x57438c['ticksSinceHealthChange'] >= 0x1f4) {
                    _0x57438c['ticksSinceHealthChange'] = 0x1f4;
                    _0x57438c['ui']['opacity'] -= _0x117b6e['clientDetails']['dt'] / 0x32;
                    _0x57438c['ui']['opacity'] = Math['max'](_0x57438c['ui']['opacity'], 0x0);
                } else {
                    _0x57438c['ui']['opacity'] += _0x117b6e['clientDetails']['dt'] / 0x14;
                    _0x57438c['ui']['opacity'] = Math['min'](_0x57438c['ui']['opacity'], 0x1);
                }
                if (_0x57438c['envType'] == 'wall') {
                    for (var _0x129e4e = 0x0; _0x129e4e < _0x57438c['lowering']['length']; _0x129e4e++) {
                        _0x57438c['lowering'][_0x129e4e]['opacity'] += _0x117b6e['clientDetails']['dt'] / 0x14;
                        _0x57438c['lowering'][_0x129e4e]['width'] = _0x14c37c(_0x478d05 * _0x36dfb4, _0x478d05 * _0x36dfb4 / 0x2, _0x57438c['lowering'][_0x129e4e]['opacity']);
                        _0x57438c['lowering'][_0x129e4e]['height'] = _0x14c37c(_0x478d05 * 0x2, _0x478d05, _0x57438c['lowering'][_0x129e4e]['opacity']);
                        if (_0x57438c['lowering'][_0x129e4e]['opacity'] >= 0x1) {
                            _0x57438c['lowering'][_0x129e4e]['opacity'] = 0x1;
                            _0x57438c['lowering'][_0x129e4e]['width'] = _0x14c37c(_0x478d05 * _0x36dfb4, _0x478d05 * _0x36dfb4 / 0x2, _0x57438c['lowering'][_0x129e4e]['opacity']);
                            _0x57438c['lowering'][_0x129e4e]['height'] = _0x14c37c(_0x478d05 * 0x2, _0x478d05, _0x57438c['lowering'][_0x129e4e]['opacity']);
                            _0x57438c['lowering']['splice'](_0x129e4e, 0x1);
                            _0x129e4e--;
                        }
                    }
                    for (var _0x129e4e = 0x0; _0x129e4e < _0x57438c['rising']['length']; _0x129e4e++) {
                        _0x57438c['rising'][_0x129e4e]['opacity'] -= _0x117b6e['clientDetails']['dt'] / 0x14;
                        _0x57438c['rising'][_0x129e4e]['width'] = _0x14c37c(_0x478d05 * _0x36dfb4, _0x478d05 * _0x36dfb4 / 0x2, _0x57438c['rising'][_0x129e4e]['opacity']);
                        _0x57438c['rising'][_0x129e4e]['height'] = _0x14c37c(_0x478d05 * 0x2, _0x478d05, _0x57438c['rising'][_0x129e4e]['opacity']);
                        if (_0x57438c['rising'][_0x129e4e]['opacity'] <= 0x0) {
                            _0x57438c['rising'][_0x129e4e]['opacity'] = 0x0;
                            _0x57438c['rising']['splice'](_0x129e4e, 0x1);
                            _0x129e4e--;
                        }
                    }
                }
                if (_0x57438c['done']) {
                    _0x57438c['visual']['opacity'] -= 0.07 * _0x117b6e['clientDetails']['dt'];
                    if (_0x57438c['visual']['opacity'] <= 0x0) {
                        _0x57438c['ui']['remove'](_0x57438c['totalHealth']);
                        _0x57438c['ui']['remove'](_0x57438c['middleHealth']);
                        _0x57438c['ui']['remove'](_0x57438c['currentHealth']);
                        if (_0x57438c['totalHealth']['canvas'] != _0x25a510) {
                            _0x57438c['totalHealth']['unlink']();
                        }
                        _0x57438c['currentHealth']['unlink']();
                        _0x57438c['totalHealth'] = null;
                        _0x57438c['middleHealth'] = null;
                        _0x57438c['currentHealth'] = null;
                        for (var _0x129e4e = 0x0; _0x129e4e < _0x117b6e['objects']['length']; _0x129e4e++) {
                            if (_0x117b6e['objects'][_0x129e4e]['id'] == _0x57438c['id']) {
                                if (_0x117b6e['objects'][_0x129e4e]['visual']['parent'] != null) _0x117b6e['objects'][_0x129e4e]['visual']['parent']['remove'](_0x117b6e['objects'][_0x129e4e]['visual']);
                                _0x117b6e['objects']['splice'](_0x129e4e, 0x1);
                            }
                        }
                    }
                }
            }, function (_0x18a465, _0x4a874d) {
                if (_0x4a874d['health'] !== undefined) {
                    if (_0x4a874d['health'] < _0x18a465['health']) {
                        _0x18a465['shake'] = _0x18a465['health'] - _0x4a874d['health'];
                        _0x18a465['playSound'](_0x18a465);
                        _0x18a465['shake'] = Math['min'](_0x18a465['shake'], 0x1e);
                    }
                    if (_0x18a465['envType'] == 'wall') {
                        if (_0x4a874d['health'] < _0x18a465['health']) {
                            if (_0x4a874d['health'] / _0x18a465['fullHealth'] <= 0.7 && _0x18a465['wall2']['opacity'] > 0x0 && _0x18a465['rising']['indexOf'](_0x18a465['wall2']) < 0x0) {
                                _0x18a465['rising']['push'](_0x18a465['wall2']);
                                if (_0x18a465['lowering']['indexOf'](_0x18a465['wall2']) >= 0x0) {
                                    _0x18a465['lowering']['splice'](_0x18a465['lowering']['indexOf'](_0x18a465['wall2']), 0x1);
                                }
                            }
                            if (_0x4a874d['health'] / _0x18a465['fullHealth'] <= 0.3 && _0x18a465['wall1']['opacity'] > 0x0 && _0x18a465['rising']['indexOf'](_0x18a465['wall1']) < 0x0) {
                                _0x18a465['rising']['push'](_0x18a465['wall1']);
                                if (_0x18a465['lowering']['indexOf'](_0x18a465['wall1']) >= 0x0) {
                                    _0x18a465['lowering']['splice'](_0x18a465['lowering']['indexOf'](_0x18a465['wall2']), 0x1);
                                }
                            }
                        } else {
                            if (_0x4a874d['health'] / _0x18a465['fullHealth'] > 0.8 && _0x18a465['wall2']['opacity'] < 0x1 && _0x18a465['lowering']['indexOf'](_0x18a465['wall2']) < 0x0 && _0x18a465['rising']['indexOf'](_0x18a465['wall2']) < 0x0) {
                                _0x18a465['lowering']['push'](_0x18a465['wall2']);
                            }
                            if (_0x4a874d['health'] / _0x18a465['fullHealth'] >= 0.4 && _0x18a465['wall1']['opacity'] < 0x1 && _0x18a465['lowering']['indexOf'](_0x18a465['wall1']) < 0x0 && _0x18a465['rising']['indexOf'](_0x18a465['wall1']) < 0x0) {
                                _0x18a465['lowering']['push'](_0x18a465['wall1']);
                            }
                        }
                    }
                    if (_0x18a465['health'] != _0x4a874d['health']) {
                        _0x18a465['ticksSinceHealthChange'] = 0x0;
                        if (_0x18a465['envType'] == 'wall' && _0x4a874d['health'] == _0x18a465['fullHealth']) {
                            _0x18a465['shake'] = 0xf;
                        }
                    }
                    if (_0x4a874d['health'] == _0x18a465['fullHealth']) {
                        _0x18a465['ticksSinceHealthChange'] = 0x1f4;
                    }
                    _0x18a465['currentHealth']['text'] = _0x4a874d['health'];
                    _0x18a465['health'] = _0x4a874d['health'];
                }
            }, function (_0xdb5cd4, _0x2f0c2c) {
                if (_0xdb5cd4['done']) {
                    return !![];
                }
                if (_0x2f0c2c['health'] !== undefined) {
                    if (_0x2f0c2c['health'] < _0xdb5cd4['health'] && _0xdb5cd4['health'] != 0x0) {
                        _0xdb5cd4['shake'] = 0x6;
                        _0xdb5cd4['ticksSinceHealthChange'] = 0x0;
                        _0xdb5cd4['playSound'](_0xdb5cd4);
                    }
                    _0x2f0c2c['health'] = Math['max'](_0x2f0c2c['health'], 0x0);
                    _0xdb5cd4['currentHealth']['text'] = _0x2f0c2c['health'];
                    _0xdb5cd4['health'] = _0x2f0c2c['health'];
                }
                if (_0xdb5cd4['envType']['substring'](0x0, 0x4) == 'tree' || _0xdb5cd4['envType'] == 'jungletree') {
                    var _0x27a0ac = _0x5272a6 == 0x0 ? 0xc : 0x6;
                    for (var _0x3bad83 = 0x0; _0x3bad83 < _0x27a0ac; _0x3bad83++) {
                        var _0x233bc6 = (Math['random']() - 0.5) * 0x4;
                        var _0x20ec92 = (Math['random']() - 0.5) * 0x4;
                        if (_0x595d79) {}
                        var _0x94af97 = _0x117b6e['customCustomParticle']('leaf', _0xdb5cd4, (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 0x1, _0x233bc6, _0x20ec92);
                        if (_0x94af97 === undefined) {
                            console['log']('SOMEHOW GOT UNDEFINED');
                        }
                    }
                    _0xdb5cd4['done'] = !![];
                    return !![];
                } else if (_0xdb5cd4['envType'] == 'rock') {
                    var _0x27a0ac = _0x5272a6 == 0x0 ? 0x8 : 0x4;
                    for (var _0x3bad83 = 0x0; _0x3bad83 < _0x27a0ac; _0x3bad83++) {
                        var _0x233bc6 = (Math['random']() - 0.5) * 0x4;
                        var _0x20ec92 = (Math['random']() - 0.5) * 0x4;
                        _0x117b6e['customCustomParticle']('pebble', _0xdb5cd4, (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 1.2, _0x233bc6, _0x20ec92);
                    }
                    _0xdb5cd4['done'] = !![];
                    return !![];
                } else if (_0xdb5cd4['envType'] == 'trash') {
                    var _0x27a0ac = _0x5272a6 == 0x0 ? 0x8 : 0x4;
                    for (var _0x3bad83 = 0x0; _0x3bad83 < _0x27a0ac; _0x3bad83++) {
                        var _0x233bc6 = (Math['random']() - 0.5) * 0x4;
                        var _0x20ec92 = (Math['random']() - 0.5) * 0x4;
                        _0x117b6e['customCustomParticle']('scrap', _0xdb5cd4, (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 1.2, _0x233bc6, _0x20ec92);
                    }
                    _0xdb5cd4['done'] = !![];
                    return !![];
                } else if (_0xdb5cd4['envType'] == 'wall') {
                    _0xdb5cd4['rising']['push'](_0xdb5cd4['wall0']);
                    _0xdb5cd4['done'] = !![];
                    return !![];
                } else if (_0xdb5cd4['envType'] == 'corn' || _0xdb5cd4['envType'] == 'table' || _0xdb5cd4['envType'] == 'junglecouch' || _0xdb5cd4['envType'] == 'desk' || _0xdb5cd4['envType'] == 'chair' || _0xdb5cd4['envType'] == 'silo' || _0xdb5cd4['envType'] == 'couch' || _0xdb5cd4['envType'] == 'hay' || _0xdb5cd4['envType'] == 'bench' || _0xdb5cd4['envType'] == 'basketballnet' || _0xdb5cd4['envType'] == 'metalbench' || _0xdb5cd4['envType'] == 'counter' || _0xdb5cd4['envType'] == 'pumpkin' || _0xdb5cd4['envType'] == 'present' || _0xdb5cd4['envType'] == 'cherryblossom') {
                    _0xdb5cd4['done'] = !![];
                    return !![];
                }
            });

            function _0x46a9db(_0x369c1d) {
                return _0x369c1d > 0x3e7 ? (_0x369c1d / 0x3e8)['toFixed'](0x1) + 'k' : _0x369c1d;
            }
            var _0x529ae1 = 0x0;
            _0x117b6e['timers'] = [];
            _0x117b6e['time'] = function (_0x11b3cd) {
                _0x117b6e['timers']['push']({
                    'name': _0x11b3cd,
                    'time': performance['now']()
                });
            };
            _0x117b6e['timeEnd'] = function (_0x4cfbca) {
                for (var _0x54d887 = 0x0; _0x54d887 < _0x117b6e['timers']['length']; _0x54d887++) {
                    if (_0x117b6e['timers'][_0x54d887]['name'] == _0x4cfbca) {
                        var _0x1b5f57 = _0x117b6e['timers']['splice'](_0x54d887, 0x1)[0x0];
                        _0x54d887--;
                    }
                }
            };
            var _0x1bb0dd = -0x1;

            function _0x3d5ef5() {
                _0x5c6dd8['requestFrame'](_0x3d5ef5);
                _0x15b3f9();
                if (gameWrapper['showingInterstitialAd']) {
                    return;
                }
                _0x117b6e['time']('1');
                _0x34a800['clear']();
                var _0x43bace = 'initial';
                if (_0x117b6e['spectating'] && _0x34ea3f['isCollidingWithRectangle'](window['spawnButton'])) {
                    window['spawnButton']['size'] = 0x1;
                    window['spawnButton']['strokeOpacity'] = 0x1;
                    window['spawnButton']['opacity'] = 0.8;
                    window['spawnText']['opacity'] = 0x1;
                    _0x43bace = 'pointer';
                } else if (!_0x117b6e['spectating']) {
                    _0x43bace = 'none';
                } else {
                    window['spawnButton']['size'] = 0x1;
                    window['spawnButton']['strokeOpacity'] = 0.4;
                    window['spawnText']['fontSize'] = 0x1e;
                    window['spawnButton']['opacity'] = 0.6;
                }
                if (_0x117b6e['spectating'] && _0x26a43b['opacity'] != 0x1 && _0x34ea3f['isCollidingWithRectangle'](_0x4eb6d9)) {
                    _0x4eb6d9['strokeOpacity'] = 0x1;
                    _0x4eb6d9['opacity'] = 0.8;
                    _0x4eb6d9['opacity'] = 0x1;
                    _0x43bace = 'pointer';
                } else {
                    _0x4eb6d9['size'] = 0x1;
                    _0x4eb6d9['strokeOpacity'] = 0.4;
                    _0x4eb6d9['opacity'] = 0.6;
                    _0x372aa2['fontSize'] = 0x1e;
                }
                _0x34a800['c']['style']['cursor'] = _0x43bace;
                if (_0x26a43b['opacity'] != 0x1) {
                    _0x30d763['position']['x'] = -_0x2a3fa5['camera']['position']['x'] % 0x32 + _0x2a3fa5['camera']['position']['x'];
                    _0x30d763['position']['y'] = -_0x2a3fa5['camera']['position']['y'] % 0x32 + _0x2a3fa5['camera']['position']['y'];
                    _0x34a800['render'](_0x1d7b20);
                    _0x34a800['render'](_0x1e63a6);
                    _0x34a800['render'](_0x81476a);
                    _0x34a800['render'](_0x20b307);
                    _0x34a800['render'](_0x2a3fa5);
                    _0x34a800['render'](_0x2cb9c6);
                    _0x34a800['render'](_0x220553);
                    _0x34a800['render'](_0x3b464e);
                    var _0x43bace = 'none';
                    _0x390f0a['visible'] = _0x51bb9a['visible'] = _0x34ea3f['emulatedFromTouch'] && !_0x117b6e['spectating'] && !_0x454358;
                    _0x429599['visible'] = _0x34ea3f['emulatedFromTouch'];
                    if (_0x454358) {
                        _0x4babc3['visible'] = _0x19365d['visible'] = !![];
                        _0x43bace = 'initial';
                        _0x23f6f4['opacity'] = 0x1;
                        _0x573d64['size'] = 1.2;
                        _0x4babc3['text'] = 'Click and Drag to Swap Items';
                        _0x19365d['text'] = 'Drag to the Middle to Drop';
                        _0x4babc3['fontSize'] = _0x3f4d96;
                        _0x19365d['fontSize'] = _0x3f4d96;
                        if (_0x36ab4b != -0x1) {
                            _0x1bc362[_0x36ab4b]['position']['x'] = (_0x34ea3f['x'] - _0x1d03a5['x']) / _0x573d64['size'];
                            _0x1bc362[_0x36ab4b]['position']['y'] = (_0x34ea3f['y'] - _0x1d03a5['y']) / _0x573d64['size'];
                            _0x43bace = 'pointer';
                        }
                        for (var _0x3f5398 = 0x0; _0x3f5398 < _0x5c310['length']; _0x3f5398++) {
                            _0x5c310[_0x3f5398]['color'] = '#000';
                        }
                        if (_0x1043f4() != -0x1) {
                            _0x43bace = 'pointer';
                        }
                        if (_0x571852() != -0x1) {
                            _0x43bace = 'pointer';
                        }
                        if (_0x5bd9ae() != -0x1) {
                            _0x43bace = 'pointer';
                        }
                    } else {
                        _0x4babc3['visible'] = _0x19365d['visible'] = !_0x34ea3f['emulatedFromTouch'];
                        _0x4982e();
                        _0x23f6f4['opacity'] = 0x0;
                        _0x573d64['size'] = 0x1;
                        _0x4babc3['text'] = 'Press ' + _0x45786e('Build') + ' to Build';
                        _0x19365d['text'] = 'Press ' + _0x45786e('Inventory') + ' to Manage Inventory';
                        _0x4babc3['fontSize'] = _0x235f80;
                        _0x19365d['fontSize'] = _0x235f80;
                        for (var _0x3f5398 = 0x0; _0x3f5398 < _0x2af41a['length']; _0x3f5398++) {
                            _0x2af41a[_0x3f5398]['opacity'] = 0x0;
                        }
                    }
                    if (!_0x117b6e['spectating']) {
                        _0x34a800['c']['style']['cursor'] = _0x43bace;
                    }
                    _0x4feda3['text'] = _0x4babc3['text'];
                    _0x4cb6bb['text'] = _0x19365d['text'];
                    _0x4feda3['fontSize'] = _0x4babc3['fontSize'];
                    _0x4cb6bb['fontSize'] = _0x4babc3['fontSize'];
                    _0x4233b3();
                }
                _0x117b6e['timeEnd']('1');
                _0x117b6e['time']('2');
                _0x3746ff += _0x117b6e['clientDetails']['dt'] / 0x32;
                if (_0x3746ff > Math['PI'] * 0x2) {
                    _0x3746ff -= Math['PI'] * 0x2;
                }
                var _0x149316 = Math['sin'](_0x3746ff) * 0.13;
                if (_0x5272a6 == 0x0) {
                    for (var _0x3f5398 = 0x0; _0x3f5398 < window['grassTypes']; _0x3f5398++) {
                        window['grass' + _0x3f5398]['rotational']['rotation'] = _0x149316;
                    }
                }
                if (_0x26a43b['opacity'] != 0x1) {
                    _0x34a800['render'](_0x39d88c);
                }
                if (!_0x117b6e['spectating'] && _0x595d79) {}
                if (_0x5525d5) {
                    _0x34a800['render'](_0xb4e088);
                }
                if (_0x117b6e['spectating'] && !_0x413d8d) {
                    _0x174aba();
                    if (_0x12f8c9['opacity'] == 0x1) {
                        _0x23b709['opacity'] += _0x117b6e['clientDetails']['dt'] / 0x190;
                    } else {
                        _0x23b709['opacity'] += _0x117b6e['clientDetails']['dt'] / 0x32;
                    }
                    _0x23b709['opacity'] = Math['min'](_0x23b709['opacity'], 0x1);
                    if (_0x26a43b['opacity'] != 0x1) {
                        if (gameWrapper['enabled'] && _0x117b6e['now'] - _0x2ce264 > 0x4 * 0x3c * 0x3e8) {
                            _0x2ce264 = _0x117b6e['now'];
                            var _0x48eb7b = _0x2d0261();
                            if (_0x48eb7b == null || !_0x48eb7b['isOwned']) {
                                setTimeout(function () {
                                    gameWrapper['showInterstitialAd']();
                                }, 0x3e8);
                            }
                        }
                        var _0x3491db = document['getElementById']('deathscreentopleft')['style']['visibility'];
                        _0x2baa30('deathscreentopleft');
                        if (!_0x3491db) {}
                        if (_0x34ea3f['locked']) {
                            document['exitPointerLock']();
                        }
                    } else {
                        _0x36e333('deathscreentopleft');
                    }
                    _0x34a800['render'](_0x23b709);
                } else {
                    _0x36e333('deathscreentopleft');
                    _0x23b709['opacity'] = 0x0;
                }
                if (_0x117b6e['spectating'] && _0x26a43b['opacity'] == 0x1) {
                    _0x29af9f['showName'](_0x117b6e, _0x19dd05);
                    _0x2112dc -= _0x117b6e['clientDetails']['dt'];
                    try {
                        var _0x424b3d = 0x1 / (_0x34a800['ratio'] / _0x34a800['qualitySize']);
                        if (window['innerWidth'] >= 0x556 && window['innerWidth'] < 0x780) {
                            _0x424b3d = 0.9 * _0x117b6e['devicePixelRatio'];
                        }
                        for (var _0x3f5398 = 0x0; _0x3f5398 < _0x19dd05['length']; _0x3f5398++) {
                            _0x1bb0dd = _0x424b3d;
                            var _0x370601 = 0x1 / (_0x34a800['ratio'] / _0x34a800['qualitySize']);
                            if (window['innerWidth'] >= 0x556 && window['innerWidth'] < 0x780 && _0x19dd05[_0x3f5398] != 'nameBox') {}
                            _0x370601 /= _0x117b6e['devicePixelRatio'];
                            if (window['innerWidth'] < 0x3e8 || _0x643dd1) {
                                if (_0x19dd05[_0x3f5398] == 'nameBox') {} else {
                                    _0x370601 *= 1.5;
                                }
                            }
                            if (_0x19dd05[_0x3f5398] == 'locker') {
                                document['getElementById'](_0x19dd05[_0x3f5398])['style']['transform'] = 'scale(' + _0x370601 + ') translate(0px, -100px)';
                            } else {
                                document['getElementById'](_0x19dd05[_0x3f5398])['style']['transform'] = 'scale(' + _0x370601 + ')';
                            }
                            var _0x51bfd4 = document['getElementById'](_0x19dd05[_0x3f5398])['getBoundingClientRect']()['width'];
                            _0x51bfd4 = _0x51bfd4 / _0x370601 - _0x51bfd4;
                            _0x51bfd4 /= 0x2;
                            if (isNaN(_0x51bfd4)) {
                                continue;
                            }
                            var _0x3fcedd = document['getElementById'](_0x19dd05[_0x3f5398])['getBoundingClientRect']()['height'];
                            _0x3fcedd = _0x3fcedd / _0x370601 - _0x3fcedd;
                            _0x3fcedd /= 0x2;
                            if (isNaN(_0x3fcedd)) {
                                continue;
                            }
                            if (_0x333a7e[_0x3f5398]['left'] !== undefined) {
                                document['getElementById'](_0x19dd05[_0x3f5398])['style']['left'] = _0x333a7e[_0x3f5398]['left'] * _0x370601 - _0x51bfd4 + _0x34a800['inset']['left'] / _0x117b6e['devicePixelRatio'];
                            }
                            if (_0x333a7e[_0x3f5398]['top'] !== undefined) {
                                document['getElementById'](_0x19dd05[_0x3f5398])['style']['top'] = _0x333a7e[_0x3f5398]['top'] * _0x370601 - _0x3fcedd + _0x34a800['inset']['top'] / _0x117b6e['devicePixelRatio'];
                            }
                            if (_0x333a7e[_0x3f5398]['bottom'] !== undefined) {
                                document['getElementById'](_0x19dd05[_0x3f5398])['style']['bottom'] = _0x333a7e[_0x3f5398]['bottom'] * _0x370601 - _0x3fcedd + _0x34a800['inset']['bottom'] / _0x117b6e['devicePixelRatio'];
                            }
                            if (_0x333a7e[_0x3f5398]['right'] !== undefined) {
                                document['getElementById'](_0x19dd05[_0x3f5398])['style']['right'] = _0x333a7e[_0x3f5398]['right'] * _0x370601 - _0x51bfd4 + _0x34a800['inset']['right'] / _0x117b6e['devicePixelRatio'];
                            }
                        }
                    } catch (_0x77fef4) {
                        console['log']('Render issue');
                    }
                    _0x11a906();
                    _0x34a800['render'](_0x26a43b);
                } else {
                    _0x29af9f['hideName'](_0x117b6e, _0x19dd05);
                }
                if (!_0x117b6e['spectating']) {
                    if (!_0x454358) {
                        _0x34a800['render'](_0x412401);
                    }
                    _0x26a43b['opacity'] = 0x0;
                    if (_0x37901c != null) {
                        clearInterval(_0x37901c);
                        _0x37901c = null;
                    }
                }
                _0x117b6e['timeEnd']('2');
            }

            function _0x15b3f9() {
                _0x117b6e['flushMessageQueue']();
                if (_0x53cafc == 0x0) {
                    _0x108d9b();
                }
                _0x7b71bb(_0x117b6e['clientDetails']['actualDt']);
                _0x33b098['changedKeys']['forEach'](function (_0x47bdcc) {
                    _0x117b6e['currentPackets']['push']({
                        'type': 'updateControls',
                        'object': {
                            'key': _0x47bdcc,
                            'state': _0x33b098[_0x47bdcc]
                        }
                    });
                });
                _0x33b098['changedKeys'] = [];
                if (_0x34ea3f['moved']) {
                    if (_0x34ea3f['renderer'] !== undefined && !_0x28899a) {
                        _0x34ea3f['x'] = Math['max'](Math['min']((_0x34ea3f['newx'] - _0x34ea3f['renderer']['c']['width'] / _0x117b6e['devicePixelRatio'] * _0x34ea3f['renderer']['qualitySize'] / 0x2 - _0x34ea3f['renderer']['left']) * _0x34ea3f['renderer']['ratio'] / _0x34ea3f['renderer']['qualitySize'] * _0x117b6e['devicePixelRatio'], 0x780 / 0x2), -0x780 / 0x2);
                        _0x34ea3f['y'] = Math['max'](Math['min']((_0x34ea3f['newy'] - _0x34ea3f['renderer']['c']['height'] / _0x117b6e['devicePixelRatio'] * _0x34ea3f['renderer']['qualitySize'] / 0x2 - _0x34ea3f['renderer']['top']) * _0x34ea3f['renderer']['ratio'] / _0x34ea3f['renderer']['qualitySize'] * _0x117b6e['devicePixelRatio'], 0x438 / 0x2), -0x438 / 0x2);
                    }
                    _0x34ea3f['moved'] = ![];
                }
                if (_0x28899a) {
                    _0x28899a = ![];
                }
                _0x34ea3f['x'] = Math['max'](Math['min'](_0x34ea3f['x'], 0x780 / 0x2), -0x780 / 0x2);
                _0x34ea3f['y'] = Math['max'](Math['min'](_0x34ea3f['y'], 0x438 / 0x2), -0x438 / 0x2);
                _0x2a9b08['visible'] = !_0x34ea3f['emulatedFromTouch'];
                var _0x1a65e0 = ![];
                _0x409d8d['visible'] = !_0x454358;
                for (var _0x317213 of _0x3f0803) {
                    _0x317213['visible'] = _0x34ea3f['emulatedFromTouch'] && !_0x117b6e['spectating'];
                    _0x1a65e0 = _0x1a65e0 || _0x317213['touchActive'];
                }
                var _0x572825 = null;
                var _0x1ca799 = null;
                if (_0x117b6e['spectating']) {
                    while (_0x234a02['touches']['length'] > 0x0) {
                        _0x234a02['touches']['splice'](0x0, 0x1);
                    }
                }
                if (!_0x117b6e['spectating'] && !_0x454358 && !_0x5525d5) {
                    for (var _0x9482fe of _0x234a02['touches']) {
                        if (_0x572825 == null && _0x9482fe['tStartX'] < 0x0) {
                            _0x572825 = _0x9482fe;
                        } else if (_0x1ca799 == null && _0x9482fe['tStartX'] > 0x0 && !_0x1a65e0) {
                            _0x1ca799 = _0x9482fe;
                        }
                    }
                }
                _0x3d0c1d(_0x2015cf, _0x572825);
                _0x3d0c1d(_0x3cdff9, _0x1ca799);
                if (_0x34ea3f['emulatedFromTouch']) {
                    if (_0x3cdff9['isTriggering'] || _0x117962['touchActive']) {
                        if (!_0x34ea3f['clicking']) {
                            _0x34ea3f['clicking'] = !![];
                            _0x34ea3f['changed'] = !![];
                        }
                    } else {
                        if (_0x34ea3f['clicking']) {
                            _0x34ea3f['clicking'] = ![];
                            _0x34ea3f['changed'] = !![];
                        }
                    }
                    if (_0x117b6e['me'] && !_0x117b6e['me']['building']) {
                        if (_0x3cdff9['hasMoved']) {
                            if (!_0x34ea3f['rightClicking']) {
                                _0x34ea3f['rightClicking'] = !![];
                                _0x34ea3f['rightChanged'] = !![];
                            }
                        } else {
                            if (_0x34ea3f['rightClicking']) {
                                _0x34ea3f['rightClicking'] = ![];
                                _0x34ea3f['rightChanged'] = !![];
                            }
                        }
                    }
                } else {
                    if (_0x175275['shouldbevisible'] != ![]) {
                        _0x597340(_0x175275, 'opacity', _0x175275['opacity'], 0x0, 0x190, 0x0, _0x1acb6f['easeOutExpo']);
                    }
                    _0x175275['shouldbevisible'] = ![];
                }
                if (_0x175275['shouldbevisible'] != _0x3cdff9['hasMoved']) {
                    if (_0x3cdff9['hasMoved']) {
                        _0x597340(_0x175275, 'opacity', _0x175275['opacity'], 0.25, 0x1f4, 0x0, _0x1acb6f['easeOutExpo']);
                    } else {
                        _0x597340(_0x175275, 'opacity', _0x175275['opacity'], 0x0, 0x190, 0x0, _0x1acb6f['easeOutExpo']);
                    }
                }
                _0x175275['shouldbevisible'] = _0x3cdff9['hasMoved'];
                if (_0x3cdff9['hasMoved']) {
                    var _0x15f133 = _0x3ec897 / 0x2 + 0x50;
                    _0x175275['position']['x'] = Math['cos'](_0x3cdff9['angle']) * _0x15f133;
                    _0x175275['position']['y'] = Math['sin'](_0x3cdff9['angle']) * _0x15f133;
                    _0x175275['rotation'] = _0x3cdff9['angle'];
                }
                if (_0x34ea3f['emulatedFromTouch']) {
                    var _0x54d9e3 = ![];
                    var _0x14ea0a = ![];
                    var _0x33a901 = ![];
                    var _0x357a08 = ![];
                    var _0x1e7132 = !![];
                    if (_0x33b098['useTouch'] != !![]) {
                        _0x33b098['changedKeys']['push']('useTouch');
                        _0x33b098['changed'] = !![];
                    }
                    _0x33b098['useTouch'] = !![];
                    if (_0x2015cf['isActive'] && _0x2015cf['hasMoved']) {
                        var _0x1ebde3 = Math['cos'](_0x2015cf['angle']);
                        var _0x3ff12b = Math['sin'](_0x2015cf['angle']);
                        var _0x3fd51b = Math['sin'](Math['PI'] / 0x8);
                        _0x54d9e3 = _0x1ebde3 > _0x3fd51b;
                        _0x14ea0a = _0x1ebde3 < -_0x3fd51b;
                        _0x357a08 = _0x3ff12b > _0x3fd51b;
                        _0x33a901 = _0x3ff12b < -_0x3fd51b;
                        _0x1e7132 = !_0x2015cf['isTriggering'];
                        if (_0x33b098['touchDirection'] != _0x2015cf['angle']) {
                            _0x33b098['changedKeys']['push']('useTouch');
                            _0x33b098['changedKeys']['push']('touchDirection');
                        }
                        _0x33b098['touchDirection'] = _0x2015cf['angle'];
                    }
                    if (!_0x2015cf['isActive']) {
                        if (_0x33b098['touchDirection'] != -0x1) {
                            _0x33b098['changedKeys']['push']('useTouch');
                            _0x33b098['changedKeys']['push']('touchDirection');
                        }
                        _0x33b098['touchDirection'] = -0x1;
                    }
                    if (_0x54d9e3 != _0x33b098['right']) {
                        _0x33b098['right'] = _0x54d9e3;
                        _0x33b098['changedKeys']['push']('right');
                        _0x33b098['changed'] = !![];
                    }
                    if (_0x14ea0a != _0x33b098['left']) {
                        _0x33b098['left'] = _0x14ea0a;
                        _0x33b098['changedKeys']['push']('left');
                        _0x33b098['changed'] = !![];
                    }
                    if (_0x33a901 != _0x33b098['up']) {
                        _0x33b098['up'] = _0x33a901;
                        _0x33b098['changedKeys']['push']('up');
                        _0x33b098['changed'] = !![];
                    }
                    if (_0x357a08 != _0x33b098['down']) {
                        _0x33b098['down'] = _0x357a08;
                        _0x33b098['changedKeys']['push']('down');
                        _0x33b098['changed'] = !![];
                    }
                    if (_0x1e7132 != _0x33b098['shift']) {
                        _0x33b098['shift'] = _0x1e7132;
                        _0x33b098['changedKeys']['push']('shift');
                        _0x33b098['changed'] = !![];
                    }
                } else {
                    if (_0x33b098['useTouch'] != ![]) {
                        _0x33b098['changedKeys']['push']('useTouch');
                        _0x33b098['changed'] = !![];
                    }
                    _0x33b098['useTouch'] = ![];
                }
                if (_0x117b6e['me']['ui'] !== undefined) {
                    if (!_0x117b6e['spectating'] && !_0x117b6e['me']['inCar']) {
                        var _0x464e75;
                        if (!_0x34ea3f['emulatedFromTouch']) {
                            _0x464e75 = -Math['atan2'](_0x34ea3f['x'] + (_0x2a3fa5['camera']['position']['x'] - _0x117b6e['me']['visual']['position']['x']) / _0x2a3fa5['camera']['ratio'], _0x34ea3f['y'] + (_0x2a3fa5['camera']['position']['y'] - _0x117b6e['me']['visual']['position']['y']) / _0x2a3fa5['camera']['ratio']) + Math['PI'] / 0x2;
                        } else {
                            if (_0x2015cf['isActive'] && !_0x3cdff9['isActive']) {
                                _0x464e75 = _0x3cdff9['angle'];
                            } else if (_0x3cdff9['isActive']) {
                                _0x464e75 = _0x3cdff9['angle'];
                            }
                            _0x464e75 = _0x3cdff9['angle'];
                        }
                        if (_0x464e75 !== undefined) {
                            _0x117b6e['me']['actualRotation'] = _0x117b6e['me']['visual']['rotation'] = _0x464e75;
                        }
                    }
                    _0x117b6e['me']['ui']['rotation'] = -_0x117b6e['me']['visual']['rotation'];
                }
                _0x529ae1 += _0x117b6e['clientDetails']['dt'];
                if (!_0x117b6e['spectating'] && _0x6df9cf != Math['round'](_0x117b6e['me']['actualRotation'] * 0x32) && _0x117b6e['me']['ui'] !== undefined) {
                    if (_0x529ae1 > 2.8 || _0x529ae1 > 0.8 && _0x34ea3f['clicking']) {
                        _0x117b6e['currentPackets']['push']({
                            'type': 's',
                            'a': Math['round'](_0x117b6e['me']['actualRotation'] * 0x3e8) / 0x3e8
                        });
                        _0x6df9cf = Math['round'](_0x117b6e['me']['actualRotation'] * 0x32);
                        _0x529ae1 = 0x0;
                    }
                }
                if (!_0x117b6e['spectating']) {
                    _0x26a43b['opacity'] = 0x0;
                    if (_0x37901c != null) {
                        clearInterval(_0x37901c);
                        _0x37901c = null;
                    }
                }
                if (_0x578a5f) {
                    _0x34ea3f['clicking'] = ![];
                    _0x578a5f = ![];
                }
                if (_0x34ea3f['changed']) {
                    if (_0x454358) {
                        _0x34ea3f['clicking'] = ![];
                    }
                    _0x117b6e['currentPackets']['push']({
                        'type': 'mouse',
                        'clicking': _0x34ea3f['clicking']
                    });
                    _0x34ea3f['changed'] = ![];
                }
                if (_0x34ea3f['rightChanged']) {
                    _0x117b6e['currentPackets']['push']({
                        'type': 'mouse2',
                        'clicking': _0x34ea3f['rightClicking']
                    });
                    _0x34ea3f['rightChanged'] = ![];
                }
                if (!_0x117b6e['spectating']) {}
                _0x30d763['position']['x'] = -_0x2a3fa5['camera']['position']['x'] % 0x32 + _0x2a3fa5['camera']['position']['x'];
                _0x30d763['position']['y'] = -_0x2a3fa5['camera']['position']['y'] % 0x32 + _0x2a3fa5['camera']['position']['y'];
                if (_0x4f1972 > 0x64 && _0x117b6e['me']['steadying'] !== undefined) {
                    _0x240665++;
                    var _0x383139 = 0x1;
                    if (_0x240665 >= 0x4) {
                        _0x383139 = 0x0;
                        _0x240665 = 0x0;
                    }
                    for (let _0x429129 = _0x383139; _0x429129 < _0x3346f0['length']; _0x429129++) {
                        for (let _0x911094 = _0x3346f0[_0x429129]['objects']['length'] - 0x1; _0x911094 >= 0x0; _0x911094--) {
                            let _0x22e2c9 = _0x3346f0[_0x429129]['objects'][_0x911094];
                            if (_0x2c14d8(_0x22e2c9)) {
                                _0x22e2c9['visible'] = !![];
                            } else {
                                _0x22e2c9['visible'] = ![];
                            }
                        };
                        for (let _0x270ed = 0x0; _0x270ed < _0x3346f0[_0x429129]['belowObjects']['length']; _0x270ed++) {
                            let _0x294b91 = _0x3346f0[_0x429129]['belowObjects'][_0x270ed];
                            if (_0x2c14d8(_0x294b91)) {
                                _0x294b91['visible'] = !![];
                            } else {
                                _0x294b91['visible'] = ![];
                            }
                        }
                    }
                    if (_0x117b6e['me']['steadying']) {
                        _0x4f1972 = 0x32;
                    } else {
                        _0x4f1972 = 0x0;
                    }
                }
                _0x4f1972 += _0x117b6e['clientDetails']['dt'] * 16.67;
                _0x30a29e += _0x117b6e['clientDetails']['dt'] / 0x96;
                if (_0x30a29e > 0x1) {
                    _0x30a29e -= 0x1;
                }
                if (_0x2aa99f['length'] > 0x0 && Math['abs'](_0x2aa99f[0x0]['position']['x'] - _0x117b6e['me']['visual']['position']['x']) < 0x9c4) {
                    var _0x28ed87 = ![];
                    for (var _0x1626d7 = 0x0; _0x1626d7 < _0x2aa99f['length']; _0x1626d7++) {
                        if (Math['abs'](_0x2aa99f[_0x1626d7]['position']['y'] - _0x117b6e['me']['visual']['position']['y']) > 0x7d0) {
                            if (_0x28ed87) {
                                break;
                            }
                            continue;
                        }
                        var _0x2eaee5 = _0x1626d7 - _0x2aa99f['length'] / 0x2;
                        _0x2aa99f[_0x1626d7]['position']['y'] = 0x1f4 / 0x3 * _0x2eaee5 + _0x30a29e * 0x1f4 / 0x3;
                        _0x2aa99f[_0x1626d7]['opacity'] = (Math['sin'](_0x2aa99f[_0x1626d7]['position']['y'] / 0x64 - _0x30a29e * Math['PI'] * 0x2) + 0x1) / 0x8 + 0.07;
                        _0x28ed87 = !![];
                    }
                }
                _0x3e9e86 += _0x117b6e['clientDetails']['dt'] / 0x4;
                if (!_0x2b1b3 && _0x117b6e['spectating']) {
                    _0x2112dc = 0x50;
                }
                _0x2b1b3 = _0x117b6e['spectating'];
                _0x117b6e['update']();
                _0x2a3fa5['camera']['position'] = new _0x117b6e['Vector2'](_0x117b6e['me']['visual']['position']['x'], _0x117b6e['me']['visual']['position']['y']);
                _0x224723['update']();
                if (_0x117b6e['me']['steadying'] !== undefined && _0x117b6e['me']['steadying'] && _0x117b6e['me']['reloadTime'] <= 0x0 && _0x34ea3f['rightClicking'] && !_0x117b6e['spectating']) {
                    var _0x5ddc79 = _0xfc11c[_0x117b6e['me']['weaponSlots'][_0x117b6e['me']['selectedWeapon']]['type']];
                    if (_0x34ea3f['emulatedFromTouch']) {
                        _0x5ddc79 = _0x3a6408[_0x117b6e['me']['weaponSlots'][_0x117b6e['me']['selectedWeapon']]['type']];
                    }
                    var _0x4d0cb9 = _0x5ddc79;
                    var _0x592098 = _0x1773c1(_0x34ea3f, new _0x117b6e['Vector2'](0x0, 0x0));
                    if (isNaN(_0x592098)) {
                        console['log']('Mouse Distance is NaN');
                        _0x592098 = 0x0;
                    }
                    if (_0x592098 < _0x5ddc79) {
                        _0x4d0cb9 = _0x592098;
                    }
                    if (_0x117b6e['me']['currentJump'] != 0x0) {
                        _0x4d0cb9 = 0x0;
                    }
                    _0x406148 += (_0x4d0cb9 - _0x406148) * 0.1;
                } else {
                    _0x406148 += -_0x406148 * 0.1;
                }
                if (isNaN(_0x406148)) {
                    console['log']('Camera Distance is NaN');
                    _0x406148 = 0x0;
                }
                if (_0x117b6e['me']['steadying'] !== undefined && _0x117b6e['me']['steadying'] && _0x117b6e['me']['reloadTime'] <= 0x0 && !_0x117b6e['spectating']) {
                    _0x1d1278 -= _0x117b6e['clientDetails']['dt'] / 0x23;
                    _0x1d1278 = Math['max'](_0x1d1278, 0.25);
                } else {
                    _0x1d1278 += _0x117b6e['clientDetails']['dt'] / 0x1e;
                    _0x1d1278 = Math['min'](_0x1d1278, 0x1);
                }
                if (_0x117b6e['me']['sprite'] !== undefined) {
                    if (Math['abs'](_0x4e0d40 - _0x117b6e['me']['actualRotation']) > Math['PI']) {
                        if (_0x4e0d40 > _0x117b6e['me']['actualRotation']) _0x4e0d40 -= Math['PI'] * 0x2;
                        else _0x4e0d40 += Math['PI'] * 0x2;
                    }
                    if (!isNaN(_0x117b6e['me']['actualRotation'])) {
                        _0x4e0d40 += (_0x117b6e['me']['actualRotation'] - _0x4e0d40) * 0.1;
                        _0x4e0d40 = _0x117b6e['me']['actualRotation'];
                    } else {
                        _0x4e0d40 = 0x0;
                    }
                    if (!isNaN(_0x4e0d40)) {
                        _0x2a3fa5['camera']['position']['x'] += Math['cos'](_0x4e0d40) * _0x406148;
                        _0x2a3fa5['camera']['position']['y'] += Math['sin'](_0x4e0d40) * _0x406148;
                    } else {
                        console['log']('Issue with rotation: ' + _0x4e0d40);
                    }
                }
                _0x34ea3f['x'] = Math['max'](Math['min'](_0x34ea3f['x'], 0x780 / 0x2), -0x780 / 0x2);
                _0x34ea3f['y'] = Math['max'](Math['min'](_0x34ea3f['y'], 0x438 / 0x2), -0x438 / 0x2);
                for (var _0x5ac685 = 0x0; _0x5ac685 < _0x1a0a83['length']; _0x5ac685++) {
                    if (_0x1a0a83[_0x5ac685]['hasRoof']) {
                        _0x1a0a83[_0x5ac685]['roof']['opacity'] = Math['min'](_0x1a0a83[_0x5ac685]['roof']['opacity'], 0.999);
                        if (_0x1a0a83[_0x5ac685]['under']) {
                            _0x1a0a83[_0x5ac685]['roof']['opacity'] -= _0x117b6e['clientDetails']['dt'] / 0xf;
                            _0x1a0a83[_0x5ac685]['roof']['opacity'] = Math['max'](_0x1a0a83[_0x5ac685]['roof']['opacity'], _0x1a0a83[_0x5ac685]['roofOpacity']);
                        } else {
                            _0x1a0a83[_0x5ac685]['roof']['opacity'] += _0x117b6e['clientDetails']['dt'] / 0xf;
                            _0x1a0a83[_0x5ac685]['roof']['opacity'] = Math['min'](_0x1a0a83[_0x5ac685]['roof']['opacity'], 0.999);
                        }
                    }
                }
                if (_0x34ea3f['x'] !== undefined && _0x34ea3f['y'] !== undefined) {
                    _0x2a9b08['position']['x'] = _0x34ea3f['x'];
                    _0x2a9b08['position']['y'] = _0x34ea3f['y'];
                }
                if (_0x371b51 != _0x117b6e['me']['id']) {
                    _0x4f1972 = 0x32;
                    _0x240665 = 0x2;
                    _0x371b51 = _0x117b6e['me']['id'];
                }
                if (_0x117b6e['spectating']) _0x117b6e['me']['wallTime'] = 0x0;
                if (!_0x117b6e['spectating'] && !document['hidden']) {
                    if (_0x117b6e['me']['inCar']) {
                        _0x2a3fa5['mouseCamera']['x'] += (Math['cos'](_0x117b6e['me']['visual']['rotation']) * 0x1f4 / 0x7 - _0x2a3fa5['mouseCamera']['x']) * 0.1 * Math['min'](_0x117b6e['clientDetails']['dt'], 0x2);
                        _0x2a3fa5['mouseCamera']['y'] += (Math['sin'](_0x117b6e['me']['visual']['rotation']) * 0x1f4 / 0x7 - _0x2a3fa5['mouseCamera']['y']) * 0.1 * Math['min'](_0x117b6e['clientDetails']['dt'], 0x2);
                    } else {
                        _0x2a3fa5['mouseCamera']['x'] += (_0x34ea3f['x'] / 0x7 - _0x2a3fa5['mouseCamera']['x']) * 0.1 * Math['min'](_0x117b6e['clientDetails']['dt'], 0x2);
                        _0x2a3fa5['mouseCamera']['y'] += (_0x34ea3f['y'] / 0x7 - _0x2a3fa5['mouseCamera']['y']) * 0.1 * Math['min'](_0x117b6e['clientDetails']['dt'], 0x2);
                    }
                    if (_0x117b6e['me']['reloadTime'] !== undefined && _0x117b6e['me']['reloadTime'] > 0x0) {
                        _0x1e5e07['angle'] = Math['PI'] * 0x2 * _0x117b6e['me']['reloadTime'] / 0xa / _0x117b6e['me']['fullReload'];
                        _0x1e5e07['rotation'] = -_0x1e5e07['angle'] - Math['PI'] / 0x2;
                        _0xb180ed['text'] = _0x117b6e['me']['newReloadTime'] / 0xa;
                        if (_0x117b6e['me']['newReloadTime'] % 0xa == 0x0) {
                            _0xb180ed['text'] += '.0';
                        }
                        _0x291294['opacity'] = 0x1;
                        _0x291294['position']['y'] = _0x34a800['bottomOfScreen'] - 0x96;
                    } else {
                        _0x291294['opacity'] = Math['max'](_0x291294['opacity'] - _0x117b6e['clientDetails']['dt'] / 0x14, 0x0);
                        _0xb180ed['text'] = '0.0';
                    }
                } else {
                    _0x2a3fa5['mouseCamera']['x'] *= 0.1 / Math['min'](_0x117b6e['clientDetails']['dt'], 0x2);
                    _0x2a3fa5['mouseCamera']['y'] *= 0.1 / Math['min'](_0x117b6e['clientDetails']['dt'], 0x2);
                }
                if (_0x2a3fa5['camera']['borderRatio'] > _0x2a3fa5['camera']['newRatio']) {
                    _0x2a3fa5['camera']['ratio'] += (_0x2a3fa5['camera']['newRatio'] - _0x2a3fa5['camera']['ratio']) * 0.05;
                } else {
                    _0x2a3fa5['camera']['ratio'] += (_0x2a3fa5['camera']['borderRatio'] - _0x2a3fa5['camera']['ratio']) * 0.05;
                }
                if (_0x117b6e['me']['ui'] !== undefined) {
                    if (!_0x117b6e['spectating'] && !_0x117b6e['me']['inCar']) {
                        if (_0x34ea3f['emulatedFromTouch']) {
                            if (_0x2015cf['isActive'] && !_0x3cdff9['isActive']) {
                                _0x117b6e['me']['actualRotation'] = _0x117b6e['me']['visual']['rotation'] = _0x3cdff9['angle'];
                            } else if (_0x3cdff9['isActive']) {
                                _0x117b6e['me']['actualRotation'] = _0x117b6e['me']['visual']['rotation'] = _0x3cdff9['angle'];
                            }
                            _0x117b6e['me']['actualRotation'] = _0x117b6e['me']['visual']['rotation'] = _0x3cdff9['angle'];
                        } else {
                            _0x117b6e['me']['actualRotation'] = _0x117b6e['me']['visual']['rotation'] = -Math['atan2'](_0x34ea3f['x'] + (_0x2a3fa5['camera']['position']['x'] - _0x117b6e['me']['visual']['position']['x']) / _0x2a3fa5['camera']['ratio'], _0x34ea3f['y'] + (_0x2a3fa5['camera']['position']['y'] - _0x117b6e['me']['visual']['position']['y']) / _0x2a3fa5['camera']['ratio']) + Math['PI'] / 0x2;
                        }
                    }
                    _0x117b6e['me']['ui']['rotation'] = -_0x117b6e['me']['visual']['rotation'];
                }
                _0x1678d8();
                _0x409d8d['position']['x'] = _0x34a800['rightOfScreen'] - _0x34a800['inset']['right'] * _0x34a800['scaleFactor'];
                _0x409d8d['position']['y'] = 0x0;
                _0x573d64['position']['x'] = _0x34a800['rightOfScreen'] - _0x34a800['inset']['right'] * _0x34a800['scaleFactor'];
                _0x573d64['position']['y'] = _0x34a800['bottomOfScreen'] - _0x34a800['inset']['bottom'] * _0x34a800['scaleFactor'];
                _0x1e123c['position']['x'] = _0x34a800['leftOfScreen'] + _0x34a800['inset']['left'] * _0x34a800['scaleFactor'];
                _0x1e123c['position']['y'] = _0x34a800['bottomOfScreen'] - _0x34a800['inset']['bottom'] * _0x34a800['scaleFactor'];
                if (_0x34ea3f['emulatedFromTouch']) {
                    _0x2c468b['position']['x'] = _0x34a800['leftOfScreen'] + 0x12c + _0x34a800['inset']['left'] * _0x34a800['scaleFactor'];
                    _0x2c468b['position']['y'] = _0x34a800['topOfScreen'] + _0x34a800['inset']['top'] * _0x34a800['scaleFactor'];
                } else {
                    _0x2c468b['position']['x'] = _0x34a800['rightOfScreen'] - _0x34a800['inset']['right'] * _0x34a800['scaleFactor'];
                    _0x2c468b['position']['y'] = _0x34a800['topOfScreen'] + _0x34a800['inset']['top'] * _0x34a800['scaleFactor'];
                }
                if (_0x34ea3f['emulatedFromTouch']) {
                    if (_0x117b6e['me']['building'] || _0x454358) {
                        for (var _0x5ac685 = 0x0; _0x5ac685 < _0x19ba71['length']; _0x5ac685++) {
                            _0x19ba71[_0x5ac685]['opacity'] = 0x1;
                        }
                    } else {
                        for (var _0x5ac685 = 0x0; _0x5ac685 < _0x19ba71['length']; _0x5ac685++) {
                            _0x19ba71[_0x5ac685]['opacity'] = 0x0;
                        }
                    }
                } else {
                    for (var _0x5ac685 = 0x0; _0x5ac685 < _0x19ba71['length']; _0x5ac685++) {
                        _0x19ba71[_0x5ac685]['opacity'] = 0x1;
                    }
                }
                _0x2f3604['position']['x'] = _0x34a800['leftOfScreen'] + _0x34a800['inset']['left'] * _0x34a800['scaleFactor'];
                _0x2f3604['position']['y'] = _0x34a800['topOfScreen'] - _0x34a800['inset']['top'] * _0x34a800['scaleFactor'];
                _0x43dd0e();
                _0x6acad1['text'] = _0x483640['text'];
                _0x3bb98a['text'] = _0x23fdd6['text'];
                _0x45b36f['position']['x'] = 0x7d + _0x45b36f['width'] / 0x2;
                _0x47a409['position']['x'] = 0x7d + _0x47a409['width'] / 0x2;
                if (_0x289838) {
                    _0x451d6f['opacity'] = 0x5;
                    _0x19ed5a['opacity'] = 0x1;
                    _0x40b502['opacity'] = 0x1;
                } else {
                    _0x451d6f['opacity'] = 0x0;
                    _0x19ed5a['opacity'] = 0x0;
                    _0x40b502['opacity'] = 0x0;
                }
                _0x25310f['text'] = _0x451d6f['text'];
                _0x440e6b['text'] = _0x19ed5a['text'];
                _0x213e1e();
                _0x5e9dbc();
                if (_0x37901c != null || _0x1a267a || _0x117b6e['spectating'] && _0x8b23cb['opacity'] != 0x0) {
                    _0x8b23cb['opacity'] += _0x117b6e['clientDetails']['dt'] / 0x1e;
                    _0x1a267a = ![];
                } else {
                    _0x8b23cb['opacity'] = 0x0;
                    if (!_0x117b6e['spectating']) {
                        if (window['spawnText']['text'] != 'Ready') {
                            window['spawnButton']['color'] = '#0D0';
                            window['spawnButton']['strokeStyle'] = '#0B0';
                            window['spawnText']['belowObjects'][0x0]['strokeStyle'] = '#0B0';
                            window['spawnText']['belowObjects'][0x0]['text'] = 'Ready';
                            window['spawnText']['text'] = 'Ready';
                        }
                    }
                }
                _0x8b23cb['opacity'] = Math['min'](_0x8b23cb['opacity'], 0x1);
                if (_0x5f3362 < 0xa) {
                    _0x5f3362++;
                }
                if (_0x9da206 < 0xa) {
                    _0x9da206++;
                }
                if (_0x117b6e['spectating']) {
                    _0x3a7e8a = 0x0;
                }
                if (_0x3a7e8a > 0x0 && _0x11a4be['opacity'] < 0x1) {
                    _0x11a4be['opacity'] += _0x117b6e['clientDetails']['dt'] / 0x1e;
                    _0x11a4be['opacity'] = Math['min'](_0x11a4be['opacity'], 0x1);
                } else if (_0x3a7e8a <= 0x0 && _0x11a4be['opacity'] > 0x0) {
                    _0x11a4be['opacity'] -= _0x117b6e['clientDetails']['dt'] / 0x1e;
                    _0x11a4be['opacity'] = Math['max'](_0x11a4be['opacity'], 0x0);
                }
                if (_0x3a7e8a > 0x0) {
                    _0x3a7e8a -= _0x117b6e['clientDetails']['dt'] / 0x28;
                    _0x2aa70e();
                }
                var _0x61e5b8 = ![];
                if (_0x1603dc == 'waiting') {
                    _0x1cb7ed['text'] = 'Storm is closing in ' + _0x2dcbe6 + ' seconds!';
                    if (_0x2dcbe6 <= 0xa && _0x2dcbe6 > 0x5) {
                        _0x61e5b8 = !![];
                    }
                    if (_0x3a7e8a > 0x0 || _0x117b6e['spectating']) {
                        _0x61e5b8 = ![];
                    }
                }
                if (_0x1603dc == 'lobby') {
                    _0x61e5b8 = !![];
                    if (_0x2dcbe6 < 0x0) {
                        _0x1cb7ed['text'] = 'Waiting for players...';
                        _0x1cb7ed['opacity'] = 0x1;
                    } else {
                        _0x1cb7ed['text'] = 'Match starting in ' + _0x2dcbe6 + ' seconds';
                    }
                }
                _0xa62402();
                if (_0x61e5b8) {
                    _0x1cb7ed['opacity'] += _0x117b6e['clientDetails']['dt'] / 0x1e;
                    _0x1cb7ed['opacity'] = Math['min'](_0x1cb7ed['opacity'], 0x1);
                } else {
                    _0x1cb7ed['opacity'] -= _0x117b6e['clientDetails']['dt'] / 0x1e;
                    _0x1cb7ed['opacity'] = Math['max'](_0x1cb7ed['opacity'], 0x0);
                }
                _0x48dfa6['opacity'] = _0x1cb7ed['opacity'] * 0.3;
                _0x48dfa6['height'] = _0x1cb7ed['fontSize'] + 0x28;
                _0x48dfa6['width'] = _0x1cb7ed['width'] + 0x28;
                _0x48dfa6['position']['y'] = _0x1cb7ed['position']['y'];
                _0x30f8e2--;
                if (_0x30f8e2 <= 0x0) {
                    _0x21a958();
                    _0x30f8e2 = _0x239cea;
                }
                _0x13a747 += _0x117b6e['clientDetails']['dt'] / 0xf;
                if (_0x13a747 > Math['PI'] * 0x2) {
                    _0x13a747 -= Math['PI'] * 0x2;
                }
                _0x56d294 = Math['sin'](_0x13a747);
                _0x573d64['opacity'] = _0x1d1278;
                _0x1e123c['opacity'] = _0x1d1278;
                _0x2c468b['opacity'] = _0x1d1278 * 0.8;
                _0x5b67db['opacity'] = _0x1d1278;
                _0x2f3604['opacity'] = _0x1d1278;
            }
            var _0x76df5d = [];
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x1d7b20['belowObjects']['length']; _0x441ab1++) {}
            var _0x3f47c6 = document['createElement']('canvas');
            var _0x5aa379 = _0x3f47c6['getContext']('2d');
            var _0x3d5eb7 = 0x780 + 0x64;
            var _0x3f4fe6 = 0x438 + 0x64;
            _0x3f47c6['width'] = _0x3d5eb7;
            _0x3f47c6['height'] = _0x3f4fe6;
            _0x5aa379['globalAlpha'] = 0x1;
            _0x5aa379['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
            _0x5aa379['translate'](_0x3d5eb7 / 0x2, _0x3f4fe6 / 0x2);
            var _0x5d6ba9 = new _0x117b6e['object']();
            _0x5d6ba9['objects'] = _0x1d7b20['belowObjects'];
            _0x5d6ba9['render'](_0x5aa379, 0x1, 0x1);
            var _0x30d763 = new _0x117b6e['image'](_0x3f47c6, 0x0, 0x0, _0x3d5eb7, _0x3f4fe6);
            _0x1d7b20['belowObjects'] = [_0x30d763];

            function _0x4651e9() {
                var _0x38a11b = -0x1;
                for (var _0x4978f3 = 0x0; _0x4978f3 < _0x76df5d['length']; _0x4978f3 += 0x5) {
                    if (_0x1e953b(_0x76df5d[_0x4978f3])) {
                        _0x38a11b = _0x4978f3;
                        break;
                    }
                }
                if (_0x38a11b == -0x1) {
                    return;
                }
                var _0x5e020f = new Array(0x50);
                var _0x2ee0f9 = 0x0;
                for (var _0x4978f3 = _0x38a11b; _0x4978f3 > 0x0 && Math['abs'](_0x2a3fa5['camera']['position']['y'] - _0x76df5d[_0x4978f3]['position']['y']) < 0x3ac; _0x4978f3--) {
                    if (_0x1e953b(_0x76df5d[_0x4978f3])) {
                        _0x5e020f[_0x2ee0f9] = _0x76df5d[_0x4978f3];
                        _0x2ee0f9++;
                    }
                }
                for (var _0x4978f3 = _0x38a11b; _0x4978f3 < _0x76df5d['length'] && Math['abs'](_0x2a3fa5['camera']['position']['x'] - _0x76df5d[_0x4978f3]['position']['x']) < 0x550; _0x4978f3++) {
                    if (_0x1e953b(_0x76df5d[_0x4978f3])) {
                        _0x5e020f[_0x2ee0f9] = _0x76df5d[_0x4978f3];
                        _0x2ee0f9++;
                    }
                }
                _0x1d7b20['belowObjects'] = _0x5e020f;
            }

            function _0x1e953b(_0x20b585) {
                if (Math['abs'](_0x2a3fa5['camera']['position']['x'] - _0x20b585['position']['x']) > 0x488) return ![];
                if (Math['abs'](_0x2a3fa5['camera']['position']['y'] - _0x20b585['position']['y']) > 0x2e4) return ![];
                return !![];
            }
            _0x3d5ef5();
            var _0x1cc8bc = ![];
            _0x117b6e['onGetEnvs'] = function (_0x186961) {
                var _0x5d47bf = _0x186961['riverWidth'] - 0x2;
                var _0x2fd7db = 0x1f4;
                var _0x5d463f = 0x4b;
                var _0x14b8b9 = _0x186961['river'];
                var _0x31d506 = new _0x117b6e['scene']();
                _0x31d506['addBelow'](new _0x117b6e['rectangle'](0x0, 0x0, _0x28097e, _0x28097e, window['groundColor']));
                var _0x3faa55 = 0x1f4;
                var _0x2907b1 = 0x32;
                var _0x1e9cd5 = _0x52811c('grid');
                for (var _0x22dbee = -_0x2907b1; _0x22dbee <= _0x2907b1; _0x22dbee++) {
                    for (var _0x44a73c = -_0x2907b1; _0x44a73c <= _0x2907b1; _0x44a73c++) {
                        var _0x2ded9a = new _0x117b6e['image'](_0x1e9cd5, _0x22dbee * _0x3faa55, _0x44a73c * _0x3faa55, _0x3faa55, _0x3faa55, 0.14);
                        _0x31d506['add'](_0x2ded9a);
                    }
                }
                var _0x2c8e67 = _0x52811c('wave');
                for (var _0x3bbfa2 = -0x13; _0x3bbfa2 <= 0x13; _0x3bbfa2++) {
                    var _0x44a73c = _0x3bbfa2 * _0x2fd7db;
                    var _0x396c38 = new _0x117b6e['rectangle'](_0x14b8b9 + _0x5d47bf / 0x2 + _0x5d463f / 0x2, _0x44a73c, _0x5d463f, _0x2fd7db, '#d2c290', 0.3);
                    _0x396c38['background'] = !![];
                    _0x31d506['add'](_0x396c38);
                    _0x396c38['parent'] = null;
                    _0x1e63a6['add'](_0x396c38);
                    var _0x1c8a0a = new _0x117b6e['rectangle'](_0x14b8b9 - _0x5d47bf / 0x2 - _0x5d463f / 0x2, _0x44a73c, _0x5d463f, _0x2fd7db, '#d2c290', 0.3);
                    _0x1c8a0a['background'] = !![];
                    _0x31d506['add'](_0x1c8a0a);
                    _0x1c8a0a['parent'] = null;
                    _0x1e63a6['add'](_0x1c8a0a);
                    var _0xd3b86a = new _0x117b6e['rectangle'](_0x14b8b9, _0x44a73c, _0x5d47bf, _0x2fd7db, 'blue', 0.4);
                    _0xd3b86a['background'] = !![];
                    _0x31d506['add'](_0xd3b86a);
                    _0xd3b86a['parent'] = null;
                    _0x1e63a6['add'](_0xd3b86a);
                    for (var _0x31a989 = 0x0; _0x31a989 < 0x3; _0x31a989++) {
                        var _0x948f6e = new _0x117b6e['image'](_0x2c8e67, _0x14b8b9, _0x44a73c - _0x2fd7db / 0x2 + _0x31a989 * 0x1f4 / 0x3, 0x64, 0x15e);
                        _0x948f6e['rotation'] = -Math['PI'] / 0x2;
                        _0x948f6e['size'] = 1.4;
                        _0x948f6e['background'] = !![];
                        _0x948f6e['opacity'] = 0.35;
                        if (_0x31a989 == 0x2) {
                            _0x31d506['add'](_0x948f6e);
                            _0x948f6e['parent'] = null;
                        }
                        _0x81476a['addBelow'](_0x948f6e);
                        _0x2aa99f['push'](_0x948f6e);
                    }
                }
                var _0x188b96 = ['rock', 'tree0', 'tree1', 'jungletree'];
                var _0x1d5014 = _0x117b6e['envs']['resourceNames'];
                for (var _0x24db94 = 0x0; _0x24db94 < _0x188b96['length']; _0x24db94++) {
                    var _0x3588e5 = _0x188b96[_0x24db94];
                    for (var _0x3bbfa2 = 0x0; _0x3bbfa2 < _0x117b6e['envs']['resources']['length']; _0x3bbfa2++) {
                        if (_0x1d5014[_0x117b6e['envs']['resources'][_0x3bbfa2][0x0]] != _0x3588e5) {
                            continue;
                        }
                        var _0x5448f1 = _0x117b6e['envs']['resources'][_0x3bbfa2];
                        var _0x43f90b = {};
                        _0x43f90b['type'] = _0x1d5014[_0x5448f1[0x0]];
                        _0x43f90b['x'] = _0x5448f1[0x1];
                        _0x43f90b['y'] = _0x5448f1[0x2];
                        _0x43f90b['angle'] = _0x5448f1[0x3];
                        _0x43f90b['radius'] = _0x5448f1[0x4];
                        if (_0x43f90b['type'] != _0x3588e5) {
                            continue;
                        }
                        var _0x6cf4d7 = _0x43f90b['radius'] * 0x4;
                        var _0x5ca5e9 = 0x1;
                        if (_0x595d79) {
                            if (_0x43f90b['type']['substring'](0x0, 0x4) == 'tree') {
                                _0x43f90b['type'] = 'christmastree' + _0x43f90b['type']['substring'](0x4, 0x5) * 0x2;
                            }
                            _0x5ca5e9 = 0.8;
                        }
                        var _0xfe189e = new _0x117b6e['image'](_0x52811c(_0x43f90b['type']), _0x43f90b['x'], _0x43f90b['y'], _0x6cf4d7, _0x6cf4d7, _0x5ca5e9);
                        _0xfe189e['rotation'] = _0x43f90b['angle'];
                        _0x31d506['add'](_0xfe189e);
                    }
                }
                var _0x331d66 = ['dirt', 'dirtcurve', 'road', 'roadcurve'];
                var _0xe8be5b = ['dirtbridge', 'roadbridge', 'stonebridge'];
                for (var _0x3bbfa2 = 0x0; _0x3bbfa2 < _0x186961['houses']['length']; _0x3bbfa2++) {
                    if (_0x186961['houses'][_0x3bbfa2]['image'] !== undefined) {
                        _0x186961['houses'][_0x3bbfa2]['type'] = _0x186961['houses'][_0x3bbfa2]['image'];
                    }
                    var _0xf4adda = new _0x117b6e['image'](_0x52811c(_0x186961['houses'][_0x3bbfa2]['type']), _0x186961['houses'][_0x3bbfa2]['position'][0x0], _0x186961['houses'][_0x3bbfa2]['position'][0x1], _0x186961['houses'][_0x3bbfa2]['width'], _0x186961['houses'][_0x3bbfa2]['height']);
                    _0xf4adda['house'] = !![];
                    if (_0x186961['houses'][_0x3bbfa2]['width'] == 0x0) {
                        _0xf4adda['size'] = 0x0;
                    }
                    _0xf4adda['rotation'] = _0x186961['houses'][_0x3bbfa2]['rotation'] * Math['PI'] / 0x2;
                    if (_0x186961['houses'][_0x3bbfa2]['type'] == 'pool') {
                        _0xf4adda['opacity'] = 0.75;
                    }
                    if (_0x186961['houses'][_0x3bbfa2]['type'] == 'soccerfield') {
                        _0xf4adda['opacity'] = 0.65;
                    }
                    if (_0x595d79) {
                        if (_0x186961['houses'][_0x3bbfa2]['type'] == 'field' || _0x186961['houses'][_0x3bbfa2]['type'] == 'lot') {
                            _0xf4adda['opacity'] = 0.65;
                        }
                    }
                    var _0x59057e = _0xf4adda;
                    if (document['getElementById']('small' + _0x186961['houses'][_0x3bbfa2]['type']) != null) {
                        _0x59057e = new _0x117b6e['image'](_0x52811c('small' + _0x186961['houses'][_0x3bbfa2]['type']), _0x186961['houses'][_0x3bbfa2]['position'][0x0], _0x186961['houses'][_0x3bbfa2]['position'][0x1], _0x186961['houses'][_0x3bbfa2]['width'], _0x186961['houses'][_0x3bbfa2]['height']);
                        _0x59057e['rotation'] = _0xf4adda['rotation'];
                        _0x59057e['opacity'] = _0xf4adda['opacity'];
                        if (_0x595d79) {
                            if (_0x331d66['indexOf'](_0x186961['houses'][_0x3bbfa2]['type']) != -0x1) {
                                _0x59057e['opacity'] = 0.65;
                            }
                        }
                    }
                    if (_0x186961['houses'][_0x3bbfa2]['type'] == 'cherryblossoms') {
                        _0x59057e = new _0x117b6e['object']();
                        _0x59057e['position'] = _0xf4adda['position'];
                        var _0x1814be = 0x12c;
                        _0x59057e['add'](new _0x117b6e['image'](_0x52811c('cherryblossom'), 0x0, -0x2 * 0x32, _0x1814be, _0x1814be));
                        _0x59057e['add'](new _0x117b6e['image'](_0x52811c('cherryblossom'), 0x4 * 0x32, 0x2 * 0x32, _0x1814be, _0x1814be));
                        _0x59057e['add'](new _0x117b6e['image'](_0x52811c('cherryblossom'), -0x4 * 0x32, 0x2 * 0x32, _0x1814be, _0x1814be));
                        _0x59057e['rotation'] = _0xf4adda['rotation'];
                    }
                    _0x31d506['add'](_0x59057e);
                    _0xf4adda['parent'] = null;
                    if (_0x186961['houses'][_0x3bbfa2]['hasRoof']) {
                        _0xf4adda['under'] = ![];
                        _0xf4adda['roofOpacity'] = 0.075;
                        if (_0x186961['houses'][_0x3bbfa2]['type'] == 'pavilion') {
                            _0xf4adda['roofOpacity'] = 0.4;
                        }
                        _0xf4adda['roof'] = new _0x117b6e['image'](_0x52811c(_0x186961['houses'][_0x3bbfa2]['type'] + 'roof'), _0x186961['houses'][_0x3bbfa2]['position'][0x0], _0x186961['houses'][_0x3bbfa2]['position'][0x1], _0x186961['houses'][_0x3bbfa2]['width'], _0x186961['houses'][_0x3bbfa2]['height']);
                        if (_0x52811c(_0x186961['houses'][_0x3bbfa2]['type'])['width'] != _0x52811c(_0x186961['houses'][_0x3bbfa2]['type'] + 'roof')['width'] || _0x52811c(_0x186961['houses'][_0x3bbfa2]['type'])['height'] != _0x52811c(_0x186961['houses'][_0x3bbfa2]['type'] + 'roof')['height']) {
                            if (_0x186961['houses'][_0x3bbfa2]['type'] != 'soccergoal') {
                                _0xf4adda['roof']['image'] = null;
                            }
                        }
                        _0xf4adda['roof']['rotation'] = _0x186961['houses'][_0x3bbfa2]['rotation'] * Math['PI'] / 0x2;
                        _0xf4adda['roof']['house'] = !![];
                        _0x31d506['add'](_0xf4adda['roof']);
                        _0xf4adda['roof']['parent'] = null;
                        _0x220553['add'](_0xf4adda['roof']);
                    }
                    _0xf4adda['hasRoof'] = _0x186961['houses'][_0x3bbfa2]['hasRoof'];
                    _0x1a0a83['push'](_0xf4adda);
                    if (_0xe8be5b['indexOf'](_0x186961['houses'][_0x3bbfa2]['type']) >= 0x0) {
                        _0x81476a['add'](_0xf4adda);
                        if (_0x595d79) {
                            _0xf4adda['opacity'] = 0.65;
                        }
                    } else if (_0x331d66['indexOf'](_0x186961['houses'][_0x3bbfa2]['type']) == -0x1) {
                        _0x1e63a6['add'](_0xf4adda);
                    } else {
                        _0xf4adda['opacity'] = 0x1;
                        if (_0x595d79) {
                            _0xf4adda['opacity'] = 0.65;
                        }
                        _0x1e63a6['addBelow'](_0xf4adda);
                    }
                }
                if (!_0x595d79) {
                    _0x188b96 = ['corn', 'pumpkin'];
                    for (var _0x24db94 = 0x0; _0x24db94 < _0x188b96['length']; _0x24db94++) {
                        var _0x3588e5 = _0x188b96[_0x24db94];
                        for (var _0x3bbfa2 = 0x0; _0x3bbfa2 < _0x117b6e['envs']['resources']['length']; _0x3bbfa2++) {
                            var _0x5448f1 = _0x117b6e['envs']['resources'][_0x3bbfa2];
                            var _0x43f90b = {};
                            _0x43f90b['type'] = _0x1d5014[_0x5448f1[0x0]];
                            _0x43f90b['x'] = _0x5448f1[0x1];
                            _0x43f90b['y'] = _0x5448f1[0x2];
                            _0x43f90b['angle'] = _0x5448f1[0x3];
                            _0x43f90b['radius'] = _0x5448f1[0x4];
                            if (_0x43f90b['type'] != _0x3588e5) {
                                continue;
                            }
                            var _0x6cf4d7 = _0x43f90b['radius'] * 0x4;
                            var _0x5ca5e9 = 0x1;
                            if (_0x595d79) {
                                if (_0x43f90b['type']['substring'](0x0, 0x4) == 'tree') {
                                    console['log'](_0x43f90b['type']['substring'](0x4, 0x1));
                                    _0x43f90b['type'] = 'christmastree' + _0x43f90b['type']['substring'](0x4, 0x1) * 0x2;
                                }
                                _0x5ca5e9 = 0.8;
                            }
                            var _0xfe189e = new _0x117b6e['image'](_0x52811c(_0x43f90b['type']), _0x43f90b['x'], _0x43f90b['y'], _0x6cf4d7, _0x6cf4d7, _0x5ca5e9);
                            _0xfe189e['rotation'] = _0x43f90b['angle'];
                            _0x31d506['add'](_0xfe189e);
                        }
                    }
                }
                var _0x385cc7 = 0xfa;
                var _0x5a39d5 = _0x186961['locations'];
                for (var _0x3bbfa2 = 0x0; _0x3bbfa2 < _0x5a39d5['length']; _0x3bbfa2++) {
                    var _0x535ac9 = new _0x117b6e['text'](_0x5a39d5[_0x3bbfa2]['name'], _0x5a39d5[_0x3bbfa2]['x'] * 0x32, _0x5a39d5[_0x3bbfa2]['y'] * 0x32, '#FFF', 'Arial Black', _0x385cc7, '', 0x1, 'center');
                    var _0x8b1004 = new _0x117b6e['strokeText'](_0x5a39d5[_0x3bbfa2]['name'], 0x0, 0x0, '#000', 'Arial Black', _0x385cc7, '', 0x1, 'center');
                    _0x8b1004['lineWidth'] = 0x46;
                    _0x535ac9['addBelow'](_0x8b1004);
                    _0x31d506['add'](_0x535ac9);
                }
                _0x3f2592['translate'](_0x541679['width'] / 0x2, _0x541679['height'] / 0x2);
                _0x31d506['render'](_0x3f2592, _0x28097e / 0x708, 0x1);
                _0x117b6e['envs'] = {};
            };
            _0x117b6e['normalLerp'] = function (_0x32cb96, _0x533f67, _0x43f66a) {
                return (_0x533f67 - _0x32cb96) * _0x43f66a + _0x32cb96;
            };
            var _0x34da79 = new _0x117b6e['scene']();
            var _0x28f688;
            var _0xa06feb = [];
            var _0x1ba697 = [{
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
            var _0x3b6b38 = [{
                'hair': 0x0,
                'weaponSlots': [{
                    'type': 'famas',
                    'rarity': 0x0,
                    'ammo': 0x0
                }],
                'flare': !![],
                'steadying': !![],
                'rotation': Math['PI'] / 0x2 + 0.2,
                'start': new _0x117b6e['Vector2'](-0x18b, -0x156),
                'end': new _0x117b6e['Vector2'](-0x181, -0x152),
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
                'start': new _0x117b6e['Vector2'](-0x1fe, 0x104),
                'end': new _0x117b6e['Vector2'](-0x21c, 0x104),
                'smokes': _0x1ba697
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
                'start': new _0x117b6e['Vector2'](0x186, 0xd2),
                'end': new _0x117b6e['Vector2'](0x195, 0xe1),
                'smokes': [],
                'baller': ![]
            }, {
                'hair': 0x3,
                'footSin': 0x1,
                'weaponSlots': [{
                    'type': 'pickaxe',
                    'rarity': 0x0,
                    'ammo': 0x0
                }],
                'steadying': ![],
                'rotation': Math['PI'] * 0x7 / 0x4,
                'startRotation': Math['PI'] * 0x7 / 0x4 - 0.25,
                'endRotation': Math['PI'] * 0x7 / 0x4 + 0.25,
                'building': !![],
                'start': new _0x117b6e['Vector2'](0x154, -0x8c),
                'end': new _0x117b6e['Vector2'](0x154, -0x8c),
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
            var _0x3fee18 = [];
            var _0x4a8535 = [{
                'start': new _0x117b6e['Vector2'](-0x19f, -0x122),
                'rotation': Math['PI'] / 0x2 + 0.2,
                'startDistance': 0xe6,
                'endDistance': 0x140
            }, {
                'start': new _0x117b6e['Vector2'](-0x19f, -0x122),
                'rotation': Math['PI'] / 0x2 + 0.4,
                'startDistance': 0x12c,
                'endDistance': 0x186
            }, {
                'start': new _0x117b6e['Vector2'](-0x19f, -0x122),
                'rotation': Math['PI'] / 0x2 + 0.3,
                'startDistance': 0x172,
                'endDistance': 0x1cc
            }, {
                'start': new _0x117b6e['Vector2'](0x316, -0x172),
                'rotation': Math['PI'] * 0x5 / 0x6,
                'startDistance': 0xc8,
                'endDistance': 0xe6,
                'bulletType': 'rpg'
            }, {
                'start': new _0x117b6e['Vector2'](0x34d, 0x118),
                'rotation': Math['PI'] + 0.2,
                'startDistance': 0xf0,
                'endDistance': 0x6e
            }];
            var _0x3cc9b8 = [];
            var _0x6b9c80 = [{
                'rotation': Math['PI'] / 0x2,
                'position': new _0x117b6e['Vector2'](0x14a, -0x109),
                'reverse': !![]
            }, {
                'health': 0x5a,
                'rotation': 0x0,
                'position': new _0x117b6e['Vector2'](0x154 + 0x7d, -0x109 + 0x87)
            }];
            var _0x2ac4a0 = 0x0;
            var _0x2d0fe4 = 0x0;

            function _0x1b8c14(_0x5517ef, _0x306a1a) {
                var _0x27ca8b = {
                    'new': {
                        'position': new _0x117b6e['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'actualNew': {
                        'position': new _0x117b6e['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'old': {
                        'position': new _0x117b6e['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'actualOld': {
                        'position': new _0x117b6e['Vector2'](0x1e, 0x0),
                        'rotation': 0.001
                    },
                    'isPreview': !![],
                    'flare': ![],
                    'ticksAsleep': 0x0,
                    'type': 'player'
                };
                var _0x1eb1a3 = {
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
                        'type': 'pickaxe',
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
                var _0x173a78 = Object['keys'](_0x5517ef);
                for (var _0x3d1a7b = 0x0; _0x3d1a7b < _0x173a78['length']; _0x3d1a7b++) {
                    _0x1eb1a3[_0x173a78[_0x3d1a7b]] = _0x5517ef[_0x173a78[_0x3d1a7b]];
                }
                if (_0x5517ef['flare'] !== undefined) {
                    _0x27ca8b['flare'] = _0x5517ef['flare'];
                }
                if (_0x5517ef['baller']) {
                    _0x27ca8b['baller'] = {
                        'new': {
                            'position': new _0x117b6e['Vector2'](0xa, 0x0),
                            'rotation': 0.001
                        },
                        'actualNew': {
                            'position': new _0x117b6e['Vector2'](0xa, 0x0),
                            'rotation': 0.001
                        },
                        'old': {
                            'position': new _0x117b6e['Vector2'](0xa, 0x0),
                            'rotation': 0.001
                        },
                        'actualOld': {
                            'position': new _0x117b6e['Vector2'](0x1e, 0x0),
                            'rotation': 0.001
                        },
                        'isPreview': !![],
                        'flare': ![],
                        'ticksAsleep': 0x0,
                        'type': 'baller'
                    };
                    _0x117b6e['types']['baller']['create'](_0x27ca8b['baller'], {
                        'isPreview': !![],
                        'h': 0x64,
                        'ch': 0x5a
                    });
                    _0x2a3fa5['remove'](_0x27ca8b['baller']['grapple']);
                    _0x2a3fa5['remove'](_0x27ca8b['baller']['rope']);
                    _0x2a3fa5['remove'](_0x27ca8b['baller']['visual']);
                }
                _0x117b6e['types']['player']['create'](_0x27ca8b, _0x1eb1a3);
                _0x27ca8b['visual']['size'] = 1.1;
                if (_0x5517ef['rotation'] !== undefined) {
                    _0x27ca8b['visual']['rotation'] = _0x5517ef['rotation'];
                }
                _0x117b6e['types']['player']['updatePacket'](_0x27ca8b, {
                    'selectedWeapon': _0x27ca8b['selectedWeapon']
                });
                _0x2a3fa5['remove'](_0x27ca8b['buildingPreview']);
                _0x2a3fa5['remove'](_0x27ca8b['visual']);
                _0x306a1a['add'](_0x27ca8b['visual']);
                if (_0x5517ef['baller']) {
                    _0x306a1a['add'](_0x27ca8b['baller']['grapple']);
                    _0x306a1a['add'](_0x27ca8b['baller']['visual']);
                }
                return _0x27ca8b;
            }

            function _0x5b3249(_0x50176c, _0x1c3fec) {
                var _0x35fbc6 = {
                    'new': {
                        'position': new _0x117b6e['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'old': {
                        'position': new _0x117b6e['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'actualOld': {
                        'position': new _0x117b6e['Vector2'](0x1e, 0x0),
                        'rotation': 0.001
                    },
                    'isPreview': !![],
                    'ticksAsleep': 0x0,
                    'type': 'bullet'
                };
                var _0x44f7e9 = {
                    'bulletType': 'scar'
                };
                var _0x4a8bb6 = Object['keys'](_0x50176c);
                for (var _0x5bb597 = 0x0; _0x5bb597 < _0x4a8bb6['length']; _0x5bb597++) {
                    _0x44f7e9[_0x4a8bb6[_0x5bb597]] = _0x50176c[_0x4a8bb6[_0x5bb597]];
                }
                _0x117b6e['types']['bullet']['create'](_0x35fbc6, _0x44f7e9);
                _0x35fbc6['visual']['size'] = 1.1;
                if (_0x50176c['rotation'] !== undefined) {
                    _0x35fbc6['visual']['rotation'] = _0x50176c['rotation'];
                }
                if (_0x44f7e9['bulletType'] != 'rpg') {
                    _0x35fbc6['trail']['opacity'] = 0.3;
                    _0x35fbc6['trail']['points'][0x1]['x'] = -0x96;
                } else {
                    for (var _0x5bb597 = 0x0; _0x5bb597 < 0xc; _0x5bb597++) {
                        var _0x50b721 = new _0x117b6e['image'](_0x52811c('smoke0'));
                        _0x50b721['position']['x'] = -(_0x5bb597 + 0x2) * 0x14 - _0x5bb597 * _0x5bb597;
                        _0x50b721['position']['y'] = Math['cos'](Math['PI'] * _0x5bb597) * (_0x5bb597 + 0xa) * 0.2;
                        _0x50b721['width'] = _0x50b721['height'] = 0x14 + 0x5 * _0x5bb597;
                        _0x50b721['rotation'] = Math['random']() * Math['PI'] * 0x2;
                        _0x50b721['opacity'] = Math['max'](0x1 - _0x5bb597 / 0xa, 0.03);
                        if (_0x5bb597 == 0xa) {
                            _0x50b721['opacity'] = 0.04;
                        } else if (_0x5bb597 == 0xb) {
                            _0x50b721['opacity'] = 0.02;
                        }
                        _0x35fbc6['visual']['addBelow'](_0x50b721);
                    }
                }
                _0x2a3fa5['remove'](_0x35fbc6['visual']);
                _0x1c3fec['add'](_0x35fbc6['visual']);
                return _0x35fbc6;
            }

            function _0x33098b(_0x2dfd4c, _0xb44a2a) {
                var _0x56e337 = {
                    'new': {
                        'position': new _0x117b6e['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'old': {
                        'position': new _0x117b6e['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'actualOld': {
                        'position': new _0x117b6e['Vector2'](0x1e, 0x0),
                        'rotation': 0.001
                    },
                    'isPreview': !![],
                    'ticksAsleep': 0x0,
                    'reverse': ![],
                    'type': 'object'
                };
                var _0x3a0979 = {
                    'type': 'wall',
                    'health': 0x32,
                    'fullHealth': 0x64,
                    'width': 0xc8 / 0x4 - 0.6,
                    'height': (0xc8 / 0x4 - 0.6) * 0x5,
                    'mat': 0x1
                };
                var _0x2baf78 = Object['keys'](_0x2dfd4c);
                for (var _0x270a9d = 0x0; _0x270a9d < _0x2baf78['length']; _0x270a9d++) {
                    _0x3a0979[_0x2baf78[_0x270a9d]] = _0x2dfd4c[_0x2baf78[_0x270a9d]];
                }
                _0x117b6e['types']['object']['create'](_0x56e337, _0x3a0979);
                _0x56e337['visual']['size'] = 1.05;
                if (_0x2dfd4c['rotation'] !== undefined) {
                    _0x56e337['visual']['rotation'] = _0x2dfd4c['rotation'] + Math['PI'];
                }
                if (_0x2dfd4c['reverse'] !== undefined) {
                    _0x56e337['reverse'] = _0x2dfd4c['reverse'];
                }
                _0x56e337['visual']['position'] = _0x2dfd4c['position'];
                for (var _0x270a9d = 0x0; _0x270a9d < _0x56e337['lowering']['length'] - 0x1; _0x270a9d++) {
                    _0x56e337['lowering'][_0x270a9d]['width'] = _0x478d05 * _0x36dfb4 / 0x2;
                    _0x56e337['lowering'][_0x270a9d]['height'] = _0x478d05;
                    _0x56e337['lowering'][_0x270a9d]['opacity'] = 0x1;
                }
                _0x2a3fa5['remove'](_0x56e337['visual']);
                _0xb44a2a['add'](_0x56e337['visual']);
                return _0x56e337;
            }
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x3b6b38['length']; _0x441ab1++) {
                var _0x11f163 = _0x1b8c14(_0x3b6b38[_0x441ab1], _0x26a43b['animatedLayer']);
                _0x11f163['start'] = _0x3b6b38[_0x441ab1]['start'];
                _0x11f163['end'] = _0x3b6b38[_0x441ab1]['end'];
                _0x11f163['startRotation'] = _0x3b6b38[_0x441ab1]['startRotation'];
                _0x11f163['endRotation'] = _0x3b6b38[_0x441ab1]['endRotation'];
                if (_0x3b6b38[_0x441ab1]['smokes'] !== undefined) {
                    for (var _0x4db1a6 = 0x0; _0x4db1a6 < _0x3b6b38[_0x441ab1]['smokes']['length']; _0x4db1a6++) {
                        var _0x406b90 = _0x3b6b38[_0x441ab1]['smokes'][_0x4db1a6];
                        var _0x25c21e = 'smoke' + Math['floor'](Math['random']() * 0x2);
                        _0x25c21e = 'smoke0';
                        var _0x449dd0 = new _0x117b6e['image'](_0x52811c(_0x25c21e), _0x406b90['x'], _0x406b90['y'], _0x406b90['width'], _0x406b90['width'], _0x406b90['opacity']);
                        _0x449dd0['rotation'] = Math['random']() * Math['PI'] * 0x2;
                        _0x11f163['visual']['addBelow'](_0x449dd0);
                    }
                }
                _0xa06feb['push'](_0x11f163);
            }
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x4a8535['length']; _0x441ab1++) {
                var _0x11f163 = _0x5b3249(_0x4a8535[_0x441ab1], _0x26a43b['animatedLayer']);
                _0x11f163['start'] = _0x4a8535[_0x441ab1]['start'];
                _0x11f163['startDistance'] = _0x4a8535[_0x441ab1]['startDistance'];
                _0x11f163['endDistance'] = _0x4a8535[_0x441ab1]['endDistance'];
                _0x11f163['rotation'] = _0x4a8535[_0x441ab1]['rotation'];
                _0x3fee18['push'](_0x11f163);
            }
            for (var _0x441ab1 = 0x0; _0x441ab1 < _0x6b9c80['length']; _0x441ab1++) {
                var _0x11f163 = _0x33098b(_0x6b9c80[_0x441ab1], _0x26a43b['animatedLayer']);
                _0x11f163['start'] = _0x4a8535[_0x441ab1]['start'];
                _0x11f163['rotation'] = _0x4a8535[_0x441ab1]['rotation'];
                _0x3cc9b8['push'](_0x11f163);
            }

            function _0x2971c0() {
                _0x34da79['objects'] = [];
                var _0x228d68 = _0x1b8c14({
                    'weaponSlots': [{
                        'type': 'scar',
                        'rarity': 0x0,
                        'ammo': 0x0
                    }]
                }, _0x34da79);
                _0x28f688 = _0x228d68;
                _0x228d68['visual']['position']['x'] = 0x5a;
                _0x228d68['visual']['position']['y'] = 0x136;
                _0x228d68['nametag']['opacity'] = 0x1;
                _0x228d68['nametag']['size'] = 0.85;
            }
            _0x2971c0();
            _0x26a43b['add'](_0x34da79);
            if (_0x223ed9() && localStorage['weaponSkin'] !== undefined) {
                _0x382963(localStorage['weaponSkin']);
            }
            var _0xa679ec = [];
            var _0x137309 = 0x780 + 0xc8;
            var _0x497e6a = 0x438 + 0xc8;
            for (var _0x441ab1 = 0x0; _0x441ab1 < 0x14; _0x441ab1++) {
                var _0x800877 = 0x32;
                _0x800877 = 0x3c;
                var _0xc1303c = new _0x117b6e['image'](_0x52811c('leaf0'), Math['random']() * _0x137309 - _0x137309 / 0x2, Math['random']() * _0x497e6a - _0x497e6a / 0x2, _0x800877, _0x800877);
                _0xc1303c['opacity'] = 0.7;
                _0xc1303c['speed'] = 0.8 + Math['random']() * 1.2;
                _0xc1303c['rotation'] = Math['random']() * Math['PI'] * 0x2;
                _0x1bdcfd['add'](_0xc1303c);
                _0xa679ec['push'](_0xc1303c);
            }
            _0x1bdcfd['parent'] = null;
            _0x26a43b['animatedLayer']['add'](_0x1bdcfd);
            _0x1bdcfd['parent'] = _0x3d29bd;

            function _0x16ab6e() {
                var _0x510b2d = _0x137309 / 0x2;
                var _0x238f0f = _0x497e6a / 0x2;
                var _0x179635 = -_0x510b2d;
                var _0x9ee1f = -_0x238f0f;
                if (!_0x117b6e['spectating']) {
                    _0x510b2d += _0x3d29bd['camera']['position']['x'];
                    _0x179635 += _0x3d29bd['camera']['position']['x'];
                    _0x238f0f += _0x3d29bd['camera']['position']['y'];
                    _0x9ee1f += _0x3d29bd['camera']['position']['y'];
                }
                var _0x37ab12 = Math['min'](_0x117b6e['clientDetails']['dt'], 0x2);
                for (var _0x371447 = 0x0; _0x371447 < _0xa679ec['length']; _0x371447++) {
                    var _0x162000 = _0xa679ec[_0x371447];
                    _0x162000['rotation'] += _0x37ab12 / 0x14 * _0x162000['speed'] / 0x4;
                    var _0x335ef6 = _0x162000['speed'];
                    var _0xf06f37 = _0x335ef6 * 1.65;
                    _0x162000['position']['x'] += _0x37ab12 * _0x335ef6;
                    _0x162000['position']['y'] += _0x37ab12 * _0xf06f37;
                    while (_0x162000['position']['x'] > _0x510b2d) {
                        _0x162000['position']['x'] -= _0x137309;
                    }
                    while (_0x162000['position']['y'] > _0x238f0f) {
                        _0x162000['position']['y'] -= _0x497e6a;
                    }
                    while (_0x162000['position']['x'] < _0x179635) {
                        _0x162000['position']['x'] += _0x137309;
                    }
                    while (_0x162000['position']['y'] < _0x9ee1f) {
                        _0x162000['position']['y'] += _0x497e6a;
                    }
                }
            }

            function _0x11a906() {
                if (_0x28f688 == undefined) {
                    return;
                }
                _0x16ab6e();
                _0x117b6e['types']['player']['tickUpdate'](_0x28f688);
                _0x28f688['visual']['size'] = 1.18;
                _0x34da79['belowObjects']['forEach'](function (_0x107dd7) {
                    _0x107dd7['position']['x'] -= _0x117b6e['clientDetails']['dt'] * 0x6;
                });
                _0x2ac4a0 += _0x117b6e['clientDetails']['dt'] / 0x1e;
                _0x2d0fe4 = Math['sin'](_0x2ac4a0);
                if (_0x2ac4a0 > Math['PI'] * 0x2) {
                    _0x2ac4a0 -= Math['PI'] * 0x2;
                }
                for (var _0x2fc07b = 0x0; _0x2fc07b < _0xa06feb['length']; _0x2fc07b++) {
                    var _0x5341d8 = _0xa06feb[_0x2fc07b];
                    _0x5341d8['visual']['position']['x'] = _0x117b6e['normalLerp'](_0x5341d8['start']['x'], _0x5341d8['end']['x'], _0x2d0fe4 / 0x2 + 0.5);
                    _0x5341d8['visual']['position']['y'] = _0x117b6e['normalLerp'](_0x5341d8['start']['y'], _0x5341d8['end']['y'], _0x2d0fe4 / 0x2 + 0.5);
                    if (_0x5341d8['startRotation'] !== undefined) {
                        _0x5341d8['visual']['rotation'] = _0x117b6e['normalLerp'](_0x5341d8['startRotation'], _0x5341d8['endRotation'], _0x2d0fe4 / 0x2 + 0.5);
                    }
                    if (_0x5341d8['flare']) {
                        _0x5341d8['flash']['opacity'] = _0x2d0fe4 / 0x7 + 0.2;
                    }
                    if (_0x5341d8['baller'] !== undefined) {
                        _0x5341d8['baller']['visual']['position']['x'] = _0x5341d8['visual']['position']['x'];
                        _0x5341d8['baller']['visual']['position']['y'] = _0x5341d8['visual']['position']['y'];
                        _0x5341d8['baller']['visual']['rotation'] = _0x5341d8['visual']['rotation'];
                        _0x117b6e['types']['baller']['tickUpdate'](_0x5341d8['baller']);
                    }
                }
                for (var _0x2fc07b = 0x0; _0x2fc07b < _0x3fee18['length']; _0x2fc07b++) {
                    var _0x5341d8 = _0x3fee18[_0x2fc07b];
                    var _0x4ebd93 = Math['sin'](_0x5341d8['rotation']);
                    var _0x2865f4 = Math['cos'](_0x5341d8['rotation']);
                    _0x5341d8['visual']['position']['x'] = _0x117b6e['normalLerp'](_0x5341d8['start']['x'] + _0x2865f4 * _0x5341d8['startDistance'], _0x5341d8['start']['x'] + _0x2865f4 * _0x5341d8['endDistance'], _0x2d0fe4 / 0x2 + 0.5);
                    _0x5341d8['visual']['position']['y'] = _0x117b6e['normalLerp'](_0x5341d8['start']['y'] + _0x4ebd93 * _0x5341d8['startDistance'], _0x5341d8['start']['y'] + _0x4ebd93 * _0x5341d8['endDistance'], _0x2d0fe4 / 0x2 + 0.5);
                    if (_0x5341d8['startRotation'] !== undefined) {
                        _0x5341d8['visual']['rotation'] = _0x117b6e['normalLerp'](_0x5341d8['startRotation'], _0x5341d8['endRotation'], _0x2d0fe4 / 0x2 + 0.5);
                    }
                }
                for (var _0x2fc07b = 0x0; _0x2fc07b < _0x3cc9b8['length']; _0x2fc07b++) {
                    var _0x5ed4cf = _0x3cc9b8[_0x2fc07b];
                    var _0x9c097f = _0x5ed4cf['lowering']['length'] - 0x1;
                    var _0x29474c = (0x1 / 0x3 + 0x1 / 0x4) / 0x2;
                    var _0x10ea88 = _0x29474c;
                    _0x5ed4cf['lowering'][_0x9c097f]['opacity'] = _0x2d0fe4 * _0x29474c + _0x10ea88;
                    if (_0x5ed4cf['reverse']) {
                        _0x5ed4cf['lowering'][_0x9c097f]['opacity'] = _0x10ea88 - _0x2d0fe4 * _0x29474c;
                    }
                    _0x5ed4cf['lowering'][_0x9c097f]['width'] = _0x14c37c(_0x478d05 * _0x36dfb4, _0x478d05 * _0x36dfb4 / 0x2, _0x5ed4cf['lowering'][_0x9c097f]['opacity']);
                    _0x5ed4cf['lowering'][_0x9c097f]['height'] = _0x14c37c(_0x478d05 * 0x2, _0x478d05, _0x5ed4cf['lowering'][_0x9c097f]['opacity']);
                }
            }
            window['addEventListener']('keydown', function (_0x2c083f) {
                if (_0x2effea != -0x1) {
                    return;
                }
                if (_0x117b6e['spectating'] && _0x2c083f['keyCode'] == 0xd && _0x26a43b['opacity'] == 0x1) {
                    if (document['activeElement']['id'] == 'partyinput') {
                        _0x2c9838 = document['getElementById']('partyinput')['value'];
                        _0x2c9838 = _0x2c9838['toLowerCase']();
                        if (_0x2c9838['length'] < 0x6) {
                            alert('ID Not Valid - Should be 6 characters long');
                        }
                        var _0x118ab7 = _0x2c9838['charAt'](0x0) + _0x2c9838['charAt'](0x1);
                        if (_0x5b1c4e['indexOf'](_0x118ab7) == -0x1) {
                            alert('ID Not Valid - Please check again');
                        }
                        if (_0x309482 == null) {
                            _0x2005ac(_0x118ab7);
                            _0x3ed413['push']({
                                'type': 'join',
                                'id': _0x2c9838
                            });
                            _0x3ed413['push']({
                                'type': 'changename',
                                'name': document['getElementById']('nameBox')['value']
                            });
                            _0x22fd95('name', _0x52811c('nameBox')['value'], 0x16d);
                        }
                        return;
                    }
                    _0x2dcbe6 = -0x1;
                    _0x18ff70 = {
                        'position': [0x0, 0x0],
                        'radius': _0x28097e / 0x2 + 0x258 + 0x15e
                    };
                    _0x1d1091 = {
                        'position': [0x0, 0x0],
                        'radius': _0x28097e / 0x2 + 0x258 + 0x15e
                    };
                    _0x2cf3af['width'] = _0x28097e + 0x3e8;
                    _0x2cf3af['height'] = _0x2cf3af['width'];
                    _0x2cf3af['position']['x'] = 0x0;
                    _0x2cf3af['position']['y'] = 0x0;
                    _0x4509c1['opacity'] = 0x0;
                    _0x42aa48 = !![];
                    if (_0x309482 != null) {
                        _0x198256();
                        return;
                    }
                    _0x53f0ab();
                    if (_0x60b1ef == -0x2) {
                        _0x34a800['c']['requestPointerLock']();
                    }
                }
            });
            var _0x48f7e8 = 0x488;
            var _0x250988 = 0x2e4;

            function _0x2c14d8(_0x5d9b49) {
                if (_0x5d9b49['background']) {
                    _0x48f7e8 = 0x550;
                    _0x250988 = 0x3ac;
                } else if (_0x5d9b49['house']) {
                    _0x48f7e8 = 0x76c;
                    _0x250988 = 0x514;
                }
                if (Math['abs'](_0x2a3fa5['camera']['position']['x'] - _0x5d9b49['position']['x']) > _0x48f7e8) return ![];
                if (Math['abs'](_0x2a3fa5['camera']['position']['y'] - _0x5d9b49['position']['y']) > _0x250988) return ![];
                return !![];
            }

            function _0xafde93() {
                if (_0x34ea3f['moved']) {
                    if (_0x34ea3f['renderer'] !== undefined) {
                        _0x34ea3f['x'] = Math['max'](Math['min']((_0x34ea3f['newx'] - _0x34ea3f['renderer']['c']['width'] / _0x117b6e['devicePixelRatio'] * _0x34ea3f['renderer']['qualitySize'] / 0x2 - _0x34ea3f['renderer']['left']) * _0x34ea3f['renderer']['ratio'] / _0x34ea3f['renderer']['qualitySize'] * _0x117b6e['devicePixelRatio'], 0x780 / 0x2), -0x780 / 0x2);
                        _0x34ea3f['y'] = Math['max'](Math['min']((_0x34ea3f['newy'] - _0x34ea3f['renderer']['c']['height'] / _0x117b6e['devicePixelRatio'] * _0x34ea3f['renderer']['qualitySize'] / 0x2 - _0x34ea3f['renderer']['top']) * _0x34ea3f['renderer']['ratio'] / _0x34ea3f['renderer']['qualitySize'] * _0x117b6e['devicePixelRatio'], 0x438 / 0x2), -0x438 / 0x2);
                    }
                    _0x34ea3f['moved'] = ![];
                }
                for (var _0x194e80 of _0x3f0803) {
                    _0x194e80['checkTouch']();
                }
                var _0x42eecd = _0x1043f4(![], !![]);
                if (_0x36ab4b != -0x1) {
                    if (_0x42eecd == -0x1) {
                        _0x117b6e['currentPackets']['push']({
                            'type': 'switch',
                            'slot1': _0x36ab4b,
                            'slot2': _0x36ab4b
                        });
                        if (_0x36ab4b == _0x6203d7) {
                            for (var _0x2373e4 = Math['max'](_0x6203d7 - 0x1, 0x0); _0x117b6e['me']['weaponSlots'][Math['max'](_0x2373e4, 0x0)]['type'] != 'empty' && _0x2373e4 >= 0x0; _0x2373e4--) {}
                            _0x6203d7 = Math['max'](_0x2373e4, 0x0);
                            _0x117b6e['currentPackets']['push']({
                                'type': 'selectChange',
                                'weapon': _0x6203d7
                            });
                        }
                    } else {
                        _0x117b6e['currentPackets']['push']({
                            'type': 'switch',
                            'slot1': _0x36ab4b,
                            'slot2': _0x42eecd
                        });
                        if (_0x6203d7 == _0x36ab4b) {
                            _0x6203d7 = _0x42eecd;
                            _0x117b6e['currentPackets']['push']({
                                'type': 'selectChange',
                                'weapon': _0x6203d7
                            });
                        } else if (_0x6203d7 == _0x42eecd) {
                            _0x6203d7 = _0x36ab4b;
                            _0x117b6e['currentPackets']['push']({
                                'type': 'selectChange',
                                'weapon': _0x6203d7
                            });
                        }
                        var _0xeb195d = _0x1bc362[_0x36ab4b]['image'];
                        _0x1bc362[_0x36ab4b]['image'] = _0x1bc362[_0x42eecd]['image'];
                        _0x1bc362[_0x42eecd]['image'] = _0xeb195d;
                    }
                }
                _0x4982e();
            }
            window['addEventListener']('mouseup', _0xafde93);
            window['addEventListener']('touchend', _0xafde93, {
                'passive': ![]
            });

            function _0x19e97f(_0x54a355) {
                if (_0x34ea3f['moved']) {
                    if (_0x34ea3f['renderer'] !== undefined) {
                        _0x34ea3f['x'] = Math['max'](Math['min']((_0x34ea3f['newx'] - _0x34ea3f['renderer']['c']['width'] / _0x117b6e['devicePixelRatio'] * _0x34ea3f['renderer']['qualitySize'] / 0x2 - _0x34ea3f['renderer']['left']) * _0x34ea3f['renderer']['ratio'] / _0x34ea3f['renderer']['qualitySize'] * _0x117b6e['devicePixelRatio'], 0x780 / 0x2), -0x780 / 0x2);
                        _0x34ea3f['y'] = Math['max'](Math['min']((_0x34ea3f['newy'] - _0x34ea3f['renderer']['c']['height'] / _0x117b6e['devicePixelRatio'] * _0x34ea3f['renderer']['qualitySize'] / 0x2 - _0x34ea3f['renderer']['top']) * _0x34ea3f['renderer']['ratio'] / _0x34ea3f['renderer']['qualitySize'] * _0x117b6e['devicePixelRatio'], 0x438 / 0x2), -0x438 / 0x2);
                    }
                    _0x34ea3f['moved'] = ![];
                }
                var _0x14c5f5 = _0x1043f4();
                if (_0x454358 && _0x14c5f5 != -0x1) {
                    _0x36ab4b = _0x14c5f5;
                    var _0x2ad500 = _0x1bc362[_0x36ab4b]['parent']['parent'];
                    _0x2ad500['remove'](_0x1bc362[_0x36ab4b]['parent']);
                    _0x2ad500['add'](_0x1bc362[_0x36ab4b]['parent']);
                    _0x1d03a5['x'] = _0x34ea3f['x'];
                    _0x1d03a5['y'] = _0x34ea3f['y'];
                }
                var _0x14c5f5 = _0x1043f4();
                var _0x5b4a04 = _0x571852();
                var _0x2815b0 = _0x5bd9ae();
                if (_0x454358 && _0x5b4a04 != -0x1) {
                    _0x117b6e['currentPackets']['push']({
                        'type': 'splitmat',
                        'mat': 0x2 - _0x5b4a04
                    });
                    if (_0x34ea3f['emulatedFromTouch'] && gameWrapper['enabled']) gameWrapper['hapticFeedback']('light');
                }
                if (_0x454358 && _0x2815b0 != -0x1) {
                    _0x117b6e['currentPackets']['push']({
                        'type': 'splitammo',
                        'mat': 0x3 - _0x2815b0
                    });
                    if (_0x34ea3f['emulatedFromTouch'] && gameWrapper['enabled']) gameWrapper['hapticFeedback']('light');
                }
                if (_0x454358 && _0x14c5f5 == -0x1 && _0x5b4a04 == -0x1 && _0x2815b0 == -0x1) {
                    _0x5c7888();
                }
                if (!_0x454358 && _0x34ea3f['emulatedFromTouch']) {
                    var _0x313501 = _0x1043f4(!![]);
                    if (_0x313501 != -0x1) {
                        if (_0x117b6e['me'] && _0x117b6e['me']['weaponSlots'][_0x313501]['type'] != 'empty') {
                            _0x6203d7 = _0x313501;
                            _0x117b6e['currentPackets']['push']({
                                'type': 'selectChange',
                                'weapon': _0x313501
                            });
                            if (gameWrapper['enabled']) gameWrapper['hapticFeedback']('light');
                        }
                    }
                    if (_0x5b4a04 != -0x1 && _0x117b6e['me']['building']) {
                        _0x117b6e['currentPackets']['push']({
                            'type': 'selectMatChange',
                            'mat': 0x2 - _0x5b4a04
                        });
                        if (gameWrapper['enabled']) gameWrapper['hapticFeedback']('light');
                    }
                }
                if (_0x34ea3f['emulatedFromTouch']) {
                    if (!_0x454358) {
                        if (_0x5525d5) {
                            if (_0x34ea3f['clicking']) {
                                _0x5525d5 = ![];
                            }
                        } else {
                            var _0x2b6970 = 0x12c;
                            var _0x300653 = new _0x117b6e['rectangle'](_0x34a800['leftOfScreen'] + _0x2b6970 / 0x2, _0x34a800['topOfScreen'] + _0x2b6970 / 0x2, _0x2b6970, _0x2b6970);
                            if (_0x34ea3f['emulatedFromTouch'] && _0x34ea3f['isCollidingWithRectangle'](_0x300653)) {
                                if (!_0x454358 && !_0x5525d5) _0x5525d5 = !![];
                            }
                        }
                    }
                }
                for (var _0x3b70fb of _0x3f0803) {
                    _0x3b70fb['checkTouch']();
                }
                if (_0x34ea3f['isCollidingWithRectangle'](window['spawnButton']) && _0x117b6e['spectating'] && _0x26a43b['opacity'] == 0x1 && (_0x54a355 == _0x34a800['c'] || _0x54a355['id'] !== undefined && _0x54a355['id']['indexOf']('ref') != -0x1)) {
                    if (gameWrapper['enabled']) gameWrapper['hapticFeedback']('light');
                    _0x2dcbe6 = -0x1;
                    _0x18ff70 = {
                        'position': [0x0, 0x0],
                        'radius': _0x28097e / 0x2 + 0x258 + 0x15e
                    };
                    _0x1d1091 = {
                        'position': [0x0, 0x0],
                        'radius': _0x28097e / 0x2 + 0x258 + 0x15e
                    };
                    _0x4509c1['opacity'] = 0x0;
                    _0x2cf3af['width'] = _0x28097e + 0x3e8;
                    _0x2cf3af['height'] = _0x2cf3af['width'];
                    _0x2cf3af['position']['x'] = 0x0;
                    _0x2cf3af['position']['y'] = 0x0;
                    _0x42aa48 = !![];
                    _0x34ea3f['changed'] = ![];
                    _0x34ea3f['clicking'] = ![];
                    _0x578a5f = !![];
                    if (_0x309482 != null) {
                        _0x198256();
                        return;
                    }
                    _0x53f0ab();
                    if (_0x60b1ef == -0x2) {
                        _0x34a800['c']['requestPointerLock']();
                    }
                }
                if (_0x117b6e['spectating'] && !_0x413d8d && _0x34ea3f['isCollidingWithRectangle'](_0x4eb6d9) && Date['now']() - _0x419d90 > 0x5dc) {
                    _0x117b6e['ws']['close']();
                    _0x24bb85();
                    _0x375e75();
                    if (_0x4d72a3 && !gameWrapper['enabled'] && !_0x21dcd8) {
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
                        } catch (_0x218de5) {
                            console['log']('Ad Error');
                        }
                    }
                    if (_0x4d72a3 && !gameWrapper['enabled'] && _0x21dcd8) {
                        _0x5ac3ca['requestBanner']([{
                            'containerId': 'buildroyale-io_300x250',
                            'size': '300x250'
                        }, {
                            'containerId': 'buildroyale-io_300x250_2',
                            'size': '300x250'
                        }]);
                    }
                    _0x26a43b['opacity'] = 0x1;
                    _0x23b709['opacity'] = 0x0;
                    for (var _0xc83755 = _0x117b6e['objects']['length'] - 0x1; _0xc83755 >= 0x0; _0xc83755--) {
                        if (_0x117b6e['types'][_0x117b6e['objects'][_0xc83755]['type']] !== undefined) {
                            if (_0x117b6e['types'][_0x117b6e['objects'][_0xc83755]['type']]['remove'](_0x117b6e['objects'][_0xc83755], {})) continue;
                            if (_0x117b6e['objects'][_0xc83755]['visual']['parent'] != null) _0x117b6e['objects'][_0xc83755]['visual']['parent']['remove'](_0x117b6e['objects'][_0xc83755]['visual']);
                            _0x117b6e['objects']['splice'](_0xc83755, 0x1);
                        }
                    }
                }
            }
            window['addEventListener']('mousedown', function (_0x1ec08d) {
                _0x19e97f(_0x1ec08d['target']);
            });
            window['addEventListener']('touchstart', function (_0x124b76) {
                _0x19e97f(_0x124b76['target']);
            }, {
                'passive': ![]
            });
            document['addEventListener']('visibilitychange', function () {
                if (document['hidden']) {} else {
                    _0x33b098['shift'] = ![];
                    _0x33b098['changedKeys']['push']('shift');
                }
            });
            _0x117b6e['addPacketType']('email', function (_0x29bdfc) {});
            _0x117b6e['addPacketType']('players', function (_0x4dec55) {
                if (_0x4dec55['players'] !== undefined) {
                    _0x35d9b8['text'] = _0x4dec55['players'];
                }
                if (_0x4dec55['infect'] !== undefined) {
                    _0x3bfbe1['text'] = _0x4dec55['infect'];
                    _0x3bfbe1['opacity'] = 0x1;
                } else {
                    _0x3bfbe1['opacity'] = 0x0;
                }
            });
            _0x117b6e['addPacketType']('feed', function (_0x5d97f3) {
                if (_0x5d97f3['n1'] == '') {
                    _0x5d97f3['n1'] = '<unnamed>';
                }
                if (_0x5d97f3['n2'] == '') {
                    _0x5d97f3['n2'] = '<unnamed>';
                }
                if (_0x5d97f3['knock'] === undefined) {
                    _0x5d97f3['knock'] = ![];
                }
                _0x8025ea(_0x5d97f3['n1'], _0x5d97f3['n2'], _0x5d97f3['knock']);
            });
            _0x117b6e['addPacketType']('elim', function (_0x11e62a) {
                _0x416942['text'] = _0x11e62a['name'];
                _0x3a7e8a = 0x4;
                if (_0x11e62a['knock'] !== undefined && _0x11e62a['knock']) {
                    _0x8d3751['text'] = 'Knocked';
                    _0x8d3751['belowObjects'][0x0]['text'] = 'Knocked';
                    _0x8d3751['fillStyle'] = _0x330fd4;
                } else {
                    _0x8d3751['text'] = 'Eliminated';
                    _0x8d3751['belowObjects'][0x0]['text'] = 'Eliminated';
                    _0x8d3751['fillStyle'] = '#C11';
                }
            });
            _0x117b6e['addPacketType']('death', function (_0x433633) {
                if (_0x4d72a3 && !gameWrapper['enabled']) {
                    try {
                        if (_0x21dcd8) {
                            _0x5ac3ca['requestAd']('midgame');
                            _0x5ac3ca['gameplayStop']();
                            _0x5ac3ca['requestBanner']([{
                                'containerId': 'buildroyale-io_728x90',
                                'size': '728x90'
                            }, {
                                'containerId': 'buildroyale-io_300x600',
                                'size': '300x250'
                            }]);
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
                    } catch (_0x56cda1) {
                        console['log']('Ad Error');
                    }
                }
                if (ga !== undefined) {
                    ga('send', 'event', 'Game', 'play');
                } else {}
                _0x117b6e['spectating'] = !![];
                _0x419d90 = Date['now']();
                _0x5525d5 = ![];
                _0x454358 = ![];
                _0x1debb8 = -0x1;
                if (_0x433633['place'] == 0x1) {
                    _0x12f8c9['opacity'] = 0x1;
                    _0x11ad9c['opacity'] = 0x0;
                    if (_0x21dcd8) {
                        _0x5ac3ca['happytime']();
                    }
                } else {
                    _0x12f8c9['opacity'] = 0x0;
                    _0x11ad9c['opacity'] = 0x1;
                }
                _0x1940be['text'] = '#' + _0x433633['place'];
                _0x3392b2['text'] = _0x433633['eliminations'];
                _0x2fc7af['text'] = _0x3b4631(_0x433633['damageToEnemies']);
                _0xc4e22c['text'] = _0x433633['wallsBuilt'];
                _0x11ad9c['text'] = 'You placed #' + _0x433633['place'];
                _0x501758['opacity'] = 0x0;
                _0x9aad4b['opacity'] = 0x0;
                _0x672833['opacity'] = 0x0;
                if (_0x433633['place'] == 0x1) {
                    _0x501758['text'] = 'Eliminated:';
                }
                if (_0x433633['name'] !== undefined) {
                    var _0x45a1ec = _0x433633['name'];
                    if (_0x45a1ec == '') {
                        _0x45a1ec = '<unnamed>';
                    }
                    if (_0x433633['place'] == 0x1) {
                        _0x501758['text'] = 'Eliminated:';
                    } else {
                        _0x501758['text'] = 'Eliminated By:';
                    }
                    _0x9aad4b['text'] = _0x45a1ec;
                    _0x501758['opacity'] = 0x1;
                    _0x9aad4b['opacity'] = 0x1;
                    _0x672833['opacity'] = 0.3;
                }
                if (_0x433633['place'] == 0x1 && _0x3a7e8a > 0x3) {
                    _0x9aad4b['text'] = _0x416942['text'];
                    _0x501758['opacity'] = 0x1;
                    _0x9aad4b['opacity'] = 0x1;
                    _0x672833['opacity'] = 0.3;
                }
            });
            _0x117b6e['addPacketType']('circle', function (_0x135178) {
                _0x397a0b = !![];
                if (_0x135178['state'] !== undefined) {
                    _0x1603dc = _0x135178['state'];
                    if (_0x1603dc == 'waiting' || _0x1603dc == 'lobby') {
                        _0x2bb5f9['image'] = _0x52811c('waitingIcon');
                    } else if (_0x1603dc == 'moving') {
                        _0x2bb5f9['image'] = _0x52811c('movingIcon');
                    }
                }
                if (_0x135178['time'] !== undefined) {
                    _0x2dcbe6 = _0x135178['time'];
                    var _0x2535a3 = '0:';
                    if (_0x2dcbe6 < 0xa) _0x2535a3 += '0';
                    _0x2535a3 += Math['max'](_0x2dcbe6, 0x0);
                    _0x22d9da['text'] = _0x2535a3;
                }
                if (_0x135178['circle'] !== undefined) {
                    if (_0x1603dc == 'moving') {
                        _0x1d1091['position'][0x0] = _0x117b6e['lerp'](_0x1d1091['position'][0x0], _0x135178['circle']['position'][0x0]);
                        _0x1d1091['position'][0x1] = _0x117b6e['lerp'](_0x1d1091['position'][0x1], _0x135178['circle']['position'][0x1]);
                        _0x18ff70 = _0x1d1091;
                        _0x1d1091 = _0x135178['circle'];
                        _0x18ff70['radius'] = _0x17789;
                        _0x1d1091['width'] = Math['min'](_0x1d1091['width'], 0x0);
                    } else {
                        _0x2cf3af['width'] = _0x2cf3af['height'] = _0x135178['circle']['radius'] * 0x2;
                        _0x2cf3af['position'] = new _0x117b6e['Vector2'](_0x135178['circle']['position'][0x0], _0x135178['circle']['position'][0x1]);
                    }
                }
            });
            _0x117b6e['addPacketType']('forceSpectate', function (_0x4ce55d) {
                console['log']('Forcing spectate');
                _0x413d8d = !![];
                _0x26a43b['opacity'] = 0x0;
            });
            var _0x26cba5 = 0x0;
            var _0x1ec79b = 0.1;
            var _0x3e9e86 = 0x0;
            document['body']['addEventListener']('mousewheel', function (_0x371495) {
                if (_0x371495['target'] == _0x34a800['c']) {
                    _0x371495['preventDefault']();
                }
            }, {
                'passive': ![]
            });
            document['addEventListener']('wheel', function (_0x67294e) {
                if (_0x117b6e['spectating']) {
                    return;
                }
                if (_0x3e9e86 < 0x1) {
                    return;
                }
                _0x3e9e86 = 0x0;
                if (_0x67294e['wheelDelta']) {
                    _0x26cba5 += _0x67294e['wheelDelta'];
                } else {
                    _0x26cba5 -= _0x67294e['deltaY'];
                }
                if (Math['abs'](_0x26cba5) < _0x1ec79b) {
                    return;
                }
                if (_0x117b6e['me']['weaponSlots'] === undefined) {
                    return;
                }
                if (_0x26cba5 <= -_0x1ec79b) {
                    _0x6203d7 += 0x1;
                    if (_0x6203d7 > 0x5) {
                        _0x6203d7 = 0x0;
                    }
                    while (_0x117b6e['me']['weaponSlots'][_0x6203d7]['type'] == 'empty') {
                        _0x6203d7++;
                        if (_0x6203d7 > 0x5) {
                            _0x6203d7 = 0x0;
                        }
                    }
                } else if (_0x26cba5 >= _0x1ec79b) {
                    _0x6203d7 -= 0x1;
                    if (_0x6203d7 < 0x0) {
                        _0x6203d7 = 0x5;
                    }
                    while (_0x117b6e['me']['weaponSlots'][_0x6203d7]['type'] == 'empty') {
                        _0x6203d7--;
                    }
                }
                _0x26cba5 = 0x0;
                _0x117b6e['currentPackets']['push']({
                    'type': 'selectChange',
                    'weapon': _0x6203d7
                });
            });

            function _0x3b4a22() {
                for (var _0xee28ee = 0x0; _0xee28ee < 0x5; _0xee28ee++) {
                    var _0x58e2ad = _0x2a9b08['objects'][_0xee28ee];
                    var _0x378217 = Math['floor'](Math['random']() * 0x2);
                    if (_0x378217 == 0x0) {
                        _0x58e2ad['color'] = '#F00';
                    } else {
                        _0x58e2ad['color'] = '#0F0';
                    }
                    _0x58e2ad['opacity'] = 0x1;
                }
                for (var _0xee28ee = 0x0; _0xee28ee < _0x117b6e['objects']['length']; _0xee28ee++) {
                    if (_0x117b6e['objects'][_0xee28ee]['type'] == 'object') {
                        if (_0x117b6e['objects'][_0xee28ee]['sprite']['image'] !== undefined && _0x117b6e['objects'][_0xee28ee]['sprite']['image']['id'] !== undefined) {
                            if (_0x117b6e['objects'][_0xee28ee]['sprite']['image']['id'] == 'christmastree0') {
                                _0x117b6e['objects'][_0xee28ee]['sprite']['image'] = _0x52811c('christmastree1');
                            } else if (_0x117b6e['objects'][_0xee28ee]['sprite']['image']['id'] == 'christmastree1') {
                                _0x117b6e['objects'][_0xee28ee]['sprite']['image'] = _0x52811c('christmastree0');
                            } else if (_0x117b6e['objects'][_0xee28ee]['sprite']['image']['id'] == 'christmastree2') {
                                _0x117b6e['objects'][_0xee28ee]['sprite']['image'] = _0x52811c('christmastree3');
                            } else if (_0x117b6e['objects'][_0xee28ee]['sprite']['image']['id'] == 'christmastree3') {
                                _0x117b6e['objects'][_0xee28ee]['sprite']['image'] = _0x52811c('christmastree2');
                            }
                        }
                    }
                }
                setTimeout(_0x3b4a22, 0x2bc);
            }
            if (_0x595d79) {
                _0x3b4a22();
            }

            function _0x5acdc9(_0x1658cd) {
                if (_0x1658cd['type'] == 'text') {
                    _0x1658cd['oldText'] = '';
                }
                for (var _0x5d1738 = 0x0; _0x5d1738 < _0x1658cd['objects']['length']; _0x5d1738++) {
                    _0x5acdc9(_0x1658cd['objects'][_0x5d1738]);
                }
                for (var _0x5d1738 = 0x0; _0x5d1738 < _0x1658cd['belowObjects']['length']; _0x5d1738++) {
                    _0x5acdc9(_0x1658cd['belowObjects'][_0x5d1738]);
                }
            }

            function _0x10bf8b() {
                clearInterval(_0xea724e);
                window['spawnText']['oldText'] = '';
                window['lobbyText']['oldText'] = '';
                for (var _0x5dd843 = 0x0; _0x5dd843 < _0x3346f0['length']; _0x5dd843++) {
                    _0x5acdc9(_0x3346f0[_0x5dd843]);
                }
                _0x5acdc9(_0x34da79);
                _0x5acdc9(_0x23b709);
                document['getElementById']('loadingDesktop')['style']['visibility'] = 'hidden';
                document['getElementById']('loadingDesktop')['style']['display'] = 'none';
                document['getElementById']('loadingDesktop')['style']['opacity'] = 0x0;
            }
            var _0xea724e = setInterval(function () {
                if (!document['fonts']['check']('12px Arial Black')) return;
                var _0x42b858 = document['getElementsByTagName']('img');
                var _0x1cbb02 = !![];
                for (var _0x3606e3 of _0x42b858) {
                    if (!_0x3606e3['complete']) {
                        _0x1cbb02 = ![];
                        return;
                    }
                }
                if (gameWrapper['enabled']) {
                    setTimeout(function () {
                        _0x10bf8b();
                    }, 0x64);
                } else {
                    _0x10bf8b();
                }
            }, 0x64);
            setTimeout(_0x10bf8b, 0x1388);
        };
    },
    14: function (_0x498093, _0x1c25db) {
        _0x498093['exports']['createUI'] = function (_0x995209, _0x114722) {
            var _0x437081 = '\'Arial Black\', Gadget, sans-serif';
            _0x437081 = '\'Arial Black\'';
            var _0xb7ee35 = new _0x995209['image'](document['getElementById']('logo'), 0x0, -0xc8, 0x2ee, 0x1f4);
            window['menuLogo'] = _0xb7ee35;
            _0xb7ee35['size'] = 0.9;
            _0x114722['add'](_0xb7ee35);
            var _0x219f34 = 0x78;
            window['spawnButton'] = new _0x995209['roundRectangle'](0x0, _0x219f34, 0x1f4 - 0x6, 0x46, 0x46 / 0x2, '#0D0', 0.4);
            window['spawnButton']['strokeStyle'] = '#0B0';
            window['spawnButton']['lineWidth'] = 0x6;
            _0x114722['add'](window['spawnButton']);
            window['spawnText'] = new _0x995209['text']('Ready', 0x0, _0x219f34, '#FFF', _0x437081, 0x1e, '');
            var _0x3b80c2 = new _0x995209['strokeText']('Ready', 0x0, -0x2, '#0B0', _0x437081, 0x1e, '');
            _0x3b80c2['lineWidth'] = 0x9;
            window['spawnText']['addBelow'](_0x3b80c2);
            _0x114722['add'](window['spawnText']);
            _0x114722['addBelow'](new _0x995209['rectangle'](0x0, 0x0, 0x781, 0x439, '#000', 0.5));
            _0x114722['animatedLayer'] = new _0x995209['object']();
            _0x114722['addBelow'](_0x114722['animatedLayer']);
            _0x114722['addBelow'](new _0x995209['image'](document['getElementById']('background'), 0x0, 0x0, 0x780, 0x438));
        };
        _0x498093['exports']['showName'] = function (_0x154277, _0x10e302) {
            _0x10e302['forEach'](function (_0x33a260) {
                if (modals['indexOf'](_0x33a260) != -0x1) {
                    return;
                }
                document['getElementById'](_0x33a260)['style']['visibility'] = 'visible';
                document['getElementById'](_0x33a260)['style']['display'] = 'initial';
            });
        };
        _0x498093['exports']['hideName'] = function (_0xaa2191, _0x420dc8) {
            _0x420dc8['forEach'](function (_0x293c00) {
                if (_0x293c00 == 'settings') {
                    return;
                }
                document['getElementById'](_0x293c00)['style']['visibility'] = 'hidden';
                document['getElementById'](_0x293c00)['style']['display'] = 'none';
            });
        };
        _0x498093['exports']['createMap'] = function (_0x3a3db8, _0x456e61, _0x106395, _0x3ad2dc) {
            var _0x1fea16 = 0x32;
            var _0x10ace6 = 0xc8;
            var _0x22d2d9 = _0x3ad2dc / 0x190;
            var _0x81356f = document['getElementById']('grid');
            for (var _0x21e3ec = -_0x1fea16; _0x21e3ec <= _0x1fea16; _0x21e3ec++) {
                for (var _0x1a0f8a = -_0x1fea16; _0x1a0f8a <= _0x1fea16; _0x1a0f8a++) {
                    var _0xe3e309 = new _0x3a3db8['image'](_0x81356f, _0x21e3ec * _0x10ace6 - 1.25, _0x1a0f8a * _0x10ace6 - 1.25, _0x10ace6, _0x10ace6, 0.14);
                    _0xe3e309['background'] = !![];
                    _0x456e61['addBelow'](_0xe3e309);
                }
            }
            for (var _0x21e3ec = -_0x1fea16 + 0x5; _0x21e3ec < _0x1fea16 - 0x5; _0x21e3ec++) {
                for (var _0x1a0f8a = -_0x22d2d9 - 0x4; _0x1a0f8a < -_0x22d2d9; _0x1a0f8a++) {
                    var _0x3e82ad = new _0x3a3db8['rectangle']((_0x21e3ec + 0.5) * _0x10ace6, (_0x1a0f8a + 0.5) * _0x10ace6, _0x10ace6, _0x10ace6, '#000', 0.3);
                    _0x3e82ad['background'] = !![];
                    _0x106395['add'](_0x3e82ad);
                }
                for (var _0x1a0f8a = _0x22d2d9 + 0x4; _0x1a0f8a > _0x22d2d9; _0x1a0f8a--) {
                    var _0x3e82ad = new _0x3a3db8['rectangle']((_0x21e3ec + 0.5) * _0x10ace6, (_0x1a0f8a - 0.5) * _0x10ace6, _0x10ace6, _0x10ace6, '#000', 0.3);
                    _0x3e82ad['background'] = !![];
                    _0x106395['add'](_0x3e82ad);
                }
            }
            var _0x3610af = document['getElementById']('grass');
            if (!window['enableChristmas']) {
                for (var _0x591ad6 = 0x0; _0x591ad6 < 0x5dc; _0x591ad6++) {
                    var _0x21e3ec = Math['random']() - 0.5;
                    var _0x1a0f8a = Math['random']() - 0.5;
                    _0x21e3ec *= _0x3ad2dc;
                    _0x1a0f8a *= _0x3ad2dc;
                    _0x1a0f8a += 0x1e;
                    var _0x3febda = Math['floor'](Math['random']() * window['grassTypes']);
                    var _0x5e43da = new _0x3a3db8['image'](window['grassCanvas' + _0x3febda], _0x21e3ec, _0x1a0f8a, window['grassWidth'], window['grassWidth']);
                    _0x456e61['add'](_0x5e43da);
                    window['grass']['push'](_0x5e43da);
                }
            }
            for (var _0x1a0f8a = -_0x1fea16 + 0xa; _0x1a0f8a < _0x1fea16 - 0xa; _0x1a0f8a++) {
                for (var _0x21e3ec = -_0x22d2d9 - 0x6; _0x21e3ec < -_0x22d2d9; _0x21e3ec++) {
                    var _0x3e82ad = new _0x3a3db8['rectangle']((_0x21e3ec + 0.5) * _0x10ace6, (_0x1a0f8a + 0.5) * _0x10ace6, _0x10ace6, _0x10ace6, '#000', 0.3);
                    _0x3e82ad['background'] = !![];
                    _0x106395['add'](_0x3e82ad);
                }
                for (var _0x21e3ec = _0x22d2d9 + 0x6; _0x21e3ec > _0x22d2d9; _0x21e3ec--) {
                    var _0x3e82ad = new _0x3a3db8['rectangle']((_0x21e3ec - 0.5) * _0x10ace6, (_0x1a0f8a + 0.5) * _0x10ace6, _0x10ace6, _0x10ace6, '#000', 0.3);
                    _0x3e82ad['background'] = !![];
                    _0x106395['add'](_0x3e82ad);
                }
            }
        };
    },
    15: function (_0x56b778, _0x3a463a) {
        var _0xf35062 = {
            'startTime': 0x0,
            'frameNumber': 0x0,
            'getFPS': function () {
                this['frameNumber']++;
                var _0x2597ca = new Date()['getTime'](),
                    _0x4174ff = (_0x2597ca - this['startTime']) / 0x3e8,
                    _0x10caab = Math['floor'](this['frameNumber'] / _0x4174ff);
                if (_0x4174ff > 0x1) {
                    this['startTime'] = new Date()['getTime']();
                    this['frameNumber'] = 0x0;
                }
                return _0x10caab;
            }
        };
        var _0x5db8c9 = ['canvas', 'globalAlpha', 'globalCompositeOperation', 'filter', 'imageSmoothingEnabled', 'imageSmoothingQuality', 'strokeStyle', 'fillStyle', 'shadowOffsetX', 'shadowOffsetY', 'shadowBlur', 'shadowColor', 'lineWidth', 'lineCap', 'lineJoin', 'miterLimit', 'lineDashOffset', 'font', 'textAlign', 'textBaseline', 'direction', 'arc', 'arcTo', 'beginPath', 'bezierCurveTo', 'clearRect', 'clip', 'closePath', 'createImageData', 'createLinearGradient', 'createPattern', 'createRadialGradient', 'drawFocusIfNeeded', 'drawImage', 'ellipse', 'fill', 'fillRect', 'fillText', 'getContextAttributes', 'getImageData', 'getLineDash', 'getTransform', 'isPointInPath', 'isPointInStroke', 'lineTo', 'measureText', 'moveTo', 'putImageData', 'quadraticCurveTo', 'rect', 'resetTransform', 'restore', 'rotate', 'save', 'scale', 'setLineDash', 'setTransform', 'stroke', 'strokeRect', 'strokeText', 'transform', 'translate'];
        var _0x33b7e6 = HTMLCanvasElement['prototype']['getContext'];
        HTMLCanvasElement['prototype']['getContext'] = function (_0xa05d99) {
            var _0x156e82 = _0x33b7e6['apply'](this, [_0xa05d99]);
            if (_0x156e82 == null) {
                console['warn']('Failed to initialize ctx, creating stub ctx');
                _0x156e82 = {};
                for (var _0x20a39a of _0x5db8c9) {
                    _0x156e82[_0x20a39a] = function () {};
                }
                _0x156e82['measureText'] = function () {
                    return {
                        'width': 0x1,
                        'height': 0x1
                    };
                };
                _0x156e82['miterLimit'] = 0x1;
            }
            return _0x156e82;
        };
        _0x56b778['exports'] = function gameIO() {
            var _0x1d1aec = {
                'renderers': [],
                'scenes': [],
                'particles': [],
                'envs': {},
                'devicePixelRatio': window['devicePixelRatio'],
                'pixelResize': 0.5,
                'lastPixelCheck': Date['now']()
            };
            _0x1d1aec['gamepad'] = function () {
                var _0x111750 = [];
                if (navigator['getGamepads'] !== undefined) _0x111750 = navigator['getGamepads']();
                for (var _0x4002fc = 0x0; _0x4002fc < _0x111750['length']; _0x4002fc++) {
                    if (_0x111750[_0x4002fc] !== undefined) return _0x111750[_0x4002fc];
                }
                return null;
            };
            _0x1d1aec['gamepadControl'] = function () {
                var _0x2a4908 = {
                    'buttons': [],
                    'axes': []
                };
                for (var _0x4da2d6 = 0x0; _0x4da2d6 < 0x10; _0x4da2d6++) _0x2a4908['buttons']['push']({
                    'pressed': ![]
                });
                return _0x2a4908;
            };
            _0x1d1aec['recycledCanvases'] = [];
            for (var _0x32e2b3 = 0x0; _0x32e2b3 < 0x1e; _0x32e2b3++) {
                _0x1d1aec['recycledCanvases']['push'](document['createElement']('canvas'));
                _0x1d1aec['recycledCanvases'][_0x32e2b3]['width'] = 0x0;
                _0x1d1aec['recycledCanvases'][_0x32e2b3]['height'] = 0x0;
            }
            _0x1d1aec['usingCanvases'] = [];
            _0x1d1aec['getCanvas'] = function () {
                while (_0x1d1aec['recycledCanvases']['length'] > 0x0) {
                    var _0x1bad87 = _0x1d1aec['recycledCanvases']['splice'](0x0, 0x1)[0x0];
                    if (_0x1d1aec['usingCanvases']['indexOf'](_0x1bad87) != -0x1) {
                        continue;
                    }
                    _0x1d1aec['usingCanvases']['push'](_0x1bad87);
                    return _0x1bad87;
                }
                return document['createElement']('canvas');
            };
            _0x1d1aec['mouse'] = function (_0x3f0140) {
                var _0x100485 = new _0x1d1aec['Vector2'](0x0, 0x0);
                _0x100485['renderer'] = _0x3f0140 || undefined;
                _0x100485['clicking'] = ![];
                _0x100485['rightClicking'] = ![];
                _0x100485['changed'] = ![];
                _0x100485['rightChanged'] = !![];
                _0x100485['moved'] = ![];
                _0x100485['locked'] = ![];
                _0x100485['emulatedFromTouch'] = ![];
                _0x100485['client'] = new _0x1d1aec['Vector2'](0x0, 0x0);
                window['addEventListener']('mousemove', function (_0x1e9b02) {
                    _0x100485['emulatedFromTouch'] = ![];
                    if (_0x100485['locked']) {
                        _0x100485['client']['x'] += _0x1e9b02['movementX'];
                        _0x100485['client']['y'] += _0x1e9b02['movementY'];
                        _0x100485['client']['x'] = Math['max'](Math['min'](_0x100485['client']['x'], window['innerWidth']), 0x0);
                        _0x100485['client']['y'] = Math['max'](Math['min'](_0x100485['client']['y'], window['innerHeight']), 0x0);
                        _0x100485['newx'] = _0x100485['client']['x'];
                        _0x100485['newy'] = _0x100485['client']['y'];
                    } else {
                        _0x100485['newx'] = _0x1e9b02['clientX'];
                        _0x100485['newy'] = _0x1e9b02['clientY'];
                        _0x100485['client']['x'] = _0x100485['x'];
                        _0x100485['client']['y'] = _0x100485['y'];
                    }
                    _0x100485['moved'] = !![];
                });
                window['addEventListener']('mousedown', function (_0x15a930) {
                    var _0x4e63d2 = _0x15a930['target'];
                    while (_0x4e63d2 && _0x4e63d2['classList']) {
                        _0x4e63d2['classList']['add']('pressed');
                        _0x4e63d2 = _0x4e63d2['parentNode'];
                    }
                    window['addEventListener']('mouseup', function () {
                        var _0x4f4be5 = _0x15a930['target'];
                        while (_0x4f4be5 && _0x4f4be5['classList']) {
                            _0x4f4be5['classList']['remove']('pressed');
                            _0x4f4be5 = _0x4f4be5['parentNode'];
                        }
                    }, {
                        'once': !![]
                    });
                    _0x100485['emulatedFromTouch'] = ![];
                    if (_0x15a930['button'] === 0x0) {
                        _0x100485['clicking'] = !![];
                        _0x100485['changed'] = !![];
                    } else if (_0x15a930['button'] == 0x2) {
                        _0x100485['rightClicking'] = !![];
                        _0x100485['rightChanged'] = !![];
                    } else if (_0x15a930['button'] > 0x2) {
                        _0x15a930['preventDefault']();
                    }
                });
                window['addEventListener']('click', function (_0x14a4ce) {
                    if (_0x14a4ce['button'] > 0x2) {
                        _0x14a4ce['preventDefault']();
                    }
                });
                window['addEventListener']('contextmenu', function (_0x50c741) {
                    _0x50c741['preventDefault']();
                    if (_0x50c741['stopPropagation'] != undefined) _0x50c741['stopPropagation']();
                });
                window['addEventListener']('mouseup', function (_0x280b2f) {
                    _0x100485['emulatedFromTouch'] = ![];
                    if (_0x280b2f['button'] === 0x0) {
                        _0x100485['clicking'] = ![];
                        _0x100485['changed'] = !![];
                    } else if (_0x280b2f['button'] == 0x2) {
                        _0x100485['rightClicking'] = ![];
                        _0x100485['rightChanged'] = !![];
                    } else if (_0x280b2f['button'] > 0x2) {
                        _0x280b2f['preventDefault']();
                    }
                });
                _0x100485['fromRenderer'] = function (_0x3ccd74) {
                    this['x'] = (this['x'] - _0x3ccd74['c']['width'] / 0x2 - _0x3ccd74['left']) * _0x3ccd74['ratio'] / 0x2;
                    this['y'] = (this['y'] - _0x3ccd74['c']['height'] / 0x2 - _0x3ccd74['top']) * _0x3ccd74['ratio'] / 0x2;
                };
                _0x100485['isCollidingWithRectangle'] = function (_0x382155, _0x675e17 = ![]) {
                    if (!_0x675e17 && this['emulatedFromTouch'] && !this['clicking'] && !this['rightClicking']) return ![];
                    if (_0x3f0140 === undefined) return ![];
                    if (this['x'] < _0x382155['position']['x'] + _0x382155['width'] / 0x2 && this['x'] > _0x382155['position']['x'] - _0x382155['width'] / 0x2 && this['y'] < _0x382155['position']['y'] + _0x382155['height'] / 0x2 && this['y'] > _0x382155['position']['y'] - _0x382155['height'] / 0x2) return !![];
                    return ![];
                };
                return _0x100485;
            };
            _0x1d1aec['touches'] = function (_0x5b184b, _0x1fdb43) {
                var _0x31be48 = [];
                var _0x21e0e0 = null;

                function _0x243f1c(_0x5eb733) {
                    _0x5eb733['tX'] = Math['max'](Math['min']((_0x5eb733['x'] - _0x5b184b['c']['width'] / _0x1d1aec['devicePixelRatio'] * _0x5b184b['qualitySize'] / 0x2 - _0x5b184b['left']) * _0x5b184b['ratio'] / _0x5b184b['qualitySize'] * _0x1d1aec['devicePixelRatio'], 0x780 / 0x2), -0x780 / 0x2);
                    _0x5eb733['tY'] = Math['max'](Math['min']((_0x5eb733['y'] - _0x5b184b['c']['height'] / _0x1d1aec['devicePixelRatio'] * _0x5b184b['qualitySize'] / 0x2 - _0x5b184b['top']) * _0x5b184b['ratio'] / _0x5b184b['qualitySize'] * _0x1d1aec['devicePixelRatio'], 0x438 / 0x2), -0x438 / 0x2);
                    _0x5eb733['tStartX'] = Math['max'](Math['min']((_0x5eb733['startX'] - _0x5b184b['c']['width'] / _0x1d1aec['devicePixelRatio'] * _0x5b184b['qualitySize'] / 0x2 - _0x5b184b['left']) * _0x5b184b['ratio'] / _0x5b184b['qualitySize'] * _0x1d1aec['devicePixelRatio'], 0x780 / 0x2), -0x780 / 0x2);
                    _0x5eb733['tStartY'] = Math['max'](Math['min']((_0x5eb733['startY'] - _0x5b184b['c']['height'] / _0x1d1aec['devicePixelRatio'] * _0x5b184b['qualitySize'] / 0x2 - _0x5b184b['top']) * _0x5b184b['ratio'] / _0x5b184b['qualitySize'] * _0x1d1aec['devicePixelRatio'], 0x438 / 0x2), -0x438 / 0x2);
                }
                window['addEventListener']('touchstart', function (_0x2fd751) {
                    var _0x1af900 = _0x2fd751['target'];
                    while (_0x1af900 && _0x1af900['classList']) {
                        _0x1af900['classList']['add']('pressed');
                        _0x1af900 = _0x1af900['parentNode'];
                    }
                    _0x1fdb43['emulatedFromTouch'] = !![];
                    for (var _0x13a3fa of _0x2fd751['changedTouches']) {
                        _0x21e0e0 = _0x13a3fa['identifier'];
                        if (_0x1fdb43) {
                            _0x1fdb43['clicking'] = !![];
                            _0x1fdb43['changed'] = !![];
                            _0x1fdb43['newx'] = _0x13a3fa['clientX'];
                            _0x1fdb43['newy'] = _0x13a3fa['clientY'];
                            _0x1fdb43['client']['x'] = _0x1fdb43['x'];
                            _0x1fdb43['client']['y'] = _0x1fdb43['y'];
                            _0x1fdb43['moved'] = !![];
                        }
                        var _0x13a3fa = {
                            'id': _0x13a3fa['identifier'],
                            'x': _0x13a3fa['clientX'],
                            'y': _0x13a3fa['clientY'],
                            'startX': _0x13a3fa['clientX'],
                            'startY': _0x13a3fa['clientY'],
                            'moved': !![]
                        };
                        _0x243f1c(_0x13a3fa);
                        _0x31be48['push'](_0x13a3fa);
                    }
                    _0x2fd751['preventDefault']();
                }, {
                    'passive': ![]
                });
                window['addEventListener']('touchmove', function (_0x3955d7) {
                    for (var _0x35be29 of _0x3955d7['changedTouches']) {
                        if (_0x21e0e0 == _0x35be29['identifier']) {
                            _0x1fdb43['emulatedFromTouch'] = !![];
                            _0x1fdb43['newx'] = _0x35be29['clientX'];
                            _0x1fdb43['newy'] = _0x35be29['clientY'];
                            _0x1fdb43['client']['x'] = _0x1fdb43['x'];
                            _0x1fdb43['client']['y'] = _0x1fdb43['y'];
                            _0x1fdb43['moved'] = !![];
                        }
                        var _0xe43e70 = _0x31be48['find'](_0x21f2e7 => _0x21f2e7['id'] == _0x35be29['identifier']);
                        if (_0xe43e70 == null) continue;
                        _0xe43e70['x'] = _0x35be29['clientX'];
                        _0xe43e70['y'] = _0x35be29['clientY'];
                        _0xe43e70['moved'] = !![];
                        _0x243f1c(_0xe43e70);
                    }
                    _0x3955d7['preventDefault']();
                }, {
                    'passive': ![]
                });
                var _0x3fea0e = function (_0x34b3cd) {
                    var _0x4ea86b = _0x34b3cd['target'];
                    while (_0x4ea86b && _0x4ea86b['classList']) {
                        _0x4ea86b['classList']['remove']('pressed');
                        _0x4ea86b = _0x4ea86b['parentNode'];
                    }
                    for (var _0xa3fdf9 of _0x34b3cd['changedTouches']) {
                        var _0x35dabc = _0xa3fdf9['target'];
                        while (_0x35dabc != null) {
                            if (_0x35dabc['tagName'] == 'INPUT') {
                                _0x35dabc['focus']();
                                _0x34b3cd['preventDefault']();
                                return;
                            }
                            if (_0x35dabc['tagName'] == 'A') {
                                _0x35dabc['target'] = '';
                                _0x35dabc['click']();
                                _0x34b3cd['preventDefault']();
                                return;
                            }
                            if (_0x35dabc['onclick']) {
                                _0x35dabc['onclick'](_0xa3fdf9);
                                _0x34b3cd['preventDefault']();
                                return;
                            }
                            _0x35dabc = _0x35dabc['parentElement'];
                        }
                        if (_0x34b3cd['target']) _0xa3fdf9['target']['click']();
                        if (_0x21e0e0 == _0xa3fdf9['identifier']) {
                            _0x21e0e0 = null;
                            if (_0x1fdb43) {
                                _0x1fdb43['emulatedFromTouch'] = !![];
                                _0x1fdb43['clicking'] = ![];
                                _0x1fdb43['changed'] = !![];
                                _0x1fdb43['newx'] = _0xa3fdf9['clientX'];
                                _0x1fdb43['newy'] = _0xa3fdf9['clientY'];
                                _0x1fdb43['client']['x'] = _0x1fdb43['x'];
                                _0x1fdb43['client']['y'] = _0x1fdb43['y'];
                                _0x1fdb43['moved'] = !![];
                            }
                        }
                        var _0x4af52e = _0x31be48['findIndex'](_0x381ccf => _0x381ccf['id'] == _0xa3fdf9['identifier']);
                        if (_0x4af52e == -0x1) continue;
                        _0x31be48['splice'](_0x4af52e, 0x1);
                    }
                    _0x34b3cd['preventDefault']();
                };
                window['addEventListener']('touchend', _0x3fea0e, {
                    'passive': ![]
                });
                window['addEventListener']('touchcancel', _0x3fea0e, {
                    'passive': ![]
                });
                return {
                    'renderer': _0x5b184b,
                    'touches': _0x31be48,
                    'getTouch'(_0x3edc91) {
                        return this['touches']['find'](_0x40c89c => _0x40c89c['id'] == _0x3edc91);
                    }
                };
            };
            _0x1d1aec['renderer'] = function (_0x3b8b81) {
                if (_0x3b8b81 === undefined) {
                    _0x3b8b81 = document['createElement']('canvas');
                    _0x3b8b81['style']['position'] = 'absolute';
                    document['body']['appendChild'](_0x3b8b81);
                }
                _0x1d1aec['renderers']['push']({
                    'ctx': _0x3b8b81['getContext']('2d'),
                    'c': _0x3b8b81,
                    'clearScreen': !![],
                    'top': 0x0,
                    'left': 0x0,
                    'leftOfScreen': 0x0,
                    'rightOfScreen': 0x0,
                    'topOfScreen': 0x0,
                    'bottomOfScreen': 0x0,
                    'position': new _0x1d1aec['Vector2'](0x0, 0x0),
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
                    'resizeIfNeeded': function (_0x1df42a) {
                        var _0x3b6530 = _0x1d1aec['now'];
                        if (_0x3b6530 - this['lastResize']['lastCheck'] > 0xfa || _0x1df42a) {
                            if (!_0x1df42a) this['lastResize']['lastCheck'] = _0x3b6530;
                        } else {
                            return;
                        }
                        _0x1d1aec['devicePixelRatio'] = (window['devicePixelRatio'] + 0x1) / 0x2;
                        _0x1d1aec['devicePixelRatio'] = _0x1d1aec['normalLerp'](0x1, window['devicePixelRatio'], _0x1d1aec['pixelResize']);
                        if (window['innerWidth'] >= 0x3e8) {
                            _0x1d1aec['devicePixelRatio'] = 0x1;
                            _0x1d1aec['pixelResize'] = 0x0;
                        }
                        this['inset']['top'] = _0x51f498('sat') * _0x1d1aec['devicePixelRatio'];
                        this['inset']['bottom'] = _0x51f498('sab') * _0x1d1aec['devicePixelRatio'];
                        this['inset']['left'] = _0x51f498('sal') * _0x1d1aec['devicePixelRatio'];
                        this['inset']['right'] = _0x51f498('sar') * _0x1d1aec['devicePixelRatio'];
                        var _0x539242 = window['innerWidth'];
                        var _0x167d90 = window['innerHeight'];
                        var _0x39c122 = this['qualitySize'];
                        if (_0x539242 != this['lastResize']['screenWidth'] || _0x167d90 != this['lastResize']['screenHeight'] || _0x39c122 != this['lastResize']['renderSize'] || _0x1d1aec['pixelResize'] != this['lastResize']['pixelResize'] || this['inset']['top'] != this['lastResize']['inset']['top'] || this['inset']['bottom'] != this['lastResize']['inset']['bottom'] || this['inset']['left'] != this['lastResize']['inset']['left'] || this['inset']['right'] != this['lastResize']['inset']['right']) {
                            this['lastResize']['screenWidth'] = _0x539242;
                            this['lastResize']['screenHeight'] = _0x167d90;
                            this['lastResize']['renderSize'] = _0x39c122;
                            this['lastResize']['pixelResize'] = _0x1d1aec['pixelResize'];
                            Object['assign'](this['lastResize']['inset'], this['inset']);
                        } else {
                            return;
                        }
                        var _0x4b8622 = this;
                        if (_0x539242 / _0x4b8622['c']['width'] <= _0x167d90 / _0x4b8622['c']['height']) {
                            _0x4b8622['c']['height'] = _0x167d90 * _0x1d1aec['devicePixelRatio'];
                            _0x4b8622['c']['width'] = _0x4b8622['c']['height'] * 0x10 / 0x9;
                            _0x4b8622['ratio'] = 0x438 / _0x4b8622['c']['height'];
                            _0x4b8622['c']['style']['height'] = '100vh';
                            _0x4b8622['c']['style']['width'] = _0x167d90 / _0x4b8622['c']['height'] * _0x4b8622['c']['width'] + 0x2;
                            _0x4b8622['c']['style']['top'] = '0';
                            _0x4b8622['top'] = 0x0;
                            _0x4b8622['c']['style']['left'] = _0x539242 / 0x2 - _0x167d90 / _0x4b8622['c']['height'] * _0x4b8622['c']['width'] / 0x2 - 0x1 + 'px';
                            _0x4b8622['left'] = _0x539242 / 0x2 - _0x167d90 / _0x4b8622['c']['height'] * _0x4b8622['c']['width'] / 0x2 - 0x1;
                        } else {
                            _0x4b8622['c']['width'] = _0x539242 * _0x1d1aec['devicePixelRatio'];
                            _0x4b8622['c']['height'] = _0x4b8622['c']['width'] * 0x9 / 0x10;
                            _0x4b8622['ratio'] = 0x780 / _0x4b8622['c']['width'];
                            _0x4b8622['c']['style']['width'] = '100vw';
                            _0x4b8622['c']['style']['height'] = _0x539242 / _0x4b8622['c']['width'] * _0x4b8622['c']['height'];
                            _0x4b8622['c']['style']['left'] = '0';
                            _0x4b8622['left'] = 0x0;
                            _0x4b8622['c']['style']['top'] = _0x167d90 / 0x2 - _0x539242 / _0x4b8622['c']['width'] * _0x4b8622['c']['height'] / 0x2 + 'px';
                            _0x4b8622['top'] = _0x167d90 / 0x2 - _0x539242 / _0x4b8622['c']['width'] * _0x4b8622['c']['height'] / 0x2;
                        }
                        _0x4b8622['leftOfScreen'] = -0x780 / 0x2 - (_0x539242 * _0x1d1aec['devicePixelRatio'] - _0x4b8622['c']['width']) / 0x2 * _0x4b8622['ratio'];
                        _0x4b8622['topOfScreen'] = -0x438 / 0x2 - (_0x167d90 * _0x1d1aec['devicePixelRatio'] - _0x4b8622['c']['height']) / 0x2 * _0x4b8622['ratio'];
                        _0x4b8622['rightOfScreen'] = -_0x4b8622['leftOfScreen'];
                        _0x4b8622['bottomOfScreen'] = -_0x4b8622['topOfScreen'];
                        _0x4b8622['c']['width'] /= _0x39c122;
                        _0x4b8622['c']['height'] /= _0x39c122;
                        _0x4b8622['ratio'] *= _0x39c122;
                        _0x4b8622['scaleFactor'] = _0x4b8622['ratio'] / _0x4b8622['qualitySize'] / 0x2;
                        _0x4b8622['ctx']['imageSmoothingEnabled'] = _0x4b8622['smoothingEnabled'];
                    },
                    'render': function (_0x11733e) {
                        this['resizeIfNeeded'](![]);
                        this['ctx']['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                        if (this['clearScreen']) this['clear']();
                        this['ctx']['translate'](-this['position']['x'] / this['ratio'] + this['c']['width'] / 0x2, -this['position']['y'] / this['ratio'] + this['c']['height'] / 0x2);
                        _0x11733e['render'](this['ctx'], this['ratio'] * _0x11733e['camera']['ratio'], 0x1);
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
                _0x1d1aec['renderers'][_0x1d1aec['renderers']['length'] - 0x1]['ctx']['imageSmoothingEnabled'] = !![];
                _0x1d1aec['resize'](!![]);
                _0x1d1aec['oldresize']();
                _0x1d1aec['resize'](!![]);
                return _0x1d1aec['renderers'][_0x1d1aec['renderers']['length'] - 0x1];
            };
            _0x1d1aec['socket'] = function (_0x258c71, _0x1ff269, _0x5f5431, _0x393d83, _0x143ac2) {
                if (_0x258c71 === undefined) return null;
                var _0x578ca2 = new WebSocket(_0x258c71);
                _0x578ca2['binaryType'] = 'arraybuffer';
                _0x578ca2['onmessage'] = _0x1ff269 || function () {};
                _0x578ca2['onopen'] = _0x5f5431 || function () {};
                _0x578ca2['onclose'] = _0x393d83 || function () {};
                _0x578ca2['onerror'] = _0x143ac2 || function () {};
                return _0x578ca2;
            };
            _0x1d1aec['resize'] = function (_0x283ae8) {
                _0x1d1aec['renderers']['forEach'](function (_0x304536) {
                    _0x304536['resizeIfNeeded'](_0x283ae8);
                });
            };
            _0x1d1aec['oldresize'] = function () {
                var _0x1856fa = 0x1;
                _0x1d1aec['renderers']['forEach'](function (_0x2d2975) {
                    _0x1856fa = _0x2d2975['qualitySize'];
                    if (document['body']['clientWidth'] / _0x2d2975['c']['width'] <= document['body']['clientHeight'] / _0x2d2975['c']['height']) {
                        _0x2d2975['c']['height'] = document['body']['clientHeight'] * _0x1d1aec['devicePixelRatio'];
                        _0x2d2975['c']['width'] = _0x2d2975['c']['height'] * 0x10 / 0x9;
                        _0x2d2975['ratio'] = 0x438 / _0x2d2975['c']['height'];
                        _0x2d2975['c']['style']['height'] = '100%';
                        _0x2d2975['c']['style']['width'] = document['body']['clientHeight'] / _0x2d2975['c']['height'] * _0x2d2975['c']['width'] + 0x2;
                        _0x2d2975['c']['style']['top'] = '0';
                        _0x2d2975['top'] = 0x0;
                        _0x2d2975['c']['style']['left'] = document['body']['clientWidth'] / 0x2 - document['body']['clientHeight'] / _0x2d2975['c']['height'] * _0x2d2975['c']['width'] / 0x2 - 0x1 + 'px';
                        _0x2d2975['left'] = document['body']['clientWidth'] / 0x2 - document['body']['clientHeight'] / _0x2d2975['c']['height'] * _0x2d2975['c']['width'] / 0x2 - 0x1;
                    } else {
                        _0x2d2975['c']['width'] = document['body']['clientWidth'] * _0x1d1aec['devicePixelRatio'];
                        _0x2d2975['c']['height'] = _0x2d2975['c']['width'] * 0x9 / 0x10;
                        _0x2d2975['ratio'] = 0x780 / _0x2d2975['c']['width'];
                        _0x2d2975['c']['style']['width'] = '100%';
                        _0x2d2975['c']['style']['height'] = document['body']['clientWidth'] / _0x2d2975['c']['width'] * _0x2d2975['c']['height'];
                        _0x2d2975['c']['style']['left'] = '0';
                        _0x2d2975['left'] = 0x0;
                        _0x2d2975['c']['style']['top'] = document['body']['clientHeight'] / 0x2 - document['body']['clientWidth'] / _0x2d2975['c']['width'] * _0x2d2975['c']['height'] / 0x2 + 'px';
                        _0x2d2975['top'] = document['body']['clientHeight'] / 0x2 - document['body']['clientWidth'] / _0x2d2975['c']['width'] * _0x2d2975['c']['height'] / 0x2;
                    }
                    _0x2d2975['leftOfScreen'] = -0x780 / 0x2 - (document['body']['clientWidth'] * _0x1d1aec['devicePixelRatio'] - _0x2d2975['c']['width']) / 0x2 * _0x2d2975['ratio'];
                    _0x2d2975['topOfScreen'] = -0x438 / 0x2 - (document['body']['clientHeight'] * _0x1d1aec['devicePixelRatio'] - _0x2d2975['c']['height']) / 0x2 * _0x2d2975['ratio'];
                    _0x2d2975['rightOfScreen'] = -_0x2d2975['leftOfScreen'];
                    _0x2d2975['bottomOfScreen'] = -_0x2d2975['topOfScreen'];
                    _0x2d2975['c']['width'] /= _0x1856fa;
                    _0x2d2975['c']['height'] /= _0x1856fa;
                    _0x2d2975['ratio'] *= _0x1856fa;
                    _0x2d2975['ctx']['imageSmoothingEnabled'] = _0x2d2975['smoothingEnabled'];
                });
            };
            window['addEventListener']('resize', _0x1d1aec['resize'], ![]);
            _0x1d1aec['object'] = function () {
                return {
                    'position': new _0x1d1aec['Vector2'](0x0, 0x0),
                    'size': 0x1,
                    'opacity': 0x1,
                    'rotation': 0x0,
                    'type': 'object',
                    'background': ![],
                    'visible': !![],
                    'parent': null,
                    'objects': [],
                    'belowObjects': [],
                    'add': function (_0x2c3185) {
                        if (_0x2c3185['parent'] != null) {
                            console['log']('You can only have 1 parent per object');
                            return;
                        }
                        _0x2c3185['parent'] = this;
                        this['objects']['push'](_0x2c3185);
                    },
                    'addBelow': function (_0x11a4ee) {
                        if (_0x11a4ee['parent'] != null) {
                            console['log']('You can only have 1 parent per object');
                            return;
                        }
                        _0x11a4ee['parent'] = this;
                        this['belowObjects']['unshift'](_0x11a4ee);
                    },
                    'remove': function (_0x29bf29) {
                        if (_0x29bf29['type'] == 'text' && _0x29bf29['canvas'] !== undefined) {}
                        while (this['objects']['indexOf'](_0x29bf29) != -0x1) {
                            this['objects']['splice'](this['objects']['indexOf'](_0x29bf29), 0x1);
                            _0x29bf29['parent'] = null;
                        }
                        while (this['belowObjects']['indexOf'](_0x29bf29) != -0x1) {
                            this['belowObjects']['splice'](this['belowObjects']['indexOf'](_0x29bf29), 0x1);
                            _0x29bf29['parent'] = null;
                        }
                    },
                    'unlink': function () {
                        if (this['parent'] != null) {
                            this['parent']['remove'](this);
                            this['parent'] = null;
                        }
                        if (this['type'] == 'text' && this['canvas'] != _0x1d1aec['blankCanvas'] && this['canvas'] != null) {
                            if (_0x1d1aec['recycledCanvases']['indexOf'](this['canvas']) == -0x1) {
                                _0x1d1aec['recycledCanvases']['push'](this['canvas']);
                                while (_0x1d1aec['usingCanvases']['indexOf'](this['canvas']) != -0x1) {
                                    _0x1d1aec['usingCanvases']['splice'](_0x1d1aec['usingCanvases']['indexOf'](this['canvas']), 0x1);
                                }
                                this['canvas']['width'] = this['canvas']['height'] = 0x0;
                                this['canvas'] = null;
                            }
                        }
                        while (this['objects']['length'] > 0x0) {
                            var _0x4de05d = this['objects'][0x0];
                            _0x4de05d['unlink']();
                            if (this['objects'][0x0] == _0x4de05d) {
                                this['objects']['splice'](0x0, 0x1);
                            }
                        }
                        while (this['belowObjects']['length'] > 0x0) {
                            var _0x4de05d = this['belowObjects'][0x0];
                            _0x4de05d['unlink']();
                            if (this['belowObjects'][0x0] == _0x4de05d) {
                                this['belowObjects']['splice'](0x0, 0x1);
                            }
                        }
                    },
                    'render': function (_0x31968f, _0x548c8e, _0x3f4613) {
                        if (!this['visible'] || _0x3f4613 <= 0x0 || this['opacity'] <= 0x0) {
                            return;
                        }
                        _0x3f4613 = Math['min'](Math['max'](0x0, _0x3f4613), 0x1);
                        var _0x5a5a94 = this['size'];
                        _0x3f4613 = Math['min'](this['opacity'] * _0x3f4613, 0x1);
                        var _0x11f8a6, _0x5ae7a8;
                        if (this['position']['x'] != 0x0 || this['position']['y'] != 0x0) {
                            _0x11f8a6 = this['position']['x'] / _0x548c8e;
                            _0x5ae7a8 = this['position']['y'] / _0x548c8e;
                            _0x31968f['translate'](_0x11f8a6, _0x5ae7a8);
                        }
                        if (this['rotation'] != 0x0) {
                            _0x31968f['rotate'](this['rotation']);
                        }
                        var _0x5d7b95 = _0x548c8e / this['size'];
                        this['belowObjects']['forEach'](function (_0x578158) {
                            _0x578158['render'](_0x31968f, _0x5d7b95, _0x3f4613);
                        });
                        _0x31968f['globalAlpha'] = _0x3f4613;
                        this['renderSpecific'](_0x31968f, _0x5d7b95);
                        this['objects']['forEach'](function (_0x21ec29) {
                            _0x21ec29['render'](_0x31968f, _0x5d7b95, _0x3f4613);
                        });
                        if (this['rotation'] != 0x0) {
                            _0x31968f['rotate'](-this['rotation']);
                        }
                        if (this['position']['x'] != 0x0 || this['position']['y'] != 0x0) {
                            _0x31968f['translate'](-_0x11f8a6, -_0x5ae7a8);
                        }
                    },
                    'renderSpecific': function (_0x140d6b, _0x2496d8) {
                        return;
                    },
                    'absolutePosition': function (_0x309808) {
                        _0x309808['x'] = this['position']['x'];
                        _0x309808['y'] = this['position']['y'];
                        var _0x30d3b6 = this['parent'];
                        while (_0x30d3b6 != null) {
                            _0x309808['x'] += _0x30d3b6['position']['x'];
                            _0x309808['y'] += _0x30d3b6['position']['y'];
                            _0x30d3b6 = _0x30d3b6['parent'];
                        }
                        return _0x309808;
                    }
                };
            };
            _0x1d1aec['image'] = function (_0x17af87, _0x5296eb, _0x427fd1, _0x421adb, _0x4c46fb, _0x47cc1c) {
                var _0x2b6f73 = new _0x1d1aec['object']();
                _0x2b6f73['image'] = _0x17af87 || null;
                if (_0x2b6f73['image'] == null || _0x2b6f73 === undefined) {}
                _0x2b6f73['position'] = new _0x1d1aec['Vector2'](_0x5296eb || 0x0, _0x427fd1 || 0x0);
                _0x2b6f73['width'] = _0x421adb || 0x64;
                _0x2b6f73['height'] = _0x4c46fb || 0x64;
                _0x2b6f73['opacity'] = _0x47cc1c || 0x1;
                _0x2b6f73['type'] = 'image';
                _0x2b6f73['renderSpecific'] = function (_0x3edfcf, _0x141b33) {
                    var _0x4f4d83 = 0x1 / _0x141b33;
                    try {
                        _0x3edfcf['drawImage'](this['image'], -this['width'] * 0.5 * _0x4f4d83, -this['height'] * 0.5 * _0x4f4d83, this['width'] * _0x4f4d83, this['height'] * _0x4f4d83);
                    } catch (_0x210632) {
                        _0x3edfcf['fillStyle'] = '#000';
                        _0x3edfcf['globalAlpha'] = 0x1;
                        _0x3edfcf['fillRect'](-this['width'] * 0.5 * _0x4f4d83, -this['height'] * 0.5 * _0x4f4d83, this['width'] * _0x4f4d83, this['height'] * _0x4f4d83);
                    }
                };
                return _0x2b6f73;
            };
            _0x1d1aec['prerender'] = function (_0xa8d0a8, _0x269b53, _0x5ae7de, _0x12bac4) {
                var _0x4293af = _0x1d1aec['getCanvas']();
                var _0x1645f8 = _0x4293af['getContext']('2d');
                if (_0x5ae7de === undefined) {
                    _0x5ae7de = _0x269b53;
                }
                _0x12bac4 = _0x12bac4 || 0x1;
                _0x4293af['width'] = Math['max'](_0x269b53 * 0x2 * _0x12bac4, 0x1);
                _0x4293af['height'] = Math['max'](_0x5ae7de * 0x2 * _0x12bac4, 0x1);
                _0x1645f8['translate'](_0x4293af['width'] / 0x2, _0x4293af['height'] / 0x2);
                var _0x46aac7 = _0xa8d0a8['position']['x'];
                var _0x24d09f = _0xa8d0a8['position']['y'];
                _0xa8d0a8['position'] = new _0x1d1aec['Vector2']();
                _0xa8d0a8['render'](_0x1645f8, 0.5, 0x1);
                return new _0x1d1aec['image'](_0x4293af, _0x46aac7, _0x24d09f, _0x269b53, _0x5ae7de, _0xa8d0a8['opacity']);
            };
            _0x1d1aec['textImage'] = function (_0x2e6960, _0x2db8d2, _0x77990f, _0x39f2b7, _0x18de02, _0x42b95f, _0x23712d, _0x36f4f7, _0x3dda08) {
                var _0x5d212b;
                if (_0x2e6960 == null || _0x2e6960 === undefined) {
                    _0x5d212b = _0x1d1aec['getCanvas']();
                } else {
                    _0x5d212b = _0x2e6960;
                }
                var _0x208955 = _0x5d212b['getContext']('2d');
                _0x18de02 *= 0x2;
                _0x208955['font'] = _0x42b95f + ' ' + _0x18de02 + 'px ' + _0x39f2b7;
                _0x208955['fillStyle'] = _0x77990f;
                _0x208955['strokeStyle'] = _0x77990f;
                if (_0x23712d) {
                    _0x208955['lineWidth'] = _0x36f4f7 * 0x2;
                }
                var _0x2f6ccf = _0x208955['measureText'](_0x2db8d2)['width'];
                var _0x2067dc = _0x18de02;
                if (_0x23712d) {
                    _0x2f6ccf += _0x36f4f7 * 0x2;
                    _0x2067dc += _0x36f4f7 * 0x2;
                }
                if (!_0x3dda08) {
                    _0x5d212b['width'] = Math['max'](_0x2f6ccf, 0x1);
                    _0x5d212b['height'] = Math['max'](_0x2067dc, 0x1);
                }
                _0x208955['fillStyle'] = '#000';
                _0x208955['font'] = _0x42b95f + ' ' + _0x18de02 + 'px ' + _0x39f2b7;
                _0x208955['fillStyle'] = _0x77990f;
                _0x208955['strokeStyle'] = _0x77990f;
                _0x208955['imageSmoothingEnabled'] = ![];
                if (_0x23712d) {
                    _0x208955['lineWidth'] = _0x36f4f7 * 0x2;
                    _0x208955['miterLimit'] = 0.1;
                    _0x208955['strokeText'](_0x2db8d2, _0x36f4f7, _0x18de02 / 0x4 + _0x2067dc / 0x2 + _0x36f4f7 / 0x2);
                } else {
                    _0x208955['fillText'](_0x2db8d2, -(_0x2f6ccf - _0x5d212b['width']) / 0x2, _0x18de02 / 0x4 + _0x2067dc / 0x2 - (_0x2067dc - _0x5d212b['height']) / 0x2);
                }
                return _0x5d212b;
            };
            _0x1d1aec['flushTextRenderQueue'] = function () {
                while (_0x1d1aec['textRenderQueue']['length'] > 0x0) {
                    var _0x31dee3 = _0x1d1aec['textRenderQueue']['splice'](0x0, 0x1)[0x0];
                    _0x31dee3['redraw']();
                }
            };
            _0x1d1aec['blankCanvas'] = document['createElement']('canvas');
            _0x1d1aec['textRenderQueue'] = [];
            _0x1d1aec['savedTexts'] = [];
            _0x1d1aec['savedStrokes'] = [];
            _0x1d1aec['findText'] = function (_0x2663ee, _0x4e5649) {
                for (var _0x4ff407 = 0x0; _0x4ff407 < _0x2663ee['length']; _0x4ff407++) {
                    var _0x1010f9 = _0x2663ee[_0x4ff407];
                    if (_0x1010f9['text'] == _0x4e5649['text'] && _0x1010f9['fontSize'] == _0x4e5649['fontSize'] && _0x1010f9['textSize'] == _0x4e5649['fontSize']) {
                        return _0x1010f9;
                    }
                }
                return null;
            };
            _0x1d1aec['text'] = function (_0x401358, _0x3df244, _0x36e37f, _0x2521bf, _0x96d3bd, _0xa76518, _0xa95514, _0x501120, _0xc13f71) {
                var _0x21d50b = new _0x1d1aec['object']();
                _0x21d50b['text'] = _0x401358 || '';
                _0x21d50b['position'] = new _0x1d1aec['Vector2'](_0x3df244 || 0x0, _0x36e37f || 0x0);
                _0x21d50b['fillStyle'] = _0x2521bf || '#000';
                _0x21d50b['font'] = _0x96d3bd || 'Arial';
                _0x21d50b['fontSize'] = _0xa76518 || 0x1e;
                _0x21d50b['otherParams'] = _0xa95514 || '';
                _0x21d50b['opacity'] = _0x501120 || 0x1;
                _0x21d50b['type'] = 'text';
                _0x21d50b['width'] = 0x0;
                _0x21d50b['align'] = _0xc13f71 || 'center';
                _0x21d50b['ticksAlive'] = Math['floor'](Math['random']() * 0xc7);
                _0x21d50b['oldText'] = '';
                _0x21d50b['oldFont'] = _0x21d50b['font'];
                _0x21d50b['oldFontSize'] = _0x21d50b['fontSize'];
                _0x21d50b['fontLoaded'] = ![];
                if (document['fonts'] !== undefined) {
                    _0x21d50b['fontLoaded'] = document['fonts']['check'](_0x21d50b['otherParams'] + ' ' + _0xa76518 + 'px ' + _0x96d3bd);
                }
                _0x21d50b['canvas'] = _0x1d1aec['blankCanvas'];
                _0x21d50b['save'] = function () {
                    if (found == null) {
                        _0x1d1aec['savedTexts']['push'](_0x21d50b);
                    }
                };
                _0x21d50b['redraw'] = function () {
                    var _0x401358 = this;
                    if (_0x401358['canvas'] == _0x1d1aec['blankCanvas']) {
                        _0x401358['canvas'] = _0x1d1aec['getCanvas']();
                    }
                    _0x401358['canvas'] = _0x1d1aec['textImage'](_0x401358['canvas'], _0x401358['text'], _0x401358['fillStyle'], _0x401358['font'], _0x401358['fontSize'], _0x401358['otherParams']);
                    _0x401358['oldText'] = _0x401358['text'];
                    _0x401358['oldFont'] = _0x401358['font'];
                    _0x401358['oldFontSize'] = _0x401358['fontSize'];
                    _0x401358['width'] = _0x401358['canvas']['width'] / 0x2;
                    if (document['fonts'] == undefined) {
                        return;
                    }
                    _0x401358['fontLoaded'] = document['fonts']['check'](_0x401358['otherParams'] + ' ' + _0x401358['fontSize'] + 'px ' + _0x401358['font']);
                };
                _0x21d50b['renderSpecific'] = function (_0x4d2b3b, _0x26e985) {
                    this['ticksAlive']++;
                    if (document['fonts'] == undefined) {
                        this['fontLoaded'] = !![];
                        this['redraw']();
                    }
                    if (!this['fontLoaded'] || this['canvas'] === _0x1d1aec['blankCanvas'] || this['oldText'] != this['text'] || this['oldFont'] != this['font'] || this['oldFontSize'] != this['fontSize']) {
                        this['redraw']();
                    }
                    if (this['ticksAlive'] > 0x3e8) {
                        this['ticksAlive'] = 0xa;
                    }
                    _0x26e985 *= 0x2;
                    try {
                        switch (_0x21d50b['align']) {
                        case 'right':
                            _0x4d2b3b['drawImage'](this['canvas'], -this['canvas']['width'] / _0x26e985, -this['canvas']['height'] / 0x2 / _0x26e985, this['canvas']['width'] / _0x26e985, this['canvas']['height'] / _0x26e985);
                            break;
                        case 'left':
                            _0x4d2b3b['drawImage'](this['canvas'], 0x0, -this['canvas']['height'] / 0x2 / _0x26e985, this['canvas']['width'] / _0x26e985, this['canvas']['height'] / _0x26e985);
                            break;
                        default:
                            _0x4d2b3b['drawImage'](this['canvas'], -this['canvas']['width'] / 0x2 / _0x26e985, -this['canvas']['height'] / 0x2 / _0x26e985, this['canvas']['width'] / _0x26e985, this['canvas']['height'] / _0x26e985);
                            break;
                        }
                    } catch (_0x92ab37) {}
                };
                return _0x21d50b;
            };
            _0x1d1aec['strokeText'] = function (_0x1521f4, _0x15265c, _0x4c39ce, _0x154b7c, _0x573c42, _0x3272a3, _0x3b165b, _0x5be5d4, _0x214852) {
                var _0x2f6f3d = new _0x1d1aec['object']();
                _0x2f6f3d['text'] = _0x1521f4 || '';
                _0x2f6f3d['position'] = new _0x1d1aec['Vector2'](_0x15265c || 0x0, _0x4c39ce || 0x0);
                _0x2f6f3d['strokeStyle'] = _0x154b7c || '#000';
                _0x2f6f3d['font'] = _0x573c42 || 'Arial';
                _0x2f6f3d['fontSize'] = _0x3272a3 || 0x1e;
                _0x2f6f3d['otherParams'] = _0x3b165b || '';
                _0x2f6f3d['opacity'] = _0x5be5d4 || 0x1;
                _0x2f6f3d['type'] = 'text';
                _0x2f6f3d['width'] = 0x0;
                _0x2f6f3d['align'] = _0x214852 || 'center';
                _0x2f6f3d['lineWidth'] = 0x2;
                _0x2f6f3d['ticksAlive'] = Math['floor'](Math['random']() * 0xc7);
                _0x2f6f3d['oldText'] = _0x2f6f3d['text'];
                _0x2f6f3d['oldFont'] = _0x2f6f3d['font'];
                _0x2f6f3d['oldFontSize'] = _0x2f6f3d['fontSize'];
                _0x2f6f3d['oldLineWidth'] = _0x2f6f3d['lineWidth'];
                _0x2f6f3d['canvas'] = _0x1d1aec['blankCanvas'];
                _0x2f6f3d['fontLoaded'] = ![];
                if (document['fonts'] !== undefined) {
                    _0x2f6f3d['fontLoaded'] = document['fonts']['check'](_0x2f6f3d['otherParams'] + ' ' + _0x3272a3 + 'px ' + _0x573c42);
                }
                _0x2f6f3d['save'] = function () {
                    if (found == null) {
                        _0x1d1aec['savedStrokes']['push'](_0x2f6f3d);
                    }
                };
                _0x2f6f3d['redraw'] = function () {
                    if (this['canvas'] == _0x1d1aec['blankCanvas']) {
                        this['canvas'] = _0x1d1aec['getCanvas']();
                    }
                    this['canvas'] = _0x1d1aec['textImage'](this['canvas'], this['text'], this['strokeStyle'], this['font'], this['fontSize'], this['otherParams'], !![], this['lineWidth']);
                    this['canvas'] = _0x1d1aec['textImage'](this['canvas'], this['text'], this['strokeStyle'], this['font'], this['fontSize'], this['otherParams'], ![], this['lineWidth'], !![]);
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
                _0x2f6f3d['renderSpecific'] = function (_0x3c191b, _0x261706) {
                    _0x261706 *= 0x2;
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
                        switch (_0x2f6f3d['align']) {
                        case 'right':
                            _0x3c191b['drawImage'](this['canvas'], -this['canvas']['width'] / _0x261706, -this['canvas']['height'] / 0x2 / _0x261706, this['canvas']['width'] / _0x261706, this['canvas']['height'] / _0x261706);
                            break;
                        case 'left':
                            _0x3c191b['drawImage'](this['canvas'], -this['lineWidth'] / _0x261706, -this['canvas']['height'] / 0x2 / _0x261706, this['canvas']['width'] / _0x261706, this['canvas']['height'] / _0x261706);
                            break;
                        default:
                            _0x3c191b['drawImage'](this['canvas'], -this['canvas']['width'] / 0x2 / _0x261706, -this['canvas']['height'] / 0x2 / _0x261706, this['canvas']['width'] / _0x261706, this['canvas']['height'] / _0x261706);
                            break;
                        }
                    } catch (_0x3d7ca2) {}
                };
                return _0x2f6f3d;
            };
            _0x1d1aec['Vector2'] = function (_0x2922d4, _0x485539) {
                return {
                    'x': _0x2922d4 || 0x0,
                    'y': _0x485539 || 0x0,
                    'clone': function () {
                        return new _0x1d1aec['Vector2'](this['x'], this['y']);
                    }
                };
            };
            _0x1d1aec['Vector3'] = function (_0x323ff0, _0x59a544, _0x2d41bf) {
                return {
                    'x': _0x323ff0 || 0x0,
                    'y': _0x59a544 || 0x0,
                    'z': _0x2d41bf || 0x0,
                    'clone': function () {
                        return new _0x1d1aec['Vector3'](this['x'], this['y'], this['z']);
                    }
                };
            };
            _0x1d1aec['Vector4'] = function (_0x50c9f5, _0x8b48c3, _0x4f6f5d, _0x319b47) {
                return {
                    'x': _0x50c9f5 || 0x0,
                    'y': _0x8b48c3 || 0x0,
                    'z': _0x4f6f5d || 0x0,
                    'w': _0x319b47 || 0x0,
                    'clone': function () {
                        return new _0x1d1aec['Vector4'](this['x'], this['y'], this['z'], this['w']);
                    }
                };
            };
            _0x1d1aec['controls'] = function () {
                return {
                    'up': ![],
                    'down': ![],
                    'left': ![],
                    'right': ![],
                    'space': ![],
                    'shift': ![],
                    'changed': ![],
                    'clone': function () {
                        var _0x27031c = new _0x1d1aec['controls']();
                        _0x27031c['up'] = this['up'];
                        _0x27031c['down'] = this['down'];
                        _0x27031c['left'] = this['left'];
                        _0x27031c['right'] = this['right'];
                        _0x27031c['space'] = this['space'];
                        _0x27031c['shift'] = this['shift'];
                        return _0x27031c;
                    }
                };
            };
            _0x1d1aec['multiplayerControls'] = function () {
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
            _0x1d1aec['keyboard'] = function (_0x756a03) {
                _0x756a03 = _0x756a03 || new _0x1d1aec['controls']();
                _0x756a03['changedKeys'] = [];

                function _0x4b83ef(_0x522d4a) {
                    var _0x2a13f9 = ![];
                    if (_0x522d4a['keyCode'] == 0x25 || _0x522d4a['keyCode'] == 0x41) {
                        if (!_0x756a03['left']) {
                            _0x2a13f9 = !![];
                            _0x756a03['left'] = !![];
                            _0x756a03['changedKeys']['push']('left');
                        }
                    } else if (_0x522d4a['keyCode'] == 0x26 || _0x522d4a['keyCode'] == 0x57) {
                        if (!_0x756a03['up']) {
                            _0x2a13f9 = !![];
                            _0x756a03['up'] = !![];
                            _0x756a03['changedKeys']['push']('up');
                        }
                    } else if (_0x522d4a['keyCode'] == 0x27 || _0x522d4a['keyCode'] == 0x44) {
                        if (!_0x756a03['right']) {
                            _0x2a13f9 = !![];
                            _0x756a03['right'] = !![];
                            _0x756a03['changedKeys']['push']('right');
                        }
                    } else if (_0x522d4a['keyCode'] == 0x28 || _0x522d4a['keyCode'] == 0x53) {
                        if (!_0x756a03['down']) {
                            _0x2a13f9 = !![];
                            _0x756a03['down'] = !![];
                            _0x756a03['changedKeys']['push']('down');
                        }
                    } else if (_0x522d4a['keyCode'] == 0x20) {
                        if (!_0x756a03['space']) {
                            _0x2a13f9 = !![];
                            _0x756a03['space'] = !![];
                            _0x756a03['changedKeys']['push']('space');
                        }
                    } else if (_0x522d4a['keyCode'] == 0x10) {
                        if (!_0x756a03['shift']) {
                            _0x2a13f9 = !![];
                            _0x756a03['shift'] = !![];
                            _0x756a03['changedKeys']['push']('shift');
                        }
                    }
                    _0x756a03['changed'] = _0x2a13f9;
                }
                window['addEventListener']('keydown', _0x4b83ef, ![]);

                function _0x563ea3(_0x461838) {
                    if (_0x461838['keyCode'] == 0x25 || _0x461838['keyCode'] == 0x41) {
                        _0x756a03['left'] = ![];
                        _0x756a03['changedKeys']['push']('left');
                    } else if (_0x461838['keyCode'] == 0x26 || _0x461838['keyCode'] == 0x57) {
                        _0x756a03['up'] = ![];
                        _0x756a03['changedKeys']['push']('up');
                    } else if (_0x461838['keyCode'] == 0x27 || _0x461838['keyCode'] == 0x44) {
                        _0x756a03['right'] = ![];
                        _0x756a03['changedKeys']['push']('right');
                    } else if (_0x461838['keyCode'] == 0x28 || _0x461838['keyCode'] == 0x53) {
                        _0x756a03['down'] = ![];
                        _0x756a03['changedKeys']['push']('down');
                    } else if (_0x461838['keyCode'] == 0x20) {
                        _0x756a03['space'] = ![];
                        _0x756a03['changedKeys']['push']('space');
                    } else if (_0x461838['keyCode'] == 0x10) {
                        _0x756a03['shift'] = ![];
                        _0x756a03['changedKeys']['push']('shift');
                    }
                    _0x756a03['changed'] = !![];
                }
                window['addEventListener']('keyup', _0x563ea3, ![]);
                return _0x756a03;
            };
            _0x1d1aec['multiplayerKeyboard'] = function (_0x4dc9b4) {
                _0x4dc9b4 = _0x4dc9b4 || new _0x1d1aec['controls']();

                function _0x5778fc(_0x367328) {
                    var _0x51e065 = ![];
                    if (_0x367328['keyCode'] == 0x41) {
                        if (!_0x4dc9b4['key_a']) {
                            _0x51e065 = !![];
                            _0x4dc9b4['key_a'] = !![];
                        }
                    } else if (_0x367328['keyCode'] == 0x25) {
                        if (!_0x4dc9b4['key_left']) {
                            _0x51e065 = !![];
                            _0x4dc9b4['key_left'] = !![];
                        }
                    } else if (_0x367328['keyCode'] == 0x57) {
                        if (!_0x4dc9b4['key_w']) {
                            _0x51e065 = !![];
                            _0x4dc9b4['key_w'] = !![];
                        }
                    } else if (_0x367328['keyCode'] == 0x26) {
                        if (!_0x4dc9b4['key_up']) {
                            _0x51e065 = !![];
                            _0x4dc9b4['key_up'] = !![];
                        }
                    } else if (_0x367328['keyCode'] == 0x44) {
                        if (!_0x4dc9b4['key_d']) {
                            _0x51e065 = !![];
                            _0x4dc9b4['key_d'] = !![];
                        }
                    } else if (_0x367328['keyCode'] == 0x27) {
                        if (!_0x4dc9b4['key_right']) {
                            _0x51e065 = !![];
                            _0x4dc9b4['key_right'] = !![];
                        }
                    } else if (_0x367328['keyCode'] == 0x53) {
                        if (!_0x4dc9b4['key_s']) {
                            _0x51e065 = !![];
                            _0x4dc9b4['key_s'] = !![];
                        }
                    } else if (_0x367328['keyCode'] == 0x28) {
                        if (!_0x4dc9b4['key_down']) {
                            _0x51e065 = !![];
                            _0x4dc9b4['key_down'] = !![];
                        }
                    } else if (_0x367328['keyCode'] == 0x20) {
                        if (!_0x4dc9b4['space']) {
                            _0x51e065 = !![];
                            _0x4dc9b4['space'] = !![];
                        }
                    } else if (_0x367328['keyCode'] == 0x10) {
                        if (!_0x4dc9b4['shift']) {
                            _0x51e065 = !![];
                            _0x4dc9b4['shift'] = !![];
                        }
                    }
                    _0x4dc9b4['changed'] = _0x51e065;
                }
                window['addEventListener']('keydown', _0x5778fc, ![]);

                function _0x2f522b(_0x3dc43b) {
                    if (_0x3dc43b['keyCode'] == 0x25) _0x4dc9b4['key_left'] = ![];
                    else if (_0x3dc43b['keyCode'] == 0x41) _0x4dc9b4['key_a'] = ![];
                    else if (_0x3dc43b['keyCode'] == 0x26) _0x4dc9b4['key_up'] = ![];
                    else if (_0x3dc43b['keyCode'] == 0x57) _0x4dc9b4['key_w'] = ![];
                    else if (_0x3dc43b['keyCode'] == 0x27) _0x4dc9b4['key_right'] = ![];
                    else if (_0x3dc43b['keyCode'] == 0x44) _0x4dc9b4['key_d'] = ![];
                    else if (_0x3dc43b['keyCode'] == 0x28) _0x4dc9b4['key_down'] = ![];
                    else if (_0x3dc43b['keyCode'] == 0x53) _0x4dc9b4['key_s'] = ![];
                    else if (_0x3dc43b['keyCode'] == 0x20) _0x4dc9b4['space'] = ![];
                    else if (_0x3dc43b['keyCode'] == 0x10) _0x4dc9b4['shift'] = ![];
                    _0x4dc9b4['changed'] = !![];
                }
                window['addEventListener']('keyup', _0x2f522b, ![]);
                return _0x4dc9b4;
            };
            _0x1d1aec['rectangle'] = function (_0x2a5b28, _0x221efe, _0x8ed2ec, _0x4d6bb7, _0x544fd6, _0x13253c) {
                var _0x26d2b8 = new _0x1d1aec['object']();
                _0x26d2b8['position'] = new _0x1d1aec['Vector2'](_0x2a5b28 || 0x0, _0x221efe || 0x0);
                _0x26d2b8['width'] = _0x8ed2ec || 0x64;
                _0x26d2b8['height'] = _0x4d6bb7 || 0x64;
                _0x26d2b8['color'] = _0x544fd6 || '#000000';
                _0x26d2b8['opacity'] = _0x13253c || 0x1;
                _0x26d2b8['type'] = 'rectangle';
                _0x26d2b8['renderSpecific'] = function (_0x49ca82, _0x5d4ec7) {
                    _0x49ca82['fillStyle'] = this['color'];
                    _0x49ca82['fillRect'](-this['width'] * this['size'] / 0x2 / _0x5d4ec7, -this['height'] * this['size'] / 0x2 / _0x5d4ec7, this['width'] * this['size'] / _0x5d4ec7, this['height'] * this['size'] / _0x5d4ec7);
                };
                return _0x26d2b8;
            };
            _0x1d1aec['strokeRectangle'] = function (_0x582588, _0x1f8e37, _0x190b80, _0xd89445, _0x51a95f, _0x4df3dd, _0x31f2a2) {
                var _0x227bd2 = new _0x1d1aec['object']();
                _0x227bd2['position'] = new _0x1d1aec['Vector2'](_0x582588 || 0x0, _0x1f8e37 || 0x0);
                _0x227bd2['width'] = _0x190b80 || 0x64;
                _0x227bd2['height'] = _0xd89445 || 0x64;
                _0x227bd2['color'] = _0x51a95f || '#000000';
                _0x227bd2['opacity'] = _0x31f2a2 || 0x1;
                _0x227bd2['lineWidth'] = _0x4df3dd || 0x5;
                _0x227bd2['type'] = 'rectangle';
                _0x227bd2['renderSpecific'] = function (_0x14aa36, _0x3bf26b) {
                    _0x14aa36['strokeStyle'] = this['color'];
                    _0x14aa36['lineWidth'] = this['lineWidth'] * this['size'] / _0x3bf26b;
                    _0x14aa36['strokeRect'](-this['width'] * this['size'] / 0x2 / _0x3bf26b, -this['height'] * this['size'] / 0x2 / _0x3bf26b, this['width'] * this['size'] / _0x3bf26b, this['height'] * this['size'] / _0x3bf26b);
                };
                return _0x227bd2;
            };
            _0x1d1aec['roundRectangle'] = function (_0x5373ed, _0x1890ca, _0x4a0a38, _0xe1e806, _0x46ce82, _0x2094c6) {
                var _0x515a76 = new _0x1d1aec['object']();
                _0x515a76['position'] = new _0x1d1aec['Vector2'](_0x5373ed || 0x0, _0x1890ca || 0x0);
                _0x515a76['width'] = _0x4a0a38 || 0x64;
                _0x515a76['height'] = _0xe1e806 || 0x64;
                _0x515a76['color'] = _0x2094c6 || '#000000';
                _0x515a76['radius'] = _0x46ce82 || 0x0;
                _0x515a76['type'] = 'roundRectangle';
                _0x515a76['strokeStyle'] = -0x1;
                _0x515a76['lineWidth'] = 0x4;
                _0x515a76['renderSpecific'] = function (_0x2492a2, _0x14ee2e) {
                    _0x2492a2['fillStyle'] = this['color'];
                    _0x2492a2['beginPath']();
                    _0x2492a2['moveTo']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x14ee2e, -this['height'] * this['size'] / 0x2 / _0x14ee2e);
                    _0x2492a2['lineTo']((this['width'] / 0x2 - this['radius']) * this['size'] / _0x14ee2e, -this['height'] * this['size'] / 0x2 / _0x14ee2e);
                    _0x2492a2['arc']((this['width'] / 0x2 - this['radius']) * this['size'] / _0x14ee2e, (-this['height'] / 0x2 + this['radius']) * this['size'] / _0x14ee2e, this['radius'] * this['size'] / _0x14ee2e, Math['PI'] * 0x3 / 0x2, Math['PI'] * 0x2);
                    _0x2492a2['lineTo'](this['width'] * this['size'] / 0x2 / _0x14ee2e, (this['height'] / 0x2 - this['radius']) * this['size'] / _0x14ee2e);
                    _0x2492a2['arc']((this['width'] / 0x2 - this['radius']) * this['size'] / _0x14ee2e, (this['height'] / 0x2 - this['radius']) * this['size'] / _0x14ee2e, this['radius'] * this['size'] / _0x14ee2e, 0x0, Math['PI'] / 0x2);
                    _0x2492a2['lineTo']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x14ee2e, this['height'] * this['size'] / 0x2 / _0x14ee2e);
                    _0x2492a2['arc']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x14ee2e, (this['height'] / 0x2 - this['radius']) * this['size'] / _0x14ee2e, this['radius'] * this['size'] / _0x14ee2e, Math['PI'] / 0x2, Math['PI']);
                    _0x2492a2['lineTo'](-this['width'] * this['size'] / 0x2 / _0x14ee2e, (-this['height'] / 0x2 + this['radius']) * this['size'] / _0x14ee2e);
                    _0x2492a2['arc']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x14ee2e, (-this['height'] / 0x2 + this['radius']) * this['size'] / _0x14ee2e, this['radius'] * this['size'] / _0x14ee2e, Math['PI'], Math['PI'] * 0x3 / 0x2);
                    _0x2492a2['fill']();
                    if (this['strokeStyle'] != -0x1) {
                        _0x2492a2['strokeStyle'] = this['strokeStyle'];
                        _0x2492a2['lineWidth'] = this['lineWidth'] * this['size'] / _0x14ee2e;
                        var _0x593391 = this['width'];
                        var _0x29de97 = this['height'];
                        this['width'] -= this['lineWidth'] / 0x2;
                        this['height'] -= this['lineWidth'] / 0x2;
                        _0x2492a2['beginPath']();
                        _0x2492a2['moveTo']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x14ee2e, -this['height'] * this['size'] / 0x2 / _0x14ee2e);
                        _0x2492a2['lineTo']((this['width'] / 0x2 - this['radius']) * this['size'] / _0x14ee2e, -this['height'] * this['size'] / 0x2 / _0x14ee2e);
                        _0x2492a2['arc']((this['width'] / 0x2 - this['radius']) * this['size'] / _0x14ee2e, (-this['height'] / 0x2 + this['radius']) * this['size'] / _0x14ee2e, this['radius'] * this['size'] / _0x14ee2e, Math['PI'] * 0x3 / 0x2, Math['PI'] * 0x2);
                        _0x2492a2['lineTo'](this['width'] * this['size'] / 0x2 / _0x14ee2e, (this['height'] / 0x2 - this['radius']) * this['size'] / _0x14ee2e);
                        _0x2492a2['arc']((this['width'] / 0x2 - this['radius']) * this['size'] / _0x14ee2e, (this['height'] / 0x2 - this['radius']) * this['size'] / _0x14ee2e, this['radius'] * this['size'] / _0x14ee2e, 0x0, Math['PI'] / 0x2);
                        _0x2492a2['lineTo']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x14ee2e, this['height'] * this['size'] / 0x2 / _0x14ee2e);
                        _0x2492a2['arc']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x14ee2e, (this['height'] / 0x2 - this['radius']) * this['size'] / _0x14ee2e, this['radius'] * this['size'] / _0x14ee2e, Math['PI'] / 0x2, Math['PI']);
                        _0x2492a2['lineTo'](-this['width'] * this['size'] / 0x2 / _0x14ee2e, (-this['height'] / 0x2 + this['radius']) * this['size'] / _0x14ee2e);
                        _0x2492a2['arc']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x14ee2e, (-this['height'] / 0x2 + this['radius']) * this['size'] / _0x14ee2e, this['radius'] * this['size'] / _0x14ee2e, Math['PI'], Math['PI'] * 0x3 / 0x2);
                        _0x2492a2['stroke']();
                        this['width'] = _0x593391;
                        this['height'] = _0x29de97;
                    }
                };
                return _0x515a76;
            };
            _0x1d1aec['blurredRectangle'] = function (_0x25548a, _0x42b0d9, _0xe43bb2, _0x587ec6, _0x1afa08, _0x73f999, _0x535601) {
                _0x25548a = _0x25548a || 0x0;
                _0x42b0d9 = _0x42b0d9 || 0x0;
                _0xe43bb2 = _0xe43bb2 || 0x64;
                _0x587ec6 = _0x587ec6 || 0x64;
                _0x1afa08 = _0x1afa08 || '#000000';
                _0x73f999 = _0x73f999 || 0x3;
                _0x535601 = _0x535601 || 0x1;
                var _0x356e79 = document['createElement']('canvas');
                _0x356e79['width'] = _0xe43bb2 + _0x73f999 * 0x4;
                _0x356e79['height'] = _0x587ec6 + _0x73f999 * 0x4;
                var _0x1f78ef = _0x356e79['getContext']('2d');
                _0x1f78ef['fillStyle'] = _0x1afa08;
                _0x1f78ef['filter'] = 'blur( ' + _0x73f999 + 'px )';
                _0x1f78ef['globalAlpha'] = _0x535601;
                _0x1f78ef['fillRect'](_0x73f999 * 0x2, _0x73f999 * 0x2, _0xe43bb2, _0x587ec6);
                return new _0x1d1aec['image'](_0x356e79, _0x25548a, _0x42b0d9, _0xe43bb2, _0x587ec6);
            };
            _0x1d1aec['polygon'] = function (_0x4f7c93, _0x17d1af, _0x24d066, _0x5e22f3) {
                var _0x36a941 = new _0x1d1aec['object']();
                _0x36a941['position'] = new _0x1d1aec['Vector2'](_0x4f7c93 || 0x0, _0x17d1af || 0x0);
                _0x36a941['points'] = _0x24d066 || [new _0x1d1aec['Vector2'](-0x32, 0x28), new _0x1d1aec['Vector2'](0x0, -0x28), new _0x1d1aec['Vector2'](0x32, 0x28)];
                _0x36a941['color'] = _0x5e22f3 || '#000000';
                _0x36a941['shouldStroke'] = ![];
                _0x36a941['strokeColor'] = '#000000';
                _0x36a941['lineWidth'] = 0x3;
                _0x36a941['type'] = 'polygon';
                _0x36a941['renderSpecific'] = function (_0x4e46b9, _0x36ba5a) {
                    var _0x28945f = _0x4e46b9['miterLimit'];
                    _0x4e46b9['miterLimit'] = 0xa;
                    _0x4e46b9['fillStyle'] = this['color'];
                    _0x4e46b9['lineWidth'] = this['lineWidth'] * this['size'] / _0x36ba5a;
                    _0x4e46b9['beginPath']();
                    _0x4e46b9['moveTo'](this['points'][0x0]['x'] * this['size'] / _0x36ba5a, this['points'][0x0]['y'] * this['size'] / _0x36ba5a);
                    for (var _0x5df7bb = 0x1; _0x5df7bb < this['points']['length']; _0x5df7bb++) {
                        _0x4e46b9['lineTo'](this['points'][_0x5df7bb]['x'] * this['size'] / _0x36ba5a, this['points'][_0x5df7bb]['y'] * this['size'] / _0x36ba5a);
                    }
                    _0x4e46b9['closePath']();
                    if (this['shouldStroke']) {
                        _0x4e46b9['strokeStyle'] = this['strokeColor'];
                        _0x4e46b9['stroke']();
                    }
                    _0x4e46b9['fill']();
                    _0x4e46b9['miterLimit'] = _0x28945f;
                };
                return _0x36a941;
            };
            _0x1d1aec['circle'] = function (_0x24a03e, _0x11e44d, _0x57dd7d, _0x9b91a4, _0x9ff164) {
                var _0x50d4bd = new _0x1d1aec['object']();
                _0x50d4bd['position'] = new _0x1d1aec['Vector2'](_0x24a03e || 0x0, _0x11e44d || 0x0);
                _0x50d4bd['radius'] = _0x57dd7d || 0x64;
                _0x50d4bd['color'] = _0x9b91a4 || '#000000';
                _0x50d4bd['opacity'] = _0x9ff164 || 0x1;
                _0x50d4bd['type'] = 'circle';
                _0x50d4bd['renderSpecific'] = function (_0x34b8c9, _0x26c95c) {
                    _0x34b8c9['fillStyle'] = this['color'];
                    _0x34b8c9['beginPath']();
                    _0x34b8c9['arc'](0x0, 0x0, this['radius'] * this['size'] / _0x26c95c, 0x0, 0x2 * Math['PI']);
                    _0x34b8c9['closePath']();
                    _0x34b8c9['fill']();
                };
                return _0x50d4bd;
            };
            _0x1d1aec['arc'] = function (_0x447452, _0x419a73, _0x4164e7, _0x1d7c23, _0x5c26d2, _0x11dbb8, _0x3f7c81) {
                var _0x3e165a = new _0x1d1aec['object']();
                _0x3e165a['position'] = new _0x1d1aec['Vector2'](_0x447452 || 0x0, _0x419a73 || 0x0);
                _0x3e165a['radius'] = _0x4164e7 || 0x64;
                _0x3e165a['color'] = _0x1d7c23 || '#000000';
                _0x3e165a['angle'] = _0x5c26d2 || Math['PI'];
                _0x3e165a['rotation'] = _0x11dbb8 || 0x0;
                _0x3e165a['lineWidth'] = _0x3f7c81 || 0x5;
                _0x3e165a['type'] = 'arc';
                _0x3e165a['renderSpecific'] = function (_0x152595, _0x37f492) {
                    _0x152595['strokeStyle'] = this['color'];
                    _0x152595['lineWidth'] = this['lineWidth'] * this['size'] / _0x37f492;
                    _0x152595['beginPath']();
                    _0x152595['arc'](0x0, 0x0, this['radius'] * this['size'] / _0x37f492, 0x0, this['angle']);
                    _0x152595['stroke']();
                };
                return _0x3e165a;
            };
            _0x1d1aec['blurredCircle'] = function (_0x2459a2, _0x5c4895, _0x66fee8, _0x475882, _0xeee74d) {
                _0x2459a2 = _0x2459a2 || 0x0;
                _0x5c4895 = _0x5c4895 || 0x0;
                _0x66fee8 = _0x66fee8 || 0x64;
                _0x475882 = _0x475882 || '#000000';
                _0xeee74d = _0xeee74d || 0x3;
                var _0x2b93af = document['createElement']('canvas');
                _0x2b93af['width'] = _0x66fee8 * 0x2 + _0xeee74d * 0x4;
                _0x2b93af['height'] = _0x66fee8 * 0x2 + _0xeee74d * 0x4;
                var _0x1466b0 = _0x2b93af['getContext']('2d');
                _0x1466b0['fillStyle'] = _0x475882;
                _0x1466b0['filter'] = 'blur( ' + _0xeee74d + 'px )';
                _0x1466b0['beginPath']();
                _0x1466b0['arc'](_0x66fee8 + _0xeee74d * 0x2, _0x66fee8 + _0xeee74d * 0x2, _0x66fee8, 0x0, 0x2 * Math['PI']);
                _0x1466b0['closePath']();
                _0x1466b0['fill']();
                return new _0x1d1aec['image'](_0x2b93af, _0x2459a2, _0x5c4895, _0x66fee8 * 0x2, _0x66fee8 * 2.3);
            };
            _0x1d1aec['particle'] = function (_0xc35868, _0xe76a69, _0x5c32ec, _0x26b0ab, _0x5ed5e6, _0x3dfbb4, _0x5d7898, _0x24a3af, _0x50ce7d, _0x5b3783) {
                var _0x55e018 = new _0x1d1aec['rectangle'](_0xc35868, _0xe76a69, _0x5c32ec, _0x5c32ec, _0x26b0ab, 0.7);
                _0x55e018['turn'] = _0x5ed5e6 || (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.2;
                _0x55e018['opacityFade'] = _0x3dfbb4 || 0x1;
                _0x55e018['rotation'] = Math['random']() * Math['PI'] * 0x2;
                _0x55e018['velocity'] = new _0x1d1aec['Vector2'](_0x5d7898 || 0x0, _0x24a3af || 0x0);
                _0x55e018['velocityFade'] = 0x1;
                if (_0x5b3783 !== undefined) _0x55e018['velocityFade'] = _0x5b3783;
                _0x55e018['opacity'] = _0x50ce7d || 0x1;
                _0x55e018['type'] = 'particle';
                _0x55e018['update'] = function (_0x3ef3ce) {
                    _0x55e018['rotation'] += _0x55e018['turn'] * _0x3ef3ce;
                    _0x55e018['width'] -= 0.2 * _0x3ef3ce;
                    _0x55e018['height'] -= 0.2 * _0x3ef3ce;
                    _0x55e018['opacity'] -= 0.02 * _0x3ef3ce * _0x55e018['opacityFade'];
                    _0x55e018['velocity']['x'] *= _0x55e018['velocityFade'];
                    _0x55e018['velocity']['y'] *= _0x55e018['velocityFade'];
                    _0x55e018['position']['x'] += _0x55e018['velocity']['x'] * _0x3ef3ce;
                    _0x55e018['position']['y'] += _0x55e018['velocity']['y'] * _0x3ef3ce;
                    if (_0x55e018['opacity'] <= 0x0 && _0x1d1aec['particles']['indexOf'](_0x55e018) != -0x1) {
                        _0x1d1aec['particles']['splice'](_0x1d1aec['particles']['indexOf'](_0x55e018), 0x1);
                        if (_0x55e018['parent'] != null) _0x55e018['parent']['remove'](_0x55e018);
                    }
                };
                _0x1d1aec['particles']['push'](_0x55e018);
                return _0x55e018;
            };
            _0x1d1aec['customParticle'] = function (_0x4486f4, _0x5ed3e9, _0x447506, _0x242643, _0x38c619, _0x233d38, _0x41777b) {
                _0x4486f4['turn'] = _0x5ed3e9 || (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.2;
                _0x4486f4['opacityFade'] = _0x447506 || 0x1;
                _0x4486f4['rotation'] = Math['random']() * Math['PI'] * 0x2;
                _0x4486f4['velocity'] = new _0x1d1aec['Vector2'](_0x242643 || 0x0, _0x38c619 || 0x0);
                _0x4486f4['widthFade'] = _0x233d38 || 0x1;
                _0x4486f4['heightFade'] = _0x41777b || 0x1;
                _0x4486f4['type'] = 'particle';
                _0x4486f4['opacityThreshold'] = 0x0;
                if (_0x4486f4['update'] == undefined) {
                    _0x4486f4['update'] = function (_0x357156) {
                        _0x4486f4['rotation'] += _0x4486f4['turn'] * _0x357156;
                        _0x4486f4['width'] -= 0.4 * _0x357156 * _0x4486f4['widthFade'];
                        _0x4486f4['height'] -= 0.4 * _0x357156 * _0x4486f4['heightFade'];
                        _0x4486f4['opacity'] -= 0.02 * _0x357156 * _0x4486f4['opacityFade'];
                        _0x4486f4['position']['x'] += _0x4486f4['velocity']['x'] * _0x357156;
                        _0x4486f4['position']['y'] += _0x4486f4['velocity']['y'] * _0x357156;
                        if (_0x4486f4['opacity'] <= _0x4486f4['opacityThreshold'] && _0x1d1aec['particles']['indexOf'](_0x4486f4) != -0x1) {
                            _0x4486f4['opacity'] = 0x0;
                            if (_0x4486f4['parentRemove'] === undefined) _0x1d1aec['particles']['splice'](_0x1d1aec['particles']['indexOf'](_0x4486f4), 0x1);
                            if (_0x4486f4['parent'] != null && _0x4486f4['parentRemove'] === undefined) _0x4486f4['parent']['remove'](_0x4486f4);
                            return 0x0;
                        }
                        return 0x1;
                    };
                }
                if (_0x4486f4['parentRemove'] === undefined) {
                    _0x1d1aec['particles']['push'](_0x4486f4);
                }
                return _0x4486f4;
            };
            _0x1d1aec['scene'] = function () {
                var _0x5258ac = new _0x1d1aec['object']();
                _0x5258ac['type'] = 'scene';
                _0x5258ac['camera'] = {
                    'position': new _0x1d1aec['Vector2'](0x0, 0x0),
                    'ratio': 0x1,
                    'rotation': 0x0
                };
                _0x5258ac['render'] = function (_0x255826, _0x4f0560, _0x3326a5) {
                    _0x4f0560 /= this['size'];
                    this['opacity'] = Math['min'](Math['max'](0x0, this['opacity']), 0x1);
                    _0x255826['globalAlpha'] = this['opacity'] * _0x3326a5;
                    _0x255826['translate'](-this['camera']['position']['x'] / _0x4f0560, -this['camera']['position']['y'] / _0x4f0560);
                    _0x255826['rotate'](-this['camera']['rotation']);
                    this['belowObjects']['forEach'](function (_0x49f9e4) {
                        _0x49f9e4['render'](_0x255826, _0x4f0560, _0x3326a5);
                    });
                    this['objects']['forEach'](function (_0x2817ae) {
                        _0x2817ae['render'](_0x255826, _0x4f0560, _0x3326a5);
                    });
                    _0x255826['rotate'](this['camera']['rotation']);
                    _0x255826['translate'](this['camera']['position']['x'] / _0x4f0560, this['camera']['position']['y'] / _0x4f0560);
                };
                _0x1d1aec['scenes']['push'](_0x5258ac);
                return _0x5258ac;
            };
            _0x1d1aec['me'] = {
                'id': -0x1,
                'score': 0x0,
                'visual': {
                    'position': new _0x1d1aec['Vector2'](0x0, 0x0)
                },
                'new': {
                    'position': new _0x1d1aec['Vector2'](0x0, 0x0)
                },
                'actualNew': {
                    'position': new _0x1d1aec['Vector2'](0x0, 0x0)
                },
                'old': {
                    'position': new _0x1d1aec['Vector2'](0x0, 0x0)
                }
            };
            _0x1d1aec['ws'] = {
                'readyState': -0x1,
                'send': function () {},
                'close': function () {}
            };
            _0x1d1aec['connecting'] = ![];
            _0x1d1aec['spectating'] = !![];
            _0x1d1aec['currentPackets'] = [];
            _0x1d1aec['createSocket'] = function (_0x4472ad) {
                if (_0x1d1aec['connecting']) return;
                _0x1d1aec['connecting'] = !![];
                console['log']('Closing old socket');
                _0x1d1aec['ws']['close']();

                function _0x20b9c2() {
                    _0x1d1aec['connecting'] = ![];
                }
                _0x1d1aec['ws'] = new _0x1d1aec['socket'](_0x4472ad, _0x1d1aec['messageEvent'], _0x20b9c2);
                _0x1d1aec['ws']['binaryType'] = 'arraybuffer';
            };
            _0x1d1aec['hasEnvs'] = ![];
            _0x1d1aec['serverDetails'] = {
                'lastFrame': Date['now'](),
                'thisFrame': Date['now'](),
                'dt': 0x1,
                'dtArray': [5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2],
                'fpsArray': [0x3c, 0x3c, 0x3c, 0x3c, 0x3c, 0x3c, 0x3c, 0x3c, 0x3c, 0x3c],
                'ticksSincePacket': 0x0
            };
            _0x1d1aec['clientDetails'] = {
                'lastFrame': Date['now'](),
                'thisFrame': Date['now'](),
                'dt': 0x1,
                'actualDt': 0x1
            };
            _0x1d1aec['toBuffer'] = function (_0x2c5faf) {
                var _0x13732c = new ArrayBuffer(_0x2c5faf['length']);
                var _0x22f4cf = new Uint8Array(_0x13732c);
                for (var _0xc1d20b = 0x0, _0x699049 = _0x2c5faf['length']; _0xc1d20b < _0x699049; _0xc1d20b++) {
                    _0x22f4cf[_0xc1d20b] = _0x2c5faf['charCodeAt'](_0xc1d20b);
                }
                return _0x13732c;
            };
            _0x1d1aec['fromBuffer'] = function (_0x5b8387) {
                try {
                    return String['fromCharCode']['apply'](null, new Uint8Array(_0x5b8387));
                } catch (_0x481ff0) {}
            };
            _0x1d1aec['selfExists'] = function () {
                if (!_0x1d1aec['hasEnvs']) {
                    _0x1d1aec['currentPackets']['push']({
                        'type': 'getEnvs'
                    });
                }
                for (var _0x25e134 = 0x0; _0x25e134 < _0x1d1aec['objects']['length']; _0x25e134++) {
                    if (_0x1d1aec['objects'][_0x25e134]['id'] == _0x1d1aec['me']['id']) {
                        return !![];
                    }
                }
                if (_0x1d1aec['ws']['readyState'] == 0x1) {
                    _0x1d1aec['currentPackets']['push']({
                        'type': 'getID'
                    });
                }
            };
            _0x1d1aec['notUpdatedIsClose'] = function (_0x5b62d1) {
                if (Math['abs'](_0x1d1aec['me']['new']['position']['x'] - _0x5b62d1['new']['position']['x']) < 0x780 / 0x2 + 0x640 && Math['abs'](_0x1d1aec['me']['new']['position']['y'] - _0x5b62d1['new']['position']['y']) < 0x438 / 0x2 + 0x640) return !![];
            };
            _0x1d1aec['visualIsClose'] = function (_0x174108) {
                if (Math['abs'](_0x1d1aec['me']['new']['position']['x'] - _0x174108['position']['x']) < 0x780 / 0x2 + 0x640 && Math['abs'](_0x1d1aec['me']['new']['position']['y'] - _0x174108['position']['y']) < 0x438 / 0x2 + 0x640) return !![];
            };
            _0x1d1aec['lerp'] = function (_0x5bb3c6, _0x52b65a) {
                if (_0x1d1aec['serverDetails']['ticksSincePacket'] > _0x1d1aec['serverDetails']['dt'] + 0x5) {
                    return (_0x52b65a - _0x5bb3c6) / _0x1d1aec['serverDetails']['dt'] * (_0x1d1aec['serverDetails']['dt'] + 0x5) + _0x5bb3c6;
                }
                return (_0x52b65a - _0x5bb3c6) / _0x1d1aec['serverDetails']['dt'] * _0x1d1aec['serverDetails']['ticksSincePacket'] + _0x5bb3c6;
            };
            _0x1d1aec['normalLerp'] = function (_0x40b6db, _0x290840, _0x409477) {
                return (_0x290840 - _0x40b6db) * _0x409477 + _0x40b6db;
            };
            _0x1d1aec['getObj'] = function (_0x5cf6c3) {
                for (var _0x18011b = 0x0; _0x18011b < _0x1d1aec['objects']['length']; _0x18011b++) {
                    if (_0x1d1aec['objects'][_0x18011b]['id'] == _0x5cf6c3) {
                        return _0x1d1aec['objects'][_0x18011b];
                    }
                }
                return null;
            };
            _0x1d1aec['askForObj'] = function (_0x1359f7) {
                _0x1d1aec['currentPackets']['push']({
                    'type': 'getObject',
                    'object': {
                        'id': _0x1359f7
                    }
                });
            };
            _0x1d1aec['onGetEnvs'] = function (_0x14cb75) {};
            _0x1d1aec['customSign'] = function (_0x1c9f25) {
                return Math['sign'](_0x1c9f25);
                return Math['sign'](Math['round'](_0x1c9f25 / 0xa));
            };
            _0x1d1aec['positions'] = [];
            _0x1d1aec['average'] = function (_0x493804) {
                var _0x4b1988 = 0x0;
                for (var _0x13185e = 0x0; _0x13185e < _0x493804['length']; _0x13185e++) {
                    _0x4b1988 += _0x493804[_0x13185e];
                }
                return _0x4b1988 / _0x493804['length'];
            };
            _0x1d1aec['packetFunctions'] = {
                'setID': function (_0x13c03c) {
                    _0x1d1aec['spectating'] = _0x13c03c['s'];
                    for (var _0x147b46 = 0x0; _0x147b46 < _0x1d1aec['objects']['length']; _0x147b46++) {
                        if (_0x1d1aec['objects'][_0x147b46]['id'] == _0x13c03c['id']) {
                            _0x1d1aec['me'] = _0x1d1aec['objects'][_0x147b46];
                        }
                    }
                },
                'x': function (_0x51e37f) {
                    var _0x5310e6 = ['i', 'b', 'x', 'y', 'a', 'n'];
                    for (var _0x4b5f20 = 0x0; _0x4b5f20 < _0x5310e6['length']; _0x4b5f20++) {
                        _0x51e37f[_0x5310e6[_0x4b5f20]] = _0x51e37f['p'][_0x4b5f20];
                    }
                    if (_0x1d1aec['getObj'](_0x51e37f['i']) != null) {
                        return null;
                    }
                    var _0x5cfac0 = {
                        'new': {
                            'position': new _0x1d1aec['Vector2'](_0x51e37f['x'], _0x51e37f['y']),
                            'rotation': _0x51e37f['a'] / 0x64
                        },
                        'actualNew': {
                            'position': new _0x1d1aec['Vector2'](_0x51e37f['x'], _0x51e37f['y']),
                            'rotation': _0x51e37f['a'] / 0x64
                        },
                        'old': {
                            'position': new _0x1d1aec['Vector2'](_0x51e37f['x'], _0x51e37f['y']),
                            'rotation': _0x51e37f['a'] / 0x64
                        },
                        'actualOld': {
                            'position': new _0x1d1aec['Vector2'](_0x51e37f['x'], _0x51e37f['y']),
                            'rotation': _0x51e37f['a'] / 0x64
                        },
                        'id': _0x51e37f['i'],
                        'ticksAsleep': 0x0,
                        'visual': new _0x1d1aec['object'](),
                        'type': _0x51e37f['b'],
                        'needsUpdate': _0x51e37f['n']
                    };
                    if (_0x1d1aec['types'][_0x51e37f['b']] === undefined) {
                        console['log'](_0x51e37f['b']);
                    }
                    _0x1d1aec['types'][_0x51e37f['b']]['create'](_0x5cfac0, _0x51e37f);
                    _0x5cfac0['visual']['position']['x'] = _0x5cfac0['new']['position']['x'];
                    _0x5cfac0['visual']['position']['y'] = _0x5cfac0['new']['position']['y'];
                    _0x5cfac0['visual']['rotation'] = _0x5cfac0['new']['rotation'];
                    _0x1d1aec['objects']['push'](_0x5cfac0);
                    return;
                },
                'y': function (_0xe16de3) {
                    if (_0x1d1aec['getObj'](_0xe16de3['a'][0x0]) == null) {
                        _0x1d1aec['askForObj'](_0xe16de3['a'][0x0]);
                        return;
                    }
                    var _0x43fddd = _0x1d1aec['getObj'](_0xe16de3['a'][0x0]);
                    if (_0x1d1aec['usedIDs']['indexOf'](_0x43fddd['id']) != -0x1) {
                        return;
                    }
                    var _0x172073 = _0x43fddd['actualNew']['position']['x'] - _0x43fddd['actualOld']['position']['x'];
                    var _0x3fc941 = _0x43fddd['actualNew']['position']['y'] - _0x43fddd['actualOld']['position']['y'];
                    var _0x484279 = 1.35;
                    var _0x466a5b = 0.7;
                    _0x484279 = 1.5;
                    _0x466a5b = _0x484279;
                    var _0x10efaa = _0x484279;
                    if (_0x1d1aec['customSign'](_0x43fddd['actualNew']['position']['x'] - _0x43fddd['actualOld']['position']['x']) == -_0x1d1aec['customSign'](_0xe16de3['a'][0x1] - _0x43fddd['actualNew']['position']['x'])) {
                        _0x10efaa = _0x466a5b;
                    }
                    var _0x5f33e6 = _0x484279;
                    if (_0x1d1aec['customSign'](_0x43fddd['actualNew']['position']['y'] - _0x43fddd['actualOld']['position']['y']) == -_0x1d1aec['customSign'](_0xe16de3['a'][0x2] - _0x43fddd['actualNew']['position']['y'])) {
                        _0x5f33e6 = _0x466a5b;
                    }
                    var _0xfce283 = 0.2;
                    var _0xfdef5c = 0.6;
                    var _0x159f78 = _0xfce283;
                    var _0x3af302 = _0xfce283;
                    var _0x64fb6a = 0xa;
                    if (Math['abs'](_0x43fddd['actualNew']['position']['x'] - _0x43fddd['actualOld']['position']['x']) < _0x64fb6a) {
                        _0x159f78 = _0x1d1aec['normalLerp'](_0xfce283, _0xfdef5c, (_0x64fb6a - Math['abs'](_0x43fddd['actualNew']['position']['x'] - _0x43fddd['actualOld']['position']['x'])) / _0x64fb6a);
                    }
                    if (Math['abs'](_0x43fddd['actualNew']['position']['y'] - _0x43fddd['actualOld']['position']['y']) < _0x64fb6a) {
                        _0x3af302 = _0x1d1aec['normalLerp'](_0xfce283, _0xfdef5c, (_0x64fb6a - Math['abs'](_0x43fddd['actualNew']['position']['y'] - _0x43fddd['actualOld']['position']['y'])) / _0x64fb6a);
                    }
                    _0x43fddd['ticksAsleep'] = 0x0;
                    _0x43fddd['old']['position'] = _0x43fddd['visual']['position']['clone']();
                    _0x43fddd['old']['rotation'] = _0x43fddd['visual']['rotation'];
                    _0x43fddd['actualOld']['position'] = _0x43fddd['actualNew']['position']['clone']();
                    _0x43fddd['actualOld']['rotation'] = _0x43fddd['actualNew']['rotation'];
                    _0x43fddd['new']['position'] = new _0x1d1aec['Vector2'](_0xe16de3['a'][0x1], _0xe16de3['a'][0x2]);
                    _0x43fddd['actualNew']['position'] = _0x43fddd['new']['position']['clone']();
                    _0x43fddd['actualNew']['rotation'] = _0x43fddd['new']['rotation'];
                    _0x43fddd['new']['position']['x'] = _0x1d1aec['normalLerp'](_0x43fddd['old']['position']['x'] + (_0x43fddd['new']['position']['x'] - _0x43fddd['actualOld']['position']['x']) * _0x10efaa, _0x43fddd['new']['position']['x'], _0x159f78);
                    _0x43fddd['new']['position']['y'] = _0x1d1aec['normalLerp'](_0x43fddd['old']['position']['y'] + (_0x43fddd['new']['position']['y'] - _0x43fddd['actualOld']['position']['y']) * _0x5f33e6, _0x43fddd['new']['position']['y'], _0x3af302);
                    if (_0x43fddd == _0x1d1aec['me']) {}
                    if (isNaN(_0x43fddd['old']['position']['x'])) {
                        _0x43fddd['old']['position']['x'] = _0x43fddd['new']['position']['x'];
                        _0x43fddd['actualOld']['position']['x'] = _0x43fddd['new']['position']['x'];
                        console['log']('NaN X Value');
                    }
                    if (isNaN(_0x43fddd['old']['position']['y'])) {
                        _0x43fddd['old']['position']['y'] = _0x43fddd['new']['position']['y'];
                        _0x43fddd['actualOld']['position']['y'] = _0x43fddd['new']['position']['y'];
                        console['log']('NaN Y Value');
                    }
                    if (Math['abs'](_0x43fddd['visual']['position']['x'] - _0x43fddd['new']['position']['x']) < 0.3) {
                        _0x43fddd['old']['position']['x'] = _0x43fddd['new']['position']['x'];
                    }
                    if (Math['abs'](_0x43fddd['visual']['position']['y'] - _0x43fddd['new']['position']['y']) < 0.3) {
                        _0x43fddd['old']['position']['y'] = _0x43fddd['new']['position']['y'];
                    }
                    _0x43fddd['new']['rotation'] = _0xe16de3['a'][0x3] / 0x64;
                    if (Math['abs'](_0x43fddd['old']['rotation'] - _0x43fddd['new']['rotation']) > Math['PI']) {
                        if (_0x43fddd['old']['rotation'] > _0x43fddd['new']['rotation']) _0x43fddd['old']['rotation'] -= Math['PI'] * 0x2;
                        else _0x43fddd['old']['rotation'] += Math['PI'] * 0x2;
                    }
                    _0x1d1aec['usedIDs']['push'](_0x43fddd['id']);
                    _0x1d1aec['types'][_0x43fddd['type']]['updatePacket'](_0x43fddd, _0xe16de3);
                },
                'z': function (_0x1526fe) {
                    for (var _0x2944af = 0x0; _0x2944af < _0x1d1aec['objects']['length']; _0x2944af++) {
                        if (_0x1d1aec['objects'][_0x2944af]['id'] == _0x1526fe['i']) {
                            if (_0x1d1aec['types'][_0x1d1aec['objects'][_0x2944af]['type']]['remove'](_0x1d1aec['objects'][_0x2944af], _0x1526fe)) return;
                            if (_0x1d1aec['objects'][_0x2944af]['visual']['parent'] != null) _0x1d1aec['objects'][_0x2944af]['visual']['parent']['remove'](_0x1d1aec['objects'][_0x2944af]['visual']);
                            _0x1d1aec['objects']['splice'](_0x2944af, 0x1);
                            break;
                        }
                    }
                },
                'e': function (_0x3112a3) {
                    if (!_0x1d1aec['hasEnvs']) {
                        _0x1d1aec['hasEnvs'] = !![];
                        _0x1d1aec['envs'] = _0x3112a3['envs'];
                        _0x1d1aec['onGetEnvs'](_0x1d1aec['envs']);
                    }
                }
            };
            _0x1d1aec['addPacketType'] = function (_0x1de8d0, _0x115744) {
                _0x1d1aec['packetFunctions'][_0x1de8d0] = _0x115744;
            };
            _0x1d1aec['types'] = [];
            _0x1d1aec['objects'] = [];
            _0x1d1aec['usedIDs'] = [];
            _0x1d1aec['lerpSpeed'] = 0x1;
            var _0x5680ff = 0x3c;
            _0x1d1aec['messageQueue'] = [];
            _0x1d1aec['messageEvent'] = function (_0x52d637) {
                _0x1d1aec['messageQueue']['push'](_0x52d637);
            };
            _0x1d1aec['flushMessageQueue'] = function () {
                while (_0x1d1aec['messageQueue']['length'] > 0x0) {
                    _0x1d1aec['actualMessageEvent'](_0x1d1aec['messageQueue']['splice'](0x0, 0x1)[0x0]);
                }
            };
            _0x1d1aec['actualMessageEvent'] = function (_0x1b1c6b) {
                _0x1d1aec['serverDetails']['thisFrame'] = Date['now']();
                _0x1d1aec['lerpSpeed'] = 0x3 / _0x1d1aec['serverDetails']['ticksSincePacket'];
                if (isNaN(_0x1d1aec['lerpSpeed'])) {
                    _0x1d1aec['lerpSpeed'] = 0x1;
                }
                _0x1d1aec['lerpSpeed'] = Math['min'](Math['max'](_0x1d1aec['lerpSpeed'], 0.1), 0x2);
                _0x1d1aec['serverDetails']['dt'] = 5.3;
                _0x1d1aec['serverDetails']['lastFrame'] = _0x1d1aec['serverDetails']['thisFrame'];
                if (msgpack !== undefined) {
                    var _0x36c181 = msgpack['decode'](new Uint8Array(_0x1b1c6b['data']));
                    for (var _0x582832 = 0x0; _0x582832 < _0x36c181['length']; _0x582832++) {
                        var _0x1b5932 = _0x36c181[_0x582832];
                        if (_0x1d1aec['packetFunctions'][_0x1b5932['t']] !== undefined) _0x1d1aec['packetFunctions'][_0x1b5932['t']](_0x1b5932);
                        else {
                            console['log']('Encountered issue: unknown packet type');
                            console['log'](_0x36c181);
                            _0x1b5932 = msgpack['decode'](_0x1b5932);
                            if (_0x1d1aec['packetFunctions'][_0x1b5932['t']] !== undefined) {
                                try {
                                    _0x1d1aec['packetFunctions'][_0x1b5932['t']](_0x1b5932);
                                } catch (_0x34f768) {
                                    console['log']('Packet function error');
                                    console['log'](_0x34f768);
                                }
                            }
                        }
                    }
                }
                for (var _0x582832 = 0x0; _0x582832 < _0x1d1aec['objects']['length']; _0x582832++) {
                    _0x1d1aec['objects'][_0x582832]['ticksAsleep']++;
                    if (_0x1d1aec['objects'][_0x582832]['ticksAsleep'] > 0x1) {
                        _0x1d1aec['objects'][_0x582832]['new']['position']['x'] = _0x1d1aec['normalLerp'](_0x1d1aec['objects'][_0x582832]['new']['position']['x'], _0x1d1aec['objects'][_0x582832]['actualNew']['position']['x'], 0.2);
                        _0x1d1aec['objects'][_0x582832]['new']['position']['y'] = _0x1d1aec['normalLerp'](_0x1d1aec['objects'][_0x582832]['new']['position']['y'], _0x1d1aec['objects'][_0x582832]['actualNew']['position']['y'], 0.2);
                    }
                    if (_0x1d1aec['usedIDs']['indexOf'](_0x1d1aec['objects'][_0x582832]['id']) == -0x1) {
                        _0x1d1aec['objects'][_0x582832]['old']['position']['x'] = _0x1d1aec['objects'][_0x582832]['visual']['position']['x'];
                        _0x1d1aec['objects'][_0x582832]['old']['position']['y'] = _0x1d1aec['objects'][_0x582832]['visual']['position']['y'];
                        _0x1d1aec['objects'][_0x582832]['old']['rotation'] = _0x1d1aec['objects'][_0x582832]['visual']['rotation'];
                    }
                    if ((_0x1d1aec['objects'][_0x582832]['needsUpdate'] && (_0x1d1aec['objects'][_0x582832]['ticksAsleep'] > 0xc9 && (_0x1d1aec['objects'][_0x582832]['old']['position']['x'] == _0x1d1aec['objects'][_0x582832]['new']['position']['x'] && _0x1d1aec['objects'][_0x582832]['old']['position']['y'] == _0x1d1aec['objects'][_0x582832]['new']['position']['y'] && _0x1d1aec['objects'][_0x582832]['old']['rotation'] == _0x1d1aec['objects'][_0x582832]['new']['rotation'])) || !_0x1d1aec['objects'][_0x582832]['needsUpdate'] && _0x1d1aec['objects'][_0x582832]['ticksAsleep'] >= 0x78 && !_0x1d1aec['notUpdatedIsClose'](_0x1d1aec['objects'][_0x582832])) && _0x1d1aec['usedIDs']['indexOf'](_0x1d1aec['objects'][_0x582832]['id']) == -0x1) {
                        if (_0x1d1aec['types'][_0x1d1aec['objects'][_0x582832]['type']]['remove'](_0x1d1aec['objects'][_0x582832], {})) continue;
                        if (_0x1d1aec['objects'][_0x582832]['visual']['parent'] != null) _0x1d1aec['objects'][_0x582832]['visual']['parent']['remove'](_0x1d1aec['objects'][_0x582832]['visual']);
                        _0x1d1aec['objects']['splice'](_0x582832, 0x1);
                    }
                }
                _0x1d1aec['usedIDs'] = [];
                _0x1d1aec['selfExists']();
                _0x1d1aec['serverDetails']['ticksSincePacket'] = 0x0;
            };
            _0x1d1aec['update'] = function () {
                _0x1d1aec['now'] = Date['now']();
                var _0x483a5f = Math['max'](_0xf35062['getFPS'](), 0x1e);
                _0x1d1aec['serverDetails']['fpsArray']['push'](_0x483a5f);
                _0x1d1aec['serverDetails']['fpsArray']['splice'](0x0, 0x1);
                _0x5680ff = 0x0;
                for (var _0x218fa1 = 0x0; _0x218fa1 < _0x1d1aec['serverDetails']['fpsArray']['length']; _0x218fa1++) {
                    _0x5680ff += _0x1d1aec['serverDetails']['fpsArray'][_0x218fa1];
                }
                _0x5680ff /= _0x1d1aec['serverDetails']['fpsArray']['length'];
                _0x1d1aec['serverDetails']['ticksSincePacket'] += 0x1 / (_0x5680ff / 0x3c);
                if (_0x1d1aec['now'] - _0x1d1aec['lastPixelCheck'] >= 0x9c4 && window['innerWidth'] < 0x3e8) {
                    if (_0x5680ff < 0x37) {
                        _0x1d1aec['pixelResize'] -= 0.1;
                    } else if (_0x5680ff >= 0x3b) {
                        _0x1d1aec['pixelResize'] += 0.05;
                    }
                    _0x1d1aec['pixelResize'] = Math['max'](Math['min'](_0x1d1aec['pixelResize'], 0x1), 0x0);
                    _0x1d1aec['lastPixelCheck'] = _0x1d1aec['now'];
                }
                _0x1d1aec['flushTextRenderQueue']();
                for (var _0x218fa1 = 0x0; _0x218fa1 < _0x1d1aec['objects']['length']; _0x218fa1++) {
                    var _0x12e6b6 = _0x1d1aec['objects'][_0x218fa1];
                    _0x12e6b6['visual']['rotation'] = _0x1d1aec['lerp'](_0x12e6b6['old']['rotation'], _0x12e6b6['new']['rotation']);
                    _0x12e6b6['visual']['position']['x'] = _0x1d1aec['normalLerp'](_0x12e6b6['visual']['position']['x'], _0x1d1aec['lerp'](_0x12e6b6['old']['position']['x'], _0x12e6b6['new']['position']['x']), 0.8);
                    _0x12e6b6['visual']['position']['y'] = _0x1d1aec['normalLerp'](_0x12e6b6['visual']['position']['y'], _0x1d1aec['lerp'](_0x12e6b6['old']['position']['y'], _0x12e6b6['new']['position']['y']), 0.8);
                    _0x1d1aec['types'][_0x12e6b6['type']]['tickUpdate'](_0x12e6b6);
                }
                _0x1d1aec['clientDetails']['thisFrame'] = _0x1d1aec['now'];
                _0x1d1aec['clientDetails']['dt'] = Math['min'](0x3c / _0x483a5f, 0x2);
                _0x1d1aec['clientDetails']['actualDt'] = Math['min'](0x3e8 / _0x483a5f, 0x22);
                _0x1d1aec['clientDetails']['lastFrame'] = _0x1d1aec['clientDetails']['thisFrame'];
                _0x1d1aec['particles']['forEach'](function (_0x582a7e) {
                    _0x582a7e['update'](_0x1d1aec['clientDetails']['dt'] * 1.2);
                });
                if (_0x1d1aec['ws']['readyState'] == 0x1 && _0x1d1aec['currentPackets']['length'] > 0x0) {
                    for (var _0x218fa1 = 0x0; _0x218fa1 < _0x1d1aec['currentPackets']['length']; _0x218fa1++) {
                        if (_0x1d1aec['currentPackets'][_0x218fa1]['type'] !== undefined) {
                            _0x1d1aec['currentPackets'][_0x218fa1]['t'] = _0x1d1aec['currentPackets'][_0x218fa1]['type'];
                            delete _0x1d1aec['currentPackets'][_0x218fa1]['type'];
                        }
                    }
                    _0x1d1aec['ws']['send'](msgpack['encode'](_0x1d1aec['currentPackets']));
                    if (window['logPackets']) {
                        console['log'](_0x1d1aec['currentPackets']);
                    }
                    _0x1d1aec['currentPackets'] = [];
                }
            };
            _0x1d1aec['addType'] = function (_0x1be9d1, _0x6a2a46, _0x1c03d5, _0x2a58d0, _0x5cd0d3) {
                _0x1d1aec['types'][_0x1be9d1] = {
                    'create': _0x6a2a46,
                    'tickUpdate': _0x1c03d5 || function (_0xfbd5a2) {},
                    'updatePacket': _0x2a58d0 || function (_0x38eccd, _0x1bdab3) {},
                    'remove': _0x5cd0d3 || function (_0x4dd0ca) {}
                };
            };
            _0x1d1aec['addType']('spectator', function (_0x2f1afe, _0x5f551f) {
                _0x2f1afe['visual'] = new _0x1d1aec['object']();
            }, function () {}, function () {});
            return _0x1d1aec;
        };
        _0x56b778['exports']['requestFrame'] = function (_0x41c1d7) {
            (window['requestAnimationFrame'] || window['webkitRequestAnimationFrame'] || window['mozRequestAnimationFrame'] || window['oRequestAnimationFrame'] || window['msRequestAnimationFrame'] || function (_0x5f23dd) {
                setTimeout(_0x5f23dd, 0x3e8 / 0x3c);
            })(_0x41c1d7);
        };

        function _0x51f498(_0x21df0e) {
            let _0x1074df = getComputedStyle(document['documentElement'])['getPropertyValue']('--' + _0x21df0e);
            _0x1074df = parseInt(_0x1074df);
            if (isFinite(_0x1074df)) {
                return _0x1074df;
            } else {
                return 0x0;
            }
        }
    },
    2: function (_0x352c65, _0x10fb20, _0x5d1635) {
        var _0x37e27c = _0x5d1635(0x3);
        var _0x4e56de = _0x5d1635(0xb);

        function _0x538193(_0x418638, _0xe15df7, _0x78ca2f, _0x140917, _0x1ace35) {
            if (location['hostname'] == 'localhost') {
                window['location']['hostname'] = '127.0.0.1';
            }
            this['debugLog'] = ![];
            this['baseUrl'] = _0x418638;
            this['lobbySize'] = _0x78ca2f;
            this['devPort'] = _0xe15df7;
            this['lobbySpread'] = _0x140917;
            this['rawIPs'] = !!_0x1ace35;
            this['region'] = 0x0;
            this['callback'] = undefined;
            this['servers'] = this['processServers']();
        }
        _0x538193['prototype']['regionInfo'] = {
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
        _0x538193['prototype']['start'] = function (_0x318987) {
            this['callback'] = _0x318987;
            var _0x185769 = this['parseServerQuery']();
            if (_0x185769) {
                this['log']('Found server in query.');
                this['connect'](_0x185769);
            } else {
                this['log']('Pinging servers...');
                this['pingServers']();
            }
        };
        _0x538193['prototype']['parseServerQuery'] = function () {
            var _0x1e2a65 = _0x37e27c['parse'](location['href'], !![]);
            var _0x55a070 = 0x0;
            if (_0x1e2a65['query']['region'] !== undefined) {
                _0x55a070 = _0x1e2a65['query']['region'];
            }
            this['region'] = _0x55a070;
            if (typeof _0x55a070 != 'string') {
                return;
            }
            var _0x3d5c92 = this['servers'][_0x55a070];
            if (!Array['isArray'](_0x3d5c92)) {
                console['warn']('No server list for region', _0x55a070);
                return;
            }
            return;
        };
        _0x538193['prototype']['pingServers'] = function () {
            var _0x461743 = this;
            var _0x347b47 = [];
            for (var _0x53a409 in this['servers']) {
                var _0x31772f = this['servers'][_0x53a409];
                var _0x3f8cc0 = _0x31772f[Math['floor'](Math['random']() * _0x31772f['length'])];
                (function (_0x137eed, _0x7b5b17) {
                    var _0x4c4f20 = new XMLHttpRequest();
                    _0x4c4f20['onreadystatechange'] = function (_0x279541) {
                        var _0x41e576 = _0x279541['target'];
                        if (_0x41e576['readyState'] != 0x4) return;
                        if (_0x41e576['status'] == 0xc8) {
                            for (var _0x5554b1 = 0x0; _0x5554b1 < _0x347b47['length']; _0x5554b1++) {
                                _0x347b47[_0x5554b1]['abort']();
                            }
                            _0x461743['log']('Connecting to region', _0x7b5b17['region']);
                            _0x461743['seekServer'](_0x7b5b17['region']);
                            if (onRegionGet !== undefined) {
                                onRegionGet(_0x7b5b17['region']);
                            }
                        } else {}
                    };
                    var _0x14549a = 'https://' + _0x461743['serverAddress'](_0x7b5b17['ip'], !![]) + ':' + _0x461743['serverPort'](_0x7b5b17) + '/ping';
                    _0x4c4f20['open']('GET', _0x14549a, !![]);
                    _0x4c4f20['send'](null);
                    _0x461743['log']('Pinging', _0x14549a);
                    _0x347b47['push'](_0x4c4f20);
                }(_0x31772f, _0x3f8cc0));
            }
        };
        _0x538193['prototype']['seekServer'] = function (_0x59db31, _0x13f6b5, _0x205417) {
            if (_0x13f6b5 == undefined) {
                _0x13f6b5 = 'random';
            }
            if (_0x205417 == undefined) {
                _0x205417 = ![];
            }
            const _0xf2a950 = ['random'];
            var _0xf15e2d = this['lobbySize'];
            var _0x7c3a08 = this['lobbySpread'];
            var _0x4dece3 = this['servers'][_0x59db31]['filter'](function (_0x91956a) {
                if (_0x13f6b5 == 'random') {
                    return !![];
                } else {
                    return _0xf2a950[_0x91956a['index'] % _0xf2a950['length']]['key'] == _0x13f6b5;
                }
            })['sort'](function (_0x450ef8, _0x317665) {
                return _0x317665['playerCount'] - _0x450ef8['playerCount'];
            });
            if (_0x4dece3['filter'](function (_0xcaf3e1) {
                    return _0xcaf3e1['playerCount'] < _0xf15e2d;
                })['length'] > 0x0) {
                _0x4dece3 = _0x4dece3['filter'](function (_0x2602ba) {
                    return _0x2602ba['playerCount'] < _0xf15e2d;
                });
            }
            var _0x2f530f = Math['min'](_0x7c3a08, _0x4dece3['length']);
            var _0x338d22 = Math['floor'](Math['random']() * _0x2f530f);
            _0x338d22 = Math['min'](_0x338d22, _0x4dece3['length'] - 0x1);
            var _0x1bc598 = _0x4dece3[_0x338d22];
            this['log']('Found server.');
            if (_0x205417) {
                this['log']('Redirecting...');
                this['switchServer'](_0x1bc598['region'] + ':' + _0x1bc598['index']);
            } else {
                this['log']('Connecting...');
                this['connect'](_0x1bc598);
            }
        };
        _0x538193['prototype']['connect'] = function (_0x3705c8) {
            if (this['connected']) {
                return;
            }
            this['log']('Connecting to server:', _0x3705c8);
            this['region'] = _0x3705c8['region'];
            this['server'] = _0x3705c8;
            this['log']('Calling callback with address', this['serverAddress'](_0x3705c8['ip']), 'on port', this['serverPort'](_0x3705c8));
            this['callback'](this['serverAddress'](_0x3705c8['ip']), this['serverPort'](_0x3705c8));
        };
        _0x538193['prototype']['switchServer'] = function (_0x32c321) {
            this['switchingServers'] = !![];
            window['location']['href'] = '/?server=' + _0x32c321;
        };
        _0x538193['prototype']['serverAddress'] = function (_0x1b66e7, _0x3693a5) {
            if (_0x1b66e7 == '127.0.0.1' || _0x1b66e7 == '7f000001' || _0x1b66e7 == '903d62ef5d1c2fecdcaeb5e7dd485eff') {
                return window['location']['hostname'];
            } else if (this['rawIPs']) {
                if (_0x3693a5) {
                    return 'ip_' + this['hashIP'](_0x1b66e7) + '.' + this['baseUrl'];
                } else {
                    return _0x1b66e7;
                }
            } else {
                return 'ip_' + _0x1b66e7 + '.' + this['baseUrl'];
            }
        };
        _0x538193['prototype']['serverPort'] = function (_0x548189) {
            if (_0x548189['region'] == 0x0) {
                return this['devPort'];
            }
            return location['protocol']['startsWith']('https') ? 0x1bb : 0x50;
        };
        _0x538193['prototype']['processServers'] = function () {
            var _0x516e3b = {};
            var _0x588489 = vultr['servers'];
            for (var _0x1757c = 0x0; _0x1757c < _0x588489['length']; _0x1757c++) {
                var _0x51dc52 = _0x588489[_0x1757c];
                var _0xe72239 = _0x516e3b[_0x51dc52['region']];
                if (_0xe72239 == undefined) {
                    _0xe72239 = [];
                    _0x516e3b[_0x51dc52['region']] = _0xe72239;
                }
                _0xe72239['push'](_0x51dc52);
            }
            for (var _0x209abc in _0x516e3b) {
                _0x516e3b[_0x209abc] = _0x516e3b[_0x209abc]['sort'](function (_0x2faa46, _0x4a486d) {
                    return _0x2faa46['index'] - _0x4a486d['index'];
                });
            }
            return _0x516e3b;
        };
        _0x538193['prototype']['ipToHex'] = function (_0x565b25) {
            const _0x50ee28 = _0x565b25['split']('.')['map'](function (_0x7213d1) {
                ('00' + parseInt(_0x7213d1)['toString'](0x10))['substr'](-0x2);
            })['join']('')['toLowerCase']();
            return _0x50ee28;
        };
        _0x538193['prototype']['hashIP'] = function (_0x45108) {
            return _0x4e56de(this['ipToHex'](_0x45108));
        };
        _0x538193['prototype']['log'] = function () {
            if (this['debugLog']) {
                return;
            } else if (console['verbose']) {
                return;
            }
        };
        _0x352c65['exports'] = _0x538193;
    }
}, [0x1]);