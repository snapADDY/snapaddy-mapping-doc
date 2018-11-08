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
| Vorname                	| First name              	| {% raw %}{{firstName}}{% endraw %}         	|
| Nachname               	| Last name               	| {% raw %}{{lastName}}{% endraw %}            	|
| Firma               	    | Company             	    | {% raw %}{{organization}}{% endraw %}         |
| Anrede                 	| Salutation              	| {% raw %}{{gender}}{% endraw %} *            	|
| Titel                  	| Title                   	| {% raw %}{{title}}{% endraw %}               	|
| Funktion               	| Position                	| {% raw %}{{position}}{% endraw %}            	|
| Telefon                	| Phone                   	| {% raw %}{{phone}}{% endraw %}               	|
| Mobil                  	| Mobile                  	| {% raw %}{{mobile}}{% endraw %}              	|
| Fax                    	| Fax                     	| {% raw %}{{fax}}{% endraw %}                 	|
| E-Mail                 	| E-Mail                  	| {% raw %}{{email}}{% endraw %}               	|
| Website                	| Website                 	| {% raw %}{{website}}{% endraw %}             	|
| Straße                 	| Street                  	| {% raw %}{{street}}{% endraw %}              	|
| Adresszusatz           	| Address Line 2          	| {% raw %}{{street2}}{% endraw %}             	|
| PLZ                    	| ZIP / Postalcode        	| {% raw %}{{zip}}{% endraw %}                 	|
| Ort                    	| City                    	| {% raw %}{{city}}{% endraw %}                	|
| Land                   	| Country                 	| {% raw %}{{country}}{% endraw %} *           	|
| Bundesland             	| State                   	| {% raw %}{{state}}{% endraw %} *             	|
| USt-IdNr.              	| Vat                     	| {% raw %}{{vat}}{% endraw %}                 	|
| Branche                	| Industry                	| {% raw %}{{industry}}{% endraw %}            	|
| Firmengröße            	| Company Size            	| {% raw %}{{companySize}}{% endraw %}         	|
| Umsatz                 	| Revenue                 	| {% raw %}{{revenue}}{% endraw %}             	|
| Profil-Link (Xing)     	| Profile-Link (Xing)     	| {% raw %}{{social.xing.url}}{% endraw %}     	|
| Profil-Link (LinkedIn) 	| Profile-Link (LinkedIn) 	| {% raw %}{{social.linkedin.url}}{% endraw %} 	|
| Notiz                  	| Note                    	| {% raw %}{{note}}{% endraw %}                	|
| nicht sichtbar         	| not visible             	| {% raw %}{{createdBy}}{% endraw %} *         	|
| nicht sichtbar         	| not visible             	| {% raw %}{{createdByName}}{% endraw %} *     	|

### Special default fields

| Field name        	| Behaviour                                 																															  	|
|-------------------|-------------------------------------------------------------------------------																								|
| {% raw %}{{gender}}{% endraw %}        	| depends on the salutation-field in the grabberreturns -1 when nothing is selectedreturns 0 when male salutation is selected (DE: "Herr"; EN: "Mr.")returns 1 when female salutation is selected (DE: "Frau"; EN: "Ms.") 	|
| {% raw %}{{country}}{% endraw %}       	| the Grabber automatically grabs the Country ISO Codes (ISO-3166-1-Kodierliste – Wikipedia)e.g.: "DE" is grabbed for german addresses                 	|
| {% raw %}{{state}}{% endraw %}         	| the Grabber automatically grabs the State ISO Codes (ISO 3166-2:DE - Wikipedia)e.g.: "BY" is grabbed for bavarian addresses                           |
| {% raw %}{{createdBy}}{% endraw %}     	| returns the e-mail address of the user signed in to the grabbere.g. "r.hahn@snapaddy.com"                                                          	|
| {% raw %}{{createdByName}}{% endraw %} 	| return the first and last name of the user signed in to the grabbere.g. "Rico Hahn"                                                                   |

### Special variables by CRM

### Pipedrive

| Label Grabber DE                             | Label Grabber EN                          | Variable for Mapping |
|----------------------------------------------|-------------------------------------------|----------------------|
| Name (nur im Geschäft Export-View)           | Name (only in Deal Export View)           | {% raw %}{{organization}}{% endraw %}     |
| Wert (nur im Geschäft Export-View)           | Value (only in Deal Export View)          | {% raw %}{{deal_value}}{% endraw %}       |
| Währung (nur im Geschäft Export-View)        | Currency (only in Deal Export View)       | {% raw %}{{deal_currency}}{% endraw %}    |
| Pipeline-Phase (nur im Geschäft Export-View) | Pipeline-Phase (only in Deal Export View) | {% raw %}{{deal_stage}}{% endraw %}       |

### Salesforce

| Label Grabber DE                                  | Label Grabber EN                                   | Variable for Mapping          |
|---------------------------------------------------|----------------------------------------------------|-------------------------------|
| Status (nur im Lead Export-View)                  | Status (only in Lead Export View)                  | {% raw %}{{selectedLeadStatus}}{% endraw %}        |
| Lead-Quelle (nur im Lead Export-View)             | Lead-Quelle (only in Lead Export View)             | {% raw %}{{selectedLeadSource}}{% endraw %}        |
| Datensatztyp-Lead (nur im Lead Export-View)       | Datensatztyp-Lead (only in Lead Export View)       | {% raw %}{{selectedLeadRecordType}}{% endraw %}    |
| Datensatztyp-Kontakt (nur im Kontakt Export-View) | Datensatztyp-Contact (only in Contact Export View) | {% raw %}{{selectedContactRecordType}}{% endraw %} |
| Datensatztyp-Account (nur im Account Export-View) | Datensatztyp-Account (only in Account Export View) | {% raw %}{{selectedAccountRecordType}}{% endraw %} |

### Dynamics

| Label Grabber DE                 | Label Grabber EN                 | Variable for Mapping     |
|----------------------------------|----------------------------------|--------------------------|
| Thema (nur im Lead Export-View ) | Topic (only in Lead Export View) | {% raw %}{{organization}}{% endraw %}         |
