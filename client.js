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
        annualSalaryKey: Number(annualSalary)
    }
    
    if((firstName === '') || (lastName === '') || (employeeId === '')||
    (title === '') || (annualSalary === 0)){
        alert('please fill all input values');
        return false;
    }
    employeeArray.push(employeeObject);

    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeId').val('');
    $('#title').val('');
    $('#annualSalary').val('');

    buttonClicked();
    $('.delete').on('click', deleteFunction);
}

function deleteFunction(){
    console.log('delete');
    $(this).parent().parent().remove();
    // employeeArray.length = 0;
}

function buttonClicked(){
    let employeeToAdd = $("#employeeData");
    employeeToAdd.empty();
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
    annualSalarySum();
}

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

