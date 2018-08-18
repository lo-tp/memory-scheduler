# memory-scheduler

This is a tool made to help people schedule their learning in a more efficient way. It is very simple to use.

For more detail on why I make this lib, check this [post][blog].

## Installation
- npm : `$ npm install memory-scheduler`
- yarn: `$ yarn add memory-scheduler`

## Guide
To learn with this algorithm, two arguments have to be fed to it:

- intervals([int]): intervals between each study session.
- scroreToProgressChange([int]): how to update the progress based on the score the user gives when reviewing items

For one item we want to learn, store two data:

- dueDate(int): the next day scheduled to review this item.
- progress(int): How many times continuously the user has correctly answered this item.

When reviewing an item, send these data to the calculate function and get the updated record of that item:

- score(int): how confident the user is with this item.
- prevRecord(object): the previous record of this item
- now(int): the date of today

The answer is deemed as correct only when the score is equal to the length of scroreToProgressChange, and in this circumstance the nextDute is intervals[progress] days after today.

Otherwise, the answer is deemed as incorrect and the next review is scheduled at tomorrow.

In both cases, progress should be updated in this way: progress+=scroreToProgressChange[score].


## Example
```javascript
import  MS from 'memory-scheduler';

const DAY_IN_MINISECONDS = 24 * 60 * 60 * 1000;

const today = Math.round(new Date().getTime() / DAY_IN_MINISECONDS);

const yesterday = today-1;

const ms = new MS([1, 2, 3, 8, 17], [-3, -1, 1]);

const record = ms.getInitialRecord(yesterday);
const updatedRecord = ms.calculate(1, record, today);

```
[blog]:http://blog.lotp.xyz/2018/08/12/A-Simple-But-Effective-Spaced-Repitition-Algorithm-MS/
