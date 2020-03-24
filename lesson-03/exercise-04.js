// Add new node to the provided Linked List to the specific index with value

const addItem = (node, index, val) => {
  let current = node;
  let prev = node;
  let currentIndex = 0;

  while (prev.next !== null) {
    if (currentIndex === index) {
      prev.next = {
        val,
        next: current,
      };
    }

    prev = current;
    current = current.next;

    currentIndex++;
  }
};
