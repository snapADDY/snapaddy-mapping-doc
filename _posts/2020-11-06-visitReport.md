---
layout: post
title:  "Section: visitReport"
date:   2020-11-06 12:00:00 +0200
permalink: visitReport
---

The "<b>visitReport</b>"-section determines all export-settings regarding the <b>snapADDY VisitReport</b>. 
An empty visitReport looks like this (Notice the "*"):

{% highlight json %}
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
{% endhighlight %}

This is a list of the available variables used in the VisitReport mapping.
- QUESTIONID = questionMappingId
- OPTIONID = questionOptionMappingId

You can create multiple mappings for different templates by exchanging the "*", which is a variable for "applies to all templates", with the mappingId of the desired template.

<h4>
  <b>The mappingIds as well as the questionId can be found using the <a href="https://vr-helper.snapaddy.com/" target="_blank">Mapping Helper</a>
  </b>
</h4>


<table>
  <colgroup>
    <col/>
    <col/>
  </colgroup>
  <tr class="header">
    <th>Variable</th>
    <th>Behaviour</th>
  </tr>

  <tbody>
    <tr>
      <td>_answers['QUESTIONID']</td>
      <td>The answer of the referenced</td>
    </tr>

    <tr>
      <td>visitreport.title</td>
      <td>The title of the visitreport</td>
    </tr>

    <tr>
      <td>visitreport.campaignId</td>
      <td>The campaign ID entered in the template settings</td>
    </tr>

    <tr>
      <td>visitreport.customFields.KEY</td>
      <td>The custom key value entered in the template settings</td>
    </tr>

    <tr>
      <td>visitreport.result['QUESTIONID'].question</td>
      <td>Question title in current DataQuality / export language</td>
    </tr>

    <tr>
      <td>visitreport.result['QUESTIONID'].title</td>
      <td>Defined option label in current DataQuality / export language</td>
    </tr>

    <tr>
      <td>visitreport.result['QUESTIONID'].text</td>
      <td>User input, in case of multiple input options (;-delimited)</td>
    </tr>

    <tr>
      <td>visitreport.result['QUESTIONID'].data</td>
      <td>Values set for each selected questionOption (only used in select + multiselect) or if no Value is set the User Input (;-delimited)</td>
    </tr>

    <tr>
      <td>visitreport.result['QUESTIONID'].value</td>
      <td>Values for each selected questionOption (;-delimited)</td>
    </tr>

    <tr>
      <td>visitreport.result['QUESTIONID'].options['OPTIONID']</td>
      <td>More detailed information about the selected/answered options</td>
    </tr>

    <tr>
      <td>visitreport.result['QUESTIONID'].options['OPTIONID'].title</td>
      <td>Title of the question in current DataQuality/export language</td>
    </tr>

    <tr>
      <td>visitreport.result['QUESTIONID'].options['OPTIONID'].text</td>
      <td>null if not filled/selected else User input for specific option (useful for multiple input options)</td>
    </tr>

    <tr>
      <td>visitreport.result['QUESTIONID'].options['OPTIONID'].data</td>
      <td>null if not filled/selected else userinput or value or label</td>
    </tr>

    <tr>
      <td>visitreport.result['QUESTIONID'].options['OPTIONID'].value</td>
      <td>null if not filled/selected else questionoption.value</td>
    </tr>

    <tr>
      <td>created</td>
      <td>timestamp when the report was created in ISO format</td>
    </tr>

    <tr>
      <td>checked</td>
      <td>true, if the report was checked, false if not</td>
    </tr>

    <tr>
      <td>checkedAt</td>
      <td>timestamp when the report was created in ISO format, null if not checked</td>
    </tr>

    <tr>
      <td">createdBy</td>
      <td">returns the e-mail address of the user who created the report</td>
    </tr>
  </tbody>
</table>
