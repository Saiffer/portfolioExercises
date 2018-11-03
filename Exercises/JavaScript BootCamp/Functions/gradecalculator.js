// Students score, total possible score
// 15/20 => You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function (studentScore, totalScore) {
    let calc = (studentScore/totalScore) * 100;
    let grade;
    if (calc >=90 && calc <= 100) {
        grade = 'A';
        return `You got a ${grade}(${calc}%)!`
    }
    else if (calc >=80 && calc <=89) {
        grade = 'B';
        return `You got a ${grade}(${calc}%)!`
    }
    else if (calc >=70 && calc <=79) {
        grade = 'C';
        return `You got a ${grade}(${calc}%)!`
    }
    else if (calc >=60 && calc <=69) {
        grade = 'D';
        return `You got a ${grade}(${calc}%)!`
    }
    else {
        grade = 'F';
        return `You got a ${grade}(${calc}%)!`
    }
}

//let result = gradeCalc(68,100);
let result = gradeCalc(33,100);
//let result = gradeCalc(71,100);
//let result = gradeCalc(84,100);
//let result = gradeCalc(95,100);
console.log(result);