const button= document.querySelector("nav button");
const main2= document.querySelector(".main2");
console.log(main2);

button.addEventListener("click", ()=>{
    main2.classList.toggle('night');
})