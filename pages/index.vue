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
            <NuxtLink class=" flex items-center font-light gap-x-5 pt-3"><img
                src="~/assets/img/instagram_924i0usa3u8h.svg" class="  w-[30px]">Instagram</NuxtLink>
            <NuxtLink class=" flex items-center font-light gap-x-5 pt-3"><img
                src="~/assets/img/message_eqvtlwtya476.svg" class=" w-[30px]">Message Us</NuxtLink>
            <NuxtLink class=" flex items-center font-light gap-x-5 pt-3"><img
                src="~/assets/img/facbook_icon.svg" class=" w-[30px]">Facebook</NuxtLink>
          </div>
          <div class="w-full  md:w-1/4 inline-block py-5  md:py-0">
            <h3 class=" text-base font-medium">Customer Care:</h3>
            <p class="  font-light py-2">Our Customer service team is available to help during the following hours:</p>
            <p class=" flex text-center gap-x-5 py-2 font-light"><img src="~/assets/img/clock_upam93jzr9jz.svg"
                class="w-[15px]">Monday-Friday : 8am to 5pm</p>
            <p class=" flex text-center gap-x-5 py-2 font-light"><img src="~/assets/img/clock_upam93jzr9jz.svg"
                class="w-[15px]">Saturday : 8am to 1pm</p>
          </div>
        </div>
      </footer>
    </div>
  </section>
</template>
<script setup>


</script>

<style  scoped></style>