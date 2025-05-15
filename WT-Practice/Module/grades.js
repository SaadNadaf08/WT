// Grade calculations module
function calculateAverage(gradesArray) {
    const sum = gradesArray.reduce((acc, grade) => acc + grade, 0);
    return sum / gradesArray.length;
}

function findHighest(gradesArray) {
    return Math.max(...gradesArray);
}

function findLowest(gradesArray) {
    return Math.min(...gradesArray);
}

function letterGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

module.exports = {
    calculateAverage,
    findHighest,
    findLowest,
    letterGrade
};