require('colors');

const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function displayHeader() {
    process.stdout.write('\x1Bc');
    console.log('----------------------------------------'.cyan);
    console.log('=          Grass Airdrop Bot            ='.cyan);
    console.log('=       Developed by 0xZxcrypto         ='.cyan);
    console.log('=     https://github.com/0xZxcrypto     ='.cyan);
    console.log('----------------------------------------'.cyan);
    console.log();
}

module.exports = { delay, displayHeader };
