class Logger {
    constructor() {
        this.map = new Map();
    }

    /**
     * @param {number} timestamp
     * @param {string} message
     * @return {boolean}
     */
    shouldPrintMessage(timestamp, message) {
        if (!this.map.has(message)) {
            this.map.set(message, timestamp);
            return true;
        }

        if (timestamp - this.map.get(message) >= 10) {
            this.map.set(message, timestamp);
            return true;
        } else {
            return false;
        }
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
