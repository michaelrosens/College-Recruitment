new Vue({
    el: "#app",
    data: {
      details: true,
      student: {
        grade: "",
        returning: true,
      },
      students: [],
      grades: [
        { text: "K3 - K4", display: "K3 - K4", value: 0},
        { text: "K5", display: "K5", value: 1},
        { text: "Elementary (1st - 5th)", display: "Elementary", value: 2},
        { text: "Junior High (6th - 8th)", display: "Junior High", value: 3},
        { text: "High School (9th - 12th)", display: "High School", value: 4}
      ],
      tuition: [
        5800,
        5300,
        4980,
        4570,
        0
      ],
      registration: {
        returning: 200,
        new: 275,
      },
      comprehensive: [
        225,
        250,
        275,
        300,
      ]
    },
    methods: {
      add: function() {
        console.log(this.student);
        this.students.push({
          grade: this.grades[this.student.grade],
          returning: this.student.returning,
          tuition: this.student.grade > 0 ? this.tuition[1] : this.tuition[0],
          registration: this.student.returning ? this.registration['returning'] : this.registration['new'],
          building: this.students.length == 0 ? 250 : 0,
          comprehensive: this.getComprehensive(this.student.grade),
        });
        
        this.student.grade = "";
        this.student.returning = true;
      },
  
      getComprehensive: function(grade) {
        if (grade != 0) {
          grade--;
        }
        return this.comprehensive[grade];
      }
    }
  });
  
  // Tuition for each grade level across the board
  // factor in multi student discounts based on number of students in K5 - 12th
  
  // Building fee of $250 regardless
  
  // Registration fee per student based on if new or returning
  
  // Comprehensive fee based on grade level