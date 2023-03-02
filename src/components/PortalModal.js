import React from 'react'
import ReactDOM from "react-dom";
const PortalModal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div onClick={closeModal} className='fixed w-full top-0 left-0 h-screen bg-black bg-opacity-50 z-[1000] flex justify-center items-center'>
      <div className='flex justify-center items-start w-full h-full overflow-auto overscroll-y-none box-pack'>
        <div onClick={(e) => e.stopPropagation()} className='max-w-lg w-full bg-white rounded-2xl p-14 text-black my-20'>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <header>Modal Container</header>
          <div onClick={closeModal}>close</div>

        </div>
      </div>

    </div>, document.getElementById("modal")

  )
}

export default PortalModal