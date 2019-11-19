# prettier-plugin-prettierx-typescript

Use TypeScript parser with enhanced estree printer from `prettierx`,
all in a Prettier plugin.

With options from `prettierx` to support much closer parity with "standard",
for example:

```typescript
function identity<T> (value: T): T {
  return value
}

interface Foo<T> {
  getter(value: T): T
}

class Example<T> implements Foo<T> {
  value: T

  getter (value: T): T {
    return this.value
  }

  set setter (value: T) {
    this.value = value
  }
}

console.log(typeof identity)
console.log(typeof Example)
```

with the following config:

```json
{
  yieldStarSpacing: true,
  generatorStarSpacing: true,
  spaceBeforeFunctionParen: true,
  singleQuote: true,
  semi: false
}
```

## Sample usage

```
prettier --config ./correct-typescript-sample-prettierx-prettierrc --plugin=. --parser=prettierx-typescript --check correct-typescript-sample.ts
```

## Thanks and credits

- based on: https://github.com/brodybits/prettier-plugin-prettierx-babel
- Thanks to https://github.com/prettier/plugin-php for an easy-to-understand Prettier plugin,
  which helped scaffold this Prettier plugin.
