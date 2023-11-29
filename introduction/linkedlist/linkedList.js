const Node = require("./node");

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;

    this.insertAtHead = (value) => {
      let newNode = new Node(value);
      newNode.nextElement = this.head;
      this.head = newNode;

    }
  
  
    
    this.deleteAtHead = () =>{

      if(this.head !== null){
      this.head = this.head.nextElement;
     
      }
    }

    this.getHead = () =>{
      if(this.head !== null){
        return this.head.value;
      }
    }
    this.insertAtEnd = (value) =>{
      let newNode = new Node(value);
      let element = this.head;

      if(element === null){
        this.head = newNode;
        this.tail = newNode;
        return;
      }

      while(element !== null){
        element = element.nextElement;
      }
      element.nextElement = newNode;
      this.tail = newNode;

    }
    this.isPresent = (value)=>{
      let element = this.head;

      while(element !== null){
        element = element.nextElement;
        if(element === value){
          return(true);
        }
      
        else(element !== value);{
          return(false);
        }
      }
    }
    
    this.getLast = () =>{
      return null;
    }

    this.returnSize = () =>{
      if(this.head !==null){
      let count = 0;
      let element = this.head;
      while(element !== null){
        count++;
        element = element.nextElement;
      }
      return count;
    }

    this.returnNumber = (n) =>{
      if(this.head !==null){
        let count = 0;
        let element = this.head;
        while(element !== null){
          count--;
          element = element.nextElement;
        }
        let counted = count - n
        return counted.valueOf ;
      }
    }

    this.palindrome = () =>{
      if(this.head!== null){
       let count = "";
       let reverseCount = "";
       while (element !== null) {

        count+= element.value;
        element = element.nextElement;

        for(let i = 0; i < count.length - 1; count--){
          reverseCount += i;
        }
       }
       if (count === reverseCount){
        return true
       }
       else(count !== reverseCount)
        return false;
       

      }
    }

  

    this.unique = () =>{
      let element = this.head;
      if(element === element.nextElement){
        element.nextElement = element.nextElement.nextElement;
      }
      return element.nextElement;
    }
  
  
  }
}
}

LinkedList.prototype.isEmpty = function(){
  return this.head === null;
}
LinkedList.prototype.printElements = function(){
  let element = this.head;

  while(element !== null){
    process.stdout.write('${element.value} -> ');
    element = element.nextElement;
  }
  process.stdout.write('null');
}

LinkedList.prototype.removeDuplicates = function (){
  let pointerA = this.head;
  let pointerB = this.head?.nextElement;

  while(pointerB){
    if(pointerA.value === pointerB.value){
       pointerA.nextElement = pointerB.nextElement;
       pointerB = pointerB.nextElement;
    } else{
      pointerA = pointerA.nextElement;
      pointerB = pointerB.nextElement;

    }
  }

  LinkedList.prototype.intersection = function(listHead){
    if(!(listHead instanceof Node))
        throw new Error("must be a node");
    
    let newList = new LinkedList();
    let currentList = listHead;

    while(currentList !==null){
      if(this.isPresent(currentList.value) 
      && !newList.isPresent(currentList.value)){
        newList.insertAtEnd(currentList.value);
    }
    }

  }

}

module.exports = LinkedList;