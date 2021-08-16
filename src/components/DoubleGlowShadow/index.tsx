import { isMobile } from 'react-device-detect'

const DoubleGlowShadow = ({ children }) => {
  if (isMobile) {
    return <div className="shadow-swap">{children}</div>
  }

  return (
    <div className="relative w-full max-w-2xl">
      <div className="absolute top-1/4 -left-10 bottom-4 w-3/5 rounded-full z-0 filter blur-[80px]"  style={{backgroundColor:'#ecb243'}}/>
      <div className="absolute bottom-1/4 -right-10 bg-white top-4 w-3/5 rounded-full z-0  filter blur-[120px]" />
      <div className="relative filter drop-shadow">{children}</div>
    </div>
  )
}

export default DoubleGlowShadow
