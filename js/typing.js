/*typing animation*/
var typed = new Typed(".typing",{
    strings:["","Web Developer","Web Designer","Blogger",""],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,
})
/*aside*/
const nav = document.querySelector(".nav"),
     navList = nav.querySelectorAll("li"),
     totalNavList = navList.length;
     for(let i=0; i<totalNavList; i++)
     {
         const a= navList[i].querySelector("a");
         console.log(a);
     }