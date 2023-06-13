import { ChevronRightIcon } from "@heroicons/react/20/solid"

import { Button } from "../client/button"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-6 sm:pb-32 lg:flex lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-2">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Tough.
          </h1>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Principled.
          </h1>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Fearless.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            United for a Stronger Canada: Empowering Diversity, Building a
            Brighter Future Together. Celebrating unity, diversity, and
            collaboration for a prosperous, inclusive Canada. Our parliamentary
            spirit guides us towards a brighter future, embracing equality and
            sustainability.
          </p>
          <div className="hidden lg:flex lg:flex-1 lg:justify-start space-x-2 lg:pt-6">
            <Button text="Donate" color="blue" className="px-8 text-lg" />
            <Button
              text="Get involved"
              variant="outline"
              className="px-8 text-lg"
            />
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-4 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl p-2 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="https://images.theconversation.com/files/421372/original/file-20210915-24-nltue2.jpg?ixlib=rb-1.1.0&rect=112%2C51%2C6462%2C3785&q=45&auto=format&w=926&fit=clip"
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
