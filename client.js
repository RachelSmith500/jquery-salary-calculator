console.log('js')
// global array 
let employeeArray = [];

//getting jquery ready 
$(document).ready(onReady);

//function for click listeners 
function onReady(){
//click listeners go here
$('#submit').on('click', submitEmployeeData);
}    

function submitEmployeeData(){
    console.log('in submitEmployeeData Function');
    //this is where the values will be grabbed
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let employeeId = $('#employeeId').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val(); 
    
    //storing data in an object that has been gathered from inputs
    let employeeObject = {

        firstNameKey: firstName,
        lastNameKey: lastName,
        employeeIdKey: employeeId,
        titleKey: title,
        annualSalaryKey: Number(annualSalary)
    }
    // alert set up that disables submit button if inputs are left blank 
    if((firstName === '') || (lastName === '') || (employeeId === '')||
    (title === '') || (annualSalary === 0)){
        alert('please fill all input values');
        return false;
    }
    //pushing employee object into the employee array 
    employeeArray.push(employeeObject);
    //clearing inputs 
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeId').val('');
    $('#title').val('');
    $('#annualSalary').val('');
    //calling buttonClick function 
    buttonClicked();
    //click listener for delete 
    $('.delete').on('click', deleteFunction);
}
//delete function 
function deleteFunction(){
    console.log('delete');
    //remove this item that resides in the table data of the table row
    $(this).parent().parent().remove();
    // employeeArray.length = 0;
}
//function that appends the employee array data to the dom
function buttonClicked(){
    let employeeToAdd = $("#employeeData");
    //emptying the data before appending to the dom 
    employeeToAdd.empty();
    //for loop appends the data from our array to the dom
    for(let i=0; i < employeeArray.length; i++){
        employeeToAdd.append
            (` 
                <tr scope="row">
                    <td>${employeeArray[i].firstNameKey}</td>
                    <td>${employeeArray[i].lastNameKey}</td>
                    <td>${employeeArray[i].employeeIdKey}</td>
                    <td>${employeeArray[i].titleKey}</td>
                    <td>${employeeArray[i].annualSalaryKey}</td>
                    <td><button class="delete">Delete</button></td>
                </tr>
            `)
    }
    //calling our salarySum function 
    annualSalarySum();
}
//this function adds the salaries of employees and divides the annual salary by 12 
//it then appends that figure to the dom
//if the sum is greater than 20k the monthly total turns red 
function annualSalarySum(){
    let sum = 0;
    let salaryToAdd = $("#MonthlyCost");
    salaryToAdd.empty();
    for(let i=0; i < employeeArray.length; i++){
      sum += Math.floor(employeeArray[i].annualSalaryKey/12);
    }// console.log('total salary sum', sum);
    $('#MonthlyCost').append(sum);
    
    if(sum > 20000){
        $('#MonthlyCost').addClass('redColor')
    }
}

// function changeColor(){
//     console.log('hello from changeColor');
//     $('#MonthlyCost').toggleClass('redColor');
//     //add and remove class toggle
// }

