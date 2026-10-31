import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css';


const Shopping = () => {
  return (
    <div>

       <div className='flex justify-center ml-2 mt-2 items-center gap-10'>
        <h3 className='mr-100 font-bold'>If you Wnat to more shop so you can choose these option<i className="text-2xl ml-10 inline-flex items-center transform translate-1 ri-arrow-right-line"></i> </h3>
    <Link className='h-7 ml-40 w-15 flex items-center p-2 rounded-2xl bg-cyan-600 text-white' to='/men'>Men's</Link>
      <Link className='h-7 w-22 flex items-center py-2 p-2 rounded-2xl bg-cyan-600 text-white'  to='/women'>Women's</Link>
        <Link className='h-7 w-15 flex items-center py-2 p-2 rounded-2xl bg-cyan-600 text-white' to='/kids'>Kid's</Link>
       </div>
      

      {/* first div */}
       <div className='flex flex-wrap justify-center justify-evenly mt-5'>
        <div className='h-58 w-70 bg-red-300'>
          <img className='h-58 w-70' src="https://images.ctfassets.net/371ugtyffwio/2fs7j2jYhvr1YtI8qMoFxq/4be4f1b7c7a6bac140c08b7014fc99ad/casual.jpg?w=1620&q=85&fm=webp" alt="" />
        </div>


          <div className='h-58 w-70 bg-blue-300'>
            <img className='h-58 w-70' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/770b0b175063973.64ad5bcb459e8.jpg" alt="" />
          </div>


            <div className='h-58 w-70 bg-red-300'>
              <img className='h-58 w-70' src="https://a.storyblok.com/f/165154/1456x816/9cf031a0e3/01_hero_spring-tshirt-design-trends.png/m/" alt="" />
            </div>


              <div className='h-58 w-70 bg-blue-300'>
                <img className='h-58 w-70' src="https://kapdavilla.com/images/product/sub_images/2023/02/rang-yamini-festive-wear-new-collection-banarasi-dupatta-salwar-suit-exporter-3-2023-02-22_17_23_31.jpg" alt="" />
              </div>

                 <div className='h-58 w-70 bg-blue-300'>
                  <img className='h-58 w-70' src="https://www.paulfredrick.com/cdn/shop/files/3_for_199_Essential_Shirts_4.png?v=1772032824&width=1000" alt="" />
                 </div>
       </div>

        {/* second div */}

       <div className='flex flex-wrap justify-center justify-evenly mt-5'>
        <div className='h-58 w-70 bg-red-300'>
          <img className='h-58 w-70' src="https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/01/samsung-galaxy-s23-series-lifestyle-lavender-green-cream-1.jpg" alt="" />
        </div>


          <div className='h-58 w-70 bg-blue-300'>
            <img className='h-58 w-70' src="https://png.pngtree.com/thumb_back/fw800/background/20240911/pngtree-candlelight-illuminating-an-open-book-on-a-rustic-wooden-table-image_16146409.jpg" alt="" />
          </div>


            <div className='h-58 w-70 bg-red-300'>
              <img className='h-58 w-70' src="https://5.imimg.com/data5/SELLER/Default/2023/7/327782134/YB/TD/WD/183422781/kids-frock-green-1000x1000.jpeg" alt="" />
            </div>


              <div className='h-58 w-70 bg-blue-300'>
                <img className='h-58 w-70' src="https://files.easy-orders.net/1722120867818950839.jpg" alt="" />
              </div>

                 <div className='h-58 w-70 bg-blue-300'>
                  <img className='h-58 w-70' src="https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/o/01/1ddd3c0b-b185-44ba-9ee8-ded974e7e824.jpg" alt="" />
                 </div>
       </div>
    </div>
  )
}

export default Shopping