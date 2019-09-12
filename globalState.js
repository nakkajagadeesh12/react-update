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
  }
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