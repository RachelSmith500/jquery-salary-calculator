console.log('js')

$(document).ready(onReady);

function onReady(){
//click listeners go here

}    

function submitEmployeeData(){
    console.log('in submitEmployeeData Function');
    //this is where the values will be grabbed
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let employeeId = $('#employeeId').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val(); 
    
}