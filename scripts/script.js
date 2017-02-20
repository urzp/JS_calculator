function add(a,b) {
  return parseInt(a)+parseInt(b);  
};

function multiply(a,b) {
  return parseInt(a)*parseInt(b);   
};

function divide(a,b) {
  return parseInt(a)/parseInt(b);  
};

function subtract(a,b) {
  return parseInt(a)-parseInt(b);   
};

function calculate(a,b,sign) {
    if  (sign == "+"){return add(a,b)};
    if  (sign == "-"){return subtract(a,b)};
    if  (sign == "/"){return divide(a,b)};
    if  (sign == "*"){return multiply(a,b)};
};

function Operation() {  
    this.str_member="";
    this.member = 0;
    this.member_operators = new Array;
    this.result = null;
    
    
    this.get_member = function(sunmol){
        this.str_member+=sunmol;
        this.member = parseInt(this.str_member);
        document.getElementById("display").innerHTML= this.member;
        //alert(this.member); 
    };  
    
    this.negative_numb = function(){
        this.member = -1*this.member;
        document.getElementById("display").innerHTML= this.member;
        //alert(this.member); 
        
    };
    
    
    this.action = function(sign) {
        this.fill_member_operators(sign);
        this.str_member = ""; 
        this.member = 0;
        //alert(this.member_operators);
    };
    
     this.count_result = function() {
         this.member_operators[this.member_operators.length] = this.member;
         //alert(this.member_operators);
         this.result = this.member_operators.splice(0,1);
         
         while (this.member_operators.length > 1 ){
             var removed = this.member_operators.splice(0,2);
             var a = this.result;
             var b = removed[1];
             var sign = removed[0];
             this.result = calculate(a,b,sign);
         };
        // alert(this.result);
        document.getElementById("display").innerHTML= this.result; 
        this.str_member = this.result; 
        this.member = parseInt(this.result);;
        this.result = null;
        this.member_operators = new Array;

     };
    
    this.clear =function() {
        this.str_member = ""; 
        this.member = 0;
        this.result = null;
        this.member_operators = new Array;
        document.getElementById("display").innerHTML= 0;
        //alert(this.member_operators);
    };
    

    this.fill_member_operators = function(sign){
        if (this.str_member != ""){
            this.member_operators[this.member_operators.length] = this.member;
            this.member_operators[this.member_operators.length] = sign;
        } else {
            this.member_operators[this.member_operators.length -1] = sign;    
        }; 
    };
    
    
    
};


var operation = new Operation();

