(function () {
    'use strict';

    var icon_birds = '" style="background-image: url(\'data:image/png;base64,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\');';

    tinymce.PluginManager.add('birds_tc_button', function (editor, url) {
        editor.addButton('birds_tc_button', {
            title: 'Birds Shortcodes',
            type: 'menubutton',
            icon: icon_birds,
            menu: [

                // Layout
                {
                    text: editor.getLang('birds_tc_button.layout'),
                    value: '',
                    icon: 'icon icon-doc-text',
                    menu: [
                        // Row
                        {
                            text: editor.getLang('birds_tc_button.row'),
                            icon: 'icon icon-row',
                            value: '[row][/row]',
                            onclick: function () {
                                editor.insertContent(this.value());
                            }
                        },
                        // Columns
                        {
                            text: editor.getLang('birds_tc_button.columns'),
                            value: '',
                            icon: 'icon icon-columns',
                            menu: [{
                                text: editor.getLang('birds_tc_button.2columns'),
                                onclick: function () {
                                    editor.windowManager.open({
                                        title: editor.getLang('birds_tc_button.2columns'),
                                        body: [{
                                            type: 'textbox',
                                            name: 'col1',
                                            label: editor.getLang('birds_tc_button.column1'),
                                            multiline: true,
                                            minWidth: 300,
                                            minHeight: 50
                                        }, {
                                            type: 'textbox',
                                            name: 'col2',
                                            label: editor.getLang('birds_tc_button.column2'),
                                            multiline: true,
                                            minWidth: 300,
                                            minHeight: 50
                                        }],
                                        onsubmit: function (e) {
                                            editor.insertContent('[row][col_2]' + e.data.col1 + '[/col_2][col_2]' + e.data.col2 + '[/col_2][/row]');
                                        }
                                    });
                                }
                            }, {
                                text: editor.getLang('birds_tc_button.3columns'),
                                onclick: function () {
                                    editor.windowManager.open({
                                        title: editor.getLang('birds_tc_button.3columns'),
                                        body: [{
                                            type: 'textbox',
                                            name: 'col1',
                                            label: editor.getLang('birds_tc_button.column1'),
                                            multiline: true,
                                            minWidth: 300,
                                            minHeight: 50
                                        }, {
                                            type: 'textbox',
                                            name: 'col2',
                                            label: editor.getLang('birds_tc_button.column2'),
                                            multiline: true,
                                            minWidth: 300,
                                            minHeight: 50
                                        }, {
                                            type: 'textbox',
                                            name: 'col3',
                                            label: editor.getLang('birds_tc_button.column3'),
                                            multiline: true,
                                            minWidth: 300,
                                            minHeight: 50
                                        }],
                                        onsubmit: function (e) {
                                            editor.insertContent('[row][col_3]' + e.data.col1 + '[/col_3][col_3]' + e.data.col2 + '[/col_3][col_3]' + e.data.col3 + '[/col_3][/row]');
                                        }
                                    });
                                }
                            }, {
                                text: editor.getLang('birds_tc_button.4columns'),
                                onclick: function () {
                                    editor.windowManager.open({
                                        title: editor.getLang('birds_tc_button.4columns'),
                                        body: [{
                                            type: 'textbox',
                                            name: 'col1',
                                            label: editor.getLang('birds_tc_button.column1'),
                                            multiline: true,
                                            minWidth: 300,
                                            minHeight: 50
                                        }, {
                                            type: 'textbox',
                                            name: 'col2',
                                            label: editor.getLang('birds_tc_button.column2'),
                                            multiline: true,
                                            minWidth: 300,
                                            minHeight: 50
                                        }, {
                                            type: 'textbox',
                                            name: 'col3',
                                            label: editor.getLang('birds_tc_button.column3'),
                                            multiline: true,
                                            minWidth: 300,
                                            minHeight: 50
                                        }, {
                                            type: 'textbox',
                                            name: 'col4',
                                            label: editor.getLang('birds_tc_button.column4'),
                                            multiline: true,
                                            minWidth: 300,
                                            minHeight: 50
                                        }],
                                        onsubmit: function (e) {
                                            editor.insertContent('[row][col_4]' + e.data.col1 + '[/col_4][col_4]' + e.data.col2 + '[/col_4][col_4]' + e.data.col3 + '[/col_4][col_4]' + e.data.col4 + '[/col_4][/row]');
                                        }
                                    });
                                }
                            }]
                        }
                    ]
                },
                // Elements
                {
                    text: editor.getLang('birds_tc_button.elements'),
                    value: '',
                    icon: 'icon icon-doc',
                    menu: [
                        // Button
                        {
                            text: editor.getLang('birds_tc_button.button'),
                            icon: 'icon icon-button',
                            onclick: function () {
                                editor.windowManager.open({
                                    title: editor.getLang('birds_tc_button.button_options'),
                                    body: [{
                                        type: 'textbox',
                                        name: 'text',
                                        label: editor.getLang('birds_tc_button.text')
                                    }, {
                                        type: 'textbox',
                                        name: 'link',
                                        label: editor.getLang('birds_tc_button.link')
                                    }, {
                                        type: 'listbox',
                                        name: 'style',
                                        label: editor.getLang('birds_tc_button.style'),
                                        'values': [{
                                            text: editor.getLang('birds_tc_button.primary'),
                                            value: ''
                                        }, {
                                            text: editor.getLang('birds_tc_button.secondary'),
                                            value: 'secondary'
                                        }, {
                                            text: editor.getLang('birds_tc_button.success'),
                                            value: 'success'
                                        }, {
                                            text: editor.getLang('birds_tc_button.alert'),
                                            value: 'alert'
                                        }]
                                    }, {
                                        type: 'listbox',
                                        name: 'size',
                                        label: editor.getLang('birds_tc_button.size'),
                                        'values': [{
                                            text: editor.getLang('birds_tc_button.tiny'),
                                            value: 'tiny'
                                        }, {
                                            text: editor.getLang('birds_tc_button.small'),
                                            value: 'small'
                                        }, {
                                            text: editor.getLang('birds_tc_button.large'),
                                            value: 'large'
                                        }, {
                                            text: editor.getLang('birds_tc_button.expand'),
                                            value: 'expand'
                                        }]
                                    }, {
                                        type: 'listbox',
                                        name: 'type',
                                        label: editor.getLang('birds_tc_button.type'),
                                        'values': [{
                                            text: editor.getLang('birds_tc_button.radius'),
                                            value: 'radius'
                                        }, {
                                            text: editor.getLang('birds_tc_button.round'),
                                            value: 'round'
                                        }]
                                    }],
                                    onsubmit: function (e) {
                                        editor.insertContent('[button style="' + e.data.style + '" size="' + e.data.size + '" type="' + e.data.type + '" link="' + e.data.link + '"]' + e.data.text + '[/button]');
                                    }
                                });
                            }
                        },
                        // Label
                        {
                            text: editor.getLang('birds_tc_button.label'),
                            icon: 'icon icon-tag',
                            onclick: function () {
                                editor.windowManager.open({
                                    title: editor.getLang('birds_tc_button.label_options'),
                                    body: [{
                                        type: 'textbox',
                                        name: 'text',
                                        label: editor.getLang('birds_tc_button.text')
                                    }, {
                                        type: 'listbox',
                                        name: 'style',
                                        label: editor.getLang('birds_tc_button.style'),
                                        'values': [{
                                            text: editor.getLang('birds_tc_button.primary'),
                                            value: ''
                                        }, {
                                            text: editor.getLang('birds_tc_button.secondary'),
                                            value: 'secondary'
                                        }, {
                                            text: editor.getLang('birds_tc_button.success'),
                                            value: 'success'
                                        }, {
                                            text: editor.getLang('birds_tc_button.alert'),
                                            value: 'alert'
                                        }]
                                    }, {
                                        type: 'listbox',
                                        name: 'type',
                                        label: editor.getLang('birds_tc_button.type'),
                                        'values': [{
                                            text: editor.getLang('birds_tc_button.regular'),
                                            value: ''
                                        }, {
                                            text: editor.getLang('birds_tc_button.radius'),
                                            value: 'radius'
                                        }, {
                                            text: editor.getLang('birds_tc_button.round'),
                                            value: 'round'
                                        }]
                                    }],
                                    onsubmit: function (e) {
                                        editor.insertContent('[label style="' + e.data.style + '" type="' + e.data.type + '"]' + e.data.text + '[/label]');
                                    }
                                });
                            }
                        },
                        // Tooltip
                        {
                            text: editor.getLang('birds_tc_button.tooltip'),
                            icon: 'icon icon-comment',
                            onclick: function () {
                                editor.windowManager.open({
                                    title: editor.getLang('birds_tc_button.tooltip_options'),
                                    body: [{
                                        type: 'textbox',
                                        name: 'text',
                                        label: editor.getLang('birds_tc_button.text')
                                    }, {
                                        type: 'textbox',
                                        name: 'tip',
                                        label: editor.getLang('birds_tc_button.tip')
                                    }, {
                                        type: 'listbox',
                                        name: 'position',
                                        label: editor.getLang('birds_tc_button.position'),
                                        'values': [{
                                            text: editor.getLang('birds_tc_button.top'),
                                            value: 'tip-top'
                                        }, {
                                            text: editor.getLang('birds_tc_button.bottom'),
                                            value: 'tip-bottom'
                                        }, {
                                            text: editor.getLang('birds_tc_button.left'),
                                            value: 'tip-left'
                                        }, {
                                            text: editor.getLang('birds_tc_button.right'),
                                            value: 'tip-right'
                                        }]
                                    }, {
                                        type: 'listbox',
                                        name: 'type',
                                        label: editor.getLang('birds_tc_button.type'),
                                        'values': [{
                                            text: editor.getLang('birds_tc_button.regular'),
                                            value: ''
                                        }, {
                                            text: editor.getLang('birds_tc_button.radius'),
                                            value: 'radius'
                                        }, {
                                            text: editor.getLang('birds_tc_button.round'),
                                            value: 'round'
                                        }]
                                    }],
                                    onsubmit: function (e) {
                                        editor.insertContent('[tooltip tip="' + e.data.tip + '" position="' + e.data.position + '" type="' + e.data.type + '"]' + e.data.text + '[/tooltip]');
                                    }
                                });
                            }
                        },
                        // Blockquote
                        {
                            text: editor.getLang('birds_tc_button.blockquote'),
                            icon: 'icon icon-quote',
                            onclick: function () {
                                editor.windowManager.open({
                                    title: editor.getLang('birds_tc_button.add_a_blockquote'),
                                    body: [{
                                        type: 'textbox',
                                        name: 'text',
                                        label: editor.getLang('birds_tc_button.blockquote'),
                                        'multiline': 'true',
                                        'minWidth': 300,
                                        'minHeight': 100

                                    }, {
                                        type: 'textbox',
                                        name: 'cite',
                                        label: editor.getLang('birds_tc_button.author'),
                                        'multiline': 'true',
                                        'minWidth': 300,
                                        'minHeight': 50
                                    }],
                                    onsubmit: function (e) {
                                        editor.insertContent('[blockquote cite="' + e.data.cite + '"]' + e.data.text + '[/blockquote]');
                                    }
                                });
                            }
                        },
                        // Panel
                        {
                            text: editor.getLang('birds_tc_button.panel'),
                            icon: 'icon icon-doc-landscape',
                            onclick: function () {
                                editor.windowManager.open({
                                    title: editor.getLang('birds_tc_button.panel_options'),
                                    body: [{
                                        type: 'textbox',
                                        name: 'text',
                                        label: editor.getLang('birds_tc_button.text')
                                    }, {
                                        type: 'listbox',
                                        name: 'style',
                                        label: 'Style',
                                        'values': [{
                                            text: editor.getLang('birds_tc_button.regular'),
                                            value: ''
                                        }, {
                                            text: editor.getLang('birds_tc_button.radius'),
                                            value: 'radius'
                                        }]
                                    }, {
                                        type: 'listbox',
                                        name: 'type',
                                        label: editor.getLang('birds_tc_button.type'),
                                        'values': [{
                                            text: editor.getLang('birds_tc_button.regular'),
                                            value: ''
                                        }, {
                                            text: editor.getLang('birds_tc_button.callout'),
                                            value: 'callout'
                                        }]
                                    }],
                                    onsubmit: function (e) {
                                        editor.insertContent('[panel style="' + e.data.style + '" type="' + e.data.type + '"]' + e.data.text + '[/panel]');
                                    }
                                });
                            }
                        },
                        // Alert
                        {
                            text: editor.getLang('birds_tc_button.alert'),
                            icon: 'icon icon-bell',
                            onclick: function () {
                                editor.windowManager.open({
                                    title: editor.getLang('birds_tc_button.alert_options'),
                                    body: [{
                                        type: 'textbox',
                                        name: 'text',
                                        label: editor.getLang('birds_tc_button.text')
                                    }, {
                                        type: 'listbox',
                                        name: 'style',
                                        label: editor.getLang('birds_tc_button.style'),
                                        'values': [{
                                            text: editor.getLang('birds_tc_button.primary'),
                                            value: ''
                                        }, {
                                            text: editor.getLang('birds_tc_button.secondary'),
                                            value: 'secondary'
                                        }, {
                                            text: editor.getLang('birds_tc_button.success'),
                                            value: 'success'
                                        }, {
                                            text: editor.getLang('birds_tc_button.alert'),
                                            value: 'alert'
                                        }]
                                    }, {
                                        type: 'listbox',
                                        name: 'type',
                                        label: editor.getLang('birds_tc_button.type'),
                                        'values': [{
                                            text: editor.getLang('birds_tc_button.regular'),
                                            value: ''
                                        }, {
                                            text: editor.getLang('birds_tc_button.radius'),
                                            value: 'radius'
                                        }, {
                                            text: editor.getLang('birds_tc_button.round'),
                                            value: 'round'
                                        }]
                                    }],
                                    onsubmit: function (e) {
                                        editor.insertContent('[alert style="' + e.data.style + '" type="' + e.data.type + '"]' + e.data.text + '[/alert]');
                                    }
                                });
                            }
                        },
                        // Progress Bar
                        {
                            text: editor.getLang('birds_tc_button.progress_bar'),
                            icon: 'icon icon-chart-bar',
                            onclick: function () {
                                editor.windowManager.open({
                                    title: editor.getLang('birds_tc_button.progress_bar_options'),
                                    body: [{
                                        type: 'textbox',
                                        name: 'span',
                                        label: editor.getLang('birds_tc_button.span'),
                                        value: '12'
                                    }, {
                                        type: 'listbox',
                                        name: 'style',
                                        label: editor.getLang('birds_tc_button.style'),
                                        'values': [{
                                            text: editor.getLang('birds_tc_button.primary'),
                                            value: ''
                                        }, {
                                            text: editor.getLang('birds_tc_button.secondary'),
                                            value: 'secondary'
                                        }, {
                                            text: editor.getLang('birds_tc_button.success'),
                                            value: 'success'
                                        }, {
                                            text: editor.getLang('birds_tc_button.alert'),
                                            value: 'alert'
                                        }]
                                    }, {
                                        type: 'listbox',
                                        name: 'type',
                                        label: editor.getLang('birds_tc_button.type'),
                                        'values': [{
                                            text: editor.getLang('birds_tc_button.regular'),
                                            value: ''
                                        }, {
                                            text: editor.getLang('birds_tc_button.radius'),
                                            value: 'radius'
                                        }, {
                                            text: editor.getLang('birds_tc_button.round'),
                                            value: 'round'
                                        }]
                                    }, {
                                        type: 'textbox',
                                        name: 'progress',
                                        label: editor.getLang('birds_tc_button.progress'),
                                        value: '100'
                                    }],
                                    onsubmit: function (e) {
                                        editor.insertContent('[progress-bar span="' + e.data.span + '" style="' + e.data.style + '" type="' + e.data.type + '" progress="' + e.data.progress + '"][/progress-bar]');
                                    }
                                });
                            }
                        }
                    ]
                },
                // Medias
                {
                    text: editor.getLang('birds_tc_button.medias'),
                    value: '',
                    icon: 'icon icon-file-video',
                    menu: [
                        // Icons
                        {
                            text: editor.getLang('birds_tc_button.icons'),
                            icon: 'icon icon-smile',
                            onclick: function () {
                                editor.windowManager.open({
                                    title: editor.getLang('birds_tc_button.icon_choice'),
                                    file: url + '/icons.html',
                                    width: 610,
                                    height: 400,
                                    buttons: [{
                                        text: editor.getLang('birds_tc_button.insert'),
                                        onclick: function () {
                                            var win = editor.windowManager.getWindows()[0];
                                            editor.insertContent('[icons class="' + win.getContentWindow().document.getElementById('content').value + '" size="' + win.getContentWindow().document.getElementById('isize').value + '"][/icons]');
                                            win.close();
                                        }
                                    }, {
                                        text: editor.getLang('birds_tc_button.close'),
                                        onclick: 'close'
                                    }]
                                });
                            }
                        },
                        // Google Map
                        {
                            text: editor.getLang('birds_tc_button.google_map'),
                            icon: 'icon icon-location',
                            onclick: function () {
                                editor.windowManager.open({
                                    title: editor.getLang('birds_tc_button.google_map_options'),
                                    body: [
                                        // Google Map Title
                                        {
                                            type: 'textbox',
                                            name: 'gmapTitle',
                                            label: editor.getLang('birds_tc_button.title'),
                                            value: 'Welcome to Carmel'
                                        },
                                        // Google Map Location
                                        {
                                            type: 'textbox',
                                            name: 'gmapLocation',
                                            label: editor.getLang('birds_tc_button.location'),
                                            value: 'Ocean Avenue, Carmel-by-the-Sea, CA'
                                        },
                                        // Google Map Height
                                        {
                                            type: 'textbox',
                                            name: 'gmapHeight',
                                            label: editor.getLang('birds_tc_button.height'),
                                            value: '400'
                                        },
                                        // Google Map Zoom
                                        {
                                            type: 'textbox',
                                            name: 'gmapZoom',
                                            label: editor.getLang('birds_tc_button.zoom'),
                                            value: '15'
                                        }//,
                                        // TODO: Google Map Styles
                                        //{
                                        //    type: 'listbox',
                                        //    name: 'style',
                                        //    label: editor.getLang('birds_tc_button.style'),
                                        //    'values': [{
                                        //        text: editor.getLang('birds_tc_button.choice_1'),
                                        //        value: ''
                                        //    }, {
                                        //        text: editor.getLang('birds_tc_button.choice_2'),
                                        //        value: ''
                                        //    }]
                                        //}
                                    ],
                                    onsubmit: function (e) {
                                        editor.insertContent('[birds_googlemap title="' + e.data.gmapTitle + '" location="' + e.data.gmapLocation + '" height="' + e.data.gmapHeight + '" zoom="' + e.data.gmapZoom + '"]');
                                    }
                                });
                            }
                        },
                        // Videos
                        {
                            text: editor.getLang('birds_tc_button.video'),
                            value: '',
                            icon: 'icon icon-video',
                            menu: [{
                                text: editor.getLang('birds_tc_button.embedded'),
                                onclick: function () {
                                    editor.windowManager.open({
                                        title: editor.getLang('birds_tc_button.flex_video_options'),
                                        body: [{
                                            type: 'textbox',
                                            name: 'embed',
                                            label: editor.getLang('birds_tc_button.embed_code'),
                                            'multiline': 'true',
                                            'minWidth': 300,
                                            'minHeight': 100
                                        }, {
                                            type: 'listbox',
                                            name: 'size',
                                            label: editor.getLang('birds_tc_button.size'),
                                            'values': [{
                                                text: editor.getLang('birds_tc_button.regular'),
                                                value: ''
                                            }, {
                                                text: editor.getLang('birds_tc_button.widescreen'),
                                                value: 'widescreen'
                                            }]
                                        }, {
                                            type: 'listbox',
                                            name: 'type',
                                            label: editor.getLang('birds_tc_button.type'),
                                            'values': [{
                                                text: editor.getLang('birds_tc_button.other'),
                                                value: ''
                                            }, {
                                                text: 'Vimeo',
                                                value: 'vimeo'
                                            }]
                                        }],
                                        onsubmit: function (e) {
                                            editor.insertContent('[flex-video size="' + e.data.size + '" type="' + e.data.type + '"]' + e.data.embed + '[/flex-video]');
                                        }
                                    });
                                }
                            }, {
                                text: editor.getLang('birds_tc_button.self_hosted'),
                                onclick: function () {
                                    editor.windowManager.open({
                                        title: editor.getLang('birds_tc_button.insert_self_hosted_video'),
                                        body: [{
                                            type: 'textbox',
                                            name: 'video_url',
                                            label: editor.getLang('birds_tc_button.video_url')
                                        }],
                                        onsubmit: function (e) {
                                            editor.insertContent('[video src="' + e.data.video_url + '" controls=""][/video]');
                                        }
                                    });
                                }
                            }]
                        },
                        // Audio
                        {
                            text: editor.getLang('birds_tc_button.audio'),
                            value: '',
                            icon: 'icon icon-mic',
                            menu: [{
                                text: editor.getLang('birds_tc_button.soundcloud'),
                                onclick: function () {
                                    editor.windowManager.open({
                                        title: editor.getLang('birds_tc_button.soundcloud_track_options'),
                                        body: [{
                                            type: 'textbox',
                                            name: 'sctitle',
                                            label: editor.getLang('birds_tc_button.title'),
                                            value: ''
                                        }, {
                                            type: 'textbox',
                                            name: 'soundcloud_iframe',
                                            label: editor.getLang('birds_tc_button.embed_code'),
                                            'multiline': 'true',
                                            'minWidth': 300,
                                            'minHeight': 100
                                        }],
                                        onsubmit: function (e) {
                                            editor.insertContent('[scloud title="' + e.data.sctitle + '"]' + e.data.soundcloud_iframe + '[/scloud]');
                                        }
                                    });
                                }
                            }, {
                                text: editor.getLang('birds_tc_button.self_hosted'),
                                onclick: function () {
                                    editor.windowManager.open({
                                        title: editor.getLang('birds_tc_button.insert_self_hosted_audio'),
                                        body: [{
                                            type: 'textbox',
                                            name: 'audio_url',
                                            label: editor.getLang('birds_tc_button.sound_url')
                                        }, {
                                            type: 'listbox',
                                            name: 'audio_preload',
                                            label: editor.getLang('birds_tc_button.preload'),
                                            'values': [{
                                                text: editor.getLang('birds_tc_button.none'),
                                                value: 'none'
                                            }, {
                                                text: editor.getLang('birds_tc_button.auto'),
                                                value: 'auto'
                                            }, {
                                                text: editor.getLang('birds_tc_button.metadata'),
                                                value: 'metadata'
                                            }]
                                        }],
                                        onsubmit: function (e) {
                                            editor.insertContent('[audio src="' + e.data.audio_url + '" preload="' + e.data.audio_preload + '" controls=""][/audio]');
                                        }
                                    });
                                }
                            }]
                        }
                    ]
                },
                // jQuery
                {
                    text: editor.getLang('birds_tc_button.jquery'),
                    value: '',
                    icon: 'icon icon-file-code',
                    menu: [
                        // Reveal Modal
                        {
                            text: editor.getLang('birds_tc_button.modal'),
                            icon: 'icon icon-popup',
                            onclick: function () {
                                editor.windowManager.open({
                                    title: editor.getLang('birds_tc_button.modal_options'),
                                    body: [{
                                        type: 'textbox',
                                        name: 'id',
                                        label: editor.getLang('birds_tc_button.modal_id')
                                    }, {
                                        type: 'textbox',
                                        name: 'visibletext',
                                        label: editor.getLang('birds_tc_button.visible_text')
                                    }, {
                                        type: 'textbox',
                                        name: 'popuptext',
                                        label: editor.getLang('birds_tc_button.popup_content'),
                                        'multiline': 'true',
                                        'minWidth': 300,
                                        'minHeight': 100
                                    }],
                                    onsubmit: function (e) {
                                        editor.insertContent('[modal id="' + e.data.id + '" visible="' + e.data.visibletext + '"]' + e.data.popuptext + '[/modal]');
                                    }
                                });
                            }
                        },
                        // Tabs (Horizontal)
                        {
                            text: editor.getLang('birds_tc_button.horizontal_tabs'),
                            icon: 'icon icon-ellipsis',
                            onclick: function () {
                                editor.windowManager.open({
                                    title: editor.getLang('birds_tc_button.horizontal_tabs'),
                                    body: [{
                                        type: 'textbox',
                                        name: 'title1',
                                        label: editor.getLang('birds_tc_button.title_1st_tab')
                                    }, {
                                        type: 'textbox',
                                        name: 'title2',
                                        label: editor.getLang('birds_tc_button.title_2nd_tab')
                                    }, {
                                        type: 'textbox',
                                        name: 'title3',
                                        label: editor.getLang('birds_tc_button.title_3rd_tab')
                                    }, {
                                        type: 'textbox',
                                        name: 'title4',
                                        label: editor.getLang('birds_tc_button.title_4th_tab')
                                    }, {
                                        type: 'textbox',
                                        name: 'title5',
                                        label: editor.getLang('birds_tc_button.title_5th_tab')
                                    }],
                                    onsubmit: function (e) {
                                        editor.insertContent('[tabs title1="' + e.data.title1 + '" title2="' + e.data.title2 + '" title3="' + e.data.title3 + '" title4="' + e.data.title4 + '" title5="' + e.data.title5 + '"]<br />[tab-content1]<br />' + editor.getLang('birds_tc_button.1st_tab_content') + '<br />[/tab-content1]<br />[tab-content2]<br />' + editor.getLang('birds_tc_button.2nd_tab_content') + '<br />[/tab-content2]<br />[tab-content3]<br />' + editor.getLang('birds_tc_button.3rd_tab_content') + '<br />[/tab-content3]<br />[tab-content4]<br />' + editor.getLang('birds_tc_button.4th_tab_content') + '<br />[/tab-content4]<br />[tab-content5]<br />' + editor.getLang('birds_tc_button.4th_tab_content') + '<br />[/tab-content5]<br />[/tabs]');
                                    }
                                });
                            }
                        },
                        // Tabs (Vertical)
                        {
                            text: editor.getLang('birds_tc_button.vertical_tabs'),
                            icon: 'icon icon-ellipsis-vert',
                            onclick: function () {
                                editor.windowManager.open({
                                    title: editor.getLang('birds_tc_button.vertical_tabs'),
                                    body: [{
                                        type: 'textbox',
                                        name: 'title1',
                                        label: editor.getLang('birds_tc_button.title_1st_tab')
                                    }, {
                                        type: 'textbox',
                                        name: 'title2',
                                        label: editor.getLang('birds_tc_button.title_2nd_tab')
                                    }, {
                                        type: 'textbox',
                                        name: 'title3',
                                        label: editor.getLang('birds_tc_button.title_3rd_tab')
                                    }, {
                                        type: 'textbox',
                                        name: 'title4',
                                        label: editor.getLang('birds_tc_button.title_4th_tab')
                                    }, {
                                        type: 'textbox',
                                        name: 'title5',
                                        label: editor.getLang('birds_tc_button.title_5th_tab')
                                    }],
                                    onsubmit: function (e) {
                                        editor.insertContent('[tabs_vert title1="' + e.data.title1 + '" title2="' + e.data.title2 + '" title3="' + e.data.title3 + '" title4="' + e.data.title4 + '" title5="' + e.data.title5 + '"]<br />[tab-content1]<br />' + editor.getLang('birds_tc_button.1st_tab_content') + '<br />[/tab-content1]<br />[tab-content2]<br />' + editor.getLang('birds_tc_button.2nd_tab_content') + '<br />[/tab-content2]<br />[tab-content3]<br />' + editor.getLang('birds_tc_button.3rd_tab_content') + '<br />[/tab-content3]<br />[tab-content4]<br />' + editor.getLang('birds_tc_button.4th_tab_content') + '<br />[/tab-content4]<br />[tab-content5]<br />' + editor.getLang('birds_tc_button.5th_tab_content') + '<br />[/tab-content5]<br />[/tabs_vert]');
                                    }
                                });
                            }
                        }
                    ]
                }
                // Let's close everything
            ]
        });
    });
})();
