let box_one = document.querySelector(".box_one");
let btn_one = document.querySelector(".btn_one");

let ul_main = document.querySelector(".ul_main");
let li_main = document.querySelector(".li_main");

let for_namta = document.querySelector(".for_namta");
let Guess = document.querySelector(".Guess");
let Guess_value = document.querySelector(".Guess_value");

let flex =document.querySelector(".flex")

let for_error = document.querySelector(".for_error");
let angry = document.querySelector(".angry");
let happy = document.querySelector(".happy");

////////// for error
let error_text = document.querySelector(".error_text");
let store_error = document.querySelector(".store_error");
let error_text_three = document.querySelector(".error_text_three");
////////// for error

// player tow 
let player_two_box = document.querySelector(".player_two_box");
let player_two_btn = document.querySelector(".player_two_btn");
let player_two = document.querySelector(".player_two");
// player tow 
let for_loser =document.querySelector(".for_loser");
let for_loser_three =document.querySelector(".for_loser_three");
let loser =document.querySelector(".loser");
let player_two_elements =document.querySelector(".player_two_elements");
// player 3
let player_thre_eliments = document.querySelector(".player_thre_eliments");
let player_three = document.querySelector(".player_three");
let player_three_btn = document.querySelector(".player_three_btn");
let player_three_box = document.querySelector(".player_three_box");
// player 3
// player 4
let player_four_eliments= document.querySelector(".player_four_eliments");
let player_four= document.querySelector(".player_four");
let player_four_box= document.querySelector(".player_four_box");
let player_four_btn= document.querySelector(".player_four_btn");
// player 4
///////life line
let life_line =document.querySelector(".life_line")
let one = document.querySelector(".one");
let one2 = document.querySelector(".one2");
let one3 = document.querySelector(".one3");
let one4 = document.querySelector(".one4");
let one5 = document.querySelector(".one5");
///////life line


// Winner
let for_winner =document.querySelector(".for_winner");
let winnner =document.querySelector(".winnner");
let amiiii =document.querySelector(".amiiii");
// Winner
let two = document.querySelector(".two")

let time = 0;
let take_gs ="";
let mm
// let error__bank = error_text.innerHTML;

// //////////////////// d-none elements
for_error.classList.add("d-none");
two.classList.add("d-none");
loser.classList.add("d-none");
for_winner.classList.add("d-none");

winnner.classList.add("d-none");
amiiii.classList.add("d-none");

player_thre_eliments.classList.add("d-none");
for_loser_three.classList.add("d-none");
player_four_eliments.classList.add("d-none");


// //////////////////// d-none elements

btn_one.addEventListener("click",function(){
    for_error.classList.remove("d-none");
        mm = box_one.value
        take_gs =box_one.value *9
        time++
        console.log(time)

        if(box_one.value ==""){
            error_text_three.classList.remove("d-none")
            store_error.classList.add("d-none")
            error_text.classList.add("d-none")

        }else{
            if(!(time%2)){
                mm ="";
                ul_main.innerHTML="";
                btn_one.classList.remove("btn-danger")
                Guess.classList.add("d-none")
                btn_one.innerHTML ="Enter"
                for_namta.style.height=`0px`

            }else{
                // box 1 input
                if(box_one.value-1){
                    btn_one.classList.add("btn-danger")
                    Guess.classList.remove("d-none")
                    btn_one.innerHTML ="Remove"
                    for_namta.style.height=`200px`
                    //
                    error_text.classList.add("d-none")
                    store_error.classList.remove("d-none") 
                    error_text_three.classList.add("d-none")
                    //
                    Guess_value.innerHTML=box_one.value;
                    for_error.style.backgroundColor="white"
                    angry.classList.add("d-none")
                    happy.classList.remove("d-none")

                    //namta generator ////
                    for(i=mm; i<=mm;i++){
                        for(j=0; j<11; j++){
                
                            ul_main.innerHTML +=`<li class="lic">${i} x ${j} = ${i*j} </li>`
                        }
                    //namta generator ////

                    two.classList.remove("d-none");

                    //player 2 start ///////
                    player_2_count = 5;
                    player_two_btn.addEventListener("click",function(){
                        player_2_count--
                        if(player_2_count > -1){

                            if(player_2_count < 5){
                            //player_2_count life line box start/////                                
                                one5.classList.add('d-none');
                                one4.style.backgroundColor = "rgb(193, 255, 68)";
                                one3.style.backgroundColor = "rgb(193, 255, 68)";
                                one2.style.backgroundColor = "rgb(193, 255, 68)";
                                one.style.backgroundColor = "rgb(193, 255, 68)";
                            }
                            if(player_2_count < 4){
                                one4.classList.add('d-none');
                                one3.style.backgroundColor = "rgb(238, 255, 0)";
                                one2.style.backgroundColor ="rgb(238, 255, 0)";
                                one.style.backgroundColor = "rgb(238, 255, 0)";
                            }
                            if(player_2_count < 3){
                                one3.classList.add('d-none');
                                one2.style.backgroundColor ="rgb(255, 68, 68)";
                                one.style.backgroundColor = "rgb(255, 68, 68)";
                            }
                            if(player_2_count < 2){
                                one2.classList.add('d-none');
                                one.style.backgroundColor = "rgb(212, 0, 0)";
                            }
                            //player_2_count life line box end/////                                

                            if(player_two_box.value == ""){
                                error_text_three.classList.remove("d-none")
                                store_error.classList.add("d-none")
                                error_text.classList.add("d-none")

                                for_error.style.backgroundColor = "white";
                                angry.classList.add("d-none")
                                happy.classList.remove("d-none")
                                // for_error.style.backgroundColor = "black";

                            }else{
                                for_error.style.backgroundColor = "white";
                                angry.classList.add("d-none")
                                happy.classList.add("d-none")
                                one.classList.add('d-none');
                                error_text_three.classList.add("d-none")
                                store_error.classList.remove("d-none")
                                error_text.classList.add("d-none")
                                if(!(player_two_box.value - 1)){

                                    error_text.classList.remove("d-none")
                                    store_error.classList.add("d-none")
                                    angry.classList.remove("d-none")
                                    happy.classList.add("d-none")
                                    for_error.style.backgroundColor = "black";
        
                                }else{
                                    error_text.classList.add("d-none")
                                    store_error.classList.remove("d-none")
                                    angry.classList.add("d-none")
                                    happy.classList.remove("d-none")
                                    for_error.style.backgroundColor = "white";
                                    
                                    if(player_two_box.value == take_gs){
                                        for_winner.classList.remove("d-none");
                                        winnner.classList.remove("d-none");
                                        amiiii.classList.remove("d-none");
                                        flex.style.display="none";
                                        winnner.innerHTML = "player 2 wins the game";
                                    }
                                }
                            }

                        }else{
                            player_two.classList.add("d-none");
                            player_two_box.classList.add("d-none");
                            player_two_btn.classList.add("d-none");
                            loser.classList.remove("d-none");
                            player_two_elements.classList.add('d-none');
                            player_thre_eliments.classList.remove('d-none');

                            // life line box /////

                            one.classList.remove("d-none");
                            one2.classList.remove("d-none");
                            one3.classList.remove("d-none");
                            one4.classList.remove("d-none");
                            one5.classList.remove("d-none");

                            one.style.backgroundColor = "rgb(68, 255, 68)";
                            one2.style.backgroundColor = "rgb(68, 255, 68)";
                            one3.style.backgroundColor = "rgb(68, 255, 68)";
                            one4.style.backgroundColor = "rgb(68, 255, 68)";
                            one5.style.backgroundColor = "rgb(68, 255, 68)";
                            
                            // life line box /////
                            count__3=5;
                            player_three_btn.addEventListener("click",function(){

                                count__3--;
                                if(count__3 > -1){
                            // life line box /////                                    
                                    if(count__3 < 5){
                                        one5.classList.add('d-none');
                                        one4.style.backgroundColor = "rgb(193, 255, 68)";
                                        one3.style.backgroundColor = "rgb(193, 255, 68)";
                                        one2.style.backgroundColor = "rgb(193, 255, 68)";
                                        one.style.backgroundColor = "rgb(193, 255, 68)";
                                    }
                                    if(count__3 < 4){
                                        one4.classList.add('d-none');
                                        one3.style.backgroundColor = "rgb(238, 255, 0)";
                                        one2.style.backgroundColor ="rgb(238, 255, 0)";
                                        one.style.backgroundColor = "rgb(238, 255, 0)";
                                    }
                                    if(count__3 < 3){
                                        one3.classList.add('d-none');
                                        one2.style.backgroundColor ="rgb(255, 68, 68)";
                                        one.style.backgroundColor = "rgb(255, 68, 68)";
                                    }
                                    if(count__3 < 2){
                                        one2.classList.add('d-none');
                                        one.style.backgroundColor = "rgb(212, 0, 0)";
                                    }
                                    // player_three_box value empty check  
                                    if(player_three_box.value == ""){
                                        error_text_three.classList.remove("d-none")
                                        store_error.classList.add("d-none")
                                        error_text.classList.add("d-none")

                                        for_error.style.backgroundColor = "white";
                                        angry.classList.add("d-none")
                                        happy.classList.remove("d-none")
                                    // life line box /////             
                                    }else{
                                        for_error.style.backgroundColor = "white";
                                        angry.classList.add("d-none")
                                        happy.classList.add("d-none")

                                        error_text_three.classList.add("d-none")
                                        store_error.classList.remove("d-none")
                                        error_text.classList.add("d-none")
                                        
                                        if(!(player_three_box.value - 1)){
                                            error_text.classList.remove("d-none")
                                            store_error.classList.add("d-none")
                                            angry.classList.remove("d-none")
                                            happy.classList.add("d-none")
                                            for_error.style.backgroundColor = "black";
                
                                        }else{
                                            error_text.classList.add("d-none")
                                            store_error.classList.remove("d-none")
                                            angry.classList.add("d-none")
                                            happy.classList.remove("d-none")
                                            for_error.style.backgroundColor = "white";
                                            
                                            if(player_three_box.value == take_gs){
                                                for_winner.classList.remove("d-none");
                                                winnner.classList.remove("d-none");
                                                amiiii.classList.remove("d-none");
                                                flex.style.display="none";
                                                winnner.innerHTML = "player 3 wins the game";
                                            }
                                        }
                                    }
                                }else{
                                    one.classList.add('d-none');
                                    one5.classList.add('d-none');
                                    player_thre_eliments.classList.add("d-none")
                                    error_text_three.classList.add("d-none")
                                    store_error.classList.remove("d-none")
                                    error_text.classList.add("d-none")
                                    for_loser.classList.add("d-none");
                                    loser.classList.remove("d-none");
                                    for_loser_three.classList.remove("d-none");
                                    player_four_eliments.classList.remove("d-none");

                                    one.classList.remove("d-none");
                                    one2.classList.remove("d-none");
                                    one3.classList.remove("d-none");
                                    one4.classList.remove("d-none");
                                    one5.classList.remove("d-none");
        
                                    one.style.backgroundColor = "rgb(68, 255, 68)";
                                    one2.style.backgroundColor = "rgb(68, 255, 68)";
                                    one3.style.backgroundColor = "rgb(68, 255, 68)";
                                    one4.style.backgroundColor = "rgb(68, 255, 68)";
                                    one5.style.backgroundColor = "rgb(68, 255, 68)";
                                    count__4=5;
                                    player_four_btn.addEventListener("click",function(){
        
                                        count__4--;
                                        if(count__4 > -1){
                                            
                                            if(count__4 < 5){
                                                one5.classList.add('d-none');
                                                one4.style.backgroundColor = "rgb(193, 255, 68)";
                                                one3.style.backgroundColor = "rgb(193, 255, 68)";
                                                one2.style.backgroundColor = "rgb(193, 255, 68)";
                                                one.style.backgroundColor = "rgb(193, 255, 68)";
                                            }
                                            if(count__4 < 4){
                                                one4.classList.add('d-none');
                                                one3.style.backgroundColor = "rgb(238, 255, 0)";
                                                one2.style.backgroundColor ="rgb(238, 255, 0)";
                                                one.style.backgroundColor = "rgb(238, 255, 0)";
                                            }
                                            if(count__4 < 3){
                                                one3.classList.add('d-none');
                                                one2.style.backgroundColor ="rgb(255, 68, 68)";
                                                one.style.backgroundColor = "rgb(255, 68, 68)";
                                            }
                                            if(count__4 < 2){
                                                one2.classList.add('d-none');
                                                one.style.backgroundColor = "rgb(212, 0, 0)";
                                            }
                                            if(player_four_box.value == ""){
                                                error_text_three.classList.remove("d-none")
                                                store_error.classList.add("d-none")
                                                error_text.classList.add("d-none")

                                                for_error.style.backgroundColor = "white";
                                                angry.classList.add("d-none")
                                                happy.classList.remove("d-none")
                
                                            }else{

                                                for_error.style.backgroundColor = "white";
                                                angry.classList.add("d-none")
                                                happy.classList.remove("d-none")

                                                error_text_three.classList.add("d-none")
                                                store_error.classList.remove("d-none")
                                                error_text.classList.add("d-none")

                                                if(!(player_four_box.value - 1)){
                
                                                    error_text.classList.remove("d-none")
                                                    store_error.classList.add("d-none")
                                                    angry.classList.remove("d-none")
                                                    happy.classList.add("d-none")
                                                    for_error.style.backgroundColor = "black";
                        
                                                }else{
                                                    error_text.classList.add("d-none")
                                                    store_error.classList.remove("d-none")
                                                    angry.classList.add("d-none")
                                                    happy.classList.remove("d-none")
                                                    for_error.style.backgroundColor = "white";
                                                    
                                                    if(player_four_box.value == take_gs){
                                                        for_winner.classList.remove("d-none");
                                                        winnner.classList.remove("d-none");
                                                        amiiii.classList.remove("d-none");
                                                        flex.style.display="none";
                                                        winnner.innerHTML = "player 4 wins the game";
                                                    }
                                                }
                                            }
                                        }else{
                                            for_winner.classList.remove("d-none");
                                            winnner.classList.remove("d-none");
                                            amiiii.classList.remove("d-none");
                                            flex.style.display="none";
                                            winnner.innerHTML = "player 1 wins the game";
                                        }
                                    })

                                }
                                
                            })
                            // / 
                        }


                    })
                    //player 2 end/////////
                    }
                }else{
                    for_error.style.backgroundColor = "black";
                    error_text.classList.remove("d-none");
                    store_error.classList.add("d-none");
                    error_text_three.classList.add("d-none");

                    angry.classList.remove("d-none");
                    happy.classList.add("d-none");
                    

                }


            }
        }
    
},)





                     //1//////  error_text////////////Counter Enginr start///////////////////////
                        


                        
                     let error_text_funtion_holder = error_text.innerHTML.split("");
                     let error_text_funtion_holder_two = error_text.innerHTML.split("");
                     let error_text_holder = error_text.innerHTML;
                     
                     error_text.innerHTML = "";
                     
                     
                     let en_counter = -1;
 
                     
                         function call(){
                     
                             if(en_counter < error_text_holder.length){
                                 en_counter++
 
                                 error_text.innerHTML += error_text_holder.charAt(en_counter);
                                 error_text_funtion_holder_two=[...error_text_funtion_holder];
                             }else{
                    
                                 error_text_funtion_holder.pop("");
                                 error_text.innerHTML= error_text_funtion_holder.join("");
                     
                                 // console.log(error_text_funtion_holder)
                     
                                 if(error_text_funtion_holder == 0){
                                     error_text_funtion_holder=[...error_text_funtion_holder_two];
                                     // console.log(error_text_funtion_holder_two)
                                     en_counter=  -1;
                                 }
                     
                             }
                         }
                     
                     
                         setInterval(function(){
                             call()
 
                         },300)
 
             
             
                     //1//////  error_text////////////Counter Enginr End///////////////////////
 




                    //2//////  error_text////////////Counter Enginr start///////////////////////
                        

                        
                    let store_error_fn = store_error.innerHTML.split("");
                    let store_error_fn_two = store_error.innerHTML.split("");
                    let store_e_text_h = store_error.innerHTML;
                
                    store_error.innerHTML = "";
                    
                    
                    let counter_twoo = -1;
                    
                    
                    
                        function call_two(){
                    
                            if(counter_twoo < store_e_text_h.length){
                                counter_twoo++

                                store_error.innerHTML += store_e_text_h.charAt(counter_twoo);
                                store_error_fn_two=[...store_error_fn];
                            }else{
                    
                                store_error_fn.pop("");
                                store_error.innerHTML= store_error_fn.join("");
                    
                                // console.log(error_text_funtion_holder)
                    
                                if(store_error_fn == 0){
                                    store_error_fn=[...store_error_fn_two];
                                    // console.log(error_text_funtion_holder_two)
                                    counter_twoo=  -1;
                                }
                    
                            }
                        }
                    
                    
                        setInterval(function(){
                            call_two()

                        },300)

            
            
                    //2//////  error_text////////////Counter Enginr End///////////////////////

                    //3///  error_text_three///////////////Counter Enginr start///////////////////////
                        
                    let eRRthree = error_text_three.innerHTML.split("");
                    let e_t_hold = error_text_three.innerHTML.split("");
                    let t_text_h = error_text_three.innerHTML;
                
                    error_text_three.innerHTML = "";
                    
                    
                    let count_three = -1;
                    
                    
                    
                        function call_three(){
                    
                            if(count_three < t_text_h.length){
                                count_three++

                                error_text_three.innerHTML += t_text_h.charAt(count_three);
                                e_t_hold=[...eRRthree];
                            }else{
                    
                                eRRthree.pop("");
                                error_text_three.innerHTML= eRRthree.join("");
                    

                    
                                if(eRRthree == 0){
                                    eRRthree=[...e_t_hold];

                                    count_three =  -1;
                                }
                    
                            }
                        }
                    
                    
                        setInterval(function(){
                            call_three()

                        },200)
            
                    //3//  error_text_three////////////////Counter Enginr End///////////////////////









// background move start///////////

window.addEventListener("mousemove",function(e){

    amiiii.style.top=`${e.clientY / 8}px`;
    amiiii.style.left=`${e.clientX / 8}px`;
})
// background move end///////////
