const FirstState = {
  id: '',
  name: '',
  version: '',
  login: {
    username: 'React',
    password: ''
  },
  details: {
    firstname: '',
    lastname: '',
    middlename: ''
  },
  TestLoop: {
    TestLoop1: {
      TestLoop2:{
        TestLoop3:{
          TestLoop4:{
            Dammunteupdatechey:""
          }
        }
      }
    }
  },
  loop: [
    {
      name: "jagan"
    },
    {
      name: "lakshmi"
    }
  ]
};

const SecondState = {
  projectDetails: {
    isopen: false,
  }
}

const global = {
  FirstState,
  SecondState
}


export { global };