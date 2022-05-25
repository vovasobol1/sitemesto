// массив с карточками в виде объектов
const initialCards = [{
        name: 'Гималаи',
        link: 'https://nicko.ru/wp-content/uploads/2016/12/%D0%93%D0%B8%D0%BC%D0%B0%D0%BB%D0%B0%D0%B8.jpg'
    },
   
    {
        name: 'Гранд-Каньон',
        link: 'https://chydesa-mira.ru/wp-content/uploads/2016/12/grand22-min.jpg'
    },
    {
        name: 'Гаваи',
        link: 'https://quick-trips.com/wp-content/uploads/2017/11/christian-joudrey-89399-e1510148866824.jpg'
    },
    {
        name: 'Норвежские фьорды',
        link: 'https://i.pinimg.com/736x/81/e5/e0/81e5e0c68a0fde843d40058035d4a857.jpg'
    },

];


// pop up редактировать профиль 
const openPopUpEditProfile = document.getElementById('pop_up_open');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up_edit_proffile');
const inputName = document.getElementById('input_edit_profile_name')
const inputProfesion = document.getElementById('input_profession')
const saveProfileInfo = document.getElementById('save_profile_info')
const profileName = document.getElementById('profile_name') // имя в секции profile
const ProfileInfoAbout = document.getElementById('profile__info-about'); // деятельность в секции profile


// inputName.value = ProfileName.textContent; // при загрузке страницы поле в форме изменения профиля заполняется текстом из html
// inputProfesion.value = ProfileInfoAbout.textContent;


// обработчик кликa  на кнопку редактировать профиль
openPopUpEditProfile.addEventListener('click', () => {
    popUp.classList.remove('hidden');
})


// обработчик кликa  на кнопку закрыть поп up 
closePopUp.addEventListener('click', () => {
    popUp.classList.add('hidden');
})

saveProfileInfo.addEventListener('click', () => {
    if (inputName.value !== "" && inputProfesion.value !== "") {

        const name = document.getElementById("profile_name")
        name.innerText = inputName.value


    } else
        alert('Ошибка. Вы что-то забыли ввести.');
})


// pop up новый пост
const addNewButton = document.getElementById("pop_up_new_post_open"); // берем кнопку для открытия попапа добавления нового места в секции profile
const addNewPopup = document.getElementById("pop_up_new_post"); // берем попап добавления нового места
const addNewCloseButton = document.getElementById("pop_up_new_post_close"); // берем кнопку закрытия попапа добавления нового места
const addNewForm = document.getElementById("add-new-form");  // берем форму добавления места в попапе
const addNewInputPlace = document.getElementById("input-new-place"); // берем первый инпут формы 
const addNewInputPlaceLink = document.getElementById("input-new-place-link"); // второй инпут формы
const addNewFormSubmit = document.getElementById('#add-new-form-submit');  // субмит формы

addNewButton.addEventListener('click', addPopupOpen); // евентлистенер для открытия попапа
addNewCloseButton.addEventListener('click', addPopupClose); // евентлистенер для закрытия попапа
addNewForm.addEventListener('submit', addNewFormSubmitHandler);  // евентлистенер для обработки формы и добавления нового места

function addPopupOpen() {
   addNewPopup.classList.remove('hidden'); 
} // функция открытия попапа

function addPopupClose() {
    addNewPopup.classList.add('hidden');
}  // функция закрытия попапа



// функция добавления нового места. 
// 1. добавляет в массив карточек новую карточку.
// 2. добавляет новую карточку на страницу с помощью функции generateCard.
// 3. Сбрасывает поля формы и закрывает попап.
function addNewFormSubmitHandler(evt) {
    evt.preventDefault();
    if(addNewInputPlace.value !== '' && addNewInputPlaceLink.value !== '') {
    initialCards.push({name: addNewInputPlace.value, link: addNewInputPlaceLink.value},);
    generateCard(addNewInputPlace.value, addNewInputPlaceLink.value, initialCards.length - 1);
    addNewInputPlace.value = '';
    addNewInputPlaceLink.value = ''
    addPopupClose();
    } else {
        alert('Ошибка. Вы что-то забыли ввести.');
    }
} 



// добавление карточек джаваскриптом при загрузке страницы и добавление карточек пользователем
initialCards.forEach((item, index) => {
    generateCard(item.name, item.link, index);
}); // цикл перебирающий карточки и отрисовывающий карточки из массива InitialCards при закгрузке страницы

// функция принимает на вход описание карточки, ссылку на картинку и ее индекс в массиве и генерирует карточку



// функция которая будет генерировать html карточек
function generateCard(name, link, index) {
    // берем ссылку на враппер постов 
    const resultList = document.getElementById("posts-wrapper")

    // создаем общий див
    const postDomElement = document.createElement('div');
    postDomElement.classList = "w-[282px] h-[361px]  rounded-[10px] flex flex-col  bg-[#FFFFFF]"
    // зосовываем общий див в фраппер всех постов
    resultList.appendChild(postDomElement)

    //  создаем картинку 
    const postPhoto = document.createElement('img');
    postPhoto.src = link    
    postPhoto.classList = "w-[282px] h-[282px] rounded-t-[10px]"
    // зосовываем общий див в фраппер всех постов
    postDomElement.appendChild(postPhoto)

    // создаем див для подписи к посту и лайка 
    const postInfoWrapper = document.createElement('div');
    postInfoWrapper.classList = "flex justify-between my-auto mx-[15px]" //задем стили для див для подписи к посту и лайка 
    // зосовываем див для подписи к посту и лайка  в общий  див 
    postDomElement.appendChild(postInfoWrapper)

    // создаем див для текста подписи к посту 
    const infoAboutPlace = document.createElement('div');
    infoAboutPlace.textContent = name;
    infoAboutPlace.classList = "text-[#FFFFFF] font-black text-base text-[#000000]" //задем стили для див для текста подписи к посту 
    // зосовываем  див для текста подписи к посту  в общий див для подписи к посту и лайка postInfoWrapper
    postInfoWrapper.appendChild(infoAboutPlace)

    // создаем кнопку лайка 
    const like = document.createElement('button');
    like.classList = "w-[22px] h-[19px] hover:opacity-50 " //задем стили для кнопки лайка
    // зосовываем  кнопку лайка в общий див для подписи к посту и лайка postInfoWrapper
    postInfoWrapper.appendChild(like)

    // создаем картинку для кнопки лайка
    const likeImage = document.createElement('img');
    likeImage.src = './images/лайк.jpg'
    // зосовываем  кнопку лайка в общий див для подписи к посту и лайка postInfoWrapper
    like.appendChild(likeImage)

    // создаем кнопку удалить пост 
    const btnDeletePost = document.createElement('button');
    btnDeletePost.textContent = '';
    // прописываем стили для кнопки
    btnDeletePost.classList = "p-4 rounded-none absolute float-right rounded-tl-lg "
    postDomElement.appendChild(btnDeletePost)

    // создаем иконку в кнопку btnDeletePost
    const iconbtnDeletePost = document.createElement('i');
    iconbtnDeletePost.classList = "fa-solid fa-trash-can"

    btnDeletePost.appendChild(iconbtnDeletePost)

    // обработчик клика на кнопку удалить по нажатию выполнится функция deletePost()
    btnDeletePost.addEventListener('click', () => {
        // параметры функции :
        // todoItem это весь обьект  (дело дата актив )
        // todoDomElement это коробка которая содержит дело дату
        deletePost(postDomElement)
    })
}

function deletePost(postDomElement){

    // //создали массив без того дела которое удалили
    // let initialCards = initialCards.filter((item) => item.id !== todoItem.id)


    // удаляем это дело из верски
    const resultList = document.getElementById("posts-wrapper")
    resultList.removeChild(postDomElement);

}