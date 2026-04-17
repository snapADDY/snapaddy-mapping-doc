# Basics

## snapAddy Mapping Characteristics

The mapping document is a single file written in JSON syntax. You can create, delete, and edit this mapping file in the [snapAddy dashboard](https://app.snapaddy.com/admin-change-settings/revisions).

Here are some important points to remember when working with the mapping document:

- JSON, as well as all snapAddy keywords, are case-sensitive.
- Using double quotes for strings is not allowed because they are part of the JSON syntax. Use single quotes instead.
- API keywords must not contain spaces. Use underscores (_) if needed.
- Maintaining a clean layout is highly recommended. Use the format button in the online configurator or switch to an external editor.
- After making changes to the mapping document, update, save, and activate the current revision for testing. Then, reload the DataQuality/VisitReport window to use the latest revision.

An empty snapAddy mapping document looks like this:

```json
{
  "$schema": "https://downloads.snapaddy.com/mapping/validation/validationSchema.json",
  "integrations": {}
}
```

This creates a valid JSON schema for the mapping. Next, select an integration under the `integrations` node. Some editors and IDEs also support autocompletion. A recommended editor for this purpose is [VSCode](https://code.visualstudio.com/).