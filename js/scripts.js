

// jQuery
// 1. Adding a new item to the list of items:

function newItem() {
  
  let inputValue = $('#input').val();
  let li = $('<li></li>');
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
  }
}


// 2. Crossing out an item from the list of items:

function crossOut() {
  li.addClass('strike');
}

li.on('dblclick', crossOut);


  // 3(i). Adding the delete button "X":
  let crossOutButton = $('<button></button>');
  crossOutButton.append(document.createTextNode('X'));
  $('li').append(crossOutButton);

  crossOutButton.on('click', deleteListItem);


// 3(ii). Deleting an item from the list of items:

function deleteListItem(li) {
  li.addClass('delete');
}

// 4. Reordering the items:
$('#list').sortable();