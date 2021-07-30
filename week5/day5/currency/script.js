const select = document.querySelectorAll('select');
const input = document.querySelectorAll('input');
let html = '';

async function getRates(){
    let url = await fetch ( 'http://api.exchangeratesapi.io/v1/latest?access_key=02de956dd69902de7483d627f016e5ee&format=1')
    let data= await url.json();
    // console.log(data)
    const arrRates = Object.keys(data.rates)
    const rates = data.rates
    console.log(rates)
    arrRates.map(item => {
        return html += `<Option value=${item}>${item}</Option>`
    });
    // console.log(html)
    for(let i = 0; i < select.length; i++){
        select[i].innerHTML = html;
        // console.log(select)
    }
    input[0].addEventListener('keyup', ()=>{
        input[1].value = input[0].value * rates[select[1].value] / rates[select[0].value];
    });
    
    input[1].addEventListener('keyup', ()=>{
        input[0].value = input[1].value * rates[select[0].value] / rates[select[1].value];
    })
};
getRates()