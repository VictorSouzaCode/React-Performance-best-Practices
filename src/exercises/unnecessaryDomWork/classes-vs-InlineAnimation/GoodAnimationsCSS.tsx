// Let CSS handle animations; let React trigger them declaratively.
// This runs completely outside React — on the compositor thread.
// React doesn’t re-render at all.
// Smooth, battery-efficient, and lag-free.

import "./GoodAnimation.css"

const GoodAnimationsCSS = () => {

  return (
    <div>GoodAnimationsCSS
      <button className="animated-btn">
        🔄
      </button>
    </div>
  )
}

export default GoodAnimationsCSS