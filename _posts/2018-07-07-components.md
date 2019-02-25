---
layout: post
title: "Section: components"
date: 2018-07-06 14:21:18 +0200
permalink: components
---
The "components"-section determines the view of the export modal. You can hide fields, make them mandatory, lock them or set a maximum field length.
It is only necessary to add a configuration here if you want to make a change to the default setting.


{% highlight json %}{% raw %}
{
  "lead": [
    {
      "type": "lead",
      "duplicateCheckName": "lead",
      "label": {
        "en": "Lead",
        "de": "Lead"
      },
      "fields": {
        "LeadId": {
          "id": "LeadId",
          "type": "input",
          "label": {
            "en": "Id",
            "de": "Id"
          },
          "properties": {
            "hidden": true,
            "identifier": true
          }
        },
        "Subject": {
          "id": "Subject",
          "type": "input",
          "label": {
            "en": "Topic",
            "de": "Thema"
          },
          "properties": {
            "required": true,
            "maxLength": 50,
            "defaultValue": ""
          }
        },
        "LeadSource": {
          "id": "LeadSource",
          "type": "select",
          "label": {
            "en": "Lead source",
            "de": "Leadquelle"
          },
          "properties": {
            "locked": true,
            "defaultValue": ""
          }
        }
      },
      "search": {
        "ids": [
          "FullName"
        ]
      },
      "mainTemplate": "{{ FirstName }} {{ LastName }}",
      "detailsTemplate": "{{ CompanyName }}"
    }
  ]
}
{% endraw %}{% endhighlight %}
