String.prototype.isUpperCase = function () {
    // Compare the string to its uppercase version
    return this.toString() === this.toUpperCase();
};