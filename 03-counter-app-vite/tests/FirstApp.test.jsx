import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Testing <FirstApp/>>', () => { 
  
  test('should match with snapshot', () => { 
    
    const title = 'Hola, soy Goku';
    render(<FirstApp title={title}/>)

   })

 })