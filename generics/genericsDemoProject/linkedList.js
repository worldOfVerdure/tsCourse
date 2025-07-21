var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
    }
    LinkedList.prototype.add = function (value) {
        var node = new ListNode(value);
        if (!this.root) {
            this.root = node;
            this.tail = node;
        }
        else {
            if (this.tail) {
                this.tail.next = node;
                this.tail = node;
            }
        }
        this.length++;
    };
    LinkedList.prototype.printList = function () {
        var current = this.root;
        while (current === null || current === void 0 ? void 0 : current.next) {
            console.log(current === null || current === void 0 ? void 0 : current.value);
            current = current.next;
        }
    };
    return LinkedList;
}());
var numberList = new LinkedList();
for (var i = 0; i <= 10; ++i) {
    numberList.add(Math.floor(Math.random() * 1000) + 1);
}
numberList.printList();
