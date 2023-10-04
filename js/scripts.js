$(document).ready(function() {


// adding a new item when button is clicked
  $('#button').click(function() {
    let item = $('#input').val();
    $('ol').append('<li>' + item + '<i class="fa-solid fa-square-check"></i> <i class="fa-solid fa-trash"></i>' + '</li>');
  });
// Adding a new item with the enter key
  $('#input').on('keypress', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      let item = $('#input').val();
      $('ol').append('<li>' + item + '<i class="fa-solid fa-square-check"></i> <i class="fa-solid fa-trash"></i>' + '</li>');
    }
  });
// clearing the input field when CLEAR button is clicked
$('#clear-button').click(function() {
  $('#input').val('');
});

// 2. deleting an item from the list of items:
  $('ol').on('click', '.fa-trash', function() {
    $(this).parent('li').fadeOut(200);
  });

// 3. Crossing out an item from the list of items:
// i. with a click on the trash icon
  $('ol').on('click', '.fa-square-check', function() {
    $(this).parent('li').toggleClass('strike');
  });
// ii. with a double click on the item
  $(document).on('dblclick', 'li', function() {
    $(this).parent('li').toggleClass('strike');
  });

// 4. Reordering the items:
  $('#list').sortable();

});




// Version that didnt work

// jQuery
// 1. Adding a new item to the list of items:

// function newItem() {
  
//   let inputValue = $('#input').val();
//   let li = $('<li></li>');
//   li.append(inputValue);

//   if (inputValue === '') {
//     alert('You must write something!');
//   } else {
//     $('#list').append(li);
//   }
// }


// 2. Crossing out an item from the list of items:

// $('li').on('click', function() {
//   li.addClass('strike');
// });


// // 3(i). Adding the delete button "X":
// let crossOutButton = $('<button></button>');
// crossOutButton.append(document.createTextNode('X'));
// $('li').append(crossOutButton);

// crossOutButton.on('click', deleteListItem);


// // 3(ii). Deleting an item from the list of items:

// function deleteListItem(li) {
//   li.addClass('delete');
// }

