# Mappings

The **mappings** branch is where the actual **field mapping** happens. All the entities that should be exported need to appear in this branch as well. Every entity has its own mapping. An empty mapping could look like this (the entity names may vary, depending on the CRM):

```json
"mappings": {
  "*": {
    "lead": {},
    "contact": {},
    "account": {}
  }
}
```

::: v-pre
Every CRM field that is listed in the mappings branch receives the data that is defined between the brackets `"{{  }}"` (* There are more advanced ways too).
The fieldMapping looks like this:

`"field_API_Name": "{{ expression }}"`
:::

The whole entity mapping looks like this:

### Syntax
```json
"mappings": {
  "*": {
    "entity": {
      "attribute1": "{{ value1 }}",
      "attribute2": "{{ value2 }}"
    }
  }
}
```

### Example
```json
"mappings": {
  "*": {
    "lead": {
      "FirstName": "{{ firstName }}",
      "LastName": "{{ lastName }}"
    }
  }
}
```

::: v-pre
`"{{  }}"` either contains:

**Empty**:<br>
Syntax: `"{{  }}"`  
Example: `"{{  }}"`  
Explanation: Nothing (null) is set

**Default Value**:<br>
Syntax: `"{{ 'DefaultValue' }}"`  
Example: `"{{ 'Exhibitions' }}"`  
Explanation: Set the given value

**snapAddy variable**:<br>
Syntax: `"{{ variable }}"`  
Example: `"{{ firstName }}"`  
Explanation: Sets the value of the default field. There's a list of all default fields.

**Predefined Function**:<br>
Syntax: `"{{ functionX(arg) }}"`  
Example: `"{{ parseStreet(street).number }}"`  
Explanation: Executes the function and sets its return value. Note: function must be defined in the "code" branch.

**question response**:<br>
Syntax: `"{{ _answers['id'] }}"`  
Example: `"{{ _answers['xOa9VA3JZd6b2qlv'] }}"`  
Explanation: Sets the response of the VR question with the id. _answers[] will return null, if the question does not have an answer. This behaves like an empty mapping.

Multiple values can be chained together by using logic operators.

**OR**:<br>
Syntax: `||`  
Example: `"{{ value1 || value2 }}"`  
Explanation: value1 or value2.

**AND**:<br>
Syntax: `&&`  
Example: `"{{ value1 && value2 }}"`  
Explanation: value1 and value2.
:::

`_answers['questionId']` allows to retrieve the result/answer of a snapAddy VisitReport question. You can read how to receive the question ids below. If a question has multiple selected options, the values of each result are concatenated using a semicolon. If no explicit value was set for the answer options, snapAddy returns the label of the option. It is recommended to use the value rather than the label in the mapping, in order to avoid errors when the labels are changed afterwards. A question that is not filled or selected will return null.

The questionId is case sensitive!

`visitreport.` offers more variables from the VisitReport.

`visitReport.result['questionId'].data` has the same behaviour as `_answers['questionId']`.  
`visitreport.result['questionId'].options['optionId']` allows to query a specific option. A full list of commands can be seen here: [VisitReport](./visitReport.md)

The **questions ids** can be copied from the mapping helper. Follow these steps:
1. Open the [VisitReport helper](https://vr-helper.snapaddy.com/)
2. Enter your **API Key** (can be found [here](https://app.snapaddy.com/settings/security)) and click Load
3. Select a VisitReport event
4. **Search for** your question and copy the **mappingId** and paste it in `_answers['id']`

## Checklist for field mapping

1. Is the field contained in the corresponding entity in fieldDefinitions (case-sensitive! It's best to always copy and paste complex names!)
2. Is the field creatable/updatable/? 
3. Does the datatype match?
4. Make sure to not include commas "," in strings, since this character is used internally and this might cause unexpected errors