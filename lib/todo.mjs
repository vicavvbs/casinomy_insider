/* Placeholders for first-hand test data.
   Nothing here is invented: every figure the team has not actually measured
   renders as a visible TODO and is harvested into a checklist at build time. */

const registry = [];

export function TODO(slug, key, label, hint = '') {
  const id = `${slug}.${key}`;
  registry.push({ slug, key, id, label, hint });
  return `<mark class="todo" data-todo="${id}">TODO · ${label}</mark>`;
}

export const todoRegistry = () => registry.slice();
export const resetTodos = () => { registry.length = 0; };
