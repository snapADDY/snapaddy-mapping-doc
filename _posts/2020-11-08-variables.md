---
layout: post
title:  "Section: variables"
date:   2020-11-09 12:00:00 +0200
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
      <td>Vorname</td>
      <td>FirstName</td>
      <td><code>{{ firstName }}</code></td>
    </tr>

    <tr>
      <td>Nachname</td>
      <td>Last name</td>
      <td><code>{{ lastName }}</code></td>
    </tr>

    <tr>
      <td>Firma</td>
      <td>Company</td>
      <td><code>{{ organization }}</code></td>
    </tr>

    <tr>
      <td>Anrede</td>
      <td>Salutation</td>
      <td><code>{{ gender }}</code>*</td>
    </tr>

    <tr>
      <td>Titel/Akademischer Grad</td>
      <td>Title/Academic Title</td>
      <td><code>{{ title }}</code></td>
    </tr>

    <tr>
      <td>Funktion</td>
      <td>Position</td>
      <td><code>{{ position }}</code></td>
    </tr>

    <tr>
      <td>Telefon</td>
      <td>Phone</td>
      <td><code>{{ phone }}</code></td>
    </tr>

    <tr>
      <td>Mobil</td>
      <td>Mobile</td>
      <td><code>{{ mobile }}</code></td>
    </tr>

    <tr>
      <td>Fax</td>
      <td>Fax</td>
      <td><code>{{ fax }}</code></td>
    </tr>

    <tr>
      <td>E-Mail</td>
      <td>E-Mail</td>
      <td><code>{{ email }}</code></td>
    </tr>

    <tr>
      <td>Website</td>
      <td>Website</td>
      <td><code>{{ website }}</code></td>
    </tr>

    <tr>
      <td>Straße + Nr.</td>
      <td>Street + Nr.</td>
      <td><code>{{ street }}</code></td>
    </tr>

    <tr>
      <td>Straße</td>
      <td>Street</td>
      <td><code>{{ parseStreet(street).street }}</code>*</td>
    </tr>

    <tr>
      <td>Hausnummer</td>
      <td>Housenumber</td>
      <td><code>{{ parseStreet(street).number }}</code>*</td>
    </tr>

    <tr>
      <td>Adresszusatz</td>
      <td>Address Line 2</td>
      <td><code>{{ street2 }}</code></td>
    </tr>

    <tr>
      <td>PLZ</td>
      <td>ZIP / Postalcode</td>
      <td><code>{{ zip }}</code></td>
    </tr>

    <tr>
      <td>PoBox</td>
      <td>PoBox</td>
      <td><code>{{ poBox }}</code></td>
    </tr>

    <tr>
      <td>Ort</td>
      <td>City</td>
      <td><code>{{ city }}</code></td>
    </tr>

    <tr>
      <td>Land</td>
      <td>Country</td>
      <td><code>{{ country }}</code>*</td>
    </tr>

    <tr>
      <td>Bundesland</td>
      <td>State</td>
      <td><code>{{ state }}</code>*</td>
    </tr>

    <tr>
      <td>USt-IdNr.</td>
      <td>Vat</td>
      <td><code>{{ vat }}</code></td>
    </tr>

    <tr>
      <td>Umsatz</td>
      <td>Revenue</td>
      <td><code>{{ revenue }}</code></td>
    </tr>

    <tr>
      <td>Branche</td>
      <td>Industry</td>
      <td><code>{{ industry }}</code>*</td>
    </tr>

    <tr>
      <td>Firmengröße</td>
      <td>Company Size</td>
      <td><code>{{ companySize }}</code></td>
    </tr>

    <tr>
      <td>Profil-Link (Xing)</td>
      <td>Profile link (Xing)</td>
      <td><code>{{ xing }}</code></td>
    </tr>

    <tr>
      <td>Profil-Link (LinkedIn)</td>
      <td>Profile link (LinkedIn)</td>
      <td><code>{{ linkedin }}</code></td>
    </tr>

    <tr>
      <td>Notiz</td>
      <td>Note</td>
      <td><code>{{ note }}</code></td>
    </tr>

    <tr>
      <td>Report ID</td>
      <td>Report ID</td>
      <td><code>{{ index }}</code></td>
    </tr>

    <tr>
      <td>Teilnehmer ID</td>
      <td>participant ID</td>
      <td><code>{{ childIndex }}</code></td>
    </tr>

  </tbody>
</table>

<b>parseStreet</b> is an internal function that can be used to split housenumber and street name.

<b>Special default fields</b>

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
      <td><code>{{ gender }}</code></td>
      <td>
        returns -1 when no gender could be determined<br>
        returns 0 when DataQuality determines the contact to be male<br>
        returns 1 when DataQuality determines the contact to be female
      </td>
    </tr>
    <tr>
      <td><code>{{ country }}</code></td>
      <td>DataQuality automatically determines the <a href="https://de.wikipedia.org/wiki/ISO-3166-1-Kodierliste">country ISO codes</a></td>
    </tr>
    <tr>
      <td><code>{{ state }}</code></td>
      <td>DataQuality automatically determines the <a href="https://www.iso.org/obp/ui/#iso:code:3166:DE">state ISO codes</a></td>
    </tr>
    <tr>
      <td><code>{{ industry }}</code></td>
      <td>DataQuality automatically determines <a href="https://developers.snapaddy.com/dataquality-rest-api/guides/industry-codes">industry codes</a></td>
    </tr>
    <tr>
      <td><code>{{ createdBy }}</code></td>
      <td>returns the e-mail address of the user signed in to DataQuality/creator of a VisitReport<br>e.g. "m.mustermann@snapaddy.com"</td>
    </tr>
    <tr>
      <td><code>{{ createdByName }}</code></td>
      <td>returns the full name of the user signed in to DataQuality/creator of a VisitReport<br>e.g. "Max Mustermann"</td>
    </tr>
    <tr>
      <td><code>{{ crmUserId }}</code></td>
      <td>returns the CRM user id of the user signed in to DataQuality/creator of a VisitReport<br>must be set in the user management settings</td>
    </tr>
    <tr>
      <td><code>{{ crmUsername }}</code></td>
      <td>returns the CRM user name of the user signed in to DataQuality/creator of a VisitReport<br>must be set in the user management settings
      </td>
    </tr>
  </tbody>
</table>

{% endraw %}

