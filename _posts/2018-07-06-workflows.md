---
layout: post
title: "Section: workflows"
date: 2018-07-06 14:21:18 +0200
permalink: workflows
---
The "workflows"-section determines the entities which should be created when exporting. Here is also defined in which entity the attachments like bcImage (Businesscard image) or Note should be attached to.


{% highlight javascript %}{% raw %}
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
            "field": "LeadId",
            "entity": "lead"
          }
        ]
      },
      {
        "entity": "attachments",
        "config": {
          "bcImage": {
            "entities": [
              "lead"
            ],
            "name": "VCard front.jpg"
          },
          "bcImageBackside": {
            "entities": [
              "lead"
            ],
            "name": "VCard back.jpg"
          },
          "drawing": {
            "entities": [
              "lead"
            ],
            "name": "Drawing.jpg"
          },
          "image": {
            "entities": [
              "lead"
            ],
            "name": "Profile image.jpg"
          },
          "attachments": {
            "entities": [
              "lead"
            ],
            "name": {
              "*": "Attachment_${i}.png",
              "PDF": "Attachment_${i}.pdf",
              "SIGNATURE": "{{visitreport.title || '' }} - {{firstName || '' }} {{lastName || ''}} Signatur (${i}).pdf"
            }
          },
          "note": {
            "entities": [
              "lead"
            ],
            "name": "Note"
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
