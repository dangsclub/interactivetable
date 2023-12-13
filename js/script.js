function addRow() {
  // 표의 tbody 태그에 새로운 줄을 추가합니다.
  var row = document.createElement("tr");
  var number = document.createElement("td");
  var title = document.createElement("td");
  var content = document.createElement("td");
  var date = document.createElement("td");
  var edit = document.createElement("td");

  // 번호를 입력합니다.
  number.innerHTML = Number(document.querySelector("#table tbody tr").length) + 1;

  // 제목을 입력합니다.
  title.innerHTML = prompt("제목을 입력하세요.");

  // 내용을 입력합니다.
  content.innerHTML = prompt("내용을 입력하세요.");

  // 날짜를 입력합니다.
  date.innerHTML = prompt("날짜를 입력하세요.");

  // 수정 여부를 입력합니다.
  edit.innerHTML = prompt("수정 여부를 입력하세요. (1: 수정 가능, 2: 수정 불가능)");

  // 새로운 줄에 요소를 추가합니다.
  row.appendChild(number);
  row.appendChild(title);
  row.appendChild(content);
  row.appendChild(date);
  row.appendChild(edit);

  // tbody 태그에 새로운 줄을 추가합니다.
  document.querySelector("table tbody").appendChild(row);
}

 // 화면을 터치하면 addRow() 함수를 실행합니다.
document.querySelector("table tbody").addEventListener("touchstart",addRow);
