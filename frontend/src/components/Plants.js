import React from 'react';
import { motion } from 'framer-motion';

function Plants() {
    return (
        <div className="events">
            <h1 className="title">Plants</h1>
            <div className="grid-container2">
                <motion.div initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.5} }} className='plant-container'>
                    <img src="https://i.postimg.cc/66GzQ2vn/ewcece.png" alt='image'></img>
                    <h1>Amaryllis</h1>
                    <p>Amaryllis is the only genus in the subtribe Amaryllidinae. It is a small genus of flowering bulbs, with two species. The better known of the two, Amaryllis belladonna, is a native of the Western Cape region of South Africa.</p>
                </motion.div>  

                <motion.div initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.5} }} className='plant-container'>
                    <img src="https://i.postimg.cc/bvsVH6sF/3ggqnofinf.png" alt='image'></img>
                    <h1>Hydrangea</h1>
                    <p>Commonly named the hortensia, is a genus of over 75 species of flowering plants native to Asia and the Americas. By far the greatest species diversity is in eastern Asia, notably China, Korea, and Japan.</p>
                </motion.div> 

                <motion.div initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.5} }} className='plant-container'>
                    <img src="https://i.postimg.cc/4xbXRxPT/efwfweef.png" alt='image'></img>
                    <h1>Orchid</h1>
                    <p>Orchids are plants that belong to the family Orchidaceae, a diverse and widespread group of flowering plants with blooms that are often colourful and fragrant. Along with the Asteraceae, they are one of the two largest families of flowering plants.</p>
                </motion.div>       

                <motion.div initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.5} }} className='plant-container'>
                    <img src="https://i.postimg.cc/x1btXX7W/34rjjfoi4fj4.png" alt='image'></img>
                    <h1>Foamflower</h1>
                    <p>Tiarella cordifolia, the heart-leaved foamflower, is a species of flowering plant in the family Saxifragaceae. The specific name cordifolia means "with heart-shaped leaves", a characteristic shared by all taxa of Tiarella in eastern North America.</p>
                </motion.div>  

                <motion.div initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.5} }} className='plant-container'>
                    <img src="https://i.postimg.cc/t4HBwh22/jhweifhewf.png" alt='image'></img>
                    <h1>Monstera</h1>
                    <p>The Swiss cheese plant or split-leaf philodendron is a species of flowering plant native to tropical forests of southern Mexico, south to Panama. It has been introduced to many tropical areas, and has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands.</p>
                </motion.div>  

                <motion.div initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.5} }} className='plant-container'>
                    <img src="https://i.postimg.cc/Z531ybDD/niofenoef.png" alt='image'></img>
                    <h1>Purple Lilac</h1>
                    <p>Syringa vulgaris, the lilac or common lilac, is a species of flowering plant in the olive family Oleaceae, native to the Balkan Peninsula, where it grows on rocky hills.</p>
                </motion.div>  

                <motion.div initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.5} }} className='plant-container'>
                    <img src="https://i.postimg.cc/C1PF6M0s/mfekepww.png" alt='image'></img>
                    <h1>Aloe Vera</h1>
                    <p>Aloe is a genus containing over 650 species of flowering succulent plants. The most widely known species is Aloe vera, or "true aloe". It is called this because it is cultivated as the standard source for assorted pharmaceutical purposes.</p>
                </motion.div>  

                <motion.div initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.5} }} className='plant-container'>
                    <img src="https://i.postimg.cc/BQyCf2pd/cecewce.png" alt='image'></img>
                    <h1>Philodendron</h1>
                    <p>Philodendron is a large genus of flowering plants in the family Araceae. The genus Philodendron is still poorly known, with many undescribed species.The name derives from the Greek words philo- or "love, affection" and dendron or "tree".</p>
                </motion.div>  

                <motion.div initial={{ y: 15, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.5} }} className='plant-container'>
                    <img src="https://i.postimg.cc/SKGhkdMD/4F34F4.png" alt='image'></img>
                    <h1>Marigold</h1>
                    <p>Tagetes are a genus of the sunflower family, native to North and South America, and vary in size from low edging plants averaging 5-inches high, to as tall as 3-foot high. Blooms range in mostly solid colors of orange, golden yellow, and white, sometimes with decorative darker highlights along petals edge.</p>
                </motion.div>           
            </div>
            
            <hr></hr>

        <div className="intro-footer">
                <div className="info-container">
                    <h1>Location</h1>
                    <p>1842 Jarvisville Road<br></br>
                    Brooklyn, NY 10458-5126</p>    
                </div>
                <div className="info-container">
                    <h1>Hours</h1>
                    <p><span>Mon - Fri</span> : 10am - 6pm</p>
                    <p><span>Sat - Sun</span> : 9am - 8pm</p>    
                </div>
                <div className="info-container">
                    <h1>Contact</h1>
                    <p>718 - 903 - 3998<br></br>
                    ashton@info.com</p>    
                </div>
                <div className="icons">
                    <i className='bx bxl-facebook'></i>
                    <i className='bx bxl-instagram-alt' ></i>
                    <i className='bx bxl-twitter' ></i>
                    <i className='bx bxl-linkedin-square' ></i>
                </div>
            </div>
        </div>
        
        
    )
}

export default Plants;