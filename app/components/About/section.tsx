import Image from 'next/image';
import { ReactNode } from 'react';

const AboutSection = ({
  title,
  message,
  action,
  asset,
  inverted
}: {
  title: string,
  message: string,
  action?: ReactNode,
  asset?: string,
  inverted: boolean,
}) => {

  const text = <div className="w-full px-4 lg:w-3/6">
    <div className="mb-12 max-w-[540px] lg:mb-0">
      <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
        {title}
      </h2>
      <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
        {message}
      </p>
      {action && action}
    </div>
  </div>;


  const assetDiv = <div className="w-full px-4 lg:w-3/6">
    <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
      <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
        {asset && <div
          className={`relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] `}
        >
          <Image
            src={asset}
            alt="about image"
            fill
            className="h-full w-full object-contain object-center"
          />
        </div>}
      </div>
    </div>
  </div>;

  return <div className="wow fadeInUp" data-wow-delay=".2s">
    <div className="-mx-4 flex flex-wrap items-center">

      {!inverted ? text : assetDiv}
      {!inverted ? assetDiv : text}

    </div>
  </div>
}

export default AboutSection;