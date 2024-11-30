function isLochNessMonster(s) {

    const patterns = ["tree fiddy", "3.50", "three fifty"];
    return patterns.some(pattern => s.includes(pattern));
}