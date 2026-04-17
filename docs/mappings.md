# Mappings

The **`mappings`** branch is where the actual **field mapping** happens. All the entities that should be exported need to appear in this branch as well. Every entity has its own mapping. An empty mapping could look like this (the entity names may vary, depending on the CRM):

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

<table>
  <colgroup>
    <col style="width:20%" />
    <col style="width:30%" />
    <col style="width:30%" />
    <col style="width:20%" />
  </colgroup>
  <thead>
    <tr>
      <th>Type</th>
      <th>Syntax</th>
      <th>Example</th>
      <th>Explanation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Empty</td>
      <td><code>{{ }}</code></td>
      <td><code>{{ }}</code></td>
      <td>Nothing (null) is set</td>
    </tr>
    <tr>
      <td>Default Value</td>
      <td><code>{{ 'DefaultValue' }}</code></td>
      <td><code>{{ 'Exhibitions' }}</code></td>
      <td>Sets the entered value</td>
    </tr>
    <tr>
      <td>snapAddy variable</td>
      <td><code>{{ variable }}</code></td>
      <td><code>{{ firstName }}</code></td>
      <td>Sets the value of the default field. There's a list of all default fields in the <a href="/variables">Variables</a> section.</td>
    </tr>
    <tr>
      <td>Predefined Function</td>
      <td><code>{{ functionX(arg) }}</code></td>
      <td><code>{{ parseStreet(street).number }}</code></td>
      <td>Executes the function and sets its return value. Note: function must be defined in the "code" branch.</td>
    </tr>
    <tr>
      <td>question response</td>
      <td><code>{{ _answers['id'] }}</code></td>
      <td><code>{{ _answers['xOa9VA3JZd6b2qlv'] }}</code></td>
      <td>Sets the response of the VR question with the id. _answers[] will return null, if the question does not have an answer. This behaves like an empty mapping.</td>
    </tr>
  </tbody>
</table>

Multiple values can be chained together by using logic operators.

<table>
  <colgroup>
    <col style="width:20%" />
    <col style="width:20%" />
    <col style="width:30%" />
    <col style="width:30%" />
  </colgroup>
  <thead>
    <tr>
      <th>Operator</th>
      <th>Syntax</th>
      <th>Example</th>
      <th>Explanation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>OR</td>
      <td><code>||</code></td>
      <td><code>{{ value1 || value2 }}</code></td>
      <td>value1 or value2</td>
    </tr>
    <tr>
      <td>AND</td>
      <td><code>&&</code></td>
      <td><code>{{ value1 && value2 }}</code></td>
      <td>value1 and value2</td>
    </tr>
  </tbody>
</table>
::: 

`_answers['questionId']` allows to retrieve the result/answer of a snapAddy VisitReport question. You can read how to receive the question ids below. If a question has multiple selected options, the values of each result are concatenated using a semicolon. If no explicit value was set for the answer options, snapAddy returns the label of the option. It is recommended to use the value rather than the label in the mapping, in order to avoid errors when the labels are changed afterwards. A question that is not filled or selected will return null.

The questionId is case sensitive!

`visitreport.` offers more variables from the VisitReport.

`visitReport.result['questionId'].data` has the same behaviour as `_answers['questionId']`.  
`visitreport.result['questionId'].options['optionId']` allows to query a specific option. 

A full list of commands can be seen here: [VisitReport](./visitReport.md)

The **questions ids** can be copied from the mapping helper. Follow these steps:
1. Open the [VisitReport helper](https://vr-helper.snapaddy.com/)
2. Enter your **API Key** (can be found [here](https://app.snapaddy.com/settings/security)) and click Load
3. Select a VisitReport event
4. **Search for** your question and copy the **mappingId** and paste it in `_answers['id']`

## Checklist for field mapping

1. Is the field contained in the corresponding entity in fieldDefinitions (case-sensitive! It's best to always copy and paste complex names!)
2. Is the field creatable/updatable? 
3. Does the datatype match?
4. Make sure to not include commas "," in strings, since this character is used internally and this might cause unexpected errors