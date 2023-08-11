const creatList = function (todos, filters) {
    let count = 0;
    const filteredTarefas = $.grep(todos, element => {
        return element.name.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    $('#divCopia').empty();

    filteredTarefas.forEach(element => {
        let divElement = $('<div>');
        let buttonElement = $('<button>');
        let labelElement = $('<label>');
        let checkboxElement = $('<input type="checkbox" />');
        buttonElement.text('X');

        buttonElement.on('click', () => {
            //console.log('event triggered', element);
            deleteTarefa(element);
        })

        checkboxElement.attr('checked', element.isCompleted);
        checkboxElement.on('change', () => {
            toggleTarefa(element);
        })

        labelElement.append(checkboxElement);
        labelElement.append('<span>' + element.name + '</span>');
        divElement.append(labelElement);
        divElement.append(buttonElement);

        //divElement.append('<span>'+element.name+'</span>');
        $('.todos').append(divElement);
        if (element.isCompleted == false) {
            count++;
        }


        //$('.todos').append('<div><span>' +element.name+'</span></div>');
        //$('.todos').append(buttonElement);
    })
    $('.status').text('You have ' + count + ' tarefas nao completas');

}