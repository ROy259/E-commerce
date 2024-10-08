import React from 'react'

const Orders = () => {
  return (
    <div>
      <div class="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0 pt-10">
  <h2 class="text-3xl font-bold">Order Details</h2>
  <div class="mt-3 text-sm">
    Check the status of recent and old orders &amp; discover more products
  </div>
  <div class="mt-8 flex flex-col overflow-hidden rounded-lg border border-gray-300 md:flex-row">
    <div class="w-full border-r border-gray-300 bg-gray-100 md:max-w-xs">
      <div class="p-8">
        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
          <div class="mb-4">
            <div class="text-sm font-semibold">Order ID</div>
            <div class="text-sm font-medium text-gray-700">#74557994327</div>
          </div>
          <div class="mb-4">
            <div class="text-sm font-semibold">Date</div>
            <div class="text-sm font-medium text-gray-700">4 March, 2023</div>
          </div>
          <div class="mb-4">
            <div class="text-sm font-semibold">Total Amount</div>
            <div class="text-sm font-medium text-gray-700">₹84,499</div>
          </div>
          <div class="mb-4">
            <div class="text-sm font-semibold">Order Status</div>
            <div class="text-sm font-medium text-gray-700">Confirmed</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div class="p-8">
        <ul class="-my-7 divide-y divide-gray-200">
          <li class="flex flex-col justify-between space-x-5 py-7 md:flex-row">
            <div class="flex flex-1 items-stretch">
              <div class="flex-shrink-0">
                <img
                  class="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                  src=''
                  alt=''
                />
              </div>
              <div class="ml-5 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-bold text-gray-900">
Lorem ipsum dolor sit amet.                  </p>
                  <p class="mt-1.5 text-sm font-medium text-gray-500">Orange</p>
                </div>
                <p class="mt-4 text-sm font-medium text-gray-500">x 1</p>
              </div>
            </div>
            <div class="ml-auto flex flex-col items-end justify-between">
              <p class="text-right text-sm font-bold text-gray-900">₹61,999</p>
            </div>
          </li>
          <li class="flex flex-col justify-between space-x-5 py-7 md:flex-row">
            <div class="flex flex-1 items-stretch">
              <div class="flex-shrink-0">
                <img
                  class="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                  src=''
                  alt=''
                />
              </div>
              <div class="ml-5 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-bold text-gray-900">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p class="mt-1.5 text-sm font-medium text-gray-500">White</p>
                </div>
                <p class="mt-4 text-sm font-medium text-gray-500">x 1</p>
              </div>
            </div>
            <div class="ml-auto flex flex-col items-end justify-between">
              <p class="text-right text-sm font-bold text-gray-900">₹22,500</p>
            </div>
          </li>
        </ul>
        <hr class="my-8 border-t border-t-gray-200" />
        <div class="space-x-4">
          <button
            type="button"
            class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            View Order
          </button>
          <button
            type="button"
            class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            View Invoice
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Orders
