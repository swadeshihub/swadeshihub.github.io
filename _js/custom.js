/* global document */
/* global List */

// LISTJS //

// Define the list options.
const searchOptions = {
  valueNames: [
    'title',
    'category',
    'tags',
    'type',
    { name: 'ingredients', attr: 'data-ingredients' },
    { name: 'ingredients', attr: 'data-ingredients' }
  ],
  fuzzySearch: {
    searchClass: 'search',
    location: 0,
    distance: 20,
    threshold: 0.4,
    multiSearch: true
  }
};

// Define the list object.
const recipeList = new List('js-list', searchOptions);

const checkCategory = document.getElementsByClassName('js-category');
const checkType = document.getElementsByClassName('js-type');
const checkMeat = document.getElementsByClassName('js-meat');
const checkOrigin = document.getElementsByClassName('js-origin');

const checkBoxes = document.getElementsByClassName('searchbar-checkbox');

// Filter the list with the selected filters.
function filterList() {
  const checkedCategory = [];
  const checkedType = [];
  const checkedMeat = [];
  const checkedOrigin = [];

  // Put the checked categories into an array.
  for (let m = 0; m < checkCategory.length; m += 1) {
    if (checkCategory[m].checked) {
      const valueCategory = checkCategory[m].value;
      checkedCategory.push(valueCategory);
    }
  }

  // Put the checked types into an array.
  for (let n = 0; n < checkType.length; n += 1) {
    if (checkType[n].checked) {
      const valueType = checkType[n].value;
      checkedType.push(valueType);
    }
  }

  // Put the checked tags into an array.
  for (let o = 0; o < checkMeat.length; o += 1) {
    if (checkMeat[o].checked) {
      const valueMeat = checkMeat[o].value;
      checkedMeat.push(valueMeat);
    }
  }

  // Put the checked tags into an array.
  for (let p = 0; p < checkOrigin.length; p += 1) {
    if (checkOrigin[p].checked) {
      const valueOrigin = checkOrigin[p].value;
      checkedOrigin.push(valueOrigin);
    }
  }

  const checkedLength =
    checkedCategory.length +
    checkedType.length +
    checkedMeat.length +
    checkedOrigin.length;

  if (checkedLength > 0) {
    // Check if the item matches the filters.
    recipeList.filter(item => {
      // Check if in category.
      const category =
        checkedCategory.length === 0 ||
        checkedCategory.indexOf(item.values().category) > -1;

      // Check if type is shorter.
//       const type =
//         checkedType.length === 0 ||
//         checkedType >= item.values().type;

      // Check if item has tag.
      const type =
        checkedType.length === 0 ||
        checkedType.filter(
          n =>
            item
              .values()
              .tags.split(', ')
              .indexOf(n) !== -1
        ).length > 0;

      // Show the item if it matches the filters.
      if (category && type) {
        return true;
      }

      return false;
    });
  } else {
    // No filters, so clear all filters.
    recipeList.filter();
  }
}

// Filter list when checkbox is clicked.
if (checkBoxes) {
  for (let k = 0; k < checkBoxes.length; k += 1) {
    checkBoxes[k].addEventListener('change', filterList);
  }
}
