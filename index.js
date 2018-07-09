export default class SRM {
  constructor(
    intervals = [1, 2, 3, 8, 17],
    scroreToProgressChange = [-3, -1, 1]
  ) {
    this.intervals = intervals;
    this.scroreToProgressChange = scroreToProgressChange;
  }

  get maxProgress() {
    return this.intervals.length;
  }
  get correctScore() {
    return this.scroreToProgressChange.length - 1;
  }
  calculate(s, { progress }, now) {
    const correct = s === this.scroreToProgressChange.length - 1;
    const newProgress = progress + this.scroreToProgressChange[s];
    let dueDate = now + 1;
    if (correct && progress < this.maxProgress) {
      dueDate = now + this.intervals[progress];
    }
    return {
      dueDate,
      progress: newProgress < 0 ? 0 : newProgress
    };
  }
  getInitialRecord(now) {
    return {
      progress: 0,
      dueDate: now
    };
  }
}
