# Vite-react-ts-sass-tailwind
With all modules and configuration

https://vitejs.dev/guide/

└─ $ ▶ npm create vite@latest

> react

> typescript

## Sass

└─ $ ▶ npm install -D sass

(index.html)
```
<style lang="sass">
  @import url('./src/index.scss');
</style>
```

## Tailwind

- See the relative documentation of Tailwind (framework > vite).

---

# Testing

Ref:
https://www.eternaldev.com/blog/testing-a-react-application-with-vitest/
https://vitest.dev/guide/coverage.html

## Vitest

└─ $ ▶ npm install -D vitest

## Installing the testing dependecies

└─ $ ▶ npm i -D jsdom @testing-library/react

& add:

(vite.config.ts)
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
    }
})
```

(package.json)
```
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest"
  },
```

└─ $ ▶ npm run test

## Coverage

(package.json)
```
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "coverage": "vitest run --coverage"
  },
```

(vite.config.ts)
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
    }
})
```

└─ $ ▶ npm run coverage

They ask you normaly if you want to install c8 => yes !
Look at this page for more explanations :

https://vitest.dev/guide/coverage.html
