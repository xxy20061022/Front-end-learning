class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let stack1: number[] = [];
    let stack2: number[] = [];
    while (l1 !== null) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while (l2 !== null) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let carry = 0;
    let dummy = new ListNode(0);
    while (stack1.length > 0 || stack2.length > 0 || carry !== 0) {
        let sum = carry;
        if (stack1.length > 0) sum += stack1.pop()!;
        if (stack2.length > 0) sum += stack2.pop()!;
        carry = Math.floor(sum / 10);
        let newNode = new ListNode(sum % 10);
        newNode.next = dummy.next;
        dummy.next = newNode;
    }

    return dummy.next;
}
