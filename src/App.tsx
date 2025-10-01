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
import FunctionCausingReRenders from './exercises/ReconciliationAndReRenders/useCallback/FunctionCausingReRender'
import FixWithCallback from './exercises/ReconciliationAndReRenders/useCallback/FixWithCallback'
import BadState from './exercises/ReconciliationAndReRenders/liftingState/BadState'
import EfficientState from './exercises/ReconciliationAndReRenders/liftingState/EfficientState'
import BigState from './exercises/GranularityNStateManagement/bigState-SplitState/BigState'
import SplitState from './exercises/GranularityNStateManagement/bigState-SplitState/SplitState'
import OneBigContext from './exercises/GranularityNStateManagement/ContextGranularity/OneBigContext'
import SplitContexts from './exercises/GranularityNStateManagement/ContextGranularity/SplitContexts'
import SplitComponent from './exercises/GranularityNStateManagement/ContextGranularity/RealWorldExample/SplitComponent'

function App() {

  return (
    <>
    {/* <ReRender/> */}

    {/* <PreventReRenders/> */}

    {/* <IdentityTrap/> */}

    {/* <Batching/> */}

    {/* <DerivedState/> */}
    {/* <RedundantState/> */}

    {/* <ExpensiveComponent/>
    <OptimizedComponent/>
    <OptimizedUseMemo/> */}

    {/* <FunctionCausingReRenders/>
    <FixWithCallback/> */}

    {/* <BadState/>
    <EfficientState/> */}

    {/* <BigState/>
    <SplitState/> */}

    {/* <OneBigContext/> */}
    {/* <SplitContexts/> */}
    {/* <SplitComponent/> */}
    </>
  )
}

export default App
