import { useRef } from 'react'

function App() {
  const formRef = useRef({});

  const handleSubmit=(e) => {

    

    e.preventDefault();

    console.log('Form Rendering......');

    const formData = new FormData(formRef.current);

    const formObject = Object.fromEntries(formData.entries());

    console.log('Submitted Form Object:', formObject);
    console.log('Name:', formData.get('name'));
    console.log('Age:', formData.get('age'));
    console.log('Category:', formData.get('category'));

    

  }


  return (
    <>
      <form ref={formRef}>  

      name: <input type="text" name="name" />

      age: <input type="number" name="age" />

      Category: <select name="category">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>

      <button onClick={handleSubmit}>Submit</button>


</form>

    </>
  )
}

export default App
