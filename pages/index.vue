<template>
  <section>
    <nav class="flex absolute p-6 md:px-16 top-0 z-10 items-center justify-items-stretch text-white cursor-pointer">
        <!-- <NuxtLink to="/" class="text-3xl font-semibold pr-40"><span class=" text-orange-600 ">H</span>AVILAH</NuxtLink> -->
        <NuxtLink to="/">
          <img src="~/assets/img/logo.png" class="w-1/2 filter sepia" />
        </NuxtLink>
        <ul class="hidden w-full md:flex md:gap-8  hover:border-collapse ">
          <li class="text-sm hover:text-orange-500 duration-200">
            <NuxtLink to="/" class=" px-2">Home</NuxtLink>
          </li>
          <li class="text-sm hover:text-orange-500 duration-150">
            <NuxtLink to="#best-products" class=" px-2">Products</NuxtLink>
          </li>
          <li class="text-sm flex gap-4">
            <a class="tel flex gap-2 hover:text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <p class="">(+254) 723 542 737</p>
            </a>
            <a class="email flex gap-2 hover:text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-5">
                <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
              </svg>
              <p>havilahprolimited@gmail.com</p>
            </a>
          </li>
        </ul>
      </nav>
    <div class="flex items-center w-full p-4 md:px-16 bg-gradient-to-r from-lime-950 to-lime-700 h-screen relative">
      <!--Hero section-->
      <div class=" flex flex-col md:flex-row items-center justify-items-center">
        <div class="md:w-1/2 font-semibold py-20">
          <p class=" text-sm px-2 font-normal text-orange-600">WE ARE A DELICACY</p>
          <h1 class="text-5xl md:text-6xl font-bold text-white leading-[4.5rem]">
            <span>Organically Grown,</span>
            <span class=" text-orange-600">Freshly</span> <span class="">Delivered.</span>
          </h1>
          <div class=" font-normal text-white text-[15px] py-5">
            <p class=" font-light leading-normal">
              We are dedicated to promoting healthy living worldwide through our export of fresh, nutrient-rich fruits and vegetables. We source our produce from trusted farms that use sustainable farming methods. Allow us to be your gateway to a healthier lifestyle, no matter where you are in the world.
            </p>
          </div>
          <a class="inline-block btn text-center my-4" href="https://wa.me/254723542737?text=Thank%20you%20for%20contacting%20us.%20We are your number one exporter of fine beans, sugar snap, snow peas and Avocado. Feel free to leave a message, a representative will reach out to you shortly." target="_blank" rel="noopener noreferrer">Order Now</a>
        </div>
        <div class="hidden md:block md:w-1/2 pt-10">
          <img src="~/assets/img/avocado.png" alt="Avocado" srcset="" class="w-full h-full">
        </div>
      </div>
    </div>
    <!--browse our products-->
    <div id="who-we-are" class="h-screen flex items-center">
      <div class="p-4 md:px-16">
        <div class="flex flex-col md:flex-row md:items-center">
          <img src="~/assets/img/mango_bg.png" class="w-1/2" alt="Ripe mangoes" srcset="">
          <div class="company-descripton">
            <h1 class="text-4xl md:text-6xl font-bold py-6">Who we are</h1>
            <p class="inline-block my-4">
            We are an international exporter of premium-quality fruits and vegetables, committed to nourishing the world with the best of nature's bounty. Founded on the principles of health, freshness, and sustainability, we serve as a vital link between farmers' fields and global tables.
              </p>
              <p>
                But we're not just about delivering produce; we're about building relationships and fostering a global community. We work closely with farmers, supporting sustainable farming practices and fair trade. We believe in the power of fresh produce to connect people, and we're driven to make that connection possible, one fruit and one vegetable at a time.
              </p>
              <a href="#best-products" class="inline-block text-center text-orange-500 w-full md:w-1/2 my-8 px-20 py-4 border border-orange-500">View Our Catalog</a>
          </div>
        </div>
      </div>
    </div>
    <div id="best-products" class=" w-auto bg-white mt-4  p-10 rounded- shadow-inherit ">
      <div>
        <h1 class=" font-bold text-3xl text-black">Browse our Best Selling <span class=" text-orange-600">Products</span>
        </h1>
      </div>
      <div class=" flex shrink-0 flex-col md:flex-row p-5 gap-7 ">
        <div class=" block rounded overflow-hidden shadow-slate-100 ">
          <img src="~/assets/img/peas.jpeg" class=" md:static">
          <div class=" text-sm text-start font-light  items-center bg-slate-50 p-5">
            <p class=" flex py-2 tfont"><span class=" text-orange-600 font-semibold  pr-2">Title:</span> Peas Straight
              from the Farm</p>
            <p class=" block"><span class="text-orange-600 font-medium ">Descprtion:</span> Fresh, flavorful peas
              delivered straight to you.</p>
          </div>
        </div>
        <div class=" block rounded overflow-hiddenshadow-slate-100">
          <img src="~/assets/img/fruits.jpg" class="  md:static">
          <div class=" text-sm text-start font-light items-center bg-slate-50 p-5">
            <p class=" flex py-2 text-sm"><span class=" text-orange-600 font-semibold pr-2 ">Title:</span>Juicy and
              Nutrient-Packed Fruits</p>
            <p class=" block"><span class="text-orange-600 font-medium ">Descprtion:</span> Juicy, nutrient-packed
              fruits for a healthy lifestyle.</p>
          </div>
        </div>
        <div class=" inline-block  rounded overflow-hidden shadow-slate-100">
          <img src="~/assets/img/news_french_beans-610x406.jpg" class=" md:static">
          <div class=" text-sm text-start font-light items-center bg-slate-50 p-5">
            <p class=" flex py-2"><span class=" text-orange-600 font-semibold pr-2">Title:</span>Farm-to-Table French
              Beans</p>
            <p class=" block "><span class="text-orange-600 font-medium ">Descprtion:</span> Crisp, tender French beans
              for delightful meals.</p>
          </div>
        </div>
      </div>
    </div>
    <!--About us-->
    <div class="  flex flex-col md:flex-row p-10 bg-gradient-to-r from-lime-900 to-lime-700">
      <div class=" w-full md:w-1/2 font-semibold mt-20">
        <h2 class=" text-white font-bold text-5xl">Why Customers<span class="  text-orange-600"> Love</span> Us.</h2>
        <p class=" text-sm text-white font-light leading-normal my-4 ">Discover why customers love us! Enjoy the
          freshest, locally sourced produce delivered to your doorstep. Choose from a wide variety of organic options. Shop online and taste
          the truly farm-fresh difference today!</p>
      </div>
      <div class=" relative block my-4">
        <div class=" w-full md:w-[550px] rounded-md overflow-hidden">
          <img src="~/assets/img/choosing_pic.jpeg" alt="why choose use" class=" static">
        </div>
      </div>
    </div>
    <!--Contact us-->
    <div class=" w-full mt-16">
      <footer class="  bg-gradient-to-r from-orange-700 to-orange-600 text-white  p-10">
        <div class="text-sm flex flex-col md:flex-row justify-around">
          <div class="w-full md:w-1/4 inline-block">
            <h1 class=" text-xl font-semibold">Havilah Pro Limited</h1>
            <p class=" py-2 leading-relaxed font-light text-sm text-justify">We are an Export Company that deals with
              fresh fruits and vegetables
              based in Nairobi Kenya.<br><br>P.O Box 3516-00100 Nairobi, Kenya.
            </p>
          </div>
          <div class=" inline-block cursor-pointer py-5 md:py-0">
            <h3 class=" text-base font-medium">Reach us Out on:</h3>
            <NuxtLink class=" flex items-center font-light gap-2 py-2">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5"><path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z"/></svg>
              Instagram
            </NuxtLink>
            <NuxtLink class=" flex items-center font-light gap-2 py-2">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5"><path d="M 7.5 1 C 3.914063 1 1 3.914063 1 7.5 C 1 8.796875 1.417969 9.984375 2.070313 11 L 0.953125 14.121094 L 4.429688 13.140625 C 5.351563 13.644531 6.375 14 7.5 14 C 11.085938 14 14 11.085938 14 7.5 C 14 3.914063 11.085938 1 7.5 1 Z M 7.5 2 C 10.542969 2 13 4.457031 13 7.5 C 13 10.542969 10.542969 13 7.5 13 C 6.457031 13 5.492188 12.707031 4.65625 12.203125 L 4.472656 12.089844 L 2.546875 12.628906 L 3.171875 10.894531 L 3.019531 10.683594 C 2.378906 9.78125 2 8.6875 2 7.5 C 2 4.457031 4.457031 2 7.5 2 Z M 5.0625 4 C 4.949219 4 4.761719 4.046875 4.601563 4.234375 C 4.445313 4.417969 4 4.867188 4 5.78125 C 4 6.691406 4.617188 7.574219 4.703125 7.699219 C 4.789063 7.824219 5.917969 9.695313 7.644531 10.5 C 8.054688 10.691406 8.375 10.804688 8.625 10.890625 C 9.039063 11.03125 9.414063 11.011719 9.710938 10.964844 C 10.042969 10.910156 10.730469 10.515625 10.875 10.082031 C 11.015625 9.648438 11.019531 9.277344 10.972656 9.199219 C 10.933594 9.121094 10.816406 9.074219 10.644531 8.984375 C 10.472656 8.890625 9.625 8.441406 9.46875 8.382813 C 9.3125 8.316406 9.195313 8.289063 9.078125 8.472656 C 8.964844 8.660156 8.636719 9.078125 8.535156 9.199219 C 8.433594 9.324219 8.335938 9.339844 8.164063 9.246094 C 7.988281 9.152344 7.433594 8.957031 6.777344 8.324219 C 6.265625 7.832031 5.917969 7.226563 5.820313 7.039063 C 5.71875 6.851563 5.808594 6.753906 5.894531 6.664063 C 5.972656 6.578125 6.066406 6.445313 6.152344 6.335938 C 6.238281 6.230469 6.265625 6.148438 6.324219 6.027344 C 6.382813 5.902344 6.355469 5.792969 6.3125 5.703125 C 6.265625 5.609375 5.921875 4.695313 5.78125 4.324219 C 5.640625 3.964844 5.496094 4.011719 5.390625 4.007813 C 5.292969 4 5.175781 4 5.0625 4 Z"/></svg>
                Message Us</NuxtLink>
            <NuxtLink class=" flex items-center font-light gap-2 py-2">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5"><path d="M 7.5 1 C 3.9160714 1 1 3.9160714 1 7.5 C 1 11.083929 3.9160714 14 7.5 14 C 11.083929 14 14 11.083929 14 7.5 C 14 3.9160714 11.083929 1 7.5 1 z M 7.5 2 C 10.543488 2 13 4.4565116 13 7.5 C 13 10.266333 10.967571 12.541024 8.3125 12.933594 L 8.3125 9.0898438 L 9.8652344 9.0898438 L 10.109375 7.5136719 L 8.3125 7.5136719 L 8.3125 6.6503906 C 8.3125 5.9953906 8.5256719 5.4140625 9.1386719 5.4140625 L 10.123047 5.4140625 L 10.123047 4.0371094 C 9.9500469 4.0141094 9.5845781 3.9628906 8.8925781 3.9628906 C 7.4485781 3.9628906 6.6015625 4.7258906 6.6015625 6.4628906 L 6.6015625 7.5117188 L 5.1171875 7.5117188 L 5.1171875 9.0898438 L 6.6035156 9.0898438 L 6.6035156 12.919922 C 3.9897868 12.492118 2 10.237066 2 7.5 C 2 4.4565116 4.4565116 2 7.5 2 z"/></svg>
              Facebook
            </NuxtLink>
          </div>
          <div class="w-full  md:w-1/4 inline-block py-5  md:py-0">
            <h3 class=" text-base font-medium">Customer Care:</h3>
            <p class="  font-light py-2">Our Customer service team is available to help during the following hours:</p>
            <p class=" flex text-center gap-x-5 py-2 font-light">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Monday-Friday : 8am to 5pm</p>
            <p class=" flex text-center gap-x-5 py-2 font-light">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Saturday : 8am to 1pm</p>
          </div>
        </div>
      </footer>
    </div>
  </section>
</template>
<script setup>


</script>

<style  scoped></style>