$(document).ready(function(){
//gloabl variable
var performance = 0, b = $('.box'), zero, cross; 
//initial states
$('.main').hide();
$('.replay').hide();
$('.choice').show();
//choose wich symbol to play with
$('#xbut').click(function(){
    zero = 'o';
    cross = 'x';
    $('.box').find("#22").siblings('.mainval').text(zero);
    $('.main').show();
    $('.choice').hide();
});
$('#obut').click(function(){
    zero = 'x';
    cross = 'o';
    $('.box').find("#22").siblings('.mainval').text(zero);
    $('.main').show();
    $('.choice').hide();
});
$('#replay').click(function(){
    location.reload(true);
});
//mouseover effect
b.mouseover(function(){
    $(this).css("background-color", "black");
});
b.mouseout(function(){
    $(this).css("background-color", "white");
});
//All combinations so, the conditions which computer always wins or draw are kept
b.click(function(){            
    $(this).find(".mainval").text(cross);        
    var partext = $(this).find('.pos').text().split('');
    if(performance<1){
        if(partext[0]<3){
            if(partext[0]==='1' && partext[1]==='2'){
                fillRightBox(partext);
            }else{
                fillBottomBox(partext);
            }
        }
        else{
            if(partext[1]<3){
                fillRightBox(partext);
            }else{
                fillTopBox(partext);
            }
        }
}                    
    performance++; 
    if(performance>=2){
        if(getBoxValue(13)===zero){
            if(getBoxValue(31)!==cross){
                assignBoxValue(31,zero);
                gover('.c8');
            }else{
                assignBoxValue(23,zero);
                if(getBoxValue(11)===cross || getBoxValue(21)===cross){
                    assignBoxValue(33,zero);
                    gover('.c6');
                }else if(getBoxValue(32)===cross || getBoxValue(33)===cross){
                    assignBoxValue(21,zero);
                    gover('.c2');
                }
            }
        }else if(getBoxValue(23)===zero && getBoxValue(13)===cross){
            if(getBoxValue(21)!==cross){
                assignBoxValue(21,zero);
                gover('.c2');
            }else{
                assignBoxValue(11,zero);
                if(getBoxValue(12)===cross || getBoxValue(31)===cross){
                    assignBoxValue(32,zero);
                    gover('draw');
                }else if(getBoxValue(32)===cross || getBoxValue(33)===cross){
                    assignBoxValue(31,zero);
                    gover('draw');
                }
            }
        }else if(getBoxValue(33)===zero && getBoxValue(23)===cross){
            if(getBoxValue(11)!==cross){
                assignBoxValue(11,zero);
                gover('.c7');
            }else{
                assignBoxValue(31,zero);
                if(getBoxValue(12)===cross || getBoxValue(21)===cross || getBoxValue(32)===cross){
                    assignBoxValue(13,zero);
                    gover('.c8');
                }else if(getBoxValue(13)===cross){
                    assignBoxValue(32,zero);
                    gover('.c3');
                }
            }
        }else if(getBoxValue(23)===zero && getBoxValue(33)===cross){
            if(getBoxValue(21)!==cross){
                assignBoxValue(21,zero);
                gover('.c2');
            }else{
                assignBoxValue(31,zero);
                if(getBoxValue(11)===cross || getBoxValue(12)===cross){
                    assignBoxValue(13,zero);
                    gover('draw');
                }else if(getBoxValue(13)===cross || getBoxValue(32)===cross){
                    assignBoxValue(11,zero);
                    gover('draw');
                }
            }
        }else if(getBoxValue(33)===zero && getBoxValue(32)===cross){
            if(getBoxValue(11)!==cross){
                assignBoxValue(11,zero);
                gover('.c7');
            }else{
                assignBoxValue(23,zero);
                if(getBoxValue(12)===cross || getBoxValue(13)===cross){
                    assignBoxValue(21,zero);
                    gover('.c2');
                }else if(getBoxValue(21)===cross || getBoxValue(31)===cross){
                    assignBoxValue(13,zero);
                    gover('.c6');
                }
            }
        }
        else if(getBoxValue(32)===zero){
            if(getBoxValue(12)!==cross){
                assignBoxValue(12,zero);
                gover('.c5');
            }else{
                assignBoxValue(21,zero);
                if(getBoxValue(13)===cross || getBoxValue(23)===cross){
                    assignBoxValue(11,zero);
                    gover('draw');
                }else if(getBoxValue(11)===cross || getBoxValue(33)===cross){
                    assignBoxValue(13,zero);
                    gover('draw');
                }
            }
        }else if(getBoxValue(31)===zero){
            if(getBoxValue(13)!==cross){
                assignBoxValue(13,zero);
                gover('.c8');
            }else{
                assignBoxValue(11,zero);
                if(getBoxValue(12)===cross || getBoxValue(23)===cross || getBoxValue(32)===cross){
                    assignBoxValue(33,zero);
                    gover('.c7');
                }else if(getBoxValue(33)===cross){
                    assignBoxValue(23,zero);
                    gover('draw');
                }
            }
        }else if(getBoxValue(21)===zero){
            if(getBoxValue(23)!==cross){
                assignBoxValue(23,zero);
                gover('.c2');
            }else{
                assignBoxValue(12,zero);
                if(getBoxValue(32)===cross || getBoxValue(33)===cross){
                    assignBoxValue(13,zero);
                    gover('draw');
                }else if(getBoxValue(13)===cross || getBoxValue(31)===cross){
                    assignBoxValue(33,zero);
                    gover('draw');
                }
            }
        }
}
});
//helpers
var getBoxValue = function(addressofpar){
    var idofbox;
    if(typeof addressofpar===Array){    
        idofbox = addressofpar.join('');
    }else{
        idofbox = addressofpar;
    }
    return $('.box').find("#"+idofbox).siblings('.mainval').text(); 
}
var assignBoxValue = function(addressofpar,txtofpar){
    var idofbox;
    if(typeof addressofpar==='object'){    
        idofbox = addressofpar.join('');
    }else{
        idofbox = addressofpar;
    }
    $('.box').find("#"+idofbox.toString()).siblings('.mainval').text(txtofpar); 
}
function fillBottomBox(addressofpar){
    addressofpar[0] = Number(addressofpar[0]) + 1;
    assignBoxValue(addressofpar,zero);
}
function fillRightBox(addressofpar){
    addressofpar[1] = Number(addressofpar[1]) + 1;
    assignBoxValue(addressofpar,zero);
}
function fillTopBox(addressofpar){
    addressofpar[0] = Number(addressofpar[0]) - 1;
    assignBoxValue(addressofpar,zero);
}
function gover(par){
    if(par==='draw'){
        $('#gopar').text('Draw!');
    }else{
        $('#gopar').text("You've lost!");
    }
    $(par).css('color','blue');
    $('.replay').show();
    $('.main').fadeOut(4000);    
}
});