export class LinkedNode {
    constructor(data, nextNode) {
        this.data = data;
        this.nextNode = nextNode;
    }
}

export function printList(start) {
    while(start !== undefined) {
        console.log(start.data);
        start = start.nextNode;
    }
}

export function insert(start, pos, data) {
    let prev;
    let next = start;
    
    // First, find the element before and the element after pos
    for(let i = 0; i < pos; i++) {
        prev = next;
        next = next.nextNode;
    }
    
    // Create the new node and set it's next element to start
    // start will just be undefined if newNode is being inserted
    // at the end of the list
    const newNode = new LinkedNode(data, next);
    
    if(prev) {
        // Not inserting at the beginning, so change the previous
        // node to point at the new node.
        prev.nextNode = newNode;
        
        // Return the original starting element
        return start;
    }
    else {
        // We are inserting at the beginning, so return the new node
        return newNode;
    }
}

export function index(start, pos) {
    for(let i = 0; i < pos; i++) {
        start = start.nextNode;
    }
    return start.data;
}

export function remove(start, pos) {
    let prev;
    let next = start;
    
    // find the element we want to delete and the element before it
    for(let i = 0; i < pos; i++) {
        prev = next;
        next = next.nextNode;
    }
    
    // currently prev is the element before the one we want to
    // delete. Move next forward one more unless we're at the end already
    if(next !== undefined) {
        next = next.nextNode;
    }

    if(pos > 0) {   
        prev.nextNode = next;
        return start;
    } else {
        return next;
    }
}

export function insertSorted(start, newData) {
    let prev;
    let next = start;
    
    while(newData > next.data) {
        prev = start;
        next = next.nextNode;
    }
    
    const newNode = new LinkedNode(newData, next);
    
    if(prev !== undefined) {
        prev.nextNode = newNode;
        return start;
    } else {
        return newNode;
    }
}

let n1 = new LinkedNode("hello");
n1 = insert(n1, 1, "world");

n1 = remove(n1, 0);

printList(n1);