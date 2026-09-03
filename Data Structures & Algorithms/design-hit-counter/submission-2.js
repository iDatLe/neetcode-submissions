class HitCounter {
    constructor() {
        this.arr = [];
    }

    /**
     * @param {number} timestamp
     * @return {void}
     */
    hit(timestamp) {
        this.arr.push(timestamp)
    }

    /**
     * @param {number} timestamp
     * @return {number}
     */
    getHits(timestamp) {
        while (this.arr.length > 0 && timestamp - this.arr[0] >= 300) {
            this.arr.shift();
        }

        return this.arr.length;
    }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
