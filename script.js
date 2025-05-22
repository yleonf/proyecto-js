 const students=[]

 document.getElementById("studentForm").addEventListener("submit",function (e){
    e.preventDefault();
    
    const name=document.getElementById("name").value.trim();
    const lastName=document.getElementById("lastName").value.trim();
    const grade=parseFloat(document.getElementById("grade").value);

    if(grade>7 || grade<1 || !name || ! lastName || isNaN(grade)){
        alert("Error al ingresar los datos")
            return
    }
     const student={name,lastName,grade}
     students.push(student)
     console.log(students)
     addStudentToTable(student)
     calcularPromedio();
      this.reset();

 })
const tableBody=document.querySelector("#studentTable tbody")
 function addStudentToTable(student){
    const row=document.createElement("tr");
    row.innerHTML=`
    <td>${student.name}</td>
    <td>${student.lastName}</td>
    <td>${student.grade}</td>
    <td> <button class="btn">Eliminar</button></td>
    `;
    row.querySelector(".btn").addEventListener("click",function(){
        borrarEstudiante(student,row);
    })  
tableBody.appendChild(row)
 }

  function borrarEstudiante(student,row){
    const index=students.indexOf(student);
    if(index > -1){
        students.splice(index,1);
        row.remove();
        calcularPromedio();
    }
  }



const promDiv=document.getElementById("average");
 function calcularPromedio(){
    if(students.length===0){
      promDiv.innerHTML="Promedio General del Curso : N/A";
        return
    }
   /* calcular el promedio */
   const total=students.reduce((acc,student)=>acc+student.grade,0);
   const average=total/students.length;
   promDiv.innerHTML=`Promedio General del Curso : ${average.toFixed(2)}`;
 }