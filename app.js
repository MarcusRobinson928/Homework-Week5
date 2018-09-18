state = {
employeeList: [
    {
      name: 'Jan',
      officeNum: 1,
      phoneNum: '222-222-2222'
    },
    {
      name: 'Juan',
      officeNum: 304,
      phoneNum: '489-789-8789'
    },
    {
      name: 'Margie',
      officeNum: 789,
      phoneNum: '789-789-7897'
    },
    {
      name: 'Sara',
      officeNum: 32,
      phoneNum: '222-789-4654'
    },
    {
      name: 'Tyrell',
      officeNum: 3,
      phoneNum: '566-621-0452'
    },
    {
      name: 'Tasha',
      officeNum: 213,
      phoneNum: '789-766-5675'
    },
    {
      name: 'Ty',
      officeNum: 211,
      phoneNum: '789-766-7865'
    },
    {
      name: 'Sarah',
      officeNum: 345,
      phoneNum: '222-789-5231'
    }
  ]
}

  render = function (htmlStr){
    $('#content').html(htmlStr);
  }

  renderPrint = function (){
    html = '<h4>The Minimalists Directory<h4><br></br>'
    print = state.employeeList.forEach(e => html += 
    `<p> Name: ${e.name}<br>Office: ${e.officeNum}<br>
    Phone: ${e.phoneNum}<br><br> </p>`);
    $('#content').html(html);
  }

  renderBoard = function (htmlStr){
    $('#board').html(htmlStr);
  }

  renderBoard2 = function (htmlStr){
    $('#board2').html(htmlStr);
  }
  
  simplicity = function() {
    $('#welcome').empty()
    $('#content').empty();
    $('#input').empty();
    $('#input2').empty();
    $('#board').empty();
    $('#board2').empty();
    render(`
    <h1>WELCOME TO <span style="color:rgb(236, 232, 147)">SIMPLICITY</span></h1>
    <h3>The Minimalists Directory</h3>`)
  }

  print = function () {
    $('#welcome').empty();
    $('#input').empty();
    $('#input2').empty();
    $('#board').empty();
    $('#board2').empty();
    renderPrint()
    }
  
  verifyInput = function () {
    $('#welcome').empty();
    $('#content').empty();
    $('#input').empty();
    $('#input2').empty();
    $('#board').empty();
    $('#board2').empty();
    render(`
        <h4>The Minimalists Directory<h4><br>
        <input type="text" id="verify-input" placeholder="Enter Name" autocomplete="off" />
        <button id="verifyButton"><i class="fas fa-search"></i></button>`);
    $('#verifyButton').on('click', verify);
  }
  
  verify = function (e) {
    e.preventDefault()
  $('#board2').empty();
  input = $('#verify-input').val();
  state.name = input.toLocaleLowerCase();
  match = state.employeeList.find(e => e.name.toLowerCase() === state.name);
    if(match){
        renderBoard('Employee Found')
    } else {
        renderBoard('Employee Not Found')
    }
  }
  
  lookupInput = function () {
    event.preventDefault();
    $('#welcome').empty();
    $('#content').empty();
    $('#input').empty();
    $('#input2').empty();
    $('#board').empty();
    $('#board2').empty();
    render(`
        <h4>The Minimalists Directory<h4><br>
        <input type="text" id="lookup-input" placeholder="Enter Name" autocomplete="off" />
        <button id="lookupButton"><i class="fas fa-search"></i></button>`);
    $('#lookupButton').on('click', lookup);
  }
  
  lookup = function () {
    $('#welcome').empty();
    $('#board2').empty();
    input = $('#lookup-input').val();
    state.name = input.toLocaleLowerCase();
    match = state.employeeList.find(e => e.name.toLowerCase() === state.name);
    if(match){
      renderBoard(`Name: ${match.name}<br>
      Office: ${match.officeNum}<br>
      Phone: ${match.phoneNum}<br>
      <br>`);
    } else {
        renderBoard('Employee Not Found')
    }
  }
  
  containsInput = function () {
    event.preventDefault();
    $('#welcome').empty();
    $('#content').empty();
    $('#input').empty();
    $('#input2').empty();
    $('#board').empty();
    $('#board2').empty();
    render(`
          <h4>The Minimalists Directory<h4><br>
          <input type="text" id="contains-input" placeholder="Enter Name" autocomplete="off" />
          <button id="containsButton"><i class="fas fa-search"></i></button>`);
    $('#containsButton').on('click', contains);
  }
  
  contains = function () {
    $('#welcome').empty();
    
    input = $('#contains-input').val();
    let i = 0
    state.name = input.toLocaleLowerCase();
    match = state.employeeList.filter(e => e.name.toLowerCase().includes(state.name.toLowerCase()));
    if(match){
      html = ''
      list = match.forEach(e => html += 
        `<p> Name: ${e.name}<br>Office: ${e.officeNum}<br>
        Phone: ${e.phoneNum}<br><br> </p>`);
        $('#content').html(html);
      render(list)
    } else {
        render('Employee Not Found')
    }
  }
  
  updateInput = function () {
    event.preventDefault();
    $('#welcome').empty();
    $('#content').empty();
    $('#input').empty();
    $('#input2').empty();
    $('#board').empty();
    $('#board2').empty();
    render(`
             <h4>The Minimalists Directory<h4><br>
             <input type="text" id="update-name" placeholder="Enter Name" autocomplete="off" /><br><br>
             <input type="text" id="update-office" placeholder="Enter Office Number" autocomplete="off" /><br><br>
             <input type="text " id="update-phone" placeholder="Enter Phone Number" maxlength="10" autocomplete="off" />
             <button id="updateButton"><i class="fas fa-search"></i></button>`);
    $('#updateButton').on('click', update);
  }
  
  update = function () {
    $('#welcome').empty();
    $('#board').empty();
    const employeeName = $('#update-name').val();
    const officeNum = $('#update-office').val();
    const phoneNum = $('#update-phone').val();
    
  
  
    var updateEmployee = {
      name: employeeName,
      officeNum: officeNum,
      phoneNum: phoneNum,
    }
  
    
    input = $('#update-name').val();
    state.name = input.toLocaleLowerCase();
    match = state.employeeList.find(e => e.name.toLowerCase() === state.name);
    if(match){
      state.employeeList.push(updateEmployee);
      renderBoard2('Employee Updated');
    } else {
        renderBoard2('Employee Not Found')
    }
  }

  
  addInput = function () {
    event.preventDefault();
    $('#welcome').empty();
    $('#content').empty();
    $('#input').empty();
    $('#input2').empty();
    $('#board').empty();
    $('#board2').empty();
    render(`
          <h4>The Minimalists Directory<h4><br>
          <input type="text" id="add-name" placeholder="Enter Name" autocomplete="off" /><br><br>
          <input type="text" id="add-office" placeholder="Enter Office Number" autocomplete="off" /><br><br>
          <input type="text" id="add-phone" placeholder="Enter Phone Number" maxlength="10" autocomplete="off" />
          <button id="addButton"><i class="fas fa-search"></i></button>`);
    $('#addButton').on('click', add);
  }
  
  add = function () {
    $('#board').empty();
    const employeeName = $('#add-name').val();
    const officeNum = $('#add-office').val();
    const phoneNum = $('#add-phone').val();
  
  
    var newEmployee = {
      name: employeeName,
      officeNum: officeNum,
      phoneNum: phoneNum,
    }
    state.employeeList.push(newEmployee);
  
  
    renderBoard2(
        `Name: ${newEmployee.name}<br>
        Office: ${newEmployee.officeNum}<br>
        Phone: ${newEmployee.phoneNum}<br>
        <br>`)
  }
  
  deleteInput = function (e) {
    e.preventDefault();
    $('#welcome').empty();
    $('#content').empty();
    $('#input').empty();
    $('#input2').empty();
    $('#board').empty();
    $('#board2').empty();
    render(`
                <h4>The Minimalists Directory<h4><br>
                <input type="text" id="delete-input" placeholder="Enter Name" autocomplete="off" />
                <button id="deleteButton"><i class="fas fa-search"></i></button>`);
    $('#deleteButton').on('click', deleteEmployee);
  }
  
  const deleteEmployee = function (e) {
    e.preventDefault()
    $('#board2').empty();
    i = 0;
    input = $('#delete-input').val();
    state.name = input.toLocaleLowerCase();
    match = state.employeeList.find(e => e.name.toLowerCase() === state.name.toLocaleLowerCase());
    if (match){
      state.employeeList.splice(i,1)
      render('Employee Deleted')
    } else {
      render('Employee Not Found')
    }
  }
      
  
  $('#simplicity').on('click', simplicity);
  $('#print').on('click', print, );
  $('#verify').on('click', verifyInput);
  $('#lookup').on('click', lookupInput);
  $('#contains').on('click', containsInput);
  $('#update').on('click', updateInput);
  $('#add').on('click', addInput);
  $('#delete').on('click', deleteInput);