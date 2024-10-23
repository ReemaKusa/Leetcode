
var MedianFinder = function() {
    this.small = new MaxHeap(); // Max-Heap to store the smaller half
    this.large = new MinHeap(); // Min-Heap to store the larger half
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.small.insert(num);

    if (this.small.size() > 0 && this.large.size() > 0 && this.small.peek() > this.large.peek()) {
        this.large.insert(this.small.extractMax());
    }
    if (this.small.size() > this.large.size() + 1) {
        this.large.insert(this.small.extractMax());
    }
    if (this.large.size() > this.small.size()) {
        this.small.insert(this.large.extractMin());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.small.size() > this.large.size()) {
        return this.small.peek();
    }
    return (this.small.peek() + this.large.peek()) / 2;
};

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    extractMax() {
        if (this.size() === 1) {
            return this.heap.pop();
        }
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return max;
    }

    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let largest = index;
            if (leftChildIndex < this.size() && this.heap[leftChildIndex] > this.heap[largest]) {
                largest = leftChildIndex;
            }
            if (rightChildIndex < this.size() && this.heap[rightChildIndex] > this.heap[largest]) {
                largest = rightChildIndex;
            }
            if (largest === index) break;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    extractMin() {
        if (this.size() === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallest = index;
            if (leftChildIndex < this.size() && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < this.size() && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}
