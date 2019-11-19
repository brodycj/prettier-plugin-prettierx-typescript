# prettier-plugin-prettierx-typescript

Use TypeScript parser with enhanced estree printer from `prettierx`,
all in a Prettier plugin.

With options from `prettierx` to support much closer parity with "standard",
for example:

```js
function * a () {}
```

with the following config:

```json
{
  generatorStarSpacing: true,
  spaceBeforeFunctionParen: true
}
```

## Sample usage

```
prettier --config ./sample-prettierx-prettierrc --plugin=. --parser=prettierx-typescript --check sample.js
```

## Thanks and credits

- based on: https://github.com/brodybits/prettier-plugin-prettierx-babel
- Thanks to https://github.com/prettier/plugin-php for an easy-to-understand Prettier plugin,
  which helped scaffold this Prettier plugin.
