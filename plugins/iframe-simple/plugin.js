/**
 * Very simple example Plugin utilising URL Dialog
 *
 * @author Marty Friedel
 */
(function () {
    var iframe = (function () {
        'use strict';

        tinymce.PluginManager.add("iframe-simple", function (editor, url) {

            /*
            Add a custom icon to TinyMCE
             */
            editor.ui.registry.addIcon('frame', '<svg width="24" height="24"><use xlink:href="custom-icons.svg#file-text"></use></svg>');

            /*
            Used to store a reference to the dialog when we have opened it
             */
            var _api = false;

            /*
            Define configuration for the iframe
             */
            var _urlDialogConfig = {
                title: 'Simple URL Dialog Demo',
                url: 'iframe-simple.html',
                buttons: [
                    {
                        type: 'custom',
                        name: 'action',
                        text: 'Submit',
                        primary: true,
                    },
                    {
                        type: 'cancel',
                        name: 'cancel',
                        text: 'Close Dialog'
                    }
                ],
                onAction: function (instance, trigger) {
                    // do something
                    editor.windowManager.alert('onAction is running.<br><br>You can code your own onAction handler within the plugin.');

                    // close the dialog
                    instance.close();
                },
                width: 600,
                height: 300
            };

            // Define the Toolbar button
            editor.ui.registry.addButton('iframe-simple', {
                text: "Open Simple URL Dialog",
                icon: 'frame',
                onAction: () => {
                    _api = editor.windowManager.openUrl(_urlDialogConfig)
                }
            });

        });
    }());
})();