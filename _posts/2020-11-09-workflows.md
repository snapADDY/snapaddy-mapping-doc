---
layout: post
title:  "Section: workflows"
date:   2020-11-06 09:47:23 +0200
permalink: workflows
---

The "<b>workflows</b>"-section determines the entities which should be created when exporting. In order to be exported, an entity must be defined in meta and must exist in the CRM System. 
Additional entities (that do not exist in the CRM System by default) can be created as "subEntities", so that they appear under another entity such as "lead" or "contact_account" for example. Therefor they depend on the corresponding parent entity. Contact and Account here act as one ("contact_account")
(When using the mapping samples, editing the workflows is not needed, unless new entities should be created)

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tr class="header">
<th>Syntax</th>
<th>Example</th>
</tr>

<tbody>
<tr>
<td style="max-width: 100px; vertical-align: initial;">
{% highlight javascript %}{% raw %}
"workflows":{
  "*": {
    "CRMentity": [
      {
        "entity": "CRMentity"
      },
      {
        "entity": "newEntity",
        "dependsOn":[
          {
            "field": "newFieldName",
            "entity": "CRMentity"
          }
        ]
      }
      ...
    ]
  }
}
{% endraw %}{% endhighlight %}
</td>
<td style="max-width: 100px; vertical-align: initial;">
{% highlight javascript %}{% raw %}
"workflows": {
  "*": {
     "lead": [
      {
        "entity": "lead"
      },
      {
        "entity": "campaignMember",
        "dependsOn": [
          {
            "field": "LeadId",
            "entity": "lead"
          }
        ]
      }
    ],
    "contact_account": [
      {
        "entity": "account"
      },
      {
        "entity": "campaignMember",
        "dependsOn": [
          {
            "field": "ContactID",
            "entity": "contact"
          }
        ]
      }
    ]
  }
}
{% endraw %}{% endhighlight %}
</td>
</tr>

</tbody>
</table>