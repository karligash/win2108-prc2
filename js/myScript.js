
$(document).ready(function(){
    
    $('#btn1').click(function(){
        $('#box1').toggle('slow');
    })
    
    $('#btn2').click(function(){
        $('#box2').toggle('slow');
    })
    
    $('#clickme').click(function(){
        $('#img2').animate({
           left: '250px',
           height: '400 px',
           width: '400px'
       } );
    });
})

