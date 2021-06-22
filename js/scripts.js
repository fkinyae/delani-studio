$(document).ready(function(){

    //Toggle Item Icons With descriptions/.
    $('div#design').click(function(){
        $('div#design-image').slideUp();
        $('div#design-text').slideDown();

    });
        $('div#design').click(function(){
        $('div#design-text').toggle('slow').hide();
        $('div#design-image').show();

    });
        
        $('div#development').click(function(){
            $('div#dev-image').slideUp();
            $('div#dev-text').slideDown();
        });
            $('div#development').click(function(){
            $('div#dev-text').toggle('slow').hide();
            $('div#dev-image').show();
        });

        $('div#product').click(function(){
            $('div#product-image').slideUp();
            $('div#product-text').slideDown();
        });
            $('div#product').click(function(){
            $('div#product-text').toggle('slow').hide();
            $('div#product-image').show();
        });

       
    //Hovering Images On Portfolio Section.
    $("#black").mouseover(function(){$("#overlay").show();
    })
    .mouseout(function(){$("#overlay").hide();
    });
    $("#ontario").mouseover(function(){$("#overlay1").show();
    })
    .mouseout(function(){$("#overlay1").hide();
    });
    $("#pyramids").mouseover(function(){$("#overlay2").show();
    })
    .mouseout(function(){$("#overlay2").hide();
    });
    $("#jim").mouseover(function(){$("#overlay3").show();
    })
    .mouseout(function(){$("#overlay3").hide();
    });
    $("#nice").mouseover(function(){$("#overlay4").show();
    })
    .mouseout(function(){$("#overlay4").hide();
    });
    $("#calculator").mouseover(function(){$("#overlay5").show();
    })
    .mouseout(function(){$("#overlay5").hide();
    });
    $("#burned").mouseover(function(){$("#overlay6").show();
    })
    .mouseout(function(){$("#overlay6").hide();
    });
    $("#jim").mouseover(function(){$("#overlay3").show();
    })
    .mouseout(function(){$("#overlay3").hide();
    });
    $("#giraffe").mouseover(function(){$("#overlay7").show();
    })
    .mouseout(function(){$("#overlay7").hide();
    });

    
    //Collect User input From contact form and alert.
    $('#myForm').submit(function(event){
        event.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        let message = $('#message').val();
        let output = "Hello " + name + " ...We have received your message, thanks alot for reaching out to us."
        alert(output);
        $('input').val('').removeAttr('checked').removeAttr('selected');
        $('#message').val('').removeAttr('checked').removeAttr('selected');
    });
    


    
  });

  
