import { describe,it,expect } from "vitest";

describe('something to be truthy and falsy',()=>{
    it('true be true ', ()=>{
 expect(true).toBe(true)
    })

     it('false be false ', ()=>{
 expect(false).toBe(false)
    })
})