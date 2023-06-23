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

const testimonials = ref([
  { heading: 'High-Quality Products', description: 'We consistently provide fresh, flavorful, and visually appealing fruits and vegetables. Meeting quality standards and ensuring product freshness...' },
  { heading: 'Reliable and Timely deliveries', description: 'We have a track record of delivering products on time and in good condition. To us timely shipments are crucial to maintaining the freshness and quality of the produce...' },
  { heading: 'Competitive Pricing', description: 'Who offer competitive prices without compromising on product...' },
  { heading: 'Good Communication', description: 'Effective and transparent communication is our key role throughout the export process Prompt responses to inquiries, updates on order status, and clear channels of communication are important to us...' },
  { heading: 'Flexibility and Customization', description: 'We are willing to cater to customers specific requirements, such as packaging, labeling, and product assortment. We Offer flexibility and customization options to enhance customer satisfaction...'},
  { heading: 'Strong Supply Chain Management', description: 'We are efficient in management of the supply chain, which includes sourcing from reliable farmers, proper storage, handling, and logistics, its very crucial to us to ensure the availability and quality of products...'}
])

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
            <p class=" font-light leading-normal text-sm">
              We are fresh produce exporters based in Nairobi, Kenya. Our company specializes in exporting a wide range of fresh fruits and vegetables to international markets. With a well-established logistics infrastructure, we have the capability to efficiently deliver our products to customers worldwide. 
            </p>
            <p class="text-sm">
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
    <div class="py-10 min-h-screen px-4 md:px-[4rem]">
      <h1 class="text-[54px] md:text-[72px] font-black text-gray-400 opacity-20" style="-webkit-text-stroke: 2px #ececec">What our customers say</h1>
      <div class="w-full font-semibold md:w-3/4 my-10">
        <p class="text-white font-light leading-normal">Discover why customers love us! Enjoy the
          freshest, locally sourced produce delivered to your doorstep. Choose from a wide variety of organic options. Shop online and taste
          the truly farm-fresh difference today!</p>
        <p class="text-white font-light leading-normal my-3">
          We know that customer opinions can vary,Thats why we collect and analyze feedback directly from our own customers to understand better their specific experiences and sentiments towards our company.
        </p>
      </div>
      <div class="w-full md:w-4/5 my-4 grid md:grid-cols-3 gap-8 overflow-x-auto text-gray-200">
        <div class="rounded-xl border text-sm border-lime-900 p-4 bg-lime-900" v-for="testimonial of testimonials">
          <h4 class="my-2 text-gray-100 font-semibold">{{ testimonial.heading }}</h4>
          <p class="description">
            {{  testimonial.description }}
          </p>
        </div>
      </div>
    </div>
    <!--Contact us-->
    <div class="w-full">
      <footer class="bg-gradient-to-r from-orange-700 to-orange-600 text-white p-6 md:px-16">
        <div class="text-sm flex flex-col md:gap-48">
          <div class="">
            <h5 class="text-3xl my-4">Our Certifications</h5>
            <p class="w-full md:w-1/2">
              We are certified with Global GAP, Grasp Social Standard, licensed to export by the Horticultural Crops Directorate of Kenya (HCD) and the Kenya Plant Health Inspectorate Service (KEPHIS).
            </p>
            <div class="licenses flex flex-col md:flex-row items-center my-8 gap-6">
              <img src="@/assets/img/global-gap-logo.png" class="w-1/2 md:w-1/3" alt="GLOBAL GAP" srcset="">
              <img src="@/assets/img/kephis-logo.png" class="w-1/2 md:w-1/3" alt="KEPHIS">
              <img src="@/assets/img/afa-logo.png" class="w-1/2 md:w-1/3" alt="AFA" srcset="">
            </div>
          </div>
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
        </div>
      </footer>
    </div>
  </section>
</template>

<style  scoped></style>