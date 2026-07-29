# Custom Fields

Custom fields can be used for Excel imports in LeadResearch. You can access the created custom fields by using the "id" in the mapping. The "id" always has to start with `c_`.

## Examples:


```json
{
  "customFields": [
    {
      "type": "INPUT",
      "id": "c_description",
      "label": {
        "DE": "Beschreibung",
        "GB": "Description"
      },
      "properties": {
        "defaultValue": ""
      }
    },
    {
      "type": "SELECT",
      "id": "c_productInterest",
      "label": {
        "DE": "Produktinteresse",
        "GB": "Product interest"
      },
      "properties": {
        "defaultValue": "",
        "options": [
          {
            "label": {
              "DE": "",
              "GB": ""
            },
            "value": ""
          },
          {
            "label": {
              "DE": "snapAddy LeadResearch",
              "GB": "snapAddy LeadResearch"
            },
            "value": "snapaddy_leadResearch"
          },
          {
            "label": {
              "DE": "snapAddy VisitReport",
              "GB": "snapAddy VisitReport"
            },
            "value": "snapaddy_visitreport"
          }
        ]
      }
    },
    {
      "type": "MULTI_SELECT",
      "id": "c_followup",
      "label": {
        "DE": "Nächste Schritte",
        "GB": "Next Steps"
      },
      "properties": {
        "defaultValue": "",
        "options": [
          {
            "label": {
              "DE": "Angebot zusenden",
              "GB": "Send offer"
            },
            "value": "send_offer"
          },
          {
            "label": {
              "DE": "Termin vereinbaren",
              "GB": "Schedule appoinment"
            },
            "value": "schedule_appoinment"
          },
          {
            "label": {
              "DE": "Kundenbesuch",
              "GB": "Customer visit"
            },
            "value": "customer_visit"
          }
        ]
      }
    },
    {
      "type": "DATE",
      "id": "c_date",
      "label": {
        "DE": "Follow-Up Termin",
        "GB": "Follow-Up Appointment"
      },
      "properties": {
        "defaultValue": ""
      }
    }
  ]
}
```