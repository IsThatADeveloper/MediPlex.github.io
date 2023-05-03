    let availableKeywords = [
        'drug1',
        'drug2',
        'drug3',
        'drug4',
        'drug5',
        'drug6',
        'drug7',
        'drug8',
        'drug9',
        'drug10'
    ];

    const resultBox = document.querySelector(".result-box");
    const inputBox = document.getElementById("search-input");

    inputBox.onkeyup = function() { 
        let result = [];
        let input = inputBox.value;
        if(input.length) {
            result = availableKeywords.filter((keyword)=>{
              return keyword.toLowerCase().includes(input.toLowerCase());
            });
            console.log(result); 
        }
        display(result);

        if(!result.length) {
            resultBox.innerHTML = '';
        }
        

    }

    function display(result){
        const content = result.map((list)=>{
            return "<li onclick=selectInput(this)>" + list + "</li>"
        });

        resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
    }  

    function selectInput(list) {
        inputBox.value = list.innerHTML;
        resultBox.innerHTML = '';
    }
