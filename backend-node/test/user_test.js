const User = require('../src/models/User');
const assert = require('assert');
  
describe('User register, register check and login tests', () => {

let user;

    beforeEach((done) => {
        user = new User({
            firstName: "Meelis",
            lastName: "Suslik",
            email: "suslik@gmail.com",
            password: "12345678"         
            });
        user.save()
            .then(() => done());
    });


    it('Register test', (done) => {
        assert(!user.isNew);
        done();
    });


    it('Double registration prevention test', (done) => {
    User.findOne({ email: 'suslik@gmail.com' })
        .then((user) => {
            assert(user.email === 'suslik@gmail.com');
            done();
        });
    });


    it('Login test', (done) => {
        User.findOne({ email: 'suslik@gmail.com' })
            .then((user) => {
                assert(user.email === 'suslik@gmail.com', user.password === '12345678');
                done();
            });
    });  
});