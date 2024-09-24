import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Cut Tree',
      description: `Our tree cutting services are carried out by trained professionals who prioritize safety and precision. 
      Whether it's a hazardous tree threatening your property or an overgrown tree that needs removal, we ensure the process 
      is smooth and efficient. We use state-of-the-art equipment to make sure trees are cut safely, without damage to nearby 
      structures or landscapes.`,
      image: '/images/1.jpg',
      background: 'bg-blue-100',
    },
    {
      title: 'Trimming Tree',
      description: `Regular trimming is vital to the health of trees. It encourages growth and reduces the risk of dead branches 
      falling. Our expert team can shape your trees to improve their aesthetics, while also making sure they don't interfere 
      with power lines, roofs, or other infrastructure. Proper trimming also promotes sunlight and airflow to surrounding 
      plants, boosting your garden's overall health.`,
      image: '/images/2.jpg',
      background: 'bg-green-100',
    },
    {
      title: 'Clean Area',
      description: `After cutting or trimming trees, it's essential to leave the area clean and safe. Our team provides thorough 
      cleaning services that include the removal of debris, branches, and other waste left behind. We ensure your yard or property 
      is left looking neat, with all traces of the work efficiently cleaned up. This service is perfect for keeping your space 
      tidy and ready for use.`,
      image: '/images/3.jpg',
      background: 'bg-teal-100',
    },
    {
      title: 'Plant Trees',
      description: `Looking to enhance your landscape with new trees? We offer tree planting services to help you choose and 
      plant the right trees for your environment. Whether you're looking for shade, fruit-bearing trees, or just ornamental 
      plants to improve the aesthetic appeal of your property, we can guide you through the process. Let us help you add more 
      greenery to your space and contribute to a healthier environment.`,
      image: '/images/4.jpg',
      background: 'bg-gray-200',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-32 xl:px-48">
        <h2 className="text-4xl font-bold mb-16 text-gray-800">Our Services</h2>
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-2xl ${service.background} ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-2/3 text-left px-4">
                <div className="bg-white rounded-lg shadow-xl p-6 transition-transform duration-300 hover:shadow-2xl">
                  <h3 className="text-3xl font-semibold mb-4 text-blue-900">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
