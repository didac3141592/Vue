$(function() {
    $("form" ).submit(function( event ) {

        event.preventDefault();
        
        let height = $('#height').val()
        let weight = $('#weight').val()

        let imc = (weight / (height * height) * 10000).toFixed(2)

      $('#results').text(imc)
        
      if (imc<18.6) {
        $('p:nth-of-type(1)').css('color', 'red')
      }

      else if (imc>=18.6 && imc<=24.9) {
        $('p:nth-of-type(2)').css('color', 'green')
      }

      else {
        $('p:nth-of-type(3)').css('color', 'red')
      }
      
    });
}) 