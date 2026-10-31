import React from 'react'

const About = () => {
  return (
    <div className='bg-cyan-100 h-150'>
   
   <div className='flex flex-wrap gap-70 ml-30 mt-5'>
    <div className='h-50 w-70 rounded-2xl bg-amber-100'> 
      <h2 className='font-bold flex justify-center text-2xl italic'>About Us!</h2>
      <p className='font-bold p-4 italic'>Welcome to Our Store!

We are dedicated to making your online shopping experience simple, convenient, and enjoyable. We believe that great shopping starts with quality products</p>
 </div>


    <div className='h-50 w-70 ml-100 rounded-2xl bg-red-100'>
      <h2 className='font-bold flex justify-center text-2xl italic'>Terms & Condition</h2>
      <p className='font-bold p-4 italic'>By accessing or using our website, you agree to comply with these Terms & Conditions.
All products, prices, and availability are subject to change without prior notice.</p>
    </div>


   </div>
   
   <div className='h-50 w-70 bg-blue-200 rounded-2xl ml-150 -mt-17'>
    <h2 className='font-bold flex justify-center text-2xl italic'>Privacy Policy</h2>
    <p className='font-bold p-4 italic'>Your privacy is important to us. We respect your personal information and are committed to handling it responsibly.</p>
   </div>


   <div className='flex flex-wrap gap-70 ml-30 -mt-10'>


     <div className='h-50 w-70 rounded-2xl bg-green-200'>
      <h2 className='font-bold flex justify-center text-2xl italic'>Return Policy</h2>
      <p className='font-bold p-2 italic'>We want you to be satisfied with your purchase.

If you receive a damaged, defective, incorrect, or eligible unwanted product, you may request a return in accordance with the return conditions.</p>
     </div>



    <div className='h-50 w-70 ml-100 rounded-2xl bg-mauve-400'>
      <h2  className='font-bold flex justify-center text-2xl italic'>Cancelletion Policy</h2>
      <p className='font-bold p-4 italic'>We understand that plans can change.

Customers may request order cancellation before the order is shipped or dispatched. If you want.</p>
    </div>
   </div>
    </div>
  )
}

export default About