# Variables

snapAddy provides a set of pre-defined **variables** which allow you to make mappings more flexible. Mapping variables represent standard recurring values, such as first name or email address, that you can map to the corresponding fields in your CRM system

::: v-pre
| German | English | apiName |
|--------|---------|---------|
| Vorname | FirstName | `{{ firstName }}` |
| Nachname | Last name | `{{ lastName }}` |
| Firma | Company | `{{ organization }}` |
| Anrede | Salutation | `{{ gender }}`* |
| Titel/Akademischer Grad | Title/Academic Title | `{{ title }}` |
| Funktion | Position | `{{ position }}` |
| Telefon | Phone | `{{ phone }}` |
| Mobil | Mobile | `{{ mobile }}` |
| Fax | Fax | `{{ fax }}` |
| E-Mail | E-Mail | `{{ email }}` |
| Website | Website | `{{ website }}` |
| Straße + Nr. | Street + Nr. | `{{ street }}` |
| Straße | Street | `{{ parseStreet(street).street }}`* |
| Hausnummer | Housenumber | `{{ parseStreet(street).number }}`* |
| Adresszusatz | Address Line 2 | `{{ street2 }}` |
| PLZ | ZIP / Postalcode | `{{ zip }}` |
| PoBox | PoBox | `{{ poBox }}` |
| Ort | City | `{{ city }}` |
| Land | Country | `{{ country }}`* |
| Bundesland | State | `{{ state }}`* |
| USt-IdNr. | Vat | `{{ vat }}` |
| Umsatz | Revenue | `{{ revenue }}` |
| Branche | Industry | `{{ industry }}`* |
| Firmengröße | Company Size | `{{ companySize }}` |
| Profil-Link (Xing) | Profile link (Xing) | `{{ xing }}` |
| Profil-Link (LinkedIn) | Profile link (LinkedIn) | `{{ linkedin }}` |
| Notiz | Note | `{{ note }}` |
| Report ID | Report ID | `{{ index }}` |
| Teilnehmer ID | participant ID | `{{ childIndex }}` |
:::

`parseStreet()` is an internal function that can be used to split housenumber and street name.

## Special default fields

::: v-pre
| Field name | Behaviour |
|------------|-----------|
| `{{ gender }}` | returns -1 when no gender could be determined<br/>returns 0 when DataQuality determines the contact to be male<br/>returns 1 when DataQuality determines the contact to be female |
| `{{ country }}` | DataQuality automatically determines the [country ISO codes](https://de.wikipedia.org/wiki/ISO-3166-1-Kodierliste) |
| `{{ state }}` | DataQuality automatically determines the [state ISO codes](https://www.iso.org/obp/ui/#iso:code:3166:DE) |
| `{{ industry }}` | DataQuality automatically determines [industry codes](https://developers.snapaddy.com/dataquality-rest-api/guides/industry-codes) |
| `{{ createdBy }}` | returns the e-mail address of the user signed in to DataQuality/creator of a VisitReport<br/>e.g. "m.mustermann@snapaddy.com" |
| `{{ createdByName }}` | returns the full name of the user signed in to DataQuality/creator of a VisitReport<br/>e.g. "Max Mustermann" |
| `{{ crmUserId }}` | returns the CRM user id of the user signed in to DataQuality/creator of a VisitReport<br/>must be set in the user management settings |
| `{{ crmUsername }}` | returns the CRM user name of the user signed in to DataQuality/creator of a VisitReport<br/>must be set in the user management settings |
:::