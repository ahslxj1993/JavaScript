//회원가입 버튼 클릭했을때
function check() {
	
	var id = document.getElementById("id");
	var password = document.getElementById("pass");
	var jumin1 = document.getElementById("jumin1");
	var jumin2 = document.getElementById("jumin2");
	var email = document.getElementById("email");
	var domain = document.getElementById("domain");
	var gender1 =document.getElementById("gender1");
	var gender2 =document.getElementById("gender2");
	var hobbies = document.getElementsByName("hobby");
	var post1 = document.getElementById("post1");
	var address = document.getElementById("address");
	var intro = document.getElementById("intro");
	
	//id 공백 유효성 검사
	if(id.value.trim()==''){
		alert("ID를 입력하세요");
		id.focus();
		return false;
	} 
	
	//패스워드 공백 유효성 검사
	if (password.value==''){
		alert("패스워드를 입력하세요")
		password.focus();
		return false;
	} 
	
	//주민번호 앞자리 유효성검사
	if (jumin1.value==''){
		alert("주민번호 앞자리를 입력하세요");
		jumin1.focus();
		return false;
	} 
	
	//주민번호 앞자리 6자리 유효성검사
	if (jumin1.value.length != 6){
		alert("주민번호 앞자리 6자리를 입력하세요");
		jumin1.value= "";
		jumin1.focus();
		return false;
	} 
	
	//주민번호 뒷자리 유효성검사
	if (jumin2.value==''){
		alert("주민번호 뒷자리를 입력하세요");
		jumin2.focus();
		return false;
	} 
	
	//주민번호 뒷자리 7자리 유효성 검사
	if (jumin2.value.length != 7){
		alert("주민번호 뒷자리 7자리를 입력하세요");
		jumin2.value= "";
		jumin2.focus();
		return false;
	} 
	
	//이메일 공백 유효성 검사
	if (email.value==''){
		alert('이메일을 입력하세요');
		email.focus();
		return false;
	} 
	
	//도메인 공백 유효성 검사
	if (domain.value==""){
		alert("도메인을 입력하세요");
		domain.focus();
		return false;
	} 
	
	//라디오 버튼 선택 유효성 검사
	if(gender1.checked == false && gender2.checked == false){
		alert("남, 여중 하나를 선택하세요");
		return false;
	}
	
	
	
	//취미를 두개이상  체크하도록 하는 유효성 검사
	var cnt =0;
	
	for (var i =0 ; i<hobbies.length ; i++){
		if(hobbies[i].checked)
		cnt++;
	} 
	
	if (cnt<2){
		alert("취미를 두개 이상 선택해주세요");
		return false;
	}
	
	//우편번호 공백 유효성 검사
	if (post1.value==""){
		alert("우편번호를 입력해주세요");
		post1.focus();
		return false;
	} 
	
	
	//주소 공백 유효성 검사
	if (address.value==""){
		alert("주소를 입력헤주세요");
		address.focus();
		return false;
	} 
	
	//자기소개 공백 유효성 검사
	if (intro.value==""){
		alert("자기소개를 입력해주세요");
		intro.focus();
		return false;
	}
} //function checked end


//ID 중복검사 부분
function idcheck() {
	
	var id = document.getElementById("id");
	
	if(id.value.trim()==""){//아이디 입력을 안했을때
		alert("ID를 입력하세요");
		id.focus();
	} else {//아이디를 입력했을때
		//사용자가 입력한 방식을 get 방식으로 넘깁니다		
		var ref ="idcheck.html?id="+id.value;
		
		//팝업창을 이용해 자료를 넘김
		window.open(ref,"","width=300, height=250")
	}
}//function idcheck end



function move() {
	var jumin1 = document.getElementById("jumin1");
	var jumin2 = document.getElementById("jumin2");
	
	//주민번호 앞자리 6자리인 경우
	if (jumin1.value.trim().length ==6){
		if (!isNaN(jumin1.value)){//6자리가 숫자인 경우
			jumin2.focus();
		} else {//6자리의 숫자가 아닌경우
			alert("숫자로 입력하세요");
			jumin1.value="";//앞자리 모두 초기화
			jumin1.focus();//앞자리에 포커스를 준다
		}
	}
	
	//주민번호 뒷자리 7자리인 경우
	if (jumin2.value.trim().length == 7){
		if (isNaN(jumin2.value)){//7자리에 문자가 있는경우
			alert("숫자로 입력하세요");
			jumin2.value="";
			jumin2.focus();
		} 
	}
}//function move end


//select 태그에서 선택한 도메인 설정
function domain1(){
	var sel = document.getElementById("sel");
	var domain = document.getElementById("domain");
	
	if (sel.value ==""){//직접입력 선택된 경우
		domain.readOnly = false;
		domain.value="";
		domain.focus();
	} else { //option 중에서 선택한 경우
		domain.readOnly = true; //수정불가
		domain.value = sel.value;
	}
}//function domain1 end


function post() {
	window.open("post.html","post","width=400, height=500")
}


