# TinyMCE 5 Example Plugin
Developed by [Marty Friedel](https://www.martyfriedel.com)

Last updated May 2019

Live demo: https://tinymce.martyfriedel.com/

## How to use
Open **index.html** in a web browser and you're good to go. 

You will get an API Key warning given you'll be running it from Tiny's cloud code - just close that warning for now. If 
you are going to get serious with development, either register with Tiny for continued cloud use, or include TinyMCE in 
your project.

Alternatively, you can build your own TinyMCE 5 build from the [TinyMCE 5.x branch](https://github.com/tinymce/tinymce/tree/5.x),
and host the files locally yourself.

A package.json file is included for you to quickly get TinyMCE running locally - use your favourite package manager (such as NPM, Yarn, etc)
to get the build files, and update the JS file in the index.html file and you'll be good to go.

## What is where
**index.html** includes the HTML needed to get up and running, including the TinyMCE init code.

**custom-icons.svg** has two SVG icons that we can reference in the "helloworld" plugin.

**plugins** contains the source code and minified code for the "helloworld", "flags", "iframe-simple" and "iframe" plugins. The init code for TinyMCE is looking 
for the .min.js version of the plugin. If you start tinkering, don't forget to either minify your plugin.js file, or 
update the TinyMCE init to look for the un-minified file.

## An introduction to Dialogs
Take a read of [my article](https://www.martyfriedel.com/blog/tinymce-5-creating-a-plugin-with-a-dialog-and-custom-icons) 
to show how the plugin got to this stage. 

This is for the **helloworld** plugin.

This article breaks the process down to:
1. A basic TinyMCE Plugin structure
2. Extending the Plugin to display a Dialog using TinyMCE 5's UI components
3. Updating the Dialog after instantiation
4. Adding custom SVG icons to TinyMCE for the Plugin to use

## An introduction to AutoCompleter
Take a read of [this article](https://www.martyfriedel.com/blog/tinymce-5-creating-an-autocomplete-plugin) to show how easy it is to get
an AutoCompleter plugin up and running. 

This is for the **flags** plugin.

This will help you:
1. Understand the configuration of the AutoCompleter
2. Consider where your data needs to come from
3. Insert your data in to the editor

## The new URL Dialog Component and Window Messaging
Take a read of [my article](https://www.martyfriedel.com/blog/tinymce-5-url-dialog-component-and-window-messaging) to see working examples of
the URL Dialog UI Component in its bare bones form (the **iframe-simple** plugin) plus more advanced messaging between
the iframe and TinyMCE (the **iframe** plugin).

This will help you get started with:
1. iframes in TinyMCE 5
2. configuring your URL Dialog
3. understanding how to send messages from your iframe to TinyMCE as a Command or via onMessage
4. understand how to send messages from TinyMCE back to your iframe

Don't forget to visit [Tiny's](https://www.tiny.cloud) website to read all of the documentation for TinyMCE. It will be 
incredibly useful for you when you start writing your own Plugins.