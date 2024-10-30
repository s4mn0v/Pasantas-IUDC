<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <div class="inline-block min-w-full align-middle m-8">
        <div class="relative text-gray-500 focus-within:text-gray-900 mb-4">
          <div
            class="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none"
          >
            <Icon name="uil:search" class="w-5 h-5" />
          </div>
          <input
            type="text"
            id="default-search"
            class="block w-80 h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            placeholder="Search for company"
          />
        </div>
        
        <div class="overflow-hidden w-full">
          <table class="min-w-full table-auto rounded-xl">
            <thead>
              <tr class="bg-gray-50">
                <th
                  scope="col"
                  class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"
                >
                  Company
                </th>
                <th
                  scope="col"
                  class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                >
                  User ID
                </th>
                <th
                  scope="col"
                  class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                >
                  Type
                </th>
                <th
                  scope="col"
                  class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                >
                  Industry Type
                </th>
                <th
                  scope="col"
                  class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-300">
              <tr class="bg-white transition-all duration-500 hover:bg-gray-50">
                <td
                  class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"
                >
                  Louis Vuitton
                </td>
                <td
                  class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"
                >
                  20010510
                </td>
                <td
                  class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"
                >
                  Customer
                </td>
                <td
                  class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"
                >
                  Accessories
                </td>
                <td class="p-5">
                  <div class="flex items-center gap-1">
                    <button
                      class="p-2 rounded-full group transition-all duration-500 flex items-center"
                    >
                      <Icon name="uil:edit" class="w-5 h-5 text-indigo-500" />
                    </button>
                    <button
                      class="p-2 rounded-full group transition-all duration-500 flex items-center"
                    >
                      <Icon name="uil:trash-alt" class="w-5 h-5 text-red-600" />
                    </button>
                    <button
                      class="p-2 rounded-full group transition-all duration-500 flex items-center"
                    >
                      <Icon
                        name="uil:draggabledots"
                        class="w-5 h-5 text-black"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
