---
layout: post
title:  "Section: integrations"
date:   2020-11-03 09:47:18 +0200
permalink: integrations
---

The **integration** is the connection between the data from the **snapADDY Grabber**, **CardScanner** or **VisitReport** and your CRM system.

An empty integration for Grabber- and VisitReport-Export looks like this:

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

Multiple connections to different CRM systems can be included in one mapping document, just separate them by using a comma:

{% highlight javascript %}{% raw %}
"integrations": {
    "CRM_System_NameA": {
    },
    "CRM_System_NameB": {
    }
  }
{% endraw %}{% endhighlight %}



It is  best to start a new mapping by inserting the corresponding [mapping sample](https://github.com/snapADDY/snapaddy-mapping-samples/tree/master) into the integrations branch. This creates a basic valid mapping and may help understanding the syntax. "*meta*", "*defaultExport*", "*visitReport*" and "*code*" are included, even if parts are not used, it does not affect the rest of the mapping.
Now the mapping can be adapted by adding, removing or changing the entities and fields. More on that in "*mappings*".
