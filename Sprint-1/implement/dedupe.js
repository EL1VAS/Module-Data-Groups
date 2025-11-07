function dedupe(list) {
    if (list.length === 0) {
        return [];
    }

    const onlyOnce = [];
    for (let i = 0; i < list.length; i++; ) {
        if (onlyOnce.indexOf(list[i]) === -1) {
            onlyOnce.push(list[i]);
        }
    }
    return onlyOnce;
}

module.exports = dedupe;
