/*const wbm = require('wbm');

wbm.start().then(async () => {
    const phones = ['919959894081'];
    const message = 'Good Morning.';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));*/

/*const wbm = require('wbm');

wbm.start().then(async () => {
    const contacts = [
        { phone: '919959894081', name: 'Mummy' },
        { phone: '919491059000', name: 'Swarna'}
    ];
    const message = 'Hi {{name}}';
    // Hi Bruno, your age is 21
    // Hi Will, your age is 33
    await wbm.send(contacts, message);
    await wbm.end();
}).catch(err => console.log(err));*/

const wbm = require('wbm');

wbm.start().then(async () => {
    const contacts = [
        { phone: '919959894081', name: 'Bruno', group: 'friend' }, 
    ];
    for (contact of contacts) {
        let message = 'hi';
        /*if(contact.group === 'customer') {
            message = 'Good morning ' + contact.name;
        }*/
        if(contact.group === 'friend') {
            message = 'Hey ' + contact.name + '. Wassup?';
        }
        await wbm.sendTo(contact.phone, message);
    }
    await wbm.end();
}).catch(err => console.log(err));
