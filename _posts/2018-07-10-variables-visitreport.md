---
layout: post
title: "Variables: VisitReport"
date: 2018-07-09 14:21:18 +0200
permalink: variables-visitreport
---
This is a list of the available variables used in the VisitReport mapping.

| Variable                                                                        | Behaviour                                                                                                                          |
|---------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| _answers['QUESTIONID']                                                          | The answer of the referenced question, ';'-delimited if multiple options were available               [(How to get IDs)](http://mapping.snapaddy.com/mappinghelper)                             |
| visitreport.result['QUESTIONID']                                                | Object containing more detailed information about questions + answers                                                              |
| visitreport.result['QUESTIONID'].questionvisitreport.result['QUESTIONID'].title | Question title in current grabber / export language                                                                                |
| visitreport.result['QUESTIONID'].text                                           | User input, in case of multiple input options (;-delimited)                                                                        |
| visitreport.result['QUESTIONID'].data                                           | Values set for each selected questionOption (only used in select + multiselect) or if no Value is set the User Input (;-delimited) |
| visitreport.result['QUESTIONID'].value                                          | Values for each selected questionOption (;-delimited)                                                                              |
| visitreport.result['QUESTIONID'].options['OPTIONID']                            | More detailed information about the selected/answered options                                                                      |
| visitreport.result['QUESTIONID'].options['OPTIONID'].title                      | Defined option label in current grabber / export language                                                                          |
| visitreport.result['QUESTIONID'].options['OPTIONID'].text                       | null if not filled / selected else User input for specific option (useful for multiple input options)                              |
| visitreport.result['QUESTIONID'].options['OPTIONID'].data                       | null if not filled / selected else userinput || value || label                                                                     |
| visitreport.result['QUESTIONID'].options['OPTIONID'].value                      | null if not filled/selected else questionoption.value                                                                              |

