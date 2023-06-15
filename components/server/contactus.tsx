export default function ContactUs() {
  return (
    <div className="py-24 bg-white dark:bg-transparent sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto space-y-16 divide-y divide-gray-100 dark:divide-gray-400 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Let&apos;s do this together</h2>
              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="p-10 rounded-2xl bg-gray-50 dark:bg-gray-200">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Collaborate</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="font-semibold text-indigo-600" href="mailto:collaborate@example.com">
                        collaborate@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-2345</dd>
                  </div>
                </dl>
              </div>
              <div className="p-10 rounded-2xl bg-gray-50 dark:bg-gray-200">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Press</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="font-semibold text-indigo-600" href="mailto:press@example.com">
                        press@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-3456</dd>
                  </div>
                </dl>
              </div>
              <div className="p-10 rounded-2xl bg-gray-50 dark:bg-gray-200">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Join our team</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="font-semibold text-indigo-600" href="mailto:careers@example.com">
                        careers@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-4567</dd>
                  </div>
                </dl>
              </div>
              <div className="p-10 rounded-2xl bg-gray-50 dark:bg-gray-200">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Say hello</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="font-semibold text-indigo-600" href="mailto:hello@example.com">
                        hello@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-5678</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 pt-16 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Locations</h2>
              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="p-10 rounded-2xl bg-gray-50 dark:bg-gray-200">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Los Angeles</h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p>4556 Brendan Ferry</p>
                  <p>Los Angeles, CA 90210</p>
                </address>
              </div>
              <div className="p-10 rounded-2xl bg-gray-50 dark:bg-gray-200">
                <h3 className="text-base font-semibold leading-7 text-gray-900">New York</h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p>886 Walter Street</p>
                  <p>New York, NY 12345</p>
                </address>
              </div>
              <div className="p-10 rounded-2xl bg-gray-50 dark:bg-gray-200">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Toronto</h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p>7363 Cynthia Pass</p>
                  <p>Toronto, ON N3Y 4H8</p>
                </address>
              </div>
              <div className="p-10 rounded-2xl bg-gray-50 dark:bg-gray-200">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Chicago</h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p>726 Mavis Island</p>
                  <p>Chicago, IL 60601</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}