---
layout: post
title: "Variables: VisitReport"
date: 2018-07-09 14:21:18 +0200
permalink: variables-visitreport
---
This is a list of the available variables used in the VisitReport mapping.

| Variable                       | Behaviour                             |
|--------------------------------|---------------------------------------|
| `{% raw %}{{ _answers['QUESTIONID'] }}{% endraw %}` | The answer of the referenced question [(How to get IDs)](http://mapping.snapaddy.com/mappinghelper) |
| `{% raw %}{{ visitreport.title }}{% endraw %}` | The title of the template |
| `{% raw %}{{ created }}{% endraw %}` | Timestamp when the report was created. Form is like this: 2018-09-03T08:57:26.000Z |
| `{% raw %}{{ visitreport.campaignId }}{% endraw %}` | The campaign ID entered in the template settings |
| `{% raw %}{{ visitreport.result['ID'].question }}{% endraw %}` | The title of the referenced question |
| `{% raw %}{{ visitreport.result['ID'].data }}{% endraw %}` | The mapped value of the answer of the referenced question or the title of the answer if no value is mapped. Same behaviour as {% raw %}_answers['QUESTIONID']{% endraw %} |
| `{% raw %}{{ visitreport.result['ID'].text}}{% endraw %}` | The title of the answer of the referenced question |
| `{% raw %}{{ visitreport.result['ID'].options['ID'].title }}{% endraw %}` | Defined option label in current grabber / export language |
| `{% raw %}{{ visitreport.result['ID'].options['ID'].text }}{% endraw %}` | User input for specific option or null if not selected/filled |
| `{% raw %}{{ visitreport.result['ID'].options['ID'].data }}{% endraw %}` | User input / value if available, else value. Null if not selected/filled |
| `{% raw %}{{ visitreport.result['ID'].options['ID'].value }}{% endraw %}` | Value of the option, null if not selected/filled |
