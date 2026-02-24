# Visit Report

The "**visitReport**"-section determines all export-settings regarding the snapAddy **VisitReport**. An empty visitReport looks like this (Notice the "*"):
```json
"visitReport": {
    "mappings": {
        "*": {}
    },
    "workflows": {
        "*": {}
    },
    "components": {
        "*": {}
    }
}
```

This is a list of the available variables used in the VisitReport mapping.
- QUESTIONID = questionMappingId
- OPTIONID = questionOptionMappingId

You can create multiple mappings for different templates by exchanging the "*", which is a variable for "**applies to all templates**", with the mappingId of the desired template.


## The mappingIds as well as the questionId can be found using the [Mapping Helper](https://vr-helper.snapaddy.com/)

::: v-pre
| Field name | Behaviour |
| ---------- | --------- |
| _answers['QUESTIONID'] | The answer of the referenced question |
| visitreport.title | The title of the visitreport |
| visitreport.campaignId | The campaign ID entered in the template settings |
| visitreport.customFields.KEY | The custom key value entered in the template settings |
| visitreport.result['QUESTIONID'].question | Question title in current DataQuality / export language |
| visitreport.result['QUESTIONID'].title | Defined option label in current DataQuality / export language |
| visitreport.result['QUESTIONID'].text | User input, in case of multiple input options (;-delimited) |
| visitreport.result['QUESTIONID'].data | Values set for each selected questionOption (only used in select + multiselect) or if no Value is set the User Input (;-delimited) |
| visitreport.result['QUESTIONID'].value | Values for each selected questionOption (;-delimited) |
| visitreport.result['QUESTIONID'].options['OPTIONID'] | More detailed information about the selected/answered options |
| visitreport.result['QUESTIONID'].options['OPTIONID'].title | Title of the question in current DataQuality/export language |
| visitreport.result['QUESTIONID'].options['OPTIONID'].text | null if not filled/selected else User input for specific option (useful for multiple input options) |
| visitreport.result['QUESTIONID'].options['OPTIONID'].data | null if not filled/selected else userinput or value or label |
| visitreport.result['QUESTIONID'].options['OPTIONID'].value | null if not filled/selected else questionoption.value |
| created | timestamp when the report was created in ISO format |
| createdBy | returns the e-mail address of the user who created the report |
| checked | true, if the report was checked, false if not |
| checkedAt | timestamp when the report was created in ISO format, null if not checked |
:::