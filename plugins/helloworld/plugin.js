/**
 * Example Plugin for TinyMCE 5 (built with RC1)
 *
 * @author Marty Friedel
 */
(function () {
    var helloworld = (function () {
        'use strict';

        tinymce.PluginManager.add("helloworld", function (editor, url) {

            /*
            Add a custom icon to TinyMCE
             */
            editor.ui.registry.addIcon('bubbles', '<svg width="24" height="24"><use xlink:href="custom-icons.svg#bubbles4"></use></svg>');

            /*
            Use to store the instance of the Dialog
             */
            var _dialog = false;

            /*
            An array of options to appear in the "Type" select box.
             */
            var _typeOptions = [];

            /**
             * Get the Dialog Configuration Object
             *
             * @returns {{buttons: *[], onSubmit: onSubmit, title: string, body: {}}}
             * @private
             */
            function _getDialogConfig()
            {
                return {
                    title: 'Hello World Example Plugin',
                    body: {
                        type: 'panel',
                        items: [{
                            type: 'selectbox',
                            name: 'type',
                            label: 'Dropdown',
                            items: _typeOptions,
                            flex: true
                        }]
                    },
                    onSubmit: function (api) {
                        // insert markup
                        editor.insertContent('<p>You selected Option ' + api.getData().type + '.</p>');

                        // close the dialog
                        api.close();
                    },
                    buttons: [
                        {
                            text: 'Close',
                            type: 'cancel',
                            onclick: 'close'
                        },
                        {
                            text: 'Insert',
                            type: 'submit',
                            primary: true,
                            enabled: false
                        }
                    ]
                };
            }

            /**
             * Plugin behaviour for when the Toolbar or Menu item is selected
             *
             * @private
             */
            function _onAction()
            {
                // Open a Dialog, and update the dialog instance var
                _dialog = editor.windowManager.open(_getDialogConfig());

                // block the Dialog, and commence the data update
                // Message is used for accessibility
                _dialog.block('Loading...');

                // Do a server call to get the items for the select box
                // We'll pretend using a setTimeout call
                setTimeout(function () {

                    // We're assuming this is what runs after the server call is performed
                    // We'd probably need to loop through a response from the server, and update
                    // the _typeOptions array with new values. We're just going to hard code
                    // those for now.
                    _typeOptions = [
                        {text: 'First Option', value: '1'},
                        {text: 'Second Option', value: '2'},
                        {text: 'Third Option', value: '3'}
                    ];

                    // re-build the dialog
                    _dialog.redial(_getDialogConfig());

                    // unblock the dialog
                    _dialog.unblock();

                }, 1000);
            }

            // Define the Toolbar button
            editor.ui.registry.addButton('helloworld', {
                text: "Hello Button",
                icon: 'bubbles',
                onAction: _onAction
            });

            // Define the Menu Item
            editor.ui.registry.addMenuItem('helloworld', {
                text: 'Hello Menu Item',
                context: 'insert',
                icon: 'bubbles',
                onAction: _onAction
            });

            // Return details to be displayed in TinyMCE's "Help" plugin, if you use it
            // This is optional.
            return {
                getMetadata: function () {
                    return {
                        name: "Hello World example",
                        url: "https://www.martyfriedel.com/blog/tinymce-5-creating-a-plugin-with-a-dialog-and-custom-icons"
                    };
                }
            };
        });
    }());
})();