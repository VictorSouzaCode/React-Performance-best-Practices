import './App.css'
import ReRender from './exercises/ReactRenderingModel/see-re-renders/ReRender'
import PreventReRenders from './exercises/ReactRenderingModel/prevent-ReRenders/Prevent-ReRenders'
import IdentityTrap from './exercises/ReactRenderingModel/propsIdentityTrap/IdentityTrap'
import Batching from './exercises/ReactRenderingModel/batching/Batching'
import DerivedState from './exercises/ReactRenderingModel/derivedState/DerivedState'
import RedundantState from './exercises/ReactRenderingModel/derivedState/RedundantState'
import ExpensiveComponent from './exercises/ReactRenderingModel/expensiveComponent/ExpensiveComponent'
import OptimizedComponent from './exercises/ReactRenderingModel/expensiveComponent/OptimizedComponent'
import OptimizedUseMemo from './exercises/ReactRenderingModel/expensiveComponent/OptimizedUseMemo'

function App() {

  return (
    <>
    {/* <ReRender/> */}
    
    {/* <PreventReRenders/> */}

    {/* <IdentityTrap/> */}

    {/* <Batching/> */}

    {/* <DerivedState/> */}
    {/* <RedundantState/> */}

    <ExpensiveComponent/>
    <OptimizedComponent/>
    <OptimizedUseMemo/>
    </>
  )
}

export default App
