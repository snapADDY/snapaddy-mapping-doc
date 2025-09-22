# Integrations

The integration defines the connection between the data from snapAddy DataQuality, BusinessCards, or VisitReport and your CRM system.

An empty integration for DataQuality and VisitReportExport looks like this:

```json
"integrations": {
  "CRM_system": {
    "meta": {},
    "defaultExport": {},
    "visitReport": {},
    "code": {}
  }
}
```

You can include multiple connections to different CRM systems in one mapping document by separating them with a comma:

```json
{
  "integrations": {
    "CRM_system_A": {},
    "CRM_system_B": {}
  }
}
```

Custom Mappings are available for the following CRM systems:
```json
{
  "integrations":{
    "dynamics": {}, // MS Dynamics
    "hubspot": {}, // Hubspot
    "pipedrive": {}, // Pipedrive
    "salesforce": {}, // Salesforce
    "sap": {}, // SAP Sales Cloud
    "sap_v2": {}, // SAP Sales Cloud v2
    "sugar": {}, // SugarCRM
    "suite": {} // SuiteCRM
  }
}
```