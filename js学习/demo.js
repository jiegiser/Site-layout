/*var box;
alert(typeof box);
box��Undefined���ͣ�ֵ��undefined�����ͷ��ص��ַ�����undefined*/
/*var box=true;
alert(typeof box);
box��Boolean��ֵ��true�����ͷ��ص��ַ�����boolean��
*/
/*
var box={}
alert(box);
box��Object���ͣ�ֵ��[object Object]�����ͷ��ص��ַ���Ϊobject
*/
/*var box=null;
alert(typeof box);
boxΪNull���ͣ�ֵΪnull��
*/

/*var box=9;
switch(box){
	case 1:
	alert(1);
	break;
	case 2:
	alert(2);
	break;
	default:
	alert("û��ƥ���ֵ");
	
}*/

/*var box=0;
while(box<18){
box+=2;
alert(box);
}*/
/*for(var box in window){
	document.write(box+'\n');
}*/
/*var num=0;
for(var i=1;i<10;i++){
	if(i%5==0){
		alert(i);
		continue;
		
	}
	//alert(i);
	num++;
	alert("����num="+num);
}
alert("����num="+num);*/

/*switch("Hello"+"World"){
	case "HelloWorld":{
		alert("000000");
		break;
	}
	dfault:{
		alert("11111");
	}
}*/
/*var box=4;
switch(true){
	case box<8:{
		alert("8");
		break;
	}
	case box>9:{
		alert(90);
	}
}*/

/*var i=1;
do{
	i++;
	alert(i);
}
while(i<3);
*/
/*var box={
	"name":'����',
	"age":23,
	"height":178
}
for(var a in box){
	alert(a);
}
*/
/*var i;
for(i=0;i<=10;i++){
	if(i==5)continue;
	document.write(i+"<br/>");
}*/

/*var box={
	"name":'����',
	"age":23,
	"height":178
}
with(box){
	var n=name;
	var a=age;
	var h=height;
}
alert(n+a+h);*/
/*function box(age,hh){
	alert(age+hh);
}
box(18,44);

var a=box(11,22);
alert(a);*/
/*var box=new Object();//��������new�ؼ��ֿ���ʡ��
box.name="dd";//�������  
box.age=22;
alert(box.name);

//��������ʽ��������
var box={
	name:"dd",//����Ҳ��������������ʾ��������
	age:25
};
//��������������

//Ҳ����ֱ��ͨ�����������������ʹ��box.name="";Ҳ����
//������������ԡ�


//���ʶ�������ԣ�����ʹ������ķ�ʽ���ʣ�box['name']

//ʹ���������ķ������д�������
var box={
	name:"dd",
	age:12,
	run:function(){ //��������
		alert(22);
	}
}
alert(box.run());//���ú���û�����Ż��ӡ����������
//������ú���
delete(box.name);//ɾ������

*/
//�������������������Լ�����  ���Σ�
/*function box(obj){
	if(obj.name!=undefined)alert(obj.name);
	if(obj.love!=undefined)alert(obj.love);
	if(obj.age!=undefined)alert(obj.age);
}
var obj={
	name:"dd",
	age:12,
	hright:178
}
box(obj);
box({  //��������
	name:"dd",
	age:12,
	hright:178
});
*/
/*var box =new Array();//����һ�����飬������
alert(type box);//��������object����

var box=new Array("cj",15);//����һ�����飬����������Ԫ��

var box =new Array(10)//����һ�����飬��9��Ԫ��

var box=['dd',11];//ʹ���������������飬���ҷ���Ԫ��
alert(typeof box);
*/


//���������
//�Լ�д�Ľű����ڽ�������
/*function pai(value1,value2){
	if(value1<value2){
		return -1;
	}else if(value1>value2){
		return 1;
	}else{
		return 0;
	}
}
var box= [0,15,10,5];
alert(box.sort(pai));
*/

//�������ڶ���
/*var box =new Date('1/12/2017');
alert(box);*/
/*alert(Date.parse('1/12/2017'));
alert(Date(1484150400000));
*/

/*
var box=new Date();
alert("toString:"+box.toString());
alert("toLocaleString:"+box.toLocaleString());
alert("valueOf:"+box.valueOf());
*/

//����һ��������ʽ
/*var box=new RegExp('Box');//��һ��������ģʽ�ַ���
alert(box);  //������б�� /Box/��������ʽ�ı�ʾ����
*/
/*var box=new RegExp('Box','gi');//��һ��������ģʽ�ַ���
alert(box);  
*/
//ʹ����������ʽ������
/*var box=/Box/;
alert(box);
*/
/*var box=/Box/ig;//���������򣬴����η���
alert(box);
*/
/*var box=/Box/;
var tr='box';//ƥ����ַ���
alert(box.test(tr)); //����flase
*/
/*var box=/Box/i;//�����ִ�Сд
var tr='box';//ƥ����ַ���
alert(box.test(tr)); //����true
*/

//һ�仰������ʽ�Ĳ���
/*alert(/Box/i.test('box'));*/

/*var box=/Box/i;   //�����ִ�Сд
var str="This is a box";//һ��Ӣ��
alert(box.test(str));  //This is a box���ǻ����������ִ�Сд��Box
*/



/*var box=/Box/i;
var str="box";
alert(box.exec(str));//���ص������飬���ƥ�䵽�оͷ�����������ݣ�û�з���null
*/

/*var box=/Box/i;  //û�п���ȫ��ƥ�䣬
var str="This is a Box! That is a box!";
alert(str.match(box));  //����Box������ƥ�䵽�ĵ�һ������
*/

/*var box=/Box/ig;  //����ȫ��ƥ�䣬
var str="This is a Box! That is a box!";
alert(str.match(box));  //����Box ,box  ,����һ������
*/

/*var box=/Box/ig;  //����ȫ��ƥ�䣬
var str="This is a Box! That is a box!";
alert(str.search(box));  //���صĵ�һ��ƥ���λ�ã����ҵ���һ���ͷ��أ�����
//����ȫ����û���õ�
*/

/*var box=/Box/i;  //û�п���ȫ��ƥ�䣬
var str="This is a Box! That is a box!";
alert(str.replace(box,"Tom"));  //�����滻����ַ�����ֻ�޵�һ��
*/

/*var box=/Box/ig;  //����ȫ��ƥ�䣬
var str="This is a Box! That is a box!";
alert(str.replace(box,"Tom"));//�����滻����ַ�����ƥ�䵽���е��滻 
*/

/*var box=/!/ig;  //����ȫ��ƥ�䣬
var str="This is a Box! That is a box!";
alert(str.split(box)); //���գ����зָ���طָ�������
*/
/*var box=/ /ig;  //����ȫ��ƥ�䣬
var str="This is a Box! That is a box!";
alert(str.split(box)); //���տո���зָ���طָ�������
*/


/*var box=/google/i;
var str="This is a google!";
box.test(str);  //����ִ�� һ�£���̬���Բ���Ч
//alert(RegExp.input);//��ǰ��ƥ����ַ���
//alert(RegExp.leftContext);//���һ��ƥ��ǰ���ַ�����ӡThis is a
*/

/*var box=/google/igm;
//alert(box.global);//�ж��Ƿ�����ȫ��
//alert(box.ignoreCase);//�Ƿ�����Сдƥ��
alert(box.multiline);//�Ƿ����˶���ƥ��
*/




/*var box=/g.ogle/;//����ű�ʾƥ��������˻��з�����ַ�
var str="google";
alert(box.test(str));
*/
/*var box=/go*gle/; //o*  ,��ʾ0����1�������߶��o��
var str="google";
alert(box.test(str)); //����true�������ַ�����û��o������false
*/



/*var box=/go{3}gle/;  //o{3}����ʾֻ���޶�Ϊ3��
var str='gooogle';
alert(box.test(str));
*/
/*var box=/go{3,}gle/;  //o{3,}����ʾ3����3������
var str='goooooooogle';
alert(box.test(str));
*/
/*
var box=/[a-z]oogle/;//Ҳ�����Ǵ�д��ĸ[A-Z],Ҳ����Ϊ���֣�[0-9]
var str="zoogle";
alert(box.test(str));
*/

/*var box=/[0-9]*oogle/;//[0-9]*,��ʾ0�Σ�һ�Σ����߶��
var str="7777oogle";
alert(box.test(str));
*/
/*var box=/[0-9]oogle/;//[0-9]��ʾһ��
var str="oogle";
alert(box.test(str));
*/

/*var box=/^[1-9][0-9]{5}$/;   //^��$��ʾ����Ҫ����ƥ���ͷ��β
var str="186512";  //[]Ϊ����ƥ�䣬{}Ϊλ��
alert(box.test(str));
*/

/*var box=/^[\w\-]+\.zip|gz|rar/;  //\-��ʾ����-�ַ�   
var str="123.zip";  //�ļ�������ĸ���������Լ�_,zip.gr.rar
alert(box.test(str));
*/
/*var box=/\s/g;
var str="d df f gg 88 888";
alert(str.replace(box,''));
*/
/*window.color="red";
var box={
	color:"blue",
	setColor:function(){
		alert(this.color);//����box����thisָ����box����
	}
};

alert(this.color);
box.setColor();
*/
/*function sum(num1,num2){
	return num1+num2;
}
alert(sum(1,2));
alert(sum.length);
*/
/*function box(num1,num2){
	return num1+num2;
}
function sum(num1,num2){
	return box.apply(this,[num1,num2]);
//this��ʾwindows������[]��ʾ���ݵĲ���ֵ��
}
alert(sum(10,10));
*/
/*var box=new Number(10000000000000);
//alert(box.valueOf());���ػ������͵���ֵ
//alert(box.toString(8));����ת��Ϊ8���Ƶ��ַ���
//alert(box.toFixed(2));����ָ����С����λ�����ַ���
//alert(box.toExponential());������ָ����ʾ�����ַ���
alert(box.toPrecision(8));//���ݴ��Σ���ָ��ָ�����ߵ���
*/
/*var box="Hello ";
var result=box.concat("World","!");
alert(result);
*/
/*var box="googloe";
alert(box.indexOf('o')); //ע��������ַ���Ҫ�����š�
alert(box.lastIndexOf('o'));
*/

/*var box="googloe";
alert(box.indexOf('o',2)); //ע��������ַ���Ҫ�����š��ӵڶ���λ�ÿ�ʼ����
alert(box.lastIndexOf('o',6));//�ӵ�6��λ�ÿ�ʼ��ǰ������
*/

/*var box="googloellooolololooolll";
var boxarr=[];
var pos=box.indexOf('o');
while(pos>-1){
	boxarr.push(pos);//���ƶ�ջ�������ݴ�����ջ��
	pos=box.indexOf('o',pos+1);
}
alert(boxarr); //1,2,5,9,10,11,13,15,17,18,19
*/
/*var box="   hel   o world    ";
var str=box.trim();
alert(box);
alert(str);
*/
/*var box="Hello World";
alert(box.toLowerCase());//Сд
alert(box.toUpperCase());//��д
alert(box.toLocaleUpperCase());//ת���ɱ��ػ��Ĵ�д
alert(box.toLocaleLowerCase());//ת���ɱ��ػ���Сд
*/
/*var box="Hello World";
//alert(box.match('o'));
alert(box.search('o'));
*/
/*var box="//Lee��";
a=encodeURI(box);

b=encodeURIComponent(box);
alert(decodeURI(a));//���ܶ�//���н���
alert(decodeURI(b));
alert(decodeURIComponent(b));//���еĽ��н���
*/
/*eval("alert(Window)");
eval("alert(100)");
*/

/*alert(Math.E);
alert(Math.PI);
*/
/*alert(Math.min(1,2,3,4,5,6,7,8,9,110));
alert(Math.max(1,2,3,4,5,6,7,8,9,110));
*/
/*var box=[1,2,3,4,5,6,7,8,9,110];
var max=Math.max.apply(Math,box);
alert(max);
alert(Math.min.apply(Math,box));
*/
alert(Math.ceil(25.9));
alert(Math.ceil(25.4));
alert(Math.round(25.9));
alert(Math.floor(25.9));



















































