function sumar(){
    var num1;
    num1=document.calc.txtnumero1.value
    var num2;
    num2=document.calc.txtnumero2.value
    var opc;
    opc=eval(num1)+eval(num2);
    document.calc.resultado.value=opc;
}
function restar(){
    var num1;
    num1=document.calc.txtnumero1.value
    var num2;
    num2=document.calc.txtnumero2.value
    var opc2;
    opc2=eval(num1)-eval(num2);
    document.calc.resultado2.value=opc2;
}
function multiplicar(){
    var num1;
    num1=document.calc.txtnumero1.value
    var num2;
    num2=document.calc.txtnumero2.value
    var opc3;
    opc3=eval(num1)*eval(num2);
    document.calc.resultado3.value=opc3;
}
function dividir(){
    var num1;
    num1=document.calc.txtnumero1.value
    var num2;
    num2=document.calc.txtnumero2.value
    var opc4;
    opc4=eval(num1)/eval(num2);
    document.calc.resultado4.value=opc4;
}