//2.hiển thị thông tin từng người trong một danh sách
//moi nguoi co ten va tuoi trong danh sach ul
import React from "react";
function ListPerson(){
    const people =[

        { name: 'Alice', age: 15 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 25 },
        { name: 'Avid', age: 40 },
        { name: 'Eve', age: 18 },
        { name: 'Frank', age: 18 },
        { name: 'Grace', age: 55 },
        { name: 'Ceidi', age: 20 },
        { name: 'Ivan', age: 25 },
        { name: 'Budy', age: 50 }   
    ];

    const firstTeenager = people.find(person => person.age >= 10 && person.age <= 20);
    const allTeenagers = people.filter(person => person.age >= 10 && person.age <= 20);
    const isEveryTeenager = people.every(person => person.age >= 10 && person.age <= 20);
    const isAnyTeenager = people.some(person => person.age >= 10 && person.age <= 20);
    //3.tìm người đầu tiên trong mảng people là thanh thiếu niên
    //(tuổi từ 13-19) và hiển thị thông tin của người đó
    

  // Lệnh return PHẢI nằm bên trong dấu ngoặc nhọn của function
  return (
    <>
      <h1>1. List of People</h1>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name} - {person.age} tuổi
          </li>
        ))}
      </ul>

      <h3>2. Find the first teenager</h3>
      <div>
        {firstTeenager ? (
          <p>{firstTeenager.name} - {firstTeenager.age} tuổi</p>
        ) : (
          <p>Không tìm thấy ai.</p>
        )}
        <h3>3. All teenagers:</h3>
        <ul>
            {allTeenagers.map((person, index) => (
            <li key={index}>
                {person.name} - {person.age} tuổi
            </li>
            ))}
        </ul>
        <h3>4.Check if every person of the people array is teenager (age lon hon 10 and age nho hon 20), which should return true or false </h3>
            <p style={{ fontWeight: 'bold', color: isEveryTeenager ? 'green' : 'red' }}>
                {isEveryTeenager ? "true" : "false"}
            </p>
        <h3>5. Is there any teenager?</h3>
            <p style={{ fontWeight: 'bold', color: isAnyTeenager ? 'green' : 'red' }}>
                {isAnyTeenager ? "true" : "false"}
            </p>
      </div>
    </>
  );
}

export default ListPerson;