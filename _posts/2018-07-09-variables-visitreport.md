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
| `{% raw %}{{ visitreport.campaignId }}{% endraw %}` | The campaign ID entered in the template settings |
| `{% raw %}{{ visitreport.result['ID'].question }}{% endraw %}` | The title of the referenced question |
| `{% raw %}{{ visitreport.result['ID'].data }}{% endraw %}` | The mapped value of the answer of the referenced question or the title of the answer if no value is mapped |
| `{% raw %}{{ visitreport.result['ID'].text}}{% endraw %}` | The title of the answer of the referenced question |
