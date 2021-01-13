---
layout: post
title: "Variables: VisitReport"
date: 2018-07-09 14:21:18 +0200
permalink: variables-visitreport
published: false
---
This is a list of the available variables used in the VisitReport mapping.

| Variable                       | Behaviour                             |
|--------------------------------|---------------------------------------|
| `{% raw %}{{ _answers['QUESTIONID'] }}{% endraw %}` | The answer of the referenced question [(How to get IDs)](http://mapping.snapaddy.com/mappinghelper) |
| `{% raw %}{{ visitreport.title }}{% endraw %}` | The title of the template |
| `{% raw %}{{ created }}{% endraw %}` | Timestamp when the report was created. Form is like this: 2018-09-03T08:57:26.000Z |
| `{% raw %}{{ visitreport.campaignId }}{% endraw %}` | The campaign ID entered in the template settings |
| `{% raw %}{{ visitreport.result['QUESTIONID'].question }}{% endraw %}` | The title of the referenced question |
| `{% raw %}{{ visitreport.result['QUESTIONID'].data }}{% endraw %}` | The mapped value of the answer of the referenced question or the title of the answer if no value is mapped. Same behaviour as _answers['QUESTIONID'] |
| `{% raw %}{{ visitreport.result['QUESTIONID'].value }}{% endraw %}` | Values for each selected questionOption (;-delimited) |
| `{% raw %}{{ visitreport.result['QUESTIONID'].text}}{% endraw %}` | The label of the answer of the referenced question |
| `{% raw %}{{ visitreport.result['QUESTIONID'].options['OPTIONID'].title }}{% endraw %}` | Defined option label in current grabber / export language |
| `{% raw %}{{ visitreport.result['QUESTIONID'].options['OPTIONID'].text }}{% endraw %}` | User input for specific option or null if not selected/filled |
| `{% raw %}{{ visitreport.result['QUESTIONID'].options['OPTIONID'].data }}{% endraw %}` | User input / value if available, else value. Null if not selected/filled |
| `{% raw %}{{ visitreport.result['QUESTIONID'].options['OPTIONID'].value }}{% endraw %}` | Value of the option, null if not selected/filled |
