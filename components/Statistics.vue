<template>
  <div class="w-full flex flex-wrap flex-1">
    <div class="xxs:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 xxl:w-1/6 ">
      <stats-counter
        :stats="{
          type: 'countries',
          label: 'Testados',
          value: stats.tested.today,
          today: stats.tested.variation
        }"
        absolute
      >
        <template v-slot:icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5"
          >
            <defs />
            <path
              fill="#FFF"
              d="M439.463 61.867c-4.616-2.685-10.318-2.685-14.933 0-17.877 9.918-38.009 15.061-58.453 14.933-29.891.661-58.793-10.715-80.213-31.573-24.728-24.205-58.162-37.431-92.757-36.693-27.861-.241-55.101 8.232-77.909 24.235V25.6c0-14.138-11.461-25.6-25.6-25.6-14.139 0-25.6 11.461-25.6 25.6v460.8c0 14.138 11.461 25.6 25.6 25.6 14.138 0 25.6-11.461 25.6-25.6V264.533c2.828-.265 5.522-1.33 7.765-3.072 20.302-14.951 44.933-22.861 70.144-22.528 29.946-.688 58.911 10.689 80.384 31.573 24.681 24.17 58.049 37.394 92.587 36.693 26.469.308 52.431-7.266 74.581-21.76 4.74-3.285 7.501-8.742 7.339-14.507V76.8c.054-6.152-3.207-11.857-8.535-14.933z"
              class="active-path"
              data-old_color="#000000"
              data-original="#000000"
            />
          </svg>
        </template>
      </stats-counter>
    </div>
    <div
      class="xxs:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 xxl:w-1/6 xxs:mt-5 lg:mt-0"
    >
      <stats-counter
        :stats="{
          type: 'infected',
          label: 'Infectados',
          value: stats.infected.today,
          today: stats.infected.variation
        }"
        :today="stats.todayCases"
        absolute
      >
        <template v-slot:icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 549.983 549.983"
            class="w-6"
          >
            <defs />
            <path
              fill="#FFF"
              d="M463.497 210.158c-5.5-3.2-11.3-6.1-17.3-8.7.8-6.9 1.3-13.8 1.3-20.7 0-72.4-45.8-137.7-113.899-162.3-5.4-1.9-11.4.6-13.7 5.9-2.3 5.3-.1 11.4 5 14 37 18.9 60 56.5 60 98 0 13.5-2.5 26.8-7.3 39.3-28-23.5-64.101-37.6-103.401-37.6-38.8 0-74.5 13.8-102.4 36.8-4.6-12.3-7-25.3-7-38.4 0-41.5 23-79.1 60-98 5.1-2.6 7.3-8.7 5-14-2.3-5.3-8.3-7.8-13.7-5.9-68.1 24.6-113.9 89.8-113.9 162.3 0 6.8.4 13.7 1.2 20.6-6 2.6-11.8 5.5-17.4 8.8-62.5 36.1-96.1 108.3-83.3 179.701.9 5.299 5.5 9 10.9 9 6-.1 10.8-4.9 10.8-10.9 0-.6 0-1.1-.1-1.6-1.7-41.1 19.3-79.4 54.9-100 11.2-6.5 23.4-10.8 36.1-13-1.4 8.401-2.1 17.1-2.1 25.901 0 69.699 44.5 129.199 106.5 151.699-8.4 10.4-18.7 19.301-30.4 26.1-16.7 9.6-35.7 14.701-54.9 14.701-21.4 0-42.1-6.102-60-17.701-4.8-3.1-11.2-2-14.6 2.6-3.4 4.602-2.7 11.102 1.7 14.801 31.1 26.199 70.6 40.6 111.4 40.6 30.1 0 59.9-8 86.1-23.1 5.5-3.199 10.9-6.699 16.1-10.5 5.201 3.801 10.6 7.4 16.1 10.5 26.2 15.1 56 23.1 86.101 23.1 40.8 0 80.3-14.4 111.399-40.6 4.4-3.699 5.101-10.199 1.7-14.801-3.4-4.6-9.8-5.799-14.6-2.6-17.9 11.6-38.7 17.701-60 17.701-19.2 0-38.101-5.102-54.9-14.701-11.8-6.799-22.2-15.799-30.7-26.4 61.601-22.699 105.601-82 105.601-151.299 0-8.9-.801-17.6-2.101-26.101 13.101 2.1 25.7 6.601 37.3 13.2 36 20.801 57 59.5 54.9 101-.3 5.699 3.9 10.699 9.6 11.4 5.7.699 10.9-3.201 11.9-8.9 12.5-71.401-21.1-143.701-83.9-179.901zm-117.3 10.1c-14.7 12.5-32.6 21.1-52 24.5-12.899 2.3-25.8 2.3-38.7 0-19.7-3.5-37.7-12.2-52.5-25 18.9-17 43.9-27.3 71.3-27.3 27.7-.1 53 10.5 71.9 27.8zm-178.801 79.101c0-7.4.8-14.701 2.2-21.701 18.4 6.301 35.1 17.4 48 32.4 4.5 5.301 8.5 10.9 11.8 16.699 3.1 5.4 5.8 11.102 8 17.102 6.9 18.699 8.4 38.5 5 57.5-43.5-13.602-75-54.102-75-102zm140.001 101.599c-3.4-19-1.8-38.6 5-57.1 2.2-6 4.9-11.801 8-17.102 3.4-5.799 7.3-11.398 11.8-16.699 12.7-14.801 28.9-25.699 46.9-32 1.399 6.9 2.1 14 2.1 21.301 0 47.501-31 87.7-73.8 101.6z"
              class="active-path"
              data-old_color="#000000"
              data-original="#000000"
            />
          </svg>
        </template>
      </stats-counter>
    </div>
    <div class="xxs:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 xxl:w-1/6 mt-5 xl:mt-0">
      <stats-counter
        :stats="{
          type: 'active',
          label: 'Activos',
          value: stats.active.today,
          today: stats.active.variation
        }"
      >
        <template v-slot:icon>
          <svg
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            class="w-6"
            version="1.1"
            viewBox="190 -235.5 512 512"
            xml:space="preserve"
          >
            <defs />
            <style>
              .st0 {
                fill: #fff;
              }
            </style>
            <path
              id="XMLID_107_"
              d="M701.9-.9c1.9 24.2-15.2 45.7-38 48-17.5 1.8-33.3-8.3-40.6-23.9L602.5 25l-15.7 7.6c-3.6 1.7-6 5.1-6.5 9.1-1.5 10.6-4.2 20.8-7.9 30.5-1.3 3.3-1 7 .7 10l5.6 10 15.5 10.4c8.2-3.1 17.7-2.4 25.5 2.9 13.3 8.9 16.5 27.2 6.6 40.1-8.5 11.1-24.3 14.2-36.3 7-7.7-4.5-12.3-12.1-13.4-20.1L559.4 121l-10.8-1.3c-3.7-.5-7.4.8-10.1 3.4-9.1 8.7-19.4 16.2-30.7 22.1-3.8 2-6.2 5.9-6.5 10.1l-1.4 21.9 6.8 27c11.6 3.2 21.2 12.4 24.3 24.9 4.8 18.9-7 38-26.1 42.3-17.3 3.8-35-6.2-40.4-23-4.3-13.1-.3-26.7 8.7-35.6l-6.8-27.2-10.6-17c-2.8-4.6-7.8-7.2-13.2-7.2h-.1c-9.2 0-18.3-.9-27-2.6-5.2-1-10.6.6-14.2 4.5L387.2 178l-15.6 32.4c3.7 7.4 4 16.4.1 24.4-7 14.4-24.7 20.1-38.9 12.2-12.1-6.8-17.4-21.9-12.1-34.8 3.6-8.8 11.1-14.7 19.5-16.6L356 163l3.1-21.9c.6-4-1-8.1-4.2-10.7-12.5-10.1-23.2-22.4-31.6-36.2-2.1-3.4-5.8-5.5-9.8-5.5l-21.9-.2-23.8 7.5c-1.7 14.9-11.9 28.1-27.1 32.9-20.4 6.4-42.2-4.8-48.8-25.1-6.6-20.3 4.6-42.5 24.8-49.2 14.2-4.7 29.1-.8 39.2 8.8l25.4-8 18.5-13.2c2.8-2 4.2-5.2 4-8.6-.3-3.7-.5-7.5-.5-11.3 0-20.7 4.5-40.3 12.7-57.9 1.2-2.6 1.2-5.6-.1-8.1L310.4-55l-14.9-11.3c-8.3 2.7-17.8 1.4-25.3-4.3-12.8-9.6-14.9-28.1-4.4-40.4 9.1-10.6 25-12.8 36.7-5 7.4 5 11.6 12.7 12.3 20.9l16.5 12.5 16.7 3c12.1-11.3 26.2-20.4 41.8-26.8l3.9-23.8-4.9-24.5c-14.6-3.8-26.5-15-29.6-29.9-4.5-21.1 10-41.6 32.4-45.8 22.4-4.2 44.2 9.4 48.7 30.5 3.4 15.8-3.9 31.2-17.1 39.8l4.7 23.1 11.4 18.3c.8 1.2 2.1 1.9 3.5 1.9 26.2 0 50.7 7.3 71.7 19.9 1.2.7 2.6.8 3.8.2l17.9-8.3 20.9-22.6c-1.3-8.1 1.1-16.7 7.1-23.2 10.9-11.7 29.5-12 40.7-.3 9.8 10.3 10.2 26.7.9 37.5-6 7-14.7 10.2-23.2 9.5l-20.9 22.6-6.8 18.3c-.5 1.3-.3 2.7.5 3.8 8.3 11.3 14.8 23.9 19.4 37.5 1.3 3.7 4.2 6.6 8 7.7l17 4.8 22.1-2c5.4-15.6 19-27.5 35.6-29.1C680-42.8 700-25.1 701.9-.9z"
              class="st0"
            />
            <circle id="XMLID_8_" cx="442.5" cy="22.3" r="103" class="st0" />
            <path
              d="M370.8 22.3c0-51.6 37.9-94.3 87.3-101.9-5.1-.8-10.4-1.2-15.7-1.2-56.9 0-103 46.1-103 103s46.1 103 103 103c5.3 0 10.6-.4 15.7-1.2-49.4-7.4-87.3-50.1-87.3-101.7z"
              class="st0"
            />
            <circle cx="269.1" cy="-194.4" r="29.3" class="st0" />
            <circle cx="261.1" cy="192.4" r="19.4" class="st0" />
            <circle cx="616.9" cy="224.3" r="28.5" class="st0" />
            <circle cx="410.8" cy="-6.1" r="26.6" class="st0" />
            <circle cx="432.2" cy="76.6" r="18.1" class="st0" />
            <circle cx="489.1" cy="22.3" r="15.2" class="st0" />
          </svg>
        </template>
      </stats-counter>
    </div>
    <div class="xxs:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 xxl:w-1/6 mt-5 xl:mt-0">
      <stats-counter
        :stats="{
          type: 'recovered',
          label: 'Recuperados',
          value: stats.recovered.today,
          today: stats.recovered.variation
        }"
        absolute
      >
        <template v-slot:icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 448"
            class="w-5"
          >
            <defs />
            <path
              fill="#FFF"
              d="M408 184H272c-4.417969 0-8-3.582031-8-8V40c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8H40c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40V272c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"
              class="active-path"
              data-old_color="#000000"
              data-original="#000000"
            />
          </svg>
        </template>
      </stats-counter>
    </div>
    <div class="xxs:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 xxl:w-1/6 mt-5 xl:mt-0">
      <stats-counter
        :stats="{
          type: 'deaths',
          label: 'Óbitos',
          value: stats.deaths.today,
          today: stats.deaths.variation
        }"
        absolute
      >
        <template v-slot:icon>
          <svg
            class="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-32 0 384 384"
          >
            <g>
              <path
                d="m264 112c22.078125 0 40 17.921875 40 40 0 11.039062-4.480469 21.039062-11.679688 28.320312-7.28125 7.199219-17.28125 11.679688-28.320312 11.679688h-56v128c0 26.480469-21.519531 48-48 48-13.28125 0-25.28125-5.359375-33.921875-14.078125-8.71875-8.640625-14.078125-20.640625-14.078125-33.921875v-128h-56c-22.078125 0-40-17.921875-40-40s17.921875-40 40-40h56v-48c0-26.480469 21.519531-48 48-48s48 21.519531 48 48v48zm0 0"
                fill="#4dd0e1"
                data-original="#4DD0E1"
                class="active-path"
                style="fill:#FFFFFF"
                data-old_color="#4dd0e1"
              />
              <path
                d="m160 0c-35.289062 0-64 28.710938-64 64v32h-40c-30.878906 0-56 25.121094-56 56s25.121094 56 56 56h40v112c0 17.175781 6.679688 33.265625 18.710938 45.183594 12.023437 12.136718 28.113281 18.816406 45.289062 18.816406 35.289062 0 64-28.710938 64-64v-112h40c14.878906 0 28.9375-5.792969 39.695312-16.433594 10.511719-10.628906 16.304688-24.6875 16.304688-39.566406 0-30.878906-25.121094-56-56-56h-40v-32c0-35.289062-28.710938-64-64-64zm128 152c0 6.40625-2.503906 12.472656-6.929688 16.945312-4.597656 4.550782-10.664062 7.054688-17.070312 7.054688h-56c-8.832031 0-16 7.167969-16 16v128c0 17.648438-14.351562 32-32 32-8.574219 0-16.585938-3.320312-22.664062-9.441406-6.015626-5.972656-9.335938-13.984375-9.335938-22.558594v-128c0-8.832031-7.167969-16-16-16h-56c-13.230469 0-24-10.769531-24-24s10.769531-24 24-24h56c8.832031 0 16-7.167969 16-16v-48c0-17.648438 14.351562-32 32-32s32 14.351562 32 32v48c0 8.832031 7.167969 16 16 16h56c13.230469 0 24 10.769531 24 24zm0 0"
                fill="#012e52"
                data-original="#012E52"
                class=""
                style="fill:#FFFFFF"
                data-old_color="#012e52"
              />
            </g>
          </svg>
        </template>
      </stats-counter>
    </div>
    <div class="xxs:w-full md:w-1/2 xl:w-1/5 lg:w-1/3 xxl:w-1/6 mt-5 xxl:mt-0">
      <StatsCounter
        :stats="{
          type: 'hospitalized',
          label: 'Internados',
          value: stats.hospitalized.today,
          today: stats.hospitalized.variation
        }"
        absolute
      >
        <template v-slot:icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5"
            viewBox="0 0 512 512"
          >
            <defs />
            <path
              style="fill:#FFFFFF"
              d="M105.046 168.773H0v309.512h105.046zM69.404 371.342H35.642v-30h33.762zm0-67.523H35.642v-30h33.762zm-33.762-67.523v-30h33.762v30zM406.954 478.286H512V168.773H406.954zm35.643-271.99h33.761v30h-33.761zm0 67.523h33.761v30h-33.761zm33.76 67.523v30h-33.761v-30zM203.477 438.865H241v39.421h-37.523zM271 438.865h37.522v39.421H271z"
            />
            <path
              style="fill:#FFFFFF"
              d="M135.046 478.286h38.431v-69.421h165.045v69.421h38.432V33.714H135.046zm137.835-106.944h-33.762v-30h33.762zm0-67.523h-33.762v-30h33.762zm0-67.523h-33.762v-30h33.762zm67.522 135.046h-33.761v-30h33.761zm0-67.523h-33.761v-30h33.761zm0-67.523h-33.761v-30h33.761zM205.358 105.052H241V69.41h30v35.642h35.643v30H271v35.643h-30v-35.643h-35.642zm-33.762 101.244h33.762v30h-33.762zm0 67.523h33.762v30h-33.762zm0 67.523h33.762v30h-33.762z"
            />
          </svg>
        </template>
      </StatsCounter>
    </div>
    <div class="xxs:w-full md:w-1/2 xl:w-1/5 lg:w-1/3 xxl:w-1/6 mt-5 xxl:mt-0">
      <StatsCounter
        :stats="{
          type: 'local_transmissions',
          label: 'Trans. Local',
          value: stats.local_transmission.today,
          today: stats.local_transmission.variation
        }"
        :today="stats.todayLocal_transmissions"
        absolute
      >
        <template v-slot:icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5"
            viewBox="0 0 512 512"
          >
            <defs />
            <path
              fill="#FFF"
              d="M498.195312 222.695312l-.035156-.035156L289.304688 13.8125C280.402344 4.90625 268.566406 0 255.976562 0c-12.589843 0-24.425781 4.902344-33.332031 13.808594L13.898438 222.550781c-.070313.070313-.140626.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.445312 13.238281 31.277344 13.746093.480468.046876.964843.070313 1.453124.070313h8.324219v153.699219C54.832031 487.253906 79.578125 512 110 512h81.710938c8.28125 0 15-6.714844 15-15V376.5c0-13.878906 11.289062-25.167969 25.167968-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969V497c0 8.285156 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156V303.140625h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.367187-48.253906.023437-66.636719zm0 0"
              class="active-path"
              data-old_color="#000000"
              data-original="#000000"
            />
          </svg>
        </template>
      </StatsCounter>
    </div>
    <div class="xxs:w-full md:w-1/2 xl:w-1/5 lg:w-1/3 xxl:w-1/6 mt-5">
      <StatsCounter
        :stats="{
          type: 'foreign_transmission',
          label: 'C. Importados',
          value: stats.foreign_transmission.today,
          today: stats.foreign_transmission.variation
        }"
        absolute
      >
        <template v-slot:icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 426.667 426.667"
            class="w-5"
          >
            <defs />
            <path
              fill="#FFF"
              d="M416 298.667V256L245.333 149.333V32c0-17.707-14.293-32-32-32s-32 14.293-32 32v117.333L10.667 256v42.667l170.667-53.333v117.333l-42.667 32v32l74.667-21.333L288 426.667v-32l-42.667-32V245.333L416 298.667z"
              class="active-path"
              data-old_color="#000000"
              data-original="#000000"
            />
          </svg>
        </template>
      </StatsCounter>
    </div>
    <div class="xxs:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 xxl:w-1/6 mt-5">
      <stats-counter
        :stats="{
          type: 'recovered',
          label: '% Recuperados',
          value: recoveredPercentage.value,
          today: recoveredPercentage.variation,
          noFormat: true
        }"
        absolute
      >
        <template v-slot:icon>
          <svg
            class="w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 263.285 263.285"
            style="fill: white"
          >
            <path
              d="M193.882 8.561c-7.383-3.756-16.414-.813-20.169 6.573L62.153 234.556c-3.755 7.385-.812 16.414 6.573 20.169 2.178 1.107 4.499 1.632 6.786 1.632 5.466 0 10.735-2.998 13.383-8.205L200.455 28.73c3.755-7.385.812-16.414-6.573-20.169zM113.778 80.818c0-31.369-25.521-56.89-56.89-56.89C25.521 23.928 0 49.449 0 80.818c0 31.368 25.521 56.889 56.889 56.889 31.369 0 56.889-25.521 56.889-56.889zm-56.889 26.889C42.063 107.707 30 95.644 30 80.818c0-14.827 12.063-26.89 26.889-26.89 14.827 0 26.89 12.062 26.89 26.89-.001 14.826-12.063 26.889-26.89 26.889zM206.396 125.58c-31.369 0-56.89 25.521-56.89 56.889 0 31.368 25.52 56.889 56.89 56.889 31.368 0 56.889-25.52 56.889-56.889 0-31.369-25.52-56.889-56.889-56.889zm0 83.777c-14.827 0-26.89-12.063-26.89-26.889 0-14.826 12.063-26.889 26.89-26.889 14.826 0 26.889 12.063 26.889 26.889 0 14.826-12.062 26.889-26.889 26.889z"
            />
          </svg>
        </template>
      </stats-counter>
    </div>
    <div class="xxs:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 xxl:w-1/6 mt-5">
      <stats-counter
        :stats="{
          type: 'countries',
          label: '% Positividade Total',
          value: allTimeInfectedPercentage.value,
          noFormat: true
        }"
        absolute
      >
        <template v-slot:icon>
          <svg
            class="w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 263.285 263.285"
            style="fill: white"
          >
            <path
              d="M193.882 8.561c-7.383-3.756-16.414-.813-20.169 6.573L62.153 234.556c-3.755 7.385-.812 16.414 6.573 20.169 2.178 1.107 4.499 1.632 6.786 1.632 5.466 0 10.735-2.998 13.383-8.205L200.455 28.73c3.755-7.385.812-16.414-6.573-20.169zM113.778 80.818c0-31.369-25.521-56.89-56.89-56.89C25.521 23.928 0 49.449 0 80.818c0 31.368 25.521 56.889 56.889 56.889 31.369 0 56.889-25.521 56.889-56.889zm-56.889 26.889C42.063 107.707 30 95.644 30 80.818c0-14.827 12.063-26.89 26.889-26.89 14.827 0 26.89 12.062 26.89 26.89-.001 14.826-12.063 26.889-26.89 26.889zM206.396 125.58c-31.369 0-56.89 25.521-56.89 56.889 0 31.368 25.52 56.889 56.89 56.889 31.368 0 56.889-25.52 56.889-56.889 0-31.369-25.52-56.889-56.889-56.889zm0 83.777c-14.827 0-26.89-12.063-26.89-26.889 0-14.826 12.063-26.889 26.89-26.889 14.826 0 26.889 12.063 26.889 26.889 0 14.826-12.062 26.889-26.889 26.889z"
            />
          </svg>
        </template>
      </stats-counter>
    </div>
    <div class="xxs:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 xxl:w-1/6 mt-5">
      <stats-counter
        :stats="{
          type: 'countries',
          label: '% Positividade Diária',
          value: todayInfectedPercentage.value,
          noFormat: true
        }"
        absolute
      >
        <template v-slot:icon>
          <svg
            class="w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 263.285 263.285"
            style="fill: white"
          >
            <path
              d="M193.882 8.561c-7.383-3.756-16.414-.813-20.169 6.573L62.153 234.556c-3.755 7.385-.812 16.414 6.573 20.169 2.178 1.107 4.499 1.632 6.786 1.632 5.466 0 10.735-2.998 13.383-8.205L200.455 28.73c3.755-7.385.812-16.414-6.573-20.169zM113.778 80.818c0-31.369-25.521-56.89-56.89-56.89C25.521 23.928 0 49.449 0 80.818c0 31.368 25.521 56.889 56.889 56.889 31.369 0 56.889-25.521 56.889-56.889zm-56.889 26.889C42.063 107.707 30 95.644 30 80.818c0-14.827 12.063-26.89 26.889-26.89 14.827 0 26.89 12.062 26.89 26.89-.001 14.826-12.063 26.889-26.89 26.889zM206.396 125.58c-31.369 0-56.89 25.521-56.89 56.889 0 31.368 25.52 56.889 56.89 56.889 31.368 0 56.889-25.52 56.889-56.889 0-31.369-25.52-56.889-56.889-56.889zm0 83.777c-14.827 0-26.89-12.063-26.89-26.889 0-14.826 12.063-26.889 26.89-26.889 14.826 0 26.889 12.063 26.889 26.889 0 14.826-12.062 26.889-26.889 26.889z"
            />
          </svg>
        </template>
      </stats-counter>
    </div>
  </div>
</template>

<script>
import StatsCounter from '~/components/StatsCounter'
export default {
  components: {
    StatsCounter
  },
  props: {
    stats: {
      required: true,
      type: Object
    },
    data: {
      required: true,
      type: Array
    }
  },
  computed: {
    allTimeInfectedPercentage() {
      const posObj = {}
      posObj.value = parseFloat(
        (this.stats.infected.today * 100) / this.stats.tested.today
      ).toFixed(2)
      return posObj
    },
    todayInfectedPercentage() {
      const posObj = {}
      posObj.value = parseFloat(
        (this.stats.infected.variation * 100) / this.stats.tested.variation
      ).toFixed(2)

      return posObj
    },
    recoveredPercentage() {
      const recoveredObj = {}
      recoveredObj.value = parseFloat(
        (this.stats.recovered.today * 100) / this.stats.infected.today
      ).toFixed(2)
      const variation = parseFloat(
        ((this.stats.recovered.today - this.stats.recovered.variation) * 100) /
          this.stats.infected.today
      ).toFixed(2)
      recoveredObj.variation = (
        parseFloat(recoveredObj.value) - parseFloat(variation)
      ).toFixed(2)
      return recoveredObj
    }
  },
  methods: {
    formatNumbers(value) {
      return new Intl.NumberFormat('es-ES').format(value)
    }
  }
}
</script>

<style></style>
