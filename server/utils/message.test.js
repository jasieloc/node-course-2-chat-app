var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message).toMatchObject({from, text});
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage',  () => {
  it('should generate correct location object', () => {
    var latitude = 19;
    var longitude = 15;
    var from = 'Jasiel';
    var url = 'https://www.google.com/maps?q=19,15';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message).toMatchObject({from, url});
    expect(typeof message.createdAt).toBe('number');
  });
});
