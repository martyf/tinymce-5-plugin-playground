/**
 * Example Plugin utilising URL Dialog
 *
 * @author Marty Friedel
 */
(function () {
    var iframe = (function () {
        'use strict';

        tinymce.PluginManager.add("iframe", function (editor, url) {

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
                title: 'URL Dialog Demo',
                url: 'iframe.html',
                buttons: [
                    {
                        type: 'custom',
                        name: 'action1',
                        text: 'Action Button 1',
                        primary: true,
                        align: 'end'
                    },
                    {
                        type: 'custom',
                        name: 'action2',
                        text: 'Action Button 2',
                        primary: false,
                        align: 'end'
                    },
                    {
                        type: 'cancel',
                        name: 'cancel',
                        text: 'Close Dialog',
                        primary: false,
                        align: 'end'
                    }
                ],
                onAction: function (instance, trigger) {
                    // block the dialog
                    instance.block('Running action...');

                    // simulate a delay just to demonstrate the block
                    // maybe you want to do something from a server, maybe you just don't want the dialog to be
                    // interacted with
                    setTimeout(() => {
                        // insert some content
                        editor.insertContent('<p>You clicked Dialog Button "' + trigger.name + '".</p>');

                        // close the dialog
                        instance.close();
                    }, 1000);
                },
                onMessage: function (instance, data) {
                    // what action should we perform?
                    switch (data.mceAction)
                    {
                        case 'sayName':
                            if (data.data.name == '')
                            {
                                // display an error
                                editor.windowManager.alert('You need to enter your name.');
                            }
                            else
                            {
                                // say hello
                                editor.windowManager.alert('Hi there ' + data.data.name + ' - nice to meet you!');

                                // close the window
                                instance.close();
                            }
                            break;
                        case 'anotherAction':
                            break;
                        // ...
                        // etc
                    }
                }
            };

            /**
             * Custom command: iframeCommand
             *
             * This is a simple demonstration of a custom command that will display an alert to the user, and insert
             * some content in to the editor.
             *
             * If no content is provided, an error alert is shown.
             */
            editor.addCommand('iframeCommand', function (ui, value) {
                if (value == '')
                {
                    // we need to have a value, so let's alert the user
                    editor.windowManager.alert('You need type some text in the "iframe input".');
                }
                else
                {
                    // simply show an alert with the value being passed
                    editor.windowManager.alert('Hi, this is the iframeCommand from the iframe plugin. You sent me: "' + value + '"');

                    // insert some content
                    editor.insertContent('<p>Your "iframe input" was "' + value + '"</p>');
                }
            });

            /**
             * Custom command: getTinyMceContent
             *
             * This command demonstrates how your TinyMCE plugin can send a message to the URL Dialog using the
             * api.sendMessage call.
             *
             * "api" is set when the openUrl function is called - so this won't run until the dialog is actually open.
             */
            editor.addCommand('getTinymceContent', function (ui, value) {
                if (_api !== false)
                {
                    // send a message
                    _api.sendMessage({
                        // this is purely used as an example to show that multiple (and custom)
                        // parameters can be sent using sendMessage
                        'param1': 'My Param',

                        // simply get the editor's content
                        'content': editor.getContent()
                    }, '*');
                    /*
                     *
                     * Note:
                     * This is specifying a target origin as a wildcard ("*") for demonstration purposes.
                     * When using this in your own projects, make sure to specify the origin.
                     *
                     * Refer to:
                     * https://www.tiny.cloud/docs/ui-components/urldialog/#urldialogmessaging
                     *
                     */
                }
            });

            // Define the Toolbar button
            editor.ui.registry.addButton('iframe', {
                text: "Open Advanced URL Dialog",
                icon: 'frame',
                onAction: () => {
                    _api = editor.windowManager.openUrl(_urlDialogConfig)
                }
            });

            // Return details to be displayed in TinyMCE's "Help" plugin, if you use it
            // This is optional.
            return {
                getMetadata: function () {
                    return {
                        name: "URL Dialog iframe example",
                        url: "https://www.martyfriedel.com/blog/tinymce-5-url-dialog-component-and-window-messaging"
                    };
                }
            };
        });
    }());
})();