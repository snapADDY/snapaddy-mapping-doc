---
layout: post
title:  "Section: integrations"
date:   2020-11-03 09:47:18 +0200
permalink: integrations
---

The <b>integration</b> is the connection between the data from the <b>snapADDY DataQuality</b>, <b>CardScanner</b> or <b>VisitReport</b> and your CRM system.

An empty integration for DataQuality- and VisitReport-Export looks like this:

{% highlight javascript %}{% raw %}
"integrations": {
  "CRM_System_Name": {
    "meta": {
    },
    "defaultExport": {
    },
    "visitReport": {
    },
    "code": {
    }
  }
}
{% endraw %}{% endhighlight %}

Multiple connections to different CRM systems can be included in one mapping document, just <b>separate</b> them by using a comma:

{% highlight javascript %}{% raw %}
"integrations": {
    "CRM_System_NameA": {
    },
    "CRM_System_NameB": {
    }
  }
{% endraw %}{% endhighlight %}



It is  best to start a new mapping by inserting the corresponding <a href="https://github.com/snapADDY/snapaddy-mapping-samples/tree/master">mapping sample</a>) into the integrations branch. This creates a basic valid mapping and may help understanding the syntax. "<i>meta</i>", "<i>defaultExport</i>", "<i>visitReport</i>" and "<i>code</i>" are included, even if parts are not used, it does not affect the rest of the mapping.
Now the mapping can be adapted by adding, removing or changing the entities and fields. More on that in "<i>mappings</i>".
