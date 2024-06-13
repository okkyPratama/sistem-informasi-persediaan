function ManagementDatalogout() {
    text = "Yakin ingin logout?"
    if (confirm(text) == true) {
        window.location.href = "../index.html"
        return true

    } else {
        window.location.reload();
        return false;
    }
}



let table_sort_elements = document.querySelectorAll('.table_sort');
if (table_sort_elements) {
    table_sort_elements = Array.isArray(table_sort_elements) ? table_sort_elements : Object.values(table_sort_elements);
    table_sort_elements.forEach(table_sort_element => {
        let thead_cells = table_sort_element.querySelectorAll('thead>tr>*');
        if (thead_cells) {
            thead_cells = Array.from(thead_cells);

            thead_cells.forEach((thead_cell, index) => {
                thead_cell.addEventListener('click', function () {
                    this.classList.toggle('asc');
                    sortTableByColumn(table_sort_element, index, !this.classList.contains('asc'));
                });
            });
        }
    });
}


function sortTableByColumn(table, column, desc = false) {
    let tbody = table.querySelector('tbody'),
        rows = tbody.querySelectorAll('tr');

    rows = rows.isArray ? rows : Object.values(rows);

    function compare(a, b) {
        // console.log(a.children[column], b.children[column]);
        let aText = a.children[column].innerText.trim(),
            bText = b.children[column].innerText.trim();

        return (aText < bText) ? -1 : 1;
    }

    rows.sort(compare);

    if (desc) rows.reverse();

    tbody.innerHTML = '';

    let i = 0;
    while (i < rows.length) {
        tbody.appendChild(rows[i]);
        i++;
    }
}

/* html table filter  start */
function filter_table(This, table_id) {
    let recordLists = document.querySelectorAll(`#${table_id}>*`);
    if (recordLists) {
        hide_tr(recordLists);
        recordLists.forEach(recordList => {
            let str = recordList.innerText.toLowerCase(),
                value = This.value.toLowerCase();

            if (str.indexOf(value) >= 0) {
                recordList.style.display = '';
            }
        });
    }
}


function hide_tr(recordLists) {
    recordLists.forEach(recordList => {
        recordList.style.display = 'none';
    });
}
/* html table filter  end */



function validateItem(input) {
    if (input.value.length < 4) {
        input.setCustomValidity("Nama item harus lebih dari 4 karakter")
        return false
    } else {
        input.setCustomValidity('');
    }
    return true

}

function validateJumlah(input) {
    if (input.value < 5) {
        input.setCustomValidity("Jumlah minimal 5")
        return false
    } else {
        input.setCustomValidity('');
    }
}

function validateDibuat(input) {
    if (input.value.length < 4) {
        input.setCustomValidity("Minimal terdiri dari 4 karakter")
        return false
    } else {
        input.setCustomValidity('');
    }

    return true

}

function validateTanggal(input) {

    if (input.value === '') {
        input.setCustomValidity('Mohon Untuk diisi');
        
    } else if (input.validity.rangeUnderflow) {
        input.setCustomValidity("Tahun harus 2022")
        return false
    } else {
        input.setCustomValidity('');
    }

    return true
}


var selectedRow = null
function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}

// Get data form
function readFormData() {
    var formData = {};
    formData["itemName"] = document.getElementById("itemName").value;
    formData["jumlah"] = document.getElementById("jumlah").value;
    formData["dibuatoleh"] = document.getElementById("dibuatoleh").value;
    formData["tanggaldibuat"] = document.getElementById("tanggaldibuat").value;
    return formData;
}

// Create Data
function insertNewRecord(data) {
    var table = document.getElementById("listdata").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = `11`;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.itemName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.jumlah;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.dibuatoleh;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.tanggaldibuat;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<div class="action_btn">
        <a href="#" class="click_ripple_shine success" title="View">
            <i class="icon fa fa-eye"></i>
        </a>
        <a href="./pemesanan-update.html" class="click_ripple_shine warning" title="Edit">
            <i class="fa-solid fa-pen-to-square"></i>
        </a>
        <a href="#" class="click_ripple_shine danger" title="Delete">
            <i class="icon fa fa-close"></i>
        </a>
    </div>`;

}

function resetForm() {
    document.getElementById("itemName").value = "";
    document.getElementById("jumlah").value = "";
    document.getElementById("dibuatoleh").value = "";
    document.getElementById("tanggaldibuat").value = "";
    selectedRow = null;
}

// Update Data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("itemName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("jumlah").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dibuatoleh").value = selectedRow.cells[2].innerHTML;
    document.getElementById("tanggaldibuat").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.itemName;
    selectedRow.cells[1].innerHTML = formData.jumlah;
    selectedRow.cells[2].innerHTML = formData.dibuatoleh;
    selectedRow.cells[3].innerHTML = formData.tanggaldibuat;
}

// Delete Data
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("listdata").deleteRow(row.rowIndex);
        resetForm();
    }
}




