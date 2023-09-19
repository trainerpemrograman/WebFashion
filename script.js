$("#menu-sidebar").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


function myFunction() {
    confirm("your email is correct ?");
    window.location = "dashboard";
}


function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.visibility = 'visible';

    var projectName = document.getElementById("projectName_row" + no);
    var status = document.getElementById("status_row" + no);
    var deadline = document.getElementById("deadline_row" + no);

    var projectName_data = projectName.innerHTML;
    var status_data = status.innerHTML;
    var deadline_data = deadline.innerHTML;

    var shortdate = new Date(deadline_data);
    var getdate = new Date(shortdate.setDate(shortdate.getDate() + 1));
    const [setdate] = new Date(getdate).toISOString().split('T');

    console.log("setdate " + setdate);


    projectName.innerHTML = "<input class='form-control input-task' type='text' id='projectName_text" + no + "' value='" + projectName_data + "'>";
    status.innerHTML = "<div class='input-group mb-3'> <select class='form-select mb-3' aria-label='Default select example' id='status_text" + no + "' style='background-color: #F9F0EB;' required > <option value='" + status_data + "' selected>" + status_data + " (Selected)</option> <option value='Process'>Process</option> <option value='No Process'>No Process</option> </select> </div>";
    deadline.innerHTML = "<input class='form-control input-task' type='date' id='deadline_text" + no + "' value='" + setdate + "'>";
}

function save_row(no) {
    var projectName_val = document.getElementById("projectName_text" + no).value;
    var status_val = document.getElementById("status_text" + no).value;
    var deadline_val = new Date(document.getElementById("deadline_text" + no).value);
    console.log("deadline_val " + deadline_val);

    var year = deadline_val.getFullYear();
    var month = deadline_val.toLocaleString('default', { month: 'long' });
    var day = deadline_val.getDate();

    var long_deadline = day + " " + month + " " + year;

    console.log(long_deadline);
    document.getElementById("projectName_row" + no).innerHTML = projectName_val;
    document.getElementById("status_row" + no).innerHTML = status_val;
    var deaddeadline = document.getElementById("deadline_row" + no).innerHTML = long_deadline;
    console.log(projectName_val);
    console.log("deaddeadline" + deaddeadline);

    document.getElementById("edit_button" + no).style.display = "inline";
    document.getElementById("save_button" + no).style.visibility = 'hidden';
}

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function tambah_data() {
    var tanggal = new Date(document.getElementById("coba_tanggal").value);

    year = tanggal.getFullYear();
    month = tanggal.toLocaleString('default', { month: 'long' });
    day = tanggal.getDate();

    console.log(day + " " + month + " " + year);
    return false;
}

function add_row() {


    var new_projectName = document.getElementById("new_projectName").value;
    var new_status = document.getElementById("new_status").value;

    var new_deadline = new Date(document.getElementById("new_deadline").value);


    var year = new_deadline.getFullYear();
    var month = new_deadline.toLocaleString('default', { month: 'long' });
    var day = new_deadline.getDate();



    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='projectName_row" + table_len + "'>" + new_projectName + "</td><td id='status_row" + table_len + "'>" + new_status + "</td><td id='deadline_row" + table_len + "'>" + day + " " + month + " " + year + "</td><td><input type='button' style='background-color: #6FF2FF;' id='edit_button" + table_len + "' value='Edit' class='edit btn m-1 btn-task' onclick='edit_row(" + table_len + ")'> <input type='button' value='Delete' class='delete btn btn-task m-1' style='background-color: FF656C;' onclick='delete_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save btn btn-task m-1' style='background-color: #FE979C; visibility: hidden;' onclick='save_row(" + table_len + ")'></td></tr>";

    document.getElementById("new_projectName").value = "";
    document.getElementById("new_status").value = "";
    document.getElementById("new_deadline").value = "";
}


function longdate(no) {
    date = document.getElementById("deadline_row" + no).value;
    year = date.getFullYear();
    month = date.toLocaleString('default', { month: 'long' });
    day = date.getDate();
    document.getElementById("deadline_row").innerHTML = day + " " + month + " " + year;
}

date = new Date();
year = date.getFullYear();
month = date.toLocaleString('default', { month: 'long' });
day = date.getDate();
document.getElementById("current_date").innerHTML = day + " " + month + " " + year;


const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("data_table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
