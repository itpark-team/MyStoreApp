function donwloadButtonClick(button){
    button.textContent = "Скачивается....";

    setTimeout(()=>{
        button.textContent = "Устанавливается....";

        setTimeout(()=>{
            button.textContent = "Установлено";
        },1000);

    }, 1000);
}