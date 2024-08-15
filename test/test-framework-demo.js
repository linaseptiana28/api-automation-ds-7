import request from 'supertest';
const {assert} = await import('chai')

describe('API Test for "reqres.in"', () => {
    it('test - GET list users', async () => {
        const response = await request("https:reqres.in/api/users?page=2")
        .get("")

    // assertion
    assert.equal(response?.statusCode, 200)
    assert.equal(response?.body?.page, 2)
    assert.equal(response?.body?.per_page, 6)
    assert.equal(response?.body?.total, 12)
});

it('test - POST create', async () => {
    const response = await request("https://reqres.in/api/users")
    .post("")
    .send({
        "name": "morpheus",
        "job": "leader"
    })
    // assertion
    assert.equal(response?.statusCode, 201)
    assert.equal(response?.body?.name, 'morpheus')
    assert.equal(response?.body?.job, 'leader')
});

it('test - PUT update', async () => {
    const response = await request("https://reqres.in/api/users/2")
    .put("")
    .send({
        "name": "morpheus",
        "job": "zion resident"
    })
    // assertion
    assert.equal(response?.statusCode, 200)
    assert.equal(response?.body?.name, 'morpheus')
    assert.equal(response?.body?.job, 'zion resident')
});

    it('test - DELETE delete', async () => {
        const response = await request("https://reqres.in/api/users/2")
        .delete("")

        // assertion
    assert.equal(response?.statusCode, 204)
    

});
});
