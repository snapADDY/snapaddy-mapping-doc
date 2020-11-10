---
layout: post
title:  "Getting started"
date:   2020-11-02 14:21:16 +0200
permalink: getting-started
---

## snapADDY Mapping characteristics

The mapping document is one single file. It is written in JSON syntax. 
This mapping file can be created, deleted and edited in the [snapADDY dashboard](https://mapping.snapaddy.com/mapping-samples).

Some general points on working with the mapping document:
	
JSON, as well as all the snapADDY Keywords are case sensitive
The use of double quotes for displaying strings is forbidden, since this is part of the  syntax. Use single quotes instead
API Keywords must not include white spaces. Use '_' if necessary
Keeping a clean layout is recommended. Utilize the format button on the online configurator or switch to an external editor.
After making any changes to the mapping document, the current revision must be updated, saved and activated for testing. Also you need to reload the Grabber window, so that it can use the newest revision

An empty snapADDY mapping document looks like this:

{% highlight javascript %}{% raw %}
{
  "documentation": {},
  "layout": {},
  "integrations": {}
}
{% endraw %}{% endhighlight %}

The main mapping happens in "integration". "documentation" and "layout" are not mandatory but can be useful in some situations for a more advanced mapping.