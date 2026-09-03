class HitCounter {
    constructor() {
        this.hits = []
    }

    /**
     * @param {number} timestamp
     * @return {void}
     */
    hit(timestamp) {
        this.hits.push(timestamp)
    }

    /**
     * @param {number} timestamp
     * @return {number}
     */
    getHits(timestamp) {
        while (this.hits.length > 0 && timestamp - this.hits[0] >= 300) {
            this.hits.shift(); //dequeue from front
        }
        return this.hits.length;
    }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
