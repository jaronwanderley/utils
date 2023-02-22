
# utils
 A set of Tiny utilities Functions to simple use.

## Install
### Module

```
npm i @jrnwn/utils
```

### CDN

```html
<script src="https://unpkg.com/@jrnwn/utils"><script>
```

## How to use

<details>
<summary><b>Array utils</b></summary>

#### Module

```javascript
import {
  range,
} from '@jrnwn/utils'
```

#### CDN

```javascript
const {
  range,
} = Utils
```

#### API

```javascript
function range (start?: number, end?: number, step?: number) => number[]
```

</details>

<details>
<summary><b>Cookies utils</b></summary>

#### Module

```javascript
import {
  getCookie,
  setCookie,
  deleteCookie,
} from '@jrnwn/utils'
```

#### CDN

```javascript
const {
  getCookie,
  setCookie,
  deleteCookie,
} = Utils
```

#### API

```javascript
function getCookie (name: string) =>  string | undefined

function setCookie (name: string, value: string, expireDays: number) =>  void

function deleteCookie (name: string) =>  void
```

</details>

<details>
<summary><b>Date utils</b></summary>

#### Module

```javascript
import {
  clonedDate,
  addDaysTo,
  fromToday,
  firstDayOfWeek,
  firstDayOfMonth,
  daysFrom,
  monthDays,
  getWeek,
  getMonth,
} from '@jrnwn/utils'
```

#### CDN

```javascript
const {
  clonedDate,
  addDaysTo,
  fromToday,
  firstDayOfWeek,
  firstDayOfMonth,
  daysFrom,
  monthDays,
  getWeek,
  getMonth,
} = Utils
```

#### API

```javascript
function clonedDate (date: Date) =>  Date

function addDaysTo (date: Date, days?: number) =>  Date

function fromToday (days: number) =>  Date

function firstDayOfWeek (date: Date) =>  Date

function firstDayOfMonth (date: Date) =>  Date

function daysFrom (date: Date, days?: number) =>  Date[]

function monthDays (date: Date) =>  number

function getWeek (date: Date) =>  Date[]

function getMonth (date: Date) =>  Date[]
```

</details>

<details>
<summary><b>DOM utils</b></summary>

#### Module

```javascript
import {
  typeOf,
  createEl,
  setClass,
  removeClass,
  setStyle,
  getSelector,
  platform,
} from '@jrnwn/utils'
```

#### CDN

```javascript
const {
  typeOf,
  createEl,
  setClass,
  removeClass,
  setStyle,
  getSelector,
  platform,
} = Utils
```

#### API

```javascript
function typeOf (element: any) => any

function createEl (type: string) => HTMLElement

function setClass (element: HTMLElement, className: string) => void[]

function removeClass (element: HTMLElement, className: string) => void[]

function setStyle (element: HTMLElement, object: Object) => any[]

function getSelector (element: HTMLElement) => string

function platform () => ({
  isMobile: boolean,
  isDesktop: boolean,
  isDark: boolean,
  isLight: boolean,
})
```

</details>

<details>
<summary><b>Format utils</b></summary>

#### Module

```javascript
import {
  normalizeText,
  toSplit,
  toCamel,
  toPascal,
  toSnake,
  toKebab,
  toProperName,
} from '@jrnwn/utils'
```

#### CDN

```javascript
const {
  normalizeText,
  toSplit,
  toCamel,
  toPascal,
  toSnake,
  toKebab,
  toProperName,
} = Utils
```

#### API

```javascript
function normalizeText (text: string) =>  string

function toSplit (text: string) =>  string[]

function toCamel (text: string) =>  string

function toPascal (text: string) =>  string

function toSnake (text: string) =>  string

function toKebab (text: string) =>  string

function toProperName (text: string) =>  string
```

</details>

<details>
<summary><b>Geometry utils</b></summary>

#### Module

```javascript
import {
  getDistance,
} from '@jrnwn/utils'
```

#### CDN

```javascript
const {
  getDistance,
} = Utils
```

#### API

```javascript
function getDistance (p1: Point, p2: Point) => number
```

</details>

<details>
<summary><b>Http utils</b></summary>

#### Module

```javascript
import {
  loadText,
  loadJson,
} from '@jrnwn/utils'
```

#### CDN

```javascript
const {
  loadText,
  loadJson,
} = Utils
```

#### API

```javascript
function loadText (path: string) => Promise<string>

function loadJson (path: string) => Promise<any>
```

</details>

<details>
<summary><b>Math utils</b></summary>

#### Module

```javascript
import {
  clamp,
} from '@jrnwn/utils'
```

#### CDN

```javascript
const {
  clamp,
} = Utils
```

#### API

```javascript
function clamp (value: number, min: number, max: number) => number
```

</details>

<details>
<summary><b>Object utils</b></summary>

#### Module

```javascript
import {
  getDistance,
} from '@jrnwn/utils'
```

#### CDN

```javascript
const {
  getDistance,
} = Utils
```

#### API

```javascript
function get (path: string, obj?: Window | Object) => any

function set (path: string, object: Object | Window | undefined, value: any) => any

function getListOfPaths (obj?: object) => any
```

</details>

<details>
<summary><b>Storage utils</b></summary>

#### Module

```javascript
import {
  tinyIDB,
} from '@jrnwn/utils'
```

#### CDN

```javascript
const {
  tinyIDB,
} = Utils
```

#### API

```javascript
function tinyIDB () => ({
  get: (key: string) => Promise<void>,
  set: (key: string, value: any) => Promise<void>,
  remove: (key: string) => Promise<void>,
})
```

</details>