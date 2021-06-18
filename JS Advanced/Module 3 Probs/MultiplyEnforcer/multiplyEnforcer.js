class MultiplyEnforcer {
  static multiplyBy10(num) {
    if (typeof(num) !== 'number') {
      return undefined;
    }
    return num * 10;
  }
  static stringMultiplyBy3point5(num) {
    if (typeof(num) !== 'number') {
      return "Please enter a valid number!"
    }
    return String(num * 3.5);
  }
  static multiplyTwoNums (num1, num2) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
      return [num1,num2];
    }
    return num1 * num2;
  }
}

