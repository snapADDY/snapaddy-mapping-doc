# Code

The **code** branch allows to write simple code functions in JavaScript that can be executed in the mapping. This can be useful, when field values differ from the standard variables and functions. Just remember to put code in the accustomed brackets.

::: v-pre
The functions can be executed via `{{ execute(functionName) }}`
:::

Keep in mind, that:
- every function must return a value
- snapAddy variables can be used with the prefix `params`.
- `_answers['id']` can be used with the prefix `params`.

A code function could look like this:

```json
{
  "salutationFunction": [
    "if (params.gender === 0) { return 'Mr.'; }",
    "if (params.gender === 1) { return 'Mrs.'; }",
    "return null;"
  ]
}
```