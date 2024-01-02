const fs = require('fs');
const crypto = require('crypto');

// if (fs.existsSync('../.env.local')) {
fs.readFile('.env.local', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

//   require('dotenv').config({ path: '.env.local' });
// } else {
//   throw new Error(
//     "The secret token is only available on your instructor's machine to decrypt .ins files",
//   );
// }

// TODO
