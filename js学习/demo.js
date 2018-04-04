/*var box;
alert(typeof box);
box是Undefined类型，值是undefined，类型返回的字符串是undefined*/
/*var box=true;
alert(typeof box);
box是Boolean，值是true，类型返回的字符串是boolean。
*/
/*
var box={}
alert(box);
box是Object类型，值是[object Object]，类型返回的字符串为object
*/
/*var box=null;
alert(typeof box);
box为Null类型，值为null，
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
	alert("没有匹配的值");
	
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
	alert("我是num="+num);
}
alert("我是num="+num);*/

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
	"name":'常杰',
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
	"name":'常杰',
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
/*var box=new Object();//创建对象，new关键字可以省略
box.name="dd";//添加属性  
box.age=22;
alert(box.name);

//字面量方式创建对象
var box={
	name:"dd",//属性也可以用引号来表示，括起来
	age:25
};
//字面量创建属性

//也可以直接通过字面量创建对象后，使用box.name="";也可以
//给对象添加属性。


//访问对象的属性，可以使用数组的方式访问：box['name']

//使用字面量的方法进行创建函数
var box={
	name:"dd",
	age:12,
	run:function(){ //匿名函数
		alert(22);
	}
}
alert(box.run());//调用函数没有括号会打印出函数代码
//不会调用函数
delete(box.name);//删除属性

*/
//字面量声明对象，清晰以及便于  传参；
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
box({  //匿名对象
	name:"dd",
	age:12,
	hright:178
});
*/
/*var box =new Array();//声明一个数组，空数组
alert(type box);//数组属于object类型

var box=new Array("cj",15);//创建一个数组，并分配三个元素

var box =new Array(10)//创建一个数组，有9个元素

var box=['dd',11];//使用字面量创建数组，并且分配元素
alert(typeof box);
*/


//数组的排序
//自己写的脚本用于进行排序
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

//创建日期对象
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

//创建一个正则表达式
/*var box=new RegExp('Box');//第一个参数是模式字符串
alert(box);  //两个反斜杠 /Box/是正则表达式的表示方法
*/
/*var box=new RegExp('Box','gi');//第一个参数是模式字符串
alert(box);  
*/
//使用字面量方式的正则：
/*var box=/Box/;
alert(box);
*/
/*var box=/Box/ig;//字面量正则，带修饰符的
alert(box);
*/
/*var box=/Box/;
var tr='box';//匹配的字符串
alert(box.test(tr)); //返回flase
*/
/*var box=/Box/i;//不区分大小写
var tr='box';//匹配的字符串
alert(box.test(tr)); //返回true
*/

//一句话正则表达式的测试
/*alert(/Box/i.test('box'));*/

/*var box=/Box/i;   //不区分大小写
var str="This is a box";//一句英文
alert(box.test(str));  //This is a box中是或否包含不区分大小写的Box
*/



/*var box=/Box/i;
var str="box";
alert(box.exec(str));//返回的是数组，如果匹配到有就返回数组的内容，没有返回null
*/

/*var box=/Box/i;  //没有开启全局匹配，
var str="This is a Box! That is a box!";
alert(str.match(box));  //返回Box，返回匹配到的第一个数组
*/

/*var box=/Box/ig;  //开启全局匹配，
var str="This is a Box! That is a box!";
alert(str.match(box));  //返回Box ,box  ,返回一个数组
*/

/*var box=/Box/ig;  //开启全局匹配，
var str="This is a Box! That is a box!";
alert(str.search(box));  //返回的第一个匹配的位置，查找到第一个就返回，开启
//开启全局是没有用的
*/

/*var box=/Box/i;  //没有开启全局匹配，
var str="This is a Box! That is a box!";
alert(str.replace(box,"Tom"));  //返回替换后的字符串，只限第一个
*/

/*var box=/Box/ig;  //开启全局匹配，
var str="This is a Box! That is a box!";
alert(str.replace(box,"Tom"));//返回替换后的字符串，匹配到所有的替换 
*/

/*var box=/!/ig;  //开启全局匹配，
var str="This is a Box! That is a box!";
alert(str.split(box)); //按照！进行分割，返回分割后的数组
*/
/*var box=/ /ig;  //开启全局匹配，
var str="This is a Box! That is a box!";
alert(str.split(box)); //按照空格进行分割，返回分割后的数组
*/


/*var box=/google/i;
var str="This is a google!";
box.test(str);  //必须执行 一下，静态属性才有效
//alert(RegExp.input);//当前被匹配的字符串
//alert(RegExp.leftContext);//最后一次匹配前的字符，打印This is a
*/

/*var box=/google/igm;
//alert(box.global);//判断是否设置全局
//alert(box.ignoreCase);//是否开启大小写匹配
alert(box.multiline);//是否开启了多行匹配
*/




/*var box=/g.ogle/;//点符号表示匹配任意除了换行符外的字符
var str="google";
alert(box.test(str));
*/
/*var box=/go*gle/; //o*  ,表示0个，1个，或者多个o；
var str="google";
alert(box.test(str)); //返回true。若是字符串中没有o，返回false
*/



/*var box=/go{3}gle/;  //o{3}，表示只能限定为3个
var str='gooogle';
alert(box.test(str));
*/
/*var box=/go{3,}gle/;  //o{3,}，表示3个或3个以上
var str='goooooooogle';
alert(box.test(str));
*/
/*
var box=/[a-z]oogle/;//也可以是大写字母[A-Z],也可以为数字，[0-9]
var str="zoogle";
alert(box.test(str));
*/

/*var box=/[0-9]*oogle/;//[0-9]*,表示0次，一次，或者多次
var str="7777oogle";
alert(box.test(str));
*/
/*var box=/[0-9]oogle/;//[0-9]表示一次
var str="oogle";
alert(box.test(str));
*/

/*var box=/^[1-9][0-9]{5}$/;   //^和$表示我们要限制匹配从头到尾
var str="186512";  //[]为区间匹配，{}为位数
alert(box.test(str));
*/

/*var box=/^[\w\-]+\.zip|gz|rar/;  //\-表示包含-字符   
var str="123.zip";  //文件名：字母——数字以及_,zip.gr.rar
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
		alert(this.color);//调用box对象，this指的是box对象
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
//this表示windows作用域，[]表示传递的参数值。
}
alert(sum(10,10));
*/
/*var box=new Number(10000000000000);
//alert(box.valueOf());返回基本类型的数值
//alert(box.toString(8));返回转换为8进制的字符串
//alert(box.toFixed(2));按照指定的小数点位返回字符串
//alert(box.toExponential());返回以指数表示法的字符串
alert(box.toPrecision(8));//根据传参，来指定指数或者点数
*/
/*var box="Hello ";
var result=box.concat("World","!");
alert(result);
*/
/*var box="googloe";
alert(box.indexOf('o')); //注意这里的字符需要加引号。
alert(box.lastIndexOf('o'));
*/

/*var box="googloe";
alert(box.indexOf('o',2)); //注意这里的字符需要加引号。从第二个位置开始搜索
alert(box.lastIndexOf('o',6));//从第6个位置开始向前搜索。
*/

/*var box="googloellooolololooolll";
var boxarr=[];
var pos=box.indexOf('o');
while(pos>-1){
	boxarr.push(pos);//类似堆栈，将数据存贮到栈中
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
alert(box.toLowerCase());//小写
alert(box.toUpperCase());//大写
alert(box.toLocaleUpperCase());//转换成本地化的大写
alert(box.toLocaleLowerCase());//转换成本地化的小写
*/
/*var box="Hello World";
//alert(box.match('o'));
alert(box.search('o'));
*/
/*var box="//Lee李";
a=encodeURI(box);

b=encodeURIComponent(box);
alert(decodeURI(a));//不能对//进行解码
alert(decodeURI(b));
alert(decodeURIComponent(b));//所有的进行解码
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



















































