const links = document.querySelectorAll('a[href^="#"]');
for(let i=0; i< links.length; i++)
{
    links[i].onclick = function()
{
    document.getElementById(links[i].getAttribute('href')).scrollIntoView({behavior: "smooth"});
}
}


let lastScroll = 0;
const defaultoffset =200;
const header = document.querySelector('.header');

const scrollposition = () => window.pageYOffset || document.documentElement.scrollTop;



const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollposition() > lastScroll && !containHide()){
        //scroll down
        header.classList.add('hide');
        console.log('down');
    }
    else if(scrollposition() < lastScroll  && containHide()){
        //scroll up
        header.classList.remove('hide');
        console.log('up');
    }
    lastScroll = scrollposition();
})

window.onload = () => {
const prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function(e)
{
    const currentCurrency = e.target.innerText;

    let newCurrency = "₽";
    let coefficient = 1;
    if(currentCurrency === "₽")
    {
        console.log('₽');
        newCurrency= "$";
        coefficient= 1/97;
    }
    else if(currentCurrency === "$")
    {  
        console.log('$');
        newCurrency= "BYN";
        coefficient= 0.03;
    }
    else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.01;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 0.07;
    }
    e.target.innerText = newCurrency;

    for(let i =0; i<prices.length; i++)
    {
        prices[i].innerText = +Math.floor((prices[i].getAttribute("data-base-price")*coefficient)).toFixed(1) + " " + newCurrency;
    }
}
}
document.addEventListener('DOMContentLoaded', function() {
const product = document.getElementById("product");
const name = document.getElementById("name");
const pphoneoduct = document.getElementById("phone");
document.getElementById("order-action").onclick = function()
{
    let hasError = false;

    [product, name, phone].forEach(item => {
        if(!item.value)
        {
            item.style.borderColor = "red";
            hasError = true;
        }
        else
        {
            item.style.borderColor = "";
        }
    });

    if (phone.value && !/^\d+$/.test(phone.value)) {
        phone.style.borderColor = "red";
        hasError = true;
        alert("Телефон должен содержать только цифры!");
      } else {
        phone.style.borderColor = "";
      }

    // Проверка имени и продукта
    [name, product].forEach(item => {
        if (item.value && !/^[A-Za-zА-Яа-я\s\-()]+$/.test(item.value)) {
          item.style.borderColor = "red";
          hasError = true;
        } else {
          item.style.borderColor = "";
        }
      });
  

    if(!hasError)
    {
        [product, name, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
    }
};
});
