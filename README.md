# TinyMCE 5 Example Plugin
Developed by [Marty Friedel](https://www.martyfriedel.com)

Last updated February 2019

Tested with:
- TinyMCE 5 RC1 (5.0.0-rc-1-build.3)
- TinyMCE 5 RC2 (5.0.0-rc-2-build.2-8)
- TinyMCE 5 Stable 

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

**custom-icons.svg** has two SVG icons that we can reference in the plugin.

**plugins** contains the source code and minified code for the "helloworld" plugin. The init code for TinyMCE is looking 
for the .min.js version of the plugin. If you start tinkering, don't forget to either minify your plugin.js file, or 
update the TinyMCE init to look for the un-minified file.

## Step by step
Take a read of [my article](https://www.martyfriedel.com/blog/tinymce-5-creating-a-plugin-with-a-dialog-and-custom-icons) 
to show how the plugin got to this stage. This article breaks the process down to:
1. A basic TinyMCE Plugin structure
2. Extending the Plugin to display a Dialog using TinyMCE 5's UI components
3. Updating the Dialog after instantiation
4. Adding custom SVG icons to TinyMCE for the Plugin to use

Don't forget to visit [Tiny's](https://www.tiny.cloud) website to read all of the documentation for TinyMCE. It will be 
incredibly useful for you when you start writing your own Plugins.