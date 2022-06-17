// fill in javascript code here

    document.querySelector("#form").addEventListener("submit", addItem);
    var arr = JSON.parse(localStorage.getItem("Employee")) || [];
    records(arr);
    

    function addItem(event){
        event.preventDefault();

        var items = {
            

            itemName: form.name.value,
            itemEmployeeID: form.employeeID.value,
            itemDepartment: form.department.value,
            itemExp: form.exp.value,
            itemEmail: form.email.value,
            itemMbl: form.mbl.value,
            // itemRole: form.role.value,
            
            
        };

        arr.push(items);
        console.log(arr);
        localStorage.setItem("Employee",JSON.stringify(arr));
        records(arr);

    }

    // function filter_arr (e){
    //     arr.filter((aa) =>aa.itemDepartment === e )
    // }

    function records(arr){
        document.querySelector("tbody").innerHTML ="";

        

        arr.map(function(elem,index){

            var tr = document.createElement("tr");
            tr.setAttribute("id", "border");

            var td1 = document.createElement("td");
            td1.textContent = elem.itemName;

            var td2 = document.createElement("td");
            td2.textContent = elem.itemEmployeeID;

            var td3 = document.createElement("td");
            td3.textContent = elem.itemDepartment;

            var td4 = document.createElement("td");
            td4.textContent = elem.itemExp;

            var td5 = document.createElement('td');
            td5.textContent = elem.itemEmail;

            var td6 = document.createElement('td');
            td6.textContent = elem.itemMbl;

            var td7 = document.createElement('td');
            if(elem.itemExp>5){
                td7.textContent = "Senior";
            }

            else if(elem.itemExp >=2 && elem.itemExp <= 5 ){
                td7.textContent = "Junior";
            }
            
            else if(elem.itemExp <= 1 ){
                td7.textContent = "Fresher";
            }


            // td7.textContent = elem.itemExp;

            var td8 = document.createElement('td');
            td8.textContent = "Delete";
            td8.addEventListener("click", function(){
            deleteTask(index);
            });

            tr.append( td1, td2, td3, td4, td5, td6,td7, td8);
            document.querySelector("tbody").append(tr);

            
            
        })
    }

    function deleteTask(index){
        console.log(index);
        arr.splice(index,1);
        localStorage.setItem("Employee", JSON.stringify(arr));
        records(arr);
    }

    function roleCheck(){
        var role = document.getElementById("exp")
    }
