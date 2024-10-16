
/*function getTemp(id)
{
    valueTemp=document.getElementById(id);
    if(valueTemp)
    {
     //   window.location.href='#' ; target="_blank"
        window.location.href='#?temp='+valueTemp.value;
        x=document.getElementById('idgetTemp');
        out = document.getElementById('idresultTemp');
        if(x)
        { 
            //alert (window.location.href);// http://127.0.0.1/w3/fgeii/#?temp=12,5 
            x.value=out.value 
            
            if(out)
            { 
                z=window.location.href.split('?'); 
                if(z[1]) 
                {
                    z=z[1].split('temp='); 
                    out.value= 'GET: '+z[1];
                }
                else 
                    out.value= 'GET: '+'no'; 
            }
        }
        window.history.pushState({}, document.title, window.location.pathname); 
    }
}*/
document.getElementById('div1').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêcher la soumission par défaut du formulaire
    var inputValue = document.getElementById('idgetTemp').value;
    document.getElementById('idresultTemp').value = inputValue; // Afficher la valeur entrée dans la zone de texte de sortie
});


