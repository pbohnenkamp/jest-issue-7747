/* eslint-env jest, node, es6 */

async function asyncOne () {
    return Promise.resolve(1)
}

describe('asyncTests', () => {
    it('should fail because expected does not match received', async () => {
        const asyncResult = await asyncOne()
        expect(asyncResult).toBe(2)
    })

    it('should fail because expected does not match received', async () => {
        expect(await asyncOne()).toBe(2)
    })

    it('works with try/catch', async () => {
        try {
            const asyncResult = await asyncOne()
            expect(asyncResult).toBe(2)
        } catch (e) {
            fail(e)
        }
    })
})