---
layout: post
title:  "Section: defaultExport"
date:   2020-11-05 09:47:20 +0200
permalink: defaultExport
---

The "<b>defaultExport</b>"-section determines all export-settings regarding the <b>snapADDY DataQuality</b>. 
An empty defaultExport looks like this:

{% highlight javascript %}{% raw %}
"defaultExport": {
    "mappings": {
        "*": {}
    },
    "workflows": {
        "*": {}
    },
    "components": {
        "*": {}
    }
}
{% endraw %}{% endhighlight %}
