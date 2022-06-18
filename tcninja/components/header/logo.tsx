import type { NextComponentType, NextPageContext } from "next";
import Image from 'next/image';

interface Props {}

const Logo: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div>
        <Image
         src="/ninja-icon.jpg"
          alt="TCNinja" 
          width={40}
          height={40} />
    </div>
  )
}

export default Logo