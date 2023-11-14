const LinkedList = require("../linkedlist/linkedList");

test("that linked-list is empty", () => {
  let list = new LinkedList();
  let isTrue = list.isEmpty();
  expect(isTrue).toBe(true)
})

test("that elements can be inserted at head", () => {
  let list = new LinkedList();
  list.insertAtHead(5);
  let headValue = list.getHead();

  expect(headValue).toBe(5)
})

test("test that elements can be deleted at head", () =>{
  let list = new LinkedList();
  list.insertAtHead(5);
  list.insertAtHead(6);
  list.insertAtHead(7);
  list.insertAtHead(8);



  list.deleteAtHead();
  expect(list.getHead()).toBe(7);
})

test("test to check the length", () =>{
  let list = new LinkedList();
  list.insertAtHead(30);
  list.insertAtHead(40);
  list.insertAtHead(90);
  list.insertAtHead(10);
  list.insertAtHead(12);
  list.insertAtHead(14);

  
  expect(list.returnSize()).toBe(6);

})

test("test to remove duplicates from a linkedlist", () =>{
  let list = new LinkedList();
  list.insertAtHead(1);
  list.insertAtHead(1);
  list.insertAtHead(1);
  list.insertAtHead(2);
  list.insertAtHead(2);
  list.insertAtHead(3);
  list.insertAtHead(4);
})

test("test that an element is present", () => {
  let list = new LinkedList();
  list.insertAtHead(30);
  list.insertAtHead(40);
  list.insertAtHead(90);
  list.insertAtHead(10);

  
  expect(list.isPresent(10).toBe(10))
})

