---
layout: post
title:  "General"
date:   2018-07-20 14:21:18 +0200
permalink: general
---

###snapADDY Grabber & VisitReport CRM Mapping Documentation
To use snapADDY Grabber & VisitReport in connection to your CRM system in the most convinient way a CRM mapping has to be done in the most cases.
The CRM mapping consists of one .json file which determines the following settings:
- "meta": Information about how your entities are named
- "code": Contains JavaScript functions that can be called up in "mappings"
- "defaultExport": snapADDY Grabber mapping
- "visitreport": snapADDY Visitreport mapping
Inside defaultExport and visitreport there are 3 more blocks:
- "mappings": Determines the mapping between the fields available in snapADDY Grabber/VisitReport and the fields in your CRM system
- "workflows": Sets up the entities which are created at the export to your CRM system
- "components": Configures the appearance of the Export 2.0 view. 