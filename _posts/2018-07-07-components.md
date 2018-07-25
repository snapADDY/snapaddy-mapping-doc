---
layout: post
title: "Section: components"
date: 2018-07-06 14:21:18 +0200
permalink: components
---
The "components"-section determines the view of the export modal. You can hide fields, make them mandatory or set a maximum field length.
It is only necessary to add a configuration here if you want to make a change to the default setting.


{% highlight json %}{% raw %}
"lead":
{
 [
  {
					"type": "lead",
					"duplicateCheckName": "lead",
					"label": {
						"en": "Lead",
						"de": "Lead"
					},
					"fields": {
						"LeadId": {
							"id": "LeadId",
							"type": "input",
							"label": {
								"en": "Id",
								"de": ""
							},
							"properties": {
								"hidden": true,
								"identifier": true
							}
						},
						"Subject": {
							"id": "Subject",
							"type": "input",
							"label": {
								"en": "Topic",
								"de": "Thema"
							},
							"properties": {
								"required": true,
								"maxLength": 50,
              	"defaultValue": ""
							}
						}
					},
					"search": {
						"ids": [
							"FullName"
						]
					},
					"mainTemplate": "{{ FirstName }} {{ LastName }}",
					"detailsTemplate": "{{ CompanyName }}"
				}, {
					"type": "appointment",
					"duplicateCheckName": "appointment",
					"label": {
						"en": "Appointment",
						"de": "Appointment"
					},
					"fields": {
						"ActivityId": {
							"id": "ActivityId",
							"type": "input",
							"label": {
								"en": "Id",
								"de": ""
							},
							"properties": {
								"hidden": true,
								"identifier": true
							}
						},
						"Subject": {
							"id": "Subject",
							"type": "input",
							"label": {
								"en": "Subject",
								"de": "Betreff"
							},
							"properties": {
								"required": true
							}
						},
						"Location": {
							"id": "Location",
							"type": "input",
							"label": {
								"en": "Location",
								"de": "Ort"
							},
							"properties": {}
						},
						"ScheduledStart": {
							"id": "ScheduledStart",
							"type": "input",
							"label": {
								"en": "Scheduled start",
								"de": "Startdatum"
							}
						},
						"ScheduledEnd": {
							"id": "ScheduledEnd",
							"type": "input",
							"label": {
								"en": "Scheduled end",
								"de": "Fälligkeitsdatum"
							}
						},
						"RegardingObjectId": {
							"id": "RegardingObjectId",
							"type": "input",
							"label": {
								"en": "RegardingObjectId",
								"de": ""
							},
							"properties": {
								"hidden": true,
								"identifier": true
							}
						}
					},
					"search": {
						"ids": [
							"Subject"
						]
					},
					"components": [],
					"mainTemplate": "{{ Subject }}",
					"detailsTemplate": ""
				}, {
					"type": "task",
					"duplicateCheckName": "task",
					"label": {
						"en": "Task",
						"de": "Task"
					},
					"fields": {
						"ActivityId": {
							"id": "ActivityId",
							"type": "input",
							"label": {
								"en": "Id",
								"de": ""
							},
							"properties": {
								"hidden": true,
								"identifier": true
							}
						},
						"Subject": {
							"id": "Subject",
							"type": "input",
							"label": {
								"en": "Subject",
								"de": "Betreff"
							},
							"properties": {
								"required": true
							}
						},
						"Description": {
							"id": "Description",
							"type": "textArea",
							"label": {
								"en": "Description",
								"de": "Beschreibung"
							},
							"properties": {}
						},
						"ScheduledStart": {
							"id": "ScheduledStart",
							"type": "input",
							"label": {
								"en": "Scheduled start",
								"de": "Startdatum"
							}
						},
						"ScheduledEnd": {
							"id": "ScheduledEnd",
							"type": "input",
							"label": {
								"en": "Scheduled end",
								"de": "Fälligkeitsdatum"
							}
						},
						"RegardingObjectId": {
							"id": "RegardingObjectId",
							"type": "input",
							"label": {
								"en": "RegardingObjectId",
								"de": ""
							},
							"properties": {
								"hidden": true,
								"identifier": true
							}
						}
					},
					"search": {
						"ids": [
							"Subject"
						]
					},
					"components": [],
					"mainTemplate": "{{ Subject }}",
					"detailsTemplate": ""
				}
			]
    }
{% endraw %}{% endhighlight %}
