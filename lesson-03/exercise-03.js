// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

const deleteNode = function(node) {
  if(node.next === null) {
    
   } else {
   node.next = node.next.next;
   }
  return  node;
 };