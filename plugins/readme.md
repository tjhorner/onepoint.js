How to create a plugin
----------------------

This guide will teach you how to make a onepoint.js plugin.

Easy Way: Plugin creator
------------------------

Step 1. Open onepoint.html

Step 2. Type this line of code into the console (F12)

`onepoint.creator.create('PluginName', 'Description', 'Author', 'Version');`

Advanced Way: Manually create JSON
----------------------------------

Use this template to create your plugin.

```javascript
onepoint.myplugin = Plugin({
	name: "My Plugin",
	description: "Plugin description",
	author: "Your name",
	version: "1.0"
})
```
