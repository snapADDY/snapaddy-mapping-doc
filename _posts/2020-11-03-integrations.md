---
layout: post
title:  "Section: integrations"
date:   2020-11-03 12:00:00 +0200
permalink: integrations
---

The <b>integration</b> is the connection between the data from the <b>snapADDY DataQuality</b>, <b>CardScanner</b> or <b>VisitReport</b> and your CRM system.

An empty integration for DataQuality- and VisitReport-Export looks like this:

{% highlight json %}
"integrations": {
  "CRM_System_Name": {
    "meta": {},
    "defaultExport": {},
    "visitReport": {},
    "code": {}
  }
}
{% endhighlight %}

Multiple connections to different CRM systems can be included in one mapping document, just <b>separate</b> them by using a comma:

{% highlight json %}
"integrations": {
    "CRM_System_NameA": {},
    "CRM_System_NameB": {}
  }
{% endhighlight %}
