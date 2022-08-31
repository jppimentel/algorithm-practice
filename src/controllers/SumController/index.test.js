const app = require('../../server');
const request = require('supertest');

test('Number sum', async() => {
    const res = await request(app).post("/sum").send({"a": 10, "b": 5});

    expect(res.body.message).toEqual("Result is 15");
});

test('Input with no numbers', async() => {
    const res = await request(app).post("/sum").send({"a": 'x', "b": 'y'});

    expect(res.body.message).toEqual("a and/or b must be numbers!");
});

test('Required nuumbers', async() => {
    const res = await request(app).post("/sum").send({"a": null, "b": 'y'});

    expect(res.body.message).toEqual("a and/or b is required!");
});

