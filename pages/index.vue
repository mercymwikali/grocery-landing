<template>
    <section>
      <div class=" bg-gradient-to-r from-lime-950 to-lime-700">
      <header class=" text-white text-sm">
        <nav class="  p-2 flex py-6  px-10 items-center">
          <NuxtLink to="/" class="text-3xl font-semibold"><span class=" text-orange-600">H</span>AVILAH</NuxtLink>
          <ul class="hidden w-full md:flex gap-8 md:px-40 text-center items-center">
            <li><NuxtLink to="/" class="">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class=" ">About</NuxtLink></li>
            <li><NuxtLink>Contact Us</NuxtLink></li>
              <li class=" px-5 flex items-center gap-3"><img src="~/assets/img/contact.svg" alt="Contact" class=" w-4 h-4 mr-2">
                <p class=" ">(+254) 748 961 296</p>
                <p>(+254) 723 542 737</p>
            </li>

          </ul>
        </nav>
      </header>     
      <div class="flex px-10  md:gap-28">
        <div class=" my-10 py-11 w-full md:w-[45%]">
          <h3 class=" text-sm px-2 text-orange-600">WE ARE A DELICACY</h3>
          <h1 class=" text-5xl font-bold text-white leading-tight">Organically Grown,
            <br>
            <span class=" text-orange-600">Freshly</span> Delivered.
          </h1>
          <div class=" w-full text-white text-[15px] my-4"><p>Embrace the Essence of Nature's Bounty: Indulge in Our Exquisite Selection of Organically Grown, Handpicked with Care, and Swiftly Delivered Fresh Fruits and Vegetables</p></div>
          <button class=" btn my-8">Order Now</button>
        </div>
        <div>
          <img src="~/assets/img/img-1.png" alt="hero" class=" hidden md:block w-[550px]">
        </div>
      </div>
      </div>
    </section>
</template>

<script setup>


</script>

<style  scoped>

</style>