export const myName = "Hsu Myat Sandi Aung";

export const showMyName = ()=>{
    return myName;
}

export const showMyUI = () =>{
    const h1 = document.createElement("h1");
    h1.innerText = myName;
    document.body.prepend(h1);

}

console.log(showMyName())


showMyUI()