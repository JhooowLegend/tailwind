import Button from "./Components/Button"

function App() {
  return (
    <div className="bg-darkBackground">
      <Button>
        Primary BackGround
      </Button> 
      <Button variant="secondary">
        Secondary BackGround
      </Button> 
      <Button isBold>
        BoldText with Primary BackGorund
      </Button>
      <Button isBold variant='secondary'>
        BoldText with Secondary Background
      </Button>
    </div>
  )
}

export default App
