console.log('js')

let employeeArray = [];

$(document).ready(onReady);

function onReady(){
//click listeners go here
$('#submit').on('click', submitEmployeeData);
console.log('submit form')

}    

function submitEmployeeData(){
    console.log('in submitEmployeeData Function');
    //this is where the values will be grabbed
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let employeeId = $('#employeeId').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val(); 

    let employeeObject = {

        firstNameKey: firstName,
        lastNameKey: lastName,
        employeeIdKey: employeeId,
        titleKey: title,
        annualSalaryKey: annualSalary
    }
    
    employeeArray.push(employeeObject);

    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeId').val('');
    $('#title').val('');
    $('#annualSalary').val('');
}