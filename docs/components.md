# Components

The "**`components`**"-section determines the view of the export modal. You can hide fields, make them mandatory, lock them or set a maximum field length. It is only necessary to add a configuration here if you want to make a change to the default setting.


### Note:

1. The order of the fields contained in components represents the order of the fields in the snapAddy ExportView
2. Fields that are not included in "components" will appear at the top of the Export View
3. The type of the component must match the type in the CRM field
4. Fields that appear multiple times in an Entity's components, will appear multiple times in the ExportView
5. For fields that are mandatory in the CRM, it is highly recommended to set these fields to "required" in the components too, in order to avoid errors during the export
6. Components of fields that are not used in the mapping might cause errors, so make sure to remove all components that are not necessary

### Syntax

```json
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
```

### Example


```json
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
```

### List with all available data types:

<table>
  <col style="width:15%" />
  <col style="width:35%" />
  <col style="width:50%" />
  <tr>
    <th>Data Type</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>input</td>
    <td>Free text input</td>
    <td><pre><code class="language-json">{
    "ContactFirstName":{
      "id":"ContactFirstName",
      "type":"input",
      "label":{
        "en":"FirstName",
        "de":"Vorname"
      }
    }
}</code></pre></td>
  </tr>
  <tr>
    <td>select</td>
    <td>One option can be selected. Note: By default the options will be fetched from the FieldDefinitions, unless they are overwritten in the properties of that component. When overwriting the option, watch out that the values match with the fieldDefinitions</td>
    <td><pre><code class="language-json">{
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
}</code></pre></td>
  </tr>
  <tr>
    <td>multiselect</td>
    <td>Multiple options can be selected. Note: By default the options will be fetched from the fieldDefinitions, unless they are overwritten by the properties of that component. When overwriting the option, watch out that the values match with the fieldDefinitions</td>
    <td><pre><code class="language-json">{
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
}</code></pre></td>
  </tr>
  <tr>
    <td>date</td>
    <td></td>
    <td><pre><code class="language-json">{
    "Erfassungstag__c": {
        "id": "Erfassungstag__c",
        "type": "date",
        "label": {
            "de": "Erfassungstag",
            "en": "Erfassungstag"
        }
    }
}</code></pre></td>
  </tr>
  <tr>
    <td>checkbox</td>
    <td></td>
    <td><pre><code class="language-json">{
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
}</code></pre></td>
  </tr>
</table>

** "options" can be left out with most CRMs, as they will be loaded dynamically from the CRM

`detailsLabel` add a description to the field. The whole description is visible when cursor hovers over the field. Language specific labels can be set.

<table>
  <col style="width:30%" />
  <col style="width:70%" />
  <tr>
    <th>Syntax</th>
    <th>Example</th>
  </tr>
  <tr>
    <td><pre><code>{
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
}</code></pre></td>
    <td><pre><code>{
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
}</code></pre></td>
  </tr>
</table>

### Available properties

| Property | Description |
|----------|-------------|
| hidden | Field will be hidden in export view. Value will be sent |
| required | If the field is empty, the export will not be possible |
| identifier | Value will always be sent, even if not modified |
| maxLength | If the maxLength is exceeded, a popup notifies the user (field type input only) |
| defaultValue | The defaultValue will be exported |
| locked | Field cannot be modified, always uses the value received from the CRM |

