import Image from "next/image"
import { ChevronRightIcon } from "@heroicons/react/20/solid"

import { Button } from "../client/Button"

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white isolate dark:bg-transparent">
      <div className="px-6 pt-6 pb-24 mx-auto max-w-7xl sm:pb-32 lg:flex lg:px-8 lg:py-24">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-2">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Tough.
          </h1>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Principled.
          </h1>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Fearless.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Pierre Marcel Poilievre PC MP is a Canadian politician who has
            served as the leader of the Conservative Party of Canada and the
            leader of the Official Opposition since 2022. Poilievre has served
            as a member of Parliament since 2004.
          </p>
          <div className="hidden space-x-2 lg:flex lg:flex-1 lg:justify-start lg:pt-6">
            <Button text="Donate" color="blue" className="px-8 text-lg" />
            <Button
              text="Get involved"
              variant="outline"
              className="px-8 text-lg"
            />
          </div>
        </div>
        <div className="flex max-w-2xl mx-auto mt-16 sm:mt-24 lg:ml-4 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
            <div className="p-2 -m-2 rounded-xl lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/images/pp-cpc.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[35rem] h-[32rem] object-cover rounded-md !rounded-tr-[12rem] rounded-tl-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
