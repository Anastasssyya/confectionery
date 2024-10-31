const links = document.querySelectorAll('a[href^="#"]');
for(let i=0; i< links.length; i++)
{
    links[i].onclick = function()
{
    document.getElementById(links[i].getAttribute('href')).scrollIntoView({behavior: "smooth"});
}
}
