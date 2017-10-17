function Hoa(){
	a = document.form2.txt1.value;
	document.form2.txt2.value = a.toUpperCase();

}
function Thuong(){
	a = document.form2.txt1.value;
	document.form2.txt2.value = a.toLowerCase();
}
function ThuongHoa(){
	console.log("Goi xu ly");
	a = document.form2.txt1.value;
	//console.log(a);
	str = a.trim();
	n=+str.length;
	result = '';//khai báo chuỗi mới để nhận kết quả

    //Xử lí cho trường hợp chữ đầu tiên của chuỗi
    //nếu chữ thường thì toUpperCase() lên else cộng vào chuỗi mới
	if(str.charAt(0)>='a' && str.charAt(0)<='z'){
		    mo = str.charAt(0);
			result+=mo.toUpperCase();
		}else{
			result+=mo;
		}
	//xử lí cho các trường hợp còn lại
	for(i=1; i<n; i++){
		m = str.charAt(i);//lấy từng kí tự 1
        
		if(str.charAt(i-1)==" "){
			if(str.charAt(i)>='a' && str.charAt(i)<='z'){
			     result+=m.toUpperCase();
		    }else{
			    result+=m;
			}
		}else{
			if(str.charAt(i)>='A' && str.charAt(i)<='Z'){
			    result+=m.toLowerCase();
		    }else{
			    result+=m;
			}
		}
	}
    console.log(result);
	document.form2.txt2.value = result;
}
function SoTu(){
	console.log("Goi xu ly");
	a = document.form2.txt1.value;
	console.log(a);
	str = a.trim();
	n=+str.length;
	console.log(n);
	document.form2.txt2.value = n;

	
}
function Reset(){
	document.form2.txt1.value =' ';
	document.form2.txt2.value =' ';
	document.form2.txt1.focus();
	
}
function Exit(){
	// prompt("Bạn Muốn Thoát Không ?",' ');//Đưa ra thông báo yêu cầu nhập thông tin vào 
    if(confirm("Bạn Muốn Thoát Không?")==true){
    	close();//close window
    }
	
}
