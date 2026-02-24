# Workflows

The "**workflows**" section determines the entities which should be created when exporting. In order to be exported, an entity must be defined in meta and must exist in the CRM System. 

Additional entities (that do not exist in the CRM system by default) can be added, so that they appear under another export type such as `lead` or `contact_account` for example. Therefore they depend on the corresponding parent entity. Contact and Account here act as one export type (`contact_account`).

(When using the mapping samples, editing the workflows is not needed, unless new entities should be used)

### Syntax
```json
{
  "workflows":{
    "*": {
      "export_type": [
        {
          "entity": "entity_1"
        },
        {
          "entity": "entity_2",
          "dependsOn":[
            {
              "field": "<field_name>",
              "entity": "entity_1"
            }
          ]
        }
      ]
    }
  }
}
```

### Example
```json
{
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
          "entity": "contact",
          "dependsOn": [
            {
              "field": "AccountID",
              "entity": "account"
            }
          ]
        }
      ]
    }
  }
}
```