const home = document.getElementById('home')
const services = document.getElementById('services')
const ourWork = document.getElementById('ourWork')
const clients = document.getElementById('clients')
const scrollTopBtn = document.getElementById('scrollTopBtn')
const navLinks = document.getElementById('navLinks')
const navClose = document.getElementById('navClose')
const navOpener = document.getElementById('navOpener')



const Home = document.getElementById('Home')
const Services = document.getElementById('Services')
const OurWork = document.getElementById('OurWorks')
const Clients = document.getElementById('Clients')




scrollTopBtn.style.display = 'none'

window.addEventListener('scroll', () => { 


let topOfHome = Home.offsetTop;
let topOfServices = Services.offsetTop - 1;
console.log(topOfServices);
let topOfOurWork = OurWork.offsetTop - 1;
let topOfClients = Clients.offsetTop - 1;

let bottomOfHome = Home.offsetTop + Home.offsetHeight + Home.style.marginTop - 2;
console.log(bottomOfHome);
let bottomOfServices = Services.offsetTop + Services.offsetHeight + Services.style.marginTop - 2;
let bottomOfOurWork = OurWork.offsetTop + OurWork.offsetHeight + OurWork.style.marginTop - 2;
let bottomOfClients = Clients.offsetTop + Clients.offsetHeight + Clients.style.marginTop - 2;

let topOfScreen = window.scrollY;

if (topOfScreen >= topOfHome && topOfScreen <= bottomOfHome) {
    home.classList.add('navLinkActive') 
    scrollTopBtn.style.display = 'none'
}else{
    home.classList.remove('navLinkActive')
    scrollTopBtn.style.display = 'flex'
}
if (topOfScreen >= topOfServices && topOfScreen <= bottomOfServices) {
    services.classList.add('navLinkActive')   
}else{
    services.classList.remove('navLinkActive')}
if (topOfScreen >= topOfOurWork && topOfScreen <= bottomOfOurWork) {
    ourWork.classList.add('navLinkActive')   
}else{
    ourWork.classList.remove('navLinkActive')
}
if (topOfScreen >= topOfClients && topOfScreen <= bottomOfClients) {
    clients.classList.add('navLinkActive')  
}else{
    clients.classList.remove('navLinkActive')
}})

 function ScrollTop() {
    scrollTo(0,0)
 }

 navClose.addEventListener('click', () => {
    NavOpen(navOpener)
 })
 function NavOpen(nav) {
    nav.classList.toggle('navActive')
    navLinks.classList.toggle('navLinksActive')
 }
 function navOpen(item) {
    NavOpen(navOpener)
    item.classList.add('navLinkActive')
    
 } 



