
import {
    getNetTotalCost
} from './format'

describe('utils', () => {
        describe('calculate Total Net Cost', () => {
            it('adds 13.532', () => {
                expect(getNetTotalCost(100).toString()).toEqual("113.532")
        })
    })
})
