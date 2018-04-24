'use strict'

const person = {
  name: 'Seth Donohue',
  type: 'Full Stack',
  skills: [
    'JavaScript', 'CSS3', 'HTML5', 'React', 'Node', 'SCSS', 'MongoDB', 'Git', 'Test Driven Development', 'SQL', 'Webpack', 'RESTful Architecture'
  ],
  traits: [
    'Passionate', 'Focused', 'Self Learner', 'Team Player', 'Problem Solver', 'Craftsman'
  ],
  passionLevel: 100,
  emotionalIntelligence: 100
}

class SoftwareDeveloper {
  constructor({properties}){
    for (var fld in obj) {
      if (obj.hasOwnProperty(fld)) {
        this[fld] = obj[fld];
      }
    }
  }
}

const sethDonohue = new SoftwareDeveloper () {
  
}

function Box(obj) {
  for (var fld in obj) {
    if (obj.hasOwnProperty(fld)) {
      this[fld] = obj[fld];
    }
  }
}
