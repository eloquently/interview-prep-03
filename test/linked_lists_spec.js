import { expect } from 'chai';

import * as ll from '../src/linked_lists';


const numList = () => {
    let last = new ll.LinkedNode(40);
    for(let i = 19; i >= 0; i--) {
        const newNode = new ll.LinkedNode(i*2, last);
        last = newNode;
    }
    return last;
};

const last = (node) => {
    while(node.nextNode !== undefined) {
        node = node.nextNode;
    }
    return node;
};

describe('LinkedList', () => {
    if(ll.insert) {
        describe('insert()', () => {
            it('adds to end of list', () => {
                let n0 = numList();
                n0 = ll.insert(n0, 21, 100);
                expect(last(n0).data).to.eq(100);
            });
            
            it('adds to middle of list', () => {
                let n0 = numList();
                n0 = ll.insert(n0, 1, 100);
                expect(n0.nextNode.data).to.eq(100);
            });
            
            it('adds to beginning of list', () => {
                let n0 = numList();
                n0 = ll.insert(n0, 0, 100);
                expect(n0.data).to.eq(100);
            });
            
            it('creates new list', () => {
                const n = ll.insert(undefined, 0, 1);
                expect(n.data).to.eq(1);
                expect(n.nextNode).to.eq(undefined);
            });
        });
    }
    
    if(ll.index) {
        describe('index()', () => {
            it('returns value of first item in list', () => {
                let n0 = numList();
                expect(ll.index(n0, 0)).to.eq(0);
            });
            
            it('returns value of item in list', () => {
                let n0 = numList();
                expect(ll.index(n0, 10)).to.eq(20);
            });
            
            it('returns value of last item', () => {
                let n0 = numList();
                expect(ll.index(n0, 20)).to.eq(40);
            });
        });
    }
    
    if(ll.remove) {
        describe('remove()', () => {
            it('removes element form end of list' , () => {
                let n0 = numList();
                n0 = ll.remove(n0, 20);
                expect(last(n0).data).to.eq(38);
            });
            
            it('removes element from middle of list', () => {
                let n0 = numList();
                n0 = ll.remove(n0, 1);
                expect(n0.nextNode.data).to.eq(4);
            });
            
            it('removes first element from list', () => {
                let n0 = numList();
                n0 = ll.remove(n0, 0);
                expect(n0.data).to.eq(2);
            });
        });
    }
    
    if(ll.insertSorted) {
        describe('insertSorted()', () => {
            it('inserts element at end of list', () => {
                let n0 = numList();
                n0 = ll.insertSorted(100);
                expect(last(n0).data).to.eq(100);
            });
            
            it('inserts element at middle of list', () => {
                let n0 = numList();
                n0 = ll.insertSorted(13);
                expect(ll.index(n0,7).data).to.eq(13);
            });
            
            it('inserts element at beginning of list', () => {
                let n0 = numList();
                n0 = ll.insertSorted(-10);
                expect(n0.data).to.eq(-10);
            })
        });
    }
});