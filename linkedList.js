function createLinkedList(array) {   
    let linkedList = {'value': array[array.length-1], 'next': null}

    for (i = array.length - 2; i >= 0; i--) {
        linkedList = {'value': array[i], 'next': linkedList}
    }
        
    return linkedList
}

console.log(createLinkedList([1,2,3,4,5]))