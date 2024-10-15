
        var srno = 1;

        function saveContact() {
            var name = document.getElementById("name").value;
            var mobile = document.getElementById("mobile").value;
            var email = document.getElementById("email").value;
            var address = document.getElementById("address").value;

            var table = document.getElementById("contactTable");
            var row = table.insertRow(-1);
            row.classList.add("inserted-record");
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);

            cell1.innerHTML = srno++;
            cell2.innerHTML = name;
            cell3.innerHTML = mobile;
            cell4.innerHTML = email;
            cell5.innerHTML = address;

            var deleteButton = document.createElement("button");
            deleteButton.innerHTML = "<i class='fas fa-times'></i>";
            deleteButton.style.background = "none";
            deleteButton.style.border = "none";
            deleteButton.style.cursor = "pointer";
            deleteButton.onclick = function () {
                table.deleteRow(row.rowIndex);
            };
            cell6.appendChild(deleteButton);

            // Clear the form fields after saving
            document.getElementById("contactForm").reset();
        }

        function toggleInsertedRecords() {
            var insertedRows = document.querySelectorAll(".inserted-record");
            var hideButton = document.getElementById("hideButton");
            var allHidden = true;

            insertedRows.forEach(function (row) {
                if (row.style.display === "none") {
                    row.style.display = "table-row";
                } else {
                    row.style.display = "none";
                    allHidden = false;
                }
            });

            hideButton.innerHTML = allHidden ? "Hide Records" : "Show Records";
        }
