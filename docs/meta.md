# Meta

The `meta` section is necessary for assigning the internal declaration of the entities in your CRM system to generic attributes in the mapping. (Every entity that is declared in meta will be included in the FieldDefinitions when downloaded, provided they exist in the CRM.) --> "fielddefinitions" : {}

Depending on the CRM there are various attributes which must be provided.

### Syntax Structure

The `meta` section is structured as a JSON object containing entity definitions. Each entity is represented by a key-value pair where the key is the generic entity name and the value is an object containing properties such as `apiName`, `idProperty`, and other optional configurations.

```json
{
  "meta": {
    "entity_1": {
      "apiName": "CRM Entity1",
      "idProperty": "Id"
    },
    "entity_2": {
      "apiName": "CRM Entity1",
      "idProperty": "Id"
    }
  }
}
```

### Salesforce Example

For Salesforce, the `meta` section might look like this, defining common entities such as leads, contacts, accounts, campaign members, and tasks:

```json
{
  "meta": {
    "lead": {
      "apiName": "Lead",
      "idProperty": "Id"
    },
    "contact": {
      "apiName": "Contact",
      "idProperty": "Id"
    },
    "account": {
      "apiName": "Account",
      "idProperty": "Id"
    },
    "campaignMember": {
      "apiName": "CampaignMember",
      "idProperty": "Id"
    },
    "task": {
      "apiName": "Task",
      "idProperty": "Id"
    }
  }
}
```

## available entity meta properties

### apiName
The `apiName` property specifies the actual name of the entity in the CRM system.

Example: `"apiName": "Lead"`

### idProperty
The `idProperty` defines the unique identifier field used internally by the CRM system for this entity. This is typically used for record identification and referencing.

Example: `"idProperty": "Id"`

### allowedActions
This property defines which operations are permitted on the entity, such as creating new records or updating existing ones. It helps enforce business rules at the mapping level.

Example:
```json
{
  "allowedActions": {
    "create": false,
    "update": true
  }
}
```

### invalidations
The `invalidations` property allows you to define conditions that, when met, will trigger error messages. This provides validation rules for entity operations.

Example:
```json
{
  "invalidations": {
    "create": [
      {
        "message": "This is not allowed!",
        "condition": "{{ mergedItem.RecordType == '1000101' }}"
      }
    ]
  }
}
```