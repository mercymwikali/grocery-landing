<script setup>
const { isMobile, isDesktop, $device } = useDevice()
  const products = ref([
    {
      name: 'Fine Beans',
      description: 'Savor the delicate, yet distinct flavor of our fine beans. Freshly plucked and meticulously checked for quality, these slender and tender beans hold a crisp texture and a vibrant green hue. They make a versatile addition to any dish, bringing a pop of color and a dash of wholesome nutrients. Whether you choose to steam them, sauté, or enjoy them in a salad, our fine beans are guaranteed to elevate your culinary experience.',
      image: 'https://res.cloudinary.com/dzarpc5my/image/upload/v1686841956/fine-beans_mvjryp.png',
    },
    {
      name: 'Snow Peas',
      description: 'Fresh, green, and bursting with a sweet earthy flavor, our peas are a vibrant addition to any plate. Handpicked for their plumpness and bright color, these peas serve as a testament to the rich, fertile soils from which they are harvested. A great source of vitamins and minerals, they are as nutritious as they are delicious',
      image: 'https://res.cloudinary.com/dzarpc5my/image/upload/v1686841954/snow-peas_xd6hvv.png'
    },
    {
      name: 'Sugar Snap Peas',
      description: 'Experience the sweet crunch of our freshly harvested sugar snap peas. Perfectly plump with bright green pods, these peas are known for their delightful sweet flavor and crisp texture. Enjoy them raw, lightly steamed, or stir-fried for a nutritious addition to your meals. Their edible pods are not only tasty but also packed with a bounty of vitamins and fiber, making our sugar snap peas a delicious and healthy choice.',
      image: 'https://res.cloudinary.com/dzarpc5my/image/upload/v1686841954/snow-peas_xd6hvv.png',
    },
    {
      name: 'Baby Corn',
      description: 'Our baby corn is a testament to our commitment to quality and freshness. Picked young and tender, these petite ears are a versatile ingredient beloved in numerous cuisines around the world. Enjoy their delicate sweetness and satisfying crunch in stir-fries, salads, or as a nutritious snack.',
      image: 'https://res.cloudinary.com/dzarpc5my/image/upload/v1686841953/baby-corn_jtinnm.png'
    },
    {
      name: 'Avocado',
      description: 'Enjoy the creamy goodness of our rich and buttery avocados, a true superfood. We harvest our avocados at the optimal moment to ensure their smooth texture and subtly nutty flavor. Perfect in salads, on toast, or as guacamole, our avocados are a deliciously wholesome choice for your table.',
      image: 'https://res.cloudinary.com/dzarpc5my/image/upload/v1686841949/avocado-new_swya7u.png',
    },
    {
      name: 'Mangoes',
      description: 'Delve into a world of tropical delight with our sun-kissed mangoes, harvested at the perfect moment of ripeness to ensure a succulent and sweet experience. Each mango promises a refreshing taste that captures the essence of warm, sunny climates, a joy to eat on their own or used in a variety of culinary creations.', 
      image: 'https://res.cloudinary.com/dzarpc5my/image/upload/v1686841954/mangoes_jtl39w.png'
    },
    {
      name: 'Broccoli',
      description: 'We take pride in our firm, deep green broccoli, harvested at the peak of freshness to ensure its unique flavor and nutritional value. The florets are tightly packed and abundant, signifying their top-grade quality. Each stalk of our broccoli is a powerhouse of nutrients, ready to make your meals healthier and tastier.', 
      image: 'https://res.cloudinary.com/dzarpc5my/image/upload/v1686841951/broccoli_qgyxu5.png',
    },
    {
      name: 'Baby Carrots',
      description: 'Crunch into health with our sweet and tender baby carrots. These brightly colored delights are harvested young, preserving their natural sweetness and making them a favorite among kids and adults alike. Snack on them raw, toss them in salads, or roast them for a healthy and tasty treat.',
      image: 'https://res.cloudinary.com/dzarpc5my/image/upload/v1686841951/baby-carrot_llwlqr.png'
    }
]);
  console.log('are we on desktop', isDesktop);  

</script>
<template>
  <section class="overflow-hidden bg-gradient-to-r from-lime-950 to-lime-700">
    <nav class="flex absolute p-6 md:px-16 top-0 z-10 items-center justify-items-stretch text-white cursor-pointer">
        <!-- <NuxtLink to="/" class="text-3xl font-semibold pr-40"><span class=" text-orange-600 ">H</span>AVILAH</NuxtLink> -->
        <NuxtLink to="/">
          <img src="https://res.cloudinary.com/dzarpc5my/image/upload/v1686841952/logo_fwck24.png" class="w-1/2 filter sepia" />
        </NuxtLink>
        <ul class="hidden w-full md:flex md:gap-8  hover:border-collapse" v-if="!isMobile">
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
    <div class="flex items-center w-full p-4 md:px-16 h-screen relative">
      <!--Hero section-->
      <div class="flex flex-col md:flex-row items-center justify-center">
        <div class="w-full md:w-1/2 font-semibold z-10">
          <h1 class="md:text-[4.25rem] md:leading-[4.5rem] text-[2.25rem] font-bold text-white leading-[2.5rem]">
            Leading <span class="text-orange-600">Exporter</span>,
            Fruits and Vegeta<span class="text-orange-600">bles</span>
          </h1>
          <div class=" font-normal flex flex-col gap-4 text-white py-5">
            <p class=" font-light leading-normal">
              We are fresh produce farmers based in Nairobi, Kenya. Our company specializes in exporting a wide range of fresh fruits and vegetables to international markets. With a well-established logistics infrastructure, we have the capability to efficiently deliver our products to customers worldwide. 
            </p>
            <p>
              We offer a diverse array of fruits and vegetables Each product is carefully inspected, handpicked, and packaged to meet the highest standards
            </p>
          </div>
          <div class="flex md:gap-2 items-center my-4" :class="{'flex-col gap-10': isMobile}">
            <a class="flex-1 btn text-center" href="https://wa.me/254723542737?text=Thank%20you%20for%20contacting%20us.%20We are your number one exporter of fine beans, sugar snap, snow peas and Avocado. Feel free to leave a message, a representative will reach out to you shortly." target="_blank" rel="noopener noreferrer">Order Now</a>
            <a class="flex-1 px-20 py-4 text-orange-600 underline underline-offset-4" href="#who-we-are">Who We Are</a>
          </div>
        </div>
        <div class="md:block md:w-1/2 pt-10" :class="{'absolute top-40 right-2 w-[400px] opacity-50': isMobile}">
          <img src="https://res.cloudinary.com/dzarpc5my/image/upload/v1686841725/hero-image_lepcyi.png" alt="Avocado" srcset="" class="w-full h-full">
        </div>
      </div>
    </div>

    <!--Who we are-->
    <div id="who-we-are" class="min-h-screen md:h-screen flex items-center py-10 text-gray-200 md:px-[4rem]">
     <div class="w-full p-4 md:w-4/5">
      <h1 class="text-[54px] md:my-10 md:text-[128px] font-black text-gray-400 opacity-20" style="-webkit-text-stroke: 2px #ececec">Who We Are</h1>
        <div class="md:border md:border-gray-500 relative md:p-[4rem]">
          <div class="company-descripton w-full md:w-3/4">
            <p class="inline-block my-4">
              Havilah pro limited is a leading export company specializing in the distribution of fresh produce fruits and vegetables to international markets. With a commitment to quality, reliability, and customer satisfaction, we have established ourselves as a trusted source for premium agricultural products. 
            </p>
            <p>With a well-established logistics infrastructure, we have the capability to efficiently deliver our products to customers worldwide. Our team is well-versed in export regulations, documentation, and shipping procedures, enabling us to handle the complexities of international trade seamlessly. Whether you're a retailer, distributor, or food service provider, we are equipped to meet your specific requirements and deliver on time.</p>
          </div>
          <a href="#best-products" :class="{'my-10': isMobile}" class="w-full md:w-1/3 inline-block md:absolute md:top-[50%] md:-right-40 text-center text-orange-500 px-20 py-4 border border-orange-500">View Our Catalog</a>
        </div>
      </div>
    </div>

    <!-- Products -->
    <div class="products py-10 min-h-screen md:px-[4rem]" id="best-products">
      <div class="p-4">
        <h1 class="text-[54px] md:my-10 md:text-[128px] font-black text-gray-400 opacity-20" style="-webkit-text-stroke: 2px #ececec">Top Products</h1>
        <div class="w-full md:w-3/4 products-list grid gap-10 md:grid-cols-3 text-gray-200">
          <div :class="{'border border-orange-600': index % 2 == 0}" class="hover:shadow-xl transition-shadow cursor-pointer product-item border text-center border-gray-500 p-4" v-for="(product, index) of products">
            <img class="h-40 inline-block text-center" :src="product.image" :alt="product.name" srcset="">
            <div class="content text-left">
              <h3 class="font-semibold text-xl my-2">{{ product.name }}</h3>
              <p class="text-sm">{{ product.description }}</p>
            </div>
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
    <div class="w-full">
      <footer class="bg-gradient-to-r from-orange-700 to-orange-600 text-white p-6 md:px-16">
        <div class="text-sm flex flex-col md:flex-row md:gap-48">
          <div class="w-full md:w-1/4 inline-block">
            <img src="https://res.cloudinary.com/dzarpc5my/image/upload/v1686841952/logo_fwck24.png" class="w-1/2 mb-2" alt="Havilah Pro" srcset="">
            <div class="leading-relaxed font-light text-sm text-justify">
              <p class="mb-4">Leading Fruits and Vegetable exporter in Nairobi, Kenya</p>
              <p class="py-1">P.O Box 3516-00100 Nairobi, Kenya.</p>
              <p class="py-1">Tel: (+254) 723 542 737</p>
              <p class="py-1">Email: havilahprolimited@gmail.com</p>
              <p class="py-1">Copyright &copy;  {{ new Date(Date.now()).getFullYear() }}</p>
            </div>
          </div>
          <div class=" inline-block cursor-pointer py-5 md:py-0">
            <h3 class="my-4 font-semibold text-lg">Our Social Media</h3>
            <p>Our Customer Service is ready to help your at any time.</p>
            <NuxtLink to="/" class=" flex items-center font-light gap-2 py-2">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5"><path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z"/></svg>
              Instagram
            </NuxtLink>
            <NuxtLink to="/" class=" flex items-center font-light gap-2 py-2">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5"><path d="M 7.5 1 C 3.914063 1 1 3.914063 1 7.5 C 1 8.796875 1.417969 9.984375 2.070313 11 L 0.953125 14.121094 L 4.429688 13.140625 C 5.351563 13.644531 6.375 14 7.5 14 C 11.085938 14 14 11.085938 14 7.5 C 14 3.914063 11.085938 1 7.5 1 Z M 7.5 2 C 10.542969 2 13 4.457031 13 7.5 C 13 10.542969 10.542969 13 7.5 13 C 6.457031 13 5.492188 12.707031 4.65625 12.203125 L 4.472656 12.089844 L 2.546875 12.628906 L 3.171875 10.894531 L 3.019531 10.683594 C 2.378906 9.78125 2 8.6875 2 7.5 C 2 4.457031 4.457031 2 7.5 2 Z M 5.0625 4 C 4.949219 4 4.761719 4.046875 4.601563 4.234375 C 4.445313 4.417969 4 4.867188 4 5.78125 C 4 6.691406 4.617188 7.574219 4.703125 7.699219 C 4.789063 7.824219 5.917969 9.695313 7.644531 10.5 C 8.054688 10.691406 8.375 10.804688 8.625 10.890625 C 9.039063 11.03125 9.414063 11.011719 9.710938 10.964844 C 10.042969 10.910156 10.730469 10.515625 10.875 10.082031 C 11.015625 9.648438 11.019531 9.277344 10.972656 9.199219 C 10.933594 9.121094 10.816406 9.074219 10.644531 8.984375 C 10.472656 8.890625 9.625 8.441406 9.46875 8.382813 C 9.3125 8.316406 9.195313 8.289063 9.078125 8.472656 C 8.964844 8.660156 8.636719 9.078125 8.535156 9.199219 C 8.433594 9.324219 8.335938 9.339844 8.164063 9.246094 C 7.988281 9.152344 7.433594 8.957031 6.777344 8.324219 C 6.265625 7.832031 5.917969 7.226563 5.820313 7.039063 C 5.71875 6.851563 5.808594 6.753906 5.894531 6.664063 C 5.972656 6.578125 6.066406 6.445313 6.152344 6.335938 C 6.238281 6.230469 6.265625 6.148438 6.324219 6.027344 C 6.382813 5.902344 6.355469 5.792969 6.3125 5.703125 C 6.265625 5.609375 5.921875 4.695313 5.78125 4.324219 C 5.640625 3.964844 5.496094 4.011719 5.390625 4.007813 C 5.292969 4 5.175781 4 5.0625 4 Z"/></svg>
                Message Us</NuxtLink>
            <NuxtLink to="/" class=" flex items-center font-light gap-2 py-2">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5"><path d="M 7.5 1 C 3.9160714 1 1 3.9160714 1 7.5 C 1 11.083929 3.9160714 14 7.5 14 C 11.083929 14 14 11.083929 14 7.5 C 14 3.9160714 11.083929 1 7.5 1 z M 7.5 2 C 10.543488 2 13 4.4565116 13 7.5 C 13 10.266333 10.967571 12.541024 8.3125 12.933594 L 8.3125 9.0898438 L 9.8652344 9.0898438 L 10.109375 7.5136719 L 8.3125 7.5136719 L 8.3125 6.6503906 C 8.3125 5.9953906 8.5256719 5.4140625 9.1386719 5.4140625 L 10.123047 5.4140625 L 10.123047 4.0371094 C 9.9500469 4.0141094 9.5845781 3.9628906 8.8925781 3.9628906 C 7.4485781 3.9628906 6.6015625 4.7258906 6.6015625 6.4628906 L 6.6015625 7.5117188 L 5.1171875 7.5117188 L 5.1171875 9.0898438 L 6.6035156 9.0898438 L 6.6035156 12.919922 C 3.9897868 12.492118 2 10.237066 2 7.5 C 2 4.4565116 4.4565116 2 7.5 2 z"/></svg>
              Facebook
            </NuxtLink>
            <p class=" flex text-center gap-2 py-2 font-light">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Monday-Friday : 8am to 8pm</p>
            <p class=" flex text-center gap-2 py-2 font-light">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Saturday : 8am to 8pm</p>
          </div> 
        </div>
      </footer>
    </div>
  </section>
</template>

<style  scoped></style>