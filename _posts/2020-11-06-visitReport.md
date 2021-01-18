---
layout: post
title:  "Section: visitReport"
date:   2020-11-06 09:47:21 +0200
permalink: visitReport
---

The "<b>visitReport</b>"-section determines all export-settings regarding the <b>snapADDY VisitReport</b>. 
An empty visitReport looks like this (Notice the "*"):

{% highlight javascript %}{% raw %}
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
{% endraw %}{% endhighlight %}

This is a list of the available variables used in the VisitReport mapping.
- QUESTIONID = questionMappingId
- OPTIONID = questionOptionMappingId

You can create multiple mappings for different templates by exchanging the "*", which is a variable for "applies to all templates", with the MappingId of the desired template

The MappingIDs, aswell as the QuestionId can be found using the <a href="https://github.com/snapADDY/snapaddy-mapping-doc/raw/master/files/MappingHelper.zip">Mapping Helper</a>









<table>
<colgroup>
<col style="min-width: 150px;" />
<col style="min-width: 150px;" />
</colgroup>
<tr class="header">
<th>Variable</th>
<th>Behaviour</th>
</tr>

<tbody>
<tr>
<td style="vertical-align: initial; vertical-align: initial;">
_answers['QUESTIONID']
</td>
<td style="vertical-align: initial; vertical-align: initial;">
The answer of the referenced
</td>
</tr>

<tr>
<td style="vertical-align: initial; vertical-align: initial;">
visitreport.result['QUESTIONID']
</td>
<td style="vertical-align: initial; vertical-align: initial;">
Object containing more detailed information about questions + answers
</td>
</tr>

<tr>
<td style="vertical-align: initial; vertical-align: initial;">
visitreport.campaignId
</td>
<td style="vertical-align: initial; vertical-align: initial;">
The campaign ID entered in the template settings
</td>
</tr>

<tr>
<td style="vertical-align: initial; vertical-align: initial;">
visitreport.result['QUESTIONID'].question
</td>
<td style="vertical-align: initial; vertical-align: initial;">
Question title in current grabber / export language
</td>
</tr>

<tr>
<td style="vertical-align: initial; vertical-align: initial;">
visitreport.result['QUESTIONID'].title
</td>
<td style="vertical-align: initial; vertical-align: initial;">
Defined option label in current grabber / export language
</td>
</tr>

<tr>
<td style="vertical-align: initial; vertical-align: initial;">
visitreport.result['QUESTIONID'].text
</td>
<td style="vertical-align: initial; vertical-align: initial;">
User input, in case of multiple input options (;-delimited)
</td>
</tr>

<tr>
<td style="vertical-align: initial; vertical-align: initial;">
visitreport.result['QUESTIONID'].data
</td>
<td style="vertical-align: initial; vertical-align: initial;">
Values set for each selected questionOption (only used in select + multiselect) or if no Value is set the User Input (;-delimited)
</td>
</tr>

<tr>
<td style="vertical-align: initial; vertical-align: initial;">
visitreport.result['QUESTIONID'].value
</td>
<td style="vertical-align: initial; vertical-align: initial;">
Values for each selected questionOption (;-delimited)
</td>
</tr>

<tr>
<td style="vertical-align: initial; vertical-align: initial;">
visitreport.result['QUESTIONID'].options['OPTIONID']
</td>
<td style="vertical-align: initial; vertical-align: initial;">
More detailed information about the selected/answered options
</td>
</tr>

<tr>
<td style="vertical-align: initial; vertical-align: initial;">
visitreport.result['QUESTIONID'].options['OPTIONID'].title
</td>
<td style="vertical-align: initial; vertical-align: initial;">
Defined option label in current grabber/export language
</td>
</tr>

<tr>
<td style="vertical-align: initial; vertical-align: initial;">
visitreport.result['QUESTIONID'].options['OPTIONID'].text
</td>
<td style="vertical-align: initial; vertical-align: initial;">
null if not filled/selected else User input for specific option (useful for multiple input options)
</td>
</tr>

<tr>
<td style="vertical-align: initial; vertical-align: initial;">
visitreport.result['QUESTIONID'].options['OPTIONID'].data
</td>
<td style="vertical-align: initial; vertical-align: initial;">
null if not filled/selected else userinput or value or label
</td>
</tr>

<tr>
<td style="vertical-align: initial; vertical-align: initial;">
visitreport.result['QUESTIONID'].options['OPTIONID'].value
</td>
<td style="vertical-align: initial; vertical-align: initial;">
null if not filled/selected else questionoption.value
</td>
</tr>

</tbody>
</table>



