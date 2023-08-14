import './App.css'
import OutraLista from './components/OutraLista'


function App() {
  
  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <>
    <h1>Renderização de Listas</h1>
      
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
      
    </>
  )
}

export default App
