import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";
import { useState } from 'react';

const Tours = () => {

  const [toursData, setToursData] = useState(tours);

  const removeTour = (id) => {
    setToursData(toursData.filter(tour => tour.id !== id))
  }

  const restoreTours = () => {
    setToursData(tours);
  }


  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <Tour key={tour.id} 
          {...tour}
          removeTour = {() => removeTour(tour.id)} />;
        })}
      </div>
      <button onClick={restoreTours}>Restore</button>

    </section>
  );
};
export default Tours;
