# absolutely-nothing

> The most reliable way to do absolutely nothing.

[![npm version](https://img.shields.io/npm/v/absolutely-nothing.svg)](https://www.npmjs.com/package/absolutely-nothing)
[![npm downloads](https://img.shields.io/npm/dm/absolutely-nothing.svg)](https://www.npmjs.com/package/absolutely-nothing)
[![license](https://img.shields.io/npm/l/absolutely-nothing.svg)](LICENSE)
[![dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](package.json)
[![bundle size](https://img.shields.io/badge/minzipped-0%20bytes-blue.svg)](https://bundlephobia.com/package/absolutely-nothing)
[![test coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)](#tests)

**Zero dependencies. Zero configuration. Zero results.**

---

## Installation

```bash
npm install absolutely-nothing
```

```bash
yarn add absolutely-nothing
```

```bash
pnpm add absolutely-nothing
```

> Already installed? Nothing has changed.

---

## Quick Start

```js
import absolutelyNothing from 'absolutely-nothing';

absolutelyNothing();
```

That's it. You're done. Nothing happened. Congratulations.

---

## Usage

### ESM

```js
import absolutelyNothing, {
  doNothing,
  solveAllProblems,
  awaitNothing,
  improvePerformance,
} from 'absolutely-nothing';

absolutelyNothing();
doNothing();
solveAllProblems();

await awaitNothing();

improvePerformance(); // you won't notice, but it ran
```

### CommonJS

```js
const nothing = require('absolutely-nothing');

nothing();
```

### TypeScript

```ts
import absolutelyNothing, { getNothing } from 'absolutely-nothing';

absolutelyNothing();

const result: undefined = getNothing();
```

All exports are fully typed. Your `undefined` is guaranteed.

---

## API Reference

Every function in `absolutely-nothing` is documented below. All functions:
- Accept any arguments (and ignore them)
- Perform no side effects
- Do not throw
- Return `undefined`, unless otherwise specified

---

### `absolutelyNothing()`
Does absolutely nothing.

```js
absolutelyNothing(); // → undefined
```

---

### `doNothing()`
Does nothing. Semantically equivalent to `absolutelyNothing()`, but with a clearer name for teams that value explicit intent.

---

### `makeNothing()`
Makes nothing. Unlike most factory functions, this one delivers on its promise.

---

### `createVoid()`
Creates a void. Not to be confused with the TypeScript `void` type, which this also returns.

---

### `noop()`
The classic. If you know, you know.

---

### `empty()`
Returns nothing. Is nothing. Achieves nothing.

---

### `getNothing()`
**Returns:** `undefined`

The only getter in this library. Gets nothing, type-safely.

```js
const x = getNothing(); // undefined
```

---

### `stillNothing()`
Still does nothing. Useful for reassurance.

---

### `awaitNothing()`
**Returns:** `Promise<undefined>`

Async nothing. For applications that need to do nothing asynchronously, which is the same as doing nothing synchronously, but with more `await`.

```js
await awaitNothing(); // resolves immediately to undefined
```

---

### `fixYourCode()`
Does not fix your code. However, it does provide a moment of false hope, which may be enough to get you through code review.

---

### `improvePerformance()`
Does not improve performance. Does not worsen it either. A net-zero operation in every measurable dimension.

---

### `solveAllProblems()`
Solves all problems. Results are undefined. Literally.

---

### `enterpriseNothing()`
Functionally identical to `noop()`. Suitable for inclusion in statements of work, architecture diagrams, and quarterly business reviews.

---

### `productionReadyNothing()`
Zero known bugs. Zero known features. Deployed to production at companies that have better things to worry about.

---

### `scaleNothing()`
Scales nothing. Horizontally, vertically, or not at all — you decide. Infrastructure cost unchanged.

---

## Why This Library Exists

You've heard of libraries that do too much.  
You've heard of libraries with too many dependencies.  
You've heard of libraries that break between minor versions.

`absolutely-nothing` does none of those things.

It does none of anything.

This is a library you can add to your project with complete confidence that it will never break, never introduce a CVE, never cause a type error, never add milliseconds to your cold start, and never require you to read a migration guide.

**Safer than doing something.**

---

## Use Cases

**Preventing accidental productivity**
```js
// Before: accidentally fixed a bug
fixBug();

// After: preserved the status quo
fixYourCode(); // does nothing. balance maintained.
```

**Handling impossible requirements safely**
```js
// PM: "Can you make this load instantly AND be fully offline AND sync in real-time?"
solveAllProblems(); // requirement acknowledged. nothing done.
```

**Returning the exact amount of effort requested**
```js
// Ticket: "Investigate and see if anything needs to be done"
doNothing(); // investigation complete.
```

**Async workflows that go nowhere**
```js
async function onboardNewUser(user) {
  await validateUser(user);
  await awaitNothing(); // awaited. nothing happened. pipeline intact.
  await sendWelcomeEmail(user);
}
```

**Enterprise architecture**
```js
class NothingServiceImpl extends AbstractNothingBase {
  async execute(context) {
    return enterpriseNothing(); // billable. compliant. done.
  }
}
```

---

## Performance

`absolutely-nothing` is one of the fastest libraries ever benchmarked.

| Operation          | Time     | Memory |
|--------------------|----------|--------|
| `absolutelyNothing()` | ~0ms  | 0 bytes |
| `doNothing()`      | ~0ms     | 0 bytes |
| `awaitNothing()`   | ~0ms     | 0 bytes |
| `solveAllProblems()` | ~0ms   | 0 bytes |

*Benchmarked on a MacBook Pro. Results consistent across all hardware, all clouds, all time zones.*

---

## Comparison

| Library | Does Nothing | Zero Dependencies | TypeScript | Async Nothing | Bundle Size |
|---|---|---|---|---|---|
| `absolutely-nothing` | ✅ | ✅ | ✅ | ✅ | 0 bytes |
| Your custom `noop.js` | ✅ | ✅ | ❌ | ❌ | ~12 bytes |
| Most npm packages | ❌ | ❌ | sometimes | depends | too many |
| `is-odd` | ❌ | ✅ | ❌ | ❌ | not nothing |

---

## FAQ

**Q: Does this do anything?**  
No.

**Q: What does `solveAllProblems()` actually do?**  
Nothing.

**Q: Is this production-ready?**  
It has been running in production since `1.0.0` without a single incident, bug report, performance regression, or observable behavior of any kind.

**Q: Can I use this with React?**  
Yes. It integrates seamlessly into any React application and will have no effect on rendering, state, or lifecycle.

**Q: Does `improvePerformance()` actually improve performance?**  
No. But it doesn't hurt, either. That's more than we can say for most things you add to your project.

**Q: Why is the bundle size 0 bytes?**  
Because it does nothing.

**Q: Should I use `noop` or `doNothing` or `absolutelyNothing`?**  
All three are identical. Pick whichever one best communicates your intent to the next developer who reads your code. The result will be the same.

**Q: I found a bug.**  
You didn't.

**Q: I'm getting `undefined` back from `getNothing()`.**  
Yes. That's correct. That's the feature.

**Q: Can this library cause side effects?**  
No. We checked.

**Q: Is there a v2?**  
Planned. Will do nothing differently.

---

## Contributing

Contributions are welcome, as long as they don't cause this library to do anything.

1. Fork the repository
2. Create your feature branch: `git checkout -b feat/do-nothing-differently`
3. Ensure your changes introduce no behavior
4. Submit a pull request

Pull requests that accidentally add functionality will be rejected.

---

## License

[MIT](LICENSE) — free to use for absolutely nothing.

---

*"The only npm package I've never had to update."*
