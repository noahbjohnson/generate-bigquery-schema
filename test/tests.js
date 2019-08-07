const pkg = require('../dist')
const assert = require('assert')

describe('just', function () {
  describe('beat', function () {
    it('just beat it', function () {
      assert(1 === 1)
    })
  })
})

describe('Single Object Tests', function () {
  describe('Edge Cases', function () {
    it('should return a valid empty schema', function () {
      assert.notStrictEqual(pkg.generateSchema({}), { fields: [] })
    })
    it('should throw a type error', function () {
      assert.throws(() => {pkg.generateSchema(5)}, 'TypeError')
    })
    it('should throw a type error', function () {
      assert.throws(() => {pkg.generateSchema('foobar')}, 'TypeError')
    })
  })
})

describe('List Object Tests', function () {
  it('should print freq', function () {
    console.log(pkg.generateSchema([
      {
        'event_properties': {
          'Email Domain': 'atlanticbbn.net',
          '$event_id': 'KXUTXF:28159765131568231995551455694632799288:1556290921',
          '$_cohort$message_send_cohort': '1556290912:KXUTXF',
          'Bounce Type': 'Hard',
          '$message': 'KXUTXF',
          'Campaign Name': 'Calling - Tips & Tricks - Episode 10: Understanding Clicks & Pops - IS',
          'Subject': 'Deer Calling Tips ▶️ E.10: Understanding Clicks & Pops'
        },
        'uuid': '3ea37a80-6834-11e9-8001-656abd957ed9',
        'event_name': 'Bounced Email',
        'timestamp': 1556290921,
        'object': 'event',
        'datetime': '2019-04-26 15:02:01+00:00',
        'person': {
          'updated': '2019-04-26 15:02:24',
          'last_name': '',
          '$longitude': -79.0808,
          '$email': 'awalker@atlanticbbn.net',
          'object': 'person',
          '$latitude': 40.0248,
          'MailChimp Rating': 2,
          '$address1': '',
          '$address2': '',
          '$title': '',
          '$timezone': '',
          'id': 'MBL5nj',
          'Interests': [
            'calling and rattling',
            'scent control',
            'podcast',
            'habitat',
            'film series',
            'promotions',
            'moon guide'
          ],
          'first_name': '',
          '$organization': '',
          '$region': 'Pennsylvania',
          '$id': '',
          'created': '2019-04-22 13:38:59',
          '$last_name': '',
          '$phone_number': '',
          '$country': 'United States',
          '$zip': '',
          '$first_name': '',
          '$city': 'Somerset',
          'email': 'awalker@atlanticbbn.net'
        },
        'statistic_id': 'MMaRwj',
        'id': '3dqf45En'
      },
      {
        'event_properties': {
          'Email Domain': 'testdomain.com',
          '$event_id': 'sdfg:34567890987654567898765:465',
          '$_cohort$message_send_cohort': '2345:sdfg',
          'Bounce Type': 'Soft',
          '$message': 'AHDMN',
          'Campaign Name': 'BUY MY PRODUCTS NOW DAMNIT',
          'Subject': 'New Arrivals!'
        },
        'uuid': 'asdf234432-23423-11e9-2432-asdf324435',
        'event_name': 'Bounced Email',
        'timestamp': 1556250935,
        'object': 'event',
        'datetime': '2014-04-26 10:02:15+00:00',
        'person': {
          'updated': '2019-08-01 10:36:32',
          'last_name': '',
          '$longitude': -81.5943,
          '$email': 'fakeuser@fakesite.com',
          'object': 'person',
          '$latitude': 44.4444,
          'MailChimp Rating': 0,
          '$address1': '',
          '$address2': '',
          '$title': '',
          '$timezone': '',
          'id': 'asdfds',
          'Interests': [
            'expensive candles',
            'expensive shirts',
            'dancing on graves of the proletariat'
          ],
          'first_name': '',
          '$organization': '',
          '$region': 'District 1',
          '$id': '',
          'created': '2019-01-22 13:14:48',
          '$last_name': '',
          '$phone_number': '',
          '$country': 'United States',
          '$zip': '',
          '$first_name': '',
          '$city': 'Moriar',
          'email': 'richguy123@aynrand.com'
        },
        'statistic_id': '2354',
        'id': 'rwwret3244135rgfdsf43trefd'
      },
      {
        'event_properties': {
          'Email Domain': 'afds.com',
          '$event_id': 'alhgsdjfkgsdajhkf:28159946880973039717941895284454870072:1556290936',
          '$_cohort$message_send_cohort': '1556290927:HAJSDKFLJKLADHS',
          'Bounce Type': 'Soft',
          '$message': 'KXUJADSHFKLSTXF',
          'Campaign Name': 'I HATE WRITING TEST CASES',
          'Subject': 'How is this even helpful? We can test in production...'
        },
        'uuid': 'asdf-68asdf34-11as44321dfe9-32452145-34t52',
        'event_name': 'Bounced Email',
        'timestamp': 1516290936,
        'object': 'event',
        'datetime': '2019-09-26 15:02:16+00:00',
        'person': {
          'updated': '2019-09-01 16:01:38',
          'last_name': '',
          '$longitude': -91.4355,
          '$email': 'lucifer@hotmail.com',
          'object': 'person',
          '$latitude': 44.2345,
          'MailChimp Rating': 3,
          '$address1': '',
          '$address2': '',
          '$title': '',
          '$timezone': 'America/Chicago',
          'id': 'JUjSRQ',
          'Interests': [
            'AHHHHHHH',
          ],
          'first_name': '',
          '$organization': '',
          '$region': 'California',
          '$id': '',
          'created': '2019-04-22 13:15:54',
          '$last_name': '',
          '$phone_number': '',
          '$country': 'United States',
          '$zip': '',
          '$first_name': '',
          '$city': '',
          'email': 'lucifer@hotmail.com'
        },
        'statistic_id': 'asdf',
        'id': 'HJDJD8847FHJASLDF84Y9OHDLAHFSLJKVLNCKLDS'
      }]))
  })

})
