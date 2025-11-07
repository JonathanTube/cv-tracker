import { describe, it, expect } from 'vitest'
import { create, findMany } from '../src/api/company/company.service.js'

describe('test company.service', () => {
    it('create a new company', async () => {
        const result = await create({
            name: 'my company',
            website: 'http://www.baidu.com'
        })
    })

    it('should return an array', async () => {
        const results = await findMany()
        expect(Array.isArray(results)).toBe(true)
    })
})