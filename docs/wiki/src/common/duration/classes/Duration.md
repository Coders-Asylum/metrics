[**metrics**](../../../../README.md) • **Docs**

***

[metrics](../../../../modules.md) / [src/common/duration](../README.md) / Duration

# Class: Duration

A Duration object to represent a time duration.

## Example

```ts
const duration = new Duration({ days: 1, hours: 2, minutes: 30 });
console.log(duration.toMilliseconds); // 95400000
console.log(duration.toSeconds); // 95400
console.log(duration.toMinutes); // 1590
console.log(duration.toHours); // 26.5
console.log(duration.toDays); // 1.1041666666666667
console.log(duration.toWeeks); // 0.15773809523809523

@class
```

## Constructors

### new Duration()

> **new Duration**(`duration`): [`Duration`](Duration.md)

#### Parameters

• **duration**

The duration input.

• **duration.days?**: `number`= `0`

Number of days.

• **duration.hours?**: `number`= `0`

Time in hours.

• **duration.milliseconds?**: `number`= `0`

Time in milliseconds.

• **duration.minutes?**: `number`= `0`

Time in minutes.

• **duration.seconds?**: `number`= `0`

Time in seconds.

• **duration.weeks?**: `number`= `0`

Number of weeks.

#### Returns

[`Duration`](Duration.md)

#### Source

[duration.ts:34](https://github.com/Coders-Asylum/metrics/blob/915929c315babd73895a753a541a52c9512e16c4/src/common/duration.ts#L34)

## Properties

### \_milliseconds

> `private` **\_milliseconds**: `number`

#### Source

[duration.ts:22](https://github.com/Coders-Asylum/metrics/blob/915929c315babd73895a753a541a52c9512e16c4/src/common/duration.ts#L22)

## Accessors

### toDays

> `get` **toDays**(): `number`

Get the duration in days.

#### Returns

`number`

The duration in days.

#### Source

[duration.ts:148](https://github.com/Coders-Asylum/metrics/blob/915929c315babd73895a753a541a52c9512e16c4/src/common/duration.ts#L148)

***

### toHours

> `get` **toHours**(): `number`

Get the duration in hours.

#### Returns

`number`

The duration in hours.

#### Source

[duration.ts:140](https://github.com/Coders-Asylum/metrics/blob/915929c315babd73895a753a541a52c9512e16c4/src/common/duration.ts#L140)

***

### toMilliseconds

> `get` **toMilliseconds**(): `number`

Get the duration in milliseconds.

#### Returns

`number`

The duration in milliseconds.

#### Source

[duration.ts:116](https://github.com/Coders-Asylum/metrics/blob/915929c315babd73895a753a541a52c9512e16c4/src/common/duration.ts#L116)

***

### toMinutes

> `get` **toMinutes**(): `number`

Get the duration in minutes.

#### Returns

`number`

The duration in minutes.

#### Source

[duration.ts:132](https://github.com/Coders-Asylum/metrics/blob/915929c315babd73895a753a541a52c9512e16c4/src/common/duration.ts#L132)

***

### toSeconds

> `get` **toSeconds**(): `number`

Get the duration in seconds.

#### Returns

`number`

The duration in seconds.

#### Source

[duration.ts:124](https://github.com/Coders-Asylum/metrics/blob/915929c315babd73895a753a541a52c9512e16c4/src/common/duration.ts#L124)

***

### toWeeks

> `get` **toWeeks**(): `number`

Get the duration in weeks.

#### Returns

`number`

The duration in weeks.

#### Source

[duration.ts:156](https://github.com/Coders-Asylum/metrics/blob/915929c315babd73895a753a541a52c9512e16c4/src/common/duration.ts#L156)

## Methods

### days()

> `static` **days**(`days`): [`Duration`](Duration.md)

Create a new Duration instance with the specified number of days.

#### Parameters

• **days**: `number`

The number of days.

#### Returns

[`Duration`](Duration.md)

A new Duration instance.

#### Source

[duration.ts:99](https://github.com/Coders-Asylum/metrics/blob/915929c315babd73895a753a541a52c9512e16c4/src/common/duration.ts#L99)

***

### hours()

> `static` **hours**(`hours`): [`Duration`](Duration.md)

Create a new Duration instance with the specified number of hours.

#### Parameters

• **hours**: `number`

The number of hours.

#### Returns

[`Duration`](Duration.md)

A new Duration instance.

#### Source

[duration.ts:90](https://github.com/Coders-Asylum/metrics/blob/915929c315babd73895a753a541a52c9512e16c4/src/common/duration.ts#L90)

***

### milliseconds()

> `static` **milliseconds**(`milliseconds`): [`Duration`](Duration.md)

Create a new Duration object with the specified number of milliseconds.

#### Parameters

• **milliseconds**: `number`

The number of milliseconds.

#### Returns

[`Duration`](Duration.md)

A new Duration object.

#### Source

[duration.ts:63](https://github.com/Coders-Asylum/metrics/blob/915929c315babd73895a753a541a52c9512e16c4/src/common/duration.ts#L63)

***

### minutes()

> `static` **minutes**(`minutes`): [`Duration`](Duration.md)

Create a new Duration instance with the specified number of minutes.

#### Parameters

• **minutes**: `number`

The number of minutes.

#### Returns

[`Duration`](Duration.md)

A new Duration instance.

#### Source

[duration.ts:81](https://github.com/Coders-Asylum/metrics/blob/915929c315babd73895a753a541a52c9512e16c4/src/common/duration.ts#L81)

***

### seconds()

> `static` **seconds**(`seconds`): [`Duration`](Duration.md)

Create a new Duration instance with the specified number of seconds.

#### Parameters

• **seconds**: `number`

The number of seconds.

#### Returns

[`Duration`](Duration.md)

A new Duration instance.

#### Source

[duration.ts:72](https://github.com/Coders-Asylum/metrics/blob/915929c315babd73895a753a541a52c9512e16c4/src/common/duration.ts#L72)

***

### weeks()

> `static` **weeks**(`weeks`): [`Duration`](Duration.md)

Create a new Duration instance with the specified number of weeks.

#### Parameters

• **weeks**: `number`

The number of weeks.

#### Returns

[`Duration`](Duration.md)

A new Duration instance.

#### Source

[duration.ts:108](https://github.com/Coders-Asylum/metrics/blob/915929c315babd73895a753a541a52c9512e16c4/src/common/duration.ts#L108)
