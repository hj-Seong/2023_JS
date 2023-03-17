// a태그 클릭했을때, 
// li태그 on 클래스 이름을 추가
// + 다른 li태그의 on 클래스는 제거

// a태그 3개 > 배열
const btnList = document.querySelectorAll(".list .btn");
console.log(btnList);

// 버튼 중 하나를 선택해서 이벤트 추가
for(let i=0;i<btnList.length;i++) {
    btnList[i].addEventListener("click",onTap);
}


// on 클래스를 li에 추가하는 함수
function onTap(e) {
    // a태그를 사용할때, 새로고침 이벤트가 기본으로 있음으로
    // 새로고침을 제거하고 사용
    e.preventDefault();
    
    // li에 있는 on을 제거하기 위해 btnList사용
    for(let i=0; i<btnList.length; i++ ) {
        btnList[i].parentNode.classList.remove("on");
    }

    // on클래스 추가
    // e.target은 이벤트가 발생한 태그자체
    // 이벤트를 붙여준 btnList[0],btnList[1],btnList[2] 중 하나
    e.target.parentNode.classList.add("on");
    console.log(e.target)
}
