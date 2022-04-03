import React, { useState, useRef, useEffect } from "react"

const images = [
  "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80", 
  "https://images.unsplash.com/photo-1615454299901-de13b71ecaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1581300134629-4c3a06a31948?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1545529468-42764ef8c85f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
  "https://images.unsplash.com/photo-1615678815958-5910c6811c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1503843778847-2b8bdce2ed3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
  "https://images.unsplash.com/photo-1570458436416-b8fcccfe883f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
]
const delay = 2500

const Slideshow = () => {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    )
    return () => {
      resetTimeout()
    }
  }, [index])

  return (
    <div className="slideshow">
      <div
        className="slideshow-slider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((background, index) => (
          <div
            className="slide"
            key={index}
            style={{backgroundImage: `url(${background})`, backgroundPosition: "center center", backgroundSize: "cover", objectFit: "contain"}}
          ></div>
        ))}
      </div>

      <div className="slideshow-dots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshow-dot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx)
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
export default Slideshow