---
layout: post
title:  "Section: documentation"
date:   2020-11-12 09:47:26 +0200
permalink: documentation
---

It is possible to add <b>documentation</b> into the snapADDY mapping, however this is not mandatory and it will not have any effect on the export result. 
It helps to document the progress of development and offers to note down the changes and its editor in the mapping file.

There is no strict syntax required. A filled documentation could look like this:


{% highlight javascript %}{% raw %}
"190813-Name": {
  "defaultExport.lead": {
    "changed": [
      "components.search.ids: AccountName -> Name"
    ]
  }
}
{% endraw %}{% endhighlight %}
