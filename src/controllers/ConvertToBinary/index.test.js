const app = require('../../server');
const request = require('supertest');

test('Number 0', async() => {
    const res = await request(app).post("/convertToBinary").send({"number": 0});

    expect(res.body.message).toEqual("Result is 0");
});

test('Number 1', async() => {
    const res = await request(app).post("/convertToBinary").send({"number": 1});

    expect(res.body.message).toEqual("Result is 1");
});

test('Number 5', async() => {
    const res = await request(app).post("/convertToBinary").send({"number": 5});

    expect(res.body.message).toEqual("Result is 101");
});

test('Number 10', async() => {
    const res = await request(app).post("/convertToBinary").send({"number": 10});

    expect(res.body.message).toEqual("Result is 1010");
});

test('Number 27', async() => {
    const res = await request(app).post("/convertToBinary").send({"number": 27});

    expect(res.body.message).toEqual("Result is 11011");
});

test('Number 78', async() => {
    const res = await request(app).post("/convertToBinary").send({"number": 78});

    expect(res.body.message).toEqual("Result is 1001110");
});

test('Number 152', async() => {
    const res = await request(app).post("/convertToBinary").send({"number": 152});

    expect(res.body.message).toEqual("Result is 10011000");
});

test('Number 1981', async() => {
    const res = await request(app).post("/convertToBinary").send({"number": 1981});

    expect(res.body.message).toEqual("Result is 11110111101");
});

test('Number 2019', async() => {
    const res = await request(app).post("/convertToBinary").send({"number": 2019});

    expect(res.body.message).toEqual("Result is 11111100011");
});

