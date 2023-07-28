---
layout: post
title:  "Section: debugging"
date:   2020-11-13 09:47:27 +0200
permalink: debugging
---

Debugging is very important step in the mapping process. The snapADDY DataQuality has a powerful debug console, that can be opened by pressing [F12] in the DataQuality window. This opens a new DevTool debug console window. Make sure that "Console" is selected in the top row. This will give you useful information about what DataQuality is doing.
 
You can see what will be exported to the CRM by looking at the "<b>EntityMapping</b>" logs. This log will appear as soon as the merge view is opened. Every entity in the mappings should appear in the Console. Expand the log to see what the mapping for the entity returned (<b>Mapping(entity) returned</b>). 

See screenshot below:

![Console log screenshot](assets/debugging.png)