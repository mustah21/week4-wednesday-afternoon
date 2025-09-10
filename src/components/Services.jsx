import { services as servicesData } from '../data'
import Title from './Title'
import Service from './Service'
import { useState } from 'react';


const Services = () => {

  const [services, setServices] = useState(servicesData);

  const removeService = (id) => {
    setServices(services.filter(service => service.id !== id));
  }
  const restoreAllService = () => {
    setServices(servicesData);
  }

  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {services.map((service) => {
          return <Service {...service} key={service.id} 
          removeService = {() => removeService(service.id)}/>
        })}
      </div>

      <button onClick={restoreAllService}>Restore service</button> 

    </section>
  )
}
export default Services