const addDel = () => {
    const form = document.querySelector('.booking-people-form')
    const addButton = document.querySelector('.booking-people__button--plus')
    const delButton = document.querySelector('.booking-people__button--minus')

    const renderAdd = () => {
        const newDiv = document.createElement('div')
        newDiv.classList.add('booking-people-container')
        newDiv.innerHTML = `
        <div class="booking-people-form--half">
                            <div class="booking-people-group booking-people-group--half">
                                <label for="bookingPeopleSurname" class="booking-people__label">Фамилия</label>
                                <input type="text" class="booking-people__input" id="bookingPeopleSurname" value="Иванов">
                            </div>
                            <!-- /.booking-people-group booking-people-group--half -->
                            <div class="booking-people-group booking-people-group--half">
                                <label for="bookingPeopleSurname" class="booking-people__label">Имя</label>
                                <input type="text" class="booking-people__input" id="bookingPeopleSurname" value="Иван">
                            </div>
                            <!-- /.booking-people-group booking-people-group--half -->
                        </div>
                        <!-- /.booking-people-form--half -->
                        <div class="booking-people-group">
                            <label for="bookingPeoplePatr" class="booking-people__label">Отчество</label>
                            <input type="text" class="booking-people__input" id="bookingPeoplePatr" value="Иванович">
                        </div>
                        <!-- /.booking-people-group -->
                        <div class="booking-people-group">
                            <label for="bookingPeopleBorn" class="booking-people__label">Дата рождения</label>
                            <input type="date" class="booking-people__input" id="bookingPeopleBorn">
                        </div>
                        <!-- /.booking-people-group -->
                        <div class="booking-people-group">
                            <label for="bookingPeopleDocs" class="booking-people__label">Номер документа</label>
                            <input type="text" class="booking-people__input" id="bookingPeopleDocs">
                        </div>
                        <!-- /.booking-people-group -->
        `
        form.append(newDiv)
    }
    const renderDel = () => {
        let peopleNumbers = form.querySelectorAll('.booking-people-container')
        if (peopleNumbers.length > 1) {
            peopleNumbers[peopleNumbers.length - 1].remove()
        } else {
            console.log('Кнопка работать не будет');
        }
    }

    addButton.addEventListener('click', () => {
        renderAdd()
    })
    delButton.addEventListener('click', () => {
        renderDel()
    })
}

export default addDel