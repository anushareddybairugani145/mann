function checkScholarshipEligibility(gpa) {
    if(gpa >= 7.5) {
        console.log("Eligible for scholarship");
    } else {
        console.log("Not Eligible for scholarship");
    }
}
let StudentGPA = 8.5;
checkScholarshipEligibility(StudentGPA);