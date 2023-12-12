// & Challenge #1:
// - Build an object with an array of items and a method to remove items
// - Remove should look through the items list and remove the specific item
// - Log the original items list, remove one item, and log the list again with the change
//
// Extra credit
// - Throw an error log and stop the function from going further if an item is passed that is not in the list all

// !Answer
const cartItems = {
  items: ['apples', 'mangos', 'dogs', 'iphone'],
  remove(item) {
    console.log('removing item');
    return (this.items = this.items.filter(function (currentItem) {
      return currentItem !== item;
    }));
  },
};

console.log(cartItems.items);
cartItems.remove('ipad');
console.log(cartItems.items);

// Extra credit
const cartItems = {
  items: ['apples', 'mangos', 'dogs', 'iphone'],
  remove(itemToRemove) {
    if (this.items.find((item) => item !== itemToRemove)) {
      console.error('invalid item, exiting');
      return false;
    }

    console.log('removing item');
    return (this.items = this.items.filter((currentItem) => {
      return currentItem !== itemToRemove;
    }));
  },
};

cartItems.remove('car');

// & Challenge #2:
// - Create a picture object with a status (default false)
// - Add two custom methods for getting the current download status and another for changing it
// - Getting the status logs the current status and is chainable method
// - Changing the status logs it is changing and is chainable method
// - Check that the picture has the status property
// - If it has the property log that it does
// - Call your pictures custom methods and change the status to true + get the latest status using chaining
//
// Extra credit
// - Change status from true to false outside of the picture object
// - Instead of calling picture change status with a hardcoded true, toggle the current status boolean

// ! Answer
const picture = {
  status: true,

  getDownloadStatus: function () {
    console.log('get status', this.status);
    return this.status;
  },

  changeDownloadStatus: function (status) {
    console.log('changing status to', status);
    this.status = status;
    console.log('new status', this.status);
    return this;
  },
};

if (picture.hasOwnProperty('status')) {
  console.log('has status property');
  picture.changeDownloadStatus(true).getDownloadStatus();
}

// Extra credit
picture.status = false;

if (picture.hasOwnProperty('status')) {
  console.log('has status property');

  const initialDownloadStatus = picture.getDownloadStatus();
  console.log('initial status', initialDownloadStatus);

  picture
    .changeDownloadStatus(!initialDownloadStatus)
    .getDownloadStatus();
}
