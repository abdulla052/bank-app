import { clients } from "./../constants/index";
import styles from "../style.js";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img
              src={client.logo}
              alt="client"
              className="sm:w-[150px] w-[100px] 
              transition-[filter] object-contain hover:filter hover:grayscale-100 hover:brightness-200"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
