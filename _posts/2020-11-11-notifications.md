---
layout: post
title:  "Section: notifications"
date:   2020-11-11 09:47:25 +0200
permalink: notifications
---

In the "<b>notifications</b>"-section you can configure the "Follow-up Mail" functionality. Follow-up mails can be triggered either by exporting reports from the app or by checking reports in the dashboard. It is also possible to define conditions that have to be fulfilled for the follow-up mail to be sent.

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
{
  "integrations": {
    "notifications": {
      "enabled": boolean,
      "mapping": {
        "defaultExport/visitreport": {
          "mappingId": {
            "actions": [
              {
                "trigger": "created/checked",
                "switch": "{{ variable }}",
                "cases": [
                  {
                    "value": "Value1",
                    "details": {
                      "type": "email/webhook",
                      "subject": "Text",
                      "content": "Content",
                      "recipients": [
                        "Email1",
                        "Email2"
                      ]
                    }
                  },
                  {
                    "value": "Value2",
                    "details": {
                      "type": "email/webhook",
                      "subject": "Text",
                      "content": "Content",
                      "recipients": [
                        "Email1",
                        "Email2"
                      ]
                    }
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
}
{% endraw %}{% endhighlight %}
</td>
<td style="max-width: 100px; vertical-align: initial;">
{% highlight javascript %}{% raw %}
{
  "integrations": {
    "notifications": {
      "enabled": true,
        "visitreport": {
        "mappings": {
          "*": {
            "actions": [{
                "trigger": "created",
                "switch": "{{ address.zip[0] }}",
                "cases": [{
                  "value": "1",
                  "details": {
                    "type": "email",
                    "subject": "Hello Berlin",
                    "content": "This is an email for you",
                    "recipients": ["test@berlin.de", "info@berlin.de"]
                  }
                }, 
                {
                  "value": "9",
                  "details": {
                    "type": "email",
                    "subject": "Hello Bavaria",
                    "content": "This is an email for you",
                    "recipients": ["test@bayern.de", "info@bayern.de"]
                  }
                }]
            }]
          }
        }
      }
    }
  }
}
{% endraw %}{% endhighlight %}
</td>
</tr>

<tr>
<td style="max-width: 100px; vertical-align: initial;">
{% highlight javascript %}{% raw %}
{
  "integrations": {
    "notifications": {
      "enabled": boolean,
      "mapping": {
        "defaultExport/visitreport": {
          "mappingId": {
            "actions": [
              {
                "trigger": "created/checked",
                "language": "de/en",
                "condition": "{{ condition }}",
                "details": [
                  {
                    "type": "email/webhook",
                    "subject": "subject",
                    "content": "content",
                    "attachments": [
                      {
                        "type": "visitreport_pdf",
                        "name": "name"
                      }
                    ],
                    "recipients": [
                      "Email1",
                      "Email2"
                    ]
                  ]
                }
              ]
            }
          }
        }
      }
    }
  }
{% endraw %}{% endhighlight %}
</td>
<td style="max-width: 100px; vertical-align: initial;">
{% highlight javascript %}{% raw %}
{
  "integrations": {
    "notifications": {
      "enabled": true,
      "visitreport": {
        "mappings": {
          "*": {
            "actions": [
              {
                "trigger": "",
                "language": "",
                "condition": "{{  }}",
                "details": [
                  {
                    "type": "email",
                    "subject": "VisitReport {{ visitreport.title }} von {{ organization }} - {{ firstName }} {{ lastName }}",
                    "content": "Sehr geehrte Damen und Herren, anbei finden Sie den VisitReport {{ visitreport.title }} von {{organization}} - {{ firstName }} {{ lastName }}",
                    "attachments": [
                      {
                        "type": "visitreport_pdf",
                        "name": "VisitReport {{ visitreport.title }} von {{ organization }} - {{ firstName }} {{ lastName }}"
                      }
                    ],
                    "recipients": [
                      "info@test.de"
                    ]
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
}
{% endraw %}{% endhighlight %}
</td>
</tr>

</tbody>
</table>