---
layout: post
title: "Section: notifications"
date: 2018-07-08 14:21:18 +0200
permalink: notifications
published: false
---
In the "notifications"-section you can configure the "Follow-up Mail" functionality.
Follow-up mails can be triggered either by exporting reports from the app or by checking reports in the dashboard.
It is also possible to define conditions that have to be fulfilled for the follow-up mail to be sent.

Examples:
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
                "trigger": "created",
                "language": "en",
                "condition": "{{ lastName === 'Müller' }}",
                "details": [
                  {
                    "type": "email",
                    "subject": "Hello, {{ firstName }} {{ lastName }}",
                    "content": "This is an email for you",
                    "attachments": [{
                      "type": "visitreport_pdf",
                      "name": "Report from {{ firstName }} {{lastName}}"
                    }],
                    "recipients": ["hello@mueller.com"]
                  }
                ]
              }, 
              {
                "trigger": "checked",
                "language": "de",
                "condition": "{{ lastName === 'Müller' }}",
                "details": [
                  {
                    "type": "email",
                    "subject": "Hello, {{ firstName }} {{ lastName }}",
                    "content": "This is an email for you",
                    "recipients": ["checked@mueller.com","checked2@mueller.com"]
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
