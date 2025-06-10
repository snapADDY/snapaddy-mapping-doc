---
layout: post
title:  "Section: components"
date:   2020-11-10 12:00:00 +0200
permalink: components
---

The "<b>components</b>"-section determines the view of the export modal. You can hide fields, make them mandatory, lock them or set a maximum field length. It is only necessary to add a configuration here if you want to make a change to the default setting.

The components for a basic mapping are already predetermined and can be copied <a href="https://github.com/snapAddy/snapaddy-mapping-samples/tree/master/components">here</a>

Note:
1.  The order of the fields contained in components represents the order of the fields in the snapAddy ExportView
2. Fields that are not included in "components" will appear at the top of the Export View
3. The type of the component must match the type in the CRM field
4. Fields that appear multiple times in an Entity's components, will appear multiple times in the ExportView
5. For field that are mandatory in the CRM, it is highly recommended to set these fields to "required" in the components too, in order to avoid errors during the export 
6. Components of fields that are not used in the mapping might cause errors, so make sure to remove all components that are not necessary


<table>
  <colgroup>
    <col width="50%" />
    <col width="50%" />
  </colgroup>
  <thead>
    <tr class="header">
      <th>Syntax</th>
      <th>Example</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>
{% highlight json %}{% raw %}
{
  "*": {
     "entity": [
      {
        "type": "entity",
        "duplicateCheckName": "entity",
        "label": {
          "en": "entityLabel",
          "de": "entityLabel"
        },
        "fields": {
          "FieldName": {
            "id": "FieldName",
            "type": "input",
            "label": {
              "en": "FieldLabel",
              "de": "FieldLabel"
            },
            "properties": {
              "property1": "value1",
              "property2": "value2"
            }
          }
        },
        "search": {
          "ids": [
            "FullName"
          ]
        },
        "mainTemplate": "{{ MainTemplate }}",
        "detailsTemplate": "{{ DetailsTemlate }}"
      }
    ]
  }
}
{% endraw %}{% endhighlight %}
      </td>
      <td>
{% highlight json %}{% raw %}
{
  "*": {
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
                  "en": "LeadId",
                  "de": "LeadId"
                },
                "properties": {
                  "hidden": true,
                  "identifier": true
                }
              },
              "Newsletter": {
                "id": "Newsletter",
                "type": "select",
                "label": {
                  "en": "Newsletter",
                  "de": "Newsletter"
                },
                "properties": {
                  "options": [
                      {
                          "label": {
                              "de": "Ja",
                              "en": "Yes"
                            },
                            "value": "Yes"
                          },
                          {
                            "label": {
                              "de": "Nein",
                              "en": "No"
                            },
                            "value": "No"
                          }
                        ]
                      }
                    }
                },
                "search": {
                  "ids": [
                      "FullName"
                    ]
            },
          "mainTemplate": "{{ FirstName }} {{ LastName }}",
          "detailsTemplate": "{{ CompanyName }}",
          "preventDisableEntity": false
        }
      ]
  }
}
{% endraw %}{% endhighlight %}
      </td>
    </tr>
  </tbody>
</table>

List with all available data types:

<table>
  <colgroup>
    <col width="10%" />
    <col width="25%" />
    <col width="65%" />
  </colgroup>
  <tr class="header">
    <th>Data Type</th>
    <th>Description</th>
    <th>Example</th>
  </tr>

  <tbody>
    <tr>
      <td>input</td>
      <td>Free text input</td>
      <td>
{% highlight json %}{% raw %}
{
    "ContactFirstName":{
      "id":"ContactFirstName",
      "type":"input",
      "label":{
        "en":"FirstName",
        "de":"Vorname"
      }
    }
}
{% endraw %}{% endhighlight %}
      </td>
    </tr>

    <tr>
      <td>select</td>
      <td>
        <b>One</b> option <b>can</b> be selected.
        Note: By default the options will be fetched from the FieldDefinitions, unless they are overwritten in the properties of that component. When overwriting the option, watch out that the values match with the fieldDefinitions
      </td>
      <td>
{% highlight json %}{% raw %}
{
    "Newsletter": {
        "id": "Newsletter",
        "type": "select",
        "label": {
            "en": "Newsletter",
            "de": "Newsletter"
        },
        "properties": {
            "options": [
                {
                    "label": {
                        "de": "Ja",
                        "en": "Yes"
                    },
                    "value": "Yes"
                },
                {
                    "label": {
                        "de": "Nein",
                        "en": "No"
                    },
                    "value": "No"
                }
            ]
        }
    }
}
{% endraw %}{% endhighlight %}
      </td>
    </tr>

    <tr>
      <td>multiselect</td>
      <td>
        <b>Multiple</b> options <b>can</b> be selected
        Note: By default the options will be fetched from the fieldDefinitions, unless they are overwritten by the properties of that component. When overwriting the option, watch out that the values match with the fieldDefinitions
      </td>
      <td>
{% highlight json %}{% raw %}
{
    "Channel": {
        "id": "Channel",
        "type": "multiselect",
        "label": {
            "de": "Kanal",
            "en": "Channel"
        },
        "properties": {
            "options": [
                {
                    "label": {
                        "de": "Fax",
                        "en": "Fax"
                    },
                    "value": "FAX"
                },
                {
                    "label": {
                        "de": "E-Mail",
                        "en": "Email"
                    },
                    "value": "INT"
                },
                {
                    "label": {
                        "de": "SMS",
                        "en": "SMS"
                    },
                    "value": "SMS"
                },
                {
                    "label": {
                        "de": "Telefon",
                        "en": "Phone"
                    },
                    "value": "TEL"
                }
            ]
        }
    }
}
{% endraw %}{% endhighlight %}
      </td>
    </tr>

    <tr>
      <td>date</td>
      <td></td>
      <td>
{% highlight json %}{% raw %}
{
    "Erfassungstag__c": {
        "id": "Erfassungstag__c",
        "type": "date",
        "label": {
            "de": "Erfassungstag",
            "en": "Erfassungstag"
        }
    }
}
{% endraw %}{% endhighlight %}
      </td>
    </tr>

    <tr>
      <td>checkbox</td>
      <td></td>
      <td>
{% highlight json %}{% raw %}
{
    "ccp_apec": {
        "id": "ccp_apec",
        "type": "checkbox",
        "label": {
            "en": "APECLead",
            "de": "APECLead"
        },
        "properties": {
            "options": [
                {
                    "label": {
                        "en": "Yes"
                    },
                    "value": true
                },
                {
                    "label": {
                        "en": "No"
                    },
                    "value": false
                }
            ]
        }
    }
}
{% endraw %}{% endhighlight %}
** "options" can be left out with most CRMs, as they will be loaded dynamically from the CRM
      </td>
    </tr>
  </tbody>
</table>

detailsLabel add a description to the field. The whole description is visible when cursor hovers over the field. Language specific labels can be set.

<table>
  <colgroup>
    <col width="15%" />
    <col width="25%" />
  </colgroup>
  <tr class="header">
    <th>Syntax</th>
    <th>Example</th>
  </tr>

  <tbody>
    <tr>
      <td>
{% highlight json %}{% raw %}
{
    "field":{
      "id":"field",
      "type":"type",
      "label":{
        "en":"FieldLabel",
        "de":"FieldLabel"
      },
      "detailsLabel": {
        "en": "DetailsLabel",
        "de": "DetailsLabel"
      }
    }
}
{% endraw %}{% endhighlight %}
      </td>
      <td>
{% highlight json %}{% raw %}
{
    "ContactFirstName":{
      "id":"ContactFirstName",
      "type":"input",
      "label":{
        "en":"FirstName",
        "de":"Vorname"
      },
      "detailsLabel": {
        "en": "The First Name of the contact",
        "de": "Der Vorname des Kontaktes"
      }
    }
}
{% endraw %}{% endhighlight %}
      </td>
    </tr>
  </tbody>
</table>

List with all available properties:
<table>
  <colgroup>
    <col width="20%" />
    <col width="80%" />
  </colgroup>
  <tr class="header"></tr>
  <tbody>
    <tr>
      <td>hidden</td>
      <td>Field will be hidden in export view. Value will be sent</td>
    </tr>

    <tr>
      <td>required</td>
      <td>If the field is empty, the export will not be possible</td>
    </tr>

    <tr>
      <td>identifier</td>
      <td>Value will always be sent, even if not modified</td>
    </tr>

    <tr>
      <td>maxLength</td>
      <td>Id the maxLength is exceeded, a popup notifies the user (field type input only)</td>
    </tr>

    <tr>
      <td>defaultValue</td>
      <td>defaultValue, the defaultValue will be exported</td>
    </tr>

    <tr>
      <td>locked</td>
      <td>Field cannot be modified, always uses the value received from the CRM</td>
    </tr>

  </tbody>
</table>