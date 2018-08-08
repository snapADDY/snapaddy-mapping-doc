---
layout: post
title: "Variables: Grabber"
date: 2018-07-08 14:21:18 +0200
permalink: variables-grabber
---
This is a list of the available fields in the Grabber and their corresponding variables for the mapping. This is very useful as there are special fields for the different CRMs. However, there are some default fields that are availabe for all CRMs. Fields that are marked with a star (*) have some special behaviour and are listed in a additional table below.

### Default fields


| Label Grabber DE       	| Label Grabber EN        	| Variable for Mapping    	|
|------------------------	|-------------------------	|-------------------------	|
| Vorname                	| First name              	| {% raw %}{{firstName}}{% endraw %}           	|
| Nachname               	| Last name               	| {{lastName}}            	|
| Anrede                 	| Salutation              	| {{gender}} *            	|
| Titel                  	| Title                   	| {{title}}               	|
| Funktion               	| Position                	| {{position}}            	|
| Telefon                	| Phone                   	| {{phone}}               	|
| Mobil                  	| Mobile                  	| {{mobile}}              	|
| Fax                    	| Fax                     	| {{fax}}                 	|
| E-Mail                 	| E-Mail                  	| {{email}}               	|
| Website                	| Website                 	| {{website}}             	|
| Straße                 	| Street                  	| {{street}}              	|
| Adresszusatz           	| Address Line 2          	| {{street2}}             	|
| PLZ                    	| ZIP / Postalcode        	| {{zip}}                 	|
| Ort                    	| City                    	| {{city}}                	|
| Land                   	| Country                 	| {{country}} *           	|
| Bundesland             	| State                   	| {{state}} *             	|
| USt-IdNr.              	| Vat                     	| {{vat}}                 	|
| Branche                	| Industry                	| {{industry}}            	|
| Firmengröße            	| Company Size            	| {{companySize}}         	|
| Umsatz                 	| Revenue                 	| {{revenue}}             	|
| Profil-Link (Xing)     	| Profile-Link (Xing)     	| {{social.xing.url}}     	|
| Profil-Link (LinkedIn) 	| Profile-Link (LinkedIn) 	| {{social.linkedin.url}} 	|
| Notiz                  	| Note                    	| {{note}}                	|
| nicht sichtbar         	| not visible             	| {{createdBy}} *         	|
| nicht sichtbar         	| not visible             	| {{createdByName}} *     	|

### Special default fields

| Field name        	| Behaviour                                                                                                                                                                                                               	|
|-------------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| {{gender}}        	| depends on the salutation-field in the grabberreturns -1 when nothing is selectedreturns 0 when male salutation is selected (DE: "Herr"; EN: "Mr.")returns 1 when female salutation is selected (DE: "Frau"; EN: "Ms.") 	|
| {{country}}       	| the Grabber automatically grabs the Country ISO Codes (ISO-3166-1-Kodierliste – Wikipedia)e.g.: "DE" is grabbed for german addresses                                                                                    	|
| {{state}}         	| the Grabber automatically grabs the State ISO Codes (ISO 3166-2:DE - Wikipedia)e.g.: "BY" is grabbed for bavarian addresses                                                                                             	|
| {{createdBy}}     	| returns the e-mail address of the user signed in to the grabbere.g. "r.hahn@snapaddy.com"                                                                                                                               	|
| {{createdByName}} 	| return the first and last name of the user signed in to the grabbere.g. "Rico Hahn"                                                                                                                                     	|
### Special variables by CRM

| Label Grabber DE                             | Label Grabber EN                          | Variable for Mapping |
|----------------------------------------------|-------------------------------------------|----------------------|
| Name (nur im Geschäft Export-View)           | Name (only in Deal Export View)           | {{deal_title}}       |
| Wert (nur im Geschäft Export-View)           | Value (only in Deal Export View)          | {{deal_value}}       |
| Währung (nur im Geschäft Export-View)        | Currency (only in Deal Export View)       | {{deal_currency}}    |
| Pipeline-Phase (nur im Geschäft Export-View) | Pipeline-Phase (only in Deal Export View) | {{deal_stage}}       |
| nicht sichtbar                               | not visible                               | {{org_id}} *         |
| nicht sichtbar                               | not visible                               | {{person_id}} *      |

| Field name    | Behaviour                                                                                               |
|---------------|---------------------------------------------------------------------------------------------------------|
| {{org_id}}    | returns the id of the created organization so the organization can be linked to the deal and the person |
| {{person_id}} | returns the id of the created person so the person can be linked to the deal                            |

### Salesforce

| Label Grabber DE                                  | Label Grabber EN                                   | Variable for Mapping          |
|---------------------------------------------------|----------------------------------------------------|-------------------------------|
| nicht sichtbar                                    | not visible                                        | {{accountId}} *               |
| Status (nur im Lead Export-View)                  | Status (only in Lead Export View)                  | {{selectedLeadStatus}}        |
| Lead-Quelle (nur im Lead Export-View)             | Lead-Quelle (only in Lead Export View)             | {{selectedLeadSource}}        |
| Datensatztyp-Lead (nur im Lead Export-View)       | Datensatztyp-Lead (only in Lead Export View)       | {{selectedLeadRecordType}}    |
| Datensatztyp-Kontakt (nur im Kontakt Export-View) | Datensatztyp-Contact (only in Contact Export View) | {{selectedContactRecordType}} |
| Datensatztyp-Account (nur im Account Export-View) | Datensatztyp-Account (only in Account Export View) | {{selectedAccountRecordType}} |

| Field name    | Behaviour                                                                                  |
|---------------|--------------------------------------------------------------------------------------------|
| {{accountId}} | returns the id of the created organization so the organization can be linked to the person |

### Dynamics

| Label Grabber DE                 | Label Grabber EN                 | Variable for Mapping     |
|----------------------------------|----------------------------------|--------------------------|
| nicht sichtbar                   | not visible                      | {{_account.AccountId}} * |
| Thema (nur im Lead Export-View ) | Topic (only in Lead Export View) | {{topic}}                |
