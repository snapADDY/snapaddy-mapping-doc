---
layout: post
title:  "Section: variables"
date:   2020-11-09 09:47:22 +0200
permalink: variables
---


snapADDY provides a set of pre-defined <b>variables</b> which allow you to make mappings more flexible. Mapping variables represent standard recurring values, such as first name or email address, that you can map to the corresponding fields in your CRM system


{% raw %}



<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tr class="header">
<th>German</th>
<th>English</th>
<th>apiName</th>
</tr>

<tbody>

<tr>
<td style="max-width: 100px;">
  Vorname
</td>
<td style="max-width: 100px;">
  FirstName
</td>
<td style="max-width: 100px;">
  {{ firstName }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Nachname
</td>
<td style="max-width: 100px;">
  Last name
</td>
<td style="max-width: 100px;">
  {{ lastName }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Firma
</td>
<td style="max-width: 100px;">
  Company
</td>
<td style="max-width: 100px;">
  {{ organization }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Anrede
</td>
<td style="max-width: 100px;">
  Salutation
</td>
<td style="max-width: 100px;">
  {{ gender }}*
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Titel/Akademischer Grad
</td>
<td style="max-width: 100px;">
  Title/Academic Title
</td>
<td style="max-width: 100px;">
  {{ title }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Funktion
</td>
<td style="max-width: 100px;">
  Position
</td>
<td style="max-width: 100px;">
  {{ position }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Telefon
</td>
<td style="max-width: 100px;">
  Phone
</td>
<td style="max-width: 100px;">
  {{ phone }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Mobil
</td>
<td style="max-width: 100px;">
  Mobile
</td>
<td style="max-width: 100px;">
  {{ mobile }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Fax
</td>
<td style="max-width: 100px;">
  Fax
</td>
<td style="max-width: 100px;">
  {{ fax }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  E-Mail
</td>
<td style="max-width: 100px;">
  E-Mail
</td>

<td style="max-width: 100px;">
  {{ email }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Website
</td>
<td style="max-width: 100px;">
  Website
</td>
<td style="max-width: 100px;">
  {{ website }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Straße + Nr.
</td>
<td style="max-width: 100px;">
  Street + Nr.
</td>
<td style="max-width: 100px;">
  {{ street }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Straße
</td>
<td style="max-width: 100px;">
  Street
</td>
<td style="max-width: 100px;">
  {{ parseStreet(street).street }}*
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Hausnummer
</td>
<td style="max-width: 100px;">
  Housenumber
</td>
<td style="max-width: 100px;">
 {{ parseStreet(street).number }}*
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Adresszusatz
</td>
<td style="max-width: 100px;">
  Address Line 2
</td>
<td style="max-width: 100px;">
  {{ street2 }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  PLZ
</td>
<td style="max-width: 100px;">
  ZIP / Postalcode
</td>
<td style="max-width: 100px;">
  {{ zip }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  PoBox
</td>
<td style="max-width: 100px;">
  PoBox
</td>
<td style="max-width: 100px;">
  {{ poBox }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Ort
</td>
<td style="max-width: 100px;">
  City
</td>
<td style="max-width: 100px;">
  {{ city }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Land
</td>
<td style="max-width: 100px;">
  Country
</td>
<td style="max-width: 100px;">
  {{ country }}*
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Bundesland
</td>
<td style="max-width: 100px;">
  State
</td>
<td style="max-width: 100px;">
  {{ state }}*
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  USt-IdNr.
</td>
<td style="max-width: 100px;">
  Vat
</td>
<td style="max-width: 100px;">
  {{ vat }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Umsatz
</td>
<td style="max-width: 100px;">
  Revenue
</td>
<td style="max-width: 100px;">
  {{ revenue }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Branche
</td>
<td style="max-width: 100px;">
  Industry
</td>
<td style="max-width: 100px;">
  {{ industry }}* 
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Firmengröße
</td>
<td style="max-width: 100px;">
  Company Size
</td>
<td style="max-width: 100px;">
  {{ companySize }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Profil-Link (Xing)
</td>
<td style="max-width: 100px;">
  Profil-Link (Xing)
</td>
<td style="max-width: 100px;">
  {{ xing }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Profil-Link (LinkedIn)
</td>
<td style="max-width: 100px;">
  Profil-Link (LinkedIn)
</td>
<td style="max-width: 100px;">
  {{ linkedin }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Notiz
</td>
<td style="max-width: 100px;">
  Note
</td>
<td style="max-width: 100px;">
  {{ note }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Report ID
</td>
<td style="max-width: 100px;">
  Report ID
</td>
<td style="max-width: 100px;">
  {{ index }}
</td>
</tr>

<tr>
<td style="max-width: 100px;">
  Report ID Teilnehmer
</td>
<td style="max-width: 100px;">
  Report ID participant
</td>
<td style="max-width: 100px;">
  {{ childIndex }}
</td>
</tr>

</tbody>
<table>



Special default fields

<table>
<colgroup>
<col width="25%" />
<col width="75%" />
</colgroup>
<tr class="header">
<th>Field name</th>
<th>Behaviour</th>
</tr>

<tbody>
<tr>
<td style="max-width: 100px;padding-bottom: 0px;">
  {{ gender }}
</td>
<td style="max-width: 100px;padding-bottom: 0px;">
  returns -1 when no gender could be determined<br>
  returns 0 when DataQuality determines the contact to be male<br>
  returns 1 when DataQuality determines the contact to be female
</td>
</tr>

<tr>
<td style="max-width: 100px;padding-bottom: 0px;">
  {{ country }}
</td>
<td style="max-width: 100px;padding-bottom: 0px;">
  DataQuality automatically determines the 
  <a href="https://de.wikipedia.org/wiki/ISO-3166-1-Kodierliste">country ISO codes</a>
</td>
</tr>

<tr>
<td style="max-width: 100px;padding-bottom: 0px;">
  {{ state }}
</td>
<td style="max-width: 100px;padding-bottom: 0px;">
  DataQuality automatically determines the <a href="https://www.iso.org/obp/ui/#iso:code:3166:DE">state ISO codes</a>
</td>
</tr>

<tr>
<td style="max-width: 100px;padding-bottom: 0px;">
  {{ industry }}
</td>
<td style="max-width: 100px;padding-bottom: 0px;">
  DataQuality automatically determines <a href="https://developers.snapaddy.com/dataquality-rest-api/guides/industry-codes">industry codes</a>
</td>
</tr>

<tr>
<td style="max-width: 100px;padding-bottom: 0px;">
  {{ createdBy }}
</td>
<td style="max-width: 100px;padding-bottom: 0px;">
  returns the e-mail address of the user signed in to DataQuality/creator of a VisitReport<br>e.g. "m.mustermann@snapaddy.com"
</td>
</tr>

<tr>
<td style="max-width: 100px;padding-bottom: 0px;">
  {{ createdByName }}
</td>
<td style="max-width: 100px;padding-bottom: 0px;">
  returns the full name of the user signed in to DataQuality/creator of a VisitReport<br>e.g. "Max Mustermann"
</td>
</tr>

<tr>
<td style="max-width: 100px;padding-bottom: 0px;">
  {{ crmUserId }}
</td>
<td style="max-width: 100px;padding-bottom: 0px;">
  returns the CRM user id of the user signed in to DataQuality/creator of a VisitReport<br>must be set in the user management settings
</td>
</tr>

<tr>
<td style="max-width: 100px;padding-bottom: 0px;">
  {{ crmUsername }}
</td>
<td style="max-width: 100px;padding-bottom: 0px;">
  returns the CRM user name of the user signed in to DataQuality/creator of a VisitReport<br>must be set in the user management settings
</td>
</tr>


</tbody>
</table>

<b>parseStreet</b> is an internal function that can be used to differ between the housenumber and the street name. It parses the given information and returns an object with the two attributes street and number.



{% endraw %}