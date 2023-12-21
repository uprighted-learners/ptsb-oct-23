const fs = require('fs');
const crypto = require('crypto');

if (fs.existsSync('./.env.local')) {
  require('dotenv').config({ path: '.env.local' });
} else {
  throw new Error(
    "The secret token is only available on your instructor's machine to decrypt .ins files",
  );
}

// TODO
