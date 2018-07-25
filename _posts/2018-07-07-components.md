---
layout: post
title: "Section: components"
date: 2018-07-06 14:21:18 +0200
permalink: components
---
The "components"-section determines the view of the export modal. You can hide fields, make them mandatory or set a maximum field length.
It is only necessary to add a configuration here if you want to make a change to the default setting.


{% highlight json %}{% raw %}
{
  "workflows": {
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
        ],
        "onError": "skip"
      },
      {
        "entity": "task",
        "dependsOn": [
          {
            "components": {
                "lead": [],
                "contact_account": []
            }
          }
        }
      }
    ],
    "contact_account": [
      {
        "entity": "account"
      },
      {
        "entity": "contact",
        "dependsOn": [
          {
            "field": "AccountId",
            "entity": "account"
          }
        ]
      },
      {
        "entity": "campaignMember",
        "dependsOn": [
          {
            "field": "ContactId",
            "entity": "contact"
          }
        ],
        "onError": "skip"
      },
      {
        "entity": "task",
        "dependsOn": [
          {
            "field": "ContactId",
            "entity": "contact"
          }
        ]
      },
      {
        "entity": "attachments",
        "config": {
          "bcImage": {
            "entities": [
              "contact"
            ],
            "name": "VCard front.jpg"
          },
          "bcImageBackside": {
            "entities": [
              "contact"
            ],
            "name": "VCard back.jpg"
          },
          "drawing": {
            "entities": [
              "contact"
            ],
            "name": "Drawing.jpg"
          },
          "image": {
            "entities": [
              "contact"
            ],
            "name": "Profile image.jpg"
          },
          "attachments": {
            "entities": [
              "contact"
            ],
            "name": {
              "*": "Attachment_${i}.png",
              "PDF": "Attachment_${i}.pdf",
              "SIGNATURE": "{{visitreport.title || '' }} - {{firstName || '' }} {{lastName || ''}} Signatur (${i}).pdf"
            }
          },
          "note": {
            "entities": [
              "contact"
            ],
            "name": "Note"
          }
        }
      }
    ]
  }
}
{% endraw %}{% endhighlight %}
