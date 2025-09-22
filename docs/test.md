# Test

## Inline Code
This is some `inline` code.

## Code Block
We also have blocks of code:
```json
{
  "integrations": {
    "salesforce": {
      "customSettings":{
        "sfSkipDuplicateCheck": true
      },
      "meta": {
        "lead": {
          "apiName": "Lead",
          "idProperty": "Id"
        }
      },
      "code": {
        "functions": {
          "fooBar":[
            "this is some text",
            "in an array"
          ]
        }
      }
    }
  }
}
```