export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees).flat();
  let index = 0;

  return {
    next() {
      if (index < allEmployees.length) {
        return { value: allEmployees[index++], done: false };
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
