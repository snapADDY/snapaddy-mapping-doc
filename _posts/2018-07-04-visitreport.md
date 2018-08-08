---
layout: post
title:  "Section: visitreport"
date:   2018-07-04 14:21:18 +0200
permalink: visitreport
---

The "visitreport"-section determines all export-settings regarding snapADDY VisitReport.
For more details have a look at [mappings](), [workflows]() and [components]()

{% highlight json %}{% raw %}
{
      "visitReport": {
            "mappings": {
            "*":{}
            },
            "workflows": {
            "*":{}
            },
            "components": {
            "*":{}
            }
        }
  }
{% endraw %}{% endhighlight %}

You can create mulitple mappings for different templates by exchaning the "*", which is a variable for "applies to all templates", with the MappingId of the desired template.
