document.getElementById('resultaat').addEventListener('click', submitForm);

    function submitForm(){
        // e.preventDefault();


    

        var form = document.getElementById('formulier');
        
        
        var selector01= parseInt(form.elements["selector01"].value);
        
        var selector02= parseInt(form.elements["selector02"].value);

        var selector03= parseInt(form.elements["selector03"].value);

        var selector04= parseInt(form.elements["selector04"].value);

        var selector05= parseInt(form.elements["selector05"].value);

        var selector06= parseInt(form.elements["selector06"].value);

        var selector07= parseInt(form.elements["selector07"].value);

        
        var som = selector01+selector02+selector03+selector04+selector05+selector06+selector07;
        console.log("dit is de som "+som + "<br>");
        console.log(selector01+ "<br>") ;
        console.log(selector02+ "<br>");
        console.log(selector03+ "<br>");
        console.log(selector04+ "<br>");
        console.log(selector05+ "<br>");
        console.log(selector06+ "<br>");
        console.log(selector07+ "<br>");
        var conclusie = document.getElementById('conc');
        conclusie.innerHTML = som;
    }