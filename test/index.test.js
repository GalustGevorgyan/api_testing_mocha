const expect = require('chai').expect;
const axios = require('axios');
const qs = require('qs');

describe('First test', () => {
    it('Should assert true to be true', () => {
        expect(true).to.be.true;
    });
});


const requestAccessToken = () => {
    const reqHeaders = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Accept-Language': 'en-gb',
        'Audience': 'Any'
    };
    const body = {
        password: 'viv2017Tkn1hPss7',
        grant_type: 'password',
        username: 'vivtknusr7'
    }
    return axios.post("https://stage-vivus.am.instigatemobile.com:44388/oauth2/token",
        qs.stringify(body),
        qs.stringify({ headers: reqHeaders, }));
}

describe('Get User tests', () => {
    it('Get User tests  result', (done) => {
        requestAccessToken()
            .then(response => {
                console.log('response.data ', response.data)
                expect(response.data.token_type).to.equal('bearer')
                expect(response.data.expires_in).to.equal(5399)
                done()
            })
            .catch((error) => {
                done(error);
            });
    });
});