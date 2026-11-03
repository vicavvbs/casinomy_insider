# Review module shape

Each file in this directory default-exports one review:

```js
{
  slug, name,
  lead,                 // opening paragraphs, replaces the old intro
  layout: [...],        // section ids in render order (varied per casino)
  sections: { id: { h2, html } },
  scoring: [ { label, score, why } ],   // one-sentence justification each
  weaknesses: [ { title, detail } ],    // minimum three, specific
  verdict: { suits, avoid, bottomLine },
}
```

Layouts deliberately differ between casinos so the set does not read as one
template applied fourteen times.
