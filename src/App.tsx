
interface ButtonProps{

title: string; // vai ser responsável por criar a propriedade do titulo dos botões
}

function Button(props: ButtonProps) {
  return (
<button>
{props.title}
</button>

  )
} // funções que retornam html
 function App() {
 return
 <div><Button title="Send 1" />
 <Button title="Send 2" />
 <Button title="Send 3" />
 
 </div> 

 }
export default App
