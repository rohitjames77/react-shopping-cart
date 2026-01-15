import { describe,it,expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";



describe('something to be truthy and falsy',()=>{
    it('true be true ', ()=>{
 expect(true).toBe(true)
    })

     it('false be false ', ()=>{
 expect(false).toBe(false)
    })
})
