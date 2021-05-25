function insert(symbol) 
{
    if(typeof symbol === "string") {
        if(document.form.textView.value.slice('-1') === symbol) {
            symbol = '';
        }
    }

    document.form.textView.value = document.form.textView.value + symbol;
}

function equal() 
{
    let exp = document.form.textView.value;
    document.form.textView.value = eval(exp);
}

function reset() 
{
    document.form.textView.value = '';
}