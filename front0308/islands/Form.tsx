import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

export const Form: FunctionComponent = () => {
  const [error, setError] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<number|undefined>();
  
  return (
    <div class="form">
      <h1>Introduce tus datos</h1>
      <form   action="/submitform.tsx" method="POST" 
      onSubmit={(e)=> {
        e.preventDefault()
        const errorMsg: string[] = [];
        if (!age || age < 18) {
          errorMsg.push("Age must be 18 or older");
        }
        if (email === "") {
          errorMsg.push("Email is required");
        }
        if (name === "") {
          errorMsg.push("Name is required");
        }
        if (errorMsg.length > 0) {
          setError(errorMsg.join(" | "));
        } else {
          setError("");
          e.currentTarget.submit();

        }
      }}>
        <div>
          <label for="name">Name</label>
        </div>
        <div>
          <input 
          type="text" 
          id="name" 
          name="name"
          onFocus={(e) => setError("")}
          onInput={(e) => setName(e.currentTarget.value)} />
        </div>

        <div>
          <label for="email">Email</label>
        </div>
        <div>
          <input 
          type="email" 
          id="email" 
          name="email" 
          onFocus={(e) => setError("")}
          onInput={(e)=> setEmail(e.currentTarget.value)}/>
          
        </div>

        <div>
          <label for="age">Age</label>
        </div>
        <div>
          <input
            type="number"
            id="age"
            name="age"
            onFocus={(e) => setError("")}
            onInput={(e) => setAge(Number(e.currentTarget.value))}
          />
        </div>
        <div>
          <button type="submit" disabled= {error !== ""} class="btn">
            Submit
          </button>
        </div>
        <div>
          <button type="reset" class="reset" onClick={(e) =>{
            setError("");
            setName("");
            setEmail("");
            setAge(undefined);
            }}>
            Reset
          </button>
        </div>
        <div>
          {error !== "" && <p class="span-2 error">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Form;