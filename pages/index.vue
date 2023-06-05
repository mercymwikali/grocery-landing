<template>
  <section>
    <div class=" container relative px-10 py-5 bg-gradient-to-r from-lime-950 to-lime-700 sm:h-screen">
      <nav class="  flex items-center text-white justify-between cursor-pointer">
        <NuxtLink to="/" class="text-3xl font-semibold pr-40"><span class=" text-orange-600 ">H</span>AVILAH</NuxtLink>
        <ul class="hidden w-full md:flex  hover:border-collapse ">
          <li class=" block px-5 text-sm hover:text-orange-500 duration-200 hover:font-bold">
            <NuxtLink to="/" class=" px-2">Home</NuxtLink>
          </li>
          <li class=" block text-sm px-5 hover:text-orange-500 duration-150 hover:font-bold">
            <NuxtLink to="/products" class=" ">Products</NuxtLink>
          </li>
          <li class=" block text-sm px-5 hover:text-orange-500 duration-200 hover:font-bold">
            <NuxtLink>Contact Us</NuxtLink>
          </li>
          <li class=" block text-sm  px-5">
            <img src="~/assets/img/contact.svg" alt="Contact" class=" absolute  w-[18px] ">
            <p class=" px-8">(+254) 748 961 296<span class=" px-4">(+254) 723 542 737</span></p>
          </li>
        </ul>
      </nav>
      <!--Hero section-->
      <div class=" container w-full mt-20">
      <div class=" w-full flex flex-col md:flex-row flex-grow-0 items-center">
        <div class="w-full md:w-1/2  font-semibold leading-normal">
          <h3 class=" text-sm px-2 font-normal text-orange-600">WE ARE A DELICACY</h3>
          <h1 class=" text-5xl font-bold text-white">Organically Grown,
            <br>
            <span class=" text-orange-600">Freshly</span> <span class=" font-light">Delivered.</span>
          </h1>
          <div class=" font-normal text-white text-[15px] py-5">
            <p class=" font-light leading-normal">Embrace the Essence of Nature's Bounty: Indulge in Our Exquisite Selection of Organically Grown, Handpicked
              with Care, and Swiftly Delivered Fresh Fruits and Vegetables</p>
          </div>
          <button class=" btn font-medium my-8">Order Now</button>
        </div>
        <div class="md:w-1/2 items-center">
          <img src="~/assets/img/fruits-7357732_1920-removebg-preview.png" alt="hero"
            class="hidden md:block w-full md:w-auto absolute bottom-0 ">
        </div>
      </div>
    </div>
    </div>
    <!--browse our products-->
    <div class="container bg-white mt-4  p-10 rounded- shadow-inherit ">
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
    <div class=" container flex flex-col md:flex-row p-10 bg-gradient-to-r from-lime-900 to-lime-700">
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
      <footer class=" container bg-gradient-to-r from-orange-700 to-orange-600 text-white  p-10">
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