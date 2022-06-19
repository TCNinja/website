import Image from 'next/image';

const Logo = () => {
  return (
    <div>
        <Image
         src="/temporary-tcn.png"
          alt="TCNinja" 
          width={100}
          height={50} />
    </div>
  )
}

export default Logo;