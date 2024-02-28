import "../home/home.css"
import { useState } from "react"
import { MdDelete } from "react-icons/md";

const Home = () => {
  const ESCAPE_KEY = 27
  const ENTER_KEY = 13

  const [todos, setTodos] = useState([])
  const [value, setValue] = useState('');

  const submit = () =>{
    console.log(`Submit`, value);

    setTodos([...todos,
      {id: new Date().getTime(), title: value, checked: false}])
  };

  function onChange(event) {
    setValue(event.target.value);
  }

  const onKeyDown = (event) => {
    if(event.which === ENTER_KEY ){
      submit()
      erase()
    }else if(event.which === ESCAPE_KEY){
      erase()
    }
  }

  const onRemove = (todo) => {
    console.log("teste", todo)
    setTodos(todos.filter((obj) => obj.id != todo.id));
  }

  const erase = () => {
    setValue("")
  }

  const toggle = (todo) => {
    setTodos(
      todos.map((obj) => (obj.id === todo.id ? {...obj, checked: !todo.checked}: obj))
    );
    console.log('Toggle', todos)
};


  return <div className="center container">
    <header>
      <h1>Todo</h1>
    </header>
    <section className="main">
      <input type="text" name="" id="" className="new-todo" placeholder="Oque precisa ser feito?" value={value} onChange={onChange} onKeyDown={onKeyDown}/>
      <ul className="todo-list">
        {
          todos.map((todo) => (
            <li key={todo.id.toString()} >
              <span className={['todo', todo.checked ? 'checked' : "" ].join(" ")} onClick={ () => toggle(todo)} onKeyPress={() => toggle(todo)} role='button' >{todo.title}</span>

              <button type="button" onClick={() => onRemove(todo)}> <MdDelete size={24} color="#b64d4d" cursor='pointer' /> </button>
           </li>
          ))
        }
      </ul>
    </section>

  </div>
}

export default Home;