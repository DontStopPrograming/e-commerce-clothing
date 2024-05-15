// import { createContext, useState } from 'react'

// import PropTypes from 'prop-types'

// export const CarouselContext = createContext()

// export const CarouselProvider = ({ children }) => {
//     const [autoPlay, setAutoPLay] = useState(true)
//     const [showArrows, setShowArrows] = useState(true)
//     const [showThumbs, setShowThumbs] = useState(false)
//     const [infiniteLoop, setInfiniteLoop] = useState(true)

//     return (
//         <CarouselContext.Provider value={{ autoPlay, setAutoPLay, showArrows, setShowArrows, showThumbs, setShowThumbs, infiniteLoop, setInfiniteLoop }}>
//             {children}
//         </CarouselContext.Provider>
//     )
// }

// CarouselProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// }