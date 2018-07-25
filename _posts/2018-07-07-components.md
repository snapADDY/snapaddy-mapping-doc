---
layout: post
title: "components"
date: 2018-07-07 14: 21: 18 +0200
permalink: components
---
The "components"-section determines the view of the export modal. You can hide fields, make them mandatory or set a maximum field length.
It is only necessary to add a configuration here if you want to make a change to the default setting.

General structure:
{% highlight json %}{% raw %}
          {
            "components": {
                "lead": [],
                "contact_account": []
            }
          }
{% endraw %}{% endhighlight %}

Example for lead with some custom configurations:
{% highlight json %}{% raw %}
    {
        "lead": [{
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
								"maxLength": 50
							}
						},
						"FullName": {
							"id": "FullName",
							"type": "input",
							"label": {
								"en": "Name",
								"de": "Name"
							},
							"properties": {
								"hidden": true
							}
						},
						"FirstName": {
							"id": "FirstName",
							"type": "input",
							"label": {
								"en": "First Name",
								"de": "Vorname"
							},
							"properties": {
								"required": true,
								"defaultValue": ""
							}
						},
						"LastName": {
							"id": "LastName",
							"type": "input",
							"label": {
								"en": "Last Name",
								"de": "Nachname"
							},
							"properties": {
								"required": true,
								"defaultValue": ""
							}
						},
						"Salutation": {
							"id": "Salutation",
							"type": "input",
							"label": {
								"en": "Salutation",
								"de": "Anrede"
							},
							"properties": {
								"required": false,
								"defaultValue": ""
							}
						},
						"JobTitle": {
							"id": "JobTitle",
							"type": "input",
							"label": {
								"en": "Job Title",
								"de": "Position"
							},
							"properties": {
								"required": false,
								"defaultValue": ""
							}
						},
						"CompanyName": {
							"id": "CompanyName",
							"type": "input",
							"label": {
								"en": "Company Name",
								"de": "Firma"
							},
							"properties": {
								"required": false,
								"defaultValue": ""
							}
						},
						"WebSiteUrl": {
							"id": "WebSiteUrl",
							"type": "input",
							"label": {
								"en": "Website",
								"de": "Website"
							},
							"properties": {
								"required": false,
								"defaultValue": ""
							}
						},
						"EMailAddress1": {
							"id": "EMailAddress1",
							"type": "input",
							"label": {
								"en": "E-Mail Address",
								"de": "E-Mail-Adresse"
							},
							"properties": {
								"required": false,
								"defaultValue": ""
							}
						},
						"Telephone1": {
							"id": "Telephone1",
							"type": "input",
							"label": {
								"en": "Phone",
								"de": "Telefon"
							},
							"properties": {
								"required": false,
								"defaultValue": ""
							}
						},
						"MobilePhone": {
							"id": "MobilePhone",
							"type": "input",
							"label": {
								"en": "Mobile",
								"de": "Mobil"
							},
							"properties": {
								"required": false,
								"defaultValue": ""
							}
						},
						"Fax": {
							"id": "Fax",
							"type": "input",
							"label": {
								"en": "Fax",
								"de": "Fax"
							},
							"properties": {
								"required": false,
								"defaultValue": ""
							}
						},
						"Address1_Line1": {
							"id": "Address1_Line1",
							"type": "input",
							"label": {
								"en": "Street",
								"de": "Straße"
							},
							"properties": {
								"required": false,
								"defaultValue": ""
							}
						},
						"Address1_City": {
							"id": "Address1_City",
							"type": "input",
							"label": {
								"en": "City",
								"de": "Stadt"
							},
							"properties": {
								"required": false,
								"defaultValue": ""
							}
						},
						"Address1_PostalCode": {
							"id": "Address1_PostalCode",
							"type": "input",
							"label": {
								"en": "Zip",
								"de": "PLZ"
							},
							"properties": {
								"required": false,
								"defaultValue": ""
							}
						},
						"Address1_Country": {
							"id": "Address1_Country",
							"type": "input",
							"label": {
								"en": "Country",
								"de": "Land"
							},
							"properties": {
								"required": false,
								"defaultValue": ""
							}
						},
						"Address1_StateOrProvince": {
							"id": "Address1_StateOrProvince",
							"type": "input",
							"label": {
								"en": "State",
								"de": "Bundesland"
							},
							"properties": {
								"required": false,
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
